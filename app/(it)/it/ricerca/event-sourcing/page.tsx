import type { Metadata } from "next";
import Link from "next/link";
import { RESEARCH_ARTICLES_IT } from "@/app/research-articles-it";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

const PATH = "/it/ricerca/event-sourcing";
const ARTICLE_URL = `https://www.dynamicsconsulting.it${PATH}`;

const article = RESEARCH_ARTICLES_IT["event-sourcing"];

export const metadata: Metadata = {
  title: "Event sourcing nella pratica",
  description:
    "L'event sourcing promette auditabilità e interrogazioni temporali. Nella pratica, gestione delle proiezioni, evoluzione dello schema e strategia degli snapshot sono i punti in cui quasi tutte le implementazioni inciampano.",
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: article.headline,
    description: article.description,
    url: ARTICLE_URL,
    type: "article",
    locale: "it_IT",
  },
};

const schema = [
  articleSchema({
    url: ARTICLE_URL,
    type: article.type,
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    inLanguage: "it",
    articleSection: article.section,
    keywords: article.keywords,
  }),
  breadcrumbSchema(ARTICLE_URL, [
    { name: "Risorse in italiano", path: "/it" },
    { name: "Ricerca", path: "/it/ricerca" },
    { name: article.headline },
  ]),
];

export default function EventSourcingArticleIt() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <article>
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link href="/it/ricerca" className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1">
              ← Tutti gli articoli
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <TechBadge label="Integrazione enterprise" variant="cyan" />
              <time dateTime="2025-10" className="text-xs text-[#7D8FA3]">
                {article.dateLabel}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              {article.headline}
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              L&apos;event sourcing promette auditabilità e interrogazioni temporali. Nella
              pratica, gestione delle proiezioni, evoluzione dello schema e strategia degli
              snapshot sono i punti in cui quasi tutte le implementazioni fanno fatica.
            </p>
            <p className="text-sm text-[#7D8FA3] mt-4">
              Di{" "}
              <Link href="/it/chi-siamo" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                Corrado Patierno
              </Link>
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Perché attrae</h2>
              <p>
                L&apos;event sourcing registra ogni cambio di stato come un evento immutabile.
                Invece di sovrascrivere lo stato corrente, aggiungi in coda ciò che è successo.
                Ottieni così un audit trail completo, la possibilità di ricostruire lo stato in
                qualsiasi momento e una corrispondenza naturale con le architetture event-driven.
                Nei settori regolati, dove l&apos;auditabilità è un obbligo di legge, il vantaggio è
                evidente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Dove le implementazioni fanno fatica</h2>
              <p>
                Dopo aver portato l&apos;event sourcing in sistemi in produzione tra servizi
                finanziari, logistica e integrazione enterprise, lo schema che emerge è sempre lo
                stesso: l&apos;event store è la parte facile. La complessità sta in tutto ciò che
                gli gira intorno.
              </p>

              <h3 className="text-xl font-bold text-[#E6EDF3] mt-6 mb-3">Gestione delle proiezioni</h3>
              <p>
                I read model (le proiezioni) vanno ricostruiti dallo stream di eventi ogni volta
                che cambia il loro schema. Per una proiezione su milioni di eventi non è
                un&apos;operazione istantanea. Serve una strategia: switch blue-green tra
                proiezioni, ricostruzione in background con monitoraggio dell&apos;avanzamento e
                ritorno alla versione precedente se quella nuova non supera la validazione. La
                maggior parte dei team sottovaluta questo carico operativo.
              </p>

              <h3 className="text-xl font-bold text-[#E6EDF3] mt-6 mb-3">Evoluzione dello schema</h3>
              <p>
                Gli eventi sono immutabili, il loro schema no. Quando cambiano i requisiti di
                business devi introdurre nuovi tipi di evento mantenendo la retrocompatibilità con
                quelli esistenti. L&apos;upcasting (trasformare i vecchi eventi nel nuovo schema al
                momento della lettura) funziona ma aggiunge complessità. I tipi di evento
                versionati con logica di migrazione esplicita sono l&apos;approccio che scala, ma
                richiedono disciplina fin dal primo giorno.
              </p>

              <h3 className="text-xl font-bold text-[#E6EDF3] mt-6 mb-3">Strategia degli snapshot</h3>
              <p>
                Ricostruire un aggregato da migliaia di eventi a ogni lettura non è praticabile.
                Servono gli snapshot, cioè materializzazioni periodiche dello stato
                dell&apos;aggregato. Le decisioni da prendere: frequenza degli snapshot, dove
                salvarli (nello stesso store o in uno separato), strategia di invalidazione quando
                cambiano le proiezioni e il problema dell&apos;avvio a freddo per gli aggregati che
                non sono mai stati fotografati.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Event sourcing e audit trail dell&apos;AI</h2>
              <p>
                Nei nostri deployment AI l&apos;event sourcing ha portato un vantaggio inatteso:
                offre un&apos;architettura naturale per gli audit trail dell&apos;AI. Quando un
                sistema AI elabora una richiesta, l&apos;intera interazione (l&apos;input, il contesto
                recuperato, il modello invocato, l&apos;output grezzo, l&apos;output validato e ogni
                azione di revisione umana) può essere modellata come una sequenza di eventi
                immutabili.
              </p>
              <p className="mt-4">
                Non è teoria. In Nexus MDS Core il{" "}
                <Link href="/it/ricerca/governare-output-ai" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  livello di governance degli output
                </Link>{" "}
                usa un audit log basato su event sourcing. Ogni interazione con l&apos;AI viene
                salvata come una catena di eventi: QueryReceived → ContextRetrieved →
                InferenceCompleted → ValidationPassed → ResponseDelivered (oppure
                ValidationFailed → HumanReviewRequested → HumanApproved → ResponseDelivered).
                Questo dà alle autorità di vigilanza, e all&apos;organizzazione stessa, la
                possibilità di ricostruire da zero qualsiasi decisione assistita dall&apos;AI, in
                qualsiasi momento.
              </p>
              <p className="mt-4">
                Il requisito di &quot;tracciabilità&quot; che l&apos;AI Act pone ai sistemi AI ad alto
                rischio corrisponde direttamente alla garanzia centrale dell&apos;event sourcing:
                nulla si perde, nulla viene sovrascritto e la storia completa è sempre
                disponibile. Le organizzazioni che hanno già adottato l&apos;event sourcing per i
                processi di business principali partono con un vantaggio strutturale quando
                devono portare in produzione sistemi AI progettati su questi requisiti.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Scelte tecnologiche: EventStoreDB, Kafka o soluzione su misura</h2>
              <p>
                La scelta della tecnologia per l&apos;event store è una delle prime decisioni, e una
                delle più importanti. Dai nostri deployment in produzione:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">EventStoreDB:</strong> nato per l&apos;event sourcing. Supporto nativo per uno stream per aggregato, proiezioni e subscription. Ottimo per progetti greenfield in cui il team sceglie l&apos;event sourcing come modello dati principale. Il carico operativo è moderato: è un database specializzato che richiede competenze specifiche.</li>
                <li><strong className="text-[#E6EDF3]">Apache Kafka:</strong> non è progettato per l&apos;event sourcing, ma è molto usato in questo ruolo. Funziona bene quando l&apos;event sourcing è parte di un&apos;architettura event-driven più ampia e il team gestisce già Kafka. Il compromesso: Kafka non offre un modo nativo ed efficiente per leggere lo stream di eventi di un singolo aggregato, quindi di solito serve un indice secondario o uno store separato per idratare gli aggregati.</li>
                <li><strong className="text-[#E6EDF3]">PostgreSQL con tabelle append-only:</strong> la scelta pragmatica quando il team è già forte su PostgreSQL e il volume di eventi è moderato. Perdi le funzioni specializzate (proiezioni native, catch-up subscription) ma guadagni semplicità operativa e puoi usare strumenti che conosci già per debug e monitoraggio.</li>
              </ul>
              <p className="mt-4">
                La nostra raccomandazione: se l&apos;event sourcing è il pattern architetturale
                centrale e il team ha le competenze, usa EventStoreDB. Se l&apos;event sourcing è
                un componente di un sistema event-driven più grande, usa Kafka con un livello di
                proiezione costruito ad hoc. Se il team è piccolo e il pragmatismo conta più della
                purezza, PostgreSQL con tabelle append-only ben progettate ti dà gran parte del
                beneficio con una frazione del costo operativo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Quando usarlo</h2>
              <p>
                L&apos;event sourcing è la scelta giusta quando l&apos;auditabilità è un requisito
                vincolante, quando ti servono interrogazioni temporali (&quot;qual era lo stato al
                momento T?&quot;) o quando il tuo dominio è per natura event-driven (gestione
                ordini, transazioni finanziarie, tracciamento logistico). È la scelta sbagliata
                quando ti basta un CRUD con un audit log: una semplice tabella di audit
                append-only raggiunge lo stesso obiettivo con una frazione della complessità
                operativa.
              </p>
              <p className="mt-4">
                Gli anti-pattern che abbiamo osservato: usare l&apos;event sourcing per entità CRUD
                semplici che cambiano di rado (profili utente, configurazione), applicarlo a
                carichi dominati dalla lettura dove pesa soprattutto il costo di idratazione degli
                aggregati (cataloghi, dati di riferimento) e adottarlo senza investire negli
                strumenti di gestione delle proiezioni (il che porta inevitabilmente a script
                manuali sul database che vanificano lo scopo del pattern).
              </p>
              <p className="mt-4">
                Per le organizzazioni dei settori regolati, dove l&apos;auditabilità non è
                negoziabile e le interrogazioni temporali sono uno strumento di compliance,
                l&apos;event sourcing non è solo un pattern tecnico. È un investimento
                architetturale nella preparazione normativa. Per capire come applichiamo i pattern
                event-driven nelle integrazioni enterprise, guarda il nostro servizio di{" "}
                <Link href="/it/competenze#integrazione-enterprise" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  integrazione enterprise
                </Link>.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Event Sourcing", "CQRS", "EventStoreDB", "Integrazione enterprise", "Audit"].map((tag) => (
                <TechBadge key={tag} label={tag} variant="cyan" />
              ))}
            </div>
          </div>
        </section>

        </article>
        <CTASection
          title="Parliamo del tuo progetto"
          subtitle="Un'infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Scrivici."
          ctaLabel="Inizia la conversazione →"
          ctaHref="/it/contatti"
        />
      </main>
      <Footer />
    </>
  );
}
