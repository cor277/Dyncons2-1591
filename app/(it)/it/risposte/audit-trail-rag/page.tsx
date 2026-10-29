import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS_IT, FONTI_IT } from "@/app/answers-it";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { BASE_URL, alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerPageLayout, AnswerSection } from "@/components/sections/AnswerPageLayout";

const answer = ANSWERS_IT["audit-trail-rag"];
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
    about: ["Audit trail", "Retrieval-augmented generation", "AI governance"],
  }),
  breadcrumbSchema(URL, [
    { name: "Risorse in italiano", path: "/it" },
    { name: "Risposte", path: "/it/risposte" },
    { name: answer.question },
  ]),
];

const record = [
  ["Domanda", "L’input così come è stato ricevuto, con l’identità di chi ha chiesto e i diritti di accesso che quell’identità aveva in quel momento."],
  ["Insieme recuperato", "Quali chunk sono stati restituiti, da quali documenti, in quale versione, con quali punteggi. Non solo quelli citati nella risposta: quelli presi in considerazione."],
  ["Stato del documento", "Per ogni fonte: l’identificativo di versione e il suo intervallo di validità, così che ‘in vigore alla data della domanda’ sia un’affermazione calcolabile e non un’ipotesi."],
  ["Prompt", "Il prompt assemblato, oppure un suo hash insieme all’identificativo del template e alle variabili. Un template cambiato in silenzio è la causa più comune di una risposta che non si riesce a riprodurre."],
  ["Identità del modello", "Fornitore, nome del modello, versione e parametri di generazione. Se l’endpoint è esterno, questa è l’unica traccia che avrai di cosa ha risposto davvero."],
  ["Output", "La risposta così come è stata restituita, prima di qualsiasi post-elaborazione, e la forma post-elaborata se le due differiscono."],
  ["Esito", "Chi l’ha vista, se un essere umano l’ha approvata e cosa è successo dopo — la parte che la maggior parte dei sistemi dimentica, e quella su cui un ispettore fa la prima domanda."],
];

