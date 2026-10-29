import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { ORG_ID, PERSON_ID, WEBSITE_ID } from "@/app/schema-org";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

const PAGE_URL = "https://www.dynamicsconsulting.it/it/chi-siamo";

const TITLE = "Chi siamo — Corrado Patierno, consulenza e ingegneria AI";
const DESCRIPTION =
  "Dynamics Consulting è uno studio italiano indipendente di consulenza e ingegneria AI guidato da Corrado Patierno: governance e compliance dell’AI, architettura AI enterprise, infrastruttura sovrana. Oltre 25 anni di sistemi enterprise, Innovation Manager MISE, autore di Logistica Fluida.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/it/chi-siamo"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "it_IT",
  },
};

const values = [
  {
    title: "Risultati, non deliverable",
    body: "Misuriamo il successo sull’impatto per il business, non sulle righe di codice o sulle slide. Ogni incarico parte da una definizione chiara di cosa significa successo e finisce quando lo si raggiunge.",
  },
  {
    title: "Trasparenza radicale",
    body: "Diciamo ai clienti quello che hanno bisogno di sentirsi dire. Se esiste una soluzione più semplice, lo diciamo. Se una tempistica non è realistica, lo diciamo. La fiducia nel lungo periodo si costruisce sull’onestà.",
  },
  {
    title: "AI sovrana per impostazione",
    body: "Le organizzazioni dei settori regolati hanno il diritto di far girare l’AI sulla propria infrastruttura, sotto la propria governance, senza dipendere dagli hyperscaler. È una convinzione che orienta ogni architettura che progettiamo.",
  },
  {
    title: "Specializzazione profonda",
    body: "Lavoriamo con una rete selezionata di specialisti di comprovata esperienza invece di far crescere un grande team generalista. Ogni progetto riceve le competenze giuste, non il primo consulente disponibile.",
  },
];

const timeline = [
  {
    period: "1997 – 2010",
    title: "Da sviluppatore a responsabile di programma",
    body: "Inizia come sviluppatore di sistemi a Napoli, lavorando su RFID, logistica e infrastrutture critiche, tra cui un progetto per la Biblioteca Apostolica Vaticana. Poi il trasferimento a Milano e programmi via via più grandi: senior consultant in Capgemini (2011) e in Avanade (2016), alla guida di team multidisciplinari su progetti enterprise per clienti come Vodafone, RINA, Fincantieri e Unipol. Con Banca Mediolanum il rapporto era rovesciato: cliente diretto, con il mandato di governare i fornitori esterni del programma — tra cui Capgemini e Avanade — comprese le valutazioni sulle loro prestazioni e le decisioni di rinnovo dei contratti. Ne è uscita un’esperienza profonda in integrazione enterprise, data platform e ambienti legacy complessi, da entrambi i lati del contratto.",
  },
  {
    period: "2015 – 2019",
    title: "Ruoli da CTO e guida delle piattaforme",
    body: "CTO (prima di fatto, poi formalmente) in Nexo/Sefitalia, con la ristrutturazione della software factory e la responsabilità delle piattaforme ERP, WFM e SFM per una rete di gruppo da 1.800 persone. In parallelo, la guida del programma Nespresso Intervallo in ATOS: tre filoni di delivery tra Dynamics F&O, backend custom e frontend IoT, con circa 40 persone.",
  },
  {
    period: "2019 – oggi",
    title: "Consulente indipendente e Innovation Manager",
    body: "Il passaggio alla piena indipendenza, unendo delivery diretta dei progetti e advisory strategica. Organizzazioni delle fasi precedenti sono tornate come clienti diretti di Dynamics Consulting — tra queste Avanade, che ha ingaggiato un suo ex dipendente come consulente esterno. Innovation Manager certificato MISE. Certificazioni ISO 56002:2020, IBM Enterprise Design Thinking e Microsoft Dynamics 365 Solution Architecture. Focus sempre più marcato sulla modernizzazione dei sistemi enterprise legacy assistita dall’AI, sulle architetture RAG e sull’infrastruttura AI on-premise per i settori regolati. Tra i clienti attualmente in produzione ci sono Federfarma Lombarda e CureSicure.",
  },
  {
    period: "2026",
    title: "Pubblicazione di Logistica Fluida",
    body: "Esce Logistica Fluida, un framework concettuale e operativo per sistemi logistici adattivi, centrato sulle decisioni basate sui flussi, sulla resilienza e sulla riconfigurazione continua delle supply chain. Il libro tiene insieme operazioni logistiche, sistemi informativi e disegno organizzativo, ed è una base per il supporto alle decisioni e per il ragionamento operativo assistito dall’AI in ambienti complessi.",
  },
];

