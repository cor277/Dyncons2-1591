import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Corrado Patierno — AI Solution Architect Italy",
  description:
    "25 years of enterprise systems delivery. MISE Innovation Manager. Founder of Dynamics Consulting. Builder of Nexus MDS Core and author of CEPF and Logistica Fluida.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/about" },
};

const availableFor = [
  "Principal Architect / Solution Architect engagements (AI, data platforms, enterprise integration, Dynamics 365 F&O)",
  "Fractional CTO / Innovation Manager roles",
  "Nexus MDS Core deployments for healthcare, pharma, and regulated industries",
  "AI Governance & Compliance advisory (EU AI Act, PLD 2024, NIS2, CEPF assessment)",
];

const credentials = [
  "MISE-certified Innovation Manager",
  "ISO 56002:2020",
  "Microsoft Dynamics 365 certified",
  "Member of Mensa",
];

const publications = [
  {
    title: "CEPF — Compliance Estimation & Planning Framework",
    body: "19 regulatory frameworks mapped, 210 entries, 617 operational deliverables.",
  },
  {
    title: "Logistica Fluida (2026)",
    body: "Adaptive logistics framework — flow-based decision-making, resilience, continuous reconfiguration of supply chains.",
  },
  {
    title: "Editorial series on EU PLD 2024, AI Act and Tech Sovereignty",
    body: "Ongoing public analysis for regulated software industries.",
  },
];

const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Dynamics Consulting",
    url: "https://www.dynamicsconsulting.it/about",
    mainEntity: {
      "@type": "Person",
      name: "Corrado Patierno",
      jobTitle: "AI Solution Architect & Founder",
      description:
        "Technology consultant and AI architect. MISE-certified Innovation Manager. Author of CEPF and Logistica Fluida. 25+ years delivering enterprise systems for clients including Nespresso, Banco Mediolanum, Fincantieri, RINA, and Vodafone.",
      worksFor: {
        "@type": "Organization",
        name: "Dynamics Consulting",
        url: "https://www.dynamicsconsulting.it",
      },
      knowsAbout: [
        "Sovereign AI Infrastructure",
        "On-premise LLM deployment",
        "EU AI Act compliance",
        "PLD 2024",
        "CEPF methodology",
        "Healthcare AI Infrastructure",
        "Microsoft Dynamics 365",
        "Legacy Modernisation",
      ],
      sameAs: [
        "https://www.linkedin.com/in/corradopatierno",
        "https://amzn.eu/d/06ZlECJe",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Milano",
        addressCountry: "IT",
      },
    },
  },
];

export default function AboutPage() {
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
      </head>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              About
            </p>
            <h1 className="font-syne text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[#E6EDF3]">
              About Corrado Patierno
            </h1>
            <p className="text-xl md:text-2xl text-[#E6EDF3] leading-relaxed">
              I build AI infrastructure for organisations that need to own their data.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-[#7D8FA3] text-lg leading-relaxed">
            <p>
              After 25 years delivering enterprise systems for clients including Nespresso,
              Banco Mediolanum, Fincantieri, RINA, and Vodafone, I founded Dynamics Consulting
              with a specific conviction: healthcare and pharma organisations deserve AI they
              can govern — not rented black boxes on someone else&apos;s cloud.
            </p>
            <p>
              That conviction became <span className="text-[#E6EDF3] font-medium">Nexus MDS Core</span> —
              a self-hosted, GDPR-ready AI platform (~16 Docker services: LLM inference, RAG
              pipeline, Zero-Trust auth, workflow engine) already in production for
              Federfarma Lombardia and CureSicure.
            </p>
            <p>
              This architectural choice — niche three years ago — is now explicit terminology
              in the EU Tech Sovereignty Package (CADA, June 2026):{" "}
              <em className="text-[#00B4D8] not-italic">
                sovereign cloud and AI for sensitive public and regulated workloads
              </em>.
            </p>
          </div>
        </section>

        {/* Available for */}
        <section className="py-16 px-6 bg-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              Available for
            </p>
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-6">
              Engagement models
            </h2>
            <ul className="space-y-3">
              {availableFor.map((a) => (
                <li
                  key={a}
                  className="flex gap-3 text-[#7D8FA3] text-base leading-relaxed"
                >
                  <span className="text-[#00B4D8] mt-1.5 shrink-0">▸</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              Credentials
            </p>
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-6">
              Certifications &amp; memberships
            </h2>
            <div className="flex flex-wrap gap-2">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="text-sm font-mono px-3 py-1.5 rounded-full border border-[#30363D] text-[#7D8FA3]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Publications & frameworks */}
        <section className="py-16 px-6 bg-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              Publications &amp; frameworks
            </p>
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-8">
              Authored work
            </h2>
            <div className="space-y-6">
              {publications.map((p) => (
                <div key={p.title} className="bg-[#0D1117] border border-[#30363D] rounded-xl p-6">
                  <h3 className="font-syne text-lg font-bold text-[#E6EDF3] mb-2">{p.title}</h3>
                  <p className="text-[#7D8FA3] text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
