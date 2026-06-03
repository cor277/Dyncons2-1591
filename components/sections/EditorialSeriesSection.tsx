"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";

interface Article {
  category: string;
  title: string;
  subtitle: string;
  href: string;
}

const articles: Article[] = [
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
];

export function EditorialSeriesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0D1117]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <SectionHeader
            eyebrow="Editorial Series · Public Research"
            title="PLD 2024 & AI Governance for Software Houses"
            subtitle="An ongoing public series on the structural implications of the new EU regulatory regime — Product Liability Directive 2024, AI Act, Tech Sovereignty Package — for software houses and technical professionals operating in regulated industries."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {articles.map((a, i) => (
            <motion.a
              key={a.href}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex flex-col gap-4 bg-[#161B22] border border-[#30363D] rounded-xl p-6 hover:border-[#00B4D8] transition-colors duration-200"
            >
              <p className="text-[#00B4D8] text-[10px] font-mono font-medium tracking-[0.15em] uppercase">
                {a.category}
              </p>
              <h3 className="font-syne text-lg font-bold text-[#E6EDF3] leading-tight group-hover:text-[#00B4D8] transition-colors">
                {a.title}
              </h3>
              <p className="text-[#7D8FA3] text-sm leading-relaxed flex-1">{a.subtitle}</p>
              <span className="text-[#00B4D8] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                Read on LinkedIn →
              </span>
            </motion.a>
          ))}
        </div>

        <CTAButton label="View all articles →" href="/research/editorial-series" variant="secondary" />
      </div>
    </section>
  );
}
