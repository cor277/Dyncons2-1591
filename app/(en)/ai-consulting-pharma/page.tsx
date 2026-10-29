import type { Metadata } from "next";
import { NEXUS_SERVICE_COUNT } from "@/lib/nexus";
import { OG_IMAGE } from "@/app/og";
import { ORG_ID, NEXUS_ID, WEBSITE_ID } from "@/app/schema-org";
import { breadcrumbSchema } from "@/app/seo";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

const TITLE = "AI Consulting for Pharmaceutical Companies | Nexus MDS Core";
const DESCRIPTION =
  "AI consulting for pharmaceutical and mid-market pharma companies: RAG over documents, agentic workflows, architecture designed around Italy’s Law 132/2025 and the GDPR. A sovereign alternative to the hyperscalers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/ai-consulting-pharma"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.dynamicsconsulting.it/ai-consulting-pharma",
    type: "website",
    locale: "en_US",
  },
};

const PAGE_URL = "https://www.dynamicsconsulting.it/ai-consulting-pharma";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "AI consulting for the pharmaceutical sector",
    description: DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": ORG_ID }, { "@id": NEXUS_ID }],
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  breadcrumbSchema(PAGE_URL, [
    { name: "Home", path: "/" },
    { name: "AI consulting for the pharmaceutical sector" },
  ]),
];

export default function AiConsultingPharmaPage() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Pharma
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              AI consulting for the pharmaceutical sector and mid-market pharma
            </h1>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              The Italian pharmaceutical sector faces a particular challenge: bringing artificial
              intelligence into operational processes — from document management to
              pharmacovigilance — while staying fully within the regulatory framework. Law
              132/2025, Italy&apos;s national AI law, together with the GDPR and the EU AI Act,
              sets a regulatory frame that makes hyperscalers&apos; cloud-based AI solutions
              unsuitable for many critical applications.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Dynamics Consulting</strong> specialises in
              designing and implementing sovereign AI infrastructure for mid-market pharma. We do
              not sell software licences: we design architectures to fit, implement them
              on-premise, and make them operational.
            </p>
            <p>
              Our approach is built on <strong className="text-[#E6EDF3]">Nexus MDS Core</strong>,
              a platform of {NEXUS_SERVICE_COUNT} containerised services that includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#7D8FA3]">
              <li>RAG pipelines for querying pharmaceutical documents intelligently</li>
              <li>Agentic workflows with n8n to automate regulatory processes</li>
              <li>Indexing, retrieval and audit inside the perimeter; generation on a local model or on a replaceable EU endpoint</li>
              <li>Zero-Trust authentication with Keycloak OIDC/PKCE</li>
              <li>Vector search with Weaviate for semantic search across the document base</li>
            </ul>
            <p>
              Unlike solutions built on Azure, AWS or GCP, with Nexus MDS Core the data stays
              under the organisation&apos;s control, inside the European Union. There is no
              hyperscaler dependency, no lock-in risk, and the controls are verifiable by design.
            </p>
            <p>
              Nexus MDS Core is already in production at Federfarma Lombarda, the association of
              pharmacy owners in Lombardy, where it powers a RAG pipeline over more than 10,000
              pharmaceutical documents, with mobile PWA access and Zero-Trust authentication.
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
                <Link href="/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Federfarma Lombarda — Nexus MDS Core in production
                </Link>
                <span className="text-[#7D8FA3]"> — pharmaceutical distribution, more than 1,000 pharmacies.</span>
              </li>
              <li>
                <Link href="/sovereign-ai-pharma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Sovereign AI for pharma
                </Link>
                <span className="text-[#7D8FA3]"> — the vertical, in full.</span>
              </li>
              <li>
                <Link href="/services/governance-advisory" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  AI governance and compliance advisory
                </Link>
                <span className="text-[#7D8FA3]"> — the regulatory framing, and an architecture that carries the obligations.</span>
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
