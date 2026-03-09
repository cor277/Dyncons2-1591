import type { Metadata } from "next";
import { ServicePageLayout, type Capability } from "@/components/sections/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cloud & Kubernetes Architecture | Dynamics Consulting",
  description:
    "Kubernetes CPU/GPU clusters on AKS, GCP, Hetzner. APISIX API Gateway with Zero-Trust. Serverless AI with OpenWhisk. Self-hosted LLM deployment.",
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
    description: "AI-ready infrastructure. GPU orchestration. Zero-Trust by default.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you securely deploy an LLM on Kubernetes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Secure LLM deployment on Kubernetes requires: isolated namespaces, network policies, OIDC authentication via Keycloak, rate-limiting at APISIX level, and a dedicated GPU node pool. Nexus MDS Core implements this stack in a single-command configuration.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between AKS, GCP GKE, and Hetzner for AI workloads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AKS and GKE offer native integration with cloud services (storage, IAM, monitoring) but at high GPU costs. Hetzner bare-metal offers H100/A100 GPUs at 3-5x lower costs but requires infrastructure management. The choice depends on budget, compliance (EU data residency), and team operational capacity.",
      },
    },
  ],
};

const capabilities: Capability[] = [
  {
    iconName: "Server",
    name: "GPU Orchestration",
    desc: "Kubernetes cluster with custom runtime for AI workloads on AKS, GCP, and Hetzner bare-metal. Sizing optimized for LLM inference.",
  },
  {
    iconName: "Shield",
    name: "API Gateway APISIX",
    desc: "JWT plugins, rate-limiting for LLM calls, multi-tenant routing, CORS managed at gateway level. Security layer before code.",
  },
  {
    iconName: "Zap",
    name: "Serverless AI",
    desc: "Apache OpenWhisk on Kubernetes for intermittent AI workloads: scale-to-zero, GPU tasks, image processing, batch inference.",
  },
  {
    iconName: "Package",
    name: "Full Stack Deploy",
    desc: "Redis, RabbitMQ, MinIO, Grafana, Velero, Airflow, n8n — complete stack orchestrated with multi-environment CI/CD.",
  },
  {
    iconName: "Lock",
    name: "Zero-Trust Security",
    desc: "Keycloak + APISIX as integrated security layer. No service exposed without authentication. Suitable for healthcare and financial data.",
  },
  {
    iconName: "RefreshCw",
    name: "Disaster Recovery",
    desc: "Velero for automatic Kubernetes backup. Multi-region strategies on EU cloud for business continuity.",
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
    q: "How do you securely deploy an LLM on Kubernetes?",
    a: "Secure LLM deployment on Kubernetes requires: isolated namespaces, network policies, OIDC authentication via Keycloak, rate-limiting at APISIX level, and a dedicated GPU node pool. Nexus MDS Core implements this stack in a single-command configuration.",
  },
  {
    q: "What is the difference between AKS, GCP GKE, and Hetzner for AI workloads?",
    a: "AKS and GKE offer native integration with cloud services (storage, IAM, monitoring) but at high GPU costs. Hetzner bare-metal offers H100/A100 GPUs at 3-5x lower costs but requires infrastructure management. The choice depends on budget, compliance (EU data residency), and team operational capacity.",
  },
];

export default function CloudKubernetesPage() {
  return (
    <ServicePageLayout
      title="Cloud & Kubernetes Architecture"
      intro="AI-ready infrastructure. GPU orchestration. Zero-Trust by default."
      tech={tech}
      capabilities={capabilities}
      faqs={faqs}
      faqSchema={faqSchema}
    />
  );
}
