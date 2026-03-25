import type { Metadata } from "next";
import { ServicePageLayout, type Capability } from "@/components/sections/ServicePageLayout";

export const metadata: Metadata = {
  title: "Enterprise Integration & Modernisation",
  description: "ESB migration, event sourcing, legacy modernisation and microservices architecture for complex enterprise environments. Talend, Azure Integration, n8n.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/services/enterprise-integration" },
};

const capabilities: Capability[] = [
  {
    iconName: "Network",
    name: "ESB & Middleware Migration",
    desc: "Migration from Talend ESB, BizTalk, MuleSoft, and Karaf to modern lightweight integration stacks. Pattern preservation with architecture modernisation.",
  },
  {
    iconName: "GitBranch",
    name: "Event Sourcing",
    desc: "EventStoreDB and Kafka for immutable audit logs, temporal queries and event replay. GDPR-compliant with selective projection deletion.",
  },
  {
    iconName: "RefreshCw",
    name: "Legacy Modernisation",
    desc: "Incremental strangler-fig migration of long-lived systems. AI-assisted reverse engineering of codebases and automated documentation.",
  },
  {
    iconName: "Zap",
    name: "API Gateway & APISIX",
    desc: "Rate limiting, JWT validation, CORS, plugin architecture. APISIX as sovereign API gateway for on-premise and hybrid deployments.",
  },
  {
    iconName: "Link2",
    name: "Dynamics 365 Integration",
    desc: "Bidirectional connectors between Dynamics 365 CE, F&O, and external systems. Webhook patterns, Power Automate, Logic Apps, and custom middleware.",
  },
  {
    iconName: "Server",
    name: "n8n Workflow Orchestration",
    desc: "Self-hosted n8n for workflow automation, document ingestion pipelines, and human-in-the-loop AI orchestration with full audit trail.",
  },
];

const tech = ["n8n", "APISIX", "Talend ESB", "EventStoreDB", "Kafka", "Azure Logic Apps", "Dynamics 365", "RabbitMQ"];

const faqs = [
  {
    q: "When does it make sense to replace a legacy ESB rather than extend it?",
    a: "When maintenance cost exceeds the cost of migration, when the ESB is a delivery bottleneck, or when it cannot support event-driven patterns. We evaluate both paths before recommending either.",
  },
  {
    q: "Can you integrate Dynamics 365 with on-premise systems without Azure?",
    a: "Yes. We use self-hosted middleware (n8n, APISIX, custom connectors) to bridge Dynamics 365 with on-premise systems, avoiding dependency on Azure PaaS services.",
  },
];

export default function EnterpriseIntegrationPage() {
  return (
    <ServicePageLayout
      title="Enterprise Integration & Modernisation"
      intro="Complex integrations, legacy modernisation, and event-driven architectures for organisations that cannot afford to stop and rebuild."
      tech={tech}
      capabilities={capabilities}
      faqs={faqs}
    />
  );
}
