import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Federfarma — National Pharmacy Network | Case Studies | Dynamics Consulting",
  description:
    "How Dynamics Consulting built an event-driven integration platform connecting 6,000+ Italian pharmacies with sub-200ms latency and 99.99% uptime.",
  alternates: { canonical: "https://dynamicsconsulting.it/case-studies/federfarma" },
};

const tech = [
  "Apache Kafka",
  "Apache Flink",
  "Azure Kubernetes Service",
  "Azure Service Bus",
  "PostgreSQL",
  "TimescaleDB",
  "Redis",
  "OpenTelemetry",
  "Grafana",
  "Terraform",
  "Node.js",
  "Go",
];

export default function FederfarmaCaseStudy() {
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
              Enterprise Integration · Cloud
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              National pharmacy data network — real-time at scale
            </h1>
            <p className="text-lg text-slate-300">
              Federfarma needed a single, reliable integration backbone to connect Italy's national
              pharmacy network — handling stock, prescriptions, and regulatory reporting at national
              scale.
            </p>
          </div>
        </section>

        {/* Metrics bar */}
        <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
            {[
              { value: "6,000+", label: "Pharmacies connected" },
              { value: "<200ms", label: "P99 latency" },
              { value: "99.99%", label: "Uptime SLA" },
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
              Italy's pharmacy sector operates across thousands of independent outlets, each running
              different point-of-sale systems and data formats. Federfarma, the national federation,
              required a unified data platform capable of aggregating real-time stock levels,
              prescription dispensing events, and regulatory compliance data — and surfacing it to
              health authorities and internal analysts with minimal latency.
            </p>
            <p>
              The existing integration approach was batch-based, meaning regulatory reports were
              always hours behind reality and stock alerts arrived too late to prevent shortages of
              critical medications.
            </p>

            <h2>What we built</h2>
            <p>
              We designed an event-driven architecture with Apache Kafka as the central event
              broker, ingesting streams from 6,000+ pharmacy endpoints via lightweight edge
              connectors that normalised diverse POS formats into a canonical event schema.
            </p>
            <p>
              Apache Flink stream processing jobs aggregated events in real time, computing rolling
              stock summaries, flagging critical medication shortages, and generating the compliance
              event streams required by the Ministry of Health — all with sub-second processing
              latency.
            </p>
            <p>
              The entire platform ran on Azure Kubernetes Service, with infrastructure as code via
              Terraform and a comprehensive observability stack built on OpenTelemetry and Grafana.
              TimescaleDB stored the time-series stock and dispensing data, enabling both real-time
              dashboards and deep historical analysis.
            </p>

            <h2>Results</h2>
            <p>
              The platform achieved a P99 end-to-end latency of under 200 milliseconds from
              pharmacy event to dashboard update — down from 4+ hours in the legacy batch system.
              Uptime has been maintained at 99.99% since go-live. Regulatory reporting, previously
              a manual two-day exercise, is now fully automated and runs continuously.
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
