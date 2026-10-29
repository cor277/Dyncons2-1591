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

const PATH = "/it/ricerca/rag-vs-fine-tuning";
const ARTICLE_URL = `https://www.dynamicsconsulting.it${PATH}`;

const article = RESEARCH_ARTICLES_IT["rag-vs-fine-tuning"];

export const metadata: Metadata = {
  title: "RAG vs fine-tuning: guida per l'AI enterprise",
  description:
    "Un framework decisionale per scegliere tra retrieval-augmented generation e fine-tuning in base ad aggiornamento dei dati, costi, latenza e profilo di rischio. Dall'esperienza in produzione.",
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

export default function RagVsFineTuningArticleIt() {
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
              <TechBadge label="AI applicata" variant="cyan" />
              <time dateTime="2026-02" className="text-xs text-[#7D8FA3]">
                {article.dateLabel}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              {article.headline}
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Un framework decisionale per scegliere tra retrieval-augmented generation e
              fine-tuning, in base all&apos;aggiornamento dei dati, al costo di inferenza, ai
              requisiti di latenza e al profilo di rischio del tuo caso d&apos;uso.
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
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">La domanda sbagliata</h2>
              <p>
                Quasi tutti i team AI enterprise impostano la questione come &quot;RAG o
                fine-tuning?&quot;, come se fosse una scelta binaria. In pratica la risposta
                dipende da quattro variabili specifiche del tuo caso d&apos;uso, e l&apos;architettura
                giusta spesso combina elementi di entrambi.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Quando vince il RAG</h2>
              <p>
                Il RAG è la scelta predefinita giusta quando la base di conoscenza cambia spesso:
                ogni settimana, ogni giorno o in tempo reale. Corpus documentali, cataloghi
                prodotto, testi normativi, linee guida cliniche: evolvono di continuo. Rifare il
                fine-tuning di un modello ogni volta che cambia il materiale sorgente non è
                sostenibile sul piano operativo.
              </p>
              <p className="mt-4">
                Il RAG vince anche sulla tracciabilità. Ogni risposta generata può citare i
                documenti da cui proviene. Nei settori regolati (sanità, farmaceutico, finanza)
                non è un di più: è un requisito di compliance. Se un auditor chiede &quot;perché
                il sistema ha detto questo?&quot;, devi poter indicare un documento, un paragrafo
                e una versione precisi.
              </p>
              <p className="mt-4">
                Infine, il RAG non richiede cicli di addestramento ad alto consumo di GPU.
                Aggiorni il vector store; il modello resta lo stesso. Questo lo rende più semplice
                da gestire e molto più economico da mantenere.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Quando vince il fine-tuning</h2>
              <p>
                Il fine-tuning è indicato quando il modello deve imparare un comportamento, un
                tono o uno schema di ragionamento specifico che non si riesce a ottenere in modo
                affidabile con il solo prompting e il retrieval. Linguaggi di dominio, compiti di
                classificazione specialistici o requisiti di formattazione dell&apos;output costanti
                su tutte le richieste sono buoni candidati.
              </p>
              <p className="mt-4">
                Il fine-tuning riduce anche la latenza di inferenza: la conoscenza è incorporata
                nei pesi del modello, quindi non c&apos;è un passaggio di retrieval. Per le
                applicazioni in cui la latenza è critica (interfacce vocali in tempo reale,
                classificazione ad alto throughput) questo conta.
              </p>
              <p className="mt-4">
                Il prezzo è la rigidità. Un modello addestrato con fine-tuning riflette lo stato
                dei dati di training al momento dell&apos;addestramento. Se la conoscenza sottostante
                cambia, devi riaddestrare, e riaddestrare è costoso, lento e richiede una
                valutazione attenta per evitare regressioni.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Il framework decisionale</h2>
              <p>
                Nei nostri deployment in produzione applichiamo quattro criteri:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Aggiornamento dei dati:</strong> se il materiale sorgente cambia più di una volta al mese → RAG.</li>
                <li><strong className="text-[#E6EDF3]">Requisito di tracciabilità:</strong> se devi citare le fonti → RAG.</li>
                <li><strong className="text-[#E6EDF3]">Budget di latenza:</strong> se servono meno di 200 ms e il retrieval aggiunge un overhead inaccettabile → fine-tuning (o approccio ibrido).</li>
                <li><strong className="text-[#E6EDF3]">Coerenza di comportamento:</strong> se il modello deve adottare in modo affidabile un tono, un formato o una catena di ragionamento specifici → fine-tuning per il comportamento di base, RAG per la conoscenza.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Analisi dei costi: quanto costa davvero ciascun approccio in produzione</h2>
              <p>
                Il RAG ha un costo iniziale più basso ma costi operativi continui: hosting del
                vector store, calcolo degli embedding per l&apos;ingestione dei documenti e overhead
                di latenza del retrieval su ogni richiesta. Per un&apos;organizzazione di medie
                dimensioni che gestisce da 10.000 a 50.000 richieste al giorno, vector store e
                pipeline di embedding costano tipicamente tra 500 e 2.000 € al mese su
                infrastruttura on-premise.
              </p>
              <p className="mt-4">
                Il fine-tuning ha un costo iniziale più alto (ore GPU per l&apos;addestramento,
                cura del dataset, cicli di valutazione) ma un costo per richiesta più basso una
                volta in produzione, perché non c&apos;è il passaggio di retrieval. Un singolo ciclo
                di fine-tuning su un modello da 7 miliardi di parametri costa tra 2.000 e
                10.000 €, a seconda della dimensione del dataset e dell&apos;infrastruttura. Ma
                questo costo si ripresenta ogni volta che i dati di training cambiano in modo
                significativo.
              </p>
              <p className="mt-4">
                Il costo nascosto del fine-tuning è la valutazione. Ogni nuova versione del
                modello va testata con rigore su benchmark di regressione prima di sostituire il
                modello in produzione. Nei settori regolati questa valutazione non è facoltativa:
                è un requisito di compliance. Il RAG aggira del tutto il problema: aggiornare la
                base di conoscenza non cambia il modello, quindi l&apos;onere di valutazione si
                limita alla qualità del retrieval, che è più economica e più rapida da testare.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Metodologia di valutazione: misurare ciò che conta</h2>
              <p>
                Come fai a sapere se la tua pipeline RAG o il tuo modello con fine-tuning
                funzionano davvero bene? Nei nostri deployment in produzione misuriamo quattro
                dimensioni:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Fedeltà:</strong> la risposta riflette correttamente il materiale sorgente? Per il RAG significa verificare che le fonti citate sostengano le affermazioni fatte. Per i modelli con fine-tuning significa valutarli su un test set tenuto da parte.</li>
                <li><strong className="text-[#E6EDF3]">Pertinenza:</strong> la risposta affronta la domanda reale? Si misura con la similarità semantica tra l&apos;intento della richiesta e il contenuto della risposta.</li>
                <li><strong className="text-[#E6EDF3]">Completezza:</strong> la risposta copre tutti gli aspetti rilevanti? Si valuta rispetto a risposte di riferimento curate da esperti per i casi d&apos;uso critici.</li>
                <li><strong className="text-[#E6EDF3]">Innocuità:</strong> la risposta evita contenuti clinicamente pericolosi, problematici sul piano legale o errati nei fatti? Si valuta con test avversariali e revisione da parte di esperti di dominio.</li>
              </ul>
              <p className="mt-4">
                Nei casi d&apos;uso sanitari e farmaceutici dominano fedeltà e innocuità. Una
                risposta pertinente e completa ma non fedele al materiale sorgente è peggio di
                nessuna risposta. Questa priorità di valutazione favorisce in modo naturale le
                architetture RAG, dove ogni affermazione è riconducibile a un documento preciso.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">L&apos;approccio ibrido</h2>
              <p>
                Nella maggior parte dei casi d&apos;uso enterprise che portiamo in produzione, la
                risposta è un modello di base con fine-tuning (per tono, formato e ragionamento
                di dominio) combinato con il RAG (per una conoscenza aggiornata e tracciabile).
                È così che funziona Nexus MDS Core: un model server locale o un endpoint UE
                sostituibile fornisce il livello di inferenza, Weaviate fornisce la vector search
                e la pipeline RAG garantisce che ogni risposta sia ancorata a materiale sorgente
                verificabile.
              </p>
              <p className="mt-4">
                Il livello con fine-tuning gestisce quello che chiamiamo &quot;comportamento&quot;:
                come risponde il modello, che formato usa, quali catene di ragionamento segue e
                come tratta i casi limite. Il livello RAG gestisce la &quot;conoscenza&quot;: ciò che
                il modello sa, attinto da documenti che si aggiornano senza riaddestrare. Questa
                separazione delle responsabilità rispecchia bene la realtà organizzativa: il
                comportamento cambia di rado (e va governato con cura), la conoscenza cambia di
                continuo (e deve essere facile da aggiornare).
              </p>
              <p className="mt-4">
                Per capire meglio come governiamo gli output AI in produzione, compresi i livelli
                di audit logging e di validazione che stanno sopra sia al RAG sia ai modelli con
                fine-tuning, leggi il nostro articolo su{" "}
                <Link href="/it/ricerca/governare-output-ai" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  come governare gli output AI nei settori regolati
                </Link>.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["RAG", "Fine-tuning", "LLM", "AI enterprise", "Weaviate"].map((tag) => (
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
