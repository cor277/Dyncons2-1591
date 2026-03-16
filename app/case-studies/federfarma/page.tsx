import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Federfarma Lombardia — AI RAG Platform on Nexus MDS Core | Case Study",
  description:
    "RAG pipeline on pharmaceutical documents for 1,000+ pharmacies. Zero-Trust auth with Keycloak, Budibase PWA, Weaviate vector search, on-premise LLM. Built entirely on Nexus MDS Core.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/case-studies/federfarma" },
};

const tech = [
  "Nexus MDS Core",
  "Weaviate",
  "Keycloak OIDC/PKCE",
  "APISIX",
  "Budibase",
  "n8n",
  "PostgreSQL + pgvector",
  "Apache Tika",
  "Local LLM (llama.cpp)",
  "MinIO",
  "Dremio",
  "Redis",
  "Directus",
  "RabbitMQ",
  "Docker",
];

export default function FederfarmaCaseStudy() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/case-studies"
              className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
            >
              ← All case studies
            </Link>
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Pharmaceutical · Healthcare · Sovereign AI
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              AI RAG platform for Federfarma Lombardia — built entirely on Nexus MDS Core
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Federfarma Lombardia needed an intelligent platform to make thousands of pharmaceutical
              documents searchable and actionable for over 1,000 pharmacies across Lombardy — with
              full data sovereignty, Zero-Trust authentication, and mobile access. We built it
              entirely on Nexus MDS Core, self-hosted, with zero cloud dependency.
            </p>
          </div>
        </section>

        {/* Metrics bar */}
        <section className="border-b border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1,000+", label: "Pharmacies served" },
              { value: "10,000+", label: "Documents vectorised" },
              { value: "Zero-Trust", label: "Keycloak OIDC/PKCE" },
              { value: "PWA", label: "Mobile-ready via Budibase" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#E6EDF3]">{m.value}</div>
                <div className="text-xs md:text-sm text-[#7D8FA3] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Body */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10 text-[#7D8FA3] leading-relaxed text-lg">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The challenge</h2>
              <p>
                Federfarma Lombardia represents over 1,000 pharmacies across the Lombardy region.
                Their operational reality involved thousands of pharmaceutical documents — regulatory
                updates, clinical guidelines, product information sheets, compliance notices — spread
                across disconnected systems with no unified search or retrieval capability. Pharmacists
                had no efficient way to query this knowledge base, particularly from mobile devices
                during daily operations.
              </p>
              <p className="mt-4">
                The regulatory context added hard constraints: all data had to remain on Italian
                infrastructure, authentication had to meet healthcare-grade security standards, and
                the platform could not depend on external cloud AI services. A sovereign, on-premise
                solution was the only viable path.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">What we built</h2>
              <p>
                The entire platform runs on <strong className="text-[#E6EDF3]">Nexus MDS Core</strong> —
                our self-hosted AI infrastructure stack composed of orchestrated Docker services, deployed
                on-premise with zero cloud dependency.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Document ingestion and RAG pipeline:</strong> Over
                10,000 pharmaceutical documents are ingested through Apache Tika for OCR and text
                extraction, then vectorised and stored in Weaviate for semantic search. A local LLM
                running on llama.cpp provides the inference layer, meaning no data ever leaves the
                organisation&apos;s perimeter. n8n orchestrates the entire ingestion and processing
                pipeline with agentic workflows.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">AI-driven document obsolescence engine:</strong> A
                critical differentiator of this platform is the automated obsolescence detection system.
                When a new document is ingested, the AI analyses its content against the existing corpus
                and identifies which previous documents it supersedes — regulatory updates that replace
                older guidelines, revised product sheets that obsolete prior versions, new compliance
                notices that invalidate previous ones. Superseded documents are automatically marked as
                obsolete, generating a complete obsolescence graph that traces the lineage of every
                document. By default, all RAG queries return results exclusively from current,
                non-obsolete documents — ensuring pharmacists always work with up-to-date information.
                Specific queries against historical or obsolete documents remain available when needed.
                The entire process is fully automated, powered by the Nexus AI pipeline.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Application layer:</strong> The user-facing
                application is built on Budibase — a low-code platform running inside the Nexus stack.
                Pharmacists access the platform through a Progressive Web App (PWA) that works on
                any device, with responsive design optimised for mobile use during daily operations.
                Directus serves as the headless CMS for managing structured content alongside the
                RAG-powered document search.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Zero-Trust authentication:</strong> Keycloak
                provides OIDC/PKCE authentication with SSO across all platform services — Budibase,
                Directus, n8n, and the AI interface. APISIX acts as the API gateway with route-level
                authentication enforcement. Every request is authenticated and authorised before
                reaching any backend service.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Data infrastructure:</strong> PostgreSQL with
                pgvector handles relational data and vector embeddings. MinIO provides S3-compatible
                object storage for documents and assets. Redis manages session caching and queue
                processing for n8n workers. Dremio serves as the analytical query engine for
                reporting and data exploration. RabbitMQ handles asynchronous message processing
                across services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Results</h2>
              <p>
                The platform is in production, serving over 1,000 pharmacies across Lombardy. More
                than 10,000 pharmaceutical documents have been vectorised and are searchable through
                natural language queries powered by the on-premise RAG pipeline. Pharmacists can
                access the system from any device through the Budibase PWA with Zero-Trust
                authentication.
              </p>
              <p className="mt-4">
                The entire deployment runs on a single on-premise server with no cloud dependency.
                All data — documents, vectors, user sessions, audit logs — stays within the
                organisation&apos;s infrastructure. The platform is fully GDPR-compliant by
                architecture, not by contract.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Technologies used</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
