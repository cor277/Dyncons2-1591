import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Consulenza AI per il Farmaceutico | Nexus MDS Core",
  description:
    "Consulenza AI per il settore farmaceutico e pharma mid-market. RAG su documenti, workflow agentici, conformità Legge 132/2025 e GDPR. Alternativa sovrana agli hyperscaler.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/it/consulenza-ai-farmaceutico" },
};

export default function ConsulenzaAiFarmaceuticoPage() {
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
              Consulenza AI per il settore farmaceutico e pharma mid-market
            </h1>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              Il settore farmaceutico italiano affronta una sfida unica: integrare l&apos;intelligenza
              artificiale nei processi operativi — dalla gestione documentale alla farmacovigilanza —
              mantenendo la piena conformità normativa. La Legge 132/2025, il GDPR e l&apos;AI Act europeo
              definiscono un quadro regolatorio che rende inadeguate le soluzioni AI cloud-based
              degli hyperscaler per molte applicazioni critiche.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Dynamics Consulting</strong> è specializzata nella
              progettazione e implementazione di infrastrutture AI sovrane per il pharma mid-market.
              Non vendiamo licenze software: progettiamo architetture su misura, le implementiamo
              on-premise, e le rendiamo operative.
            </p>
            <p>
              Il nostro approccio si basa su <strong className="text-[#E6EDF3]">Nexus MDS Core</strong>,
              una piattaforma composta da circa 16 servizi Docker orchestrati che include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#7D8FA3]">
              <li>Pipeline RAG per interrogazione intelligente di documenti farmaceutici</li>
              <li>Workflow agentici con n8n per automazione dei processi regolatori</li>
              <li>Inferenza LLM on-premise con vLLM — nessun dato esce dal perimetro aziendale</li>
              <li>Autenticazione Zero-Trust con Keycloak OIDC/PKCE</li>
              <li>Vector search con Weaviate per ricerca semantica su base documentale</li>
            </ul>
            <p>
              A differenza delle soluzioni basate su Azure, AWS o GCP, con Nexus MDS Core i dati
              restano in Italia, sotto il controllo dell&apos;organizzazione. Non c&apos;è dipendenza
              da hyperscaler, non c&apos;è rischio di lock-in, e la conformità è verificabile
              per design.
            </p>
            <p>
              Nexus MDS Core è già in produzione per Federfarma Lombardia, dove alimenta una pipeline
              RAG su oltre 10.000 documenti farmaceutici con accesso mobile PWA e autenticazione
              Zero-Trust.
            </p>
            <div className="pt-6">
              <CTAButton label="Parliamo del tuo progetto →" href="/contact" variant="primary" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
