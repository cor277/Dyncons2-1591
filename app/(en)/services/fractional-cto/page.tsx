import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { ORG_ID, PERSON_ID, WEBSITE_ID, NEXUS_ID, CEPF_ID } from "@/app/schema-org";
import { breadcrumbSchema, faqSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { CTAButton } from "@/components/ui/CTAButton";
import { TextLink } from "@/components/ui/TextLink";
import { TechBadge } from "@/components/ui/TechBadge";

const EN_URL = "https://www.dynamicsconsulting.it/services/fractional-cto";

const DESCRIPTION =
  "Fractional AI CTO for regulated European enterprises: architectural authority, AI governance, vendor assessment and programme leadership on a part-time mandate. Typically 2–4 days a month for advisory, 8–12 for operational engagements.";

export const metadata: Metadata = {
  title: "Fractional AI CTO for Regulated European Enterprises",
  description: DESCRIPTION,
  keywords: [
    "Fractional AI CTO",
    "Fractional CTO",
    "Fractional CTO Italy",
    "AI programme leadership",
    "architectural governance",
    "AI vendor assessment",
    "AI Act governance",
    "interim CTO regulated industries",
  ],
  /* /fractional-cto-milano is not an hreflang alternate of this page: it is a
     different argument written for the Italian mid-market, and declaring the
     two as translations of each other would be false. Linked as related. */
  alternates: { canonical: EN_URL },
  openGraph: {
    images: OG_IMAGE,
    title: "Fractional AI CTO for Regulated European Enterprises",
    description: DESCRIPTION,
    url: EN_URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "Fractional AI CTO for Regulated European Enterprises",
    description: DESCRIPTION,
  },
};

const faqs = [
  {
    q: "What is a fractional AI CTO?",
    a: "A Chief Technology Officer engaged part-time, holding the same decision rights as a permanent one over architecture, technology selection and the AI programme, for a defined number of days a month. The distinction from consulting is accountability: a fractional CTO signs the architectural decisions and lives with them, rather than delivering a recommendation and leaving.",
  },
  {
    q: "When does an organisation need one rather than a consultant?",
    a: "When the open questions are decisions rather than analyses. If nobody in the organisation can say whether a vendor's AI claim is credible, whether an architecture will survive an audit, or which of three AI initiatives should be stopped, the gap is authority, not information. A consultant produces a document; a fractional CTO makes the call and owns the consequences.",
  },
  {
    q: "How much time does the mandate take?",
    a: "Typically 2–4 days a month for strategic advisory, and 8–12 days a month where the mandate includes running an AI or modernisation programme. The commitment is reviewed quarterly against what the programme actually needs, in both directions.",
  },
  {
    q: "How does an engagement start?",
    a: "With a technology assessment of two to three weeks: existing infrastructure, systems in production, data flows, supplier arrangements and the gaps that matter. It is followed by a strategic plan and roadmap over four to six weeks, with quarterly milestones. From there the mandate runs on an agreed monthly commitment, with reporting to the CEO or board.",
  },
  {
    q: "Is this the same as an interim CTO?",
    a: "No. An interim CTO fills a vacant seat full-time until it is permanently filled, and the assignment ends when it is. A fractional mandate is designed to be permanent at partial intensity: the organisation gets continuity of architectural judgement without carrying a full-time executive it cannot yet justify.",
  },
  {
    q: "Does the role cover AI regulation?",
    a: "It covers the technical and organisational side of it: how a system is classified under the EU AI Act, what evidence an architecture has to be able to produce, where supplier liability stops under the 2024 Product Liability Directive, and how NIS2, DORA or ISO/IEC 27001:2022 controls land on the same platform. Legal opinions and regulatory filings stay with your lawyers; the mandate produces the technical record they work from.",
  },
  {
    q: "Can the same person also build the system?",
    a: "Yes, and that is deliberate here. Advisory and implementation come from one practice: whoever writes the architectural requirement is able to build the system that meets it, and is therefore unable to write a requirement that cannot be built.",
  },
  {
    q: "Does a fractional CTO replace an existing IT team?",
    a: "No. The internal team keeps operations and delivery; the mandate adds architectural direction, technology selection, supplier governance and the AI programme. Where there is no internal seniority at all, the first months are typically spent building it rather than substituting for it.",
  },
];

const responsibilities = [
  {
    title: "AI architecture",
    body: "Retrieval, model selection, inference topology, data boundaries, integration with the systems of record. What runs where, what leaves the perimeter, and what an answer is made of.",
  },
  {
    title: "AI governance",
    body: "Classification of AI systems, the controls the architecture has to carry, audit and reconstructability requirements, human approval gates, and the record that makes them demonstrable.",
  },
  {
    title: "Vendor assessment",
    body: "Technical due diligence on AI suppliers and platforms: what the product actually does, where the data goes, what the contract makes them answerable for, and what the organisation is left holding.",
  },
  {
    title: "Security and data protection posture",
    body: "Identity and access separation, secrets handling, network boundaries, retention, and how GDPR obligations and sector security requirements map onto the platform rather than onto a policy document.",
  },
  {
    title: "Deployment model",
    body: "On-premise, hybrid or EU-hosted — decided against the threat model and the regulatory exposure, not against a preference. The taxonomy below is the one used across this practice.",
  },
  {
    title: "Programme leadership",
    body: "Roadmap, sequencing, budget defensibility, supplier coordination, and reporting a board can act on. Stopping initiatives that will not pay for themselves is part of the mandate.",
  },
];

const deployment = [
  {
    name: "Fully local AI",
    body: "Indexing, retrieval, identity, audit and generation all execute on infrastructure the organisation controls. Highest sovereignty, highest hardware cost, model choice constrained to what can be self-hosted.",
  },
  {
    name: "Sovereign hybrid AI",
    body: "Data, retrieval, reconciliation, identity and audit stay local; only final answer generation runs on an external inference endpoint, under policy and replaceable without redesigning the system. This is the model in production at Federfarma Lombarda.",
  },
  {
    name: "EU private inference",
    body: "Inference on private or EU-resident infrastructure with explicitly defined residency, retention and access characteristics. Appropriate where the constraint is jurisdiction and processing terms rather than physical custody.",
  },
];

const deliverables = [
  "A technology and AI landscape map: what is in production, what it depends on, and where the risk concentrates.",
  "An architectural decision record — the choices taken, the alternatives rejected and the reasoning — so a successor can audit the reasoning and not only the result.",
  "A prioritised roadmap with quarterly milestones and the budget envelope each one implies.",
  "Vendor and supplier assessments: technical due diligence written to be read by a board, not by an engineer.",
  "Governance requirements expressed as architecture — controls, audit surface, approval gates — rather than as policy text nobody can implement.",
  "Monthly reporting to the CEO or board on progress, decisions taken and what changed.",
];

const crumbs = breadcrumbSchema(EN_URL, [
  { name: "Home", path: "/" },
  { name: "Services", path: "/capabilities" },
  { name: "Fractional AI CTO" },
]);

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${EN_URL}#webpage`,
    url: EN_URL,
    name: "Fractional AI CTO for Regulated European Enterprises",
    description: DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": ORG_ID }, { "@id": NEXUS_ID }, { "@id": CEPF_ID }],
    mainEntity: { "@id": `${EN_URL}#service` },
    breadcrumb: { "@id": `${EN_URL}#breadcrumb` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${EN_URL}#service`,
    name: "Fractional AI CTO",
    serviceType: "Fractional Chief Technology Officer for AI programmes",
    url: EN_URL,
    provider: { "@id": ORG_ID },
    /* The mandate is held by a named person, not by an anonymous bench. */
    performer: { "@id": PERSON_ID },
    areaServed: ["IT", "EU"],
    availableLanguage: ["en", "it"],
    audience: {
      "@type": "Audience",
      audienceType:
        "Mid-market and enterprise organisations in regulated sectors — healthcare, pharmaceutical, financial services, energy, engineering, manufacturing — running or planning AI programmes without a permanent CTO",
    },
    description:
      "Part-time Chief Technology Officer mandate covering AI architecture, AI governance under the EU AI Act and adjacent regimes, vendor and supplier assessment, deployment model selection, and AI programme leadership. Typically 2–4 days a month for advisory and 8–12 for operational engagements, opening with a two-to-three week technology assessment.",
  },
  faqSchema(EN_URL, faqs),
  crumbs,
];

