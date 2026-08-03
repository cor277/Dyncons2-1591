import type { Metadata } from "next";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { TechBadge } from "@/components/ui/TechBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import Link from "next/link";

const EN_URL = "https://www.dynamicsconsulting.it/case-studies/federfarma";
const IT_URL = "https://www.dynamicsconsulting.it/it/case-studies/federfarma";

export const metadata: Metadata = {
  title: "Federfarma Lombarda — Nexus MDS Core in produzione",
  description:
    "Assistente normativo per oltre 1.000 farmacie delle province di Milano, Lodi e Monza Brianza. Catena di versioni esplicita, dati personali mai indicizzati, registro inalterabile.",
  alternates: {
    canonical: IT_URL,
    languages: {
      it: IT_URL,
      en: EN_URL,
      "x-default": EN_URL,
    },
  },
  openGraph: {
    images: OG_IMAGE,
    title: "Federfarma Lombarda — Nexus MDS Core in produzione",
    description:
      "Assistente normativo per oltre 1.000 farmacie delle province di Milano, Lodi e Monza Brianza. Catena di versioni esplicita, dati personali mai indicizzati, registro inalterabile.",
    url: IT_URL,
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "Federfarma Lombarda — Nexus MDS Core in produzione",
    description:
      "Assistente normativo per oltre 1.000 farmacie delle province di Milano, Lodi e Monza Brianza. Catena di versioni esplicita, dati personali mai indicizzati, registro inalterabile.",
  },
};

const tech = [
  "Nexus MDS Core",
  "Weaviate",
  "Keycloak OIDC/PKCE",
  "APISIX",
  "Budibase",
  "n8n",
  "PostgreSQL + pgvector",
  "Apache Tika",
  "LLM locale (llama.cpp)",
  "MinIO",
  "Dremio",
  "Redis",
  "Directus",
  "RabbitMQ",
  "Docker",
];

const risultati = [
  {
    k: "Strumento",
    prima: "Sito con motore di ricerca Google",
    adesso: "Assistente su Nexus MDS Core",
  },
  {
    k: "Utilizzo",
    prima: "Non ha raggiunto un utilizzo significativo",
    adesso: "~2.000 interrogazioni al giorno",
  },
  {
    k: "Vigenza normativa",
    prima: "A carico del farmacista",
    adesso: "Catena di versioni esplicita e verificabile",
  },
  {
    k: "Onere di conformità",
    prima: "Distribuito su 1.000 farmacie",
    adesso: "Presidiato dal sistema, controllabile dall’utente",
  },
  {
    k: "Dati personali",
    prima: "—",
    adesso: "Mai indicizzati, esclusi in ingestione",
  },
  {
    k: "Tracciabilità",
    prima: "Nessuna",
    adesso: "Registro inalterabile di ogni invocazione",
  },
];

