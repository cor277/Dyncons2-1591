"use client";
import { motion } from "framer-motion";
import { Cpu, Shield, Search, GitBranch, Database, Activity, Lock } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  NEXUS_SERVICE_COUNT,
  NEXUS_SNAPSHOT_EN,
  NEXUS_SNAPSHOT_IT,
  NEXUS_INFERENCE_EN,
  NEXUS_INFERENCE_IT,
} from "@/lib/nexus";

const featuresEn = [
  {
    icon: Cpu,
    title: "AI Inference",
    tech: "llama.cpp, Nexus UI (Open WebUI), GPU auto-detect",
    description:
      "Local model server for open-weight models, Qwen by default; a larger GPU takes a larger model. Generation runs here, fully local, or on a replaceable EU endpoint, chosen per workload. Every call passes the gateway and is logged.",
  },
  {
    icon: Shield,
    title: "Zero-Trust Auth",
    tech: "Keycloak OIDC/PKCE, APISIX, JWT",
    description:
      "Single sign-on through Keycloak for users and applications; OIDC at the gateway for the workflow and storage consoles, JWT on webhooks. The open-source editions of a few admin consoles use basic auth or IP restriction; their enterprise editions bring them under OIDC when required.",
  },
  {
    icon: Search,
    title: "Vector Search & RAG",
    tech: "Weaviate, bge-m3 embeddings, Apache Tika",
    description:
      "Production RAG pipeline on enterprise documents: text extraction with an OCR fallback, embeddings computed locally, vector search. Cursor-based pagination on datasets with >10,000 documents.",
  },
  {
    icon: GitBranch,
    title: "Workflow Engine",
    tech: "n8n (queue mode), Apache Hop",
    description:
      "Process orchestration with LLM decision-making, from deterministic automation to agentic flows, with batch ETL alongside.",
  },
  {
    icon: Database,
    title: "Enterprise Storage",
    tech: "MinIO S3, PostgreSQL + pgvector, Dremio, SQL Server",
    description:
      "S3-compatible object storage, a shared Postgres with vector extension, federated queries on heterogeneous sources, data integration with ERP and legacy databases.",
  },
  {
    icon: Activity,
    title: "Observability",
    tech: "Healthchecks, autoheal, pg-backup",
    description:
      "Health-checked services restarted automatically when they fail, email alerts on disk and gateway, scheduled database backups with 7 daily / 4 weekly / 6 monthly retention.",
  },
  {
    icon: Lock,
    title: "Agent Governance",
    tech: "Keycloak RBAC, n8n approval steps, hash-chained audit log, privacy filter",
    description:
      "Human approval steps before agent write actions, built into the workflow. Every model call, local or external, logged at the gateway: encrypted, hash-chained records whose integrity can be verified on demand, archived monthly with configurable retention. Personal data detected and redacted on-device before it reaches a model. Role-based access with domain segregation. Controls mapped to DORA operational resilience and AI Act high-risk obligations.",
  },
];

/* Same seven blocks, same order, written in Italian rather than translated. */
const featuresIt = [
  {
    icon: Cpu,
    title: "Inferenza AI",
    tech: "llama.cpp, Nexus UI (Open WebUI), GPU rilevata in automatico",
    description:
      "Server locale per modelli open-weight, Qwen di default; con una GPU più grande gira un modello più grande. La generazione avviene qui, interamente in locale, oppure su un endpoint UE sostituibile, a scelta per ogni carico di lavoro. Ogni chiamata passa dal gateway ed è registrata.",
  },
  {
    icon: Shield,
    title: "Autenticazione Zero-Trust",
    tech: "Keycloak OIDC/PKCE, APISIX, JWT",
    description:
      "Single sign-on con Keycloak per utenti e applicazioni; OIDC al gateway per le console di workflow e storage, JWT sui webhook. Le edizioni open source di alcune console di amministrazione usano basic auth o restrizione per IP; le edizioni enterprise le portano sotto OIDC quando serve.",
  },
  {
    icon: Search,
    title: "Ricerca vettoriale e RAG",
    tech: "Weaviate, embedding bge-m3, Apache Tika",
    description:
      "Pipeline RAG in produzione su documenti aziendali: estrazione del testo con OCR di riserva, embedding calcolati in locale, ricerca vettoriale. Paginazione a cursore su raccolte con oltre 10.000 documenti.",
  },
  {
    icon: GitBranch,
    title: "Motore di workflow",
    tech: "n8n (queue mode), Apache Hop",
    description:
      "Orchestrazione dei processi con decisioni affidate al modello, dall'automazione deterministica ai flussi agentici, con l'ETL batch accanto.",
  },
  {
    icon: Database,
    title: "Storage enterprise",
    tech: "MinIO S3, PostgreSQL + pgvector, Dremio, SQL Server",
    description:
      "Object storage compatibile S3, un Postgres condiviso con estensione vettoriale, query federate su sorgenti eterogenee, integrazione dati con ERP e database legacy.",
  },
  {
    icon: Activity,
    title: "Osservabilità",
    tech: "Healthcheck, autoheal, pg-backup",
    description:
      "Servizi con healthcheck riavviati automaticamente quando cadono, avvisi email su disco e gateway, backup programmati del database con conservazione di 7 giornalieri, 4 settimanali e 6 mensili.",
  },
  {
    icon: Lock,
    title: "Governance degli agenti",
    tech: "Keycloak RBAC, approvazioni in n8n, audit log concatenato, filtro privacy",
    description:
      "Passaggi di approvazione umana prima delle azioni di scrittura degli agenti, costruiti nel workflow. Ogni chiamata al modello, locale o esterna, registrata al gateway: record cifrati e concatenati, con integrità verificabile su richiesta, archiviati ogni mese con conservazione configurabile. Dati personali riconosciuti e oscurati in locale prima che arrivino a un modello. Accessi per ruolo con segregazione per dominio. Controlli mappati sulla resilienza operativa DORA e sugli obblighi AI Act per i sistemi ad alto rischio.",
  },
];

export function PlatformFeatureGrid({
  locale = "en",
  eyebrow,
}: {
  locale?: "en" | "it";
  eyebrow?: string;
}) {
  const it = locale === "it";
  const features = it ? featuresIt : featuresEn;
  const title = it
    ? `${NEXUS_SERVICE_COUNT} servizi containerizzati`
    : `${NEXUS_SERVICE_COUNT} containerised services`;
  const subtitle = it
    ? `${NEXUS_INFERENCE_IT} Conteggio dei servizi a ${NEXUS_SNAPSHOT_IT}.`
    : `${NEXUS_INFERENCE_EN} Service count as of ${NEXUS_SNAPSHOT_EN}.`;
  return (
    <section className="py-20 md:py-28 bg-[#161B22]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow={eyebrow ?? (it ? "Sotto il cofano" : "Under the hood")}
            title={title}
            subtitle={subtitle}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-[#0D1117] border border-[#30363D] rounded-xl p-6 hover:border-[#00B4D8] transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,180,216,0.08)] border border-[rgba(0,180,216,0.2)] flex items-center justify-center flex-shrink-0">
                  <f.icon size={20} className="text-[#00B4D8]" />
                </div>
                <div>
                  <h3 className="font-dm font-semibold text-[#E6EDF3] text-sm leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-[#7D8FA3] text-xs font-mono mt-0.5">{f.tech}</p>
                </div>
              </div>
              <p className="text-[#7D8FA3] text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