export default function FractionalCtoPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <NavBar />
      <main>
        {/* Hero — definition first, so the opening block answers the query on its own */}
        <section className="hero-constellation pt-32 pb-20">
          <div className="hero-content max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
                Services · Advisory &amp; Strategy
              </p>
              <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E6EDF3] leading-[1.05] tracking-tight mb-6">
                Fractional AI CTO
              </h1>
              <p className="text-[#9BA8B9] text-lg md:text-xl max-w-2xl leading-relaxed mb-5">
                A fractional AI CTO is a Chief Technology Officer engaged part-time, holding the
                same decision rights as a permanent one over architecture, technology selection and
                the AI programme. For organisations under regulatory constraint the mandate covers
                what an AI system is allowed to do, where its data goes, and what evidence it has to
                be able to produce afterwards.
              </p>
              <p className="text-[#7D8FA3] text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                Typically 2&ndash;4 days a month for strategic advisory, 8&ndash;12 where the
                mandate includes running the programme. Held personally by{" "}
                <Link href="/about" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Corrado Patierno
                </Link>
                , with implementation available from the same practice rather than handed to a third
                party.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-10">
                {[
                  "AI architecture",
                  "AI governance",
                  "Vendor assessment",
                  "Programme leadership",
                ].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton label="Discuss a mandate →" href="/contact" variant="primary" />
                <div className="flex items-center gap-6 sm:self-center">
                  <TextLink label="Exposure assessment →" href="/assessment" />
                  <TextLink label="Fractional CTO a Milano →" href="/fractional-cto-milano" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                Who this is for
              </h2>
              <p className="mb-4">
                Mid-market and enterprise organisations that have reached the point where technology
                decisions carry regulatory and commercial consequence, but cannot yet justify
                &mdash; or cannot find &mdash; a permanent CTO of the required seniority. In
                practice: hospitals and healthcare groups, pharmaceutical distribution, banks, asset
                managers and insurers, energy, engineering practices working to technical norms,
                logistics and manufacturing.
              </p>
              <p>
                The request usually arrives from a CEO or general manager with an AI initiative and
                nobody internal able to arbitrate it, from a CIO carrying more programme than the
                organisation has architectural capacity for, or from a board asked to approve a
                budget it has no way to evaluate.
              </p>
            </div>

            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                The problem it solves
              </h2>
              <p className="mb-4">
                An organisation without architectural authority does not stop making architectural
                decisions. It makes them anyway &mdash; through vendor selection, through a proof of
                concept that quietly becomes production, through an integration nobody documented.
                The decisions still get taken; what is missing is anyone able to refuse the wrong
                one, and anyone answerable for the right one.
              </p>
              <p className="mb-4">
                With AI the cost of that gap has changed shape. A badly chosen CRM is expensive. A
                badly governed AI system in a regulated environment is expensive and then has to be
                explained: what it was grounded on, what it answered on a given date, who approved
                the output, and whether personal data ever left the perimeter. Those questions are
                answerable only if the architecture was built to answer them &mdash; retrofitting an
                audit trail onto a system that was not designed to keep one is, in most cases, a
                rebuild.
              </p>
              <p>
                A fractional mandate closes the gap without the fixed cost of a permanent executive:
                a full-time CTO at this level of seniority carries a six-figure salary plus benefits,
                onboarding and the risk of a mis-hire, against a commitment measured in days a month.
              </p>
            </div>

            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                When you need one &mdash; and when you do not
              </h2>
              <p className="mb-4">
                The signals that a mandate is the right instrument: an AI initiative has been
                approved and nobody can specify it; a supplier proposal cannot be evaluated
                internally; several AI pilots are running and none has reached production; an audit,
                a customer security questionnaire or a tender has asked a question about the AI stack
                that the organisation cannot answer; a legacy platform has become the constraint on
                everything else; the technical function reports facts to the board but not decisions.
              </p>
              <p>
                It is the wrong instrument when the need is execution capacity rather than judgement
                &mdash; more developers, a delivery partner, an implementation team &mdash; or when a
                competent internal CTO already holds the mandate and the gap is one specific
                technical answer. In that second case a{" "}
                <Link href="/assessment" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  fixed-scope exposure assessment
                </Link>{" "}
                or an{" "}
                <Link
                  href="/services/governance-advisory"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  advisory engagement on governance and compliance
                </Link>{" "}
                is the cheaper and more honest answer, and we will say so.
              </p>
            </div>

            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                Fractional CTO, consultant, system integrator, interim CTO
              </h2>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">A consultant</strong> analyses a question and
                delivers a recommendation. Accountability ends with the document, and the
                organisation still has to decide.
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">A system integrator</strong> builds what it has
                been told to build. It is the right partner for delivery and the wrong one for
                deciding what should be delivered: the party specifying the work should not be the
                party invoicing it.
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">An interim CTO</strong> occupies a vacant seat
                full-time until it is permanently filled. The arrangement is temporary by design.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">A fractional CTO</strong> holds the decision
                rights permanently, at partial intensity, and is measured on what the architecture
                does in production &mdash; including two or three years later, when today&apos;s
                choices are either still standing or being paid for.
              </p>
            </div>
          </div>
        </section>

        {/* Responsibilities */}
        <section className="py-20 md:py-28 bg-[#0D1117]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
              What the mandate covers
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed max-w-3xl mb-12">
              Six areas of responsibility, held together rather than split across suppliers &mdash;
              in an AI programme they are the same decision seen from different angles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {responsibilities.map((r) => (
                <div
                  key={r.title}
                  className="bg-[#161B22] border border-[#30363D] rounded-xl p-6 hover:border-[#00B4D8] transition-colors duration-200"
                >
                  <h3 className="font-dm font-semibold text-[#E6EDF3] text-base mb-3">{r.title}</h3>
                  <p className="text-[#7D8FA3] text-sm leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment taxonomy */}
        <section className="py-20 md:py-28 bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              Deployment models, named precisely
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              &ldquo;Sovereign&rdquo; is used loosely enough in the market to be worthless as a
              specification. One of the first things a mandate settles is which of these three the
              organisation actually needs, and what it trades away in each case.
            </p>
            <dl className="space-y-6">
              {deployment.map((d) => (
                <div key={d.name} className="border-l-2 border-[#00B4D8] pl-5">
                  <dt className="font-dm font-semibold text-[#E6EDF3] text-base mb-2">{d.name}</dt>
                  <dd className="text-[#7D8FA3] text-base leading-relaxed">{d.body}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[#7D8FA3] text-base leading-relaxed mt-8">
              The reference implementation of the second model is documented in the{" "}
              <Link href="/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                Federfarma Lombarda case study
              </Link>
              , and the platform underneath it in{" "}
              <Link href="/platform" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                Nexus MDS Core
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Operating model */}
        <section className="py-20 md:py-28 bg-[#0D1117]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                How the engagement runs
              </h2>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">
                  Phase 1 &mdash; technology assessment, two to three weeks.
                </strong>{" "}
                Existing infrastructure, systems in production, data flows, integrations, supplier
                arrangements and the gaps that matter. The output is a map of what is actually there,
                which in most organisations does not exist in one place.
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">
                  Phase 2 &mdash; strategic plan and roadmap, four to six weeks.
                </strong>{" "}
                Priorities, sequencing, quarterly milestones, and the decisions that have to be taken
                before anything is built. Where AI is in scope, this is where classification and
                governance requirements enter the plan instead of being retrofitted to it.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Phase 3 &mdash; the standing mandate.</strong> An
                agreed monthly commitment &mdash; typically 2&ndash;4 days for advisory, 8&ndash;12
                for operational engagements. Participation in board meetings, architectural decisions
                and supplier reviews, with monthly reporting to the CEO. The commitment is reviewed
                quarterly and is not designed to grow by default.
              </p>
            </div>

            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                What you get in writing
              </h2>
              <ul className="space-y-3 list-none">
                {deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="text-[#00B4D8] mt-1.5 flex-shrink-0">&mdash;</span>
                    <span className="text-base">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                The evidence behind the mandate
              </h2>
              <p className="mb-4">
                Twenty-five years in enterprise systems, on both sides of the supplier contract:
                senior consulting roles at Capgemini and Avanade, then a client-side mandate at Banca
                Mediolanum governing the external suppliers on a programme, including supplier
                performance and contract renewal. CTO of Nexo/Sefitalia, responsible for the software
                factory and for the ERP, workforce and field platforms of an 1,800-person network.
                Programme lead on Nespresso Intervallo at ATOS: three delivery streams, around forty
                people.{" "}
                <Link href="/about" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  The full background is on the About page
                </Link>
                .
              </p>
              <p className="mb-4">
                On the AI side the record is current and in production:{" "}
                <Link href="/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  a regulatory assistant serving 1,000+ pharmacies
                </Link>{" "}
                with explicit document version chains, personal data excluded at ingestion and a
                tamper-evident audit log;{" "}
                <Link href="/case-studies/iatp" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  AI-assisted reverse engineering of a legacy platform
                </Link>
                ; and{" "}
                <Link href="/platform" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Nexus MDS Core
                </Link>
                , the self-hosted platform they run on.
              </p>
              <p>
                The governance side is not improvised either: the{" "}
                <Link href="/cepf" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Compliance-Epistemic Project Framework
                </Link>{" "}
                is the regulatory crossing catalogue this practice maintains, and the reasoning
                behind the architectures is published as{" "}
                <Link href="/research" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  research
                </Link>{" "}
                rather than asserted in a pitch. MISE-certified Innovation Manager; author of
                Logistica Fluida.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ — rendered in full, no accordion */}
        <section className="py-20 md:py-28 bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              FAQ
            </p>
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-10">
              Questions we are actually asked
            </h2>
            <div className="space-y-8">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-dm font-semibold text-[#E6EDF3] text-base mb-2">{f.q}</h3>
                  <p className="text-[#7D8FA3] text-base leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTASection
        title="Start with the assessment, not the contract"
        subtitle="Two to three weeks to establish what is actually in place. The mandate, if there is one, is defined from what that finds."
      />
      <Footer />
    </>
  );
}
