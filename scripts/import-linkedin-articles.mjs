#!/usr/bin/env node
/**
 * Import an article published on LinkedIn into this repository.
 *
 * The point of this script is custody: the articles are Corrado Patierno's own
 * writing, and the primary copy of them should live on dynamicsconsulting.it
 * rather than on a platform that can change its access rules. It moves the text
 * as written — it does not summarise, rewrite or extend it.
 *
 * Usage:
 *   node scripts/import-linkedin-articles.mjs --url <linkedin-url> --slug <slug> \
 *        [--series "Article I · The seven structural shifts"] [--lang it] [--force]
 *
 *   node scripts/import-linkedin-articles.mjs --file saved.html --slug <slug> \
 *        [--url <original-linkedin-url>] ...
 *
 * `--file` accepts a saved .html page, a .md file or a .json file already in the
 * output shape, for the case where the public page is not reachable over HTTP.
 *
 * Output: content/research/<slug>.json, consumed by app/(en)/research/[slug].
 * An existing file is never overwritten without --force.
 *
 * Only public pages are fetched, with a plain GET. Nothing here logs in, works
 * around an authentication wall, or defeats a bot check: if the article is not
 * publicly readable, the script says so and stops.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(ROOT, "content", "research");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i += 1) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      i += 1;
    }
  }
  return args;
}

function fail(message) {
  console.error(`\n  ✖ ${message}\n`);
  process.exit(1);
}

const decodeEntities = (s) =>
  s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, "&");

const stripTags = (html) => decodeEntities(html.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

/** Inline links are kept as markdown so the renderer can restore them. */
function inlineText(html) {
  const withLinks = html.replace(
    /<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,
    (_, href, label) => {
      const text = stripTags(label);
      if (!text) return "";
      return `[${text}](${href.split("?")[0]})`;
    },
  );
  return stripTags(withLinks);
}

/**
 * The author's text lives inside `data-test-id="article-content-blocks"`;
 * everything LinkedIn wraps around it — the menu, the author card, the
 * recommendation rail — sits outside that container. Slicing on the container
 * is far more reliable than guessing from class names, and it is the first
 * thing to check if a future import comes back short.
 *
 * Two quirks of the markup are handled explicitly: body blockquotes do carry a
 * class (so "has a class" cannot mean "is chrome"), and a paragraph preceding a
 * list is not always closed before the list opens, which would otherwise
 * swallow the list items into the paragraph.
 */
function findBody(html) {
  const marker = 'data-test-id="article-content-blocks"';
  const start = html.indexOf(marker);
  if (start === -1) return null;
  const end = html.indexOf("</article>", start);
  const container = html.slice(start, end === -1 ? html.length : end);

  /* Each authored block sits in its own `publishing-text-block` div. Taking
     those, rather than the whole container, leaves behind the "Report this
     article" menu that LinkedIn renders after the text. */
  const chunks = [];
  const re = /data-test-id="publishing-(text|quote|code)-block"/g;
  let m;
  const starts = [];
  while ((m = re.exec(container)) !== null) starts.push(m.index);
  if (!starts.length) return container;
  for (let i = 0; i < starts.length; i += 1) {
    const from = starts[i];
    const to = i + 1 < starts.length ? starts[i + 1] : container.length;
    chunks.push(container.slice(from, to));
  }
  return chunks.join("\n");
}

const BLOCK_RE = /<(p|h2|h3|h4|ul|ol|blockquote)(\s[^>]*)?>/gi;

