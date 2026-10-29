import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { BASE_URL, ORG_ID, PERSON_ID, WEBSITE_ID } from "@/app/schema-org";
import { breadcrumbSchema } from "@/app/seo";
import {
  NORME,
  NORMATIVA_PATH,
  REGISTRO_AGGIORNATO,
  calendario,
  formatDataIt,
  normaPath,
  normaUrl,
  normePerAmbito,
  prossimaData,
  statoData,
} from "@/app/normativa";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { NormaTable, statoVariant } from "@/components/sections/NormaPageLayout";
import { TechBadge } from "@/components/ui/TechBadge";

const URL = `${BASE_URL}${NORMATIVA_PATH}`;

const TITLE = "Normativa su AI, dati e sicurezza per chi opera in Italia";

const DESCRIPTION =
  "Le norme che si sommano su chi progetta, vende o usa AI in Italia — AI Act, Legge 132/2025, D.Lgs. 160 e 179/2026, GDPR, PLD, CRA, NIS2, DORA, Data Act, EHDS, Digital Omnibus, CADA — con stato, date che contano e fonti ufficiali. Aggiornato al 29 ottobre 2026.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor(NORMATIVA_PATH),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "it",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    author: { "@id": PERSON_ID },
    dateModified: REGISTRO_AGGIORNATO,
    breadcrumb: { "@id": `${URL}#breadcrumb` },
    about: NORME.map((n) => ({ "@id": `${normaUrl(n.slug)}#legislation` })),
    mainEntity: { "@id": `${URL}#elenco` },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${URL}#elenco`,
    name: "Norme su AI, dati e sicurezza rilevanti in Italia",
    numberOfItems: NORME.length,
    itemListOrder: "https://schema.org/ItemListUnordered",
    itemListElement: NORME.map((n, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${n.titoloBreve} — ${n.riferimento}`,
      url: normaUrl(n.slug),
    })),
  },
  breadcrumbSchema(URL, [{ name: "Risorse in italiano", path: "/it" }, { name: "Normativa" }]),
];

const LINK = "text-[#00B4D8] hover:text-[#E6EDF3]";

function ambitoId(ambito: string) {
  return `ambito-${ambito
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")}`;
}

function annoDi(iso: string) {
  return iso.slice(0, 4);
}

export default function NormativaIndex() {
  const voci = calendario();
  const anni = [...new Set(voci.map((v) => annoDi(v.data)))];

  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Percorso" className="mb-6 text-sm text-[#7D8FA3]">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/it" className={LINK}>
                    Risorse in italiano
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-[#9BA8B9]">
                  Normativa
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              {TITLE}
            </h1>
            <div className="space-y-4 text-lg text-[#7D8FA3] leading-relaxed">
              <p>
                Chi progetta, vende o usa un sistema di AI in Italia non risponde a una norma sola.
                L’AI Act, la legge italiana sull’intelligenza artificiale e i suoi decreti, il GDPR,
                la nuova responsabilità da prodotto, le regole di cybersicurezza e quelle di settore
                si applicano allo stesso sistema nello stesso momento. Un solo fatto, per esempio un
                output sbagliato che causa un danno, può aprire più fronti insieme: le norme non si
                escludono, entrano in collisione e si sommano.
              </p>
              <p>
                Per questo il primo lavoro non è leggere tutto, ma distinguere: quali regimi si
                applicano davvero al tuo caso, con quale ruolo, da quale data. Questa sezione serve
                a quello. Per ogni norma trovi una pagina con lo stato aggiornato, le date che
                contano, chi è coinvolto, cosa chiede a chi lavora con l’AI e dove si somma alle
                altre; ogni affermazione rimanda alla fonte ufficiale.
              </p>
              <p className="text-base">
                Aggiornato al{" "}
                <time dateTime={REGISTRO_AGGIORNATO}>{formatDataIt(REGISTRO_AGGIORNATO)}</time> ·
                a cura di{" "}
                <Link href="/it/chi-siamo" className={LINK}>
                  Corrado Patierno
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-16 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 id="elenco" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                Le norme, in una tabella
              </h2>
              <NormaTable
                caption={`${NORME.length} norme e proposte, stato al ${formatDataIt(REGISTRO_AGGIORNATO)}`}
              >
                <thead>
                  <tr>
                    <th scope="col">Norma</th>
                    <th scope="col">Riferimento</th>
                    <th scope="col">Ambito</th>
                    <th scope="col">Stato</th>
                    <th scope="col">Prossima data che conta</th>
                  </tr>
                </thead>
                <tbody>
                  {NORME.map((n) => {
                    const p = prossimaData(n);
                    return (
                      <tr key={n.slug}>
                        <th scope="row">
                          <Link href={normaPath(n.slug)} className={LINK}>
                            {n.titoloBreve}
                          </Link>
                        </th>
                        <td>{n.riferimento}</td>
                        <td>{n.ambito}</td>
                        <td>{n.stato}</td>
                        <td>
                          {p ? (
                            <>
                              <time dateTime={p.data} className="text-[#E6EDF3]">
                                {formatDataIt(p.data)}
                              </time>
                              <span className="block text-sm">{p.etichetta}</span>
                            </>
                          ) : (
                            <span className="text-sm">Nessuna scadenza futura fissata</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </NormaTable>
            </div>

            <div>
              <h2 id="calendario" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4">
                Calendario
              </h2>
              <p className="mb-6 text-base">
                Tutte le date delle norme in questa sezione, in ordine cronologico. «Già in vigore»
                indica un obbligo che si applica già, «passata» un evento concluso (una
                pubblicazione, un voto), «prossima» una data futura rispetto al{" "}
                {formatDataIt(REGISTRO_AGGIORNATO)}.
              </p>
              <div className="space-y-10">
                {anni.map((anno) => (
                  <div key={anno}>
                    <h3 className="text-xl font-bold text-[#E6EDF3] mb-4">{anno}</h3>
                    <ol className="border-l border-[#30363D] space-y-5 text-base">
                      {voci
                        .filter((v) => annoDi(v.data) === anno)
                        .map((v) => {
                          const s = statoData(v);
                          return (
                            <li key={`${v.slug}-${v.data}-${v.etichetta}`} className="pl-5 relative">
                              <span
                                aria-hidden="true"
                                className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${
                                  s === "prossima" ? "bg-[#00B4D8]" : "bg-[#30363D]"
                                }`}
                              />
                              <time dateTime={v.data} className="font-semibold text-[#E6EDF3]">
                                {formatDataIt(v.data)}
                              </time>{" "}
                              <span className={s === "prossima" ? "text-[#00B4D8]" : "text-[#9BA8B9]"}>
                                ({s})
                              </span>{" "}
                              ·{" "}
                              <Link href={normaPath(v.slug)} className={LINK}>
                                {v.titoloBreve}
                              </Link>
                              <p className="mt-1">{v.etichetta}</p>
                            </li>
                          );
                        })}
                    </ol>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 id="per-ambito" className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-6">
                Per ambito
              </h2>
              <div className="space-y-10">
                {normePerAmbito().map((g) => (
                  <section key={g.ambito} aria-labelledby={ambitoId(g.ambito)}>
                    <h3
                      id={ambitoId(g.ambito)}
                      className="text-xl font-bold text-[#E6EDF3] mb-4"
                    >
                      {g.ambito}
                    </h3>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {g.norme.map((n) => (
                        <li key={n.slug}>
                          <Link
                            href={normaPath(n.slug)}
                            className="block h-full bg-[#161B22] border border-[#30363D] rounded-xl p-5 hover:border-[#00B4D8] transition-colors duration-200"
                          >
                            <span className="flex flex-wrap items-center gap-2 mb-2">
                              <TechBadge label={n.stato} variant={statoVariant(n.stato)} />
                            </span>
                            <span className="block text-lg font-bold text-[#E6EDF3]">
                              {n.titoloBreve}
                            </span>
                            <span className="block text-sm text-[#9BA8B9] mb-2">{n.riferimento}</span>
                            <span className="block text-sm leading-relaxed">{n.sintesi}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>

            <div className="text-base border-t border-[#30363D] pt-8 space-y-4">
              <p>
                Il metodo con cui leggo queste norme insieme — distinguere i regimi che si applicano,
                vedere dove collidono, ricavarne un piano — è descritto nell’articolo{" "}
                <a
                  href="https://www.linkedin.com/pulse/cosa-faccio-luned%C3%AC-mattina-corrado-patierno-arx1e/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={LINK}
                >
                  Cosa faccio lunedì mattina
                </a>{" "}
                (LinkedIn). Le risposte puntuali sono in{" "}
                <Link href="/it/risposte" className={LINK}>
                  Risposte
                </Link>
                , gli approfondimenti in{" "}
                <Link href="/it/ricerca" className={LINK}>
                  Ricerca
                </Link>
                .
              </p>
              <p className="text-sm">
                Questa sezione è un orientamento tecnico e architetturale, aggiornato alla data
                indicata. Non è una consulenza legale e non stabilisce se e come una norma si
                applichi a un sistema o a un’organizzazione specifici: fa fede il testo degli atti.
              </p>
            </div>
          </div>
        </section>
      </main>
      <CTASection
        title="Quali di queste norme si sommano sul tuo sistema?"
        subtitle="L’assessment di esposizione mette per iscritto quali regimi si applicano al tuo caso, con quale ruolo e da quando, e cosa l’architettura deve essere in grado di dimostrare."
        ctaLabel="Scopri l’assessment →"
        ctaHref="/it/assessment"
      />
      <Footer />
    </>
  );
}
