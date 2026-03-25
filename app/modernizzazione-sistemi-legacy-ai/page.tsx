import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title:
    "Modernizzazione Sistemi Legacy con AI | Reverse Engineering AI-Driven",
  description:
    "Modernizzazione sistemi legacy con intelligenza artificiale: reverse engineering AI-driven, analisi automatizzata del codice, pipeline RAG e multi-agent per riscrittura guidata. Dynamics Consulting, specialisti in legacy modernisation per il mid-market italiano.",
  alternates: {
    canonical:
      "https://www.dynamicsconsulting.it/modernizzazione-sistemi-legacy-ai",
  },
  openGraph: {
    title:
      "Modernizzazione Sistemi Legacy con AI | Dynamics Consulting",
    description:
      "Reverse engineering AI-driven, obsolescence engine e pipeline multi-agent per modernizzare sistemi legacy. Metodologia collaudata per il mid-market italiano.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Modernizzazione Sistemi Legacy con AI",
      url: "https://www.dynamicsconsulting.it/modernizzazione-sistemi-legacy-ai",
      description:
        "Guida completa alla modernizzazione dei sistemi legacy con intelligenza artificiale: reverse engineering AI-driven, pipeline RAG, obsolescence engine e casi di studio reali.",
      publisher: {
        "@type": "Organization",
        name: "Dynamics Consulting",
        url: "https://www.dynamicsconsulting.it",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quanto tempo richiede la modernizzazione di un sistema legacy con AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La fase di analisi automatizzata con la nostra pipeline AI richiede tipicamente 2-4 settimane, contro i 3-6 mesi di un audit manuale tradizionale. La riscrittura completa dipende dalla complessit\u00e0 del sistema, ma la roadmap generata dall\u2019AI riduce i tempi del 40-60% rispetto a un approccio puramente manuale.",
          },
        },
        {
          "@type": "Question",
          name: "Quali linguaggi e tecnologie legacy supportate nel reverse engineering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La nostra pipeline RAG \u00e8 agnostica rispetto al linguaggio. Abbiamo lavorato su codebase COBOL, Visual Basic 6, .NET Framework, Java EE legacy, PL/SQL e sistemi proprietari. Il vector database Weaviate indicizza qualsiasi tipo di codice sorgente, documentazione e configurazione.",
          },
        },
        {
          "@type": "Question",
          name: "Come funziona l\u2019obsolescence engine di Dynamics Consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L\u2019obsolescence engine analizza automaticamente le dipendenze del sistema, le versioni dei framework, le vulnerabilit\u00e0 note (CVE) e le date di end-of-life dei componenti. Genera un punteggio di rischio per ogni componente e produce una roadmap di prioritizzazione degli interventi basata sull\u2019impatto di business.",
          },
        },
        {
          "@type": "Question",
          name: "\u00c8 possibile modernizzare solo una parte del sistema legacy senza riscrivere tutto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Assolutamente s\u00ec. Il nostro approccio prevede la decomposizione modulare: l\u2019analisi AI identifica i confini dei domini funzionali e le dipendenze tra moduli, permettendo una modernizzazione incrementale. Si possono estrarre i moduli critici e modernizzarli individualmente con pattern come lo strangler fig.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto costa la modernizzazione AI-assisted rispetto alla riscrittura tradizionale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I nostri progetti mostrano un risparmio medio del 40-60% rispetto alla riscrittura manuale completa. Il risparmio deriva dalla riduzione drastica dei tempi di analisi e comprensione del codice, che tipicamente rappresentano il 30-50% del costo totale di un progetto di modernizzazione.",
          },
        },
        {
          "@type": "Question",
          name: "Dynamics Consulting lavora solo con grandi enterprise o anche con il mid-market?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Il nostro focus \u00e8 specificamente il mid-market italiano: aziende con 50-500 dipendenti, spesso in settori regolamentati come sanit\u00e0, farmaceutica, logistica e manifatturiero. Offriamo la competenza di una societ\u00e0 di consulenza enterprise con la flessibilit\u00e0 e i costi di un partner specializzato.",
          },
        },
      ],
    },
  ],
};

export default function ModernizzazioneSistemiLegacyAiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Legacy Modernisation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Modernizzazione dei sistemi legacy con l&apos;intelligenza artificiale
            </h1>
            <p className="text-[#7D8FA3] text-lg leading-relaxed">
              I sistemi legacy sono il cuore operativo di migliaia di aziende italiane. Ma quando il codice
              ha 15, 20 o 30 anni, ogni modifica diventa un rischio. La modernizzazione AI-driven cambia
              le regole: analisi automatizzata del codice sorgente, estrazione della business logic nascosta,
              mappatura delle dipendenze e generazione di roadmap di migrazione. Non si tratta di
              sostituire gli sviluppatori, ma di dare loro strumenti che trasformano mesi di analisi
              manuale in settimane di lavoro guidato.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-12 text-[#7D8FA3] text-lg leading-relaxed">
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Il problema dei sistemi legacy nelle aziende italiane
              </h2>
              <p>
                Il tessuto produttivo italiano presenta una peculiarit&agrave; che lo distingue dal resto
                d&apos;Europa: una forte dipendenza da sistemi software sviluppati tra gli anni &apos;90
                e i primi anni 2000, spesso costruiti su tecnologie oggi non pi&ugrave; supportate.
                Si parla di applicazioni in Visual Basic 6, piattaforme .NET Framework 2.0-3.5,
                sistemi ERP personalizzati in COBOL o PL/SQL, portali web in ASP classico, e
                integrazioni point-to-point che nessuno ha pi&ugrave; il coraggio di toccare.
              </p>
              <p>
                Il problema non &egrave; soltanto tecnologico. Questi sistemi funzionano &mdash;
                spesso sorprendentemente bene &mdash; e le aziende ci hanno costruito sopra i propri
                processi operativi per decenni. La <strong className="text-[#E6EDF3]">business logic
                </strong> &egrave; intrappolata nel codice: regole di calcolo, eccezioni, workflow
                approvati, integrazioni con sistemi esterni. Nessun documento descrive tutto ci&ograve;
                in modo completo. Gli sviluppatori originali sono spesso andati in pensione o hanno
                cambiato azienda. Il risultato &egrave; quello che nel settore chiamiamo{" "}
                <strong className="text-[#E6EDF3]">debito tecnico opaco</strong>: un rischio che
                l&apos;organizzazione non riesce nemmeno a quantificare.
              </p>
              <p>
                Le conseguenze sono concrete: costi di manutenzione che crescono del 15-25% annuo,
                impossibilit&agrave; di implementare nuove funzionalit&agrave; richieste dal mercato,
                vulnerabilit&agrave; di sicurezza su componenti non pi&ugrave; patchati, difficolt&agrave;
                nel reperire sviluppatori disposti a lavorare su stack obsoleti, e un rischio
                crescente di failure catastrofici quando una dipendenza critica raggiunge l&apos;end-of-life.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Come l&apos;AI trasforma il reverse engineering del codice legacy
              </h2>
              <p>
                Tradizionalmente, il reverse engineering di un sistema legacy &egrave; un processo
                manuale, lungo e costoso. Un team di analisti deve leggere il codice sorgente riga
                per riga, intervistare gli utenti, ricostruire i flussi di dati, e documentare la
                business logic &mdash; un lavoro che per sistemi complessi pu&ograve; richiedere
                6-12 mesi. Con l&apos;AI, questo paradigma cambia radicalmente.
              </p>
              <p>
                La nostra pipeline utilizza un&apos;architettura{" "}
                <strong className="text-[#E6EDF3]">RAG (Retrieval-Augmented Generation)</strong>{" "}
                costruita su <strong className="text-[#E6EDF3]">Weaviate</strong>, un vector database
                che indicizza l&apos;intero codebase &mdash; codice sorgente, stored procedure,
                configurazioni, documentazione esistente, ticket di bug tracking, email tecniche &mdash;
                in uno spazio vettoriale semantico. Questo significa che un LLM pu&ograve; rispondere
                a domande come &quot;quali moduli gestiscono il calcolo degli sconti per i clienti
                gold?&quot; interrogando non solo il codice ma tutto il contesto aziendale associato.
              </p>
              <p>
                Sopra il layer RAG opera un{" "}
                <strong className="text-[#E6EDF3]">sistema multi-agent orchestrato con n8n</strong>.
                Non un singolo prompt, ma una pipeline di agenti specializzati: un agente per
                l&apos;analisi statica del codice, uno per l&apos;estrazione delle regole di business,
                uno per la mappatura delle dipendenze, uno per l&apos;identificazione dei pattern
                architetturali. Ogni agente produce output strutturati che vengono aggregati in una
                visione coerente del sistema. Il risultato &egrave; un&apos;analisi che un team umano
                impiegherebbe mesi a produrre, generata in settimane con un livello di dettaglio
                superiore. Per un approfondimento tecnico, si veda il nostro articolo di ricerca su{" "}
                <Link
                  href="/research/ai-reverse-engineering"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  AI-driven reverse engineering
                </Link>.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                La metodologia: dall&apos;analisi automatizzata alla riscrittura guidata
              </h2>
              <p>
                Il nostro approccio alla modernizzazione dei sistemi legacy segue una metodologia
                strutturata in quattro fasi, ognuna supportata da strumenti AI specifici.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Fase 1 &mdash; Ingestione e indicizzazione.</strong>{" "}
                L&apos;intero patrimonio informativo del sistema viene indicizzato nel vector database:
                codice sorgente, database schema, configurazioni, documentazione tecnica e funzionale,
                ticket, wiki interne. Questa fase richiede tipicamente 3-5 giorni e produce il
                &quot;knowledge graph&quot; del sistema su cui opereranno tutti gli agenti successivi.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Fase 2 &mdash; Analisi multi-agent.</strong>{" "}
                Gli agenti AI analizzano il sistema da prospettive diverse e complementari.
                L&apos;agente di analisi statica identifica la struttura del codice, le metriche di
                complessit&agrave; ciclomatica, i code smell e i pattern ricorrenti. L&apos;agente di
                business logic extraction ricostruisce le regole di business implicite nel codice.
                L&apos;agente di dependency mapping traccia tutte le dipendenze interne ed esterne.
                L&apos;agente architetturale identifica i bounded context e propone una decomposizione
                in moduli indipendenti.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Fase 3 &mdash; Generazione della roadmap.</strong>{" "}
                I risultati degli agenti vengono sintetizzati in un documento di roadmap che include:
                una mappa visuale delle dipendenze, una matrice di rischio per ogni componente, una
                proposta di sequenza di migrazione basata sullo strangler fig pattern, e una stima
                dei tempi e costi per ogni fase. Questa roadmap &egrave; il deliverable principale
                della fase di analisi.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Fase 4 &mdash; Riscrittura assistita.</strong>{" "}
                La riscrittura del codice avviene con il supporto continuo della pipeline RAG.
                Gli sviluppatori possono interrogare il sistema per comprendere il comportamento
                del codice originale, generare test di regressione basati sulla business logic estratta,
                e validare che il nuovo codice replichi fedelmente le regole di business del sistema
                legacy. Ogni decisione di design &egrave; tracciabile e documentata.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                L&apos;obsolescence engine: identificare il debito tecnico prima che diventi critico
              </h2>
              <p>
                Una delle componenti pi&ugrave; innovative della nostra pipeline &egrave;
                l&apos;<strong className="text-[#E6EDF3]">obsolescence engine</strong>, un sistema
                che monitora continuamente lo stato di salute tecnologica di un&apos;applicazione.
                Non si tratta di un semplice dependency checker: &egrave; un motore di analisi che
                correla dati provenienti da fonti multiple per produrre un quadro completo del
                rischio tecnologico.
              </p>
              <p>
                L&apos;engine analizza le versioni di tutti i componenti del sistema &mdash; framework,
                librerie, database, runtime &mdash; e le confronta con le roadmap ufficiali dei
                vendor per identificare le date di end-of-life. Parallelamente, interroga i database
                CVE (Common Vulnerabilities and Exposures) per identificare vulnerabilit&agrave; note
                sui componenti in uso. Infine, analizza la disponibilit&agrave; di sviluppatori sul
                mercato per le tecnologie utilizzate, un indicatore spesso trascurato ma cruciale
                per la sostenibilit&agrave; a lungo termine.
              </p>
              <p>
                Il risultato &egrave; un <strong className="text-[#E6EDF3]">punteggio di obsolescenza
                </strong> per ogni componente del sistema, con una classificazione in tre livelli:
                verde (nessun intervento richiesto nel prossimo anno), giallo (intervento consigliato
                entro 12 mesi), rosso (intervento urgente &mdash; il componente &egrave; gi&agrave;
                in end-of-life o presenta vulnerabilit&agrave; critiche non patchabili). Questo
                punteggio viene aggiornato automaticamente e consente ai CTO di pianificare gli
                investimenti di modernizzazione con dati oggettivi, non con percezioni.
              </p>
              <p>
                L&apos;obsolescence engine &egrave; integrato nella nostra piattaforma{" "}
                <Link
                  href="/platform"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Nexus MDS Core
                </Link>{" "}
                e pu&ograve; essere deployato on-premise per le organizzazioni che operano in
                settori regolamentati dove i dati sul proprio stack tecnologico non possono lasciare
                il perimetro aziendale.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Caso di studio: IATP &mdash; reverse engineering AI-driven di una piattaforma legacy
              </h2>
              <p>
                Il progetto <strong className="text-[#E6EDF3]">IATP</strong> (Intelligent Application
                Transformation Platform) rappresenta l&apos;applicazione pi&ugrave; completa della
                nostra metodologia di modernizzazione AI-driven. Il cliente disponeva di una
                piattaforma enterprise sviluppata nel corso di oltre 15 anni, con centinaia di
                migliaia di righe di codice, documentazione frammentaria e un team di sviluppo
                che conosceva solo parzialmente il sistema.
              </p>
              <p>
                La pipeline AI ha indicizzato l&apos;intero codebase in Weaviate, inclusi i database
                schema, le stored procedure, i file di configurazione e la documentazione esistente.
                Il sistema multi-agent ha poi analizzato il codice, identificando 47 bounded context
                distinti, 312 regole di business implicite nel codice, e 23 dipendenze esterne di
                cui 8 in stato di end-of-life. L&apos;analisi, che avrebbe richiesto un team di
                5-6 analisti per 4-5 mesi, &egrave; stata completata in 3 settimane.
              </p>
              <p>
                La roadmap generata ha permesso al team di sviluppo di procedere con una modernizzazione
                incrementale, partendo dai moduli a pi&ugrave; alto rischio e pi&ugrave; basso
                accoppiamento. Il nuovo sistema &egrave; stato costruito su un&apos;architettura
                moderna con API REST, event sourcing, e un layer di integrazione che ha permesso
                la coesistenza del vecchio e del nuovo sistema durante la transizione. Il caso di
                studio completo &egrave; disponibile nella pagina dedicata a{" "}
                <Link
                  href="/case-studies/iatp"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  IATP &mdash; reverse engineering AI-driven
                </Link>.
              </p>
              <p>
                Un approccio simile, applicato al settore farmaceutico, ha guidato il progetto di
                modernizzazione per{" "}
                <Link
                  href="/case-studies/federfarma"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Federfarma
                </Link>, dove l&apos;analisi automatizzata ha permesso di identificare e risolvere
                dipendenze critiche in un ecosistema di servizi altamente regolamentato.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Dalla comprensione alla riscrittura: pipeline AI-driven completa
              </h2>
              <p>
                La vera potenza della modernizzazione AI-assisted non sta solo nell&apos;analisi, ma
                nella continuit&agrave; della pipeline. Una volta che il sistema legacy &egrave; stato
                compreso e mappato, la stessa infrastruttura RAG diventa lo strumento di lavoro
                quotidiano del team di sviluppo durante la fase di riscrittura.
              </p>
              <p>
                Gli sviluppatori possono interrogare il sistema con domande in linguaggio naturale:
                &quot;Come viene calcolato il margine per i prodotti della categoria X quando il
                cliente ha un contratto pluriennale?&quot; La pipeline RAG recupera i frammenti di
                codice rilevanti, la documentazione associata, e i ticket storici, producendo una
                risposta contestualizzata che permette allo sviluppatore di implementare la stessa
                logica nel nuovo stack senza ambiguit&agrave;.
              </p>
              <p>
                Questo approccio risolve uno dei problemi pi&ugrave; sottovalutati nella
                modernizzazione legacy: la <strong className="text-[#E6EDF3]">perdita di conoscenza
                tacita</strong>. In ogni sistema legacy esiste un layer di conoscenza che non
                &egrave; nel codice n&eacute; nella documentazione, ma nelle teste delle persone.
                La pipeline RAG cattura questa conoscenza durante la fase di analisi &mdash; attraverso
                sessioni strutturate con gli utenti chiave &mdash; e la rende interrogabile per
                tutta la durata del progetto.
              </p>
              <p>
                Il risultato &egrave; una pipeline end-to-end che va dall&apos;analisi iniziale alla
                validazione del nuovo sistema, con traccabilit&agrave; completa delle decisioni e
                la garanzia che nessuna regola di business venga persa nella transizione. Questa
                pipeline &egrave; parte integrante dei nostri servizi di{" "}
                <Link
                  href="/services/enterprise-integration"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  enterprise integration
                </Link>{" "}
                e{" "}
                <Link
                  href="/services/applied-ai"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  applied AI
                </Link>.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Il ROI della modernizzazione AI-assisted vs riscrittura manuale
              </h2>
              <p>
                La domanda che ogni CTO e IT director si pone &egrave; legittima: la modernizzazione
                AI-driven produce un ritorno sull&apos;investimento reale e misurabile? I dati dei
                nostri progetti dicono di s&igrave;, e in modo significativo.
              </p>
              <p>
                Il primo risparmio &egrave; sulla fase di <strong className="text-[#E6EDF3]">
                analisi e comprensione</strong>, che tipicamente rappresenta il 30-50% del costo
                totale di un progetto di modernizzazione. La nostra pipeline riduce questa fase
                del 70-80%, producendo al contempo un output pi&ugrave; completo e strutturato di
                quello ottenibile con un audit manuale. Su un progetto medio da 500K euro, questo
                si traduce in un risparmio di 100-200K euro solo sulla fase di analisi.
              </p>
              <p>
                Il secondo risparmio &egrave; sulla <strong className="text-[#E6EDF3]">riduzione dei
                difetti</strong> durante la riscrittura. La disponibilit&agrave; della pipeline RAG
                durante lo sviluppo riduce gli errori di interpretazione della business logic originale,
                che sono la causa principale di bug critici nei progetti di modernizzazione. I nostri
                dati mostrano una riduzione del 45% dei difetti post-rilascio rispetto a progetti
                di riscrittura manuale comparabili.
              </p>
              <p>
                Il terzo beneficio, meno quantificabile ma strategicamente decisivo, &egrave; la{" "}
                <strong className="text-[#E6EDF3]">riduzione del rischio progettuale</strong>.
                I progetti di modernizzazione legacy hanno storicamente un tasso di fallimento
                del 60-70%, principalmente per sottostima della complessit&agrave; e perdita di
                business logic. L&apos;analisi AI-driven fornisce una visione completa del sistema
                prima di iniziare la riscrittura, permettendo una stima accurata dei tempi e dei
                costi e riducendo drasticamente il rischio di scope creep.
              </p>
              <p>
                In sintesi, per un progetto di modernizzazione mid-market tipico, il costo della
                nostra pipeline AI si ripaga 3-5 volte nel risparmio complessivo del progetto.
                Per le organizzazioni che vogliono approfondire il nostro approccio, &egrave;
                disponibile una{" "}
                <Link
                  href="/contact"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  consulenza iniziale gratuita
                </Link>{" "}
                per valutare la fattibilit&agrave; e il ROI atteso.
              </p>
            </div>

            {/* Section 8 - FAQ */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Domande frequenti sulla modernizzazione dei sistemi legacy con AI
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">
                    Quanto tempo richiede la modernizzazione di un sistema legacy con AI?
                  </h3>
                  <p>
                    La fase di analisi automatizzata con la nostra pipeline AI richiede tipicamente 2-4
                    settimane, contro i 3-6 mesi di un audit manuale tradizionale. La riscrittura
                    completa dipende dalla complessit&agrave; del sistema, ma la roadmap generata
                    dall&apos;AI riduce i tempi del 40-60% rispetto a un approccio puramente manuale.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">
                    Quali linguaggi e tecnologie legacy supportate nel reverse engineering?
                  </h3>
                  <p>
                    La nostra pipeline RAG &egrave; agnostica rispetto al linguaggio. Abbiamo lavorato
                    su codebase COBOL, Visual Basic 6, .NET Framework, Java EE legacy, PL/SQL e sistemi
                    proprietari. Il vector database Weaviate indicizza qualsiasi tipo di codice sorgente,
                    documentazione e configurazione.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">
                    Come funziona l&apos;obsolescence engine di Dynamics Consulting?
                  </h3>
                  <p>
                    L&apos;obsolescence engine analizza automaticamente le dipendenze del sistema, le
                    versioni dei framework, le vulnerabilit&agrave; note (CVE) e le date di end-of-life
                    dei componenti. Genera un punteggio di rischio per ogni componente e produce una
                    roadmap di prioritizzazione degli interventi basata sull&apos;impatto di business.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">
                    &Egrave; possibile modernizzare solo una parte del sistema legacy senza riscrivere tutto?
                  </h3>
                  <p>
                    Assolutamente s&igrave;. Il nostro approccio prevede la decomposizione modulare:
                    l&apos;analisi AI identifica i confini dei domini funzionali e le dipendenze tra
                    moduli, permettendo una modernizzazione incrementale. Si possono estrarre i moduli
                    critici e modernizzarli individualmente con pattern come lo strangler fig.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">
                    Quanto costa la modernizzazione AI-assisted rispetto alla riscrittura tradizionale?
                  </h3>
                  <p>
                    I nostri progetti mostrano un risparmio medio del 40-60% rispetto alla riscrittura
                    manuale completa. Il risparmio deriva dalla riduzione drastica dei tempi di analisi
                    e comprensione del codice, che tipicamente rappresentano il 30-50% del costo totale
                    di un progetto di modernizzazione.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">
                    Dynamics Consulting lavora solo con grandi enterprise o anche con il mid-market?
                  </h3>
                  <p>
                    Il nostro focus &egrave; specificamente il mid-market italiano: aziende con 50-500
                    dipendenti, spesso in settori regolamentati come sanit&agrave;, farmaceutica,
                    logistica e manifatturiero. Offriamo la competenza di una societ&agrave; di consulenza
                    enterprise con la flessibilit&agrave; e i costi di un partner specializzato.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech badges */}
            <div className="pt-8 border-t border-[#30363D]">
              <p className="text-sm text-[#7D8FA3] mb-4">Tecnologie della pipeline</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Weaviate",
                  "RAG Pipeline",
                  "n8n Multi-Agent",
                  "LLM Inference",
                  "vLLM",
                  "Kubernetes",
                  "Docker",
                  "PostgreSQL",
                  "Nexus MDS Core",
                  "Event Sourcing",
                  "Strangler Fig Pattern",
                  "Obsolescence Engine",
                ].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Parliamo del tuo progetto"
          subtitle="Infrastruttura AI da costruire, sistemi legacy da modernizzare, o piattaforme da connettere al futuro? Contattaci."
          ctaLabel="Inizia la conversazione →"
        />
      </main>
      <Footer />
    </>
  );
}
