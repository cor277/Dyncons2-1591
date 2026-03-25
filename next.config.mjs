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

  // Ensure trailing-slash consistency
  trailingSlash: false,
};

export default nextConfig;
