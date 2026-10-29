import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";

const PATH = "/it/servizi/automazione";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;

const DESCRIPTION =
  "RPA, process mining e automazione potenziata dall'AI per eliminare il lavoro manuale, ridurre gli errori e lasciare ai tuoi team le decisioni ad alto valore.";

export const metadata: Metadata = {
  title: "Automazione intelligente",
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "Automazione intelligente | Dynamics Consulting",
    description: DESCRIPTION,
    url: PAGE_URL,
    locale: "it_IT",
  },
};

const faqs = [
  {
    q: "Che differenza c'è fra RPA e automazione intelligente?",
    a: "L'RPA automatizza attività strutturate e basate su regole imitando le interazioni dell'utente. L'automazione intelligente aggiunge l'AI (comprensione dei documenti, elaborazione del linguaggio naturale, modelli decisionali) e così gestisce input non strutturati ed eccezioni che l'RPA da sola non sa trattare.",
  },
  {
    q: "Come capite quali processi automatizzare per primi?",
    a: "Dynamics Consulting parte dal process mining sui log che hai già, per individuare in modo oggettivo i processi con più volumi, più errori e più costi. Poi valuta i candidati per fattibilità dell'automazione e ROI, e ne ricava una roadmap con le priorità.",
  },
  {
    q: "Le automazioni richiedono modifiche ai sistemi esistenti?",
    a: "Di solito no. I bot RPA lavorano a livello di interfaccia o di API, quindi i sistemi non vanno modificati. Dove esistono API Dynamics Consulting le preferisce perché sono più affidabili, ma può automatizzare anche sistemi che non ne hanno affatto.",
  },
  {
    q: "Come vi assicurate che le automazioni restino affidabili nel tempo?",
    a: "In ogni bot Dynamics Consulting costruisce una gestione completa delle eccezioni, alerting e logica di auto-ripristino. I servizi gestiti continuativi comprendono il monitoraggio dei bot, SLA di break-fix e revisioni periodiche per adattare le automazioni ai cambiamenti dei sistemi.",
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
  { name: "Automazione intelligente" },
]);

export default function AutomazionePage() {
  return (
    <ServicePageLayout
      locale="it"
      title="Automazione intelligente"
      intro="Il lavoro manuale e ripetitivo è il nemico della scala. Dynamics Consulting progetta e mette in produzione programmi di automazione che combinano RPA, process mining e AI per eliminare in modo sistematico il lavoro a basso valore, con un ritorno che si misura su ogni processo, non si promette in anticipo."
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
            "Bot su interfaccia e API costruiti con UiPath e Power Automate per inserimento dati, riconciliazioni, reportistica e qualsiasi attività digitale ripetitiva: girano 24 ore su 24, senza stancarsi mai.",
        },
        {
          iconName: "ScanSearch",
          name: "Process mining e discovery",
          desc:
            "Celonis e l'analisi degli event log mostrano come girano davvero i tuoi processi rispetto a come pensi che girino, e fanno emergere sprechi, colli di bottiglia e gli obiettivi di automazione con il ROI più alto.",
        },
        {
          iconName: "FileSearch",
          name: "Elaborazione intelligente dei documenti",
          desc:
            "Modelli di AI che estraggono, classificano e validano dati da fatture, contratti, moduli ed email, gestendo la variabilità e le eccezioni che un OCR a regole non sa trattare.",
        },
        {
          iconName: "BrainCircuit",
          name: "Automazione delle decisioni con l'AI",
          desc:
            "Modelli di machine learning inseriti nei workflow aziendali per automatizzare l'instradamento delle approvazioni, il rilevamento delle frodi, la previsione della domanda e altri processi ad alta intensità decisionale.",
        },
        {
          iconName: "GitBranch",
          name: "BPM e orchestrazione dei workflow",
          desc:
            "Camunda e Airflow orchestrano processi complessi in più passaggi fra persone e sistemi, con audit trail completi e visibilità in tempo reale su ogni pratica in corso.",
        },
        {
          iconName: "Activity",
          name: "Automation Operations (AO)",
          desc:
            "Monitoraggio continuo dei bot, triage delle eccezioni, supporto break-fix coperto da SLA e una dashboard sullo stato dei bot, perché il tuo parco di automazioni resti affidabile mentre i sistemi evolvono.",
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
