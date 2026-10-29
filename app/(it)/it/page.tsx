import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";
import { TextLink } from "@/components/ui/TextLink";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { NexusBanner } from "@/components/sections/NexusBanner";
import { SovereigntyStrip } from "@/components/sections/SovereigntyStrip";
import { CepfBanner } from "@/components/sections/CepfBanner";
import { EditorialSeriesSection } from "@/components/sections/EditorialSeriesSection";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { Stats } from "@/components/sections/Stats";
import { BookCallout } from "@/components/sections/BookCallout";
import { CTASection } from "@/components/sections/CTASection";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { DigitalTwinSection } from "@/components/sections/DigitalTwinSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

const PATH = "/it";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;
const TITLE = "AI sovrana, governance e compliance dell’AI | Dynamics Consulting";
const DESCRIPTION =
  "Consulenza, architettura, governance e compliance AI per i settori regolamentati in Italia e nell’UE. Progettiamo e mettiamo in esercizio sistemi AI sovrani e on-premise: Nexus MDS Core, controlli GDPR mappati, progettato sui requisiti di AI Act e PLD 2024.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "it_IT",
  },
};

const caseStudies = [
  {
    sector: "Logistica / RFID / AI",
    title: "LogiTrack — Tracciabilità RFID e AI",
    summary:
      "Piattaforma cloud-native che unisce RFID UHF per il tracciamento di magazzino e produzione e NFC per l’autenticazione post-vendita. Rilevamento delle anomalie con AI, certificazione su blockchain, integrazione con SAP e Power Platform.",
    metrics: ["99,5% di errori di spedizione in meno", "Inventari 20× più rapidi", "Tracciabilità end-to-end"],
    href: "/it/case-studies/logitrack",
  },
  {
    sector: "Farmaceutico / Sanità",
    title: "Federfarma Lombarda",
    summary:
      "Pipeline RAG su oltre 10.000 documenti farmaceutici per più di 1.000 farmacie. PWA Budibase, Keycloak Zero-Trust, inferenza locale, generazione esterna sostituibile. Interamente su Nexus MDS Core.",
    metrics: ["1.000+ farmacie", "10.000+ documenti vettorizzati", "Sovrana per architettura"],
    href: "/it/case-studies/federfarma",
  },
  {
    sector: "Energia / CRM",
    title: "Sorgenia — Dynamics Marketing",
    summary:
      "Implementazione di Dynamics 365 Marketing per Sorgenia, operatore italiano dell’energia. Orchestrazione dei customer journey e automazione delle campagne su larga scala.",
    metrics: ["200k+ contatti gestiti", "D365 Marketing", "Journey multicanale"],
    href: "/it/case-studies/sorgenia",
  },
  {
    sector: "FMCG / Programma enterprise",
    title: "Nespresso Intervallo — ATOS",
    summary:
      "Programma su più stream fra Dynamics F&O, backend custom e frontend IoT. Una delivery di circa 40 persone gestita su tre stream di lavoro paralleli.",
    metrics: ["~40 persone gestite", "3 stream paralleli", "F&O + IoT + backend"],
    href: "/it/case-studies/nespresso",
  },
  {
    sector: "Modernizzazione legacy / Sviluppo con AI",
    title: "IATP — Reverse engineering guidato dall’AI",
    summary:
      "Reverse engineering con AI di una piattaforma legacy tramite RAG su Nexus, documenti di analisi generati in automatico e una pipeline di sviluppo interamente guidata dall’AI con Antigravity, Trae, server MCP e test con Comet.",
    metrics: ["Reverse engineering con RAG", "Pipeline DevOps con MCP", "Test guidati dall’AI"],
    href: "/it/case-studies/iatp",
  },
  {
    sector: "Sanità / AI applicata",
    title: "HumanIA Care — AI companion per anziani",
    summary:
      "Architettura di AI companion per pazienti anziani, pensata per un deployment privacy-first negli ambienti di cura regolamentati. Costruita su Nexus MDS Core.",
    metrics: ["RAG multi-agente + voce", "On-premise, controlli GDPR mappati", "Su Nexus MDS Core"],
    href: "/it/case-studies/humania-care",
  },
  {
    sector: "Manifattura / ERP",
    title: "Modernizzazione dei dati Dynamics 365",
    summary:
      "Dai silos dell’ERP a un data lakehouse ACID. Da Synapse Link ad Apache Iceberg. Zero-ETL. Event-driven.",
    metrics: ["4 sedi unificate", "Lakehouse ACID", "Zero-ETL in esercizio"],
    href: "/it/case-studies/dynamics-data",
  },
  {
    sector: "Multisettore / CRM",
    title: "Implementazioni Dynamics CRM",
    summary:
      "Diversi rollout di Dynamics 365 Sales e Customer Service per banche, assicurazioni e clienti industriali, fra cui Banca Mediolanum, Unipol e illimity.",
    metrics: ["5+ rollout CRM", "Banche e assicurazioni", "Scala enterprise"],
    href: "/it/case-studies/dynamics-crm",
  },
];

