import Link from "next/link";
import { normaMetadata } from "@/app/normativa";
import {
  NormaPageLayout,
  NormaSection,
  NormaTable,
  type NormaFaq,
} from "@/components/sections/NormaPageLayout";

/*
 * "Digital Omnibus" covers two different packages: the AI Omnibus, which is law
 * (Regulation (EU) 2026/1744, checked against the Italian text in the Official
 * Journal), and the data Omnibus COM(2025) 837, which is a proposal. Every
 * statement about the second one is marked as not final.
 */

const SLUG = "digital-omnibus";
const LINK = "text-[#00B4D8] hover:text-[#E6EDF3]";
const STRONG = "text-[#E6EDF3]";

export const metadata = normaMetadata(SLUG, {
  title: "Digital Omnibus: cosa è legge (Reg. (UE) 2026/1744) e cosa è proposta (COM(2025) 837)",
  description:
    "Le nuove date dell’AI Act fissate dal Reg. (UE) 2026/1744, in vigore dal 27 luglio 2026, e la proposta di Omnibus su GDPR, ePrivacy, Data Act e segnalazioni cyber dopo l’orientamento del Consiglio del 21 ottobre 2026. Aggiornato al 29 ottobre 2026.",
  keywords: [
    "Digital Omnibus",
    "Omnibus digitale IA",
    "Regolamento (UE) 2026/1744",
    "COM(2025) 837",
    "rinvio AI Act alto rischio",
    "AI Act 2 dicembre 2027",
    "Digital Omnibus GDPR",
    "small mid-cap AI Act",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "Il Digital Omnibus ha rinviato l’AI Act?",
    a: "Solo in parte. Il Reg. (UE) 2026/1744, in vigore dal 27 luglio 2026, ha spostato gli obblighi per i sistemi ad alto rischio al 2 dicembre 2027 (Allegato III) e al 2 agosto 2028 (Allegato I). Divieti, alfabetizzazione, obblighi sui modelli per finalità generali e trasparenza dell’art. 50 non sono stati rinviati, e lo stesso regolamento ha aggiunto nuovi divieti che si applicano dal 2 dicembre 2026.",
  },
  {
    q: "Il Digital Omnibus ha cambiato il GDPR?",
    a: "No. La parte su GDPR, ePrivacy, Data Act e segnalazioni di incidenti è la proposta COM(2025) 837. Il Consiglio ha adottato il suo orientamento generale il 21 ottobre 2026; mancano la posizione del Parlamento europeo e i triloghi. Finché non sarà adottata e pubblicata, valgono le regole attuali.",
  },
  {
    q: "Cosa succede ai sistemi ad alto rischio già sul mercato prima delle nuove date?",
    a: "Secondo l’art. 111, par. 2, dell’AI Act, nel testo sostituito dal Reg. (UE) 2026/1744, i sistemi ad alto rischio immessi sul mercato o messi in servizio prima della data di applicazione degli obblighi vi sono soggetti solo se, da quella data, subiscono modifiche significative della progettazione. Fanno eccezione i sistemi destinati alle autorità pubbliche, che devono adeguarsi entro il 2 agosto 2030. I divieti dell’art. 5 si applicano comunque.",
  },
  {
    q: "Cosa cambia per l’alfabetizzazione in materia di AI?",
    a: "Il nuovo art. 4 chiede a fornitori e deployer di adottare misure volte a sostenere lo sviluppo dell’alfabetizzazione del personale e di chi usa i sistemi per loro conto, mentre il testo originale chiedeva di garantirla. L’obbligo resta, con un’intensità diversa. In Italia il D.Lgs. 179/2026 aggiunge obblighi concreti di formazione per lavoratori, ordini professionali e professioni sanitarie.",
  },
  {
    q: "Chi sono le small mid-cap e cosa cambia per loro?",
    a: "Sono le piccole imprese a media capitalizzazione come definite dalla raccomandazione (UE) 2025/1099, una categoria fra le PMI e le grandi imprese. Il Reg. (UE) 2026/1744 estende loro il trattamento delle PMI sulle sanzioni: per ciascuna sanzione si applica il minore fra la percentuale del fatturato e l’importo fisso (art. 99, par. 6 bis, AI Act).",
  },
];

export default function DigitalOmnibusPage() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "Regolamento (UE) 2026/1744 — Omnibus digitale sull’IA",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202601744",
          note: "GU UE serie L del 24 luglio 2026",
        },
        {
          label: "Proposta COM(2025) 837 — Digital Omnibus su dati, GDPR, ePrivacy e segnalazioni cyber",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52025PC0837",
          note: "testo della Commissione, non ancora adottato",
        },
        {
          label: "Codice di condotta sulla trasparenza dei contenuti generati dall’AI (10 giugno 2026)",
          url: "https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content",
          note: "Commissione europea, riferimento per l’art. 50",
        },
      ]}
      approfondimenti={[
        {
          label: "AI Act: obblighi, date e autorità in Italia",
          href: "/it/normativa/ai-act",
          note: "il regolamento come risulta dopo il Reg. (UE) 2026/1744",
        },
        {
          label: "Che cosa chiede l’AI Act a un sistema RAG?",
          href: "/it/risposte/rag-ai-act",
        },
        {
          label: "Consulenza AI, governance e compliance",
          href: "/it/consulenza-ai-governance-compliance",
        },
        {
          label: "Assessment di esposizione",
          href: "/it/assessment",
          note: "cosa resta da decidere adesso, anche se la scadenza è nel 2027",
        },
        {
          label: "Cosa faccio lunedì mattina",
          href: "https://www.linkedin.com/pulse/cosa-faccio-luned%C3%AC-mattina-corrado-patierno-arx1e/",
          note: "dal quadro dei regimi al piano di progetto",
          linkedin: true,
        },
      ]}
      ctaTitle="La proroga sposta le scadenze, non le decisioni"
      ctaSubtitle="Un sistema che entra in produzione nel 2027 si progetta adesso. L’assessment di esposizione stabilisce cosa va deciso oggi e cosa l’architettura dovrà poter dimostrare."
    >
      <NormaSection id="due-pacchetti" title="Due pacchetti, due stati diversi">
        <p>
          «Digital Omnibus» indica due interventi distinti, e confonderli è l’errore più comune: uno
          è legge, l’altro è una proposta.
        </p>
        <NormaTable caption="I due pacchetti del Digital Omnibus al 29 ottobre 2026">
          <thead>
            <tr>
              <th scope="col">Pacchetto</th>
              <th scope="col">Atto</th>
              <th scope="col">Cosa tocca</th>
              <th scope="col">Stato</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Omnibus sull’AI</th>
              <td>Reg. (UE) 2026/1744 dell’8 luglio 2026</td>
              <td>AI Act (Reg. (UE) 2024/1689) e, per gli aspetti collegati, i regolamenti 2018/1139 e 2023/1230</td>
              <td>
                In vigore dal <time dateTime="2026-07-27">27 luglio 2026</time>
              </td>
            </tr>
            <tr>
              <th scope="row">Omnibus sui dati</th>
              <td>Proposta COM(2025) 837</td>
              <td>GDPR, ePrivacy, Data Act, segnalazioni di incidenti cyber</td>
              <td>
                Proposta: orientamento generale del Consiglio il{" "}
                <time dateTime="2026-10-21">21 ottobre 2026</time>; mancano Parlamento europeo e
                triloghi
              </td>
            </tr>
          </tbody>
        </NormaTable>
      </NormaSection>

      <NormaSection id="omnibus-ai" title="L’Omnibus sull’AI: cosa è cambiato davvero">
        <p>
          Il Regolamento (UE) 2026/1744, pubblicato nella Gazzetta ufficiale dell’UE il 24 luglio
          2026 e in vigore dal 27 luglio, modifica l’AI Act su date, alfabetizzazione, divieti,
          sanzioni e sandbox. Le nuove date sono fisse: non dipendono dalla disponibilità delle norme
          tecniche.
        </p>
        <NormaTable caption="Date dell’AI Act prima e dopo il Reg. (UE) 2026/1744">
          <thead>
            <tr>
              <th scope="col">Obbligo</th>
              <th scope="col">Testo originale</th>
              <th scope="col">Dopo il Reg. 2026/1744</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Alto rischio, Allegato III (art. 6(2))</th>
              <td><time dateTime="2026-08-02">2 agosto 2026</time></td>
              <td><time dateTime="2027-12-02">2 dicembre 2027</time></td>
            </tr>
            <tr>
              <th scope="row">Alto rischio, Allegato I (art. 6(1))</th>
              <td><time dateTime="2027-08-02">2 agosto 2027</time></td>
              <td><time dateTime="2028-08-02">2 agosto 2028</time></td>
            </tr>
            <tr>
              <th scope="row">Nuovi divieti, art. 5, par. 1, lett. b bis) e b ter)</th>
              <td>—</td>
              <td><time dateTime="2026-12-02">2 dicembre 2026</time></td>
            </tr>
            <tr>
              <th scope="row">
                Marcatura dei contenuti generati (art. 50(2)) per i sistemi immessi sul mercato prima
                del 2 agosto 2026
              </th>
              <td><time dateTime="2026-08-02">2 agosto 2026</time></td>
              <td><time dateTime="2026-12-02">2 dicembre 2026</time></td>
            </tr>
            <tr>
              <th scope="row">Almeno uno spazio di sperimentazione normativa (sandbox) nazionale operativo</th>
              <td><time dateTime="2026-08-02">2 agosto 2026</time></td>
              <td><time dateTime="2027-08-02">2 agosto 2027</time></td>
            </tr>
            <tr>
              <th scope="row">Sistemi ad alto rischio già in uso presso autorità pubbliche</th>
              <td><time dateTime="2030-08-02">2 agosto 2030</time></td>
              <td><time dateTime="2030-08-02">2 agosto 2030</time></td>
            </tr>
          </tbody>
        </NormaTable>
        <p>Oltre alle date, il regolamento cambia alcune regole di sostanza:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className={STRONG}>Alfabetizzazione (art. 4).</strong> Fornitori e deployer non
            devono più «garantire» l’alfabetizzazione del personale, ma adottare misure volte a
            sostenerla. L’obbligo resta.
          </li>
          <li>
            <strong className={STRONG}>Nuovi divieti (art. 5).</strong> Vietati i sistemi che
            generano o manipolano immagini, video o audio realistici delle parti intime di una
            persona riconoscibile, o che la ritraggono in atti sessualmente espliciti, senza il suo
            consenso, e quelli che generano materiale pedopornografico. Per l’immissione sul
            mercato il divieto scatta se questa è la finalità prevista o se il sistema lo rende un
            risultato prevedibile senza misure di sicurezza ragionevoli per impedirlo.
          </li>
          <li>
            <strong className={STRONG}>Dati particolari per correggere le distorsioni (art. 4
            bis).</strong> I fornitori di sistemi ad alto rischio possono trattare eccezionalmente
            categorie particolari di dati personali per rilevare e correggere le distorsioni, solo
            se non bastano dati sintetici o anonimizzati e con garanzie precise. Il GDPR continua ad
            applicarsi.
          </li>
          <li>
            <strong className={STRONG}>Small mid-cap (art. 99, par. 6 bis).</strong> Le piccole
            imprese a media capitalizzazione ottengono lo stesso favore delle PMI sulle sanzioni: si
            applica il minore fra percentuale e importo fisso.
          </li>
        </ul>
        <p>
          Resta invece, riformulata per le nuove date, la regola dell’art. 111, par. 2, sui sistemi
          già sul mercato: i sistemi ad alto rischio immessi prima della data di applicazione vi
          sono soggetti solo se, da quella data, la loro progettazione cambia in modo
          significativo; quelli destinati alle autorità pubbliche vanno adeguati comunque entro il
          2 agosto 2030, come nel testo originale.
        </p>
        <p>
          Cosa non è cambiato: i divieti originari e l’alfabetizzazione si applicano dal 2 febbraio
          2025, gli obblighi sui modelli per finalità generali dal 2 agosto 2025, la trasparenza
          dell’art. 50 dal 2 agosto 2026. Il quadro completo è nella pagina sull’
          <Link href="/it/normativa/ai-act" className={LINK}>
            AI Act
          </Link>
          .
        </p>
      </NormaSection>

      <NormaSection id="omnibus-dati" title="L’Omnibus sui dati: una proposta, non ancora legge">
        <p>
          La proposta COM(2025) 837 interviene su GDPR, direttiva ePrivacy, Data Act e obblighi di
          segnalazione degli incidenti cyber. Il 21 ottobre 2026 il Consiglio ha adottato il suo
          orientamento generale. Per diventare legge servono ancora la posizione del Parlamento
          europeo, l’accordo nei triloghi, l’adozione formale e la pubblicazione.
        </p>
        <p>
          Secondo quanto riportato sull’orientamento del Consiglio, i punti principali sono tre.{" "}
          <strong className={STRONG}>Nessuno è definitivo</strong> e il testo può cambiare:
        </p>
        <NormaTable caption="Proposta COM(2025) 837: regola in vigore e contenuto riportato dell’orientamento del Consiglio (21 ottobre 2026)">
          <thead>
            <tr>
              <th scope="col">Tema</th>
              <th scope="col">Oggi (legge in vigore)</th>
              <th scope="col">Orientamento del Consiglio (proposta)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Notifica delle violazioni dei dati</th>
              <td>Al Garante entro 72 ore, salvo che sia improbabile un rischio (art. 33 GDPR)</td>
              <td>Solo se il rischio è elevato, entro 96 ore</td>
            </tr>
            <tr>
              <th scope="row">Cookie e tecnologie simili</th>
              <td>Consenso secondo la direttiva ePrivacy e il Codice privacy</td>
              <td>Meno banner di consenso</td>
            </tr>
            <tr>
              <th scope="row">Segnalazioni di incidenti</th>
              <td>Canali e termini distinti per GDPR, NIS2 e altre norme</td>
              <td>Un punto unico di segnalazione</td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          Finché la proposta non è adottata, chi subisce una violazione di dati personali deve
          notificarla entro 72 ore, e le regole sui cookie restano quelle di oggi. Progettare
          procedure su una proposta significa rifarle se il testo finale cambia. Le regole in vigore
          sono nella pagina sul{" "}
          <Link href="/it/normativa/gdpr" className={LINK}>
            GDPR
          </Link>
          .
        </p>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <p>
          <strong className={STRONG}>La proroga sposta le scadenze, non le decisioni.</strong> Un
          sistema che entra in produzione nel 2027 si progetta nel 2026: la classificazione, la
          sorveglianza umana, i log e la documentazione tecnica si decidono nella specifica, non a
          ridosso della scadenza. Il tempo guadagnato serve a farle bene, non a rimandarle.
        </p>
        <p>
          <strong className={STRONG}>Le altre norme non si sono spostate.</strong> In Italia il
          reato dell’art. 437-bis c.p. (
          <Link href="/it/normativa/dlgs-160-2026" className={LINK}>
            D.Lgs. 160/2026
          </Link>
          ) è in vigore dal 30 settembre 2026 e richiama le misure di sicurezza e la sorveglianza
          umana sui sistemi ad alto rischio; le regole su lavoro e AI del{" "}
          <Link href="/it/normativa/dlgs-179-2026" className={LINK}>
            D.Lgs. 179/2026
          </Link>{" "}
          si applicano dal 23 ottobre 2026; la{" "}
          <Link href="/it/normativa/pld" className={LINK}>
            Direttiva prodotti difettosi
          </Link>{" "}
          vale per il software immesso sul mercato dopo l’8 dicembre 2026.
        </p>
        <p>
          <strong className={STRONG}>Attenzione ai sistemi già in esercizio.</strong> L’art. 111,
          par. 2, esenta i sistemi ad alto rischio già sul mercato solo finché la loro progettazione
          non cambia in modo significativo. Una riprogettazione dopo il 2 dicembre 2027 li porta
          dentro gli obblighi: conviene sapere fin d’ora quali interventi lo farebbero.
        </p>
        <p>
          <strong className={STRONG}>Se generi contenuti, la scadenza è vicina.</strong> Chi fornisce
          sistemi che generano testo, immagini, audio o video immessi sul mercato prima del 2 agosto
          2026 deve applicare la marcatura leggibile da una macchina dell’art. 50(2) entro il 2
          dicembre 2026.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/ai-act" className={LINK}>AI Act</Link> — è il regolamento
            modificato: va letto nella versione consolidata con il Reg. (UE) 2026/1744.
          </li>
          <li>
            <Link href="/it/normativa/gdpr" className={LINK}>GDPR</Link> — oggi invariato; l’art. 4
            bis dell’AI Act si aggiunge alle sue condizioni per i dati particolari, non le sostituisce.
          </li>
          <li>
            <Link href="/it/normativa/data-act" className={LINK}>Data Act</Link> e{" "}
            <Link href="/it/normativa/nis2" className={LINK}>NIS2</Link> — toccati dalla proposta sui
            dati e sulle segnalazioni, si applicano oggi nella versione vigente.
          </li>
          <li>
            <Link href="/it/normativa/legge-132-2025" className={LINK}>Legge 132/2025</Link> — integra
            l’AI Act come modificato; le date europee valgono anche in Italia.
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className={STRONG}>«L’AI Act è stato rinviato».</strong> Sono stati rinviati gli
            obblighi per l’alto rischio. Divieti, alfabetizzazione, modelli per finalità generali e
            trasparenza si applicano già, e i nuovi divieti partono il 2 dicembre 2026.
          </li>
          <li>
            <strong className={STRONG}>«Le date possono slittare ancora».</strong> Il regolamento le
            fissa: 2 dicembre 2027 e 2 agosto 2028, senza meccanismi legati alle norme tecniche.
          </li>
          <li>
            <strong className={STRONG}>«L’Omnibus ha semplificato il GDPR».</strong> La parte sui
            dati è una proposta. Oggi valgono il GDPR e il Codice privacy come sono.
          </li>
          <li>
            <strong className={STRONG}>«L’alfabetizzazione non è più obbligatoria».</strong> È
            cambiata la formulazione, non l’esistenza dell’obbligo; in Italia il D.Lgs. 179/2026
            aggiunge obblighi di formazione.
          </li>
          <li>
            <strong className={STRONG}>«Abbiamo tempo fino al 2027, iniziamo nel 2027».</strong> Un
            sistema che arriva in produzione a ridosso della scadenza è stato progettato prima: le
            decisioni che contano si prendono adesso.
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
