import type { Metadata } from "next";
import { NEXUS_SERVICE_COUNT } from "@/lib/nexus";
import { OG_IMAGE } from "@/app/og";
import { ORG_ID, NEXUS_ID, WEBSITE_ID } from "@/app/schema-org";
import { breadcrumbSchema, faqSchema } from "@/app/seo";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

const TITLE = "Sovereign AI in Italy and the EU — Governable AI Infrastructure";
const DESCRIPTION =
  "Sovereign AI for organisations in regulated sectors in Italy and the EU. EU AI Act, GDPR, NIS2. Nexus MDS Core — an on-premise AI platform for healthcare, pharma and regulated industries.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/sovereign-ai"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.dynamicsconsulting.it/sovereign-ai",
    type: "website",
    locale: "en_US",
  },
};

const faqs = [
  {
    q: "Does sovereign AI have to mean everything on-premise?",
    a: "No. It means control over jurisdiction, operational governance and the replaceability of components. A system in which data, retrieval, identity and audit stay local, and only the final generation step goes through a replaceable external endpoint, is sovereign in the sense that matters — provided that boundary is declared and personal data does not cross it.",
  },
  {
    q: "What hardware do you need to get started?",
    a: "Less than you might think, if the use case is document-centred. The system in production at Federfarma Lombarda runs its local model, privacy filter and embeddings on a single 8 GB GPU; the same architecture, unchanged, runs on 48 GB cards when final generation also has to come in-house. Sizing is decided after the retrieval design, not before.",
  },
  {
    q: "Does Dynamics Consulting certify the system’s compliance?",
    a: "No, and nobody can: conformity is established through the procedures the regulation itself provides for. What we deliver is a signed document on what is in place, what is missing and in what order to close the gap — together with the architecture that carries those controls.",
  },
  {
    q: "Where is the best place to start?",
    a: "With an exposure assessment: understanding where your supplier’s responsibility stops and yours begins, before choosing the platform. It is a fixed-scope, fixed-price engagement with a signed deliverable.",
  },
];

const PAGE_URL = "https://www.dynamicsconsulting.it/sovereign-ai";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": ORG_ID }, { "@id": NEXUS_ID }],
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  faqSchema(PAGE_URL, faqs),
  breadcrumbSchema(PAGE_URL, [
    { name: "Home", path: "/" },
    { name: TITLE },
  ]),
];

