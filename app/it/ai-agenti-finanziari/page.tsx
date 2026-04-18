import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Agenti AI per finanza e compliance | Nexus MDS Core",
  description:
    "Governance agenti AI per banche e asset manager: approval gate, audit log immutabile, RBAC, logging LLM. DORA, MiFID II, AI Act compliant.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/it/ai-agenti-finanziari" },
};

export default function AiAgentiFinanziariPage() {
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
              Agenti AI per finanza, compliance e audit
            </h1>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              Un agente AI che opera su dati finanziari non è un chatbot. È un sistema che prende
              decisioni operative. L&apos;audit interno, il risk management e la compliance
              chiederanno: chi ha autorizzato questa azione? Quale modello ha deciso? Su quali
              dati? Il log è immutabile? Il principio dei quattro occhi è stato rispettato?
            </p>
            <p>
              Progettiamo architetture agentiche con governance integrata come vincolo
              architetturale, non come feature aggiunta alla fine:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#7D8FA3]">
              <li>
                <strong className="text-[#E6EDF3]">Approval gate human-in-the-loop</strong>{" "}
                prima di qualsiasi azione di scrittura dell&apos;agente
              </li>
              <li>
                <strong className="text-[#E6EDF3]">Audit trail immutabile</strong> su Postgres
                con periodo di retention configurabile
              </li>
              <li>
                <strong className="text-[#E6EDF3]">RBAC con segregazione di dominio</strong>{" "}
                tra front office, risk, compliance e IT
              </li>
              <li>
                <strong className="text-[#E6EDF3]">Logging LLM completo:</strong> input, output,
                versione del modello, timestamp — per ogni inferenza
              </li>
            </ul>
            <p>
              Ogni decisione dell&apos;agente è spiegabile: chi l&apos;ha attivato, quale
              modello ha deciso, su quali dati, a che ora. Questo è il livello di traceabilità
              che regolatori e audit interni richiedono.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Allineamento normativo:</strong>{" "}
              DORA (resilienza operativa, logging incidenti), MiFID II (traceabilità delle
              decisioni), AI Act (obblighi per sistemi ad alto rischio), GDPR (minimizzazione
              dati, diritto alla spiegazione).
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Esperienza nel settore:</strong> abbiamo
              implementato Dynamics 365 CRM per Banco Mediolanum, illimity Bank e Unipol —
              contesti dove la segregazione dei dati, gli audit trail e le approvazioni
              multi-livello erano requisiti non negoziabili. Le stesse competenze di governance
              guidano oggi la progettazione dei nostri sistemi AI agentici.
            </p>
            <p>
              L&apos;infrastruttura è basata su <strong className="text-[#E6EDF3]">Nexus MDS Core</strong>:
              deployment on-premise, Keycloak per RBAC, n8n per workflow di approvazione,
              Postgres per audit trail. Zero dipendenza da hyperscaler. Data residency EU
              garantita dall&apos;architettura.
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
