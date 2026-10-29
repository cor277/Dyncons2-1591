import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";
import { ServicePageLayout, type Capability } from "@/components/sections/ServicePageLayout";

const PATH = "/it/servizi/cloud-kubernetes";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;

export const metadata: Metadata = {
  title: "Architettura cloud e Kubernetes",
  description:
    "Cluster Kubernetes CPU/GPU su AKS, GCP e Hetzner. API Gateway APISIX in ottica Zero-Trust. AI serverless con OpenWhisk. Deployment di LLM self-hosted.",
  keywords: [
    "architetto Kubernetes",
    "cluster GPU per AI",
    "API gateway APISIX",
    "AI serverless",
    "LLM self-hosted",
    "Kubernetes Zero-Trust",
  ],
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "Architettura cloud e Kubernetes | Dynamics Consulting",
    description: "Infrastruttura pronta per l'AI. Orchestrazione delle GPU. Zero-Trust di default.",
    url: PAGE_URL,
    locale: "it_IT",
  },
};

const faqs = [
  {
    q: "Come si mette in produzione un LLM su Kubernetes in modo sicuro?",
    a: "Un deployment sicuro di un LLM su Kubernetes richiede: namespace isolati, network policy, autenticazione OIDC tramite Keycloak, rate limiting a livello di APISIX e un node pool GPU dedicato. Nexus MDS Core implementa questo stack in una configurazione a comando singolo.",
  },
  {
    q: "Che differenza c'è fra AKS, GCP GKE e Hetzner per i carichi di lavoro AI?",
    a: "AKS e GKE offrono un'integrazione nativa con i servizi cloud (storage, IAM, monitoraggio) ma a costi GPU elevati. Hetzner bare-metal offre GPU H100/A100 a costi da 3 a 5 volte inferiori, ma l'infrastruttura va gestita. La scelta dipende da budget, compliance (residenza dei dati in UE) e capacità operativa del team.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "it",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const capabilities: Capability[] = [
  {
    iconName: "Server",
    name: "Orchestrazione GPU",
    desc: "Cluster Kubernetes con runtime su misura per i carichi AI su AKS, GCP e Hetzner bare-metal. Dimensionamento ottimizzato per l'inferenza degli LLM.",
  },
  {
    iconName: "Shield",
    name: "API Gateway APISIX",
    desc: "Plugin JWT, rate limiting sulle chiamate agli LLM, routing multi-tenant, CORS gestito a livello di gateway. Il livello di sicurezza viene prima del codice.",
  },
  {
    iconName: "Zap",
    name: "AI serverless",
    desc: "Apache OpenWhisk su Kubernetes per carichi AI intermittenti: scale-to-zero, task su GPU, elaborazione di immagini, inferenza batch.",
  },
  {
    iconName: "Package",
    name: "Deploy dello stack completo",
    desc: "Redis, RabbitMQ, MinIO, Grafana, Velero, Airflow, n8n: lo stack completo orchestrato con CI/CD su più ambienti.",
  },
  {
    iconName: "Lock",
    name: "Sicurezza Zero-Trust",
    desc: "Keycloak + APISIX come livello di sicurezza integrato. Nessun servizio esposto senza autenticazione. Adatto a dati sanitari e finanziari.",
  },
  {
    iconName: "RefreshCw",
    name: "Disaster recovery",
    desc: "Velero per il backup automatico di Kubernetes. Strategie multi-region su cloud UE per la continuità operativa.",
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

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Competenze tecniche", path: "/it/competenze" },
  { name: "Architettura cloud e Kubernetes" },
]);

export default function CloudKubernetesPage() {
  return (
    <ServicePageLayout
      locale="it"
      title="Architettura cloud e Kubernetes"
      intro="Infrastruttura pronta per l'AI. Orchestrazione delle GPU. Zero-Trust di default."
      tech={tech}
      capabilities={capabilities}
      faqs={faqs}
      ctaTitle="Parliamo del tuo progetto"
      ctaSubtitle="Un'infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Scrivici."
      faqSchema={faqSchema}
      breadcrumbSchema={crumbs}
    />
  );
}
