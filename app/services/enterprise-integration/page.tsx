import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Integration | Dynamics Consulting",
  description:
    "API-led connectivity, middleware modernisation, and real-time event streaming. We connect your enterprise systems so every team works from a single source of truth.",
  alternates: { canonical: "https://dynamicsconsulting.it/services/enterprise-integration" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What integration patterns do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement REST, GraphQL, SOAP, gRPC, and event-driven architectures using brokers such as Kafka and RabbitMQ. Pattern selection depends on latency, volume, and transactional requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate legacy on-premise systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We use adapter patterns and lightweight agents to bridge legacy ERP, mainframe, and proprietary systems with modern cloud APIs, enabling incremental modernisation without a big-bang migration.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle data consistency across distributed systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We apply saga patterns for long-running transactions, outbox patterns for reliable event publishing, and idempotency keys to guarantee exactly-once semantics where the business requires it.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide API governance and documentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every integration we deliver ships with OpenAPI specifications, versioning policies, consumer-driven contract tests, and a developer portal so internal teams can self-serve.",
      },
    },
  ],
};

export default function EnterpriseIntegrationPage() {
  return (
    <ServicePageLayout
      title="Enterprise Integration"
      intro="Modern enterprises run dozens of platforms — ERP, CRM, e-commerce, analytics, IoT. We design and build the integration layer that connects them, eliminating data silos and enabling real-time operational intelligence."
      tech={[
        "Apache Kafka",
        "RabbitMQ",
        "MuleSoft",
        "Azure Service Bus",
        "AWS EventBridge",
        "Kong Gateway",
        "Apigee",
        "WSO2",
        "Node.js",
        "Python",
        "gRPC",
        "OpenAPI 3",
        "AsyncAPI",
        "Terraform",
      ]}
      capabilities={[
        {
          iconName: "Network",
          name: "API-Led Connectivity",
          desc:
            "We architect three-tier API layers — system, process, and experience — so teams can compose new digital products without duplicating integration logic.",
        },
        {
          iconName: "RefreshCw",
          name: "Event-Driven Architecture",
          desc:
            "Kafka and cloud-native brokers form the backbone of your event mesh, enabling sub-second data propagation across microservices and third-party systems.",
        },
        {
          iconName: "GitMerge",
          name: "Middleware Modernisation",
          desc:
            "Legacy ESBs replaced or incrementally strangled with lightweight, observable integration runtimes that cost less to run and far less to change.",
        },
        {
          iconName: "Shield",
          name: "API Security & Governance",
          desc:
            "OAuth 2.0, mTLS, rate limiting, and consumer contracts enforced at the gateway — not scattered across services — with a centralised developer portal.",
        },
        {
          iconName: "Database",
          name: "Data Synchronisation",
          desc:
            "Change-data-capture pipelines keep operational databases and analytical stores in sync with millisecond latency and zero data loss guarantees.",
        },
        {
          iconName: "Layers",
          name: "Integration Testing & Observability",
          desc:
            "Contract testing with Pact, distributed tracing with OpenTelemetry, and integration dashboards so you know the health of every flow before customers do.",
        },
      ]}
      faqs={[
        {
          q: "What integration patterns do you support?",
          a: "We implement REST, GraphQL, SOAP, gRPC, and event-driven architectures using brokers such as Kafka and RabbitMQ. Pattern selection depends on latency, volume, and transactional requirements.",
        },
        {
          q: "Can you integrate legacy on-premise systems?",
          a: "Yes. We use adapter patterns and lightweight agents to bridge legacy ERP, mainframe, and proprietary systems with modern cloud APIs, enabling incremental modernisation without a big-bang migration.",
        },
        {
          q: "How do you handle data consistency across distributed systems?",
          a: "We apply saga patterns for long-running transactions, outbox patterns for reliable event publishing, and idempotency keys to guarantee exactly-once semantics where the business requires it.",
        },
        {
          q: "Do you provide API governance and documentation?",
          a: "Absolutely. Every integration we deliver ships with OpenAPI specifications, versioning policies, consumer-driven contract tests, and a developer portal so internal teams can self-serve.",
        },
      ]}
      faqSchema={faqSchema}
    />
  );
}
