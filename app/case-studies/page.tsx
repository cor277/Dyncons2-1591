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
    slug: "humania-care",
    client: "HumanIA Care",
    tag: "Applied AI · Healthcare",
    headline: "AI-powered digital companion for elderly patients — from concept to production",
    summary:
      "Conversational AI and personalisation infrastructure purpose-built for elderly users: fine-tuned speech recognition, RAG-based responses, and privacy-first architecture deployed at scale.",
    metrics: [
      { value: "50k+", label: "Active users" },
      { value: "94%", label: "Satisfaction score" },
      { value: "6 mo", label: "Time to market" },
    ],
  },
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
