import type { Metadata } from "next";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { TechBadge } from "@/components/ui/TechBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import Link from "next/link";

const EN_URL = "https://www.dynamicsconsulting.it/case-studies/federfarma";
const IT_URL = "https://www.dynamicsconsulting.it/it/case-studies/federfarma";

export const metadata: Metadata = {
  title: "Federfarma Lombarda — Nexus MDS Core in production",
  description:
    "Regulatory assistant for 1,000+ pharmacies across Milan, Lodi and Monza Brianza. Explicit version chains, personal data never indexed, tamper-evident audit log. Sovereign by architecture.",
  alternates: {
    canonical: EN_URL,
    languages: {
      en: EN_URL,
      it: IT_URL,
      "x-default": EN_URL,
    },
  },
  openGraph: {
    images: OG_IMAGE,
    title: "Federfarma Lombarda — Nexus MDS Core in production",
    description:
      "Regulatory assistant for 1,000+ pharmacies across Milan, Lodi and Monza Brianza. Explicit version chains, personal data never indexed, tamper-evident audit log.",
    url: EN_URL,
    type: "article",
    locale: "en_US",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "Federfarma Lombarda — Nexus MDS Core in production",
    description:
      "Regulatory assistant for 1,000+ pharmacies across Milan, Lodi and Monza Brianza. Explicit version chains, personal data never indexed, tamper-evident audit log.",
  },
};

const tech = [
  "Nexus MDS Core",
  "Weaviate",
  "Keycloak OIDC/PKCE",
  "APISIX",
  "Budibase",
  "n8n",
  "PostgreSQL + pgvector",
  "Apache Tika",
  "Local LLM (llama.cpp)",
  "MinIO",
  "Dremio",
  "Redis",
  "Directus",
  "RabbitMQ",
  "Docker",
];

const results = [
  {
    k: "Tool",
    before: "Website with Google-based search",
    now: "Assistant on Nexus MDS Core",
  },
  {
    k: "Usage",
    before: "Did not reach significant usage",
    now: "~2,000 queries per day",
  },
  {
    k: "Regulatory currency",
    before: "Left to the pharmacist",
    now: "Explicit, verifiable version chain",
  },
  {
    k: "Compliance burden",
    before: "Spread across 1,000 pharmacies",
    now: "Held by the system, checkable by the user",
  },
  {
    k: "Personal data",
    before: "—",
    now: "Never indexed, excluded at ingestion",
  },
  {
    k: "Traceability",
    before: "None",
    now: "Tamper-evident record of every invocation",
  },
];

