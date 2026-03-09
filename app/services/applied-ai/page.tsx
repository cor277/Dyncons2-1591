import type { Metadata } from "next";
import { ServicePageLayout, type Capability } from "@/components/sections/ServicePageLayout";

export const metadata: Metadata = {
  title: "Applied AI & Agentic Workflows | Dynamics Consulting",
  description: "Multi-agent systems, RAG pipelines, Voice AI and AI governance for organisations in regulated industries. GDPR and AI Act compliance by design.",
  keywords: ["agentic AI", "multi-agent systems", "RAG architecture enterprise", "voice AI", "GDPR AI compliance", "AI Act"],
  alternates: { canonical: "https://www.dynamicsconsulting.it/services/applied-ai" },
  openGraph: {
    title: "Applied AI & Agentic Workflows | Dynamics Consulting",
    description: "Multi-agent systems with memory, orchestration and governance. GDPR and AI Act compliance by design.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you design a GDPR-compliant multi-agent system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A GDPR-compliant multi-agent system requires a real-time NLU classifier to identify personal data, selective memory deletion mechanisms, and a self-hosted architecture to keep data within the enterprise perimeter. Nexus MDS Core implements these patterns in production.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between RAG and fine-tuning for enterprise data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RAG (Retrieval-Augmented Generation) lets you query enterprise documents without modifying the base model, with real-time updates and source traceability. Fine-tuning requires labelled datasets, long training cycles and dedicated GPUs. For enterprise data that evolves continuously, RAG is almost always the right choice.",
      },
    },
    {
      "@type": "Question",
      name: "Does Nexus MDS Core support open-source LLMs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nexus MDS Core integrates vLLM and OpenWebUI for inference of open-source models (LLaMA, Mistral, DeepSeek and others) on dedicated GPU. Data never leaves the enterprise perimeter.",
      },
    },
  ],
};

const capabilities: Capability[] = [
  {
    iconName: "Brain",
    name: "Multi-Agent Systems",
    desc: "Layered short/long-term memory, automatic summarisation after 10 interactions to optimise token usage, effectively infinite context window.",
  },
  {
    iconName: "Mic",
    name: "Voice AI Real-time",
    desc: "STT/TTS with intelligent interruption that distinguishes human voice from ambient noise. Target latency under 200ms.",
  },
  {
    iconName: "Search",
    name: "RAG Pipeline",
    desc: "Semantic chunking, vector deduplication, Weaviate cursor-based pagination on datasets exceeding 10,000 documents.",
  },
  {
    iconName: "Shield",
    name: "Privacy-First NLU",
    desc: "Real-time classifier for sensitive data, selective memory deletion on user request, GDPR compliance by design.",
  },
  {
    iconName: "Code",
    name: "AI for Developers",
    desc: "Roslyn + LLM for automatic unit test generation, agents for code documentation, enterprise AI-in-Coding workshops.",
  },
  {
    iconName: "FileSearch",
    name: "AI Document Analysis",
    desc: "Data room analysis, structured extraction from unstructured documents, automated due diligence.",
  },
];

const tech = ["LLM", "Weaviate", "n8n", "vLLM", "Flutter", "Keycloak", "OpenWebUI", "FastAPI", "transformers"];

const faqs = [
  {
    q: "How do you design a GDPR-compliant multi-agent system?",
    a: "A GDPR-compliant multi-agent system requires a real-time NLU classifier to identify personal data, selective memory deletion mechanisms, and a self-hosted architecture to keep data within the enterprise perimeter. Nexus MDS Core implements these patterns in production.",
  },
  {
    q: "What is the difference between RAG and fine-tuning for enterprise data?",
    a: "RAG lets you query enterprise documents without modifying the base model, with real-time updates and source traceability. For enterprise data that evolves continuously, RAG is almost always the right choice.",
  },
  {
    q: "Does Nexus MDS Core support open-source LLMs?",
    a: "Yes. Nexus MDS Core integrates vLLM and OpenWebUI for inference of open-source models (LLaMA, Mistral, DeepSeek and others) on dedicated GPU. Data never leaves the enterprise perimeter.",
  },
];

export default function AppliedAIPage() {
  return (
    <ServicePageLayout
      title="Applied AI & Agentic Workflows"
      intro="We do not promise generic AI. We design multi-agent systems with memory, orchestration and governance."
      tech={tech}
      capabilities={capabilities}
      faqs={faqs}
      faqSchema={faqSchema}
    />
  );
}
