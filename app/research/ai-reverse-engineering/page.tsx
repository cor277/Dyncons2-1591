import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "AI-assisted reverse engineering of legacy platforms: lessons from the field",
  description:
    "Applying RAG and multi-agent workflows to reconstruct functional and architectural knowledge from large legacy codebases. What works, what does not, and traceability requirements.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/research/ai-reverse-engineering" },
};

export default function AiReverseEngineeringArticle() {
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
              <TechBadge label="Legacy Modernisation" variant="cyan" />
              <span className="text-xs text-[#7D8FA3]">November 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              AI-assisted reverse engineering of legacy platforms: lessons from the field
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Applying RAG and multi-agent workflows to reconstruct functional and architectural
              knowledge from large legacy codebases. What works, what does not, and what
              traceability requirements actually look like.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The problem</h2>
              <p>
                Every enterprise of sufficient age has at least one system that nobody fully
                understands. The original developers have left. The documentation, if it ever
                existed, is years out of date. The codebase has been patched, extended, and
                worked around by successive teams who each understood their piece but not the
                whole. And yet the system runs critical business processes that cannot be
                interrupted.
              </p>
              <p className="mt-4">
                Modernising these systems without first understanding them is how organisations
                create expensive failures. The traditional approach — assigning a team of analysts
                to read the code and produce documentation — takes months and produces documents
                that are subjective, incomplete, and outdated before they are finished.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">What RAG brings to the table</h2>
              <p>
                Ingesting an entire codebase into a vector store (we use Weaviate) creates a
                semantically searchable knowledge base. You can ask questions like &quot;which
                modules write to the customer table?&quot; or &quot;what happens when an order is
                cancelled?&quot; and get answers grounded in actual code, with references to
                specific files and line numbers.
              </p>
              <p className="mt-4">
                This is fundamentally different from asking an LLM to &quot;explain this code.&quot;
                RAG-grounded answers are traceable — every claim can be verified against the source.
                This traceability is not just useful; in our experience, it is the single most
                important property for building trust with the teams who will act on the analysis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Multi-agent orchestration</h2>
              <p>
                A single RAG query can answer a specific question. Producing a comprehensive
                analysis requires orchestrating hundreds of queries in a structured sequence.
                We use n8n to build multi-agent workflows that systematically explore a codebase:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li>Identify all entry points (APIs, scheduled jobs, UI controllers)</li>
                <li>Trace data flows from ingestion to storage to output</li>
                <li>Map dependencies between modules</li>
                <li>Flag undocumented business rules embedded in code</li>
                <li>Generate structured output: functional specs, data dictionaries, architecture diagrams</li>
              </ul>
              <p className="mt-4">
                Each step produces artifacts that are reviewed by human analysts before the next
                step proceeds. The AI accelerates the work; humans validate it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">What does not work</h2>
              <p>
                Feeding an entire codebase to an LLM and asking for &quot;a complete analysis&quot;
                produces confident-sounding but unreliable results. Without retrieval grounding,
                the model hallucinates connections that do not exist and misses non-obvious ones
                that do. Context window limitations mean critical code paths are silently ignored.
                And without traceability, there is no way to verify any claim without manual
                code review — which defeats the purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Results from production</h2>
              <p>
                In our IATP engagement, this approach reduced the analysis phase from an estimated
                3-4 months of manual work to under two weeks. More importantly, the output was
                verifiable: every functional specification traced back to specific code, and the
                development team could validate claims against the source in minutes rather than
                days. This is now a repeatable methodology in our legacy modernisation practice.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Legacy Modernisation", "RAG", "Reverse Engineering", "n8n", "Weaviate"].map((tag) => (
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
