import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { CalibraDemo } from "@/app/(en)/calibra/CalibraDemo";
import Link from "next/link";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { ORG_ID, WEBSITE_ID, CEPF_ID, CALIBRA_ID } from "@/app/schema-org";
import { alternatesFor } from "@/lib/i18n-routes";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

const URL = "https://www.dynamicsconsulting.it/it/calibra";

const TITLE = "Calibra — il software costruito su CEPF";
const DESCRIPTION =
  "Calibra è il software costruito sul Compliance-Epistemic Project Framework (CEPF): il catalogo normativo più rischio, pianificazione, flusso operativo, Gantt e milestone. Proprietà di Dynamics Consulting, usato all’interno degli incarichi di governance e compliance.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["Calibra", "software CEPF", "gestione programmi di compliance", "strumenti di governance dell’AI"],
  alternates: alternatesFor("/it/calibra"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

/* Italian counterpart of /calibra: same claims, nothing asserted that /it/cepf does not support. */
const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "it",
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
      "Catalogo normativo di CEPF — framework, requisiti, sovrapposizioni tra framework",
      "Template documentali per ciascun obbligo",
      "Registro dei rischi",
      "Pianificazione e flusso operativo",
      "Gantt e milestone",
    ],
  },
];

const crumbs = breadcrumbSchema(URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Calibra" },
]);

/* The nine regimes the demonstration instance carries, out of the nineteen in
   CEPF v7. It describes the demo, so it lives with the demo. */
const DEMO_REGIMES = [
  ["SOX IT", "controlli generali IT Sarbanes-Oxley — PCAOB AS 2201, COSO 2013"],
  ["NIS2", "Direttiva (UE) 2022/2555"],
  ["AI Act", "Regolamento (UE) 2024/1689"],
  ["GDPR", "Regolamento (UE) 2016/679"],
  ["DORA", "Regolamento (UE) 2022/2554"],
  ["ISO/IEC 27001:2022", "sistema di gestione della sicurezza delle informazioni"],
  ["ISO 56001:2024", "sistema di gestione dell’innovazione"],
  ["ENS", "Esquema Nacional de Seguridad — Real Decreto 311/2022"],
  ["GS1", "standard EPC/RFID ed EPCIS 2.0 per la supply chain"],
];

export default function CalibraItPage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <JsonLd data={pageSchema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen text-[#E6EDF3]">
        <section className="px-6 pt-28 pb-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-5">
              Software proprietario
            </p>
            <h1 className="font-syne text-3xl md:text-[2.6rem] font-extrabold leading-[1.15] mb-6">
              Calibra — il software costruito su CEPF
            </h1>

            <div className="space-y-5 text-[#7D8FA3] text-lg leading-relaxed">
              <p>
                Calibra è il software che implementa il{" "}
                <Link href="/it/cepf" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                  Compliance-Epistemic Project Framework (CEPF)
                </Link>
                . La distinzione conta e i due nomi non sono intercambiabili: CEPF è la
                metodologia — il contenuto normativo, gli obblighi, le sovrapposizioni — e Calibra
                è l’applicazione costruita sopra.
              </p>
              <p>
                Oltre al catalogo normativo, Calibra gestisce rischio, pianificazione, flusso
                operativo, Gantt e milestone. È questo che trasforma un’analisi in un programma: un
                piano di rimedio con date, responsabili e impegno stimato, invece di un elenco di
                rilievi.
              </p>
              <p>
                È proprietà di Dynamics Consulting e si usa all’interno degli incarichi — la{" "}
                <Link
                  href="/it/consulenza-ai-governance-compliance"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  consulenza su governance e compliance dell’AI
                </Link>{" "}
                e l’{" "}
                <Link
                  href="/it/assessment"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  assessment di esposizione
                </Link>{" "}
                con cui di solito si aprono.
              </p>
            </div>

            {/* What it holds */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-[#E6EDF3] mb-4">Cosa contiene</h2>
              <ul className="space-y-3 text-[#7D8FA3] leading-relaxed">
                {[
                  [
                    "Il catalogo CEPF.",
                    "Versione 7, snapshot luglio 2026 — 19 framework mappati sui rispettivi adempimenti operativi, 247 requisiti, 24 gruppi di sovrapposizione tra framework, 695 template documentali.",
                  ],
                  [
                    "Il rischio.",
                    "Rischi registrati sugli obblighi che minacciano, invece che in un registro separato che nessuno riconcilia.",
                  ],
                  [
                    "Il tempo.",
                    "Pianificazione, flusso operativo, Gantt e milestone del programma di rimedio.",
                  ],
                  [
                    "I deliverable.",
                    "I template documentali richiesti da ciascun obbligo e i ruoli che li producono.",
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
              <p className="text-[#E6EDF3] font-semibold mb-2">La demo è qui sotto.</p>
              <p className="text-[#7D8FA3] leading-relaxed">
                È un’istanza dimostrativa, non quella di produzione: copre nove dei diciannove
                framework di CEPF v7 e una parte delle funzioni di pianificazione di Calibra. La sua
                interfaccia è in italiano.
              </p>
              <p className="text-[#7D8FA3] leading-relaxed mt-3">
                In italiano è anche{" "}
                <Link
                  href="/it/assessment"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  l’assessment di esposizione
                </Link>
                : se stai guardando la demo, quello è il percorso giusto.
              </p>
            </div>

            {/* Frameworks the demo instance covers */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-[#E6EDF3] mb-4">
                Framework coperti da questa demo
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
              <h2 className="text-xl font-bold text-[#E6EDF3] mb-4">Dove si colloca</h2>
              <div className="space-y-4 text-[#7D8FA3] leading-relaxed">
                <p>
                  <strong className="text-[#E6EDF3]">CEPF</strong> è la metodologia.{" "}
                  <strong className="text-[#E6EDF3]">Calibra</strong> è il software che la
                  implementa.{" "}
                  <Link
                    href="/it/piattaforma-nexus"
                    className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                  >
                    Nexus MDS Core
                  </Link>{" "}
                  è un’altra cosa ancora: la piattaforma AI self-hosted su cui girano i sistemi
                  stessi. Calibra governa il programma; Nexus esegue il carico di lavoro.
                </p>
                <p>
                  Tutti e tre sono costruiti e mantenuti da{" "}
                  <Link href="/it/chi-siamo" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                    Dynamics Consulting
                  </Link>
                  , studio indipendente di consulenza e ingegneria AI che lavora su infrastruttura
                  AI sovrana, governance dell’AI e ambienti regolati.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive demo — shared with /calibra */}
        <section className="px-6 pb-20">
          <div className="max-w-[1280px] mx-auto">
            <CalibraDemo />
          </div>
        </section>

        <CTASection
          title="Un lavoro di compliance che finisce in un piano, non in un rilievo"
          subtitle="L’assessment di esposizione è l’ingresso a perimetro fisso: tre giornate su contratti, architettura e catena di fornitura, e un documento firmato."
          ctaLabel="Assessment di esposizione →"
          ctaHref="/it/assessment"
        />
      </main>
      <Footer />
    </>
  );
}
