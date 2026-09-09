import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { ORG_ID, WEBSITE_ID, NEXUS_ID, CEPF_ID, CALIBRA_ID } from "@/app/schema-org";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { CTAButton } from "@/components/ui/CTAButton";
import { TextLink } from "@/components/ui/TextLink";
import { TechBadge } from "@/components/ui/TechBadge";

const EN_URL = "https://www.dynamicsconsulting.it/services/governance-advisory";
const IT_URL = "https://www.dynamicsconsulting.it/it/consulenza-ai-governance-compliance";

const DESCRIPTION =
  "AI consulting for regulated organisations: governance and compliance advisory across the EU AI Act, GDPR, PLD 2024, NIS2, DORA and ISO 27001, with architecture that carries the obligations. Advisory and implementation from one practice, in Italy and the EU.";

export const metadata: Metadata = {
  title: "AI Governance & Compliance Advisory",
  description: DESCRIPTION,
  keywords: [
    "AI governance advisory",
    "AI compliance consulting",
    "AI consulting regulated industries",
    "AI Act compliance",
    "PLD 2024",
    "NIS2",
    "DORA",
    "CEPF",
    "ISO 27001",
  ],
  alternates: {
    canonical: EN_URL,
    languages: { en: EN_URL, it: IT_URL, "x-default": EN_URL },
  },
  openGraph: {
    images: OG_IMAGE,
    title: "AI Governance & Compliance Advisory — Dynamics Consulting",
    description: DESCRIPTION,
    url: EN_URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "AI Governance & Compliance Advisory — Dynamics Consulting",
    description: DESCRIPTION,
  },
};

const faqs = [
  {
    q: "Is this legal advice?",
    a: "No. The work is technical and organisational: what the regulation requires of your systems and your processes, what your architecture does today, and where the two diverge. Legal opinions, contractual representation and regulatory filings stay with your lawyers — the deliverable is written to be handed to them.",
  },
  {
    q: "Do you certify compliance?",
    a: "Nobody can. Conformity is established by the assessment procedure the regulation itself prescribes, not by a consultant and not by a deployment topology. What you receive is a signed document stating what you have, what you are missing and in what order to close the gap — the kind of evidence that is worth something in an inspection. A self-declaration of compliance is not.",
  },
  {
    q: "Where does an engagement usually start?",
    a: "With the exposure assessment: three days of work on your contracts, architecture and supply chain, producing a signed document. It is a fixed-scope engagement, not the whole practice. If the picture is already clear, an engagement can start directly at design or implementation level.",
  },
  {
    q: "Do we have to adopt Nexus MDS Core?",
    a: "No. Most advisory work is carried out on systems built by other suppliers, and stays there. Nexus MDS Core is the option when the conclusion of the analysis is that the architecture itself has to change — it is a platform we build and run, not a precondition for the advice.",
  },
  {
    q: "What is CEPF, and what is Calibra?",
    a: "CEPF — the Compliance-Epistemic Project Framework — is the methodology: a catalogue mapping regulatory regimes onto the operational obligations each one produces, and onto their overlaps. Calibra is the software built on CEPF, adding risk, scheduling, operational flow, Gantt and milestones. Both are proprietary to Dynamics Consulting and both are used inside engagements.",
  },
  {
    q: "Which sectors do you work in?",
    a: "Healthcare and pharmaceutical distribution, finance and insurance, energy, engineering, logistics and manufacturing — organisations where an AI output can produce a regulatory or liability consequence. Production references are in the case studies.",
  },
];

