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
    { url: `${BASE_URL}/case-studies/sorgenia`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/case-studies/nespresso`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/case-studies/dynamics-crm`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/case-studies/iatp`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/case-studies/logitrack`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/research`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/privacy`, priority: 0.5, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/it/ai-sanitaria-on-premise`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/it/consulenza-ai-farmaceutico`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/it/sovereign-ai-italia`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ai-on-premise-healthcare`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/sovereign-ai-pharma-italia`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/fractional-cto-milano`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/modernizzazione-sistemi-legacy-ai`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/research/on-premise-ai`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/research/rag-vs-fine-tuning`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/research/governing-ai-outputs`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/research/lakehouse-not-enough`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/research/ai-reverse-engineering`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/research/legge-132-2025`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/research/event-sourcing`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/research/rag-enterprise-data`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/it/ai-dati-aziendali`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/it/ai-ingegneria-tecnica`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/it/ai-agenti-finanziari`, priority: 0.7, changeFrequency: "monthly" as const },
  ];
  return staticRoutes.map((route) => ({
    url: route.url,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
