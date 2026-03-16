import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "Legge 132/2025 e AI in sanità: cosa cambia per ospedali, farmacie e aziende farmaceutiche",
  description:
    "Analisi della Legge n. 132 del 23 settembre 2025, prima normativa organica italiana sull'intelligenza artificiale. Implicazioni per organizzazioni sanitarie e farmaceutiche.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/research/legge-132-2025" },
};

export default function Legge132Article() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link href="/research" className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1">
              ← All articles
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <TechBadge label="AI Governance" variant="cyan" />
              <span className="text-xs text-[#7D8FA3]">October 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Legge 132/2025 e AI in sanità: cosa cambia per ospedali, farmacie e aziende farmaceutiche
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              La Legge n. 132 del 23 settembre 2025 è la prima normativa organica italiana
              sull&apos;intelligenza artificiale. Per le organizzazioni in ambito sanitario e
              farmaceutico, introduce obblighi specifici su governance, data residency e uso
              secondario dei dati. Capire le implicazioni operative è oggi una priorità per chi
              sta pianificando o ha già avviato progetti AI.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Cosa prevede la Legge 132/2025</h2>
              <p>
                La Legge 132/2025 recepisce e integra il Regolamento europeo sull&apos;AI (AI Act,
                Regolamento UE 2024/1689) nel contesto normativo italiano. Introduce un quadro di
                governance specifico per i sistemi AI utilizzati in ambito sanitario, classificandoli
                come sistemi ad alto rischio ai sensi dell&apos;Articolo 6 dell&apos;AI Act.
              </p>
              <p className="mt-4">
                Per le organizzazioni sanitarie, i punti chiave includono: l&apos;obbligo di documentare
                l&apos;intero ciclo di vita del sistema AI (dalla progettazione al deployment), la
                necessità di mantenere un registro dei rischi aggiornato, e requisiti stringenti sulla
                supervisione umana degli output generati da modelli linguistici in contesti clinici.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Implicazioni per chi compra AI in sanità</h2>
              <p>
                Per ospedali, ASL, catene di farmacie e aziende farmaceutiche, la Legge 132/2025
                introduce tre vincoli operativi immediati:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-[#7D8FA3]">
                <li>
                  <strong className="text-[#E6EDF3]">Data residency verificabile:</strong> i dati
                  sanitari processati da sistemi AI devono risiedere in infrastrutture con garanzie
                  documentabili di residenza nell&apos;UE. Questo esclude di fatto i deployment su
                  cloud pubblico senza contratti specifici di data residency.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Governance degli output:</strong> ogni output
                  generato da un sistema AI in contesto clinico deve essere tracciabile, auditabile
                  e soggetto a supervisione umana qualificata. Non basta un disclaimer: serve
                  un&apos;architettura che implementi questi controlli by design.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Uso secondario dei dati:</strong> l&apos;utilizzo
                  di dati sanitari per addestrare o affinare modelli AI richiede basi giuridiche
                  specifiche e misure di anonimizzazione o pseudonimizzazione documentate.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Come Nexus MDS Core risponde a questi requisiti</h2>
              <p>
                Nexus MDS Core è stato progettato con questi vincoli normativi come requisiti di
                architettura, non come feature aggiunte a posteriori. In pratica:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-[#7D8FA3]">
                <li>
                  <strong className="text-[#E6EDF3]">Deployment on-premise:</strong> l&apos;intera
                  piattaforma gira su infrastruttura controllata dall&apos;organizzazione. Nessun dato
                  attraversa confini giurisdizionali. Zero dipendenza da hyperscaler.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Audit trail end-to-end:</strong> ogni interazione
                  con il sistema — query, risposta, fonte utilizzata, modello invocato — è tracciata
                  in un log immutabile, accessibile per ispezioni regolamentari.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Pipeline GDPR-compliant:</strong> anonimizzazione
                  dei dati personali all&apos;ingestion, crittografia at-rest e in-transit,
                  autenticazione Zero-Trust con Keycloak OIDC/PKCE.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">RAG grounded:</strong> il sistema RAG utilizza
                  esclusivamente fonti documentali curate e verificate, eliminando il rischio di
                  hallucination su contenuti clinici.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Conclusione</h2>
              <p>
                La Legge 132/2025 non è un ostacolo all&apos;innovazione AI in sanità — è un quadro
                che rende espliciti requisiti che le architetture AI avrebbero dovuto soddisfare
                comunque. Per le organizzazioni che stanno valutando piattaforme AI, la domanda da
                porsi non è più &quot;quale modello linguistico usare&quot; ma &quot;quale
                infrastruttura mi permette di usarlo in modo conforme, sovrano e verificabile&quot;.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["AI Act", "Legge 132/2025", "Healthcare AI", "GDPR", "Italy"].map((tag) => (
                <TechBadge key={tag} label={tag} variant="cyan" />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Vuoi capire come conformare il tuo progetto AI?"
          subtitle="Parliamo di come Nexus MDS Core può supportare la tua organizzazione nel rispetto della normativa."
          ctaLabel="Request a Nexus demo →"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
