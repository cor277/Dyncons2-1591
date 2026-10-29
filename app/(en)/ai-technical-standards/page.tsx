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

const TITLE = "AI for Engineering Standards and Technical Documentation | Nexus MDS Core";
const DESCRIPTION =
  "RAG over ISO, EN and national standards, specifications and revision histories for engineering firms. Answers cited with the right standard and revision. Traceability for professional liability.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/ai-technical-standards"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.dynamicsconsulting.it/ai-technical-standards",
    type: "website",
    locale: "en_US",
  },
};

const PAGE_URL = "https://www.dynamicsconsulting.it/ai-technical-standards";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "AI for technical standards and engineering",
    description: DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": ORG_ID }, { "@id": NEXUS_ID }],
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  breadcrumbSchema(PAGE_URL, [
    { name: "Home", path: "/" },
    { name: "AI for technical standards and engineering" },
  ]),
];

export default function AiTechnicalStandardsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Engineering
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Artificial intelligence for technical standards and engineering
            </h1>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              Engineering firms — civil, structural, aerospace, industrial — work on enormous
              document corpora: ISO standards, UNI standards (Italy&apos;s national standards
              body), EN standards, project specifications, tender specifications, contractor
              documentation, revision histories, technical manuals. A senior engineer knows this
              corpus by instinct. But the corpus runs to thousands of pages, changes constantly,
              and varies by client and jurisdiction.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">The real problem</strong> is not finding a
              document — it is finding the right clause, in the right revision, applicable to the
              correct project date. A system that returns the wrong standard or an obsolete
              revision is not just useless — it is a professional liability risk.
            </p>
            <p>
              We build RAG systems that reason over technical documentation. Engineers ask in
              natural language and get cited answers — standard, clause number, revision. The
              system is <strong className="text-[#E6EDF3]">version-aware</strong>: it knows which
              revision of a standard applies to a given project date, and it will not answer with
              an obsolete clause.
            </p>
            <p>
              Every answer is recorded: who asked, when, which document answered. In contexts with
              professional liability this is not optional. The log is tamper-evident and available
              for audit.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">The founder&apos;s background:</strong> Corrado
              Patierno trained in aeronautical engineering and led the IATP project — AI-driven
              reverse engineering of a legacy platform in the aviation sector. That background
              shapes directly how we design RAG systems for technical documentation: precision is
              not a nice-to-have, it is a structural requirement.
            </p>
            <p>
              The infrastructure runs on <strong className="text-[#E6EDF3]">Nexus MDS Core</strong>,
              deployable on-premise. Semantic chunking by clause, metadata carrying the full
              hierarchy of the standard, vector search with Weaviate. Documents and indexes stay
              inside the firm&apos;s perimeter. GDPR controls mapped by design.
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
                <Link href="/answers/superseded-documents-rag" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Superseded documents in a RAG system
                </Link>
                <span className="text-[#7D8FA3]"> — how to tell a standard in force from a withdrawn one.</span>
              </li>
              <li>
                <Link href="/answers/rag-audit-trail" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  RAG with an audit trail
                </Link>
                <span className="text-[#7D8FA3]"> — what to record so an answer can be reconstructed.</span>
              </li>
              <li>
                <Link href="/research/rag-enterprise-data" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Implementing RAG on enterprise data
                </Link>
                <span className="text-[#7D8FA3]"> — the decisions that matter.</span>
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
