import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { itHref } from "@/lib/i18n-routes";

/**
 * Three service lines. Everything else is a technical capability, listed on
 * /capabilities — reachable, indexed, but not competing for attention here.
 */
const COPY = {
  en: {
    services: [
      {
        iconName: "ShieldCheck",
        title: "AI Governance & Compliance Advisory",
        description:
          "AI consulting for regulated organisations: regulatory assessment against the EU AI Act, PLD 2024, NIS2 and DORA, governance design, and architecture review with documented technical accountability. Carried out with CEPF, the compliance methodology Dynamics Consulting developed.",
        techBadges: ["AI Act", "PLD 2024", "NIS2", "ISO 27001"],
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
          "Dynamics Consulting designs, installs and runs Nexus MDS Core inside your perimeter: use cases scoped with you, the platform deployed on your server or on EU infrastructure, identity, approval steps and audit configured, then operated and extended as new use cases arrive. In production in pharmaceutical distribution and healthcare.",
        techBadges: ["Nexus MDS Core", "Weaviate", "Keycloak", "n8n"],
        ctaHref: "/platform",
      },
    ],
    eyebrow: "What Dynamics Consulting does",
    title: "Three service lines",
    subtitle: "Advisory, leadership, platform. Each engagement is custom, no templates.",
    constraintsBefore:
      "Governance, traceability, data boundaries and human approval are treated as architectural constraints rather than as documentation added after a system is built — what that means in practice is set out under",
    constraintsLink: "AI governance and compliance advisory",
    engineeringBefore:
      "The engineering these rest on — data platforms, Kubernetes, integration, Dynamics 365, automation, blockchain —",
    engineeringLink: "is listed under capabilities",
  },
  it: {
    services: [
      {
        iconName: "ShieldCheck",
        title: "Consulenza AI, governance e compliance",
        description:
          "Consulenza AI per organizzazioni regolamentate: analisi normativa rispetto a EU AI Act, PLD 2024, NIS2 e DORA, disegno della governance e revisione dell’architettura con responsabilità tecnica documentata. Condotta con CEPF, la metodologia di compliance sviluppata da Dynamics Consulting.",
        techBadges: ["AI Act", "PLD 2024", "NIS2", "ISO 27001"],
        ctaHref: "/services/governance-advisory",
      },
      {
        iconName: "Compass",
        title: "Fractional AI CTO",
        description:
          "Una presenza stabile da CTO a costo frazionato. Strategia tecnologica, governance dell’architettura, selezione dei fornitori, guida dei programmi AI per organizzazioni sotto pressione normativa.",
        techBadges: ["Strategia", "Architettura", "Leadership"],
        ctaHref: "/services/fractional-cto",
      },
      {
        iconName: "Server",
        title: "Piattaforma AI sovrana — Nexus MDS Core",
        description:
          "Dynamics Consulting progetta, installa e gestisce Nexus MDS Core nel tuo perimetro: i casi d’uso definiti con te, la piattaforma installata sul tuo server o su infrastruttura UE, identità, passaggi di approvazione e audit configurati, poi l’esercizio e l’estensione man mano che arrivano nuovi casi d’uso. In produzione nella distribuzione farmaceutica e nella sanità.",
        techBadges: ["Nexus MDS Core", "Weaviate", "Keycloak", "n8n"],
        ctaHref: "/platform",
      },
    ],
    eyebrow: "Cosa fa Dynamics Consulting",
    title: "Tre linee di servizio",
    subtitle: "Consulenza, leadership, piattaforma. Ogni incarico è su misura, senza template.",
    constraintsBefore:
      "Governance, tracciabilità, confini dei dati e approvazione umana sono trattati come vincoli di architettura, non come documentazione aggiunta a sistema finito. Che cosa significa in pratica è spiegato nella pagina sulla",
    constraintsLink: "consulenza AI, governance e compliance",
    engineeringBefore:
      "L’ingegneria su cui poggiano — data platform, Kubernetes, integrazione, Dynamics 365, automazione, blockchain —",
    engineeringLink: "è descritta nelle competenze",
  },
};

export function ServicesSection({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  const href = (p: string) => (locale === "it" ? itHref(p) : p);
  return (
    <section id="services" className="py-20 md:py-28 bg-[#161B22]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((s) => (
            <ServiceCard
              key={s.title}
              iconName={s.iconName}
              title={s.title}
              description={s.description}
              techBadges={s.techBadges}
              ctaHref={href(s.ctaHref)}
            />
          ))}
        </div>

        <p className="mt-10 text-[#7D8FA3] text-base">
          {t.constraintsBefore}{" "}
          <Link
            href={href("/services/governance-advisory")}
            className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
          >
            {t.constraintsLink}
          </Link>
          .
        </p>

        <p className="mt-4 text-[#7D8FA3] text-base">
          {t.engineeringBefore}{" "}
          <Link href={href("/capabilities")} className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
            {t.engineeringLink}
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
