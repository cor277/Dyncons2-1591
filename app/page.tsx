import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { NexusBanner } from "@/components/sections/NexusBanner";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { Stats } from "@/components/sections/Stats";
import { BookCallout } from "@/components/sections/BookCallout";
import { CTASection } from "@/components/sections/CTASection";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { DigitalTwinSection } from "@/components/sections/DigitalTwinSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Dynamics Consulting | Sovereign AI Infrastructure for Regulated Industries · Italy",
  description:
    "We build on-premise AI platforms for organisations that cannot afford data sovereignty risk. Healthcare, pharma, energy, enterprise CRM. Nexus MDS Core — 16 services, GDPR-ready, AI Act compliant.",
  alternates: { canonical: "https://www.dynamicsconsulting.it" },
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
    title: "Federfarma Lombardia",
    summary:
      "RAG pipeline on 10,000+ pharmaceutical documents for 1,000+ pharmacies. Budibase PWA, Keycloak Zero-Trust, on-premise LLM. Entirely on Nexus MDS Core.",
    metrics: ["1,000+ pharmacies", "10,000+ docs vectorised", "Fully on-premise"],
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
    metrics: ["Multi-agent RAG + Voice", "GDPR-compliant on-premise", "16 Nexus services"],
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
      "Multiple Dynamics 365 Sales and Customer Service rollouts across banking, insurance, and industrial clients — including Banco Mediolanum, Unipol, and illimity.",
    metrics: ["5+ CRM rollouts", "Banking & Insurance", "Enterprise scale"],
    href: "/case-studies/dynamics-crm",
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
            <CTAButton label="All case studies" href="/case-studies" variant="secondary" />
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
