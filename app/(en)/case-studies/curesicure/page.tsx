import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n-routes";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { NEXUS_ID, ORG_ID } from "@/app/schema-org";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";
import Link from "next/link";

const CASE_URL = "https://www.dynamicsconsulting.it/case-studies/curesicure";

const TITLE = "CureSicure — public hospital data, read for patients";
const DESCRIPTION =
  "A pro bono service in production on Nexus MDS Core. It reads public hospital data (PNE-AGENAS, SDO/NSIS, Ministry of Health open data) and, given a condition, helps a patient find the facilities that measure best on quality and efficiency. By design it tracks no users: the platform keeps only the technical audit log of model calls.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/case-studies/curesicure"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: CASE_URL,
    type: "article",
    locale: "en_US",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const sources = [
  {
    name: "PNE — Programma Nazionale Esiti (AGENAS)",
    desc: "Outcome and process indicators by facility, published by the national agency for regional health services.",
  },
  {
    name: "SDO / NSIS",
    desc: "Hospital discharge records, collected through the Ministry of Health’s national health information system.",
  },
  {
    name: "Ministry of Health open data",
    desc: "The datasets the Ministry publishes openly on facilities and their activity.",
  },
];

const schema = [
  {
    ...articleSchema({
      url: CASE_URL,
      type: "TechArticle",
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: "2026-10",
      dateModified: "2026-10",
      inLanguage: "en",
      articleSection: "Case study",
      about: ["Public health data", "Hospital quality indicators", "Sovereign AI"],
    }),
    isBasedOn: { "@id": NEXUS_ID },
    sourceOrganization: { "@id": ORG_ID },
  },
  breadcrumbSchema(CASE_URL, [
    { name: "Home", path: "/" },
    { name: "Case studies", path: "/case-studies" },
    { name: "CureSicure" },
  ]),
];

export default function CureSicureCaseStudy() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <article>
          {/* Hero */}
          <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/case-studies"
                className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
              >
                ← All case studies
              </Link>
              <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
                Healthcare · Pro bono
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
                CureSicure — public hospital data, read for patients
              </h1>
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[#7D8FA3] text-base">
                <div>
                  <dt className="inline font-semibold text-[#E6EDF3]">Sector: </dt>
                  <dd className="inline">healthcare, public information</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#E6EDF3]">Platform: </dt>
                  <dd className="inline">Nexus MDS Core</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#E6EDF3]">Terms: </dt>
                  <dd className="inline">pro bono</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#E6EDF3]">Status: </dt>
                  <dd className="inline">in production</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#E6EDF3]">Author: </dt>
                  <dd className="inline">
                    <Link href="/about" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                      Corrado Patierno
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#E6EDF3]">Last updated: </dt>
                  <dd className="inline">
                    <time dateTime="2026-10">October 2026</time>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-sm text-[#7D8FA3]">
                <Link
                  href="/it/case-studies/curesicure"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                  hrefLang="it"
                >
                  Leggi questa pagina in italiano →
                </Link>
              </p>
            </div>
          </section>

          {/* Facts bar — deliberately no usage figures */}
          <section className="border-b border-[#30363D] bg-[#161B22]">
            <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "Pro bono", label: "Service terms" },
                { value: "Public", label: "Hospital data only" },
                { value: "None", label: "Usage metrics, by design" },
                { value: "Nexus", label: "MDS Core platform" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-2xl md:text-3xl font-bold text-[#E6EDF3]">{m.value}</div>
                  <div className="text-xs md:text-sm text-[#7D8FA3] mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Body */}
          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto space-y-12 text-[#7D8FA3] leading-relaxed text-lg">
              <div>
                <h2 id="what-it-does" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  What it does
                </h2>
                <p>
                  How well an Italian hospital treats a given condition is not a secret. Outcome and
                  efficiency indicators are measured and published, facility by facility. They are
                  published for analysts and administrators, though, not for a patient deciding where
                  to be treated.
                </p>
                <p className="mt-4">
                  CureSicure reads that public data and turns it round: given a condition, it helps
                  the patient find the facilities that{" "}
                  <strong className="text-[#E6EDF3]">measure best on quality and efficiency</strong>.
                  Dynamics Consulting runs it as a pro bono service, in production.
                </p>
              </div>

              <div>
                <h2 id="data-sources" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Where the data comes from
                </h2>
                <p>The service works on public sources only:</p>
                <ul className="mt-4 space-y-4">
                  {sources.map((s) => (
                    <li key={s.name} className="border-l-2 border-[#30363D] pl-4">
                      <strong className="text-[#E6EDF3]">{s.name}.</strong> {s.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 id="no-usage-figures" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Why this page has no usage numbers
                </h2>
                <p>
                  A case study usually reports how much a system is used. This one does not, and
                  that is a design decision rather than a gap.
                </p>
                <p className="mt-4">
                  CureSicure{" "}
                  <strong className="text-[#E6EDF3]">
                    collects no usage metrics and tracks no users; the platform keeps only the technical audit log of model calls
                  </strong>
                  , by choice. With no usage data collected there is nothing to count, so this page
                  publishes no usage figures and claims none.
                </p>
              </div>

              <div>
                <h2 id="architecture" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  How it runs
                </h2>
                <p>
                  CureSicure runs on{" "}
                  <Link href="/platform" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                    Nexus MDS Core
                  </Link>
                  , the same platform that serves{" "}
                  <Link
                    href="/case-studies/federfarma"
                    className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                  >
                    Federfarma Lombarda
                  </Link>
                  . The retrieval layer works over the public datasets above; identity and audit are
                  the platform’s own services, which the service inherits rather than rebuilds.
                </p>
                <p className="mt-4">
                  That is the point of building governance once: a small pro bono service gets the
                  same identity and audit layer as a regulatory assistant for a thousand pharmacies,
                  without a separate project to build it.
                </p>
              </div>
            </div>
          </section>

          {/* Close */}
          <section className="py-20 px-6 border-t border-[#30363D] bg-[#161B22]">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
                AI on health data, inside your perimeter
              </h2>
              <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
                How the same platform is deployed for hospitals, pharma and clinical research, and
                where the data boundary sits.
              </p>
              <CTAButton
                label="On-premise AI for healthcare →"
                href="/ai-on-premise-healthcare"
                variant="primary"
              />
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
