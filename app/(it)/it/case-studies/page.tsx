import type { Metadata } from "next";
import { OG_IMAGE } from "@/app/og";
import { breadcrumbSchema } from "@/app/seo";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

const PATH = "/it/case-studies";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;
const TITLE = "Case study";
const DESCRIPTION =
  "Risultati concreti da progetti reali. Come Dynamics Consulting ha aiutato le organizzazioni a trasformare la propria tecnologia e a ottenere risultati di business misurabili.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "it_IT",
  },
};

const cases = [
  {
    slug: "logitrack",
    client: "LogiTrack",
    tag: "Logistica · RFID · AI · Tracciabilità",
    headline: "Tracciabilità RFID e AI per magazzino, produzione e spedizioni",
    summary:
      "Piattaforma cloud-native che unisce RFID UHF, per il tracciamento in tempo reale di magazzino e produzione, e NFC per l’autenticazione post-vendita. Rilevamento delle anomalie con AI, certificazione su blockchain, edge computing e integrazione profonda con SAP e Power Platform.",
    metrics: [
      { value: "99,5%", label: "Errori di spedizione in meno" },
      { value: "20×", label: "Inventari più rapidi" },
      { value: "End-to-end", label: "Tracciabilità per singolo articolo" },
    ],
  },
  {
    slug: "federfarma",
    client: "Federfarma Lombarda",
    tag: "Farmaceutico · Sovereign AI · Nexus MDS Core",
    headline: "Piattaforma AI RAG per oltre 1.000 farmacie, interamente su Nexus MDS Core",
    summary:
      "Pipeline RAG su oltre 10.000 documenti farmaceutici con Weaviate, inferenza locale, generazione esterna sostituibile, PWA Budibase e autenticazione Zero-Trust con Keycloak. Self-hosted su un singolo server, nessun lock-in da hyperscaler.",
    metrics: [
      { value: "1.000+", label: "Farmacie servite" },
      { value: "10.000+", label: "Documenti vettorizzati" },
      { value: "Sovrana", label: "Nessun lock-in da hyperscaler" },
    ],
  },
  {
    slug: "sorgenia",
    client: "Sorgenia",
    tag: "Energia · CRM · Marketing automation",
    headline: "Dynamics 365 Marketing per il principale fornitore italiano di energia verde",
    summary:
      "Orchestrazione dei customer journey e automazione delle campagne multicanale su oltre 200.000 contatti. Trigger su eventi in tempo reale dai dati di fatturazione e di consumo, integrati con Dynamics CRM.",
    metrics: [
      { value: "200k+", label: "Contatti gestiti" },
      { value: "Multicanale", label: "Orchestrazione dei journey" },
      { value: "Tempo reale", label: "Trigger guidati da eventi" },
    ],
  },
  {
    slug: "nespresso",
    client: "Nespresso (tramite ATOS)",
    tag: "FMCG · Programma enterprise · IoT",
    headline: "Nespresso Intervallo: programma enterprise su più stream",
    summary:
      "Guida del programma su Dynamics F&O, servizi backend custom e frontend con IoT per le attività B2B italiane di Nespresso. Una delivery di circa 40 persone gestita su tre stream di lavoro paralleli.",
    metrics: [
      { value: "~40", label: "Persone gestite" },
      { value: "3 stream", label: "Stream di lavoro paralleli" },
      { value: "F&O + IoT", label: "Perimetro tecnologico" },
    ],
  },
  {
    slug: "iatp",
    client: "IATP",
    tag: "Modernizzazione legacy · Sviluppo guidato dall’AI",
    headline: "Reverse engineering con AI e pipeline di sviluppo autonoma",
    summary:
      "Reverse engineering con AI di una piattaforma legacy, con generazione dei documenti di analisi via RAG su Nexus MDS Core. Pipeline di sviluppo interamente guidata dall’AI: Antigravity, Trae, server MCP per il DevOps e Comet per i test.",
    metrics: [
      { value: "RAG", label: "Generazione intelligente dei documenti" },
      { value: "MCP", label: "Orchestrazione DevOps" },
      { value: "End-to-end", label: "Pipeline guidata dall’AI" },
    ],
  },
  {
    slug: "humania-care",
    client: "HumanIA Care",
    tag: "AI applicata · Sanità",
    headline: "Architettura di AI companion per pazienti anziani: privacy by design, deployment sovrano",
    summary:
      "Architettura AI multi-agente con livelli di RAG, voce e memoria. Costruita su Nexus MDS Core per gli ambienti di cura regolati. Progettata per scalare, non ancora in distribuzione pubblica.",
    metrics: [
      { value: "6 mesi", label: "Tempo alla produzione" },
      { value: "Multi-agente", label: "RAG + voce + memoria" },
      { value: "In ingestion", label: "Dati personali anonimizzati" },
    ],
  },
  {
    slug: "dynamics-data",
    client: "Gruppo manifatturiero",
    tag: "Microsoft Dynamics · Data platform",
    headline: "Dynamics 365 F&O e lakehouse dati unificato per un gruppo manifatturiero multi-sede",
    summary:
      "Migrazione completa dell’ERP dai sistemi legacy a Dynamics 365 Finance & Operations, insieme a un data lakehouse con Synapse Link e a dashboard Power BI che danno al management la visibilità sugli stabilimenti in tempo reale.",
    metrics: [
      { value: "4 sedi", label: "Unificate su un’unica piattaforma" },
      { value: "60%", label: "Tempo di reportistica risparmiato" },
      { value: "12 sett.", label: "Tempi di go-live" },
    ],
  },
  {
    slug: "dynamics-crm",
    client: "CRM per banche e assicurazioni",
    tag: "Multisettore · CRM · Customer engagement",
    headline: "Dynamics 365 CRM: banche, assicurazioni ed enterprise",
    summary:
      "Più rollout di Dynamics 365 Sales e Customer Service per Banca Mediolanum, Unipol, illimity e clienti industriali. Workflow specifici per settore, integrazione con i processi di compliance, scala enterprise.",
    metrics: [
      { value: "5+", label: "Implementazioni CRM" },
      { value: "Banche e assicurazioni", label: "Settori principali" },
      { value: "Enterprise", label: "Scala" },
    ],
  },
];

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Home", path: "/" },
  { name: "Risorse in italiano", path: "/it" },
  { name: "Case study" },
]);