export default function FederfarmaCaseStudyIt() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen" lang="it">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/case-studies"
              className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
            >
              ← Tutti i case study
            </Link>
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Distribuzione farmaceutica · Sovereign AI
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Federfarma Lombarda — Nexus MDS Core in produzione
            </h1>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[#7D8FA3] text-base">
              <div>
                <dt className="inline font-semibold text-[#E6EDF3]">Settore: </dt>
                <dd className="inline">distribuzione farmaceutica</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-[#E6EDF3]">Piattaforma: </dt>
                <dd className="inline">Nexus MDS Core</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-[#E6EDF3]">Perimetro: </dt>
                <dd className="inline">
                  oltre 1.000 farmacie nelle province di Milano, Lodi e Monza Brianza
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold text-[#E6EDF3]">Stato: </dt>
                <dd className="inline">in produzione</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-[#7D8FA3]">
              <Link href="/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3] underline" hrefLang="en">
                Read this page in English →
              </Link>
            </p>
          </div>
        </section>

        {/* Metriche */}
        <section className="border-b border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1.000+", label: "Farmacie nel perimetro" },
              { value: "~2.000", label: "Interrogazioni al giorno" },
              { value: "Mai", label: "Dati personali indicizzati" },
              { value: "8 GB", label: "GPU in produzione" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#E6EDF3]">{m.value}</div>
                <div className="text-xs md:text-sm text-[#7D8FA3] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Corpo */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-12 text-[#7D8FA3] leading-relaxed text-lg">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Il problema che nessuno chiamava per nome
              </h2>
              <p>
                Federfarma Lombarda — l’Associazione Chimica Farmaceutica Lombarda fra Titolari di
                Farmacia, che rappresenta i titolari delle province di Milano, Lodi e Monza Brianza —
                produce un flusso continuo di comunicazioni operative verso le farmacie associate:
                circolari, ritiri e carenze di farmaci, turni di guardia, scadenze fiscali,
                normative, moduli. Migliaia di documenti eterogenei che si sovrappongono e si
                aggiornano nel tempo, perché una comunicazione ne corregge o ne sostituisce
                un’altra.
              </p>
              <p className="mt-4">
                Pubblicare quei documenti non era il problema. Era già stato risolto due volte,
                male.
              </p>
              <p className="mt-4">
                Esisteva un sito con l’intera documentazione e un motore di ricerca costruito su
                tecnologia Google. Funzionava male. Il canale precedente non ha raggiunto un
                utilizzo significativo. Un sistema che nessuno apre non ha un problema di adozione:
                ha un problema di utilità.
              </p>
              <p className="mt-4">
                In parallelo circolava, e circola tuttora, una newsletter che recapita i documenti a
                ogni farmacia. È comoda e continuerà a esistere. Ma svolge una funzione che vale la
                pena nominare con precisione:{" "}
                <strong className="text-[#E6EDF3]">
                  trasferisce l’onere di conformità su mille farmacisti
                </strong>
                , ciascuno tenuto a leggere ogni documento, ricordarlo, e sapere autonomamente quale
                versione sia ancora vigente nel momento in cui deve applicarla.
              </p>
              <p className="mt-4">
                Non era distribuzione di informazione. Era distribuzione di responsabilità senza gli
                strumenti per esercitarla.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Perché un motore di ricerca non bastava, e perché un RAG ingenuo sarebbe stato
                peggio
              </h2>
              <p>
                Su un corpus normativo, la ricerca semantica restituisce il documento più{" "}
                <strong className="text-[#E6EDF3]">pertinente</strong> alla domanda. Non quello{" "}
                <strong className="text-[#E6EDF3]">vigente</strong>.
              </p>
              <p className="mt-4">
                La distinzione sembra sottile e non lo è. Se la circolare B sostituisce la A, e il
                farmacista chiede le modalità di erogazione di un farmaco, un sistema di retrieval
                standard può restituire la A con piena sicurezza: è pertinente, è ben scritta,
                risponde esattamente alla domanda. Ed è superata.
              </p>
              <p className="mt-4">
                Il farmacista agisce su una disposizione non più valida credendo di essere conforme.
                In farmacia questo non è un fastidio operativo. È un errore di conformità con un
                nome sopra.
              </p>
              <p className="mt-4">
                Aggiungere un assistente conversazionale a quel corpus, senza prima risolvere la
                successione normativa, avrebbe peggiorato la situazione: accesso più rapido e più
                fiducioso alla risposta sbagliata.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">La catena di versioni</h2>
              <p>
                Il sistema risolve l’obsolescenza in due fasi distinte, e la seconda è quella che
                conta.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">In ingestione</strong>, un passo di analisi
                individua nel documento i riferimenti di sostituzione verso comunicazioni
                precedenti, confrontandolo con i candidati recuperati semanticamente sullo stesso
                oggetto, zona o farmaco. Estrae inoltre entità, date, scadenze e finestre di
                validità.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">In riconciliazione</strong>, un passo globale
                rilegge l’intero indice e ricostruisce le catene di versione — A sostituito da B, B
                da C — marcando come superato ogni documento che è stato rimpiazzato.
              </p>
              <p className="mt-4">
                La proprietà che rende utilizzabile il sistema è che questa seconda fase è{" "}
                <strong className="text-[#E6EDF3]">indipendente dall’ordine di caricamento</strong>.
                Gli arretrati possono essere importati dopo i documenti recenti: la catena si
                ricompone corretta. Chiunque abbia costruito un archivio normativo sa che questa è
                la parte difficile, e che i sistemi che non la risolvono producono risposte
                plausibili e sbagliate.
              </p>
              <p className="mt-4">
                Non tutto viene affidato al linguaggio. I turni di guardia sono estratti come dati
                strutturati con la propria finestra di validità e interrogati per data e luogo, non
                per somiglianza semantica. I farmaci sono riconosciuti e normalizzati contro il
                registro AIFA. Dove la domanda ha una risposta esatta, il sistema la tratta come
                tale.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Cosa vede il farmacista</h2>
              <p>
                Alla domanda — turni, modalità di erogazione, carenze, campagne vaccinali, eventi —
                il sistema restituisce tre cose insieme.
              </p>
              <p className="mt-4">
                La <strong className="text-[#E6EDF3]">risposta specifica</strong>, formulata sulla
                domanda posta.
              </p>
              <p className="mt-4">
                I{" "}
                <strong className="text-[#E6EDF3]">
                  documenti citati, in ordine cronologico inverso
                </strong>
                , con i superati esclusi per impostazione predefinita.
              </p>
              <p className="mt-4">
                Il <strong className="text-[#E6EDF3]">grafo della catena di versioni</strong>: nodi
                e archi che mostrano quale documento sostituisce quale.
              </p>
              <p className="mt-4">
                Quest’ultimo punto è il centro del progetto. Un sistema che dà la risposta giusta
                senza mostrare perché è un sistema di cui bisogna fidarsi. Un sistema che espone la
                catena di successione è un sistema che si può verificare. In un contesto regolato,
                la seconda proprietà vale più della prima.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Dove passa il confine dei dati
              </h2>
              <p>
                La sovranità del dato, in questo progetto, non è una dichiarazione di collocazione
                dei server. È una proprietà dell’architettura, e va descritta per quello che è.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">I dati personali non entrano nell’indice.</strong>{" "}
                Non vengono filtrati a valle: un controllo in fase di ingestione riconosce i
                documenti che contengono dati sanitari o anagrafici individuali e li esclude
                dall’indicizzazione. Le cartelle di lavoro personali sono bloccate per
                configurazione.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">E non escono nemmeno dalla domanda.</strong> Un
                farmacista che digita il nome di un paziente sta scrivendo un dato sanitario
                personale in un campo di ricerca. È il caso previsto: un filtro di redazione
                dedicato opera sul testo in ingresso, sulla macchina dell’organizzazione, prima che
                qualsiasi cosa raggiunga il passo successivo. È la funzione primaria per cui quel
                componente esiste, non un effetto collaterale.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">
                  Indicizzazione, ricerca, riconciliazione e audit sono interamente locali.
                </strong>{" "}
                Estrazione testo, vettorizzazione, database vettoriale, catene di versione, identità
                e registrazione: tutto sul server dell’organizzazione, dietro un unico gateway.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">
                  La sola generazione della risposta finale avviene su un endpoint di inferenza in
                  datacenter europeo
                </strong>
                , raggiunto attraverso il gateway e tracciato. Ciò che transita sono la domanda e i
                frammenti di documenti già recuperati — cioè le stesse circolari che l’Associazione
                distribuisce quotidianamente via newsletter alle farmacie associate. Nessun dato
                riservato, nessun dato personale.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">
                  Quell’endpoint è un componente sostituibile, e la scelta del fornitore segue il
                  dato.
                </strong>{" "}
                Poiché ciò che transita è documentazione già pubblica verso i destinatari, non c’era
                ragione di pagare un provider o un modello più costosi: il criterio è la
                proporzionalità fra costo e riservatezza, non la fiducia in un nome. Qualunque
                provider di inferenza è utilizzabile al suo posto. Il fallback su modello locale è
                implementato e funzionante, e su hardware di classe superiore l’intera catena —
                generazione finale compresa — gira in casa senza modifiche architetturali.
              </p>
              <p className="mt-4">
                Il confine è una decisione di dimensionamento, non un vincolo di progetto.
              </p>
              <p className="mt-4">
                Questa è la differenza fra sovranità come slogan e sovranità come proprietà
                verificabile: non “il fornitore promette che i dati restano dove dice”, ma
                “l’organizzazione può spostare il confine quando decide di spostarlo”.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">La ricostruibilità</h2>
              <p>
                Se un farmacista agisce su una risposta del sistema e da quell’azione nasce una
                contestazione, l’organizzazione deve poter ricostruire cosa il sistema ha risposto,
                quando, sulla base di quali documenti.
              </p>
              <p className="mt-4">
                Ogni invocazione — locale ed esterna — è registrata in una{" "}
                <strong className="text-[#E6EDF3]">catena di hash cifrata e verificabile</strong>,
                progettata per essere a prova di manomissione: alterare un record a posteriori rompe
                la catena in modo rilevabile. È il servizio di audit costruito specificamente per
                gli obblighi di registrazione, trasparenza e sorveglianza umana previsti dal
                Regolamento UE 2024/1689.
              </p>
              <p className="mt-4">
                La ricostruibilità non è garantita dalla collocazione fisica dell’inferenza. È
                garantita dal registro. Questa distinzione è il motivo per cui il sistema resta
                conforme in entrambe le configurazioni.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">L’hardware</h2>
              <p>
                Il sistema in produzione gira su una singola GPU consumer da 8 GB, del 2015, che
                ospita contemporaneamente modello locale, filtro privacy ed embeddings. Modelli
                quantizzati, gestione della frammentazione della memoria video, coda di lavoro con
                tetto di concorrenza.
              </p>
              <p className="mt-4">
                Non è un vanto di frugalità. È l’estremo inferiore di un intervallo: la stessa
                architettura, senza modifiche, gira su schede da 48 GB dove serva portare in casa
                anche la generazione finale.
              </p>
              <p className="mt-4">
                Il punto per chi decide è questo: il dimensionamento è una scelta di esercizio, non
                un vincolo imposto dal fornitore. Dove altri richiedono infrastruttura cloud da
                decine di migliaia di euro l’anno, qui la stessa conformità si ottiene su una
                macchina da ufficio — e si scala quando serve.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Risultati</h2>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-base border-collapse min-w-[560px]">
                  <thead>
                    <tr className="border-b border-[#30363D]">
                      <th className="text-left py-3 pr-4 font-semibold text-[#E6EDF3] w-1/4"></th>
                      <th className="text-left py-3 pr-4 font-semibold text-[#E6EDF3]">Prima</th>
                      <th className="text-left py-3 font-semibold text-[#E6EDF3]">Adesso</th>
                    </tr>
                  </thead>
                  <tbody>
                    {risultati.map((r) => (
                      <tr key={r.k} className="border-b border-[#21262D] align-top">
                        <td className="py-3 pr-4 text-[#E6EDF3] font-medium">{r.k}</td>
                        <td className="py-3 pr-4">{r.prima}</td>
                        <td className="py-3 text-[#9BA8B9]">{r.adesso}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6">
                La newsletter resta attiva. Non è stata sostituita: è stata affiancata da uno
                strumento che risponde nel momento in cui la domanda si pone, invece di anticiparla
                e sperare che venga ricordata.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Tecnologie utilizzate</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>

            <div className="border-t border-[#30363D] pt-10">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Cosa firmo</h2>
              <p>
                L’architettura, la collocazione del confine dei dati e il modello di tracciabilità
                sono decisioni tecniche documentate e assunte. In un settore in cui l’errore di
                conformità ha conseguenze personali per chi lo commette, chi progetta il sistema
                deve poter rispondere delle proprie scelte.
              </p>
              <p className="mt-4 text-[#E6EDF3]">
                <strong>Corrado Patierno</strong> — Principal AI Architect, Dynamics Consulting
              </p>
              <p className="mt-1 text-base">
                <a
                  href="mailto:corrado.patierno@mensa.it"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  corrado.patierno@mensa.it
                </a>{" "}
                · dynamicsconsulting.it
              </p>
            </div>
          </div>
        </section>

        {/* Chiusura */}
        <section className="py-20 px-6 border-t border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
              Dove si ferma la responsabilità del tuo fornitore, e dove comincia la tua?
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              Dal 9 dicembre 2026 la direttiva europea sulla responsabilità da prodotto include il
              software fra i prodotti. L’assessment di esposizione stabilisce, per la tua
              organizzazione, dove passa il confine.
            </p>
            <CTAButton label="Assessment di esposizione →" href="/it/assessment" variant="primary" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
