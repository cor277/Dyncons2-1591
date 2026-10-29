import type { Metadata } from "next";
import { OG_IMAGE } from "@/app/og";
import { breadcrumbSchema } from "@/app/seo";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

const PATH = "/it/case-studies/humania-care";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;
const TITLE = "HumanIA Care — AI companion per anziani";
const DESCRIPTION =
  "Un’architettura di AI companion per pazienti anziani, progettata per un deployment privacy by design negli ambienti di cura regolati. Costruita su Nexus MDS Core. Architettura multi-agente RAG + voce + memoria. Pilota controllato, non ancora in rollout pubblico.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    locale: "it_IT",
  },
};

const tech = [
  "Python", "PyTorch", "Hugging Face Transformers", "LangChain",
  "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Weaviate",
];

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Home", path: "/" },
  { name: "Risorse in italiano", path: "/it" },
  { name: "Case study", path: "/it/case-studies" },
  { name: "HumanIA Care" },
]);

export default function HumaniaCareStudyIt() {
  return (
    <>
      <JsonLd data={crumbs} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link href="/it/case-studies" className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1">
              ← Tutti i case study
            </Link>
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">AI applicata · Sanità</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Architettura di AI companion per pazienti anziani
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Un’architettura di AI companion per pazienti anziani, progettata per un deployment
              privacy by design negli ambienti di cura regolati. Costruita su Nexus MDS Core.
              Oggi è un pilota controllato, non ancora in rollout pubblico.
            </p>
          </div>
        </section>

        <section className="border-b border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "Pilota", label: "Pilota controllato, non ancora in rollout pubblico" },
              { value: "Multi-agente", label: "Architettura RAG + voce + memoria" },
              { value: "In ingestion", label: "Dati personali anonimizzati" },
              { value: "Nexus", label: "Gira su Nexus MDS Core" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#E6EDF3]">{m.value}</div>
                <div className="text-xs md:text-sm text-[#7D8FA3] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10 text-[#7D8FA3] leading-relaxed text-lg">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">La sfida</h2>
              <p>
                La missione di HumanIA Care è colmare il divario digitale per i pazienti anziani. Il
                team di prodotto aveva una visione chiara: un companion conversazionale capace di
                rispondere a domande sulla salute, aiutare nelle attività quotidiane e adattarsi al
                lessico e ai tempi di ogni utente. Il sistema doveva essere affidabile con poca
                banda, gestire un parlato rumoroso e non confondere mai utenti con scarsa tolleranza
                per gli errori della tecnologia.
              </p>
              <p className="mt-4">
                Il contesto sanitario aggiungeva un vincolo ulteriore: ogni risposta doveva essere
                fondata sulle fonti, verificabile e coerente con le linee guida cliniche. I contenuti
                allucinati non erano un modo di fallire accettabile. Il deployment sovrano, con dati,
                identità e audit dentro il perimetro, era un requisito non negoziabile fin
                dall’inizio.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Cosa ha costruito Dynamics Consulting</h2>
              <p>
                Dynamics Consulting ha progettato un’architettura AI multi-agente con un modello di riconoscimento
                vocale sottoposto a fine-tuning e ottimizzato sulle caratteristiche della voce degli
                anziani. Sopra ha messo in campo un sistema di retrieval-augmented generation
                con LangChain e Weaviate, ancorato a una base di conoscenza curata e rivista da
                clinici. Un motore di personalizzazione adattava nel tempo stile, lunghezza e lessico
                delle risposte a ciascun utente. L’intero sistema gira come pipeline multi-agente,
                con livelli di RAG, voce e memoria orchestrati su Nexus MDS Core.
              </p>
              <p className="mt-4">
                La privacy è stata parte del progetto dal primo giorno: tutti i dati personali
                anonimizzati in ingestion, una pipeline dati progettata sui requisiti del GDPR e
                logging di audit end-to-end. Nel pilota il sistema gira su Nexus MDS Core in
                container Docker, con la generazione su un modello locale o su un endpoint UE
                sostituibile, mantenendo la latenza di risposta sotto gli 800 ms al 99° percentile
                anche su connessioni mobili.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Risultati</h2>
              <p>
                In fase di test,
                con l’architettura RAG non è stato documentato alcun consiglio clinico allucinato. La piattaforma è progettata per scalare negli ambienti
                di cura regolati ed è attualmente un pilota controllato, non ancora in rollout
                pubblico.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Tecnologie utilizzate</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((t) => (<TechBadge key={t} label={t} />))}
              </div>
            </div>
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
