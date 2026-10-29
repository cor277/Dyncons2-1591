import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS_IT, FONTI_IT } from "@/app/answers-it";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { BASE_URL, alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerPageLayout, AnswerSection } from "@/components/sections/AnswerPageLayout";

const answer = ANSWERS_IT["ai-privata-vs-ai-sovrana"];
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
    about: ["AI sovrana", "AI privata", "Residenza dei dati"],
  }),
  breadcrumbSchema(URL, [
    { name: "Risorse in italiano", path: "/it" },
    { name: "Risposte", path: "/it/risposte" },
    { name: answer.question },
  ]),
];

export default function AiPrivataVsSovranaRisposta() {
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
            L’AI privata è un’affermazione sulla riservatezza: chi può leggere i dati e i prompt.
            L’AI sovrana è un’affermazione sul controllo: chi decide come si comporta il sistema,
            sotto quale giurisdizione opera e se un singolo fornitore può modificarlo o ritirarlo.
            Un sistema può essere privato senza essere sovrano — un servizio gestito con solide
            garanzie di isolamento, in cui però il fornitore controlla ancora il modello, le
            condizioni e la roadmap. Può anche essere sovrano senza essere interamente on-premise,
            se i componenti che custodiscono i dati e il registro di audit sono sotto il tuo
            controllo e il resto è sostituibile. La domanda utile non è quale etichetta si applica,
            ma quale dei tre modelli di deployment descritti sotto serve davvero
            all’organizzazione.
          </p>
        }
        sources={[FONTI_IT.gdpr, FONTI_IT.aiAct]}
        related={[
          {
            label: "Nexus MDS Core",
            href: "/it/piattaforma-nexus",
            note: "la piattaforma self-hosted su cui questi modelli sono implementati",
          },
          {
            label: "Federfarma Lombarda — ibrido sovrano in produzione",
            href: "/it/case-studies/federfarma",
            note: "l’implementazione di riferimento del secondo modello",
          },
          {
            label: "Perché l’AI on-premise non è un passo indietro",
            href: "/it/ricerca/ai-on-premise",
            note: "l’argomentazione architetturale completa",
          },
          {
            label: "Fractional AI CTO",
            href: "/it/fractional-cto-milano",
            note: "dove questa decisione di solito viene presa",
          },
        ]}
        ctaTitle="Quale modello serve davvero al tuo caso?"
        ctaSubtitle="La risposta dipende dal tuo threat model e dalla tua esposizione normativa, non da una preferenza. È una conversazione da fare prima dell’acquisto, non dopo."
      >
        <AnswerSection id="two-different-claims" title="Due affermazioni diverse sullo stesso sistema">
          <p>
            &ldquo;Privato&rdquo; risponde a una domanda di riservatezza. Dice che i tuoi prompt, i
            tuoi documenti e i tuoi output non sono visibili ad altri tenant, non vengono usati per
            addestrare un modello condiviso e sono trattati sulla base di un accordo che lo
            stabilisce. È una proprietà reale e, per molti casi d’uso, basta.
          </p>
          <p>
            &ldquo;Sovrano&rdquo; risponde a una domanda di controllo, e ha tre componenti che
            vengono spesso confuse. <strong className="text-[#E6EDF3]">Giurisdizione</strong>: quale
            ordinamento può imporre l’accesso ai dati, che non sempre coincide con il paese in cui
            si trovano i server. <strong className="text-[#E6EDF3]">Controllo operativo</strong>: chi
            può cambiare il modello, i filtri o le condizioni, e con quale preavviso.{" "}
            <strong className="text-[#E6EDF3]">Sostituibilità</strong>: se un componente può essere
            sostituito senza ricostruire il sistema, ed è questo che rende le prime due esigibili
            nei fatti e non solo sul contratto.
          </p>
          <p>
            La distinzione ha un peso commerciale. Un fornitore può essere del tutto sincero sulla
            privacy e lasciarti comunque senza risposta quando il modello dietro il suo endpoint
            viene deprecato, riaddestrato o riprezzato — e in un ambiente regolato un cambiamento
            nel comportamento del modello è un cambiamento nel comportamento del tuo sistema, che
            devi essere in grado di rilevare e spiegare.
          </p>
        </AnswerSection>

        <AnswerSection id="three-models" title="I tre modelli di deployment, nominati con precisione">
          <p>
            È la tassonomia usata in tutto questo sito. Esiste perché &ldquo;sovrano&rdquo;, da
            solo, è diventato una parola di marketing, e una specifica deve essere più precisa di
            una parola.
          </p>
          <dl className="space-y-5">
            <div className="border-l-2 border-[#00B4D8] pl-5">
              <dt className="font-semibold text-[#E6EDF3] mb-1">AI completamente locale</dt>
              <dd className="text-base">
                Indicizzazione, retrieval, identità, audit e generazione girano tutti su
                infrastruttura controllata dall’organizzazione. Nulla di una risposta esce dal
                perimetro. Il costo è l’hardware e la scelta del modello: hai i modelli che riesci
                a ospitare, con il throughput che le tue GPU consentono.
              </dd>
            </div>
            <div className="border-l-2 border-[#00B4D8] pl-5">
              <dt className="font-semibold text-[#E6EDF3] mb-1">AI ibrida sovrana</dt>
              <dd className="text-base">
                Dati, retrieval, riconciliazione, identità e audit restano in locale; solo il passo
                finale di generazione chiama un endpoint di inferenza esterno, secondo policy, con
                il contesto recuperato passato all’endpoint e il registro della chiamata conservato
                in locale. Il componente è sostituibile: cambiare fornitore cambia
                un’integrazione, non l’architettura. È il modello in produzione presso Federfarma
                Lombarda.
              </dd>
            </div>
            <div className="border-l-2 border-[#00B4D8] pl-5">
              <dt className="font-semibold text-[#E6EDF3] mb-1">Inferenza privata in UE</dt>
              <dd className="text-base">
                Inferenza su infrastruttura privata o residente in UE, con condizioni di
                residenza, conservazione e accesso definite esplicitamente. Adatta quando il
                vincolo decisivo è la giurisdizione e le condizioni di trattamento, più che la
                custodia fisica dell’hardware.
              </dd>
            </div>
          </dl>
          <p>
            Dirlo in questo modo ha due conseguenze. La prima: la descrizione onesta di un sistema
            ibrido non è &ldquo;completamente on-premise&rdquo; e nemmeno &ldquo;i dati non escono
            mai dal perimetro&rdquo; — il contesto recuperato esce, e sostenere il contrario è il
            genere di affermazione che crolla durante un audit. La seconda: l’ingegneria
            interessante sta nel confine — cosa viene inviato, cosa viene rimosso prima dell’invio
            e cosa viene registrato dello scambio.
          </p>
        </AnswerSection>

        <AnswerSection id="how-to-choose" title="Come scegliere tra i tre">
          <p>Decidono cinque criteri, più o meno in quest’ordine:</p>
          <ul className="space-y-3 text-base list-none">
            {[
              ["Classe dei dati", "Le categorie particolari di dati personali ai sensi del GDPR, o dati la cui divulgazione è già di per sé l’incidente, spingono verso l’AI completamente locale — o verso un’architettura in cui quella classe di dati non arriva mai al passo di generazione."],
              ["Threat model", "Da chi ti stai davvero difendendo: un altro tenant, un attaccante opportunista, il personale stesso del fornitore o un procedimento giudiziario straniero? L’ultimo è una questione di giurisdizione, e nessuna cifratura dei dati a riposo gli dà risposta."],
              ["Esposizione normativa", "Cosa dovrai dimostrare, a chi e quanto tempo dopo i fatti. È questo a determinare la superficie di audit, che di solito è un vincolo più forte della topologia di inferenza."],
              ["Capacità richiesta", "Se il compito richiede davvero un modello di frontiera, un deployment completamente locale è la decisione di accettare meno capacità. A volte è la scelta giusta; deve essere una decisione, non una scoperta."],
              ["Costo totale e realtà operativa", "GPU, energia, ridondanza e le persone per gestirle. Un’architettura che nessuno sa far funzionare alle 3 di notte non è sovrana: è indisponibile."],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-3">
                <span className="text-[#00B4D8] mt-1.5 flex-shrink-0">—</span>
                <span>
                  <strong className="text-[#E6EDF3]">{k}.</strong> {v}
                </span>
              </li>
            ))}
          </ul>
        </AnswerSection>

        <AnswerSection id="claims-to-distrust" title="Affermazioni da verificare prima di fidarsi">
          <p>
            <strong className="text-[#E6EDF3]">&ldquo;Cloud sovrano.&rdquo;</strong> Chiedi quale
            delle tre componenti viene rivendicata. La sola localizzazione del datacenter è la più
            debole, ed è quella che si intende più spesso.
          </p>
          <p>
            <strong className="text-[#E6EDF3]">&ldquo;I tuoi dati non escono mai.&rdquo;</strong>{" "}
            Chiedi cosa si intende per dati. Prompt, contesto recuperato, telemetria, payload di
            errore e snapshot per il supporto sono tutti usciti da sistemi descritti esattamente
            così.
          </p>
          <p>
            <strong className="text-[#E6EDF3]">&ldquo;Conforme al GDPR by design.&rdquo;</strong>{" "}
            La conformità è una proprietà di un trattamento nel suo contesto organizzativo, non un
            attributo di prodotto che un fornitore possa conferire. Quello che un’architettura può
            fare è portare i controlli — minimizzazione in fase di ingestion, limiti di
            conservazione, separazione degli accessi, un registro di audit — e lasciare che il
            titolare dimostri il resto. Questa distinzione è tutto il lavoro della{" "}
            <Link
              href="/it/consulenza-ai-governance-compliance"
              className="text-[#00B4D8] hover:text-[#E6EDF3]"
            >
              consulenza su governance e compliance
            </Link>
            .
          </p>
        </AnswerSection>
      </AnswerPageLayout>
    </>
  );
}
