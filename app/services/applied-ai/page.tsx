import type { Metadata } from "next";
import { ServicePageLayout, type Capability } from "@/components/sections/ServicePageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechBadge } from "@/components/ui/TechBadge";

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
    {
      "@type": "Question",
      name: "We have data everywhere and no structure — where do we actually start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with a 2-week discovery sprint: inventory what data exists, where it lives, what format it is in, and what quality it is. Then define the business questions you need to answer. Only then build the retrieval layer — a bounded RAG MVP on a defined corpus, validated with real users before further investment.",
      },
    },
    {
      "@type": "Question",
      name: "Can the system reason over ISO norms and flag conflicts with our project specs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build RAG systems that are version-aware: they know which revision of a standard applies to a given project date and will not answer with an obsolete clause. Engineers query in natural language and receive cited answers — norm, article number, revision. Every response is logged for professional liability traceability.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle agent governance for internal audit and four-eyes requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We design agent architectures with human-in-the-loop approval gates before any write action, immutable audit trails with configurable retention, RBAC with segregation between front office, risk, compliance, and IT, and full LLM call logging — input, output, model version, timestamp — for every inference. Aligned with DORA, MiFID II, and AI Act requirements.",
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

const useCases = [
  {
    title: "Companies with unstructured data",
    description: `The most common starting point in Italian mid-market: data lives in shared folders, email threads, scanned PDFs, legacy ERP exports, and someone's Excel file. No data governance. No API. No structure.

The wrong answer is buying an AI tool. The right answer is understanding what questions the business needs to answer from that data — then building the retrieval layer around those questions.

Our approach: a 2-week discovery sprint to map what exists, where it lives, and what quality it is. Then a 4-week RAG MVP on a defined, bounded corpus. Validated with real users before any further investment. This is the entry point for organisations that have never shipped an AI system.`,
    tags: ["PDF", "Email archives", "ERP exports", "RAG MVP", "Discovery sprint"],
  },
  {
    title: "Engineering & technical documentation",
    description: `Civil, structural, aerospace, industrial engineering firms sit on enormous corpora: ISO and UNI norms, EN standards, project specifications, capitolati, contractor documentation, revision histories, technical manuals. A senior engineer knows this corpus by instinct. But the corpus has thousands of pages, changes constantly, and varies by client and jurisdiction.

We build RAG systems that reason over technical documentation. Engineers query in natural language and receive cited answers — norm, article number, revision. The system is version-aware: it knows which revision of a standard applies to a given project date, and will not answer with an obsolete clause.

Every response is logged: who asked, when, which document answered. This is not optional in contexts with professional liability.`,
    tags: ["ISO/UNI/EN norms", "Technical specs", "Revision control", "Traceable RAG", "Document versioning"],
  },
  {
    title: "Finance & regulated data rooms",
    description: `An AI agent acting on financial data is not a chatbot. It is a system making operational decisions. Internal audit, risk management, and compliance will ask: who authorised this action? Which model decided? On what data? Is the log immutable? Was the four-eyes principle enforced?

We design agent architectures with human-in-the-loop approval gates before any write action, immutable audit trails with configurable retention, RBAC with segregation between front office / risk / compliance / IT, and full LLM call logging: input, output, model version, timestamp — for every inference.

Compliance alignment: DORA (operational resilience, incident logging), MiFID II (decision traceability), AI Act (high-risk system requirements), GDPR (data minimisation, right to explanation).`,
    tags: ["Audit trail", "Human-in-the-loop", "DORA", "MiFID II", "RBAC", "AI Act"],
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
  {
    q: "We have data everywhere and no structure — where do we actually start?",
    a: "Start with a 2-week discovery sprint: inventory what data exists, where it lives, what format it is in, and what quality it is. Then define the business questions you need to answer. Only then build the retrieval layer — a bounded RAG MVP on a defined corpus, validated with real users before further investment.",
  },
  {
    q: "Can the system reason over ISO norms and flag conflicts with our project specs?",
    a: "Yes. We build RAG systems that are version-aware: they know which revision of a standard applies to a given project date and will not answer with an obsolete clause. Engineers query in natural language and receive cited answers — norm, article number, revision. Every response is logged for professional liability traceability.",
  },
  {
    q: "How do you handle agent governance for internal audit and four-eyes requirements?",
    a: "We design agent architectures with human-in-the-loop approval gates before any write action, immutable audit trails with configurable retention, RBAC with segregation between front office, risk, compliance, and IT, and full LLM call logging — input, output, model version, timestamp — for every inference. Aligned with DORA, MiFID II, and AI Act requirements.",
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
    >
      {/* Who this is for */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader eyebrow="Use cases" title="Who this is for" />
          </div>
          <div className="space-y-10 max-w-3xl">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-[#161B22] border border-[#30363D] rounded-xl p-8">
                <h3 className="font-dm font-bold text-[#E6EDF3] text-xl mb-4">{uc.title}</h3>
                <div className="text-[#7D8FA3] text-sm leading-relaxed space-y-4">
                  {uc.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {uc.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} variant="cyan" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