const REGIMES = [
  ["EU AI Act", "Regulation (EU) 2024/1689 — classification, deployer obligations, transparency, AI literacy"],
  ["GDPR", "Regulation (EU) 2016/679 — lawful basis, data minimisation at ingestion, data subject rights"],
  ["PLD 2024", "Product liability directive — software among products, for products placed on the market from 9 December 2026"],
  ["NIS2", "Directive (EU) 2022/2555 — network and information security obligations"],
  ["DORA", "Regulation (EU) 2022/2554 — operational resilience for financial entities"],
  ["Cyber Resilience Act", "Regulation (EU) 2024/2847 — including the Article 14 reporting duty"],
  ["ISO/IEC 27001:2022", "Information security management system controls"],
  ["ISO 56001:2024", "Innovation management system"],
];

const WORK = [
  {
    t: "Regulatory positioning of the system",
    b: "Which regimes actually reach the system you have or intend to buy, in which role — provider, deployer, distributor — and which obligations follow from that role rather than from the vendor’s marketing classification.",
  },
  {
    t: "Architecture review against the obligations",
    b: "Retrieval boundaries, data residency, identity and access segregation, logging depth, retention, model supply chain, human approval points. Each obligation is traced to the component that carries it, or recorded as not carried by anything.",
  },
  {
    t: "Crossing analysis",
    b: "Where two regimes demand the same control — access management, audit logging, change management, incident response — the control is stated once and documented against each regime, rather than built twice. This is what CEPF is for.",
  },
  {
    t: "Governance design",
    b: "Who decides, who approves, who is told and within what time. Roles, escalation paths and reporting duties written as procedures an organisation can actually run, not as a policy document nobody opens.",
  },
  {
    t: "Remediation sequence",
    b: "What must be done, in what order, with what urgency, distinguishing what is already overdue from what has a future date — and what it costs in effort, by role.",
  },
  {
    t: "Implementation",
    b: "When the conclusion is that the architecture has to change, the same practice designs and builds it: retrieval, identity, audit and approval gates as engineering work, on your infrastructure or on Nexus MDS Core.",
  },
];

