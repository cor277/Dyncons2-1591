import type { Metadata } from "next";
import { OG_IMAGE } from "@/app/og";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Consulenza AI per il Farmaceutico | Nexus MDS Core",
  description:
    "Consulenza AI per il settore farmaceutico e pharma mid-market. RAG su documenti, workflow agentici, conformità Legge 132/2025 e GDPR. Alternativa sovrana agli hyperscaler.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/it/consulenza-ai-farmaceutico" },
  openGraph: {
    images: OG_IMAGE,
    title: "Consulenza AI per il Farmaceutico | Nexus MDS Core",
    description:
      "Consulenza AI per il settore farmaceutico e pharma mid-market. RAG su documenti, workflow agentici, conformità Legge 132/2025 e GDPR. Alternativa sovrana agli hyperscaler.",
    url: "https://www.dynamicsconsulting.it/it/consulenza-ai-farmaceutico",
    type: "website",
    locale: "it_IT",
  },
};

export default function ConsulenzaAiFarmaceuticoPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen" lang="it">
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
              <li>Elaborazione locale, generazione esterna sostituibile — i dati personali e riservati non escono mai dal perimetro</li>
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
              Nexus MDS Core è già in produzione per Federfarma Lombarda, dove alimenta una pipeline
              RAG su oltre 10.000 documenti farmaceutici con accesso mobile PWA e autenticazione
              Zero-Trust.
            </p>
            <div className="pt-6">
              <CTAButton label="Parliamo del tuo progetto →" href="/contact" variant="primary" />
            </div>
          </div>
        </section>
        {/* Chiusura — assessment */}
        <section className="px-6 py-16 border-t border-[#21262D] bg-[#11161D]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
              Dove si ferma la responsabilit&agrave; del tuo fornitore, e dove comincia la tua?
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              Dal 9 dicembre 2026 la direttiva europea sulla responsabilit&agrave; da prodotto
              include il software fra i prodotti. L&apos;assessment di esposizione stabilisce, per
              la tua organizzazione, dove passa il confine.
            </p>
            <CTAButton label="Assessment di esposizione &rarr;" href="/it/assessment" variant="primary" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
