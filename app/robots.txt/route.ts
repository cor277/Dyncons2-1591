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

const body = `# Content preferences: https://contentsignals.org/
Content-Signal: ${CONTENT_SIGNAL}

User-agent: *
Content-Signal: ${CONTENT_SIGNAL}
Allow: /
Disallow: /api/

Sitemap: ${BASE_URL}/sitemap.xml
Host: ${BASE_URL}
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
