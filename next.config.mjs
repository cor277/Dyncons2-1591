/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict mode for catching issues early
  reactStrictMode: true,

  // Image optimisation — allow external domains if needed in future
  images: {
    remotePatterns: [],
  },

  // Silence the "use client" + server component warning for library code
  experimental: {
    // serverComponentsExternalPackages: [],
  },

  // Ensure trailing-slash consistency
  trailingSlash: false,
};

export default nextConfig;
