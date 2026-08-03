import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IATP — AI-Driven Legacy Reverse Engineering",
  description:
    "AI-assisted reverse engineering of a legacy platform with RAG-based analysis document generation via Nexus, and a full AI-driven development pipeline with Antigravity, Trae, MCP servers, and Comet testing.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/case-studies/iatp" },
};

const tech = [
  "Nexus MDS Core",
  "RAG Pipeline",
  "Weaviate",
  "Antigravity",
  "Trae IDE",
  "MCP Servers",
  "Comet",
  "vLLM",
  "n8n",
  "Docker",
  "Git",
  "CI/CD",
];

export default function IatpCaseStudy() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/case-studies"
              className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
            >
              ← All case studies
            </Link>
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Legacy Modernisation · AI-Driven Development · DevOps
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              IATP — AI-driven reverse engineering and autonomous development pipeline
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              A legacy platform with years of undocumented evolution needed to be understood,
              documented, and modernised — without the original development team. We built an
              AI-powered pipeline that reverse-engineered the system, auto-generated analysis
              documents, and then implemented a full AI-driven development and testing workflow.
            </p>
          </div>
        </section>

        <section className="border-b border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "RAG", label: "Intelligent doc generation" },
              { value: "MCP", label: "DevOps server orchestration" },
              { value: "AI-driven", label: "Test pipeline with Comet" },
              { value: "End-to-end", label: "From reverse eng. to deploy" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#E6EDF3]">{m.value}</div>
                <div className="text-xs md:text-sm text-[#7D8FA3] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10 text-[#7D8FA3] leading-relaxed text-lg">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The challenge</h2>
              <p>
                IATP is a complex legacy platform that had evolved over years through multiple
                development teams, with minimal documentation and no standardised architecture.
                The original developers were no longer available. The client needed to understand
                what the system actually did at a functional and architectural level, produce
                comprehensive analysis documentation, and then modernise and extend the platform
                with a reliable, repeatable development process.
              </p>
              <p className="mt-4">
                Manual reverse engineering at this scale would have taken months and produced
                documents that were outdated before completion. A traditional rewrite was too
                risky without first having a verified understanding of existing business logic.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Phase 1 — AI-powered reverse engineering</h2>
              <p>
                We deployed Nexus MDS Core as the analytical backbone. The entire legacy codebase
                was ingested into a RAG pipeline powered by Weaviate, creating a semantically
                searchable knowledge base of every module, function, data flow, and business rule
                embedded in the code.
              </p>
              <p className="mt-4">
                Using multi-agent workflows orchestrated through n8n, the system automatically
                generated context maps — reconstructing the functional architecture, identifying
                hidden dependencies, mapping data lineage, and flagging undocumented business
                logic. This context was then used to auto-generate structured analysis documents:
                functional specifications, architectural diagrams descriptions, data dictionaries,
                and risk assessments — all produced via intelligent RAG queries against the
                ingested codebase.
              </p>
              <p className="mt-4">
                As the analysis progressed and new documents were generated, the platform&apos;s
                AI-driven obsolescence engine automatically tracked which earlier analysis artifacts
                were superseded by newer, more complete versions — maintaining an obsolescence graph
                so the development team always worked from the most current understanding of the system.
              </p>
              <p className="mt-4">
                What would have taken a team of analysts months was produced in days, with
                traceability back to the source code for every claim in every document.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Phase 2 — AI-driven development pipeline</h2>
              <p>
                With the system fully understood and documented, we implemented a modern,
                AI-augmented development pipeline:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li>
                  <strong className="text-[#E6EDF3]">Antigravity</strong> — AI-assisted code
                  generation and refactoring, using the RAG-generated context as the grounding
                  layer so every code change was informed by verified understanding of the
                  existing system.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Trae IDE</strong> — integrated development
                  environment with AI copilot capabilities, connected to the project&apos;s
                  knowledge base for context-aware code completion and inline documentation.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">MCP Servers</strong> — Model Context Protocol
                  servers for DevOps orchestration: automated deployment pipelines, infrastructure
                  provisioning, environment management, and CI/CD integration — all AI-coordinated.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Comet</strong> — AI-driven test generation
                  and quality assurance. Test cases automatically derived from the functional
                  specifications produced in Phase 1, with continuous regression testing and
                  coverage analysis to ensure modernisation did not break existing behaviour.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Results</h2>
              <p>
                The project delivered a complete, end-to-end AI-driven software lifecycle: from
                understanding a legacy system with no documentation, through automated analysis
                document generation, to a modern development pipeline where AI assists at every
                stage — coding, testing, deployment, and quality assurance.
              </p>
              <p className="mt-4">
                The RAG-powered reverse engineering reduced the analysis phase from an estimated
                3-4 months to under two weeks. The AI-driven development pipeline increased
                development velocity while maintaining quality through automated, context-aware
                testing. The entire approach is now repeatable and forms part of the Dynamics
                Consulting methodology for legacy modernisation engagements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Technologies used</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
