import type { Metadata } from "next";
import { TextLink } from "@/components/ui/TextLink";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { NexusBanner } from "@/components/sections/NexusBanner";
import { CraDeadlineBanner } from "@/components/sections/CraDeadlineBanner";
import { SovereigntyStrip } from "@/components/sections/SovereigntyStrip";
import { CepfBanner } from "@/components/sections/CepfBanner";
import { EditorialSeriesSection } from "@/components/sections/EditorialSeriesSection";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { Stats } from "@/components/sections/Stats";
import { BookCallout } from "@/components/sections/BookCallout";
import { CTASection } from "@/components/sections/CTASection";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { DigitalTwinSection } from "@/components/sections/DigitalTwinSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: { absolute: "Sovereign AI, AI Governance & Compliance | Dynamics Consulting" },
  description:
    "AI consulting, architecture, governance and compliance for regulated industries in Italy and the EU. We design and deploy sovereign, on-premise AI systems — Nexus MDS Core, 16 services, GDPR-ready, architected for AI Act and PLD 2024 requirements.",
  alternates: {
    canonical: "https://www.dynamicsconsulting.it",
    languages: {
      en: "https://www.dynamicsconsulting.it",
      it: "https://www.dynamicsconsulting.it/it",
      "x-default": "https://www.dynamicsconsulting.it",
    },
  },
};

const caseStudies = [
  {
    sector: "Logistics / RFID / AI",
    title: "LogiTrack — RFID & AI Traceability",
    summary:
      "Cloud-native platform combining RFID UHF for warehouse and production tracking with NFC for post-sale authentication. AI anomaly detection, blockchain certification, and SAP/Power Platform integration.",
    metrics: ["99.5% fewer shipping errors", "20× faster inventories", "End-to-end traceability"],
    href: "/case-studies/logitrack",
  },
  {
    sector: "Pharmaceutical / Healthcare",
    title: "Federfarma Lombarda",
    summary:
      "RAG pipeline on 10,000+ pharmaceutical documents for 1,000+ pharmacies. Budibase PWA, Keycloak Zero-Trust, local inference, replaceable external generation. Entirely on Nexus MDS Core.",
    metrics: ["1,000+ pharmacies", "10,000+ docs vectorised", "Sovereign by architecture"],
    href: "/case-studies/federfarma",
  },
  {
    sector: "Energy / CRM",
    title: "Sorgenia — Dynamics Marketing",
    summary:
      "Dynamics 365 Marketing implementation for Italy's leading green energy provider. Customer journey orchestration and campaign automation at scale.",
    metrics: ["200k+ contacts managed", "D365 Marketing", "Multi-channel journeys"],
    href: "/case-studies/sorgenia",
  },
  {
    sector: "FMCG / Enterprise Programme",
    title: "Nespresso Intervallo — ATOS",
    summary:
      "Multi-stream programme across Dynamics F&O, custom backend, and IoT frontend. ~40-person delivery managed across three parallel workstreams.",
    metrics: ["~40 people managed", "3 parallel streams", "F&O + IoT + Backend"],
    href: "/case-studies/nespresso",
  },
  {
    sector: "Legacy Modernisation / AI Dev",
    title: "IATP — AI-Driven Reverse Engineering",
    summary:
      "AI-powered reverse engineering of a legacy platform via RAG on Nexus, auto-generated analysis docs, and full AI-driven dev pipeline with Antigravity, Trae, MCP servers, and Comet testing.",
    metrics: ["RAG reverse engineering", "MCP DevOps pipeline", "AI-driven testing"],
    href: "/case-studies/iatp",
  },
  {
    sector: "Healthcare / Applied AI",
    title: "HumanIA Care — AI Senior Companion",
    summary:
      "AI companion architecture for elderly patients, purpose-built for privacy-first deployment in regulated care environments. Built on Nexus MDS Core.",
    metrics: ["Multi-agent RAG + Voice", "On-premise, GDPR controls mapped", "16 Nexus services"],
    href: "/case-studies/humania-care",
  },
  {
    sector: "Manufacturing / ERP",
    title: "Dynamics 365 Data Modernization",
    summary:
      "From ERP silos to ACID data lakehouse. Synapse Link to Apache Iceberg. Zero-ETL. Event-driven.",
    metrics: ["Zero downtime", "ACID lakehouse", "Zero-ETL live"],
    href: "/case-studies/dynamics-data",
  },
  {
    sector: "Multi-sector / CRM",
    title: "Dynamics CRM Implementations",
    summary:
      "Multiple Dynamics 365 Sales and Customer Service rollouts across banking, insurance, and industrial clients — including Banca Mediolanum, Unipol, and illimity.",
    metrics: ["5+ CRM rollouts", "Banking & Insurance", "Enterprise scale"],
    href: "/case-studies/dynamics-crm",
  },
];

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
      {/* Section 0 — 11 September 2026 deadline. Time-boxed: see CraDeadlineBanner. */}
      <CraDeadlineBanner />
      {/* Section 1 — Hero */}
      <Hero />
      {/* Section 1b — EU Tech Sovereignty Package strip */}
      <SovereigntyStrip />
      {/* Section 2 — 3 Pillars */}
      <PillarsSection />
      {/* Section 3 — Nexus MDS Banner */}
      <NexusBanner />
      {/* Section 3b — CEPF Methodology */}
      <CepfBanner />
      {/* Section 4 — Services Grid */}
      <ServicesSection />
      {/* Section 5 — Digital Twin */}
      <DigitalTwinSection />
      {/* Section 6 — Case Studies Preview */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <SectionHeader
              eyebrow="Real projects"
              title="Case Studies"
              subtitle="Complex problems. Concrete solutions. Real metrics."
            />
            <TextLink label="All case studies →" href="/case-studies" />
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
      {/* Section 7b — Editorial Series */}
      <EditorialSeriesSection />
      {/* Section 8 — Book Callout */}
      <BookCallout />
      {/* Section 9 — Final CTA */}
      <CTASection
        title="Where does your supplier’s liability stop, and yours begin?"
        subtitle="The revised European product liability directive includes software among products and applies to products placed on the market or put into service from 9 December 2026. The exposure assessment establishes, for your organisation, where the boundary sits."
        ctaLabel="Exposure assessment →"
        ctaHref="/assessment"
      />
      </main>
      <Footer />
    </>
  );
}