/**
 * Every Italian page, reachable from the Italian home: the sections and their
 * indexes, plus the pages that sit at the top level (/fractional-cto-milano,
 * /modernizzazione-sistemi-legacy-ai, /sovereign-ai-pharma-italia,
 * /cra-11-settembre) and would otherwise have no Italian entry point. Paths are
 * the Italian side of ROUTE_PAIRS and IT_ONLY_PATHS in lib/i18n-routes.ts;
 * single case studies, answers and articles are reached through their indexes.
 */
type Resource = { href: string; title: string; blurb: string };

const RESOURCE_GROUPS: { heading: string; items: Resource[] }[] = [
  {
    heading: "Consulenza e servizi",
    items: [
      {
        href: "/it/consulenza-ai-governance-compliance",
        title: "Consulenza AI, governance e compliance",
        blurb:
          "Analisi normativa, disegno della governance e architettura per chi introduce AI in un settore regolamentato. AI Act, GDPR, PLD 2024, NIS2, DORA.",
      },
      {
        href: "/it/servizi/fractional-cto",
        title: "Fractional AI CTO",
        blurb:
          "Autorità architetturale, governance dell’AI, valutazione dei fornitori e guida del programma con un mandato part-time, per imprese europee in settori regolati.",
      },
      {
        href: "/fractional-cto-milano",
        title: "Fractional CTO a Milano",
        blurb:
          "Governance AI, architettura cloud, modernizzazione legacy, team enablement per PMI e mid-market.",
      },
      {
        href: "/it/normativa",
        title: "Normativa: AI, dati e sicurezza",
        blurb:
          "AI Act, Legge 132/2025 e decreti attuativi, GDPR, PLD, CRA, NIS2, DORA e le altre norme: cosa chiedono, da quando, a chi. Una pagina per legge.",
      },
      {
        href: "/it/assessment",
        title: "Assessment di esposizione",
        blurb:
          "PLD 2024 e AI Act: tre giornate per stabilire dove si ferma la responsabilità del fornitore e dove comincia la tua.",
      },
      {
        href: "/it/competenze",
        title: "Competenze tecniche",
        blurb:
          "L’ingegneria sotto le linee di servizio. Competenze, non offerte separate: l’indice delle pagine qui sotto.",
      },
      {
        href: "/it/servizi/ai-applicata",
        title: "AI applicata e workflow agentici",
        blurb: "Sistemi multi-agente, pipeline RAG, Voice AI e governance dell’AI.",
      },
      {
        href: "/it/servizi/data-platform",
        title: "Data platform e architettura RAG",
        blurb:
          "Lakehouse con Apache Iceberg, virtualizzazione dei dati con Dremio, pipeline RAG su Weaviate. Zero-ETL.",
      },
      {
        href: "/it/servizi/cloud-kubernetes",
        title: "Architettura cloud e Kubernetes",
        blurb:
          "Cluster Kubernetes CPU/GPU, API Gateway in ottica Zero-Trust, deployment di LLM self-hosted.",
      },
      {
        href: "/it/servizi/integrazione-enterprise",
        title: "Integrazione enterprise e modernizzazione",
        blurb: "Migrazione da ESB, event sourcing, microservizi, modernizzazione dei sistemi legacy.",
      },
      {
        href: "/it/servizi/microsoft-dynamics",
        title: "Microsoft Dynamics 365",
        blurb:
          "Finance & Operations, Sales, Customer Engagement e Power Platform: implementazione, personalizzazione, supporto.",
      },
      {
        href: "/it/servizi/automazione",
        title: "Automazione intelligente",
        blurb: "RPA, process mining e automazione potenziata dall’AI.",
      },
      {
        href: "/it/servizi/blockchain",
        title: "Blockchain e Web3",
        blurb: "Smart contract, tokenizzazione e tracciabilità della filiera.",
      },
      {
        href: "/modernizzazione-sistemi-legacy-ai",
        title: "Modernizzazione di sistemi legacy",
        blurb:
          "Reverse engineering assistito da AI per capire, documentare e riscrivere sistemi che nessuno mantiene più.",
      },
    ],
  },
  {
    heading: "Piattaforma e metodologia",
    items: [
      {
        href: "/it/piattaforma-nexus",
        title: "Nexus MDS Core — la piattaforma",
        blurb:
          "Governance dell’AI costruita una volta ed ereditata da ogni caso d’uso: identità, approvazioni, audit di ogni chiamata al modello. Dati nel tuo perimetro.",
      },
      {
        href: "/it/cepf",
        title: "Compliance-Epistemic Project Framework (CEPF)",
        blurb:
          "La nostra metodologia di compliance: i regimi normativi mappati sugli obblighi operativi che producono.",
      },
      {
        href: "/it/calibra",
        title: "Calibra",
        blurb:
          "Il software costruito su CEPF: catalogo normativo, rischio, pianificazione, flusso operativo.",
      },
      {
        href: "/it/sovranita-tecnologica",
        title: "Cloud and AI Development Act (CADA)",
        blurb:
          "La proposta del 3 giugno 2026 e i suoi quattro livelli di garanzia dell’Unione per i servizi cloud.",
      },
    ],
  },
  {
    heading: "Per settore",
    items: [
      {
        href: "/it/sovereign-ai-italia",
        title: "Sovereign AI Italia",
        blurb:
          "Cosa significa AI sovrana nel quadro normativo italiano ed europeo — AI Act, GDPR, NIS2, Legge 132/2025 — e perché per il mid-market è un requisito.",
      },
      {
        href: "/it/ai-sanitaria-on-premise",
        title: "Sanità",
        blurb:
          "Infrastruttura AI on-premise per ospedali, farmacie e aziende sanitarie. GDPR, AI Act, Legge 132/2025.",
      },
      {
        href: "/it/consulenza-ai-farmaceutico",
        title: "Farmaceutico",
        blurb:
          "RAG su documenti regolatori e workflow agentici per il pharma mid-market. Alternativa sovrana agli hyperscaler.",
      },
      {
        href: "/sovereign-ai-pharma-italia",
        title: "AI sovrana per il pharma italiano",
        blurb:
          "Il caso della sovranità del dato nel farmaceutico: perché la residenza dei dati, che nessuna norma impone, resta il modo più diretto di dimostrare il controllo.",
      },
      {
        href: "/it/ai-agenti-finanziari",
        title: "Finanza e compliance",
        blurb:
          "Governance degli agenti AI per banche e asset manager: approval gate, audit log a prova di manomissione, RBAC. DORA, MiFID II.",
      },
      {
        href: "/it/ai-ingegneria-tecnica",
        title: "Ingegneria e norme tecniche",
        blurb:
          "RAG su ISO, UNI, EN, capitolati e revisioni. Risposte citate con norma e revisione corretta, tracciabili.",
      },
      {
        href: "/it/ai-dati-aziendali",
        title: "PMI — AI sui dati aziendali",
        blurb:
          "Percorso strutturato: discovery, MVP RAG, validazione. On-premise, senza dipendenza cloud.",
      },
    ],
  },
  {
    heading: "Case study, risposte e ricerca",
    items: [
      {
        href: "/it/case-studies",
        title: "Case study",
        blurb: "Tutti i progetti, da Federfarma Lombarda a LogiTrack, con le metriche di ciascuno.",
      },
      {
        href: "/it/risposte",
        title: "Risposte",
        blurb:
          "Le domande che ci vengono fatte davvero su AI sovrana, RAG e AI Act, ognuna risolta nel primo paragrafo.",
      },
      {
        href: "/it/ricerca",
        title: "Ricerca e approfondimenti",
        blurb:
          "Analisi e ricerca originale su AI sovrana, infrastruttura on-premise, architetture RAG, modernizzazione enterprise.",
      },
      {
        href: "/it/ricerca/serie-editoriale",
        title: "Serie editoriale — PLD 2024",
        blurb:
          "Dieci articoli sulla direttiva sulla responsabilità da prodotto 2024 e sulla governance dell’AI, per software house e professionisti tecnici.",
      },
      {
        href: "/cra-11-settembre",
        title: "Cyber Resilience Act, articolo 14",
        blurb:
          "Dall’11 settembre 2026, ventiquattro ore per segnalare una vulnerabilità attivamente sfruttata. Il test in tre domande.",
      },
    ],
  },
  {
    heading: "Lo studio",
    items: [
      {
        href: "/it/chi-siamo",
        title: "Chi siamo",
        blurb:
          "Uno studio italiano indipendente di consulenza e ingegneria AI, guidato da Corrado Patierno.",
      },
      {
        href: "/it/contatti",
        title: "Contatti",
        blurb: "Scrivici per parlare del tuo progetto.",
      },
      {
        href: "/it/privacy",
        title: "Informativa privacy",
        blurb: "Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.",
      },
    ],
  },
];

