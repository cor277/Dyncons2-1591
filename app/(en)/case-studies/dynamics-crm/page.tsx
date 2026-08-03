import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dynamics 365 CRM — Banking & Insurance",
  description:
    "Dynamics 365 CRM implementations for Banco Mediolanum, illimity, and Unipol. Compliance-aware data architecture, core banking integration, audit trails.",
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
              Banking &amp; Insurance · CRM · Regulated Financial Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Dynamics 365 CRM in banking and insurance
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              These were not standard CRM rollouts. Each engagement was shaped by the
              regulatory complexity, data segregation requirements, and approval layers
              that define financial services in Italy. Delivered at Avanade, Capgemini,
              and as independent consultant — always with hands-on architectural and
              delivery leadership.
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
            {/* Clients */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-6">Clients</h2>

              <div className="space-y-6">
                <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6">
                  <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-2">
                    Banking / Wealth Management
                  </p>
                  <h3 className="text-lg font-bold text-[#E6EDF3] mb-3">Banco Mediolanum</h3>
                  <p className="text-[#7D8FA3] text-sm leading-relaxed">
                    Italy&apos;s largest network-based wealth management bank, with thousands of
                    financial advisors operating across the country. The CRM implementation had to
                    support the full advisory lifecycle — lead management, opportunity tracking,
                    regulatory reporting — while integrating with core banking systems and respecting
                    the strict data segregation between advisory network, operations, and compliance.
                    Custom Power Apps extended the platform to field advisors on mobile.
                  </p>
                </div>

                <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6">
                  <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-2">
                    Digital Banking / Fintech
                  </p>
                  <h3 className="text-lg font-bold text-[#E6EDF3] mb-3">illimity Bank</h3>
                  <p className="text-[#7D8FA3] text-sm leading-relaxed">
                    A digital-first bank focused on SME lending and distressed credit. The CRM
                    architecture had to accommodate complex lending workflows with custom Dataverse
                    entities, integrated with the bank&apos;s proprietary credit scoring engine.
                    Being a natively digital organisation, the implementation moved fast — but
                    regulatory constraints on data handling and decision auditability were the same
                    as any traditional bank.
                  </p>
                </div>

                <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6">
                  <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-2">
                    Insurance
                  </p>
                  <h3 className="text-lg font-bold text-[#E6EDF3] mb-3">Unipol</h3>
                  <p className="text-[#7D8FA3] text-sm leading-relaxed">
                    One of Italy&apos;s largest insurance groups. Dynamics 365 Customer Service
                    deployment for claims management and policyholder engagement. Omnichannel
                    integration — email, phone, web chat — with SLA-driven routing and Power BI
                    operational dashboards. The challenge was not the technology but the organisational
                    complexity: multiple business units, each with its own approval layers, compliance
                    requirements, and legacy system dependencies.
                  </p>
                </div>
              </div>
            </div>

            {/* Banking-grade implementation context */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Banking-grade implementation context</h2>
              <div className="text-[#7D8FA3] text-lg leading-relaxed space-y-4">
                <p>
                  These were not standard CRM rollouts. Each engagement required:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Compliance-aware data architecture with segregation between front office, risk, and operations data</li>
                  <li>Integration with core banking and regulatory reporting systems</li>
                  <li>Audit-trail requirements aligned with internal control frameworks</li>
                  <li>Change management across regulated business units with multiple approval layers</li>
                </ul>
                <p>
                  This is the operational context that shapes how we approach every AI or data
                  project in financial services — governance is not a feature added at the end,
                  it is the starting constraint.
                </p>
              </div>
            </div>

            {/* Why this matters for AI projects */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Why this matters for AI projects</h2>
              <p className="text-[#7D8FA3] text-lg leading-relaxed">
                The governance patterns we implemented in these CRM engagements — role segregation,
                audit trails, approval gates, data compartmentalisation — are the same patterns
                required for AI agent systems in financial services today. The technology has changed
                from Dynamics 365 to LLMs and agentic workflows, but the constraints have not: who
                authorised this action, on what data, with what model, and is the log immutable.
                Our financial services experience means we design AI systems that meet these
                requirements from day one, not as a retrofit.
              </p>
            </div>

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
