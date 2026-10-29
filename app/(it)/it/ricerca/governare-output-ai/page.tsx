import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE } from "@/app/og";
import { RESEARCH_ARTICLES_IT } from "@/app/research-articles-it";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { alternatesFor } from "@/lib/i18n-routes";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

const PATH = "/it/ricerca/governare-output-ai";
const ARTICLE_URL = `https://www.dynamicsconsulting.it${PATH}`;
const DESCRIPTION =
  "Audit logging, validazione degli output, pattern human-in-the-loop e model card, da deployment AI in produzione in sanità, nel farmaceutico e nel settore pubblico.";

export const metadata: Metadata = {
  title: "Governare gli output dell'AI nei settori regolamentati",
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "Governare gli output dell'AI nei settori regolamentati",
    description: DESCRIPTION,
    url: ARTICLE_URL,
    type: "article",
    locale: "it_IT",
  },
};

const article = RESEARCH_ARTICLES_IT["governare-output-ai"];

const schema = [
  articleSchema({
    url: ARTICLE_URL,
    type: article.type,
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    inLanguage: "it",
    articleSection: article.section,
    keywords: article.keywords,
  }),
  breadcrumbSchema(ARTICLE_URL, [
    { name: "Risorse in italiano", path: "/it" },
    { name: "Ricerca", path: "/it/ricerca" },
    { name: article.headline },
  ]),
];

