import type { Metadata } from "next";
import { Cpu, Shield, Search, GitBranch, Database, Activity, CheckCircle2 } from "lucide-react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { TechBadge } from "@/components/ui/TechBadge";
import { CTASection } from "@/components/sections/CTASection";
import { PlatformFeatureGrid } from "@/components/sections/PlatformFeatureGrid";
import { PlatformHero } from "@/components/sections/PlatformHero";

export const metadata: Metadata = {
  title: "Nexus MDS Core — Enterprise AI Platform",
  description:
    "The enterprise self-hosted AI platform. ~16 orchestrated Docker services. GDPR-ready. Zero-Trust. Deployable on Kubernetes or bare-metal.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/platform" },
  openGraph: {
    title: "Nexus MDS Core | Dynamics Consulting",
    description:
      "Enterprise AI platform self-hosted. 16 Docker services. GDPR, AI Act, ISO 27001 Ready.",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nexus MDS Core",
  version: "2.0",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Linux (Docker / Kubernetes)",
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
  creator: { "@type": "Organization", name: "Dynamics Consulting" },
  description:
    "Enterprise self-hosted AI platform with ~16 orchestrated Docker services. Zero-Trust security with Keycloak + APISIX. GDPR-ready. AI Act compliant. Deployable on Kubernetes or bare-metal.",
  featureList: [
    "LLM Inference with vLLM and OpenWebUI",
    "Zero-Trust Auth with Keycloak OIDC/PKCE and APISIX",
    "Vector Search with Weaviate (RAG production-ready)",
    "Workflow automation with n8n agentic, Airflow, Apache Hop",
    "Enterprise storage with MinIO S3 and PostgreSQL",
    "Observability with Grafana, Uptime Kuma, Velero",
  ],
};

const useCases = [
  {
    title: "Healthcare & Pharma",
    description:
      "Pipeline RAG su documenti clinici e farmaceutici. Autenticazione GDPR-compliant. Già in produzione su Federfarma Lombardia e CureSicure.",
    badges: ["GDPR", "OCR Pipeline", "Vector Search"],
  },
  {
    title: "Enterprise B2B",
    description:
      "Copilot interno su dati ERP, automazione workflow aziendali, integrazione event-driven con sistemi legacy.",
    badges: ["Dynamics 365", "LLM", "Event-Driven"],
  },
  {
    title: "Regulated Industries",
    description:
      "Infrastruttura AI Act-ready con data residency EU, audit trail immutabile, zero dependency cloud pubblica.",
    badges: ["AI Act", "EU Data Residency", "ISO 27001 Ready"],
  },
];

export default function PlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <NavBar />
      <PlatformHero />
      <PlatformFeatureGrid />

      {/* Compliance row */}
      <section className="py-12 bg-[#0D1117] border-t border-[#30363D]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#7D8FA3] text-xs font-mono uppercase tracking-[0.15em] mb-6 text-center">
            Compliance &amp; Certificazioni
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["GDPR", "AI Act Ready", "ISO 27001 Ready", "EU Data Residency"].map((b) => (
              <TechBadge key={b} label={b} variant="cyan" />
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Use cases"
              title="Pensato per industrie regolamentate"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-[#0D1117] border border-[#30363D] rounded-xl p-6"
              >
                <h3 className="font-dm font-bold text-[#E6EDF3] text-lg mb-3">
                  {uc.title}
                </h3>
                <p className="text-[#7D8FA3] text-sm leading-relaxed mb-4">
                  {uc.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {uc.badges.map((b) => (
                    <TechBadge key={b} label={b} variant="cyan" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Pronto a vedere Nexus in azione?"
        subtitle="Mostriamo come si deploya in produzione su Kubernetes o bare-metal, con tutti i 16 servizi attivi."
        ctaLabel="Richiedi una demo →"
        ctaHref="/contact"
      />
      <Footer />
    </>
  );
}
