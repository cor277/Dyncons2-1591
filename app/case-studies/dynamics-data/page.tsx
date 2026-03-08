import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dynamics 365 + Unified Data Platform | Case Studies | Dynamics Consulting",
  description:
    "ERP migration to Dynamics 365 Business Central and a cloud data warehouse for a multi-site manufacturer — 4 sites unified, 60% reporting time saved, 12-week go-live.",
  alternates: { canonical: "https://dynamicsconsulting.it/case-studies/dynamics-data" },
};

const tech = [
  "Dynamics 365 Business Central",
  "Power BI",
  "Power Automate",
  "Azure Data Factory",
  "Azure Synapse Analytics",
  "dbt",
  "Azure SQL",
  "AL Language",
  "Microsoft Fabric",
  "Terraform",
];

export default function DynamicsDataCaseStudy() {
  return (
    <>
      <NavBar />
      <main className="bg-white dark:bg-slate-950 min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/case-studies"
              className="text-sm text-cyan-400 hover:text-cyan-300 mb-6 inline-flex items-center gap-1"
            >
              ← All case studies
            </Link>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Microsoft Dynamics · Data Platforms
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Dynamics 365 + unified data platform for a multi-site manufacturer
            </h1>
            <p className="text-lg text-slate-300">
              A four-site manufacturing group running aging Navision instances needed a modern ERP
              and the real-time visibility to manage production, stock, and finance across all
              locations from a single pane of glass.
            </p>
          </div>
        </section>

        {/* Metrics bar */}
        <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
            {[
              { value: "4 sites", label: "Unified on one platform" },
              { value: "60%", label: "Reporting time saved" },
              { value: "12 wk", label: "Go-live timeline" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{m.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Body */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-lg">
            <h2>The challenge</h2>
            <p>
              The client operated four manufacturing sites across northern Italy, each on a separate
              Navision instance with local customisations accumulated over 15 years. Consolidating
              financial results for month-end required a five-person team four days of manual
              reconciliation work. Plant managers had no real-time visibility into stock or
              production throughput — decisions were made on data that was at least 24 hours old.
            </p>

            <h2>What we built</h2>
            <p>
              We ran a two-week discovery to map all business processes, custom fields, and
              third-party integrations across the four Navision instances, producing a full data
              lineage map and a risk-ranked migration backlog.
            </p>
            <p>
              Business Central was deployed in a single multi-company configuration, with
              site-specific manufacturing workflows configured in AL and a custom inter-company
              posting engine built to handle the group's internal trading volume. Data migration
              pipelines extracted, cleansed, and loaded ten years of transactional history with
              full reconciliation to legacy source totals.
            </p>
            <p>
              In parallel, we built a cloud data platform on Azure Synapse Analytics with dbt
              transformation models feeding a Power BI semantic layer. Live data feeds from Business
              Central flowed through Azure Data Factory into the warehouse, meaning dashboards
              reflected the current state of all four plants with a 15-minute refresh cadence.
            </p>

            <h2>Results</h2>
            <p>
              All four sites went live on a single Business Central tenant in twelve weeks — on
              schedule and within budget. Month-end consolidation time dropped from four days to
              four hours. The Power BI dashboards gave plant managers real-time production, stock,
              and finance visibility for the first time, and the finance team reported a 60%
              reduction in the time spent on reporting activities.
            </p>

            <h2>Technologies used</h2>
          </div>

          <div className="max-w-3xl mx-auto px-6 mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
