import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title:
    "AI Sovrana per il Pharma Italiano",
  description:
    "Sovereign AI per il pharma italiano: infrastruttura AI on-premise conforme a AI Act, GDPR, Legge 132/2025 e NIS2. Nexus MDS Core — piattaforma sovrana per farmacovigilanza, clinical trials e supply chain farmaceutica.",
  alternates: {
    canonical: "https://www.dynamicsconsulting.it/sovereign-ai-pharma-italia",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Sovereign AI Pharma Italia — Infrastruttura AI Sovrana per il Settore Farmaceutico",
      description:
        "Sovereign AI per il pharma italiano: infrastruttura AI on-premise conforme a AI Act, GDPR, Legge 132/2025 e NIS2. Nexus MDS Core per farmacovigilanza, clinical trials e supply chain.",
      url: "https://www.dynamicsconsulting.it/sovereign-ai-pharma-italia",
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
          name: "Cosa si intende per sovereign AI nel settore farmaceutico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Per sovereign AI nel pharma si intende un\u2019infrastruttura di intelligenza artificiale che l\u2019azienda farmaceutica possiede, governa e controlla interamente on-premise, senza dipendenza da cloud provider esterni. I dati di farmacovigilanza, clinical trials e proprietà intellettuale non escono mai dal perimetro aziendale.",
          },
        },
        {
          "@type": "Question",
          name: "Perché un\u2019azienda farmaceutica non può usare AI cloud-based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Il quadro normativo europeo (AI Act, GDPR, Legge 132/2025, NIS2) impone requisiti stringenti sulla residenza dei dati, la trasparenza algoritmica e la governance dei sistemi AI in settori ad alto rischio come il pharma. Le soluzioni cloud degli hyperscaler rendono difficile dimostrare la conformità su tutti questi fronti simultaneamente.",
          },
        },
        {
          "@type": "Question",
          name: "Quali casi d\u2019uso copre la piattaforma Nexus MDS Core per il pharma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nexus MDS Core supporta farmacovigilanza automatizzata con pipeline RAG, gestione documentale per clinical trials, ottimizzazione della supply chain farmaceutica, automazione dei processi regolatori con workflow agentici, e ricerca semantica su base documentale scientifica.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto tempo richiede l\u2019implementazione di una piattaforma AI sovrana nel pharma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un deployment standard di Nexus MDS Core richiede da 8 a 16 settimane, a seconda della complessità dell\u2019integrazione con i sistemi esistenti (ERP, LIMS, EDC). La fase di discovery e assessment iniziale richiede 2-3 settimane, seguita dal deployment iterativo dei servizi.",
          },
        },
        {
          "@type": "Question",
          name: "La Legge 132/2025 si applica anche alle aziende farmaceutiche private?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sì. La Legge 132/2025 si applica a tutti i soggetti che sviluppano o impiegano sistemi di intelligenza artificiale in Italia, incluse le aziende farmaceutiche private. In particolare, i sistemi AI utilizzati in ambito sanitario e farmaceutico rientrano nella categoria ad alto rischio, con obblighi rafforzati di trasparenza, governance e supervisione umana.",
          },
        },
        {
          "@type": "Question",
          name: "Dynamics Consulting opera solo in Lombardia o su tutto il territorio nazionale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dynamics Consulting opera su tutto il territorio nazionale italiano, con una forte presenza nel Nord Italia. I progetti vengono gestiti in modalità ibrida: discovery e workshop in presenza, implementazione e supporto in remoto con accesso sicuro all\u2019infrastruttura del cliente.",
          },
        },
      ],
    },
  ],
};

