import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { TechBadge } from "@/components/ui/TechBadge";
import { BASE_URL, ORG_ID, PERSON_ID, WEBSITE_ID } from "@/app/schema-org";
import { breadcrumbSchema, faqSchema } from "@/app/seo";
import {
  NORMATIVA_PATH,
  type AttoCollegato,
  type Norma,
  type StatoNorma,
  dateOrdinate,
  formatDataIt,
  getNorma,
  giurisdizioneOf,
  legalForceOf,
  normaPath,
  normaUrl,
  statoData,
} from "@/app/normativa";

export interface NormaFonte {
  label: string;
  url: string;
  note?: string;
}

export interface NormaApprofondimento {
  label: string;
  /** Internal path ("/it/...") or absolute URL (LinkedIn). */
  href: string;
  note?: string;
  /** Marks an article or post on the author's LinkedIn profile. */
  linkedin?: boolean;
}

export interface NormaFaq {
  q: string;
  /** Plain text: it goes into the FAQPage JSON-LD as is. */
  a: string;
}

const LINK = "text-[#00B4D8] hover:text-[#E6EDF3]";

export function statoVariant(stato: StatoNorma): "green" | "cyan" | "amber" | "default" {
  if (stato === "In vigore") return "green";
  if (stato === "In applicazione progressiva") return "cyan";
  if (stato === "Approvata, in attesa di Gazzetta") return "amber";
  return "default";
}

const SCHEMA_RELATION: Record<AttoCollegato["relazione"], string> = {
  recepisce: "legislationTransposes",
  modifica: "legislationChanges",
  "proposta di modifica": "isBasedOn",
  attua: "legislationApplies",
  integra: "isBasedOn",
  modificato: "",
  delega: "",
};

function legislationNode(n: Norma) {
  const url = normaUrl(n.slug);
  const id = `${url}#legislation`;
  const linked = (n.attiCollegati ?? []).map((a, i) => {
    const rel = SCHEMA_RELATION[a.relazione];
    return {
      "@type": "Legislation",
      "@id": `${url}#atto-collegato-${i + 1}`,
      name: a.nome,
      legislationIdentifier: a.riferimento,
      legislationType: a.tipo,
      legislationJurisdiction: giurisdizioneOf(a.tipo),
      legislationLegalForce: `https://schema.org/${legalForceOf({ stato: a.stato })}`,
      ...(a.data ? { legislationDate: a.data } : {}),
      sameAs: a.url,
      ...(rel ? { [rel]: { "@id": id } } : {}),
    };
  });
  const changes = (n.attiCollegati ?? [])
    .map((a, i) => ({ a, i }))
    .filter(({ a }) => a.relazione === "modificato");
  const basedOn = (n.attiCollegati ?? [])
    .map((a, i) => ({ a, i }))
    .filter(({ a }) => a.relazione === "delega");
  const main = {
    "@type": "Legislation",
    "@id": id,
    name: n.nomeUfficiale,
    alternateName: [n.titoloBreve, n.riferimento],
    legislationIdentifier: n.riferimento,
    legislationType: n.tipo,
    legislationDate: n.dataAtto,
    legislationJurisdiction: giurisdizioneOf(n.tipo),
    legislationLegalForce: `https://schema.org/${legalForceOf(n)}`,
    sameAs: n.urlUfficiale,
    description: n.sintesi,
    ...(changes.length
      ? { legislationChanges: changes.map(({ i }) => ({ "@id": `${url}#atto-collegato-${i + 1}` })) }
      : {}),
    ...(basedOn.length
      ? { isBasedOn: basedOn.map(({ i }) => ({ "@id": `${url}#atto-collegato-${i + 1}` })) }
      : {}),
  };
  return { main, linked };
}

