import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { WEBSITE_ID, CEPF_ID, CALIBRA_ID } from "@/app/schema-org";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const URL = "https://www.dynamicsconsulting.it/cepf";

const DESCRIPTION =
  "Compliance-Epistemic Project Framework (CEPF) — the compliance methodology of Dynamics Consulting: a regulatory crossing catalogue mapping regulatory regimes onto their operational obligations. This page hosts a reduced demo of Calibra, the software built on CEPF.";

/* CEPF and Calibra are declared in app/schema-org.ts; this page is their home. */
const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "Compliance-Epistemic Project Framework (CEPF)",
    description: DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": CEPF_ID }, { "@id": CALIBRA_ID }],
    mainEntity: { "@id": CEPF_ID },
  },
];

export const metadata: Metadata = {
  title: "CEPF — AI and Regulatory Compliance Framework",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    images: OG_IMAGE,
    title: "Compliance-Epistemic Project Framework (CEPF)",
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "Compliance-Epistemic Project Framework (CEPF)",
    description: DESCRIPTION,
  },
};

const crumbs = breadcrumbSchema("https://www.dynamicsconsulting.it/cepf", [
  { name: "Home", path: "/" },
  { name: "CEPF" },
]);

export default function CepfPage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <NavBar />
      <div className="bg-[#0D1117] min-h-screen text-[#E6EDF3]">
      <main>
        <section className="px-6 pt-28 pb-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-5">
              Proprietary methodology
            </p>
            <h1 className="font-syne text-3xl md:text-[2.6rem] font-extrabold leading-[1.15] mb-6">
              Compliance-Epistemic Project Framework (CEPF)
            </h1>

            <div className="space-y-5 text-[#7D8FA3] text-lg leading-relaxed">
              <p>
                CEPF is a regulatory crossing catalogue: a mapping of regulatory regimes onto the
                operational obligations each one produces, and onto the points where those
                obligations overlap. It exists because organisations subject to several regimes at
                once do not face a sum of separate compliance programmes — they face one programme
                with shared controls, and the shared controls are where both the cost and the
                omissions concentrate.
              </p>
              <p>
                The framework works on obligations, not on principles. Every regime is broken down
                into the deliverables it actually requires, the roles that produce them and the
                effort each one carries. Where two regimes demand the same control — access
                management, audit logging, change management, incident response — the control is
                stated once and documented against each regime, rather than built twice.
              </p>
              <p>
                CEPF is proprietary to Dynamics Consulting, and it is the instrument behind the{" "}
                <a
                  href="/assessment"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  exposure assessment
                </a>{" "}
                and the wider{" "}
                <Link
                  href="/services/governance-advisory"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  AI governance and compliance advisory
                </Link>{" "}
                work.
              </p>
              <p className="text-[#9BA8B9] font-mono text-base">
                CEPF v7 — 19 frameworks, 247 requirements, 24 cross-framework overlap groups,
                695 document templates — snapshot July 2026
              </p>
              <p className="text-[#7D8FA3] leading-relaxed mt-4">
                An overlap group is a point where two or more regimes require the same control —
                not a similar principle, but an artefact or a process that can be built once and
                documented against each regime. Access management, audit logging, change
                management, incident response, an SBOM, a technical file, a post-market
                surveillance plan. A programme built regime by regime does that work twice and
                still leaves gaps at the seams; a programme built on the crossings does it once and
                documents it against each.
              </p>
              <p className="text-[#7D8FA3] leading-relaxed mt-4">
                Which groups exist, which requirements sit in each and what the shared control is
                worth in effort stay inside the framework: that mapping is the instrument, and it
                is applied in engagements rather than published.
              </p>
            </div>

            {/* The demo is Calibra, the software; CEPF is the framework it runs on. */}
            <div className="mt-10 rounded-lg border border-[#30363D] bg-[#161B22] px-6 py-5">
              <p className="text-[#E6EDF3] font-semibold mb-2">
                The software built on CEPF is called Calibra.
              </p>
              <p className="text-[#7D8FA3] leading-relaxed">
                Beyond the regulatory catalogue it carries risk, scheduling, operational flow,
                Gantt and milestones. A reduced demonstration instance runs on its own page: nine
                of the nineteen frameworks in CEPF v7, a subset of the planning functions,
                interface in Italian.{" "}
                <Link href="/calibra" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                  Calibra, and the demo
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

      </main>
      </div>
      <Footer />
    </>
  );
}
