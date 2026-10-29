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

const PATH = "/it/case-studies/sorgenia";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;
const TITLE = "Sorgenia — Dynamics 365 Marketing | Case study";
const DESCRIPTION =
  "Implementazione di Dynamics 365 Marketing per Sorgenia, operatore italiano dell’energia. Orchestrazione dei customer journey, automazione delle campagne e coinvolgimento multicanale su larga scala.";

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
  "Dynamics 365 Marketing",
  "Dynamics 365 Customer Insights",
  "Power Automate",
  "Azure Integration Services",
  "Dataverse",
  "Power BI",
  "Azure Event Hubs",
];

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Home", path: "/" },
  { name: "Risorse in italiano", path: "/it" },
  { name: "Case study", path: "/it/case-studies" },
  { name: "Sorgenia" },
]);

export default function SorgeniaCaseStudyIt() {
  return (
    <>
      <JsonLd data={crumbs} />
      <NavBar />
      <main className="bg-white dark:bg-slate-950 min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/it/case-studies"
              className="text-sm text-cyan-400 hover:text-cyan-300 mb-6 inline-flex items-center gap-1"
            >
              ← Tutti i case study
            </Link>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Energia · CRM · Marketing automation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Dynamics 365 Marketing per Sorgenia, operatore italiano dell’energia
            </h1>
            <p className="text-lg text-slate-300">
              Sorgenia aveva bisogno di una piattaforma di marketing automation capace di
              orchestrare customer journey complessi su email, SMS, web e call center, integrata
              con il CRM Dynamics 365 e con i sistemi di fatturazione già in uso.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
            {[
              { value: "200k+", label: "Contatti gestiti" },
              { value: "Multicanale", label: "Orchestrazione dei journey" },
              { value: "Tempo reale", label: "Trigger guidati da eventi" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{m.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-lg">
            <h2>La sfida</h2>
            <p>
              Sorgenia, azienda energetica italiana con un’offerta di energia verde, gestiva le campagne di marketing con un insieme frammentato di
              strumenti: un ESP separato per le email, invii SMS manuali a lotti, tracciamento web
              scollegato e nessuna vista unificata del coinvolgimento dei clienti. Impostare una
              campagna richiedeva giorni, la segmentazione si faceva su fogli di calcolo e non
              c’era modo di far partire comunicazioni in tempo reale su eventi del cliente come il
              rinnovo del contratto, i picchi di consumo o le scadenze di fatturazione.
            </p>

            <h2>Cosa è stato consegnato</h2>
            <p>
              Il programma ha implementato Dynamics 365 Marketing (oggi Customer Insights - Journeys) come
              livello centrale di orchestrazione, integrato pienamente con Dynamics 365 Sales già
              in uso in Sorgenia e con la piattaforma di fatturazione custom. I deliverable
              principali:
            </p>
            <p>
              Customer journey multicanale su email, SMS, notifiche push e trigger verso il call
              center in uscita, tutti orchestrati da un’unica canvas con logiche di ramificazione,
              condizioni di attesa e trigger su eventi in tempo reale. L’integrazione con Azure
              Event Hubs ha permesso alla piattaforma di marketing di reagire quasi in tempo reale
              a eventi di fatturazione, variazioni contrattuali e dati di consumo energetico.
            </p>
            <p>
              Segmentazione avanzata su profili cliente unificati, che combinano dati CRM, storico
              di fatturazione, profili di consumo energetico e segnali di coinvolgimento digitale.
              Le dashboard Power BI davano alla direzione marketing visibilità in tempo reale su
              performance delle campagne, attribuzione e ROI.
            </p>

            <h2>Risultati</h2>
            <p>
              La piattaforma gestisce oltre 200.000 contatti attivi su tutti i canali. Il tempo di
              impostazione di una campagna è sceso da giorni a ore. I trigger su eventi in tempo
              reale hanno reso possibili comunicazioni di ciclo di vita prima impraticabili, come
              il contatto proattivo prima della scadenza del contratto e raccomandazioni
              personalizzate sull’energia verde basate sui consumi. L’autonomia del team marketing
              è cresciuta in modo significativo, riducendo la dipendenza dall’IT per l’esecuzione
              delle campagne.
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
