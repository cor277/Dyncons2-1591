import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Research & Insights | Dynamics Consulting",
  description:
    "Thought leadership, technical deep-dives, and original research from Corrado Patierno on sovereign AI, on-premise infrastructure, RAG architectures, and enterprise modernisation for healthcare and pharma.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/research" },
};

const posts = [
  {
    slug: "#",
    date: "March 2026",
    tag: "Sovereign AI",
    title: "Why on-premise AI is not a step backward",
    summary:
      "The narrative that cloud-native equals modern is wrong for regulated industries. Here is the architectural and governance case for sovereign, on-premise AI infrastructure in healthcare and pharma.",
  },
  {
    slug: "#",
    date: "February 2026",
    tag: "Applied AI",
    title: "RAG vs fine-tuning: a pragmatic guide for enterprise AI teams",
    summary:
      "A decision framework for choosing between retrieval-augmented generation and fine-tuning, based on data freshness, inference cost, latency requirements, and the risk profile of your use case.",
  },
  {
    slug: "#",
    date: "January 2026",
    tag: "AI Governance",
    title: "Governing AI outputs in regulated industries: a technical playbook",
    summary:
      "Healthcare, pharma, and public sector AI deployments require more than guardrails. Audit logging, output validation, human-in-the-loop patterns, and model card requirements from production deployments.",
  },
  {
    slug: "#",
    date: "December 2025",
    tag: "Data Platforms",
    title: "The lakehouse is not enough: why operational and analytical data need different treatment",
    summary:
      "Lakehouses excel at analytical workloads but struggle with the transactional guarantees and schema evolution pace of operational systems. How to architect for both without rebuilding everything.",
  },
  {
    slug: "#",
    date: "November 2025",
    tag: "Legacy Modernisation",
    title: "AI-assisted reverse engineering of legacy platforms: lessons from the field",
    summary:
      "Applying RAG and multi-agent workflows to reconstruct functional and architectural knowledge from large legacy codebases. What works, what does not, and what traceability requirements actually look like.",
  },
  {
    slug: "#",
    date: "October 2025",
    tag: "Enterprise Integration",
    title: "Event sourcing in practice: lessons from five production systems",
    summary:
      "Event sourcing promises auditability and temporal querying. In practice, projection management, schema evolution, and snapshot strategy are where most implementations struggle.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Research &amp; Insights
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Thinking out loud about technology
            </h1>
            <p className="text-lg text-[#7D8FA3] max-w-2xl mx-auto">
              Original research, technical deep-dives, and honest takes on the technologies shaping
              enterprise AI, data infrastructure, and legacy modernisation in regulated industries.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {posts.map((p, i) => (
              <Link
                key={i}
                href={p.slug}
                className="group block rounded-2xl border border-[#30363D] hover:border-[#00B4D8] bg-[#161B22] p-8 transition-all shadow-sm hover:shadow-[0_0_30px_rgba(0,180,216,0.08)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#00B4D8]">
                    {p.tag}
                  </span>
                  <span className="text-xs text-[#30363D]">·</span>
                  <span className="text-xs text-[#7D8FA3]">{p.date}</span>
                </div>
                <h2 className="text-xl font-bold text-[#E6EDF3] group-hover:text-[#00B4D8] transition-colors mb-2">
                  {p.title}
                </h2>
                <p className="text-[#7D8FA3] text-sm leading-relaxed">{p.summary}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#00B4D8]">
                  Read article →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
