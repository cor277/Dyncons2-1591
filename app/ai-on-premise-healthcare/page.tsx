import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "On-Premise AI for Healthcare",
  description:
    "On-premise AI healthcare solutions that keep patient data within hospital walls. GDPR, AI Act and NIS2 compliant infrastructure for clinical AI, medical imaging, and pharma. Deployed on Nexus MDS Core.",
  keywords: [
    "on-premise AI healthcare",
    "healthcare AI infrastructure",
    "clinical AI on-premise",
    "GDPR AI healthcare",
    "AI Act healthcare compliance",
    "sovereign AI medical data",
    "hospital AI deployment",
    "healthcare data sovereignty",
    "on-premise LLM healthcare",
    "NIS2 healthcare AI",
  ],
  alternates: { canonical: "https://www.dynamicsconsulting.it/ai-on-premise-healthcare" },
  openGraph: {
    title: "On-Premise AI for Healthcare | Dynamics Consulting",
    description:
      "Sovereign AI infrastructure for hospitals, pharma, and clinical research. Patient data never leaves your perimeter.",
    url: "https://www.dynamicsconsulting.it/ai-on-premise-healthcare",
    type: "website",
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "On-Premise AI for Healthcare",
    description:
      "Comprehensive guide to deploying on-premise AI infrastructure in healthcare organisations, covering regulatory compliance, clinical use cases, architecture, and implementation.",
    url: "https://www.dynamicsconsulting.it/ai-on-premise-healthcare",
    publisher: {
      "@type": "Organization",
      name: "Dynamics Consulting",
      url: "https://www.dynamicsconsulting.it",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why does healthcare AI need on-premise deployment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Healthcare AI processes protected health information (PHI), genomic data, and clinical records that fall under GDPR special category data protections. On-premise deployment guarantees data residency by architecture rather than by contract, eliminates cross-border transfer risks, and provides the verifiable control required by the EU AI Act for high-risk systems.",
        },
      },
      {
        "@type": "Question",
        name: "Is on-premise AI compliant with the EU AI Act for healthcare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The EU AI Act classifies most healthcare AI systems as high-risk, requiring human oversight, auditability, and data governance. On-premise deployment simplifies compliance by keeping data, models, and audit trails under the deploying organisation's direct control, eliminating third-party processor risks and enabling complete transparency for conformity assessments.",
        },
      },
      {
        "@type": "Question",
        name: "What hardware is needed to run AI on-premise in a hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A production-grade on-premise healthcare AI stack typically requires a GPU server (NVIDIA A100, H100, or L40S) with 48-80 GB VRAM for LLM inference, a Kubernetes cluster with 3+ nodes for orchestration, NVMe storage for vector databases, and redundant networking. Nexus MDS Core is optimised to run on this hardware profile with approximately 16 Docker services.",
        },
      },
      {
        "@type": "Question",
        name: "How does on-premise AI compare to cloud AI in terms of cost for healthcare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On-premise AI has higher initial capital expenditure but significantly lower operating costs over 3-5 years. Healthcare organisations running 50,000+ inference requests per month typically reach cost parity within 12-18 months. Additionally, on-premise eliminates per-token API fees, egress charges, and the hidden cost of compliance remediation for cloud data processing.",
        },
      },
      {
        "@type": "Question",
        name: "Can on-premise healthcare AI integrate with existing hospital information systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A well-architected on-premise AI platform exposes HL7 FHIR and DICOM interfaces for integration with electronic health records, PACS, and laboratory information systems. Nexus MDS Core includes API gateway services with role-based access control and audit logging that map to existing hospital IT governance frameworks.",
        },
      },
      {
        "@type": "Question",
        name: "What clinical AI use cases require on-premise deployment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clinical decision support systems, medical document summarisation, radiology AI triage, pathology image analysis, pharmacovigilance signal detection, and patient-facing conversational AI all process sensitive health data that benefits from on-premise deployment. Any AI system that touches identifiable patient data in the EU should be evaluated for on-premise hosting under GDPR Article 9 and AI Act obligations.",
        },
      },
    ],
  },
];

export default function AiOnPremiseHealthcarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* ── Hero ── */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <TechBadge label="On-Premise AI" variant="cyan" />
              <TechBadge label="Healthcare" variant="cyan" />
              <span className="text-xs text-[#7D8FA3]">March 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              On-Premise AI for Healthcare: Why Sovereign Infrastructure Is the Only Compliant Path
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Healthcare organisations across Europe are deploying artificial intelligence to improve
              clinical outcomes, reduce administrative burden, and accelerate research. But the
              convergence of GDPR, the EU AI Act, and NIS2 creates a regulatory environment where
              sending patient data to cloud AI providers is increasingly untenable. This guide
              explains why on-premise AI infrastructure is not just a compliance choice — it is the
              architecture that healthcare demands.
            </p>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10 text-[#7D8FA3] text-lg leading-relaxed">

            {/* ── 1. Why healthcare demands on-premise AI ── */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Why Healthcare Demands On-Premise AI
              </h2>
              <p>
                Healthcare data is not ordinary data. Patient records, diagnostic imaging, genomic
                sequences, and pharmaceutical research datasets fall under{" "}
                <strong className="text-[#E6EDF3]">GDPR Article 9</strong> — special category data
                that receives the highest level of regulatory protection. When an AI system processes
                this data, every architectural decision becomes a compliance decision.
              </p>
              <p className="mt-4">
                Cloud-based AI platforms, regardless of their certification posture, introduce
                structural risks that are difficult to mitigate in healthcare contexts. Data transits
                through infrastructure controlled by third parties. Processing occurs in data centres
                whose physical location may shift without notice. Sub-processors — often undisclosed
                until audit time — may access data for model improvement, debugging, or abuse
                detection purposes that fall outside the original processing agreement.
              </p>
              <p className="mt-4">
                On-premise AI eliminates these risks architecturally. When the inference engine, the
                vector database, and the orchestration layer all run within the hospital&apos;s own
                data centre, <strong className="text-[#E6EDF3]">data residency is guaranteed by
                physics, not by contract</strong>. There is no egress, no cross-border transfer, no
                ambiguity about which jurisdiction governs the processing. For healthcare CTOs
                evaluating AI deployment strategies, this distinction is not academic — it is the
                difference between a compliant system and an audit finding.
              </p>
              <p className="mt-4">
                The clinical stakes amplify this further. An AI system that assists in triage
                decisions, drug interaction checks, or radiology pre-screening is making
                recommendations that affect patient safety. If that system&apos;s behaviour cannot be
                fully audited because the inference pipeline runs on opaque cloud infrastructure, the
                organisation cannot satisfy the transparency requirements that regulators — and
                patients — increasingly expect.
              </p>
            </div>

            {/* ── 2. The regulatory landscape ── */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                The Regulatory Landscape: GDPR, AI Act, NIS2, and Beyond
              </h2>
              <p>
                Healthcare AI in Europe operates under a layered regulatory framework that, taken
                together, creates an almost irresistible case for on-premise deployment.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">GDPR (Regulation EU 2016/679)</strong> requires a
                lawful basis for processing health data, mandates Data Protection Impact Assessments
                for large-scale processing, and imposes strict conditions on international transfers.
                The Schrems II ruling invalidated the EU-US Privacy Shield and made transfers to US
                cloud providers legally precarious — a situation that the EU-US Data Privacy Framework
                has only partially resolved, and which remains subject to future legal challenge.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">The EU AI Act (Regulation EU 2024/1689)</strong>,
                which entered its high-risk obligations phase in 2025, classifies AI systems used in
                healthcare as high-risk. This triggers mandatory requirements for risk management
                systems, data governance, technical documentation, human oversight, accuracy and
                robustness measures, and post-market monitoring. Deployers of high-risk AI systems
                must ensure{" "}
                <Link href="/research/governing-ai-outputs" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  governance of AI outputs
                </Link>{" "}
                and maintain logs for the entire lifecycle of the system. On-premise deployment makes
                these obligations structurally simpler to satisfy because the organisation retains
                full control of the stack.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">NIS2 (Directive EU 2022/2555)</strong> designates
                healthcare as an essential sector, subjecting hospitals and health service providers
                to enhanced cybersecurity obligations. These include supply chain risk management,
                incident reporting within 24 hours, and demonstrable security measures for critical
                information systems. An on-premise AI deployment reduces the supply chain attack
                surface by eliminating external API dependencies for core AI inference.
              </p>
              <p className="mt-4">
                In Italy specifically,{" "}
                <strong className="text-[#E6EDF3]">Legge 132/2025</strong> adds national-level AI
                governance requirements that complement the EU framework, including provisions for
                transparency in public-sector AI use and professional liability considerations for
                AI-assisted clinical decisions.
              </p>
              <p className="mt-4">
                For organisations operating across multiple EU member states, the compliance surface
                only expands. On-premise deployment provides a single, defensible architectural
                answer to all of these overlapping requirements: the data stays where the care is
                delivered.
              </p>
            </div>

            {/* ── 3. Clinical AI use cases ── */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Clinical AI Use Cases That Require Data Sovereignty
              </h2>
              <p>
                Not every AI workload in healthcare needs on-premise hosting. Scheduling
                optimisation, facility management predictions, and anonymised population health
                analytics can often run safely in the cloud. But the highest-value clinical AI use
                cases — the ones that transform care delivery — almost invariably require data
                sovereignty.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Clinical decision support:</strong> AI systems
                that assist physicians with differential diagnosis, treatment protocol selection, or
                drug interaction checking must process the patient&apos;s full clinical record in
                real time. This includes comorbidities, current medications, lab results, and
                clinical notes — data that cannot leave the hospital&apos;s perimeter without
                explicit patient consent and a robust legal basis.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Medical document summarisation:</strong> Large
                language models that summarise discharge letters, radiology reports, or surgical
                notes process thousands of patient records daily. Each document contains identifiable
                health information. An on-premise RAG pipeline — retrieval-augmented generation
                backed by a local vector database — enables this without any data leaving the
                facility. Our{" "}
                <Link href="/research/on-premise-ai" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  research on sovereign AI architecture
                </Link>{" "}
                details the technical foundations.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Radiology AI triage:</strong> Computer vision
                models that pre-screen chest X-rays, mammograms, or CT scans for urgent findings
                process DICOM images that are inherently identifiable. These models must run within
                the hospital&apos;s PACS network, and their outputs must be logged with the same
                auditability as any other clinical finding.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Pharmacovigilance and adverse event detection:</strong>{" "}
                Pharmaceutical companies and hospital pharmacies use NLP models to scan clinical
                notes, patient feedback, and literature for adverse drug reaction signals. This
                processing touches both patient data and proprietary pharmaceutical intelligence —
                two categories that demand strict data isolation.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Patient-facing conversational AI:</strong>{" "}
                Chatbots and voice assistants that handle appointment booking, symptom pre-screening,
                or medication reminders collect health information directly from patients. Under
                GDPR, the data controller must ensure this data is processed with appropriate
                safeguards. An on-premise deployment removes the need to negotiate Data Processing
                Agreements with third-party AI providers.
              </p>
            </div>

            {/* ── 4. Architecture: on-premise healthcare AI stack ── */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Architecture: What an On-Premise Healthcare AI Stack Looks Like
              </h2>
              <p>
                A production-grade on-premise AI deployment for healthcare is not a single model
                running on a GPU server. It is a distributed system with multiple specialised
                services that must work together reliably, securely, and observably.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">
                  <Link href="/platform" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                    Nexus MDS Core
                  </Link>
                </strong>{" "}
                is the platform we built to solve this problem. It consists of approximately 16
                orchestrated Docker services deployed on Kubernetes or bare-metal infrastructure,
                entirely within the organisation&apos;s perimeter. The key components include:
              </p>
              <ul className="mt-4 space-y-3 list-disc list-inside">
                <li>
                  <strong className="text-[#E6EDF3]">LLM inference engine (vLLM):</strong> Serves
                  open-source models — LLaMA, Mistral, DeepSeek, Qwen — on dedicated GPU hardware.
                  Supports dynamic batching and continuous batching for throughput optimisation.
                  No data leaves the server.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">RAG pipeline with Weaviate:</strong> Vector
                  database for semantic search across clinical documents, protocols, and knowledge
                  bases. Cursor-based pagination handles datasets exceeding 100,000 documents.
                  Chunking strategies are tuned for medical text structures.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Zero-Trust authentication:</strong> Every
                  service-to-service call is authenticated and authorised. Role-based access control
                  maps to clinical roles — physician, nurse, pharmacist, administrator — ensuring
                  that AI access mirrors existing clinical governance.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Immutable audit logging:</strong> Every query,
                  every retrieved context chunk, every generated response is logged in an
                  append-only store with cryptographic integrity verification. This satisfies AI Act
                  traceability requirements and enables retrospective review of any AI-assisted
                  decision.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Workflow orchestration:</strong> Multi-step AI
                  workflows — such as &quot;retrieve patient history, generate summary, flag
                  interactions, present to physician&quot; — are managed by a dedicated orchestration
                  engine with retry logic, timeout handling, and human-in-the-loop escalation.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Observability stack:</strong> Prometheus
                  metrics, structured logging, and distributed tracing provide real-time visibility
                  into model performance, latency, error rates, and resource utilisation.
                </li>
              </ul>
              <p className="mt-4">
                This architecture is not theoretical. It is running in production for{" "}
                <Link href="/case-studies/federfarma" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Federfarma Lombardia
                </Link>{" "}
                and{" "}
                <Link href="/case-studies/humania-care" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  CureSicure / Humania Care
                </Link>
                , processing real clinical and pharmaceutical data daily.
              </p>
            </div>

            {/* ── 5. Cloud vs on-premise comparison ── */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Cloud vs On-Premise: A Cost and Compliance Comparison
              </h2>
              <p>
                The perception that cloud AI is cheaper than on-premise persists because most cost
                analyses focus on month one. A realistic total cost of ownership analysis over three
                to five years tells a different story for healthcare organisations with sustained AI
                workloads.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Cloud AI costs</strong> for healthcare include
                per-token inference fees (which scale linearly with usage), data egress charges,
                storage costs for audit logs, and — critically — the cost of compliance. This
                includes legal review of Data Processing Agreements, DPIA preparation for each
                cloud-based processing activity, ongoing monitoring of the provider&apos;s
                sub-processor changes, and remediation costs when compliance gaps are discovered
                during audits.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">On-premise AI costs</strong> are front-loaded:
                GPU server hardware (typically 40,000-120,000 EUR for a production-grade inference
                node), Kubernetes infrastructure, network configuration, and initial deployment
                engineering. Operating costs are dominated by electricity, cooling, and a DevOps team
                allocation — costs that are predictable and do not scale with inference volume.
              </p>
              <p className="mt-4">
                For a mid-sized hospital running 50,000-100,000 AI inference requests per month
                across clinical decision support, document summarisation, and internal knowledge
                retrieval, the break-even point typically falls between{" "}
                <strong className="text-[#E6EDF3]">12 and 18 months</strong>. After that, the
                on-premise deployment is materially cheaper — and the compliance posture is
                structurally stronger from day one.
              </p>
              <p className="mt-4">
                There is also the hidden cost of vendor lock-in. Cloud AI providers change pricing,
                deprecate models, and modify terms of service unilaterally. An on-premise deployment
                running open-source models gives the healthcare organisation full control over its AI
                roadmap. Model upgrades happen on the organisation&apos;s schedule, not the
                vendor&apos;s.
              </p>
            </div>

            {/* ── 6. Real-world deployments ── */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Real-World Deployments: From Pharmaceutical Distribution to Clinical AI
              </h2>
              <p>
                Dynamics Consulting has deployed on-premise AI infrastructure for organisations
                operating at the intersection of healthcare, pharma, and regulated data processing.
                Two deployments illustrate the pattern.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">
                  <Link href="/case-studies/federfarma" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                    Federfarma Lombardia
                  </Link>
                </strong>{" "}
                — the association representing over 2,800 pharmacies across Lombardy — needed AI
                infrastructure to process pharmaceutical distribution data, regulatory compliance
                documents, and inter-pharmacy communications. The system handles document
                classification, automated regulatory response drafting, and knowledge retrieval
                across a corpus of pharmaceutical regulations and circulars. All processing runs
                on-premise through Nexus MDS Core. No pharmacy data, no patient-adjacent information,
                and no proprietary pharmaceutical intelligence ever transits through external cloud
                infrastructure.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">
                  <Link href="/case-studies/humania-care" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                    CureSicure / Humania Care
                  </Link>
                </strong>{" "}
                — a healthcare technology platform — required on-premise AI for clinical data
                processing, patient communication automation, and care pathway optimisation. The
                deployment includes a RAG pipeline indexed on clinical protocols and care guidelines,
                enabling practitioners to query institutional knowledge through natural language while
                maintaining complete data sovereignty. The{" "}
                <Link href="/research/governing-ai-outputs" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  output governance framework
                </Link>{" "}
                ensures every AI-generated recommendation is logged, traceable, and subject to
                clinical review before reaching the patient.
              </p>
              <p className="mt-4">
                These deployments demonstrate that on-premise healthcare AI is not a future
                aspiration. It is production infrastructure, running today, processing real data,
                under real regulatory scrutiny.
              </p>
            </div>

            {/* ── 7. Implementation roadmap ── */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Implementation Roadmap for Healthcare Organisations
              </h2>
              <p>
                Deploying on-premise AI in a healthcare setting is a multi-phase initiative that
                requires alignment between IT, clinical leadership, compliance, and procurement.
                Based on our deployment experience, we recommend the following phased approach:
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Phase 1 — Assessment (4-6 weeks):</strong>{" "}
                Inventory existing infrastructure, identify candidate AI use cases ranked by clinical
                impact and data sensitivity, assess GPU procurement options, and map regulatory
                obligations. Produce a Data Protection Impact Assessment for the planned AI
                processing activities. Engage{" "}
                <Link href="/services/applied-ai" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  applied AI specialists
                </Link>{" "}
                who understand both the clinical domain and the infrastructure requirements.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Phase 2 — Infrastructure provisioning (2-4 weeks):</strong>{" "}
                Deploy Kubernetes or bare-metal GPU infrastructure within the organisation&apos;s
                data centre. Configure networking, storage, and security baselines. Install the
                Nexus MDS Core platform stack. Establish monitoring and alerting. This phase benefits
                from containerised deployment — our platform&apos;s Docker-based architecture means
                infrastructure provisioning is reproducible and version-controlled.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Phase 3 — Pilot deployment (4-8 weeks):</strong>{" "}
                Deploy the first AI use case — typically document summarisation or knowledge
                retrieval, as these deliver immediate value with lower clinical risk. Validate
                accuracy against clinical benchmarks. Tune retrieval parameters. Train clinical users
                on the interface. Collect feedback systematically.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Phase 4 — Production expansion (ongoing):</strong>{" "}
                Extend to additional use cases: clinical decision support, patient communication,
                pharmacovigilance. Each new use case follows its own DPIA and validation cycle. The
                infrastructure scales horizontally — additional GPU nodes and storage expand capacity
                without re-architecting the platform.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Phase 5 — Continuous governance:</strong>{" "}
                Implement post-market monitoring as required by the AI Act. Review model performance
                metrics monthly. Audit AI-generated outputs quarterly. Update models as new
                open-source releases improve clinical accuracy. The governance framework is not a
                one-time setup — it is an operational discipline that runs for the lifetime of the
                AI system.
              </p>
            </div>

            {/* ── 8. FAQ ── */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">
                    Why does healthcare AI need on-premise deployment?
                  </h3>
                  <p>
                    Healthcare AI processes protected health information, genomic data, and clinical
                    records classified as GDPR special category data. On-premise deployment
                    guarantees data residency by architecture, eliminates cross-border transfer
                    risks, and provides the verifiable control required by the EU AI Act for
                    high-risk systems. It is the most direct path to demonstrable compliance.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">
                    Is on-premise AI compliant with the EU AI Act for healthcare?
                  </h3>
                  <p>
                    Yes. The AI Act classifies most healthcare AI as high-risk, requiring human
                    oversight, auditability, and robust data governance. On-premise deployment
                    simplifies compliance by keeping data, models, and audit trails under the
                    deploying organisation&apos;s direct control — eliminating third-party processor
                    risks and enabling complete transparency for conformity assessments.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">
                    What hardware is needed to run AI on-premise in a hospital?
                  </h3>
                  <p>
                    A production stack typically requires a GPU server (NVIDIA A100, H100, or L40S)
                    with 48-80 GB VRAM for LLM inference, a Kubernetes cluster with three or more
                    nodes, NVMe storage for vector databases, and redundant networking.{" "}
                    <Link href="/platform" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                      Nexus MDS Core
                    </Link>{" "}
                    is optimised to run on this hardware profile with approximately 16 Docker
                    services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">
                    How does on-premise AI compare to cloud AI in terms of cost?
                  </h3>
                  <p>
                    On-premise has higher upfront capital expenditure but significantly lower
                    operating costs over three to five years. Healthcare organisations running
                    50,000+ monthly inference requests typically reach cost parity within 12-18
                    months. On-premise also eliminates per-token fees, egress charges, and the
                    hidden cost of cloud compliance remediation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">
                    Can on-premise AI integrate with existing hospital information systems?
                  </h3>
                  <p>
                    Yes. A well-architected on-premise AI platform exposes HL7 FHIR and DICOM
                    interfaces for integration with electronic health records, PACS, and laboratory
                    information systems. Nexus MDS Core includes API gateway services with
                    role-based access control and audit logging that map to existing hospital IT
                    governance frameworks.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">
                    What clinical AI use cases require on-premise deployment?
                  </h3>
                  <p>
                    Clinical decision support, medical document summarisation, radiology AI triage,
                    pathology image analysis, pharmacovigilance, and patient-facing conversational
                    AI all process sensitive health data that benefits from on-premise hosting. Any
                    AI system touching identifiable patient data in the EU should be evaluated for
                    on-premise deployment under GDPR Article 9 and AI Act obligations.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Internal links + tags ── */}
            <div className="border-t border-[#21262D] pt-8">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Further Reading</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/research/on-premise-ai" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                    Why on-premise AI is not a step backward
                  </Link>
                </li>
                <li>
                  <Link href="/research/governing-ai-outputs" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                    Governing AI outputs in regulated industries
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/federfarma" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                    Case study: Federfarma Lombardia
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/humania-care" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                    Case study: CureSicure / Humania Care
                  </Link>
                </li>
                <li>
                  <Link href="/platform" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                    Nexus MDS Core platform overview
                  </Link>
                </li>
                <li>
                  <Link href="/services/applied-ai" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                    Applied AI & Agentic Workflows services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                    Contact us for a healthcare AI assessment
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "On-Premise AI",
                "Healthcare AI",
                "GDPR",
                "AI Act",
                "NIS2",
                "Data Sovereignty",
                "Clinical AI",
                "Nexus MDS Core",
                "Pharmacovigilance",
              ].map((tag) => (
                <TechBadge key={tag} label={tag} variant="cyan" />
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
