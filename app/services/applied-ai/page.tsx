import type { Metadata } from "next";
import { ServicePageLayout, type Capability } from "@/components/sections/ServicePageLayout";

export const metadata: Metadata = {
  title: "Applied AI & Agentic Workflows | Dynamics Consulting",
  description:
    "Sistemi multi-agente, RAG pipeline, Voice AI e AI governance per aziende in settori regolamentati. GDPR e AI Act compliance by design.",
  keywords: [
    "agentic AI",
    "multi-agent systems",
    "RAG architecture enterprise",
    "voice AI",
    "GDPR AI compliance",
    "AI Act",
  ],
  alternates: {
    canonical: "https://www.dynamicsconsulting.it/services/applied-ai",
  },
  openGraph: {
    title: "Applied AI & Agentic Workflows | Dynamics Consulting",
    description:
      "Sistemi multi-agente con memoria, orchestrazione e governance. GDPR e AI Act compliance by design.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Come si progetta un sistema multi-agente GDPR-compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un sistema multi-agente GDPR-compliant richiede un classificatore NLU per identificare dati personali in real-time, meccanismi di selective memory deletion e architettura self-hosted per mantenere i dati nel perimetro aziendale. Nexus MDS Core implementa questi pattern in produzione.",
      },
    },
    {
      "@type": "Question",
      name: "Qual è la differenza tra RAG e fine-tuning per dati aziendali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RAG (Retrieval-Augmented Generation) permette di interrogare documenti aziendali senza modificare il modello base, con aggiornamento real-time e tracciabilità delle fonti. Il fine-tuning richiede dataset etichettati, tempi lunghi e GPU dedicate. Per dati enterprise in continua evoluzione, RAG è quasi sempre la scelta corretta.",
      },
    },
    {
      "@type": "Question",
      name: "Nexus MDS Core supporta LLM open-source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Nexus MDS Core integra vLLM e OpenWebUI per l'inferenza di modelli open-source (LLaMA, Mistral, DeepSeek e altri) su GPU dedicata. I dati non lasciano mai il perimetro aziendale.",
      },
    },
  ],
};

const capabilities: Capability[] = [
  {
    iconName: "Brain",
    name: "Multi-Agent Systems",
    desc: "Memoria stratificata short/long-term, summarization automatica dopo 10 interazioni per ottimizzare token, context window infinito.",
  },
  {
    iconName: "Mic",
    name: "Voice AI Real-time",
    desc: "STT/TTS con interruzione intelligente che distingue voce umana da rumore ambientale. Latenza target <200ms.",
  },
  {
    iconName: "Search",
    name: "RAG Pipeline",
    desc: "Semantic chunking, deduplication vettoriale, Weaviate cursor-based pagination su dataset >10,000 documenti.",
  },
  {
    iconName: "Shield",
    name: "Privacy-First NLU",
    desc: "Classificatore real-time per dati sensibili, selective memory deletion su richiesta utente, GDPR compliance by design.",
  },
  {
    iconName: "Code",
    name: "AI for Developers",
    desc: "Roslyn + LLM per generazione automatica unit test, agenti per documentazione codice, workshop enterprise AI in Coding.",
  },
  {
    iconName: "FileSearch",
    name: "AI Document Analysis",
    desc: "Analisi data room, estrazione strutturata da documenti non strutturati, due diligence automatizzata.",
  },
];

const tech = ["LLM", "Weaviate", "n8n", "vLLM", "Flutter", "Keycloak", "OpenWebUI", "FastAPI", "transformers"];

const faqs = [
  {
    q: "Come si progetta un sistema multi-agente GDPR-compliant?",
    a: "Un sistema multi-agente GDPR-compliant richiede un classificatore NLU per identificare dati personali in real-time, meccanismi di selective memory deletion e architettura self-hosted per mantenere i dati nel perimetro aziendale. Nexus MDS Core implementa questi pattern in produzione.",
  },
  {
    q: "Qual è la differenza tra RAG e fine-tuning per dati aziendali?",
    a: "RAG (Retrieval-Augmented Generation) permette di interrogare documenti aziendali senza modificare il modello base, con aggiornamento real-time e tracciabilità delle fonti. Il fine-tuning richiede dataset etichettati, tempi lunghi e GPU dedicate. Per dati enterprise in continua evoluzione, RAG è quasi sempre la scelta corretta.",
  },
  {
    q: "Nexus MDS Core supporta LLM open-source?",
    a: "Sì. Nexus MDS Core integra vLLM e OpenWebUI per l'inferenza di modelli open-source (LLaMA, Mistral, DeepSeek e altri) su GPU dedicata. I dati non lasciano mai il perimetro aziendale.",
  },
];

export default function AppliedAIPage() {
  return (
    <ServicePageLayout
      title="Applied AI & Agentic Workflows"
      intro="Non promettiamo AI generica. Progettiamo sistemi multi-agente con memoria, orchestrazione e governance."
      tech={tech}
      capabilities={capabilities}
      faqs={faqs}
      faqSchema={faqSchema}
    />
  );
}
