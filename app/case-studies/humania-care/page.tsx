import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HumanIA Care — AI Senior Companion | Case Studies | Dynamics Consulting",
  description:
    "How Dynamics Consulting built the AI backbone of HumanIA Care digital companion for elderly patients, reaching 50,000+ active users with a 94% satisfaction score in six months.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/case-studies/humania-care" },
};

const tech = [
  "Python", "PyTorch", "Hugging Face Transformers", "LangChain",
  "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Weaviate",
];

export default function HumaniaCareStudy() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link href="/case-studies" className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1">
              ← All case studies
            </Link>
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">Applied AI · Healthcare</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              AI-powered digital companion for elderly patients
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              HumanIA Care is a healthcare technology platform designed to make digital interaction
              accessible for elderly users. We built the conversational AI and personalisation layer
              that makes it feel natural, trustworthy, and clinically appropriate.
            </p>
          </div>
        </section>

        <section className="border-b border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
            {[
              { value: "50k+", label: "Active users" },
              { value: "94%", label: "Satisfaction score" },
              { value: "6 mo", label: "Time to market" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-bold text-[#E6EDF3]">{m.value}</div>
                <div className="text-sm text-[#7D8FA3] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10 text-[#7D8FA3] leading-relaxed text-lg">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The challenge</h2>
              <p>
                HumanIA Care&apos;s mission is to bridge the digital divide for elderly patients.
                Their product team had a clear vision: a conversational companion that could answer
                health questions, help with everyday tasks, and adapt to each user&apos;s vocabulary
                and pace. The system had to be reliable in low-bandwidth conditions, handle noisy
                speech input, and never confuse users who had little tolerance for technology errors.
              </p>
              <p className="mt-4">
                Healthcare context added a further constraint: every response had to be grounded,
                auditable, and consistent with clinical guidelines. Hallucinated content was not
                an acceptable failure mode.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">What we built</h2>
              <p>
                We designed a multi-layer AI architecture with a fine-tuned speech recognition model
                optimised for elderly vocal patterns. On top of this we deployed a retrieval-augmented
                generation system using LangChain and Weaviate, grounded in curated, clinically
                reviewed knowledge. A personalisation engine adapted response style, length, and
                vocabulary for each user over time.
              </p>
              <p className="mt-4">
                Privacy was built in from day one: all personal data anonymised at ingestion, full
                GDPR compliance, and end-to-end audit logging. The system was deployed on-premise
                with containerised Kubernetes workloads, keeping response latency under 800ms at
                the 99th percentile even on mobile connections.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Results</h2>
              <p>
                Six months from first commit to production launch, the platform reached 50,000 active
                users with a 94% satisfaction rate. The RAG architecture eliminated hallucinated
                clinical advice entirely, achieving zero documented incidents in the first year.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Technologies used</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((t) => (<TechBadge key={t} label={t} />))}
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
