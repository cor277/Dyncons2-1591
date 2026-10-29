import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

const LABELS = {
  en: {
    indexHref: "/answers",
    aboutHref: "/about",
    all: "← All answers",
    by: "By",
    updated: "updated",
    sources: "Sources",
    sourcesNote:
      "Primary sources for the regulatory statements above. Where this page describes what an obligation requires, the text of the act is the authority, not this page.",
    related: "Related on this site",
    disclaimer:
      "This page is technical and architectural guidance, written from delivery experience in regulated environments. It is not legal advice, and it does not establish the regulatory classification of any specific system.",
  },
  it: {
    indexHref: "/it/risposte",
    aboutHref: "/it/chi-siamo",
    all: "← Tutte le risposte",
    by: "Di",
    updated: "aggiornato a",
    sources: "Fonti",
    sourcesNote:
      "Fonti primarie per le affermazioni normative qui sopra. Dove questa pagina descrive cosa richiede un obbligo, fa fede il testo dell’atto, non questa pagina.",
    related: "Sullo stesso tema, su questo sito",
    disclaimer:
      "Questa pagina è un orientamento tecnico e architetturale, scritto a partire da incarichi svolti in ambienti regolati. Non è una consulenza legale e non stabilisce la classificazione normativa di alcun sistema specifico.",
  },
};

export interface AnswerSource {
  label: string;
  url: string;
  /** What the reader will find there. Kept short. */
  note?: string;
}

export interface AnswerRelated {
  label: string;
  href: string;
  note?: string;
}

/**
 * Layout for the answer pages: one question, answered in the first block, then
 * the reasoning underneath it.
 *
 * The short answer is deliberately self-contained — it has to make sense
 * quoted on its own, without the rest of the page around it, because that is
 * how it will be read by a search engine, an assistant, and by a person who
 * has thirty seconds.
 */
export function AnswerPageLayout({
  question,
  shortAnswer,
  updated,
  updatedLabel,
  sources,
  related,
  children,
  ctaTitle,
  ctaSubtitle,
  locale = "en",
}: {
  question: string;
  shortAnswer: React.ReactNode;
  /** ISO 8601, month precision is fine. */
  updated: string;
  updatedLabel: string;
  sources?: AnswerSource[];
  related?: AnswerRelated[];
  children: React.ReactNode;
  ctaTitle?: string;
  ctaSubtitle?: string;
  /** Language of the fixed labels and of the index link. */
  locale?: "en" | "it";
}) {
  const L = LABELS[locale];
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <article>
          <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
            <div className="max-w-3xl mx-auto">
              <Link
                href={L.indexHref}
                className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
              >
                {L.all}
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
                {question}
              </h1>
              <div className="border-l-2 border-[#00B4D8] pl-5 text-[#9BA8B9] text-lg leading-relaxed">
                {shortAnswer}
              </div>
              <p className="mt-6 text-sm text-[#7D8FA3]">
                {L.by}{" "}
                <Link href={L.aboutHref} className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Corrado Patierno
                </Link>{" "}
                · {L.updated} <time dateTime={updated}>{updatedLabel}</time>
              </p>
            </div>
          </section>

          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto space-y-12 text-[#7D8FA3] text-lg leading-relaxed">
              {children}

              {sources && sources.length > 0 && (
                <div>
                  <h2 className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4" id="sources">
                    {L.sources}
                  </h2>
                  <p className="mb-4 text-base">{L.sourcesNote}</p>
                  <ul className="space-y-3 text-base">
                    {sources.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-[#00B4D8] hover:text-[#E6EDF3]"
                        >
                          {s.label}
                        </a>
                        {s.note ? <span className="text-[#7D8FA3]"> — {s.note}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {related && related.length > 0 && (
                <div>
                  <h2 className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4" id="related">
                    {L.related}
                  </h2>
                  <ul className="space-y-3 text-base">
                    {related.map((r) => (
                      <li key={r.href}>
                        <Link href={r.href} className="text-[#00B4D8] hover:text-[#E6EDF3]">
                          {r.label}
                        </Link>
                        {r.note ? <span className="text-[#7D8FA3]"> — {r.note}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-sm text-[#7D8FA3] border-t border-[#30363D] pt-6">
                {L.disclaimer}
              </p>
            </div>
          </section>
        </article>

        <CTASection title={ctaTitle} subtitle={ctaSubtitle} />
      </main>
      <Footer />
    </>
  );
}

/** Section with a stable anchor, so a single answer can be linked and quoted. */
export function AnswerSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 id={id} className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
