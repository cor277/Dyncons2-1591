import Link from "next/link";
import { normaMetadata } from "@/app/normativa";
import {
  NormaPageLayout,
  NormaSection,
  NormaTable,
  type NormaFaq,
} from "@/components/sections/NormaPageLayout";

/*
 * NIS2 in Italy. Facts checked on 29 October 2026 against the text of
 * D.Lgs. 138/2024 as published in GU n. 230 of 1 October 2024, the ACN page on
 * the basic specifications (Det. 379907/2025) and the text of ACN
 * Determination 314287/2026. Dates and status come from app/normativa.ts.
 */

const SLUG = "nis2";

export const metadata = normaMetadata(SLUG, {
  title: "NIS2 (Dir. (UE) 2022/2555 e D.Lgs. 138/2024): obblighi, notifiche e scadenze ACN",
  description:
    "Cosa chiede la NIS2 in Italia: soggetti essenziali e importanti, misure di sicurezza di base ACN, notifica degli incidenti a CSIRT Italia in 24 e 72 ore, responsabilità degli organi di amministrazione, fornitori rilevanti NIS. Aggiornato al 29 ottobre 2026.",
  keywords: [
    "NIS2",
    "D.Lgs. 138/2024",
    "Direttiva (UE) 2022/2555",
    "ACN",
    "misure di sicurezza di base",
    "notifica incidenti CSIRT Italia",
    "fornitori rilevanti NIS",
    "organi di amministrazione NIS2",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "Come capisco se la mia azienda è soggetto NIS?",
    a: "Il D.Lgs. 138/2024 si applica ai soggetti pubblici e privati delle tipologie elencate negli allegati I, II, III e IV. Per i settori degli allegati I e II conta la dimensione: il decreto si applica a chi supera i massimali delle piccole imprese, cioè a medie e grandi imprese. Alcuni soggetti rientrano a prescindere dalla dimensione, come i prestatori di servizi fiduciari qualificati, i fornitori di servizi DNS, i gestori di registri di primo livello e le pubbliche amministrazioni centrali. Ogni anno, dal 1° gennaio al 28 febbraio, i soggetti si registrano o aggiornano la registrazione sulla piattaforma dell’ACN.",
  },
  {
    q: "Entro quando vanno adottate le misure di sicurezza di base?",
    a: "La Determinazione ACN 379907/2025 fissa le misure di sicurezza di base: l’allegato 1 per i soggetti importanti, l’allegato 2 per gli essenziali, costruiti sul Framework nazionale per la Cybersecurity e la Data Protection (edizione 2025). Vanno adottate entro 18 mesi dalla ricezione della comunicazione di inserimento nell’elenco nazionale NIS; per la prima tornata di soggetti il termine cade il 31 ottobre 2026. La notifica degli incidenti significativi di base andava garantita entro 9 mesi, cioè da gennaio 2026.",
  },
  {
    q: "In quanto tempo va notificato un incidente significativo?",
    a: "L’art. 25 del D.Lgs. 138/2024 prevede una pre-notifica a CSIRT Italia entro 24 ore da quando il soggetto è venuto a conoscenza dell’incidente significativo, una notifica entro 72 ore con una valutazione iniziale di gravità e impatto, una relazione intermedia su richiesta e una relazione finale entro un mese dalla notifica. Se l’incidente è ancora in corso, si invia una relazione mensile e la relazione finale entro un mese dalla chiusura della gestione.",
  },
  {
    q: "Gli amministratori rispondono personalmente?",
    a: "Gli organi di amministrazione e direttivi approvano le modalità di attuazione delle misure di sicurezza, ne sovrintendono l’attuazione e sono responsabili delle violazioni (art. 23). Devono seguire una formazione in materia di sicurezza informatica. Se il soggetto non si adegua alla diffida dell’ACN, l’Autorità può disporre nei confronti delle persone fisiche responsabili la sanzione accessoria dell’incapacità a svolgere funzioni dirigenziali nel medesimo soggetto (art. 38).",
  },
  {
    q: "Chi sono i fornitori rilevanti NIS?",
    a: "La Determinazione ACN 314287/2026, che si applica dal 25 ottobre 2026 e sostituisce la Determinazione 127437/2026, definisce fornitore rilevante NIS chi fornisce servizi o prodotti a un soggetto NIS e soddisfa almeno uno di due criteri: la fornitura rientra nelle attività ICT dell’allegato I, punti 8 e 9, del decreto (infrastrutture digitali e gestione dei servizi TIC), oppure la sua interruzione o compromissione avrebbe un impatto significativo sul soggetto, anche per mancanza di fornitori alternativi. I soggetti NIS ne comunicano l’elenco all’ACN.",
  },
];

export default function Nis2Page() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "D.Lgs. 4 settembre 2024, n. 138 — Gazzetta Ufficiale n. 230 del 1° ottobre 2024",
          url: "https://www.gazzettaufficiale.it/gazzetta/serie_generale/caricaDettaglio/home?dataPubblicazioneGazzetta=2024-10-01&numeroGazzetta=230",
          note: "testo pubblicato: artt. 3, 6, 7, 23, 24, 25, 38",
        },
        {
          label: "ACN — Modalità e specifiche di base (Determinazione ACN 379907/2025)",
          url: "https://www.acn.gov.it/portale/nis/modalita-specifiche-base",
          note: "misure di sicurezza di base e incidenti significativi di base, con i termini di 18 e 9 mesi",
        },
        {
          label: "Determinazione ACN 314287/2026",
          url: "https://www.acn.gov.it/portale/documents/d/guest/detacn_piattaforma_314287-2026_signeddg",
          note: "piattaforma digitale, punto di contatto, aggiornamenti entro 14 giorni, fornitori rilevanti NIS",
        },
      ]}
      approfondimenti={[
        {
          label: "Come valutare un fornitore AI in un settore regolato",
          href: "/it/risposte/valutare-fornitore-ai-settori-regolati",
          note: "le domande da fare a chi ti fornisce un sistema AI quando sei tu il soggetto vigilato",
        },
        {
          label: "Vulnerability management e CVE nella PLD 2024",
          href: "/it/ricerca/pld-2024-vulnerability-management-cve",
          note: "la gestione delle vulnerabilità come deliverable che serve a più norme",
        },
        {
          label: "Assessment di esposizione",
          href: "/it/assessment",
          note: "incarico a perimetro fisso: quali regimi si applicano e cosa va dimostrato",
        },
        {
          label: "Cosa faccio lunedì mattina",
          href: "https://www.linkedin.com/pulse/cosa-faccio-luned%C3%AC-mattina-corrado-patierno-arx1e/",
          note: "discernere i regimi, compreso il settore regolato e la NIS2, prima di pianificare",
          linkedin: true,
        },
      ]}
      ctaTitle="Le misure si adottano una volta, la prova si tiene sempre"
      ctaSubtitle="L’assessment di esposizione stabilisce quali obblighi NIS2 ti toccano, direttamente o come fornitore, e cosa la tua architettura deve poter dimostrare all’ACN e ai clienti."
    >
      <NormaSection id="a-chi-si-applica" title="A chi si applica">
        <p>
          La NIS2 si applica in Italia attraverso il D.Lgs. 4 settembre 2024, n. 138, che l’ha
          recepita: riguarda i soggetti pubblici e privati delle tipologie elencate nei suoi quattro
          allegati. Gli allegati I e II elencano i settori altamente critici e critici (fra gli
          altri energia, trasporti, banche, sanità, acque, infrastrutture digitali, gestione dei
          servizi TIC, manifattura di determinati prodotti, servizi postali); gli allegati III e IV
          le pubbliche amministrazioni e le ulteriori tipologie di soggetti.
        </p>
        <p>
          Per i settori degli allegati I e II conta la dimensione: il decreto si applica a chi
          supera i massimali delle <strong className="text-[#E6EDF3]">piccole imprese</strong>{" "}
          (art. 3). Fra questi, sono <strong className="text-[#E6EDF3]">soggetti essenziali</strong>{" "}
          quelli dell’allegato I che superano i massimali delle medie imprese e, a prescindere
          dalla dimensione, i soggetti critici, i prestatori di servizi fiduciari qualificati, i
          gestori di registri di primo livello, i fornitori di servizi DNS e le pubbliche
          amministrazioni centrali (art. 6). Tutti gli altri sono{" "}
          <strong className="text-[#E6EDF3]">soggetti importanti</strong>. L’ACN può designare
          come essenziali altri soggetti a prescindere dalla dimensione.
        </p>
        <p>
          Ogni anno, dal 1° gennaio al 28 febbraio, i soggetti si registrano o aggiornano la
          registrazione sulla piattaforma digitale dell’ACN, designando un punto di contatto; entro
          il 31 marzo l’ACN redige l’elenco dei soggetti essenziali e importanti e comunica a
          ciascuno l’inserimento (art. 7).
        </p>
      </NormaSection>

      <NormaSection id="cosa-chiede" title="Cosa chiede">
        <p>
          La NIS2 chiede tre cose: misure di gestione del rischio, notifica degli incidenti
          significativi e una responsabilità chiara in capo ai vertici. Le misure (art. 24) devono
          essere adeguate e proporzionate, basate su un approccio multi-rischio, e comprendere
          almeno:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>politiche di analisi dei rischi e di sicurezza dei sistemi informativi e di rete;</li>
          <li>gestione degli incidenti, comprese le procedure per le notifiche;</li>
          <li>continuità operativa, backup, ripristino in caso di disastro e gestione delle crisi;</li>
          <li>
            sicurezza della catena di approvvigionamento, valutando le vulnerabilità specifiche dei
            fornitori diretti e le loro pratiche di sviluppo sicuro (art. 24, c. 3);
          </li>
          <li>
            sicurezza di acquisizione, sviluppo e manutenzione dei sistemi, compresa la gestione e
            la divulgazione delle vulnerabilità;
          </li>
          <li>valutazione dell’efficacia delle misure, igiene informatica di base e formazione;</li>
          <li>crittografia, sicurezza del personale, controllo degli accessi, gestione degli asset;</li>
          <li>autenticazione a più fattori e comunicazioni protette, ove opportuno.</li>
        </ul>
        <p>
          L’ACN traduce questi elementi in requisiti verificabili con le proprie determinazioni.
          La <strong className="text-[#E6EDF3]">Determinazione 379907/2025</strong> fissa le misure
          di sicurezza di base (allegato 1 per i soggetti importanti, allegato 2 per gli
          essenziali), organizzate per funzioni, categorie, sottocategorie e requisiti del Framework
          nazionale per la Cybersecurity e la Data Protection, e gli incidenti significativi di base
          da notificare (allegati 3 e 4).
        </p>

        <NormaTable caption="NIS2 in Italia: obblighi principali e termini">
          <thead>
            <tr>
              <th scope="col">Fonte</th>
              <th scope="col">Cosa chiede</th>
              <th scope="col">Termine</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Art. 7 D.Lgs. 138/2024</th>
              <td>Registrazione o aggiornamento sulla piattaforma ACN, con punto di contatto</td>
              <td>Ogni anno dal 1° gennaio al 28 febbraio</td>
            </tr>
            <tr>
              <th scope="row">Det. ACN 314287/2026</th>
              <td>Comunicare all’ACN ogni modifica delle informazioni trasmesse</td>
              <td>Entro 14 giorni dalla modifica (dal <time dateTime="2026-10-25">25 ottobre 2026</time>)</td>
            </tr>
            <tr>
              <th scope="row">Det. ACN 379907/2025</th>
              <td>Notificare a CSIRT Italia gli incidenti significativi di base</td>
              <td>Entro 9 mesi dalla comunicazione di inserimento nell’elenco (gennaio 2026)</td>
            </tr>
            <tr>
              <th scope="row">Det. ACN 379907/2025</th>
              <td>Adottare le misure di sicurezza di base</td>
              <td>
                Entro 18 mesi dalla comunicazione di inserimento; prima tornata:{" "}
                <time dateTime="2026-10-31">31 ottobre 2026</time>
              </td>
            </tr>
            <tr>
              <th scope="row">Art. 23 D.Lgs. 138/2024</th>
              <td>
                Approvazione delle misure e supervisione da parte degli organi di amministrazione;
                formazione obbligatoria dei vertici
              </td>
              <td>Continuativo</td>
            </tr>
          </tbody>
        </NormaTable>
      </NormaSection>

      <NormaSection id="notifica-incidenti" title="La notifica degli incidenti">
        <p>
          Un incidente va notificato a CSIRT Italia quando è significativo: quando ha causato, o può
          causare, una grave perturbazione operativa dei servizi o perdite finanziarie per il
          soggetto, oppure ripercussioni su altre persone con perdite materiali o immateriali
          considerevoli (art. 25, c. 4). La notifica non espone chi la fa a una responsabilità
          maggiore di quella che deriva dall’incidente.
        </p>
        <NormaTable caption="Termini di notifica degli incidenti significativi (art. 25, c. 5, D.Lgs. 138/2024)">
          <thead>
            <tr>
              <th scope="col">Passaggio</th>
              <th scope="col">Termine</th>
              <th scope="col">Contenuto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Pre-notifica</th>
              <td>Entro 24 ore dalla conoscenza dell’incidente significativo</td>
              <td>Se possibile, se si sospettano atti illegittimi o malevoli e se c’è impatto transfrontaliero</td>
            </tr>
            <tr>
              <th scope="row">Notifica</th>
              <td>Entro 72 ore dalla conoscenza</td>
              <td>Valutazione iniziale di gravità e impatto, indicatori di compromissione se disponibili</td>
            </tr>
            <tr>
              <th scope="row">Relazione intermedia</th>
              <td>Su richiesta di CSIRT Italia</td>
              <td>Aggiornamenti sulla situazione</td>
            </tr>
            <tr>
              <th scope="row">Relazione finale</th>
              <td>Entro un mese dalla notifica</td>
              <td>Descrizione dettagliata, causa di fondo, misure di attenuazione, impatto transfrontaliero</td>
            </tr>
            <tr>
              <th scope="row">Incidente ancora in corso</th>
              <td>Relazione mensile; finale entro un mese dalla chiusura</td>
              <td>Progressi nella gestione</td>
            </tr>
          </tbody>
        </NormaTable>
      </NormaSection>

      <NormaSection id="vertici-sanzioni" title="Vertici, ACN e sanzioni">
        <p>
          La cybersecurity, nella NIS2, è una responsabilità degli organi di amministrazione e
          direttivi: approvano le modalità di attuazione delle misure, ne sovrintendono
          l’attuazione, sono responsabili delle violazioni, devono seguire una formazione specifica
          e promuoverla per i dipendenti, e vanno informati degli incidenti e delle notifiche (art.
          23). L’ACN è l’autorità nazionale competente NIS e opera anche come CSIRT Italia.
        </p>
        <NormaTable caption="Sanzioni amministrative pecuniarie per le violazioni degli artt. 23, 24 e 25 (art. 38 D.Lgs. 138/2024)">
          <thead>
            <tr>
              <th scope="col">Soggetto</th>
              <th scope="col">Massimo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Soggetti essenziali (escluse le pubbliche amministrazioni)</th>
              <td>10 milioni di euro o 2% del fatturato annuo mondiale, se superiore; minimo un ventesimo del massimo</td>
            </tr>
            <tr>
              <th scope="row">Soggetti importanti (escluse le pubbliche amministrazioni)</th>
              <td>7 milioni di euro o 1,4% del fatturato annuo mondiale, se superiore; minimo un trentesimo del massimo</td>
            </tr>
            <tr>
              <th scope="row">Pubbliche amministrazioni essenziali</th>
              <td>Da 25.000 a 125.000 euro; ridotte di un terzo per le importanti</td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          Oltre alla sanzione all’ente, le persone fisiche che rappresentano o controllano un
          soggetto essenziale possono essere ritenute responsabili dell’inadempimento; se il
          soggetto non si adegua a una diffida, l’ACN può applicare a chi ricopre funzioni
          dirigenziali la sanzione accessoria dell’incapacità a svolgerle nel medesimo soggetto
          (art. 38, cc. 5 e 6).
        </p>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <p>
          <strong className="text-[#E6EDF3]">Un sistema AI di un soggetto NIS è un sistema
          informativo come gli altri.</strong> Se un soggetto essenziale o importante usa un
          assistente, un modello o una pipeline di retrieval nelle proprie attività, quel sistema
          rientra nel perimetro delle misure dell’art. 24: controllo degli accessi, gestione delle
          vulnerabilità, continuità operativa, gestione degli incidenti. Un incidente che passa
          da lì si notifica con gli stessi termini.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Chi fornisce AI a un soggetto NIS può diventare
          fornitore rilevante.</strong> Con la Determinazione 314287/2026 i soggetti NIS comunicano
          all’ACN l’elenco dei fornitori rilevanti: chi eroga servizi ICT delle infrastrutture
          digitali o della gestione dei servizi TIC, o chi è difficile da sostituire. Per un
          fornitore di AI vuol dire ricevere dai clienti domande precise su sviluppo sicuro,
          vulnerabilità e continuità.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Stessa autorità, due norme.</strong> Con il{" "}
          <Link href="/it/normativa/dlgs-179-2026" className="text-[#00B4D8] hover:text-[#E6EDF3]">
            D.Lgs. 179/2026
          </Link>{" "}
          l’ACN è anche autorità di vigilanza del mercato per l’AI Act e tiene il registro
          nazionale dei sistemi ad alto rischio usati nelle infrastrutture critiche (Allegato III,
          punto 2). Un soggetto NIS che usa AI in quel perimetro parla con lo stesso interlocutore
          per entrambe.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <p>
          La NIS2 è la norma orizzontale sulla cibersicurezza; intorno a lei stanno regole di
          settore e di prodotto:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/dora" className="text-[#00B4D8] hover:text-[#E6EDF3]">DORA</Link>{" "}
            — per banche e altre entità finanziarie è lex specialis: dove un atto settoriale impone
            misure e notifiche di effetto almeno equivalente, le disposizioni della NIS2 non si
            applicano (art. 4 della direttiva).
          </li>
          <li>
            <Link href="/it/normativa/cra" className="text-[#00B4D8] hover:text-[#E6EDF3]">Cyber Resilience Act</Link>{" "}
            — regola la sicurezza dei prodotti con elementi digitali che i soggetti NIS acquistano;
            è la controparte, lato fornitore, della sicurezza della catena di approvvigionamento.
          </li>
          <li>
            <Link href="/it/normativa/gdpr" className="text-[#00B4D8] hover:text-[#E6EDF3]">GDPR</Link>{" "}
            — un incidente che coinvolge dati personali può richiedere anche la notifica di
            violazione al Garante, con regole e termini propri.
          </li>
          <li>
            <Link href="/it/normativa/ai-act" className="text-[#00B4D8] hover:text-[#E6EDF3]">AI Act</Link>{" "}
            — i sistemi AI usati come componenti di sicurezza nelle infrastrutture critiche sono ad
            alto rischio (Allegato III, punto 2).
          </li>
        </ul>
        <p>
          Il lavoro utile è uno solo: la gestione delle vulnerabilità serve insieme alla NIS2, al
          GDPR e al Cyber Resilience Act, e un registro degli eventi attribuibile serve anche come
          prova in caso di danno.
        </p>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#E6EDF3]">«La registrazione l’abbiamo fatta, siamo a
            posto».</strong> La registrazione si aggiorna ogni anno e ogni modifica va comunicata
            entro 14 giorni; le misure di sicurezza di base vanno adottate e mantenute.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Siamo una piccola impresa, la NIS2 non ci
            riguarda».</strong> Alcuni soggetti rientrano a prescindere dalla dimensione, e chi
            fornisce servizi ICT a un soggetto NIS può comparire nel suo elenco dei fornitori
            rilevanti.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Notifichiamo quando abbiamo capito cosa è
            successo».</strong> La pre-notifica va fatta entro 24 ore da quando si viene a
            conoscenza dell’incidente significativo; l’analisi completa arriva con la relazione
            finale.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«È una questione dell’IT».</strong> Gli organi di
            amministrazione approvano le misure, sono responsabili delle violazioni e devono essere
            formati; le persone fisiche al vertice possono subire sanzioni accessorie.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Una banca applica NIS2 e DORA allo stesso
            modo».</strong> Per le entità finanziarie DORA prevale dove impone obblighi
            equivalenti; la NIS2 resta il quadro per i soggetti non coperti dall’atto di settore.
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