export default function GovernareOutputAiArticle() {
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
              <TechBadge label="Governance AI" variant="cyan" />
              <time dateTime="2026-01" className="text-xs text-[#7D8FA3]">
                {article.dateLabel}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Governare gli output dell&apos;AI nei settori regolamentati: un playbook tecnico
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              I deployment AI in sanità, nel farmaceutico e nella pubblica amministrazione richiedono
              più dei guardrail. Ecco come si presenta la governance degli output in produzione,
              dall&apos;audit logging ai pattern human-in-the-loop.
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
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Oltre il prompt engineering</h2>
              <p>
                La maggior parte delle discussioni sulla sicurezza dell&apos;AI si concentra su ciò che
                entra nel modello: system prompt, guardrail, filtri sui contenuti. Nei settori
                regolamentati conta altrettanto, spesso di più, ciò che esce e come viene governato dopo
                la generazione.
              </p>
              <p className="mt-4">
                Che un sistema AI rientri nelle categorie ad alto rischio dell&apos;AI Act dipende dalla
                sua finalità prevista e dalle condizioni fissate dal Regolamento, non dal fatto che
                giri in un ospedale o in una farmacia. Uno strumento che fa da componente di sicurezza
                di un dispositivo medico, o che decide sull&apos;accesso alle cure, è un oggetto
                diverso da un assistente che recupera procedure per il personale, anche quando il codice
                è quasi identico. Dove un sistema rientra in quelle categorie, tracciabilità,
                verificabilità e sorveglianza umana effettiva smettono di essere buone pratiche e
                diventano obblighi. Dove non rientra, restano la differenza tra un sistema che sai
                spiegare e uno che non sai spiegare. E il motivo per costruirle è che la classificazione
                può cambiarti sotto i piedi, quando la finalità prevista si allarga senza che nessuno lo
                dichiari.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">1. Audit logging a prova di manomissione</h2>
              <p>
                La registrazione che vale la pena tenere è quella che ti permette di ricostruire in
                seguito una risposta specifica: la domanda, il contesto recuperato, il modello invocato,
                la risposta generata e la persona che l&apos;ha ricevuta, in un archivio append-only.
                Quanto sei obbligato a conservarne, e per quanto tempo, dipende dalla classificazione
                del sistema, dai regimi che si applicano al tuo settore, dalla tua governance e dalla
                tua policy di conservazione: un default di novanta giorni e un obbligo di dieci anni non
                sono lo stesso progetto. Il punto ingegneristico vale a prescindere da quello
                giuridico: una decisione che non si può ricostruire non si può difendere, e aggiungere
                la registrazione a un sistema che non è nato per tenerla di solito significa
                ricostruirlo.
              </p>
              <p className="mt-4">
                In Nexus MDS Core lo realizziamo con un servizio di audit dedicato che intercetta ogni
                ciclo richiesta-risposta. Ogni record è cifrato e concatenato via hash al precedente,
                così qualsiasi alterazione spezza la catena e l&apos;integrità si può verificare su
                richiesta.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">2. Livello di validazione degli output</h2>
              <p>
                Tra l&apos;output grezzo del modello e la risposta mostrata all&apos;utente deve
                esserci un livello di validazione. Non è un filtro sui contenuti: è un controllo
                strutturato che verifica che l&apos;output rispetti criteri di qualità specifici del
                dominio.
              </p>
              <p className="mt-4">
                In ambito clinico significa verificare che le fonti citate esistano e siano aggiornate,
                che la risposta non contraddica linee guida note e che i segnali di confidenza siano
                accurati. In ambito farmaceutico significa verificare l&apos;accuratezza dei riferimenti
                normativi e segnalare gli output che toccano la classificazione delle sostanze
                controllate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">3. Pattern human-in-the-loop</h2>
              <p>
                L&apos;AI Act richiede una &quot;sorveglianza umana efficace&quot; per i sistemi ad
                alto rischio. In pratica significa progettare workflow in cui l&apos;AI assiste ma non
                sostituisce la decisione umana. Tre pattern che mettiamo in produzione:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Revisione prima dell&apos;azione:</strong> l&apos;AI genera una raccomandazione; una persona qualificata la rivede e la approva prima che arrivi all&apos;utente finale.</li>
                <li><strong className="text-[#E6EDF3]">Soglia di confidenza:</strong> gli output sotto una soglia di confidenza vengono instradati automaticamente alla revisione umana. Sopra la soglia, vengono consegnati con un&apos;etichetta chiara che li indica come generati dall&apos;AI.</li>
                <li><strong className="text-[#E6EDF3]">Trigger di escalation:</strong> categorie di contenuto specifiche (ad es. indicazioni di dosaggio, ipotesi diagnostiche) attivano sempre la revisione umana, a prescindere dalla confidenza.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">4. Model card e documentazione</h2>
              <p>
                Ogni modello in produzione deve avere una model card: un documento strutturato che ne
                descrive dati di addestramento, capacità, limiti noti, casi d&apos;uso previsti e
                metriche di valutazione. L&apos;AI Act non usa il termine &quot;model card&quot;, ma la
                documentazione tecnica e le istruzioni per l&apos;uso che richiede ai sistemi ad alto
                rischio coprono in gran parte lo stesso terreno, e una model card è un modo pratico per
                tenere quel materiale in un unico posto. Al di là di qualsiasi obbligo, è la base di una
                sorveglianza umana consapevole: non puoi governare ciò che non capisci.
              </p>
              <p className="mt-4">
                In pratica, la model card di un deployment AI in sanità dovrebbe includere: le fonti dei
                dati di addestramento e la loro provenienza, l&apos;architettura e la versione del
                modello, metriche quantitative di prestazione su benchmark specifici del dominio, i
                modi di errore noti (con esempi), i casi d&apos;uso previsti e quelli esplicitamente
                esclusi, e la data dell&apos;ultima valutazione. Non è un documento statico: va
                aggiornato ogni volta che il modello viene riaddestrato, che il benchmark di valutazione
                cambia o che emergono nuovi modi di errore.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">5. Cicli di feedback e miglioramento continuo</h2>
              <p>
                La governance degli output non si implementa una volta per tutte. È un processo
                continuo che migliora nel tempo, ma solo se il sistema è progettato per imparare dai
                propri output. Significa chiudere il ciclo di feedback tra validazione degli output,
                revisione umana e miglioramento del sistema.
              </p>
              <p className="mt-4">
                In Nexus MDS Core realizziamo tre meccanismi di feedback:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong className="text-[#E6EDF3]">Tracciamento dei rifiuti:</strong> quando un revisore umano rifiuta o modifica un output dell&apos;AI, il motivo del rifiuto viene registrato e classificato. Nel tempo si forma un dataset di pattern di errore utile a migliorare il livello di validazione, la pipeline di retrieval o il modello stesso.</li>
                <li><strong className="text-[#E6EDF3]">Calibrazione della confidenza:</strong> le soglie di confidenza (dalla sezione 3) non sono fisse. Vengono ricalibrate periodicamente in base agli esiti reali della revisione umana. Se gli output sopra soglia vengono rifiutati più spesso del previsto, la soglia è troppo permissiva.</li>
                <li><strong className="text-[#E6EDF3]">Punteggio di qualità delle fonti:</strong> nei sistemi basati su RAG non tutti i documenti sorgente sono ugualmente affidabili. Il ciclo di feedback tiene traccia di quali fonti producono output che superano la revisione umana e quali producono output rifiutati, e ne ricava un punteggio di affidabilità della fonte che influenza il ranking del retrieval.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">6. Pattern architetturali per la governance degli output</h2>
              <p>
                Implementare tutti e cinque i livelli di governance (audit logging, validazione degli
                output, human-in-the-loop, model card, cicli di feedback) richiede un pattern
                architetturale preciso. L&apos;approccio ingenuo, aggiungere la governance come
                middleware nella pipeline delle richieste, crea colli di bottiglia sulla latenza e un
                accoppiamento stretto.
              </p>
              <p className="mt-4">
                Il pattern che usiamo in produzione è un&apos;architettura a eventi: ogni interazione
                con l&apos;AI emette un evento su un bus di governance. Audit logging, validazione e
                tracciamento del feedback sono consumatori indipendenti di questo flusso di eventi. Così
                la governance è disaccoppiata dalla pipeline di inferenza, e un guasto della governance
                non blocca le risposte agli utenti (pur registrando ogni interazione ai fini della
                compliance).
              </p>
              <p className="mt-4">
                Nei settori regolamentati la governance degli output non è un accessorio facoltativo: è
                la differenza tra un sistema AI che regge l&apos;esame di un&apos;autorità di controllo
                e uno che non lo regge. La{" "}
                <Link href="/it/ricerca/legge-132-2025" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Legge 132/2025
                </Link>{" "}
                e l&apos;AI Act europeo lo rendono esplicito. Le organizzazioni che investono oggi in
                un&apos;architettura di governance saranno quelle in grado di portare l&apos;AI su
                larga scala senza rischio normativo. Quelle che trattano la governance come un dettaglio da
                sistemare dopo si ritroveranno ad adeguare tutto a posteriori, a un costo molto più alto, quando le
                autorità cominceranno a fare domande.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Governance AI", "AI Act", "AI in sanità", "Audit", "Compliance"].map((tag) => (
                <TechBadge key={tag} label={tag} variant="cyan" />
              ))}
            </div>
          </div>
        </section>

        </article>
        <CTASection
          title="Parliamo del tuo progetto"
          subtitle="Infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Scrivici."
          ctaLabel="Inizia la conversazione →"
          ctaHref="/it/contatti"
        />
      </main>
      <Footer />
    </>
  );
}
