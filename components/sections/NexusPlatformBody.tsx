import type { ReactNode } from "react";
import Link from "next/link";
import { Shield, CheckCircle2, Lock, EyeOff } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechBadge } from "@/components/ui/TechBadge";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { PlatformHero } from "@/components/sections/PlatformHero";
import { PlatformFeatureGrid } from "@/components/sections/PlatformFeatureGrid";
import { NexusGraphExplorer } from "@/components/sections/NexusGraphExplorer";
import { NEXUS_INFERENCE_EN, NEXUS_INFERENCE_IT } from "@/lib/nexus";

/**
 * The body of the Nexus platform page, shared by /platform and
 * /it/piattaforma-nexus so the two keep the same structure. The Italian copy
 * is written in Italian, not translated sentence by sentence.
 *
 * Order: promise → governance reused (the cost argument) → comparison with
 * the SaaS delivery model → model optionality → deployment →
 * use cases → proof → how it is delivered → under the hood → CTA. The
 * components (feature grid, graph explorer) are the evidence, not the pitch.
 *
 * Every factual line here is checked against the Nexus DockerSystem
 * repository; numbers come from lib/nexus.ts or from the case studies.
 */

const link = "text-[#00B4D8] hover:text-[#E6EDF3] underline";

interface ProofCard {
  sector: string;
  title: string;
  summary: string;
  metrics: string[];
  href?: string;
  linkLabel?: string;
}

interface Copy {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    badges: string[];
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  governance: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; tech: string; body: string }[];
    steps: { label: string; body: string }[];
  };
  /** Nexus against the typical SaaS delivery model; no vendor is named. */
  comparison: {
    eyebrow: string;
    title: string;
    columns: [string, string, string];
    rows: { aspect: string; nexus: string; saas: string }[];
    note: string;
  };
  models: { eyebrow: string; title: string; body: string[] };
  deployment: {
    eyebrow: string;
    title: string;
    whereLabel: string;
    where: { title: string; body: string }[];
    generationLabel: string;
    generation: { title: string; body: string }[];
    note: string;
  };
  useCases: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string; badges: string[] }[];
  };
  proof: {
    eyebrow: string;
    title: string;
    cards: ProofCard[];
    /** Projects running on Nexus that are not in production yet. */
    pilot: { label: string; cards: ProofCard[] };
  };
  delivery: { eyebrow: string; title: string; body: ReactNode[] };
  graph: { eyebrow: string; title: string; intro: string };
  controls: { label: string; badges: string[]; note: string };
  cta: {
    title: string;
    subtitle: string;
    label: string;
    href: string;
    secondary: { label: string; href: string };
  };
}

