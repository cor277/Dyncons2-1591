import type { Metadata } from "next";
import Link from "next/link";
import {
  CEPF_FRAMEWORK_COUNT,
  CEPF_REQUIREMENT_COUNT,
  CEPF_SNAPSHOT,
  CEPF_TEMPLATE_COUNT,
  CEPF_VERSION,
  FRAMEWORK_LABELS,
  GROUP_MEMBERSHIPS,
  OVERLAP_GROUPS,
  REQUIREMENTS_IN_GROUPS,
} from "@/app/cepf-overlaps";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { SOURCES } from "@/app/primary-sources";
import { BASE_URL, CEPF_ID, ORG_ID, PERSON_ID, WEBSITE_ID } from "@/app/schema-org";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

const URL = `${BASE_URL}/cepf/overlaps`;

const DESCRIPTION =
  "The 24 cross-framework overlap groups in CEPF v7: which regulatory regimes share a control, and how many catalogue requirements sit in each. Published from the catalogue itself — the AI Act, NIS2, DORA, GDPR, ISO/IEC 27001, SOX IT, PLD 2024 and the Cyber Resilience Act.";

export const metadata: Metadata = {
  title: "Cross-framework overlap catalogue — where AI Act, NIS2, DORA and PLD share a control",
  description: DESCRIPTION,
  keywords: [
    "AI Act NIS2 mapping",
    "AI Act DORA overlap",
    "PLD 2024 CRA overlap",
    "cross-framework control mapping",
    "shared controls compliance",
    "CEPF",
  ],
  alternates: { canonical: URL },
  openGraph: {
    images: OG_IMAGE,
    title: "Cross-framework overlap catalogue — CEPF v7",
    description: DESCRIPTION,
    url: URL,
    type: "article",
    locale: "en_US",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "Cross-framework overlap catalogue — CEPF v7",
    description: DESCRIPTION,
  },
};

/** Frameworks that appear in at least one group, in the order they first occur. */
const frameworksInGroups = Array.from(
  new Set(OVERLAP_GROUPS.flatMap((g) => g.frameworks)),
);

