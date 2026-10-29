import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n-routes";
import { breadcrumbSchema, faqSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { OG_IMAGE } from "@/app/og";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { TechBadge } from "@/components/ui/TechBadge";

const URL = "https://www.dynamicsconsulting.it/capabilities";

export const metadata: Metadata = {
  title: "Technical capabilities",
  description:
    "The engineering underneath the service lines: applied AI and agentic workflows, data platforms and RAG, cloud and Kubernetes, enterprise integration, process automation. Competences, not separate offerings.",
  alternates: alternatesFor("/capabilities"),
  openGraph: {
    images: OG_IMAGE,
    title: "Technical capabilities | Dynamics Consulting",
    description:
      "The engineering underneath the service lines: applied AI, data platforms and RAG, cloud and Kubernetes, enterprise integration, process automation.",
    url: URL,
    type: "website",
    locale: "en_US",
  },
};

interface Area {
  /** Anchor; the retired /services/<x> pages redirect here. */
  id: string;
  title: string;
  lead: string;
  points: string[];
  tech: string[];
  faqs: { q: string; a: string }[];
  links?: { label: string; href: string }[];
}

const areas: Area[] = [
  {
    id: "applied-ai",
    title: "Applied AI & agentic workflows",
    lead: "Dynamics Consulting does not promise generic AI. It designs multi-agent systems with memory, orchestration and governance built in, and retrieval that cites its sources.",
    points: [
      "Multi-agent systems with layered short- and long-term memory; automatic summarisation after 10 interactions keeps long conversations within the model’s context window.",
      "RAG pipelines with semantic chunking, vector deduplication and Weaviate cursor-based pagination on datasets beyond 10,000 documents. On technical standards, retrieval is version-aware: it knows which revision applies to a given project date, cites norm, article and revision, and logs every response.",
      "Agent governance for audit and four-eyes requirements: human-in-the-loop approval gates before any write action, tamper-evident audit trails with configurable retention, RBAC separating front office, risk, compliance and IT, and every LLM call logged with input, output, model version and timestamp. Controls mapped to DORA, MiFID II, the AI Act and GDPR.",
      "Privacy-first NLU: a real-time classifier for sensitive data and selective memory deletion on request, designed to GDPR requirements.",
      "Real-time voice: STT/TTS with interruption handling that tells a human voice from ambient noise, target latency under 200 ms.",
      "AI for developers and documents: Roslyn + LLM for unit-test generation, documentation agents, AI-in-Coding workshops; data room analysis, structured extraction from unstructured documents, automated due diligence.",
    ],
    tech: ["LLM", "Weaviate", "n8n", "vLLM", "Flutter", "Keycloak", "OpenWebUI", "FastAPI", "transformers"],
    faqs: [
      {
        q: "We have data everywhere and no structure — where do we actually start?",
        a: "With a 2-week discovery sprint: inventory what data exists, where it lives, what format it is in and what quality it is. Then define the business questions that need answering. Only then build the retrieval layer — a bounded RAG MVP on a defined corpus, validated with real users before further investment.",
      },
      {
        q: "What is the difference between RAG and fine-tuning for enterprise data?",
        a: "RAG lets you query enterprise documents without modifying the base model, with real-time updates and source traceability. Fine-tuning requires labelled datasets, long training cycles and dedicated GPUs. For enterprise data that evolves continuously, RAG is almost always the right choice.",
      },
    ],
    links: [
      { label: "AI for technical standards and engineering", href: "/ai-technical-standards" },
      { label: "AI agents for finance and compliance", href: "/ai-agents-finance" },
    ],
  },
  {
    id: "data-platforms",
    title: "Data platforms & RAG",
    lead: "From ERP silos to an event engine: ACID lakehouses, Zero-ETL virtualisation, and vector and relational stores side by side.",
    points: [
      "ACID data lakehouse: Dynamics 365 F&O to Synapse Link to Apache Iceberg, with time travel and schema evolution.",
      "Zero-ETL virtualisation with Dremio and Teiid: federated queries across Dynamics, PostgreSQL and S3 in a single view, without moving data.",
      "Event-driven ERP: Azure Event Grid and n8n turn Dynamics 365 from a passive silo into a real-time event engine reacting to create, update and delete events.",
      "Full RAG pipeline — ingestion, semantic chunking, embedding, Weaviate, retrieval, LLM — with deduplication and cursor pagination at scale.",
      "Low-code data administration: Budibase on Weaviate with cursor-based pagination beyond 10,000 records; Directus as API data hub with Budibase as UI and automation layer, application-level triggers rather than database triggers.",
    ],
    tech: ["Apache Iceberg", "Weaviate", "Dremio", "Teiid", "PostgreSQL", "EventStoreDB", "MinIO", "n8n", "Azure Event Grid", "Directus", "Budibase"],
    faqs: [
      {
        q: "What is Zero-ETL and when does it make sense?",
        a: "Zero-ETL means querying data directly at the source via data virtualisation (Dremio, Teiid) instead of copying it into a warehouse. It makes sense when data changes frequently, storage is costly, or replication latency is unacceptable.",
      },
      {
        q: "How do you export Dynamics 365 F&O to a modern data lake?",
        a: "The recommended path: Synapse Link for incremental export from D365 F&O, then n8n or Azure Data Factory for transformation, then Apache Iceberg as the storage format with ACID transactions. Real-time analytics without impacting ERP performance.",
      },
    ],
    links: [{ label: "The lakehouse is not enough", href: "/research/lakehouse-not-enough" }],
  },
  {
    id: "cloud-kubernetes",
    title: "Cloud & Kubernetes architecture",
    lead: "AI-ready infrastructure: GPU orchestration, self-hosted inference, Zero-Trust by default.",
    points: [
      "GPU orchestration: Kubernetes clusters with a custom runtime for AI workloads on AKS, GCP and Hetzner bare-metal, sized for LLM inference.",
      "APISIX gateway: JWT plugins, rate limiting on LLM calls, multi-tenant routing and CORS handled at gateway level — the security layer comes before the code.",
      "Zero-Trust: Keycloak and APISIX as one security layer; no service exposed without authentication.",
      "Serverless AI with Apache OpenWhisk on Kubernetes for intermittent workloads: scale-to-zero, GPU tasks, image processing, batch inference.",
      "Full stack — Redis, RabbitMQ, MinIO, Grafana, Velero, Airflow, n8n — with multi-environment CI/CD; Velero backups and multi-region strategies on EU cloud for continuity.",
    ],
    tech: ["Kubernetes", "APISIX", "Keycloak", "AKS", "GCP", "Hetzner", "OpenWhisk", "vLLM", "Velero", "Grafana"],
    faqs: [
      {
        q: "How do you securely deploy an LLM on Kubernetes?",
        a: "Isolated namespaces, network policies, OIDC authentication via Keycloak, rate limiting at APISIX level and a dedicated GPU node pool. Nexus MDS Core ships the identity and gateway layer of this stack — Keycloak, APISIX rate limiting, an isolated service network — with a single setup script on Docker; moved to Kubernetes, the same services add namespaces and network policies.",
      },
      {
        q: "AKS, GKE or Hetzner for AI workloads?",
        a: "AKS and GKE integrate natively with cloud services (storage, IAM, monitoring) but at high GPU costs. Hetzner bare-metal offers H100/A100 GPUs at lower prices but the infrastructure has to be managed. The choice depends on budget, EU data residency and the team’s operational capacity.",
      },
    ],
  },
  {
    id: "enterprise-integration",
    title: "Enterprise integration & modernisation",
    lead: "Complex integrations, legacy modernisation and event-driven architectures for organisations that cannot afford to stop and rebuild.",
    points: [
      "ESB and middleware migration from Talend ESB, BizTalk, MuleSoft and Karaf to lightweight modern stacks: the patterns are kept, the architecture is modernised.",
      "Event sourcing with EventStoreDB and Kafka: immutable audit logs, temporal queries, event replay, and selective projection deletion for GDPR erasure requests.",
      "Legacy modernisation by incremental strangler-fig migration, with AI-assisted reverse engineering of the codebase and automated documentation.",
      "APISIX as a sovereign API gateway for on-premise and hybrid deployments: rate limiting, JWT validation, CORS, plugin architecture.",
      "Self-hosted n8n for workflow automation, document ingestion pipelines and human-in-the-loop AI orchestration with a full audit trail.",
    ],
    tech: ["n8n", "APISIX", "Talend ESB", "EventStoreDB", "Kafka", "Azure Logic Apps", "Dynamics 365", "RabbitMQ"],
    faqs: [
      {
        q: "When does it make sense to replace a legacy ESB rather than extend it?",
        a: "When maintenance cost exceeds the cost of migration, when the ESB is a delivery bottleneck, or when it cannot support event-driven patterns. Dynamics Consulting evaluates both paths before recommending either.",
      },
      {
        q: "Can Dynamics 365 be integrated with on-premise systems without Azure?",
        a: "Yes. Dynamics Consulting uses self-hosted middleware (n8n, APISIX, custom connectors) to bridge Dynamics 365 with on-premise systems, avoiding dependency on Azure PaaS services.",
      },
    ],
    links: [
      { label: "Legacy modernisation with AI", href: "/legacy-modernisation-ai" },
      { label: "Event sourcing in practice", href: "/research/event-sourcing" },
    ],
  },
  {
    id: "automation",
    title: "Process automation",
    lead: "RPA, process mining and AI combined to remove repetitive work, with a return measured on each process rather than promised in advance.",
    points: [
      "Process mining on existing event logs (Celonis) to find the high-volume, high-error, high-cost processes, then score candidates on feasibility and ROI.",
      "RPA bots on UiPath and Power Automate for data entry, reconciliation and reporting, at UI or API level — APIs preferred where they exist.",
      "Intelligent document processing: extraction, classification and validation of invoices, contracts, forms and emails, handling the variability rules-based OCR cannot.",
      "Decision automation and orchestration: models embedded in approval routing and forecasting; Camunda and Airflow for multi-step processes across people and systems, with audit trails.",
      "Operations: exception handling, alerting and monitoring so the automation estate stays reliable as systems change.",
    ],
    tech: ["UiPath", "Power Automate", "Automation Anywhere", "Blue Prism", "Celonis", "Camunda BPM", "Python", "Azure Document Intelligence", "Google Document AI", "Apache Airflow", "n8n", "Zapier"],
    faqs: [
      {
        q: "How do you identify which processes to automate first?",
        a: "Dynamics Consulting starts with process mining on existing logs to identify high-volume, high-error and high-cost processes objectively, then scores candidates on automation feasibility and ROI to build a prioritised roadmap.",
      },
      {
        q: "Do automations require changes to existing systems?",
        a: "Not usually. Bots interact at the UI or API layer, so no system modifications are needed. Where APIs exist Dynamics Consulting prefers them for reliability, but systems with no API at all can be automated too.",
      },
    ],
  },
];

const crumbs = breadcrumbSchema(URL, [
  { name: "Home", path: "/" },
  { name: "Technical capabilities" },
]);

const faq = faqSchema(
  URL,
  areas.flatMap((a) => a.faqs),
);

const linkClass = "text-[#00B4D8] hover:text-[#E6EDF3] underline";

export default function CapabilitiesPage() {
  return (
    <>
      <JsonLd data={[crumbs, faq]} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Engineering
            </p>
            <h1 className="font-syne text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Technical capabilities
            </h1>
            <p className="text-lg text-[#7D8FA3] leading-relaxed">
              These are competences, not separate offerings. They are the engineering the three
              service lines — governance advisory, fractional CTO, and the sovereign AI platform —
              are built on, and they are listed here so that what a project actually requires is
              visible rather than implied.
            </p>
          </div>
        </section>

        <section className="px-6 pt-12">
          <nav
            aria-label="On this page"
            className="max-w-3xl mx-auto border border-[#30363D] rounded-xl bg-[#161B22] p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#00B4D8] mb-4">
              On this page
            </h2>
            <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-base list-decimal list-inside marker:text-[#7D8FA3]">
              {areas.map((a) => (
                <li key={a.id}>
                  <a href={`#${a.id}`} className="text-[#00B4D8] hover:text-[#E6EDF3]">
                    {a.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#dynamics-365" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  ERP and CRM integration
                </a>
              </li>
            </ol>
          </nav>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-14">
            {areas.map((a) => (
              <div
                key={a.id}
                className="border-b border-[#21262D] pb-14 last:border-none last:pb-0"
              >
                <h2
                  id={a.id}
                  className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4"
                >
                  {a.title}
                </h2>
                <p className="text-[#7D8FA3] leading-relaxed text-lg mb-5">{a.lead}</p>
                <ul className="list-disc pl-5 space-y-2 text-[#7D8FA3] leading-relaxed marker:text-[#30363D] mb-6">
                  {a.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-8">
                  {a.tech.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
                <dl className="space-y-5">
                  {a.faqs.map((f) => (
                    <div key={f.q}>
                      <dt className="font-semibold text-[#E6EDF3] mb-1">{f.q}</dt>
                      <dd className="text-[#7D8FA3] leading-relaxed">{f.a}</dd>
                    </div>
                  ))}
                </dl>
                {a.links && (
                  <p className="mt-6 text-[#7D8FA3]">
                    Related:{" "}
                    {a.links.map((l, i) => (
                      <span key={l.href}>
                        {i > 0 && " · "}
                        <Link href={l.href} className={linkClass}>
                          {l.label}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto border-t border-[#30363D] pt-10 space-y-6 text-[#7D8FA3] leading-relaxed">
            <div>
              <h2 id="dynamics-365" className="scroll-mt-24 text-xl font-bold text-[#E6EDF3] mb-2">
                ERP and CRM integration, Dynamics 365 included
              </h2>
              <p>
                Bidirectional connectors to Dynamics 365 CE and F&amp;O, and Synapse Link export to a
                lakehouse, are part of the integration and data work above. Earlier programmes:{" "}
                <Link href="/case-studies/dynamics-data" className={linkClass}>
                  Dynamics 365 F&amp;O and data platform
                </Link>
                ,{" "}
                <Link href="/case-studies/dynamics-crm" className={linkClass}>
                  Dynamics 365 CRM
                </Link>
                ,{" "}
                <Link href="/case-studies/sorgenia" className={linkClass}>
                  Sorgenia — Dynamics 365 Marketing
                </Link>
                .
              </p>
            </div>
            <p id="blockchain" className="scroll-mt-24 text-base">
              Blockchain is retained as an engineering competence from earlier work (Solidity on
              Polygon, event-sourced services) and used only where a ledger shared between parties
              is actually needed — as in the authenticity certification of{" "}
              <Link href="/case-studies/logitrack" className={linkClass}>
                LogiTrack
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#7D8FA3] text-base">
              Looking for the service lines instead?{" "}
              <Link href="/#services" className={linkClass}>
                They are on the homepage
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
