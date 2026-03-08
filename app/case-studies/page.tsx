import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies | Dynamics Consulting",
  description:
    "Real outcomes from real engagements. Explore how Dynamics Consulting has helped organisations transform their technology and achieve measurable business results.",
  alternates: { canonical: "https://dynamicsconsulting.it/case-studies" },
};

const cases = [
  {
    slug: "eldy",
    client: "Eldy",
    tag: "Applied AI · Data Platforms",
    headline: "AI-powered senior digital companion — from concept to 50 k+ users",
    summary:
      "We designed and built the machine learning backbone powering Eldy's conversational assistant for elderly users, enabling natural interaction without any technical knowledge.",
    metrics: [
      { value: "50k+", label: "Active users" },
      { value: "94%", label: "Satisfaction score" },
      { value: "6 mo", label: "Time to market" },
    ],
  },
  {
    slug: "federfarma",
    client: "Federfarma",
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
    slug: "dynamics-data",
    client: "Manufacturing Group",
    tag: "Microsoft Dynamics · Data Platforms",
    headline: "Dynamics 365 + unified data platform for a multi-site manufacturer",
    summary:
      "Full ERP migration from legacy Navision to Dynamics 365 Business Central, combined with a cloud data warehouse and Power BI dashboards giving management real-time plant visibility.",
    metrics: [
      { value: "4 sites", label: "Unified on one platform" },
      { value: "60%", label: "Reporting time saved" },
      { value: "12 wk", label: "Go-live timeline" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <NavBar />
      <main className="bg-white dark:bg-slate-950 min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Case Studies
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Outcomes, not slide decks
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Every engagement we take on is measured by business impact. Here are three that
              illustrate what we deliver — and how we think.
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
                className="group block rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 bg-white dark:bg-slate-900 p-8 md:p-10 transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                      {c.tag}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {c.headline}
                    </h2>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {c.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-cyan-600 dark:text-cyan-400 group-hover:gap-2 transition-all">
                      Read case study →
                    </span>
                  </div>
                  <div className="flex md:flex-col gap-6 md:gap-4 md:min-w-[140px]">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="text-center md:text-right">
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">
                          {m.value}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {m.label}
                        </div>
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
