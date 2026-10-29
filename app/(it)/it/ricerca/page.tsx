import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE } from "@/app/og";
import { BASE_URL } from "@/app/schema-org";
import { breadcrumbSchema } from "@/app/seo";
import { RESEARCH_ARTICLES_IT } from "@/app/research-articles-it";
import { JsonLd } from "@/components/seo/JsonLd";
import { alternatesFor } from "@/lib/i18n-routes";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { formatDate, getImportedArticles } from "@/lib/imported-articles";

const PATH = "/it/ricerca";
const PAGE_URL = `${BASE_URL}${PATH}`;
const DESCRIPTION =
  "Analisi, approfondimenti tecnici e ricerca originale di Corrado Patierno su AI sovrana, infrastruttura on-premise, architetture RAG e modernizzazione enterprise per sanità e farmaceutico.";

export const metadata: Metadata = {
  title: "Ricerca e approfondimenti",
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "Ricerca e approfondimenti",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "it_IT",
  },
};

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Ricerca" },
]);

/** The pieces written for the site, from the Italian registry. */
const posts = Object.values(RESEARCH_ARTICLES_IT).map((a) => ({
  slug: `/it/ricerca/${a.slug}`,
  date: a.dateLabel,
  sortKey: `${a.datePublished}-01`,
  tag: a.section,
  title: a.headline,
  summary: a.summary,
}));

/** The PLD series, written for LinkedIn and imported here in full. */
const imported = getImportedArticles()
  .filter((a) => a.lang === "it")
  .map((a) => ({
    slug: `/it/ricerca/${a.slug}`,
    date: formatDate(a.datePublished, "it"),
    sortKey: a.datePublished.slice(0, 10),
    tag: "PLD 2024",
    title: a.title,
    summary: a.standfirst,
  }));

/* Newest first; on the same month the original order of the English index is
   kept, which Array.prototype.sort guarantees because it is stable. */
const allPosts = [...posts, ...imported].sort((a, b) => b.sortKey.localeCompare(a.sortKey));

export default function RicercaPage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Ricerca e approfondimenti
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Ragionare ad alta voce sulla tecnologia
            </h1>
            <p className="text-lg text-[#7D8FA3] max-w-2xl mx-auto">
              Ricerca originale, approfondimenti tecnici e opinioni franche sulle tecnologie che
              stanno dando forma all&apos;AI enterprise, all&apos;infrastruttura dati e alla
              modernizzazione dei sistemi legacy nei settori regolamentati.
            </p>
            <p className="text-base text-[#7D8FA3] max-w-2xl mx-auto mt-4">
              Se cerchi una domanda singola con una risposta diretta, invece di un ragionamento
              lungo, vai alle{" "}
              <Link href="/it/risposte" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                risposte
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Pinned series */}
        <section className="pt-16 pb-4 px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/it/ricerca/serie-editoriale"
              className="group block rounded-2xl border border-[#00B4D8]/40 hover:border-[#00B4D8] bg-gradient-to-br from-[#161B22] to-[#0D1117] p-8 transition-all shadow-sm hover:shadow-[0_0_30px_rgba(0,180,216,0.12)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-widest text-[#00B4D8] bg-[rgba(0,180,216,0.1)] border border-[rgba(0,180,216,0.3)] rounded px-2 py-0.5">
                  Serie editoriale
                </span>
                <span className="text-xs text-[#7D8FA3]">Ricerca pubblica · In corso</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#E6EDF3] group-hover:text-[#00B4D8] transition-colors mb-2">
                PLD 2024 e governance dell&apos;AI per le software house
              </h2>
              <p className="text-[#7D8FA3] text-sm leading-relaxed">
                Una serie pubblica, in corso, sulle implicazioni strutturali del nuovo regime
                normativo europeo — direttiva sulla responsabilità da prodotto 2024, AI Act, Tech
                Sovereignty Package — per le software house e i professionisti tecnici nei settori
                regolamentati. Sei articoli, pubblicati qui per intero.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#00B4D8]">
                Vedi tutti gli articoli →
              </span>
            </Link>
          </div>
        </section>

        {/* Articles */}
        <section className="pt-8 pb-20 px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {allPosts.map((p) => (
              <Link
                key={p.slug}
                href={p.slug}
                className="group block rounded-2xl border border-[#30363D] hover:border-[#00B4D8] bg-[#161B22] p-8 transition-all shadow-sm hover:shadow-[0_0_30px_rgba(0,180,216,0.08)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#00B4D8]">
                    {p.tag}
                  </span>
                  <span className="text-xs text-[#30363D]">·</span>
                  <span className="text-xs text-[#7D8FA3]">{p.date}</span>
                </div>
                <h2 className="text-xl font-bold text-[#E6EDF3] group-hover:text-[#00B4D8] transition-colors mb-2">
                  {p.title}
                </h2>
                <p className="text-[#7D8FA3] text-sm leading-relaxed">{p.summary}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#00B4D8]">
                  Leggi l&apos;articolo →
                </span>
              </Link>
            ))}
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
