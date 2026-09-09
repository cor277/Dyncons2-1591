import type { Metadata } from "next";
import { OG_IMAGE } from "@/app/og";
import { ORG_ID, NEXUS_ID, WEBSITE_ID } from "@/app/schema-org";
import { breadcrumbSchema, faqSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Sovereign AI Italia — Infrastruttura AI Governabile",
  description:
    "Sovereign AI per le organizzazioni italiane in settori regolamentati. AI Act, GDPR, NIS2. Nexus MDS Core — piattaforma AI on-premise per healthcare, pharma e industrie regolamentate.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/it/sovereign-ai-italia" },
  openGraph: {
    images: OG_IMAGE,
    title: "Sovereign AI Italia — Infrastruttura AI Governabile",
    description:
      "Sovereign AI per le organizzazioni italiane in settori regolamentati. AI Act, GDPR, NIS2. Nexus MDS Core — piattaforma AI on-premise per healthcare, pharma e industrie regolamentate.",
    url: "https://www.dynamicsconsulting.it/it/sovereign-ai-italia",
    type: "website",
    locale: "it_IT",
  },
};

const faqs = [
  {
    q: "Sovereign AI vuol dire per forza tutto on-premise?",
    a: "No. Vuol dire controllo su giurisdizione, governo operativo e sostituibilità dei componenti. Un sistema in cui dati, retrieval, identità e audit restano locali e solo la generazione finale passa da un endpoint esterno sostituibile è sovrano nel senso che conta, purché quel confine sia dichiarato e i dati personali non lo attraversino.",
  },
  {
    q: "Che hardware serve per partire?",
    a: "Meno di quanto si pensi, se il caso d’uso è documentale. Il sistema in produzione per Federfarma Lombarda fa girare modello locale, filtro privacy ed embedding su una singola GPU da 8 GB; la stessa architettura, senza modifiche, gira su schede da 48 GB quando anche la generazione finale deve rientrare in casa. Il dimensionamento si decide dopo il disegno del retrieval, non prima.",
  },
  {
    q: "Dynamics Consulting certifica la conformità del sistema?",
    a: "No, e nessuno può farlo: la conformità si stabilisce con le procedure che la norma stessa prevede. Quello che si consegna è un documento firmato su cosa c’è, cosa manca e in che ordine chiudere il divario — insieme all’architettura che regge quei controlli.",
  },
  {
    q: "Da dove conviene cominciare?",
    a: "Da un assessment di esposizione: capire dove si ferma la responsabilità del fornitore e dove comincia la tua, prima di scegliere la piattaforma. È un impegno a perimetro e prezzo fissi, con deliverable firmato.",
  },
];

const PAGE_URL = "https://www.dynamicsconsulting.it/it/sovereign-ai-italia";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Sovereign AI Italia — Infrastruttura AI Governabile",
    description: "Sovereign AI per le organizzazioni italiane in settori regolamentati. AI Act, GDPR, NIS2. Nexus MDS Core — piattaforma AI on-premise per healthcare, pharma e industrie regolamentate.",
    inLanguage: "it",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": ORG_ID }, { "@id": NEXUS_ID }],
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  faqSchema(PAGE_URL, faqs),
  breadcrumbSchema(PAGE_URL, [
    { name: "Home", path: "/" },
    { name: "Risorse in italiano", path: "/it" },
    { name: "Sovereign AI Italia — Infrastruttura AI Governabile" },
  ]),
];

