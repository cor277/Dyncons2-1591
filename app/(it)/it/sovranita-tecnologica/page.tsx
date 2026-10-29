import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { SOURCES } from "@/app/primary-sources";
import { BASE_URL } from "@/app/schema-org";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

const PATH = "/it/sovranita-tecnologica";
const URL = `${BASE_URL}${PATH}`;

const TITLE = "Cloud and AI Development Act (CADA): i quattro livelli di garanzia dell’Unione";

const DESCRIPTION =
  "Cosa fa davvero la proposta di Cloud and AI Development Act del 3 giugno 2026: quattro livelli di garanzia dell’Unione per i servizi cloud, chi deve acquistare quale livello, cosa chiede a una supply chain e come si incrocia con la PLD 2024, il Cyber Resilience Act e l’AI Act.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Cloud and AI Development Act",
    "CADA 2026",
    "livelli di garanzia dell’Unione",
    "Union assurance levels",
    "pacchetto UE sovranità tecnologica",
    "cloud sovrano UE",
    "acquisto cloud NIS2",
    "valutazione di sovranità",
  ],
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
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

const crumbs = breadcrumbSchema(URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Pacchetto UE sulla sovranità tecnologica e CADA" },
]);

const schema = [
  articleSchema({
    url: URL,
    type: "TechArticle",
    headline:
      "Cloud and AI Development Act (CADA): i quattro livelli di garanzia dell’Unione, e cosa chiedono a una supply chain",
    description: DESCRIPTION,
    datePublished: "2026-09",
    inLanguage: "it",
    articleSection: "Analisi normativa",
    keywords: [
      "CADA",
      "Cloud and AI Development Act",
      "livelli di garanzia dell’Unione",
      "cloud sovrano",
      "NIS2",
      "PLD 2024",
      "Cyber Resilience Act",
    ],
    about: ["Cloud and AI Development Act", "Sovranità digitale", "Appalti pubblici UE"],
  }),
  crumbs,
];

/** Annex II, summarised: what each level adds to the one below it. */
const levels = [
  {
    level: "Livello 1",
    check: "Autovalutazione",
    adds: [
      "Fornitore stabilito nell’Unione; infrastrutture e asset del fornitore e dei subfornitori coinvolti nel servizio situati nell’Unione, salvo che l’ente pubblico chieda esplicitamente altrimenti.",
      "I dati del cliente — metadati e telemetria compresi — restano esclusivamente nell’Unione, prima, durante e dopo l’uso del servizio, con la stessa eccezione.",
      "Supporto esternalizzato fuori dall’Unione solo con misure legali, tecniche e organizzative di tracciabilità, sicurezza e governance, e senza compromettere l’autonomia operativa del fornitore.",
      "Piena trasparenza sui subfornitori, con due diligence e supervisione continua; cybersicurezza allo stato dell’arte.",
      "Nessuna legge di un paese terzo che obblighi il fornitore a segnalare vulnerabilità software alle autorità di quel paese prima che se ne conosca lo sfruttamento.",
    ],
  },
  {
    level: "Livello 2",
    check: "Audit di terza parte",
    adds: [
      "Personale — del fornitore e dei subfornitori coinvolti — situato nell’Unione; requisiti di screening e di cittadinanza attivabili su richiesta dell’ente pubblico.",
      "Un certificato europeo di cybersicurezza di livello almeno ‘sostanziale’ nell’ambito di un sistema istituito ai sensi del Regolamento (UE) 2019/881, quando tale sistema esisterà; nel frattempo si applicano i sistemi nazionali.",
      "I dati generati dall’uso del servizio non sono usati per addestrare o fare fine-tuning di alcun sistema di AI gestito da un paese terzo o da un’entità di un paese terzo, e non vengono mai trasferiti fuori dall’Unione.",
      "Se il fornitore è sotto il controllo di un paese terzo: misure dimostrate che impediscano a quel controllo di limitare l’erogazione del servizio, di raggiungere i dati del cliente, di interrompere la continuità e di imporre il rispetto di sanzioni o misure equivalenti di paesi terzi.",
      "Supporto avviato ed erogato esclusivamente nell’Unione.",
      "Supply chain del software: uno SBOM completo e aggiornato e l’elenco delle dipendenze; blocco delle funzionalità remote che potrebbero manomettere o interrompere un sistema, anche durante gli aggiornamenti; audit del codice sorgente dei componenti di paesi terzi rilevanti per la sicurezza e un piano di migrazione documentato nel caso in cui il vendor venga meno o un paese terzo imponga restrizioni; controlli equivalenti per i componenti open source.",
      "Separazione effettiva, legale, tecnica e organizzativa, tra la capogruppo nell’Unione e qualsiasi controllata in un paese terzo.",
    ],
  },
  {
    level: "Livello 3",
    check: "Audit di terza parte",
    adds: [
      "Il personale, compreso quello dei subfornitori coinvolti nel servizio, è composto da cittadini dell’Unione, con nulla osta di sicurezza nazionale dove si trattano informazioni classificate.",
      "Supporto erogato nell’Unione da residenti nell’Unione e da terzi non sotto il controllo di un paese terzo.",
      "Rientrano nel perimetro i subfornitori che possono avere bisogno di accedere a informazioni classificate o sensibili.",
      "Un paese terzo può essere riconosciuto come in grado di offrire garanzie sufficienti: è questo che rende ammissibili a questo livello, e non oltre, i servizi controllati da quel paese.",
    ],
  },
  {
    level: "Livello 4",
    check: "Audit di terza parte",
    adds: [
      "Il fornitore e i subfornitori coinvolti non sono in alcun modo soggetti al controllo di un paese terzo o di un’entità di un paese terzo — la condizione che nessun contratto può soddisfare.",
      "Un certificato europeo di cybersicurezza di livello almeno ‘elevato’ nell’ambito dello stesso regime di certificazione.",
      "Controllo effettivo mantenuto sui componenti software: nessun paese terzo o entità di paese terzo detiene o esercita un controllo effettivo sulla loro progettazione, sviluppo, manutenzione ed evoluzione.",
    ],
  },
];

