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

const PATH = "/it/ricerca/lakehouse-non-basta";
const ARTICLE_URL = `https://www.dynamicsconsulting.it${PATH}`;

const article = RESEARCH_ARTICLES_IT["lakehouse-non-basta"];

export const metadata: Metadata = {
  title: "Il lakehouse non basta",
  description:
    "I lakehouse eccellono nei carichi analitici ma faticano con le garanzie transazionali e l'evoluzione dello schema. Come progettare per entrambi senza ricostruire tutto.",
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

export default function LakehouseArticleIt() {
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
              <TechBadge label="Data platform" variant="cyan" />
              <time dateTime="2025-12" className="text-xs text-[#7D8FA3]">
                {article.dateLabel}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              {article.headline}
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              I lakehouse eccellono nei carichi analitici ma faticano a reggere le garanzie
              transazionali e il ritmo di evoluzione dello schema dei sistemi operativi. Come
              progettare per entrambi senza ricostruire tutto.
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
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">La promessa del lakehouse</h2>
              <p>
                Il data lakehouse doveva chiudere il dibattito tra data warehouse e data lake.
                Un&apos;unica piattaforma, transazioni ACID, schema enforcement e la scalabilità
                dell&apos;object storage. Apache Iceberg, Delta Lake e Apache Hudi l&apos;hanno resa
                tecnicamente possibile. Per i carichi analitici funziona.
              </p>
              <p className="mt-4">
                Il problema è che quasi tutte le data platform aziendali servono due padroni: i
                consumatori analitici (dashboard, report, training di modelli ML) e quelli
                operativi (applicazioni, API, motori decisionali in tempo reale). Hanno requisiti
                profondamente diversi, e fingere che un&apos;unica architettura li serva entrambi è
                il punto in cui la maggior parte dei progetti lakehouse accumula debito tecnico.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Dove il modello si rompe</h2>
              <p>
                I carichi operativi richiedono lookup puntuali sotto il secondo, contratti di
                schema rigorosi tra chi produce e chi consuma i dati e garanzie transazionali a
                livello di riga. Un lakehouse basato su file Parquet in object storage può offrire
                ACID a livello di tabella, ma non può eguagliare le prestazioni delle query
                puntuali di PostgreSQL né il rispetto dei contratti di schema di un&apos;API ben
                governata.
              </p>
              <p className="mt-4">
                L&apos;evoluzione dello schema è un&apos;altra linea di frattura. I consumatori
                analitici tollerano, anzi si aspettano, la flessibilità dello schema-on-read. Quelli
                operativi si rompono appena cambia il nome di un campo. Far passare entrambi per lo
                stesso modello di governance porta o a un&apos;eccessiva rigidità (che uccide
                l&apos;agilità analitica) o a un&apos;eccessiva flessibilità (che rompe le API in
                produzione).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">L&apos;architettura a due livelli</h2>
              <p>
                In produzione separiamo le responsabilità:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Livello operativo:</strong> PostgreSQL o uno store OLTP equivalente, che serve applicazioni e API con contratti di schema rigorosi, transazioni a livello di riga e letture sotto il millisecondo.</li>
                <li><strong className="text-[#E6EDF3]">Livello analitico:</strong> Apache Iceberg su object storage (MinIO nei deployment on-premise), che serve dashboard, pipeline ML e analisi ad hoc con schema-on-read e funzioni di time travel.</li>
                <li><strong className="text-[#E6EDF3]">Meccanismo di sincronizzazione:</strong> change data capture (CDC) o export continuo in stile Synapse Link dal livello operativo a quello analitico. Quasi in tempo reale, a consistenza eventuale e disaccoppiato.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Il problema dei dati di training per l&apos;AI</h2>
              <p>
                La diffusione dell&apos;AI in azienda introduce un terzo consumatore per cui né il
                lakehouse né lo store operativo sono stati progettati: le pipeline di training e
                inferenza ML. I carichi AI hanno bisogno di grandi volumi di dati storici
                (analitici), ma li vogliono in formati specifici (suddivisi in chunk, trasformati in
                embedding, deduplicati e versionati) che né i file Parquet né le tabelle PostgreSQL
                offrono in modo naturale.
              </p>
              <p className="mt-4">
                I vector database come Weaviate stanno del tutto fuori da entrambi i livelli.
                Consumano dati dal livello analitico (per gli embedding su scala di corpus) e dal
                livello operativo (per l&apos;iniezione di contesto in tempo reale nelle pipeline
                RAG). Trattare il vector store come un terzo livello, con la sua pipeline di
                ingestione, la sua governance dello schema e le sue garanzie di aggiornamento, è più
                onesto che fingere che il lakehouse possa coprire questo ruolo.
              </p>
              <p className="mt-4">
                Nei deployment di Nexus MDS Core realizziamo un&apos;architettura a tre livelli:
                PostgreSQL per i dati operativi, MinIO con Apache Iceberg per i carichi analitici e
                Weaviate per lo storage vettoriale dedicato all&apos;AI. Ogni livello ha la sua
                pipeline CDC, il suo modello di governance e il suo SLA di aggiornamento. La
                complessità è esplicita invece che nascosta, e una complessità esplicita è una
                complessità gestibile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Implicazioni per la governance</h2>
              <p>
                La data governance in un&apos;architettura a più livelli è profondamente diversa da
                quella in un modello a store unico. Ogni livello ha pattern di accesso diversi,
                profili di sensibilità diversi e requisiti normativi diversi.
              </p>
              <p className="mt-4">
                Il livello operativo contiene dati personali vivi (cartelle dei pazienti,
                informazioni sui clienti, dettagli delle transazioni) soggetti ai controlli di
                accesso del GDPR, alle policy di conservazione e al diritto alla cancellazione. Il
                livello analitico contiene dati trasformati, spesso aggregati, dove la governance a
                livello individuale è meno granulare ma il tracciamento della lineage è
                fondamentale. Il livello AI contiene embedding che possono costituire o meno dati
                personali ai sensi del GDPR (una questione su cui le autorità non si sono ancora
                pronunciate in modo definitivo).
              </p>
              <p className="mt-4">
                Un modello di governance unificato che tratta i tre livelli allo stesso modo sarà
                o troppo restrittivo per i carichi analitici e AI (e uccide la produttività) o
                troppo permissivo per i dati operativi (e crea rischio di compliance).
                L&apos;approccio pragmatico sono policy di governance specifiche per livello,
                collegate da un data catalogue condiviso che traccia la lineage su tutti e tre i
                livelli.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Implicazioni pratiche</h2>
              <p>
                Non è un rifiuto del pattern lakehouse, è un suo affinamento. Il lakehouse è
                eccellente per ciò per cui è nato: uno storage analitico unificato con garanzie
                ACID. Ma usarlo come unica fonte di verità sia per i carichi operativi sia per
                quelli analitici crea fragilità. Separa i livelli, collegali con il CDC e lascia
                che ciascuno faccia ciò che sa fare meglio.
              </p>
              <p className="mt-4">
                Per le organizzazioni che costruiscono capacità AI sopra l&apos;infrastruttura dati
                esistente, il consiglio pratico è: non cercare di forzare il lakehouse a servire
                ogni consumatore. Accetta che carichi operativi, analitici e AI abbiano requisiti
                profondamente diversi. Progetta l&apos;architettura per servirli bene tutti, con
                contratti sui dati chiari e pipeline CDC tra un livello e l&apos;altro.
              </p>
              <p className="mt-4">
                Il risultato ha più parti in movimento, ma ciascuna è più semplice, più prevedibile
                e più facile da governare di un&apos;unica piattaforma spinta oltre i limiti per cui
                è stata progettata. Nei settori regolati, dove la data governance non è
                negoziabile, questa separazione esplicita non è over-engineering. È
                l&apos;architettura minima indispensabile. Per vedere come la realizziamo in
                pratica, guarda il nostro servizio di{" "}
                <Link href="/it/competenze#data-platform" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  data platform moderne
                </Link>{" "}
                o esplora l&apos;architettura di{" "}
                <Link href="/it/piattaforma-nexus" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Nexus MDS Core
                </Link>.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Data Lakehouse", "Apache Iceberg", "PostgreSQL", "CDC", "Architettura dati"].map((tag) => (
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