export default function SovereignAiItaliaPage() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen" lang="it">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Risorse in italiano
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Sovereign AI per le organizzazioni italiane in settori regolamentati
            </h1>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              <strong className="text-[#E6EDF3]">Sovereign AI</strong> — intelligenza artificiale
              sovrana — non vuol dire soltanto &ldquo;tutto on-premise&rdquo;. Vuol dire che
              l&apos;organizzazione mantiene il controllo su tre cose: la{" "}
              <strong className="text-[#E6EDF3]">giurisdizione</strong> a cui i dati sono
              sottoposti, il <strong className="text-[#E6EDF3]">governo operativo</strong> del
              sistema — chi può cambiare modello, filtri e condizioni, e con quale preavviso — e
              la <strong className="text-[#E6EDF3]">sostituibilità</strong> dei componenti, che è
              ciò che rende le prime due esigibili invece che contrattuali. Nel quadro normativo
              italiano ed europeo del 2025-2026 non è una preferenza tecnologica: è la condizione
              per poter dimostrare quello che la norma chiede.
            </p>
            <p>
              L&apos;AI Act europeo (in vigore da agosto 2024, con obblighi progressivi fino al 2027),
              il GDPR, la Direttiva NIS2, e la Legge 132/2025 — prima legge italiana organica
              sull&apos;AI — creano un quadro in cui le organizzazioni in sanità, farmaceutica,
              finanza e pubblica amministrazione devono dimostrare controllo effettivo sui propri
              sistemi AI: dove risiedono i dati, come vengono processati, chi ha accesso, e come
              vengono governati gli output dei modelli.
            </p>
            <p>
              Per le organizzazioni mid-market italiane, questo rappresenta una sfida specifica.
              Le grandi enterprise possono investire in team interni e infrastrutture proprietarie.
              Le startup possono accettare il rischio cloud. Il mid-market — ospedali, catene di
              farmacie, aziende farmaceutiche regionali, utilities — ha bisogno di una piattaforma
              che sia enterprise-grade ma accessibile, sovrana ma gestibile.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Nexus MDS Core</strong> è la piattaforma costruita
              specificamente per questo segmento. Circa 16 servizi Docker orchestrati — inferenza LLM,
              pipeline RAG, autenticazione Zero-Trust, workflow engine, observability — deployabili
              su Kubernetes o bare-metal, interamente on-premise. Progettata per sanità e pharma,
              costruita sui requisiti dell&apos;AI Act, con i controlli GDPR mappati e residenza
              dei dati nell&apos;UE.
            </p>
            <p>
              Dynamics Consulting è lo specialista mid-market per l&apos;AI sovrana in Italia.
              A differenza dei system integrator generalisti, il nostro focus è esclusivamente
              su infrastrutture AI on-premise per settori regolamentati. Ogni progetto è guidato
              direttamente dal fondatore, Corrado Patierno, con oltre 25 anni di esperienza in
              sistemi enterprise.
            </p>
            <div className="pt-6">
              <CTAButton label="Richiedi una demo di Nexus →" href="/contact" variant="primary" />
            </div>
          </div>
        </section>
        {/* Tassonomia — la stessa usata in tutto il sito */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Tre modelli, non uno solo</h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-6">
              &ldquo;Sovrano&rdquo; da solo è diventato un termine di marketing. Questa è la
              tassonomia usata in tutto il sito, e la prima cosa che un progetto deve decidere è
              quale dei tre serve davvero — con quello a cui rinuncia in ciascun caso.
            </p>
            <dl className="space-y-5">
              <div className="border-l-2 border-[#00B4D8] pl-5">
                <dt className="font-semibold text-[#E6EDF3] mb-1">AI interamente locale</dt>
                <dd className="text-[#7D8FA3] text-base leading-relaxed">
                  Indicizzazione, retrieval, identità, audit e generazione girano tutti su
                  infrastruttura dell&apos;organizzazione. Sovranità massima, costo hardware
                  massimo, scelta dei modelli limitata a quelli ospitabili.
                </dd>
              </div>
              <div className="border-l-2 border-[#00B4D8] pl-5">
                <dt className="font-semibold text-[#E6EDF3] mb-1">AI sovrana ibrida</dt>
                <dd className="text-[#7D8FA3] text-base leading-relaxed">
                  Dati, retrieval, riconciliazione, identità e audit restano locali; solo la
                  generazione finale chiama un endpoint di inferenza esterno, sotto policy e
                  sostituibile senza riprogettare il sistema. È il modello in produzione a{" "}
                  <Link
                    href="/it/case-studies/federfarma"
                    className="text-[#00B4D8] hover:text-[#E6EDF3]"
                  >
                    Federfarma Lombarda
                  </Link>
                  .
                </dd>
              </div>
              <div className="border-l-2 border-[#00B4D8] pl-5">
                <dt className="font-semibold text-[#E6EDF3] mb-1">Inferenza privata UE</dt>
                <dd className="text-[#7D8FA3] text-base leading-relaxed">
                  Inferenza su infrastruttura privata o residente in UE, con residenza, retention e
                  condizioni di accesso definite esplicitamente. Adatta quando il vincolo è la
                  giurisdizione e non la custodia fisica dell&apos;hardware.
                </dd>
              </div>
            </dl>
            <p className="text-[#7D8FA3] text-base leading-relaxed mt-6">
              Ne segue una cosa che conviene dire chiaramente: la descrizione onesta di un sistema
              ibrido non è &ldquo;tutto on-premise&rdquo; e non è &ldquo;i dati non escono mai
              dal perimetro&rdquo; — il contesto recuperato esce, ed è esattamente per questo che
              i dati personali non devono entrare nell&apos;indice. La versione estesa di questa
              distinzione è in{" "}
              <Link
                href="/answers/private-ai-vs-sovereign-ai"
                className="text-[#00B4D8] hover:text-[#E6EDF3]"
              >
                private AI vs sovereign AI
              </Link>{" "}
              (in inglese).
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-6">Domande frequenti</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-[#E6EDF3] text-base mb-2">{f.q}</h3>
                  <p className="text-[#7D8FA3] text-base leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approfondimenti */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto border-t border-[#30363D] pt-8">
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Approfondimenti</h2>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/platform" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Nexus MDS Core
                </Link>
                <span className="text-[#7D8FA3]"> — la piattaforma, servizio per servizio.</span>
              </li>
              <li>
                <Link
                  href="/it/consulenza-ai-governance-compliance"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  Consulenza AI, governance e compliance
                </Link>
                <span className="text-[#7D8FA3]">
                  {" "}
                  — inquadramento normativo del sistema e architettura che regge gli obblighi.
                </span>
              </li>
              <li>
                <Link
                  href="/it/ai-sanitaria-on-premise"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  AI on-premise per la sanità italiana
                </Link>
                <span className="text-[#7D8FA3]"> — il verticale sanitario.</span>
              </li>
              <li>
                <Link href="/research/legge-132-2025" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Legge 132/2025 e AI in sanità
                </Link>
                <span className="text-[#7D8FA3]"> — cosa cambia, in concreto.</span>
              </li>
              <li>
                <Link href="/cepf" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  CEPF
                </Link>
                <span className="text-[#7D8FA3]">
                  {" "}
                  — il catalogo degli incroci normativi su cui gira la parte di governance.
                </span>
              </li>
            </ul>
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
