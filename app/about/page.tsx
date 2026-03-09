import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About | Dynamics Consulting",
  description:
    "Dynamics Consulting is a Milan-based AI and technology consultancy founded by Corrado Patierno. We build sovereign, on-premise AI infrastructure for healthcare, pharma, and enterprise clients across Italy and Europe.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/about" },
};

const values = [
  {
    title: "Outcomes over outputs",
    body: "We measure success by business impact, not by lines of code or slide decks. Every engagement starts with a clear definition of what success looks like and ends when it is achieved.",
  },
  {
    title: "Radical transparency",
    body: "We tell clients what they need to hear. If a simpler solution exists, we say so. If a timeline is unrealistic, we say so. Long-term trust is built on honesty.",
  },
  {
    title: "Sovereign AI by default",
    body: "Organisations in regulated industries have the right to run AI on their own infrastructure, under their own governance, without dependency on hyperscalers. This conviction shapes every architecture we design.",
  },
  {
    title: "Deep specialisation",
    body: "We work with a selective network of proven specialists rather than growing a large generalist team. Every project gets the right expertise, not the next available consultant.",
  },
];

const timeline = [
  {
    period: "1997 – 2010",
    title: "From developer to programme leader",
    body: "Started as a systems developer in Naples working on RFID, logistics, and critical infrastructure, including a project for the Vatican Apostolic Library. Moved to Milan and progressively took on larger programmes: senior consultant at Capgemini (2011) and Avanade (2016), leading multidisciplinary teams on enterprise projects for clients including Vodafone, RINA, Fincantieri, Unipol, and Banco Mediolanum. Accumulated deep expertise in enterprise integration, data platforms, and complex legacy environments.",
  },
  {
    period: "2015 – 2019",
    title: "CTO roles and platform leadership",
    body: "Served as CTO (first informal, then official) at Nexo/Sefitalia, leading restructuring of software factory and overseeing ERP, WFM, and SFM platforms for a 1,800-person group network. Concurrently led the Nespresso Intervallo programme at ATOS, managing three delivery streams across Dynamics F&O, custom backend, and IoT frontend with ~40 people.",
  },
  {
    period: "2019 – present",
    title: "Independent consultant and Innovation Manager",
    body: "Transitioned to full independence, combining direct project delivery with strategic advisory. MISE-certified Innovation Manager. Certifications in ISO 56002:2020, IBM Enterprise Design Thinking, and Microsoft Dynamics 365 Solution Architecture. Deepened focus on AI-assisted modernisation of legacy enterprise systems, RAG architectures, and on-premise AI infrastructure for regulated industries. Current production clients include Federfarma Lombardia and CureSicure.",
  },
  {
    period: "2026",
    title: "Logistica Fluida published",
    body: "Published Logistica Fluida, a conceptual and operational framework for adaptive logistics systems focused on flow-based decision-making, resilience, and continuous reconfiguration of supply chains. The book bridges logistics operations, information systems, and organisational design, and serves as a foundation for decision-support and AI-assisted operational reasoning in complex environments.",
  },
];

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">About</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Built on conviction, not convenience
            </h1>
            <p className="text-lg text-[#7D8FA3] leading-relaxed">
              Dynamics Consulting was founded with a clear conviction: organisations in healthcare,
              pharma, and regulated industries deserve AI infrastructure they own, govern, and trust
              not rented black boxes running on someone else&apos;s cloud.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-12">Our story</p>
            <div className="space-y-12">
              {timeline.map((item) => (
                <div key={item.period} className="flex gap-6">
                  <div className="shrink-0 w-[110px] text-right">
                    <span className="text-xs font-mono text-[#00B4D8] tracking-wider">{item.period}</span>
                  </div>
                  <div className="relative pl-6 border-l border-[#30363D]">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#00B4D8]" />
                    <h3 className="text-base font-bold text-[#E6EDF3] mb-2">{item.title}</h3>
                    <p className="text-[#7D8FA3] leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 px-6 bg-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-10">Leadership</p>
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4D8] to-[#0D47A1] flex items-center justify-center text-white font-bold text-xl shrink-0">
                CP
              </div>
              <div>
                <div className="text-xl font-bold text-[#E6EDF3] mb-1">Corrado Patierno</div>
                <div className="text-sm text-[#00B4D8] mb-4">Founder &amp; CEO</div>
                <p className="text-[#7D8FA3] leading-relaxed mb-5">
                  Technology consultant, AI architect, MISE-certified Innovation Manager, and author of{" "}
                  <em>Logistica Fluida</em>. Over 25 years of hands-on delivery across enterprise systems,
                  data platforms, cloud, and AI infrastructure. Clients include ATOS, Avanade, Capgemini,
                  illimity, Banco Mediolanum, Nespresso, RINA, and Fincantieri. Member of Mensa. Based in Milan.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AI Infrastructure", "Enterprise Architecture", "Data Platforms", "Microsoft Dynamics 365", "Healthcare & Pharma", "ISO 56002", "Innovation Management"].map((tag) => (
                    <span key={tag} className="text-xs font-mono font-semibold px-3 py-1 rounded-full border border-[#30363D] text-[#7D8FA3]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network model */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">How we work</p>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">Principal-led, network-backed</h2>
            <p className="text-[#7D8FA3] leading-relaxed text-lg mb-5">
              Every Dynamics Consulting engagement is led directly by Corrado Patierno. Depending on
              scope, we bring in a curated network of senior independent specialists across AI engineering,
              data architecture, cloud infrastructure, and enterprise integration, each with production
              track records in regulated industries.
            </p>
            <p className="text-[#7D8FA3] leading-relaxed text-lg">
              This means clients never get handed off to juniors after the sale. The person who scopes
              the work is the person who delivers it.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 bg-[#161B22]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-3">Principles</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#E6EDF3]">Our values</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-[#0D1117] rounded-2xl p-8 border border-[#30363D]">
                  <h3 className="text-lg font-bold text-[#E6EDF3] mb-3">{v.title}</h3>
                  <p className="text-[#7D8FA3] leading-relaxed">{v.body}</p>
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
