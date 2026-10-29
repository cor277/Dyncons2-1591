import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";
import { ServicePageLayout, type Capability } from "@/components/sections/ServicePageLayout";

const PATH = "/it/servizi/data-platform";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;

export const metadata: Metadata = {
  title: "Data platform e architettura RAG",
  description:
    "Data lakehouse con Apache Iceberg, virtualizzazione dei dati con Dremio e pipeline RAG su Weaviate. Integrazione event-driven con Dynamics 365. Zero-ETL per i settori regolamentati.",
  keywords: ["data lakehouse", "Apache Iceberg", "virtualizzazione dati Dremio", "Weaviate RAG", "modernizzazione dati Dynamics 365", "Zero-ETL"],
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "Data platform e architettura RAG",
    description: "Data lakehouse ACID, Zero-ETL, pipeline RAG pronte per la produzione.",
    url: PAGE_URL,
    locale: "it_IT",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "it",
  mainEntity: [
    {
      "@type": "Question",
      name: "Che cos'è lo Zero-ETL e quando ha senso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zero-ETL significa interrogare i dati direttamente alla fonte tramite virtualizzazione (Dremio, Teiid) invece di copiarli in un data warehouse. Ha senso quando i dati cambiano spesso, lo storage costa o la latenza della replica non è accettabile. Non è adatto ad analisi pesanti su volumi molto grandi.",
      },
    },
    {
      "@type": "Question",
      name: "Come si esporta Dynamics 365 F&O in un data lake moderno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il percorso consigliato è: Synapse Link per l'export incrementale da D365 F&O, poi una pipeline n8n o Azure Data Factory per la trasformazione, poi Apache Iceberg come formato di storage con transazioni ACID. Così hai analisi in tempo reale senza pesare sulle prestazioni dell'ERP.",
      },
    },
  ],
};

const capabilities: Capability[] = [
  {
    iconName: "Database",
    name: "Data lakehouse ACID",
    desc: "Pipeline da Dynamics 365 F&O a Synapse Link ad Apache Iceberg. Transazioni ACID sul data lake, time travel, evoluzione dello schema.",
  },
  {
    iconName: "Layers",
    name: "Virtualizzazione Zero-ETL",
    desc: "Dremio e Teiid per interrogare fonti eterogenee senza spostare i dati. Query federate su Dynamics, PostgreSQL e S3 in un'unica vista.",
  },
  {
    iconName: "Zap",
    name: "ERP event-driven",
    desc: "Azure Event Grid e n8n: Dynamics 365 passa da silo passivo a motore di eventi in tempo reale. Reazione immediata agli eventi di creazione, modifica e cancellazione.",
  },
  {
    iconName: "Search",
    name: "Pipeline RAG completa",
    desc: "Ingestione, chunking semantico, embedding, Weaviate, retrieval, LLM. Pronta per la produzione, con deduplicazione e paginazione a cursore su larga scala.",
  },
  {
    iconName: "Layout",
    name: "Amministrazione dati low-code",
    desc: "Budibase e Weaviate: interfacce di amministrazione sul database vettoriale con paginazione a cursore su dataset oltre i 10.000 record. Nessun codice su misura.",
  },
  {
    iconName: "GitBranch",
    name: "Pattern data hub",
    desc: "Directus come data hub via API, con Budibase come livello di interfaccia e automazione. Trigger a livello applicativo invece che a livello di database, per la massima flessibilità.",
  },
];

const tech = ["Apache Iceberg", "Weaviate", "Dremio", "Teiid", "PostgreSQL", "EventStoreDB", "MinIO", "n8n", "Azure Event Grid", "Directus", "Budibase"];

const faqs = [
  {
    q: "Che cos'è lo Zero-ETL e quando ha senso?",
    a: "Zero-ETL significa interrogare i dati direttamente alla fonte tramite virtualizzazione (Dremio, Teiid) invece di copiarli in un data warehouse. Ha senso quando i dati cambiano spesso, lo storage costa o la latenza della replica non è accettabile.",
  },
  {
    q: "Come si esporta Dynamics 365 F&O in un data lake moderno?",
    a: "Il percorso consigliato: Synapse Link per l'export incrementale da D365 F&O, poi n8n o Azure Data Factory per la trasformazione, poi Apache Iceberg come formato di storage con transazioni ACID. Analisi in tempo reale senza pesare sulle prestazioni dell'ERP.",
  },
];

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Competenze tecniche", path: "/it/competenze" },
  { name: "Data platform moderne e RAG" },
]);

export default function DataPlatformPage() {
  return (
    <ServicePageLayout
      locale="it"
      title="Data platform moderne e RAG"
      intro="Dai silos dell'ERP a un motore di eventi. Data lakehouse ACID. Zero-ETL."
      tech={tech}
      capabilities={capabilities}
      faqs={faqs}
      ctaTitle="Parliamo del tuo progetto"
      ctaSubtitle="Un'infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Scrivici."
      faqSchema={faqSchema}
      breadcrumbSchema={crumbs}
    />
  );
}
