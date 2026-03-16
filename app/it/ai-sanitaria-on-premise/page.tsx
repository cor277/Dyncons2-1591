import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "AI On-Premise per la Sanità Italiana",
  description:
    "Infrastruttura AI on-premise per la sanità italiana. GDPR, AI Act, Legge 132/2025. Nexus MDS Core — piattaforma sovrana per ospedali, farmacie e aziende farmaceutiche.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/it/ai-sanitaria-on-premise" },
};

export default function AiSanitariaPage() {
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
              Infrastruttura AI on-premise per la sanità italiana
            </h1>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              Le organizzazioni sanitarie italiane operano in uno dei contesti normativi più stringenti
              al mondo per quanto riguarda il trattamento dei dati. Il GDPR, il Regolamento europeo
              sull&apos;AI (AI Act) e la Legge 132/2025 — prima normativa organica italiana
              sull&apos;intelligenza artificiale — impongono requisiti specifici su governance dei dati,
              data residency e uso secondario delle informazioni cliniche.
            </p>
            <p>
              Per ospedali, ASL, farmacie e aziende farmaceutiche, questo significa che le soluzioni AI
              basate su hyperscaler (Azure, AWS, GCP) presentano rischi concreti di non conformità.
              I dati dei pazienti non possono attraversare confini giurisdizionali incontrollati.
              I modelli linguistici non possono essere ospitati su infrastrutture condivise senza
              garanzie verificabili di isolamento e sovranità.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Nexus MDS Core</strong> è la piattaforma AI
              enterprise progettata specificamente per questi vincoli. Composta da circa 16 servizi
              Docker orchestrati — inclusi inferenza LLM on-premise (vLLM), pipeline RAG con Weaviate,
              autenticazione Zero-Trust con Keycloak, e motore di workflow con n8n — può essere
              deployata su Kubernetes o bare-metal, interamente all&apos;interno del perimetro
              dell&apos;organizzazione.
            </p>
            <p>
              Nexus MDS Core è già in produzione per <strong className="text-[#E6EDF3]">Federfarma
              Lombardia</strong>, dove alimenta una pipeline RAG su oltre 10.000 documenti farmaceutici
              con autenticazione Zero-Trust e accesso mobile PWA. È conforme GDPR, pronta per l&apos;AI Act,
              e garantisce la residenza dei dati nell&apos;Unione Europea.
            </p>
            <p>
              Per le organizzazioni sanitarie italiane che stanno pianificando o hanno già avviato
              progetti AI, la domanda non è più se adottare l&apos;AI, ma come farlo in modo conforme,
              sovrano e sostenibile.
            </p>
            <div className="pt-6">
              <CTAButton label="Scopri Nexus MDS Core →" href="/platform" variant="primary" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
