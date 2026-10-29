import type { Metadata } from "next";
import { OG_IMAGE } from "@/app/og";
import { ORG_ID, NEXUS_ID, WEBSITE_ID } from "@/app/schema-org";
import { breadcrumbSchema } from "@/app/seo";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

const TITLE = "AI Agent Governance for Banks and Asset Managers | Nexus MDS Core";
const DESCRIPTION =
  "AI agent governance for banks and asset managers: human approval gates, tamper-evident audit logs, RBAC and full LLM logging. Architecture designed around DORA, MiFID II and EU AI Act requirements.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/ai-agents-finance"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.dynamicsconsulting.it/ai-agents-finance",
    type: "website",
    locale: "en_US",
  },
};

const PAGE_URL = "https://www.dynamicsconsulting.it/ai-agents-finance";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "AI agents for finance and compliance",
    description: DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": ORG_ID }, { "@id": NEXUS_ID }],
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  breadcrumbSchema(PAGE_URL, [
    { name: "Home", path: "/" },
    { name: "AI agents for finance and compliance" },
  ]),
];

export default function AiAgentsFinancePage() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Financial services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              AI agents for finance, compliance and audit
            </h1>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              An AI agent working on financial data is not a chatbot. It is a system that takes
              operational decisions. Internal audit, risk management and compliance will ask: who
              authorised this action? Which model decided? On what data? Is the log immutable? Was
              the four-eyes principle respected?
            </p>
            <p>
              We design agentic architectures with governance built in as an architectural
              constraint, not as a feature bolted on at the end:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#7D8FA3]">
              <li>
                <strong className="text-[#E6EDF3]">Human-in-the-loop approval gates</strong>{" "}
                before any write action by the agent
              </li>
              <li>
                <strong className="text-[#E6EDF3]">Tamper-evident audit trail</strong> on
                Postgres, encrypted and hash-chained, with a configurable retention period
              </li>
              <li>
                <strong className="text-[#E6EDF3]">RBAC with domain segregation</strong>{" "}
                between front office, risk, compliance and IT
              </li>
              <li>
                <strong className="text-[#E6EDF3]">Complete LLM logging:</strong> input, output,
                model version, timestamp — for every inference
              </li>
            </ul>
            <p>
              Every decision the agent takes can be explained: who triggered it, which model
              decided, on what data, at what time. That is the level of traceability regulators
              and internal audit expect.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Regulatory alignment:</strong>{" "}
              DORA (operational resilience, incident logging), MiFID II (traceability of
              decisions), the EU AI Act (obligations for high-risk systems), GDPR (data
              minimisation, right to explanation).
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Sector experience:</strong> we implemented
              Dynamics 365 CRM for Banca Mediolanum, illimity Bank and Unipol — Italian banking
              and insurance groups where data segregation, audit trails and multi-level approvals
              were non-negotiable requirements. The same governance discipline now drives how we
              design agentic AI systems.
            </p>
            <p>
              The infrastructure runs on <strong className="text-[#E6EDF3]">Nexus MDS Core</strong>:
              on-premise deployment, Keycloak for RBAC, n8n for approval workflows, Postgres for
              the audit trail. No hyperscaler lock-in. EU data residency follows from the
              architecture.
            </p>
            <div className="pt-6">
              <CTAButton label="Let’s talk about your project →" href="/contact" variant="primary" />
            </div>
          </div>
        </section>
        {/* Further reading — contextual internal links */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto border-t border-[#30363D] pt-8">
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Further reading</h2>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/services/governance-advisory" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  AI governance and compliance advisory
                </Link>
                <span className="text-[#7D8FA3]"> — AI Act, DORA and NIS2 on the same architecture.</span>
              </li>
              <li>
                <Link href="/answers/rag-audit-trail" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  RAG with an audit trail
                </Link>
                <span className="text-[#7D8FA3]"> — the record that makes an answer reconstructable.</span>
              </li>
              <li>
                <Link href="/research/governing-ai-outputs" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Governing AI outputs in regulated industries
                </Link>
                <span className="text-[#7D8FA3]"> — the technical playbook.</span>
              </li>
              <li>
                <Link href="/platform" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Nexus MDS Core
                </Link>
                <span className="text-[#7D8FA3]"> — the platform, service by service.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Close — assessment */}
        <section className="px-6 py-16 border-t border-[#21262D] bg-[#11161D]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
              Where does your supplier’s liability stop, and yours begin?
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              The revised European product liability directive includes software among products,
              and applies to products placed on the market or put into service from 9 December
              2026. The exposure assessment establishes, for your organisation, where the boundary
              sits.
            </p>
            <CTAButton label="Exposure assessment →" href="/assessment" variant="primary" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
