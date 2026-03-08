import type { Metadata } from "next";
import { ServicePageLayout, type Capability } from "@/components/sections/ServicePageLayout";

export const metadata: Metadata = {
  title: "Modern Data Platforms & RAG Architecture",
  description:
    "Data lakehouse con Apache Iceberg, virtualizzazione dati Dremio e Teiid, RAG pipeline su Weaviate. Integrazione Dynamics 365 event-driven con Azure Event Grid.",
  keywords: [
    "data lakehouse",
    "Apache Iceberg",
    "Dremio data virtualization",
    "Weaviate RAG",
    "Dynamics 365 data modernization",
    "Zero-ETL",
  ],
  alternates: {
    canonical: "https://www.dynamicsconsulting.it/services/data-platforms",
  },
  openGraph: {
    title: "Modern Data Platforms & RAG | Dynamics Consulting",
    description: "Data lakehouse ACID, Zero-ETL, RAG pipeline production-ready.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cos'è l'approccio Zero-ETL e quando conviene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zero-ETL significa interrogare i dati direttamente alla fonte tramite data virtualization (Dremio, Teiid) invece di copiarli in un warehouse. Conviene quando i dati cambiano frequentemente, lo storage è costoso o la latenza di replica è inaccettabile. Non è adatto per analytics pesanti su volumi enormi.",
      },
    },
    {
      "@type": "Question",
      name: "Come si esporta Dynamics 365 F&O verso un data lake moderno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il percorso consigliato è: Synapse Link per l'export incrementale da D365 F&O → pipeline n8n o Azure Data Factory per trasformazione → Apache Iceberg come formato di storage con ACID transactions. Questo permette analytics real-time senza impattare le performance dell'ERP.",
      },
    },
  ],
};

const capabilities: Capability[] = [
  {
    iconName: "Database",
    name: "Data Lakehouse ACID",
    desc: "Pipeline Dynamics 365 F&O → Synapse Link → Apache Iceberg. Transazionalità ACID sul data lake, time travel, schema evolution.",
  },
  {
    iconName: "Layers",
    name: "Zero-ETL Virtualization",
    desc: "Dremio e Teiid per interrogare sorgenti eterogenee senza spostare dati. Query federate su Dynamics, PostgreSQL, S3 in un'unica vista.",
  },
  {
    iconName: "Zap",
    name: "Event-Driven ERP",
    desc: "Azure Event Grid + n8n: Dynamics 365 da silos passivo a motore di eventi real-time. Reazione istantanea a create/update/delete.",
  },
  {
    iconName: "Search",
    name: "RAG Pipeline Completa",
    desc: "Ingestion → semantic chunking → embedding → Weaviate → retrieval → LLM. Production-ready con deduplication e cursor pagination su larga scala.",
  },
  {
    iconName: "Layout",
    name: "Low-Code Data Admin",
    desc: "Budibase + Weaviate: interfacce amministrative su vector DB con paginazione cursor-based su dataset >10,000 record. Senza codice custom.",
  },
  {
    iconName: "GitBranch",
    name: "Data Hub Pattern",
    desc: "Directus come API data hub + Budibase come layer UI/automazioni. Trigger consapevoli a livello applicazione vs database per massima flessibilità.",
  },
];

const tech = [
  "Apache Iceberg",
  "Weaviate",
  "Dremio",
  "Teiid",
  "PostgreSQL",
  "EventStoreDB",
  "MinIO",
  "n8n",
  "Azure Event Grid",
  "Directus",
  "Budibase",
];

const faqs = [
  {
    q: "Cos'è l'approccio Zero-ETL e quando conviene?",
    a: "Zero-ETL significa interrogare i dati direttamente alla fonte tramite data virtualization (Dremio, Teiid) invece di copiarli in un warehouse. Conviene quando i dati cambiano frequentemente, lo storage è costoso o la latenza di replica è inaccettabile. Non è adatto per analytics pesanti su volumi enormi.",
  },
  {
    q: "Come si esporta Dynamics 365 F&O verso un data lake moderno?",
    a: "Il percorso consigliato è: Synapse Link per l'export incrementale da D365 F&O → pipeline n8n o Azure Data Factory per trasformazione → Apache Iceberg come formato di storage con ACID transactions. Questo permette analytics real-time senza impattare le performance dell'ERP.",
  },
];

export default function DataPlatformsPage() {
  return (
    <ServicePageLayout
      title="Modern Data Platforms & RAG"
      intro="Da ERP silos a motore di eventi. Data lakehouse ACID. Zero-ETL."
      tech={tech}
      capabilities={capabilities}
      faqs={faqs}
      faqSchema={faqSchema}
    />
  );
}