const schema = [
  articleSchema({
    url: URL,
    type: "TechArticle",
    headline:
      "Cross-framework overlap catalogue: where the AI Act, NIS2, DORA, GDPR, ISO 27001, PLD 2024 and the CRA share a control",
    description: DESCRIPTION,
    datePublished: "2026-09",
    articleSection: "AI Governance",
    keywords: [
      "regulatory overlap",
      "shared controls",
      "AI Act",
      "NIS2",
      "DORA",
      "PLD 2024",
      "Cyber Resilience Act",
    ],
    about: ["Regulatory compliance", "Control mapping", "AI governance"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": `${URL}#dataset`,
    name: `CEPF v${CEPF_VERSION} cross-framework overlap groups`,
    description: `The ${OVERLAP_GROUPS.length} groups of shared controls in the CEPF regulatory crossing catalogue, snapshot ${CEPF_SNAPSHOT}. Each group states the regulatory regimes it spans and the number of catalogue requirements inside it. Derived from the catalogue; requirement codes, titles and the effort model are not published.`,
    url: URL,
    creator: { "@id": ORG_ID },
    isBasedOn: { "@id": CEPF_ID },
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en",
    /* Free to read and cite; the catalogue underneath it is proprietary. */
    isAccessibleForFree: true,
    license: `${BASE_URL}/privacy`,
    variableMeasured: [
      { "@type": "PropertyValue", name: "Overlap group", description: "Name of the shared control" },
      {
        "@type": "PropertyValue",
        name: "Frameworks",
        description: "Regulatory regimes whose requirements fall in the group",
      },
      {
        "@type": "PropertyValue",
        name: "Requirements",
        description: "Catalogue requirements assigned to the group",
      },
    ],
    about: [
      "EU AI Act",
      "NIS2",
      "DORA",
      "GDPR",
      "ISO/IEC 27001",
      "PLD 2024",
      "Cyber Resilience Act",
      "SOX IT general controls",
    ],
    author: { "@id": PERSON_ID },
  },
  breadcrumbSchema(URL, [
    { name: "Home", path: "/" },
    { name: "CEPF", path: "/cepf" },
    { name: "Cross-framework overlap catalogue" },
  ]),
];

const sources = [SOURCES.aiAct, SOURCES.nis2, SOURCES.dora, SOURCES.gdpr, SOURCES.pld, SOURCES.cra];

export default function CepfOverlapsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <article>
          <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/cepf"
                className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
              >
                ← CEPF
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
                Cross-framework overlap catalogue
              </h1>
              <div className="border-l-2 border-[#00B4D8] pl-5 text-[#9BA8B9] text-lg leading-relaxed">
                <p>
                  An organisation subject to several regulatory regimes at once does not face a sum
                  of separate compliance programmes. It faces one programme with shared controls —
                  and the shared controls are where both the cost and the omissions concentrate.
                  CEPF v{CEPF_VERSION} identifies {OVERLAP_GROUPS.length} of them across{" "}
                  {CEPF_FRAMEWORK_COUNT} frameworks. This page publishes the groups: what the shared
                  control is, which regimes fall into it, and how many catalogue requirements sit
                  inside. {REQUIREMENTS_IN_GROUPS} of the {CEPF_REQUIREMENT_COUNT} requirements in
                  the catalogue — a little under a third — belong to at least one group.
                </p>
              </div>
              <p className="mt-6 text-sm text-[#7D8FA3]">
                By{" "}
                <Link href="/about" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Corrado Patierno
                </Link>{" "}
                · catalogue snapshot <time dateTime="2026-07">{CEPF_SNAPSHOT}</time> · published{" "}
                <time dateTime="2026-09">September 2026</time>
              </p>
            </div>
          </section>

          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto space-y-12 text-[#7D8FA3] text-lg leading-relaxed">
              <div>
                <h2 id="what-is-a-group" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  What an overlap group is
                </h2>
                <p className="mb-4">
                  CEPF works on obligations, not on principles. Each regime is broken down into the
                  deliverables it actually requires, the roles that produce them and the effort each
                  one carries. An overlap group is a point where two or more regimes demand the same
                  control: not a similar idea, but an artefact or process that can be built once and
                  documented against each regime.
                </p>
                <p className="mb-4">
                  The test for membership is deliberately strict. &ldquo;Both regimes care about
                  security&rdquo; is not an overlap. &ldquo;Both regimes require an immutable record
                  of privileged access, and the same log infrastructure satisfies each&rdquo; is.
                  Where the artefact is shared but the acceptance criteria differ — as with a product
                  risk assessment under PLD 2024, the Cyber Resilience Act and the AI Act — the group
                  records the shared method and leaves the criteria separate.
                </p>
                <p>
                  The consequence is practical: an organisation that maps its programme this way
                  writes one policy set, keeps one evidence trail per control, and answers three
                  auditors from it. The organisation that does not, builds the same control two or
                  three times and still discovers, in an inspection, the one place it was never built
                  at all.
                </p>
              </div>

              <div>
                <h2 id="groups" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  The {OVERLAP_GROUPS.length} groups
                </h2>
                <p className="mb-6 text-base">
                  Frameworks appearing below:{" "}
                  {frameworksInGroups.map((f) => FRAMEWORK_LABELS[f] ?? f).join(", ")}. The remaining
                  frameworks in the catalogue — the ISO management-system standards, the BIM and
                  construction norms, the Italian and Spanish national regimes — carry requirements
                  that do not currently share a control with another regime in the catalogue.
                </p>
                <div className="overflow-x-auto -mx-6 px-6">
                  <table className="w-full text-base border-collapse min-w-[640px]">
                    <thead>
                      <tr className="border-b border-[#30363D] text-left">
                        <th className="py-3 pr-4 font-semibold text-[#E6EDF3] align-bottom">Group</th>
                        <th className="py-3 pr-4 font-semibold text-[#E6EDF3] align-bottom">
                          Frameworks
                        </th>
                        <th className="py-3 font-semibold text-[#E6EDF3] align-bottom text-right whitespace-nowrap">
                          Req.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {OVERLAP_GROUPS.map((g) => (
                        <tr key={g.name} className="border-b border-[#21262D] align-top">
                          <td className="py-4 pr-4">
                            <span className="text-[#E6EDF3] font-medium">{g.name}</span>
                            <span className="block text-sm text-[#7D8FA3] mt-1 leading-relaxed">
                              {g.control}
                            </span>
                          </td>
                          <td className="py-4 pr-4 text-sm">
                            <span className="flex flex-wrap gap-1.5">
                              {g.frameworks.map((f) => (
                                <span
                                  key={f}
                                  className="inline-block rounded border border-[#30363D] bg-[#161B22] px-2 py-0.5 text-xs text-[#9BA8B9] whitespace-nowrap"
                                >
                                  {FRAMEWORK_LABELS[f] ?? f}
                                </span>
                              ))}
                            </span>
                          </td>
                          <td className="py-4 text-right text-[#E6EDF3] tabular-nums">
                            {g.requirements}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 id="how-to-read" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  How to read the numbers
                </h2>
                <p className="mb-4">
                  The catalogue holds {CEPF_REQUIREMENT_COUNT} requirements across{" "}
                  {CEPF_FRAMEWORK_COUNT} frameworks, with {CEPF_TEMPLATE_COUNT} document templates
                  attached to them. {REQUIREMENTS_IN_GROUPS} of those requirements belong to at least
                  one overlap group, producing {GROUP_MEMBERSHIPS} group memberships in total — the
                  difference is the requirements that sit in more than one group at once, which are
                  the ones worth building first.
                </p>
                <p className="mb-4">
                  Two clusters are visible in the table. The first thirteen groups are the
                  organisational regimes — access, logging, change, risk, incidents, suppliers,
                  training — where NIS2, ISO/IEC 27001, SOX IT general controls, the GDPR and DORA
                  converge on infrastructure that most organisations already partly own. The last
                  eleven are the product cluster added for PLD 2024 and the Cyber Resilience Act,
                  where the shared artefacts are an SBOM, a technical file, a vulnerability handling
                  process and a post-market surveillance plan.
                </p>
                <p>
                  That second cluster is the one with a date attached. The reporting obligations of
                  the Cyber Resilience Act start applying on 11 September 2026, and Member States
                  must have transposed the product liability directive by 9 December 2026 — which is
                  what the{" "}
                  <Link href="/assessment" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                    exposure assessment
                  </Link>{" "}
                  and the{" "}
                  <Link href="/cra-11-settembre" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                    CRA deadline page
                  </Link>{" "}
                  are about.
                </p>
              </div>

              <div>
                <h2 id="not-published" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  What this page is, and what it is not
                </h2>
                <p className="mb-4">
                  It is the shape of the catalogue, published so that the numbers stated elsewhere on
                  this site can be checked against something. It is not the catalogue: the
                  requirement codes and titles, the mapping to individual articles, the effort model
                  and the shared-control discounts stay inside CEPF and{" "}
                  <Link href="/calibra" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                    Calibra
                  </Link>
                  , the software built on it.
                </p>
                <p className="mb-4">
                  It is also not a compliance mapping you can adopt as-is. Whether a given
                  requirement applies to your organisation depends on your sector, your role and your
                  size; whether one control genuinely satisfies two regimes for you depends on how it
                  is implemented and evidenced. The groups say where to look, not what to conclude.
                </p>
                <p>
                  And it is not legal advice. Conformity is established by the procedures the
                  regulations themselves prescribe — not by a catalogue, not by a consultant, and not
                  by a deployment topology.
                </p>
              </div>

              <div>
                <h2 id="sources" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Sources
                </h2>
                <p className="mb-4 text-base">
                  The regimes named above, in their official text. Where this page describes what an
                  obligation requires, the act is the authority.
                </p>
                <ul className="space-y-3 text-base">
                  {sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-[#00B4D8] hover:text-[#E6EDF3]"
                      >
                        {s.label}
                      </a>
                      <span className="text-[#7D8FA3]"> — {s.note}</span>
                    </li>
                  ))}
                  <li>
                    <span className="text-[#9BA8B9]">
                      SOX IT general controls follow PCAOB AS 2201 and the COSO 2013 framework; ISO
                      /IEC 27001:2022 is published by ISO and is not freely available.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 id="related" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Related
                </h2>
                <ul className="space-y-3 text-base">
                  <li>
                    <Link href="/cepf" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                      CEPF — the methodology
                    </Link>
                    <span className="text-[#7D8FA3]">
                      {" "}
                      — what a regulatory crossing catalogue is, and the Calibra demo.
                    </span>
                  </li>
                  <li>
                    <Link
                      href="/services/governance-advisory"
                      className="text-[#00B4D8] hover:text-[#E6EDF3]"
                    >
                      AI Governance &amp; Compliance Advisory
                    </Link>
                    <span className="text-[#7D8FA3]"> — the engagement that runs on it.</span>
                  </li>
                  <li>
                    <Link
                      href="/answers/evaluate-ai-vendor-regulated"
                      className="text-[#00B4D8] hover:text-[#E6EDF3]"
                    >
                      How do you evaluate an AI vendor in a regulated sector?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/research/governing-ai-outputs"
                      className="text-[#00B4D8] hover:text-[#E6EDF3]"
                    >
                      Governing AI outputs in regulated industries
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>

        <CTASection
          title="Which of these groups already exist in your organisation?"
          subtitle="Most organisations own more of them than they think, in places nobody has mapped. Finding out is a short engagement, not a programme."
        />
      </main>
      <Footer />
    </>
  );
}
