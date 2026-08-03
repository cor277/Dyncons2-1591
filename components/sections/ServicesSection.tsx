import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * Three service lines. Everything else is a technical capability, listed on
 * /capabilities — reachable, indexed, but not competing for attention here.
 */
const services = [
  {
    iconName: "ShieldCheck",
    title: "AI Governance & Compliance Advisory",
    description:
      "Strategic regulatory assessment for EU AI Act, PLD 2024, NIS2, DORA. CEPF compliance audit. Board-level governance design. Architecture review with documented technical accountability.",
    techBadges: ["AI Act", "PLD 2024", "CEPF", "ISO 27001"],
    ctaHref: "/services/governance-advisory",
  },
  {
    iconName: "Compass",
    title: "Fractional AI CTO",
    description:
      "Permanent CTO presence at fractional cost. Technology strategy, architectural governance, vendor selection, AI programme leadership for organisations under regulatory pressure.",
    techBadges: ["Strategy", "Architecture", "Leadership"],
    ctaHref: "/services/fractional-cto",
  },
  {
    iconName: "Server",
    title: "Sovereign AI Platform — Nexus MDS Core",
    description:
      "Sixteen orchestrated services for regulated environments. Local indexing, retrieval and audit; replaceable external generation. In production in pharmaceutical distribution and healthcare.",
    techBadges: ["Nexus MDS Core", "Weaviate", "Keycloak", "n8n"],
    ctaHref: "/platform",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#161B22]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="What we do"
            title="Three service lines"
            subtitle="Advisory, leadership, platform. Each engagement is custom, no templates."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              iconName={s.iconName}
              title={s.title}
              description={s.description}
              techBadges={s.techBadges}
              ctaHref={s.ctaHref}
            />
          ))}
        </div>

        <p className="mt-10 text-[#7D8FA3] text-base">
          The engineering these rest on — data platforms, Kubernetes, integration, Dynamics 365,
          automation, blockchain —{" "}
          <Link href="/capabilities" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
            is listed under capabilities
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
