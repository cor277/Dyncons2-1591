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
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">What sovereign AI looks like in practice</h2>
              <p>
                Nexus MDS Core is our answer to this challenge: approximately 16 orchestrated
                Docker services — LLM inference, RAG pipeline, Zero-Trust authentication,
                workflow engine, observability — deployable on Kubernetes or bare-metal,
                entirely within the organisation&apos;s perimeter. It is already in production
                for Federfarma Lombardia and CureSicure.
              </p>
              <p className="mt-4">
                On-premise AI is not a step backward. It is the architecture that takes
                compliance, data sovereignty, and organisational autonomy seriously. For
                regulated industries, it is the only architecture that makes sense.
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
