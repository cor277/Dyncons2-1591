import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS_IT, FONTI_IT } from "@/app/answers-it";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { BASE_URL, alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerPageLayout, AnswerSection } from "@/components/sections/AnswerPageLayout";

const answer = ANSWERS_IT["valutare-fornitore-ai-settori-regolati"];
const PATH = `/it/risposte/${answer.slug}`;
const URL = `${BASE_URL}${PATH}`;

export const metadata: Metadata = {
  title: answer.title,
  description: answer.description,
  keywords: answer.keywords,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: answer.title,
    description: answer.description,
    url: URL,
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: answer.title,
    description: answer.description,
  },
};

const schema = [
  articleSchema({
    url: URL,
    type: "TechArticle",
    headline: answer.question,
    description: answer.description,
    datePublished: answer.updated,
    inLanguage: "it",
    articleSection: answer.topic,
    keywords: answer.keywords,
    about: ["Valutazione dei fornitori", "AI governance", "Responsabilità da prodotto"],
  }),
  breadcrumbSchema(URL, [
    { name: "Risorse in italiano", path: "/it" },
    { name: "Risposte", path: "/it/risposte" },
    { name: answer.question },
  ]),
];

const questions = [
  [
    "Dove vanno i dati, fisicamente e giuridicamente?",
    "Non ‘sono cifrati?’ — ma quali datacenter, quali sub-responsabili, sotto quale giurisdizione, e cosa succede a prompt, contesto recuperato, telemetria e snapshot per il supporto. Chiedi l’elenco dei sub-responsabili e verifica se le modifiche ti vengono notificate prima o solo comunicate dopo.",
  ],
  [
    "Quale modello risponde, e cosa succede quando cambia?",
    "Un cambio di modello dietro un endpoint stabile cambia il comportamento del tuo sistema senza che il tuo sistema cambi. Chiedi se vieni avvisato, se puoi fissare una versione e per quanto tempo un modello deprecato resta disponibile. Un fornitore che non sa rispondere ti sta chiedendo di accettare cambiamenti che non puoi rilevare.",
  ],
  [
    "Cosa sa mostrare il sistema di una risposta data sei mesi fa?",
    "Insieme recuperato, versioni dei documenti, prompt, modello, output, approvatore. Se il prodotto non è in grado di produrli, l’obbligo non scompare — ricade su di te, e non hai modo di adempierlo.",
  ],
  [
    "Qual è la policy di ingestion per i dati personali?",
    "Se i dati personali possono entrare nell’indice, se possono essere esclusi in fase di ingestion anziché filtrati al momento della risposta, e come la cancellazione si propaga a embedding e cache. ‘Li filtriamo nell’output’ è un’affermazione diversa e molto più debole.",
  ],
  [
    "Di cosa li rende davvero responsabili il contratto?",
    "Leggi la limitazione di responsabilità confrontandola con il valore del guasto che dovrebbe coprire. Poi leggi l’impegno di disponibilità, la finestra di notifica degli incidenti e se l’accuratezza dell’output sia garantita — di solito non lo è, e non è irragionevole, ma devi saperlo prima dell’incidente e non durante.",
  ],
  [
    "Cosa succede all’uscita?",
    "Formato di esportazione per documenti, embedding, configurazione e registro di audit; quanto tempo hai; chi cancella cosa e con quale prova. Le condizioni di uscita sono la cosa più economica da negoziare prima della firma e la più costosa dopo.",
  ],
  [
    "Chi si fa carico degli obblighi di sicurezza che hai già?",
    "Se rientri nell’ambito di NIS2 o DORA, gli accordi con i fornitori fanno parte dei tuoi obblighi, non sono una conversazione a parte. Chiedi come il fornitore supporta le tue tempistiche di notifica, perché il tuo orologio non si ferma mentre aspetti lui.",
  ],
  [
    "Cosa dichiarano, per iscritto, sulla conformità?",
    "Un fornitore che afferma che il suo prodotto ti rende conforme sta descrivendo qualcosa che non esiste. Quello che un prodotto può fare è portare controlli e produrre evidenze. Di solito è questa distinzione a separare i fornitori che hanno lavorato in un ambiente regolato da quelli che ne hanno letto.",
  ],
];

