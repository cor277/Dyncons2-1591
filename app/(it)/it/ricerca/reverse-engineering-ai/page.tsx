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

const PATH = "/it/ricerca/reverse-engineering-ai";
const ARTICLE_URL = `https://www.dynamicsconsulting.it${PATH}`;

const article = RESEARCH_ARTICLES_IT["reverse-engineering-ai"];

export const metadata: Metadata = {
  title: "Reverse engineering di piattaforme legacy con l'AI",
  description:
    "RAG e workflow multi-agente per ricostruire la conoscenza funzionale e architetturale di grandi codebase legacy. Cosa funziona, cosa no e cosa richiede la tracciabilità.",
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

export default function AiReverseEngineeringArticleIt() {
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
              <TechBadge label="Modernizzazione legacy" variant="cyan" />
              <time dateTime="2025-11" className="text-xs text-[#7D8FA3]">
                {article.dateLabel}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              {article.headline}
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              RAG e workflow multi-agente per ricostruire la conoscenza funzionale e
              architetturale di grandi codebase legacy. Cosa funziona, cosa no e come sono fatti
              davvero i requisiti di tracciabilità.
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
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Il problema</h2>
              <p>
                Ogni azienda con qualche anno alle spalle ha almeno un sistema che nessuno capisce
                fino in fondo. Gli sviluppatori originali se ne sono andati. La documentazione, se
                mai è esistita, è ferma da anni. Il codice è stato rattoppato, esteso e aggirato da
                team successivi che conoscevano ciascuno il proprio pezzo ma non l&apos;insieme. Eppure
                quel sistema fa girare processi di business critici che non si possono fermare.
              </p>
              <p className="mt-4">
                Modernizzare questi sistemi senza prima capirli è il modo in cui le organizzazioni
                producono fallimenti costosi. L&apos;approccio tradizionale (mettere un team di
                analisti a leggere il codice e scrivere documentazione) richiede mesi e produce
                documenti soggettivi, incompleti e già superati prima di essere finiti.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Cosa porta il RAG</h2>
              <p>
                Caricare un&apos;intera codebase in un vector store (noi usiamo Weaviate) crea una
                base di conoscenza interrogabile per significato. Puoi fare domande come
                &quot;quali moduli scrivono nella tabella clienti?&quot; o &quot;cosa succede
                quando un ordine viene annullato?&quot; e ottenere risposte ancorate al codice
                reale, con riferimenti a file e numeri di riga precisi.
              </p>
              <p className="mt-4">
                È una cosa profondamente diversa dal chiedere a un LLM di &quot;spiegare questo
                codice&quot;. Le risposte ancorate al RAG sono tracciabili: ogni affermazione si può
                verificare sulla sorgente. Questa tracciabilità non è solo utile; nella nostra
                esperienza è la proprietà più importante in assoluto per costruire fiducia con i
                team che dovranno agire sulla base dell&apos;analisi.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Orchestrazione multi-agente</h2>
              <p>
                Una singola query RAG risponde a una domanda specifica. Produrre un&apos;analisi
                completa richiede di orchestrare centinaia di query in una sequenza strutturata.
                Usiamo n8n per costruire workflow multi-agente che esplorano una codebase in modo
                sistematico:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li>Individuare tutti i punti di ingresso (API, job schedulati, controller della UI)</li>
                <li>Tracciare i flussi di dati dall&apos;ingestione allo storage fino all&apos;output</li>
                <li>Mappare le dipendenze tra moduli</li>
                <li>Segnalare le regole di business non documentate nascoste nel codice</li>
                <li>Generare output strutturati: specifiche funzionali, dizionari dati, diagrammi di architettura</li>
              </ul>
              <p className="mt-4">
                Ogni passaggio produce artefatti che vengono rivisti da analisti umani prima di
                passare al successivo. L&apos;AI accelera il lavoro; le persone lo validano.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Cosa non funziona</h2>
              <p>
                Dare in pasto a un LLM un&apos;intera codebase chiedendo &quot;un&apos;analisi
                completa&quot; produce risultati che suonano sicuri ma non sono affidabili. Senza
                l&apos;ancoraggio del retrieval, il modello inventa collegamenti che non esistono e
                si perde quelli non ovvi che esistono. I limiti della finestra di contesto fanno sì
                che percorsi di codice critici vengano ignorati senza alcun avviso. E senza
                tracciabilità non c&apos;è modo di verificare un&apos;affermazione se non con una
                revisione manuale del codice, il che vanifica lo scopo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">La toolchain nel dettaglio: com&apos;è fatta davvero la pipeline</h2>
              <p>
                La toolchain specifica conta. In produzione, la nostra pipeline di reverse
                engineering è composta da:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Vector store Weaviate:</strong> la codebase è suddivisa in chunk a livello di funzione o metodo, con finestre di contesto sovrapposte che preservano le relazioni di chiamata. Ogni chunk include metadati: percorso del file, modulo, linguaggio e un tag strutturale (controller, service, model, utility). Questi metadati permettono un retrieval filtrato: una domanda sui pattern di accesso ai dati cerca solo nei livelli model e repository, non nel codice della UI.</li>
                <li><strong className="text-[#E6EDF3]">Modello di embedding:</strong> usiamo embedding per il codice adattati al dominio invece di embedding testuali generici. I modelli specifici per il codice capiscono che implementazioni sintatticamente diverse dello stesso pattern (per esempio la gestione degli errori in Java e in C#) sono semanticamente simili.</li>
                <li><strong className="text-[#E6EDF3]">Orchestrazione con n8n:</strong> i workflow multi-agente sono definiti come flussi n8n con diramazioni condizionali, gestione degli errori e approval gate umani. Ogni agente del flusso ha un ruolo preciso: mappatura delle dipendenze, tracciamento dei flussi di dati, estrazione delle regole di business, analisi della superficie API. Il livello di orchestrazione garantisce che gli agenti elaborino la codebase nell&apos;ordine giusto e che l&apos;output di ciascuno sia disponibile agli agenti a valle.</li>
                <li><strong className="text-[#E6EDF3]">Formato dell&apos;output:</strong> artefatti JSON strutturati, non testo libero. Specifiche funzionali, dizionari dati e mappe delle dipendenze sono prodotti in formati leggibili dalle macchine, che si possono importare in strumenti di architettura e sistemi di project management o usare come input per la fase successiva (la generazione del codice).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Dall&apos;analisi alla modernizzazione: la pipeline completa</h2>
              <p>
                Il reverse engineering non è l&apos;obiettivo finale: è la base della
                modernizzazione. Gli artefatti di analisi prodotti dalla pipeline AI alimentano
                direttamente la fase di ricostruzione. Le specifiche funzionali diventano user
                story. I dizionari dati diventano definizioni di schema. Le mappe delle dipendenze
                diventano diagrammi di architettura per il nuovo sistema.
              </p>
              <p className="mt-4">
                Nel nostro{" "}
                <Link href="/it/case-studies/iatp" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  progetto IATP
                </Link>, la fase di reverse engineering ha prodotto 47 specifiche funzionali, un
                dizionario dati completo su oltre 180 tabelle di database e una mappa delle
                dipendenze che ha fatto emergere 12 punti di integrazione non documentati con
                sistemi esterni. Questo output è diventato la specifica della nuova piattaforma,
                riducendo la fase di specifica da mesi a giorni ed eliminando l&apos;ambiguità che
                di solito affligge i progetti di riscrittura di sistemi legacy.
              </p>
              <p className="mt-4">
                La pipeline AI ha anche individuato il pattern del{" "}
                <strong className="text-[#E6EDF3]">motore di obsolescenza</strong>: componenti in
                cui il debito tecnico si era accumulato fino al punto in cui il costo della
                manutenzione superava quello della sostituzione. Quantificandolo (righe di codice
                morto, dipendenze inutilizzate, chiamate ad API deprecate, vulnerabilità di
                sicurezza nelle versioni di librerie bloccate) l&apos;analisi ha fornito una base
                oggettiva per decidere quali componenti ricostruire per primi.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Risultati in produzione</h2>
              <p>
                Nel progetto IATP questo approccio ha ridotto la fase di analisi da 3-4 mesi
                stimati di lavoro manuale a meno di due settimane. Soprattutto, l&apos;output era
                verificabile: ogni specifica funzionale era riconducibile a codice preciso, e il
                team di sviluppo poteva validare le affermazioni sulla sorgente in pochi minuti
                invece che in giorni. Oggi è una metodologia ripetibile della nostra{" "}
                <Link href="/modernizzazione-sistemi-legacy-ai" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  practice di modernizzazione legacy
                </Link>.
              </p>
              <p className="mt-4">
                I risultati quantitativi su più progetti:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Velocità di analisi:</strong> tempi ridotti del 70-85% rispetto al reverse engineering manuale</li>
                <li><strong className="text-[#E6EDF3]">Copertura:</strong> l&apos;analisi assistita dall&apos;AI individua sistematicamente il 15-30% in più di punti di integrazione e regole di business rispetto all&apos;analisi manuale</li>
                <li><strong className="text-[#E6EDF3]">Accuratezza:</strong> con la validazione umana, il tasso di falsi positivi sulle specifiche funzionali è sotto il 5%</li>
                <li><strong className="text-[#E6EDF3]">Costo:</strong> il costo totale dell&apos;analisi assistita dall&apos;AI è tipicamente il 40-60% dell&apos;equivalente sforzo manuale</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Modernizzazione legacy", "RAG", "Reverse Engineering", "n8n", "Weaviate"].map((tag) => (
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
