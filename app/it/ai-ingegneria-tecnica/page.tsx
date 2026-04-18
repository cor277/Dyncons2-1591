import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "AI per norme tecniche e ingegneria | Nexus MDS Core",
  description:
    "RAG su ISO, UNI, EN, capitolati e revisioni per studi di ingegneria. Risposte citate con norma e revisione corretta. Traceabilità per responsabilità professionale.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/it/ai-ingegneria-tecnica" },
};

export default function AiIngegneriaTecnicaPage() {
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
              Intelligenza artificiale per norme tecniche e ingegneria
            </h1>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              Gli studi di ingegneria — civile, strutturale, aerospaziale, industriale — operano
              su corpora documentali enormi: norme ISO e UNI, standard EN, specifiche di progetto,
              capitolati, documentazione appaltatori, storici di revisione, manuali tecnici. Un
              ingegnere senior conosce questo corpus per istinto. Ma il corpus ha migliaia di
              pagine, cambia costantemente, e varia per cliente e giurisdizione.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Il problema reale</strong> non è trovare un
              documento — è trovare la clausola giusta, nella revisione giusta, applicabile alla
              data di progetto corretta. Un sistema che restituisce la norma sbagliata o una
              revisione obsoleta non è solo inutile — è un rischio per la responsabilità
              professionale.
            </p>
            <p>
              Costruiamo sistemi RAG che ragionano sulla documentazione tecnica. Gli ingegneri
              interrogano in linguaggio naturale e ricevono risposte citate — norma, numero di
              articolo, revisione. Il sistema è <strong className="text-[#E6EDF3]">version-aware</strong>:
              sa quale revisione di uno standard si applica a una data di progetto specifica,
              e non risponderà con una clausola obsoleta.
            </p>
            <p>
              Ogni risposta è registrata: chi ha chiesto, quando, quale documento ha risposto.
              Questo non è opzionale in contesti con responsabilità professionale. Il log è
              immutabile e consultabile per audit.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Background del fondatore:</strong> Corrado
              Patierno ha formazione in ingegneria aeronautica e ha guidato il progetto IATP —
              reverse engineering AI-driven di una piattaforma legacy nel settore aviation.
              Questo background informa direttamente il modo in cui progettiamo sistemi RAG
              per documentazione tecnica: la precisione non è un nice-to-have, è un requisito
              strutturale.
            </p>
            <p>
              L&apos;infrastruttura è basata su <strong className="text-[#E6EDF3]">Nexus MDS Core</strong>,
              deployabile on-premise. Chunking semantico per clausola, metadati con gerarchia
              completa della norma, vector search con Weaviate. I dati restano nel perimetro
              dello studio. Conformità GDPR per design.
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