export default function SovereignAiPharmaItaliaPage() {
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
              AI Sovrana per il Pharma
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Sovereign AI per il settore farmaceutico italiano: infrastruttura,
              conformità e controllo totale
            </h1>
            <p className="text-[#7D8FA3] text-lg leading-relaxed">
              Le aziende farmaceutiche italiane operano in uno dei settori più
              regolamentati al mondo. Ogni dato clinico, ogni segnalazione di
              farmacovigilanza, ogni documento di proprietà intellettuale
              richiede protezione assoluta. L&apos;intelligenza artificiale
              rappresenta un&apos;opportunità trasformativa per il pharma — ma
              solo se implementata con un&apos;infrastruttura sovrana che
              garantisca residenza dei dati, trasparenza algoritmica e piena
              conformità normativa. Questa pagina spiega come costruire
              un&apos;infrastruttura AI on-premise per il farmaceutico, conforme
              a AI Act, GDPR, Legge 132/2025 e NIS2.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-12 text-[#7D8FA3] text-lg leading-relaxed">
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Perché il settore farmaceutico richiede AI sovrana
              </h2>
              <p>
                Il pharma non è un settore qualunque per l&apos;adozione
                dell&apos;AI. I dati trattati — risultati di clinical trials,
                segnalazioni di eventi avversi, formulazioni brevettate, dossier
                registrativi — hanno un valore economico e regolatorio che li
                rende incompatibili con le architetture cloud multi-tenant degli
                hyperscaler. Un singolo data breach in ambito farmaceutico può
                costare centinaia di milioni di euro in sanzioni, oltre al danno
                reputazionale irreversibile.
              </p>
              <p>
                La <strong className="text-[#E6EDF3]">sovereign AI</strong> —
                intelligenza artificiale sovrana — risponde a questa esigenza con
                un principio architetturale preciso: l&apos;intera
                infrastruttura AI risiede on-premise, sotto il controllo
                esclusivo dell&apos;organizzazione. Nessun dato attraversa reti
                pubbliche. Nessun modello viene addestrato su server di terze
                parti. Ogni componente — dall&apos;inferenza LLM alla ricerca
                vettoriale, dall&apos;orchestrazione dei workflow
                all&apos;autenticazione — opera all&apos;interno del perimetro
                aziendale.
              </p>
              <p>
                Per le aziende farmaceutiche mid-market italiane — quelle con
                fatturato tra 50 e 500 milioni di euro — la sfida è duplice:
                adottare AI di livello enterprise senza le risorse di una big
                pharma, e farlo nel rispetto di un quadro normativo che diventa
                ogni anno più stringente. È esattamente il segmento in cui opera{" "}
                <Link
                  href="/platform"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Nexus MDS Core
                </Link>
                .
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Il quadro normativo: AI Act, GDPR, Legge 132/2025, NIS2
              </h2>
              <p>
                Il settore farmaceutico italiano è soggetto a una convergenza
                normativa senza precedenti in materia di AI. Comprendere questo
                quadro è il prerequisito per qualsiasi decisione architetturale.
              </p>
              <p>
                L&apos;
                <strong className="text-[#E6EDF3]">AI Act europeo</strong>{" "}
                (Regolamento UE 2024/1689), in vigore da agosto 2024 con
                obblighi progressivi fino al 2027, classifica i sistemi AI
                utilizzati in ambito sanitario e farmaceutico come{" "}
                <strong className="text-[#E6EDF3]">sistemi ad alto rischio</strong>.
                Questo comporta obblighi specifici: documentazione tecnica
                dettagliata, sistemi di gestione del rischio, data governance
                verificabile, supervisione umana obbligatoria, e registrazione
                in un database europeo. Per le aziende farmaceutiche che
                utilizzano AI in farmacovigilanza o clinical trials, questi
                requisiti sono immediatamente operativi.
              </p>
              <p>
                Il <strong className="text-[#E6EDF3]">GDPR</strong> resta il
                pilastro della protezione dati. Nel pharma, dove i dati dei
                pazienti attraversano ogni processo — dal reclutamento per trial
                clinici alla segnalazione di reazioni avverse — il principio di
                minimizzazione e la necessità di basi giuridiche solide per ogni
                trattamento rendono problematico l&apos;uso di piattaforme AI
                cloud-based dove i dati escono dal perimetro aziendale.
              </p>
              <p>
                La{" "}
                <Link
                  href="/research/legge-132-2025"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Legge 132/2025
                </Link>{" "}
                — prima legge italiana organica sull&apos;intelligenza
                artificiale — introduce obblighi specifici per i sistemi AI in
                sanità, tra cui la trasparenza verso il paziente, la
                supervisione umana obbligatoria nelle decisioni cliniche, e
                sanzioni penali per l&apos;uso improprio di AI in ambito
                sanitario. Per il pharma, questo si traduce nella necessità di
                audit trail completi e nella capacità di spiegare ogni output
                algoritmico.
              </p>
              <p>
                La{" "}
                <strong className="text-[#E6EDF3]">Direttiva NIS2</strong>{" "}
                (recepita in Italia con D.Lgs. 138/2024) classifica il settore
                sanitario e farmaceutico tra i{" "}
                <strong className="text-[#E6EDF3]">settori essenziali</strong>,
                con obblighi di cybersecurity rafforzati: gestione del rischio
                della supply chain digitale, notifica degli incidenti entro 24
                ore, e responsabilità diretta del management. Un&apos;infrastruttura
                AI cloud-based espande la superficie di attacco e complica la
                compliance NIS2.
              </p>
              <p>
                In sintesi: il quadro normativo italiano ed europeo del
                2025-2026 rende l&apos;
                <Link
                  href="/it/sovereign-ai-italia"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  AI sovrana
                </Link>{" "}
                non una preferenza tecnologica, ma un requisito di conformità
                per il settore farmaceutico.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Casi d&apos;uso: farmacovigilanza, clinical trials, supply chain
              </h2>
              <p>
                L&apos;AI sovrana nel pharma non è un concetto astratto. I casi
                d&apos;uso sono concreti, misurabili e ad alto impatto
                operativo.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Farmacovigilanza automatizzata.</strong>{" "}
                La segnalazione di eventi avversi (ICSR) genera volumi
                documentali crescenti. Una pipeline RAG on-premise consente di
                interrogare automaticamente i database di segnalazioni,
                classificare gli eventi per gravità, identificare pattern
                emergenti e generare report per AIFA e EMA — il tutto senza che
                i dati dei pazienti lascino il perimetro aziendale. Il vantaggio
                competitivo è duplice: riduzione dei tempi di analisi fino
                all&apos;80% e conformità GDPR by design.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Gestione documentale per clinical trials.</strong>{" "}
                Un trial clinico di Fase III genera decine di migliaia di
                documenti: protocolli, consensi informati, CRF, report di
                monitoraggio, corrispondenze con i comitati etici. Un sistema AI
                sovrano con ricerca semantica vettoriale permette ai team
                regolatori di trovare istantaneamente qualsiasi informazione
                attraverso query in linguaggio naturale, eliminando ore di
                ricerca manuale nei sistemi legacy.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Ottimizzazione della supply chain farmaceutica.</strong>{" "}
                La catena di approvvigionamento farmaceutica è soggetta a
                vincoli unici: cold chain, tracciabilità lotto per lotto,
                serializzazione, conformità GDP. Workflow agentici on-premise
                possono automatizzare il monitoraggio delle temperature, la
                previsione della domanda basata su dati storici e stagionali, e
                la gestione delle non conformità — integrandosi con i sistemi
                ERP esistenti senza esporre dati operativi a terze parti.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Quality assurance e batch record review.</strong>{" "}
                La revisione dei batch record è uno dei processi più onerosi in
                termini di risorse umane qualificate. Un sistema AI on-premise
                può effettuare la pre-revisione automatica, identificando
                anomalie, deviazioni e campi incompleti prima che il QA
                specialist intervenga. Il risultato: cicli di rilascio lotto più
                rapidi con un livello di accuratezza superiore.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                L&apos;architettura di una piattaforma AI on-premise per il
                pharma: Nexus MDS Core
              </h2>
              <p>
                <Link
                  href="/platform"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Nexus MDS Core
                </Link>{" "}
                è la piattaforma di{" "}
                <strong className="text-[#E6EDF3]">Dynamics Consulting</strong>{" "}
                progettata specificamente per il deployment di AI sovrana in
                settori regolamentati. Non è un prodotto SaaS: è
                un&apos;architettura modulare composta da circa 16 servizi
                Docker orchestrati, deployabile su Kubernetes o bare-metal,
                interamente on-premise.
              </p>
              <p>I componenti principali rilevanti per il pharma includono:</p>
              <ul className="list-disc list-inside space-y-2 text-[#7D8FA3]">
                <li>
                  <strong className="text-[#E6EDF3]">Inferenza LLM on-premise</strong>{" "}
                  con vLLM — modelli open-weight (Llama 3, Mistral, Qwen)
                  eseguiti localmente, senza che prompt o risposte transitino su
                  server esterni
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Pipeline RAG</strong> con
                  Weaviate per ricerca vettoriale semantica su documenti
                  farmaceutici, protocolli clinici e letteratura scientifica
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Workflow agentici</strong>{" "}
                  con n8n per automazione dei processi regolatori,
                  farmacovigilanza e quality assurance
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Autenticazione Zero-Trust</strong>{" "}
                  con Keycloak OIDC/PKCE — single sign-on, multi-factor
                  authentication, role-based access control granulare
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Observability completa</strong>{" "}
                  con Grafana, Prometheus e Loki — monitoring, alerting e audit
                  trail per ogni interazione con il sistema AI
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">API gateway</strong> con
                  Kong per gestione del traffico, rate limiting e integrazione
                  sicura con sistemi esterni (ERP, LIMS, EDC)
                </li>
              </ul>
              <p>
                Ogni componente è stato selezionato per la sua maturità in
                ambito enterprise, la licenza open-source, e la capacità di
                operare completamente offline. L&apos;architettura è progettata
                per essere auditabile: ogni decisione del sistema AI è
                tracciabile, ogni accesso è registrato, ogni output è
                riproducibile.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                I rischi del cloud per i dati farmaceutici
              </h2>
              <p>
                Le piattaforme AI cloud-based degli hyperscaler (Azure OpenAI,
                AWS Bedrock, Google Vertex AI) offrono indubbia comodità di
                deployment. Ma per il settore farmaceutico italiano, i rischi
                superano i benefici in molteplici dimensioni.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Rischio di sovranità dei dati.</strong>{" "}
                Anche con data residency in regione EU, i dati farmaceutici
                processati su infrastrutture cloud restano soggetti alla
                giurisdizione del provider. Il CLOUD Act statunitense, ad
                esempio, consente alle autorità USA di richiedere accesso ai
                dati conservati da aziende americane ovunque nel mondo. Per
                un&apos;azienda farmaceutica italiana con proprietà
                intellettuale sensibile, questo rappresenta un rischio
                strategico inaccettabile.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Rischio di lock-in tecnologico.</strong>{" "}
                Le API proprietarie di Azure, AWS e Google creano una dipendenza
                strutturale. Migrare da un provider all&apos;altro — o
                riportare i workload on-premise — diventa un progetto a sé
                stante, con costi e tempi spesso proibitivi. Con
                un&apos;architettura sovrana basata su standard aperti, il
                controllo resta all&apos;organizzazione.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Rischio di compliance NIS2.</strong>{" "}
                La Direttiva NIS2 richiede alle organizzazioni in settori
                essenziali di gestire il rischio della supply chain digitale. Un
                fornitore cloud è, di fatto, un anello critico della catena.
                Ogni incidente di sicurezza sul provider si riflette
                sull&apos;organizzazione cliente, con obblighi di notifica e
                potenziali sanzioni.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Rischio economico.</strong>{" "}
                I costi delle API AI cloud-based sono variabili e spesso
                imprevedibili. Per workload ad alto volume — come la
                farmacovigilanza che processa migliaia di segnalazioni al mese —
                il costo operativo di una piattaforma on-premise si ammortizza
                tipicamente in 12-18 mesi, con costi marginali
                significativamente inferiori rispetto al cloud.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Caso di studio: Federfarma Lombardia
              </h2>
              <p>
                Il progetto realizzato per{" "}
                <Link
                  href="/case-studies/federfarma"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Federfarma Lombardia
                </Link>{" "}
                rappresenta un esempio concreto di sovereign AI applicata al
                settore farmaceutico italiano. Federfarma Lombardia — che
                rappresenta oltre 2.800 farmacie sul territorio lombardo —
                aveva l&apos;esigenza di modernizzare i propri sistemi
                informativi integrando capacità AI per l&apos;analisi
                documentale e l&apos;automazione dei processi associativi,
                mantenendo la piena conformità normativa.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Dynamics Consulting</strong>{" "}
                ha progettato e implementato un&apos;infrastruttura basata su
                Nexus MDS Core con pipeline RAG per l&apos;interrogazione
                intelligente della base documentale, workflow agentici per
                l&apos;automazione dei processi ripetitivi, e
                un&apos;interfaccia utente intuitiva per gli operatori. Il
                progetto è stato guidato direttamente dal fondatore, Corrado
                Patierno, con un approccio iterativo: discovery, MVP, validazione
                con gli utenti finali, e rilascio progressivo.
              </p>
              <p>
                I risultati: riduzione significativa dei tempi di ricerca
                documentale, automazione di processi che prima richiedevano ore
                di lavoro manuale, e un&apos;infrastruttura AI completamente
                on-premise che Federfarma controlla e governa autonomamente. Il
                caso dimostra che la sovereign AI nel pharma non è teoria: è
                operativa, misurabile, e già in produzione in Italia.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Come iniziare: roadmap per aziende farmaceutiche
              </h2>
              <p>
                L&apos;adozione di una piattaforma AI sovrana nel pharma non è
                un progetto big-bang. È un percorso strutturato che{" "}
                <Link
                  href="/services/applied-ai"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Dynamics Consulting
                </Link>{" "}
                gestisce con una metodologia collaudata.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Fase 1 — Discovery e assessment (2-3 settimane).</strong>{" "}
                Analisi dell&apos;infrastruttura IT esistente, mappatura dei
                processi candidati per l&apos;automazione AI, valutazione della
                readiness normativa (AI Act, GDPR, Legge 132/2025, NIS2).
                Output: un documento di assessment con raccomandazioni
                prioritizzate e un business case quantificato.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Fase 2 — Architettura e MVP (4-6 settimane).</strong>{" "}
                Progettazione dell&apos;architettura target basata su Nexus MDS
                Core, selezione dei modelli LLM più adatti al caso d&apos;uso
                specifico, deployment del primo servizio in ambiente di sviluppo.
                Il MVP viene validato con un gruppo ristretto di utenti finali
                per raccogliere feedback prima del rollout.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Fase 3 — Deployment e integrazione (4-8 settimane).</strong>{" "}
                Deployment in produzione dell&apos;intera piattaforma,
                integrazione con i sistemi esistenti (ERP, LIMS, EDC, sistemi di
                farmacovigilanza), configurazione del monitoring e degli alert,
                formazione del personale tecnico e degli utenti finali.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Fase 4 — Operatività e evoluzione continua.</strong>{" "}
                Supporto post-deployment, aggiornamento dei modelli, estensione
                a nuovi casi d&apos;uso, adeguamento continuo ai cambiamenti
                normativi. Il team di Dynamics Consulting resta al fianco
                dell&apos;organizzazione come partner tecnologico di lungo
                periodo.
              </p>
              <p>
                Ogni fase è documentata, ogni decisione è tracciabile, ogni
                milestone è concordata. Non ci sono sorprese, né scope creep. Il
                fondatore, Corrado Patierno, segue personalmente ogni progetto
                pharma dal primo giorno.{" "}
                <Link
                  href="/contact"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Contattaci
                </Link>{" "}
                per una conversazione iniziale senza impegno.
              </p>
            </div>

            {/* Section 8 — FAQ */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Domande frequenti
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  Cosa si intende per sovereign AI nel settore farmaceutico?
                </h3>
                <p>
                  Per sovereign AI nel pharma si intende un&apos;infrastruttura
                  di intelligenza artificiale che l&apos;azienda farmaceutica
                  possiede, governa e controlla interamente on-premise, senza
                  dipendenza da cloud provider esterni. I dati di
                  farmacovigilanza, clinical trials e proprietà intellettuale
                  non escono mai dal perimetro aziendale.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  Perché un&apos;azienda farmaceutica non può usare AI
                  cloud-based?
                </h3>
                <p>
                  Il quadro normativo europeo (AI Act, GDPR,{" "}
                  <Link
                    href="/research/legge-132-2025"
                    className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                  >
                    Legge 132/2025
                  </Link>
                  , NIS2) impone requisiti stringenti sulla residenza dei dati,
                  la trasparenza algoritmica e la governance dei sistemi AI in
                  settori ad alto rischio come il pharma. Le soluzioni cloud
                  degli hyperscaler rendono difficile dimostrare la conformità
                  su tutti questi fronti simultaneamente.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  Quali casi d&apos;uso copre la piattaforma Nexus MDS Core per
                  il pharma?
                </h3>
                <p>
                  Nexus MDS Core supporta farmacovigilanza automatizzata con
                  pipeline RAG, gestione documentale per clinical trials,
                  ottimizzazione della supply chain farmaceutica, automazione dei
                  processi regolatori con workflow agentici, e ricerca semantica
                  su base documentale scientifica. Per approfondire, visita la
                  pagina{" "}
                  <Link
                    href="/it/consulenza-ai-farmaceutico"
                    className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                  >
                    consulenza AI per il farmaceutico
                  </Link>
                  .
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  Quanto tempo richiede l&apos;implementazione di una
                  piattaforma AI sovrana nel pharma?
                </h3>
                <p>
                  Un deployment standard di Nexus MDS Core richiede da 8 a 16
                  settimane, a seconda della complessità dell&apos;integrazione
                  con i sistemi esistenti (ERP, LIMS, EDC). La fase di discovery
                  e assessment iniziale richiede 2-3 settimane, seguita dal
                  deployment iterativo dei servizi.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  La Legge 132/2025 si applica anche alle aziende farmaceutiche
                  private?
                </h3>
                <p>
                  Sì. La Legge 132/2025 si applica a tutti i soggetti che
                  sviluppano o impiegano sistemi di intelligenza artificiale in
                  Italia, incluse le aziende farmaceutiche private. I sistemi AI
                  utilizzati in ambito sanitario e farmaceutico rientrano nella
                  categoria ad alto rischio, con obblighi rafforzati di
                  trasparenza, governance e supervisione umana.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  Dynamics Consulting opera solo in Lombardia o su tutto il
                  territorio nazionale?
                </h3>
                <p>
                  Dynamics Consulting opera su tutto il territorio nazionale
                  italiano, con una forte presenza nel Nord Italia. I progetti
                  vengono gestiti in modalità ibrida: discovery e workshop in
                  presenza, implementazione e supporto in remoto con accesso
                  sicuro all&apos;infrastruttura del cliente.
                </p>
              </div>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-[#21262D]">
              <TechBadge label="Sovereign AI" />
              <TechBadge label="Pharma" />
              <TechBadge label="AI Act" />
              <TechBadge label="GDPR" />
              <TechBadge label="Legge 132/2025" />
              <TechBadge label="NIS2" />
              <TechBadge label="Nexus MDS Core" />
              <TechBadge label="On-Premise" />
              <TechBadge label="Farmacovigilanza" />
              <TechBadge label="Clinical Trials" />
              <TechBadge label="vLLM" />
              <TechBadge label="RAG Pipeline" />
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
