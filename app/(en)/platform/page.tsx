import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n-routes";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { ORG_ID, NEXUS_ID } from "@/app/schema-org";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { NexusPlatformBody } from "@/components/sections/NexusPlatformBody";

const EN_URL = "https://www.dynamicsconsulting.it/platform";
const IT_URL = "https://www.dynamicsconsulting.it/it/piattaforma-nexus";
const TITLE = "Nexus MDS Core — the AI layer that stays inside your perimeter";
const DESCRIPTION =
  "Indexing, retrieval, identity and audit inside your perimeter; every model call recorded in a hash-chained audit log you can verify; generation on a local model or a replaceable EU endpoint. Governance set up once, so each new use case costs less.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/platform"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: EN_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: TWITTER_IMAGE,
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
