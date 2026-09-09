import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { CalibraDemo } from "./CalibraDemo";
import Link from "next/link";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { ORG_ID, WEBSITE_ID, CEPF_ID, CALIBRA_ID } from "@/app/schema-org";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TextLink } from "@/components/ui/TextLink";

const URL = "https://www.dynamicsconsulting.it/calibra";

const DESCRIPTION =
  "Calibra is the software built on the Compliance-Epistemic Project Framework (CEPF): the regulatory catalogue plus risk, scheduling, operational flow, Gantt and milestones. Proprietary to Dynamics Consulting, used inside governance and compliance engagements.";

export const metadata: Metadata = {
  title: "Calibra — the software built on CEPF",
  description: DESCRIPTION,
  keywords: ["Calibra", "CEPF software", "compliance programme management", "AI governance tooling"],
  alternates: { canonical: URL },
  openGraph: {
    images: OG_IMAGE,
    title: "Calibra — the software built on CEPF",
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "Calibra — the software built on CEPF",
    description: DESCRIPTION,
  },
};

/**
 * Crawlable page for Calibra.
 *
 * Until now the software was described only inside the CEPF page and behind the
 * interactive demo on the CEPF page, which made the entity hard to resolve: CEPF and Calibra read
 * as one thing. Everything stated here is already stated elsewhere on the site —
 * nothing about the product is asserted that /cepf does not support.
 */
const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "Calibra — the software built on CEPF",
    description: DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": CALIBRA_ID }, { "@id": CEPF_ID }],
    mainEntity: { "@id": CALIBRA_ID },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": CALIBRA_ID,
    name: "Calibra",
    url: URL,
    applicationCategory: "BusinessApplication",
    creator: { "@id": ORG_ID },
    isBasedOn: { "@id": CEPF_ID },
    inLanguage: "it",
    featureList: [
      "Regulatory catalogue from CEPF — frameworks, requirements, cross-framework overlaps",
      "Document templates per obligation",
      "Risk register",
      "Scheduling and operational flow",
      "Gantt and milestones",
    ],
  },
];

const crumbs = breadcrumbSchema("https://www.dynamicsconsulting.it/calibra", [
  { name: "Home", path: "/" },
  { name: "Calibra" },
]);

/* The nine regimes the demonstration instance carries, out of the nineteen in
   CEPF v7. It describes the demo, so it lives with the demo. */
const DEMO_REGIMES = [
  ["SOX IT", "Sarbanes-Oxley IT general controls — PCAOB AS 2201, COSO 2013"],
  ["NIS2", "Directive (EU) 2022/2555"],
  ["AI Act", "Regulation (EU) 2024/1689"],
  ["GDPR", "Regulation (EU) 2016/679"],
  ["DORA", "Regulation (EU) 2022/2554"],
  ["ISO/IEC 27001:2022", "Information Security Management System"],
  ["ISO 56001:2024", "Innovation Management System"],
  ["ENS", "Esquema Nacional de Seguridad — Real Decreto 311/2022"],
  ["GS1", "EPC/RFID and EPCIS 2.0 supply chain standards"],
];

