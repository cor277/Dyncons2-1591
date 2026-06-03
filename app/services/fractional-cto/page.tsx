import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { CTAButton } from "@/components/ui/CTAButton";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "Fractional AI CTO | Dynamics Consulting",
  description:
    "Permanent CTO presence at fractional cost. Technology strategy, architectural governance, vendor selection, AI programme leadership for organisations under regulatory pressure.",
  keywords: [
    "Fractional CTO",
    "Fractional AI CTO",
    "Technology Strategy",
    "AI programme leadership",
    "Architectural governance",
    "Innovation Manager",
  ],
  alternates: { canonical: "https://www.dynamicsconsulting.it/services/fractional-cto" },
};

export default function FractionalCtoPage() {
  return (
    <>
      <NavBar />
      <section className="hero-constellation pt-32 pb-20">
        <div className="hero-content max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              Services · Advisory & Strategy
            </p>
            <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E6EDF3] leading-[1.05] tracking-tight mb-6">
              Fractional AI CTO
            </h1>
            <p className="text-[#7D8FA3] text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Permanent CTO presence at fractional cost. Technology strategy, architectural
              governance, vendor selection, AI programme leadership for organisations under
              regulatory pressure.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-10">
              {["Strategy", "Architecture", "Leadership", "Innovation Management"].map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
            <CTAButton label="Let's discuss your project →" href="/contact" variant="primary" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
            Coming soon
          </p>
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
            Full service description in preparation
          </h2>
          <p className="text-[#7D8FA3] text-base leading-relaxed">
            Engagement models, time commitments, and pricing for Fractional AI CTO roles are
            being published. For immediate enquiries on technology strategy, architectural
            governance, or AI programme leadership, get in touch directly.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
