import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "How to implement RAG on enterprise data",
  description:
    "An honest guide to RAG on enterprise data: discovery sprints, chunking strategy, retrieval evaluation, and governance. No tutorials — real implementation decisions.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/research/rag-enterprise-data" },
};

export default function RagEnterpriseDataArticle() {
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
              <TechBadge label="Applied AI" variant="cyan" />
              <span className="text-xs text-[#7D8FA3]">April 2026 · 6 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              How to implement RAG on enterprise data: the honest guide
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              The tutorials assume a clean corpus. Your corpus is not clean. This changes everything.
              A practical guide for technical decision-makers who have already read the tutorials
              and found them useless for their actual situation.
            </p>
            <p className="text-sm text-[#7D8FA3] mt-4">
              By{" "}
              <Link href="/about" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                Corrado Patierno
              </Link>
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-[#7D8FA3] text-lg leading-relaxed">

            {/* 1. The real problem */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">1. The real problem</h2>
              <p>
                Most enterprise data is not a clean PDF folder. It is a mix of scanned documents
                with bad OCR, Excel files used as databases, email threads with critical decisions
                buried on page 3, ERP exports in proprietary formats, and SharePoint sites where
                the folder structure reflects six years of organisational change.
              </p>
              <p className="mt-4">
                Every RAG tutorial starts with &quot;load your documents into a vector database.&quot;
                This assumes the documents are identified, accessible, readable, and reasonably
                structured. In most Italian mid-market organisations, none of these assumptions
                hold. The gap between what the tutorials describe and what you actually face is
                not a minor inconvenience — it is the entire project risk.
              </p>
            </div>

            {/* 2. Start with questions, not infrastructure */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">2. Start with questions, not infrastructure</h2>
              <p>
                The first mistake is asking &quot;which vector database should we use?&quot; before
                asking &quot;what decisions do we want to make faster, and where does the information
                that would inform those decisions currently live?&quot;
              </p>
              <p className="mt-4">
                Map the questions first. Then work backwards to the documents. Then to the
                retrieval architecture. I have seen teams spend three months building an ingestion
                pipeline for a document corpus that turned out to be irrelevant to the actual
                business questions. The infrastructure was excellent. The ROI was zero.
              </p>
              <p className="mt-4">
                The right starting point is a whiteboard session with the people who make
                decisions: what do you need to know, how quickly, and where do you currently
                find it? The answers to these questions determine your corpus, your chunking
                strategy, and your latency requirements — not the other way around.
              </p>
            </div>

            {/* 3. The discovery phase */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">3. The discovery phase — why skipping it costs three months</h2>
              <p>
                A two-week document discovery sprint — inventory, access mapping, quality
                assessment, format audit — sounds like overhead. It is not. Every project that
                skips it hits the same wall six weeks in: the corpus is worse than expected,
                access is restricted in unexpected ways, and the chunking strategy built on
                assumptions needs to be rebuilt from scratch.
              </p>
              <p className="mt-4">
                What the discovery sprint actually produces: a complete inventory of document
                sources with format, access method, and quality score. A map of which documents
                answer which business questions. A realistic assessment of OCR quality, language
                mix, and structural consistency. An access audit — who owns what, what requires
                credentials, what is behind VPN.
              </p>
              <p className="mt-4">
                Discovery is not a consulting deliverable. It is insurance. The two weeks you
                spend here save you three months of rework later.
              </p>
            </div>

            {/* 4. Chunking strategy */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">4. Chunking strategy matters more than model choice</h2>
              <p>
                The retrieval quality of a RAG system is determined more by how documents are
                chunked than by whether you use GPT-4 or an open-source model. This is the
                single most underappreciated fact in enterprise RAG.
              </p>
              <p className="mt-4">
                Fixed-size chunking (512 or 1024 tokens) works for homogeneous corpora — blog
                posts, support tickets, product descriptions. For technical documentation, legal
                contracts, and regulatory texts — documents with internal structure that matters —
                semantic chunking that respects section boundaries outperforms fixed-size by a
                significant margin.
              </p>
              <p className="mt-4">
                Concrete guidance for three document types we work with regularly:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>
                  <strong className="text-[#E6EDF3]">Technical norms (ISO, UNI, EN):</strong>{" "}
                  Chunk by clause. Preserve the full clause hierarchy in metadata (e.g. &quot;ISO
                  9001:2015, Section 7.1.5, Clause 7.1.5.2&quot;). Overlap 1 clause above for
                  context. Typical chunk size: 300–800 tokens.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Contracts and legal documents:</strong>{" "}
                  Chunk by article or sub-article. Enrich metadata with party names, dates,
                  and cross-references. Overlap is critical — contract clauses reference each
                  other constantly. Typical chunk size: 400–1000 tokens.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Operational manuals:</strong>{" "}
                  Chunk by procedure step or section. Preserve step ordering in metadata.
                  Include the procedure title and scope in every chunk. Typical chunk size:
                  200–600 tokens.
                </li>
              </ul>
            </div>

            {/* 5. How to evaluate retrieval quality */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">5. How to evaluate retrieval quality before going live</h2>
              <p>
                Deploying without evaluation is how you end up with a system that feels impressive
                in demos and fails on real queries. Three evaluation approaches that work in practice:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li>
                  <strong className="text-[#E6EDF3]">MRR (Mean Reciprocal Rank)</strong> on a
                  curated set of question-document pairs. Build this set during discovery — the
                  subject matter experts who know where answers live are the ones who should
                  create it. Aim for at least 50 pairs covering the full query distribution.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Recall@k:</strong> for the 50 most important
                  queries, does the right chunk appear in the top k results? If your top-5 recall
                  is below 85%, your chunking or embedding strategy needs work before you touch
                  the generation layer.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Human eval on edge cases:</strong> the queries
                  where the answer is in an unusual location, or requires reasoning across two
                  documents, or involves a negation. These are the queries that will erode user
                  trust if they fail. Test them explicitly.
                </li>
              </ul>
              <p className="mt-4">
                Don&apos;t go live below a threshold you have agreed in advance. Define the
                threshold before you start evaluating, not after you see the numbers.
              </p>
            </div>

            {/* 6. Governance from day one */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">6. Governance from day one</h2>
              <p>
                Access control, audit logging, and model version pinning are not features you add
                after the system works. They are constraints that shape the architecture. If you
                build without them, you will retrofit them under pressure — and the retrofit will
                be incomplete.
              </p>
              <p className="mt-4">
                Minimum viable governance for a production RAG system: who can query what corpus,
                logged at query time. Which model version produced which answer, immutably stored.
                A process for updating the model that includes regression testing against the
                evaluation set. A data retention policy that specifies how long query logs and
                generated answers are kept.
              </p>
              <p className="mt-4">
                In regulated industries — healthcare, pharma, finance — this is not optional. In
                every other industry, it is still a good idea. The first time someone asks
                &quot;why did the system give that answer?&quot; you will be glad you logged it.
              </p>
            </div>

            {/* 7. On-premise vs cloud */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">7. On-premise vs cloud — the honest trade-offs</h2>
              <p>
                Cloud RAG is faster to start and slower to govern. On-premise is slower to start
                and easier to govern at scale. The break-even depends on three factors:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong className="text-[#E6EDF3]">Data sensitivity:</strong> if your corpus
                  contains patient data, financial records, or trade secrets, the compliance
                  overhead of cloud deployment often exceeds the operational overhead of
                  on-premise.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Regulatory requirements:</strong> GDPR,
                  AI Act, DORA, Legge 132/2025 — each adds constraints on where data can be
                  processed and how processing must be documented. On-premise simplifies
                  compliance by eliminating third-party data processing agreements.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Team capability:</strong> if your IT team
                  can run containers and manage GPU nodes, on-premise is viable. If they
                  cannot, cloud is the pragmatic choice until you build that capability —
                  but build it, because the cost curve favours on-premise for sustained
                  workloads.
                </li>
              </ul>
              <p className="mt-4">
                Neither option is universally better. Anyone who tells you otherwise is selling
                something.
              </p>
            </div>

            {/* 10 questions */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">10 questions to answer before you start</h2>
              <ol className="list-decimal list-inside space-y-3">
                <li>What business decisions should this system make faster, and for whom?</li>
                <li>Where does the data that informs those decisions currently live, and in what format?</li>
                <li>Who owns that data, and what access restrictions apply?</li>
                <li>What is the quality of the source documents — OCR accuracy, structural consistency, language mix?</li>
                <li>What regulatory requirements apply to the data and to the AI system processing it?</li>
                <li>What is the acceptable latency for a query response in production?</li>
                <li>How will you measure retrieval quality, and what is the minimum acceptable threshold?</li>
                <li>Who will maintain the system after deployment — update the corpus, retrain embeddings, monitor quality?</li>
                <li>What happens when the system gives a wrong answer — what is the blast radius?</li>
                <li>Can your infrastructure team run containers and manage GPU workloads, or do you need to build that capability first?</li>
              </ol>
              <p className="mt-4">
                If you cannot answer at least seven of these with confidence, you are not ready
                to build. Start with the discovery sprint.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Applied AI", "Enterprise Architecture", "Data Platforms"].map((tag) => (
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
