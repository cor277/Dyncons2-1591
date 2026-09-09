import type { Metadata } from "next";
import Link from "next/link";
import { BASE_URL } from "@/app/schema-org";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate, getImportedArticles, isoDay, readingMinutes } from "@/lib/imported-articles";
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
  alternates: { canonical: "https://www.dynamicsconsulting.it/research/editorial-series" },
};

/**
 * The series lives on this domain now: the six articles were imported in full
 * from LinkedIn (scripts/import-linkedin-articles.mjs) and are served from
 * /research/<slug>, with the LinkedIn original linked as the place they first
 * appeared. The English framing of each piece is kept here — the articles
 * themselves are in Italian, as written.
 */
const framing: Record<string, { category: string; title: string; subtitle: string }> = {
  "pld-2024-sette-cambi-strutturali": {
    category: "Article I · The seven structural shifts",
    title: "PLD 2024 — the seven structural changes that redefine the sector",
    subtitle:
      "Software as a product, software updates as a producer obligation, ten-year liability, defect presumptions, evidence asymmetry, joint liability, and component liability.",
  },
  "pld-2024-cinque-piu-uno-scenari": {
    category: "Article II · Five-plus-one development scenarios",
    title: "The 5+1 scenarios and the exposures each one generates",
    subtitle:
      "Bespoke build, SaaS, custom integration, IP licensing, open source, embedded systems — and what each means for the software house, its employees and its external consultants.",
  },
  "pld-2024-decennio-responsabilita": {
    category: "Article III · The decade that changes everything",
    title: "Joint liability, insolvency, and why run-off cover becomes structural",
    subtitle:
      "How the directive restructures the ten-year horizon of producer responsibility for software products.",
  },
  "pld-2024-vulnerability-management-cve": {
    category: "Article IV · Vulnerability management",
    title: "Reasonable diligence and defensible timelines under PLD 2024",
    subtitle:
      "CVE classification, patching windows, and the limit Article 15 places on transferring liability by contract.",
  },
  "pld-2024-fuga-giurisdizionale": {
    category: "Article V · International configurations",
    title: "Jurisdictional flight, and why it does not exist",
    subtitle:
      "Brussels I bis, Rome II, corporate veil piercing, and criminal liability under Article 27 of the Italian Constitution.",
  },
  "pld-2024-contratti-e-polizza": {
    category: "Article VI · Contracts & insurance",
    title: "Twenty clauses and the policy, seen from three sides",
    subtitle:
      "Client, software house, signing professional: contracts and insurance cover in asymmetric power dynamics.",
  },
};

const articles = getImportedArticles().map((a) => ({
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
                  · {readingMinutes(a.words)} min · in Italian
                </p>
                <span className="text-[#00B4D8] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  Read the article →
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-[#7D8FA3] text-sm leading-relaxed max-w-2xl">
            The six articles are published here in full, in the Italian they were written in. Each
            one first appeared on LinkedIn and links back to that original; this domain is the
            archive of record, and the canonical version of every piece is the one on this site.
          </p>
        </div>
      </section>

      <CTASection />
      </main>
      <Footer />
    </>
  );
}
