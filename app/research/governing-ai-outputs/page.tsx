import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "Governing AI outputs in regulated industries: a technical playbook",
  description:
    "Audit logging, output validation, human-in-the-loop patterns, and model card requirements from production AI deployments in healthcare, pharma, and public sector.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/research/governing-ai-outputs" },
};

export default function GoverningAiOutputsArticle() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link href="/research" className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1">
              ← All articles
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <TechBadge label="AI Governance" variant="cyan" />
              <span className="text-xs text-[#7D8FA3]">January 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Governing AI outputs in regulated industries: a technical playbook
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Healthcare, pharma, and public sector AI deployments require more than guardrails.
              Here is what output governance looks like in production — from audit logging to
              human-in-the-loop patterns.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Beyond prompt engineering</h2>
              <p>
                Most discussions about AI safety focus on what goes into the model: system prompts,
                guardrails, content filters. In regulated industries, what matters equally — often
                more — is what comes out and how it is governed after generation.
              </p>
              <p className="mt-4">
                The AI Act classifies healthcare AI systems as high-risk. This means every output
                must be traceable, auditable, and subject to human oversight. A well-prompted model
                that produces untraceable outputs is still non-compliant.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">1. Immutable audit logging</h2>
              <p>
                Every interaction with the AI system — the query, the retrieved context, the model
                invoked, the generated response, and the user who received it — must be logged in
                an append-only store. This is not optional. Regulators expect to reconstruct any
                AI-assisted decision from first principles.
              </p>
              <p className="mt-4">
                In Nexus MDS Core, we implement this through a dedicated audit service that
                intercepts every request-response cycle. Logs are stored in an immutable time-series
                database with cryptographic integrity verification.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">2. Output validation layer</h2>
              <p>
                Between the model&apos;s raw output and the user-facing response, there must be a
                validation layer. This is not a content filter — it is a structured check that
                verifies the output meets domain-specific quality criteria.
              </p>
              <p className="mt-4">
                In clinical contexts, this means verifying that cited sources exist and are current,
                that the response does not contradict known guidelines, and that confidence signals
                are accurate. In pharmaceutical contexts, it means verifying regulatory reference
                accuracy and flagging outputs that touch controlled substance classifications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">3. Human-in-the-loop patterns</h2>
              <p>
                The AI Act requires &quot;effective human oversight&quot; for high-risk systems.
                In practice, this means designing workflows where AI assists but does not replace
                human decision-making. Three patterns we deploy:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Review-before-action:</strong> AI generates a recommendation; a qualified human reviews and approves before it reaches the end user.</li>
                <li><strong className="text-[#E6EDF3]">Confidence gating:</strong> Outputs below a confidence threshold are automatically routed to human review. Above the threshold, they are delivered with a clear AI-generated label.</li>
                <li><strong className="text-[#E6EDF3]">Escalation triggers:</strong> Specific content categories (e.g., dosage recommendations, diagnostic suggestions) always trigger human review regardless of confidence.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">4. Model cards and documentation</h2>
              <p>
                Every model deployed in production must have a model card: a structured document
                describing its training data, capabilities, known limitations, intended use cases,
                and evaluation metrics. The AI Act makes this a legal requirement for high-risk
                systems. Beyond compliance, model cards are the foundation for informed human
                oversight — you cannot govern what you do not understand.
              </p>
              <p className="mt-4">
                In practice, a model card for a healthcare AI deployment should include: the
                training data sources and their provenance, the model architecture and version,
                quantitative performance metrics on domain-specific benchmarks, known failure
                modes (with examples), intended use cases and explicitly excluded use cases,
                and the date of the last evaluation. This document is not static — it must be
                updated whenever the model is retrained, the evaluation benchmark changes, or
                new failure modes are discovered.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">5. Feedback loops and continuous improvement</h2>
              <p>
                Output governance is not a one-time implementation. It is a continuous process
                that improves over time — but only if the system is designed to learn from its
                own outputs. This means closing the feedback loop between output validation,
                human review, and system improvement.
              </p>
              <p className="mt-4">
                In Nexus MDS Core, we implement three feedback mechanisms:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Rejection tracking:</strong> When a human reviewer rejects or modifies an AI output, the rejection reason is logged and categorised. Over time, this creates a dataset of failure patterns that can be used to improve the validation layer, the retrieval pipeline, or the model itself.</li>
                <li><strong className="text-[#E6EDF3]">Confidence calibration:</strong> The confidence gating thresholds (from Section 3) are not fixed. They are recalibrated periodically based on actual human review outcomes. If outputs above the threshold are being rejected at a rate higher than expected, the threshold is too permissive.</li>
                <li><strong className="text-[#E6EDF3]">Source quality scoring:</strong> In RAG-based systems, not all source documents are equally reliable. The feedback loop tracks which sources produce outputs that pass human review and which produce outputs that are rejected, creating a source reliability score that influences retrieval ranking.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">6. Architecture patterns for output governance</h2>
              <p>
                Implementing all five governance layers (audit logging, output validation,
                human-in-the-loop, model cards, feedback loops) requires a specific architectural
                pattern. The naive approach — adding governance as middleware in the request
                pipeline — creates latency bottlenecks and tight coupling.
              </p>
              <p className="mt-4">
                The pattern we deploy in production uses an event-driven architecture: every
                AI interaction emits an event to a governance bus. Audit logging, validation,
                and feedback tracking are implemented as independent consumers of this event
                stream. This decouples governance from the inference pipeline, ensuring that
                governance failures do not block user-facing responses (while still capturing
                every interaction for compliance).
              </p>
              <p className="mt-4">
                For regulated industries, output governance is not an optional add-on — it is
                the difference between an AI system that can withstand regulatory scrutiny and
                one that cannot. Italy&apos;s{" "}
                <Link href="/research/legge-132-2025" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Legge 132/2025
                </Link>{" "}
                and the EU AI Act make this explicit. The organisations that invest in governance
                architecture now will be the ones that can deploy AI at scale without regulatory
                risk. Those that treat governance as an afterthought will find themselves
                retrofitting — at far greater cost — when regulators come asking questions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["AI Governance", "AI Act", "Healthcare AI", "Audit", "Compliance"].map((tag) => (
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
