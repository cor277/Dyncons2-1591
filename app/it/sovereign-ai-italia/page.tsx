import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Sovereign AI Italia — Infrastruttura AI Governabile",
  description:
    "Sovereign AI per le organizzazioni italiane in settori regolamentati. AI Act, GDPR, NIS2. Nexus MDS Core — piattaforma AI on-premise per healthcare, pharma e industrie regolamentate.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/it/sovereign-ai-italia" },
};

export default function SovereignAiItaliaPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Risorse in italiano
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Sovereign AI per le organizzazioni italiane in settori regolamentati
            </h1>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              Il concetto di <strong className="text-[#E6EDF3]">Sovereign AI</strong> — intelligenza
              artificiale sovrana — descrive un&apos;infrastruttura AI che un&apos;organizzazione possiede,
              governa e controlla interamente, senza dipendenza da provider cloud esterni. Nel contesto
              normativo italiano ed europeo del 2025-2026, non si tratta di una preferenza tecnologica:
              è una necessità regolamentare.
            </p>
            <p>
              L&apos;AI Act europeo (in vigore da agosto 2024, con obblighi progressivi fino al 2027),
              il GDPR, la Direttiva NIS2, e la Legge 132/2025 — prima legge italiana organica
              sull&apos;AI — creano un quadro in cui le organizzazioni in sanità, farmaceutica,
              finanza e pubblica amministrazione devono dimostrare controllo effettivo sui propri
              sistemi AI: dove risiedono i dati, come vengono processati, chi ha accesso, e come
              vengono governati gli output dei modelli.
            </p>
            <p>
              Per le organizzazioni mid-market italiane, questo rappresenta una sfida specifica.
              Le grandi enterprise possono investire in team interni e infrastrutture proprietarie.
              Le startup possono accettare il rischio cloud. Il mid-market — ospedali, catene di
              farmacie, aziende farmaceutiche regionali, utilities — ha bisogno di una piattaforma
              che sia enterprise-grade ma accessibile, sovrana ma gestibile.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Nexus MDS Core</strong> è la piattaforma costruita
              specificamente per questo segmento. Circa 16 servizi Docker orchestrati — inferenza LLM,
              pipeline RAG, autenticazione Zero-Trust, workflow engine, observability — deployabili
              su Kubernetes o bare-metal, interamente on-premise. Progettata per sanità e pharma,
              pronta per l&apos;AI Act, conforme GDPR, con residenza dati garantita nell&apos;UE.
            </p>
            <p>
              Dynamics Consulting è lo specialista mid-market per l&apos;AI sovrana in Italia.
              A differenza dei system integrator generalisti, il nostro focus è esclusivamente
              su infrastrutture AI on-premise per settori regolamentati. Ogni progetto è guidato
              direttamente dal fondatore, Corrado Patierno, con oltre 25 anni di esperienza in
              sistemi enterprise.
            </p>
            <div className="pt-6">
              <CTAButton label="Richiedi una demo di Nexus →" href="/contact" variant="primary" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
