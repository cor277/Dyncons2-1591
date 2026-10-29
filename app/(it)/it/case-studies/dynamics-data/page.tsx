import type { Metadata } from "next";
import { OG_IMAGE } from "@/app/og";
import { breadcrumbSchema } from "@/app/seo";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

const PATH = "/it/case-studies/dynamics-data";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;
const TITLE = "Dynamics 365 F&O e data platform unificata";
const DESCRIPTION =
  "Migrazione dell’ERP a Dynamics 365 Finance & Operations e data lakehouse in cloud per un gruppo manifatturiero multi-sede: 4 sedi unificate, 60% di tempo di reportistica risparmiato, go-live in 12 settimane.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    locale: "it_IT",
  },
};

const tech = [
  "Dynamics 365 Finance & Operations",
  "Power BI",
  "Power Automate",
  "Azure Data Factory",
  "Azure Synapse Analytics",
  "Synapse Link",
  "Azure Data Lake",
  "dbt",
  "Microsoft Fabric",
  "Terraform",
];

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Home", path: "/" },
  { name: "Risorse in italiano", path: "/it" },
  { name: "Case study", path: "/it/case-studies" },
  { name: "Dynamics 365 F&O + data platform" },
]);

export default function DynamicsDataCaseStudyIt() {
  return (
    <>
      <JsonLd data={crumbs} />
      <NavBar />
      <main className="bg-white dark:bg-slate-950 min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/it/case-studies"
              className="text-sm text-cyan-400 hover:text-cyan-300 mb-6 inline-flex items-center gap-1"
            >
              ← Tutti i case study
            </Link>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Microsoft Dynamics · Data platform
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Dynamics 365 F&O e lakehouse dati unificato per un gruppo manifatturiero multi-sede
            </h1>
            <p className="text-lg text-slate-300">
              Un gruppo manifatturiero con quattro stabilimenti, ciascuno su un’istanza ERP legacy
              ormai datata, aveva bisogno di una piattaforma enterprise moderna e della visibilità
              in tempo reale per governare produzione, magazzino e finanza di tutte le sedi da
              un’unica vista.
            </p>
          </div>
        </section>

        {/* Metrics bar */}
        <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
            {[
              { value: "4 sedi", label: "Unificate su un’unica piattaforma" },
              { value: "60%", label: "Tempo di reportistica risparmiato" },
              { value: "12 sett.", label: "Tempi di go-live" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{m.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Body */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-lg">
            <h2>La sfida</h2>
            <p>
              Il cliente gestiva quattro stabilimenti produttivi nel Nord Italia, ciascuno su
              un’istanza ERP legacy separata, con personalizzazioni locali accumulate in 15 anni.
              Consolidare i risultati finanziari a fine mese richiedeva a un team di cinque persone
              quattro giorni di riconciliazione manuale. I responsabili di stabilimento non avevano
              visibilità in tempo reale su giacenze e produttività: le decisioni si prendevano su
              dati vecchi di almeno 24 ore.
            </p>

            <h2>Cosa abbiamo costruito</h2>
            <p>
              Abbiamo condotto una discovery di due settimane per mappare tutti i processi di
              business, i campi personalizzati e le integrazioni con terze parti delle quattro
              istanze ERP legacy, producendo una mappa completa della data lineage e un backlog di
              migrazione ordinato per rischio.
            </p>
            <p>
              Dynamics 365 Finance &amp; Operations è stato rilasciato in un’unica configurazione
              multi-società, con workflow di produzione specifici per sede e un motore di
              registrazione intercompany costruito su misura per gestire i volumi di scambio interni
              al gruppo. Le pipeline di migrazione hanno estratto, ripulito e caricato dieci anni di
              storico transazionale, con riconciliazione completa sui totali dei sistemi di origine.
            </p>
            <p>
              In parallelo abbiamo costruito un data lakehouse in cloud su Azure Synapse Analytics,
              con Synapse Link a esportare i dati da F&amp;O verso Azure Data Lake quasi in tempo
              reale. I modelli di trasformazione dbt alimentavano un livello semantico Power BI: le
              dashboard riflettevano lo stato corrente di tutti e quattro gli stabilimenti con un
              aggiornamento ogni 15 minuti.
            </p>

            <h2>Risultati</h2>
            <p>
              Tutte e quattro le sedi sono andate live su un unico tenant Dynamics 365 F&amp;O in
              dodici settimane, nei tempi e nel budget. Il consolidamento di fine mese è sceso da
              quattro giorni a quattro ore. Le dashboard Power BI hanno dato ai responsabili di
              stabilimento, per la prima volta, visibilità in tempo reale su produzione, giacenze e
              finanza, e il team amministrativo ha registrato una riduzione del 60% del tempo
              dedicato alla reportistica.
            </p>

            <h2>Tecnologie utilizzate</h2>
          </div>

          <div className="max-w-3xl mx-auto px-6 mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
        </section>

        <CTASection
          title="Parliamo del tuo progetto"
          subtitle="Un’infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Contattaci."
          ctaLabel="Inizia la conversazione →"
          ctaHref="/it/contatti"
        />
      </main>
      <Footer />
    </>
  );
}
