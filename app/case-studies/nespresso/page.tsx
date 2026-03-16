import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nespresso Intervallo Programme — ATOS | Case Studies",
  description:
    "Multi-stream enterprise programme for Nespresso at ATOS. Dynamics F&O, custom backend, IoT frontend. ~40-person delivery across three parallel workstreams.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/case-studies/nespresso" },
};

const tech = [
  "Dynamics 365 Finance & Operations",
  "ASP.NET Core",
  "Azure DevOps",
  "Azure IoT Hub",
  "Power BI",
  "Azure SQL",
  "React",
  "Terraform",
];

export default function NespressoCaseStudy() {
  return (
    <>
      <NavBar />
      <main className="bg-white dark:bg-slate-950 min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/case-studies"
              className="text-sm text-cyan-400 hover:text-cyan-300 mb-6 inline-flex items-center gap-1"
            >
              ← All case studies
            </Link>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              FMCG · Enterprise Programme · IoT
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Nespresso Intervallo — multi-stream enterprise programme at ATOS
            </h1>
            <p className="text-lg text-slate-300">
              A complex, multi-workstream delivery programme for Nespresso&apos;s Italian B2B
              operations, managed through ATOS with ~40 people across three parallel streams:
              Dynamics F&O, custom backend services, and an IoT-enabled frontend.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
            {[
              { value: "~40", label: "People managed" },
              { value: "3 streams", label: "Parallel workstreams" },
              { value: "F&O + IoT", label: "Technology scope" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{m.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-lg">
            <h2>The challenge</h2>
            <p>
              Nespresso&apos;s Italian B2B division needed to modernise its entire operational
              backbone: an aging order management and fulfilment system, disconnected inventory
              and logistics tracking, and no real-time visibility into the fleet of connected
              coffee machines deployed at client sites. The programme had to run under ATOS
              governance with strict timeline commitments and enterprise-grade delivery standards.
            </p>

            <h2>What we delivered</h2>
            <p>
              As programme lead, Corrado Patierno managed three parallel delivery streams with
              approximately 40 people across functional consultants, developers, testers, and
              infrastructure engineers:
            </p>
            <p>
              <strong>Stream 1 — Dynamics 365 F&O:</strong> Full ERP implementation covering
              order management, inventory, logistics, and financial consolidation for the B2B
              business unit. Configured for Italian fiscal requirements including electronic
              invoicing (SDI) and intra-community VAT.
            </p>
            <p>
              <strong>Stream 2 — Custom backend:</strong> ASP.NET Core microservices handling
              business logic not covered by F&O out of the box: custom pricing engines,
              B2B portal APIs, integration with Nespresso&apos;s global systems, and
              real-time event processing for order lifecycle tracking.
            </p>
            <p>
              <strong>Stream 3 — IoT frontend:</strong> A React-based dashboard connected
              to Azure IoT Hub, providing real-time telemetry from Nespresso&apos;s connected
              coffee machine fleet — consumption data, maintenance alerts, and
              predictive servicing triggers.
            </p>

            <h2>Results</h2>
            <p>
              All three streams delivered on schedule within the ATOS governance framework.
              The F&O implementation unified order-to-cash across the Italian B2B operation.
              The IoT dashboard provided Nespresso with unprecedented visibility into machine
              fleet performance, enabling proactive maintenance and data-driven account
              management. The programme demonstrated the ability to coordinate large,
              complex enterprise deliveries across multiple technology stacks simultaneously.
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
