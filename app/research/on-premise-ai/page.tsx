import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "Why on-premise AI is not a step backward",
  description:
    "The architectural and governance case for sovereign, on-premise AI infrastructure in healthcare, pharma, and regulated industries. Why cloud-native does not always mean modern.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/research/on-premise-ai" },
};

export default function OnPremiseAiArticle() {
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
              <TechBadge label="Sovereign AI" variant="cyan" />
              <span className="text-xs text-[#7D8FA3]">March 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Why on-premise AI is not a step backward
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              The narrative that cloud-native equals modern is wrong for regulated industries.
              Here is the architectural and governance case for sovereign, on-premise AI
              infrastructure in healthcare and pharma.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The cloud assumption</h2>
              <p>
                Somewhere in the last decade, the enterprise technology industry internalised a
                simple equation: cloud equals modern, on-premise equals legacy. For many workloads
                this is true. For AI in regulated industries, it is dangerously wrong.
              </p>
              <p className="mt-4">
                When an organisation deploys an LLM on a hyperscaler, it is not just renting
                compute. It is sending its most sensitive data — patient records, pharmaceutical
                formulations, financial transactions — through infrastructure it does not control,
                governed by terms of service it cannot negotiate, in jurisdictions it may not
                fully understand.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">What regulated industries actually need</h2>
              <p>
                The GDPR, the AI Act (Regulation EU 2024/1689), Italy&apos;s Legge 132/2025, and
                NIS2 create a regulatory landscape where organisations must demonstrate verifiable
                control over their AI systems. This means knowing — and being able to prove —
                where data resides, how models process it, who has access, and how outputs are
                governed.
              </p>
              <p className="mt-4">
                On-premise deployment is not a philosophical preference. It is the most direct
                path to meeting these requirements. When the entire AI stack runs within the
                organisation&apos;s perimeter, data residency is guaranteed by architecture,
                not by contract. Audit trails are under the organisation&apos;s control, not
                the provider&apos;s. And the attack surface for data exfiltration shrinks to
                what the organisation itself manages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The performance myth</h2>
              <p>
                A common objection is that on-premise AI cannot match cloud performance. This was
                true five years ago. Today, inference engines like vLLM deliver production-grade
                throughput on commodity GPU hardware. Vector databases like Weaviate run efficiently
                on standard Kubernetes clusters. The performance gap has closed for the vast
                majority of enterprise use cases.
              </p>
              <p className="mt-4">
                What has not closed is the governance gap. No amount of cloud compliance
                certifications can replace the certainty that comes from data never leaving
                your building.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The cost equation: cloud vs on-premise for AI workloads</h2>
              <p>
                The assumption that cloud AI is cheaper deserves scrutiny. For inference-heavy
                workloads — the kind healthcare organisations run daily — cloud GPU costs scale
                linearly with usage. A single A100 instance on a major hyperscaler costs between
                $25,000 and $35,000 per year. An organisation running multiple models (clinical NLP,
                document extraction, conversational AI) can easily reach six figures annually in
                compute alone, before storage and egress fees.
              </p>
              <p className="mt-4">
                On-premise GPU hardware — even enterprise-grade — amortises over 3-5 years. After
                the initial capital expenditure, the marginal cost of additional inference is
                effectively zero. For organisations with predictable, sustained AI workloads,
                the total cost of ownership (TCO) inflection point typically arrives within 18-24
                months. Beyond that point, on-premise is materially cheaper.
              </p>
              <p className="mt-4">
                There is also a hidden cost in cloud AI that rarely appears in TCO calculations:
                vendor lock-in. Moving a production AI pipeline from one hyperscaler to another
                is a project measured in months, not days. On-premise infrastructure, built on
                open standards (Kubernetes, OCI containers, S3-compatible storage), preserves
                organisational optionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Data residency in practice: what EU regulations actually require</h2>
              <p>
                The GDPR requires that personal data transferred outside the EU has adequate
                safeguards. The AI Act (Regulation EU 2024/1689) adds requirements specific to
                AI systems: data used for training, testing, and inference must be managed with
                documented governance processes. Italy&apos;s{" "}
                <Link href="/research/legge-132-2025" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Legge 132/2025
                </Link>{" "}
                goes further, requiring verifiable data residency for AI systems processing
                health data.
              </p>
              <p className="mt-4">
                In practice, &quot;data residency&quot; means more than storing data on EU servers.
                It means that the entire processing pipeline — ingestion, embedding, vector storage,
                inference, and response delivery — runs within a jurisdictionally controlled
                environment. A cloud deployment where data is stored in Frankfurt but inference
                runs in Virginia does not meet this standard, even if the storage technically
                resides in the EU.
              </p>
              <p className="mt-4">
                On-premise deployment eliminates this ambiguity entirely. When the full AI stack
                runs on hardware the organisation owns and operates, data residency is guaranteed
                by physics, not by contractual clauses. This is not a philosophical argument — it
                is the difference between a compliance posture that depends on third-party
                attestations and one that the organisation can verify independently.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Implementation patterns: transitioning from cloud to on-premise AI</h2>
              <p>
                Organisations do not need to migrate everything at once. The most successful
                transitions we have led follow a phased approach:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Phase 1 — Assessment:</strong> Map existing AI workloads, classify data sensitivity, and identify which workloads must move on-premise for regulatory compliance vs. which could remain in the cloud.</li>
                <li><strong className="text-[#E6EDF3]">Phase 2 — Foundation:</strong> Deploy the on-premise infrastructure (Kubernetes cluster, GPU nodes, storage layer). In Nexus MDS Core deployments, this typically takes 2-3 weeks.</li>
                <li><strong className="text-[#E6EDF3]">Phase 3 — Migration:</strong> Move high-sensitivity workloads first (clinical AI, patient-facing systems). Maintain cloud for non-sensitive workloads during transition.</li>
                <li><strong className="text-[#E6EDF3]">Phase 4 — Optimisation:</strong> Tune inference performance, implement observability, and establish operational runbooks for the on-premise stack.</li>
              </ul>
              <p className="mt-4">
                The key insight is that on-premise AI does not mean building from scratch. Modern
                platforms like Nexus MDS Core provide a pre-integrated stack that deploys in days,
                not months. The operational complexity that historically made on-premise AI
                prohibitive has been engineered away.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">What sovereign AI looks like in practice</h2>
              <p>
                Nexus MDS Core is our answer to this challenge: approximately 16 orchestrated
                Docker services — LLM inference (vLLM), RAG pipeline (Weaviate), Zero-Trust
                authentication (Keycloak), workflow engine (n8n), observability (Grafana + Loki) —
                deployable on Kubernetes or bare-metal, entirely within the organisation&apos;s
                perimeter. It is already in production for{" "}
                <Link href="/case-studies/federfarma" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Federfarma Lombardia
                </Link>{" "}
                and{" "}
                <Link href="/case-studies/humania-care" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  CureSicure
                </Link>.
              </p>
              <p className="mt-4">
                For healthcare organisations evaluating their AI strategy, the architecture
                decision is not cloud vs on-premise in the abstract. It is a concrete question:
                can your current deployment model satisfy the regulatory requirements you face
                today and the ones coming in the next 18 months? If the answer is uncertain,
                on-premise deserves serious evaluation.
              </p>
              <p className="mt-4">
                On-premise AI is not a step backward. It is the architecture that takes
                compliance, data sovereignty, and organisational autonomy seriously. For
                regulated industries, it is the only architecture that makes sense. Read our{" "}
                <Link href="/ai-on-premise-healthcare" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  deep-dive on on-premise AI for healthcare
                </Link>{" "}
                for a detailed implementation perspective, or explore the{" "}
                <Link href="/platform" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Nexus MDS Core platform
                </Link>{" "}
                to see the architecture in detail.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Sovereign AI", "On-premise", "GDPR", "AI Act", "Healthcare"].map((tag) => (
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