/* SOURCES carries English labels and notes; the Italian page renders its own. */
const sources = [
  {
    url: SOURCES.cada.url,
    label: "COM(2026) 502 final — proposta di Cloud and AI Development Act",
    note: "proposta della Commissione del 3 giugno 2026, con allegati e valutazione d’impatto",
  },
  {
    url: SOURCES.nis2.url,
    label: "Direttiva (UE) 2022/2555 — NIS2",
    note: "misure di gestione del rischio di cybersicurezza e notifica degli incidenti",
  },
  {
    url: SOURCES.cra.url,
    label: "Regolamento (UE) 2024/2847 — Cyber Resilience Act",
    note: "requisiti di sicurezza per i prodotti con elementi digitali; applicazione scaglionata",
  },
  {
    url: SOURCES.pld.url,
    label: "Direttiva (UE) 2024/2853 — direttiva sulla responsabilità per danno da prodotti difettosi",
    note: "il software come prodotto; recepimento da parte degli Stati membri entro il 9 dicembre 2026",
  },
  {
    url: SOURCES.aiAct.url,
    label: "Regolamento (UE) 2024/1689 — AI Act",
    note: "definizioni, classificazione del rischio, obblighi di provider e deployer",
  },
  {
    url: SOURCES.eucs.url,
    label: "Regolamento (UE) 2019/881 — Cybersecurity Act",
    note: "la base dei sistemi europei di certificazione della cybersicurezza su cui poggiano i livelli di garanzia del CADA",
  },
];