const EN: Copy = {
  hero: {
    eyebrow: "Nexus MDS Core · proprietary platform",
    title: "The AI layer that stays inside your perimeter — and can prove it.",
    subtitle: `${NEXUS_INFERENCE_EN} Every model call, local or external, is recorded in a hash-chained audit log that you can verify yourself.`,
    badges: [
      "GDPR controls mapped",
      "AI Act controls mapped",
      "ISO/IEC 27001:2022 controls mapped",
      "EU data residency",
    ],
    primary: { label: "Request a demo →", href: "/contact" },
    secondary: { label: "Start with the exposure assessment", href: "/assessment" },
  },
  governance: {
    eyebrow: "Governance built once, reused everywhere",
    title: "The second use case costs less than the first",
    subtitle:
      "In most AI projects governance is rebuilt — and paid for — with every use case, or skipped. On Nexus it is infrastructure: identity, approval steps, audit and personal-data filtering are configured once, and each new use case inherits them instead of paying for them again.",
    items: [
      {
        title: "Identity",
        tech: "Keycloak",
        body: "One realm for staff, one for external users, roles per domain. A new application gets an OIDC client, not a new user directory.",
      },
      {
        title: "Approval steps",
        tech: "n8n",
        body: "Human sign-off before an agent writes anywhere, built as workflow steps that any new workflow can reuse.",
      },
      {
        title: "Audit of every model call",
        tech: "APISIX · audit service",
        body: "Every call, local or external, logged at the gateway into an encrypted, hash-chained record. New workflows are audited by default, because the gateway is the only route to a model the platform sets up.",
      },
      {
        title: "Personal-data filter",
        tech: "on-device privacy filter",
        body: "Personal data detected and redacted locally before text reaches a model.",
      },
    ],
    steps: [
      {
        label: "Use case one",
        body: "Realm, roles, approval steps, audit routes, ingestion pipeline and the first workflow. Most of the governance work — and its cost — sits here, once.",
      },
      {
        label: "Use case two",
        body: "A new document collection, a new workflow, new roles inside the existing realm. Identity, approval steps, audit and personal-data filtering are inherited, not rebuilt: the budget goes to the use case itself.",
      },
    ],
  },
  comparison: {
    eyebrow: "Compared",
    title: "Nexus MDS Core vs AI platforms delivered as SaaS",
    columns: ["", "Nexus MDS Core", "AI platform delivered as SaaS"],
    rows: [
      {
        aspect: "Where indexing runs",
        nexus:
          "Inside your perimeter: documents are extracted, embedded and indexed on your servers or on a dedicated server in an EU datacentre.",
        saas: "Typically in the vendor’s cloud: documents are uploaded so they can be indexed there.",
      },
      {
        aspect: "Who holds the keys",
        nexus:
          "You do. Keycloak, the platform secrets and the encryption of the audit log sit inside your perimeter.",
        saas: "Typically the vendor: identity, secrets and encryption keys are managed in its cloud, at most with an option for a customer-managed key.",
      },
      {
        aspect: "Can you verify the audit log yourself?",
        nexus:
          "Yes. Records are hash-chained; a verification endpoint inside the installation and a separate command-line tool check the chain without relying on the running service.",
        saas: "Typically the log stays with the vendor: you see what its console or export shows, with fuller access on request.",
      },
    ],
    note: "Comparison with the typical SaaS delivery model, not with any specific vendor.",
  },
  models: {
    eyebrow: "Model optionality",
    title: "Change the model, not the architecture",
    body: [
      "Every model call passes the same gateway routes — a local model served by llama.cpp, an EU endpoint, or optional external providers — under the same identity and the same audit. Moving a workload from the EU endpoint to a local model on a GPU server changes the route the call takes, not the retrieval, identity or audit around it.",
      "Today the default generation endpoint sits in an EU datacentre, chosen to keep hardware costs down. On a GPU server the model moves inside, and the whole chain runs locally.",
    ],
  },
  deployment: {
    eyebrow: "Deployment",
    title: "Where it runs is your decision",
    whereLabel: "Where the platform runs",
    where: [
      { title: "Your server", body: "Docker on hardware you own or rent, inside your network." },
      { title: "EU sovereign infrastructure", body: "Docker on a dedicated server in an EU datacentre." },
      { title: "Kubernetes", body: "The same services moved to Kubernetes when scale requires it." },
    ],
    generationLabel: "Where generation runs",
    generation: [
      {
        title: "Local model",
        body: "On a GPU server, generation runs on llama.cpp next to everything else. Nothing about an answer leaves the perimeter.",
      },
      {
        title: "Replaceable EU endpoint",
        body: "Lower hardware cost. Indexing, retrieval, identity and audit stay inside; only the generation step, with the context it needs, calls an endpoint in an EU datacentre.",
      },
    ],
    note: "Air-gapped installations — no network connection at all — are not a supported configuration today.",
  },
  useCases: {
    eyebrow: "Use cases",
    title: "Designed for regulated industries",
    items: [
      {
        title: "Healthcare & Pharma",
        description:
          "RAG pipeline on clinical and pharmaceutical documents. Authentication designed for GDPR requirements. In production for Federfarma Lombarda, and for CureSicure — a service that reads public hospital data (PNE-AGENAS, SDO/NSIS, Ministry of Health open data) to point patients to the facilities that measure best for their condition.",
        badges: ["GDPR", "OCR Pipeline", "Vector Search"],
      },
      {
        title: "Engineering & Technical Documentation",
        description:
          "RAG over technical norms, project specifications, and revision trees. Version-aware retrieval: answers are scoped to the correct document revision for the project date. Every answer is source-cited and fully traceable. Designed for professional liability contexts where a wrong clause has real consequences.",
        badges: ["ISO/UNI", "Project Specs", "Revision Control", "Traceable RAG"],
      },
      {
        title: "Finance & Regulated Services",
        description:
          "RAG and agent systems for banks, asset managers, and insurance. Built with governance as the starting constraint, not a feature added at the end. Human-in-the-loop approval gates, tamper-evident audit trail, RBAC segregation between front office / risk / compliance, full LLM call logging. Controls mapped to DORA operational resilience, MiFID II decision traceability and AI Act high-risk obligations. EU data residency, no hyperscaler lock-in.",
        badges: ["DORA", "MiFID II", "Audit trail", "Human-in-the-loop", "RBAC"],
      },
      {
        title: "Enterprise B2B",
        description:
          "Internal copilot on ERP data, enterprise workflow automation, event-driven integration with legacy systems.",
        badges: ["Dynamics 365", "LLM", "Event-Driven"],
      },
      {
        title: "Regulated Industries",
        description:
          "Infrastructure architected for AI Act requirements: EU data residency, tamper-evident audit trail, generation on a local model or a replaceable EU endpoint.",
        badges: ["AI Act", "EU Data Residency", "ISO 27001 controls mapped"],
      },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "In production",
    cards: [
      {
        sector: "Pharmaceutical distribution",
        title: "Federfarma Lombarda",
        summary:
          "Regulatory-document assistant for the pharmacies of Milan, Lodi and Monza Brianza. Indexing, retrieval, identity and audit run locally; personal data is never indexed.",
        metrics: ["1,000+ pharmacies", "10,000+ docs vectorised", "~2,000 queries per day"],
        href: "/case-studies/federfarma",
      },
      {
        sector: "Healthcare · pro bono",
        title: "CureSicure",
        summary:
          "Reads public hospital data — PNE-AGENAS, SDO/NSIS, Ministry of Health open data — and, given a condition, helps patients find the facilities that measure best on quality and efficiency.",
        metrics: ["Public data only", "No user tracking, by design"],
        href: "/case-studies/curesicure",
      },
      {
        sector: "Legacy modernisation",
        title: "IATP",
        summary:
          "AI-assisted reverse engineering of a legacy platform: retrieval over the codebase, on Nexus, generates the analysis documents.",
        metrics: ["RAG document generation", "MCP DevOps orchestration"],
        href: "/case-studies/iatp",
      },
    ],
    pilot: {
      label: "In development · controlled pilot",
      cards: [
        {
          sector: "Elderly care",
          title: "HumanIA Care",
          summary:
            "AI home assistant for older people, their caregivers and residential care homes: voice, memory and retrieval grounded in reviewed knowledge. A controlled pilot, not yet in public rollout.",
          metrics: ["< 800 ms p99 response latency", "Personal data anonymised at ingestion"],
          href: "/case-studies/humania-care",
        },
      ],
    },
  },
  delivery: {
    eyebrow: "How it is delivered",
    title: "A platform inside an engagement, not a licence",
    body: [
      <>
        Nexus MDS Core is normally deployed as part of a wider engagement covering AI
        architecture,{" "}
        <Link href="/services/governance-advisory" className={link}>
          governance and compliance advisory
        </Link>{" "}
        and regulated operation. The order matters: which obligations reach the system, and which
        component carries each one, is settled before the deployment topology is.
      </>,
      <>
        The regulatory side of that work runs on the{" "}
        <Link href="/cepf" className={link}>
          Compliance-Epistemic Project Framework (CEPF)
        </Link>{" "}
        and on{" "}
        <Link href="/calibra" className={link}>
          Calibra
        </Link>
        , the software built on it — separate instruments from the platform itself. Nexus runs the
        workload; Calibra governs the programme.
      </>,
      <>
        The usual way in is the{" "}
        <Link href="/assessment" className={link}>
          exposure assessment
        </Link>
        : a fixed-scope engagement that establishes what you are answerable for before anything is
        built.
      </>,
    ],
  },
  graph: {
    eyebrow: "Under the hood",
    title: "Service graph explorer",
    intro:
      "The request path as deployed. Click any node to center the view and explore its connections; each edge shows the protocol and direction of data flow. Infrastructure helpers (etcd, the gateway dashboard, autoheal, an internal ops agent) are not drawn. HyperLog receives operational gateway logs only — no prompts, no responses; the audit of model calls stays inside the perimeter.",
  },
  controls: {
    label: "Controls mapped — no certification claimed",
    badges: [
      "GDPR controls mapped",
      "AI Act controls mapped",
      "ISO/IEC 27001:2022 controls mapped",
      "EU data residency",
    ],
    note: "Mapped controls describe how the architecture answers each requirement. Conformity is established by the assessment each regulation provides for; no certification has been obtained for Nexus MDS Core.",
  },
  cta: {
    title: "See Nexus running",
    subtitle:
      "A walkthrough of a production deployment: Docker on a single server, every service active, the audit log included.",
    label: "Request a demo →",
    href: "/contact",
    secondary: { label: "Exposure assessment →", href: "/assessment" },
  },
};

const IT: Copy = {
  hero: {
    eyebrow: "Nexus MDS Core · piattaforma proprietaria",
    title: "Lo strato AI che resta nel tuo perimetro, e lo può dimostrare.",
    subtitle: `${NEXUS_INFERENCE_IT} Ogni chiamata al modello, locale o esterna, finisce in un registro di audit a catena hash che puoi verificare da te.`,
    badges: [
      "Controlli mappati sul GDPR",
      "Controlli mappati sull’AI Act",
      "Controlli mappati su ISO/IEC 27001:2022",
      "Residenza dei dati in UE",
    ],
    primary: { label: "Richiedi una demo →", href: "/it/contatti" },
    secondary: { label: "Parti dall’assessment di esposizione", href: "/it/assessment" },
  },
  governance: {
    eyebrow: "Governance costruita una volta, riusata ovunque",
    title: "Il secondo caso d’uso costa meno del primo",
    subtitle:
      "Nella maggior parte dei progetti AI la governance si rifà, e si ripaga, a ogni caso d’uso, oppure si salta. Su Nexus è infrastruttura: identità, passaggi di approvazione, audit e filtro dei dati personali si configurano una volta, e ogni nuovo caso d’uso li eredita invece di pagarli di nuovo.",
    items: [
      {
        title: "Identità",
        tech: "Keycloak",
        body: "Un realm per il personale, uno per gli utenti esterni, ruoli per dominio. Una nuova applicazione riceve un client OIDC, non un nuovo elenco di utenti.",
      },
      {
        title: "Passaggi di approvazione",
        tech: "n8n",
        body: "La firma di una persona prima che un agente scriva da qualche parte, costruita come passaggio di workflow che ogni nuovo flusso può riusare.",
      },
      {
        title: "Audit di ogni chiamata al modello",
        tech: "APISIX · audit service",
        body: "Ogni chiamata, locale o esterna, registrata al gateway in un registro cifrato e concatenato. I nuovi workflow sono tracciati senza doverlo chiedere, perché il gateway è l’unica strada verso un modello che la piattaforma prevede.",
      },
      {
        title: "Filtro dei dati personali",
        tech: "filtro privacy in locale",
        body: "I dati personali vengono riconosciuti e oscurati in locale prima che il testo arrivi a un modello.",
      },
    ],
    steps: [
      {
        label: "Primo caso d’uso",
        body: "Realm, ruoli, passaggi di approvazione, route di audit, pipeline di acquisizione e il primo workflow. Qui si concentra il lavoro di governance, e il suo costo, una volta sola.",
      },
      {
        label: "Secondo caso d’uso",
        body: "Una nuova raccolta di documenti, un nuovo workflow, nuovi ruoli dentro il realm esistente. Identità, approvazioni, audit e filtro dei dati personali si ereditano, non si ricostruiscono: il budget va al caso d’uso.",
      },
    ],
  },
  comparison: {
    eyebrow: "Il confronto",
    title: "Nexus MDS Core e le piattaforme AI in SaaS",
    columns: ["", "Nexus MDS Core", "Piattaforma AI in SaaS"],
    rows: [
      {
        aspect: "Dove gira l’indicizzazione",
        nexus:
          "Nel tuo perimetro: i documenti vengono estratti, trasformati in embedding e indicizzati sui tuoi server o su un server dedicato in un datacenter UE.",
        saas: "Di norma nel cloud del fornitore: i documenti vengono caricati lì per essere indicizzati.",
      },
      {
        aspect: "Chi tiene le chiavi",
        nexus:
          "Tu. Keycloak, i segreti della piattaforma e la cifratura del registro di audit stanno nel tuo perimetro.",
        saas: "Di norma il fornitore: identità, segreti e chiavi di cifratura sono gestiti nel suo cloud, al più con l’opzione di una chiave gestita dal cliente.",
      },
      {
        aspect: "Il registro di audit lo puoi verificare tu?",
        nexus:
          "Sì. I record sono concatenati via hash; un endpoint di verifica dentro l’installazione e uno strumento a riga di comando separato controllano la catena senza fidarsi del servizio in esecuzione.",
        saas: "Di norma il registro resta al fornitore: vedi quello che mostrano la sua console o il suo export, con un accesso più ampio su richiesta.",
      },
    ],
    note: "Confronto con il modello tipico di erogazione in SaaS, non con un fornitore specifico.",
  },
  models: {
    eyebrow: "Scelta del modello",
    title: "Si cambia il modello, non l’architettura",
    body: [
      "Ogni chiamata a un modello passa dalle stesse route del gateway — un modello locale servito da llama.cpp, un endpoint UE o, se servono, altri provider esterni — sempre con la stessa identità e lo stesso audit. Spostare un carico di lavoro dall’endpoint UE a un modello locale su un server con GPU cambia la strada che fa la chiamata, non il retrieval, l’identità o l’audit che la circondano.",
      "Oggi la generazione predefinita usa un endpoint in un datacenter UE, per contenere il costo dell’hardware. Con un server dotato di GPU il modello entra nel perimetro e l’intera catena gira in locale.",
    ],
  },
  deployment: {
    eyebrow: "Deployment",
    title: "Dove gira lo decidi tu",
    whereLabel: "Dove gira la piattaforma",
    where: [
      { title: "Il tuo server", body: "Docker su hardware tuo o in affitto, dentro la tua rete." },
      { title: "Infrastruttura sovrana UE", body: "Docker su un server dedicato in un datacenter europeo." },
      { title: "Kubernetes", body: "Gli stessi servizi portati su Kubernetes quando la scala lo richiede." },
    ],
    generationLabel: "Dove avviene la generazione",
    generation: [
      {
        title: "Modello locale",
        body: "Su un server con GPU la generazione gira su llama.cpp accanto a tutto il resto. Nulla di una risposta esce dal perimetro.",
      },
      {
        title: "Endpoint UE sostituibile",
        body: "Costo hardware più basso. Indicizzazione, retrieval, identità e audit restano dentro; solo il passo di generazione, con il contesto che gli serve, chiama un endpoint in un datacenter UE.",
      },
    ],
    note: "Le installazioni air-gapped — senza alcuna connessione di rete — oggi non sono una configurazione supportata.",
  },
  useCases: {
    eyebrow: "Casi d’uso",
    title: "Pensata per i settori regolati",
    items: [
      {
        title: "Sanità e farmaceutico",
        description:
          "Pipeline RAG su documenti clinici e farmaceutici, autenticazione progettata sui requisiti del GDPR. In produzione per Federfarma Lombarda e per CureSicure, il servizio che legge i dati pubblici degli ospedali (PNE-AGENAS, SDO/NSIS, open data del Ministero della Salute) per indicare ai pazienti le strutture che misurano meglio per la loro patologia.",
        badges: ["GDPR", "Pipeline OCR", "Vector Search"],
      },
      {
        title: "Ingegneria e documentazione tecnica",
        description:
          "RAG su norme tecniche, capitolati e alberi di revisione. Il retrieval tiene conto delle versioni: la risposta si riferisce alla revisione valida alla data del progetto. Ogni risposta cita la fonte ed è tracciabile. Pensata per i contesti di responsabilità professionale, dove una clausola sbagliata ha conseguenze reali.",
        badges: ["ISO/UNI", "Capitolati", "Controllo revisioni", "RAG tracciabile"],
      },
      {
        title: "Finanza e servizi regolati",
        description:
          "Sistemi RAG e agenti per banche, asset manager e assicurazioni, con la governance come vincolo di partenza e non come funzione aggiunta alla fine. Approval gate umani, audit trail a prova di manomissione, RBAC con segregazione tra front office, risk e compliance, registrazione di ogni chiamata al modello. Controlli mappati sulla resilienza operativa DORA, sulla tracciabilità delle decisioni MiFID II e sugli obblighi AI Act per i sistemi ad alto rischio. Residenza dei dati in UE, nessun lock-in da hyperscaler.",
        badges: ["DORA", "MiFID II", "Audit trail", "Human-in-the-loop", "RBAC"],
      },
      {
        title: "B2B enterprise",
        description:
          "Copilot interno sui dati ERP, automazione dei flussi aziendali, integrazione event-driven con i sistemi legacy.",
        badges: ["Dynamics 365", "LLM", "Event-Driven"],
      },
      {
        title: "Settori regolati",
        description:
          "Infrastruttura progettata sui requisiti dell’AI Act: residenza dei dati in UE, audit trail a prova di manomissione, generazione su modello locale o su endpoint UE sostituibile.",
        badges: ["AI Act", "Residenza dati UE", "Controlli ISO 27001 mappati"],
      },
    ],
  },
  proof: {
    eyebrow: "Prove",
    title: "In produzione",
    cards: [
      {
        sector: "Distribuzione farmaceutica",
        title: "Federfarma Lombarda",
        summary:
          "Assistente sui documenti regolatori per le farmacie di Milano, Lodi e Monza Brianza. Indicizzazione, retrieval, identità e audit girano in locale; i dati personali non vengono mai indicizzati.",
        metrics: ["1.000+ farmacie", "10.000+ documenti vettorializzati", "~2.000 interrogazioni al giorno"],
        href: "/it/case-studies/federfarma",
        linkLabel: "Leggi il case study →",
      },
      {
        sector: "Sanità · pro bono",
        title: "CureSicure",
        summary:
          "Legge i dati pubblici degli ospedali (PNE-AGENAS, SDO/NSIS, open data del Ministero della Salute) e, data una patologia, aiuta il paziente a trovare le strutture che misurano meglio per qualità ed efficienza.",
        metrics: ["Solo dati pubblici", "Nessun tracciamento degli utenti, per scelta"],
        href: "/it/case-studies/curesicure",
        linkLabel: "Leggi il case study →",
      },
      {
        sector: "Modernizzazione legacy",
        title: "IATP",
        summary:
          "Reverse engineering assistito dall’AI di una piattaforma legacy: il retrieval sul codice, su Nexus, genera i documenti di analisi.",
        metrics: ["Documenti generati con RAG", "Orchestrazione DevOps con MCP"],
        href: "/it/case-studies/iatp",
        linkLabel: "Leggi il case study →",
      },
    ],
    pilot: {
      label: "In sviluppo · pilota controllato",
      cards: [
        {
          sector: "Assistenza agli anziani",
          title: "HumanIA Care",
          summary:
            "Assistente AI domestico per anziani, caregiver e RSA: voce, memoria e retrieval ancorati a conoscenze verificate. Un pilota controllato, non ancora in rollout pubblico.",
          metrics: ["Latenza di risposta p99 < 800 ms", "Dati personali anonimizzati all’acquisizione"],
          href: "/it/case-studies/humania-care",
          linkLabel: "Leggi il case study →",
        },
      ],
    },
  },
  delivery: {
    eyebrow: "Come si consegna",
    title: "Una piattaforma dentro un incarico, non una licenza",
    body: [
      <>
        Nexus MDS Core si installa di norma dentro un incarico più ampio che copre architettura AI,{" "}
        <Link href="/it/consulenza-ai-governance-compliance" className={link}>
          consulenza di governance e compliance
        </Link>{" "}
        ed esercizio in ambito regolato. L’ordine conta: prima si stabilisce quali obblighi
        raggiungono il sistema e quale componente se ne fa carico, poi la topologia del deployment.
      </>,
      <>
        La parte regolatoria di quel lavoro si appoggia sul{" "}
        <Link href="/cepf" className={link}>
          Compliance-Epistemic Project Framework (CEPF)
        </Link>{" "}
        e su{" "}
        <Link href="/calibra" className={link}>
          Calibra
        </Link>
        , il software costruito sopra CEPF: strumenti distinti dalla piattaforma. Nexus esegue il
        carico di lavoro, Calibra governa il programma.
      </>,
      <>
        Di solito si comincia dall’{" "}
        <Link href="/it/assessment" className={link}>
          assessment di esposizione
        </Link>
        : un incarico a perimetro fisso che stabilisce di cosa rispondi prima di costruire qualsiasi
        cosa.
      </>,
    ],
  },
  graph: {
    eyebrow: "Sotto il cofano",
    title: "Mappa dei servizi",
    intro:
      "Il percorso delle richieste così come è installato. Clicca un nodo per centrarlo ed esplorarne le connessioni; ogni arco indica protocollo e direzione del flusso. Non sono disegnati i servizi di supporto (etcd, la dashboard del gateway, autoheal, un agente operativo interno). HyperLog riceve solo i log operativi del gateway, senza prompt né risposte: l’audit delle chiamate al modello resta dentro il perimetro. Le etichette della mappa sono in inglese.",
  },
  controls: {
    label: "Controlli mappati — nessuna certificazione dichiarata",
    badges: [
      "Controlli mappati sul GDPR",
      "Controlli mappati sull’AI Act",
      "Controlli mappati su ISO/IEC 27001:2022",
      "Residenza dei dati in UE",
    ],
    note: "I controlli mappati descrivono come l’architettura risponde a ciascun requisito. La conformità la stabilisce la valutazione prevista da ciascun regolamento; per Nexus MDS Core non è stata ottenuta alcuna certificazione.",
  },
  cta: {
    title: "Guarda Nexus in funzione",
    subtitle:
      "Una dimostrazione su un deployment in produzione: Docker su un singolo server, tutti i servizi attivi, registro di audit compreso.",
    label: "Richiedi una demo →",
    href: "/it/contatti",
    secondary: { label: "Assessment di esposizione →", href: "/it/assessment" },
  },
};

const GOVERNANCE_ICONS = [Shield, CheckCircle2, Lock, EyeOff];

export function NexusPlatformBody({ locale = "en" }: { locale?: "en" | "it" }) {
  const c = locale === "it" ? IT : EN;

  return (
    <>
      <PlatformHero {...c.hero} />

      {/* Governance built once, reused everywhere */}
      <section className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader
              eyebrow={c.governance.eyebrow}
              title={c.governance.title}
              subtitle={c.governance.subtitle}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {c.governance.items.map((item, i) => {
              const Icon = GOVERNANCE_ICONS[i];
              return (
                <div
                  key={item.title}
                  className="bg-[#0D1117] border border-[#30363D] rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(0,180,216,0.08)] border border-[rgba(0,180,216,0.2)] flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#00B4D8]" />
                    </div>
                    <div>
                      <h3 className="font-dm font-semibold text-[#E6EDF3] text-sm leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[#7D8FA3] text-xs font-mono mt-0.5">{item.tech}</p>
                    </div>
                  </div>
                  <p className="text-[#7D8FA3] text-sm leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.governance.steps.map((step, i) => (
              <div
                key={step.label}
                className={`rounded-xl p-6 border ${
                  i === 0 ? "border-[#30363D] bg-[#0D1117]" : "border-[#00B4D8] bg-[#0D1117]"
                }`}
              >
                <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3">
                  {String(i + 1).padStart(2, "0")} · {step.label}
                </p>
                <p className="text-[#7D8FA3] text-base leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison with the typical SaaS delivery model */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeader eyebrow={c.comparison.eyebrow} title={c.comparison.title} />
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#30363D]">
            <table className="w-full min-w-[640px] text-left text-sm border-collapse">
              <caption className="caption-bottom text-[#7D8FA3] text-xs text-left px-6 py-4 border-t border-[#30363D]">
                {c.comparison.note}
              </caption>
              <thead className="bg-[#161B22]">
                <tr>
                  {c.comparison.columns.map((col, i) => (
                    <th
                      key={i}
                      scope="col"
                      className={`px-6 py-4 font-dm font-semibold align-bottom ${
                        i === 1 ? "text-[#00B4D8]" : "text-[#E6EDF3]"
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.comparison.rows.map((row) => (
                  <tr key={row.aspect} className="border-t border-[#30363D] align-top">
                    <th
                      scope="row"
                      className="px-6 py-5 font-dm font-semibold text-[#E6EDF3] w-[22%]"
                    >
                      {row.aspect}
                    </th>
                    <td className="px-6 py-5 text-[#E6EDF3]/90 leading-relaxed">{row.nexus}</td>
                    <td className="px-6 py-5 text-[#7D8FA3] leading-relaxed">{row.saas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Model optionality */}
      <section className="py-20 md:py-28 bg-[#0D1117] border-t border-[#30363D]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={c.models.eyebrow} title={c.models.title} />
          <div className="mt-6 text-[#7D8FA3] text-lg leading-relaxed space-y-4">
            {c.models.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment matrix */}
      <section className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader eyebrow={c.deployment.eyebrow} title={c.deployment.title} />
          </div>
          {[
            { label: c.deployment.whereLabel, items: c.deployment.where, cols: "md:grid-cols-3" },
            { label: c.deployment.generationLabel, items: c.deployment.generation, cols: "md:grid-cols-2" },
          ].map((group) => (
            <div key={group.label} className="mb-10">
              <p className="text-[#7D8FA3] text-xs font-mono uppercase tracking-[0.15em] mb-4">
                {group.label}
              </p>
              <div className={`grid grid-cols-1 ${group.cols} gap-6`}>
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#0D1117] border border-[#30363D] rounded-xl p-6"
                  >
                    <h3 className="font-dm font-bold text-[#E6EDF3] text-lg mb-3">{item.title}</h3>
                    <p className="text-[#7D8FA3] text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-[#7D8FA3] text-sm">{c.deployment.note}</p>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader eyebrow={c.useCases.eyebrow} title={c.useCases.title} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.useCases.items.map((uc) => (
              <div
                key={uc.title}
                className="bg-[#161B22] border border-[#30363D] rounded-xl p-6"
              >
                <h3 className="font-dm font-bold text-[#E6EDF3] text-lg mb-3">{uc.title}</h3>
                <p className="text-[#7D8FA3] text-sm leading-relaxed mb-4">{uc.description}</p>
                <div className="flex flex-wrap gap-2">
                  {uc.badges.map((b) => (
                    <TechBadge key={b} label={b} variant="cyan" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader eyebrow={c.proof.eyebrow} title={c.proof.title} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.proof.cards.map((card) => (
              <CaseStudyCard key={card.title} {...card} />
            ))}
          </div>
          <p className="text-[#7D8FA3] text-xs font-mono uppercase tracking-[0.15em] mt-12 mb-4">
            {c.proof.pilot.label}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.proof.pilot.cards.map((card) => (
              <CaseStudyCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Where the platform sits inside an engagement */}
      <section className="py-20 md:py-28 bg-[#0D1117] border-t border-[#30363D]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3">
            {c.delivery.eyebrow}
          </p>
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
            {c.delivery.title}
          </h2>
          <div className="text-[#7D8FA3] text-lg leading-relaxed space-y-4">
            {c.delivery.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Under the hood: the components, as evidence */}
      <PlatformFeatureGrid locale={locale} />

      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeader eyebrow={c.graph.eyebrow} title={c.graph.title} />
            <p className="text-[#7D8FA3] text-sm mt-3 max-w-2xl">{c.graph.intro}</p>
          </div>
          <NexusGraphExplorer />
        </div>
      </section>

      <section className="py-12 bg-[#0D1117] border-t border-[#30363D]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#7D8FA3] text-xs font-mono uppercase tracking-[0.15em] mb-6 text-center">
            {c.controls.label}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {c.controls.badges.map((b) => (
              <TechBadge key={b} label={b} variant="cyan" />
            ))}
          </div>
          <p className="text-[#7D8FA3] text-xs text-center max-w-2xl mx-auto mt-6 leading-relaxed">
            {c.controls.note}
          </p>
        </div>
      </section>

      <CTASection
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        ctaLabel={c.cta.label}
        ctaHref={c.cta.href}
        secondary={c.cta.secondary}
      />
    </>
  );
}
