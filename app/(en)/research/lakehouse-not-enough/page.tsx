import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "The Lakehouse Is Not Enough",
  description:
    "Lakehouses excel at analytical workloads but struggle with transactional guarantees and schema evolution. How to architect for both without rebuilding everything.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/research/lakehouse-not-enough" },
};

export default function LakehouseArticle() {
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
              <TechBadge label="Data Platforms" variant="cyan" />
              <span className="text-xs text-[#7D8FA3]">December 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              The lakehouse is not enough: why operational and analytical data need different treatment
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Lakehouses excel at analytical workloads but struggle with the transactional
              guarantees and schema evolution pace of operational systems. How to architect
              for both without rebuilding everything.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The lakehouse promise</h2>
              <p>
                The data lakehouse was supposed to end the data warehouse vs. data lake debate.
                One platform, ACID transactions, schema enforcement, and the scalability of
                object storage. Apache Iceberg, Delta Lake, and Apache Hudi have made this
                technically achievable. For analytical workloads, it works.
              </p>
              <p className="mt-4">
                The problem is that most enterprise data platforms serve two masters: analytical
                consumers (dashboards, reports, ML training) and operational consumers (applications,
                APIs, real-time decision engines). These two have fundamentally different requirements,
                and pretending a single architecture serves both is where most lakehouse projects
                accumulate technical debt.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Where the model breaks</h2>
              <p>
                Operational workloads need sub-second point lookups, strict schema contracts between
                producers and consumers, and transactional guarantees at the row level. A lakehouse
                built on Parquet files in object storage can provide ACID at the table level, but
                it cannot match the point-query performance of PostgreSQL or the schema contract
                enforcement of a well-governed API.
              </p>
              <p className="mt-4">
                Schema evolution is another fault line. Analytical consumers tolerate — even expect —
                schema-on-read flexibility. Operational consumers break when a field name changes.
                Running both through the same governance model leads to either excessive rigidity
                (killing analytical agility) or excessive flexibility (breaking production APIs).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The two-layer architecture</h2>
              <p>
                In production, we separate concerns:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Operational layer:</strong> PostgreSQL or equivalent OLTP store, serving applications and APIs with strict schema contracts, row-level transactions, and sub-millisecond reads.</li>
                <li><strong className="text-[#E6EDF3]">Analytical layer:</strong> Apache Iceberg on object storage (MinIO in on-premise deployments), serving dashboards, ML pipelines, and ad-hoc analysis with schema-on-read and time-travel capabilities.</li>
                <li><strong className="text-[#E6EDF3]">Sync mechanism:</strong> Change data capture (CDC) or Synapse Link-style continuous export from the operational layer to the analytical layer. Near-real-time, eventually consistent, and decoupled.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The AI training data problem</h2>
              <p>
                The rise of enterprise AI introduces a third consumer that neither the lakehouse
                nor the operational store was designed for: ML training and inference pipelines.
                AI workloads need large volumes of historical data (analytical), but they also need
                it in specific formats — chunked, embedded, deduplicated, and versioned — that
                neither Parquet files nor PostgreSQL tables naturally provide.
              </p>
              <p className="mt-4">
                Vector databases like Weaviate sit outside both layers entirely. They consume data
                from the analytical layer (for corpus-scale embedding) and from the operational
                layer (for real-time context injection in RAG pipelines). Treating the vector
                store as a third layer — with its own ingestion pipeline, schema governance,
                and freshness guarantees — is more honest than pretending the lakehouse can
                serve this role.
              </p>
              <p className="mt-4">
                In Nexus MDS Core deployments, we implement a three-layer architecture:
                PostgreSQL for operational data, MinIO with Apache Iceberg for analytical
                workloads, and Weaviate for AI-specific vector storage. Each layer has its
                own CDC pipeline, its own governance model, and its own freshness SLA. The
                complexity is explicit rather than hidden — and explicit complexity is manageable
                complexity.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Governance implications</h2>
              <p>
                Data governance in a multi-layer architecture is fundamentally different from
                governance in a single-store model. Each layer has different access patterns,
                different sensitivity profiles, and different regulatory requirements.
              </p>
              <p className="mt-4">
                The operational layer contains live personal data — patient records, customer
                information, transaction details — subject to GDPR access controls, retention
                policies, and right-to-erasure requirements. The analytical layer contains
                transformed, often aggregated data where individual-level governance is less
                granular but lineage tracking is critical. The AI layer contains embeddings
                that may or may not constitute personal data under GDPR (a question that
                regulators have not yet definitively answered).
              </p>
              <p className="mt-4">
                A unified governance model that treats all three layers identically will either
                be too restrictive for analytical and AI workloads (killing productivity) or
                too permissive for operational data (creating compliance risk). The pragmatic
                approach is layer-specific governance policies connected by a shared data
                catalogue that tracks lineage across all three layers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Practical implications</h2>
              <p>
                This is not a rejection of the lakehouse pattern — it is a refinement. The lakehouse
                is excellent for what it was designed for: unified analytical storage with ACID
                guarantees. But treating it as the single source of truth for both operational and
                analytical workloads creates fragility. Separate the layers, connect them with CDC,
                and let each do what it does best.
              </p>
              <p className="mt-4">
                For organisations building AI capabilities on top of existing data infrastructure,
                the practical advice is: do not try to force your lakehouse to serve every consumer.
                Accept that operational, analytical, and AI workloads have fundamentally different
                requirements. Design your architecture to serve each one well, with clear data
                contracts and CDC pipelines between them.
              </p>
              <p className="mt-4">
                The result is more moving parts — but each part is simpler, more predictable, and
                easier to govern than a single platform stretched beyond its design envelope. In
                regulated industries where data governance is non-negotiable, this explicit
                separation is not over-engineering. It is the minimum viable architecture. For
                more on how we implement this in practice, see our{" "}
                <Link href="/services/data-platforms" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Modern Data Platforms
                </Link>{" "}
                service or explore the{" "}
                <Link href="/platform" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Nexus MDS Core
                </Link>{" "}
                architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Data Lakehouse", "Apache Iceberg", "PostgreSQL", "CDC", "Data Architecture"].map((tag) => (
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
