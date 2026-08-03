import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "RAG vs Fine-Tuning: Enterprise AI Guide",
  description:
    "A decision framework for choosing between retrieval-augmented generation and fine-tuning based on data freshness, cost, latency, and risk profile. From production experience.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/research/rag-vs-fine-tuning" },
};

export default function RagVsFineTuningArticle() {
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
              <span className="text-xs text-[#7D8FA3]">February 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              RAG vs fine-tuning: a pragmatic guide for enterprise AI teams
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              A decision framework for choosing between retrieval-augmented generation and
              fine-tuning, based on data freshness, inference cost, latency requirements,
              and the risk profile of your use case.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The wrong question</h2>
              <p>
                Most enterprise AI teams frame this as &quot;RAG or fine-tuning?&quot; — as if it
                were a binary choice. In practice, the answer depends on four variables that are
                specific to your use case, and the right architecture often combines elements of
                both.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">When RAG wins</h2>
              <p>
                RAG is the right default when your knowledge base changes frequently — weekly,
                daily, or in real-time. Document corpora, product catalogues, regulatory texts,
                clinical guidelines: these evolve constantly. Fine-tuning a model every time the
                source material changes is operationally unsustainable.
              </p>
              <p className="mt-4">
                RAG also wins on traceability. Every generated response can cite its source
                documents. In regulated industries — healthcare, pharma, finance — this is not
                a nice-to-have. It is a compliance requirement. If an auditor asks &quot;why did
                the system say this?&quot;, you need to point to a specific document, paragraph,
                and version.
              </p>
              <p className="mt-4">
                Finally, RAG requires no GPU-intensive training cycles. You update the vector
                store; the model stays the same. This makes it operationally simpler and
                significantly cheaper to maintain.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">When fine-tuning wins</h2>
              <p>
                Fine-tuning is appropriate when you need the model to learn a specific behaviour,
                tone, or reasoning pattern that cannot be reliably induced through prompting and
                retrieval alone. Domain-specific language patterns, specialised classification
                tasks, or output formatting requirements that are consistent across all queries
                are good candidates.
              </p>
              <p className="mt-4">
                Fine-tuning also reduces inference latency: the knowledge is embedded in the
                model weights, so there is no retrieval step. For latency-critical applications
                (real-time voice interfaces, high-throughput classification), this matters.
              </p>
              <p className="mt-4">
                The trade-off is rigidity. A fine-tuned model reflects the state of its training
                data at training time. If the underlying knowledge changes, you retrain — and
                retraining is expensive, slow, and requires careful evaluation to avoid regression.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The decision framework</h2>
              <p>
                In our production deployments, we apply four criteria:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Data freshness:</strong> If source material changes more than monthly → RAG.</li>
                <li><strong className="text-[#E6EDF3]">Traceability requirement:</strong> If you must cite sources → RAG.</li>
                <li><strong className="text-[#E6EDF3]">Latency budget:</strong> If sub-200ms is required and retrieval adds unacceptable overhead → fine-tuning (or hybrid).</li>
                <li><strong className="text-[#E6EDF3]">Behavioural consistency:</strong> If the model needs to reliably adopt a specific tone, format, or reasoning chain → fine-tuning for the base behaviour, RAG for the knowledge.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Cost analysis: what each approach actually costs in production</h2>
              <p>
                RAG has a lower upfront cost but ongoing operational costs: vector store hosting,
                embedding compute for document ingestion, and retrieval latency overhead on every
                query. For a mid-market organisation processing 10,000-50,000 queries per day,
                the vector store and embedding pipeline typically costs €500-2,000/month on
                on-premise infrastructure.
              </p>
              <p className="mt-4">
                Fine-tuning has a higher upfront cost — GPU hours for training, dataset curation,
                evaluation cycles — but lower per-query costs once deployed, since there is no
                retrieval step. A single fine-tuning run on a 7B parameter model costs between
                €2,000 and €10,000 depending on dataset size and infrastructure. But this cost
                recurs every time the training data changes significantly.
              </p>
              <p className="mt-4">
                The hidden cost in fine-tuning is evaluation. Every new model version needs
                rigorous testing against regression benchmarks before it replaces the production
                model. In regulated industries, this evaluation is not optional — it is a
                compliance requirement. RAG sidesteps this entirely: updating the knowledge base
                does not change the model, so the evaluation burden is limited to retrieval
                quality, which is cheaper and faster to test.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Evaluation methodology: measuring what matters</h2>
              <p>
                How do you know if your RAG pipeline or fine-tuned model is actually performing
                well? In our production deployments, we measure four dimensions:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Faithfulness:</strong> Does the response accurately reflect the source material? For RAG, this means checking that cited sources support the claims made. For fine-tuned models, this means evaluating against a held-out test set.</li>
                <li><strong className="text-[#E6EDF3]">Relevance:</strong> Does the response address the actual question? Measured by semantic similarity between query intent and response content.</li>
                <li><strong className="text-[#E6EDF3]">Completeness:</strong> Does the response cover all relevant aspects? Evaluated against expert-curated reference answers for critical use cases.</li>
                <li><strong className="text-[#E6EDF3]">Harmlessness:</strong> Does the response avoid producing clinically dangerous, legally problematic, or factually incorrect content? Evaluated through adversarial testing and domain-expert review.</li>
              </ul>
              <p className="mt-4">
                For healthcare and pharmaceutical use cases, faithfulness and harmlessness dominate.
                A response that is relevant and complete but unfaithful to the source material is
                worse than no response at all. This evaluation priority naturally favours RAG
                architectures, where every claim is traceable to a specific document.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The hybrid approach</h2>
              <p>
                For most enterprise use cases we deploy, the answer is a fine-tuned base model
                (for tone, format, and domain reasoning) combined with RAG (for up-to-date,
                traceable knowledge). This is how Nexus MDS Core operates: vLLM serves the
                inference layer, Weaviate provides the vector search, and the RAG pipeline
                ensures every response is grounded in verifiable source material.
              </p>
              <p className="mt-4">
                The fine-tuned layer handles what we call &quot;behaviour&quot;: how the model
                responds, what format it uses, which reasoning chains it follows, and how it
                handles edge cases. The RAG layer handles &quot;knowledge&quot;: what the model
                knows, sourced from documents that are updated without retraining. This
                separation of concerns maps cleanly to the organisational reality: behaviour
                changes infrequently (and should be governed carefully), while knowledge
                changes constantly (and should be updated easily).
              </p>
              <p className="mt-4">
                For a deeper look at how we govern AI outputs in production — including the
                audit logging and validation layers that sit on top of both RAG and fine-tuned
                models — see our article on{" "}
                <Link href="/research/governing-ai-outputs" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  governing AI outputs in regulated industries
                </Link>.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["RAG", "Fine-tuning", "LLM", "Enterprise AI", "Weaviate"].map((tag) => (
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
