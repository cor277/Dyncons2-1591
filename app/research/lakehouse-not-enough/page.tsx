import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "The lakehouse is not enough: why operational and analytical data need different treatment",
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
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Practical implications</h2>
              <p>
                This is not a rejection of the lakehouse pattern — it is a refinement. The lakehouse
                is excellent for what it was designed for: unified analytical storage with ACID
                guarantees. But treating it as the single source of truth for both operational and
                analytical workloads creates fragility. Separate the layers, connect them with CDC,
                and let each do what it does best.
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
