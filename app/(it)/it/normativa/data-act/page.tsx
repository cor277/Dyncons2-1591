import Link from "next/link";
import { normaMetadata } from "@/app/normativa";
import {
  NormaPageLayout,
  NormaSection,
  NormaTable,
  type NormaFaq,
} from "@/components/sections/NormaPageLayout";

/*
 * Every fact here comes from the text of Regulation (EU) 2023/2854 as published
 * in the Official Journal (checked on 29 October 2026); dates and status come
 * from the registry entry in app/normativa.ts.
 */

const SLUG = "data-act";

const LINK = "text-[#00B4D8] hover:text-[#E6EDF3]";

export const metadata = normaMetadata(SLUG, {
  title: "Data Act (Reg. (UE) 2023/2854): dati dei prodotti connessi, cambio di cloud e contratti tra imprese",
  description:
    "Cosa chiede il Data Act: accesso ai dati dei prodotti connessi e accesso by design dal 12 settembre 2026, cambio di fornitore cloud, clausole abusive tra imprese, richieste degli enti pubblici. Aggiornato al 29 ottobre 2026.",
  keywords: [
    "Data Act",
    "Regolamento (UE) 2023/2854",
    "prodotti connessi",
    "accesso ai dati by design",
    "switching cloud",
    "tariffe di passaggio",
    "clausole abusive B2B",
    "Data Act Italia",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "Da quando si applica il Data Act?",
    a: "Il Regolamento (UE) 2023/2854 si applica dal 12 settembre 2025. L’obbligo di progettare prodotti connessi e servizi correlati in modo che i dati siano accessibili all’utente per impostazione predefinita (art. 3, paragrafo 1) vale per quelli immessi sul mercato dopo il 12 settembre 2026. Le regole sulle clausole abusive (capo IV) si applicano ai contratti conclusi dopo il 12 settembre 2025 e, dal 12 settembre 2027, anche a quelli precedenti a tempo indeterminato o che scadono almeno dieci anni dopo l’11 gennaio 2024.",
  },
  {
    q: "Il Data Act riguarda anche i dati personali?",
    a: "Sì, riguarda dati personali e non personali, ma fa salvo il GDPR: in caso di conflitto prevale la normativa sulla protezione dei dati personali (art. 1, paragrafo 5). Se l’utente che chiede i dati non è l’interessato, il titolare dei dati può metterli a disposizione solo se esiste una base giuridica ai sensi dell’art. 6 del GDPR e, per le categorie particolari, una condizione dell’art. 9.",
  },
  {
    q: "Quanto tempo ho per cambiare fornitore cloud e quanto può costarmi?",
    a: "Il contratto deve prevedere un preavviso massimo di due mesi per avviare il passaggio e un periodo transitorio di non oltre 30 giorni di calendario, estendibile fino a sette mesi solo se il fornitore dimostra un’impossibilità tecnica entro 14 giorni lavorativi dalla richiesta. Dopo il periodo transitorio restano almeno 30 giorni per recuperare i dati. Fino al 12 gennaio 2027 il fornitore può chiedere tariffe di passaggio ridotte, non superiori ai costi diretti; da quella data non può chiederne più (art. 29).",
  },
  {
    q: "Le piccole imprese sono esenti?",
    a: "In parte. Gli obblighi di condivisione dei dati del capo II non si applicano ai prodotti connessi fabbricati o progettati da microimprese e piccole imprese, purché non collegate a imprese più grandi; per le medie imprese l’esenzione vale per un periodo limitato (art. 7). Anche le richieste degli enti pubblici fuori dalle emergenze non riguardano micro e piccole imprese (art. 15, paragrafo 2). Le regole sul cambio di fornitore cloud non prevedono questa esenzione.",
  },
  {
    q: "Un ente pubblico può chiedermi i dati della mia azienda?",
    a: "Solo in caso di necessità eccezionale (artt. 14 e 15): per rispondere a un’emergenza pubblica, quando non può ottenere i dati in altro modo tempestivamente, oppure, fuori dall’emergenza e solo per dati non personali, quando la mancanza di dati specifici gli impedisce un compito di interesse pubblico previsto dalla legge e ha esaurito le altre strade. Il titolare dei dati può rifiutare o chiedere di modificare la richiesta entro cinque giorni lavorativi nelle emergenze ed entro 30 giorni lavorativi negli altri casi. Il capo V non si applica alle attività di contrasto dei reati e all’amministrazione doganale o tributaria.",
  },
];

export default function DataActPage() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "Regolamento (UE) 2023/2854, testo italiano nella Gazzetta ufficiale dell’UE (22 dicembre 2023)",
          url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32023R2854",
          note: "EUR-Lex; art. 50 per le date di applicazione",
        },
        {
          label: "Data Act — pagina della Commissione europea",
          url: "https://digital-strategy.ec.europa.eu/en/policies/data-act",
          note: "Commissione europea, documentazione e materiali di attuazione",
        },
        {
          label: "Proposta di Digital Omnibus COM(2025) 837",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52025PC0837",
          note: "proposta, non legge: tocca anche il Data Act",
        },
      ]}
      approfondimenti={[
        {
          label: "Sovranità tecnologica: cosa propone il Cloud and AI Development Act",
          href: "/it/sovranita-tecnologica",
          note: "i livelli di garanzia per il cloud proposti dopo il Data Act",
        },
        {
          label: "Cloud e Kubernetes",
          href: "/it/competenze#cloud-kubernetes",
          note: "architetture progettate per poter cambiare fornitore",
        },
        {
          label: "AI privata o AI sovrana?",
          href: "/it/risposte/ai-privata-vs-ai-sovrana",
        },
        {
          label: "Assessment di esposizione",
          href: "/it/assessment",
          note: "incarico a perimetro fisso: quali regimi si applicano e cosa va dimostrato",
        },
        {
          label: "Sovranità digitale: non uno slogan, un’architettura",
          href: "https://www.linkedin.com/pulse/sovranit%C3%A0-digitale-non-uno-slogan-unarchitettura-corrado-patierno-5emrf/",
          note: "residenza, giurisdizione e continuità come requisiti di progetto",
          linkedin: true,
        },
      ]}
      ctaTitle="I dati che il tuo prodotto genera hanno già un altro titolare"
      ctaSubtitle="L’assessment di esposizione stabilisce se sei fabbricante, titolare dei dati o fornitore di servizi di trattamento ai sensi del Data Act, e quali altre norme si sommano."
    >
      <NormaSection id="a-chi-si-applica" title="A chi si applica">
        <p>
          Il Data Act si applica a chiunque produca, detenga o tratti dati generati da prodotti
          connessi, e a chiunque venda servizi di trattamento dei dati come il cloud. I ruoli che
          contano sono cinque:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#E6EDF3]">Fabbricanti di prodotti connessi e fornitori di
            servizi correlati</strong> — macchinari, veicoli, dispositivi domestici o industriali che
            raccolgono dati sul proprio uso o sul proprio ambiente, e i servizi digitali collegati
            senza i quali il prodotto non svolgerebbe una sua funzione, o che ne ampliano o
            aggiornano le funzioni.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Titolari dei dati</strong> — chi ha il diritto o
            l’obbligo di usare e mettere a disposizione quei dati, spesso il fabbricante stesso.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Utenti</strong> — chi possiede, noleggia o usa il
            prodotto, consumatore o impresa.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Destinatari dei dati</strong> — i terzi a cui
            l’utente chiede di trasmettere i dati, per esempio un manutentore indipendente.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Fornitori di servizi di trattamento dei dati</strong>{" "}
            — servizi che danno accesso su richiesta a risorse informatiche condivise e
            scalabili, cioè il cloud nelle sue varie forme, con gli obblighi sul cambio di fornitore.
          </li>
        </ul>
        <p>
          Gli obblighi di condivisione dei dati non si applicano ai prodotti di microimprese e
          piccole imprese non collegate a imprese più grandi (art. 7). Le regole sul cambio di
          fornitore cloud valgono invece per tutti i fornitori, salvo i servizi costruiti su misura
          per un singolo cliente e le versioni di prova (art. 31).
        </p>
      </NormaSection>

      <NormaSection id="cosa-chiede" title="Cosa chiede">
        <p>
          Il Data Act fa quattro cose diverse, con destinatari diversi, raccolte in un unico
          regolamento:
        </p>
        <h3 className="text-xl font-bold text-[#E6EDF3]">Dati dei prodotti connessi (capo II)</h3>
        <p>
          L’utente ha diritto di accedere ai dati generati dall’uso del prodotto e dei servizi
          correlati, con i metadati necessari a interpretarli, gratuitamente, in un formato
          strutturato e leggibile da una macchina e, dove possibile, in tempo reale (art. 4). Può
          chiedere che siano trasmessi a un terzo di sua scelta (art. 5); un gatekeeper designato ai
          sensi del Digital Markets Act non può essere quel terzo. Prima della vendita o del
          noleggio, il venditore deve dire quali dati il prodotto genera, dove li conserva e come
          l’utente può accedervi (art. 3, paragrafi 2 e 3). I segreti commerciali restano protetti:
          il titolare può subordinare la condivisione a misure di riservatezza e, in casi
          eccezionali e motivati, rifiutarla.
        </p>
        <p>
          Il titolare, dal canto suo, può usare i dati non personali solo sulla base di un contratto
          con l’utente e non può usarli per ricavare informazioni sulla situazione economica
          dell’utente (art. 4, paragrafo 13). L’utente non può usare i dati ottenuti per sviluppare
          un prodotto connesso concorrente (art. 4, paragrafo 10).
        </p>
        <h3 className="text-xl font-bold text-[#E6EDF3]">Clausole abusive tra imprese (capo IV)</h3>
        <p>
          Una clausola su accesso ai dati, uso dei dati o responsabilità, imposta unilateralmente da
          un’impresa a un’altra, non è vincolante se abusiva (art. 13). Lo è sempre, per esempio, se
          esclude la responsabilità per dolo o colpa grave; si presume abusiva se impedisce
          all’altra parte di usare o di ottenere copia dei dati che ha fornito o generato durante il
          contratto, o di recedere entro un termine ragionevole.
        </p>
        <h3 className="text-xl font-bold text-[#E6EDF3]">Dati agli enti pubblici in caso di necessità eccezionale (capo V)</h3>
        <p>
          Enti pubblici, Commissione, BCE e organismi dell’Unione possono chiedere dati a
          un’impresa solo per una necessità eccezionale: un’emergenza pubblica, oppure, per i soli
          dati non personali, un compito di interesse pubblico previsto dalla legge che non possono
          svolgere senza quei dati (artt. 14 e 15). Nelle emergenze i dati si danno gratuitamente,
          salvo che il titolare sia una micro o piccola impresa.
        </p>
        <h3 className="text-xl font-bold text-[#E6EDF3]">Cambio di fornitore cloud (capo VI) e accesso governativo (capo VII)</h3>
        <p>
          I fornitori di servizi di trattamento dei dati devono rimuovere gli ostacoli commerciali,
          tecnici e contrattuali al passaggio verso un altro fornitore o verso un’infrastruttura
          locale (art. 23), con clausole minime obbligatorie nel contratto (art. 25). Devono
          pubblicare la giurisdizione a cui è soggetta la loro infrastruttura (art. 28) e adottare
          misure per impedire l’accesso di autorità di paesi terzi ai dati non personali detenuti
          nell’Unione quando sarebbe in conflitto con il diritto dell’Unione o nazionale (art. 32).
        </p>

        <NormaTable caption="Cambio di fornitore di servizi di trattamento dei dati: i termini fissati dal Data Act (artt. 25 e 29)">
          <thead>
            <tr>
              <th scope="col">Elemento</th>
              <th scope="col">Cosa prevede</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Preavviso</th>
              <td>Non superiore a due mesi per avviare il passaggio</td>
            </tr>
            <tr>
              <th scope="row">Periodo transitorio</th>
              <td>
                Massimo 30 giorni di calendario, con il servizio che continua; fino a sette mesi solo
                se il fornitore motiva un’impossibilità tecnica entro 14 giorni lavorativi. Il
                cliente può prorogarlo una volta
              </td>
            </tr>
            <tr>
              <th scope="row">Recupero dei dati</th>
              <td>Almeno 30 giorni di calendario dopo il periodo transitorio, poi cancellazione completa</td>
            </tr>
            <tr>
              <th scope="row">Dati esportabili</th>
              <td>Elencati per categoria nel contratto; esenzioni solo per i dati interni al servizio coperti da segreto commerciale</td>
            </tr>
            <tr>
              <th scope="row">Tariffe di passaggio</th>
              <td>
                Ridotte e non superiori ai costi diretti fino al{" "}
                <time dateTime="2027-01-12">12 gennaio 2027</time>; da quella data, nessuna tariffa
              </td>
            </tr>
          </tbody>
        </NormaTable>

        <NormaTable caption="Date di applicazione (art. 50)">
          <thead>
            <tr>
              <th scope="col">Da quando</th>
              <th scope="col">Cosa si applica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><time dateTime="2025-09-12">12 settembre 2025</time></th>
              <td>Il regolamento in generale; il capo IV per i contratti conclusi dopo questa data</td>
            </tr>
            <tr>
              <th scope="row"><time dateTime="2026-09-12">12 settembre 2026</time></th>
              <td>Accesso ai dati per impostazione predefinita (art. 3, paragrafo 1) per i prodotti connessi e i servizi correlati immessi sul mercato dopo questa data</td>
            </tr>
            <tr>
              <th scope="row"><time dateTime="2027-01-12">12 gennaio 2027</time></th>
              <td>Stop alle tariffe di passaggio fra fornitori di servizi di trattamento dei dati (art. 29)</td>
            </tr>
            <tr>
              <th scope="row"><time dateTime="2027-09-12">12 settembre 2027</time></th>
              <td>Capo IV anche ai contratti conclusi entro il 12 settembre 2025, se a tempo indeterminato o con scadenza almeno dieci anni dopo l’11 gennaio 2024</td>
            </tr>
          </tbody>
        </NormaTable>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <p>
          <strong className="text-[#E6EDF3]">I dati del prodotto non sono più solo del
          fabbricante.</strong> Chi addestra modelli sui dati generati dai propri prodotti connessi
          deve averne titolo per contratto con l’utente, e non può impedire all’utente di
          portarli a un concorrente nei servizi di manutenzione o di analisi. Per i prodotti
          immessi sul mercato dopo il 12 settembre 2026 l’accesso dell’utente va progettato nel
          prodotto, non concesso su richiesta.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Il cambio di fornitore è un requisito di
          architettura.</strong> Il Data Act obbliga il fornitore cloud a consentire l’uscita, ma
          l’uscita funziona solo se l’architettura del cliente non dipende da servizi che non hanno
          equivalenti. Il contratto deve elencare i dati esportabili: è il momento di verificare
          che fra quei dati ci siano indici vettoriali, log e configurazioni, non solo i documenti
          di partenza.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">La giurisdizione diventa un’informazione
          pubblica.</strong> Con l’art. 28 il fornitore deve dichiarare a quale giurisdizione è
          soggetta l’infrastruttura. Non è un obbligo di residenza dei dati: è un’informazione che
          chi compra può e deve usare nella propria valutazione dei rischi.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Le clausole sui dati nei contratti con i fornitori di
          AI si possono contestare.</strong> Una clausola imposta che impedisce di ottenere copia
          dei dati generati durante il contratto, o che esclude la responsabilità per colpa grave,
          non è vincolante per un contratto concluso dopo il 12 settembre 2025.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <p>
          Il Data Act si aggiunge alle regole sui dati personali e sulla sicurezza dei prodotti,
          senza sostituirle:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/gdpr" className={LINK}>GDPR</Link>{" "}
            — prevale in caso di conflitto; per l’utente che è anche interessato, i diritti del
            Data Act integrano l’accesso e la portabilità degli artt. 15 e 20.
          </li>
          <li>
            <Link href="/it/normativa/cra" className={LINK}>Cyber Resilience Act</Link>{" "}
            — lo stesso prodotto connesso che deve rendere accessibili i dati deve essere sicuro
            per progettazione e gestire le vulnerabilità.
          </li>
          <li>
            <Link href="/it/normativa/ehds" className={LINK}>Spazio europeo dei dati sanitari</Link>{" "}
            — per i dati sanitari elettronici aggiunge regole settoriali di accesso e di uso
            secondario.
          </li>
          <li>
            <Link href="/it/normativa/digital-omnibus" className={LINK}>Digital Omnibus</Link>{" "}
            — la proposta COM(2025) 837 interviene anche sul Data Act, ma non è legge: mancano la
            posizione del Parlamento europeo e i triloghi.
          </li>
          <li>
            <Link href="/it/normativa/cada" className={LINK}>Cloud and AI Development Act</Link>{" "}
            — proposta che, sul cloud acquistato dalla pubblica amministrazione, aggiungerebbe
            livelli di garanzia sulla sovranità; richiama l’art. 32 del Data Act fra i criteri per
            i paesi terzi associati.
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#E6EDF3]">«Il Data Act riguarda solo i dati non
            personali».</strong> Copre dati personali e non personali; per i primi fa salvo il
            GDPR, che prevale in caso di conflitto.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«L’accesso by design vale per tutti i prodotti
            dal 12 settembre 2026».</strong> Vale per i prodotti connessi e i servizi correlati
            immessi sul mercato dopo quella data. Il diritto di accesso su richiesta (art. 4) si
            applica già dal 12 settembre 2025.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Il Data Act impone di tenere i dati in
            UE».</strong> Non impone la residenza dei dati. Chiede trasparenza sulla giurisdizione
            e misure contro l’accesso illecito di autorità di paesi terzi ai dati non personali.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«I contratti già firmati non sono toccati».</strong>{" "}
            Dal 12 settembre 2027 le regole sulle clausole abusive si applicano anche ai contratti
            precedenti a tempo indeterminato o di lunga durata.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Possiamo cambiare cloud quando vogliamo, lo dice
            la legge».</strong> La legge toglie gli ostacoli del fornitore, non quelli della tua
            architettura: l’equivalenza funzionale è garantita solo per l’infrastruttura, per il
            resto il fornitore deve offrire interfacce aperte ed esportare i dati.
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
