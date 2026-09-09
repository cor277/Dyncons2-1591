"use client";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * The strip under the copy used to read "Hosted on EU infrastructure · No data
 * leaves your session". The second half was never true — the assistant is an
 * iframe onto public.dynamicsconsulting.it, so a visitor's message necessarily
 * leaves the browser — and the first half was asserted rather than established.
 *
 * What it is, confirmed by the owner: the same architecture as the Federfarma
 * deployment, grounded in Corrado's own notes rather than a document corpus.
 * Retrieval, identity and audit run on Nexus; only final answer generation
 * calls an external inference endpoint, in the EU, and that component is
 * replaceable. Section 2.3 and the processor table in the privacy policy were
 * corrected to match on 10 September 2026.
 */

export function DigitalTwinSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#0D1117] via-[#0f1923] to-[#0D1117]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-[#00B4D8]/30 bg-[#161B22] p-8 md:p-12 overflow-hidden"
        >
          {/* Subtle glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/5 via-transparent to-[#0D47A1]/5 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              LIVE DEMO · DIGITAL TWIN
            </p>
            <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-[#E6EDF3] leading-tight mb-6">
              This is not a chatbot.<br />
              This is Nexus running.
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              The assistant below is a digital twin of Corrado Patierno — architect and founder of
              Dynamics Consulting. It runs on Nexus MDS Core, on the same architecture as the
              Federfarma deployment: retrieval, identity and audit stay inside the perimeter, and
              only the final generation step calls an outside endpoint, in the EU. What it retrieves is his
              own notes rather than a client corpus. Ask it about the platform, the methodology, or
              your use case.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
              className="inline-flex items-center gap-1 text-[#00B4D8] hover:text-[#E6EDF3] text-sm font-medium underline underline-offset-4 decoration-[#00B4D8]/40 hover:decoration-[#E6EDF3] transition-colors duration-200 cursor-pointer"
            >
              Open the Digital Twin →
            </button>
            <p className="mt-6 text-[#7D8FA3] text-xs font-mono">
              Powered by Nexus MDS Core · Retrieval and audit run locally; final answer generation
              calls a replaceable endpoint in the EU ·{" "}
              <Link href="/privacy" className="underline hover:text-[#E6EDF3]">
                what happens to your messages
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
