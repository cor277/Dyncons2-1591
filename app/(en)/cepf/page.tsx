import type { Metadata } from "next";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CepfTool } from "./CepfTool";

const URL = "https://www.dynamicsconsulting.it/cepf";

const DESCRIPTION =
  "CEPF — Compliance Estimation & Planning Framework. A regulatory crossing catalogue mapping regulatory regimes onto their operational obligations. This page hosts a reduced demo of the framework.";

export const metadata: Metadata = {
  title: "CEPF — Compliance Estimation & Planning Framework",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    images: OG_IMAGE,
    title: "CEPF — Compliance Estimation & Planning Framework",
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "CEPF — Compliance Estimation & Planning Framework",
    description: DESCRIPTION,
  },
};

/* Regimes covered by the demo hosted on this page — sourced from the demo's own catalogue. */
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

export default function CepfPage() {
  return (
    <>
      <NavBar />
      <div className="bg-[#0D1117] min-h-screen text-[#E6EDF3]">
      <main>
        <section className="px-6 pt-28 pb-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-5">
              Proprietary methodology
            </p>
            <h1 className="font-syne text-3xl md:text-[2.6rem] font-extrabold leading-[1.15] mb-6">
              CEPF — Compliance Estimation &amp; Planning Framework
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
                It is the instrument behind the{" "}
                <a
                  href="/assessment"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  exposure assessment
                </a>
                .
              </p>
              <p className="text-[#9BA8B9] font-mono text-base">
                CEPF v7 — 21 regimi — snapshot luglio 2026
              </p>
            </div>

            {/* Reduced-demo notice */}
            <div className="mt-10 rounded-lg border border-[#30363D] bg-[#161B22] px-6 py-5">
              <p className="text-[#E6EDF3] font-semibold mb-2">
                This page hosts a reduced demo of the framework.
              </p>
              <p className="text-[#7D8FA3] leading-relaxed">
                The interactive tool below covers nine of the twenty-one regimes in CEPF v7 and a
                subset of its planning functions. It is a working demonstration, not the complete
                framework. Its interface is in Italian.
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

            {/* Regimes covered by the demo */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-[#E6EDF3] mb-4">
                Regimes covered by this demo
              </h2>
              <ul className="space-y-2 text-[#7D8FA3]">
                {DEMO_REGIMES.map(([name, ref]) => (
                  <li key={name} className="leading-relaxed">
                    <strong className="text-[#E6EDF3]">{name}</strong> — {ref}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Interactive demo */}
        <section className="px-6 pb-20">
          <div className="max-w-[1280px] mx-auto">
            <CepfTool />
          </div>
        </section>
      </main>
      </div>
      <Footer />
    </>
  );
}
