import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS_IT, FONTI_IT } from "@/app/answers-it";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { BASE_URL, alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerPageLayout, AnswerSection } from "@/components/sections/AnswerPageLayout";

const answer = ANSWERS_IT["documenti-superati-rag"];
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
    about: ["Retrieval-augmented generation", "Versionamento documentale", "Documenti normativi"],
  }),
  breadcrumbSchema(URL, [
    { name: "Risorse in italiano", path: "/it" },
    { name: "Risposte", path: "/it/risposte" },
    { name: answer.question },
  ]),
];

export default function DocumentiSuperatiRisposta() {
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
            Non lo risolvi cancellando i documenti vecchi, e non lo risolvi con la sola ricerca per
            similarità — una circolare revocata resta, sul piano testuale, la corrispondenza
            migliore per una domanda sul suo argomento. L’approccio che funziona ha tre parti.
            Modellare il corpus come catene anziché come file: ogni documento appartiene a una
            linea di discendenza, ha un identificativo di versione e un intervallo di validità, e
            sa cosa ha sostituito. Filtrare il retrieval per validità al momento della query,
            rispetto alla data a cui la domanda si riferisce, non alla data in cui è stata posta. E
            mantenere indicizzate le versioni superate, ma marcate, perché &ldquo;qual era la regola
            a marzo&rdquo; è una domanda legittima in un ambiente regolato, e perché una risposta
            che non sa mostrare cosa è cambiato non è verificabile in audit.
          </p>
        }
        sources={[FONTI_IT.aiAct, FONTI_IT.aifa, FONTI_IT.garante]}
        related={[
          {
            label: "Federfarma Lombarda — la catena di versioni",
            href: "/it/case-studies/federfarma#version-chain",
            note: "come è implementata in produzione",
          },
          {
            label: "Come implementare il RAG sui dati aziendali",
            href: "/it/ricerca/rag-dati-aziendali",
          },
          {
            label: "Come si costruisce un sistema RAG con audit trail?",
            href: "/it/risposte/audit-trail-rag",
          },
          { label: "Nexus MDS Core", href: "/it/piattaforma-nexus" },
        ]}
        ctaTitle="L’attualità è un problema di architettura"
        ctaSubtitle="Se il tuo assistente non sa dire su quale versione si basava una risposta, la correzione sta nella pipeline di ingestion, non nel prompt."
      >
        <AnswerSection id="why-it-breaks" title="Perché il sistema ingenuo sbaglia">
          <p>
            Un indice vettoriale ordina per similarità semantica. Niente in questa operazione sa
            qualcosa di tempo, autorità o revoca. Chiedi di una procedura e l’indice restituisce i
            passaggi che ne parlano meglio — compresa la circolare del 2023 che quella del 2025 ha
            sostituito, spesso in posizione più alta, perché il testo più vecchio è più lungo e più
            esplicito.
          </p>
          <p>
            Il passo di generazione poi peggiora le cose invece di migliorarle: sintetizza con
            fluidità entrambi i testi, producendo una risposta che suona autorevole e fonde in
            silenzio due regimi. È questo il modo di fallire che conta nel lavoro regolato, e non è
            un’allucinazione nel senso consueto — ogni frase è fondata su un documento reale.
            Semplicemente quel documento non è più in vigore.
          </p>
        </AnswerSection>

        <AnswerSection id="the-model" title="Modellare il corpus come catene, non come file">
          <p>
            L’unità che conta non è il documento ma la{" "}
            <strong className="text-[#E6EDF3]">linea di discendenza</strong>: la sequenza di
            versioni attraverso cui è passato un obbligo. Ogni versione ha bisogno di quattro
            proprietà, e vanno stabilite in fase di ingestion, perché ricostruirle dopo a partire
            dai PDF è un tirare a indovinare:
          </p>
          <ul className="space-y-3 text-base list-none">
            {[
              ["Identificativo della linea", "Di cosa questo documento è una versione. Due documenti con titoli diversi possono appartenere alla stessa linea; due con lo stesso titolo spesso no."],
              ["Identificativo di versione", "Immutabile, e richiamato da ogni chunk derivato dal documento, così che un passaggio recuperato possa sempre indicare con esattezza la propria origine."],
              ["Intervallo di validità", "Da quando e fino a quando — dove la fine resta aperta finché un successore non la chiude. È questo che rende ‘in vigore’ calcolabile."],
              ["Relazione con il predecessore", "Sostituisce, modifica, integra o revoca. La distinzione cambia la risposta: una modifica lascia in piedi gran parte del testo precedente, una revoca no."],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-3">
                <span className="text-[#00B4D8] mt-1.5 flex-shrink-0">—</span>
                <span>
                  <strong className="text-[#E6EDF3]">{k}.</strong> {v}
                </span>
              </li>
            ))}
          </ul>
          <p>
            Dove la fonte pubblica metadati strutturati, usali. Dove non lo fa — cioè nella maggior
            parte delle pubblicazioni di settore — l’estrazione di questi quattro campi è un
            compito che vale la pena fare con una revisione umana nel ciclo, perché un errore qui si
            propaga in ogni risposta che quella linea fonderà. Nel{" "}
            <Link href="/it/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              deployment per Federfarma
            </Link>{" "}
            la catena di versioni è esplicita e visibile nella risposta, così chi legge può
            verificare l’affermazione invece di fidarsi.
          </p>
        </AnswerSection>

        <AnswerSection id="retrieval" title="Filtrare nel retrieval, non nel prompt">
          <p>
            La tentazione è recuperare tutto e istruire il modello a preferire i documenti recenti.
            Non funziona in modo affidabile e non è verificabile: l’istruzione è una richiesta, non
            un vincolo, e niente nel record mostra quali documenti erano in gioco.
          </p>
          <p>
            Il posto giusto è il filtro sui metadati nella query di retrieval stessa. Una domanda
            viene valutata rispetto a una data di riferimento — normalmente oggi, ma esplicitamente
            la data in questione quando un utente chiede del passato — e solo le versioni valide a
            quella data sono ammissibili. Le versioni superate restano nell’indice, recuperabili
            quando una domanda storica lo richiede, e marcate nel risultato così che né il modello
            né chi legge possano scambiarne una per quella vigente.
          </p>
          <p>
            In produzione contano due accorgimenti. Recuperare il successore insieme a un risultato
            superato, così che il sistema possa dire cosa lo ha sostituito invece di limitarsi a
            rifiutare. E conservare nel record la decisione di ammissibilità — una risposta che non
            sa mostrare quali versioni le era consentito vedere non è ricostruibile, qualunque altra
            cosa registri.
          </p>
        </AnswerSection>

        <AnswerSection id="presentation" title="Mostrare la catena nella risposta">
          <p>
            L’ultima parte è l’interfaccia, ed è lì che il carico si sposta davvero. Una risposta
            che cita &ldquo;Circolare 12/2025, in vigore dal 3 marzo 2025, che sostituisce la
            Circolare 7/2023&rdquo; con un link a entrambe si verifica in dieci secondi. Una
            risposta che cita un titolo e un numero di pagina chiede a chi legge di fidarsi, e in un
            ambiente regolato chi legge è quello che porta la responsabilità professionale di agire
            di conseguenza.
          </p>
          <p>
            È la differenza tra un sistema che riduce il carico di compliance e uno che si limita a
            spostarlo: l’onere di stabilire cosa è vigente sta nel sistema, e le prove sono sullo
            schermo.
          </p>
        </AnswerSection>
      </AnswerPageLayout>
    </>
  );
}
