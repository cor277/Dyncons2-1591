/* Schema fragments that several pages build the same way. */

import { BASE_URL, ORG_ID, PERSON_ID, WEBSITE_ID } from "./schema-org";

export interface Crumb {
  name: string;
  /** Path with a leading slash. Omit on the current page — the last crumb
   *  carries no URL, which is what Google expects of a trail's own leaf. */
  path?: string;
}

/**
 * BreadcrumbList for an interior page. The trail must match what the page
 * actually shows or links back to; it is not a place to invent hierarchy.
 */
export function breadcrumbSchema(url: string, crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.path ? { item: `${BASE_URL}${c.path}` } : {}),
    })),
  };
}

export interface ArticleSchemaInput {
  /** Absolute URL of the article. */
  url: string;
  type?: "Article" | "TechArticle" | "BlogPosting";
  headline: string;
  description: string;
  /** ISO 8601. Month precision is honest for pieces dated by month. */
  datePublished: string;
  dateModified?: string;
  inLanguage?: string;
  keywords?: string[];
  /** Section or topic label shown on the page itself. */
  articleSection?: string;
  about?: string[];
}

/**
 * Article node for research pieces and written-up case studies. The author is
 * the Person node declared in schema-org.ts, referenced by @id so the article,
 * the founder and the organisation stay one connected graph.
 */
export function articleSchema(a: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": a.type ?? "Article",
    "@id": `${a.url}#article`,
    headline: a.headline,
    description: a.description,
    url: a.url,
    mainEntityOfPage: { "@type": "WebPage", "@id": a.url },
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    inLanguage: a.inLanguage ?? "en",
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
    image: `${BASE_URL}/og-image.png`,
    ...(a.articleSection ? { articleSection: a.articleSection } : {}),
    ...(a.keywords?.length ? { keywords: a.keywords } : {}),
    ...(a.about?.length ? { about: a.about } : {}),
  };
}

/** FAQPage from the same array the page renders, so the two cannot drift. */
export function faqSchema(url: string, faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
