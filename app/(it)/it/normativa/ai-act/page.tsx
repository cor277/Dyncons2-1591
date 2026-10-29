import Link from "next/link";
import { normaMetadata } from "@/app/normativa";
import {
  NormaPageLayout,
  NormaSection,
  NormaTable,
  type NormaFaq,
} from "@/components/sections/NormaPageLayout";

/*
 * Model page for the "Normativa" section. Every fact here comes from the
 * verified notes of 29 October 2026; the dates and the status come from the
 * registry entry in app/normativa.ts, not from this file.
 */

const SLUG = "ai-act";

export const metadata = normaMetadata(SLUG, {
  title: "AI Act (Reg. (UE) 2024/1689): obblighi, date e autorità in Italia",
  description:
    "Cosa chiede l’AI Act a chi progetta, vende o usa sistemi di intelligenza artificiale in Italia: classi di rischio, obblighi per articolo, calendario dopo il Digital Omnibus, EN 18286, autorità italiane e sanzioni. Aggiornato al 29 ottobre 2026.",
  keywords: [
    "AI Act",
    "Regolamento (UE) 2024/1689",
    "AI Act Italia",
    "alto rischio Allegato III",
    "Digital Omnibus AI",
    "EN 18286",
    "D.Lgs. 179/2026",
    "sanzioni AI Act",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "Da quando si applicano gli obblighi per i sistemi di AI ad alto rischio?",
    a: "Dopo il Digital Omnibus (Reg. (UE) 2026/1744) le date sono fisse: dal 2 dicembre 2027 per i sistemi ad alto rischio dell’Allegato III (art. 6(2)), per esempio selezione del personale o merito creditizio, e dal 2 agosto 2028 per quelli dell’Allegato I (art. 6(1)), come i sistemi che sono componenti di sicurezza di dispositivi medici. Divieti, alfabetizzazione, obblighi sui modelli per finalità generali e trasparenza dell’art. 50 si applicano già.",
  },
  {
    q: "Un assistente interno basato su RAG è un sistema ad alto rischio?",
    a: "Non per la tecnica che usa. La classe di rischio dipende dalla finalità prevista: un assistente che aiuta un professionista a ritrovare documenti di solito non rientra nell’Allegato III, uno che valuta candidati o decide l’accesso a un servizio essenziale sì. Se si ritiene che un sistema di un’area dell’Allegato III non sia ad alto rischio, l’art. 6(4) chiede al fornitore di documentare la valutazione prima dell’immissione sul mercato o della messa in servizio e di registrare il sistema nella banca dati UE (art. 49(2)).",
  },
  {
    q: "Chi controlla l’applicazione dell’AI Act in Italia?",
    a: "Con il D.Lgs. 179/2026 l’Agenzia per la cybersicurezza nazionale (ACN) è autorità di vigilanza del mercato e punto di contatto unico, l’AgID è autorità di notifica, Banca d’Italia, CONSOB e IVASS vigilano sui sistemi ad alto rischio usati dagli istituti finanziari. Il Garante per la protezione dei dati personali è autorità di vigilanza solo nei casi dell’art. 74(8) dell’AI Act e mantiene i suoi poteri sul GDPR.",
  },
  {
    q: "La norma EN 18286 è obbligatoria?",
    a: "No. EN 18286:2026 è la prima norma armonizzata dell’AI Act, citata nella Gazzetta ufficiale dell’UE il 14 ottobre 2026 con la Decisione di esecuzione (UE) 2026/2274. Riguarda il sistema di gestione della qualità dei fornitori di sistemi ad alto rischio (art. 17) e dà presunzione di conformità per i requisiti che copre. Non copre gli obblighi dei deployer, l’alfabetizzazione, la trasparenza, né la responsabilità per danno.",
  },
  {
    q: "Quali sanzioni prevede l’AI Act e cosa aggiunge l’Italia?",
    a: "L’AI Act prevede fino a 35 milioni di euro o il 7% del fatturato mondiale per le pratiche vietate, fino a 15 milioni o il 3% per gli obblighi elencati all’art. 99(4), fra cui quelli di fornitori, deployer e trasparenza (art. 50), e fino a 7,5 milioni o l’1% per informazioni inesatte alle autorità. Il D.Lgs. 179/2026 aggiunge una fascia nazionale fino a 1 milione o lo 0,5% per la valutazione d’impatto sui diritti fondamentali (art. 27) e il diritto alla spiegazione (art. 86). Sul piano penale il D.Lgs. 160/2026 ha introdotto l’art. 437-bis c.p. per chi omette misure di sicurezza o sorveglianza umana sui sistemi ad alto rischio.",
  },
];

export default function AiActPage() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "Codice di condotta sulla trasparenza dei contenuti generati dall’AI (10 giugno 2026)",
          url: "https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content",
          note: "Commissione europea, riferimento per l’art. 50",
        },
        {
          label: "Legge 23 settembre 2025, n. 132",
          url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-09-23;132",
          note: "Normattiva",
        },
        {
          label: "D.Lgs. 9 settembre 2026, n. 160",
          url: "https://www.normattiva.it/eli/id/2026/09/15/26G00179/ORIGINAL",
          note: "responsabilità civile e penale, art. 437-bis c.p.",
        },
        {
          label: "D.Lgs. 7 ottobre 2026, n. 179",
          url: "https://www.normattiva.it/eli/id/2026/10/08/26G00200/ORIGINAL",
          note: "autorità, sanzioni, lavoro e formazione",
        },
      ]}
      approfondimenti={[
        {
          label: "Che cosa chiede l’AI Act a un sistema RAG?",
          href: "/it/risposte/rag-ai-act",
          note: "ruoli di fornitore e deployer applicati a un assistente costruito in casa",
        },
        {
          label: "Legge 132/2025 e AI in sanità",
          href: "/it/ricerca/legge-132-2025",
          note: "cosa aggiunge la legge italiana nel settore sanitario",
        },
        {
          label: "Consulenza AI, governance e compliance",
          href: "/it/consulenza-ai-governance-compliance",
        },
        {
          label: "Assessment di esposizione",
          href: "/it/assessment",
          note: "incarico a perimetro fisso: quali regimi si applicano e cosa va dimostrato",
        },
        {
          label: "Cosa faccio lunedì mattina",
          href: "https://www.linkedin.com/pulse/cosa-faccio-luned%C3%AC-mattina-corrado-patierno-arx1e/",
          note: "il metodo in quattro movimenti: discernere i regimi, vederne la collisione, catalogo, piano",
          linkedin: true,
        },
        {
          label: "L’altra metà del problema",
          href: "https://www.linkedin.com/pulse/laltra-met%C3%A0-del-problema-corrado-patierno-whmnf/",
          note: "audit trail tecnico e governance documentale come condizione della difesa",
          linkedin: true,
        },
      ]}
      ctaTitle="La classificazione è una decisione che qualcuno deve firmare"
      ctaSubtitle="L’assessment di esposizione stabilisce cos’è il tuo sistema nei termini dell’AI Act, quali altre norme si sommano e cosa l’architettura deve poter dimostrare."
    >
      <NormaSection id="a-chi-si-applica" title="A chi si applica">
        <p>
          L’AI Act si aggancia a due cose: se quello che hai è un <strong className="text-[#E6EDF3]">sistema di AI</strong>{" "}
          secondo la definizione del regolamento, e quale <strong className="text-[#E6EDF3]">ruolo</strong>{" "}
          hai rispetto a esso. I ruoli principali sono il fornitore (chi sviluppa il sistema o lo fa
          sviluppare e lo immette sul mercato o in servizio con il proprio nome) e il deployer (chi
          lo usa sotto la propria autorità in un contesto professionale); seguono importatori e
          distributori.
        </p>
        <p>
          Il regolamento vale anche per chi è stabilito fuori dall’Unione, se immette sistemi sul
          mercato UE o se l’output del sistema è usato nell’Unione. Un’azienda che costruisce un
          assistente interno su un modello di terzi è spesso fornitore e deployer dello stesso
          sistema, mentre il fornitore del modello per finalità generali è un altro soggetto con
          obblighi propri.
        </p>
      </NormaSection>

      <NormaSection id="cosa-chiede" title="Cosa chiede">
        <p>
          Gli obblighi dipendono dalla classe di rischio dell’uso previsto, non dalla tecnica:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#E6EDF3]">Pratiche vietate</strong> (art. 5): per esempio
            manipolazione che sfrutta vulnerabilità, punteggio sociale, alcuni usi
            dell’identificazione biometrica. Dal 2 dicembre 2026 si aggiungono i divieti delle
            lettere b bis) e b ter), su materiale pedopornografico e immagini intime non consensuali.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Alto rischio</strong> (art. 6): componenti di
            sicurezza di prodotti regolati dall’Allegato I, come i dispositivi medici, e usi elencati
            nell’Allegato III, fra cui biometria, infrastrutture critiche, istruzione, lavoro e
            selezione del personale, accesso a servizi essenziali (credito, assicurazioni vita e
            salute, triage di emergenza), attività di contrasto, migrazione, giustizia.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Trasparenza</strong> (art. 50): chi interagisce con
            un sistema di AI deve saperlo, i contenuti generati vanno marcati in modo leggibile da una
            macchina, i deepfake vanno dichiarati.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Rischio minimo</strong>: nessun obbligo specifico
            oltre all’alfabetizzazione dell’art. 4.
          </li>
        </ul>
        <p>
          A parte stanno i modelli di AI per finalità generali, con obblighi propri per i loro
          fornitori (artt. 53 e 55), applicabili dal 2 agosto 2025.
        </p>

        <NormaTable caption="Obblighi principali dell’AI Act, per articolo (date dopo il Reg. (UE) 2026/1744)">
          <thead>
            <tr>
              <th scope="col">Articolo</th>
              <th scope="col">Cosa chiede</th>
              <th scope="col">A chi</th>
              <th scope="col">Da quando</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">4</th>
              <td>
                Misure per sostenere l’alfabetizzazione in materia di AI del personale (formulazione
                attenuata dal Reg. 2026/1744, prima era «garantire»)
              </td>
              <td>Fornitori e deployer</td>
              <td><time dateTime="2025-02-02">2 febbraio 2025</time></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Divieto delle pratiche elencate; nuove lettere b bis) e b ter)</td>
              <td>Tutti gli operatori</td>
              <td>
                <time dateTime="2025-02-02">2 febbraio 2025</time>; b bis) e b ter) dal{" "}
                <time dateTime="2026-12-02">2 dicembre 2026</time>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>
                Classificazione ad alto rischio (Allegati I e III); chi ritiene che un sistema
                dell’Allegato III non sia ad alto rischio documenta la valutazione prima di metterlo
                sul mercato o in servizio e registra il sistema nella banca dati UE (par. 4 e art. 49(2))
              </td>
              <td>Fornitori</td>
              <td>Con gli obblighi per l’alto rischio</td>
            </tr>
            <tr>
              <th scope="row">9–15</th>
              <td>
                Gestione dei rischi (9), dati e governance dei dati (10), documentazione tecnica (11),
                registrazione automatica degli eventi, cioè i log (12), trasparenza e istruzioni per
                il deployer (13), sorveglianza umana (14), accuratezza, robustezza e cibersicurezza
                (15)
              </td>
              <td>Fornitori di sistemi ad alto rischio</td>
              <td rowSpan={3}>
                Allegato III: <time dateTime="2027-12-02">2 dicembre 2027</time>
                <br />
                Allegato I: <time dateTime="2028-08-02">2 agosto 2028</time>
              </td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td>Sistema di gestione della qualità (norma armonizzata EN 18286:2026)</td>
              <td>Fornitori di sistemi ad alto rischio</td>
            </tr>
            <tr>
              <th scope="row">26</th>
              <td>
                Uso conforme alle istruzioni, sorveglianza umana affidata a persone competenti,
                controllo dei dati di input, monitoraggio, conservazione dei log, informazione dei
                lavoratori
              </td>
              <td>Deployer di sistemi ad alto rischio</td>
            </tr>
            <tr>
              <th scope="row">27</th>
              <td>Valutazione d’impatto sui diritti fondamentali (FRIA) prima dell’uso</td>
              <td>
                Deployer organismi di diritto pubblico o enti privati che erogano servizi pubblici
                (esclusi i sistemi per infrastrutture critiche, Allegato III punto 2); deployer di
                sistemi per merito creditizio e assicurazioni vita e salute (Allegato III punto 5,
                lettere b e c)
              </td>
              <td>Con gli obblighi per l’Allegato III</td>
            </tr>
            <tr>
              <th scope="row">50</th>
              <td>
                Informare chi interagisce con l’AI, marcare i contenuti generati, dichiarare i
                deepfake; per i sistemi già sul mercato prima del 2 agosto 2026 la marcatura (par. 2)
                va applicata entro il 2 dicembre 2026
              </td>
              <td>Fornitori e deployer</td>
              <td><time dateTime="2026-08-02">2 agosto 2026</time></td>
            </tr>
            <tr>
              <th scope="row">99</th>
              <td>Sanzioni amministrative; ridotte per PMI e, dopo il Reg. 2026/1744, per le small mid-cap (par. 6 bis)</td>
              <td>Tutti gli operatori</td>
              <td><time dateTime="2025-08-02">2 agosto 2025</time></td>
            </tr>
          </tbody>
        </NormaTable>
      </NormaSection>

      <NormaSection id="calendario-digital-omnibus" title="Cosa ha spostato il Digital Omnibus, e cosa no">
        <p>
          Il Regolamento (UE) 2026/1744, in vigore dal 27 luglio 2026, ha spostato le date
          dell’alto rischio: l’Allegato III dal 2 agosto 2026 al{" "}
          <strong className="text-[#E6EDF3]">2 dicembre 2027</strong>, l’Allegato I dal 2 agosto
          2027 al <strong className="text-[#E6EDF3]">2 agosto 2028</strong>. Le date sono fisse:
          non c’è alcun meccanismo che le faccia slittare ancora in attesa delle norme tecniche.
        </p>
        <p>
          Non ha spostato il resto. I divieti e l’alfabetizzazione si applicano dal 2 febbraio
          2025, gli obblighi sui modelli per finalità generali dal 2 agosto 2025, la trasparenza
          dell’art. 50 dal 2 agosto 2026. Lo stesso regolamento ha aggiunto due divieti (dal 2
          dicembre 2026), ha reso obbligatoria entro il 2 agosto 2027 una sandbox nazionale e ha
          ridotto le sanzioni per le small mid-cap.
        </p>
        <p>
          Le linee guida della Commissione sulla classificazione ad alto rischio (art. 6) sono state
          pubblicate in bozza il 19 maggio 2026; la consultazione si è chiusa il 23 luglio 2026 e la
          versione finale è attesa entro la fine del 2026. La proroga sposta le scadenze, non le
          decisioni: un sistema che entrerà in produzione nel 2027 si progetta adesso.
        </p>
      </NormaSection>

      <NormaSection id="en-18286" title="EN 18286: la prima norma armonizzata">
        <p>
          Con la Decisione di esecuzione (UE) 2026/2274 del 12 ottobre 2026, pubblicata il 14
          ottobre, la norma EN 18286:2026 è la prima norma armonizzata dell’AI Act. Riguarda il
          sistema di gestione della qualità dei fornitori di sistemi ad alto rischio (art. 17) e,
          per i requisiti che copre, dà presunzione di conformità. Applicarla è volontario.
        </p>
        <p>
          Non copre gli obblighi dei deployer, l’alfabetizzazione e la trasparenza, né GDPR, NIS2
          o Cyber Resilience Act, né le regole italiane sulle decisioni relative al personale, né
          la responsabilità per danno. È uno strumento per una parte degli obblighi del fornitore,
          non un’attestazione che il sistema sia a posto.
        </p>
      </NormaSection>

      <NormaSection id="autorita-italiane" title="Autorità e sanzioni in Italia">
        <p>
          L’AI Act si applica direttamente. La{" "}
          <Link href="/it/normativa/legge-132-2025" className="text-[#00B4D8] hover:text-[#E6EDF3]">
            Legge 132/2025
          </Link>{" "}
          lo integra senza aggiungere obblighi, e il{" "}
          <Link href="/it/normativa/dlgs-179-2026" className="text-[#00B4D8] hover:text-[#E6EDF3]">
            D.Lgs. 179/2026
          </Link>{" "}
          completa il quadro delle autorità:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#E6EDF3]">ACN</strong> — vigilanza del mercato e punto di
            contatto unico; tiene il registro nazionale dei sistemi dell’Allegato III, punto 2
            (infrastrutture critiche).
          </li>
          <li>
            <strong className="text-[#E6EDF3]">AgID</strong> — autorità di notifica (art. 70 AI
            Act), che designa e controlla gli organismi notificati.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Banca d’Italia, CONSOB, IVASS</strong> — vigilanza
            sui sistemi ad alto rischio negli istituti finanziari; ABF, ACF e IVASS sono competenti
            per i reclami in ambito finanziario.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Garante per la protezione dei dati personali</strong>{" "}
            — autorità di vigilanza per l’AI Act solo nei casi dell’art. 74(8); restano i suoi
            poteri sul GDPR.
          </li>
        </ul>

        <NormaTable caption="Sanzioni amministrative: AI Act (art. 99) e fascia nazionale (D.Lgs. 179/2026, art. 23)">
          <thead>
            <tr>
              <th scope="col">Violazione</th>
              <th scope="col">Massimo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Pratiche vietate (art. 5)</th>
              <td>35 milioni di euro o 7% del fatturato mondiale annuo</td>
            </tr>
            <tr>
              <th scope="row">Obblighi elencati all’art. 99(4): fornitori (art. 16), mandatari, importatori, distributori, operatori della catena del valore (art. 25, par. 2 e 4), deployer (art. 26), organismi notificati, trasparenza (art. 50)</th>
              <td>15 milioni di euro o 3%</td>
            </tr>
            <tr>
              <th scope="row">Informazioni inesatte, incomplete o fuorvianti alle autorità</th>
              <td>7,5 milioni di euro o 1%</td>
            </tr>
            <tr>
              <th scope="row">Valutazione d’impatto (art. 27) e diritto alla spiegazione (art. 86) — fascia nazionale</th>
              <td>1 milione di euro o 0,5%</td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          Per PMI e startup innovative vale il minore dei due importi. Il D.Lgs. 179/2026 prevede
          anche alternative non pecuniarie, come la diffida o la dichiarazione pubblica, e la
          pubblicazione dei provvedimenti. Sul piano penale, il{" "}
          <Link href="/it/normativa/dlgs-160-2026" className="text-[#00B4D8] hover:text-[#E6EDF3]">
            D.Lgs. 160/2026
          </Link>{" "}
          ha introdotto l’art. 437-bis c.p.: reclusione da 1 a 5 anni per chi, nella progettazione,
          nell’addestramento, nella produzione o nell’immissione sul mercato di un sistema ad alto
          rischio, omette le misure tecniche di sicurezza o la sorveglianza umana, se ne deriva un
          pericolo per la vita o l’incolumità; è punito anche il deployer professionale che omette
          intenzionalmente la sorveglianza umana.
        </p>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <p>
          <strong className="text-[#E6EDF3]">Un documento di classificazione datato, prima della
          messa in esercizio.</strong> Il reato dell’art. 437-bis e quasi tutti gli obblighi pesanti
          mordono solo sull’alto rischio. La difesa più utile, quindi, è un documento scritto prima
          che il sistema entri in produzione che spieghi, categoria per categoria dell’Allegato III,
          perché il sistema ne resta fuori, oppure in quale rientra. Per i sistemi che ricadono in
          un’area dell’Allegato III ma non sono ritenuti ad alto rischio, l’art. 6(4) lo rende già
          un obbligo del fornitore.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">I log diventano prova.</strong> Con il D.Lgs. 160/2026
          il giudice può ordinare di esibire i log (art. 12), la gestione dei rischi (art. 9), la
          documentazione tecnica (art. 11) e la sorveglianza umana (art. 14); se l’ordine non è
          rispettato, i fatti si danno per ammessi. Un servizio terzo che conserva i log per pochi
          mesi può rendere impossibile dimostrare cosa il sistema ha fatto.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">La sorveglianza umana si progetta.</strong> Dove un
          sistema suggerisce e dove decide si stabilisce nella specifica, non dopo. Lo stesso vale
          per il lavoro: con il D.Lgs. 179/2026 una decisione finale sul rapporto di lavoro presa
          solo da un trattamento automatizzato rende nullo il licenziamento.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">La conformità si dichiara, la responsabilità si
          dimostra.</strong> Il D.Lgs. 160/2026 dice espressamente che la conformità, anche
          certificata, non esclude di per sé la responsabilità. Una norma armonizzata o una
          dichiarazione di conformità non sostituiscono le prove di cosa il sistema ha fatto e di
          chi ha deciso.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <p>
          Un sistema di AI raramente risponde a una sola norma. Lo stesso fatto, per esempio un
          output sbagliato che causa un danno, può chiamare in causa più titoli di responsabilità
          insieme:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/gdpr" className="text-[#00B4D8] hover:text-[#E6EDF3]">GDPR</Link>{" "}
            — ogni dato personale usato per addestrare, alimentare o interrogare il sistema; le
            decisioni automatizzate restano soggette all’art. 22.
          </li>
          <li>
            <Link href="/it/normativa/pld" className="text-[#00B4D8] hover:text-[#E6EDF3]">Direttiva prodotti difettosi</Link>{" "}
            — il software è un prodotto; per i prodotti immessi sul mercato dopo l’8 dicembre 2026
            valgono divulgazione delle prove e presunzioni a favore del danneggiato.
          </li>
          <li>
            <Link href="/it/normativa/dlgs-160-2026" className="text-[#00B4D8] hover:text-[#E6EDF3]">D.Lgs. 160/2026</Link>{" "}
            — responsabilità civile e penale, Modelli 231 da aggiornare.
          </li>
          <li>
            <Link href="/it/normativa/dlgs-179-2026" className="text-[#00B4D8] hover:text-[#E6EDF3]">D.Lgs. 179/2026</Link>{" "}
            — lavoro, valutazione dei rischi (DVR), formazione, sanzioni nazionali.
          </li>
          <li>
            <Link href="/it/normativa/digital-omnibus" className="text-[#00B4D8] hover:text-[#E6EDF3]">Digital Omnibus</Link>{" "}
            — le nuove date dell’AI Act sono legge; la parte su GDPR e dati è ancora una proposta.
          </li>
        </ul>
        <p>
          Il lavoro utile è un deliverable che copra più norme insieme: un audit trail con log
          attribuibili serve all’art. 12 dell’AI Act, alla prova nel processo civile e alla
          responsabilità da prodotto.
        </p>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#E6EDF3]">«L’AI Act è stato rinviato».</strong> Sono state
            spostate solo le date dell’alto rischio. Divieti, alfabetizzazione, modelli per finalità
            generali e trasparenza si applicano già.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«La Legge 132 recepisce l’AI Act».</strong> Un
            regolamento non si recepisce: si applica direttamente. La legge italiana lo integra e
            dichiara di non aggiungere obblighi.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Siamo solo deployer, non ci riguarda».</strong> Il
            deployer ha obblighi propri (artt. 4, 26, 27, 50) e, in Italia, una responsabilità
            penale se omette intenzionalmente la sorveglianza umana su un sistema ad alto rischio.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Con la norma armonizzata siamo coperti».</strong>{" "}
            EN 18286 riguarda il sistema di gestione della qualità del fornitore; la conformità,
            anche certificata, non esclude la responsabilità per danno.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«L’AI Act impone di tenere i dati in Italia o in
            UE».</strong> Né l’AI Act né la Legge 132/2025 impongono la residenza dei dati; la legge
            italiana prevede solo un criterio di preferenza per alcune piattaforme della pubblica
            amministrazione.
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
