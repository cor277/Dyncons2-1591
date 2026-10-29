import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { BASE_URL } from "@/app/schema-org";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { alternatesFor } from "@/lib/i18n-routes";
import {
  formatDate,
  getImportedArticles,
  isoDay,
  readingMinutes,
  type Block,
} from "@/lib/imported-articles";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

/* The PLD 2024 series as written, in Italian. Only articles with lang "it"
   resolve here; anything else is a 404 rather than a page rendered on demand. */
export const dynamicParams = false;

function italianArticles() {
  return getImportedArticles().filter((a) => a.lang === "it");
}

function italianArticle(slug: string) {
  return italianArticles().find((a) => a.slug === slug) ?? null;
}

export function generateStaticParams() {
  return italianArticles().map((a) => ({ slug: a.slug }));
}

/* Next 16 hands `params` to a page as a promise; awaiting it is not optional. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = italianArticle(slug);
  if (!article) return {};
  const path = `/it/ricerca/${article.slug}`;
  const url = `${BASE_URL}${path}`;
  const description = article.standfirst.slice(0, 300);
  return {
    title: article.title,
    description,
    alternates: alternatesFor(path),
    openGraph: {
      images: OG_IMAGE,
      title: article.title,
      description,
      url,
      type: "article",
      locale: "it_IT",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified ?? article.datePublished,
      authors: [`${BASE_URL}/it/chi-siamo`],
    },
    twitter: {
      images: TWITTER_IMAGE,
      card: "summary_large_image",
      title: article.title,
      description,
    },
  };
}

/** Inline links come out of the importer as markdown; nothing else is parsed. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (!m) return <span key={i}>{part}</span>;
        const [, label, href] = m;
        const external = href.startsWith("http") && !href.includes("dynamicsconsulting.it");
        return (
          <a
            key={i}
            href={href}
            className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
            {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
          >
            {label}
          </a>
        );
      })}
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "h") {
    const Tag = block.level === 3 ? "h3" : "h2";
    return (
      <Tag
        className={
          block.level === 3
            ? "text-xl font-semibold text-[#E6EDF3] mt-10 mb-3"
            : "text-2xl font-bold text-[#E6EDF3] mt-12 mb-4"
        }
      >
        <Inline text={block.text} />
      </Tag>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="border-l-2 border-[#00B4D8] pl-5 my-6 text-[#9BA8B9]">
        <Inline text={block.text} />
      </blockquote>
    );
  }
  if (block.type === "list") {
    const Tag = block.ordered ? "ol" : "ul";
    return (
      <Tag
        className={`my-5 space-y-2 ${
          block.ordered ? "list-decimal" : "list-disc"
        } list-outside pl-6 marker:text-[#7D8FA3]`}
      >
        {block.items.map((item, i) => (
          <li key={i}>
            <Inline text={item} />
          </li>
        ))}
      </Tag>
    );
  }
  return (
    <p className="my-5">
      <Inline text={block.text} />
    </p>
  );
}

export default async function ArticoloImportatoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = italianArticle(slug);
  if (!article) notFound();

  const all = italianArticles();
  const index = all.findIndex((a) => a.slug === article.slug);
  const previous = index > 0 ? all[index - 1] : null;
  const next = index >= 0 && index < all.length - 1 ? all[index + 1] : null;
  const url = `${BASE_URL}/it/ricerca/${article.slug}`;

  const schema = [
    articleSchema({
      url,
      type: "Article",
      headline: article.title,
      description: article.standfirst.slice(0, 300),
      datePublished: isoDay(article.datePublished),
      dateModified: isoDay(article.dateModified ?? article.datePublished),
      inLanguage: "it",
      articleSection: "PLD 2024 e governance dell'AI",
      keywords: ["PLD 2024", "responsabilità da prodotto", "responsabilità del software", "governance dell'AI"],
    }),
    breadcrumbSchema(url, [
      { name: "Risorse in italiano", path: "/it" },
      { name: "Ricerca", path: "/it/ricerca" },
      { name: "Serie editoriale", path: "/it/ricerca/serie-editoriale" },
      { name: article.title },
    ]),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <article lang="it">
          <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/it/ricerca/serie-editoriale"
                className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
              >
                ← Serie editoriale
              </Link>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <TechBadge label="PLD 2024" variant="cyan" />
                <time dateTime={isoDay(article.datePublished)} className="text-xs text-[#7D8FA3]">
                  {formatDate(article.datePublished, "it")}
                </time>
                <span className="text-xs text-[#7D8FA3]">
                  {readingMinutes(article.words)} min di lettura
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
                {article.title}
              </h1>
              <p className="text-sm text-[#7D8FA3]">
                Di{" "}
                <Link href="/it/chi-siamo" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  {article.author}
                </Link>
              </p>
              <p className="mt-6 text-sm text-[#7D8FA3] border border-[#30363D] rounded-lg px-4 py-3 bg-[#161B22]">
                Pubblicato originariamente su LinkedIn. Questa è la versione integrale, ospitata qui
                perché resti raggiungibile e citabile:{" "}
                <a
                  href={article.source.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  l’originale su LinkedIn
                </a>
                .
              </p>
            </div>
          </section>

          <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto text-[#7D8FA3] text-lg leading-relaxed">
              {article.blocks.map((block, i) => {
                /* A leading heading is a deck line LinkedIn marked up as a
                   heading; under the H1 it is presented as a standfirst. */
                if (i === 0 && block.type === "h") {
                  return (
                    <p key={i} className="text-xl text-[#9BA8B9] leading-relaxed mb-8">
                      <Inline text={block.text} />
                    </p>
                  );
                }
                return <BlockView key={i} block={block} />;
              })}
            </div>
          </section>
        </article>

        {/* Author box */}
        <section className="px-6 pb-12">
          <div className="max-w-3xl mx-auto border-t border-[#30363D] pt-8">
            <h2 className="text-lg font-semibold text-[#E6EDF3] mb-3">L’autore</h2>
            <p className="text-[#7D8FA3] text-base leading-relaxed">
              Corrado Patierno è il fondatore di Dynamics Consulting, studio italiano indipendente di
              consulenza e ingegneria AI che lavora su governance e compliance dell’AI, architettura
              AI enterprise e infrastruttura sovrana per i settori regolamentati.{" "}
              <Link href="/it/chi-siamo" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                Percorso e tappe
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Continue in the series, and where the argument is applied */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto border-t border-[#30363D] pt-8">
            <h2 className="text-lg font-semibold text-[#E6EDF3] mb-4">Continua</h2>
            <ul className="space-y-3 text-base">
              {previous && (
                <li>
                  <span className="text-[#7D8FA3]">Precedente · </span>
                  <Link
                    href={`/it/ricerca/${previous.slug}`}
                    className="text-[#00B4D8] hover:text-[#E6EDF3]"
                  >
                    {previous.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <span className="text-[#7D8FA3]">Successivo · </span>
                  <Link
                    href={`/it/ricerca/${next.slug}`}
                    className="text-[#00B4D8] hover:text-[#E6EDF3]"
                  >
                    {next.title}
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/it/ricerca/serie-editoriale"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  L’intera serie
                </Link>
                <span className="text-[#7D8FA3]"> — sei articoli sulla PLD 2024, in ordine.</span>
              </li>
              <li>
                <Link href="/it/assessment" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Assessment di esposizione
                </Link>
                <span className="text-[#7D8FA3]">
                  {" "}
                  — l’incarico che applica tutto questo a una singola organizzazione: dove si ferma la
                  responsabilità del fornitore e dove comincia la tua.
                </span>
              </li>
              <li>
                <Link
                  href="/it/risposte/valutare-fornitore-ai-settori-regolati"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  Come si valuta un fornitore AI in un settore regolato?
                </Link>
              </li>
              <li>
                <Link href="/it/cepf" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  La metodologia Compliance-Epistemic Project Framework (CEPF)
                </Link>
                <span className="text-[#7D8FA3]">
                  {" "}
                  — dove la PLD 2024 condivide un controllo con CRA, NIS2 e AI Act.
                </span>
              </li>
              <li>
                <Link
                  href="/it/consulenza-ai-governance-compliance"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  Consulenza AI Governance &amp; Compliance
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <CTASection
        title="Parliamo del tuo progetto"
        subtitle="Infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Scrivici."
        ctaLabel="Inizia la conversazione →"
        ctaHref="/it/contatti"
      />
      <Footer />
    </>
  );
}
