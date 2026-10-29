import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { BASE_URL } from "@/app/schema-org";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  formatDate,
  getImportedArticle,
  getImportedArticles,
  isoDay,
  readingMinutes,
  type Block,
  type ImportedArticle,
} from "@/lib/imported-articles";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

/* The series was written in Italian; the originals are served at
   /it/ricerca/<slug>. This route serves only the English translations, so an
   Italian slug here is a 404 rather than a page rendered on demand. */
export const dynamicParams = false;

const englishArticles = () => getImportedArticles().filter((a) => a.lang === "en");

function englishArticle(slug: string): ImportedArticle | null {
  const article = getImportedArticle(slug);
  return article && article.lang === "en" ? article : null;
}

export function generateStaticParams() {
  return englishArticles().map((a) => ({ slug: a.slug }));
}

/* Next 16 hands `params` to a page as a promise; awaiting it is not optional —
   reading `.slug` off the promise yields undefined and the page 404s. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = englishArticle(slug);
  if (!article) return {};
  const url = `${BASE_URL}/research/${article.slug}`;
  const description = article.standfirst.slice(0, 300);
  return {
    title: article.title,
    description,
    alternates: alternatesFor(`/research/${article.slug}`),
    openGraph: {
      images: OG_IMAGE,
      title: article.title,
      description,
      url,
      type: "article",
      locale: "en_US",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified ?? article.datePublished,
      authors: [`${BASE_URL}/about`],
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

export default async function ImportedArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = englishArticle(slug);
  if (!article) notFound();

  const all = englishArticles();
  const index = all.findIndex((a) => a.slug === article.slug);
  const previous = index > 0 ? all[index - 1] : null;
  const next = index >= 0 && index < all.length - 1 ? all[index + 1] : null;
  const url = `${BASE_URL}/research/${article.slug}`;
  const originalPath = article.translationOf ? `/it/ricerca/${article.translationOf}` : null;

  const schema = [
    {
      ...articleSchema({
        url,
        type: "Article",
        headline: article.title,
        description: article.standfirst.slice(0, 300),
        datePublished: isoDay(article.datePublished),
        dateModified: isoDay(article.dateModified ?? article.datePublished),
        inLanguage: "en",
        articleSection: "PLD 2024 & AI governance",
        keywords: ["PLD 2024", "product liability", "software liability", "AI governance"],
      }),
      ...(originalPath
        ? {
            translationOfWork: {
              "@type": "Article",
              "@id": `${BASE_URL}${originalPath}#article`,
              url: `${BASE_URL}${originalPath}`,
              inLanguage: "it",
            },
          }
        : {}),
    },
    breadcrumbSchema(url, [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
      { name: "Editorial series", path: "/research/editorial-series" },
      { name: article.title },
    ]),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <article lang="en">
          <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/research/editorial-series"
                className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
              >
                ← Editorial series
              </Link>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <TechBadge label="PLD 2024" variant="cyan" />
                <time dateTime={isoDay(article.datePublished)} className="text-xs text-[#7D8FA3]">
                  {formatDate(article.datePublished, article.lang)}
                </time>
                <span className="text-xs text-[#7D8FA3]">
                  {readingMinutes(article.words)} min
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
                {article.title}
              </h1>
              <p className="text-sm text-[#7D8FA3]">
                By{" "}
                <Link href="/about" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  {article.author}
                </Link>
              </p>
              {originalPath && (
                <p className="mt-2 text-sm text-[#7D8FA3]">
                  <Link href={originalPath} className="text-[#00B4D8] hover:text-[#E6EDF3]">
                    Translated from the Italian original
                  </Link>
                </p>
              )}
              <p className="mt-6 text-sm text-[#7D8FA3] border border-[#30363D] rounded-lg px-4 py-3 bg-[#161B22]">
                Written in Italian and first published on LinkedIn. This is the full English
                translation, hosted here so that it stays reachable and citable; the source is{" "}
                <a
                  href={article.source.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  the Italian original on LinkedIn
                </a>
                .
              </p>
            </div>
          </section>

          <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto text-[#7D8FA3] text-lg leading-relaxed">
              {article.blocks.map((block, i) => {
                /* Three of the pieces open on a deck line that LinkedIn marked
                   up as a heading. Under the H1 it reads as a duplicated title,
                   so the leading heading is presented as a standfirst. The text
                   is untouched — only its styling differs. */
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
            <h2 className="text-lg font-semibold text-[#E6EDF3] mb-3">About the author</h2>
            <p className="text-[#7D8FA3] text-base leading-relaxed">
              Corrado Patierno is the founder of Dynamics Consulting, an independent Italian AI
              consulting and engineering practice working on AI governance and compliance,
              enterprise AI architecture and sovereign infrastructure for regulated industries.{" "}
              <Link href="/about" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                Background and timeline
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Continue in the series, and where the argument is applied */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto border-t border-[#30363D] pt-8">
            <h2 className="text-lg font-semibold text-[#E6EDF3] mb-4">Continue</h2>
            <ul className="space-y-3 text-base">
              {previous && (
                <li>
                  <span className="text-[#7D8FA3]">Previous · </span>
                  <Link
                    href={`/research/${previous.slug}`}
                    className="text-[#00B4D8] hover:text-[#E6EDF3]"
                  >
                    {previous.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <span className="text-[#7D8FA3]">Next · </span>
                  <Link
                    href={`/research/${next.slug}`}
                    className="text-[#00B4D8] hover:text-[#E6EDF3]"
                  >
                    {next.title}
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/research/editorial-series"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  The whole series
                </Link>
                <span className="text-[#7D8FA3]"> — ten articles on PLD 2024 and AI governance, in order, in English translation.</span>
              </li>
              <li>
                <Link href="/assessment" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Exposure assessment
                </Link>
                <span className="text-[#7D8FA3]">
                  {" "}
                  — the engagement that applies this to one organisation: where the supplier&apos;s
                  liability stops and yours begins.
                </span>
              </li>
              <li>
                <Link
                  href="/answers/evaluate-ai-vendor-regulated"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  How do you evaluate an AI vendor in a regulated sector?
                </Link>
              </li>
              <li>
                <Link href="/cepf" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  CEPF methodology
                </Link>
                <span className="text-[#7D8FA3]">
                  {" "}
                  — where PLD 2024 shares a control with the CRA, NIS2 and the AI Act.
                </span>
              </li>
              <li>
                <Link
                  href="/services/governance-advisory"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  AI Governance &amp; Compliance Advisory
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
