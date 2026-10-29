import Link from "next/link";
import { normaMetadata } from "@/app/normativa";
import {
  NormaPageLayout,
  NormaSection,
  NormaTable,
  type NormaFaq,
} from "@/components/sections/NormaPageLayout";

/*
 * Cyber Resilience Act. Facts checked on 29 October 2026 against the Italian
 * text of Regulation (EU) 2024/2847 (OJ L, 20.11.2024), the Commission page on
 * CRA reporting and press release no. 191 of the Council of Ministers. Dates
 * and status come from the registry entry in app/normativa.ts.
 * The landing page /cra-11-settembre covers the art. 14 deadline in depth:
 * link to it, do not duplicate it.
 */

const SLUG = "cra";

export const metadata = normaMetadata(SLUG, {
  title: "Cyber Resilience Act (Reg. (UE) 2024/2847): obblighi dei fabbricanti, segnalazioni e SBOM",
  description:
    "Cosa chiede il Cyber Resilience Act a chi produce, importa o distribuisce software e prodotti connessi: segnalazioni all’ENISA dall’11 settembre 2026, SBOM, periodo di assistenza, sanzioni, schema di decreto italiano. Aggiornato al 29 ottobre 2026.",
  keywords: [
    "Cyber Resilience Act",
    "CRA",
    "Regolamento (UE) 2024/2847",
    "articolo 14 CRA",
    "SBOM",
    "distinta base del software",
    "Single Reporting Platform ENISA",
    "prodotti con elementi digitali",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "Il Cyber Resilience Act si applica anche al software puro?",
    a: "Sì. Il Regolamento (UE) 2024/2847 definisce prodotto con elementi digitali qualsiasi prodotto software o hardware, comprese le relative soluzioni di elaborazione dati da remoto e i componenti immessi sul mercato separatamente, purché la finalità prevista o l’uso ragionevolmente prevedibile includa una connessione dati diretta o indiretta a un dispositivo o a una rete. Sono esclusi i prodotti già coperti da regole settoriali come i dispositivi medici (Reg. 2017/745 e 2017/746) e i veicoli a motore (Reg. 2019/2144).",
  },
  {
    q: "Cosa va segnalato dall’11 settembre 2026 e in quanto tempo?",
    a: "Il fabbricante segnala le vulnerabilità attivamente sfruttate e gli incidenti gravi che hanno un impatto sulla sicurezza del prodotto, contemporaneamente al CSIRT designato come coordinatore e all’ENISA, tramite la piattaforma unica di segnalazione. Servono un preallarme entro 24 ore da quando ne è venuto a conoscenza, una notifica entro 72 ore e una relazione finale: per le vulnerabilità entro 14 giorni dalla disponibilità di una misura correttiva, per gli incidenti entro un mese dalla notifica. L’obbligo vale anche per i prodotti immessi sul mercato prima dell’11 dicembre 2027 (art. 69, par. 3).",
  },
  {
    q: "Lo SBOM è obbligatorio? Va pubblicato?",
    a: "Redigerlo è obbligatorio dall’11 dicembre 2027: l’Allegato I, parte II, punto 1 chiede una distinta base del software in un formato di uso comune e leggibile da una macchina, che includa almeno le dipendenze di primo livello, e l’Allegato VII la inserisce nella documentazione tecnica. Pubblicarlo non è obbligatorio: va consegnato all’autorità di vigilanza del mercato su richiesta motivata, e se il fabbricante decide di renderlo disponibile all’utilizzatore indica dove trovarlo.",
  },
  {
    q: "Cosa cambia per chi mantiene software open source?",
    a: "Il regolamento introduce la figura del gestore di software open source: una persona giuridica, diversa dal fabbricante, che sostiene in modo sistematico e duraturo lo sviluppo di software libero e open source destinato ad attività commerciali. L’art. 24 gli chiede una politica di cibersicurezza documentata, la cooperazione con le autorità e, in parte, gli obblighi di segnalazione dell’art. 14. Le sanzioni pecuniarie dell’art. 64 non si applicano ai gestori di software open source.",
  },
  {
    q: "Cosa prevede l’Italia per l’applicazione del CRA?",
    a: "Il 2 ottobre 2026 il Consiglio dei ministri ha esaminato in via preliminare uno schema di decreto legislativo di adeguamento (comunicato n. 191). Secondo il comunicato, l’ACN è autorità di notifica per gli organismi di valutazione della conformità e la vigilanza del mercato è ripartita fra ACN, Banca d’Italia, CONSOB, IVASS e Garante per la protezione dei dati personali; i consumatori possono segnalare a CSIRT Italia vulnerabilità e incidenti e le violazioni rientrano fra le materie delle azioni rappresentative. Lo schema non è ancora legge.",
  },
];

export default function CraPage() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "CRA – Reporting obligations e Single Reporting Platform",
          url: "https://digital-strategy.ec.europa.eu/en/policies/cra-reporting",
          note: "Commissione europea: termini di segnalazione e piattaforma ENISA operativa dall’11 settembre 2026",
        },
      ]}
      approfondimenti={[
        {
          label: "Dall’11 settembre hai 24 ore per segnalare. Chi le usa?",
          href: "/it/cra-11-settembre",
          note: "l’art. 14 in dettaglio: il test in tre domande e cosa avere pronto prima della prima segnalazione",
        },
        {
          label: "Sovranità tecnologica e CADA",
          href: "/it/sovranita-tecnologica",
          note: "perché lo SBOM serve insieme a CRA, PLD e alla proposta CADA",
        },
        {
          label: "Vulnerability management e CVE nella PLD 2024",
          href: "/it/ricerca/pld-2024-vulnerability-management-cve",
          note: "la gestione delle vulnerabilità vista dal lato della responsabilità da prodotto",
        },
        {
          label: "Assessment di esposizione",
          href: "/it/assessment",
          note: "incarico a perimetro fisso: se e a quale titolo il prodotto rientra, e cosa va dimostrato",
        },
        {
          label: "Cosa faccio lunedì mattina",
          href: "https://www.linkedin.com/pulse/cosa-faccio-luned%C3%AC-mattina-corrado-patierno-arx1e/",
          note: "un deliverable ben fatto copre più norme: la gestione delle vulnerabilità serve a più regimi",
          linkedin: true,
        },
      ]}
      ctaTitle="La prima segnalazione non è il momento di scoprire chi la fa"
      ctaSubtitle="L’assessment di esposizione stabilisce se il tuo prodotto rientra nel Cyber Resilience Act, con quale ruolo, e cosa devono già poter dimostrare processo e architettura."
    >
      <NormaSection id="a-chi-si-applica" title="A chi si applica">
        <p>
          Il Cyber Resilience Act si applica ai{" "}
          <strong className="text-[#E6EDF3]">prodotti con elementi digitali</strong> messi a
          disposizione sul mercato UE la cui finalità prevista, o il cui uso ragionevolmente
          prevedibile, include una connessione dati diretta o indiretta a un dispositivo o a una
          rete. La definizione copre qualsiasi prodotto software o hardware, le relative soluzioni
          di elaborazione dati da remoto e i componenti venduti separatamente: un’applicazione, una
          libreria commerciale, un firmware, un dispositivo connesso.
        </p>
        <p>
          Gli obblighi pesano soprattutto sul <strong className="text-[#E6EDF3]">fabbricante</strong>,
          ma il regolamento ne assegna di propri anche a importatori (art. 19) e distributori (art.
          20). Chi immette un prodotto con il proprio nome o marchio, o vi apporta una modifica
          sostanziale, diventa fabbricante a sua volta (artt. 21 e 22).
        </p>
        <p>
          Restano fuori i prodotti già disciplinati da regole settoriali: dispositivi medici e
          diagnostici in vitro (Reg. (UE) 2017/745 e 2017/746), veicoli a motore (Reg. (UE)
          2019/2144), prodotti certificati per l’aviazione (Reg. (UE) 2018/1139), equipaggiamento
          marittimo, e i prodotti sviluppati esclusivamente per sicurezza nazionale o difesa (art.
          2).
        </p>
      </NormaSection>

      <NormaSection id="cosa-chiede" title="Cosa chiede">
        <p>
          Il regolamento chiede sicurezza sia del prodotto sia del processo che lo mantiene nel
          tempo. Prima di immettere il prodotto sul mercato, il fabbricante:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            valuta i rischi di cibersicurezza e ne tiene conto in pianificazione, progettazione,
            sviluppo, produzione, consegna e manutenzione (art. 13, par. 2);
          </li>
          <li>
            rispetta i requisiti essenziali di cibersicurezza del prodotto (Allegato I, parte I) e
            quelli di gestione delle vulnerabilità (Allegato I, parte II);
          </li>
          <li>
            redige la documentazione tecnica (art. 31, Allegato VII), esegue la valutazione della
            conformità (art. 32), firma la dichiarazione di conformità UE e appone la marcatura CE
            (art. 13, par. 12);
          </li>
          <li>
            fissa un <strong className="text-[#E6EDF3]">periodo di assistenza</strong> che rifletta
            la durata d’uso prevista, di almeno cinque anni, o pari alla durata d’uso prevista se
            inferiore (art. 13, par. 8), e tiene disponibili gli aggiornamenti di sicurezza per almeno
            dieci anni dal rilascio (art. 13, par. 9).
          </li>
        </ul>
        <p>
          Il livello di verifica dipende dalla categoria. Per la maggior parte dei prodotti basta il
          controllo interno del fabbricante (modulo A). I prodotti{" "}
          <strong className="text-[#E6EDF3]">importanti</strong> dell’Allegato III (classe I: per
          esempio sistemi operativi, browser, gestori di password, VPN, SIEM, router; classe II:
          ipervisori e runtime di container, firewall, sistemi di rilevamento delle intrusioni) e i
          prodotti <strong className="text-[#E6EDF3]">critici</strong> dell’Allegato IV (per esempio
          smart card ed elementi sicuri) seguono procedure più rigorose.
        </p>

        <NormaTable caption="Obblighi principali del Cyber Resilience Act, per articolo">
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
              <th scope="row">14</th>
              <td>
                Segnalare vulnerabilità attivamente sfruttate e incidenti gravi al CSIRT coordinatore
                e all’ENISA tramite la piattaforma unica; informare gli utilizzatori interessati
              </td>
              <td>Fabbricanti, anche per i prodotti già sul mercato</td>
              <td><time dateTime="2026-09-11">11 settembre 2026</time></td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>
                Requisiti essenziali, valutazione dei rischi, gestione delle vulnerabilità per tutto
                il periodo di assistenza, documentazione tecnica conservata per almeno dieci anni
              </td>
              <td>Fabbricanti</td>
              <td rowSpan={4}>
                <time dateTime="2027-12-11">11 dicembre 2027</time>
              </td>
            </tr>
            <tr>
              <th scope="row">All. I, parte II</th>
              <td>
                Distinta base del software (SBOM) leggibile da una macchina, con almeno le
                dipendenze di primo livello; aggiornamenti di sicurezza tempestivi; divulgazione
                coordinata delle vulnerabilità
              </td>
              <td>Fabbricanti</td>
            </tr>
            <tr>
              <th scope="row">19–20</th>
              <td>
                Immettere o distribuire solo prodotti conformi, verificare marcatura CE e
                documentazione
              </td>
              <td>Importatori e distributori</td>
            </tr>
            <tr>
              <th scope="row">24</th>
              <td>
                Politica di cibersicurezza documentata, cooperazione con le autorità, segnalazioni
                nei limiti del par. 3
              </td>
              <td>Gestori di software open source</td>
            </tr>
          </tbody>
        </NormaTable>
      </NormaSection>

      <NormaSection id="segnalazione" title="La segnalazione dell’art. 14: i quattro termini">
        <p>
          Dall’11 settembre 2026 il fabbricante notifica contemporaneamente al CSIRT designato come
          coordinatore e all’ENISA ogni vulnerabilità attivamente sfruttata e ogni incidente grave
          che ha un impatto sulla sicurezza del prodotto, tramite la piattaforma unica di
          segnalazione gestita dall’ENISA, operativa da quella data. Il CSIRT di riferimento è
          quello dello Stato membro dello stabilimento principale nell’Unione.
        </p>
        <NormaTable caption="Termini di segnalazione dell’art. 14 del Reg. (UE) 2024/2847">
          <thead>
            <tr>
              <th scope="col">Passaggio</th>
              <th scope="col">Vulnerabilità attivamente sfruttata</th>
              <th scope="col">Incidente grave</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Preallarme</th>
              <td>Entro 24 ore da quando il fabbricante ne è venuto a conoscenza</td>
              <td>Entro 24 ore, indicando se si sospettano atti illegittimi o malevoli</td>
            </tr>
            <tr>
              <th scope="row">Notifica</th>
              <td>Entro 72 ore, con natura dello sfruttamento e misure correttive</td>
              <td>Entro 72 ore, con una valutazione iniziale</td>
            </tr>
            <tr>
              <th scope="row">Relazione finale</th>
              <td>Entro 14 giorni dalla disponibilità di una misura correttiva o di attenuazione</td>
              <td>Entro un mese dalla notifica</td>
            </tr>
          </tbody>
        </NormaTable>
        <p>
          Le 24 ore servono a dare l’allarme, non a risolvere. Il fabbricante deve anche informare
          gli utilizzatori interessati e le misure che possono adottare (art. 14, par. 8). Le
          sanzioni pecuniarie non si applicano a micro e piccole imprese per il solo mancato
          rispetto del termine del preallarme (art. 64, par. 10): l’obbligo di segnalare resta. Chi
          deve segnalare, da quale evento parte l’orologio e cosa preparare prima è il tema della
          pagina{" "}
          <Link href="/it/cra-11-settembre" className="text-[#00B4D8] hover:text-[#E6EDF3]">
            Dall’11 settembre hai 24 ore per segnalare
          </Link>
          .
        </p>
      </NormaSection>

      <NormaSection id="sbom-open-source" title="SBOM, documentazione tecnica e open source">
        <p>
          Lo SBOM è un obbligo, non una buona pratica: dall’11 dicembre 2027 il fabbricante
          identifica e documenta i componenti del prodotto redigendo una distinta base del software
          in un formato di uso comune e leggibile da una macchina, con almeno le dipendenze di primo
          livello (Allegato I, parte II, punto 1). La documentazione tecnica dell’Allegato VII lo
          comprende, insieme alla descrizione dell’architettura, alla politica di divulgazione
          coordinata delle vulnerabilità e alle relazioni delle prove; va conservata per almeno
          dieci anni (art. 13, par. 13).
        </p>
        <p>
          Il fabbricante risponde dell’intero prodotto, componenti di terzi compresi. Quando trova
          una vulnerabilità in un componente, anche open source, la segnala a chi lo mantiene e la
          corregge (art. 13, par. 6). Il <strong className="text-[#E6EDF3]">gestore di software
          open source</strong> (una persona giuridica che sostiene in modo sistematico lo sviluppo
          di software libero destinato ad attività commerciali) ha un regime
          leggero: politica di cibersicurezza documentata, cooperazione con le autorità, nessuna
          sanzione pecuniaria (artt. 24 e 64).
        </p>
        <p>
          Lo stesso SBOM serve anche altrove: è un elemento di prova per la responsabilità da
          prodotto e un artefatto di audit nella proposta CADA. Ne parla la pagina sulla{" "}
          <Link href="/it/sovranita-tecnologica" className="text-[#00B4D8] hover:text-[#E6EDF3]">
            sovranità tecnologica
          </Link>
          .
        </p>
      </NormaSection>

      <NormaSection id="italia" title="In Italia: autorità e schema di decreto">
        <p>
          Il CRA è un regolamento e si applica direttamente; l’Italia deve però stabilire autorità
          e sanzioni. Il 2 ottobre 2026 il Consiglio dei ministri ha approvato in esame preliminare
          lo schema di decreto legislativo di adeguamento (comunicato n. 191). Secondo il
          comunicato:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            l’<strong className="text-[#E6EDF3]">ACN</strong> è autorità di notifica per gli
            organismi di valutazione della conformità;
          </li>
          <li>
            la vigilanza del mercato è ripartita fra ACN in via generale, Banca d’Italia, CONSOB e
            IVASS per gli istituti finanziari e Garante per la protezione dei dati personali per
            quanto di competenza;
          </li>
          <li>
            i consumatori possono segnalare direttamente a CSIRT Italia vulnerabilità e incidenti;
            le violazioni entrano fra le materie delle azioni rappresentative a tutela degli
            interessi collettivi;
          </li>
          <li>
            sono previsti un canale di supporto per micro e piccole e medie imprese e uno spazio di
            sperimentazione normativa (Sandbox-CRA).
          </li>
        </ul>
        <p>
          È uno schema: il testo può cambiare fino all’approvazione definitiva e alla pubblicazione
          in Gazzetta. I massimi delle sanzioni li fissa già il regolamento.
        </p>
        <NormaTable caption="Sanzioni amministrative pecuniarie massime (art. 64 del Reg. (UE) 2024/2847)">
          <thead>
            <tr>
              <th scope="col">Violazione</th>
              <th scope="col">Massimo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Requisiti essenziali (Allegato I) e obblighi degli artt. 13 e 14</th>
              <td>15 milioni di euro o 2,5% del fatturato mondiale annuo, se superiore</td>
            </tr>
            <tr>
              <th scope="row">Altri obblighi degli operatori (fra cui artt. 18–23, 28, 30–33)</th>
              <td>10 milioni di euro o 2%</td>
            </tr>
            <tr>
              <th scope="row">Informazioni inesatte, incomplete o fuorvianti a organismi notificati e autorità</th>
              <td>5 milioni di euro o 1%</td>
            </tr>
          </tbody>
        </NormaTable>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <p>
          <strong className="text-[#E6EDF3]">Un prodotto con AI dentro è un prodotto con
          elementi digitali.</strong> Se lo vendi o lo distribuisci, il CRA guarda al software e
          alle sue dipendenze come a qualsiasi altro prodotto: librerie di inferenza, componenti di
          retrieval e ogni altra dipendenza software entrano nello SBOM e nella gestione delle
          vulnerabilità.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Con l’AI Act c’è un ponte esplicito.</strong> L’art.
          12 del CRA stabilisce che un sistema di AI ad alto rischio che rispetta i requisiti
          essenziali dell’Allegato I, e lo dimostra nella dichiarazione di conformità UE, è
          considerato conforme ai requisiti di cibersicurezza dell’art. 15 dell’
          <Link href="/it/normativa/ai-act" className="text-[#00B4D8] hover:text-[#E6EDF3]">AI Act</Link>,
          fermi i requisiti di accuratezza e robustezza. Un solo lavoro sulla sicurezza, se
          progettato bene, serve a due regolamenti.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Il periodo di assistenza è una promessa da
          dieci anni.</strong> Gli aggiornamenti di sicurezza restano disponibili almeno dieci anni
          dal rilascio e la documentazione tecnica si conserva altrettanto. Un componente di terzi
          senza manutenzione garantita diventa un tuo debito.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Anche non segnalare è una decisione.</strong> Il
          termine di 24 ore parte da quando il fabbricante viene a conoscenza della vulnerabilità o
          dell’incidente. Chi lo decide, e come lo registra, va scritto prima.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <p>
          Il CRA regola il prodotto; altre norme regolano chi lo usa e chi ne risponde quando si
          rompe:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/nis2" className="text-[#00B4D8] hover:text-[#E6EDF3]">NIS2</Link>{" "}
            — i soggetti essenziali e importanti devono curare la sicurezza della catena di
            approvvigionamento, tenendo conto delle pratiche di sviluppo sicuro dei propri
            fornitori (art. 24, c. 3, D.Lgs. 138/2024): ciò che il CRA ti obbliga a documentare è
            quello che i clienti NIS devono valutare.
          </li>
          <li>
            <Link href="/it/normativa/pld" className="text-[#00B4D8] hover:text-[#E6EDF3]">Direttiva prodotti difettosi</Link>{" "}
            — il software è un prodotto anche ai fini della responsabilità per danno: la stessa
            vulnerabilità può essere un obbligo di segnalazione e un difetto.
          </li>
          <li>
            <Link href="/it/normativa/ai-act" className="text-[#00B4D8] hover:text-[#E6EDF3]">AI Act</Link>{" "}
            — per i sistemi ad alto rischio l’art. 12 del CRA collega i due regimi sulla
            cibersicurezza.
          </li>
          <li>
            <Link href="/it/normativa/cada" className="text-[#00B4D8] hover:text-[#E6EDF3]">CADA</Link>{" "}
            — la proposta su cloud e AI usa lo SBOM come artefatto di audit; è ancora una proposta.
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#E6EDF3]">«Il CRA parte nel 2027».</strong> L’applicazione
            piena è dell’11 dicembre 2027, ma l’art. 14 si applica dall’11 settembre 2026, anche ai
            prodotti già sul mercato.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Facciamo software, non dispositivi».</strong> Il
            software è un prodotto con elementi digitali, comprese le soluzioni di elaborazione dati
            da remoto legate al prodotto.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«La vulnerabilità è in una libreria open source,
            non è un problema nostro».</strong> Il fabbricante risponde dei componenti che integra:
            segnala la vulnerabilità a chi mantiene il componente e la corregge nel proprio
            prodotto.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Lo SBOM va pubblicato».</strong> Va redatto e
            tenuto nella documentazione tecnica, consegnato all’autorità su richiesta motivata;
            renderlo disponibile agli utilizzatori è una scelta del fabbricante.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Siamo una piccola impresa, siamo esenti».</strong>{" "}
            Le micro e piccole imprese sono escluse solo dalle sanzioni pecuniarie per il mancato
            rispetto del termine di preallarme; tutti gli altri obblighi restano.
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
