import type { ResearchArticle } from "./research-articles";

/**
 * Registry of the research articles in their Italian version, keyed by the
 * Italian slug (the path under /it/ricerca/).
 *
 * Mirrors app/research-articles.ts: same dates, same schema type, same
 * substance — headline, description and labels in Italian. `enSlug` points to
 * the English piece, `summary` is the text shown on the /it/ricerca index card.
 * The PLD 2024 series is not here: it is read from content/research.
 */
export interface ResearchArticleIt extends ResearchArticle {
  /** Slug of the English counterpart under /research/. */
  enSlug: string;
  /** Card text on the Italian research index. */
  summary: string;
}

export const RESEARCH_ARTICLES_IT: Record<string, ResearchArticleIt> = {
  "rag-dati-aziendali": {
    slug: "rag-dati-aziendali",
    enSlug: "rag-enterprise-data",
    type: "TechArticle",
    headline: "Come implementare RAG sui dati aziendali: la guida onesta",
    description:
      "Discovery sprint, strategia di chunking, valutazione del retrieval e governance: le decisioni di implementazione che stabiliscono se un sistema RAG sui dati aziendali funziona in produzione.",
    summary:
      "I tutorial danno per scontato un corpus pulito. Il tuo non lo è. Discovery sprint, strategia di chunking, valutazione del retrieval e governance: quello che conta davvero quando costruisci RAG sui dati aziendali.",
    datePublished: "2026-04",
    dateLabel: "aprile 2026",
    section: "AI applicata",
    inLanguage: "it",
    keywords: ["RAG", "dati aziendali", "valutazione del retrieval", "chunking", "governance dell'AI"],
  },
  "ai-on-premise": {
    slug: "ai-on-premise",
    enSlug: "on-premise-ai",
    type: "Article",
    headline: "Perché l'AI on-premise non è un passo indietro",
    description:
      "Le ragioni architetturali e di governance per un'infrastruttura AI sovrana e on-premise in sanità, nel farmaceutico e nei settori regolamentati.",
    summary:
      "L'idea che cloud-native voglia dire moderno è sbagliata per i settori regolamentati. Ecco le ragioni architetturali e di governance per un'infrastruttura AI sovrana e on-premise in sanità e nel farmaceutico.",
    datePublished: "2026-03",
    dateLabel: "marzo 2026",
    section: "AI sovrana",
    inLanguage: "it",
    keywords: ["AI on-premise", "AI sovrana", "settori regolamentati", "residenza dei dati"],
  },
  "rag-vs-fine-tuning": {
    slug: "rag-vs-fine-tuning",
    enSlug: "rag-vs-fine-tuning",
    type: "TechArticle",
    headline: "RAG o fine-tuning: guida pragmatica per i team AI aziendali",
    description:
      "Un criterio di scelta tra retrieval-augmented generation e fine-tuning basato su freschezza dei dati, costo di inferenza, latenza e profilo di rischio del caso d'uso.",
    summary:
      "Un criterio decisionale per scegliere tra retrieval-augmented generation e fine-tuning, basato su freschezza dei dati, costo di inferenza, requisiti di latenza e profilo di rischio del tuo caso d'uso.",
    datePublished: "2026-02",
    dateLabel: "febbraio 2026",
    section: "AI applicata",
    inLanguage: "it",
    keywords: ["RAG", "fine-tuning", "AI aziendale", "scelta del modello"],
  },
  "governare-output-ai": {
    slug: "governare-output-ai",
    enSlug: "governing-ai-outputs",
    type: "TechArticle",
    headline: "Governare gli output dell'AI nei settori regolamentati: un playbook tecnico",
    description:
      "Audit logging, validazione degli output, pattern human-in-the-loop e model card, ricavati da deployment in produzione in sanità, nel farmaceutico e nel settore pubblico.",
    summary:
      "I deployment AI in sanità, nel farmaceutico e nella pubblica amministrazione richiedono più dei guardrail. Audit logging, validazione degli output, pattern human-in-the-loop e model card, da deployment in produzione.",
    datePublished: "2026-01",
    dateLabel: "gennaio 2026",
    section: "Governance AI",
    inLanguage: "it",
    keywords: ["governance dell'AI", "audit trail", "human-in-the-loop", "validazione degli output"],
  },
  "lakehouse-non-basta": {
    slug: "lakehouse-non-basta",
    enSlug: "lakehouse-not-enough",
    type: "TechArticle",
    headline:
      "Il lakehouse non basta: perché dati operativi e dati analitici vanno trattati in modo diverso",
    description:
      "I lakehouse eccellono nei carichi analitici ma faticano con le garanzie transazionali e il ritmo di evoluzione degli schemi dei sistemi operativi. Come progettare per entrambi.",
    summary:
      "I lakehouse eccellono nei carichi analitici ma faticano con le garanzie transazionali e il ritmo di evoluzione degli schemi dei sistemi operativi. Come progettare per entrambi senza ricostruire tutto.",
    datePublished: "2025-12",
    dateLabel: "dicembre 2025",
    section: "Data platform",
    inLanguage: "it",
    keywords: ["lakehouse", "architettura dei dati", "Apache Iceberg", "event sourcing"],
  },
  "reverse-engineering-ai": {
    slug: "reverse-engineering-ai",
    enSlug: "ai-reverse-engineering",
    type: "TechArticle",
    headline: "Reverse engineering di piattaforme legacy assistito dall'AI: lezioni dal campo",
    description:
      "RAG e workflow multi-agente per ricostruire la conoscenza funzionale e architetturale di grandi codebase legacy: cosa funziona, cosa no, e cosa richiede davvero la tracciabilità.",
    summary:
      "RAG e workflow multi-agente applicati alla ricostruzione della conoscenza funzionale e architetturale di grandi codebase legacy. Cosa funziona, cosa no, e come sono fatti davvero i requisiti di tracciabilità.",
    datePublished: "2025-11",
    dateLabel: "novembre 2025",
    section: "Modernizzazione legacy",
    inLanguage: "it",
    keywords: ["modernizzazione legacy", "reverse engineering", "RAG", "multi-agente"],
  },
  "legge-132-2025": {
    slug: "legge-132-2025",
    enSlug: "law-132-2025",
    type: "Article",
    headline:
      "Legge 132/2025 e AI in sanità: cosa cambia per ospedali, farmacie e aziende farmaceutiche",
    description:
      "La prima normativa organica italiana sull'intelligenza artificiale e gli obblighi che introduce per le organizzazioni sanitarie e farmaceutiche su governance, decisione clinica e uso secondario dei dati.",
    summary:
      "La Legge n. 132 del 23 settembre 2025 è la prima normativa organica italiana sull'intelligenza artificiale. Per le organizzazioni in ambito sanitario e farmaceutico, introduce obblighi specifici su governance, decisione clinica e uso secondario dei dati.",
    datePublished: "2025-10",
    dateLabel: "ottobre 2025",
    section: "Governance AI",
    inLanguage: "it",
    keywords: ["Legge 132/2025", "AI sanità", "governance", "uso secondario dei dati"],
  },
  "event-sourcing": {
    slug: "event-sourcing",
    enSlug: "event-sourcing",
    type: "TechArticle",
    headline: "Event sourcing nella pratica: lezioni da cinque sistemi in produzione",
    description:
      "Gestione delle proiezioni, evoluzione degli schemi e strategia di snapshot: dove le implementazioni di event sourcing faticano davvero, da cinque sistemi in produzione.",
    summary:
      "L'event sourcing promette auditabilità e interrogazioni temporali. Nella pratica, gestione delle proiezioni, evoluzione degli schemi e strategia di snapshot sono i punti dove la maggior parte delle implementazioni si inceppa.",
    datePublished: "2025-10",
    dateLabel: "ottobre 2025",
    section: "Integrazione enterprise",
    inLanguage: "it",
    keywords: ["event sourcing", "EventStoreDB", "Kafka", "audit log"],
  },
};