export default function CaseStudiesPageIt() {
  return (
    <>
      <JsonLd data={crumbs} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Case study
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Risultati, non slide
            </h1>
            <p className="text-lg text-[#7D8FA3] max-w-2xl mx-auto">
              Ogni progetto che seguiamo si misura sull’impatto di business. Dalla sanità e dal
              farmaceutico all’energia, al largo consumo, alle banche e al CRM enterprise: ecco
              come lavoriamo.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto space-y-10">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/it/case-studies/${c.slug}`}
                className="group block rounded-2xl border border-[#30363D] hover:border-[#00B4D8] bg-[#161B22] p-8 md:p-10 transition-all shadow-sm hover:shadow-[0_0_30px_rgba(0,180,216,0.1)]"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#00B4D8]">
                      {c.tag}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-[#E6EDF3] group-hover:text-[#00B4D8] transition-colors">
                      {c.headline}
                    </h2>
                    <p className="mt-3 text-[#7D8FA3] leading-relaxed">{c.summary}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#00B4D8]">
                      Leggi il case study →
                    </span>
                  </div>
                  <div className="flex md:flex-col gap-6 md:gap-4 md:min-w-[140px]">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="text-center md:text-right">
                        <div className="text-2xl font-bold text-[#E6EDF3]">{m.value}</div>
                        <div className="text-xs text-[#7D8FA3] mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CTASection
          title="Parliamo del tuo progetto"
          subtitle="Un’infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Contattaci."
          ctaLabel="Inizia la conversazione →"
          ctaHref="/it/contatti"
        />
      </main>
      <Footer />
    </>
  );
}
