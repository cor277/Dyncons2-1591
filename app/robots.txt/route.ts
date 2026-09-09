const BASE_URL = "https://www.dynamicsconsulting.it";

/**
 * Served as a route handler rather than the `robots.ts` metadata convention,
 * because MetadataRoute.Robots cannot emit Content-Signal directives.
 *
 * Content Signals — https://contentsignals.org/
 *   search=yes    indexing and linking in search results
 *   ai-input=yes  retrieval and citation by AI assistants at answer time.
 *                 The inbound funnel depends on being quotable, so this is on.
 *   ai-train=no   no use as training data for generative models. The research
 *                 articles and the CEPF material are the product, not corpus.
 */
const CONTENT_SIGNAL = "search=yes, ai-input=yes, ai-train=no";

/**
 * Crawlers that fetch a page in order to answer a question, as opposed to
 * crawlers that fetch it in order to train on it. They are listed explicitly
 * because the inbound funnel now runs through them, and because an explicit
 * group removes any doubt for an operator reading this file.
 *
 * A crawler that matches a named group ignores the `*` group entirely, so each
 * group has to repeat the Content-Signal and the /api/ exclusion.
 *
 * Training-oriented user agents are deliberately absent: they fall through to
 * `*`, where the Content-Signal states ai-train=no. Adding or removing one is
 * an editorial decision, not a technical tidy-up.
 */
const SEARCH_AGENTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot", // ChatGPT Search
  "ChatGPT-User", // ChatGPT fetching a page a user asked about
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "Claude-User",
  "DuckDuckBot",
  "Applebot",
];

const group = (agents: string[]) =>
  `${agents.map((a) => `User-agent: ${a}`).join("\n")}
Content-Signal: ${CONTENT_SIGNAL}
Allow: /
Disallow: /api/
`;

const body = `# Content preferences: https://contentsignals.org/
Content-Signal: ${CONTENT_SIGNAL}

${group(["*"])}
# Search and answer engines — allowed explicitly.
${SEARCH_AGENTS.map((a) => group([a])).join("\n")}
# Curated index for assistants: ${BASE_URL}/llms.txt
Sitemap: ${BASE_URL}/sitemap.xml
Host: ${BASE_URL}
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
