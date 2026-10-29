import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS_IT, FONTI_IT } from "@/app/answers-it";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { BASE_URL, alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerPageLayout, AnswerSection } from "@/components/sections/AnswerPageLayout";

const answer = ANSWERS_IT["llm-on-premise-ospedale"];
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
    about: ["LLM on-premise", "AI in sanità", "Protezione dei dati"],
  }),
  breadcrumbSchema(URL, [
    { name: "Risorse in italiano", path: "/it" },
    { name: "Risposte", path: "/it/risposte" },
    { name: answer.question },
  ]),
];

export default function LlmOspedaleRisposta() {
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
            Parti da un caso d’uso documentale e non clinico — procedure interne, circolari
            normative, acquisti, corrispondenza amministrativa — perché porta valore in poche
            settimane e tiene il primo deployment fuori sia dal territorio dei dispositivi medici
            sia dai dati a rischio più alto. Costruiscilo come retrieval su un corpus curato con un
            modello self-hosted, non come un chatbot sulla cartella clinica. Escludi i dati
            personali e sanitari in fase di ingestion invece di filtrarli al momento della
            risposta. Metti identità, retrieval, audit e conservazione dentro il perimetro
            dell’ospedale dal primo giorno, perché sono le parti che non si possono aggiungere a
            posteriori. Poi, e solo poi, valuta se un caso d’uso clinico valga il percorso
            normativo che richiede.
          </p>
        }
        sources={[FONTI_IT.gdpr, FONTI_IT.aiAct, FONTI_IT.mdr, FONTI_IT.nis2]}
        related={[
          {
            label: "AI on-premise per la sanità italiana",
            href: "/it/ai-sanitaria-on-premise",
            note: "l’argomentazione completa, con l’architettura e il contesto normativo italiano",
          },
          {
            label: "Federfarma Lombarda — un assistente documentale in produzione",
            href: "/it/case-studies/federfarma",
          },
          { label: "Nexus MDS Core", href: "/it/piattaforma-nexus" },
        ]}
        ctaTitle="Il primo deployment decide il secondo"
        ctaSubtitle="Un assistente documentale ben delimitato diventa la piattaforma per tutto ciò che viene dopo. Uno che non lo è diventa il motivo per cui il progetto successivo viene respinto."
      >
        <AnswerSection id="sequence" title="La sequenza: cosa costruire per primo">
          <p>
            Il modo in cui falliscono i progetti di AI in ospedale non è tecnico. È partire dal
            caso che entusiasma la direzione sanitaria, scoprire che sotto ci sono diciotto mesi di
            lavoro di governance e perdere il budget prima che qualcosa arrivi in reparto.
          </p>
          <p>
            La sequenza che funziona parte da dove i documenti sono densi, gli errori sono visibili
            e i dati non sono sanitari: protocolli e procedure interne, circolari regionali e
            nazionali, gare e regole di acquisto, documentazione per l’accreditamento, policy
            amministrative e del personale. Sono corpus grandi, difficili da consultare, superati
            di continuo, e costano ogni settimana tempo reale del personale. Un assistente di
            retrieval su questi documenti si ripaga e, soprattutto, costruisce la piattaforma —
            identità, ingestion, audit, conservazione, operatività — che un caso d’uso clinico
            dovrebbe altrimenti costruire da zero.
          </p>
          <p>
            Per lo stesso motivo il deployment di riferimento su questo sito è un{" "}
            <Link href="/it/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              assistente normativo per le farmacie
            </Link>{" "}
            e non uno strumento clinico: l’attualità documentale è un problema reale e costoso, e
            si può risolvere senza toccare una cartella clinica.
          </p>
        </AnswerSection>

        <AnswerSection id="data-boundary" title="Il perimetro dei dati, deciso in fase di ingestion">
          <p>
            I dati sanitari sono categorie particolari di dati ai sensi del GDPR, e il modo più
            economico di gestire questo obbligo è tenerli del tutto fuori dall’indice. L’esclusione
            in fase di ingestion è più forte della soppressione al momento della risposta sotto
            ogni aspetto che conta: è verificabile, resiste a una prompt injection, non lascia
            nulla da cancellare ed è molto più facile da spiegare a un DPO di un filtro che
            funziona quasi sempre.
          </p>
          <p>
            Dove un caso d’uso richiede davvero dati dei pazienti, trattalo come un sistema
            diverso, con una base giuridica diversa, una policy di conservazione diversa e un
            percorso di approvazione diverso — non come un’estensione del perimetro di quello
            esistente. Il confine architetturale deve coincidere con quello giuridico, altrimenti il
            primo si eroderà fino a non sostenere più il secondo.
          </p>
          <p>
            Due domande decidono il resto: i dati personali arrivano mai al passo di generazione, e
            escono mai dal perimetro? In un{" "}
            <Link
              href="/it/risposte/ai-privata-vs-ai-sovrana"
              className="text-[#00B4D8] hover:text-[#E6EDF3]"
            >
              deployment ibrido sovrano
            </Link>{" "}
            la risposta onesta alla seconda è che il contesto recuperato esce, ed è esattamente per
            questo che la risposta alla prima deve essere no.
          </p>
        </AnswerSection>

        <AnswerSection id="stack" title="Cosa deve includere lo stack">
          <p>
            Un deployment ospedaliero non è un modello con davanti una pagina web. I componenti che
            decidono se sopravvive al primo audit sono quelli meno appariscenti:
          </p>
          <ul className="space-y-3 text-base list-none">
            {[
              ["Identità e accessi", "Integrazione con la directory dell’ospedale, separazione dei ruoli che rispecchia quella tra ambito clinico e amministrativo, e privilegio minimo applicato al retrieval — non solo nell’interfaccia."],
              ["Ingestion curata", "Una pipeline che conosce la linea di discendenza dei documenti, le versioni e gli intervalli di validità, così che le risposte possano dire cosa è in vigore. I corpus normativi vengono superati di continuo, e la ricerca per similarità non ha opinioni in merito."],
              ["Audit e ricostruibilità", "Un registro a prova di manomissione di domanda, insieme recuperato, versioni, modello ed esito, con un periodo di conservazione di cui qualcuno è responsabile."],
              ["Supervisione umana", "Approval gate espliciti ovunque un output abbia conseguenze, con l’approvatore registrato. È un requisito del workflow, non un disclaimer a piè di pagina."],
              ["Operatività", "Backup, monitoraggio, pianificazione della capacità GPU e una reperibilità con un nome. Un sistema indisponibile in un ambiente che lavora 24 ore su 24 è un rischio clinico a sé."],
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
            Sull’hardware, la correzione utile è che un assistente documentale non ha bisogno di un
            cluster da laboratorio di ricerca. I deployment in produzione di questo tipo girano su
            una capacità GPU contenuta, perché la parte costosa è la qualità del retrieval, non il
            numero di parametri &mdash; il{" "}
            <Link href="/it/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              sistema Federfarma
            </Link>{" "}
            fa girare il modello locale, il filtro privacy e gli embedding su una singola GPU da
            8 GB servendo oltre mille farmacie. Dimensiona l’hardware dopo il design del retrieval,
            non prima.
          </p>
        </AnswerSection>

        <AnswerSection id="regulatory" title="Dove passa la linea normativa">
          <p>
            Due regimi decidono quanto diventa pesante il progetto. Un software destinato a
            diagnosi, prevenzione, monitoraggio, previsione o trattamento può qualificarsi come{" "}
            <strong className="text-[#E6EDF3]">dispositivo medico</strong> ai sensi del Regolamento
            (UE) 2017/745, con il percorso di valutazione della conformità che ne consegue.
            Separatamente, l’AI Act collega gli obblighi alla finalità prevista e al ruolo, e un
            sistema che è componente di sicurezza di un prodotto regolamentato rientra nella sua
            classe più esigente.
          </p>
          <p>
            Un assistente documentale usato dal personale per trovare e interpretare testi
            amministrativi e normativi è un oggetto diverso da uno strumento che propone una
            diagnosi, e la distinzione dipende dalla finalità prevista, sia dichiarata sia
            effettiva. Il che significa che l’allargamento del perimetro è un evento normativo: nel
            momento in cui un &ldquo;assistente per le procedure&rdquo; comincia a rispondere a
            domande cliniche, la discussione sulla classificazione va riaperta. Il confine va
            costruito nel sistema, non nel materiale di formazione.
          </p>
          <p>
            Gli ospedali italiani hanno un livello in più &mdash; la normativa nazionale
            sull’AI e le regole di settore sull’uso secondario dei dati sanitari &mdash; di cui si
            parla nell’
            <Link href="/it/ricerca/legge-132-2025" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              analisi della Legge 132/2025
            </Link>
            . E per le organizzazioni nell’ambito di NIS2, una piattaforma di AI fa parte della
            postura di sicurezza e degli obblighi di notifica degli incidenti dell’ente stesso, non
            è un progetto che corre in parallelo.
          </p>
        </AnswerSection>
      </AnswerPageLayout>
    </>
  );
}
