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

const PATH = "/it/case-studies/dynamics-crm";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;
const TITLE = "Dynamics 365 CRM — Banche e assicurazioni";
const DESCRIPTION =
  "Implementazioni Dynamics 365 CRM per Banca Mediolanum, illimity e Unipol. Architettura dati costruita attorno ai vincoli di compliance, integrazione con il core banking, audit trail.";

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
  "Dynamics 365 Sales",
  "Dynamics 365 Customer Service",
  "Power Platform",
  "Power Automate",
  "Power BI",
  "Azure Active Directory",
  "Dataverse",
  "Azure Integration Services",
];

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Home", path: "/" },
  { name: "Risorse in italiano", path: "/it" },
  { name: "Case study", path: "/it/case-studies" },
  { name: "Dynamics 365 CRM" },
]);

export default function DynamicsCrmCaseStudyIt() {
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
              Banche e assicurazioni · CRM · Servizi finanziari regolati
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Dynamics 365 CRM in banca e in assicurazione
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Non erano rollout CRM standard. Ogni progetto è stato plasmato dalla complessità
              normativa, dai requisiti di segregazione dei dati e dai livelli di approvazione che
              definiscono i servizi finanziari in Italia. Realizzati in Avanade, in Capgemini e da
              consulente indipendente, sempre con la guida diretta dell’architettura e della
              delivery.
            </p>
          </div>
        </section>

        <section className="border-b border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
            {[
              { value: "5+", label: "Implementazioni CRM" },
              { value: "Banche e assicurazioni", label: "Settori principali" },
              { value: "Enterprise", label: "Scala" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#E6EDF3]">{m.value}</div>
                <div className="text-xs md:text-sm text-[#7D8FA3] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Clients */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-6">Clienti</h2>

              <div className="space-y-6">
                <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6">
                  <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-2">
                    Banca / Wealth management
                  </p>
                  <h3 className="text-lg font-bold text-[#E6EDF3] mb-3">Banca Mediolanum</h3>
                  <p className="text-[#7D8FA3] text-sm leading-relaxed">
                    Banca italiana di wealth management basata su una rete di
                    consulenti, con migliaia di consulenti finanziari operativi in tutto il Paese.
                    Il CRM doveva coprire l’intero ciclo della consulenza (gestione dei lead,
                    tracciamento delle opportunità, reportistica regolamentare) integrandosi con i
                    sistemi di core banking e rispettando la rigida segregazione dei dati fra rete
                    di consulenza, operations e compliance. Power Apps su misura hanno portato la
                    piattaforma ai consulenti sul campo, da mobile.
                  </p>
                </div>

                <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6">
                  <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-2">
                    Digital banking / Fintech
                  </p>
                  <h3 className="text-lg font-bold text-[#E6EDF3] mb-3">illimity Bank</h3>
                  <p className="text-[#7D8FA3] text-sm leading-relaxed">
                    Una banca digital-first focalizzata sul credito alle PMI e sui crediti
                    deteriorati. L’architettura CRM doveva reggere workflow di credito complessi con
                    entità Dataverse custom, integrate con il motore proprietario di credit scoring
                    della banca. Trattandosi di un’organizzazione nativamente digitale, il progetto
                    è andato veloce; ma i vincoli normativi sul trattamento dei dati e sulla
                    verificabilità delle decisioni erano gli stessi di qualsiasi banca tradizionale.
                  </p>
                </div>

                <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6">
                  <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-2">
                    Assicurazioni
                  </p>
                  <h3 className="text-lg font-bold text-[#E6EDF3] mb-3">Unipol</h3>
                  <p className="text-[#7D8FA3] text-sm leading-relaxed">
                    Gruppo assicurativo italiano. Deployment di Dynamics 365
                    Customer Service per la gestione dei sinistri e la relazione con gli assicurati.
                    Integrazione omnicanale (email, telefono, web chat) con instradamento guidato
                    dagli SLA e dashboard operative in Power BI. La difficoltà non era la
                    tecnologia ma la complessità organizzativa: più business unit, ciascuna con i
                    propri livelli di approvazione, requisiti di compliance e dipendenze da sistemi
                    legacy.
                  </p>
                </div>
              </div>
            </div>

            {/* Banking-grade implementation context */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Un contesto di implementazione bancario</h2>
              <div className="text-[#7D8FA3] text-lg leading-relaxed space-y-4">
                <p>
                  Non erano rollout CRM standard. Ogni progetto richiedeva:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Un’architettura dati costruita attorno ai vincoli di compliance, con segregazione fra dati di front office, rischio e operations</li>
                  <li>L’integrazione con il core banking e con i sistemi di segnalazione di vigilanza</li>
                  <li>Requisiti di audit trail allineati ai framework di controllo interno</li>
                  <li>Change management su business unit regolate, con più livelli di approvazione</li>
                </ul>
                <p>
                  È il contesto operativo che determina come Dynamics Consulting affronta ogni progetto AI o dati nei
                  servizi finanziari: la governance non è una funzionalità aggiunta alla fine, è il
                  vincolo da cui si parte.
                </p>
              </div>
            </div>

            {/* Why this matters for AI projects */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Perché conta per i progetti AI</h2>
              <p className="text-[#7D8FA3] text-lg leading-relaxed">
                I pattern di governance implementati in questi progetti CRM (segregazione dei ruoli,
                audit trail, approval gate, compartimentazione dei dati) sono gli stessi che oggi
                servono per i sistemi di agenti AI nei servizi finanziari. La tecnologia è passata
                da Dynamics 365 agli LLM e ai workflow agentici, ma i vincoli no: chi ha autorizzato
                questa azione, su quali dati, con quale modello, e se il log è immutabile. Questa
                esperienza nei servizi finanziari porta Dynamics Consulting a progettare sistemi AI che soddisfano
                questi requisiti dal primo giorno, non con un intervento a posteriori.
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
