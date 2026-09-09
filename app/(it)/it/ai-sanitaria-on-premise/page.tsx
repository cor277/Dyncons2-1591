import type { Metadata } from "next";
import { OG_IMAGE } from "@/app/og";
import { ORG_ID, NEXUS_ID, WEBSITE_ID } from "@/app/schema-org";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "AI On-Premise per la Sanità Italiana",
  description:
    "Infrastruttura AI on-premise per la sanità italiana. GDPR, AI Act, Legge 132/2025. Nexus MDS Core — piattaforma sovrana per ospedali, farmacie e aziende farmaceutiche.",
  alternates: {
    canonical: "https://www.dynamicsconsulting.it/it/ai-sanitaria-on-premise",
    languages: {
      it: "https://www.dynamicsconsulting.it/it/ai-sanitaria-on-premise",
      en: "https://www.dynamicsconsulting.it/ai-on-premise-healthcare",
      "x-default": "https://www.dynamicsconsulting.it/ai-on-premise-healthcare",
    },
  },
  openGraph: {
    images: OG_IMAGE,
    title: "AI On-Premise per la Sanità Italiana",
    description:
      "Infrastruttura AI on-premise per la sanità italiana. GDPR, AI Act, Legge 132/2025. Nexus MDS Core — piattaforma sovrana per ospedali, farmacie e aziende farmaceutiche.",
    url: "https://www.dynamicsconsulting.it/it/ai-sanitaria-on-premise",
    type: "website",
    locale: "it_IT",
  },
};

const PAGE_URL = "https://www.dynamicsconsulting.it/it/ai-sanitaria-on-premise";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "AI On-Premise per la Sanità Italiana",
    description: "Infrastruttura AI on-premise per la sanità italiana. GDPR, AI Act, Legge 132/2025. Nexus MDS Core — piattaforma sovrana per ospedali, farmacie e aziende farmaceutiche.",
    inLanguage: "it",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": ORG_ID }, { "@id": NEXUS_ID }],
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  breadcrumbSchema(PAGE_URL, [
    { name: "Home", path: "/" },
    { name: "Risorse in italiano", path: "/it" },
    { name: "AI On-Premise per la Sanità Italiana" },
  ]),
];

export default function AiSanitariaPage() {
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
              Docker orchestrati — inclusi elaborazione locale, generazione esterna sostituibile, pipeline RAG con Weaviate,
              autenticazione Zero-Trust con Keycloak, e motore di workflow con n8n — può essere
              deployata su Kubernetes o bare-metal, interamente all&apos;interno del perimetro
              dell&apos;organizzazione.
            </p>
            <p>
              Nexus MDS Core è già in produzione per <strong className="text-[#E6EDF3]">Federfarma
              Lombarda</strong>, dove alimenta una pipeline RAG su oltre 10.000 documenti farmaceutici
              con autenticazione Zero-Trust e accesso mobile PWA. Ha i controlli GDPR mappati, è progettata
              sui requisiti dell&apos;AI Act e tiene la residenza dei dati nell&apos;Unione Europea.
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
        {/* Approfondimenti — collegamenti interni contestuali */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto border-t border-[#30363D] pt-8">
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Approfondimenti</h2>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/it/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Federfarma Lombarda — Nexus MDS Core in produzione
                </Link>
                <span className="text-[#7D8FA3]"> — come funziona davvero, in un sistema vivo.</span>
              </li>
              <li>
                <Link href="/answers/llm-on-premise-hospital" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Implementare un LLM on-premise in ospedale
                </Link>
                <span className="text-[#7D8FA3]"> — sequenza, confine dei dati e linea normativa (in inglese).</span>
              </li>
              <li>
                <Link href="/research/legge-132-2025" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Legge 132/2025 e AI in sanità
                </Link>
                <span className="text-[#7D8FA3]"> — cosa cambia per ospedali e farmacie.</span>
              </li>
              <li>
                <Link href="/it/sovereign-ai-italia" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Sovereign AI Italia
                </Link>
                <span className="text-[#7D8FA3]"> — i tre modelli di deployment e come si sceglie.</span>
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
              La direttiva europea sulla responsabilit&agrave; da prodotto include il software fra i
              prodotti e si applica a quelli immessi sul mercato o messi in servizio dal 9 dicembre
              2026. L&apos;assessment di esposizione stabilisce, per
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
