import type { Metadata } from "next";
import { OG_IMAGE } from "@/app/og";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { TechBadge } from "@/components/ui/TechBadge";

const URL = "https://www.dynamicsconsulting.it/capabilities";

export const metadata: Metadata = {
  title: "Technical capabilities",
  description:
    "The engineering underneath the service lines: applied AI, data platforms, Kubernetes, enterprise integration, Dynamics 365, automation, blockchain. Competences, not separate offerings.",
  alternates: { canonical: URL },
  openGraph: {
    images: OG_IMAGE,
    title: "Technical capabilities | Dynamics Consulting",
    description:
      "The engineering underneath the service lines: applied AI, data platforms, Kubernetes, enterprise integration, Dynamics 365, automation, blockchain.",
    url: URL,
    type: "website",
    locale: "en_US",
  },
};

/* Blockchain & Web3 last — deliberately. */
const capabilities = [
  {
    title: "Applied AI & Agentic Workflows",
    description:
      "Multi-agent systems with memory, orchestration, and governance built in. Retrieval pipelines, evaluation, human-in-the-loop approval gates.",
    badges: ["LLM", "Weaviate", "n8n", "vLLM"],
    href: "/services/applied-ai",
  },
  {
    title: "Modern Data Platforms & RAG",
    description:
      "From ERP silos to ACID data lakehouses. Zero-ETL, real-time ingestion, vector and relational stores side by side.",
    badges: ["Iceberg", "Dremio", "Weaviate"],
    href: "/services/data-platforms",
  },
  {
    title: "Cloud & Kubernetes Architecture",
    description:
      "GPU clusters, Zero-Trust perimeters, self-hosted inference in production. Gateway-level authentication and route policy.",
    badges: ["Kubernetes", "APISIX", "Keycloak"],
    href: "/services/cloud-kubernetes",
  },
  {
    title: "Enterprise Integration & API",
    description:
      "Legacy systems that finally talk to each other, without rewriting everything. Message-driven integration and API surfaces over existing estates.",
    badges: ["ASP.NET Core", "OData", "RabbitMQ"],
    href: "/services/enterprise-integration",
  },
  {
    title: "Microsoft & Dynamics 365",
    description:
      "Dynamics 365 treated as a data and AI platform rather than only an ERP. F&O, Power Platform, retrieval over ERP data.",
    badges: ["Dynamics 365", "Power Platform", "Azure"],
    href: "/services/microsoft-dynamics",
  },
  {
    title: "Process & Hyper-Automation",
    description:
      "From deterministic automation to agentic orchestration. Document pipelines, OCR, scheduled and event-driven workflows.",
    badges: ["n8n", "Airflow", "Apache Hop"],
    href: "/services/automation",
  },
  {
    title: "Blockchain & Web3 Infrastructure",
    description:
      "Solidity smart contracts on Polygon, DeFi AMM, event-sourced microservices. Retained as an engineering competence from earlier work.",
    badges: ["Polygon", "Solidity", "EventStoreDB"],
    href: "/services/blockchain",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Engineering
            </p>
            <h1 className="font-syne text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Technical capabilities
            </h1>
            <p className="text-lg text-[#7D8FA3] leading-relaxed">
              These are competences, not separate offerings. They are the engineering the three
              service lines — governance advisory, fractional CTO, and the sovereign AI platform —
              are built on, and they are listed here so that what a project actually requires is
              visible rather than implied.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="border-b border-[#21262D] pb-8 last:border-none last:pb-0"
              >
                <h2 className="text-xl font-bold text-[#E6EDF3] mb-2">
                  <Link href={c.href} className="hover:text-[#00B4D8] transition-colors">
                    {c.title}
                  </Link>
                </h2>
                <p className="text-[#7D8FA3] leading-relaxed mb-4">{c.description}</p>
                <div className="flex flex-wrap gap-2">
                  {c.badges.map((b) => (
                    <TechBadge key={b} label={b} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#7D8FA3] text-base">
              Looking for the service lines instead?{" "}
              <Link href="/#services" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                They are on the homepage
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
