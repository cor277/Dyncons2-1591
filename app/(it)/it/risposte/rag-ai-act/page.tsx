import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS_IT, FONTI_IT } from "@/app/answers-it";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { BASE_URL, alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerPageLayout, AnswerSection } from "@/components/sections/AnswerPageLayout";

const answer = ANSWERS_IT["rag-ai-act"];
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
    about: ["AI Act", "Retrieval-augmented generation", "AI governance"],
  }),
  breadcrumbSchema(URL, [
    { name: "Risorse in italiano", path: "/it" },
    { name: "Risposte", path: "/it/risposte" },
    { name: answer.question },
  ]),
];

export default function RagAiActRisposta() {
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
            L’AI Act non regola le tecniche, quindi non esiste una norma sulla retrieval-augmented
            generation in quanto tale. Regola i sistemi di AI in base alla finalità prevista e al
            ruolo che hai rispetto a essi. Nel caso ordinario, un assistente RAG è un sistema di AI
            ai sensi del Regolamento (UE) 2024/1689; ciò che cambia è la classe di rischio, che
            discende dall’uso che se ne fa, e gli obblighi, che discendono dall’essere fornitore o
            deployer del sistema. La maggior parte delle organizzazioni che costruiscono un
            assistente RAG interno su un modello di terzi è deployer di un sistema di cui è anche
            fornitore — perché l’ha costruito — e usa un modello per finalità generali il cui
            fornitore è qualcun altro. Mettere nero su bianco questi ruoli, correttamente, è il
            primo lavoro da fare.
          </p>
        }
        sources={[FONTI_IT.aiAct, FONTI_IT.gdpr, FONTI_IT.pld]}
        related={[
          {
            label: "Consulenza AI, governance e compliance",
            href: "/it/consulenza-ai-governance-compliance",
            note: "l’incarico che risponde a questa domanda per un sistema specifico",
          },
          {
            label: "Governare gli output dell’AI nei settori regolamentati",
            href: "/it/ricerca/governare-output-ai",
            note: "il playbook tecnico dietro i controlli citati qui",
          },
          {
            label: "Come si costruisce un sistema RAG con audit trail?",
            href: "/it/risposte/audit-trail-rag",
          },
          {
            label: "Assessment di esposizione",
            href: "/it/assessment",
            note: "incarico a perimetro fisso su dove si ferma la responsabilità del fornitore",
          },
        ]}
        ctaTitle="La classificazione è una decisione che qualcuno deve firmare"
        ctaSubtitle="L’assessment stabilisce cos’è il tuo sistema, nei termini usati dal regolamento, e cosa l’architettura deve essere in grado di dimostrare."
      >
        <AnswerSection id="what-the-act-regulates" title="A cosa si aggancia davvero l’AI Act">
          <p>
            Tre punti di aggancio decidono quasi ogni questione pratica. Il primo è se ciò che hai
            è un <strong className="text-[#E6EDF3]">sistema di AI</strong> secondo la definizione
            del Regolamento — un sistema automatizzato che deduce, dall’input ricevuto, come
            generare output quali previsioni, contenuti o raccomandazioni. Una pipeline di
            retrieval il cui ultimo passo è un modello linguistico che produce testo rientra in
            quella definizione senza molte discussioni.
          </p>
          <p>
            Il secondo è la <strong className="text-[#E6EDF3]">finalità prevista</strong>. Gli
            obblighi più pesanti sono riservati agli usi elencati come ad alto rischio, e questi
            sono descritti da ciò che il sistema decide sulle persone — accesso al lavoro, merito
            creditizio, servizi essenziali e simili — oppure dal suo ruolo di componente di
            sicurezza in un prodotto regolamentato. Un assistente che risponde a &ldquo;quale
            versione di questa circolare è in vigore&rdquo; per un professionista che poi decide è
            un oggetto molto diverso da uno che assegna un punteggio a un candidato, anche se il
            codice è quasi identico.
          </p>
          <p>
            Il terzo è il <strong className="text-[#E6EDF3]">ruolo</strong>. Fornitore e deployer
            hanno obblighi diversi, e spesso un’organizzazione li ricopre entrambi
            contemporaneamente: fornitore dell’assistente che ha costruito, deployer dello stesso
            assistente nella propria operatività e, a monte, cliente di un fornitore di modelli per
            finalità generali. I ruoli possono anche cambiare — mettere il proprio nome su un
            sistema, o modificarne la finalità prevista, può renderti il suo fornitore.
          </p>
        </AnswerSection>

        <AnswerSection id="what-changes-in-practice" title="Cosa cambia in fase di sviluppo">
          <p>
            Nel caso non ad alto rischio, che riguarda la maggior parte degli assistenti interni
            sulla conoscenza aziendale, i requisiti pratici sono più leggeri di quanto il dibattito
            lasci intendere, ma non sono zero. Gli obblighi di trasparenza si applicano quando le
            persone interagiscono con un sistema di AI o quando vengono generati contenuti — un
            utente non deve doverlo indovinare. Le aspettative di alfabetizzazione in materia di AI
            si applicano a chi lo gestisce. E nulla nell’AI Act sostituisce il GDPR: se nell’indice
            ci sono dati personali, si tratta di un trattamento con una base giuridica, un periodo
            di conservazione e un interessato che ha diritti su quei dati.
          </p>
          <p>
            Nel caso ad alto rischio, l’architettura è il lavoro di conformità. Gestione del
            rischio, governance dei dati di addestramento e di input, documentazione tecnica,
            registrazione degli eventi, sorveglianza umana e monitoraggio successivo
            all’immissione sul mercato sono tutte proprietà che un sistema o possiede per
            costruzione o non possiede affatto. Aggiungere a posteriori un log di audit a un
            sistema che non è stato costruito per tenerne uno significa, nei fatti, ricostruirlo —
            ed è per questo che la domanda sulla classificazione va posta all’inizio di un progetto
            e non alla fine.
          </p>
        </AnswerSection>

        <AnswerSection id="rag-specific" title="Gli aspetti specifici del RAG">
          <p>
            Il retrieval sposta il punto in cui sta il rischio. Un modello che allucina è un
            problema noto; un livello di retrieval che restituisce con sicurezza un documento
            superato è un problema peggiore, perché l’output è ben formato, ha le sue fonti ed è
            sbagliato in un modo che sembra giusto. I sistemi in ambienti regolati devono quindi
            saper dire non solo cosa hanno risposto, ma{" "}
            <Link
              href="/it/risposte/documenti-superati-rag"
              className="text-[#00B4D8] hover:text-[#E6EDF3]"
            >
              su quale versione di quale documento si basava la risposta
            </Link>
            , e se quella versione era in vigore alla data della domanda.
          </p>
          <p>
            Il secondo aspetto specifico del RAG è l’indice stesso. Qualunque sia la
            classificazione, un indice costruito su documenti che nessuno ha filtrato è un
            problema di protezione dei dati prima ancora di essere un problema di AI. Il controllo
            più economico di tutto questo campo è escludere i dati personali in fase di ingestion,
            invece di cercare di sopprimerli al momento della risposta — è la scelta di progetto
            alla base del{" "}
            <Link href="/it/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              deployment per Federfarma
            </Link>
            , dove i dati personali non vengono mai indicizzati.
          </p>
          <p>
            Il terzo è la sostituzione del modello. Se il passo di generazione è un endpoint
            esterno, un cambio del modello dietro di esso cambia il comportamento del tuo sistema.
            Qualunque sia la tua classificazione, devi sapere quale modello ha risposto, quando e
            con quale configurazione — un requisito architetturale ben prima che normativo.
          </p>
        </AnswerSection>

        <AnswerSection id="what-we-do-not-say" title="Cosa questa pagina non afferma">
          <p>
            Non ti dice qual è la tua classificazione. Dipende dalla finalità prevista che dichiari
            effettivamente, dal settore in cui operi, dal contesto di deployment e, per alcuni
            settori, dalla normativa di prodotto che si affianca all’AI Act. Si stabilisce con le
            procedure previste dal Regolamento, non con il parere di un consulente e non con una
            topologia di deployment.
          </p>
          <p>
            Una cosa va detta chiaramente: nessuno può certificare la tua conformità in una frase,
            e un fornitore che si offre di farlo ti sta dicendo qualcosa su di sé. Il deliverable
            che ha valore è una dichiarazione firmata di cosa hai, cosa ti manca e in quale ordine
            colmare il divario — con l’architettura descritta con una precisione sufficiente
            perché i tuoi legali possano lavorarci.
          </p>
        </AnswerSection>
      </AnswerPageLayout>
    </>
  );
}