function ResourceCard({ href, title, blurb }: Resource) {
  return (
    <li>
      <Link
        href={href}
        className="group block h-full rounded-lg border border-[#21262D] bg-[#11161D] p-6 transition-colors duration-200 hover:border-[#00B4D8]"
      >
        <h4 className="font-syne text-lg font-bold text-[#E6EDF3] mb-2 group-hover:text-[#00B4D8] transition-colors">
          {title}
        </h4>
        <p className="text-[#7D8FA3] text-sm leading-relaxed">{blurb}</p>
      </Link>
    </li>
  );
}

export default function ItalianHomePage() {
  return (
    <>
      <NavBar />
      <main>
      {/* Section 1 — Hero */}
      <Hero locale="it" />
      {/* Section 1b — EU Tech Sovereignty Package strip */}
      <SovereigntyStrip locale="it" />
      {/* Section 2 — 3 Pillars */}
      <PillarsSection locale="it" />
      {/* Section 3 — Nexus MDS Banner */}
      <NexusBanner locale="it" />
      {/* Section 3b — CEPF Methodology */}
      <CepfBanner locale="it" />
      {/* Section 4 — Services Grid */}
      <ServicesSection locale="it" />
      {/* Section 5 — Digital Twin */}
      <DigitalTwinSection locale="it" />
      {/* Section 6 — Case Studies Preview */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <SectionHeader
              eyebrow="Progetti reali"
              title="Case study"
              subtitle="Problemi complessi. Soluzioni concrete. Metriche reali."
            />
            <TextLink label="Tutti i case study →" href="/it/case-studies" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.title} {...cs} linkLabel="Leggi il case study →" />
            ))}
          </div>
        </div>
      </section>
      {/* Section 6 — Clients Strip */}
      <ClientStrip />
      {/* Section 7 — Stats */}
      <Stats locale="it" />
      {/* Section 7b — Editorial Series */}
      <EditorialSeriesSection />
      {/* Section 8 — Book Callout */}
      <BookCallout locale="it" />
      {/* Section 9 — Final CTA */}
      <CTASection
        title="Dove si ferma la responsabilità del tuo fornitore, e dove comincia la tua?"
        subtitle="La direttiva europea sulla responsabilità da prodotto include il software fra i prodotti e si applica a quelli immessi sul mercato o messi in servizio dal 9 dicembre 2026. L’assessment di esposizione stabilisce, per la tua organizzazione, dove passa il confine."
        ctaLabel="Assessment di esposizione →"
        ctaHref="/it/assessment"
      />
      {/* Section 10 — Every Italian page */}
      <section className="py-20 md:py-28 bg-[#161B22] border-t border-[#30363D]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Indice"
              title="Tutte le risorse in italiano"
              subtitle="Le sezioni del sito e i loro indici, tutti in italiano."
            />
          </div>
          {RESOURCE_GROUPS.map((g) => (
            <div key={g.heading} className="mb-12 last:mb-0">
              <h3 className="font-syne text-xl md:text-2xl font-extrabold text-[#E6EDF3] mb-6">
                {g.heading}
              </h3>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((r) => (
                  <ResourceCard key={r.href} {...r} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
