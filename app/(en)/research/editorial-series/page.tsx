import type { Metadata } from "next";
import Link from "next/link";
import { BASE_URL } from "@/app/schema-org";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate, getImportedArticles, isoDay, readingMinutes } from "@/lib/imported-articles";
import { alternatesFor } from "@/lib/i18n-routes";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Editorial Series · PLD 2024 & AI Governance",
  description:
    "Ongoing public series on the structural implications of EU PLD 2024, AI Act, and Tech Sovereignty Package for software houses and technical professionals in regulated industries.",
  keywords: [
    "PLD 2024",
    "Product Liability Directive 2024",
    "AI Act software houses",
    "EU regulatory regime",
    "CVE management",
    "software liability",
    "regulatory analysis",
  ],
  alternates: alternatesFor("/research/editorial-series"),
};

/**
 * The ten articles were written in Italian for LinkedIn and imported in full
 * (scripts/import-linkedin-articles.mjs). The Italian originals are served at
 * /it/ricerca/<slug>; this page lists the English translations, served at
 * /research/<slug>. The short framing of each piece is kept here, keyed by the
 * English slug.
 */
const framing: Record<string, { category: string; title: string; subtitle: string }> = {
  "pld-2024-seven-structural-changes": {
    category: "Article I · The seven structural shifts",
    title: "PLD 2024 — the seven structural changes that redefine the sector",
    subtitle:
      "Software as a product even when custom, ten-year liability no contract can limit, warranty versus liability, mandatory security maintenance, customisations as new placings on the market, the individual liability of technical contributors, and supply-chain traceability.",
  },
  "pld-2024-five-plus-one-scenarios": {
    category: "Article II · Five-plus-one development scenarios",
    title: "The 5+1 scenarios and the exposures each one generates",
    subtitle:
      "From WordPress agencies to open-source forks and plugins: six scenarios, in order of exposure, and what each means for the software house, its employees and its external consultants.",
  },
  "pld-2024-a-decade-of-liability": {
    category: "Article III · The decade that changes everything",
    title: "Joint liability, insolvency, and why run-off cover becomes structural",
    subtitle:
      "How the directive restructures the ten-year horizon of producer responsibility for software products.",
  },
  "pld-2024-vulnerability-management": {
    category: "Article IV · Vulnerability management",
    title: "Reasonable diligence and defensible timelines under PLD 2024",
    subtitle:
      "CVE classification, patching windows, and the limit Article 15 places on transferring liability by contract.",
  },
  "pld-2024-jurisdictional-escape": {
    category: "Article V · International configurations",
    title: "Jurisdictional flight, and why it does not exist",
    subtitle:
      "Brussels I bis, Rome II, corporate veil piercing, Italian criminal jurisdiction (Arts. 6-10 of the Criminal Code) and personal criminal liability (Art. 27 of the Constitution).",
  },
  "pld-2024-contracts-and-insurance": {
    category: "Article VI · Contracts & insurance",
    title: "Twenty clauses and the policy, seen from three sides",
    subtitle:
      "Client, software house, signing professional: contracts and insurance cover in asymmetric power dynamics.",
  },
  "pld-2024-the-other-half-of-the-problem": {
    category: "Article VII · Governance and roles",
    title: "The other half of the problem",
    subtitle:
      "The RACI matrix as a governance fiction unless it is tied to technical systems, three operational transformations, and the senior solution architect's position under PLD 2024.",
  },
  "pld-2024-so-what-now": {
    category: "Article VIII · From diagnosis to action",
    title: "So what now?",
    subtitle:
      "Four moves for the months before 9 December 2026: audit the products in scope, review the contracts, check the insurance, build an audit trail that holds up as evidence.",
  },
  "pld-2024-what-to-do-on-monday-morning": {
    category: "Article IX · The method",
    title: "What to do on Monday morning",
    subtitle:
      "Which rules actually apply, where they collide, and how a compliance floor turns into a project plan — shown on three hypothetical companies.",
  },
  "pld-2024-digital-sovereignty-architecture": {
    category: "Article X · Sovereign infrastructure",
    title: "Digital sovereignty: not a slogan, an architecture",
    subtitle:
      "Residency, jurisdiction and continuity are three different things, and the five requirements an infrastructure has to meet to keep a regulated AI system defensible in production.",
  },
};

const articles = getImportedArticles()
  .filter((a) => a.lang === "en")
  .map((a) => ({
  ...a,
    ...(framing[a.slug] ?? { category: a.series ?? "", title: a.title, subtitle: a.standfirst }),
    href: `/research/${a.slug}`,
  }));

const crumbs = breadcrumbSchema(`${BASE_URL}/research/editorial-series`, [
  { name: "Home", path: "/" },
  { name: "Research", path: "/research" },
  { name: "Editorial series" },
]);

const seriesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}/research/editorial-series#webpage`,
    url: `${BASE_URL}/research/editorial-series`,
    name: "Editorial series — PLD 2024 & AI governance",
    inLanguage: "en",
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

export default function EditorialSeriesPage() {
  return (
    <>
      <JsonLd data={seriesSchema} />
      <NavBar />
      <main>
      <section className="hero-constellation pt-32 pb-16">
        <div className="hero-content max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              Editorial Series · Public Research
            </p>
            <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E6EDF3] leading-[1.05] tracking-tight mb-6">
              PLD 2024 &amp; AI Governance for Software Houses
            </h1>
            <p className="text-[#7D8FA3] text-lg md:text-xl max-w-2xl leading-relaxed">
              An ongoing public series on the structural implications of the new EU regulatory
              regime — Product Liability Directive 2024, AI Act, Tech Sovereignty Package — for
              software houses and technical professionals operating in regulated industries.
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
                    {formatDate(a.datePublished, "en")}
                  </time>{" "}
                  · {readingMinutes(a.words)} min · translated from Italian
                </p>
                <span className="text-[#00B4D8] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  Read the article →
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-[#7D8FA3] text-sm leading-relaxed max-w-2xl">
            The ten articles were written in Italian and first appeared on LinkedIn. They are
            published here in full in English translation; each one links back to its LinkedIn
            source and to the Italian original, which is also hosted on this site in the{" "}
            <Link href="/it/ricerca/serie-editoriale" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              Italian edition of the series
            </Link>{" "}
            (in Italian). This domain is the archive of record for both languages.
          </p>
        </div>
      </section>

      <CTASection />
      </main>
      <Footer />
    </>
  );
}
