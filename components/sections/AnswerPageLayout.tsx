import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

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
}) {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <article>
          <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/answers"
                className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
              >
                ← All answers
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
                {question}
              </h1>
              <div className="border-l-2 border-[#00B4D8] pl-5 text-[#9BA8B9] text-lg leading-relaxed">
                {shortAnswer}
              </div>
              <p className="mt-6 text-sm text-[#7D8FA3]">
                By{" "}
                <Link href="/about" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Corrado Patierno
                </Link>{" "}
                · updated <time dateTime={updated}>{updatedLabel}</time>
              </p>
            </div>
          </section>

          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto space-y-12 text-[#7D8FA3] text-lg leading-relaxed">
              {children}

              {sources && sources.length > 0 && (
                <div>
                  <h2 className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4" id="sources">
                    Sources
                  </h2>
                  <p className="mb-4 text-base">
                    Primary sources for the regulatory statements above. Where this page describes
                    what an obligation requires, the text of the act is the authority, not this
                    page.
                  </p>
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
                    Related on this site
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
                This page is technical and architectural guidance, written from delivery
                experience in regulated environments. It is not legal advice, and it does not
                establish the regulatory classification of any specific system.
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
