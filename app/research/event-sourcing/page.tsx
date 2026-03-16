import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "Event sourcing in practice: lessons from five production systems",
  description:
    "Event sourcing promises auditability and temporal querying. In practice, projection management, schema evolution, and snapshot strategy are where most implementations struggle.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/research/event-sourcing" },
};

export default function EventSourcingArticle() {
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
              <TechBadge label="Enterprise Integration" variant="cyan" />
              <span className="text-xs text-[#7D8FA3]">October 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Event sourcing in practice: lessons from five production systems
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Event sourcing promises auditability and temporal querying. In practice, projection
              management, schema evolution, and snapshot strategy are where most implementations
              struggle.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The appeal</h2>
              <p>
                Event sourcing stores every state change as an immutable event. Instead of
                overwriting the current state, you append what happened. This gives you a
                complete audit trail, the ability to reconstruct state at any point in time,
                and a natural fit with event-driven architectures. For regulated industries
                where auditability is a legal requirement, the appeal is obvious.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Where implementations struggle</h2>
              <p>
                Having deployed event sourcing in five production systems across financial services,
                logistics, and enterprise integration, the pattern that emerges is consistent: the
                event store itself is the easy part. Everything around it is where complexity lives.
              </p>

              <h3 className="text-xl font-bold text-[#E6EDF3] mt-6 mb-3">Projection management</h3>
              <p>
                Read models (projections) must be rebuilt from the event stream whenever their
                schema changes. For a projection over millions of events, this is not instantaneous.
                You need a strategy: blue-green projection switching, background rebuild with
                progress tracking, and fallback to the previous projection version if the new
                one fails validation. Most teams underestimate this operational overhead.
              </p>

              <h3 className="text-xl font-bold text-[#E6EDF3] mt-6 mb-3">Schema evolution</h3>
              <p>
                Events are immutable — but their schema is not. When business requirements change,
                you need to introduce new event types while maintaining backward compatibility with
                existing events. Upcasting (transforming old events to match new schemas at read
                time) works but adds complexity. Versioned event types with explicit migration
                logic is the approach that scales, but requires discipline from day one.
              </p>

              <h3 className="text-xl font-bold text-[#E6EDF3] mt-6 mb-3">Snapshot strategy</h3>
              <p>
                Rebuilding an aggregate from thousands of events on every read is not viable. You
                need snapshots — periodic materialisations of aggregate state. The decisions:
                snapshot frequency, storage location (same store or separate), invalidation
                strategy when projections change, and the cold-start problem for aggregates
                that have never been snapshotted.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">When to use it</h2>
              <p>
                Event sourcing is the right choice when auditability is a hard requirement, when
                you need temporal queries (&quot;what was the state at time T?&quot;), or when your
                domain is naturally event-driven (order processing, financial transactions,
                logistics tracking). It is the wrong choice when you just need CRUD with an
                audit log — a simpler append-only audit table achieves the same goal with
                a fraction of the operational complexity.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Event Sourcing", "CQRS", "EventStoreDB", "Enterprise Integration", "Audit"].map((tag) => (
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