/* Person and Organization are declared in app/schema-org.ts; referenced by @id here. */
const aboutSchema = [
  {
    "@context": "https://schema.org",
    /* Both: the page is the company's about page and the founder's profile,
       and consumers look for ProfilePage when resolving a person. */
    "@type": ["AboutPage", "ProfilePage"],
    "@id": `${PAGE_URL}#webpage`,
    name: "Chi è Dynamics Consulting",
    url: PAGE_URL,
    inLanguage: "it",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: { "@id": PERSON_ID },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    description:
      "Consulente tecnologico, architetto AI, Innovation Manager certificato MISE e autore di Logistica Fluida. Oltre 25 anni di delivery sul campo tra sistemi enterprise, data platform, cloud e infrastruttura AI.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Milano",
      addressCountry: "IT",
    },
  },
];

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Chi siamo" },
]);

export default function ChiSiamoPage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <JsonLd data={aboutSchema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">Chi siamo</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Nati da una convinzione, non dalla convenienza
            </h1>
            <p className="text-lg text-[#7D8FA3] leading-relaxed">
              Dynamics Consulting è uno studio italiano indipendente di consulenza e ingegneria AI,
              guidato da Corrado Patierno da Milano. Si occupa di governance e compliance dell’AI,
              architettura AI enterprise e infrastruttura sovrana per le organizzazioni dei settori
              regolati.
            </p>
            <p className="mt-5 text-lg text-[#7D8FA3] leading-relaxed">
              È nato da una convinzione precisa: le organizzazioni della sanità, del farmaceutico e
              dei settori regolati meritano un’infrastruttura AI che possiedono, governano e di cui
              si fidano — non scatole nere a noleggio che girano sul cloud di qualcun altro.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-12">La nostra storia</p>
            <div className="space-y-12">
              {timeline.map((item) => (
                <div key={item.period} className="flex gap-6">
                  <div className="shrink-0 w-[110px] text-right">
                    <span className="text-xs font-mono text-[#00B4D8] tracking-wider">{item.period}</span>
                  </div>
                  <div className="relative pl-6 border-l border-[#30363D]">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#00B4D8]" />
                    <h3 className="text-base font-bold text-[#E6EDF3] mb-2">{item.title}</h3>
                    <p className="text-[#7D8FA3] leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 px-6 bg-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-10">Guida</p>
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4D8] to-[#0D47A1] flex items-center justify-center text-white font-bold text-xl shrink-0">
                CP
              </div>
              <div>
                <div className="text-xl font-bold text-[#E6EDF3] mb-1">Corrado Patierno</div>
                <div className="text-sm text-[#00B4D8] mb-4">Founder &amp; CEO</div>
                <p className="text-[#7D8FA3] leading-relaxed mb-5">
                  Consulente tecnologico, architetto AI, Innovation Manager certificato MISE e autore di{" "}
                  <em>Logistica Fluida</em>. Oltre 25 anni di delivery sul campo tra sistemi enterprise,
                  data platform, cloud e infrastruttura AI. Tra i clienti: ATOS, Avanade, Capgemini,
                  illimity, Banca Mediolanum, Nespresso, RINA e Fincantieri. Socio Mensa. Vive e lavora a Milano.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Infrastruttura AI", "Architettura enterprise", "Data platform", "Microsoft Dynamics 365", "Sanità e farmaceutico", "ISO 56002", "Innovation management"].map((tag) => (
                    <span key={tag} className="text-xs font-mono font-semibold px-3 py-1 rounded-full border border-[#30363D] text-[#7D8FA3]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network model */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">Come lavoriamo</p>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">Guida diretta, rete di specialisti</h2>
            <p className="text-[#7D8FA3] leading-relaxed text-lg mb-5">
              Ogni incarico di Dynamics Consulting è guidato direttamente da Corrado Patierno. A
              seconda del perimetro, coinvolgiamo una rete selezionata di specialisti indipendenti
              senior in ingegneria AI, architettura dei dati, infrastruttura cloud e integrazione
              enterprise, ognuno con esperienze in produzione nei settori regolati.
            </p>
            <p className="text-[#7D8FA3] leading-relaxed text-lg">
              Significa che dopo la firma non vieni passato a un junior. Chi definisce il lavoro è
              chi lo consegna — ed è anche per questo che la{" "}
              <Link
                href="/it/consulenza-ai-governance-compliance"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                consulenza su governance e compliance dell’AI
              </Link>{" "}
              e l’ingegneria che la mette in pratica stanno nello stesso studio.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 bg-[#161B22]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-3">Principi</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#E6EDF3]">I nostri valori</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-[#0D1117] rounded-2xl p-8 border border-[#30363D]">
                  <h3 className="text-lg font-bold text-[#E6EDF3] mb-3">{v.title}</h3>
                  <p className="text-[#7D8FA3] leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Parliamo del tuo progetto"
          subtitle="Un’infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Scrivici."
          ctaLabel="Inizia la conversazione →"
          ctaHref="/it/contatti"
        />
      </main>
      <Footer />
    </>
  );
}
