import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eldy — AI Senior Companion | Case Studies | Dynamics Consulting",
  description:
    "How Dynamics Consulting built the AI backbone of Eldy's digital companion for elderly users, reaching 50,000+ active users with a 94% satisfaction score in six months.",
  alternates: { canonical: "https://dynamicsconsulting.it/case-studies/eldy" },
};

const tech = [
  "Python",
  "PyTorch",
  "Hugging Face Transformers",
  "LangChain",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "Kubernetes",
];

export default function EldyCaseStudy() {
  return (
    <>
      <NavBar />
      <main className="bg-white dark:bg-slate-950 min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/case-studies"
              className="text-sm text-cyan-400 hover:text-cyan-300 mb-6 inline-flex items-center gap-1"
            >
              ← All case studies
            </Link>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Applied AI · Data Platforms
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              AI-powered senior digital companion — from concept to 50k+ users
            </h1>
            <p className="text-lg text-slate-300">
              Eldy is a tablet application designed to make technology accessible for elderly users.
              We built the conversational AI and personalisation layer that makes it feel natural.
            </p>
          </div>
        </section>

        {/* Metrics bar */}
        <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
            {[
              { value: "50k+", label: "Active users" },
              { value: "94%", label: "Satisfaction score" },
              { value: "6 mo", label: "Time to market" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{m.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Body */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-lg">
            <h2>The challenge</h2>
            <p>
              Eldy's mission is to bridge the digital divide for seniors. Their product team had a
              clear vision: a conversational companion that could answer questions, help with
              everyday tasks, and adapt to each user's vocabulary and pace. The technical challenge
              was significant — the system had to be reliable in low-bandwidth conditions, handle
              noisy speech input, and never confuse or frustrate users who had little tolerance for
              technology errors.
            </p>

            <h2>What we built</h2>
            <p>
              We designed a multi-layer AI architecture with a fine-tuned speech recognition model
              optimised for elderly vocal patterns — slower speech, regional accents, lower vocal
              register. On top of this we deployed a retrieval-augmented generation system using
              LangChain and a curated knowledge base, ensuring responses were grounded in accurate,
              age-appropriate information rather than hallucinated content.
            </p>
            <p>
              A personalisation engine tracked interaction history and adapted response style, length,
              and vocabulary over time for each user. Privacy was paramount — all personal data was
              anonymised at ingestion, with the model seeing only behavioural patterns, never
              identifiable information.
            </p>
            <p>
              The system was deployed on AWS with auto-scaling Kubernetes workloads to handle the
              unpredictable spikes of a consumer application, with a Redis cache layer keeping
              response latency under 800ms at the 99th percentile even on mobile connections.
            </p>

            <h2>Results</h2>
            <p>
              Six months from first commit to public launch, the product reached 50,000 active users
              with a Net Promoter Score in the top decile of consumer apps. The AI companion achieved
              a 94% user satisfaction rate in post-session surveys, with users reporting they felt
              "understood" — the north star metric the product team had defined at the start.
            </p>

            <h2>Technologies used</h2>
          </div>

          <div className="max-w-3xl mx-auto px-6 mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