export default function CalibraPage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen text-[#E6EDF3]">
        <section className="px-6 pt-28 pb-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-5">
              Proprietary software
            </p>
            <h1 className="font-syne text-3xl md:text-[2.6rem] font-extrabold leading-[1.15] mb-6">
              Calibra — the software built on CEPF
            </h1>

            <div className="space-y-5 text-[#7D8FA3] text-lg leading-relaxed">
              <p>
                Calibra is the software that implements the{" "}
                <Link href="/cepf" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                  Compliance-Epistemic Project Framework (CEPF)
                </Link>
                . The distinction matters and the two names are not interchangeable: CEPF is the
                methodology — the regulatory content, the obligations, the overlaps — and Calibra
                is the application built on top of it.
              </p>
              <p>
                Beyond the regulatory catalogue, Calibra carries risk, scheduling, operational
                flow, Gantt and milestones. That is what turns an analysis into a programme: a
                remediation plan with dates, owners and effort, rather than a list of findings.
              </p>
              <p>
                It is proprietary to Dynamics Consulting and is used inside engagements —
                the{" "}
                <Link
                  href="/services/governance-advisory"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  AI governance and compliance advisory
                </Link>{" "}
                work, and the{" "}
                <Link
                  href="/assessment"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  exposure assessment
                </Link>{" "}
                that usually opens them.
              </p>
            </div>

            {/* What it holds */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-[#E6EDF3] mb-4">What it holds</h2>
              <ul className="space-y-3 text-[#7D8FA3] leading-relaxed">
                {[
                  [
                    "The CEPF catalogue.",
                    "Version 7, snapshot July 2026 — 19 frameworks mapped onto their operational obligations, 247 requirements, 24 cross-framework overlap groups, 695 document templates.",
                  ],
                  [
                    "Risk.",
                    "Risks recorded against the obligations they threaten, rather than in a separate register nobody reconciles.",
                  ],
                  [
                    "Time.",
                    "Scheduling, operational flow, Gantt and milestones for the remediation programme.",
                  ],
                  [
                    "Deliverables.",
                    "The document templates each obligation requires, and the roles that produce them.",
                  ],
                ].map(([t, b]) => (
                  <li key={t}>
                    <strong className="text-[#E6EDF3]">{t}</strong> {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Demo */}
            <div className="mt-10 rounded-lg border border-[#30363D] bg-[#161B22] px-6 py-5">
              <p className="text-[#E6EDF3] font-semibold mb-2">The demo runs below.</p>
              <p className="text-[#7D8FA3] leading-relaxed">
                It is a demonstration instance, not the production one: it covers nine of the
                nineteen frameworks in CEPF v7 and a subset of Calibra’s planning functions. Its
                interface is in Italian.
              </p>
              <p className="text-[#7D8FA3] leading-relaxed mt-3" lang="it">
                Lo strumento è in italiano, e lo è anche{" "}
                <a
                  href="/it/assessment"
                  hrefLang="it"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  l’assessment di esposizione
                </a>
                : se stai leggendo la demo, quello è il percorso giusto.
              </p>
            </div>

            {/* Frameworks the demo instance covers */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-[#E6EDF3] mb-4">
                Frameworks covered by this demo
              </h2>
              <ul className="space-y-2 text-[#7D8FA3]">
                {DEMO_REGIMES.map(([name, ref]) => (
                  <li key={name} className="leading-relaxed">
                    <strong className="text-[#E6EDF3]">{name}</strong> — {ref}
                  </li>
                ))}
              </ul>
            </div>

            {/* Where it sits */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-[#E6EDF3] mb-4">Where it sits</h2>
              <div className="space-y-4 text-[#7D8FA3] leading-relaxed">
                <p>
                  <strong className="text-[#E6EDF3]">CEPF</strong> is the methodology.{" "}
                  <strong className="text-[#E6EDF3]">Calibra</strong> is the software that
                  implements it.{" "}
                  <Link
                    href="/platform"
                    className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                  >
                    Nexus MDS Core
                  </Link>{" "}
                  is a different thing again: the self-hosted AI platform the systems themselves
                  run on. Calibra governs the programme; Nexus runs the workload.
                </p>
                <p>
                  All three are built and maintained by{" "}
                  <Link href="/about" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                    Dynamics Consulting
                  </Link>
                  , an independent AI consulting and engineering practice working on sovereign AI
                  infrastructure, AI governance and regulated environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive demo — moved here from /cepf: it demonstrates Calibra */}
        <section className="px-6 pb-20">
          <div className="max-w-[1280px] mx-auto">
            <CalibraDemo />
          </div>
        </section>

        <CTASection
          title="Compliance work that ends in a plan, not a finding"
          subtitle="The exposure assessment is the fixed-scope way in: three days on contracts, architecture and supply chain, and a signed document."
          ctaLabel="Exposure assessment →"
          ctaHref="/assessment"
        />
      </main>
      <Footer />
    </>
  );
}
