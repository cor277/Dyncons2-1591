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
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Event sourcing and AI audit trails</h2>
              <p>
                An unexpected benefit of event sourcing has emerged in our AI deployments: it
                provides a natural architecture for AI audit trails. When an AI system processes
                a query, the entire interaction — the input, the retrieved context, the model
                invoked, the raw output, the validated output, and any human review actions —
                can be modelled as a sequence of immutable events.
              </p>
              <p className="mt-4">
                This is not theoretical. In Nexus MDS Core, the{" "}
                <Link href="/research/governing-ai-outputs" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  output governance layer
                </Link>{" "}
                uses an event-sourced audit log. Every AI interaction is stored as a chain of
                events: QueryReceived → ContextRetrieved → InferenceCompleted →
                ValidationPassed → ResponseDelivered (or ValidationFailed →
                HumanReviewRequested → HumanApproved → ResponseDelivered). This gives
                regulators — and the organisation itself — the ability to reconstruct any
                AI-assisted decision from first principles, at any point in time.
              </p>
              <p className="mt-4">
                The AI Act&apos;s requirement for &quot;traceability&quot; in high-risk AI systems
                maps directly to event sourcing&apos;s core guarantee: nothing is lost, nothing is
                overwritten, and the full history is always available. Organisations that have
                already adopted event sourcing for their core business processes have a structural
                advantage when deploying compliant AI systems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Technology choices: EventStoreDB vs Kafka vs custom</h2>
              <p>
                The choice of event store technology is one of the first decisions — and one of the
                most consequential. From our five production deployments:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">EventStoreDB:</strong> Purpose-built for event sourcing. Native support for stream-per-aggregate, projections, and subscriptions. Excellent for greenfield projects where the team commits to event sourcing as the primary data model. Operational overhead is moderate — it is a specialised database that requires specific expertise.</li>
                <li><strong className="text-[#E6EDF3]">Apache Kafka:</strong> Not designed for event sourcing, but widely used as one. Works well when event sourcing is part of a broader event-driven architecture and the team already operates Kafka. The trade-off: Kafka lacks native support for reading a single aggregate&apos;s event stream efficiently, so you typically need a secondary index or a separate store for aggregate hydration.</li>
                <li><strong className="text-[#E6EDF3]">PostgreSQL with append-only tables:</strong> The pragmatic choice when the team is already strong in PostgreSQL and the event volume is moderate (under 100M events). You lose specialised features (native projections, catch-up subscriptions) but gain operational simplicity and the ability to use familiar tooling for debugging and monitoring.</li>
              </ul>
              <p className="mt-4">
                Our recommendation: if event sourcing is the core architectural pattern and the
                team has the expertise, use EventStoreDB. If event sourcing is one component in a
                larger event-driven system, use Kafka with a purpose-built projection layer. If the
                team is small and pragmatism trumps purity, PostgreSQL with well-designed
                append-only tables gets you 80% of the benefit with 20% of the operational cost.
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
              <p className="mt-4">
                The anti-patterns we have observed: using event sourcing for simple CRUD entities
                that rarely change (user profiles, configuration), applying it to read-heavy
                workloads where the overhead of aggregate hydration dominates (catalogues,
                reference data), and adopting it without investing in projection management
                tooling (which inevitably leads to manual database scripts that defeat the
                purpose of the pattern).
              </p>
              <p className="mt-4">
                For organisations in regulated industries — where auditability is non-negotiable
                and temporal queries are a compliance tool — event sourcing is not just a
                technical pattern. It is an architectural investment in regulatory readiness.
                For more on how we apply event-driven patterns in enterprise integrations,
                see our{" "}
                <Link href="/services/enterprise-integration" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Enterprise Integration
                </Link>{" "}
                service.
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
