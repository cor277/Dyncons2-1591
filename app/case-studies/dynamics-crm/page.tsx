import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dynamics 365 CRM Implementations — Banking, Insurance & Enterprise | Case Studies",
  description:
    "Multiple Dynamics 365 Sales and Customer Service rollouts for banking, insurance, and industrial clients — Banco Mediolanum, Unipol, illimity, and more.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/case-studies/dynamics-crm" },
};

const tech = [
  "Dynamics 365 Sales",
  "Dynamics 365 Customer Service",
  "Power Platform",
  "Power Automate",
  "Power BI",
  "Azure Active Directory",
  "Dataverse",
  "Azure Integration Services",
];

const engagements = [
  {
    client: "Banco Mediolanum",
    sector: "Banking / Wealth Management",
    scope:
      "Dynamics 365 Sales implementation for the advisory network. Lead management, opportunity tracking, and regulatory reporting integrated with core banking systems. Custom Power Apps for field advisors.",
  },
  {
    client: "Unipol",
    sector: "Insurance",
    scope:
      "Dynamics 365 Customer Service deployment for claims management and policyholder engagement. Omnichannel integration (email, phone, web chat) with SLA-driven routing and Power BI operational dashboards.",
  },
  {
    client: "illimity Bank",
    sector: "Digital Banking / Fintech",
    scope:
      "CRM architecture and implementation for a digital-first bank. Dynamics 365 Sales with custom Dataverse entities for complex SME lending workflows, integrated with the bank's proprietary credit scoring engine.",
  },
  {
    client: "Enterprise Industrial Clients",
    sector: "Manufacturing & Services",
    scope:
      "Multiple Dynamics 365 Sales and Customer Service rollouts for mid-market industrial companies. Sales pipeline automation, service ticket management, and Power BI reporting on commercial KPIs.",
  },
];

export default function DynamicsCrmCaseStudy() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/case-studies"
              className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
            >
              ← All case studies
            </Link>
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Multi-sector · CRM · Customer Engagement
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Dynamics 365 CRM — banking, insurance &amp; enterprise
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Over the past decade, we have delivered multiple Dynamics 365 Sales and Customer
              Service implementations for some of Italy&apos;s most demanding organisations in
              financial services and enterprise. Each project was tailored to sector-specific
              workflows, compliance requirements, and integration landscapes.
            </p>
          </div>
        </section>

        <section className="border-b border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
            {[
              { value: "5+", label: "CRM implementations" },
              { value: "Banking & Insurance", label: "Core sectors" },
              { value: "Enterprise", label: "Scale" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#E6EDF3]">{m.value}</div>
                <div className="text-xs md:text-sm text-[#7D8FA3] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-[#7D8FA3] text-lg leading-relaxed">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Engagements</h2>
              <p className="mb-8">
                Each engagement was delivered as part of larger transformation programmes at
                Avanade, Capgemini, or directly as independent consultant — always with hands-on
                architectural and delivery leadership.
              </p>
            </div>

            {engagements.map((e) => (
              <div
                key={e.client}
                className="bg-[#161B22] border border-[#30363D] rounded-xl p-6"
              >
                <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-2">
                  {e.sector}
                </p>
                <h3 className="text-lg font-bold text-[#E6EDF3] mb-3">{e.client}</h3>
                <p className="text-[#7D8FA3] text-sm leading-relaxed">{e.scope}</p>
              </div>
            ))}

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Technologies used</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
