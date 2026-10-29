import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n-routes";
import Link from "next/link";
import { RESEARCH_ARTICLES } from "@/app/research-articles";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import { NEXUS_INFERENCE_IT } from "@/lib/nexus";

export const metadata: Metadata = {
  title: "Legge 132/2025 e AI in Sanità: Cosa Cambia",
  description:
    "Analisi della Legge n. 132 del 23 settembre 2025, prima normativa organica italiana sull'intelligenza artificiale. Implicazioni per organizzazioni sanitarie e farmaceutiche.",
  alternates: alternatesFor("/it/ricerca/legge-132-2025"),
};

const article = RESEARCH_ARTICLES["legge-132-2025"];
const ARTICLE_URL = "https://www.dynamicsconsulting.it/it/ricerca/legge-132-2025";

const schema = [
  articleSchema({
    url: ARTICLE_URL,
    type: article.type,
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: "2026-10-29",
    inLanguage: article.inLanguage,
    articleSection: article.section,
    keywords: article.keywords,
  }),
  breadcrumbSchema(ARTICLE_URL, [
    { name: "Risorse in italiano", path: "/it" },
    { name: "Ricerca", path: "/it/ricerca" },
    { name: article.headline },
  ]),
];

export default function Legge132Article() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <article>
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link href="/it/ricerca" className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1">
              ← Tutti gli articoli
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <TechBadge label="AI Governance" variant="cyan" />
              <time dateTime="2025-10" className="text-xs text-[#7D8FA3]">
                {article.dateLabel}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Legge 132/2025 e AI in sanità: cosa cambia per ospedali, farmacie e aziende farmaceutiche
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              La Legge n. 132 del 23 settembre 2025 è la prima normativa organica italiana
              sull&apos;intelligenza artificiale. Per le organizzazioni in ambito sanitario e
              farmaceutico, detta regole su governance, decisione clinica e uso secondario dei
              dati. Capire le implicazioni operative è oggi una priorità per chi
              sta pianificando o ha già avviato progetti AI.
            </p>
            <p className="text-sm text-[#7D8FA3] mt-4">
              Di{" "}
              <Link href="/it/chi-siamo" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                Corrado Patierno
              </Link>
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-[#7D8FA3] text-lg leading-relaxed">
            <aside className="rounded-lg border border-[#30363D] bg-[#161B22] px-6 py-5 text-base leading-relaxed">
              <p className="text-sm font-semibold text-[#E6EDF3] mb-2">Aggiornamento — 29 ottobre 2026</p>
              <p>
                Questo articolo è stato pubblicato a ottobre 2025. Lo abbiamo corretto dove era
                sbagliato o superato: il rapporto con l&apos;AI Act, la data di entrata in vigore,
                le autorità competenti, chi classifica l&apos;alto rischio, la residenza dei dati,
                la formazione e le date dell&apos;AI Act.
              </p>
              <p className="mt-3">
                Da allora sono arrivati il{" "}
                <Link href="/it/normativa/dlgs-160-2026" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  D.Lgs. 160/2026
                </Link>{" "}
                (in vigore dal 30 settembre 2026: nuovo art. 437-bis c.p., art. 25-vicies D.Lgs.
                231/2001, responsabilità civile con nesso causale presunto ed esibizione dei log),
                il{" "}
                <Link href="/it/normativa/dlgs-179-2026" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  D.Lgs. 179/2026
                </Link>{" "}
                (in vigore dal 23 ottobre 2026: autorità, sanzioni, nessuna decisione sul rapporto
                di lavoro basata solo su trattamento automatizzato, formazione) e il Digital Omnibus,
                Reg. (UE) 2026/1744, che sposta le date dell&apos;alto rischio. La scheda aggiornata
                sulla legge è in{" "}
                <Link href="/it/normativa/legge-132-2025" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Legge 132/2025
                </Link>.
              </p>
            </aside>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Cosa prevede la Legge 132/2025</h2>
              <p>
                La Legge 132/2025 non recepisce il Regolamento europeo sull&apos;AI (AI Act,
                Regolamento UE 2024/1689), che come ogni regolamento si applica direttamente: lo
                accompagna e lo integra nel contesto normativo italiano, senza aggiungere obblighi
                rispetto al regolamento (art. 1 c.2, art. 3 c.5). Per l&apos;AI in sanità detta
                principi propri (artt. 7-10); la classificazione dei sistemi ad alto rischio resta
                invece all&apos;AI Act (art. 6 e Allegati I e III), non alla legge italiana.
              </p>
              <p className="mt-4">
                Per le organizzazioni sanitarie con sistemi ad alto rischio, i punti chiave dell&apos;AI
                Act includono: documentare l&apos;intero ciclo di vita del sistema AI (dalla
                progettazione al deployment), mantenere aggiornata la gestione dei rischi, e una
                supervisione umana effettiva degli output. La legge italiana aggiunge che in ambito
                clinico la decisione è sempre rimessa al medico (art. 7 c.5).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Implicazioni per chi compra AI in sanità</h2>
              <p>
                Per ospedali, ASL, catene di farmacie e aziende farmaceutiche, la Legge 132/2025,
                letta insieme all&apos;AI Act e al GDPR, porta tre questioni operative:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-[#7D8FA3]">
                <li>
                  <strong className="text-[#E6EDF3]">Data residency, una scelta e non un obbligo:</strong>{" "}
                  la legge non impone che i dati risiedano in Italia o nell&apos;UE. L&apos;unica norma
                  vicina è un criterio di preferenza per le piattaforme di e-procurement della PA (art.
                  5 c.1 lett. d). Restano le regole GDPR sui trasferimenti fuori dall&apos;UE: dove
                  vengono trattati i dati sanitari va comunque saputo e documentato.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Governance degli output:</strong> in contesto
                  clinico l&apos;AI è un supporto e la decisione resta al medico (art. 7); per i
                  sistemi ad alto rischio l&apos;AI Act chiede log (art. 12) e supervisione umana
                  (art. 14). Non basta un disclaimer: serve un&apos;architettura che implementi
                  questi controlli by design.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Uso secondario dei dati:</strong> l&apos;art. 8
                  consente alla ricerca l&apos;uso secondario di dati privi di identificativi diretti
                  senza nuovo consenso, previa comunicazione al Garante; restano basi giuridiche e
                  misure di anonimizzazione o pseudonimizzazione documentate.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Come Nexus MDS Core risponde a questi requisiti</h2>
              <p>
                Nexus MDS Core è stato progettato con questi vincoli normativi come requisiti di
                architettura, non come feature aggiunte a posteriori. In pratica:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-[#7D8FA3]">
                <li>
                  <strong className="text-[#E6EDF3]">Perimetro controllato:</strong>{" "}
                  {NEXUS_INFERENCE_IT} Nessun lock-in da hyperscaler.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Audit trail end-to-end:</strong> ogni interazione
                  con il sistema — query, risposta, fonte utilizzata, modello invocato — è tracciata
                  in un log a prova di manomissione, accessibile per ispezioni regolamentari.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Pipeline progettata sui requisiti GDPR:</strong> anonimizzazione
                  dei dati personali all&apos;ingestion, crittografia at-rest e in-transit,
                  autenticazione Zero-Trust con Keycloak OIDC/PKCE.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">RAG grounded:</strong> il sistema RAG utilizza
                  esclusivamente fonti documentali curate e verificate, riducendo il rischio di
                  hallucination su contenuti clinici.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Tempistiche e scadenze</h2>
              <p>
                La Legge 132/2025 si inserisce in un calendario normativo già denso. Le
                organizzazioni sanitarie e farmaceutiche devono orientarsi tra scadenze
                sovrapposte:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-[#7D8FA3]">
                <li>
                  <strong className="text-[#E6EDF3]">Febbraio 2025:</strong> entrata in vigore dei
                  divieti assoluti dell&apos;AI Act (pratiche di AI vietate, Art. 5).
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Agosto 2025:</strong> obbligo di conformità per
                  i modelli di AI general-purpose (GPAI) ai sensi dell&apos;AI Act (Art. 51-56).
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Settembre-ottobre 2025:</strong> pubblicazione
                  della Legge 132/2025 nella Gazzetta Ufficiale n. 223 del 25 settembre 2025, con
                  entrata in vigore il 10 ottobre 2025.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Dicembre 2027:</strong> applicabilità degli
                  obblighi per i sistemi AI ad alto rischio dell&apos;Allegato III dell&apos;AI Act, che
                  comprende alcuni usi sanitari come il triage di emergenza (dal 2 dicembre 2027:
                  il Reg. (UE) 2026/1744 ha spostato la data, prima fissata ad agosto 2026).
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Agosto 2028:</strong> scadenza per la conformità
                  ai requisiti dell&apos;AI Act per i sistemi AI integrati in dispositivi medici e
                  diagnostici in vitro (Allegato I, dal 2 agosto 2028 dopo il Reg. (UE) 2026/1744).
                </li>
              </ul>
              <p className="mt-4">
                Il messaggio per le organizzazioni sanitarie è chiaro: anche con le date spostate,
                la finestra per adeguarsi si misura in mesi, non in anni. Chi avvia oggi un progetto AI in sanità deve progettarlo
                nativamente per la conformità, non pianificare un adeguamento successivo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Confronto con il quadro europeo</h2>
              <p>
                La Legge 132/2025 non sostituisce l&apos;AI Act — lo integra nel contesto italiano.
                La distinzione è importante: l&apos;AI Act stabilisce il quadro generale (classificazione
                del rischio, obblighi per fornitori e deployer, governance dei modelli GPAI), mentre la
                legge italiana aggiunge specificità nazionali.
              </p>
              <p className="mt-4">
                Le principali integrazioni italiane riguardano:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-[#7D8FA3]">
                <li>
                  <strong className="text-[#E6EDF3]">Autorità nazionali:</strong> l&apos;AgID (Agenzia
                  per l&apos;Italia Digitale) è l&apos;autorità di notifica e l&apos;ACN (Agenzia per la
                  Cybersicurezza Nazionale) quella di vigilanza del mercato e punto di contatto
                  unico (art. 20); Banca d&apos;Italia, CONSOB e IVASS restano competenti nei loro
                  settori. Il Garante Privacy mantiene i suoi poteri ma non è autorità per l&apos;AI ai
                  sensi della legge: il D.Lgs. 179/2026 gli affida la vigilanza solo per l&apos;art.
                  74(8) dell&apos;AI Act.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Sanità pubblica:</strong> principi per i sistemi
                  AI utilizzati nel SSN (Servizio Sanitario Nazionale): decisione al medico,
                  informazione al paziente, verifica periodica di sistemi e dati (art. 7), e una
                  piattaforma di AI gestita da AGENAS per l&apos;assistenza territoriale (art. 10).
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Formazione professionale:</strong> l&apos;AI Act
                  prevede già misure di alfabetizzazione (art. 4, attenuato dal Reg. (UE) 2026/1744).
                  La legge italiana delega il Governo; gli obblighi concreti, come la quota AI
                  nell&apos;ECM per il personale sanitario, arrivano con il D.Lgs. 179/2026.
                </li>
              </ul>
              <p className="mt-4">
                Per le aziende farmaceutiche, la combinazione di AI Act, Legge 132/2025, GDPR e
                NIS2 crea un quadro normativo che rende l&apos;infrastruttura{" "}
                <Link href="/it/ai-sovrana-pharma" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  AI sovrana
                </Link>{" "}
                il modo più diretto di sapere e dimostrare dove girano i dati e chi li controlla.
                Nessuna di queste norme impone la residenza dei dati; ma chi opera su cloud pubblico
                senza sapere dove vengono trattati i dati sanitari fatica a documentare trasferimenti
                e controlli. Per approfondire le implicazioni
                specifiche per il settore sanitario, vedi il nostro focus su{" "}
                <Link href="/it/ai-sanitaria-on-premise" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  AI on-premise per la sanità
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Conclusione</h2>
              <p>
                La Legge 132/2025 non è un ostacolo all&apos;innovazione AI in sanità — è un quadro
                che rende espliciti requisiti che le architetture AI avrebbero dovuto soddisfare
                comunque. Per le organizzazioni che stanno valutando piattaforme AI, la domanda da
                porsi non è più &quot;quale modello linguistico usare&quot; ma &quot;quale
                infrastruttura mi permette di usarlo in modo conforme, sovrano e verificabile&quot;.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["AI Act", "Legge 132/2025", "Healthcare AI", "GDPR", "Italy"].map((tag) => (
                <TechBadge key={tag} label={tag} variant="cyan" />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Cosa cambia per il tuo progetto AI?"
          subtitle="Parliamo di cosa chiede la norma al tuo sistema, e di come Nexus MDS Core regge i controlli che ne derivano."
          ctaLabel="Richiedi una demo di Nexus →"
          ctaHref="/it/contatti"
        />
        </article>
      </main>
      <Footer />
    </>
  );
}
