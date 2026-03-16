import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies | Dynamics Consulting",
  description:
    "Real outcomes from real engagements. Explore how Dynamics Consulting has helped organisations transform their technology and achieve measurable business results.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/case-studies" },
};

const cases = [
  {
    slug: "federfarma",
    client: "Federfarma Lombardia",
    tag: "Enterprise Integration · Cloud",
    headline: "National pharmacy data network — real-time at scale",
    summary:
      "Event-driven integration platform connecting thousands of pharmacies across Italy, delivering real-time stock, prescription, and reporting data to regulators and operators.",
    metrics: [
      { value: "6,000+", label: "Pharmacies connected" },
      { value: "<200ms", label: "P99 latency" },
      { value: "99.99%", label: "Uptime SLA" },
    ],
  },
  {
    slug: "sorgenia",
    client: "Sorgenia",
    tag: "Energy · CRM · Marketing Automation",
    headline: "Dynamics 365 Marketing for Italy's leading green energy provider",
    summary:
      "Customer journey orchestration and multi-channel campaign automation for 200k+ contacts. Real-time event triggers from billing and consumption data integrated with Dynamics CRM.",
    metrics: [
      { value: "200k+", label: "Contacts managed" },
      { value: "Multi-channel", label: "Journey orchestration" },
      { value: "Real-time", label: "Event-driven triggers" },
    ],
  },
  {
    slug: "nespresso",
    client: "Nespresso (via ATOS)",
    tag: "FMCG · Enterprise Programme · IoT",
    headline: "Nespresso Intervallo — multi-stream enterprise programme",
    summary:
      "Programme leadership across Dynamics F&O, custom backend services, and IoT-enabled frontend for Nespresso's Italian B2B operations. ~40-person delivery managed across three parallel workstreams.",
    metrics: [
      { value: "~40", label: "People managed" },
      { value: "3 streams", label: "Parallel workstreams" },
      { value: "F&O + IoT", label: "Technology scope" },
    ],
  },
  {
    slug: "humania-care",
    client: "HumanIA Care",
    tag: "Applied AI · Healthcare",
    headline: "AI companion architecture for elderly patients — privacy-first, sovereign deployment",
    summary:
      "Multi-agent AI architecture with RAG, voice, and memory layers. Purpose-built for regulated care environments on Nexus MDS Core. Designed for scale — not yet in public rollout.",
    metrics: [
      { value: "6 mo", label: "Time to production" },
      { value: "Multi-agent", label: "RAG + Voice + Memory" },
      { value: "100%", label: "GDPR-compliant pipeline" },
    ],
  },
  {
    slug: "dynamics-data",
    client: "Manufacturing Group",
    tag: "Microsoft Dynamics · Data Platforms",
    headline: "Dynamics 365 F&O + unified data lakehouse for a multi-site manufacturer",
    summary:
      "Full ERP migration from legacy systems to Dynamics 365 Finance & Operations, combined with a Synapse Link data lakehouse and Power BI dashboards giving management real-time plant visibility.",
    metrics: [
      { value: "4 sites", label: "Unified on one platform" },
      { value: "60%", label: "Reporting time saved" },
      { value: "12 wk", label: "Go-live timeline" },
    ],
  },
  {
    slug: "dynamics-crm",
    client: "Banking & Insurance CRM",
    tag: "Multi-sector · CRM · Customer Engagement",
    headline: "Dynamics 365 CRM — banking, insurance & enterprise",
    summary:
      "Multiple Dynamics 365 Sales and Customer Service rollouts for Banco Mediolanum, Unipol, illimity, and industrial clients. Sector-specific workflows, compliance integration, and enterprise scale.",
    metrics: [
      { value: "5+", label: "CRM implementations" },
      { value: "Banking & Insurance", label: "Core sectors" },
      { value: "Enterprise", label: "Scale" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Case Studies
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Outcomes, not slide decks
            </h1>
            <p className="text-lg text-[#7D8FA3] max-w-2xl mx-auto">
              Every engagement we take on is measured by business impact. From healthcare and
              pharma to energy, FMCG, banking, and enterprise CRM — here is how we deliver.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto space-y-10">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group block rounded-2xl border border-[#30363D] hover:border-[#00B4D8] bg-[#161B22] p-8 md:p-10 transition-all shadow-sm hover:shadow-[0_0_30px_rgba(0,180,216,0.1)]"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#00B4D8]">
                      {c.tag}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-[#E6EDF3] group-hover:text-[#00B4D8] transition-colors">
                      {c.headline}
                    </h2>
                    <p className="mt-3 text-[#7D8FA3] leading-relaxed">{c.summary}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#00B4D8]">
                      Read case study →
                    </span>
                  </div>
                  <div className="flex md:flex-col gap-6 md:gap-4 md:min-w-[140px]">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="text-center md:text-right">
                        <div className="text-2xl font-bold text-[#E6EDF3]">{m.value}</div>
                        <div className="text-xs text-[#7D8FA3] mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
