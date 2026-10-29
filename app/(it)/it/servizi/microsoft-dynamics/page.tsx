import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";

const PATH = "/it/servizi/microsoft-dynamics";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;

const DESCRIPTION =
  "Implementazione, personalizzazione e supporto gestito per Microsoft Dynamics 365 Finance & Operations, Sales, Customer Engagement e Power Platform. Microsoft Cloud Partner.";

export const metadata: Metadata = {
  title: "Microsoft Dynamics 365",
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "Microsoft Dynamics 365 | Dynamics Consulting",
    description: DESCRIPTION,
    url: PAGE_URL,
    locale: "it_IT",
  },
};

const faqs = [
  {
    q: "Quali moduli di Dynamics 365 implementate?",
    a: "Dynamics Consulting copre Finance & Operations (F&O), Sales, Customer Service, Field Service e Marketing, più l'intero stack Power Platform: Power Apps, Power Automate e Power BI.",
  },
  {
    q: "Quanto dura un'implementazione di Dynamics 365?",
    a: "Un'implementazione F&O mirata dura di solito fra 12 e 24 settimane, a seconda del perimetro. I rollout CRM si articolano in fasi su 8–16 settimane. Dynamics Consulting parte sempre da una discovery di due settimane per fissare il perimetro e ridurre i rischi sui tempi.",
  },
  {
    q: "Offrite supporto dopo il go-live?",
    a: "Sì. Dynamics Consulting offre piani di supporto gestito a più livelli con SLA definiti, un success manager dedicato, revisioni trimestrali della roadmap e monitoraggio proattivo dei processi di business critici.",
  },
  {
    q: "Potete migrare i dati dal nostro ERP attuale?",
    a: "Certo. La migrazione dei dati è un deliverable centrale. Dynamics Consulting costruisce pipeline di estrazione, trasformazione e validazione per ogni sistema legacy che ha incontrato, compresi SAP, Oracle NetSuite, soluzioni su misura in Access/Excel e vecchie versioni di Navision.",
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

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Competenze tecniche", path: "/it/competenze" },
  { name: "Microsoft Dynamics 365" },
]);

export default function MicrosoftDynamicsPage() {
  return (
    <ServicePageLayout
      locale="it"
      title="Microsoft Dynamics 365"
      intro="Come Microsoft Cloud Partner, Dynamics Consulting aiuta organizzazioni mid-market ed enterprise a ottenere da Dynamics 365 tutto il valore che può dare: dall'implementazione da zero alla migrazione di dati complessa, fino alla personalizzazione profonda, alle integrazioni con soluzioni ISV e al supporto gestito di lungo periodo. Il suo focus principale è Finance & Operations (F&O), con competenze CRM complementari (Sales/Customer Engagement)."
      tech={[
        "Dynamics 365 Finance & Operations",
        "Dynamics 365 Sales",
        "Dynamics 365 Customer Service",
        "Power Platform",
        "Power BI",
        "Power Automate",
        "Power Apps",
        "Azure Active Directory",
        "Azure Integration Services",
        "Synapse Link",
        "Dataverse",
        "Microsoft 365",
      ]}
      capabilities={[
        {
          iconName: "Layout",
          name: "Implementazione F&O",
          desc:
            "Rollout completo di Finance & Operations su finanza, supply chain, produzione e gestione progetti, configurato fin dal primo giorno sui requisiti fiscali e normativi italiani.",
        },
        {
          iconName: "TrendingUp",
          name: "CRM e automazione delle vendite",
          desc:
            "Dynamics 365 Sales e Customer Service configurati sul tuo processo di vendita, con lead scoring basato sull'AI, gestione delle opportunità e orchestrazione del customer journey.",
        },
        {
          iconName: "Code",
          name: "Data lakehouse su F&O",
          desc:
            "Export da F&O verso Azure Data Lake con Synapse Link, modelli di trasformazione dbt e semantic layer in Power BI: analisi in tempo reale sui dati dell'ERP senza impatto sulle prestazioni del sistema transazionale.",
        },
        {
          iconName: "Zap",
          name: "Soluzioni Power Platform",
          desc:
            "Canvas app, model-driven app e flussi Power Automate che estendono Dynamics senza codice su misura: alla portata dei citizen developer, con una sicurezza di livello enterprise.",
        },
        {
          iconName: "Database",
          name: "Migrazione e integrazione dei dati",
          desc:
            "Migrazione strutturata di anagrafiche, storico transazionale e documenti da qualsiasi sistema legacy, con report di riconciliazione completi che rendono conto di ogni record migrato.",
        },
        {
          iconName: "Shield",
          name: "Supporto gestito e ottimizzazione",
          desc:
            "Monitoraggio proattivo, gestione degli incidenti coperta da SLA, release management per gli aggiornamenti a wave di Microsoft e revisioni trimestrali di ottimizzazione perché il sistema continui a rendere.",
        },
      ]}
      faqs={faqs}
      ctaTitle="Parliamo del tuo progetto"
      ctaSubtitle="Un'infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Scrivici."
      faqSchema={faqSchema}
      breadcrumbSchema={crumbs}
    />
  );
}
