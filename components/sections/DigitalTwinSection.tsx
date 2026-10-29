"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { itHref } from "@/lib/i18n-routes";

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

const COPY = {
  en: {
    eyebrow: "LIVE DEMO · DIGITAL TWIN",
    h2a: "This is not a chatbot.",
    h2b: "This is Nexus running.",
    body: "The assistant below is a digital twin of Corrado Patierno — architect and founder of Dynamics Consulting. It runs on Nexus MDS Core, on the same architecture as the Federfarma deployment: retrieval, identity and audit stay inside the perimeter, and only the final generation step calls an outside endpoint, in the EU. What it retrieves is his own notes rather than a client corpus. Ask it about the platform, the methodology, or your use case.",
    open: "Open the Digital Twin →",
    footnote:
      "Powered by Nexus MDS Core · Retrieval and audit run locally; final answer generation calls a replaceable endpoint in the EU ·",
    privacy: "what happens to your messages",
  },
  it: {
    eyebrow: "DEMO LIVE · DIGITAL TWIN",
    h2a: "Questo non è un chatbot.",
    h2b: "È Nexus in funzione.",
    body: "L’assistente qui sotto è un digital twin di Corrado Patierno, architetto e fondatore di Dynamics Consulting. Gira su Nexus MDS Core, con la stessa architettura del deployment Federfarma: retrieval, identità e audit restano dentro il perimetro, e solo il passaggio finale di generazione chiama un endpoint esterno, in UE. Quello che recupera sono i suoi appunti, non il corpus di un cliente. Chiedigli della piattaforma, della metodologia o del tuo caso d’uso.",
    open: "Apri il Digital Twin →",
    footnote:
      "Basato su Nexus MDS Core · Retrieval e audit girano in locale; la generazione della risposta finale chiama un endpoint sostituibile in UE ·",
    privacy: "cosa succede ai tuoi messaggi",
  },
};

export function DigitalTwinSection({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
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
              {t.eyebrow}
            </p>
            <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-[#E6EDF3] leading-tight mb-6">
              {t.h2a}<br />
              {t.h2b}
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              {t.body}
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
              className="inline-flex items-center gap-1 text-[#00B4D8] hover:text-[#E6EDF3] text-sm font-medium underline underline-offset-4 decoration-[#00B4D8]/40 hover:decoration-[#E6EDF3] transition-colors duration-200 cursor-pointer"
            >
              {t.open}
            </button>
            <p className="mt-6 text-[#7D8FA3] text-xs font-mono">
              {t.footnote}{" "}
              <Link href={locale === "it" ? itHref("/privacy") : "/privacy"} className="underline hover:text-[#E6EDF3]">
                {t.privacy}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
