import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sorgenia — Dynamics 365 Marketing | Case Studies",
  description:
    "Dynamics 365 Marketing implementation for Sorgenia, Italy's leading green energy provider. Customer journey orchestration, campaign automation, and multi-channel engagement at scale.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/case-studies/sorgenia" },
};

const tech = [
  "Dynamics 365 Marketing",
  "Dynamics 365 Customer Insights",
  "Power Automate",
  "Azure Integration Services",
  "Dataverse",
  "Power BI",
  "Azure Event Hubs",
];

export default function SorgeniaCaseStudy() {
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
              Energy · CRM · Marketing Automation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Dynamics 365 Marketing for Italy&apos;s leading green energy provider
            </h1>
            <p className="text-lg text-slate-300">
              Sorgenia needed a marketing automation platform that could orchestrate complex
              customer journeys across email, SMS, web, and call-centre channels — integrated
              with their existing Dynamics 365 CRM and billing systems.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
            {[
              { value: "200k+", label: "Contacts managed" },
              { value: "Multi-channel", label: "Journey orchestration" },
              { value: "Real-time", label: "Event-driven triggers" },
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
              Sorgenia, one of Italy&apos;s largest independent energy companies and a leader in
              green energy, was running marketing campaigns through a fragmented set of tools:
              separate ESP for email, manual SMS batches, disconnected web tracking, and no unified
              view of customer engagement. Campaign setup took days, segmentation was done in
              spreadsheets, and there was no way to trigger real-time communications based on
              customer events like contract renewal, usage spikes, or billing milestones.
            </p>

            <h2>What we built</h2>
            <p>
              We implemented Dynamics 365 Marketing (now Customer Insights - Journeys) as the
              central orchestration layer, fully integrated with Sorgenia&apos;s existing Dynamics
              365 Sales and custom billing platform. The core deliverables included:
            </p>
            <p>
              Multi-channel customer journeys spanning email, SMS, push notifications, and
              outbound call-centre triggers — all orchestrated from a single canvas with
              branching logic, wait conditions, and real-time event triggers. Integration with
              Azure Event Hubs allowed the marketing platform to react to billing events, contract
              changes, and energy consumption data in near real-time.
            </p>
            <p>
              Advanced segmentation based on unified customer profiles combining CRM data,
              billing history, energy consumption patterns, and digital engagement signals.
              Power BI dashboards provided marketing leadership with real-time campaign
              performance, attribution, and ROI visibility.
            </p>

            <h2>Results</h2>
            <p>
              The platform manages 200,000+ active contacts across all channels. Campaign
              setup time dropped from days to hours. Real-time event triggers enabled lifecycle
              communications that were previously impossible — such as proactive outreach before
              contract expiry and personalised green energy recommendations based on consumption
              data. Marketing team autonomy increased significantly, reducing dependency on IT
              for campaign execution.
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