function extractBlocks(bodyHtml, authorName) {
  const blocks = [];
  BLOCK_RE.lastIndex = 0;
  let m;
  while ((m = BLOCK_RE.exec(bodyHtml)) !== null) {
    const name = m[1].toLowerCase();
    const openEnd = m.index + m[0].length;
    const close = new RegExp(`</${name}>`, "i");
    const rest = bodyHtml.slice(openEnd);
    let inner;
    const closeMatch = close.exec(rest);
    if (name === "p") {
      // A paragraph ends at </p>, or where the next block starts if the
      // markup left it open.
      const nextBlock = /<(?:h2|h3|h4|ul|ol|blockquote|p)(?:\s[^>]*)?>/i.exec(rest);
      const cut = Math.min(
        closeMatch ? closeMatch.index : Infinity,
        nextBlock ? nextBlock.index : Infinity,
      );
      inner = cut === Infinity ? rest : rest.slice(0, cut);
    } else {
      if (!closeMatch) continue;
      inner = rest.slice(0, closeMatch.index);
      BLOCK_RE.lastIndex = openEnd + closeMatch.index;
    }

    if (name === "ul" || name === "ol") {
      const items = [...inner.matchAll(/<li(?:\s[^>]*)?>([\s\S]*?)<\/li>/gi)]
        .map((li) => inlineText(li[1]))
        .filter(Boolean);
      /* The last chunk runs to the end of the container, which catches the
         "Report this article" menu LinkedIn renders after the text. */
      const isUiMenu = items.some((i) => /linkedin\.com\/help|linkedin\.com\/legal/.test(i));
      if (items.length && !isUiMenu) {
        blocks.push({ type: "list", ordered: name === "ol", items });
      }
      continue;
    }

    const text = inlineText(inner);
    if (!text) continue;
    /* LinkedIn renders the author card inside the content container, so the
       byline arrives as a heading. It is not part of the article. */
    if (authorName && text === authorName) continue;
    if (name === "blockquote") blocks.push({ type: "quote", text });
    else if (name === "p") blocks.push({ type: "p", text });
    else blocks.push({ type: "h", level: name === "h4" ? 3 : 2, text });
  }
  return blocks;
}

function extractJsonLd(html) {
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  for (const s of scripts) {
    try {
      const data = JSON.parse(s[1]);
      const nodes = Array.isArray(data) ? data : [data];
      const article = nodes.find((n) => String(n["@type"]).includes("Article"));
      if (article) return article;
    } catch {
      /* a malformed block is not fatal — keep looking */
    }
  }
  return null;
}

function looksLikeAuthWall(html) {
  return (
    /<title>\s*Sign Up \| LinkedIn/i.test(html) ||
    /"authwall"/i.test(html) === true && !/<article/i.test(html)
  );
}

