import type { Metadata } from "next";
import { breadcrumbSchema, faqSchema } from "@/app/seo";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";
import { ServicePageLayout, type Capability } from "@/components/sections/ServicePageLayout";

const PATH = "/it/servizi/integrazione-enterprise";
const SERVICE_URL = `https://www.dynamicsconsulting.it${PATH}`;

const DESCRIPTION =
  "Migrazione da ESB, event sourcing, modernizzazione dei sistemi legacy e architetture a microservizi per ambienti enterprise complessi. Talend, Azure Integration, n8n.";

export const metadata: Metadata = {
  title: "Integrazione enterprise e modernizzazione",
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "Integrazione enterprise e modernizzazione | Dynamics Consulting",
    description: DESCRIPTION,
    url: SERVICE_URL,
    locale: "it_IT",
  },
};

const capabilities: Capability[] = [
  {
    iconName: "Network",
    name: "Migrazione da ESB e middleware",
    desc: "Migrazione da Talend ESB, BizTalk, MuleSoft e Karaf verso stack di integrazione moderni e leggeri. I pattern restano, l'architettura si modernizza.",
  },
  {
    iconName: "GitBranch",
    name: "Event sourcing",
    desc: "EventStoreDB e Kafka per log di audit immutabili, query temporali e replay degli eventi. Cancellazione selettiva delle proiezioni per le richieste di cancellazione previste dal GDPR.",
  },
  {
    iconName: "RefreshCw",
    name: "Modernizzazione dei sistemi legacy",
    desc: "Migrazione incrementale secondo il pattern strangler fig per i sistemi che vivono da molti anni. Reverse engineering del codice assistito dall'AI e documentazione automatica.",
  },
  {
    iconName: "Zap",
    name: "API Gateway e APISIX",
    desc: "Rate limiting, validazione JWT, CORS, architettura a plugin. APISIX come API gateway sovrano per deployment on-premise e ibridi.",
  },
  {
    iconName: "Link2",
    name: "Integrazione con Dynamics 365",
    desc: "Connettori bidirezionali fra Dynamics 365 CE, F&O e sistemi esterni. Pattern basati su webhook, Power Automate, Logic Apps e middleware su misura.",
  },
  {
    iconName: "Server",
    name: "Orchestrazione dei workflow con n8n",
    desc: "n8n self-hosted per l'automazione dei workflow, le pipeline di ingestione documentale e l'orchestrazione dell'AI con human-in-the-loop e audit trail completo.",
  },
];

const tech = ["n8n", "APISIX", "Talend ESB", "EventStoreDB", "Kafka", "Azure Logic Apps", "Dynamics 365", "RabbitMQ"];

const faqs = [
  {
    q: "Quando conviene sostituire un ESB legacy invece di estenderlo?",
    a: "Quando il costo di manutenzione supera quello della migrazione, quando l'ESB è un collo di bottiglia per i rilasci o quando non regge pattern event-driven. Dynamics Consulting valuta entrambe le strade prima di consigliarne una.",
  },
  {
    q: "Potete integrare Dynamics 365 con sistemi on-premise senza Azure?",
    a: "Sì. Dynamics Consulting usa middleware self-hosted (n8n, APISIX, connettori su misura) per collegare Dynamics 365 ai sistemi on-premise, senza dipendere dai servizi PaaS di Azure.",
  },
];

const crumbs = breadcrumbSchema(SERVICE_URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Competenze tecniche", path: "/it/competenze" },
  { name: "Integrazione enterprise e modernizzazione" },
]);

export default function IntegrazioneEnterprisePage() {
  return (
    <ServicePageLayout
      locale="it"
      title="Integrazione enterprise e modernizzazione"
      intro="Integrazioni complesse, modernizzazione dei sistemi legacy e architetture event-driven per organizzazioni che non possono permettersi di fermarsi e ricostruire."
      tech={tech}
      capabilities={capabilities}
      faqs={faqs}
      ctaTitle="Parliamo del tuo progetto"
      ctaSubtitle="Un'infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Scrivici."
      faqSchema={{ ...faqSchema(SERVICE_URL, faqs), inLanguage: "it" }}
      breadcrumbSchema={crumbs}
    />
  );
}
