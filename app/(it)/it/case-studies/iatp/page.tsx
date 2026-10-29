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

const PATH = "/it/case-studies/iatp";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;
const TITLE = "IATP — Reverse engineering di sistemi legacy con l’AI";
const DESCRIPTION =
  "Reverse engineering assistito dall’AI di una piattaforma legacy, con generazione dei documenti di analisi via RAG su Nexus, e una pipeline di sviluppo interamente guidata dall’AI con Antigravity, Trae, server MCP e test con Comet.";

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
  "Nexus MDS Core",
  "RAG Pipeline",
  "Weaviate",
  "Antigravity",
  "Trae IDE",
  "MCP Servers",
  "Comet",
  "vLLM",
  "n8n",
  "Docker",
  "Git",
  "CI/CD",
];

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Home", path: "/" },
  { name: "Risorse in italiano", path: "/it" },
  { name: "Case study", path: "/it/case-studies" },
  { name: "IATP" },
]);

export default function IatpCaseStudyIt() {
  return (
    <>
      <JsonLd data={crumbs} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/it/case-studies"
              className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
            >
              ← Tutti i case study
            </Link>
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Modernizzazione legacy · Sviluppo guidato dall’AI · DevOps
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              IATP: reverse engineering con AI e pipeline di sviluppo autonoma
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Una piattaforma legacy, cresciuta per anni senza documentazione, andava capita,
              documentata e modernizzata senza il team che l’aveva sviluppata. Dynamics Consulting ha costruito
              una pipeline basata sull’AI che ha ricostruito il sistema con il reverse engineering,
              ha generato in automatico i documenti di analisi e ha poi messo in piedi un workflow
              di sviluppo e test interamente guidato dall’AI.
            </p>
          </div>
        </section>

        <section className="border-b border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "RAG", label: "Generazione intelligente dei documenti" },
              { value: "MCP", label: "Orchestrazione dei server DevOps" },
              { value: "AI-driven", label: "Pipeline di test con Comet" },
              { value: "End-to-end", label: "Dal reverse engineering al deploy" },
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
                IATP è una piattaforma legacy complessa, evoluta negli anni attraverso più team di
                sviluppo, con documentazione minima e nessuna architettura standardizzata. Gli
                sviluppatori originali non erano più disponibili. Il cliente doveva capire che cosa
                facesse davvero il sistema, a livello funzionale e architetturale, produrre una
                documentazione di analisi completa e poi modernizzare ed estendere la piattaforma
                con un processo di sviluppo affidabile e ripetibile.
              </p>
              <p className="mt-4">
                Un reverse engineering manuale su questa scala avrebbe richiesto mesi e prodotto
                documenti già superati prima di essere finiti. Una riscrittura tradizionale era
                troppo rischiosa senza prima avere una comprensione verificata della logica di
                business esistente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Fase 1 — Reverse engineering con l’AI</h2>
              <p>
                Dynamics Consulting ha usato Nexus MDS Core come spina dorsale analitica. L’intero codice legacy è
                stato acquisito in una pipeline RAG basata su Weaviate, creando una base di
                conoscenza interrogabile semanticamente su ogni modulo, funzione, flusso di dati e
                regola di business contenuta nel codice.
              </p>
              <p className="mt-4">
                Con workflow multi-agente orchestrati tramite n8n, il sistema ha generato in
                automatico mappe di contesto: ricostruendo l’architettura funzionale, individuando
                le dipendenze nascoste, mappando la data lineage e segnalando la logica di business
                non documentata. Quel contesto è stato poi usato per generare in automatico
                documenti di analisi strutturati (specifiche funzionali, descrizioni dei diagrammi
                architetturali, dizionari dati e valutazioni dei rischi), tutti prodotti con query
                RAG mirate sul codice acquisito.
              </p>
              <p className="mt-4">
                Man mano che l’analisi avanzava e si generavano nuovi documenti, il motore di
                obsolescenza guidato dall’AI della piattaforma tracciava in automatico quali
                artefatti di analisi precedenti erano stati superati da versioni più nuove e
                complete, mantenendo un grafo di obsolescenza: il team di sviluppo lavorava sempre
                sulla comprensione più aggiornata del sistema.
              </p>
              <p className="mt-4">
                Quello che a un team di analisti avrebbe richiesto mesi è stato prodotto in giorni,
                con la tracciabilità verso il codice sorgente di ogni affermazione di ogni
                documento.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Fase 2 — Pipeline di sviluppo guidata dall’AI</h2>
              <p>
                Con il sistema compreso e documentato a fondo, Dynamics Consulting ha implementato una pipeline di
                sviluppo moderna, potenziata dall’AI:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li>
                  <strong className="text-[#E6EDF3]">Antigravity</strong>: generazione e refactoring
                  del codice assistiti dall’AI, con il contesto generato via RAG come base di
                  ancoraggio, così che ogni modifica al codice partisse da una comprensione
                  verificata del sistema esistente.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Trae IDE</strong>: ambiente di sviluppo
                  integrato con funzioni di AI copilot, collegato alla base di conoscenza del
                  progetto per un completamento del codice consapevole del contesto e una
                  documentazione inline.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Server MCP</strong>: server Model Context
                  Protocol per l’orchestrazione DevOps: pipeline di deployment automatizzate,
                  provisioning dell’infrastruttura, gestione degli ambienti e integrazione CI/CD,
                  tutto coordinato dall’AI.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Comet</strong>: generazione dei test e quality
                  assurance guidate dall’AI. Casi di test derivati in automatico dalle specifiche
                  funzionali prodotte nella Fase 1, con test di regressione continui e analisi della
                  copertura per garantire che la modernizzazione non rompesse il comportamento
                  esistente.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Risultati</h2>
              <p>
                Il progetto ha consegnato un ciclo di vita del software completo e guidato dall’AI
                da un capo all’altro: dalla comprensione di un sistema legacy privo di
                documentazione, alla generazione automatica dei documenti di analisi, fino a una
                pipeline di sviluppo moderna in cui l’AI assiste ogni fase: codice, test, deploy e
                quality assurance.
              </p>
              <p className="mt-4">
                Il reverse engineering basato su RAG ha ridotto la fase di analisi da una stima di
                3-4 mesi a meno di due settimane. La pipeline di sviluppo guidata dall’AI ha
                aumentato la velocità di sviluppo mantenendo la qualità grazie a test automatici e
                consapevoli del contesto. L’intero approccio è oggi ripetibile ed è parte della
                metodologia di Dynamics Consulting per i progetti di modernizzazione legacy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Tecnologie utilizzate</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
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
