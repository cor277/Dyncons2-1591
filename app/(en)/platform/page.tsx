import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { OG_IMAGE } from "@/app/og";
import { ORG_ID, NEXUS_ID } from "@/app/schema-org";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { NexusPlatformBody } from "@/components/sections/NexusPlatformBody";

export const metadata: Metadata = {
  title: "Nexus MDS Core — On-Premise AI Platform",
  description:
    "Self-hosted enterprise AI platform: local LLM inference, RAG pipeline, Zero-Trust auth, agent governance and audit. GDPR controls mapped, architected for AI Act requirements.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/platform" },
  openGraph: {
    images: OG_IMAGE,
    title: "Nexus MDS Core — On-Premise AI Platform",
    description:
      "Self-hosted enterprise AI platform: local LLM inference, RAG pipeline, Zero-Trust auth, agent governance and audit. GDPR controls mapped, architected for AI Act requirements.",
  },
};

/**
 * Same @id as the Nexus node in app/schema-org.ts, so the two merge instead of
 * describing the platform twice. The shared node carries name and description;
 * the version and feature list belong here, on the platform's own page.
 */
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": NEXUS_ID,
  name: "Nexus MDS Core",
  version: "2.0",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Linux (Docker Compose; Kubernetes when scale requires it)",
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
  creator: { "@id": ORG_ID },
  featureList: [
    "Local LLM inference with llama.cpp and Open WebUI",
    "Generation on a local model or a replaceable EU endpoint",
    "Zero-Trust Auth with Keycloak OIDC/PKCE and APISIX",
    "Vector search and RAG with Weaviate, local embeddings and Apache Tika",
    "Workflow automation with n8n and Apache Hop",
    "Enterprise storage with MinIO S3, PostgreSQL and Dremio",
    "Hash-chained audit log of every model call",
    "On-device personal-data redaction",
  ],
};

const crumbs = breadcrumbSchema("https://www.dynamicsconsulting.it/platform", [
  { name: "Home", path: "/" },
  { name: "Nexus MDS Core" },
]);

export default function PlatformPage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <NavBar />
      <main>
        <NexusPlatformBody />
      </main>
      <Footer />
    </>
  );
}
