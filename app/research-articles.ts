/**
 * Registry of the research articles.
 *
 * One place holds the slug, the publication date and the topic, so the index
 * page, the per-article JSON-LD and the visible byline cannot drift apart.
 * Dates are month-precision because that is how the pieces are dated on the
 * page; a fabricated day would be a worse signal than an honest month.
 */
export interface ResearchArticle {
  slug: string;
  /** Schema type. TechArticle for the implementation pieces. */
  type: "Article" | "TechArticle";
  headline: string;
  description: string;
  /** ISO 8601, month precision. */
  datePublished: string;
  /** Human form shown on the page. */
  dateLabel: string;
  section: string;
  inLanguage?: string;
  keywords?: string[];
}

export const RESEARCH_ARTICLES: Record<string, ResearchArticle> = {
  "rag-enterprise-data": {
    slug: "rag-enterprise-data",
    type: "TechArticle",
    headline: "How to implement RAG on enterprise data: the honest guide",
    description:
      "Discovery sprints, chunking strategy, retrieval evaluation and governance — the implementation decisions that determine whether a RAG system on enterprise data works in production.",
    datePublished: "2026-04",
    dateLabel: "April 2026",
    section: "Applied AI",
    keywords: ["RAG", "enterprise data", "retrieval evaluation", "chunking", "AI governance"],
  },
  "on-premise-ai": {
    slug: "on-premise-ai",
    type: "Article",
    headline: "Why on-premise AI is not a step backward",
    description:
      "The architectural and governance case for sovereign, on-premise AI infrastructure in healthcare, pharma and regulated industries.",
    datePublished: "2026-03",
    dateLabel: "March 2026",
    section: "Sovereign AI",
    keywords: ["on-premise AI", "sovereign AI", "regulated industries", "data residency"],
  },
  "rag-vs-fine-tuning": {
    slug: "rag-vs-fine-tuning",
    type: "TechArticle",
    headline: "RAG vs fine-tuning: a pragmatic guide for enterprise AI teams",
    description:
      "A decision framework for choosing between retrieval-augmented generation and fine-tuning, based on data freshness, inference cost, latency and the risk profile of the use case.",
    datePublished: "2026-02",
    dateLabel: "February 2026",
    section: "Applied AI",
    keywords: ["RAG", "fine-tuning", "enterprise AI", "model selection"],
  },
  "governing-ai-outputs": {
    slug: "governing-ai-outputs",
    type: "TechArticle",
    headline: "Governing AI outputs in regulated industries: a technical playbook",
    description:
      "Audit logging, output validation, human-in-the-loop patterns and model card requirements, taken from production deployments in healthcare, pharma and the public sector.",
    datePublished: "2026-01",
    dateLabel: "January 2026",
    section: "AI Governance",
    keywords: ["AI governance", "audit trail", "human-in-the-loop", "output validation"],
  },
  "lakehouse-not-enough": {
    slug: "lakehouse-not-enough",
    type: "TechArticle",
    headline:
      "The lakehouse is not enough: why operational and analytical data need different treatment",
    description:
      "Lakehouses excel at analytical workloads but struggle with the transactional guarantees and schema evolution pace of operational systems. How to architect for both.",
    datePublished: "2025-12",
    dateLabel: "December 2025",
    section: "Data Platforms",
    keywords: ["lakehouse", "data architecture", "Apache Iceberg", "event sourcing"],
  },
  "ai-reverse-engineering": {
    slug: "ai-reverse-engineering",
    type: "TechArticle",
    headline: "AI-assisted reverse engineering of legacy platforms: lessons from the field",
    description:
      "Applying RAG and multi-agent workflows to reconstruct functional and architectural knowledge from large legacy codebases — what works, what does not, and what traceability actually requires.",
    datePublished: "2025-11",
    dateLabel: "November 2025",
    section: "Legacy Modernisation",
    keywords: ["legacy modernisation", "reverse engineering", "RAG", "multi-agent"],
  },
  "legge-132-2025": {
    slug: "legge-132-2025",
    type: "Article",
    headline:
      "Legge 132/2025 e AI in sanità: cosa cambia per ospedali, farmacie e aziende farmaceutiche",
    description:
      "La prima normativa organica italiana sull'intelligenza artificiale e gli obblighi che introduce per le organizzazioni sanitarie e farmaceutiche su governance, data residency e uso secondario dei dati.",
    datePublished: "2025-10",
    dateLabel: "October 2025",
    section: "AI Governance",
    inLanguage: "it",
    keywords: ["Legge 132/2025", "AI sanità", "governance", "data residency"],
  },
  "event-sourcing": {
    slug: "event-sourcing",
    type: "TechArticle",
    headline: "Event sourcing in practice: lessons from five production systems",
    description:
      "Projection management, schema evolution and snapshot strategy — where event sourcing implementations actually struggle, drawn from five production systems.",
    datePublished: "2025-10",
    dateLabel: "October 2025",
    section: "Enterprise Integration",
    keywords: ["event sourcing", "EventStoreDB", "Kafka", "audit log"],
  },
};
