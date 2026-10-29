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

const PATH = "/it/case-studies/nespresso";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;
const TITLE = "Programma Nespresso Intervallo — ATOS";
const DESCRIPTION =
  "Programma enterprise su più stream per Nespresso, in ATOS. Dynamics F&O, backend custom, frontend IoT. Una delivery di circa 40 persone su tre stream di lavoro paralleli.";

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
  "Dynamics 365 Finance & Operations",
  "ASP.NET Core",
  "Azure DevOps",
  "Azure IoT Hub",
  "Power BI",
  "Azure SQL",
  "React",
  "Terraform",
];

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Home", path: "/" },
  { name: "Risorse in italiano", path: "/it" },
  { name: "Case study", path: "/it/case-studies" },
  { name: "Nespresso Intervallo" },
]);

export default function NespressoCaseStudyIt() {
  return (
    <>
      <JsonLd data={crumbs} />
      <NavBar />
      <main className="bg-white dark:bg-slate-950 min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/it/case-studies"
              className="text-sm text-cyan-400 hover:text-cyan-300 mb-6 inline-flex items-center gap-1"
            >
              ← Tutti i case study
            </Link>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              FMCG · Programma enterprise · IoT
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Nespresso Intervallo: programma enterprise su più stream, in ATOS
            </h1>
            <p className="text-lg text-slate-300">
              Un programma di delivery complesso, su più stream di lavoro, per le attività B2B
              italiane di Nespresso, gestito tramite ATOS con circa 40 persone su tre stream
              paralleli: Dynamics F&O, servizi backend custom e un frontend con IoT.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
            {[
              { value: "~40", label: "Persone gestite" },
              { value: "3 stream", label: "Stream di lavoro paralleli" },
              { value: "F&O + IoT", label: "Perimetro tecnologico" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{m.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-lg">
            <h2>La sfida</h2>
            <p>
              La divisione B2B italiana di Nespresso doveva modernizzare l’intera ossatura
              operativa: un sistema di gestione ordini ed evasione ormai datato, tracciamento di
              magazzino e logistica scollegato, e nessuna visibilità in tempo reale sulla flotta di
              macchine da caffè connesse installate presso i clienti. Il programma doveva girare
              sotto la governance di ATOS, con impegni di calendario stringenti e standard di
              delivery enterprise.
            </p>

            <h2>Cosa abbiamo consegnato</h2>
            <p>
              Come responsabile del programma, Corrado Patierno ha gestito tre stream di delivery
              paralleli, con circa 40 persone fra consulenti funzionali, sviluppatori, tester e
              sistemisti:
            </p>
            <p>
              <strong>Stream 1 — Dynamics 365 F&amp;O:</strong> implementazione ERP completa su
              gestione ordini, magazzino, logistica e consolidamento finanziario per la business
              unit B2B. Configurato sui requisiti fiscali italiani, compresa la fatturazione
              elettronica (SDI) e l’IVA intracomunitaria.
            </p>
            <p>
              <strong>Stream 2 — Backend custom:</strong> microservizi ASP.NET Core per la logica
              di business non coperta da F&amp;O nativamente: motori di pricing su misura, API del
              portale B2B, integrazione con i sistemi globali di Nespresso ed elaborazione degli
              eventi in tempo reale per tracciare il ciclo di vita degli ordini.
            </p>
            <p>
              <strong>Stream 3 — Frontend IoT:</strong> una dashboard in React collegata ad Azure
              IoT Hub, con la telemetria in tempo reale della flotta di macchine da caffè connesse
              di Nespresso: dati di consumo, alert di manutenzione e trigger per l’assistenza
              predittiva.
            </p>

            <h2>Risultati</h2>
            <p>
              Tutti e tre gli stream hanno consegnato nei tempi, dentro il framework di governance
              di ATOS. L’implementazione F&amp;O ha unificato l’order-to-cash dell’intera attività
              B2B italiana. La dashboard IoT ha dato a Nespresso una visibilità senza precedenti
              sulle prestazioni della flotta di macchine, abilitando la manutenzione proattiva e
              una gestione dei clienti basata sui dati. Il programma ha dimostrato la capacità di
              coordinare in parallelo delivery enterprise grandi e complesse su più stack
              tecnologici.
            </p>

            <h2>Tecnologie utilizzate</h2>
          </div>

          <div className="max-w-3xl mx-auto px-6 mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
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
