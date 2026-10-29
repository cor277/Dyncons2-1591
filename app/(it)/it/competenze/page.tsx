import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { TechBadge } from "@/components/ui/TechBadge";

const URL = "https://www.dynamicsconsulting.it/it/competenze";

export const metadata: Metadata = {
  title: "Competenze tecniche",
  description:
    "L’ingegneria sotto le linee di servizio: AI applicata, data platform, Kubernetes, integrazione enterprise, Dynamics 365, automazione, blockchain. Competenze, non offerte separate.",
  alternates: alternatesFor("/it/competenze"),
  openGraph: {
    images: OG_IMAGE,
    title: "Competenze tecniche | Dynamics Consulting",
    description:
      "L’ingegneria sotto le linee di servizio: AI applicata, data platform, Kubernetes, integrazione enterprise, Dynamics 365, automazione, blockchain.",
    url: URL,
    type: "website",
    locale: "it_IT",
  },
};

/* Blockchain & Web3 last — deliberately. */
const capabilities = [
  {
    title: "AI applicata e workflow agentici",
    description:
      "Sistemi multi-agente con memoria, orchestrazione e governance integrate. Pipeline di retrieval, valutazione, approval gate con l’essere umano nel ciclo.",
    badges: ["LLM", "Weaviate", "n8n", "vLLM"],
    href: "/it/servizi/ai-applicata",
  },
  {
    title: "Data platform moderne e RAG",
    description:
      "Dai silos dell’ERP ai data lakehouse ACID. Zero-ETL, ingestione in tempo reale, archivi vettoriali e relazionali fianco a fianco.",
    badges: ["Iceberg", "Dremio", "Weaviate"],
    href: "/it/servizi/data-platform",
  },
  {
    title: "Architettura cloud e Kubernetes",
    description:
      "Cluster GPU, perimetri Zero-Trust, inferenza self-hosted in produzione. Autenticazione e policy di instradamento a livello di gateway.",
    badges: ["Kubernetes", "APISIX", "Keycloak"],
    href: "/it/servizi/cloud-kubernetes",
  },
  {
    title: "Integrazione enterprise e API",
    description:
      "Sistemi legacy che finalmente si parlano, senza riscrivere tutto. Integrazione a messaggi e superfici API sopra il parco applicativo esistente.",
    badges: ["ASP.NET Core", "OData", "RabbitMQ"],
    href: "/it/servizi/integrazione-enterprise",
  },
  {
    title: "Microsoft e Dynamics 365",
    description:
      "Dynamics 365 trattato come piattaforma di dati e di AI, non solo come ERP. F&O, Power Platform, retrieval sui dati dell’ERP.",
    badges: ["Dynamics 365", "Power Platform", "Azure"],
    href: "/it/servizi/microsoft-dynamics",
  },
  {
    title: "Automazione dei processi e iper-automazione",
    description:
      "Dall’automazione deterministica all’orchestrazione agentica. Pipeline documentali, OCR, workflow pianificati e guidati dagli eventi.",
    badges: ["n8n", "Airflow", "Apache Hop"],
    href: "/it/servizi/automazione",
  },
  {
    title: "Infrastruttura blockchain e Web3",
    description:
      "Smart contract Solidity su Polygon, AMM DeFi, microservizi event-sourced. Mantenuta come competenza di ingegneria da lavori precedenti.",
    badges: ["Polygon", "Solidity", "EventStoreDB"],
    href: "/it/servizi/blockchain",
  },
];

const crumbs = breadcrumbSchema(URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Competenze tecniche" },
]);

export default function CompetenzePage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Ingegneria
            </p>
            <h1 className="font-syne text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Competenze tecniche
            </h1>
            <p className="text-lg text-[#7D8FA3] leading-relaxed">
              Sono competenze, non offerte separate. Sono l’ingegneria su cui poggiano le tre linee
              di servizio — consulenza sulla governance, fractional CTO e la piattaforma di AI
              sovrana — e sono elencate qui perché ciò che un progetto richiede davvero sia visibile,
              non sottinteso.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="border-b border-[#21262D] pb-8 last:border-none last:pb-0"
              >
                <h2 className="text-xl font-bold text-[#E6EDF3] mb-2">
                  <Link href={c.href} className="hover:text-[#00B4D8] transition-colors">
                    {c.title}
                  </Link>
                </h2>
                <p className="text-[#7D8FA3] leading-relaxed mb-4">{c.description}</p>
                <div className="flex flex-wrap gap-2">
                  {c.badges.map((b) => (
                    <TechBadge key={b} label={b} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#7D8FA3] text-base">
              Cerchi invece le linee di servizio?{" "}
              <Link href="/it" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                Sono nella home in italiano
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
