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

const CASE_URL = "https://www.dynamicsconsulting.it/it/case-studies/curesicure";

const TITLE = "CureSicure — i dati pubblici degli ospedali, letti per i pazienti";
const DESCRIPTION =
  "Un servizio pro bono in produzione su Nexus MDS Core. Legge i dati pubblici degli ospedali (PNE-AGENAS, SDO/NSIS, open data del Ministero della Salute) e, data una patologia, aiuta il paziente a trovare le strutture che misurano meglio per qualità ed efficienza. Per scelta non traccia gli utenti: la piattaforma conserva solo il registro tecnico delle chiamate ai modelli.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/it/case-studies/curesicure"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: CASE_URL,
    type: "article",
    locale: "it_IT",
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
    desc: "Indicatori di esito e di processo per struttura, pubblicati dall’Agenzia nazionale per i servizi sanitari regionali.",
  },
  {
    name: "SDO / NSIS",
    desc: "Le schede di dimissione ospedaliera, raccolte attraverso il Nuovo Sistema Informativo Sanitario del Ministero della Salute.",
  },
  {
    name: "Open data del Ministero della Salute",
    desc: "I dataset che il Ministero pubblica in formato aperto sulle strutture e sulla loro attività.",
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
      inLanguage: "it",
      articleSection: "Case study",
      about: ["Dati sanitari pubblici", "Indicatori di qualità ospedaliera", "Sovereign AI"],
    }),
    isBasedOn: { "@id": NEXUS_ID },
    sourceOrganization: { "@id": ORG_ID },
  },
  breadcrumbSchema(CASE_URL, [
    { name: "Risorse in italiano", path: "/it" },
    { name: "Case study", path: "/it/case-studies" },
    { name: "CureSicure" },
  ]),
];

export default function CureSicureCaseStudyIt() {
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
                href="/it/case-studies"
                className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
              >
                ← Tutti i case study
              </Link>
              <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
                Sanità · Pro bono
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
                CureSicure — i dati pubblici degli ospedali, letti per i pazienti
              </h1>
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[#7D8FA3] text-base">
                <div>
                  <dt className="inline font-semibold text-[#E6EDF3]">Settore: </dt>
                  <dd className="inline">sanità, informazione pubblica</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#E6EDF3]">Piattaforma: </dt>
                  <dd className="inline">Nexus MDS Core</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#E6EDF3]">Condizioni: </dt>
                  <dd className="inline">pro bono</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#E6EDF3]">Stato: </dt>
                  <dd className="inline">in produzione</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#E6EDF3]">Autore: </dt>
                  <dd className="inline">
                    <Link href="/it/chi-siamo" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                      Corrado Patierno
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#E6EDF3]">Ultimo aggiornamento: </dt>
                  <dd className="inline">
                    <time dateTime="2026-10">ottobre 2026</time>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-sm text-[#7D8FA3]">
                <Link
                  href="/case-studies/curesicure"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                  hrefLang="en"
                >
                  Read this page in English →
                </Link>
              </p>
            </div>
          </section>

          {/* Facts bar — deliberately no usage figures */}
          <section className="border-b border-[#30363D] bg-[#161B22]">
            <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "Pro bono", label: "Condizioni del servizio" },
                { value: "Pubblici", label: "Solo dati ospedalieri" },
                { value: "Nessuna", label: "Metrica d’uso, per scelta" },
                { value: "Nexus", label: "Piattaforma MDS Core" },
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
                <h2 id="cosa-fa" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Che cosa fa
                </h2>
                <p>
                  Quanto bene un ospedale italiano cura una certa patologia non è un segreto. Gli
                  indicatori di esito e di efficienza vengono misurati e pubblicati, struttura per
                  struttura. Sono pubblicati però per analisti e amministratori, non per un paziente
                  che deve decidere dove farsi curare.
                </p>
                <p className="mt-4">
                  CureSicure legge quei dati pubblici e li rovescia dalla parte del paziente: data una
                  patologia, lo aiuta a trovare le strutture che{" "}
                  <strong className="text-[#E6EDF3]">misurano meglio per qualità ed efficienza</strong>.
                  Dynamics Consulting lo gestisce come servizio pro bono, in produzione.
                </p>
              </div>

              <div>
                <h2 id="fonti" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Da dove vengono i dati
                </h2>
                <p>Il servizio lavora solo su fonti pubbliche:</p>
                <ul className="mt-4 space-y-4">
                  {sources.map((s) => (
                    <li key={s.name} className="border-l-2 border-[#30363D] pl-4">
                      <strong className="text-[#E6EDF3]">{s.name}.</strong> {s.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 id="nessun-numero" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Perché questa pagina non ha numeri d’uso
                </h2>
                <p>
                  Di solito un case study dice quanto un sistema viene usato. Questo no, ed è una
                  scelta di progetto, non una lacuna.
                </p>
                <p className="mt-4">
                  CureSicure{" "}
                  <strong className="text-[#E6EDF3]">
                    non raccoglie metriche d’uso e non traccia gli utenti; la piattaforma conserva solo il registro tecnico delle chiamate ai modelli
                  </strong>
                  , per scelta. Se non si raccolgono dati d’uso non c’è niente da contare: per questo la
                  pagina non pubblica numeri d’uso e non ne rivendica.
                </p>
              </div>

              <div>
                <h2 id="architettura" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Come gira
                </h2>
                <p>
                  CureSicure gira su{" "}
                  <Link
                    href="/it/piattaforma-nexus"
                    className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                  >
                    Nexus MDS Core
                  </Link>
                  , la stessa piattaforma che serve{" "}
                  <Link
                    href="/it/case-studies/federfarma"
                    className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                  >
                    Federfarma Lombarda
                  </Link>
                  . Il livello di retrieval lavora sui dataset pubblici elencati sopra; identità e
                  audit sono servizi della piattaforma, che il servizio eredita invece di ricostruirli.
                </p>
                <p className="mt-4">
                  È il senso di costruire la governance una volta sola: un piccolo servizio pro bono ha
                  lo stesso livello di identità e di audit di un assistente normativo per mille
                  farmacie, senza un progetto a parte per costruirlo.
                </p>
              </div>
            </div>
          </section>

          {/* Close */}
          <section className="py-20 px-6 border-t border-[#30363D] bg-[#161B22]">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
                AI sui dati sanitari, dentro il tuo perimetro
              </h2>
              <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
                Come la stessa piattaforma si installa per ospedali, pharma e ricerca clinica, e dove
                passa il confine dei dati.
              </p>
              <CTAButton
                label="AI on-premise per la sanità →"
                href="/it/ai-sanitaria-on-premise"
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
