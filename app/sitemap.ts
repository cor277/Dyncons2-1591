import { MetadataRoute } from "next";
import { ANSWER_LIST } from "./answers";
import { RESEARCH_ARTICLES } from "./research-articles";
import { getImportedArticles, isoDay } from "@/lib/imported-articles";

const BASE_URL = "https://www.dynamicsconsulting.it";

/**
 * Every entry carries a real `lastmod`.
 *
 * The previous version stamped every URL with the build time, which told a
 * crawler that fifty pages changed every time one of them did — a signal that
 * is worth less than no signal at all. The date below is the date the page's
 * content last changed, and it is updated by hand when the page is edited.
 * Research and answer routes are generated from their registries.
 */
interface Route {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  /** ISO date, YYYY-MM-DD. */
  lastModified: string;
}

const routes: Route[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-09-09" },

  // Platform and methodology
  { path: "/platform", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/cepf", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/calibra", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/cepf/overlaps", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/capabilities", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-08-03" },

  // Advisory
  { path: "/services/governance-advisory", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/it/consulenza-ai-governance-compliance", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/services/fractional-cto", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/fractional-cto-milano", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-08-03" },
  { path: "/assessment", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/it/assessment", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/cra-11-settembre", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-09-06" },

  // Delivery service lines
  { path: "/services/applied-ai", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/services/data-platforms", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/services/cloud-kubernetes", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/services/enterprise-integration", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/services/microsoft-dynamics", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/services/automation", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/services/blockchain", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-09" },

  // Case studies
  { path: "/case-studies", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/case-studies/federfarma", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/it/case-studies/federfarma", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/case-studies/humania-care", priority: 0.7, changeFrequency: "yearly", lastModified: "2026-09-06" },
  { path: "/case-studies/iatp", priority: 0.7, changeFrequency: "yearly", lastModified: "2026-08-03" },
  { path: "/case-studies/logitrack", priority: 0.7, changeFrequency: "yearly", lastModified: "2026-08-03" },
  { path: "/case-studies/dynamics-data", priority: 0.7, changeFrequency: "yearly", lastModified: "2026-08-03" },
  { path: "/case-studies/dynamics-crm", priority: 0.7, changeFrequency: "yearly", lastModified: "2026-08-03" },
  { path: "/case-studies/sorgenia", priority: 0.7, changeFrequency: "yearly", lastModified: "2026-08-03" },
  { path: "/case-studies/nespresso", priority: 0.7, changeFrequency: "yearly", lastModified: "2026-08-03" },

  // Sector and language landing pages
  { path: "/ai-on-premise-healthcare", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-06" },
  { path: "/sovereign-ai-pharma-italia", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-06" },
  { path: "/modernizzazione-sistemi-legacy-ai", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-08-03" },
  { path: "/it", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/it/ai-sanitaria-on-premise", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-06" },
  { path: "/it/consulenza-ai-farmaceutico", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-08-03" },
  { path: "/it/sovereign-ai-italia", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-06" },
  { path: "/it/ai-dati-aziendali", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-06" },
  { path: "/it/ai-ingegneria-tecnica", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-06" },
  { path: "/it/ai-agenti-finanziari", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-06" },

  // Answers, research hubs, company
  { path: "/answers", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/research", priority: 0.7, changeFrequency: "weekly", lastModified: "2026-09-09" },
  { path: "/research/editorial-series", priority: 0.7, changeFrequency: "weekly", lastModified: "2026-09-09" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-08-03" },
  { path: "/tech-sovereignty", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-09" },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly", lastModified: "2026-09-09" },
];

/** Research article slugs come from the registry; all eight were revised on 2026-09-09. */
const researchRoutes: Route[] = Object.values(RESEARCH_ARTICLES).map((a) => ({
  path: `/research/${a.slug}`,
  priority: 0.7,
  changeFrequency: "yearly",
  lastModified: "2026-09-09",
}));

/** The PLD series, imported from LinkedIn: lastmod is the article's own date. */
const importedRoutes: Route[] = getImportedArticles().map((a) => ({
  path: `/research/${a.slug}`,
  priority: 0.7,
  changeFrequency: "yearly",
  lastModified: isoDay(a.dateModified ?? a.datePublished),
}));

const answerRoutes: Route[] = ANSWER_LIST.map((a) => ({
  path: `/answers/${a.slug}`,
  priority: 0.7,
  changeFrequency: "monthly",
  lastModified: "2026-09-09",
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...researchRoutes, ...importedRoutes, ...answerRoutes].map((route) => ({
    url: route.path === "/" ? `${BASE_URL}/` : `${BASE_URL}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
