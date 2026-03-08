import type { Metadata } from "next";
import { ServicePageLayout, type Capability } from "@/components/sections/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cloud & Kubernetes Architecture | Dynamics Consulting",
  description:
    "Cluster Kubernetes CPU/GPU su AKS, GCP, Hetzner. API Gateway APISIX con Zero-Trust. Serverless AI con OpenWhisk. Self-hosted LLM deployment.",
  keywords: [
    "Kubernetes architect",
    "GPU cluster AI",
    "APISIX API gateway",
    "serverless AI",
    "self-hosted LLM",
    "Zero-Trust Kubernetes",
  ],
  alternates: {
    canonical: "https://www.dynamicsconsulting.it/services/cloud-kubernetes",
  },
  openGraph: {
    title: "Cloud & Kubernetes Architecture | Dynamics Consulting",
    description: "Infrastrutture AI-ready. GPU orchestration. Zero-Trust by default.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Come si deploya un LLM su Kubernetes in modo sicuro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il deployment sicuro di un LLM su Kubernetes richiede: namespace isolati, network policies, autenticazione OIDC via Keycloak, rate-limiting a livello APISIX e GPU node pool dedicato. Nexus MDS Core implementa questo stack in configurazione single-command.",
      },
    },
    {
      "@type": "Question",
      name: "Qual è la differenza tra AKS, GCP GKE e Hetzner per AI workloads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AKS e GKE offrono integrazione nativa con servizi cloud (storage, IAM, monitoring) ma a costi elevati per GPU. Hetzner bare-metal offre GPU H100/A100 a costi 3-5x inferiori ma richiede gestione infrastruttura. La scelta dipende da budget, compliance (EU data residency) e capacità operative del team.",
      },
    },
  ],
};

const capabilities: Capability[] = [
  {
    iconName: "Server",
    name: "GPU Orchestration",
    desc: "Cluster Kubernetes con runtime custom per AI workloads su AKS, GCP e Hetzner bare-metal. Sizing ottimizzato per LLM inference.",
  },
  {
    iconName: "Shield",
    name: "API Gateway APISIX",
    desc: "Plugin JWT, rate-limiting per chiamate LLM, routing multi-tenant, CORS gestito a livello gateway. Layer di sicurezza prima del codice.",
  },
  {
    iconName: "Zap",
    name: "Serverless AI",
    desc: "Apache OpenWhisk su Kubernetes per workload AI intermittenti: scale-to-zero, GPU tasks, image processing, inferenza batch.",
  },
  {
    iconName: "Package",
    name: "Full Stack Deploy",
    desc: "Redis, RabbitMQ, MinIO, Grafana, Velero, Airflow, n8n — stack completo orchestrato con CI/CD multi-ambiente.",
  },
  {
    iconName: "Lock",
    name: "Zero-Trust Security",
    desc: "Keycloak + APISIX come security layer integrato. Nessun servizio esposto senza autenticazione. Adatto a dati sanitari e finanziari.",
  },
  {
    iconName: "RefreshCw",
    name: "Disaster Recovery",
    desc: "Velero per backup automatico Kubernetes. Strategie multi-region su cloud EU per business continuity.",
  },
];

const tech = [
  "Kubernetes",
  "APISIX",
  "Keycloak",
  "AKS",
  "GCP",
  "Hetzner",
  "OpenWhisk",
  "vLLM",
  "Velero",
  "Grafana",
];

const faqs = [
  {
    q: "Come si deploya un LLM su Kubernetes in modo sicuro?",
    a: "Il deployment sicuro di un LLM su Kubernetes richiede: namespace isolati, network policies, autenticazione OIDC via Keycloak, rate-limiting a livello APISIX e GPU node pool dedicato. Nexus MDS Core implementa questo stack in configurazione single-command.",
  },
  {
    q: "Qual è la differenza tra AKS, GCP GKE e Hetzner per AI workloads?",
    a: "AKS e GKE offrono integrazione nativa con servizi cloud (storage, IAM, monitoring) ma a costi elevati per GPU. Hetzner bare-metal offre GPU H100/A100 a costi 3-5x inferiori ma richiede gestione infrastruttura. La scelta dipende da budget, compliance (EU data residency) e capacità operative del team.",
  },
];

export default function CloudKubernetesPage() {
  return (
    <ServicePageLayout
      title="Cloud & Kubernetes Architecture"
      intro="Infrastrutture AI-ready. GPU orchestration. Zero-Trust by default."
      tech={tech}
      capabilities={capabilities}
      faqs={faqs}
      faqSchema={faqSchema}
    />
  );
}
