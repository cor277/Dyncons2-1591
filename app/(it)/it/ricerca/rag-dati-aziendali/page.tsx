import type { Metadata } from "next";
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

const PATH = "/it/ricerca/rag-dati-aziendali";
const ARTICLE_URL = `https://www.dynamicsconsulting.it${PATH}`;
const DESCRIPTION =
  "Una guida onesta a RAG sui dati aziendali: discovery sprint, strategia di chunking, valutazione del retrieval e governance. Niente tutorial: le decisioni di implementazione reali.";

export const metadata: Metadata = {
  title: "Come implementare RAG sui dati aziendali",
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "Come implementare RAG sui dati aziendali",
    description: DESCRIPTION,
    url: ARTICLE_URL,
    type: "article",
    locale: "it_IT",
  },
};

const article = RESEARCH_ARTICLES_IT["rag-dati-aziendali"];

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

export default function RagDatiAziendaliArticle() {
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
              <time dateTime="2026-04" className="text-xs text-[#7D8FA3]">
                {article.dateLabel}
              </time>
              <span className="text-xs text-[#7D8FA3]">6 min di lettura</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Come implementare RAG sui dati aziendali: la guida onesta
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              I tutorial danno per scontato un corpus pulito. Il tuo corpus non è pulito, e questo
              cambia tutto. Una guida pratica per chi prende decisioni tecniche, ha già letto i
              tutorial e li ha trovati inutili per la propria situazione reale.
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

            {/* 1. The real problem */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">1. Il problema vero</h2>
              <p>
                La maggior parte dei dati aziendali non è una cartella ordinata di PDF. È un misto di
                documenti scansionati con un OCR pessimo, file Excel usati come database, thread di
                email con decisioni cruciali sepolte a pagina 3, export dell&apos;ERP in formati
                proprietari e siti SharePoint in cui la struttura delle cartelle riflette sei anni di
                riorganizzazioni.
              </p>
              <p className="mt-4">
                Ogni tutorial su RAG comincia con &quot;carica i tuoi documenti in un vector
                database&quot;. Dà per scontato che i documenti siano individuati, accessibili,
                leggibili e ragionevolmente strutturati. Nella maggior parte delle medie imprese
                italiane nessuna di queste ipotesi regge. La distanza tra quello che descrivono i
                tutorial e quello che ti trovi davanti non è un piccolo inconveniente: è l&apos;intero
                rischio del progetto.
              </p>
            </div>

            {/* 2. Start with questions, not infrastructure */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">2. Parti dalle domande, non dall&apos;infrastruttura</h2>
              <p>
                Il primo errore è chiedersi &quot;quale vector database usiamo?&quot; prima di
                chiedersi &quot;quali decisioni vogliamo prendere più in fretta, e dove si trovano
                oggi le informazioni che servono per prenderle?&quot;
              </p>
              <p className="mt-4">
                Prima mappa le domande. Poi risali ai documenti. Poi all&apos;architettura di
                retrieval. Ho visto team passare tre mesi a costruire una pipeline di ingestion per un
                corpus documentale che si è rivelato irrilevante rispetto alle domande di business
                reali. L&apos;infrastruttura era eccellente. Il ROI era zero.
              </p>
              <p className="mt-4">
                Il punto di partenza giusto è una sessione alla lavagna con le persone che prendono le
                decisioni: cosa vi serve sapere, con quale rapidità, e dove lo trovate oggi? Le
                risposte a queste domande determinano il corpus, la strategia di chunking e i requisiti
                di latenza, non il contrario.
              </p>
            </div>

            {/* 3. The discovery phase */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">3. La fase di discovery: perché saltarla costa tre mesi</h2>
              <p>
                Uno sprint di discovery documentale di due settimane (inventario, mappatura degli
                accessi, valutazione della qualità, audit dei formati) sembra un costo in più. Non lo
                è. Ogni progetto che lo salta sbatte contro lo stesso muro dopo sei settimane: il
                corpus è peggiore del previsto, gli accessi sono limitati in modi inattesi, e la
                strategia di chunking costruita su ipotesi va rifatta da zero.
              </p>
              <p className="mt-4">
                Cosa produce davvero lo sprint di discovery: un inventario completo delle fonti
                documentali, con formato, modalità di accesso e punteggio di qualità. Una mappa di quali
                documenti rispondono a quali domande di business. Una valutazione realistica della
                qualità dell&apos;OCR, del mix di lingue e della coerenza strutturale. Un audit degli
                accessi: chi possiede cosa, cosa richiede credenziali, cosa sta dietro una VPN.
              </p>
              <p className="mt-4">
                La discovery non è un deliverable di consulenza. È un&apos;assicurazione. Le due
                settimane che spendi qui ti risparmiano tre mesi di rilavorazione dopo.
              </p>
            </div>

            {/* 4. Chunking strategy */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">4. La strategia di chunking conta più della scelta del modello</h2>
              <p>
                La qualità del retrieval di un sistema RAG dipende più da come i documenti vengono
                suddivisi in chunk che dal fatto di usare GPT-4 o un modello open source. È il fatto
                più sottovalutato in assoluto nel RAG aziendale.
              </p>
              <p className="mt-4">
                Il chunking a dimensione fissa (512 o 1024 token) funziona per corpus omogenei: post di
                blog, ticket di assistenza, descrizioni di prodotto. Per documentazione tecnica,
                contratti e testi normativi, cioè documenti la cui struttura interna conta, il chunking
                semantico che rispetta i confini delle sezioni supera quello a dimensione fissa con un
                margine significativo.
              </p>
              <p className="mt-4">
                Indicazioni concrete per tre tipi di documento con cui lavoriamo regolarmente:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>
                  <strong className="text-[#E6EDF3]">Norme tecniche (ISO, UNI, EN):</strong>{" "}
                  chunk per clausola. Conserva nei metadati l&apos;intera gerarchia della clausola (ad
                  es. &quot;ISO 9001:2015, Sezione 7.1.5, Clausola 7.1.5.2&quot;). Sovrapposizione di
                  una clausola superiore per il contesto. Dimensione tipica del chunk: 300–800 token.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Contratti e documenti legali:</strong>{" "}
                  chunk per articolo o sotto-articolo. Arricchisci i metadati con nomi delle parti, date
                  e rimandi. La sovrapposizione è fondamentale: le clausole contrattuali si richiamano
                  continuamente. Dimensione tipica del chunk: 400–1000 token.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Manuali operativi:</strong>{" "}
                  chunk per passo di procedura o per sezione. Conserva nei metadati l&apos;ordine dei
                  passi. Includi in ogni chunk titolo e ambito della procedura. Dimensione tipica del
                  chunk: 200–600 token.
                </li>
              </ul>
            </div>

            {/* 5. How to evaluate retrieval quality */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">5. Come valutare la qualità del retrieval prima di andare in produzione</h2>
              <p>
                Andare in produzione senza valutazione è il modo in cui ci si ritrova con un sistema
                che impressiona nelle demo e fallisce sulle domande vere. Tre approcci di valutazione
                che funzionano nella pratica:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li>
                  <strong className="text-[#E6EDF3]">MRR (Mean Reciprocal Rank)</strong> su un insieme
                  curato di coppie domanda-documento. Costruiscilo durante la discovery: devono crearlo
                  gli esperti di dominio che sanno dove stanno le risposte. Punta ad almeno 50 coppie
                  che coprano tutta la distribuzione delle domande.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Recall@k:</strong> per le 50 domande più
                  importanti, il chunk giusto compare tra i primi k risultati? Se la recall sui primi 5
                  è sotto l&apos;85%, chunking o strategia di embedding vanno sistemati prima di toccare
                  il livello di generazione.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Valutazione umana sui casi limite:</strong> le
                  domande la cui risposta sta in un punto insolito, o richiede di ragionare su due
                  documenti, o contiene una negazione. Sono quelle che, se falliscono, erodono la
                  fiducia degli utenti. Testale in modo esplicito.
                </li>
              </ul>
              <p className="mt-4">
                Non andare in produzione sotto una soglia concordata in anticipo. Fissa la soglia prima
                di iniziare a valutare, non dopo aver visto i numeri.
              </p>
            </div>

            {/* 6. Governance from day one */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">6. Governance dal primo giorno</h2>
              <p>
                Controllo degli accessi, audit logging e blocco della versione del modello non sono
                funzionalità da aggiungere quando il sistema funziona. Sono vincoli che danno forma
                all&apos;architettura. Se costruisci senza, li aggiungerai dopo sotto pressione, e
                l&apos;intervento a posteriori sarà incompleto.
              </p>
              <p className="mt-4">
                La governance minima per un sistema RAG in produzione: chi può interrogare quale
                corpus, registrato al momento della query. Quale versione del modello ha prodotto quale
                risposta, conservato in modo immutabile. Un processo di aggiornamento del modello che
                includa test di regressione sull&apos;insieme di valutazione. Una policy di
                conservazione che stabilisca per quanto tempo si tengono i log delle query e le
                risposte generate.
              </p>
              <p className="mt-4">
                Nei settori regolamentati (sanità, farmaceutico, finanza) non è facoltativo. In tutti
                gli altri resta comunque una buona idea. La prima volta che qualcuno chiede
                &quot;perché il sistema ha dato quella risposta?&quot; sarai contento di averla
                registrata.
              </p>
            </div>

            {/* 7. On-premise vs cloud */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">7. On-premise o cloud: i compromessi, detti onestamente</h2>
              <p>
                RAG in cloud è più rapido da avviare e più lento da governare. On-premise è più lento da
                avviare e più facile da governare su larga scala. Il punto di pareggio dipende da tre
                fattori:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong className="text-[#E6EDF3]">Sensibilità dei dati:</strong> se il corpus
                  contiene dati di pazienti, dati finanziari o segreti industriali, il peso di
                  compliance di un deployment in cloud spesso supera il peso operativo
                  dell&apos;on-premise.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Requisiti normativi:</strong> GDPR, AI Act, DORA,
                  Legge 132/2025: ognuno aggiunge vincoli su come i dati possono essere trattati e su
                  come il trattamento va documentato; nessuno impone di tenere i dati in Italia o in
                  UE, ma il GDPR limita i trasferimenti fuori dall&apos;Unione. L&apos;on-premise semplifica la compliance perché
                  elimina gli accordi di trattamento dati con terze parti.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Competenze del team:</strong> se il tuo team IT sa
                  gestire container e nodi GPU, l&apos;on-premise è praticabile. Se non lo sa fare, il
                  cloud è la scelta pragmatica finché non costruisci quella competenza. Ma costruiscila,
                  perché per i carichi continuativi la curva dei costi favorisce l&apos;on-premise.
                </li>
              </ul>
              <p className="mt-4">
                Nessuna delle due opzioni è migliore in assoluto. Chi ti dice il contrario sta vendendo
                qualcosa.
              </p>
            </div>

            {/* 10 questions */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">10 domande a cui rispondere prima di iniziare</h2>
              <ol className="list-decimal list-inside space-y-3">
                <li>Quali decisioni di business dovrebbe rendere più rapide questo sistema, e per chi?</li>
                <li>Dove si trovano oggi i dati che alimentano quelle decisioni, e in che formato?</li>
                <li>Chi è il titolare di quei dati, e quali restrizioni di accesso si applicano?</li>
                <li>Qual è la qualità dei documenti sorgente: accuratezza dell&apos;OCR, coerenza strutturale, mix di lingue?</li>
                <li>Quali requisiti normativi si applicano ai dati e al sistema AI che li tratta?</li>
                <li>Qual è la latenza accettabile per una risposta in produzione?</li>
                <li>Come misurerai la qualità del retrieval, e qual è la soglia minima accettabile?</li>
                <li>Chi manterrà il sistema dopo il rilascio: aggiornerà il corpus, rigenererà gli embedding, monitorerà la qualità?</li>
                <li>Cosa succede quando il sistema dà una risposta sbagliata? Qual è il raggio dei danni?</li>
                <li>Il tuo team infrastrutturale sa gestire container e carichi GPU, o devi prima costruire quella competenza?</li>
              </ol>
              <p className="mt-4">
                Se non sai rispondere con sicurezza ad almeno sette di queste, non sei pronto per
                costruire. Comincia dallo sprint di discovery.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["AI applicata", "Architettura enterprise", "Data platform"].map((tag) => (
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
