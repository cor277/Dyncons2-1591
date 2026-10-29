import Link from "next/link";
import { normaMetadata } from "@/app/normativa";
import {
  NormaPageLayout,
  NormaSection,
  NormaTable,
  type NormaFaq,
} from "@/components/sections/NormaPageLayout";

/*
 * Every fact here comes from the verified notes of 29 October 2026 and from the
 * text of the decree as published in the Gazzetta Ufficiale (n. 234 of
 * 8 October 2026); dates and status come from the registry in app/normativa.ts.
 */

const SLUG = "dlgs-179-2026";

const LINK = "text-[#00B4D8] hover:text-[#E6EDF3]";

export const metadata = normaMetadata(SLUG, {
  title: "D.Lgs. 179/2026: autorità, sanzioni, AI nel lavoro e formazione in Italia",
  description:
    "Il D.Lgs. 7 ottobre 2026, n. 179 adegua l’Italia all’AI Act: ACN, AgID e autorità finanziarie, sanzioni e reclami, spazio di sperimentazione, decisioni sul lavoro non solo automatizzate, DVR, formazione e segreti commerciali.",
  keywords: [
    "D.Lgs. 179/2026",
    "autorità AI Italia ACN AgID",
    "sanzioni AI Act Italia",
    "intelligenza artificiale lavoro licenziamento nullo",
    "DVR intelligenza artificiale",
    "formazione AI ordini professionali",
    "ECM intelligenza artificiale",
    "segreti commerciali algoritmi addestramento",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "Un datore di lavoro può licenziare sulla base di un sistema di AI?",
    a: "Può usare un sistema di AI nel processo, ma la decisione finale deve prenderla una persona fisica con un potere effettivo e autonomo. L’art. 41 del D.Lgs. 179/2026 vieta che le decisioni finali su costituzione, modifica o cessazione del rapporto di lavoro, compresi provvedimenti disciplinari e valutazioni delle prestazioni, siano adottate solo sulla base di un trattamento automatizzato. Il licenziamento intimato in violazione è nullo, come le altre decisioni prese in violazione, e il consenso del lavoratore non vale come eccezione.",
  },
  {
    q: "Lo screening automatico dei CV è vietato dall’art. 41?",
    a: "No. L’art. 41 esclude espressamente dalle decisioni finali sulla costituzione del rapporto le attività di ricerca e selezione delle candidature, anche quando comportano la mancata ammissione alle fasi successive. Restano però le altre regole: l’art. 22 GDPR sulle decisioni automatizzate, che l’art. 41 fa salvo, e l’AI Act, per il quale i sistemi di selezione del personale rientrano nell’Allegato III, con obblighi per l’alto rischio dal 2 dicembre 2027.",
  },
  {
    q: "Quali sanzioni prevede il D.Lgs. 179/2026?",
    a: "Riprende i massimi dell’AI Act: fino a 35 milioni di euro o il 7% del fatturato mondiale annuo per le pratiche vietate, fino a 15 milioni o il 3% per gli obblighi di operatori e organismi notificati, fino a 7,5 milioni o l’1% per informazioni inesatte. Aggiunge una fascia fino a 1 milione o lo 0,5% per la valutazione d’impatto sui diritti fondamentali (art. 27 AI Act) e il diritto alla spiegazione (art. 86). Per PMI, microimprese e startup innovative vale il criterio dell’art. 99(6), cioè il minore dei due importi; per le violazioni poco offensive l’autorità può ordinare di eliminarle o, se cessate, fare una dichiarazione pubblica invece della sanzione.",
  },
  {
    q: "Cosa cambia per i professionisti iscritti a un ordine?",
    a: "La formazione iniziale e continua degli ordini deve includere percorsi sull’uso dell’AI, con profili tecnici, giuridici e deontologici e un monte ore minimo per ciascun periodo di valutazione. I consigli nazionali devono adeguare i regolamenti entro sei mesi dall’entrata in vigore del decreto (23 ottobre 2026). Entro dodici mesi i decreti sui parametri dei compensi vanno integrati per modulare l’equo compenso secondo la classe di rischio del sistema di AI usato dal professionista.",
  },
  {
    q: "Il Garante privacy è autorità di vigilanza per l’AI Act?",
    a: "Solo in parte. L’art. 5 del D.Lgs. 179/2026 indica come autorità di vigilanza del mercato l’ACN in generale, Banca d’Italia, CONSOB e IVASS per i sistemi ad alto rischio usati nei servizi bancari, finanziari e assicurativi, e il Garante per la protezione dei dati personali limitatamente ai casi dell’art. 74(8) dell’AI Act. Sul GDPR il Garante conserva tutti i suoi poteri.",
  },
];

export default function Dlgs179Page() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "Reg. (UE) 2024/1689 (AI Act)",
          url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          note: "autorità (artt. 70, 74), reclami (art. 85), sanzioni (art. 99), sandbox (art. 57)",
        },
        {
          label: "Reg. (UE) 2016/679 (GDPR)",
          url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
          note: "art. 22 sulle decisioni automatizzate, fatto salvo dall’art. 41",
        },
        {
          label: "Consiglio dei ministri, esame definitivo del 4 agosto 2026",
          url: "https://www.affarieuropei.gov.it/it/comunicazione/notizie/cdm-4-ago-26/",
          note: "Dipartimento per gli affari europei",
        },
        {
          label: "D.Lgs. 9 settembre 2026, n. 160",
          url: "https://www.normattiva.it/eli/id/2026/09/15/26G00179/ORIGINAL",
          note: "il decreto gemello su responsabilità civile e penale",
        },
      ]}
      approfondimenti={[
        {
          label: "Valutare un fornitore di AI in un settore regolamentato",
          href: "/it/risposte/valutare-fornitore-ai-settori-regolati",
          note: "le domande da fare prima di firmare, ora che le autorità e le sanzioni sono definite",
        },
        {
          label: "Agenti AI per finanza e compliance",
          href: "/it/ai-agenti-finanziari",
          note: "dove Banca d’Italia, CONSOB e IVASS vigilano sull’alto rischio",
        },
        {
          label: "Consulenza AI, governance e compliance",
          href: "/it/consulenza-ai-governance-compliance",
        },
        {
          label: "Assessment di esposizione",
          href: "/it/assessment",
          note: "quali regimi si sommano sul tuo caso e chi decide, per iscritto",
        },
      ]}
      ctaTitle="Dove decide una persona e dove decide il sistema?"
      ctaSubtitle="L’assessment di esposizione mette per iscritto quali decisioni il tuo sistema prepara e quali una persona prende, e cosa serve per dimostrarlo a un’autorità o a un giudice."
    >
      <NormaSection id="a-chi-si-applica" title="A chi si applica">
        <p>
          Il D.Lgs. 179/2026 si applica agli stessi soggetti dell’AI Act (art. 2, par. 1, del
          regolamento), ma alcune sue parti parlano a destinatari precisi: i datori di lavoro che
          usano l’AI nella gestione del personale, gli istituti finanziari vigilati, gli ordini
          professionali, i professionisti sanitari, scuole, università e pubbliche
          amministrazioni.
        </p>
        <p>
          È il secondo decreto attuativo della{" "}
          <Link href="/it/normativa/legge-132-2025" className={LINK}>
            Legge 132/2025
          </Link>{" "}
          (art. 24, commi 1 e 2). Il primo, il{" "}
          <Link href="/it/normativa/dlgs-160-2026" className={LINK}>
            D.Lgs. 160/2026
          </Link>
          , riguarda responsabilità civile e penale e uso dell’AI da parte della polizia.
        </p>
      </NormaSection>

      <NormaSection id="autorita" title="Le autorità e i loro poteri">
        <p>
          Il decreto completa la mappa delle autorità che controllano l’applicazione dell’AI Act in
          Italia e dà loro poteri ispettivi e sanzionatori.
        </p>
        <NormaTable caption="Autorità italiane per l’AI Act secondo il D.Lgs. 179/2026">
          <thead>
            <tr>
              <th scope="col">Autorità</th>
              <th scope="col">Ruolo</th>
              <th scope="col">Articoli</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">ACN</th>
              <td>
                Vigilanza del mercato sui sistemi di AI e punto di contatto unico; poteri ispettivi,
                con controlli anche senza preavviso sulle prove in condizioni reali; misure degli artt. 79-83 AI
                Act; registrazione nazionale dei sistemi ad alto rischio dell’Allegato III, punto 2
                (infrastrutture critiche)
              </td>
              <td>5, 6, 14, 15, 16</td>
            </tr>
            <tr>
              <th scope="row">AgID</th>
              <td>
                Autorità di notifica: valuta, designa, notifica e monitora con audit gli organismi
                di valutazione della conformità; può limitarne, sospenderne o revocarne la
                designazione
              </td>
              <td>4, 13, 20</td>
            </tr>
            <tr>
              <th scope="row">Banca d’Italia, CONSOB, IVASS</th>
              <td>
                Vigilanza sui sistemi ad alto rischio usati nei servizi bancari e di finanziamento,
                nei servizi di investimento e nell’attività assicurativa, verso gli istituti
                finanziari vigilati
              </td>
              <td>5, 17</td>
            </tr>
            <tr>
              <th scope="row">Garante per la protezione dei dati personali</th>
              <td>Autorità di vigilanza del mercato limitatamente ai casi dell’art. 74(8) AI Act</td>
              <td>5, 11</td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          Le autorità ricevono i reclami dell’art. 85 AI Act secondo le proprie procedure; un
          reclamo presentato all’autorità sbagliata viene trasmesso d’ufficio a quella competente
          (art. 18). Nel settore finanziario, per le violazioni dell’AI Act commesse da istituti che
          aderiscono ai sistemi di risoluzione stragiudiziale, sono competenti l’Arbitro bancario
          finanziario, l’Arbitro per le controversie finanziarie e il sistema dell’IVASS.
        </p>
      </NormaSection>

      <NormaSection id="sanzioni" title="Sanzioni (artt. 22-24)">
        <p>
          Le sanzioni riprendono i massimi dell’AI Act e aggiungono una fascia nazionale per due
          obblighi dei deployer.
        </p>
        <NormaTable caption="Sanzioni amministrative pecuniarie (D.Lgs. 179/2026, art. 23)">
          <thead>
            <tr>
              <th scope="col">Violazione</th>
              <th scope="col">Massimo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Pratiche vietate (art. 5 AI Act)</th>
              <td>35 milioni di euro o 7% del fatturato mondiale annuo, se superiore</td>
            </tr>
            <tr>
              <th scope="row">
                Obblighi di fornitori, rappresentanti, importatori, distributori, deployer (artt.
                16, 22-26), organismi notificati, trasparenza (art. 50), segnalazione di incidenti
                gravi (art. 73)
              </th>
              <td>15 milioni di euro o 3%</td>
            </tr>
            <tr>
              <th scope="row">Informazioni inesatte, incomplete o fuorvianti</th>
              <td>7,5 milioni di euro o 1%</td>
            </tr>
            <tr>
              <th scope="row">Valutazione d’impatto sui diritti fondamentali (art. 27) e diritto alla spiegazione (art. 86)</th>
              <td>1 milione di euro o 0,5%</td>
            </tr>
          </tbody>
        </NormaTable>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#E6EDF3]">PMI e startup innovative</strong>: si applica il
            criterio dell’art. 99(6) AI Act, cioè il minore fra importo fisso e percentuale.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Alternative non pecuniarie</strong> (art. 22): per le
            violazioni di scarsa offensività l’autorità può ordinare di eliminarle entro un termine,
            o, se sono cessate, applicare una dichiarazione pubblica sulla violazione e sul
            responsabile. Chi non rispetta l’ordine paga la sanzione aumentata fino a un terzo.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Pubblicità</strong> (art. 24): i provvedimenti
            sanzionatori sono pubblicati per estratto sul sito dell’autorità, in forma anonima solo
            in casi specifici (dati personali sproporzionati, rischi per la cybersicurezza o per
            un’indagine, pregiudizio sproporzionato).
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="sperimentazione" title="Spazio di sperimentazione italiano (artt. 26-31)">
        <p>
          Il decreto istituisce lo Spazio di sperimentazione italiano per l’IA previsto dall’art. 57
          dell’AI Act: un ambiente controllato, gestito insieme da AgID e ACN, in cui fornitori e
          potenziali fornitori sviluppano e provano i propri sistemi sotto la vigilanza delle
          autorità.
        </p>
        <p>
          Accesso, criteri di ammissione e funzionamento sono rinviati a decreti dei direttori
          generali di AgID e ACN; le priorità le fissa il Comitato di coordinamento e un Gruppo
          operativo seleziona i progetti e ne monitora l’esecuzione, anche con logging, audit e
          tracciabilità delle modifiche. Le PMI e le startup avranno priorità secondo criteri da
          definire. Gli istituti finanziari possono sperimentare anche qui, oltre che nella
          sperimentazione FinTech; sono previsti spazi ulteriori per i sistemi duali, per la
          giustizia e a livello regionale o locale.
        </p>
      </NormaSection>

      <NormaSection id="lavoro" title="Lavoro: decisioni, DVR e formazione (artt. 41-42)">
        <p>
          Nessuna decisione finale sul rapporto di lavoro può basarsi solo su un trattamento
          automatizzato: è la regola dell’art. 41, e la sanzione è la nullità.
        </p>
        <NormaTable caption="Le regole sull’AI nel rapporto di lavoro (D.Lgs. 179/2026)">
          <thead>
            <tr>
              <th scope="col">Regola</th>
              <th scope="col">Contenuto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Decisione umana (art. 41, c. 1)</th>
              <td>
                Le decisioni finali su costituzione, modifica o cessazione del rapporto, compresi
                provvedimenti disciplinari e valutazioni delle prestazioni, non possono basarsi
                unicamente su un trattamento automatizzato; la decisione definitiva spetta a una
                persona fisica con potere effettivo e autonomo. Il consenso del lavoratore non è
                un’eccezione
              </td>
            </tr>
            <tr>
              <th scope="row">Esclusione</th>
              <td>
                Ricerca e selezione delle candidature, anche quando escludono un candidato dalle fasi
                successive, non sono «decisioni finali» ai fini dell’art. 41
              </td>
            </tr>
            <tr>
              <th scope="row">Informazione e motivazione (art. 41, c. 3)</th>
              <td>
                Informativa prima dell’avvio del trattamento (art. 1-bis D.Lgs. 152/1997); diritto
                del lavoratore a una motivazione intelligibile, data da una persona, con l’incidenza
                dell’AI sulla decisione e i principali parametri considerati; restano gli artt. 13,
                15 e 22 GDPR
              </td>
            </tr>
            <tr>
              <th scope="row">Nullità (art. 41, c. 4)</th>
              <td>Nullo il licenziamento intimato in violazione; nulle le altre decisioni prese in violazione</td>
            </tr>
            <tr>
              <th scope="row">Valutazione dei rischi (art. 42, c. 2)</th>
              <td>
                L’AI che incide su organizzazione del lavoro, ritmi, modalità della prestazione o
                decisioni rilevanti per la sicurezza entra nel documento di valutazione dei rischi
                (art. 28 D.Lgs. 81/2008)
              </td>
            </tr>
            <tr>
              <th scope="row">Formazione (art. 42, c. 3)</th>
              <td>
                Informazione e formazione dei lavoratori sui rischi specifici dell’AI e sulle misure
                di prevenzione adottate
              </td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          L’art. 48 consente l’uso dell’AI anche nei servizi per il lavoro (orientamento, incontro
          fra domanda e offerta), a condizione di supervisione umana, trasparenza delle decisioni e
          tutela dei diritti di utenti e lavoratori.
        </p>
      </NormaSection>

      <NormaSection id="formazione" title="Formazione, professioni e sanità (artt. 36-51)">
        <p>
          Il Capo III porta l’alfabetizzazione sull’AI in scuola, università, pubblica
          amministrazione, giustizia e professioni; per le imprese private l’obbligo diretto è quello
          verso i lavoratori dell’art. 42.
        </p>
        <NormaTable caption="Obblighi di formazione con un termine (D.Lgs. 179/2026)">
          <thead>
            <tr>
              <th scope="col">Articolo</th>
              <th scope="col">Chi</th>
              <th scope="col">Cosa</th>
              <th scope="col">Entro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">47</th>
              <td>Consigli nazionali di ordini e collegi</td>
              <td>
                Adeguare i regolamenti della formazione iniziale e continua con percorsi sull’AI
                (profili tecnici, giuridici, deontologici) e un monte ore minimo per periodo; regole
                analoghe per le associazioni delle professioni non regolamentate
              </td>
              <td>6 mesi dall’entrata in vigore</td>
            </tr>
            <tr>
              <th scope="row">47, c. 6</th>
              <td>Conferenza Stato-Regioni</td>
              <td>Accordo per inserire i percorsi sull’AI nei programmi ECM delle professioni sanitarie</td>
              <td>6 mesi</td>
            </tr>
            <tr>
              <th scope="row">51, c. 3</th>
              <td>Commissione nazionale per la formazione continua</td>
              <td>Fissare la percentuale dell’obbligo ECM triennale da dedicare all’AI</td>
              <td>6 mesi</td>
            </tr>
            <tr>
              <th scope="row">51, c. 4</th>
              <td>AGENAS</td>
              <td>Programmi sull’AI nei corsi di formazione manageriale in sanità</td>
              <td>6 mesi</td>
            </tr>
            <tr>
              <th scope="row">49</th>
              <td>Ministeri competenti per i parametri dei compensi</td>
              <td>
                Integrare i parametri per modulare l’equo compenso del professionista secondo la
                classe di rischio del sistema di AI usato
              </td>
              <td>12 mesi</td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          Il decreto è entrato in vigore il 23 ottobre 2026: i termini di sei mesi cadono quindi
          intorno al 23 aprile 2027, quello di dodici mesi intorno al 23 ottobre 2027.
        </p>
      </NormaSection>

      <NormaSection id="segreti-commerciali" title="Dati e algoritmi come segreti commerciali (art. 52)">
        <p>
          L’art. 52 aggiunge all’art. 98 del Codice della proprietà industriale il comma 1-bis: dati,
          algoritmi e metodi matematici per l’addestramento di sistemi di AI possono essere tutelati
          come segreti commerciali, se ne ricorrono le condizioni ordinarie (segretezza, valore
          economico, misure adeguate a mantenerli segreti). Per algoritmi e metodi si intendono
          architetture dei modelli, funzioni di ottimizzazione, procedure e configurazioni di
          addestramento e ogni altro elemento tecnico-computazionale. Le controversie restano alle
          sezioni specializzate in materia di impresa (art. 53).
        </p>
        <p>
          La tutela esiste solo se il segreto è custodito: accessi, versioni e configurazioni di
          addestramento vanno gestiti e documentati come un bene aziendale. È anche ciò che permette
          di chiedere al giudice misure di protezione quando quei documenti devono essere esibiti in
          una causa di risarcimento.
        </p>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <p>
          <strong className="text-[#E6EDF3]">Il punto della decisione va progettato.</strong> In un
          sistema HR la differenza fra lecito e nullo è se esiste una persona con potere effettivo
          che decide. Il flusso deve mostrare dove il sistema propone, dove la persona accoglie o
          scarta la proposta e con quale motivazione, e conservarne traccia.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">La motivazione deve essere producibile.</strong> Il
          lavoratore può chiedere quanto ha pesato l’AI e quali parametri sono stati considerati.
          Se il sistema non registra questi elementi, nessuno potrà spiegarli dopo.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Il DVR deve vedere l’AI.</strong> Un sistema che
          assegna turni, ritmi o priorità entra nella valutazione dei rischi, e chi lo fornisce
          dovrebbe mettere il datore di lavoro in condizione di valutarlo.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Sanzioni e autorità ora hanno un indirizzo.</strong>{" "}
          Con autorità definite, procedure di reclamo e pubblicazione dei provvedimenti, la
          documentazione dei deployer (valutazione d’impatto dell’art. 27, spiegazioni dell’art. 86)
          diventa qualcosa che qualcuno può chiedere di vedere.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/ai-act" className={LINK}>AI Act</Link> — il decreto ne è
            l’adeguamento: autorità, sanzioni e sandbox sono quelle del regolamento; selezione e
            gestione del personale sono alto rischio dell’Allegato III dal 2 dicembre 2027.
          </li>
          <li>
            <Link href="/it/normativa/gdpr" className={LINK}>GDPR</Link> — l’art. 41 fa salvo
            l’art. 22 sulle decisioni basate unicamente su trattamenti automatizzati e i diritti di
            informazione e accesso (artt. 13 e 15).
          </li>
          <li>
            <Link href="/it/normativa/dlgs-160-2026" className={LINK}>D.Lgs. 160/2026</Link> — reato
            dell’art. 437-bis c.p. e prova civile: l’altra metà dell’attuazione.
          </li>
          <li>
            <Link href="/it/normativa/dora" className={LINK}>DORA</Link> — per gli istituti
            finanziari, il rischio ICT dei sistemi di AI si somma alla vigilanza di Banca d’Italia,
            CONSOB e IVASS.
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#E6EDF3]">«Il lavoratore ha acconsentito, quindi la decisione
            automatica è valida».</strong> L’art. 41 esclude espressamente il consenso come
            eccezione.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Basta che un umano clicchi “approva”».</strong> Serve
            una persona con potere effettivo e autonomo, capace di dare una motivazione
            intelligibile. Un’approvazione automatica non lo è.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Lo screening dei CV è vietato».</strong> Non per
            l’art. 41, che lo esclude; restano GDPR e, dal 2 dicembre 2027, gli obblighi
            dell’AI Act per l’alto rischio.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Le sanzioni sono solo quelle europee».</strong> C’è
            una fascia nazionale fino a 1 milione di euro o lo 0,5% per valutazione d’impatto e
            diritto alla spiegazione.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Vigila il Garante privacy».</strong> Vigila l’ACN,
            con le autorità finanziarie nel loro settore; il Garante solo nei casi dell’art. 74(8).
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
