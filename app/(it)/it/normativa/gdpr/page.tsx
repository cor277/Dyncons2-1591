import Link from "next/link";
import { normaMetadata } from "@/app/normativa";
import {
  NormaPageLayout,
  NormaSection,
  NormaTable,
  type NormaFaq,
} from "@/components/sections/NormaPageLayout";

/*
 * GDPR and Italian Privacy Code, seen from whoever designs or uses AI systems.
 * Facts from the verified notes of 29 October 2026 and the official texts
 * linked below; dates and status come from the registry entry in
 * app/normativa.ts. The data Digital Omnibus (COM(2025) 837) is a proposal and
 * is always presented as such.
 */

const SLUG = "gdpr";
const LINK = "text-[#00B4D8] hover:text-[#E6EDF3]";
const STRONG = "text-[#E6EDF3]";

export const metadata = normaMetadata(SLUG, {
  title: "GDPR e AI (Reg. (UE) 2016/679 e Codice privacy): cosa chiede a chi progetta e usa sistemi di AI",
  description:
    "Basi giuridiche, finalità, DPIA, art. 22, diritto alla cancellazione su vector store ed embedding, responsabile del trattamento, trasferimenti extra-UE, Garante ed EDPB: il GDPR per chi costruisce o usa AI in Italia. Aggiornato al 29 ottobre 2026.",
  keywords: [
    "GDPR",
    "GDPR intelligenza artificiale",
    "Regolamento (UE) 2016/679",
    "Codice privacy",
    "DPIA AI",
    "art. 22 GDPR",
    "diritto all’oblio embedding",
    "vector store GDPR",
    "Garante privacy AI",
    "linee guida EDPB anonimizzazione",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "Gli embedding di un vector store sono dati personali?",
    a: "Se derivano da testi o documenti che contengono dati personali, vanno trattati come dati personali: un vettore resta collegato al contenuto da cui è stato calcolato e, con mezzi ragionevoli, può consentire di risalire alla persona. Nel parere 28/2024 l’EDPB ha chiarito che nemmeno un modello addestrato con dati personali può essere considerato anonimo in automatico: va valutato caso per caso. Ne segue che i diritti degli artt. 15-20 GDPR, cancellazione compresa, si estendono anche agli indici vettoriali, alle cache e alle copie derivate.",
  },
  {
    q: "Serve una DPIA per un sistema di AI che tratta dati personali?",
    a: "Spesso sì. L’art. 35 GDPR chiede la valutazione d’impatto prima del trattamento quando, considerati l’uso di nuove tecnologie, la natura, l’ambito, il contesto e le finalità, il trattamento può presentare un rischio elevato per i diritti delle persone; è sempre richiesta, fra l’altro, per valutazioni sistematiche basate su trattamenti automatizzati che producono effetti giuridici e per trattamenti su larga scala di dati sanitari. Nel provvedimento n. 710 del 23 settembre 2026 il Garante ha contestato anche la mancata DPIA.",
  },
  {
    q: "Posso far firmare al cliente una clausola che lo rende unico responsabile dei dati?",
    a: "Puoi ripartire i compiti, non cancellare gli obblighi che la legge ti attribuisce. Chi sviluppa e gestisce un sistema che tratta dati per conto dei clienti è responsabile del trattamento ai sensi dell’art. 28 GDPR, deve adottare misure di sicurezza adeguate (art. 32) e risponde del danno verso l’interessato secondo l’art. 82. I dati sono delle persone, clienti dei tuoi clienti, che non hanno firmato quel contratto.",
  },
  {
    q: "Il GDPR obbliga a tenere i dati in Italia o nell’Unione europea?",
    a: "No. Il GDPR non impone la residenza dei dati: disciplina i trasferimenti verso paesi terzi (artt. 44-50), che sono leciti con una decisione di adeguatezza, con garanzie adeguate come le clausole contrattuali tipo o con le deroghe dell’art. 49. Per gli Stati Uniti c’è la decisione di adeguatezza sul Data Privacy Framework (Decisione di esecuzione (UE) 2023/1795), che vale solo verso le organizzazioni certificate. Dopo la sentenza Schrems II (C-311/18) chi trasferisce deve comunque valutare la legislazione del paese di destinazione.",
  },
  {
    q: "Il Digital Omnibus ha già cambiato il GDPR?",
    a: "No. La proposta COM(2025) 837, che interviene su GDPR, ePrivacy, Data Act e segnalazioni di incidenti, ha ottenuto l’orientamento generale del Consiglio il 21 ottobre 2026, ma mancano la posizione del Parlamento europeo e i triloghi. Fino all’adozione e alla pubblicazione in Gazzetta ufficiale valgono le regole attuali, compresa la notifica delle violazioni al Garante entro 72 ore (art. 33).",
  },
];

export default function GdprPage() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "Garante privacy — newsletter: sanzione di 7 milioni di euro a IQVIA (provv. n. 710 del 23 settembre 2026)",
          url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10305399",
          note: "dati sanitari ritenuti non anonimi per un codice persistente",
        },
        {
          label: "EDPB — linee guida su anonimizzazione e web scraping per l’AI generativa (8 luglio 2026)",
          url: "https://www.edpb.europa.eu/news/edpb-sheds-light-on-anonymisation-and-web-scraping-for-generative-ai-and-adopts-final-version_en",
          note: "consultazione pubblica fino al 30 ottobre 2026",
        },
        {
          label: "EDPB — Parere 28/2024 sui modelli di AI (18 dicembre 2024)",
          url: "https://www.edpb.europa.eu/documents/opinion-of-the-board-art-64/opinion-282024-on-certain-data-protection-aspects-related-to_en",
          note: "anonimato dei modelli, interesse legittimo, conseguenze del trattamento illecito",
        },
        {
          label: "Decisione di esecuzione (UE) 2023/1795 — EU-US Data Privacy Framework",
          url: "https://eur-lex.europa.eu/eli/dec_impl/2023/1795/oj",
          note: "decisione di adeguatezza per le organizzazioni statunitensi certificate",
        },
        {
          label: "Garante privacy — avvertimento sui deepfake (dicembre 2025)",
          url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10306949",
        },
      ]}
      approfondimenti={[
        {
          label: "RAG sui dati aziendali",
          href: "/it/ricerca/rag-dati-aziendali",
          note: "dove stanno i dati in un sistema di retrieval e cosa ne segue",
        },
        {
          label: "Audit trail per un sistema RAG",
          href: "/it/risposte/audit-trail-rag",
          note: "cosa registrare per poter ricostruire una risposta",
        },
        {
          label: "Come valutare un fornitore di AI nei settori regolati",
          href: "/it/risposte/valutare-fornitore-ai-settori-regolati",
        },
        {
          label: "AI sanitaria on-premise",
          href: "/it/ai-sanitaria-on-premise",
          note: "dati sanitari, Legge 132/2025 e residenza dei dati",
        },
        {
          label: "Assessment di esposizione",
          href: "/it/assessment",
          note: "quali regimi si applicano al tuo sistema e cosa l’architettura deve poter dimostrare",
        },
      ]}
      ctaTitle="Il diritto alla cancellazione si progetta, non si promette"
      ctaSubtitle="L’assessment di esposizione verifica dove finiscono i dati personali nel tuo sistema di AI, chi ne risponde e cosa l’architettura deve poter dimostrare al Garante."
    >
      <NormaSection id="a-chi-si-applica" title="A chi si applica">
        <p>
          Il GDPR si applica a ogni trattamento di dati personali, compresi quelli usati per
          addestrare, alimentare o interrogare un sistema di AI. Conta il ruolo: il{" "}
          <strong className={STRONG}>titolare</strong> decide finalità e mezzi del trattamento, il{" "}
          <strong className={STRONG}>responsabile</strong> tratta i dati per conto del titolare (art.
          28). Una software house che gestisce un assistente per i propri clienti è di norma
          responsabile; se riusa quei dati per scopi propri, per esempio per addestrare un modello,
          diventa titolare di quel trattamento, con tutti gli obblighi che ne seguono.
        </p>
        <p>
          Vale anche per chi è stabilito fuori dall’Unione, se offre beni o servizi a persone che si
          trovano nell’UE o ne monitora il comportamento (art. 3, par. 2). In Italia il GDPR si
          applica direttamente, insieme al Codice privacy (D.Lgs. 196/2003, come modificato dal
          D.Lgs. 101/2018), che ne completa alcune parti: fra le altre, le basi giuridiche per i
          trattamenti di interesse pubblico, le misure di garanzia per dati genetici, biometrici e
          relativi alla salute (art. 2-septies) e la ricerca medica (art. 110).
        </p>
      </NormaSection>

      <NormaSection id="cosa-chiede" title="Cosa chiede">
        <p>
          Il GDPR non ha un capitolo sull’intelligenza artificiale: le chiede le stesse cose che
          chiede a ogni trattamento, e ognuna diventa una scelta di progetto.
        </p>
        <NormaTable caption="Articoli del GDPR che pesano di più su un sistema di AI">
          <thead>
            <tr>
              <th scope="col">Articolo</th>
              <th scope="col">Cosa chiede</th>
              <th scope="col">Dove morde in un sistema di AI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">5, par. 1, lett. b)</th>
              <td>Limitazione della finalità: dati raccolti per uno scopo non si riusano per uno scopo incompatibile</td>
              <td>Riuso di documenti, ticket, colloqui o cartelle per addestrare o valutare un modello</td>
            </tr>
            <tr>
              <th scope="row">6 e 9</th>
              <td>
                Una base giuridica per ogni trattamento; per le categorie particolari (salute,
                biometria, opinioni) anche una delle eccezioni dell’art. 9, par. 2
              </td>
              <td>Addestramento, arricchimento del contesto (RAG), web scraping, analisi di dati sanitari</td>
            </tr>
            <tr>
              <th scope="row">13 e 14</th>
              <td>Informativa, compresa l’esistenza di decisioni automatizzate e la logica utilizzata</td>
              <td>Assistenti rivolti a clienti, pazienti o candidati</td>
            </tr>
            <tr>
              <th scope="row">15–20</th>
              <td>Accesso, rettifica, cancellazione, limitazione, portabilità</td>
              <td>Dati copiati in indici vettoriali, cache, log, dataset di addestramento</td>
            </tr>
            <tr>
              <th scope="row">22</th>
              <td>
                Diritto a non essere sottoposti a decisioni basate unicamente su un trattamento
                automatizzato che producono effetti giuridici o incidono in modo significativo
              </td>
              <td>Punteggi, filtri, classificazioni che decidono di fatto l’esito</td>
            </tr>
            <tr>
              <th scope="row">25</th>
              <td>Protezione dei dati fin dalla progettazione e per impostazione predefinita</td>
              <td>Minimizzazione del contesto passato al modello, retention, pseudonimizzazione</td>
            </tr>
            <tr>
              <th scope="row">28 e 32</th>
              <td>Contratto con il responsabile, misure di sicurezza adeguate al rischio</td>
              <td>Fornitori di modelli, piattaforme cloud, software house che gestiscono il sistema</td>
            </tr>
            <tr>
              <th scope="row">33 e 34</th>
              <td>Notifica delle violazioni al Garante entro 72 ore e, se il rischio è elevato, agli interessati</td>
              <td>Prompt e risposte esposti, accessi non autorizzati all’indice</td>
            </tr>
            <tr>
              <th scope="row">35</th>
              <td>Valutazione d’impatto (DPIA) prima dei trattamenti a rischio elevato</td>
              <td>Nuove tecnologie, valutazioni automatizzate, dati sanitari su larga scala</td>
            </tr>
            <tr>
              <th scope="row">44–50</th>
              <td>Condizioni per trasferire dati verso paesi terzi</td>
              <td>Modelli e servizi erogati da fornitori o infrastrutture extra-UE</td>
            </tr>
            <tr>
              <th scope="row">82 e 83</th>
              <td>
                Risarcimento del danno; sanzioni fino a 20 milioni di euro o al 4% del fatturato
                mondiale annuo
              </td>
              <td>Titolare e responsabile, ciascuno per la propria parte</td>
            </tr>
          </tbody>
        </NormaTable>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <h3 className="text-xl font-semibold text-[#E6EDF3]">Base giuridica e finalità, prima del codice</h3>
        <p>
          La prima domanda non è tecnica: per quale finalità usi i dati e su quale base. Dati
          raccolti per gestire un rapporto di lavoro, una pratica o una cura non diventano dati di
          addestramento perché sono già in casa. Le nuove linee guida EDPB sul web scraping per
          l’AI generativa ricordano che, se fra i dati raccolti ci sono categorie particolari,
          servono sia una base dell’art. 6 sia un’eccezione dell’art. 9, par. 2, e che non esiste
          un’esenzione generale dall’art. 9.
        </p>

        <h3 className="text-xl font-semibold text-[#E6EDF3]">DPIA e art. 22</h3>
        <p>
          La valutazione d’impatto si fa prima di mettere in produzione, non dopo. E se l’output del
          sistema decide di fatto un esito che pesa sulla persona, l’art. 22 si applica anche quando
          formalmente una persona firma: la Corte di giustizia, nella sentenza SCHUFA (C-634/21, 7
          dicembre 2023), ha considerato decisione automatizzata il calcolo di un punteggio da cui
          il terzo fa dipendere in modo determinante la propria scelta. Nel lavoro l’Italia è andata
          oltre: con il{" "}
          <Link href="/it/normativa/dlgs-179-2026" className={LINK}>
            D.Lgs. 179/2026
          </Link>{" "}
          nessuna decisione finale sul rapporto di lavoro può basarsi solo su un trattamento
          automatizzato e il consenso del lavoratore non è un’eccezione.
        </p>

        <h3 className="text-xl font-semibold text-[#E6EDF3]">Il diritto alla cancellazione su un vector store</h3>
        <p>
          In un sistema RAG il dato personale non sta in un posto solo. Il documento originale viene
          spezzato in frammenti, trasformato in embedding, indicizzato, citato nei log e a volte
          copiato in cache. Gli embedding calcolati da testi che contengono dati personali restano
          dati personali: la richiesta di cancellazione dell’art. 17 va eseguita ovunque il dato si è
          propagato, e va dimostrato di averlo fatto. Tre tecniche lo rendono possibile:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className={STRONG}>Namespace per soggetto</strong> — i vettori che riguardano una
            persona stanno in una partizione identificabile, così la cancellazione è
            un’operazione mirata e non una ricerca per somiglianza.
          </li>
          <li>
            <strong className={STRONG}>Tracciamento delle propagazioni</strong> — un registro che
            collega ogni documento sorgente ai frammenti, ai vettori, alle cache e ai dataset che ne
            derivano, e che guida la retention.
          </li>
          <li>
            <strong className={STRONG}>Crypto-shredding</strong> — i dati di ogni soggetto sono
            cifrati con una chiave propria; distruggere la chiave rende illeggibili anche le copie
            che non si riescono a raggiungere, come i backup.
          </li>
        </ul>
        <p>
          Lo stesso tracciamento serve ad accesso, rettifica e portabilità (artt. 15, 16, 20): se non
          sai dove è finito un dato, non puoi neppure dire all’interessato quali dati tratti.
        </p>

        <h3 className="text-xl font-semibold text-[#E6EDF3]">«Me lo accollo io» non funziona</h3>
        <p>
          Chi sviluppa e gestisce per altre aziende un gestionale, o un assistente, che tratta
          pagamenti, documenti d’identità, firme o dati dei dipendenti ha obblighi propri: è
          responsabile del trattamento (art. 28), deve adottare misure di sicurezza adeguate (art.
          32) e risponde dei danni verso gli interessati (art. 82). Nessun accordo privato li
          sposta, perché i dati sono delle persone, clienti dei tuoi clienti, che quell’accordo non
          l’hanno firmato. Il rischio che un fornitore si «accolla» per chiudere il contratto
          scivola lungo la catena e torna a chi ha costruito il sistema quando qualcosa si rompe.
        </p>

        <h3 className="text-xl font-semibold text-[#E6EDF3]">Trasferimenti fuori dall’UE</h3>
        <p>
          Chiamare un modello erogato da un fornitore extra-UE, o ospitato su un’infrastruttura
          soggetta a un’altra giurisdizione, è un trasferimento o lo rende possibile. Dopo la
          sentenza Schrems II (C-311/18) chi esporta dati deve valutare se la legislazione del paese
          di destinazione consente di rispettare le garanzie scelte. Per gli Stati Uniti oggi c’è la
          decisione di adeguatezza sul Data Privacy Framework (Decisione di esecuzione (UE)
          2023/1795), che vale solo per le organizzazioni certificate e dipende da un quadro
          giuridico statunitense che può cambiare. Una regione «UE» di un servizio cloud non è, da
          sola, una risposta: contano anche i sub-responsabili e chi può accedere ai dati.
        </p>
      </NormaSection>

      <NormaSection id="garante-edpb" title="Garante ed EDPB: dove si sta spostando l’asticella">
        <p>
          Il Garante per la protezione dei dati personali applica il GDPR in Italia e sull’AI ha già
          sanzionato: 15 milioni di euro a OpenAI nel dicembre 2024, 20 milioni a Clearview AI.
          Il caso più rilevante per chi lavora con dati sanitari è del 2026.
        </p>
        <p>
          Con il <strong className={STRONG}>provvedimento n. 710 del 23 settembre 2026</strong> il
          Garante ha sanzionato IQVIA Solutions Italy per 7 milioni di euro. La società aveva
          costituito una banca dati con informazioni sulla salute di circa un milione di pazienti di
          800 medici di medicina generale e la riteneva anonima. Per il Garante non lo era: il
          codice associato a ogni paziente consentiva di seguirlo nel tempo e, unito a dati molto
          dettagliati (anno di nascita, sesso, diagnosi, prescrizioni, esami, dati di
          localizzazione), rendeva possibile isolare i singoli e reidentificarli con mezzi
          ragionevoli. Il provvedimento contesta anche l’assenza di base giuridica idonea, di
          informativa adeguata, di tempi di conservazione, di valutazione d’impatto e di misure di
          sicurezza adeguate.
        </p>
        <p>
          La lezione per chi progetta pipeline di dati è precisa:{" "}
          <strong className={STRONG}>pseudonimo non vuol dire anonimo</strong>. Un identificativo
          stabile che permette di collegare record nel tempo tiene i dati dentro il GDPR, con tutto
          ciò che ne segue.
        </p>
        <p>
          Nella stessa direzione vanno le linee guida dell’EDPB adottate l’8 luglio 2026: le 02/2026
          sull’anonimizzazione e le 03/2026 sul web scraping per l’AI generativa, in consultazione
          pubblica fino al 30 ottobre 2026. Le prime propongono tre criteri per verificare che un
          dato sia anonimo: nessun isolamento del singolo record, nessun collegamento con altre
          fonti, nessuna inferenza sulla persona. Sono ancora in consultazione, quindi il testo può
          cambiare, ma indicano il metro con cui le autorità valuteranno le dichiarazioni di
          anonimato.
        </p>
        <p>
          Da tenere presenti anche due interventi del Garante vicini a questi sistemi: il termine
          del 29 ottobre 2026 per adeguare l’uso dei pixel di tracciamento nelle email e
          l’avvertimento sui deepfake del dicembre 2025.
        </p>
      </NormaSection>

      <NormaSection id="legge-o-proposta" title="Cosa è legge oggi e cosa è solo proposta">
        <p>
          Oggi è legge il GDPR come lo conosci, con il Codice privacy. La proposta di Digital Omnibus
          sui dati (COM(2025) 837) non ha ancora cambiato nulla.
        </p>
        <NormaTable caption="GDPR in vigore e proposta COM(2025) 837 dopo l’orientamento generale del Consiglio (21 ottobre 2026)">
          <thead>
            <tr>
              <th scope="col">Tema</th>
              <th scope="col">Regola in vigore</th>
              <th scope="col">Cosa riporta l’orientamento del Consiglio (non definitivo)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Violazioni dei dati</th>
              <td>Notifica al Garante entro 72 ore, salvo che sia improbabile un rischio (art. 33)</td>
              <td>Notifica solo se il rischio è elevato, entro 96 ore</td>
            </tr>
            <tr>
              <th scope="row">Cookie e tecnologie simili</th>
              <td>Consenso secondo la direttiva ePrivacy e le linee guida del Garante</td>
              <td>Meno banner di consenso</td>
            </tr>
            <tr>
              <th scope="row">Segnalazioni di incidenti</th>
              <td>Canali distinti per GDPR, NIS2 e altre norme</td>
              <td>Un punto unico di segnalazione</td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          Il Consiglio ha adottato l’orientamento generale il 21 ottobre 2026; mancano la posizione
          del Parlamento europeo e i triloghi, e il testo finale può essere diverso. Progetta sulle
          regole in vigore. Il dettaglio è nella pagina sul{" "}
          <Link href="/it/normativa/digital-omnibus" className={LINK}>
            Digital Omnibus
          </Link>
          .
        </p>
        <p>
          È invece già legge una novità che tocca il GDPR dal lato dell’AI Act: il Reg. (UE)
          2026/1744 ha inserito nell’AI Act l’art. 4 bis, che consente ai fornitori di sistemi ad
          alto rischio di trattare eccezionalmente categorie particolari di dati per rilevare e
          correggere le distorsioni, solo se non bastano dati sintetici o anonimizzati e con
          garanzie precise (pseudonimizzazione, accessi controllati, nessuna comunicazione a terzi,
          cancellazione a correzione avvenuta, motivazione nei registri dei trattamenti). Si somma
          al GDPR, non lo sostituisce.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/ai-act" className={LINK}>AI Act</Link> — governance dei dati
            per l’alto rischio (art. 10), log (art. 12), trasparenza (art. 50). Il Garante è autorità
            per l’AI Act solo nei casi dell’art. 74(8); sul GDPR mantiene tutti i suoi poteri.
          </li>
          <li>
            <Link href="/it/normativa/legge-132-2025" className={LINK}>Legge 132/2025</Link> — in
            sanità, l’uso secondario per la ricerca di dati privi di identificativi diretti senza
            nuovo consenso, con comunicazione al Garante e avvio decorsi 30 giorni se il Garante non
            lo blocca (art. 8).
          </li>
          <li>
            <Link href="/it/normativa/dlgs-179-2026" className={LINK}>D.Lgs. 179/2026</Link> —
            decisioni sul rapporto di lavoro, diritto a una motivazione intelligibile, AI nel
            documento di valutazione dei rischi.
          </li>
          <li>
            <Link href="/it/normativa/pld" className={LINK}>Direttiva prodotti difettosi</Link> —
            fra i danni risarcibili c’è anche la distruzione o corruzione di dati non usati a fini
            professionali; la direttiva lascia impregiudicato il GDPR, quindi le due responsabilità
            si cumulano.
          </li>
          <li>
            <Link href="/it/normativa/ehds" className={LINK}>EHDS</Link> e{" "}
            <Link href="/it/normativa/data-act" className={LINK}>Data Act</Link> — regole
            sull’accesso e sul riuso dei dati che non sostituiscono la base giuridica del GDPR.
          </li>
        </ul>
        <p>
          Un deliverable fatto bene copre più norme: il registro delle propagazioni che rende
          possibile la cancellazione è lo stesso audit trail che serve all’AI Act e, in un
          giudizio, alla prova di cosa il sistema ha fatto.
        </p>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className={STRONG}>«Abbiamo tolto i nomi, quindi è anonimo».</strong> Un codice
            persistente che consente di seguire una persona nel tempo lascia i dati nel GDPR: è
            quello che il Garante ha stabilito nel caso IQVIA.
          </li>
          <li>
            <strong className={STRONG}>«Gli embedding sono solo numeri».</strong> Se derivano da dati
            personali vanno trattati come dati personali, e la cancellazione deve raggiungerli.
          </li>
          <li>
            <strong className={STRONG}>«Decide sempre una persona».</strong> Se la persona si limita
            a ratificare l’output, la decisione è di fatto automatizzata e si applica l’art. 22.
          </li>
          <li>
            <strong className={STRONG}>«Il contratto mette tutto in capo al cliente».</strong> Gli
            obblighi del responsabile (artt. 28 e 32) e la responsabilità verso gli interessati (art.
            82) non si trasferiscono per contratto.
          </li>
          <li>
            <strong className={STRONG}>«Il GDPR impone di tenere i dati in Italia».</strong> Non
            impone la residenza dei dati: regola i trasferimenti. Tenere i dati in UE semplifica,
            ma non sostituisce le altre scelte.
          </li>
          <li>
            <strong className={STRONG}>«Con l’Omnibus le violazioni si notificano in 96
            ore».</strong> È il contenuto di una proposta, non della legge. Oggi il termine è 72
            ore.
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