export default function ValutareFornitoreRisposta() {
  return (
    <>
      <JsonLd data={schema} />
      <AnswerPageLayout
        locale="it"
        question={answer.question}
        updated={answer.updated}
        updatedLabel={answer.updatedLabel}
        shortAnswer={
          <p>
            Valuta il fornitore su cosa succede dopo la demo, non su cosa mostra la demo. Otto
            domande separano un fornitore che ha operato in un ambiente regolato da uno che non
            l’ha fatto: dove vanno i dati fisicamente e giuridicamente, quale modello risponde e
            cosa succede quando cambia, cosa sa mostrare il sistema di una risposta sei mesi dopo,
            come i dati personali vengono tenuti fuori dall’indice, di cosa il contratto li rende
            responsabili, come funziona l’uscita, come supportano i tuoi obblighi di sicurezza e di
            notifica degli incidenti, e cosa dichiarano per iscritto sulla conformità. Falle in
            quest’ordine, per iscritto, prima della trattativa commerciale — le risposte sono la
            valutazione.
          </p>
        }
        sources={[FONTI_IT.pld, FONTI_IT.aiAct, FONTI_IT.nis2, FONTI_IT.dora]}
        related={[
          {
            label: "Assessment di esposizione — PLD 2024 e AI Act",
            href: "/it/assessment",
            note: "l’incarico che stabilisce dove si ferma la responsabilità del fornitore e dove comincia la tua",
          },
          {
            label: "Consulenza AI, governance e compliance",
            href: "/it/consulenza-ai-governance-compliance",
          },
          {
            label: "Fractional AI CTO",
            href: "/fractional-cto-milano",
            note: "dove la valutazione dei fornitori diventa una responsabilità continuativa",
          },
          { label: "Un sistema RAG rientra nell’AI Act?", href: "/it/risposte/rag-ai-act" },
        ]}
        ctaTitle="Una valutazione del fornitore che il tuo CdA può leggere"
        ctaSubtitle="Due diligence tecnica su un fornitore di AI, scritta come documento decisionale e non come checklist."
      >
        <AnswerSection id="the-eight" title="Le otto domande">
          <dl className="space-y-5">
            {questions.map(([q, a]) => (
              <div key={q} className="border-l-2 border-[#00B4D8] pl-5">
                <dt className="font-semibold text-[#E6EDF3] mb-1">{q}</dt>
                <dd className="text-base">{a}</dd>
              </div>
            ))}
          </dl>
        </AnswerSection>

        <AnswerSection id="liability" title="La domanda che sta sotto tutte le altre">
          <p>
            La direttiva del 2024 sulla responsabilità da prodotto include il software nella
            definizione di prodotto e si applica ai prodotti immessi sul mercato o messi in
            servizio dal 9 dicembre 2026 — la data entro cui gli Stati membri devono averla
            recepita. Questo non rende i fornitori responsabili di tutto, e non mette al sicuro chi
            acquista. Quello che fa è rendere decisivo il confine: quali difetti ricadono su chi ha
            immesso il prodotto sul mercato, e quali su chi lo ha messo in esercizio, configurato e
            alimentato di dati.
          </p>
          <p>
            Nella pratica la maggior parte delle controversie si giocherà su quel confine più che
            sulla tecnologia, e la maggior parte delle organizzazioni non l’ha mai tracciato.
            Tracciarlo è l’intero contenuto dell’
            <Link href="/it/assessment" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              assessment di esposizione
            </Link>
            : tre giornate di lavoro e un deliverable firmato che indica dove cade la linea per la
            tua configurazione e quali evidenze la sostengono.
          </p>
        </AnswerSection>

        <AnswerSection id="signals" title="I segnali nel modo in cui rispondono">
          <p>
            Un fornitore che ha già affrontato un’ispezione risponde nel merito e dichiara da sé i
            limiti: cosa il prodotto non fa, cosa resta in capo al cliente, cosa gli servirebbe da
            te per supportare un audit. Un fornitore che non l’ha affrontata risponde per aggettivi
            — enterprise-grade, livello bancario, pienamente conforme — e tratta le domande come un
            ostacolo invece che come normale diligenza.
          </p>
          <p>
            Il secondo segnale è chi si presenta. Se nessuno nella stanza sa descrivere la pipeline
            di retrieval o dire il nome del modello, stai parlando con lo strato commerciale di
            un’azienda di cui non hai ancora conosciuto l’ingegneria. Chiedi di incontrarla prima
            della firma, non dopo il primo incidente.
          </p>
          <p>
            Il terzo è cosa chiedono a te. Un fornitore che non chiede della tua classificazione
            dei dati, dei tuoi obblighi di conservazione o degli obblighi di notifica del tuo
            settore ha in programma di consegnarti un deployment generico e lasciarti scoprire le
            lacune da solo.
          </p>
        </AnswerSection>
      </AnswerPageLayout>
    </>
  );
}
