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
 * text of the law as published in the Gazzetta Ufficiale (SG n. 223 of
 * 25 September 2025); dates and status come from the registry in app/normativa.ts.
 */

const SLUG = "legge-132-2025";

const LINK = "text-[#00B4D8] hover:text-[#E6EDF3]";

export const metadata = normaMetadata(SLUG, {
  title: "Legge 132/2025 sull’intelligenza artificiale: cosa fa, cosa non fa, sanità, reati e decreti attuativi",
  description:
    "La legge italiana sull’AI (L. 23 settembre 2025, n. 132) non recepisce l’AI Act, non classifica il rischio e non impone la residenza dei dati. Cosa prevede su sanità, autorità, reati e deleghe. Aggiornato al 29 ottobre 2026.",
  keywords: [
    "Legge 132/2025",
    "legge italiana intelligenza artificiale",
    "L. 23 settembre 2025 n. 132",
    "AI in sanità",
    "art. 612-quater c.p.",
    "AgID ACN autorità AI",
    "deepfake reato",
    "D.Lgs. 160/2026",
    "D.Lgs. 179/2026",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "La Legge 132/2025 recepisce l’AI Act?",
    a: "No. L’AI Act è un regolamento europeo e si applica direttamente in tutti gli Stati membri, senza bisogno di recepimento. La Legge 23 settembre 2025, n. 132 lo integra: l’art. 1, comma 2, dice che va interpretata e applicata conformemente al Reg. (UE) 2024/1689, e l’art. 3, comma 5, che non produce nuovi obblighi rispetto a quelli del regolamento per sistemi e modelli di AI.",
  },
  {
    q: "La Legge 132/2025 classifica l’AI sanitaria come ad alto rischio?",
    a: "No. La classificazione del rischio la fa solo l’AI Act: art. 6(1) con l’Allegato I, per esempio i dispositivi medici soggetti a organismo notificato, e art. 6(2) con l’Allegato III, per esempio il triage di emergenza o le assicurazioni vita e salute. La legge italiana detta principi per la sanità (artt. 7-10), come la decisione sempre rimessa al medico e il diritto del paziente a essere informato, ma non sposta nessun sistema da una classe di rischio all’altra.",
  },
  {
    q: "La Legge 132/2025 obbliga a tenere i dati in Italia o nell’Unione europea?",
    a: "No. Non c’è alcun obbligo di residenza dei dati. L’unica norma vicina è l’art. 5, comma 1, lettera d): le piattaforme di e-procurement della pubblica amministrazione sono indirizzate in modo che possano essere privilegiate soluzioni che localizzano ed elaborano i dati strategici in data center sul territorio nazionale, con disaster recovery e business continuity anch’essi in Italia. È un criterio di preferenza negli acquisti pubblici, non un obbligo per le imprese.",
  },
  {
    q: "Chi sono le autorità italiane per l’intelligenza artificiale?",
    a: "L’art. 20 designa l’Agenzia per l’Italia digitale (AgID) come autorità di notifica e l’Agenzia per la cybersicurezza nazionale (ACN) come autorità di vigilanza del mercato e punto di contatto unico; Banca d’Italia, CONSOB e IVASS restano autorità di vigilanza del mercato per il settore finanziario. Il Garante per la protezione dei dati personali non è autorità per l’AI secondo la legge, che ne fa salvi i poteri; il D.Lgs. 179/2026 gli ha poi attribuito la vigilanza solo nei casi dell’art. 74(8) dell’AI Act.",
  },
  {
    q: "Che cosa punisce il nuovo art. 612-quater del codice penale?",
    a: "Punisce con la reclusione da uno a cinque anni chi cagiona un danno ingiusto a una persona diffondendo senza il suo consenso immagini, video o voci falsificati o alterati con sistemi di AI e idonei a ingannare sulla loro genuinità: è il reato dei deepfake. Si procede a querela della persona offesa, ma d’ufficio se il fatto è connesso a un altro delitto procedibile d’ufficio o se la vittima è incapace o una pubblica autorità colpita per le sue funzioni. Dal 30 settembre 2026 è anche reato presupposto della responsabilità degli enti (art. 25-vicies D.Lgs. 231/2001).",
  },
];

export default function Legge132Page() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "Gazzetta Ufficiale, Serie generale n. 223 del 25 settembre 2025",
          url: "https://www.gazzettaufficiale.it/eli/id/2025/09/25/25G00143/sg",
          note: "testo della Legge 132/2025 come pubblicato",
        },
        {
          label: "Reg. (UE) 2024/1689 (AI Act)",
          url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          note: "classificazione del rischio (art. 6, Allegati I e III), autorità (art. 70, art. 74)",
        },
        {
          label: "D.Lgs. 9 settembre 2026, n. 160",
          url: "https://www.normattiva.it/eli/id/2026/09/15/26G00179/ORIGINAL",
          note: "attua l’art. 24, commi 1 e 3: polizia, responsabilità civile e penale",
        },
        {
          label: "D.Lgs. 7 ottobre 2026, n. 179",
          url: "https://www.normattiva.it/eli/id/2026/10/08/26G00200/ORIGINAL",
          note: "attua l’art. 24, commi 1 e 2: autorità, sanzioni, lavoro, formazione",
        },
      ]}
      approfondimenti={[
        {
          label: "Legge 132/2025 e AI in sanità: cosa cambia",
          href: "/it/ricerca/legge-132-2025",
          note: "l’approfondimento sugli articoli 7-10 e su cosa chiedono a chi progetta sistemi clinici",
        },
        {
          label: "AI on-premise per la sanità italiana",
          href: "/it/ai-sanitaria-on-premise",
          note: "come si progetta un sistema clinico che lascia la decisione al medico",
        },
        {
          label: "Consulenza AI, governance e compliance",
          href: "/it/consulenza-ai-governance-compliance",
        },
        {
          label: "Cosa faccio lunedì mattina",
          href: "https://www.linkedin.com/pulse/cosa-faccio-luned%C3%AC-mattina-corrado-patierno-arx1e/",
          note: "prima di tutto, capire quali regimi si applicano davvero al tuo caso",
          linkedin: true,
        },
        {
          label: "Sovranità digitale: non uno slogan, un’architettura",
          href: "https://www.linkedin.com/pulse/sovranit%C3%A0-digitale-non-uno-slogan-unarchitettura-corrado-patierno-5emrf/",
          note: "residenza, giurisdizione e continuità: cosa la legge chiede e cosa resta una scelta di progetto",
          linkedin: true,
        },
      ]}
      ctaTitle="La legge italiana aggiunge principi, i decreti aggiungono conseguenze"
      ctaSubtitle="L’assessment di esposizione mette in fila AI Act, Legge 132/2025 e decreti attuativi sul tuo sistema: che ruolo hai, cosa si applica e cosa l’architettura deve saper dimostrare."
    >
      <NormaSection id="cosa-fa" title="Cosa fa, e cosa non fa">
        <p>
          La Legge 132/2025 è una legge di principi e di deleghe che si appoggia all’AI Act, non
          una seconda disciplina dell’intelligenza artificiale. Lo dice due volte: l’art. 1,
          comma 2, stabilisce che le sue disposizioni si interpretano e si applicano conformemente
          al Regolamento (UE) 2024/1689; l’art. 3, comma 5, che non produce nuovi obblighi rispetto
          a quelli del regolamento per i sistemi e per i modelli di AI per finalità generali.
        </p>
        <p>Quello che fa:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            fissa principi generali (trasparenza, proporzionalità, sicurezza, sorveglianza e
            intervento umano, cybersicurezza lungo tutto il ciclo di vita) e principi per settori:
            sanità e ricerca (artt. 7-10), lavoro (art. 11), professioni intellettuali (art. 13),
            pubblica amministrazione (art. 14), attività giudiziaria (art. 15);
          </li>
          <li>
            individua le autorità nazionali per l’AI (art. 20) e attribuisce al tribunale le cause
            che hanno a oggetto il funzionamento di un sistema di AI (art. 17, che modifica l’art. 9
            c.p.c.);
          </li>
          <li>
            introduce un reato nuovo, aggravanti e una fattispecie sul text and data mining (art.
            26), e regola il diritto d’autore sulle opere create con l’ausilio dell’AI (art. 25);
          </li>
          <li>
            chiede il consenso di chi esercita la responsabilità genitoriale per l’accesso all’AI dei
            minori di quattordici anni (art. 4, comma 4);
          </li>
          <li>
            delega il Governo ad adeguare l’ordinamento all’AI Act e a disciplinare gli illeciti
            (art. 24) e l’uso di dati e algoritmi per l’addestramento (art. 16).
          </li>
        </ul>
        <p>Quello che non fa, e che spesso le viene attribuito:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#E6EDF3]">Non recepisce l’AI Act.</strong> Un regolamento si
            applica direttamente; la legge lo integra.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Non classifica il rischio.</strong> Se un sistema è
            ad alto rischio lo stabilisce l’AI Act (art. 6 con gli Allegati I e III), non la legge
            italiana.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Non impone la residenza dei dati.</strong> Né in
            Italia né nell’UE. L’art. 5, comma 1, lettera d), prevede solo che le piattaforme di
            e-procurement della pubblica amministrazione possano privilegiare fornitori che
            localizzano ed elaborano i dati strategici in data center sul territorio nazionale, con
            disaster recovery e business continuity in Italia: un criterio di preferenza negli
            acquisti pubblici, non un obbligo.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Non obbliga le imprese all’alfabetizzazione.</strong>{" "}
            La legge prevede la formazione solo come criterio di delega (art. 24, comma 2, lettere
            e, f, i); gli obblighi concreti arrivano con il{" "}
            <Link href="/it/normativa/dlgs-179-2026" className={LINK}>
              D.Lgs. 179/2026
            </Link>
            .
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="a-chi-si-applica" title="A chi si applica">
        <p>
          La legge riguarda chiunque faccia ricerca, sviluppi, adotti o usi sistemi e modelli di
          AI in Italia, ma la maggior parte delle sue regole parla a destinatari precisi: strutture
          sanitarie e di ricerca, datori di lavoro, professionisti, pubbliche amministrazioni,
          uffici giudiziari. Le norme penali valgono per chiunque.
        </p>
        <p>
          Sono escluse dal suo ambito le attività svolte per la sicurezza nazionale dagli organismi
          di informazione, quelle di cybersicurezza dell’ACN a tutela della sicurezza nazionale,
          quelle di difesa delle Forze armate e alcune attività delle Forze di polizia (art. 6), che
          restano comunque soggette al rispetto dei diritti fondamentali.
        </p>
      </NormaSection>

      <NormaSection id="sanita" title="Sanità e ricerca (artt. 7-10)">
        <p>
          In sanità l’AI è un supporto, e la decisione resta al medico: l’art. 7, comma 5, dice che
          i sistemi di AI costituiscono un supporto nei processi di prevenzione, diagnosi, cura e
          scelta terapeutica, «lasciando impregiudicata la decisione, che è sempre rimessa agli
          esercenti la professione medica».
        </p>
        <NormaTable caption="Le regole della Legge 132/2025 per sanità e ricerca">
          <thead>
            <tr>
              <th scope="col">Articolo</th>
              <th scope="col">Cosa prevede</th>
              <th scope="col">Cosa significa per chi progetta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">7</th>
              <td>
                Nessuna selezione discriminatoria nell’accesso alle prestazioni (c. 2); diritto
                dell’interessato a essere informato sull’uso dell’AI (c. 3); decisione sempre al
                medico (c. 5); sistemi e dati affidabili, verificati periodicamente e aggiornati
                (c. 6)
              </td>
              <td>
                L’interfaccia deve suggerire, non decidere; l’informativa al paziente va prevista;
                la verifica periodica di modello e dati va pianificata e documentata
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>
                Trattamenti per ricerca e sperimentazione su sistemi di AI sanitaria, svolti da
                soggetti pubblici e privati senza scopo di lucro, IRCCS o privati in progetti con
                loro, dichiarati di rilevante interesse pubblico; uso secondario di dati privi di
                identificativi diretti senza ulteriore consenso, con informativa anche generale sul
                sito; trattamento per anonimizzare, pseudonimizzare o sintetizzare i dati; i
                trattamenti vanno comunicati al Garante e possono partire dopo trenta giorni se non
                bloccati
              </td>
              <td>
                Il progetto parte da una comunicazione al Garante con le informazioni degli artt.
                24, 25, 32 e 35 GDPR e i responsabili del trattamento: la DPIA e le misure di
                sicurezza vanno pronte prima, non dopo. Restano fermi i poteri ispettivi e
                sanzionatori del Garante
              </td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>
                Decreto del Ministro della salute, entro centoventi giorni, sul trattamento dei dati
                per ricerca e sperimentazione con AI, anche in spazi di sperimentazione
              </td>
              <td>Al 29 ottobre 2026 l’adozione del decreto non risulta</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>
                Nuovo art. 12-bis del D.L. 179/2012: decreti del Ministro della salute sulle
                soluzioni di AI a supporto del fascicolo sanitario elettronico; piattaforma di AI di
                AGENAS per l’assistenza territoriale, con suggerimenti non vincolanti a
                professionisti sanitari e medici
              </td>
              <td>
                Anche la piattaforma pubblica è costruita sul principio del suggerimento non
                vincolante
              </td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          Classe di rischio e regole della legge italiana sono due piani diversi. Un software di
          supporto diagnostico che è un dispositivo medico soggetto a organismo notificato è ad
          alto rischio per l’AI Act (art. 6(1) e Allegato I, obblighi dal 2 agosto 2028); un
          sistema di triage di emergenza lo è per l’Allegato III (dal 2 dicembre 2027). In entrambi
          i casi la Legge 132/2025 aggiunge i suoi principi, ma non cambia la classificazione. Ne
          parlo più a fondo nell’
          <Link href="/it/ricerca/legge-132-2025" className={LINK}>
            approfondimento sulla Legge 132/2025 in sanità
          </Link>
          .
        </p>
      </NormaSection>

      <NormaSection id="autorita" title="Le autorità (art. 20)">
        <p>
          L’art. 20 designa due autorità nazionali per l’intelligenza artificiale, con compiti
          distinti, e lascia al loro posto quelle che già vigilano su banche, mercati e
          assicurazioni.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#E6EDF3]">AgID</strong> — promozione dell’innovazione e
            autorità di notifica ai sensi dell’art. 70 dell’AI Act: designa e monitora gli
            organismi che verificano la conformità dei sistemi.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">ACN</strong> — vigilanza sui sistemi di AI, comprese
            ispezioni e sanzioni; autorità di vigilanza del mercato e punto di contatto unico con le
            istituzioni dell’UE.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Banca d’Italia, CONSOB, IVASS</strong> — restano
            autorità di vigilanza del mercato nei casi dell’art. 74(6) dell’AI Act.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Garante privacy e AGCOM</strong> — la legge ne fa
            salvi competenze e poteri (c. 4), ma non li designa come autorità per l’AI. Il{" "}
            <Link href="/it/normativa/dlgs-179-2026" className={LINK}>
              D.Lgs. 179/2026
            </Link>{" "}
            ha poi reso il Garante autorità di vigilanza del mercato solo per i casi dell’art. 74(8)
            dell’AI Act.
          </li>
        </ul>
        <p>
          AgID e ACN gestiscono insieme gli spazi di sperimentazione e si coordinano in un
          comitato presso la Presidenza del Consiglio dei ministri, al quale partecipano Banca
          d’Italia, CONSOB e IVASS per le questioni di loro competenza (c. 3).
        </p>
      </NormaSection>

      <NormaSection id="penale" title="Reati e aggravanti (art. 26)">
        <p>
          L’art. 26 porta l’AI nel codice penale in due modi: un reato nuovo per i deepfake e una
          serie di aggravanti quando l’AI è il mezzo con cui si commette un reato che esisteva già.
        </p>
        <NormaTable caption="Modifiche penali della Legge 132/2025 (art. 26)">
          <thead>
            <tr>
              <th scope="col">Norma</th>
              <th scope="col">Cosa cambia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Art. 61, n. 11-decies c.p.</th>
              <td>
                Aggravante comune: aver commesso il fatto con sistemi di AI che, per natura o modo
                d’uso, sono stati mezzo insidioso, hanno ostacolato la difesa o aggravato le
                conseguenze
              </td>
            </tr>
            <tr>
              <th scope="row">Art. 612-quater c.p. (nuovo)</th>
              <td>
                Illecita diffusione di contenuti generati o alterati con sistemi di AI: reclusione
                da 1 a 5 anni per chi cagiona un danno ingiusto diffondendo senza consenso immagini,
                video o voci falsificati e idonei a ingannare; a querela, salvo i casi procedibili
                d’ufficio
              </td>
            </tr>
            <tr>
              <th scope="row">Art. 294 c.p.</th>
              <td>
                Attentato contro i diritti politici del cittadino: reclusione da 2 a 6 anni se
                l’inganno avviene con sistemi di AI
              </td>
            </tr>
            <tr>
              <th scope="row">Art. 2637 c.c.</th>
              <td>Aggiotaggio: reclusione da 2 a 7 anni se commesso con sistemi di AI</td>
            </tr>
            <tr>
              <th scope="row">Art. 185 TUF</th>
              <td>
                Manipolazione del mercato: reclusione da 2 a 7 anni e multa da 25.000 euro a 6
                milioni se commessa con sistemi di AI
              </td>
            </tr>
            <tr>
              <th scope="row">Art. 171, c. 1, lett. a-ter) L. 633/1941</th>
              <td>
                Reato di riproduzione o estrazione di testo e dati in violazione degli artt. 70-ter
                e 70-quater della legge sul diritto d’autore, anche con sistemi di AI
              </td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          Il reato che riguarda direttamente chi progetta e usa sistemi ad alto rischio non è in
          questa legge: è l’art. 437-bis c.p., introdotto dal{" "}
          <Link href="/it/normativa/dlgs-160-2026" className={LINK}>
            D.Lgs. 160/2026
          </Link>{" "}
          in attuazione della delega dell’art. 24, comma 3. Lo stesso decreto ha reso il 612-quater
          reato presupposto della responsabilità degli enti.
        </p>
      </NormaSection>

      <NormaSection id="deleghe" title="Deleghe e decreti attuativi">
        <p>
          La parte operativa della legge è nelle deleghe, e due su tre sono già diventate decreti
          legislativi in vigore.
        </p>
        <NormaTable caption="Deleghe della Legge 132/2025 e stato di attuazione al 29 ottobre 2026">
          <thead>
            <tr>
              <th scope="col">Delega</th>
              <th scope="col">Oggetto</th>
              <th scope="col">Attuazione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Art. 24, c. 1 e 2</th>
              <td>
                Adeguamento all’AI Act: poteri e sanzioni delle autorità, formazione e
                alfabetizzazione, professioni ed equo compenso, università e ricerca, disciplina
                per la polizia
              </td>
              <td>
                <Link href="/it/normativa/dlgs-179-2026" className={LINK}>
                  D.Lgs. 179/2026
                </Link>
                , in vigore dal <time dateTime="2026-10-23">23 ottobre 2026</time>; la parte sulla
                polizia (lett. h) nel{" "}
                <Link href="/it/normativa/dlgs-160-2026" className={LINK}>
                  D.Lgs. 160/2026
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Art. 24, c. 3 e 5</th>
              <td>
                Illeciti legati all’AI: reati di omessa adozione di misure di sicurezza con
                pericolo concreto, criteri di imputazione per persone ed enti, onere della prova
                nella responsabilità civile, uso dell’AI nelle indagini
              </td>
              <td>
                <Link href="/it/normativa/dlgs-160-2026" className={LINK}>
                  D.Lgs. 160/2026
                </Link>
                , in vigore dal <time dateTime="2026-09-30">30 settembre 2026</time>
              </td>
            </tr>
            <tr>
              <th scope="row">Art. 16</th>
              <td>
                Disciplina organica dell’uso di dati, algoritmi e metodi matematici per
                l’addestramento, senza obblighi ulteriori rispetto all’AI Act
              </td>
              <td>
                Nessuno dei due decreti la indica fra le proprie basi; il D.Lgs. 179/2026 (art. 52)
                tutela però dati, algoritmi e metodi di addestramento come segreti commerciali
              </td>
            </tr>
          </tbody>
        </NormaTable>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <p>
          <strong className="text-[#E6EDF3]">Il «supporto» va dimostrato nel prodotto.</strong>{" "}
          Sanità (art. 7), pubblica amministrazione (art. 14), giustizia (art. 15) e professioni
          (art. 13) ripetono lo stesso principio: l’AI aiuta, la persona decide e ne risponde. Su
          un sistema reale questo significa un flusso in cui la proposta del modello e la decisione
          umana sono due eventi distinti, registrati e attribuibili a qualcuno.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Informare è un obbligo di progetto.</strong> Il
          paziente ha diritto di sapere che si usa l’AI (art. 7), il cliente del professionista
          deve ricevere le informazioni sui sistemi usati in linguaggio chiaro (art. 13), il
          lavoratore va informato secondo l’art. 1-bis del D.Lgs. 152/1997 (art. 11). Sono testi,
          ma anche punti dell’interfaccia e del processo che qualcuno deve progettare.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">La ricerca sanitaria ha una corsia, con un
          cancello.</strong> L’art. 8 rende più semplice l’uso secondario dei dati per costruire
          sistemi di AI sanitaria, ma il trattamento parte solo dopo la comunicazione al Garante e
          trenta giorni senza blocco. La documentazione privacy diventa un prerequisito del
          calendario di progetto.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Dove tenere i dati resta una tua scelta.</strong> La
          legge non la impone. Se la fai, falla per ragioni che puoi spiegare: giurisdizione,
          continuità del servizio, segreto professionale, requisiti dei clienti pubblici che
          applicano il criterio di preferenza dell’art. 5.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/ai-act" className={LINK}>AI Act</Link> — è la norma che
            classifica il rischio e fissa gli obblighi; la Legge 132/2025 si applica conformemente a
            esso.
          </li>
          <li>
            <Link href="/it/normativa/dlgs-160-2026" className={LINK}>D.Lgs. 160/2026</Link> — art.
            437-bis c.p., responsabilità degli enti (art. 25-vicies D.Lgs. 231/2001), regole sulla
            prova nelle cause di risarcimento.
          </li>
          <li>
            <Link href="/it/normativa/dlgs-179-2026" className={LINK}>D.Lgs. 179/2026</Link> —
            poteri delle autorità, sanzioni, decisioni sul lavoro, DVR, formazione delle professioni
            e ECM.
          </li>
          <li>
            <Link href="/it/normativa/gdpr" className={LINK}>GDPR e Codice privacy</Link> — gli artt.
            4 e 8 della legge rinviano al GDPR; la ricerca sanitaria passa dal Garante.
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#E6EDF3]">«La Legge 132 recepisce l’AI Act».</strong> Un
            regolamento non si recepisce. La legge lo integra e dichiara di non aggiungere obblighi.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Per la Legge 132 l’AI in sanità è ad alto
            rischio».</strong> La classe di rischio la decide l’AI Act. La legge italiana aggiunge
            principi, non categorie.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«La legge italiana impone i dati in Italia».</strong>{" "}
            Prevede solo una preferenza per le piattaforme di acquisto della pubblica
            amministrazione.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«È una legge di principi, non cambia
            nulla».</strong> I principi sono stati tradotti in decreti in vigore: un reato per chi
            omette sicurezza o sorveglianza umana sui sistemi ad alto rischio, la responsabilità degli enti, la nullità delle decisioni
            sul lavoro prese solo da un algoritmo.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Il Garante è l’autorità per l’AI».</strong> Le
            autorità sono AgID e ACN, con Banca d’Italia, CONSOB e IVASS nel settore finanziario; il
            Garante mantiene i poteri sul GDPR e vigila sull’AI Act solo nei casi dell’art. 74(8).
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