export default function FederfarmaCaseStudy() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/case-studies"
              className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
            >
              ← All case studies
            </Link>
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Pharmaceutical distribution · Sovereign AI
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Federfarma Lombarda — Nexus MDS Core in production
            </h1>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[#7D8FA3] text-base">
              <div>
                <dt className="inline font-semibold text-[#E6EDF3]">Sector: </dt>
                <dd className="inline">pharmaceutical distribution</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-[#E6EDF3]">Platform: </dt>
                <dd className="inline">Nexus MDS Core</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-[#E6EDF3]">Scope: </dt>
                <dd className="inline">
                  1,000+ pharmacies across the provinces of Milan, Lodi and Monza Brianza
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold text-[#E6EDF3]">Status: </dt>
                <dd className="inline">in production</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-[#7D8FA3]">
              <Link href="/it/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3] underline" hrefLang="it">
                Leggi questa pagina in italiano →
              </Link>
            </p>
          </div>
        </section>

        {/* Metrics bar */}
        <section className="border-b border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1,000+", label: "Pharmacies in scope" },
              { value: "~2,000", label: "Queries per day" },
              { value: "Never", label: "Personal data indexed" },
              { value: "8 GB", label: "GPU in production" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#E6EDF3]">{m.value}</div>
                <div className="text-xs md:text-sm text-[#7D8FA3] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Body */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-12 text-[#7D8FA3] leading-relaxed text-lg">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                The problem nobody was naming
              </h2>
              <p>
                Federfarma Lombarda — the Lombard Chemical and Pharmaceutical Association of
                Pharmacy Owners, representing owners across the provinces of Milan, Lodi and Monza
                Brianza — produces a continuous flow of operational communications to its member
                pharmacies: circulars, drug recalls and shortages, duty rosters, tax deadlines,
                regulations, forms. Thousands of heterogeneous documents that overlap and update
                over time, because one communication corrects or supersedes another.
              </p>
              <p className="mt-4">
                Publishing those documents was not the problem. That had already been solved twice,
                badly.
              </p>
              <p className="mt-4">
                A website existed holding the full documentation, with a search engine built on
                Google technology. It worked poorly. The previous channel did not reach significant
                usage. A system nobody opens does not have an adoption problem. It has a usefulness
                problem.
              </p>
              <p className="mt-4">
                In parallel there was, and still is, a newsletter delivering documents to every
                pharmacy. It is convenient and it will continue to exist. But it performs a function
                worth naming precisely:{" "}
                <strong className="text-[#E6EDF3]">
                  it transfers the compliance burden onto a thousand pharmacists
                </strong>
                , each required to read every document, remember it, and independently know which
                version is still in force when the moment comes to apply it.
              </p>
              <p className="mt-4">
                That is not information distribution. It is the distribution of liability without
                the means to discharge it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Why search was not enough, and why naive RAG would have been worse
              </h2>
              <p>
                On a regulatory corpus, semantic search returns the document most{" "}
                <strong className="text-[#E6EDF3]">relevant</strong> to the question. Not the one{" "}
                <strong className="text-[#E6EDF3]">in force</strong>.
              </p>
              <p className="mt-4">
                The distinction sounds subtle. It is not. If circular B supersedes A, and a
                pharmacist asks about dispensing procedures for a medicine, a standard retrieval
                system may return A with full confidence: relevant, well written, exactly on point.
                And superseded.
              </p>
              <p className="mt-4">
                The pharmacist acts on a provision that is no longer valid, believing they are
                compliant. In a pharmacy this is not an operational inconvenience. It is a
                compliance failure with a name attached.
              </p>
              <p className="mt-4">
                Adding a conversational assistant to that corpus without first solving regulatory
                succession would have made things worse: faster, more confident access to the wrong
                answer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The version chain</h2>
              <p>
                The system resolves obsolescence in two distinct phases, and the second is the one
                that matters.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">At ingestion</strong>, an analysis step
                identifies within each document the supersession references to earlier
                communications, comparing it against candidates retrieved semantically on the same
                subject, area or medicine. It also extracts entities, dates, deadlines and validity
                windows.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">At reconciliation</strong>, a global pass
                re-reads the entire index and rebuilds the version chains — A superseded by B, B by
                C — marking as obsolete every document that has been replaced.
              </p>
              <p className="mt-4">
                The property that makes the system usable is that this second phase is{" "}
                <strong className="text-[#E6EDF3]">independent of loading order</strong>. Backlogs
                can be imported after recent documents: the chain reassembles correctly. Anyone who
                has built a regulatory archive knows this is the hard part, and that systems which
                do not solve it produce answers that are plausible and wrong.
              </p>
              <p className="mt-4">
                Not everything is left to language. Duty rosters are extracted as structured data
                with their own validity window and queried by date and location, not by semantic
                similarity. Medicines are recognised and normalised against the AIFA register. Where
                a question has an exact answer, the system treats it as such.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">What the pharmacist sees</h2>
              <p>
                For any question — rosters, dispensing procedures, shortages, vaccination campaigns,
                events — the system returns three things together.
              </p>
              <p className="mt-4">
                The <strong className="text-[#E6EDF3]">specific answer</strong>, formulated against
                the question asked.
              </p>
              <p className="mt-4">
                The{" "}
                <strong className="text-[#E6EDF3]">
                  cited documents in reverse chronological order
                </strong>
                , with superseded items excluded by default.
              </p>
              <p className="mt-4">
                The <strong className="text-[#E6EDF3]">version chain graph</strong>: nodes and edges
                showing which document supersedes which.
              </p>
              <p className="mt-4">
                This last point is the centre of the project. A system that gives the right answer
                without showing why must be trusted. A system that exposes the chain of supersession
                can be verified. In a regulated environment, the second property is worth more than
                the first.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Where the data boundary sits
              </h2>
              <p>
                Data sovereignty in this project is not a statement about server location. It is a
                property of the architecture, and it should be described as such.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Personal data never enters the index.</strong> It
                is not filtered downstream: a control at ingestion identifies documents containing
                individual health or personal records and excludes them from indexing. Personal
                working folders are blocked by configuration.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">Nor does it leave through the question.</strong>{" "}
                A pharmacist typing a patient’s name is writing personal health data into a search
                field. This is the anticipated case: a dedicated redaction filter operates on the
                incoming text, on the organisation’s own machine, before anything reaches the next
                step. It is the primary function that component exists for, not a side effect.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">
                  Indexing, retrieval, reconciliation and audit are entirely local.
                </strong>{" "}
                Text extraction, vectorisation, vector store, version chains, identity and logging:
                all on the organisation’s server, behind a single gateway.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">
                  Only final answer generation runs on an inference endpoint in a European
                  datacentre
                </strong>
                , reached through the gateway and logged. What transits is the question and the
                already-retrieved document fragments — the same circulars the Association
                distributes daily by newsletter to its member pharmacies. No confidential data, no
                personal data.
              </p>
              <p className="mt-4">
                <strong className="text-[#E6EDF3]">
                  That endpoint is a replaceable component, and the choice of provider follows the
                  data.
                </strong>{" "}
                Since what transits is documentation already public to its recipients, there was no
                reason to pay for a more expensive provider or model: the criterion is
                proportionality between cost and confidentiality, not trust in a name. Any inference
                provider can take its place. Fallback to a local model is implemented and working,
                and on higher-class hardware the entire chain — final generation included — runs
                in-house with no architectural change.
              </p>
              <p className="mt-4">
                The boundary is a sizing decision, not a design constraint.
              </p>
              <p className="mt-4">
                This is the difference between sovereignty as a slogan and sovereignty as a
                verifiable property: not “the vendor promises the data stays where they say”, but
                “the organisation can move the boundary when it decides to move it”.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Reconstructability</h2>
              <p>
                If a pharmacist acts on a system response and a dispute follows, the organisation
                must be able to reconstruct what the system answered, when, and on the basis of
                which documents.
              </p>
              <p className="mt-4">
                Every invocation — local and external — is recorded in an{" "}
                <strong className="text-[#E6EDF3]">encrypted, verifiable hash chain</strong>,
                designed to be tamper-evident: altering a record after the fact breaks the chain
                detectably. It is the audit service built specifically for the record-keeping,
                transparency and human oversight obligations of Regulation (EU) 2024/1689.
              </p>
              <p className="mt-4">
                Reconstructability is not guaranteed by the physical location of inference. It is
                guaranteed by the log. That distinction is why the system remains compliant in
                either configuration.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The hardware</h2>
              <p>
                The production system runs on a single 8 GB consumer GPU, from 2015, hosting local
                model, privacy filter and embeddings concurrently. Quantised models, video memory
                fragmentation management, work queue with a concurrency ceiling.
              </p>
              <p className="mt-4">
                This is not a boast about frugality. It is the lower bound of a range: the same
                architecture, unmodified, runs on 48 GB cards where final generation needs to come
                in-house as well.
              </p>
              <p className="mt-4">
                The point for decision-makers is this: sizing is an operational choice, not a
                constraint imposed by the vendor. Where others require cloud infrastructure costing
                tens of thousands per year, the same compliance is achieved here on an office
                machine — and scales when it needs to.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Results</h2>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-base border-collapse min-w-[560px]">
                  <thead>
                    <tr className="border-b border-[#30363D]">
                      <th className="text-left py-3 pr-4 font-semibold text-[#E6EDF3] w-1/4"></th>
                      <th className="text-left py-3 pr-4 font-semibold text-[#E6EDF3]">Before</th>
                      <th className="text-left py-3 font-semibold text-[#E6EDF3]">Now</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((r) => (
                      <tr key={r.k} className="border-b border-[#21262D] align-top">
                        <td className="py-3 pr-4 text-[#E6EDF3] font-medium">{r.k}</td>
                        <td className="py-3 pr-4">{r.before}</td>
                        <td className="py-3 text-[#9BA8B9]">{r.now}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6">
                The newsletter remains active. It was not replaced: it was joined by a tool that
                answers at the moment the question arises, rather than anticipating it and hoping it
                will be remembered.
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

            <div className="border-t border-[#30363D] pt-10">
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">What I sign</h2>
              <p>
                The architecture, the placement of the data boundary and the traceability model are
                documented technical decisions, taken and owned. In a sector where a compliance
                error carries personal consequences for whoever commits it, whoever designs the
                system must be able to answer for their choices.
              </p>
              <p className="mt-4 text-[#E6EDF3]">
                <strong>Corrado Patierno</strong> — Principal AI Architect, Dynamics Consulting
              </p>
              <p className="mt-1 text-base">
                <a
                  href="mailto:corrado.patierno@mensa.it"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  corrado.patierno@mensa.it
                </a>{" "}
                · dynamicsconsulting.it
              </p>
            </div>
          </div>
        </section>

        {/* Close */}
        <section className="py-20 px-6 border-t border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
              Where does your supplier’s liability stop, and yours begin?
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              From 9 December 2026 the European product liability directive treats software as a
              product. The exposure assessment establishes, for your organisation, where the
              boundary sits.
            </p>
            <CTAButton label="Exposure assessment →" href="/assessment" variant="primary" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
