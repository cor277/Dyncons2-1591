import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Dynamics 365 | Dynamics Consulting",
  description:
    "Implementation, customisation, and managed support for Microsoft Dynamics 365 Business Central, Sales, Customer Service, and Power Platform. Certified Microsoft partner.",
  alternates: { canonical: "https://dynamicsconsulting.it/services/microsoft-dynamics" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which Dynamics 365 modules do you implement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover Business Central (ERP), Sales, Customer Service, Field Service, and Marketing — plus the full Power Platform stack including Power Apps, Power Automate, and Power BI.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Dynamics 365 implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused Business Central implementation for an SME typically runs 8–16 weeks. Larger multi-module rollouts are phased over 3–9 months. We always begin with a two-week discovery to nail down scope and de-risk the timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-go-live support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer tiered managed support plans with defined SLAs, a dedicated success manager, quarterly roadmap reviews, and proactive monitoring of critical business processes.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate data from our existing ERP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Data migration is a core deliverable. We build extraction, transformation, and validation pipelines for every legacy system we have encountered — including SAP, Oracle NetSuite, custom Access/Excel solutions, and older Navision versions.",
      },
    },
  ],
};

export default function MicrosoftDynamicsPage() {
  return (
    <ServicePageLayout
      title="Microsoft Dynamics 365"
      intro="As a certified Microsoft partner, we help mid-market and enterprise organisations unlock the full value of Dynamics 365 — from greenfield implementation and complex data migration to deep customisation, ISV integrations, and long-term managed support."
      tech={[
        "Dynamics 365 Business Central",
        "Dynamics 365 Sales",
        "Dynamics 365 Customer Service",
        "Power Platform",
        "Power BI",
        "Power Automate",
        "Power Apps",
        "Azure Active Directory",
        "Azure Integration Services",
        "AL Language",
        "Dataverse",
        "Microsoft 365",
      ]}
      capabilities={[
        {
          iconName: "Layout",
          name: "Business Central Implementation",
          desc:
            "End-to-end ERP rollout covering finance, supply chain, manufacturing, and project management — configured for Italian fiscal and regulatory requirements from day one.",
        },
        {
          iconName: "TrendingUp",
          name: "CRM & Sales Automation",
          desc:
            "Dynamics 365 Sales and Customer Service configured to your sales process, with AI-powered lead scoring, opportunity management, and customer journey orchestration.",
        },
        {
          iconName: "Code",
          name: "Custom AL Development",
          desc:
            "Bespoke extensions built in AL language for Business Central, from custom reports and workflows to deep industry-specific functionality — all AppSource-quality code.",
        },
        {
          iconName: "Zap",
          name: "Power Platform Solutions",
          desc:
            "Canvas apps, model-driven apps, and Power Automate flows that extend Dynamics without custom code — citizen-developer friendly, enterprise-grade secure.",
        },
        {
          iconName: "Database",
          name: "Data Migration & Integration",
          desc:
            "Structured migration of master data, transactional history, and documents from any legacy system, with full reconciliation reports and zero tolerance for data loss.",
        },
        {
          iconName: "Shield",
          name: "Managed Support & Optimisation",
          desc:
            "Proactive monitoring, SLA-backed incident response, release management for Microsoft wave updates, and quarterly optimisation reviews to keep your system performing.",
        },
      ]}
      faqs={[
        {
          q: "Which Dynamics 365 modules do you implement?",
          a: "We cover Business Central (ERP), Sales, Customer Service, Field Service, and Marketing — plus the full Power Platform stack including Power Apps, Power Automate, and Power BI.",
        },
        {
          q: "How long does a Dynamics 365 implementation take?",
          a: "A focused Business Central implementation for an SME typically runs 8–16 weeks. Larger multi-module rollouts are phased over 3–9 months. We always begin with a two-week discovery to nail down scope and de-risk the timeline.",
        },
        {
          q: "Do you provide post-go-live support?",
          a: "Yes. We offer tiered managed support plans with defined SLAs, a dedicated success manager, quarterly roadmap reviews, and proactive monitoring of critical business processes.",
        },
        {
          q: "Can you migrate data from our existing ERP?",
          a: "Absolutely. Data migration is a core deliverable. We build extraction, transformation, and validation pipelines for every legacy system we have encountered — including SAP, Oracle NetSuite, custom Access/Excel solutions, and older Navision versions.",
        },
      ]}
      faqSchema={faqSchema}
    />
  );
}
