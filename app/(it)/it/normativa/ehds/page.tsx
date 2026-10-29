import Link from "next/link";
import { normaMetadata } from "@/app/normativa";
import {
  NormaPageLayout,
  NormaSection,
  NormaTable,
  type NormaFaq,
} from "@/components/sections/NormaPageLayout";

/*
 * Every fact here comes from the text of Regulation (EU) 2025/327 and of
 * Implementing Regulations (EU) 2026/2083, 2026/2098 and 2026/2099 as published
 * in the Official Journal, from Law 132/2025 (GU n. 223 of 25 September 2025)
 * and from the verified notes of 29 October 2026. Dates and status come from
 * the registry entry in app/normativa.ts.
 */

const SLUG = "ehds";

const LINK = "text-[#00B4D8] hover:text-[#E6EDF3]";

export const metadata = normaMetadata(SLUG, {
  title: "EHDS (Reg. (UE) 2025/327): spazio europeo dei dati sanitari, uso secondario e AI in Italia",
  description:
    "Cosa chiede lo Spazio europeo dei dati sanitari: uso primario e secondario, MyHealth@EU, date dal 2027 al 2031, regolamenti di esecuzione, e come si incrocia con la Legge 132/2025 e il caso IQVIA. Aggiornato al 29 ottobre 2026.",
  keywords: [
    "EHDS",
    "Spazio europeo dei dati sanitari",
    "Regolamento (UE) 2025/327",
    "uso secondario dati sanitari",
    "MyHealth@EU",
    "organismo di accesso ai dati sanitari",
    "Legge 132/2025 art. 8",
    "anonimizzazione dati sanitari",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "Da quando si applica l’EHDS?",
    a: "Il Regolamento (UE) 2025/327 è in vigore dal 25 marzo 2025 e si applica in generale dal 26 marzo 2027. I diritti dei pazienti e lo scambio dei dati per l’uso primario partono il 26 marzo 2029 per profili sanitari sintetici, prescrizioni ed erogazioni elettroniche, e il 26 marzo 2031 per immagini diagnostiche, risultati di esami e lettere di dimissione. Il capo IV sull’uso secondario si applica dal 26 marzo 2029, con alcune disposizioni anticipate al 2027 e altre posticipate al 2031 e al 2035 (art. 105).",
  },
  {
    q: "Si possono usare i dati sanitari dell’EHDS per addestrare un sistema di AI?",
    a: "Sì, fra le finalità ammesse per l’uso secondario ci sono la ricerca scientifica e, al suo interno, l’addestramento, la prova e la valutazione di algoritmi, anche in dispositivi medici e sistemi di AI (art. 53). Serve un’autorizzazione ai dati rilasciata da un organismo responsabile dell’accesso ai dati sanitari; i dati si ottengono in forma anonimizzata, o pseudonimizzata se l’anonimizzazione non basta allo scopo, e si trattano solo in un ambiente di trattamento sicuro. Sono vietati, fra gli altri, usi per decisioni pregiudizievoli verso le persone, per escluderle da assicurazioni o credito e per marketing (art. 54).",
  },
  {
    q: "Che cosa sono i regolamenti di esecuzione 2026/2083, 2026/2098 e 2026/2099?",
    a: "Sono i primi atti di esecuzione dell’EHDS, adottati dalla Commissione nel settembre 2026. Il 2026/2083 riguarda LaMiaSalute@UE (MyHealth@EU), la piattaforma per lo scambio transfrontaliero dei dati sanitari; il 2026/2099 il meccanismo transfrontaliero di identificazione e autenticazione di persone, professionisti e strutture sanitarie: entrambi si applicano dal 26 marzo 2027. Il 2026/2098 fissa i metadati minimi che i titolari dei dati sanitari devono fornire nelle descrizioni delle serie di dati per l’uso secondario e si applica dal 26 marzo 2029.",
  },
  {
    q: "Cosa cambia in Italia con la Legge 132/2025?",
    a: "Per la ricerca sull’AI in sanità l’art. 8 della Legge 132/2025 dichiara di rilevante interesse pubblico i trattamenti di soggetti pubblici e privati senza scopo di lucro, IRCCS e privati che partecipano a progetti con loro; consente l’uso secondario di dati privi degli identificativi diretti senza nuovo consenso, con informativa anche generale sul sito; e richiede una comunicazione al Garante, dopo la quale il trattamento può partire decorsi 30 giorni se il Garante non lo blocca. L’art. 10 affida ad AGENAS una piattaforma di AI per l’assistenza territoriale con suggerimenti non vincolanti.",
  },
  {
    q: "Togliere nome e codice fiscale basta a rendere anonimi i dati sanitari?",
    a: "No. Con il provvedimento n. 710 del 23 settembre 2026 il Garante ha sanzionato IQVIA Solutions Italy per 7 milioni di euro: i dati di circa un milione di pazienti di 800 medici di medicina generale non erano anonimi perché un codice persistente consentiva di seguire ciascun paziente nel tempo. Dati pseudonimizzati restano dati personali, e l’EHDS stesso distingue fra dati anonimizzati e pseudonimizzati (art. 66).",
  },
];

export default function EhdsPage() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "Regolamento (UE) 2025/327, testo italiano nella Gazzetta ufficiale dell’UE (5 marzo 2025)",
          url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32025R0327",
          note: "EUR-Lex; art. 105 per le date di applicazione",
        },
        {
          label: "Regolamento di esecuzione (UE) 2026/2083 relativo a LaMiaSalute@UE (MyHealth@EU)",
          url: "https://eur-lex.europa.eu/eli/reg_impl/2026/2083/oj",
          note: "18 settembre 2026, si applica dal 26 marzo 2027",
        },
        {
          label: "Regolamento di esecuzione (UE) 2026/2099 su identificazione e autenticazione transfrontaliere",
          url: "https://eur-lex.europa.eu/eli/reg_impl/2026/2099/oj",
          note: "21 settembre 2026, si applica dal 26 marzo 2027",
        },
        {
          label: "Regolamento di esecuzione (UE) 2026/2098 sui metadati minimi per l’uso secondario",
          url: "https://eur-lex.europa.eu/eli/reg_impl/2026/2098/oj",
          note: "18 settembre 2026, si applica dal 26 marzo 2029",
        },
        {
          label: "Legge 23 settembre 2025, n. 132",
          url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-09-23;132",
          note: "Normattiva; artt. 7-10 sulla sanità",
        },
        {
          label: "Garante privacy, newsletter dell’8 ottobre 2026: sanzione a IQVIA Solutions Italy",
          url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10305399",
          note: "provvedimento n. 710 del 23 settembre 2026",
        },
        {
          label: "EDPB, linee guida 02/2026 sull’anonimizzazione",
          url: "https://www.edpb.europa.eu/news/edpb-sheds-light-on-anonymisation-and-web-scraping-for-generative-ai-and-adopts-final-version_en",
          note: "adottate l’8 luglio 2026, consultazione fino al 30 ottobre 2026",
        },
      ]}
      approfondimenti={[
        {
          label: "Legge 132/2025 e AI in sanità",
          href: "/it/ricerca/legge-132-2025",
          note: "cosa aggiunge la legge italiana nel settore sanitario",
        },
        {
          label: "AI sanitaria on-premise",
          href: "/it/ai-sanitaria-on-premise",
        },
        {
          label: "Un LLM on-premise in ospedale",
          href: "/it/risposte/llm-on-premise-ospedale",
        },
        {
          label: "Assessment di esposizione",
          href: "/it/assessment",
          note: "incarico a perimetro fisso: quali regimi si applicano e cosa va dimostrato",
        },
      ]}
      ctaTitle="Anonimo è una proprietà da dimostrare, non un’etichetta"
      ctaSubtitle="L’assessment di esposizione stabilisce quali regimi si applicano ai dati sanitari che usi, dall’EHDS all’art. 8 della Legge 132, e cosa l’architettura deve poter provare."
    >
      <NormaSection id="a-chi-si-applica" title="A chi si applica">
        <p>
          L’EHDS si applica a chi produce, conserva, scambia o chiede di riusare dati sanitari
          elettronici, e distingue due usi con destinatari diversi.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Uso primario</strong>: i dati usati per curare la
          persona. Riguarda i pazienti, che hanno diritto di accedere ai propri dati, i prestatori
          di assistenza sanitaria che li registrano e li scambiano, e i fabbricanti, importatori e
          distributori di sistemi di cartella clinica elettronica, che hanno obblighi propri sui
          componenti software armonizzati (capo III).
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Uso secondario</strong>: gli stessi dati riusati per
          sanità pubblica, statistiche, formazione, ricerca, innovazione e politiche pubbliche.
          Riguarda i titolari dei dati sanitari, che devono metterli a disposizione, gli organismi
          responsabili dell’accesso ai dati sanitari, che rilasciano le autorizzazioni, e gli utenti
          dei dati, fra cui chi sviluppa algoritmi e sistemi di AI.
        </p>
      </NormaSection>

      <NormaSection id="cosa-chiede" title="Cosa chiede">
        <h3 className="text-xl font-bold text-[#E6EDF3]">Uso primario</h3>
        <p>
          Ogni persona ha diritto di accedere ai propri dati sanitari elettronici, subito dopo la
          loro registrazione, e di scaricarne gratuitamente una copia nel formato europeo di scambio
          (art. 3). Il regolamento fissa sei categorie prioritarie da rendere accessibili e
          scambiabili in un formato europeo comune (art. 14): profili sanitari sintetici,
          prescrizioni elettroniche, erogazioni elettroniche, immagini diagnostiche e relativi
          referti, risultati di esami, lettere di dimissione. Lo scambio fra Stati membri passa per
          LaMiaSalute@UE (MyHealth@EU), la piattaforma centrale istituita dalla Commissione
          (art. 23).
        </p>
        <h3 className="text-xl font-bold text-[#E6EDF3]">Uso secondario</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#E6EDF3]">Finalità ammesse</strong> (art. 53): sanità
            pubblica, politiche e regolazione, statistiche, istruzione, ricerca scientifica, compresi
            sviluppo di prodotti e addestramento, prova e valutazione di algoritmi e sistemi di AI,
            miglioramento dell’assistenza. Le prime tre sono riservate agli enti pubblici.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Usi vietati</strong> (art. 54): decisioni
            pregiudizievoli verso persone o gruppi, esclusione da assicurazioni o credito e
            peggioramento delle condizioni, pubblicità e marketing, sviluppo di prodotti dannosi.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Minimizzazione</strong> (art. 66): l’organismo di
            accesso fornisce dati anonimizzati quando bastano allo scopo, pseudonimizzati solo se
            l’utente dimostra che l’anonimizzazione non basta; le informazioni per invertire la
            pseudonimizzazione restano all’organismo.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Ambiente di trattamento sicuro</strong> (art. 73):
            i dati con autorizzazione si trattano solo in un ambiente controllato, con accesso
            limitato alle persone indicate nell’autorizzazione.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Diritto di esclusione</strong> (art. 71): ogni
            persona può opporsi in qualsiasi momento, senza motivare, all’uso secondario dei propri
            dati; gli Stati membri devono prevedere un meccanismo semplice per esercitarlo.
          </li>
        </ul>

        <NormaTable caption="Calendario dell’EHDS e dei primi regolamenti di esecuzione (art. 105 Reg. (UE) 2025/327)">
          <thead>
            <tr>
              <th scope="col">Da quando</th>
              <th scope="col">Cosa si applica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><time dateTime="2025-03-25">25 marzo 2025</time></th>
              <td>Entrata in vigore del regolamento</td>
            </tr>
            <tr>
              <th scope="row"><time dateTime="2027-03-26">26 marzo 2027</time></th>
              <td>
                Applicazione generale; regolamenti di esecuzione 2026/2083 (MyHealth@EU) e 2026/2099
                (identificazione e autenticazione transfrontaliere)
              </td>
            </tr>
            <tr>
              <th scope="row"><time dateTime="2029-03-26">26 marzo 2029</time></th>
              <td>
                Diritti e scambio per profili sanitari sintetici, prescrizioni ed erogazioni
                elettroniche; capo IV sull’uso secondario; regolamento di esecuzione 2026/2098 sui
                metadati
              </td>
            </tr>
            <tr>
              <th scope="row"><time dateTime="2031-03-26">26 marzo 2031</time></th>
              <td>Diritti e scambio per immagini diagnostiche, risultati di esami e lettere di dimissione</td>
            </tr>
          </tbody>
        </NormaTable>
      </NormaSection>

      <NormaSection id="italia" title="Come si incrocia con le regole italiane">
        <p>
          In Italia l’EHDS si somma a regole nazionali sulla ricerca con l’AI in sanità che si
          applicano già oggi, prima del capo IV. La{" "}
          <Link href="/it/normativa/legge-132-2025" className={LINK}>
            Legge 132/2025
          </Link>{" "}
          ne contiene tre:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#E6EDF3]">Art. 8</strong> — i trattamenti per la ricerca e
            la sperimentazione su sistemi di AI in sanità, svolti da soggetti pubblici e privati
            senza scopo di lucro, IRCCS e privati che partecipano a progetti con loro, sono di
            rilevante interesse pubblico. È sempre autorizzato l’uso secondario di dati privi degli
            identificativi diretti, senza ulteriore consenso, con un’informativa che può essere anche
            generale sul sito. Il trattamento va comunicato al Garante e può partire decorsi 30
            giorni se il Garante non lo blocca.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Art. 9</strong> — un decreto del Ministro della
            salute, da emanare entro 120 giorni, disciplina il trattamento dei dati anche
            particolari per ricerca e sperimentazione con l’AI, compreso l’uso secondario. Al 29
            ottobre 2026 la sua adozione non risulta confermata.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Art. 10</strong> — inserisce l’art. 12-bis nel
            D.L. 179/2012 e istituisce una piattaforma di AI per l’assistenza territoriale, di cui
            AGENAS è titolare, con suggerimenti non vincolanti a professionisti sanitari e medici.
          </li>
        </ul>
        <p>
          Il punto critico è l’anonimizzazione. Con il provvedimento n. 710 del 23 settembre 2026
          il Garante ha inflitto 7 milioni di euro a IQVIA Solutions Italy: i dati di circa un
          milione di pazienti di 800 medici di medicina generale erano stati trattati come anonimi,
          ma un codice persistente permetteva di seguire ciascun paziente nel tempo. «Privo di
          identificativi diretti» nell’art. 8 della Legge 132 non significa anonimo, e l’EHDS
          tratta i dati pseudonimizzati come una categoria distinta, accessibile solo con
          giustificazione.
        </p>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <p>
          <strong className="text-[#E6EDF3]">L’addestramento su dati sanitari ha una via
          regolata.</strong> Dal 26 marzo 2029 chi vuole addestrare o validare un modello su dati
          sanitari di più fonti potrà chiederli a un organismo di accesso, con un’autorizzazione e
          dentro un ambiente sicuro. Significa progettare pipeline che lavorano dove stanno i dati,
          non che li copiano dove sta il modello.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">L’anonimizzazione si progetta e si prova.</strong>{" "}
          Dopo IQVIA, un identificativo stabile che collega i record dello stesso paziente basta a
          far cadere la qualifica di dato anonimo. La scelta fra anonimizzazione e
          pseudonimizzazione va documentata in base allo scopo, come chiede l’art. 66.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Il diritto di esclusione entra nei dataset.</strong>{" "}
          Un’opposizione esercitata dopo il rilascio di un’autorizzazione non tocca i trattamenti
          già autorizzati, ma i dataset successivi devono escludere quei dati: serve tracciabilità
          di cosa è entrato in ogni versione.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Chi vende cartelle cliniche elettroniche ha due
          regimi.</strong> L’EHDS modifica il Cyber Resilience Act: i fabbricanti di sistemi di
          cartella clinica elettronica dimostrano i requisiti essenziali di cibersicurezza con la
          procedura di valutazione prevista dall’EHDS.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/gdpr" className={LINK}>GDPR</Link>{" "}
            — i dati sanitari sono categorie particolari (art. 9); l’EHDS non sostituisce le basi
            giuridiche né i diritti dell’interessato.
          </li>
          <li>
            <Link href="/it/normativa/ai-act" className={LINK}>AI Act</Link>{" "}
            — un sistema addestrato con dati EHDS resta soggetto alla sua classe di rischio: i
            dispositivi medici con organismo notificato sono alto rischio dell’Allegato I, dal 2
            agosto 2028.
          </li>
          <li>
            <Link href="/it/normativa/legge-132-2025" className={LINK}>Legge 132/2025</Link>{" "}
            — art. 7 (la decisione clinica resta al medico) e artt. 8-10 sulla ricerca e sulla
            piattaforma AGENAS.
          </li>
          <li>
            <Link href="/it/normativa/data-act" className={LINK}>Data Act</Link>{" "}
            — per i dati generati dai prodotti connessi vale il diritto di accesso dell’utente,
            con il GDPR che prevale sui dati personali.
          </li>
          <li>
            <Link href="/it/normativa/cra" className={LINK}>Cyber Resilience Act</Link>{" "}
            — modificato dall’EHDS per i sistemi di cartella clinica elettronica.
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#E6EDF3]">«L’EHDS si applica tutto dal 2027».</strong> Dal
            26 marzo 2027 parte l’applicazione generale, ma i diritti sulle categorie prioritarie
            arrivano nel 2029 e nel 2031 e l’uso secondario dal 26 marzo 2029.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Con l’EHDS posso usare i dati sanitari per
            qualunque progetto di AI».</strong> Solo per le finalità dell’art. 53, con
            un’autorizzazione e in un ambiente sicuro; marketing, decisioni pregiudizievoli e
            selezione assicurativa sono vietati.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Senza nome e codice fiscale i dati sono
            anonimi».</strong> Il caso IQVIA dice il contrario: un codice persistente basta a
            renderli personali.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«L’art. 8 della Legge 132 vale per tutte le
            imprese».</strong> Vale per soggetti pubblici e privati senza scopo di lucro, IRCCS e
            privati del settore sanitario che partecipano a progetti con loro; resta la
            comunicazione al Garante con 30 giorni di attesa.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«La Legge 132 classifica l’AI sanitaria come alto
            rischio».</strong> La classificazione è dell’AI Act; la legge italiana regola l’uso in
            sanità e la ricerca, non la classe di rischio.
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
