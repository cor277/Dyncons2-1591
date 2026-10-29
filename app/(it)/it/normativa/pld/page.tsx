import Link from "next/link";
import { normaMetadata } from "@/app/normativa";
import {
  NormaPageLayout,
  NormaSection,
  NormaTable,
  type NormaFaq,
} from "@/components/sections/NormaPageLayout";

/*
 * Product Liability Directive (EU) 2024/2853 and its Italian transposition.
 * Article references checked against the official Italian text on EUR-Lex.
 * The Italian decree was approved by the Council of Ministers on 28 October
 * 2026 and is not yet in the Gazzetta Ufficiale: its status lives in the
 * registry entry in app/normativa.ts.
 */

const SLUG = "pld";
const LINK = "text-[#00B4D8] hover:text-[#E6EDF3]";
const STRONG = "text-[#E6EDF3]";

export const metadata = normaMetadata(SLUG, {
  title: "Direttiva prodotti difettosi (Dir. (UE) 2024/2853): software, AI e recepimento in Italia",
  description:
    "La nuova responsabilità da prodotto difettoso per software e sistemi di AI: operatori responsabili, divulgazione delle prove, presunzioni, solidarietà, clausole nulle, termini, prodotti immessi dopo l’8 dicembre 2026 e decreto italiano approvato il 28 ottobre 2026.",
  keywords: [
    "Direttiva prodotti difettosi",
    "Direttiva (UE) 2024/2853",
    "PLD software",
    "responsabilità da prodotto AI",
    "recepimento PLD Italia",
    "Codice del consumo prodotti difettosi",
    "software house responsabilità",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "Da quando si applica la nuova direttiva sui prodotti difettosi?",
    a: "Ai prodotti immessi sul mercato o messi in servizio dopo l’8 dicembre 2026, come chiarito dalla rettifica pubblicata il 7 maggio 2026. Per i prodotti immessi prima continua ad applicarsi la vecchia direttiva 85/374/CEE (art. 21). Gli Stati membri devono recepirla entro il 9 dicembre 2026 (art. 22).",
  },
  {
    q: "Il software è un prodotto anche se non è venduto su un supporto fisico?",
    a: "Sì. L’art. 4, punto 1, include espressamente il software nella definizione di prodotto, indipendentemente da come è fornito; i sistemi di AI ci rientrano. È escluso solo il software libero e open source sviluppato o fornito al di fuori di un’attività commerciale (art. 2, par. 2).",
  },
  {
    q: "Posso limitare per contratto la mia responsabilità da prodotto difettoso?",
    a: "Non verso il danneggiato. L’art. 15 vieta che la responsabilità di un operatore economico sia esclusa o limitata, nei confronti del danneggiato, da clausole contrattuali o dal diritto nazionale. Le clausole fra imprese possono regolare la rivalsa tra loro, ma non cambiano ciò che il danneggiato può chiedere a ciascuno degli operatori responsabili in solido (art. 12).",
  },
  {
    q: "Per quanto tempo si può essere chiamati a rispondere?",
    a: "Il danneggiato deve agire entro tre anni da quando ha conosciuto o avrebbe dovuto conoscere danno, difetto e identità del responsabile (art. 16). Il diritto si estingue comunque dieci anni dopo l’immissione sul mercato o la messa in servizio del prodotto; in caso di modifica sostanziale il termine riparte dalla nuova messa a disposizione. Per le lesioni personali con periodo di latenza il limite è di 25 anni (art. 17).",
  },
  {
    q: "Il decreto italiano di recepimento è già in vigore?",
    a: "Non ancora. Il Consiglio dei ministri ha approvato in via definitiva il decreto legislativo di attuazione della Direttiva (UE) 2024/2853 il 28 ottobre 2026 (comunicato n. 195). Al 29 ottobre 2026 non risulta pubblicato in Gazzetta Ufficiale, quindi numero, testo definitivo e data di entrata in vigore non sono ancora disponibili.",
  },
];

export default function PldPage() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "Rettifica della Direttiva (UE) 2024/2853 (7 maggio 2026)",
          url: "https://eur-lex.europa.eu/eli/dir/2024/2853/corrigendum/2026-05-07/oj/eng",
          note: "applicazione ai prodotti immessi sul mercato dopo l’8 dicembre 2026",
        },
        {
          label: "Testo italiano della Direttiva (UE) 2024/2853",
          url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32024L2853",
          note: "EUR-Lex",
        },
      ]}
      approfondimenti={[
        {
          label: "Serie editoriale: PLD 2024 e AI governance",
          href: "/it/ricerca/serie-editoriale",
          note: "tutti gli articoli della serie in un posto",
        },
        {
          label: "I sette cambi strutturali che ridefiniscono il mestiere delle software house",
          href: "/it/ricerca/pld-2024-sette-cambi-strutturali",
        },
        {
          label: "I 5 + 1 scenari di sviluppo software e le esposizioni che generano",
          href: "/it/ricerca/pld-2024-cinque-piu-uno-scenari",
          note: "software house, dipendenti, consulenti esterni",
        },
        {
          label: "Il decennio che cambia tutto",
          href: "/it/ricerca/pld-2024-decennio-responsabilita",
          note: "responsabilità solidale, insolvenza della software house, copertura postuma",
        },
        {
          label: "Vulnerability management e gestione CVE",
          href: "/it/ricerca/pld-2024-vulnerability-management-cve",
        },
        {
          label: "La fuga giurisdizionale, e perché non esiste",
          href: "/it/ricerca/pld-2024-fuga-giurisdizionale",
        },
        {
          label: "Contratti e polizza nel regime PLD 2024",
          href: "/it/ricerca/pld-2024-contratti-e-polizza",
          note: "venti clausole, tre prospettive, una scorciatoia da non firmare",
        },
        {
          label: "L’altra metà del problema",
          href: "https://www.linkedin.com/pulse/laltra-met%C3%A0-del-problema-corrado-patierno-whmnf/",
          note: "audit trail tecnico e governance documentale come condizione della difesa",
          linkedin: true,
        },
        {
          label: "E mò?",
          href: "https://www.linkedin.com/pulse/e-m%C3%B2-corrado-patierno-9fmof/",
          note: "quattro movimenti prima del 9 dicembre",
          linkedin: true,
        },
        {
          label: "Cosa faccio lunedì mattina",
          href: "https://www.linkedin.com/pulse/cosa-faccio-luned%C3%AC-mattina-corrado-patierno-arx1e/",
          note: "dal quadro dei regimi al piano di progetto",
          linkedin: true,
        },
        {
          label: "Assessment di esposizione",
          href: "/it/assessment",
          note: "ruolo nella filiera, contratti, polizza e prove da conservare",
        },
      ]}
      ctaTitle="Dieci anni di responsabilità partono dal go-live"
      ctaSubtitle="L’assessment di esposizione stabilisce che ruolo hai nella filiera di ogni prodotto, cosa dicono i tuoi contratti e la tua polizza, e quali prove il sistema deve conservare."
    >
      <NormaSection id="a-chi-si-applica" title="A chi si applica">
        <p>
          La Direttiva (UE) 2024/2853 rende responsabile del danno chi fabbrica un prodotto
          difettoso, e per prodotto intende anche il software. L’art. 4, punto 1, lo dice in modo
          espresso: un sistema di AI, un’app, un firmware o un componente software integrato in un
          altro prodotto rientrano nella definizione. Resta fuori solo il software libero e open
          source sviluppato o fornito al di fuori di un’attività commerciale (art. 2, par. 2).
        </p>
        <p>
          Il cuore della direttiva è l’elenco degli operatori che rispondono, all’art. 8:
        </p>
        <NormaTable caption="Chi risponde del danno da prodotto difettoso (art. 8)">
          <thead>
            <tr>
              <th scope="col">Disposizione</th>
              <th scope="col">Chi</th>
              <th scope="col">Quando</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Par. 1, lett. a)</th>
              <td>Fabbricante del prodotto</td>
              <td>Sempre, anche per i componenti integrati sotto il suo controllo</td>
            </tr>
            <tr>
              <th scope="row">Par. 1, lett. b)</th>
              <td>Fabbricante del componente difettoso, software compreso</td>
              <td>Se il componente, integrato sotto il controllo del fabbricante, ha reso difettoso il prodotto</td>
            </tr>
            <tr>
              <th scope="row">Par. 1, lett. c)</th>
              <td>
                Per un fabbricante stabilito fuori dall’UE: (i) l’importatore, (ii) il
                rappresentante autorizzato e (iii), se nessuno dei due è stabilito nell’UE, il
                fornitore di servizi di logistica
              </td>
              <td>Fatta salva la responsabilità del fabbricante extra-UE</td>
            </tr>
            <tr>
              <th scope="row">Par. 2</th>
              <td>Chi modifica in modo sostanziale il prodotto fuori dal controllo del fabbricante</td>
              <td>Se poi lo mette a disposizione sul mercato o in servizio: è considerato fabbricante</td>
            </tr>
            <tr>
              <th scope="row">Par. 3</th>
              <td>Ogni distributore</td>
              <td>
                Se nessun operatore del par. 1 stabilito nell’UE è identificabile e il distributore,
                su richiesta del danneggiato, non indica un operatore UE o il proprio fornitore
                entro un mese
              </td>
            </tr>
            <tr>
              <th scope="row">Par. 4</th>
              <td>Piattaforme online che consentono ai consumatori di concludere contratti a distanza</td>
              <td>Alle stesse condizioni del distributore, quando si presentano in modo da far credere di essere loro a fornire il prodotto (art. 6, par. 3, Reg. (UE) 2022/2065)</td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          Due conseguenze pratiche. Chi rivende in Europa prodotti di un fabbricante extra-UE senza
          indicare un operatore stabilito nell’Unione può trovarsi a rispondere al suo posto. E chi
          integra un modulo di AI di terzi nel proprio prodotto, o lo modifica in modo sostanziale,
          risponde del prodotto intero, accanto al fornitore del modulo.
        </p>
      </NormaSection>

      <NormaSection id="cosa-chiede" title="Cosa chiede">
        <p>
          La direttiva non impone adempimenti: stabilisce chi paga quando un prodotto non offre la
          sicurezza che ci si può legittimamente attendere, e rende molto più semplice la prova per
          chi ha subito il danno.
        </p>
        <NormaTable caption="Le regole della Direttiva (UE) 2024/2853 che contano per chi fa software">
          <thead>
            <tr>
              <th scope="col">Articolo</th>
              <th scope="col">Cosa stabilisce</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">6</th>
              <td>
                Danni risarcibili: morte e lesioni personali, compresi i danni psicologici
                riconosciuti dal punto di vista medico; danni a beni non usati esclusivamente a fini
                professionali; distruzione o corruzione di dati non usati a fini professionali
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>
                Difettosità valutata anche sulla capacità del prodotto di continuare a imparare dopo
                l’immissione sul mercato, sui requisiti di cibersicurezza rilevanti per la sicurezza
                e sul momento in cui il prodotto esce dal controllo del fabbricante
              </td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>
                Divulgazione delle prove: se la domanda è plausibile, il giudice può ordinare al
                convenuto di esibire gli elementi di prova pertinenti, con tutela dei segreti
                commerciali
              </td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>
                Presunzioni: di difettosità se il convenuto non divulga le prove, se il prodotto non
                rispetta requisiti obbligatori di sicurezza o se c’è un malfunzionamento evidente
                (par. 2); di nesso causale se il danno è compatibile con il difetto (par. 3); di
                entrambi in caso di eccessiva complessità tecnica o scientifica (par. 4). Tutte
                confutabili (par. 5)
              </td>
            </tr>
            <tr>
              <th scope="row">11, par. 2</th>
              <td>
                Finché il prodotto è sotto il controllo del fabbricante, non ci si libera provando che
                il difetto è sopravvenuto, se dipende dal software, dai suoi aggiornamenti o dalla
                mancanza degli aggiornamenti di sicurezza necessari
              </td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>
                Responsabilità in solido di più operatori per lo stesso danno; chi integra un
                componente software fornito da una micro o piccola impresa perde la rivalsa verso di
                essa se vi ha rinunciato per contratto (par. 2)
              </td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>
                La responsabilità verso il danneggiato non può essere esclusa né limitata da clausole
                contrattuali o dal diritto nazionale
              </td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td>Prescrizione: tre anni da quando il danneggiato conosce danno, difetto e responsabile</td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td>
                Estinzione: dieci anni dall’immissione sul mercato o messa in servizio, che
                ripartono dopo una modifica sostanziale; 25 anni per le lesioni personali latenti
              </td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          La direttiva si applica ai prodotti immessi sul mercato o messi in servizio{" "}
          <strong className={STRONG}>dopo l’8 dicembre 2026</strong>: il testo originale indicava il
          9 dicembre, la rettifica del 7 maggio 2026 ha corretto la data. Per i prodotti immessi
          prima resta la direttiva 85/374/CEE (art. 21).
        </p>
      </NormaSection>

      <NormaSection id="recepimento-italia" title="Il recepimento in Italia">
        <p>
          Il Consiglio dei ministri ha approvato in via definitiva il decreto legislativo di
          attuazione della Direttiva (UE) 2024/2853 il <strong className={STRONG}>28 ottobre
          2026</strong> (comunicato n. 195), dopo l’esame preliminare del 4 agosto 2026 e i pareri
          delle commissioni parlamentari. Al 29 ottobre 2026 il decreto non è ancora pubblicato in
          Gazzetta Ufficiale: numero, testo definitivo e data di entrata in vigore si conosceranno
          solo con la pubblicazione.
        </p>
        <p>
          In Italia la responsabilità da prodotto difettoso sta oggi negli artt. 114-127 del Codice
          del consumo, che attuano la vecchia direttiva; il nuovo decreto interviene su quella
          disciplina. Il termine di recepimento è il 9 dicembre 2026 (art. 22). Questa pagina verrà
          aggiornata con il riferimento in Gazzetta.
        </p>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <p>
          Per una software house la direttiva sposta il rischio dal contratto al prodotto. Il
          metodo che propongo nella serie dedicata alla PLD si riassume in quattro mosse, da fare
          prima che i nuovi prodotti vadano in produzione.
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong className={STRONG}>Mappa i prodotti e il tuo ruolo in ciascuno.</strong> Per
            ogni prodotto stabilisci se sei fabbricante, fabbricante di un componente o integratore,
            ricordando che aggiornamenti e funzioni di AI sono parte del prodotto. Un modulo di AI di
            terzi rivenduto con il tuo marchio ti rende fabbricante (art. 8) e responsabile in solido
            con chi te lo ha fornito (art. 12).
          </li>
          <li>
            <strong className={STRONG}>Rileggi i contratti.</strong> Cerca nel contratto tipo le
            parole «difetto» e «aggiornamento». La clausola che scarica tutto sul cliente non regge
            verso il danneggiato (art. 15) e, nel migliore dei casi, regola solo la rivalsa fra te e
            il cliente.
          </li>
          <li>
            <strong className={STRONG}>Verifica la polizza.</strong> Una copertura professionale per
            il software senza estensione alla responsabilità da prodotto, senza retroattività o con
            una copertura postuma più corta dei dieci anni dell’art. 17 lascia scoperta proprio la
            parte nuova del rischio.
          </li>
          <li>
            <strong className={STRONG}>Costruisci prove difendibili.</strong> Le presunzioni dell’art.
            10 scattano anche quando non divulghi le prove richieste ai sensi dell’art. 9. Servono
            log attribuibili e non manipolabili, versioni e aggiornamenti tracciati, decisioni di
            progetto datate, conservati per tutto il periodo in cui puoi essere chiamato a
            rispondere.
          </li>
        </ol>
        <h3 className="text-xl font-semibold text-[#E6EDF3]">B2C e B2B non pesano allo stesso modo</h3>
        <p>
          La prima domanda per capire quanto sei esposto è a chi arriva il tuo prodotto. Se arriva
          ai consumatori, la PLD si applica in pieno, e con essa le regole del Codice del consumo e,
          per i contenuti generati con l’AI, la trasparenza dell’AI Act. Se lavori solo fra imprese
          in un settore non regolato, l’esposizione è soprattutto contrattuale e passa per il Codice
          civile, perché la direttiva non risarcisce i danni a beni usati esclusivamente a fini
          professionali né la perdita di dati professionali.
        </p>
        <p>
          «Soprattutto», non «soltanto»: morte e lesioni personali sono risarcibili chiunque sia il
          danneggiato, e un prodotto venduto a un’impresa può finire nelle mani di consumatori. La
          scorciatoia «siamo B2B, la PLD non ci riguarda» va verificata prodotto per prodotto, non
          data per scontata.
        </p>
        <p>
          Il go-live diventa così un atto formale: fa partire i dieci anni dell’art. 17 e conviene
          che sia accompagnato da un fascicolo con la documentazione del prodotto, chi ha firmato,
          una data certa e la polizza in essere. Una modifica sostanziale successiva fa ripartire
          il termine e riapre la valutazione.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/dlgs-160-2026" className={LINK}>D.Lgs. 160/2026</Link> — per i
            danni causati da sistemi di AI, esibizione dei log e nesso causale presunto in caso di
            violazione dell’AI Act; fa salva espressamente la normativa di recepimento della PLD.
          </li>
          <li>
            <Link href="/it/normativa/ai-act" className={LINK}>AI Act</Link> — un requisito
            obbligatorio di sicurezza non rispettato è uno dei casi in cui la PLD presume la
            difettosità (art. 10, par. 2, lett. b).
          </li>
          <li>
            <Link href="/it/normativa/cra" className={LINK}>Cyber Resilience Act</Link> — i requisiti
            di cibersicurezza rilevanti per la sicurezza entrano nella valutazione del difetto (art.
            7); gestione delle vulnerabilità e aggiornamenti diventano anche una questione di
            responsabilità civile.
          </li>
          <li>
            <Link href="/it/normativa/gdpr" className={LINK}>GDPR</Link> — la direttiva lascia
            impregiudicata la protezione dei dati (art. 2, par. 4): un incidente può dare luogo a
            entrambe le responsabilità.
          </li>
        </ul>
        <p>
          Le norme si sommano: lo stesso fatto può generare più titoli di responsabilità. Per lo
          stesso motivo un deliverable ben fatto ne copre più d’una: la tracciabilità serve alla PLD
          e al GDPR, la gestione delle vulnerabilità alla PLD, al CRA e alla NIS2.
        </p>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className={STRONG}>«Il software è un servizio, non un prodotto».</strong> Per la
            direttiva il software è un prodotto (art. 4, punto 1), sistemi di AI compresi.
          </li>
          <li>
            <strong className={STRONG}>«Abbiamo una clausola di esonero».</strong> Verso il
            danneggiato non vale (art. 15).
          </li>
          <li>
            <strong className={STRONG}>«Il difetto è nato con un aggiornamento successivo».</strong>{" "}
            Se il prodotto è sotto il tuo controllo, il difetto dovuto al software o alla mancanza di
            aggiornamenti di sicurezza non ti esonera (art. 11, par. 2).
          </li>
          <li>
            <strong className={STRONG}>«Il fabbricante è fuori dall’UE, non ci riguarda».</strong>{" "}
            Importatore, rappresentante autorizzato, fornitore di servizi di logistica, distributore
            e piattaforma possono rispondere al suo posto (art. 8).
          </li>
          <li>
            <strong className={STRONG}>«La legge italiana è già in vigore».</strong> Al 29 ottobre
            2026 il decreto di recepimento è approvato ma non pubblicato in Gazzetta; la direttiva
            fissa comunque l’applicazione ai prodotti immessi sul mercato dopo l’8 dicembre 2026.
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
