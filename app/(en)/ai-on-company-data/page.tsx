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

const TITLE = "How to Implement AI on Your Company Data | Nexus MDS Core";
const DESCRIPTION =
  "A structured path for SMEs: discovery, RAG MVP, validation. On-premise AI on Nexus MDS Core, with controls mapped to the GDPR and your data inside your perimeter.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/ai-on-company-data"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.dynamicsconsulting.it/ai-on-company-data",
    type: "website",
    locale: "en_US",
  },
};

const PAGE_URL = "https://www.dynamicsconsulting.it/ai-on-company-data";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Implementing AI on company data",
    description: DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": ORG_ID }, { "@id": NEXUS_ID }],
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  breadcrumbSchema(PAGE_URL, [
    { name: "Home", path: "/" },
    { name: "Implementing AI on company data" },
  ]),
];

export default function AiOnCompanyDataPage() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              AI for SMEs
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Implementing AI on your company data: the path for SMEs
            </h1>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              Most Italian SMEs share the same problem: the data exists, but it is scattered across
              shared folders, email, scanned PDFs, exports from the management system and Excel
              files used as databases. There is no governance, no structure, no API. The idea of
              &quot;implementing AI&quot; looks impossible without putting things in order first.
              And putting things in order looks like a project measured in years, not months.
            </p>
            <p>
              The wrong answer is to buy a generic AI tool. The right answer is to work out which
              questions the business needs that data to answer — and to build the retrieval system
              around those questions, not around the infrastructure.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Our path has three phases:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#7D8FA3]">
              <li>
                <strong className="text-[#E6EDF3]">Discovery (2 weeks):</strong> data inventory,
                access mapping, assessment of document quality, audit of formats. It is not
                overhead — it is the insurance that saves three months of rework.
              </li>
              <li>
                <strong className="text-[#E6EDF3]">RAG MVP (4 weeks):</strong> a working RAG
                system on a defined, bounded corpus. Semantic chunking, vector search with
                Weaviate, answers that cite their source. Validated with real users before any
                further investment.
              </li>
              <li>
                <strong className="text-[#E6EDF3]">Validation and scaling:</strong> measuring
                retrieval quality (MRR, Recall@k), user feedback, progressive extension of the
                corpus. No scale-up without evidence that the system works.
              </li>
            </ul>
            <p>
              The whole infrastructure runs on{" "}
              <strong className="text-[#E6EDF3]">Nexus MDS Core</strong>: {NEXUS_SERVICE_COUNT}{" "}
              containerised services, deployed on-premise or on a dedicated server. Indexing,
              retrieval, identity and audit stay inside your perimeter; generation runs on a local
              model or on a replaceable EU endpoint. No hyperscaler lock-in. GDPR controls mapped
              and verifiable by design.
            </p>
            <p>
              For SMEs that have never implemented an AI system, this is the starting point: a
              structured path with measurable results in six weeks, not an open-ended project that
              grows out of control.
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
                <Link href="/research/rag-enterprise-data" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Implementing RAG on enterprise data: the honest guide
                </Link>
                <span className="text-[#7D8FA3]"> — discovery, chunking, retrieval evaluation.</span>
              </li>
              <li>
                <Link href="/answers/superseded-documents-rag" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Superseded regulatory documents in a RAG system
                </Link>
                <span className="text-[#7D8FA3]"> — version chains and validity intervals.</span>
              </li>
              <li>
                <Link href="/services/data-platforms" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Data platforms and RAG architectures
                </Link>
                <span className="text-[#7D8FA3]"> — the service line.</span>
              </li>
              <li>
                <Link href="/platform" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Nexus MDS Core
                </Link>
                <span className="text-[#7D8FA3]"> — the platform these systems run on.</span>
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
