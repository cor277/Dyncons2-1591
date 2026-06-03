import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "EU Tech Sovereignty Package & CADA — Analysis",
  description:
    "Analysis of the European Technological Sovereignty Package and the Cloud and AI Development Act (CADA) — implications for organisations operating sovereign on-premise AI in regulated industries.",
  keywords: [
    "EU Tech Sovereignty Package",
    "CADA 2026",
    "Cloud and AI Development Act",
    "sovereign cloud EU",
    "EU AI Act",
    "PLD 2024",
    "regulated industries",
  ],
  alternates: { canonical: "https://www.dynamicsconsulting.it/tech-sovereignty" },
};

export default function TechSovereigntyPage() {
  return (
    <>
      <NavBar />
      <section className="hero-constellation pt-32 pb-20">
        <div className="hero-content max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              Analysis · Regulatory
            </p>
            <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E6EDF3] leading-[1.05] tracking-tight mb-6">
              EU Tech Sovereignty Package &amp; CADA — Analysis
            </h1>
            <p className="text-[#7D8FA3] text-lg md:text-xl max-w-2xl leading-relaxed">
              On 3 June 2026 the European Commission presented the European Technological
              Sovereignty Package, including the Cloud and AI Development Act (CADA). This page
              will host the full analysis: alignment of Nexus MDS Core with the new framework,
              convergence with PLD 2024, and complementarity with the EU AI Act.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
            Coming soon
          </p>
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
            Full analysis in preparation
          </h2>
          <p className="text-[#7D8FA3] text-base leading-relaxed mb-4">
            A structured three-part analysis is being prepared: (1) Nexus MDS Core alignment
            with CADA terminology and architectural principles, (2) convergence with the
            Product Liability Directive 2024 for software-as-product accountability, and
            (3) complementarity with the EU AI Act on systemic-risk classification and
            governance obligations.
          </p>
          <p className="text-[#7D8FA3] text-sm leading-relaxed">
            For early access to the analysis or to discuss its implications for your
            organisation, get in touch directly.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
