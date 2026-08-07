import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE } from "@/app/og";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";

const TITLE = "Risorse in italiano — AI sovrana per settori regolamentati";
const DESCRIPTION =
  "Indice delle pagine in italiano di Dynamics Consulting: sovereign AI, sanità, farmaceutico, finanza, ingegneria, PMI. Nexus MDS Core — piattaforma AI on-premise, conforme GDPR e AI Act.";
const URL = "https://www.dynamicsconsulting.it/it";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: { en: "https://www.dynamicsconsulting.it/" },
  },
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: "it_IT",
  },
};

/**
 * Italian index.
 *
 * /it existed only as a path prefix: every Italian page lived under it, but the
 * prefix itself returned 404 — an URL people type and internal links can produce.
 * This page is the hub, and it is deliberately exhaustive: every Italian-language
 * page is reachable from here, including the three that sit at the top level
 * (/fractional-cto-milano, /modernizzazione-sistemi-legacy-ai,
 * /sovereign-ai-pharma-italia) and would otherwise have no Italian entry point.
 */
type Resource = { href: string; title: string; blurb: string };

const SECTORS: Resource[] = [
  {
    href: "/it/ai-sanitaria-on-premise",
    title: "Sanità",
    blurb:
      "Infrastruttura AI on-premise per ospedali, farmacie e aziende sanitarie. GDPR, AI Act, Legge 132/2025.",
  },
  {
    href: "/it/consulenza-ai-farmaceutico",
    title: "Farmaceutico",
    blurb:
      "RAG su documenti regolatori e workflow agentici per il pharma mid-market. Alternativa sovrana agli hyperscaler.",
  },
  {
    href: "/it/ai-agenti-finanziari",
    title: "Finanza e compliance",
    blurb:
      "Governance degli agenti AI per banche e asset manager: approval gate, audit log immutabile, RBAC. DORA, MiFID II.",
  },
  {
    href: "/it/ai-ingegneria-tecnica",
    title: "Ingegneria e norme tecniche",
    blurb:
      "RAG su ISO, UNI, EN, capitolati e revisioni. Risposte citate con norma e revisione corretta, tracciabili.",
  },
  {
    href: "/it/ai-dati-aziendali",
    title: "PMI — AI sui dati aziendali",
    blurb:
      "Percorso strutturato: discovery, MVP RAG, validazione. On-premise, senza dipendenza cloud.",
  },
  {
    href: "/sovereign-ai-pharma-italia",
    title: "AI sovrana per il pharma italiano",
    blurb:
      "Il caso della sovranità del dato nel farmaceutico: perché la residenza dei dati è un requisito, non una preferenza.",
  },
];

const SERVICES: Resource[] = [
  {
    href: "/fractional-cto-milano",
    title: "Fractional CTO a Milano",
    blurb:
      "Governance AI, architettura cloud, modernizzazione legacy, team enablement per PMI e mid-market.",
  },
  {
    href: "/modernizzazione-sistemi-legacy-ai",
    title: "Modernizzazione di sistemi legacy",
    blurb:
      "Reverse engineering assistito da AI per capire, documentare e riscrivere sistemi che nessuno mantiene più.",
  },
];

function ResourceCard({ href, title, blurb }: Resource) {
  return (
    <li>
      <Link
        href={href}
        className="group block h-full rounded-lg border border-[#21262D] bg-[#11161D] p-6 transition-colors duration-200 hover:border-[#00B4D8]"
      >
        <h3 className="font-syne text-lg font-bold text-[#E6EDF3] mb-2 group-hover:text-[#00B4D8] transition-colors">
          {title}
        </h3>
        <p className="text-[#7D8FA3] text-sm leading-relaxed">{blurb}</p>
      </Link>
    </li>
  );
}

export default function ItalianIndexPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen" lang="it">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Risorse in italiano
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Infrastruttura AI sovrana per organizzazioni in settori regolamentati
            </h1>
            <p className="text-[#7D8FA3] text-lg leading-relaxed">
              Il sito è in inglese. Queste sono le pagine scritte in italiano, per chi valuta
              un&apos;infrastruttura AI che resta dentro il perimetro dell&apos;organizzazione:
              sanità, farmaceutico, finanza, ingegneria, PMI.
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
              Da dove partire
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-6">
              Cosa significa <strong className="text-[#E6EDF3]">Sovereign AI</strong> nel quadro
              normativo italiano ed europeo — AI Act, GDPR, NIS2, Legge 132/2025 — e perché per il
              mid-market non è una preferenza tecnologica ma un requisito.
            </p>
            <CTAButton
              label="Sovereign AI Italia &rarr;"
              href="/it/sovereign-ai-italia"
              variant="primary"
            />
          </div>
        </section>

        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-8">
              Per settore
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SECTORS.map((r) => (
                <ResourceCard key={r.href} {...r} />
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-8">
              Consulenza
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2">
              {SERVICES.map((r) => (
                <ResourceCard key={r.href} {...r} />
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
              In produzione
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-6">
              <strong className="text-[#E6EDF3]">Federfarma Lombarda</strong> — assistente normativo
              per oltre 1.000 farmacie delle province di Milano, Lodi e Monza Brianza. Catena di
              versioni esplicita, dati personali mai indicizzati, registro inalterabile.
            </p>
            <CTAButton
              label="Leggi il caso &rarr;"
              href="/it/case-studies/federfarma"
              variant="secondary"
            />
          </div>
        </section>

        {/* Chiusura — assessment */}
        <section className="px-6 py-16 border-t border-[#21262D] bg-[#11161D]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
              Dove si ferma la responsabilit&agrave; del tuo fornitore, e dove comincia la tua?
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              Dal 9 dicembre 2026 la direttiva europea sulla responsabilit&agrave; da prodotto
              include il software fra i prodotti. L&apos;assessment di esposizione stabilisce, per
              la tua organizzazione, dove passa il confine.
            </p>
            <CTAButton
              label="Assessment di esposizione &rarr;"
              href="/it/assessment"
              variant="primary"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
