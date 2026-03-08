import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://dynamicsconsulting.it/sitemap.xml",
    host: "https://dynamicsconsulting.it",
  };
}