/** JSON-LD of a regulation page: WebPage, Legislation (+ linked acts), BreadcrumbList, FAQPage. */
export function normaSchema(n: Norma, faq?: NormaFaq[]) {
  const url = normaUrl(n.slug);
  const { main, linked } = legislationNode(n);
  const title = `${n.titoloBreve} — ${n.riferimento}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description: n.sintesi,
      inLanguage: "it",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": main["@id"] },
      mainEntity: { "@id": main["@id"] },
      author: { "@id": PERSON_ID },
      publisher: { "@id": ORG_ID },
      dateModified: n.aggiornato,
      breadcrumb: { "@id": `${url}#breadcrumb` },
      image: `${BASE_URL}/og-image.png`,
      ...(faq?.length ? { hasPart: { "@id": `${url}#faq` } } : {}),
    },
    { "@context": "https://schema.org", ...main },
    ...linked.map((l) => ({ "@context": "https://schema.org", ...l })),
    breadcrumbSchema(url, [
      { name: "Risorse in italiano", path: "/it" },
      { name: "Normativa", path: NORMATIVA_PATH },
      { name: n.titoloBreve },
    ]),
    ...(faq?.length ? [faqSchema(url, faq)] : []),
  ];
}

/**
 * Layout of a regulation page in the Italian "Normativa" section.
 *
 * Everything that is data — title, status, dates, official link, related
 * regulations, JSON-LD — comes from the registry entry in app/normativa.ts.
 * The page supplies only the prose (`children`, as NormaSection blocks), the
 * official sources, the author's further reading and, optionally, the FAQ.
 *
 * Order on the page: breadcrumb, h1, "In breve", data sheet, key dates, body,
 * FAQ, official sources, related regulations, further reading, disclaimer, CTA.
 */
