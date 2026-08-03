/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict mode for catching issues early
  reactStrictMode: true,

  // Image optimisation — allow external domains if needed in future
  images: {
    remotePatterns: [],
  },

  // Redirect non-www to www for canonical SEO
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "dynamicsconsulting.it" }],
        destination: "https://www.dynamicsconsulting.it/:path*",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/portfolio/:slug*",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },

  // RFC 8288 Link headers — machine-readable relations, available to clients
  // that read headers without parsing the HTML. Only IANA-registered relation
  // types, and only ones that are actually true of this site.
  async headers() {
    const BASE = "https://www.dynamicsconsulting.it";

    // Next replaces a header key rather than appending it when a more specific
    // rule matches, so these have to be repeated in every rule that sets Link.
    const COMMON = [
      `<${BASE}/privacy>; rel="privacy-policy"`,
      `<${BASE}/about>; rel="author"`,
      `<${BASE}/sitemap.xml>; rel="describedby"; type="application/xml"`,
    ];

    // Pages that genuinely exist in both languages. Anything not listed here has
    // no counterpart, and advertising one would be a lie in a header.
    const pairs = [
      ["/ai-on-premise-healthcare", "/it/ai-sanitaria-on-premise"],
      ["/case-studies/federfarma", "/it/case-studies/federfarma"],
      ["/assessment", "/it/assessment"],
    ];

    const alternates = pairs.flatMap(([en, it]) => [
      {
        source: en,
        headers: [
          {
            key: "Link",
            value: [
              ...COMMON,
              `<${BASE}${en}>; rel="canonical"`,
              `<${BASE}${it}>; rel="alternate"; hreflang="it"`,
              `<${BASE}${en}>; rel="alternate"; hreflang="en"`,
            ].join(", "),
          },
        ],
      },
      {
        source: it,
        headers: [
          {
            key: "Link",
            value: [
              ...COMMON,
              `<${BASE}${it}>; rel="canonical"`,
              `<${BASE}${en}>; rel="alternate"; hreflang="en"`,
              `<${BASE}${it}>; rel="alternate"; hreflang="it"`,
            ].join(", "),
          },
        ],
      },
    ]);

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: COMMON.join(", "),
          },
        ],
      },
      ...alternates,
    ];
  },

  // Ensure trailing-slash consistency
  trailingSlash: false,
};

export default nextConfig;
