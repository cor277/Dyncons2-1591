import { MetadataRoute } from "next";

const BASE_URL = "https://www.dynamicsconsulting.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/platform`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/applied-ai`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/data-platforms`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/cloud-kubernetes`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/enterprise-integration`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/microsoft-dynamics`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/automation`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/blockchain`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/case-studies`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/case-studies/humania-care`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/case-studies/federfarma`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/case-studies/dynamics-data`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/research`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
  ];
  return staticRoutes.map((route) => ({
    url: route.url,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