export function NormaPageLayout({
  slug,
  children,
  fonti,
  approfondimenti,
  faq,
  ctaTitle = "Quali di queste norme si applicano al tuo sistema, e da quando?",
  ctaSubtitle = "L’assessment di esposizione mette per iscritto quali regimi si sommano sul tuo caso, che ruolo hai in ciascuno e cosa l’architettura deve essere in grado di dimostrare.",
}: {
  slug: string;
  /** The body: NormaSection blocks, each with its own h2. */
  children: React.ReactNode;
  /** Official sources (EUR-Lex, Normattiva, Gazzetta, authorities). The registry's
   *  official URL is always listed first; do not repeat it here. */
  fonti: NormaFonte[];
  approfondimenti?: NormaApprofondimento[];
  /** Rendered visibly and emitted as FAQPage JSON-LD. */
  faq?: NormaFaq[];
  ctaTitle?: string;
  ctaSubtitle?: string;
}) {
  const n = getNorma(slug);
  const date = dateOrdinate(n);
  const correlate = n.correlate.map(getNorma);
  const fontiTutte: NormaFonte[] = [
    { label: `${n.riferimento} — testo ufficiale`, url: n.urlUfficiale, note: n.titoloBreve },
    ...(n.attiCollegati ?? []).map((a) => ({ label: a.riferimento, url: a.url, note: a.nome })),
    ...fonti.filter(
      (f) => f.url !== n.urlUfficiale && !(n.attiCollegati ?? []).some((a) => a.url === f.url)
    ),
  ];

  return (
    <>
      <JsonLd data={normaSchema(n, faq)} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <article>
          <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
            <div className="max-w-3xl mx-auto">
              <nav aria-label="Percorso" className="mb-6 text-sm text-[#7D8FA3]">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <li>
                    <Link href="/it" className={LINK}>
                      Risorse in italiano
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li>
                    <Link href={NORMATIVA_PATH} className={LINK}>
                      Normativa
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li aria-current="page" className="text-[#9BA8B9]">
                    {n.titoloBreve}
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
                {n.titoloBreve}{" "}
                <span className="block text-xl md:text-2xl font-semibold text-[#9BA8B9] mt-2">
                  {n.riferimento}
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <TechBadge label={n.stato} variant={statoVariant(n.stato)} />
                <TechBadge label={n.ambito} />
              </div>

              <section aria-labelledby="in-breve" className="border-l-2 border-[#00B4D8] pl-5">
                <h2 id="in-breve" className="text-sm font-semibold uppercase tracking-widest text-[#00B4D8] mb-2">
                  In breve
                </h2>
                <p className="text-[#9BA8B9] text-lg leading-relaxed">{n.sintesi}</p>
              </section>

              <p className="mt-6 text-sm text-[#7D8FA3]">
                Di{" "}
                <Link href="/it/chi-siamo" className={LINK}>
                  Corrado Patierno
                </Link>{" "}
                · aggiornato al <time dateTime={n.aggiornato}>{formatDataIt(n.aggiornato)}</time>
              </p>
            </div>
          </section>

          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto space-y-12 text-[#7D8FA3] text-lg leading-relaxed">
              <div>
                <h2 id="scheda" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Scheda
                </h2>
                <dl className="bg-[#161B22] border border-[#30363D] rounded-xl p-6 grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-x-6 gap-y-3 text-base">
                  <dt className="text-[#E6EDF3] font-semibold">Riferimento</dt>
                  <dd>{n.riferimento}</dd>
                  <dt className="text-[#E6EDF3] font-semibold">Nome ufficiale</dt>
                  <dd>{n.nomeUfficiale}</dd>
                  <dt className="text-[#E6EDF3] font-semibold">Tipo</dt>
                  <dd>{n.tipo}</dd>
                  <dt className="text-[#E6EDF3] font-semibold">Ambito</dt>
                  <dd>{n.ambito}</dd>
                  <dt className="text-[#E6EDF3] font-semibold">Stato</dt>
                  <dd>
                    {n.stato}
                    {n.notaStato ? <span className="block mt-1 text-[#9BA8B9]">{n.notaStato}</span> : null}
                  </dd>
                  <dt className="text-[#E6EDF3] font-semibold">
                    {n.tipo === "Proposta UE" ? "Data della proposta" : "Data dell’atto"}
                  </dt>
                  <dd>
                    <time dateTime={n.dataAtto}>{formatDataIt(n.dataAtto)}</time>
                  </dd>
                  <dt className="text-[#E6EDF3] font-semibold">A chi si applica</dt>
                  <dd>{n.aChiSiApplica}</dd>
                  {n.attiCollegati?.length ? (
                    <>
                      <dt className="text-[#E6EDF3] font-semibold">Atti collegati</dt>
                      <dd>
                        <ul className="space-y-1">
                          {n.attiCollegati.map((a) => (
                            <li key={a.riferimento}>
                              <a href={a.url} rel="noopener noreferrer" target="_blank" className={LINK}>
                                {a.riferimento}
                              </a>{" "}
                              — {a.nome} <span className="text-[#9BA8B9]">({a.stato.toLowerCase()})</span>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </>
                  ) : null}
                  <dt className="text-[#E6EDF3] font-semibold">Fonte ufficiale</dt>
                  <dd>
                    <a href={n.urlUfficiale} rel="noopener noreferrer" target="_blank" className={`${LINK} break-all`}>
                      {n.urlUfficiale}
                    </a>
                  </dd>
                  <dt className="text-[#E6EDF3] font-semibold">Aggiornato al</dt>
                  <dd>
                    <time dateTime={n.aggiornato}>{formatDataIt(n.aggiornato)}</time>
                  </dd>
                </dl>
              </div>

              <div>
                <h2 id="date" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Date che contano
                </h2>
                <ol className="border-l border-[#30363D] space-y-5 text-base">
                  {date.map((d) => {
                    const s = statoData(d);
                    return (
                      <li key={`${d.data}-${d.etichetta}`} className="pl-5 relative">
                        <span
                          aria-hidden="true"
                          className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${
                            s === "prossima" ? "bg-[#00B4D8]" : "bg-[#30363D]"
                          }`}
                        />
                        <time dateTime={d.data} className="font-semibold text-[#E6EDF3]">
                          {formatDataIt(d.data)}
                        </time>{" "}
                        <span className={s === "prossima" ? "text-[#00B4D8]" : "text-[#9BA8B9]"}>({s})</span>
                        <p className="mt-1">{d.etichetta}</p>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {children}

              {faq?.length ? (
                <div>
                  <h2 id="domande-frequenti" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                    Domande frequenti
                  </h2>
                  <div className="space-y-6">
                    {faq.map((f) => (
                      <div key={f.q}>
                        <h3 className="text-lg font-semibold text-[#E6EDF3] mb-2">{f.q}</h3>
                        <p className="text-base">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div>
                <h2 id="fonti" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                  Fonti ufficiali
                </h2>
                <p className="mb-4 text-base">
                  Dove questa pagina descrive cosa richiede un obbligo, fa fede il testo dell’atto,
                  non questa pagina.
                </p>
                <ul className="space-y-3 text-base">
                  {fontiTutte.map((f) => (
                    <li key={f.url}>
                      <a href={f.url} rel="noopener noreferrer" target="_blank" className={LINK}>
                        {f.label}
                      </a>
                      {f.note ? <span> — {f.note}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>

              {correlate.length > 0 && (
                <div>
                  <h2 id="norme-correlate" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                    Norme correlate
                  </h2>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {correlate.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={normaPath(c.slug)}
                          className="block h-full bg-[#161B22] border border-[#30363D] rounded-xl p-5 hover:border-[#00B4D8] transition-colors duration-200"
                        >
                          <span className="flex flex-wrap items-center gap-2 mb-2">
                            <TechBadge label={c.stato} variant={statoVariant(c.stato)} />
                          </span>
                          <span className="block text-lg font-bold text-[#E6EDF3]">{c.titoloBreve}</span>
                          <span className="block text-sm text-[#9BA8B9] mb-2">{c.riferimento}</span>
                          <span className="block text-sm leading-relaxed">{c.aChiSiApplica}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {approfondimenti && approfondimenti.length > 0 && (
                <div>
                  <h2 id="approfondimenti" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                    Approfondimenti dell’autore
                  </h2>
                  <ul className="space-y-3 text-base">
                    {approfondimenti.map((r) => (
                      <li key={r.href}>
                        {r.href.startsWith("/") ? (
                          <Link href={r.href} className={LINK}>
                            {r.label}
                          </Link>
                        ) : (
                          <a href={r.href} rel="noopener noreferrer" target="_blank" className={LINK}>
                            {r.label}
                          </a>
                        )}
                        {r.linkedin ? (
                          <span className="ml-2 align-middle">
                            <TechBadge label="LinkedIn" />
                          </span>
                        ) : null}
                        {r.note ? <span> — {r.note}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-sm text-[#7D8FA3] border-t border-[#30363D] pt-6">
                Questa pagina è un orientamento tecnico e architetturale, scritto a partire da
                incarichi svolti in ambienti regolati e aggiornato alla data indicata. Non è una
                consulenza legale e non stabilisce se e come una norma si applichi a un sistema o a
                un’organizzazione specifici.
              </p>
            </div>
          </section>
        </article>

        <CTASection
          title={ctaTitle}
          subtitle={ctaSubtitle}
          ctaLabel="Scopri l’assessment →"
          ctaHref="/it/assessment"
          secondary={{ label: "Tutte le norme", href: NORMATIVA_PATH }}
        />
      </main>
      <Footer />
    </>
  );
}

/** Body section with a stable anchor, so one part of a page can be linked and quoted. */
export function NormaSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

/** Styling for a real <table> in a page body. Wrap the table in it: <NormaTable>…</NormaTable>. */
export function NormaTable({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-base border-collapse [&_th]:border-b [&_th]:border-[#30363D] [&_th]:py-2 [&_th]:pr-4 [&_th]:align-top [&_th]:text-[#E6EDF3] [&_td]:border-b [&_td]:border-[#30363D] [&_td]:py-2 [&_td]:pr-4 [&_td]:align-top">
        <caption className="text-left text-sm text-[#9BA8B9] mb-3">{caption}</caption>
        {children}
      </table>
    </div>
  );
}
