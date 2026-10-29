import type { Metadata } from "next";
import { NEXUS_SERVICE_COUNT } from "@/lib/nexus";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

const PAGE_URL = "https://www.dynamicsconsulting.it/sovereign-ai-pharma";

export const metadata: Metadata = {
  title: "Sovereign AI for Pharma: On-Premise AI for Pharmaceutical Companies",
  description:
    "Sovereign AI for pharmaceutical companies in Italy and the EU: on-premise AI infrastructure designed around the EU AI Act, GDPR, Italy’s Law 132/2025 and NIS2. Nexus MDS Core for pharmacovigilance, clinical trials and the pharmaceutical supply chain.",
  alternates: alternatesFor("/sovereign-ai-pharma"),
  openGraph: {
    images: OG_IMAGE,
    title: "Sovereign AI for Pharma: On-Premise AI for Pharmaceutical Companies",
    description:
      "On-premise AI infrastructure for pharma, designed around the EU AI Act, GDPR, Italy’s Law 132/2025 and NIS2. Nexus MDS Core for pharmacovigilance, clinical trials and supply chain.",
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Sovereign AI for Pharma — Sovereign AI Infrastructure for the Pharmaceutical Sector",
      description:
        "Sovereign AI for pharmaceutical companies in Italy and the EU: on-premise AI infrastructure designed around the EU AI Act, GDPR, Italy’s Law 132/2025 and NIS2. Nexus MDS Core for pharmacovigilance, clinical trials and supply chain.",
      url: PAGE_URL,
      inLanguage: "en",
      publisher: {
        "@type": "Organization",
        name: "Dynamics Consulting",
        url: "https://www.dynamicsconsulting.it",
      },
    },
    {
      "@type": "FAQPage",
      inLanguage: "en",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does sovereign AI mean in the pharmaceutical sector?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In pharma, sovereign AI means an artificial intelligence infrastructure that the pharmaceutical company owns, governs and controls: indexing, retrieval, identity and audit on-premise, generation on a local model or on a replaceable EU endpoint. Pharmacovigilance, clinical trial and intellectual property documents stay indexed inside the company perimeter.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t a pharmaceutical company use cloud-based AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The European regulatory framework (the EU AI Act, the GDPR, Italy’s Law 132/2025, NIS2) sets strict requirements on data protection, algorithmic transparency and the governance of AI systems, with the heaviest obligations reserved for high-risk uses. None of these laws requires data to stay in Italy or in the EU, but the GDPR subjects every transfer outside the EU to specific safeguards. Hyperscalers’ cloud solutions make it hard to demonstrate compliance on all of these fronts at once.",
          },
        },
        {
          "@type": "Question",
          name: "Which use cases does the Nexus MDS Core platform cover for pharma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nexus MDS Core supports automated pharmacovigilance with RAG pipelines, document management for clinical trials, pharmaceutical supply chain optimisation, automation of regulatory processes with agentic workflows, and semantic search over a scientific document base.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to implement a sovereign AI platform in pharma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends mainly on how complex the integration with existing systems (ERP, LIMS, EDC) is. The timeline is estimated at the end of the initial discovery and assessment phase, and the services are then deployed iteratively.",
          },
        },
        {
          "@type": "Question",
          name: "Does Italy’s Law 132/2025 also apply to private pharmaceutical companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Law 132/2025 applies to everyone who develops or uses artificial intelligence systems in Italy, including private pharmaceutical companies. It does not classify AI systems by risk: that is the EU AI Act’s job, which treats as high-risk, for example, AI that is a safety component of a medical device (obligations from 2 August 2028) and the uses listed in its Annex III (from 2 December 2027). In healthcare, Law 132 adds that the clinical decision always rests with the doctor and that patients have the right to be informed.",
          },
        },
        {
          "@type": "Question",
          name: "Does Dynamics Consulting work only in Lombardy or across Italy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dynamics Consulting works across the whole of Italy, with a strong presence in the North. Projects run in a hybrid model: discovery and workshops on site, implementation and support remotely with secure access to the client’s infrastructure.",
          },
        },
      ],
    },
  ],
};

