import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { WEBSITE_ID, CEPF_ID, CALIBRA_ID } from "@/app/schema-org";
import { alternatesFor } from "@/lib/i18n-routes";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const PATH = "/it/cepf";
const URL = `https://www.dynamicsconsulting.it${PATH}`;

const DESCRIPTION =
  "Compliance-Epistemic Project Framework (CEPF) — la metodologia di compliance di Dynamics Consulting: un catalogo di incroci normativi che mappa i regimi regolatori sugli obblighi operativi che producono. Questa pagina rimanda a una demo ridotta di Calibra, il software costruito su CEPF.";

/* CEPF and Calibra are declared in app/schema-org.ts; this page is their Italian home. */
const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "Compliance-Epistemic Project Framework (CEPF)",
    description: DESCRIPTION,
    inLanguage: "it",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": CEPF_ID }, { "@id": CALIBRA_ID }],
    mainEntity: { "@id": CEPF_ID },
  },
];

export const metadata: Metadata = {
  title: "CEPF — framework per la compliance normativa e dell’AI",
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "Compliance-Epistemic Project Framework (CEPF)",
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "Compliance-Epistemic Project Framework (CEPF)",
    description: DESCRIPTION,
  },
};

const crumbs = breadcrumbSchema(URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "CEPF" },
]);

export default function CepfItPage() {
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
              Metodologia proprietaria
            </p>
            <h1 className="font-syne text-3xl md:text-[2.6rem] font-extrabold leading-[1.15] mb-6">
              Compliance-Epistemic Project Framework (CEPF)
            </h1>

            <div className="space-y-5 text-[#7D8FA3] text-lg leading-relaxed">
              <p>
                CEPF è un catalogo di incroci normativi: mappa i regimi regolatori sugli obblighi
                operativi che ciascuno produce, e sui punti in cui quegli obblighi si sovrappongono.
                Esiste perché un’organizzazione soggetta a più regimi insieme non ha davanti una
                somma di programmi di compliance separati: ha un solo programma con controlli
                condivisi, ed è proprio nei controlli condivisi che si concentrano sia i costi sia
                le omissioni.
              </p>
              <p>
                Il framework lavora sugli obblighi, non sui principi. Ogni regime viene scomposto
                nei deliverable che richiede davvero, nei ruoli che li producono e nell’impegno che
                ciascuno comporta. Dove due regimi chiedono lo stesso controllo — gestione degli
                accessi, audit logging, change management, gestione degli incidenti — il controllo
                si definisce una volta sola e si documenta rispetto a ciascun regime, invece di
                costruirlo due volte.
              </p>
              <p>
                CEPF è proprietario di Dynamics Consulting ed è lo strumento su cui si basano l’
                <a
                  href="/it/assessment"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  assessment di esposizione
                </a>{" "}
                e, più in generale, il lavoro di{" "}
                <Link
                  href="/it/consulenza-ai-governance-compliance"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  consulenza su governance e compliance dell’AI
                </Link>
                .
              </p>
              <p className="text-[#9BA8B9] font-mono text-base">
                CEPF v7 — 19 framework, 247 requisiti, 24 gruppi di sovrapposizione tra framework,
                695 template documentali — snapshot luglio 2026
              </p>
              <p className="text-[#7D8FA3] leading-relaxed mt-4">
                Un gruppo di sovrapposizione è un punto in cui due o più regimi richiedono lo stesso
                controllo: non un principio simile, ma un artefatto o un processo che si può
                costruire una volta e documentare rispetto a ciascun regime. Gestione degli
                accessi, audit logging, change management, gestione degli incidenti, uno SBOM, un
                fascicolo tecnico, un piano di sorveglianza post-commercializzazione. Un programma
                costruito regime per regime fa quel lavoro due volte e lascia comunque buchi nei
                punti di giunzione; un programma costruito sugli incroci lo fa una volta e lo
                documenta rispetto a ciascuno.
              </p>
              <p className="text-[#7D8FA3] leading-relaxed mt-4">
                Quali gruppi esistono, quali requisiti rientrano in ciascuno e quanto vale in
                termini di impegno il controllo condiviso restano dentro il framework: quella
                mappatura è lo strumento, e si applica negli incarichi, non si pubblica.
              </p>
            </div>

            {/* The demo is Calibra, the software; CEPF is the framework it runs on. */}
            <div className="mt-10 rounded-lg border border-[#30363D] bg-[#161B22] px-6 py-5">
              <p className="text-[#E6EDF3] font-semibold mb-2">
                Il software costruito su CEPF si chiama Calibra.
              </p>
              <p className="text-[#7D8FA3] leading-relaxed">
                Oltre al catalogo normativo gestisce rischi, pianificazione, flusso operativo,
                Gantt e milestone. Un’istanza dimostrativa ridotta gira su una pagina dedicata: nove
                dei diciannove framework di CEPF v7, una parte delle funzioni di pianificazione,
                interfaccia in italiano.{" "}
                <Link href="/it/calibra" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                  Calibra, e la demo
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