export default function SovranitaTecnologicaPage() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <article>
          <section className="hero-constellation pt-32 pb-20 px-6">
            <div className="hero-content max-w-3xl mx-auto">
              <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
                Analisi · Normativa
              </p>
              <h1 className="font-syne text-4xl md:text-5xl font-extrabold text-[#E6EDF3] leading-[1.05] tracking-tight mb-6">
                CADA: i quattro livelli di garanzia dell’Unione
              </h1>
              <div className="border-l-2 border-[#00B4D8] pl-5 text-[#9BA8B9] text-lg leading-relaxed">
                <p>
                  Il 3 giugno 2026 la Commissione europea ha presentato il pacchetto europeo sulla
                  sovranità tecnologica (European Technological Sovereignty Package), che comprende
                  una proposta di Cloud and AI Development Act &mdash; COM(2026) 502 final. Per la
                  maggior parte è politica industriale: finanziamenti alla ricerca, zone di
                  accelerazione per i data center, autorizzazioni più rapide, una federazione cloud
                  del settore pubblico, obblighi di open source per gli organismi dell’Unione. Una
                  parte, però, cambia il modo in cui il cloud si compra e si descrive in Europa: un
                  quadro dell’Unione per la sovranità del cloud su quattro livelli di garanzia
                  (assurance level), con i criteri nell’Allegato II, il riconoscimento da parte
                  delle autorità nazionali e un registro centrale dei servizi riconosciuti. Il
                  livello 1 è un’autovalutazione; i livelli da 2 a 4 richiedono un audit di terza
                  parte. Gli acquirenti pubblici devono usare almeno il livello 1, e i livelli da 2
                  a 4 dove le loro attività sono state individuate come funzionali alla tutela
                  dell’ordine pubblico.
                </p>
              </div>
              <p className="mt-6 text-sm text-[#7D8FA3]">
                Di{" "}
                <Link href="/it/chi-siamo" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Corrado Patierno
                </Link>{" "}
                · <time dateTime="2026-09">settembre 2026</time>
              </p>
              <div className="mt-8 rounded-lg border border-[#30363D] bg-[#161B22] px-5 py-4 text-[#7D8FA3] text-base leading-relaxed">
                <strong className="text-[#E6EDF3]">È una proposta, non una legge.</strong> Deve
                passare dal Parlamento europeo e dal Consiglio, e il testo &mdash; compresi i
                numeri degli articoli e i criteri riassunti qui sotto &mdash; può cambiare prima
                dell’adozione. Nella proposta così come pubblicata, il Regolamento entrerebbe in
                vigore venti giorni dopo la pubblicazione e si applicherebbe un anno dopo. Niente di
                quanto scritto qui è oggi un obbligo di compliance; è una descrizione della
                direzione di marcia, che è ciò di cui ha davvero bisogno chi pianifica gli acquisti.
              </div>
            </div>
          </section>

          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto space-y-12 text-[#7D8FA3] text-lg leading-relaxed">
              <div>
                <h2 id="what-it-is" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Cosa contiene la proposta
                </h2>
                <p className="mb-4">
                  Il problema dichiarato è la dipendenza: la capacità di calcolo nell’Unione è
                  limitata e concentrata geograficamente, e l’UE si affida a fornitori non europei
                  per i servizi cloud e di AI, con conseguenze sul controllo dei dati e
                  sull’autonomia operativa. La risposta si articola in quattro blocchi.
                </p>
                <p className="mb-4">
                  <strong className="text-[#E6EDF3]">Cloud and AI Leadership Initiatives</strong> —
                  finanziamenti a ricerca e innovazione, una rete di Experience and Acceleration
                  Centres per l’AI costruita sugli European Digital Innovation Hubs, il
                  riconoscimento di progetti prioritari sull’AI di frontiera, e strategie nazionali
                  per cloud e AI che gli Stati membri dovrebbero adottare entro un anno
                  dall’entrata in vigore.
                </p>
                <p className="mb-4">
                  <strong className="text-[#E6EDF3]">Capacità dei data center</strong> &mdash; gli
                  Stati membri designano zone di accelerazione con autorizzazioni agevolate e
                  sportelli informativi unici, la Commissione designa progetti strategici, e i
                  progressi rispetto al divario di capacità sono monitorati a livello centrale.
                </p>
                <p className="mb-4">
                  <strong className="text-[#E6EDF3]">Autonomia e adozione</strong> &mdash; la parte
                  di cui parliamo qui sotto: livelli di garanzia, obblighi negli acquisti, una
                  federazione cloud del settore pubblico, un quadro comune per gli acquisti gestito
                  dalla Commissione, e obblighi per gli organismi dell’Unione e per gli enti pubblici
                  di preferire l’open source e di condividere e riusare il software che
                  commissionano.
                </p>
                <p>
                  Nella valutazione d’impatto sono gli stessi cloud provider a descrivere il
                  meccanismo di audit dei servizi sovrani come la misura che metterebbe fine al
                  &ldquo;sovereign-washing&rdquo;, e il beneficio viene presentato come un unico
                  audit valido in tutta l’Unione invece di uno per Stato membro. È la sintesi onesta
                  dell’ambizione: non rendere obbligatoria la sovranità, ma dare alla parola un
                  significato abbastanza preciso da poter essere verificato con un audit.
                </p>
              </div>

              <div>
                <h2 id="levels" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  I quattro livelli, come sono scritti
                </h2>
                <p className="mb-6">
                  L’Allegato II fissa criteri cumulativi: ogni livello comprende tutto quello dei
                  livelli inferiori e aggiunge i propri. Quella che segue è una sintesi in parole
                  semplici, non il testo giuridico &mdash; e l’Allegato II è esplicitamente soggetto
                  a revisione da parte della Commissione almeno ogni diciotto mesi. Attenzione alla
                  riga sul perimetro in testa all’allegato: il &lsquo;software&rsquo; come definito
                  nel Cyber Resilience Act è incluso, l’hardware no.
                </p>
                <div className="space-y-8">
                  {levels.map((l) => (
                    <div key={l.level} className="border-l-2 border-[#00B4D8] pl-5">
                      <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                        <h3 className="text-xl font-bold text-[#E6EDF3]">{l.level}</h3>
                        <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#00B4D8]">
                          {l.check}
                        </span>
                      </div>
                      <ul className="space-y-2.5 text-base">
                        {l.adds.map((a) => (
                          <li key={a} className="flex gap-3">
                            <span className="text-[#00B4D8] mt-1.5 flex-shrink-0">&mdash;</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  La struttura merita attenzione. I livelli da 1 a 3, in fondo, riguardano dove
                  stanno le cose e chi le tocca: stabilimento, localizzazione, residenza dei dati,
                  personale, supporto. Il livello 4 riguarda chi <em>controlla</em> il fornitore e il
                  software, e il controllo è l’unico criterio che un contratto non può fabbricare. È
                  anche la distinzione che questo studio fa da tempo tra un sistema privato e un
                  sistema{" "}
                  <Link
                    href="/it/risposte/ai-privata-vs-ai-sovrana"
                    className="text-[#00B4D8] hover:text-[#E6EDF3]"
                  >
                    sovrano
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 id="who-has-to" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Chi dovrebbe fare cosa
                </h2>
                <p className="mb-4">
                  <strong className="text-[#E6EDF3]">Settore pubblico.</strong> Gli Stati membri e
                  gli organismi dell’Unione svolgerebbero valutazioni del rischio per stabilire quali
                  delle loro attività contribuiscono alla tutela dell’ordine pubblico. Le
                  amministrazioni aggiudicatrici che acquistano servizi cloud per uso proprio devono
                  usare, come minimo, servizi riconosciuti al livello 1. Dove l’attività è stata
                  individuata come rilevante per l’ordine pubblico &mdash; nei settori degli Allegati
                  I o II della direttiva NIS2, e in sicurezza nazionale, sicurezza interna, gestione
                  delle frontiere, difesa, giustizia e attività di contrasto &mdash; si possono
                  acquistare solo i livelli 2, 3 o 4. Le deroghe sono limitate, soprattutto ai casi
                  in cui nessun servizio riconosciuto può fornire ciò che è messo a gara.
                </p>
                <p className="mb-4">
                  <strong className="text-[#E6EDF3]">Settore privato.</strong> Questo è il paragrafo
                  da leggere due volte se gestisci infrastrutture in sanità, energia, trasporti,
                  banche, acqua o infrastrutture digitali. I soggetti dell’Allegato I della NIS2 che
                  non sono enti pubblici <em>possono</em> svolgere valutazioni simili a quelle del
                  settore pubblico. La Commissione può emanare linee guida sulla metodologia e può,
                  con atto delegato e in consultazione con gli Stati membri, stabilire che i soggetti
                  dei settori ad alta criticità siano tenuti a svolgerle, insieme alle misure di
                  mitigazione del rischio da adottare.
                </p>
                <p>
                  In altre parole: volontario così com’è scritto, con un meccanismo esplicito per
                  diventare obbligatorio nei settori in cui la posta in gioco è più alta. Le
                  organizzazioni di quei settori che sanno già dove stanno i loro dati, chi può
                  raggiungerli e cosa succederebbe se la capogruppo di un fornitore ricevesse un
                  ordine da un paese straniero troveranno quella valutazione un esercizio di
                  documentazione. Per le altre sarà un progetto.
                </p>
              </div>

              <div>
                <h2 id="supply-chain" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  I criteri sulla supply chain non sono nuovi &mdash; ed è proprio questo il punto
                </h2>
                <p className="mb-4">
                  Leggi i requisiti del livello 2 sulla supply chain del software accanto agli
                  obblighi che stanno già arrivando da altre parti. Uno SBOM completo e aggiornato,
                  definito per rinvio al Cyber Resilience Act. Controlli documentati che bloccano le
                  funzionalità remote capaci di manomettere un sistema durante un aggiornamento.
                  Audit del codice sorgente dei componenti di paesi terzi rilevanti per la
                  sicurezza. Un piano di migrazione per il caso in cui il vendor venga meno o un
                  paese terzo imponga restrizioni.
                </p>
                <p className="mb-4">
                  Lo SBOM è il caso più chiaro. È un elemento di prova ai sensi della direttiva sulla
                  responsabilità da prodotto, uno strumento di vulnerability management ai sensi del
                  CRA, e ora un artefatto di audit ai sensi del CADA &mdash; un solo artefatto, tre
                  finalità normative. Lo stesso vale per i registri dei fornitori, la gestione delle
                  vulnerabilità e la sorveglianza post-commercializzazione. Mappare queste
                  convergenze — quale controllo risponde a quali regimi, e quanto si risparmia — è
                  ciò a cui serve la{" "}
                  <Link href="/it/cepf" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                    metodologia Compliance-Epistemic Project Framework (CEPF)
                  </Link>
                  .
                </p>
                <p>
                  La conseguenza pratica per chi compra è che un fornitore che oggi non sa produrre
                  uno SBOM non è soltanto impreparato al CADA. È impreparato agli obblighi di
                  segnalazione del CRA, che si applicano dall’11 settembre 2026, e diventerà un
                  interlocutore scomodo quando gli Stati membri avranno recepito la direttiva sulla
                  responsabilità da prodotto entro il 9 dicembre 2026 &mdash; il tema
                  dell’
                  <Link href="/it/assessment" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                    assessment di esposizione
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 id="ai-act" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Come si colloca accanto all’AI Act
                </h2>
                <p className="mb-4">
                  I due strumenti fanno lavori diversi, e conviene non confonderli. L’AI Act regola i
                  sistemi di AI in base alla finalità prevista e al ruolo: a cosa serve il sistema,
                  chi lo fornisce, chi lo usa, quali evidenze deve essere in grado di produrre. Il
                  CADA non classifica affatto i sistemi di AI. Regola il substrato &mdash; dove sta
                  la capacità di calcolo, chi possiede l’operatore, chi può raggiungere i dati
                  &mdash; e lo fa soprattutto attraverso gli acquisti, non attraverso obblighi di
                  prodotto.
                </p>
                <p className="mb-4">
                  Si incontrano in un criterio preciso. Dal livello 2 in su, i dati generati
                  dall’uso del servizio non possono essere usati per addestrare o fare fine-tuning di
                  alcun sistema di AI gestito da un paese terzo o da un’entità di un paese terzo, e
                  non possono essere trasferiti fuori dall’Unione. È un vincolo sul fornitore che
                  finisce nella documentazione di chi compra: è il tipo di affermazione che sta in
                  un registro dei trattamenti GDPR e nella documentazione tecnica di un sistema di
                  AI, ed è molto più facile da fare quando i livelli di retrieval e di audit stanno
                  dentro il perimetro fin dall’inizio.
                </p>
                <p>
                  Per un sistema già costruito per rispondere{" "}
                  <Link href="/it/risposte/rag-ai-act" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                    alle domande dell’AI Act
                  </Link>{" "}
                  &mdash; su cosa si è basato, cosa ha risposto, chi l’ha approvato &mdash; il
                  vocabolario del CADA aggiunge un secondo asse, non un secondo programma: non cosa fa
                  il sistema, ma chi potrebbe interferire con esso.
                </p>
              </div>

              <div>
                <h2 id="nexus" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Cosa significa per un’installazione self-hosted
                </h2>
                <p className="mb-4">
                  Prima una precisazione, perché è il genere di cosa che si tende a gonfiare. Il
                  meccanismo di riconoscimento del CADA si applica ai fornitori di servizi di cloud
                  computing che offrono servizi agli organismi dell’Unione e agli enti del settore
                  pubblico. Una piattaforma installata sull’infrastruttura del cliente non è un
                  servizio cloud acquistato, quindi non c’è alcun livello di garanzia da detenere e
                  qui non se ne rivendica nessuno.{" "}
                  <Link href="/it/piattaforma-nexus" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                    Nexus MDS Core
                  </Link>{" "}
                  non è riconosciuto ad alcun livello di garanzia dell’Unione e, con la proposta così
                  com’è scritta, non potrebbe esserlo.
                </p>
                <p className="mb-4">
                  Quello che l’allegato offre è il vocabolario pubblico più chiaro finora per
                  descrivere dove si colloca un’installazione. Diversi suoi criteri trovano risposta
                  nella struttura stessa di un’architettura self-hosted, non nei contratti: i dati,
                  metadati e telemetria compresi, restano su un’infrastruttura di proprietà
                  dell’organizzazione; nessun operatore esterno ha accesso amministrativo; il
                  supporto lo eroga chi il cliente sceglie di incaricare; lo stack software è open
                  source e ispezionabile, quindi SBOM, elenco delle dipendenze e piano di migrazione
                  sono esercizi di documentazione, non negoziati.
                </p>
                <p className="mb-4">
                  Dove un’installazione usa un endpoint di inferenza esterno per la generazione
                  finale &mdash; il modello ibrido sovrano documentato nel{" "}
                  <Link
                    href="/it/case-studies/federfarma"
                    className="text-[#00B4D8] hover:text-[#E6EDF3]"
                  >
                    case study Federfarma
                  </Link>{" "}
                  &mdash; quel componente sta fuori dal perimetro e i criteri del CADA sul fornitore
                  si applicano a chi lo gestisce. Dirlo chiaramente è il punto. La proprietà
                  architetturale che conta è che il componente sia sostituibile, ed è esattamente la
                  proprietà su cui l’Allegato II torna di continuo, in un altro registro: piani di
                  migrazione, controllo effettivo sui componenti, separazione dalle entità di paesi
                  terzi.
                </p>
                <p>
                  Se diventerà utile descrivere le installazioni nei termini del CADA &mdash; e per
                  gli acquirenti pubblici lo diventerà &mdash; la corrispondenza con i tre modelli
                  usati in questo sito è lineare. Un’installazione interamente locale elimina le
                  domande che i livelli pongono, invece di rispondervi. Un’installazione ibrida
                  sovrana risponde a tutto tranne che per l’endpoint di generazione, ed è lì che chi
                  compra deve pretendere un servizio riconosciuto. L’inferenza privata in UE è il caso
                  in cui il livello di garanzia del fornitore diventa l’intera risposta.
                </p>
              </div>

              <div>
                <h2 id="what-to-do" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Cosa conviene fare adesso
                </h2>
                <ul className="space-y-3 text-base list-none">
                  {[
                    "Se sei un ente pubblico, o un fornitore di un ente pubblico: scopri quali delle tue attività toccherebbe una valutazione del rischio per l’ordine pubblico, perché è questo a stabilire se a tutto ciò che comprerai dopo si applica il livello 1 o i livelli 2–4.",
                    "Se sei un soggetto dell’Allegato I della NIS2: fai la valutazione d’impatto prima che diventi obbligatoria. L’esercizio è lo stesso in ogni caso, e farlo per tempo significa scegliere tu il perimetro.",
                    "Chiedi per iscritto a ogni fornitore di cloud e di AI quale livello intende ottenere e quando. La risposta, e la velocità con cui arriva, ti dicono più della slide di roadmap.",
                    "Fatti dare lo SBOM. È l’unico artefatto che serve insieme al CADA, al CRA e alla PLD 2024, e già la richiesta è diagnostica.",
                    "Individua quali componenti sarebbero insostituibili se un fornitore venisse ritirato o soggetto a restrizioni. È l’esposizione attorno a cui è costruita la proposta, ed è conoscibile già oggi.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="text-[#00B4D8] mt-1.5 flex-shrink-0">&mdash;</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 id="sources" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Fonti
                </h2>
                <p className="mb-4 text-base">
                  Questa analisi è scritta a partire dalla proposta, dai suoi allegati e dalla
                  sintesi della valutazione d’impatto, tutti pubblicati dalla Commissione il 3
                  giugno 2026. Dove la pagina descrive cosa richiede una disposizione, fa fede il
                  testo della proposta.
                </p>
                <ul className="space-y-3 text-base">
                  {sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-[#00B4D8] hover:text-[#E6EDF3]"
                      >
                        {s.label}
                      </a>
                      <span className="text-[#7D8FA3]"> — {s.note}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-[#7D8FA3] border-t border-[#30363D] pt-6">
                  Analisi normativa scritta a partire dall’esperienza di delivery in ambienti
                  regolati. Non è una consulenza legale, descrive una proposta non ancora adottata,
                  e i numeri degli articoli possono cambiare durante l’iter legislativo.
                </p>
              </div>
            </div>
          </section>
        </article>

        <CTASection
          title="Dove si collocherebbe la tua architettura?"
          subtitle="La versione utile di questa domanda non è per quale livello ti qualificheresti, ma quali componenti non supererebbero il test — e quanto costerebbe sostituirli."
          ctaLabel="Parliamone →"
          ctaHref="/it/contatti"
        />
      </main>
      <Footer />
    </>
  );
}
