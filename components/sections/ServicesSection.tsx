"use client";

import { useState } from "react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const verticals = [
  { key: "healthcare", label: "Healthcare & Pharma" },
  { key: "enterprise", label: "Enterprise & ERP" },
  { key: "legacy", label: "Legacy Modernisation" },
] as const;

type VerticalKey = (typeof verticals)[number]["key"];

const services: {
  iconName: string;
  title: string;
  description: string;
  techBadges: string[];
  ctaHref: string;
  subdued?: boolean;
  verticals: VerticalKey[];
}[] = [
  {
    iconName: "Brain",
    title: "Applied AI & Agentic Workflows",
    description:
      "We don't promise generic AI. We design multi-agent systems with memory, orchestration, and governance built in.",
    techBadges: ["LLM", "Weaviate", "n8n", "vLLM"],
    ctaHref: "/services/applied-ai",
    verticals: ["healthcare", "legacy"],
  },
  {
    iconName: "Cloud",
    title: "Cloud & Kubernetes Architecture",
    description:
      "GPU clusters, Zero-Trust, self-hosted LLM in production. APISIX, Keycloak, OpenWhisk.",
    techBadges: ["Kubernetes", "APISIX", "Keycloak"],
    ctaHref: "/services/cloud-kubernetes",
    verticals: ["healthcare"],
  },
  {
    iconName: "Database",
    title: "Modern Data Platforms & RAG",
    description:
      "From ERP silos to ACID data lakehouses. Zero-ETL. Real-time. Apache Iceberg, Dremio.",
    techBadges: ["Iceberg", "Dremio", "Weaviate"],
    ctaHref: "/services/data-platforms",
    verticals: ["healthcare", "legacy"],
  },
  {
    iconName: "GitBranch",
    title: "Enterprise Integration & API",
    description:
      "Legacy systems that finally talk to each other. Without rewriting everything.",
    techBadges: ["ASP.NET Core", "OData", "RabbitMQ"],
    ctaHref: "/services/enterprise-integration",
    verticals: ["enterprise", "legacy"],
  },
  {
    iconName: "Server",
    title: "Microsoft & Dynamics 365",
    description:
      "Dynamics 365 as an AI platform. Not just an ERP. F&O, Power Platform, LLM on ERP data.",
    techBadges: ["Dynamics 365", "Power Platform", "Azure"],
    ctaHref: "/services/microsoft-dynamics",
    verticals: ["enterprise"],
  },
  {
    iconName: "Zap",
    title: "Process & Hyper-Automation",
    description:
      "From deterministic automation to agentic orchestration. n8n agentic, OCR Pipeline.",
    techBadges: ["n8n", "Airflow", "Apache Hop"],
    ctaHref: "/services/automation",
    verticals: ["enterprise"],
  },
  {
    iconName: "Blocks",
    title: "Blockchain & Web3 Infrastructure",
    description:
      "Solidity smart contracts on Polygon, DeFi AMM, event-sourced microservices on Kubernetes.",
    techBadges: ["Polygon", "Solidity", "EventStoreDB"],
    ctaHref: "/services/blockchain",
    subdued: true,
    verticals: [],
  },
];

export function ServicesSection() {
  const [active, setActive] = useState<VerticalKey | null>(null);

  const filtered = active
    ? services.filter((s) => s.verticals.includes(active))
    : services;

  return (
    <section id="services" className="py-20 md:py-28 bg-[#161B22]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="What we do"
            title="Enterprise Services"
            subtitle="From a single AI component to full infrastructure. Every project is custom, no templates."
          />
        </div>

        {/* Vertical filter tabs */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-2 -mx-1 px-1">
          {verticals.map((v) => (
            <button
              key={v.key}
              onClick={() => setActive(active === v.key ? null : v.key)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border cursor-pointer ${
                active === v.key
                  ? "bg-[#00B4D8] text-[#0D1117] border-[#00B4D8]"
                  : "bg-transparent text-[#7D8FA3] border-[#30363D] hover:border-[#00B4D8] hover:text-[#E6EDF3]"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s) => (
            <div
              key={s.title}
              className="transition-all duration-300 ease-out"
              style={{ opacity: 1 }}
            >
              <ServiceCard
                iconName={s.iconName}
                title={s.title}
                description={s.description}
                techBadges={s.techBadges}
                ctaHref={s.ctaHref}
                subdued={"subdued" in s ? s.subdued : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
