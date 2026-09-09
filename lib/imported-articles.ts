import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

/**
 * Articles written for LinkedIn and imported into this repository by
 * scripts/import-linkedin-articles.mjs.
 *
 * The JSON is the source of truth and is not edited by hand: re-running the
 * importer with --force replaces it. Everything read here is the author's own
 * text — nothing in this module generates, summarises or rewrites content.
 *
 * Server-only: it reads the filesystem at build time. Every page that consumes
 * it is statically generated, so nothing runs at request time.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; level: 2 | 3; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; ordered: boolean; items: string[] };

export interface ImportedArticle {
  slug: string;
  lang: string;
  title: string;
  /** The author's own standfirst, as published. Also the first body block. */
  standfirst: string;
  author: string;
  datePublished: string;
  dateModified: string | null;
  series: string | null;
  source: { platform: string; url: string };
  importedAt: string;
  words: number;
  blocks: Block[];
}

const CONTENT_DIR = join(process.cwd(), "content", "research");

function read(slug: string): ImportedArticle {
  return JSON.parse(readFileSync(join(CONTENT_DIR, `${slug}.json`), "utf8")) as ImportedArticle;
}

/** All imported articles, oldest first — which is also the order of the series. */
export function getImportedArticles(): ImportedArticle[] {
  let files: string[];
  try {
    files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".json"));
  } catch {
    return [];
  }
  return files
    .map((f) => read(f.replace(/\.json$/, "")))
    .sort((a, b) => a.datePublished.localeCompare(b.datePublished));
}

export function getImportedArticle(slug: string): ImportedArticle | null {
  try {
    return read(slug);
  } catch {
    return null;
  }
}

/** ISO date, day precision, for <time> and for schema. */
export function isoDay(value: string | null): string {
  return value ? value.slice(0, 10) : "";
}

export function formatDate(value: string | null, lang: string): string {
  if (!value) return "";
  return new Date(value).toLocaleDateString(lang === "it" ? "it-IT" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Reading time, stated as a range rounded to five minutes at 200 wpm. */
export function readingMinutes(words: number): number {
  return Math.max(1, Math.round(words / 200));
}
