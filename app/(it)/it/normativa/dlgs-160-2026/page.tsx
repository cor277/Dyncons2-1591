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
 * text of the decree as published in the Gazzetta Ufficiale (n. 214 of
 * 15 September 2026). The author's August 2026 posts were written before
 * publication: where they differ from the final text, the final text wins.
 */

const SLUG = "dlgs-160-2026";

const LINK = "text-[#00B4D8] hover:text-[#E6EDF3]";

export const metadata = normaMetadata(SLUG, {
  title: "D.Lgs. 160/2026: art. 437-bis c.p., Modelli 231 e responsabilità civile per l’AI",
  description:
    "Il D.Lgs. 9 settembre 2026, n. 160 introduce il reato di omessa sicurezza o sorveglianza umana sui sistemi di AI ad alto rischio, lo porta nel D.Lgs. 231/2001 e facilita la prova del danno: log, nesso presunto, assicuratore.",
  keywords: [
    "D.Lgs. 160/2026",
    "art. 437-bis c.p.",
    "art. 25-vicies D.Lgs. 231/2001",
    "Modello 231 intelligenza artificiale",
    "responsabilità civile AI",
    "esibizione log AI Act",
    "sorveglianza umana reato",
    "art. 359-ter c.p.p.",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "Chi può commettere il reato dell’art. 437-bis c.p.?",
    a: "Chiunque. È un reato comune: lo commette chi omette le misure tecniche di sicurezza o di sorveglianza umana previste per la progettazione, l’addestramento, la produzione o l’immissione sul mercato di sistemi di AI ad alto rischio, se ne deriva un pericolo per la vita o l’incolumità pubblica o individuale (reclusione da 1 a 5 anni) o per la sicurezza dello Stato (da 2 a 8 anni). Il quarto comma punisce con le stesse pene anche l’utilizzatore professionale (deployer) che omette intenzionalmente la sorveglianza umana. Chi altera un sistema ad alto rischio rischia da 2 a 6 anni, da 3 a 10 se il pericolo riguarda la sicurezza dello Stato.",
  },
  {
    q: "Il Modello 231 protegge chi ha progettato il sistema?",
    a: "No. Il Modello di organizzazione, gestione e controllo del D.Lgs. 231/2001 serve a escludere o ridurre la responsabilità dell’ente. La responsabilità penale per il 437-bis resta personale (art. 27 della Costituzione) e ricade sulla persona che ha omesso la misura. Con l’art. 25-vicies il 437-bis e il 612-quater sono diventati reati presupposto: l’ente rischia da 600 a 1.000 quote per il primo, da 200 a 700 per il secondo, oltre a sanzioni interdittive, quindi i Modelli 231 vanno aggiornati.",
  },
  {
    q: "Il reato si applica a un chatbot o a un assistente documentale?",
    a: "Solo se il sistema è ad alto rischio secondo l’AI Act e solo se dall’omissione deriva un pericolo per la vita, l’incolumità o la sicurezza dello Stato. Un assistente che aiuta a ritrovare documenti di solito non è ad alto rischio. Il punto decisivo, quindi, è la classificazione: conviene un documento datato, scritto prima della messa in esercizio, che spieghi perché il sistema rientra o non rientra nelle categorie dell’Allegato III.",
  },
  {
    q: "Cosa cambia nelle cause di risarcimento per danni causati dall’AI?",
    a: "Il giudice può ordinare di esibire i log (art. 12 AI Act), la documentazione sulla gestione dei rischi (art. 9), la documentazione tecnica (art. 11) e i parametri di sorveglianza umana (art. 14). Se la parte non obbedisce senza giustificato motivo e l’ordine riguarda questi documenti, il giudice, valutato ogni altro elemento, ritiene ammessi i fatti allegati da chi chiede il risarcimento. Quando il danno deriva dalla violazione dell’AI Act il nesso causale è presunto, salvo prova contraria, e la conformità, anche certificata, non esclude di per sé la responsabilità.",
  },
  {
    q: "Il danneggiato può agire direttamente contro l’assicuratore?",
    a: "Sì. L’art. 20 del D.Lgs. 160/2026 dà al danneggiato azione diretta contro l’impresa che assicura la responsabilità civile del convenuto, nei limiti del massimale. Prima della causa può chiedere al presunto responsabile se è assicurato: la risposta, con gli estremi della polizza e il nome dell’assicuratore, va data entro trenta giorni, e una risposta omessa o incompleta può essere valutata dal giudice come argomento di prova.",
  },
];

export default function Dlgs160Page() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "D.Lgs. 8 giugno 2001, n. 231",
          url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2001-06-08;231",
          note: "responsabilità degli enti: sanzioni interdittive (art. 9), quote (art. 10), nuovo art. 25-vicies",
        },
        {
          label: "Reg. (UE) 2024/1689 (AI Act)",
          url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          note: "obblighi richiamati dal decreto: artt. 6, 9, 11, 12, 14",
        },
        {
          label: "Dir. (UE) 2024/2853 (prodotti difettosi)",
          url: "https://eur-lex.europa.eu/eli/dir/2024/2853/oj",
          note: "la disciplina italiana di recepimento resta ferma accanto al decreto",
        },
      ]}
      approfondimenti={[
        {
          label: "L’altra metà del problema",
          href: "https://www.linkedin.com/pulse/laltra-met%C3%A0-del-problema-corrado-patierno-whmnf/",
          note: "responsabilità personale, posizione di garanzia e audit trail come condizione della difesa",
          linkedin: true,
        },
        {
          label: "E mò?",
          href: "https://www.linkedin.com/pulse/e-m%C3%B2-corrado-patierno-9fmof/",
          note: "audit dei prodotti, clausole, polizza e audit trail difendibile, nell’ordine",
          linkedin: true,
        },
        {
          label: "Contratti e polizza nel regime PLD 2024",
          href: "/it/ricerca/pld-2024-contratti-e-polizza",
          note: "le clausole e la copertura assicurativa, ora che il danneggiato può chiamare l’assicuratore",
        },
        {
          label: "Costruire un sistema RAG con un audit trail vero",
          href: "/it/risposte/audit-trail-rag",
          note: "cosa registrare perché i log reggano un ordine di esibizione",
        },
        {
          label: "Assessment di esposizione",
          href: "/it/assessment",
          note: "classificazione, ruoli e prove da conservare, messi per iscritto prima della messa in esercizio",
        },
      ]}
      ctaTitle="Il documento che conta è quello datato prima del go-live"
      ctaSubtitle="L’assessment di esposizione mette per iscritto cos’è il tuo sistema per l’AI Act, chi esercita la sorveglianza umana e quali log devono esistere il giorno in cui un giudice li chiede."
    >
      <NormaSection id="a-chi-si-applica" title="A chi si applica">
        <p>
          Il D.Lgs. 160/2026 attua la delega dell’art. 24 della{" "}
          <Link href="/it/normativa/legge-132-2025" className={LINK}>
            Legge 132/2025
          </Link>{" "}
          su tre fronti, con destinatari diversi:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#E6EDF3]">penale</strong> — chiunque partecipi alla filiera di
            un sistema di AI ad alto rischio (progettazione, addestramento, produzione, immissione
            sul mercato) e l’utilizzatore professionale; gli enti, attraverso il D.Lgs. 231/2001;
          </li>
          <li>
            <strong className="text-[#E6EDF3]">civile</strong> — chi chiede o deve pagare il
            risarcimento di un danno cagionato nell’uso di un sistema di AI, qualunque sia la sua
            classe di rischio, e il suo assicuratore;
          </li>
          <li>
            <strong className="text-[#E6EDF3]">polizia</strong> — le Forze di polizia che usano
            sistemi di AI, in particolare per l’identificazione biometrica (Titolo I e art. 359-ter
            c.p.p.).
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="437-bis" title="Il reato: art. 437-bis c.p.">
        <p>
          Dal 30 settembre 2026 omettere le misure tecniche di sicurezza o la sorveglianza umana
          su un sistema di AI ad alto rischio è un delitto, se ne deriva un pericolo per la vita o
          l’incolumità delle persone.
        </p>
        <NormaTable caption="Art. 437-bis c.p.: condotte e pene">
          <thead>
            <tr>
              <th scope="col">Condotta</th>
              <th scope="col">Pericolo per vita o incolumità</th>
              <th scope="col">Pericolo per la sicurezza dello Stato</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                Omettere le misure tecniche di sicurezza (idonee a prevenire malfunzionamenti o
                alterazioni) o la sorveglianza umana nella progettazione, addestramento, produzione o
                immissione sul mercato (c. 1)
              </th>
              <td>reclusione da 1 a 5 anni</td>
              <td>reclusione da 2 a 8 anni</td>
            </tr>
            <tr>
              <th scope="row">Alterare un sistema ad alto rischio, fuori dai casi del c. 1 (c. 2)</th>
              <td>reclusione da 2 a 6 anni</td>
              <td>reclusione da 3 a 10 anni</td>
            </tr>
            <tr>
              <th scope="row">Fatti del c. 1 commessi per colpa grave (c. 3)</th>
              <td colSpan={2}>pena ridotta («da un terzo a un sesto», nel testo pubblicato)</td>
            </tr>
            <tr>
              <th scope="row">
                Utilizzatore professionale (deployer) che omette intenzionalmente la sorveglianza
                umana (c. 4)
              </th>
              <td>reclusione da 1 a 5 anni</td>
              <td>reclusione da 2 a 8 anni</td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          Tre dettagli contano più delle pene. Il primo: è un <strong className="text-[#E6EDF3]">reato
          comune</strong>, che chiunque può commettere, e la responsabilità penale è personale (art.
          27 della Costituzione). Non risponde «l’azienda»: risponde la persona che aveva il compito
          di adottare la misura e non l’ha fatto.
        </p>
        <p>
          Il secondo: serve un <strong className="text-[#E6EDF3]">pericolo</strong>. La delega
          chiedeva un pericolo concreto per la vita, l’incolumità o la sicurezza dello Stato; la
          sola omissione formale, senza conseguenze di questo tipo, non basta. E la previsione della
          colpa grave porta la discussione sul terreno della diligenza professionale: in un processo
          si valuterà cosa avrebbe dovuto fare un progettista accorto in quel momento.
        </p>
        <p>
          Il terzo: il reato <strong className="text-[#E6EDF3]">morde solo sull’alto
          rischio</strong>. Il legislatore lo ha collocato subito dopo l’art. 437 c.p., che punisce
          la rimozione o l’omissione di cautele contro gli infortuni sul lavoro, fra i delitti
          contro l’incolumità pubblica e non fra i reati informatici: la logica è quella della
          sicurezza, non della frode.
        </p>
      </NormaSection>

      <NormaSection id="231" title="Gli enti: art. 25-vicies D.Lgs. 231/2001">
        <p>
          L’art. 15 del decreto inserisce nel D.Lgs. 231/2001 l’art. 25-vicies, «Reati commessi con
          l’uso di sistemi di intelligenza artificiale», che rende due delitti reati presupposto
          della responsabilità dell’ente.
        </p>
        <NormaTable caption="Sanzioni per l’ente (art. 25-vicies D.Lgs. 231/2001)">
          <thead>
            <tr>
              <th scope="col">Reato presupposto</th>
              <th scope="col">Sanzione pecuniaria</th>
              <th scope="col">Sanzioni interdittive (art. 9, c. 2)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Art. 437-bis c.p.</th>
              <td>da 600 a 1.000 quote</td>
              <td rowSpan={2}>
                lett. b) sospensione o revoca di autorizzazioni, licenze o concessioni funzionali
                all’illecito; c) divieto di contrattare con la pubblica amministrazione; d)
                esclusione da agevolazioni, finanziamenti, contributi o sussidi e revoca di quelli
                concessi; e) divieto di pubblicizzare beni o servizi
              </td>
            </tr>
            <tr>
              <th scope="row">Art. 612-quater c.p. (deepfake)</th>
              <td>da 200 a 700 quote</td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          L’art. 10 del D.Lgs. 231/2001 fissa l’importo di una quota fra cinquecentomila e tre
          milioni di lire, cioè circa da 258 a 1.549 euro: per il 437-bis la sanzione va quindi da
          circa 155 mila a circa 1,55 milioni di euro. L’interdizione dall’esercizio dell’attività
          (lett. a) non è fra le sanzioni richiamate.
        </p>
        <p>
          Il Modello 231 protegge la società, non chi decide. Aggiornarlo è necessario, perché un
          ente che usa o fornisce sistemi ad alto rischio ora ha un’area di rischio-reato in più da
          mappare, con protocolli e controlli propri. Ma l’esimente dell’ente non copre il
          responsabile tecnico, il product owner o il dirigente che ha firmato la messa in
          esercizio: per loro la difesa sono le prove di cosa è stato deciso, da chi e quando.
        </p>
      </NormaSection>

      <NormaSection id="responsabilita-civile" title="La responsabilità civile (artt. 16-20)">
        <p>
          Il Capo II del Titolo II cambia il processo civile per i danni causati dall’AI: non
          introduce un nuovo tipo di responsabilità, ma rende molto più facile provarla.
        </p>
        <NormaTable caption="Strumenti processuali per il danneggiato (D.Lgs. 160/2026, artt. 16-20)">
          <thead>
            <tr>
              <th scope="col">Articolo</th>
              <th scope="col">Cosa prevede</th>
              <th scope="col">Quando si applica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">16</th>
              <td>
                Il consumatore danneggiato può agire anche davanti al giudice del luogo in cui ha
                residenza o domicilio; restano ferme l’art. 82 GDPR e la disciplina di recepimento
                della direttiva prodotti difettosi
              </td>
              <td>Ogni azione di risarcimento, contrattuale o extracontrattuale, per danni nell’uso di un sistema di AI</td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td>
                Ordine di esibizione delle prove sul funzionamento del sistema: log (art. 12 AI
                Act), gestione dei rischi (art. 9), documentazione tecnica (art. 11), parametri e
                modalità di sorveglianza umana (art. 14). Ordine proporzionato, con tutela dei
                segreti commerciali. Se la parte non adempie su questi documenti, il giudice ritiene
                ammessi i fatti allegati; il terzo inadempiente paga da 1.500 a 10.000 euro
              </td>
              <td>Ogni azione di risarcimento per danni nell’uso di un sistema di AI, se la domanda è verosimile</td>
            </tr>
            <tr>
              <th scope="row">18</th>
              <td>Nesso di causalità fra violazione e danno presunto, salvo prova contraria</td>
              <td>Quando il danno deriva dalla violazione di obblighi dell’AI Act</td>
            </tr>
            <tr>
              <th scope="row">19</th>
              <td>
                La conformità all’AI Act, anche certificata, «non esclude di per sé» la
                responsabilità del convenuto
              </td>
              <td>Quando il danno deriva dalla violazione di obblighi dell’AI Act</td>
            </tr>
            <tr>
              <th scope="row">20</th>
              <td>
                Richiesta preventiva sull’esistenza di una polizza, con risposta entro trenta
                giorni; azione diretta del danneggiato contro l’assicuratore nei limiti del
                massimale; eccezioni opponibili solo se anteriori al sinistro; rivalsa
                dell’assicuratore sull’assicurato
              </td>
              <td>Ogni azione dell’art. 16</td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          L’effetto pratico è che i log diventano prova, e la loro assenza diventa una prova
          contro. Un sistema che non registra cosa ha proposto e chi ha deciso, o che si appoggia a
          un servizio terzo che conserva i log per pochi mesi, può rendere impossibile dimostrare
          che un’informazione è stata data o che la sorveglianza umana c’è stata.
        </p>
      </NormaSection>

      <NormaSection id="polizia" title="AI per la polizia e art. 359-ter c.p.p.">
        <p>
          Il Titolo I disciplina l’uso dell’AI da parte delle Forze di polizia senza aggiungere
          obblighi rispetto all’AI Act. Prima che l’output di un sistema finisca in un atto che
          incide sui diritti di qualcuno, serve una revisione umana qualificata e documentata (art.
          3, c. 4); i sistemi già in uso vanno resi compatibili entro un anno (art. 21).
        </p>
        <p>
          Il nuovo art. 359-ter c.p.p. ammette l’identificazione biometrica remota in tempo reale
          per i delitti dell’Allegato II dell’AI Act puniti con almeno quattro anni nel massimo, per
          la ricerca di latitanti e di vittime di sottrazione, tratta o sfruttamento sessuale. La
          autorizza il giudice per le indagini preliminari su richiesta del pubblico ministero, con
          decreto motivato che delimita area, persone e durata (al massimo quindici giorni,
          prorogabili); in urgenza decide il pubblico ministero, con convalida del giudice. I
          risultati ottenuti fuori da queste regole non sono utilizzabili, e le banche dati
          alimentate con scraping non mirato sono vietate.
        </p>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <p>
          <strong className="text-[#E6EDF3]">Un documento di classificazione datato, prima della
          messa in esercizio.</strong> Il reato e la presunzione di nesso causale girano intorno
          agli obblighi dell’AI Act, e i più pesanti valgono solo per l’alto rischio. La prima
          difesa è un documento scritto prima del go-live che spieghi, categoria per categoria
          dell’Allegato III, perché il sistema ne resta fuori o in quale rientra. Per un sistema che
          ricade in un’area dell’Allegato III ma non è ritenuto ad alto rischio, l’art. 6(4)
          dell’AI Act lo rende già un obbligo del fornitore.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Companion o decisore: il confine si decide nella
          specifica.</strong> Un assistente che affianca una persona e non causa nulla non integra
          il 437-bis, ma i suoi log entrano nel fascicolo come prova di cosa la persona sapeva.
          Dove il sistema suggerisce e dove decide va scritto nei requisiti e reso visibile
          nell’interfaccia, non ricostruito dopo un incidente.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Log attribuibili e conservati quanto serve.</strong>{" "}
          L’ordine di esibizione dell’art. 17 riguarda proprio log, gestione dei rischi,
          documentazione tecnica e sorveglianza umana. Conviene decidere adesso quanto a lungo
          conservarli, dove, e come dimostrare che non sono stati alterati.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">La polizza entra nel progetto.</strong> Con l’azione
          diretta il danneggiato può chiamare l’assicuratore, che potrà rivalersi sull’assicurato
          quando il contratto gli avrebbe permesso di rifiutare o ridurre il pagamento. Le
          esclusioni della polizza vanno lette insieme all’architettura del sistema.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">La conformità si dichiara, la responsabilità si
          dimostra.</strong> L’art. 19 lo dice in modo esplicito: neanche una certificazione
          esclude di per sé la responsabilità.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/ai-act" className={LINK}>AI Act</Link> — definisce l’alto
            rischio e gli obblighi la cui violazione fa scattare reato e presunzioni; gli obblighi
            per l’Allegato III partono il 2 dicembre 2027, quelli per l’Allegato I il 2 agosto 2028.
          </li>
          <li>
            <Link href="/it/normativa/pld" className={LINK}>Direttiva prodotti difettosi</Link> —
            il decreto la fa salva: per i prodotti immessi sul mercato dopo l’8 dicembre 2026 si
            aggiungono divulgazione delle prove e presunzioni della direttiva.
          </li>
          <li>
            <Link href="/it/normativa/gdpr" className={LINK}>GDPR</Link> — resta fermo il diritto al
            risarcimento dell’art. 82.
          </li>
          <li>
            <Link href="/it/normativa/legge-132-2025" className={LINK}>Legge 132/2025</Link> — la
            legge delega; il reato di deepfake (art. 612-quater c.p.) viene da lì.
          </li>
          <li>
            <Link href="/it/normativa/dlgs-179-2026" className={LINK}>D.Lgs. 179/2026</Link> — il
            decreto gemello: autorità, sanzioni amministrative, lavoro e formazione.
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#E6EDF3]">«Abbiamo il Modello 231, siamo coperti».</strong> Il
            Modello protegge l’ente. La responsabilità penale per il 437-bis è personale.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Il reato riguarda solo chi sviluppa».</strong> Il
            primo comma copre tutta la filiera, dalla progettazione all’immissione sul mercato; il
            quarto punisce il deployer che omette intenzionalmente la sorveglianza umana.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Gli obblighi per l’alto rischio partono nel 2027,
            quindi il reato non ci riguarda ancora».</strong> La proroga sposta le scadenze, non le
            decisioni: un sistema che sarà in esercizio nel 2027 si classifica e si progetta adesso,
            e le regole sulla prova civile dell’art. 17 valgono già per ogni sistema di AI.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Siamo certificati, non possiamo essere
            responsabili».</strong> L’art. 19 dice il contrario.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«I log li tiene il fornitore del modello».</strong>{" "}
            Se non li puoi esibire tu, il giudice può ritenere ammessi i fatti allegati da chi ti
            chiede il risarcimento.
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
