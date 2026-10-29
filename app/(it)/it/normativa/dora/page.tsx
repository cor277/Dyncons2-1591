import Link from "next/link";
import { normaMetadata } from "@/app/normativa";
import {
  NormaPageLayout,
  NormaSection,
  NormaTable,
  type NormaFaq,
} from "@/components/sections/NormaPageLayout";

/*
 * DORA. Facts checked on 29 October 2026 against the Italian text of
 * Regulation (EU) 2022/2554 (OJ L 333, 27.12.2022), D.Lgs. 23/2025 as published
 * in GU n. 58 of 11 March 2025, and the ESA press release of 31 July 2026.
 * Dates and status come from app/normativa.ts. Incident reporting deadlines
 * are set by the technical standards under art. 20, not by the regulation:
 * they are deliberately not stated here.
 */

const SLUG = "dora";

export const metadata = normaMetadata(SLUG, {
  title: "DORA (Reg. (UE) 2022/2554): rischio ICT, incidenti, test e fornitori nel settore finanziario",
  description:
    "Cosa chiede DORA a banche, assicurazioni e altre entità finanziarie, e ai loro fornitori ICT: gestione del rischio, gravi incidenti, test di resilienza, registro delle informazioni, fornitori critici, autorità italiane e AI di frontiera. Aggiornato al 29 ottobre 2026.",
  keywords: [
    "DORA",
    "Regolamento (UE) 2022/2554",
    "Digital Operational Resilience Act",
    "D.Lgs. 23/2025",
    "registro delle informazioni",
    "fornitori terzi di servizi TIC",
    "TLPT",
    "DORA AI",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "A chi si applica DORA?",
    a: "Il Regolamento (UE) 2022/2554 si applica dal 17 gennaio 2025 alle entità finanziarie elencate all’art. 2: fra le altre enti creditizi, istituti di pagamento e di moneta elettronica, imprese di investimento, fornitori di servizi per le cripto-attività, sedi di negoziazione, gestori di fondi, imprese di assicurazione e riassicurazione, intermediari assicurativi, enti pensionistici aziendali o professionali, fornitori di servizi di crowdfunding. Si applica anche ai fornitori terzi di servizi TIC, per la parte che li riguarda. Restano esclusi, fra gli altri, gli intermediari assicurativi che sono micro, piccole o medie imprese.",
  },
  {
    q: "Chi vigila su DORA in Italia?",
    a: "Il D.Lgs. 10 marzo 2025, n. 23 designa come autorità competenti Banca d’Italia, CONSOB, IVASS e COVIP, ciascuna per i soggetti che vigila. Le stesse autorità ricevono le segnalazioni dei gravi incidenti TIC; le entità del settore bancario e delle infrastrutture dei mercati finanziari che rientrano nella NIS2 inviano la notifica iniziale e le relazioni anche a CSIRT Italia.",
  },
  {
    q: "Cos’è il registro delle informazioni?",
    a: "È l’elenco, tenuto a livello di singola entità e su base subconsolidata e consolidata, di tutti gli accordi contrattuali per l’uso di servizi TIC prestati da fornitori terzi, distinguendo quelli che supportano funzioni essenziali o importanti (art. 28, par. 3). Almeno una volta l’anno l’entità comunica all’autorità il numero dei nuovi accordi, le categorie di fornitori, il tipo di accordi e i servizi forniti; su richiesta mette a disposizione il registro completo.",
  },
  {
    q: "Un fornitore di AI deve rispettare DORA?",
    a: "Un fornitore di servizi TIC non è un’entità finanziaria, ma DORA lo raggiunge attraverso il contratto: l’art. 30 impone contenuti minimi, come la descrizione dei servizi, i luoghi in cui sono trattati i dati, l’assistenza in caso di incidente e la cooperazione con le autorità; per i servizi che supportano funzioni essenziali o importanti si aggiungono livelli di servizio misurabili, piani di emergenza testati e la partecipazione ai test di penetrazione. Se è designato fornitore terzo critico, è soggetto alla sorveglianza diretta delle autorità europee.",
  },
  {
    q: "Cosa hanno detto le autorità europee sui modelli di AI di frontiera?",
    a: "Il 31 luglio 2026 EBA, EIOPA ed ESMA hanno pubblicato una dichiarazione congiunta che chiede alle entità finanziarie governance e gestione del rischio solide per prevenire, rilevare e gestire i rischi informatici legati ai modelli di AI di frontiera, e alle autorità di vigilanza un approccio coerente. Non introduce un regime nuovo: colloca questi rischi dentro gli strumenti che DORA prevede già, compresa la sorveglianza sui fornitori terzi critici.",
  },
];

export default function DoraPage() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "D.Lgs. 10 marzo 2025, n. 23 — Gazzetta Ufficiale n. 58 dell’11 marzo 2025",
          url: "https://www.gazzettaufficiale.it/gazzetta/serie_generale/caricaDettaglio/home?dataPubblicazioneGazzetta=2025-03-11&numeroGazzetta=58",
          note: "adeguamento nazionale a DORA: autorità competenti (art. 3) e segnalazione dei gravi incidenti TIC (art. 4)",
        },
        {
          label: "EBA, EIOPA ed ESMA — dichiarazione congiunta del 31 luglio 2026 sui rischi ICT dei modelli di AI di frontiera",
          url: "https://www.eba.europa.eu/publications-and-media/press-releases/eba-eiopa-and-esma-call-enhanced-governance-and-consistent-supervision-mitigate-ict-risks-frontier",
          note: "comunicato stampa delle autorità europee di vigilanza",
        },
        {
          label: "D.Lgs. 7 ottobre 2026, n. 179",
          url: "https://www.normattiva.it/eli/id/2026/10/08/26G00200/ORIGINAL",
          note: "Banca d’Italia, CONSOB e IVASS vigilano sui sistemi AI ad alto rischio negli istituti finanziari",
        },
      ]}
      approfondimenti={[
        {
          label: "Agenti AI nel settore finanziario",
          href: "/it/ai-agenti-finanziari",
          note: "come si progetta un agente AI quando il committente è un’entità vigilata",
        },
        {
          label: "Come valutare un fornitore AI in un settore regolato",
          href: "/it/risposte/valutare-fornitore-ai-settori-regolati",
          note: "le domande da fare al fornitore prima di metterlo nel registro delle informazioni",
        },
        {
          label: "Assessment di esposizione",
          href: "/it/assessment",
          note: "incarico a perimetro fisso: quali regimi si applicano e cosa va dimostrato",
        },
        {
          label: "Sovranità digitale: non uno slogan, un’architettura",
          href: "https://www.linkedin.com/pulse/sovranit%C3%A0-digitale-non-uno-slogan-unarchitettura-corrado-patierno-5emrf/",
          note: "le tre sovranità: residenza, giurisdizione, continuità",
          linkedin: true,
        },
      ]}
      ctaTitle="Un fornitore di AI è un fornitore ICT, con tutto quello che ne segue"
      ctaSubtitle="L’assessment di esposizione stabilisce come un sistema AI entra nel tuo quadro DORA e nell’AI Act, e cosa contratto e architettura devono poter dimostrare all’autorità."
    >
      <NormaSection id="a-chi-si-applica" title="A chi si applica">
        <p>
          DORA si applica dal 17 gennaio 2025 alle <strong className="text-[#E6EDF3]">entità
          finanziarie</strong> elencate all’art. 2: enti creditizi, istituti di pagamento e di
          moneta elettronica, prestatori di servizi di informazione sui conti, imprese di
          investimento, fornitori di servizi per le cripto-attività, depositari centrali,
          controparti centrali, sedi di negoziazione, gestori di fondi di investimento alternativi
          e società di gestione, imprese di assicurazione e riassicurazione, intermediari
          assicurativi, enti pensionistici aziendali o professionali, agenzie di rating,
          amministratori di indici critici, fornitori di servizi di crowdfunding e altri.
        </p>
        <p>
          Il regolamento cita fra i destinatari anche i{" "}
          <strong className="text-[#E6EDF3]">fornitori terzi di servizi TIC</strong>. Quasi
          sempre li raggiunge attraverso le entità finanziarie, che devono gestire il rischio dei
          fornitori e scrivere contratti con contenuti minimi; i fornitori designati come critici
          sono invece vigilati direttamente.
        </p>
        <p>
          È un regolamento: si applica direttamente. Il D.Lgs. 10 marzo 2025, n. 23 ha adeguato
          l’ordinamento italiano, designando come autorità competenti{" "}
          <strong className="text-[#E6EDF3]">Banca d’Italia, CONSOB, IVASS e COVIP</strong>, ciascuna
          per i soggetti che vigila. Alcune entità, come le imprese di investimento piccole e non
          interconnesse, gli istituti di pagamento esentati e i piccoli enti pensionistici,
          seguono un quadro semplificato (art. 16).
        </p>
      </NormaSection>

      <NormaSection id="cosa-chiede" title="Cosa chiede">
        <p>
          DORA chiede resilienza operativa digitale in cinque blocchi, e la responsabilità di
          tutti è dell’<strong className="text-[#E6EDF3]">organo di gestione</strong>: definisce,
          approva e sorveglia il quadro di gestione dei rischi informatici, ne ha la
          responsabilità finale, approva la strategia di resilienza e la politica sui fornitori
          TIC, assegna le risorse (art. 5).
        </p>
        <NormaTable caption="I cinque blocchi di DORA, per articolo">
          <thead>
            <tr>
              <th scope="col">Articoli</th>
              <th scope="col">Cosa chiede</th>
              <th scope="col">A chi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">5–16</th>
              <td>
                Quadro per la gestione dei rischi informatici solido e documentato: strategie,
                politiche, procedure e strumenti per proteggere patrimoni informativi e risorse TIC;
                continuità operativa, risposta e ripristino
              </td>
              <td>Entità finanziarie (quadro semplificato per alcune, art. 16)</td>
            </tr>
            <tr>
              <th scope="row">17–23</th>
              <td>
                Gestione, classificazione e segnalazione dei gravi incidenti TIC all’autorità
                competente: notifica iniziale, relazione intermedia, relazione finale; notifica
                volontaria delle minacce informatiche significative
              </td>
              <td>Entità finanziarie</td>
            </tr>
            <tr>
              <th scope="row">24–27</th>
              <td>
                Programma di test di resilienza operativa digitale; per le entità identificate,
                test di penetrazione guidati dalla minaccia (TLPT) almeno ogni tre anni sui sistemi
                di produzione
              </td>
              <td>Entità finanziarie; TLPT solo per quelle identificate</td>
            </tr>
            <tr>
              <th scope="row">28–30</th>
              <td>
                Gestione del rischio informatico derivante da terzi: registro delle informazioni,
                strategie di uscita, contenuti minimi dei contratti
              </td>
              <td>Entità finanziarie, e di riflesso i fornitori TIC</td>
            </tr>
            <tr>
              <th scope="row">31–44</th>
              <td>
                Designazione dei fornitori terzi critici di servizi TIC e loro sorveglianza da
                parte di un’autorità europea capofila
              </td>
              <td>Autorità europee di vigilanza; fornitori critici</td>
            </tr>
            <tr>
              <th scope="row">45</th>
              <td>Accordi di condivisione delle informazioni sulle minacce informatiche</td>
              <td>Entità finanziarie, su base volontaria</td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          Gli incidenti seguono un percorso proprio. In Italia le segnalazioni vanno all’autorità
          competente per categoria di soggetto (art. 4 D.Lgs. 23/2025): Banca d’Italia per banche,
          istituti di pagamento e di moneta elettronica, imprese di investimento e altri; CONSOB per
          depositari centrali e sedi di negoziazione; IVASS per assicurazioni e intermediari
          assicurativi; COVIP per gli enti pensionistici. I termini di invio sono fissati dalle
          norme tecniche previste dall’art. 20. Chi esternalizza la segnalazione resta
          pienamente responsabile (art. 19, par. 5).
        </p>
      </NormaSection>

      <NormaSection id="terze-parti" title="Fornitori ICT: registro, contratti e fornitori critici">
        <p>
          Il rischio dei fornitori ICT è parte del rischio informatico dell’entità finanziaria, non
          un tema di acquisti (art. 28). L’entità tiene un{" "}
          <strong className="text-[#E6EDF3]">registro delle informazioni</strong> su tutti gli
          accordi per servizi TIC di terzi, distinguendo quelli che supportano funzioni essenziali o
          importanti; ogni anno comunica all’autorità numero e tipo dei nuovi accordi e categorie
          dei fornitori. Per i servizi a supporto di funzioni essenziali o importanti predispone{" "}
          <strong className="text-[#E6EDF3]">strategie di uscita</strong> che le permettano di
          chiudere il rapporto senza perturbare l’attività né la conformità (art. 28, par. 8).
        </p>
        <p>L’art. 30 fissa cosa deve contenere almeno ogni contratto per servizi TIC:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            descrizione completa delle funzioni e dei servizi, con le condizioni dell’eventuale
            subappalto;
          </li>
          <li>
            le regioni o i paesi in cui si prestano i servizi e si trattano e conservano i dati,
            con l’obbligo per il fornitore di avvisare prima di cambiarli;
          </li>
          <li>
            garanzie di accesso, ripristino e restituzione dei dati in caso di insolvenza o
            risoluzione;
          </li>
          <li>
            assistenza in caso di incidente senza costi aggiuntivi o a costo prestabilito,
            cooperazione con le autorità, diritti di risoluzione e preavviso.
          </li>
        </ul>
        <p>
          Per le funzioni essenziali o importanti si aggiungono livelli di servizio con obiettivi
          quantitativi e qualitativi, obblighi di preavviso, piani di emergenza attuati e testati
          dal fornitore e la sua partecipazione ai TLPT. Infine le autorità europee di vigilanza
          (EBA, EIOPA, ESMA), tramite il comitato congiunto, designano i{" "}
          <strong className="text-[#E6EDF3]">fornitori terzi critici di servizi TIC</strong> e
          nominano per ciascuno un’autorità di sorveglianza capofila (art. 31).
        </p>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <p>
          <strong className="text-[#E6EDF3]">Un modello o un servizio di AI usato da una banca è
          un servizio TIC.</strong> Entra nel quadro di gestione dei rischi informatici, nel
          registro delle informazioni e, se supporta una funzione essenziale o importante, nei
          contratti con i contenuti rafforzati dell’art. 30 e nelle strategie di uscita. Dove
          girano il modello e i dati, e con quale preavviso possono cambiare, è una clausola
          obbligatoria, non un dettaglio tecnico.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">I modelli di frontiera sono già dentro DORA.</strong>{" "}
          Con la dichiarazione congiunta del 31 luglio 2026 EBA, EIOPA ed ESMA hanno chiesto alle
          entità finanziarie governance e gestione del rischio solide per prevenire, rilevare e
          gestire i rischi informatici legati ai modelli di AI di frontiera, e alle autorità di
          vigilanza un approccio coerente. Non c’è un regime nuovo: i rischi dei modelli di
          frontiera si governano con gli strumenti DORA che ci sono.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Le stesse autorità vigilano anche sull’AI
          Act.</strong> Con il{" "}
          <Link href="/it/normativa/dlgs-179-2026" className="text-[#00B4D8] hover:text-[#E6EDF3]">
            D.Lgs. 179/2026
          </Link>{" "}
          Banca d’Italia, CONSOB e IVASS sono autorità di vigilanza del mercato per i sistemi AI ad
          alto rischio usati dagli istituti finanziari, e ABF, ACF e IVASS sono competenti per i
          reclami. Un sistema di merito creditizio o di tariffazione vita e salute risponde quindi
          a DORA come servizio TIC e all’
          <Link href="/it/normativa/ai-act" className="text-[#00B4D8] hover:text-[#E6EDF3]">AI Act</Link>{" "}
          come sistema ad alto rischio, davanti allo stesso supervisore.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">La continuità è un requisito.</strong> Una strategia
          di uscita credibile da un fornitore di AI presuppone di poter sostituire il modello senza
          riscrivere il sistema: è una scelta di architettura da fare prima, non una clausola da
          aggiungere dopo.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <p>
          DORA è la norma di settore per la resilienza digitale della finanza; si incastra con le
          norme orizzontali:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/nis2" className="text-[#00B4D8] hover:text-[#E6EDF3]">NIS2</Link>{" "}
            — DORA è lex specialis rispetto alla direttiva NIS2: dove impone misure e notifiche di
            effetto almeno equivalente, le corrispondenti disposizioni della NIS2 non si applicano.
            In Italia banche e infrastrutture dei mercati finanziari inviano comunque a CSIRT Italia
            anche le segnalazioni dei gravi incidenti TIC.
          </li>
          <li>
            <Link href="/it/normativa/ai-act" className="text-[#00B4D8] hover:text-[#E6EDF3]">AI Act</Link>{" "}
            — merito creditizio e assicurazioni vita e salute sono usi ad alto rischio
            dell’Allegato III, con obblighi dal 2 dicembre 2027.
          </li>
          <li>
            <Link href="/it/normativa/dlgs-179-2026" className="text-[#00B4D8] hover:text-[#E6EDF3]">D.Lgs. 179/2026</Link>{" "}
            — autorità finanziarie come vigilanza AI, reclami ad ABF, ACF e IVASS.
          </li>
          <li>
            <Link href="/it/normativa/gdpr" className="text-[#00B4D8] hover:text-[#E6EDF3]">GDPR</Link>{" "}
            — un grave incidente TIC che coinvolge dati personali è anche una possibile violazione
            da notificare al Garante.
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#E6EDF3]">«DORA riguarda la banca, non il fornitore».</strong>{" "}
            Il fornitore ICT riceve gli obblighi tramite il contratto (art. 30) e, se critico, una
            sorveglianza diretta europea.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Il registro delle informazioni è un elenco
            fornitori».</strong> È l’elenco degli accordi contrattuali, con la distinzione fra
            servizi che supportano funzioni essenziali o importanti e gli altri, a livello
            individuale, subconsolidato e consolidato, e va comunicato all’autorità.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Un servizio di AI in prova non entra nel
            registro».</strong> Il registro copre tutti gli accordi per l’uso di servizi TIC di
            terzi, non solo quelli strategici.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Abbiamo esternalizzato la segnalazione degli
            incidenti».</strong> Si può fare, ma l’entità finanziaria resta pienamente responsabile
            (art. 19, par. 5).
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Per l’AI aspettiamo regole apposite».</strong> La
            dichiarazione delle autorità europee del 31 luglio 2026 colloca i rischi dei modelli di
            frontiera dentro il quadro DORA esistente: governance, gestione del rischio, fornitori.
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
