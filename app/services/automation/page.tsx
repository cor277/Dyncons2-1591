import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligent Automation | Dynamics Consulting",
  description:
    "RPA, process mining, and AI-augmented automation that eliminates manual work, reduces errors, and frees your teams to focus on high-value decisions.",
  alternates: { canonical: "https://dynamicsconsulting.it/services/automation" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between RPA and intelligent automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RPA automates structured, rule-based tasks by mimicking user interactions. Intelligent automation adds AI — document understanding, natural language processing, decision models — so it can handle unstructured inputs and exceptions that pure RPA cannot.",
      },
    },
    {
      "@type": "Question",
      name: "How do you identify which processes to automate first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with process mining on your existing logs to identify high-volume, high-error, and high-cost processes objectively. We then score candidates on automation feasibility and ROI to build a prioritised roadmap.",
      },
    },
    {
      "@type": "Question",
      name: "Do automations require changes to our existing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not usually. RPA bots interact at the UI or API layer, so no system modifications are needed. Where APIs exist we prefer them for reliability, but we can automate systems with no API at all.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure automations remain reliable over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build comprehensive exception handling, alerting, and self-healing logic into every bot. Ongoing managed services include bot monitoring, break-fix SLAs, and periodic reviews to adapt automations to system changes.",
      },
    },
  ],
};

export default function AutomationPage() {
  return (
    <ServicePageLayout
      title="Intelligent Automation"
      intro="Manual, repetitive work is the enemy of scale. We design and deploy automation programmes that combine RPA, process mining, and AI to systematically eliminate low-value labour — delivering measurable ROI within weeks, not years."
      tech={[
        "UiPath",
        "Power Automate",
        "Automation Anywhere",
        "Blue Prism",
        "Celonis",
        "Camunda BPM",
        "Python",
        "OpenAI GPT-4",
        "Azure Document Intelligence",
        "Google Document AI",
        "Apache Airflow",
        "n8n",
        "Zapier",
      ]}
      capabilities={[
        {
          iconName: "Zap",
          name: "Robotic Process Automation",
          desc:
            "UI and API bots built on UiPath and Power Automate that handle data entry, reconciliation, reporting, and any repetitive digital task — running 24/7 with zero fatigue.",
        },
        {
          iconName: "ScanSearch",
          name: "Process Mining & Discovery",
          desc:
            "Celonis and event-log analysis reveal exactly how your processes actually run versus how you think they run, surfacing waste, bottlenecks, and the highest-ROI automation targets.",
        },
        {
          iconName: "FileSearch",
          name: "Intelligent Document Processing",
          desc:
            "AI models that extract, classify, and validate data from invoices, contracts, forms, and emails — handling variability and exceptions that rules-based OCR cannot.",
        },
        {
          iconName: "BrainCircuit",
          name: "AI-Augmented Decision Automation",
          desc:
            "Machine learning models embedded in business workflows to automate approval routing, fraud detection, demand forecasting, and other decision-intensive processes.",
        },
        {
          iconName: "GitBranch",
          name: "BPM & Workflow Orchestration",
          desc:
            "Camunda and Airflow orchestrate complex multi-step processes across humans and systems, providing full audit trails and real-time visibility into every in-flight case.",
        },
        {
          iconName: "Activity",
          name: "Automation Operations (AO)",
          desc:
            "Ongoing bot monitoring, exception triage, SLA-backed break-fix support, and a bot health dashboard so your automation estate stays reliable as systems evolve.",
        },
      ]}
      faqs={[
        {
          q: "What's the difference between RPA and intelligent automation?",
          a: "RPA automates structured, rule-based tasks by mimicking user interactions. Intelligent automation adds AI — document understanding, natural language processing, decision models — so it can handle unstructured inputs and exceptions that pure RPA cannot.",
        },
        {
          q: "How do you identify which processes to automate first?",
          a: "We start with process mining on your existing logs to identify high-volume, high-error, and high-cost processes objectively. We then score candidates on automation feasibility and ROI to build a prioritised roadmap.",
        },
        {
          q: "Do automations require changes to our existing systems?",
          a: "Not usually. RPA bots interact at the UI or API layer, so no system modifications are needed. Where APIs exist we prefer them for reliability, but we can automate systems with no API at all.",
        },
        {
          q: "How do you ensure automations remain reliable over time?",
          a: "We build comprehensive exception handling, alerting, and self-healing logic into every bot. Ongoing managed services include bot monitoring, break-fix SLAs, and periodic reviews to adapt automations to system changes.",
        },
      ]}
      faqSchema={faqSchema}
    />
  );
}
