import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Editorial Series · PLD 2024 & AI Governance | Dynamics Consulting",
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

const articles = [
  {
    category: "Article VI · Contracts & Insurance",
    title: "The twenty clauses and the policy, seen from three sides",
    subtitle:
      "Client, software house, signing professional: contracts and insurance coverage in asymmetric power dynamics.",
    href: "https://www.linkedin.com/pulse/contratti-e-polizza-nel-regime-pld-2024-venti-tre-una-patierno-pucxf/",
  },
  {
    category: "Article V · International configurations",
    title: "Jurisdictional flight and its limits",
    subtitle:
      "Brussels I bis, Rome II, corporate veil piercing, criminal liability under Italian Constitution Art. 27.",
    href: "https://www.linkedin.com/pulse/la-fuga-giurisdizionale-e-perch%C3%A9-non-esiste-corrado-patierno-vmlnf/",
  },
  {
    category: "Article IV · Vulnerability management",
    title: "Reasonable diligence and defensible timelines under PLD 2024",
    subtitle:
      "CVE classification, patching windows, the limit of Art. 15 PLD on contractual transfer of liability.",
    href: "https://www.linkedin.com/pulse/pld-2024-vulnerability-management-e-gestione-cve-corrado-patierno-gipff/",
  },
  {
    category: "Article III · The decade that changes everything",
    title: "Software-house liability after PLD 2024",
    subtitle:
      "How the new directive restructures the ten-year horizon of producer responsibility for software products.",
    href: "https://www.linkedin.com/pulse/pld-2024-il-decennio-che-cambia-tutto-responsabilit%C3%A0-della-patierno-mwe1f/",
  },
  {
    category: "Article II · Five-plus-one development scenarios",
    title: "The 5+1 scenarios and the clauses that matter to each",
    subtitle:
      "Bespoke build, SaaS, custom integration, IP licensing, open source, embedded systems — how PLD 2024 maps to each.",
    href: "https://www.linkedin.com/pulse/pld-2024-i-5-1-scenari-di-sviluppo-software-e-le-che-per-patierno-ffvue/",
  },
  {
    category: "Article I · The seven structural shifts",
    title: "PLD 2024 — the seven structural changes that redefine the sector",
    subtitle:
      "Software as a product, software updates as a producer obligation, ten-year retroactive liability, defect presumptions, evidence asymmetry, joint liability, and component liability.",
    href: "https://www.linkedin.com/pulse/pld-2024-i-sette-cambi-strutturali-che-ridefiniscono-il-patierno-avhrf/",
  },
];

export default function EditorialSeriesPage() {
  return (
    <>
      <NavBar />
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
              <a
                key={a.href}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 bg-[#161B22] border border-[#30363D] rounded-xl p-6 hover:border-[#00B4D8] transition-colors duration-200"
              >
                <p className="text-[#00B4D8] text-[10px] font-mono font-medium tracking-[0.15em] uppercase">
                  {a.category}
                </p>
                <h3 className="font-syne text-xl font-bold text-[#E6EDF3] leading-tight group-hover:text-[#00B4D8] transition-colors">
                  {a.title}
                </h3>
                <p className="text-[#7D8FA3] text-sm leading-relaxed flex-1">{a.subtitle}</p>
                <span className="text-[#00B4D8] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  Read on LinkedIn →
                </span>
              </a>
            ))}
          </div>

          <p className="mt-12 text-[#7D8FA3] text-sm leading-relaxed max-w-2xl">
            The series is published progressively on LinkedIn. Full archive of articles will be
            consolidated on this page over time, with canonical links to the original LinkedIn
            posts to preserve SEO attribution.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