export default function SovereignAiPharmaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Sovereign AI for Pharma
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Sovereign AI for the pharmaceutical sector in Italy: infrastructure, compliance
              and full control
            </h1>
            <p className="text-[#7D8FA3] text-lg leading-relaxed">
              Italian pharmaceutical companies operate in one of the most heavily regulated
              sectors in the world. Every piece of clinical data, every pharmacovigilance report,
              every intellectual property document needs absolute protection. Artificial
              intelligence is a transformative opportunity for pharma — but only when it is
              implemented on sovereign infrastructure designed for data residency, algorithmic
              transparency and the requirements of the regulatory framework. This page explains
              how to build on-premise AI infrastructure for pharma, designed around the
              requirements of the EU AI Act, the GDPR, Law 132/2025 (Italy&apos;s national AI
              law) and NIS2.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-12 text-[#7D8FA3] text-lg leading-relaxed">
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Why the pharmaceutical sector needs sovereign AI
              </h2>
              <p>
                Pharma is not just any sector when it comes to adopting AI. The data it handles —
                clinical trial results, adverse event reports, patented formulations, regulatory
                dossiers — carries an economic and regulatory value that makes it incompatible
                with hyperscalers&apos; multi-tenant cloud architectures. A single data breach in
                pharma can mean regulatory penalties on top of lasting reputational damage.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Sovereign AI</strong> answers that need with a
                precise architectural principle: the AI infrastructure lives on-premise, under the
                organisation&apos;s control. Indexing, vector search, workflow orchestration,
                authentication and audit run inside the company perimeter; generation runs on a
                local model or, if the organisation chooses, on a replaceable EU endpoint.
              </p>
              <p>
                For mid-market Italian pharmaceutical companies — those with revenue between €50
                million and €500 million — the challenge is twofold: adopting enterprise-grade AI
                without the resources of big pharma, and doing so within a regulatory framework
                that gets stricter every year. That is exactly the segment{" "}
                <Link
                  href="/platform"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Nexus MDS Core
                </Link>{" "}
                is built for.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                The regulatory framework: AI Act, GDPR, Law 132/2025, NIS2
              </h2>
              <p>
                The Italian pharmaceutical sector is subject to several AI-related regulations
                at once. Understanding that framework is the prerequisite for any architectural
                decision.
              </p>
              <p>
                The <strong className="text-[#E6EDF3]">EU AI Act</strong> (Regulation (EU)
                2024/1689), in force since August 2024 with obligations phasing in up to 2028,
                classifies AI systems by use, not by sector: AI that is a safety component of a
                medical device, or that falls in one of the uses listed in Annex III, is a{" "}
                <strong className="text-[#E6EDF3]">high-risk system</strong>. That brings specific
                obligations: detailed technical documentation, risk management systems, verifiable
                data governance, mandatory human oversight, and registration in an EU database.
                After Regulation (EU) 2026/1744 they apply from 2 December 2027 for Annex III uses
                and from 2 August 2028 for medical devices; the transparency obligations of
                Article 50 have applied since 2 August 2026. For pharmaceutical companies using AI
                in pharmacovigilance or clinical trials, the first question is whether the system
                falls in those categories at all.
              </p>
              <p>
                The <strong className="text-[#E6EDF3]">GDPR</strong> remains the cornerstone of
                data protection. In pharma, where patient data runs through every process — from
                clinical trial recruitment to adverse reaction reporting — the minimisation
                principle and the need for a solid legal basis for every processing activity make
                it problematic to use cloud-based AI platforms where data leaves the company
                perimeter.
              </p>
              <p>
                <Link
                  href="/research/law-132-2025"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Law 132/2025
                </Link>{" "}
                — Italy&apos;s first comprehensive national law on artificial intelligence —
                integrates the AI Act with national rules: in healthcare, the patient&apos;s right to
                be informed and a clinical decision that always rests with the doctor; in criminal
                law, the offences of its Article 26 and, through Legislative Decree 160/2026, the
                new Article 437-bis of the Criminal Code for omitting safety measures or human
                oversight in high-risk AI systems. For pharma, this
                translates into the need for complete audit trails and the ability to explain every
                algorithmic output.
              </p>
              <p>
                The <strong className="text-[#E6EDF3]">NIS2 Directive</strong> (transposed in Italy
                by Legislative Decree 138/2024) classifies the healthcare and pharmaceutical sector
                among the <strong className="text-[#E6EDF3]">essential sectors</strong>, with
                stronger cybersecurity obligations: managing digital supply chain risk, notifying
                incidents within 24 hours, and direct accountability for management. Cloud-based AI
                infrastructure widens the attack surface and makes NIS2 compliance harder.
              </p>
              <p>
                In short: the Italian and European regulatory framework of 2025-2026 makes{" "}
                <Link
                  href="/sovereign-ai"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  sovereign AI
                </Link>{" "}
                less a technology preference than the most direct way to meet these requirements
                in the pharmaceutical sector: none of these laws mandates it, but each asks the
                company to show where its data goes and who can reach it.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Use cases: pharmacovigilance, clinical trials, supply chain
              </h2>
              <p>
                Sovereign AI in pharma is not an abstract concept. The use cases are concrete,
                measurable and have a high operational impact.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Automated pharmacovigilance.</strong>{" "}
                Adverse event reporting (individual case safety reports, ICSRs) generates growing
                document volumes. An on-premise RAG pipeline makes it possible to query report
                databases automatically, classify events by severity, identify emerging patterns
                and generate reports for AIFA (the Italian Medicines Agency) and the EMA — with
                patient data indexed inside the company perimeter and generation on a local model.
                The benefit is twofold: shorter analysis times and GDPR controls mapped by design.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Document management for clinical trials.</strong>{" "}
                A Phase III clinical trial generates tens of thousands of documents: protocols,
                informed consents, case report forms (CRFs), monitoring reports, correspondence
                with ethics committees. A sovereign AI system with semantic vector search lets
                regulatory teams find information through natural-language queries, instead of
                searching manually across legacy systems.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Pharmaceutical supply chain optimisation.</strong>{" "}
                The pharmaceutical supply chain is subject to unique constraints: cold chain,
                batch-by-batch traceability, serialisation, Good Distribution Practice (GDP).
                On-premise agentic workflows can automate temperature monitoring, demand
                forecasting based on historical and seasonal data, and the handling of
                non-conformities — integrating with existing ERP systems without exposing
                operational data to third parties.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Quality assurance and batch record review.</strong>{" "}
                Batch record review is one of the processes most demanding of qualified staff. An
                on-premise AI system can pre-review records automatically, flagging anomalies,
                deviations and incomplete fields before the QA specialist steps in. The result:
                faster batch release cycles with a higher level of accuracy.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                The architecture of an on-premise AI platform for pharma: Nexus MDS Core
              </h2>
              <p>
                <Link
                  href="/platform"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Nexus MDS Core
                </Link>{" "}
                is the{" "}
                <strong className="text-[#E6EDF3]">Dynamics Consulting</strong>{" "}
                platform designed specifically for deploying sovereign AI in regulated sectors. It
                is not a SaaS product: it is a modular architecture of {NEXUS_SERVICE_COUNT}{" "}
                containerised services on Docker, on-premise, moving to Kubernetes when scale calls
                for it.
              </p>
              <p>The main components relevant to pharma include:</p>
              <ul className="list-disc list-inside space-y-2 text-[#7D8FA3]">
                <li>
                  <strong className="text-[#E6EDF3]">Local processing, generation of your choice</strong>{" "}
                  on a local open-weight model (llama.cpp, Qwen by default) or on a replaceable EU
                  endpoint
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">RAG pipeline</strong> with Weaviate for
                  semantic vector search over pharmaceutical documents, clinical protocols and
                  scientific literature
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Agentic workflows</strong>{" "}
                  with n8n to automate regulatory processes, pharmacovigilance and quality
                  assurance
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Zero-Trust authentication</strong>{" "}
                  with Keycloak OIDC/PKCE — single sign-on, multi-factor authentication, granular
                  role-based access control
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Audit and operations</strong>{" "}
                  — an encrypted, hash-chained record of every model call, healthchecks with
                  automatic restart, scheduled backups
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">API gateway</strong> with Kong for traffic
                  management, rate limiting and secure integration with external systems (ERP,
                  LIMS, EDC)
                </li>
              </ul>
              <p>
                Every component was chosen for its enterprise maturity, its open-source licence and
                its ability to run on infrastructure the company controls. The architecture is designed to be auditable:
                every decision the AI system takes is traceable, every access is logged, every
                output is reproducible.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                The risks of the cloud for pharmaceutical data
              </h2>
              <p>
                Hyperscalers&apos; cloud AI platforms (Azure OpenAI, AWS Bedrock, Google Vertex AI)
                undeniably make deployment convenient. But for the Italian pharmaceutical sector the
                risks outweigh the benefits on several dimensions.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Data sovereignty risk.</strong>{" "}
                Even with data residency in an EU region, pharmaceutical data processed on cloud
                infrastructure remains subject to the provider&apos;s jurisdiction. The US CLOUD
                Act, for example, allows US authorities to request access to data held by American
                companies anywhere in the world. For an Italian pharmaceutical company with
                sensitive intellectual property, that is an unacceptable strategic risk.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Technology lock-in risk.</strong>{" "}
                The proprietary APIs of Azure, AWS and Google create a structural dependency.
                Migrating from one provider to another — or bringing workloads back on-premise —
                becomes a project in its own right, often with prohibitive cost and timescales.
                With a sovereign architecture based on open standards, control stays with the
                organisation.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">NIS2 compliance risk.</strong>{" "}
                The NIS2 Directive requires organisations in essential sectors to manage digital
                supply chain risk. A cloud provider is, in effect, a critical link in that chain.
                Every security incident at the provider falls back on the client organisation, with
                notification obligations and potential penalties.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Economic risk.</strong>{" "}
                Cloud AI API costs are variable and often unpredictable. For high-volume workloads
                — such as pharmacovigilance processing thousands of reports a month — an on-premise
                platform has a fixed cost that does not grow with every request; whether and when
                it pays back against the cloud has to be calculated on the actual volumes.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Case study: Federfarma Lombarda
              </h2>
              <p>
                The project delivered for{" "}
                <Link
                  href="/case-studies/federfarma"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Federfarma Lombarda
                </Link>{" "}
                is a concrete example of sovereign AI applied to the Italian pharmaceutical sector.
                Federfarma Lombarda — the association of pharmacy owners representing more than
                1,000 pharmacies in the provinces of Milan, Lodi and Monza Brianza — needed to
                modernise its information systems by adding AI capabilities for document analysis
                and the automation of its association processes, while remaining fully within the
                rules.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Dynamics Consulting</strong>{" "}
                designed and implemented an infrastructure based on Nexus MDS Core, with a RAG
                pipeline for querying the document base intelligently, agentic workflows to
                automate repetitive processes, and an intuitive user interface for staff. The
                project was led directly by the founder, Corrado Patierno, with an iterative
                approach: discovery, MVP, validation with end users, and progressive release.
              </p>
              <p>
                The results: a significant reduction in document search time, automation of
                processes that used to take hours of manual work, and an AI infrastructure that
                Federfarma controls and governs on its own: indexing, retrieval, identity and audit
                run locally, personal data is excluded at ingestion, and only final answer
                generation runs on a replaceable endpoint in a European datacentre. The case shows that
                sovereign AI in pharma is not theory: it is operational, measurable, and already in
                production in Italy.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                How to start: a roadmap for pharmaceutical companies
              </h2>
              <p>
                Adopting a sovereign AI platform in pharma is not a big-bang project. It is a
                structured path that{" "}
                <Link
                  href="/services/applied-ai"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Dynamics Consulting
                </Link>{" "}
                runs with a proven methodology.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Phase 1 — Discovery and assessment (2-3 weeks).</strong>{" "}
                Analysis of the existing IT infrastructure, mapping of the processes that are
                candidates for AI automation, assessment of regulatory readiness (AI Act, GDPR, Law
                132/2025, NIS2). Output: an assessment document with prioritised recommendations
                and a quantified business case.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Phase 2 — Architecture and MVP (4-6 weeks).</strong>{" "}
                Design of the target architecture on Nexus MDS Core, selection of the LLMs best
                suited to the specific use case, deployment of the first service in a development
                environment. The MVP is validated with a small group of end users to gather
                feedback before rollout.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Phase 3 — Deployment and integration (4-8 weeks).</strong>{" "}
                Production deployment of the full platform, integration with existing systems (ERP,
                LIMS, EDC, pharmacovigilance systems), configuration of monitoring and alerts,
                training for technical staff and end users.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Phase 4 — Operations and continuous evolution.</strong>{" "}
                Post-deployment support, model updates, extension to new use cases, continuous
                adaptation to regulatory change. The Dynamics Consulting team stays alongside the
                organisation as a long-term technology partner.
              </p>
              <p>
                Every phase is documented, every decision is traceable, every milestone is agreed.
                No surprises, no scope creep. The founder, Corrado Patierno, personally follows
                every pharma project from day one.{" "}
                <Link
                  href="/contact"
                  className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                >
                  Get in touch
                </Link>{" "}
                for an initial, no-obligation conversation.
              </p>
            </div>

            {/* Section 8 — FAQ */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Frequently asked questions
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  What does sovereign AI mean in the pharmaceutical sector?
                </h3>
                <p>
                  In pharma, sovereign AI means an artificial intelligence infrastructure that the
                  pharmaceutical company owns, governs and controls: indexing, retrieval, identity
                  and audit on-premise, generation on a local model or on a replaceable EU
                  endpoint. Pharmacovigilance, clinical trial and intellectual property documents
                  stay indexed inside the company perimeter.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  Why can&apos;t a pharmaceutical company use cloud-based AI?
                </h3>
                <p>
                  The European regulatory framework (the EU AI Act, the GDPR,{" "}
                  <Link
                    href="/research/law-132-2025"
                    className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                  >
                    Law 132/2025
                  </Link>
                  , NIS2) sets strict requirements on data protection, algorithmic transparency and
                  the governance of AI systems, with the heaviest obligations reserved for
                  high-risk uses. None of these laws requires data to stay in Italy or in the EU,
                  but the GDPR subjects every transfer outside the EU to specific safeguards.
                  Hyperscalers&apos; cloud solutions make it hard to demonstrate compliance on all
                  of these fronts at once.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  Which use cases does the Nexus MDS Core platform cover for pharma?
                </h3>
                <p>
                  Nexus MDS Core supports automated pharmacovigilance with RAG pipelines, document
                  management for clinical trials, pharmaceutical supply chain optimisation,
                  automation of regulatory processes with agentic workflows, and semantic search
                  over a scientific document base. To go further, see the page on{" "}
                  <Link
                    href="/ai-consulting-pharma"
                    className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
                  >
                    AI consulting for pharma
                  </Link>
                  .
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  How long does it take to implement a sovereign AI platform in pharma?
                </h3>
                <p>
                  It depends mainly on how complex the integration with existing systems (ERP,
                  LIMS, EDC) is. The timeline is estimated at the end of the initial discovery and
                  assessment phase, and the services are then deployed iteratively.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  Does Italy&apos;s Law 132/2025 also apply to private pharmaceutical companies?
                </h3>
                <p>
                  Yes. Law 132/2025 applies to everyone who develops or uses artificial
                  intelligence systems in Italy, including private pharmaceutical companies. It does
                  not classify AI systems by risk: that is the EU AI Act&apos;s job, which treats as
                  high-risk, for example, AI that is a safety component of a medical device
                  (obligations from 2 August 2028) and the uses listed in its Annex III (from
                  2 December 2027). In healthcare, Law 132 adds that the clinical decision always
                  rests with the doctor and that patients have the right to be informed.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  Does Dynamics Consulting work only in Lombardy or across Italy?
                </h3>
                <p>
                  Dynamics Consulting works across the whole of Italy, with a strong presence in
                  the North. Projects run in a hybrid model: discovery and workshops on site,
                  implementation and support remotely with secure access to the client&apos;s
                  infrastructure.
                </p>
              </div>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-[#21262D]">
              <TechBadge label="Sovereign AI" />
              <TechBadge label="Pharma" />
              <TechBadge label="AI Act" />
              <TechBadge label="GDPR" />
              <TechBadge label="Law 132/2025" />
              <TechBadge label="NIS2" />
              <TechBadge label="Nexus MDS Core" />
              <TechBadge label="On-Premise" />
              <TechBadge label="Pharmacovigilance" />
              <TechBadge label="Clinical Trials" />
              <TechBadge label="llama.cpp" />
              <TechBadge label="RAG Pipeline" />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
