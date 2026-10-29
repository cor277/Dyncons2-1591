import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE } from "@/app/og";
import { BASE_URL } from "@/app/schema-org";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { alternatesFor } from "@/lib/i18n-routes";
import { formatDate, getImportedArticles, isoDay, readingMinutes } from "@/lib/imported-articles";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

const PATH = "/it/ricerca/serie-editoriale";
const PAGE_URL = `${BASE_URL}${PATH}`;
const DESCRIPTION =
  "Serie pubblica e in corso sulle implicazioni strutturali della PLD 2024, dell'AI Act e del Tech Sovereignty Package europei per software house e professionisti tecnici nei settori regolamentati.";

export const metadata: Metadata = {
  title: "Serie editoriale · PLD 2024 e governance dell'AI",
  description: DESCRIPTION,
  keywords: [
    "PLD 2024",
    "direttiva responsabilità da prodotto 2024",
    "AI Act software house",
    "regime normativo UE",
    "gestione CVE",
    "responsabilità del software",
    "analisi normativa",
  ],
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "Serie editoriale · PLD 2024 e governance dell'AI",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "it_IT",
  },
};

/**
 * The ten PLD 2024 articles, in the Italian they were written in, served from
 * /it/ricerca/<slug>. The card framing (category and subtitle) is the Italian
 * version of the one on /research/editorial-series; the title is the author's.
 */
const framing: Record<string, { category: string; subtitle: string }> = {
  "pld-2024-sette-cambi-strutturali": {
    category: "Articolo I · I sette cambi strutturali",
    subtitle:
      "Il software come prodotto, gli aggiornamenti come obbligo del produttore, responsabilità decennale, presunzioni di difettosità, asimmetria probatoria, responsabilità solidale e responsabilità per i componenti.",
  },
  "pld-2024-cinque-piu-uno-scenari": {
    category: "Articolo II · I 5+1 scenari di sviluppo",
    subtitle:
      "Sviluppo su commessa, SaaS, integrazione custom, licenza di IP, open source, sistemi embedded: cosa significa ciascuno per la software house, i suoi dipendenti e i consulenti esterni.",
  },
  "pld-2024-decennio-responsabilita": {
    category: "Articolo III · Il decennio che cambia tutto",
    subtitle:
      "Come la direttiva ridisegna l'orizzonte decennale della responsabilità del produttore per i prodotti software.",
  },
  "pld-2024-vulnerability-management-cve": {
    category: "Articolo IV · Vulnerability management",
    subtitle:
      "Classificazione delle CVE, finestre di patching e il limite che l'articolo 15 pone al trasferimento contrattuale della responsabilità.",
  },
  "pld-2024-fuga-giurisdizionale": {
    category: "Articolo V · Configurazioni internazionali",
    subtitle:
      "Bruxelles I bis, Roma II, superamento dello schermo societario, giurisdizione penale italiana (artt. 6-10 c.p.) e personalità della responsabilità penale (art. 27 della Costituzione).",
  },
  "pld-2024-contratti-e-polizza": {
    category: "Articolo VI · Contratti e polizza",
    subtitle:
      "Committente, software house, professionista che firma: contratti e coperture assicurative in rapporti di forza asimmetrici.",
  },
  "pld-2024-altra-meta-del-problema": {
    category: "Articolo VII · Governance e ruoli",
    subtitle:
      "La matrice RACI come finzione di governance se non è agganciata ai sistemi tecnici, tre trasformazioni operative e la posizione del Solution Architect senior nel regime PLD 2024.",
  },
  "pld-2024-e-mo": {
    category: "Articolo VIII · Dalla diagnosi all'azione",
    subtitle:
      "Quattro movimenti per i mesi prima del 9 dicembre 2026: audit dei prodotti, revisione dei contratti, verifica della polizza, audit trail difendibile in giudizio.",
  },
  "pld-2024-cosa-faccio-lunedi-mattina": {
    category: "Articolo IX · Il metodo",
    subtitle:
      "Quali norme si applicano davvero, dove collidono e come il pavimento di compliance diventa un piano di progetto, su tre ipotesi di azienda.",
  },
  "pld-2024-sovranita-digitale-architettura": {
    category: "Articolo X · L'infrastruttura sovrana",
    subtitle:
      "Residenza, giurisdizione e continuità sono tre cose diverse, e i cinque requisiti che un'infrastruttura deve soddisfare per tenere difendibile in produzione un sistema AI regolato.",
  },
};

const articles = getImportedArticles()
  .filter((a) => a.lang === "it")
  .map((a) => ({
    ...a,
    ...(framing[a.slug] ?? { category: a.series ?? "", subtitle: a.standfirst }),
    href: `/it/ricerca/${a.slug}`,
  }));

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Ricerca", path: "/it/ricerca" },
  { name: "Serie editoriale" },
]);

const seriesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Serie editoriale — PLD 2024 e governance dell'AI",
    inLanguage: "it",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.title,
        url: `${BASE_URL}${a.href}`,
      })),
    },
  },
  crumbs,
];

export default function SerieEditorialePage() {
  return (
    <>
      <JsonLd data={seriesSchema} />
      <NavBar />
      <main>
      <section className="hero-constellation pt-32 pb-16">
        <div className="hero-content max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              Serie editoriale · Ricerca pubblica
            </p>
            <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E6EDF3] leading-[1.05] tracking-tight mb-6">
              PLD 2024 e governance dell&apos;AI per le software house
            </h1>
            <p className="text-[#7D8FA3] text-lg md:text-xl max-w-2xl leading-relaxed">
              Una serie pubblica, in corso, sulle implicazioni strutturali del nuovo regime normativo
              europeo — direttiva sulla responsabilità da prodotto 2024, AI Act, Tech Sovereignty
              Package — per le software house e i professionisti tecnici che operano nei settori
              regolamentati.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0D1117]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={a.href}
                className="group flex flex-col gap-4 bg-[#161B22] border border-[#30363D] rounded-xl p-6 hover:border-[#00B4D8] transition-colors duration-200"
              >
                <p className="text-[#00B4D8] text-[10px] font-mono font-medium tracking-[0.15em] uppercase">
                  {a.category}
                </p>
                <h3 className="font-syne text-xl font-bold text-[#E6EDF3] leading-tight group-hover:text-[#00B4D8] transition-colors">
                  {a.title}
                </h3>
                <p className="text-[#7D8FA3] text-sm leading-relaxed flex-1">{a.subtitle}</p>
                <p className="text-[#7D8FA3] text-xs font-mono">
                  <time dateTime={isoDay(a.datePublished)}>
                    {formatDate(a.datePublished, "it")}
                  </time>{" "}
                  · {readingMinutes(a.words)} min di lettura
                </p>
                <span className="text-[#00B4D8] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  Leggi l&apos;articolo →
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-[#7D8FA3] text-sm leading-relaxed max-w-2xl">
            I dieci articoli sono pubblicati qui per intero, nell&apos;italiano in cui sono stati
            scritti. Ognuno è uscito prima su LinkedIn e rimanda a quell&apos;originale; questo
            dominio è l&apos;archivio di riferimento, e la versione canonica di ogni articolo è
            quella su questo sito.
          </p>
        </div>
      </section>

      <CTASection
        title="Parliamo del tuo progetto"
        subtitle="Infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Scrivici."
        ctaLabel="Inizia la conversazione →"
        ctaHref="/it/contatti"
      />
      </main>
      <Footer />
    </>
  );
}