const CONSTRAINTS = [
  ["Traceability", "Answers cite the source document and its revision, so what a system said can be reconstructed months later."],
  ["Data boundaries", "What is indexed, what is excluded at ingestion, and where each stage physically runs."],
  ["Access control", "Identity, role segregation and least privilege between the functions that must stay separated."],
  ["Auditability", "A tamper-evident record of calls, retrievals and decisions, retained for as long as the obligation lasts."],
  ["Human approval", "Explicit gates where an output has consequences, with the approver recorded."],
];

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${EN_URL}#webpage`,
    url: EN_URL,
    name: "AI Governance & Compliance Advisory",
    description: DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": CEPF_ID }, { "@id": CALIBRA_ID }, { "@id": NEXUS_ID }],
    mainEntity: { "@id": `${EN_URL}#service` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${EN_URL}#service`,
    name: "AI Governance & Compliance Advisory",
    serviceType: "AI governance and compliance advisory",
    url: EN_URL,
    provider: { "@id": ORG_ID },
    areaServed: ["IT", "EU"],
    availableLanguage: ["en", "it"],
    audience: {
      "@type": "Audience",
      audienceType:
        "Organisations deploying AI in regulated environments — healthcare, pharmaceutical, finance, energy, engineering",
    },
    description:
      "Professional AI consulting for regulated organisations: regulatory analysis of AI systems under the EU AI Act, GDPR, PLD 2024, NIS2, DORA, the Cyber Resilience Act and ISO/IEC 27001:2022, architecture review with documented technical accountability, governance design, and implementation. Based on the Compliance-Epistemic Project Framework (CEPF) and the software built on it, Calibra.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${EN_URL}#faq`,
    isPartOf: { "@id": `${EN_URL}#webpage` },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function GovernanceAdvisoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <NavBar />
      <main>

      {/* Hero */}
      <section className="hero-constellation pt-32 pb-20">
        <div className="hero-content max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              Services · Advisory &amp; Strategy
            </p>
            <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E6EDF3] leading-[1.05] tracking-tight mb-6">
              AI Governance &amp; Compliance Advisory
            </h1>
            <p className="text-[#9BA8B9] text-lg md:text-xl max-w-2xl leading-relaxed mb-5">
              Professional AI consulting for organisations that operate under regulatory
              constraint. Regulatory analysis of the system you have — or the one you are about to
              buy — carried through to the architecture that has to satisfy it.
            </p>
            <p className="text-[#7D8FA3] text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              Dynamics Consulting is an independent AI consulting and engineering practice working
              on sovereign AI infrastructure, AI governance and regulated environments. Advisory
              and implementation come from the same practice: whoever writes the requirement is
              able to build the system that meets it.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-10">
              {["AI Act", "GDPR", "PLD 2024", "NIS2", "DORA", "ISO 27001"].map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton label="Exposure assessment →" href="/assessment" variant="primary" />
              <div className="flex items-center gap-6 sm:self-center">
                <TextLink label="Talk to us directly →" href="/contact" />
                <TextLink
                  label="Questa pagina in italiano →"
                  href="/it/consulenza-ai-governance-compliance"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for + the problem */}
      <section className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 text-[#7D8FA3] text-lg leading-relaxed">
          <div>
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              Who this is for
            </h2>
            <p>
              Organisations introducing artificial intelligence where an output has consequences:
              hospitals and pharmaceutical distribution, banks, asset managers and insurers,
              energy, engineering practices working to technical norms, logistics and
              manufacturing. Typically the request comes from a CTO or CIO who has to answer for
              the architecture, from a compliance or risk function that has to answer for the
              obligation, or from a board that has discovered the two answers do not match.
            </p>
            <p className="mt-4">
              It applies equally to a system bought from a supplier and to one built internally.
              The obligations of a deployer do not depend on who wrote the code.
            </p>
          </div>

          <div>
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              The problems it addresses
            </h2>
            <p>
              An AI system enters production and nobody can say which regulatory regimes reach it,
              in which role, or with which deadlines already passed.
            </p>
            <p className="mt-4">
              A policy exists, and the architecture does something else. The document says outputs
              are traceable; the system keeps no record of which document revision produced an
              answer.
            </p>
            <p className="mt-4">
              Several regimes apply at once and are being handled as separate programmes, so the
              same control is built twice and the gap between them is where the omissions sit.
            </p>
            <p className="mt-4">
              Liability is assumed to sit with the supplier, and the contract does not say so.
              The revised European product liability directive includes software among products,
              for products placed on the market or put into service from 9 December 2026 — which
              changes what a limitation clause is worth.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3">
              The work
            </p>
            <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold text-[#E6EDF3] leading-[1.1] tracking-tight">
              What Dynamics Consulting actually does
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORK.map((w) => (
              <div
                key={w.t}
                className="bg-[#161B22] border border-[#30363D] rounded-xl p-6"
              >
                <h3 className="font-dm font-semibold text-[#E6EDF3] text-base mb-3">{w.t}</h3>
                <p className="text-[#7D8FA3] text-sm leading-relaxed">{w.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-[#7D8FA3] text-lg leading-relaxed">
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
            What you receive
          </h2>
          <p>
            Documents, not presentations. Every statement is classified: what is verified against
            the evidence provided, what is inferred, and what requires a finding beyond the agreed
            scope. The deliverable is signed, and whoever signs it answers professionally for what
            it says.
          </p>
          <ul className="mt-6 space-y-4">
            {[
              ["Regulatory exposure report.", "Which regimes apply, in which role, with which obligations already due and which still ahead."],
              ["Architecture accountability map.", "Each obligation traced to the component that carries it, or recorded as uncovered."],
              ["Crossing register.", "Shared controls across regimes, stated once and documented against each."],
              ["Governance model.", "Decision, approval, escalation and reporting paths, with named roles."],
              ["Remediation plan.", "Sequenced actions with effort by role, separating overdue from scheduled."],
            ].map(([t, b]) => (
              <li key={t}>
                <strong className="text-[#E6EDF3]">{t}</strong> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Regimes covered */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3">
            Coverage
          </p>
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
            Regimes and frameworks in scope
          </h2>
          <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
            The regimes below are the ones the methodology covers as operational obligations
            rather than as principles. Where an obligation belongs to a function outside this
            scope — network security, business continuity, data protection as a legal matter —
            the analysis flags the crossing point and names what to hand over, without pretending
            to assess it.
          </p>
          <ul className="space-y-3 text-[#7D8FA3] leading-relaxed">
            {REGIMES.map(([name, ref]) => (
              <li key={name}>
                <strong className="text-[#E6EDF3]">{name}</strong> — {ref}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compliance as an architectural constraint */}
      <section className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3">
            The position
          </p>
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
            Compliance is not documentation added at the end
          </h2>
          <div className="text-[#7D8FA3] text-lg leading-relaxed space-y-4">
            <p>
              A system that cannot show which document revision produced an answer does not become
              traceable because a policy says it is. Governance, traceability, data boundaries,
              access control, auditability and human approval are architectural constraints: they
              are decided when the system is designed, and retrofitting them costs more than
              building them.
            </p>
            <p>
              That is the reason the advisory and the engineering sit in the same practice. The
              analysis stops being an opinion at the point where someone has to change a retrieval
              pipeline, and that is where most compliance work is abandoned.
            </p>
          </div>
          <ul className="mt-8 space-y-4 text-[#7D8FA3] leading-relaxed">
            {CONSTRAINTS.map(([t, b]) => (
              <li key={t}>
                <strong className="text-[#E6EDF3]">{t}.</strong> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Instruments — CEPF, Calibra, Nexus */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3">
              Instruments
            </p>
            <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold text-[#E6EDF3] leading-[1.1] tracking-tight">
              What the work runs on
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6">
              <h3 className="font-dm font-bold text-[#E6EDF3] text-lg mb-3">
                CEPF — the methodology
              </h3>
              <p className="text-[#7D8FA3] text-sm leading-relaxed mb-4">
                The Compliance-Epistemic Project Framework is a regulatory crossing catalogue:
                regimes broken down into the deliverables they require, the roles that produce
                them, the effort each carries, and the points where two regimes demand the same
                control. Version 7, snapshot July 2026 — 19 frameworks, 247 requirements, 24
                cross-framework overlap groups, 695 document templates.
              </p>
              <TextLink label="CEPF in detail →" href="/cepf" />
            </div>
            <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6">
              <h3 className="font-dm font-bold text-[#E6EDF3] text-lg mb-3">
                Calibra — the software
              </h3>
              <p className="text-[#7D8FA3] text-sm leading-relaxed mb-4">
                Calibra implements CEPF. Beyond the regulatory catalogue it carries risk,
                scheduling, operational flow, Gantt and milestones, which is what turns a
                remediation plan into a programme with dates and owners. A reduced demo runs on
                the CEPF page.
              </p>
              <TextLink label="What Calibra is →" href="/calibra" />
            </div>
            <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-6">
              <h3 className="font-dm font-bold text-[#E6EDF3] text-lg mb-3">
                Nexus MDS Core — the platform
              </h3>
              <p className="text-[#7D8FA3] text-sm leading-relaxed mb-4">
                Sixteen orchestrated services for regulated environments: local indexing,
                retrieval and audit, Zero-Trust identity, workflow engine, replaceable external
                generation. It is the implementation route when the analysis concludes that the
                architecture itself has to change — not a precondition for the advice.
              </p>
              <TextLink label="Nexus MDS Core →" href="/platform" />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3">
            Engagement models
          </p>
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
            How an engagement starts
          </h2>
          <div className="text-[#7D8FA3] text-lg leading-relaxed space-y-6">
            <p>
              <strong className="text-[#E6EDF3]">Exposure assessment.</strong> The productised
              entry point, and one engagement within this service rather than the service itself:
              three days of work on contracts, architecture and supply chain, EUR 4,500 plus VAT,
              delivered within fifteen working days as a signed document. If an implementation or
              ongoing advisory engagement opens within ninety days of delivery, the fee is
              credited in full.{" "}
              <Link
                href="/assessment"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                Scope and terms
              </Link>
              .
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Continuing advisory.</strong> Governance design
              and architectural review over the life of a programme, including the{" "}
              <Link
                href="/services/fractional-cto"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                fractional AI CTO
              </Link>{" "}
              arrangement where the organisation needs the decision to be made inside, not
              recommended from outside.
            </p>
            <p>
              <strong className="text-[#E6EDF3]">Implementation.</strong> Design and delivery of
              the systems the analysis calls for — retrieval, identity, audit, approval gates — on
              your infrastructure or on{" "}
              <Link href="/platform" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                Nexus MDS Core
              </Link>
              . The engineering underneath is listed under{" "}
              <Link
                href="/capabilities"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                technical capabilities
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Difference from legal consulting */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
            How this differs from legal and compliance consulting
          </h2>
          <div className="text-[#7D8FA3] text-lg leading-relaxed space-y-4">
            <p>
              A legal opinion tells you what the regulation says. It does not open the retrieval
              pipeline to check whether the answer your system produced can still be reconstructed
              in eighteen months. This work does, and reports which component carries each
              obligation.
            </p>
            <p>
              What is not delivered is a certificate of conformity — and no consultant can deliver
              one. Conformity is established by the assessment procedure the regulation prescribes,
              not by an opinion and not by a deployment topology. A signed document stating what
              you have and what you are missing is worth something in an inspection; a
              self-declaration of compliance is not.
            </p>
            <p>
              Legal representation, contractual negotiation and regulatory filings stay with your
              lawyers. The deliverable is written to be read by a board and used by counsel.
            </p>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3">
            Evidence
          </p>
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
            Production experience, not a practice area
          </h2>
          <div className="text-[#7D8FA3] text-lg leading-relaxed space-y-4">
            <p>
              <strong className="text-[#E6EDF3]">Federfarma Lombarda.</strong> A regulatory
              assistant for over a thousand pharmacies across the provinces of Milan, Lodi and
              Monza Brianza, around two thousand queries a day. Explicit document version chains,
              so answers cite what is in force rather than what is merely relevant; personal data
              excluded at ingestion; a tamper-evident audit log.{" "}
              <Link
                href="/case-studies/federfarma"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                Read the case study
              </Link>
              .
            </p>
            <p>
              <strong className="text-[#E6EDF3]">HumanIA Care.</strong> An AI companion
              architecture for elderly patients, built for privacy-first deployment in regulated
              care environments.{" "}
              <Link
                href="/case-studies/humania-care"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                Read the case study
              </Link>
              .
            </p>
            <p>
              <strong className="text-[#E6EDF3]">IATP.</strong> AI-assisted reverse engineering of
              a legacy platform, where the governing question was what the existing system
              actually does before anything is rewritten.{" "}
              <Link
                href="/case-studies/iatp"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                Read the case study
              </Link>
              .
            </p>
            <p>
              Engagements are led directly by Corrado Patierno — twenty-five years of enterprise
              systems architecture in regulated and business-critical environments, Innovation
              Manager certified by the Italian Ministry of Enterprise, board member of ENTD from
              2020 to 2025.{" "}
              <Link href="/about" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                Background
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — rendered in full, no accordion */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-8">
            Frequently asked questions
          </h2>
          <dl className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="text-[#E6EDF3] font-semibold text-lg mb-2">{f.q}</dt>
                <dd className="text-[#7D8FA3] text-base leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        title="Where does your supplier’s liability stop, and yours begin?"
        subtitle="The exposure assessment establishes, for your organisation, where the boundary sits — and it is where most governance engagements start."
        ctaLabel="Exposure assessment →"
        ctaHref="/assessment"
      />
      </main>
      <Footer />
    </>
  );
}
