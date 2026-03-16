"use client";
import { motion } from "framer-motion";
import { Cpu, Shield, Search, GitBranch, Database, Activity } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const features = [
  {
    icon: Cpu,
    title: "AI Inference",
    tech: "vLLM, OpenWebUI, GPU-ready",
    description:
      "Local LLMs in production, no data outside the perimeter. Open-source models (LLaMA, Mistral, DeepSeek) on dedicated GPU.",
  },
  {
    icon: Shield,
    title: "Zero-Trust Auth",
    tech: "Keycloak OIDC/PKCE, APISIX, JWT",
    description:
      "Enterprise authentication for every architecture layer. No service exposed without OIDC authentication.",
  },
  {
    icon: Search,
    title: "Vector Search & RAG",
    tech: "Weaviate, semantic chunking",
    description:
      "Production-ready RAG pipeline on enterprise documents. Cursor-based pagination on datasets with >10,000 documents.",
  },
  {
    icon: GitBranch,
    title: "Workflow Engine",
    tech: "n8n agentic, Airflow, Apache Hop",
    description:
      "Process orchestration with LLM decision-making. From deterministic automation to agentic orchestration.",
  },
  {
    icon: Database,
    title: "Enterprise Storage",
    tech: "MinIO S3, PostgreSQL, Dremio",
    description:
      "AWS S3-compatible storage, federated queries on heterogeneous sources, Zero-ETL data virtualization.",
  },
  {
    icon: Activity,
    title: "Observability",
    tech: "Grafana, Uptime Kuma, Velero",
    description:
      "Real-time monitoring, alerts, automated Kubernetes backup. Guaranteed SLAs with disaster recovery.",
  },
];

export function PlatformFeatureGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#161B22]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Architecture"
            title="~16 orchestrated services"
            subtitle="Every component is designed for GDPR-compliant and AI Act-ready environments. No public cloud dependencies."
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
