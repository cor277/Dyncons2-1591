import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Implementare AI sui dati aziendali | Nexus MDS Core",
  description:
    "Percorso strutturato per PMI: discovery, MVP RAG, validazione. AI on-premise con Nexus MDS Core, GDPR-compliant, nessuna dipendenza cloud.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/it/ai-dati-aziendali" },
};

export default function AiDatiAziendaliPage() {
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
              Implementare AI sui dati aziendali: il percorso per le PMI
            </h1>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              La maggior parte delle PMI italiane ha lo stesso problema: i dati esistono, ma sono
              sparsi tra cartelle condivise, email, PDF scannerizzati, export da gestionale e file
              Excel usati come database. Non c&apos;è governance, non c&apos;è struttura, non
              c&apos;è un&apos;API. L&apos;idea di &quot;implementare l&apos;AI&quot; sembra
              impossibile senza prima mettere ordine. E mettere ordine sembra un progetto da
              anni, non da mesi.
            </p>
            <p>
              La risposta sbagliata è comprare un tool AI generico. La risposta giusta è capire
              quali domande il business ha bisogno di rispondere a partire da quei dati — e
              costruire il sistema di retrieval intorno a quelle domande, non intorno
              all&apos;infrastruttura.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Il nostro percorso è in tre fasi:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#7D8FA3]">
              <li>
                <strong className="text-[#E6EDF3]">Discovery (2 settimane):</strong> inventario
                dei dati, mappatura degli accessi, valutazione della qualità documentale, audit
                dei formati. Non è overhead — è l&apos;assicurazione che evita tre mesi di
                rework.
              </li>
              <li>
                <strong className="text-[#E6EDF3]">MVP RAG (4 settimane):</strong> sistema
                RAG funzionante su un corpus definito e delimitato. Chunking semantico, vector
                search con Weaviate, risposte con citazione della fonte. Validato con utenti
                reali prima di qualsiasi investimento ulteriore.
              </li>
              <li>
                <strong className="text-[#E6EDF3]">Validazione e scaling:</strong> misurazione
                della qualità del retrieval (MRR, Recall@k), feedback degli utenti, estensione
                progressiva del corpus. Nessun scale-up senza evidenza che il sistema funziona.
              </li>
            </ul>
            <p>
              L&apos;intera infrastruttura è basata su{" "}
              <strong className="text-[#E6EDF3]">Nexus MDS Core</strong>: circa 16 servizi
              Docker orchestrati, deployment on-premise o su server dedicato. I dati non escono
              dal perimetro aziendale. Nessuna dipendenza da hyperscaler. Conformità GDPR
              verificabile per design.
            </p>
            <p>
              Per le PMI che non hanno mai implementato un sistema AI, questo è il punto di
              partenza: un percorso strutturato, con risultati misurabili in sei settimane, non
              un progetto aperto che cresce senza controllo.
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