export default function SovereignAiPage() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Sovereign AI
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Sovereign AI for Italian and European organisations in regulated sectors
            </h1>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              <strong className="text-[#E6EDF3]">Sovereign AI</strong> does not just mean
              &ldquo;everything on-premise&rdquo;. It means the organisation keeps control of three
              things: the <strong className="text-[#E6EDF3]">jurisdiction</strong> its data is
              subject to; the <strong className="text-[#E6EDF3]">operational governance</strong>{" "}
              of the system — who can change the model, the filters and the terms, and with how
              much notice; and the <strong className="text-[#E6EDF3]">replaceability</strong> of
              its components, which is what makes the first two enforceable rather than merely
              contractual. Under the Italian and European regulatory framework of 2025-2026 this is
              not a technology preference: it is the condition for being able to demonstrate what
              the rules require.
            </p>
            <p>
              The EU AI Act (in force since August 2024, with obligations phasing in up to 2027),
              the GDPR, the NIS2 Directive and Law 132/2025 — Italy&apos;s first comprehensive
              national AI law — together create a framework in which organisations in healthcare,
              pharmaceuticals, finance and public administration must demonstrate effective control
              over their AI systems: where the data resides, how it is processed, who has access,
              and how model outputs are governed.
            </p>
            <p>
              For mid-market organisations in Italy, that is a specific challenge. Large
              enterprises can invest in in-house teams and proprietary infrastructure. Start-ups can
              accept the cloud risk. The mid-market — hospitals, pharmacy chains, regional
              pharmaceutical companies, utilities — needs a platform that is enterprise-grade yet
              affordable, sovereign yet manageable.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Nexus MDS Core</strong> is the platform built
              specifically for that segment. {NEXUS_SERVICE_COUNT} containerised services — local
              LLM inference, RAG pipelines, Zero-Trust authentication, a workflow engine, an audit
              of every model call — on Docker, on-premise or on sovereign EU infrastructure, moving
              to Kubernetes when scale calls for it. Generation runs on a local model or on a
              replaceable EU endpoint. Designed for healthcare and pharma, built around the
              requirements of the AI Act, with GDPR controls mapped and data resident in the EU.
            </p>
            <p>
              Dynamics Consulting is the mid-market specialist for sovereign AI in Italy. Unlike
              generalist system integrators, we focus exclusively on on-premise AI infrastructure
              for regulated sectors. Every project is led directly by the founder, Corrado
              Patierno, who has more than 25 years of experience in enterprise systems.
            </p>
            <div className="pt-6">
              <CTAButton label="Request a Nexus demo →" href="/contact" variant="primary" />
            </div>
          </div>
        </section>
        {/* Taxonomy — the same one used across the site */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Three models, not one</h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-6">
              On its own, &ldquo;sovereign&rdquo; has become a marketing term. This is the
              taxonomy used throughout this site, and the first thing a project has to decide is
              which of the three it actually needs — and what it gives up in each case.
            </p>
            <dl className="space-y-5">
              <div className="border-l-2 border-[#00B4D8] pl-5">
                <dt className="font-semibold text-[#E6EDF3] mb-1">Fully local AI</dt>
                <dd className="text-[#7D8FA3] text-base leading-relaxed">
                  Indexing, retrieval, identity, audit and generation all run on the
                  organisation&apos;s own infrastructure. Maximum sovereignty, maximum hardware
                  cost, model choice limited to what can be hosted.
                </dd>
              </div>
              <div className="border-l-2 border-[#00B4D8] pl-5">
                <dt className="font-semibold text-[#E6EDF3] mb-1">Hybrid sovereign AI</dt>
                <dd className="text-[#7D8FA3] text-base leading-relaxed">
                  Data, retrieval, reconciliation, identity and audit stay local; only final
                  generation calls an external inference endpoint, under policy and replaceable
                  without redesigning the system. It is the model in production at{" "}
                  <Link
                    href="/case-studies/federfarma"
                    className="text-[#00B4D8] hover:text-[#E6EDF3]"
                  >
                    Federfarma Lombarda
                  </Link>
                  .
                </dd>
              </div>
              <div className="border-l-2 border-[#00B4D8] pl-5">
                <dt className="font-semibold text-[#E6EDF3] mb-1">Private EU inference</dt>
                <dd className="text-[#7D8FA3] text-base leading-relaxed">
                  Inference on private or EU-resident infrastructure, with residency, retention and
                  access terms defined explicitly. Suitable when the constraint is jurisdiction
                  rather than physical custody of the hardware.
                </dd>
              </div>
            </dl>
            <p className="text-[#7D8FA3] text-base leading-relaxed mt-6">
              One consequence is worth stating plainly: the honest description of a hybrid system
              is not &ldquo;everything on-premise&rdquo;, nor &ldquo;the data never leaves the
              perimeter&rdquo; — the retrieved context does leave, and that is exactly why personal
              data must not enter the index. The long version of this distinction is in{" "}
              <Link
                href="/answers/private-ai-vs-sovereign-ai"
                className="text-[#00B4D8] hover:text-[#E6EDF3]"
              >
                private AI vs sovereign AI
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-[#E6EDF3] text-base mb-2">{f.q}</h3>
                  <p className="text-[#7D8FA3] text-base leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Further reading */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto border-t border-[#30363D] pt-8">
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Further reading</h2>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/platform" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Nexus MDS Core
                </Link>
                <span className="text-[#7D8FA3]"> — the platform, service by service.</span>
              </li>
              <li>
                <Link
                  href="/services/governance-advisory"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  AI governance and compliance advisory
                </Link>
                <span className="text-[#7D8FA3]">
                  {" "}
                  — the regulatory framing of the system, and an architecture that carries the
                  obligations.
                </span>
              </li>
              <li>
                <Link
                  href="/ai-on-premise-healthcare"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  On-premise AI for healthcare
                </Link>
                <span className="text-[#7D8FA3]"> — the healthcare vertical.</span>
              </li>
              <li>
                <Link href="/research/law-132-2025" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Law 132/2025 and AI in healthcare
                </Link>
                <span className="text-[#7D8FA3]"> — what Italy&apos;s AI law changes, in practice.</span>
              </li>
              <li>
                <Link href="/cepf" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Compliance-Epistemic Project Framework (CEPF)
                </Link>
                <span className="text-[#7D8FA3]">
                  {" "}
                  — the catalogue of regulatory overlaps that the governance side runs on.
                </span>
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
