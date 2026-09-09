/**
 * The answer pages: one question each, answered in the first block.
 *
 * They exist because the questions below are asked in that form — to a search
 * engine or to an assistant — and the site had the material to answer them
 * scattered across case studies and service pages. Each page has to earn its
 * place: if it cannot say something specific that this practice actually knows,
 * it does not get written.
 *
 * This registry is the single source of truth for the index page, the sitemap
 * and /llms.txt.
 */
export interface AnswerPage {
  slug: string;
  /** The question, phrased the way it is asked. Used as the H1. */
  question: string;
  /** Shorter form for the <title>. */
  title: string;
  description: string;
  /** ISO 8601, month precision. */
  updated: string;
  updatedLabel: string;
  topic: string;
  keywords: string[];
}

export const ANSWERS: Record<string, AnswerPage> = {
  "private-ai-vs-sovereign-ai": {
    slug: "private-ai-vs-sovereign-ai",
    question: "What is the difference between private AI and sovereign AI?",
    title: "Private AI vs sovereign AI: the difference that matters",
    description:
      "Private AI is about who can see the data. Sovereign AI is about who can decide, and under which jurisdiction. The three deployment models — fully local, sovereign hybrid, EU private inference — and what each one actually guarantees.",
    updated: "2026-09",
    updatedLabel: "September 2026",
    topic: "Sovereign AI",
    keywords: [
      "private AI",
      "sovereign AI",
      "on-premise AI",
      "EU private inference",
      "data sovereignty",
    ],
  },
  "rag-eu-ai-act": {
    slug: "rag-eu-ai-act",
    question: "Is a RAG system subject to the EU AI Act?",
    title: "Is a RAG system subject to the EU AI Act?",
    description:
      "The AI Act classifies by intended purpose and by role, not by technique. What that means for a retrieval-augmented generation system, which obligations attach to the deployer rather than the model provider, and what the architecture has to be able to show.",
    updated: "2026-09",
    updatedLabel: "September 2026",
    topic: "AI Governance",
    keywords: ["RAG", "EU AI Act", "AI Act classification", "deployer obligations", "Regulation 2024/1689"],
  },
  "rag-audit-trail": {
    slug: "rag-audit-trail",
    question: "How do you build a RAG system with an audit trail?",
    title: "Building a RAG system with a real audit trail",
    description:
      "What has to be recorded for an answer to be reconstructable months later: retrieval set, document versions, prompt, model identity, and the approval. The design decisions that make it possible, and the ones that make it impossible.",
    updated: "2026-09",
    updatedLabel: "September 2026",
    topic: "AI Governance",
    keywords: ["RAG audit trail", "reconstructability", "AI traceability", "audit log", "AI governance"],
  },
  "superseded-documents-rag": {
    slug: "superseded-documents-rag",
    question: "How do you handle superseded regulatory documents in a RAG system?",
    title: "Superseded regulatory documents in a RAG system",
    description:
      "A retrieval system that ranks by similarity will happily return a circular that was revoked two years ago. Version chains, validity intervals and the difference between a document being relevant and being in force.",
    updated: "2026-09",
    updatedLabel: "September 2026",
    topic: "Applied AI",
    keywords: [
      "RAG versioning",
      "document version chain",
      "regulatory documents",
      "retrieval quality",
      "in force",
    ],
  },
  "evaluate-ai-vendor-regulated": {
    slug: "evaluate-ai-vendor-regulated",
    question: "How do you evaluate an AI vendor in a regulated sector?",
    title: "Evaluating an AI vendor in a regulated sector",
    description:
      "The questions that separate a supplier who has thought about accountability from one who has not: data flows, subprocessors, model substitution, audit surface, incident duties and where liability actually stops.",
    updated: "2026-09",
    updatedLabel: "September 2026",
    topic: "AI Governance",
    keywords: [
      "AI vendor assessment",
      "AI due diligence",
      "supplier liability",
      "PLD 2024",
      "regulated industries",
    ],
  },
  "llm-on-premise-hospital": {
    slug: "llm-on-premise-hospital",
    question: "How do you implement an LLM on-premise in a hospital?",
    title: "Implementing an on-premise LLM in a hospital",
    description:
      "Sequence, hardware, data boundary and governance for a hospital deployment: what to start with, what personal data should never reach the index, and which parts of the stack decide whether the project survives its first audit.",
    updated: "2026-09",
    updatedLabel: "September 2026",
    topic: "Healthcare AI",
    keywords: [
      "on-premise LLM hospital",
      "healthcare AI infrastructure",
      "clinical AI governance",
      "GDPR health data",
      "sovereign AI healthcare",
    ],
  },
};

export const ANSWER_LIST = Object.values(ANSWERS);