async function loadHtml(args) {
  if (args.file) {
    const raw = readFileSync(args.file, "utf8");
    return { html: raw, from: args.file };
  }
  if (!args.url) fail("give me --url <linkedin url> or --file <saved page>");
  const res = await fetch(args.url, {
    headers: { "user-agent": UA, "accept-language": "it,en;q=0.8" },
    redirect: "follow",
  });
  if (!res.ok) {
    fail(
      `LinkedIn answered ${res.status} for ${args.url}. ` +
        "Save the public page from a browser and re-run with --file.",
    );
  }
  return { html: await res.text(), from: args.url };
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help || (!args.url && !args.file)) {
    console.log(
      [
        "",
        "  import-linkedin-articles — move an article onto this domain",
        "",
        "    --url     public LinkedIn article URL",
        "    --file    saved .html / .md / .json instead of fetching",
        "    --slug    output slug (required)",
        "    --title   full title, where LinkedIn truncated it at 150 characters",
        "    --series  editorial series label, e.g. \"Article I · The seven structural shifts\"",
        "    --lang    it | en   (default: it)",
        "    --force   overwrite an existing file",
        "",
      ].join("\n"),
    );
    process.exit(args.help ? 0 : 1);
  }
  if (!args.slug) fail("--slug is required");

  const outPath = join(OUT_DIR, `${args.slug}.json`);
  if (existsSync(outPath) && !args.force) {
    fail(`${outPath} already exists. Re-run with --force to replace it.`);
  }

  const { html, from } = await loadHtml(args);

  // A pre-normalised JSON hand-off: validate the shape and write it through.
  if (args.file && args.file.endsWith(".json")) {
    const doc = JSON.parse(html);
    if (!doc.title || !Array.isArray(doc.blocks)) fail("JSON needs at least { title, blocks[] }");
    write(outPath, { slug: args.slug, lang: args.lang || "it", ...doc });
    return;
  }

  // Markdown hand-off: headings and paragraphs, nothing cleverer.
  if (args.file && /\.mde?$|\.markdown$|\.md$/.test(args.file)) {
    const blocks = [];
    for (const chunk of html.split(/\n{2,}/)) {
      const t = chunk.trim();
      if (!t) continue;
      const h = /^(#{2,4})\s+(.*)$/.exec(t);
      if (h) blocks.push({ type: "h", level: Math.min(h[1].length + 1, 4), text: h[2] });
      else if (/^[-*]\s+/m.test(t))
        blocks.push({
          type: "list",
          ordered: false,
          items: t.split(/\n/).map((l) => l.replace(/^[-*]\s+/, "").trim()).filter(Boolean),
        });
      else blocks.push({ type: "p", text: t.replace(/\s+/g, " ") });
    }
    write(outPath, {
      slug: args.slug,
      lang: args.lang || "it",
      title: args.title || args.slug,
      blocks,
      source: args.url ? { platform: "LinkedIn", url: args.url } : undefined,
    });
    return;
  }

  if (looksLikeAuthWall(html)) {
    fail(
      "that page is behind LinkedIn's sign-in wall, so it cannot be imported automatically. " +
        "Open it while signed in, save the page, and re-run with --file.",
    );
  }

  const ld = extractJsonLd(html);
  const articleMatch = /<article\b[\s\S]*?<\/article>/i.exec(html);
  if (!articleMatch) fail("no <article> element found — the page markup is not what we expect.");

  const authorName = ld?.author?.name || "Corrado Patierno";
  const body = findBody(html);
  if (!body) {
    fail(
      'could not find the article body container (data-test-id="article-content-blocks"). ' +
        "LinkedIn's markup has changed: check the page and update findBody().",
    );
  }
  const blocks = extractBlocks(body, authorName);
  const words = blocks
    .flatMap((b) => (b.type === "list" ? b.items : [b.text]))
    .join(" ")
    .split(/\s+/).length;

  if (words < 300) {
    fail(
      `only ${words} words of body were recovered, which usually means a preview rather than the ` +
        "full article. Save the page from a browser and re-run with --file.",
    );
  }

  const doc = {
    slug: args.slug,
    lang: args.lang || "it",
    /* LinkedIn truncates long titles at 150 characters everywhere it exposes
       them — h1, <title> and JSON-LD alike — so the full title of a long-titled
       piece is simply not on the public page. --title supplies it rather than
       letting the script guess the missing words. */
    title:
      args.title || ld?.name || stripTags(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i.exec(articleMatch[0])?.[1] || ""),
    /* LinkedIn puts the author's own standfirst in `headline`. It is their
       words, so it can serve as the description; nothing is generated here. */
    standfirst: ld?.headline || "",
    author: authorName,
    datePublished: ld?.datePublished || null,
    dateModified: ld?.dateModified || null,
    series: args.series || null,
    source: { platform: "LinkedIn", url: (ld?.url || args.url || from).split("?")[0] },
    importedAt: new Date().toISOString().slice(0, 10),
    words,
    blocks,
  };

  if (!doc.title) fail("could not read a title from the page.");
  if (!doc.datePublished) {
    console.warn("  ! no datePublished in the page metadata — set it by hand in the JSON.");
  }

  write(outPath, doc);
}

function write(outPath, doc) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(doc, null, 2)}\n`, "utf8");
  console.log(
    `  ✔ ${doc.title}\n    ${doc.words ?? doc.blocks.length} words → ${outPath.replace(ROOT, ".")}`,
  );
}

main().catch((err) => fail(err?.message || String(err)));
