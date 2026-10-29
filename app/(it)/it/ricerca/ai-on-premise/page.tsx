import type { Metadata } from "next";
import { NEXUS_SERVICE_COUNT } from "@/lib/nexus";
import Link from "next/link";
import { OG_IMAGE } from "@/app/og";
import { RESEARCH_ARTICLES_IT } from "@/app/research-articles-it";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { alternatesFor } from "@/lib/i18n-routes";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

const PATH = "/it/ricerca/ai-on-premise";
const ARTICLE_URL = `https://www.dynamicsconsulting.it${PATH}`;
const DESCRIPTION =
  "Le ragioni architetturali e di governance per un'infrastruttura AI sovrana e on-premise in sanità, nel farmaceutico e nei settori regolamentati. Perché cloud-native non vuol dire sempre moderno.";

export const metadata: Metadata = {
  title: "Perché l'AI on-premise non è un passo indietro",
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "Perché l'AI on-premise non è un passo indietro",
    description: DESCRIPTION,
    url: ARTICLE_URL,
    type: "article",
    locale: "it_IT",
  },
};

const article = RESEARCH_ARTICLES_IT["ai-on-premise"];

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

export default function AiOnPremiseArticle() {
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
              <TechBadge label="AI sovrana" variant="cyan" />
              <time dateTime="2026-03" className="text-xs text-[#7D8FA3]">
                {article.dateLabel}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Perché l&apos;AI on-premise non è un passo indietro
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              L&apos;idea che cloud-native voglia dire moderno è sbagliata per i settori
              regolamentati. Ecco le ragioni architetturali e di governance per un&apos;infrastruttura
              AI sovrana e on-premise in sanità e nel farmaceutico.
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
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Il presupposto del cloud</h2>
              <p>
                A un certo punto dell&apos;ultimo decennio, l&apos;industria della tecnologia enterprise
                ha interiorizzato un&apos;equazione semplice: cloud uguale moderno, on-premise uguale
                legacy. Per molti carichi di lavoro è vero. Per l&apos;AI nei settori regolamentati è
                pericolosamente sbagliato.
              </p>
              <p className="mt-4">
                Quando un&apos;organizzazione mette in produzione un LLM su un hyperscaler, non sta solo
                noleggiando capacità di calcolo. Sta facendo passare i suoi dati più sensibili (cartelle
                cliniche, formulazioni farmaceutiche, transazioni finanziarie) su un&apos;infrastruttura
                che non controlla, regolata da condizioni di servizio che non può negoziare, in
                giurisdizioni che potrebbe non conoscere fino in fondo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Di cosa hanno davvero bisogno i settori regolamentati</h2>
              <p>
                Il GDPR, l&apos;AI Act (Regolamento UE 2024/1689), la Legge 132/2025 e la NIS2 creano un
                quadro normativo in cui le organizzazioni devono dimostrare un controllo verificabile
                sui propri sistemi AI. Significa sapere, ed essere in grado di provare, dove risiedono i
                dati, come i modelli li trattano, chi vi ha accesso e come sono governati gli output.
              </p>
              <p className="mt-4">
                Il deployment on-premise non è una preferenza filosofica. È la strada più diretta per
                soddisfare questi requisiti. Quando l&apos;intero stack AI gira dentro il perimetro
                dell&apos;organizzazione, la residenza dei dati è garantita dall&apos;architettura, non
                da un contratto. Gli audit trail sono sotto il controllo dell&apos;organizzazione, non
                del fornitore. E la superficie di attacco per l&apos;esfiltrazione dei dati si riduce a
                ciò che l&apos;organizzazione gestisce direttamente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Il mito delle prestazioni</h2>
              <p>
                Un&apos;obiezione frequente è che l&apos;AI on-premise non possa eguagliare le
                prestazioni del cloud. Cinque anni fa era vero. Oggi motori di inferenza come vLLM
                offrono un throughput da produzione su hardware GPU di largo consumo. Vector database
                come Weaviate girano in modo efficiente su normali cluster Kubernetes. Per la grande
                maggioranza dei casi d&apos;uso enterprise il divario di prestazioni si è chiuso.
              </p>
              <p className="mt-4">
                Quello che non si è chiuso è il divario di governance. Nessuna quantità di
                certificazioni di conformità del cloud può sostituire la certezza che deriva dal fatto
                che i dati non escono mai dal tuo edificio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">L&apos;equazione dei costi: cloud o on-premise per i carichi AI</h2>
              <p>
                L&apos;idea che l&apos;AI in cloud costi meno merita una verifica. Per i carichi
                dominati dall&apos;inferenza, quelli che le organizzazioni sanitarie eseguono ogni
                giorno, il costo delle GPU in cloud cresce in modo lineare con l&apos;uso.
                Un&apos;organizzazione che fa girare più modelli (NLP clinico, estrazione da documenti,
                AI conversazionale) paga ogni ora di calcolo GPU, prima di storage e costi di
                egress.
              </p>
              <p className="mt-4">
                L&apos;hardware GPU on-premise, anche di classe enterprise, è un investimento che si
                ammortizza in più anni. Dopo l&apos;investimento iniziale, il costo marginale di
                un&apos;inferenza in più è basso. Per le organizzazioni con carichi AI prevedibili e
                continuativi esiste un punto di svolta del costo totale di possesso (TCO) oltre il
                quale l&apos;on-premise costa meno; dove cade dipende da volumi, hardware e utilizzo,
                e va calcolato sul caso.
              </p>
              <p className="mt-4">
                C&apos;è poi un costo nascosto dell&apos;AI in cloud che compare di rado nei calcoli
                del TCO: il lock-in sul fornitore. Spostare una pipeline AI in produzione da un
                hyperscaler a un altro è un progetto che si misura in mesi, non in giorni.
                Un&apos;infrastruttura on-premise costruita su standard aperti (Kubernetes, container
                OCI, storage compatibile S3) lascia all&apos;organizzazione libertà di scelta.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">La residenza dei dati in pratica: cosa chiedono davvero le norme UE</h2>
              <p>
                Il GDPR richiede che i dati personali trasferiti fuori dall&apos;UE godano di garanzie
                adeguate. L&apos;AI Act (Regolamento UE 2024/1689) aggiunge requisiti specifici per i
                sistemi AI: i dati usati per addestramento, test e inferenza vanno gestiti con processi
                di governance documentati. La{" "}
                <Link href="/it/ricerca/legge-132-2025" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Legge 132/2025
                </Link>{" "}
                non impone la residenza dei dati: l&apos;unica norma in quella direzione è una
                preferenza non vincolante, per le piattaforme di e-procurement della PA, verso
                soluzioni che tengono i dati strategici in data center sul territorio nazionale
                (art. 5, comma 1, lett. d). La residenza è una scelta di progetto che rende il
                controllo più facile da dimostrare, non un obbligo di legge.
              </p>
              <p className="mt-4">
                In pratica &quot;residenza dei dati&quot; significa più che tenere i dati su server
                nell&apos;UE. Significa che l&apos;intera pipeline di elaborazione (ingestion,
                embedding, archiviazione vettoriale, inferenza e consegna della risposta) gira in un
                ambiente sotto controllo giurisdizionale. Un deployment in cloud in cui i dati stanno a
                Francoforte ma l&apos;inferenza gira in Virginia non rispetta questo standard, anche se
                lo storage tecnicamente risiede nell&apos;UE.
              </p>
              <p className="mt-4">
                Il deployment on-premise elimina del tutto questa ambiguità. Quando l&apos;intero stack
                AI gira su hardware che l&apos;organizzazione possiede e gestisce, la residenza dei dati
                è garantita dalla fisica, non da clausole contrattuali. Non è un argomento filosofico: è
                la differenza tra una postura di compliance che dipende da attestazioni di terzi e una
                che l&apos;organizzazione può verificare da sola.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Pattern di implementazione: passare dal cloud all&apos;AI on-premise</h2>
              <p>
                Le organizzazioni non devono migrare tutto in una volta. Le transizioni che abbiamo
                guidato seguono un approccio per fasi:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Fase 1 — Assessment:</strong> mappare i carichi AI esistenti, classificare la sensibilità dei dati e individuare quali carichi devono passare on-premise per ragioni normative e quali possono restare in cloud.</li>
                <li><strong className="text-[#E6EDF3]">Fase 2 — Fondamenta:</strong> installare l&apos;infrastruttura on-premise (cluster Kubernetes, nodi GPU, livello di storage).</li>
                <li><strong className="text-[#E6EDF3]">Fase 3 — Migrazione:</strong> spostare per primi i carichi più sensibili (AI clinica, sistemi rivolti ai pazienti). Mantenere il cloud per i carichi non sensibili durante la transizione.</li>
                <li><strong className="text-[#E6EDF3]">Fase 4 — Ottimizzazione:</strong> mettere a punto le prestazioni di inferenza, introdurre l&apos;osservabilità e definire i runbook operativi per lo stack on-premise.</li>
              </ul>
              <p className="mt-4">
                Il punto chiave è che AI on-premise non significa costruire da zero. Piattaforme moderne
                come Nexus MDS Core offrono uno stack già integrato, così il deployment non parte da
                zero. Buona parte della complessità operativa che storicamente rendeva proibitiva
                l&apos;AI on-premise oggi la gestisce la piattaforma.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Come si presenta l&apos;AI sovrana nella pratica</h2>
              <p>
                Nexus MDS Core è la nostra risposta a questa sfida: {NEXUS_SERVICE_COUNT} servizi in
                container (inferenza LLM locale con llama.cpp, pipeline RAG con Weaviate, autenticazione
                Zero-Trust con Keycloak, motore di workflow n8n, un audit con catena di hash di ogni
                chiamata al modello) che girano su Docker dentro il perimetro dell&apos;organizzazione,
                con la generazione su un modello locale o su un endpoint UE sostituibile. È già in
                produzione per{" "}
                <Link href="/it/case-studies/federfarma" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Federfarma Lombarda
                </Link>{" "}
                e per due servizi in ambito sanitario, CureSicure e{" "}
                <Link href="/it/case-studies/humania-care" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  HumanIA Care
                </Link>.
              </p>
              <p className="mt-4">
                Per le organizzazioni sanitarie che stanno valutando la propria strategia AI, la
                decisione architetturale non è cloud contro on-premise in astratto. È una domanda
                concreta: il tuo modello di deployment attuale può soddisfare i requisiti normativi che
                hai davanti oggi e quelli in arrivo nei prossimi 18 mesi? Se la risposta è incerta,
                l&apos;on-premise merita una valutazione seria.
              </p>
              <p className="mt-4">
                L&apos;AI on-premise non è un passo indietro. È l&apos;architettura che prende sul
                serio la compliance, la sovranità dei dati e l&apos;autonomia
                dell&apos;organizzazione. Per i settori regolamentati è l&apos;unica architettura che
                abbia senso. Leggi il nostro{" "}
                <Link href="/it/ai-sanitaria-on-premise" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  approfondimento sull&apos;AI on-premise per la sanità
                </Link>{" "}
                per una prospettiva dettagliata sull&apos;implementazione, oppure esplora la{" "}
                <Link href="/it/piattaforma-nexus" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  piattaforma Nexus MDS Core
                </Link>{" "}
                per vedere l&apos;architettura nel dettaglio.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["AI sovrana", "On-premise", "GDPR", "AI Act", "Sanità"].map((tag) => (
                <TechBadge key={tag} label={tag} variant="cyan" />
              ))}
            </div>
          </div>
        </section>

        </article>
        <CTASection
          title="Parliamo del tuo progetto"
          subtitle="Infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Scrivici."
          ctaLabel="Inizia la conversazione →"
          ctaHref="/it/contatti"
        />
      </main>
      <Footer />
    </>
  );
}
