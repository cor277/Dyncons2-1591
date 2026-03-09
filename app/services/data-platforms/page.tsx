import type { Metadata } from "next";
import { ServicePageLayout, type Capability } from "@/components/sections/ServicePageLayout";

export const metadata: Metadata = {
  title: "Modern Data Platforms & RAG Architecture | Dynamics Consulting",
  description: "Data lakehouse with Apache Iceberg, Dremio data virtualisation, and Weaviate RAG pipelines. Event-driven Dynamics 365 integration. Zero-ETL for regulated industries.",
  keywords: ["data lakehouse", "Apache Iceberg", "Dremio data virtualization", "Weaviate RAG", "Dynamics 365 data modernization", "Zero-ETL"],
  alternates: { canonical: "https://www.dynamicsconsulting.it/services/data-platforms" },
  openGraph: {
    title: "Modern Data Platforms & RAG | Dynamics Consulting",
    description: "ACID data lakehouse, Zero-ETL, production-ready RAG pipelines.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Zero-ETL and when does it make sense?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zero-ETL means querying data directly at the source via data virtualisation (Dremio, Teiid) instead of copying it into a warehouse. It makes sense when data changes frequently, storage is costly, or replication latency is unacceptable. It is not suitable for heavy analytics on very large volumes.",
      },
    },
    {
      "@type": "Question",
      name: "How do you export Dynamics 365 F&O to a modern data lake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The recommended path is: Synapse Link for incremental export from D365 F&O, then an n8n or Azure Data Factory pipeline for transformation, then Apache Iceberg as the storage format with ACID transactions. This enables real-time analytics without impacting ERP performance.",
      },
    },
  ],
};

const capabilities: Capability[] = [
  {
    iconName: "Database",
    name: "ACID Data Lakehouse",
    desc: "Dynamics 365 F&O pipeline to Synapse Link to Apache Iceberg. ACID transactions on the data lake, time travel, schema evolution.",
  },
  {
    iconName: "Layers",
    name: "Zero-ETL Virtualisation",
    desc: "Dremio and Teiid to query heterogeneous sources without moving data. Federated queries across Dynamics, PostgreSQL, and S3 in a single view.",
  },
  {
    iconName: "Zap",
    name: "Event-Driven ERP",
    desc: "Azure Event Grid and n8n: Dynamics 365 transitions from passive silo to real-time event engine. Instant reaction to create, update, and delete events.",
  },
  {
    iconName: "Search",
    name: "Full RAG Pipeline",
    desc: "Ingestion, semantic chunking, embedding, Weaviate, retrieval, LLM. Production-ready with deduplication and cursor pagination at scale.",
  },
  {
    iconName: "Layout",
    name: "Low-Code Data Admin",
    desc: "Budibase and Weaviate: administrative interfaces on vector DB with cursor-based pagination on datasets exceeding 10,000 records. No custom code.",
  },
  {
    iconName: "GitBranch",
    name: "Data Hub Pattern",
    desc: "Directus as API data hub with Budibase as the UI and automation layer. Application-level triggers versus database triggers for maximum flexibility.",
  },
];

const tech = ["Apache Iceberg", "Weaviate", "Dremio", "Teiid", "PostgreSQL", "EventStoreDB", "MinIO", "n8n", "Azure Event Grid", "Directus", "Budibase"];

const faqs = [
  {
    q: "What is Zero-ETL and when does it make sense?",
    a: "Zero-ETL means querying data directly at the source via data virtualisation (Dremio, Teiid) instead of copying it into a warehouse. It makes sense when data changes frequently, storage is costly, or replication latency is unacceptable.",
  },
  {
    q: "How do you export Dynamics 365 F&O to a modern data lake?",
    a: "The recommended path: Synapse Link for incremental export from D365 F&O, then n8n or Azure Data Factory for transformation, then Apache Iceberg as the storage format with ACID transactions. Real-time analytics without impacting ERP performance.",
  },
];

export default function DataPlatformsPage() {
  return (
    <ServicePageLayout
      title="Modern Data Platforms & RAG"
      intro="From ERP silos to an event engine. ACID data lakehouse. Zero-ETL."
      tech={tech}
      capabilities={capabilities}
      faqs={faqs}
      faqSchema={faqSchema}
    />
  );
}