export default function AuditTrailRagRisposta() {
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
            L’audit trail di un sistema RAG non è un log delle richieste. È tutto ciò che serve per
            ricostruire una risposta specifica a distanza di mesi: la domanda, l’identità che l’ha
            posta, l’esatto insieme di chunk recuperati e le versioni dei documenti da cui
            provenivano, il prompt assemblato, il modello e i parametri che hanno generato il
            testo, l’output e cosa ne ha fatto un essere umano. Due scelte di progetto lo rendono
            possibile o impossibile, ed entrambe si prendono presto: i documenti devono avere
            identificativi di versione immutabili con intervalli di validità, e il record deve
            essere scritto nella stessa transazione della risposta, su uno storage che
            l’applicazione non può riscrivere. Tutto il resto è dettaglio.
          </p>
        }
        sources={[FONTI_IT.aiAct, FONTI_IT.gdpr, FONTI_IT.dora]}
        related={[
          {
            label: "Federfarma Lombarda — la ricostruibilità in produzione",
            href: "/it/case-studies/federfarma#reconstructability",
            note: "la sezione che la descrive in un sistema in esercizio",
          },
          {
            label: "Governare gli output dell’AI nei settori regolamentati",
            href: "/it/ricerca/governare-output-ai",
          },
          {
            label: "Event sourcing nella pratica",
            href: "/it/ricerca/event-sourcing",
            note: "il pattern di persistenza alla base di un registro a prova di manomissione",
          },
          { label: "Nexus MDS Core", href: "/it/piattaforma-nexus" },
        ]}
        ctaTitle="La ricostruibilità si progetta, non si aggiunge"
        ctaSubtitle="Se un sistema esistente non sa rispondere a ‘cosa ha detto il 14 marzo, e su quale base’, è un rilievo che conviene avere per iscritto prima che lo trovi qualcun altro."
      >
        <AnswerSection id="what-to-record" title="Cosa deve contenere il record">
          <p>
            Il test è semplice e non perdona: prendi una risposta di sei mesi fa e ricostruiscila.
            Se manca anche uno solo degli elementi seguenti, non ci riesci.
          </p>
          <dl className="space-y-4">
            {record.map(([k, v]) => (
              <div key={k} className="border-l-2 border-[#30363D] pl-5">
                <dt className="font-semibold text-[#E6EDF3] mb-1">{k}</dt>
                <dd className="text-base">{v}</dd>
              </div>
            ))}
          </dl>
        </AnswerSection>

        <AnswerSection id="tamper-evidence" title="A prova di manomissione, non semplicemente archiviato">
          <p>
            Un log che l’applicazione può modificare non prova nulla, perché la prima domanda che
            chiunque gli pone è se sia stato modificato. La soglia pratica è l’evidenza di
            manomissione: storage append-only, record concatenati tramite hash in modo che
            alterarne uno invalidi i successivi, e credenziali di scrittura separate da quelle
            dell’applicazione. La marcatura temporale crittografica alza ulteriormente l’asticella
            dove il record potrebbe finire in una controversia.
          </p>
          <p>
            È qui che un substrato event-sourced ripaga: il registro di ciò che è accaduto è
            l’artefatto primario e le viste interrogabili ne derivano, invece di un registro che è
            il sottoprodotto di uno stato mutabile che qualcuno può aggiornare. I compromessi di
            questa scelta, compresi quelli che si sottovalutano, sono in{" "}
            <Link href="/it/ricerca/event-sourcing" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              event sourcing nella pratica
            </Link>
            .
          </p>
          <p>
            La conservazione va decisa nello stesso momento. Un registro di audit conservato per
            sempre è un rischio ai sensi del GDPR, e uno cancellato dopo novanta giorni per default
            è inutile per un obbligo che dura anni. Il periodo di conservazione è una decisione di
            governance con un responsabile con nome e cognome, non un default dell’infrastruttura.
          </p>
        </AnswerSection>

        <AnswerSection id="personal-data" title="Il problema dei dati personali dentro il log di audit">
          <p>
            Il registro di audit è l’unico componente che per scelta conserva tutto, e questo lo
            rende il componente con più probabilità di trasformarsi in un trattamento illecito. Tre
            mosse lo mantengono difendibile. Conservare le identità come riferimenti
            pseudonimizzati stabili, risolvibili tramite una tabella di corrispondenza separata e ad
            accesso controllato, invece di nomi nel log. Conservare la domanda alla lettera solo
            dove l’obbligo lo richiede, e altrimenti un hash più la classificazione. Ed escludere i
            dati personali dall’indice fin dall’inizio, così che i record di retrieval non possano
            accumularli — la scelta di progetto alla base del{" "}
            <Link href="/it/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              deployment per Federfarma
            </Link>
            , dove i dati personali sono esclusi in fase di ingestion anziché filtrati al momento
            della risposta.
          </p>
        </AnswerSection>

        <AnswerSection id="what-it-buys" title="A cosa serve davvero l’audit trail">
          <p>
            A tre cose, in ordine crescente di valore. Ti permette di rispondere a un ispettore:
            cosa ha detto il sistema, su quale base e chi ha agito di conseguenza. Ti permette di
            fare il debug di una regressione: una risposta che è cambiata quando non sono cambiati
            né la domanda né i documenti significa che si è mosso il modello o il template, e senza
            il record stai tirando a indovinare. E ti permette di migliorare il retrieval in modo
            onesto — l’insieme dei chunk considerati ma non citati è il dataset che ti dice dove
            l’indice è debole.
          </p>
          <p>
            Le organizzazioni che fanno questo bene trattano il record come un requisito di
            prodotto con un responsabile, non come observability. L’observability ti dice che il
            sistema è in piedi. L’audit trail ti dice cosa ha fatto.
          </p>
        </AnswerSection>
      </AnswerPageLayout>
    </>
  );
}
