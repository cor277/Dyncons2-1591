import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { NexusBanner } from "@/components/sections/NexusBanner";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { Stats } from "@/components/sections/Stats";
import { BookCallout } from "@/components/sections/BookCallout";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { PillarsSection } from "@/components/sections/PillarsSection";

export const metadata: Metadata = {
  title: "Dynamics Consulting | AI Solution Architect Italy",
  description:
    "Progettiamo infrastrutture AI-ready, piattaforme dati e sistemi multi-agente per aziende enterprise. GDPR, AI Act, Zero-Trust. Nexus MDS Core.",
  alternates: { canonical: "https://www.dynamicsconsulting.it" },
};

const services = [
  {
    iconName: "Brain",
    title: "Applied AI & Agentic Workflows",
    description:
      "Non promettiamo AI generica. Progettiamo sistemi multi-agente con memoria, orchestrazione e governance.",
    techBadges: ["LLM", "Weaviate", "n8n", "vLLM"],
    ctaHref: "/services/applied-ai",
  },
  {
    iconName: "Cloud",
    title: "Cloud & Kubernetes Architecture",
    description:
      "GPU clusters, Zero-Trust, self-hosted LLM in produzione. APISIX, Keycloak, OpenWhisk.",
    techBadges: ["Kubernetes", "APISIX", "Keycloak"],
    ctaHref: "/services/cloud-kubernetes",
  },
  {
    iconName: "Database",
    title: "Modern Data Platforms & RAG",
    description:
      "Da ERP silos a data lakehouse ACID. Zero-ETL. Real-time. Apache Iceberg, Dremio.",
    techBadges: ["Iceberg", "Dremio", "Weaviate"],
    ctaHref: "/services/data-platforms",
  },
  {
    iconName: "GitBranch",
    title: "Enterprise Integration & API",
    description:
      "Sistemi legacy che finalmente parlano tra loro. Senza riscrivere tutto.",
    techBadges: ["ASP.NET Core", "OData", "RabbitMQ"],
    ctaHref: "/services/enterprise-integration",
  },
  {
    iconName: "Server",
    title: "Microsoft & Dynamics 365",
    description:
      "Dynamics 365 come piattaforma AI. Non solo ERP. F&O, Power Platform, LLM su dati ERP.",
    techBadges: ["Dynamics 365", "Power Platform", "Azure"],
    ctaHref: "/services/microsoft-dynamics",
  },
  {
    iconName: "Zap",
    title: "Process & Hyper-Automation",
    description:
      "Dall'automazione deterministica all'orchestrazione agentiva. n8n agentic, OCR Pipeline.",
    techBadges: ["n8n", "Airflow", "Apache Hop"],
    ctaHref: "/services/automation",
  },
  {
    iconName: "Blocks",
    title: "Blockchain & Web3 Infrastructure",
    description:
      "Smart contract Solidity su Polygon, DeFi AMM, microservizi event-sourced su Kubernetes.",
    techBadges: ["Polygon", "Solidity", "EventStoreDB"],
    ctaHref: "/services/blockchain",
  },
];

const caseStudies = [
  {
    sector: "Healthcare / Consumer AI",
    title: "Eldy — AI Assistant for Elderly",
    summary:
      "Sistema multi-agente con memoria stratificata, Voice AI real-time e classificatore NLU per dati sensibili. GDPR + AI Act compliance by design su mobile Flutter.",
    metrics: ["Latenza voce <200ms", "GDPR compliant", "AI Act Art. 6"],
    href: "/case-studies/eldy",
  },
  {
    sector: "Pharmaceutical / Healthcare",
    title: "Federfarma Lombardia",
    summary:
      "Pipeline RAG su documenti farmaceutici con Zero-Trust auth in produzione su Nexus MDS Core.",
    metrics: [">10,000 doc vettorizzati", "Zero-Trust auth", "PWA mobile"],
    href: "/case-studies/federfarma",
  },
  {
    sector: "Manufacturing / ERP",
    title: "Dynamics 365 Data Modernization",
    summary:
      "Da ERP silos a data lakehouse ACID. Synapse Link → Apache Iceberg. Zero-ETL. Event-driven.",
    metrics: ["Zero downtime", "ACID lakehouse", "Zero-ETL live"],
    href: "/case-studies/dynamics-data",
  },
];

export default function HomePage() {
  return (
    <>
      <NavBar />

      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — 3 Pillars */}
      <PillarsSection />

      {/* Section 3 — Nexus MDS Banner */}
      <NexusBanner />

      {/* Section 4 — Services Grid */}
      <section id="services" className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Cosa facciamo"
              title="Servizi Enterprise"
              subtitle="Dal singolo componente AI all'infrastruttura completa. Ogni progetto è custom, nessun template."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Case Studies Preview */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <SectionHeader
              eyebrow="Progetti reali"
              title="Case Studies"
              subtitle="Problemi complessi. Soluzioni concrete. Metriche reali."
            />
            <CTAButton label="Tutti i case study" href="/case-studies" variant="secondary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.title} {...cs} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Clients Strip */}
      <ClientStrip />

      {/* Section 7 — Stats */}
      <Stats />

      {/* Section 8 — Book Callout */}
      <BookCallout />

      {/* Section 9 — Final CTA */}
      <CTASection />

      <Footer />
    </>
  );
}
