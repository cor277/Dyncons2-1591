import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Research & Insights | Dynamics Consulting",
  description:
    "Thought leadership, technical deep-dives, and original research from the Dynamics Consulting team on AI, data engineering, cloud architecture, and enterprise technology.",
  alternates: { canonical: "https://dynamicsconsulting.it/research" },
};

const posts = [
  {
    slug: "#",
    date: "February 2026",
    tag: "Applied AI",
    title: "RAG vs Fine-tuning: a pragmatic guide for enterprise AI teams",
    summary:
      "A decision framework for choosing between retrieval-augmented generation and fine-tuning, based on data freshness, inference cost, latency requirements, and the risk profile of your use case.",
  },
  {
    slug: "#",
    date: "January 2026",
    tag: "Data Platforms",
    title: "The lakehouse is not enough: why operational and analytical data need different treatment",
    summary:
      "Lakehouses excel at analytical workloads but struggle with the transactional guarantees, freshness requirements, and schema evolution pace of operational systems. Here's how to architect for both.",
  },
  {
    slug: "#",
    date: "December 2025",
    tag: "Cloud & Kubernetes",
    title: "Platform engineering ROI: measuring what matters",
    summary:
      "Internal developer platforms are often sold on developer happiness. We argue the real ROI metrics are deployment frequency, MTTR, and the cost of a cognitive load-hour — and show how to measure them.",
  },
  {
    slug: "#",
    date: "November 2025",
    tag: "Enterprise Integration",
    title: "Event sourcing in practice: lessons from five production systems",
    summary:
      "Event sourcing promises auditability and temporal querying. In practice, projection management, schema evolution, and snapshot strategy are where most implementations struggle. Here's what we learned.",
  },
  {
    slug: "#",
    date: "October 2025",
    tag: "Applied AI",
    title: "Governing AI outputs in regulated industries: a technical playbook",
    summary:
      "Healthcare, finance, and public sector deployments of AI require more than guardrails. We detail the audit logging, output validation, human-in-the-loop patterns, and model card requirements we use.",
  },
  {
    slug: "#",
    date: "September 2025",
    tag: "Blockchain",
    title: "When to use blockchain and when not to: an honest assessment",
    summary:
      "After building production systems on Ethereum, Hyperledger, and Polygon, here is our honest view of where distributed ledgers add genuine value — and the many cases where a Postgres table would suffice.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <NavBar />
      <main className="bg-white dark:bg-slate-950 min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Research & Insights
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Thinking out loud about technology
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Original research, technical deep-dives, and honest takes on the technologies and
              trends shaping enterprise software — from the engineers who build with them every day.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((p, i) => (
              <Link
                key={i}
                href={p.slug}
                className="group block rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 bg-white dark:bg-slate-900 p-8 transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                    {p.tag}
                  </span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{p.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                  {p.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {p.summary}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-cyan-600 dark:text-cyan-400">
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
