import Link from "next/link";
import { normaMetadata } from "@/app/normativa";
import {
  NormaPageLayout,
  NormaSection,
  NormaTable,
  type NormaFaq,
} from "@/components/sections/NormaPageLayout";

/*
 * Short card on a PROPOSAL, not a law. The full analysis of the four assurance
 * levels lives at /it/sovranita-tecnologica: link to it, do not duplicate it.
 * Facts come from COM(2026) 502 as published by the Commission on 3 June 2026
 * and from the Legislative Observatory file 2026/0138(COD), checked on
 * 29 October 2026. When the procedure moves (committee vote, Council general
 * approach, adoption), update this page and the registry entry together.
 */

const SLUG = "cada";

const LINK = "text-[#00B4D8] hover:text-[#E6EDF3]";

export const metadata = normaMetadata(SLUG, {
  title: "Cloud and AI Development Act (COM(2026) 502): la proposta UE, a che punto è e cosa prevede",
  description:
    "Il CADA è una proposta della Commissione del 3 giugno 2026, non una legge: quattro livelli di garanzia per il cloud, obblighi negli appalti pubblici, stato dell’iter al Parlamento europeo. Aggiornato al 29 ottobre 2026.",
  keywords: [
    "Cloud and AI Development Act",
    "CADA",
    "COM(2026) 502",
    "2026/0138(COD)",
    "sovranità cloud",
    "livelli di garanzia dell’Unione",
    "appalti cloud pubblica amministrazione",
  ],
});

const FAQ: NormaFaq[] = [
  {
    q: "Il Cloud and AI Development Act è già in vigore?",
    a: "No. È una proposta di regolamento presentata dalla Commissione europea il 3 giugno 2026, COM(2026) 502, procedura 2026/0138(COD). Al 29 ottobre 2026 è all’esame delle commissioni ITRE e IMCO del Parlamento europeo, senza una data di voto. Oggi non crea alcun obbligo e il testo, compresi i numeri degli articoli, può cambiare.",
  },
  {
    q: "Quando si applicherebbe, se venisse adottato?",
    a: "Nel testo proposto il regolamento entrerebbe in vigore venti giorni dopo la pubblicazione nella Gazzetta ufficiale dell’UE e si applicherebbe un anno dopo l’entrata in vigore (art. 48). Le prime valutazioni del rischio degli Stati membri sarebbero dovute entro un anno dall’entrata in vigore (art. 29). Nessuna di queste date è fissata finché la proposta non è adottata.",
  },
  {
    q: "Il CADA obbligherebbe le aziende private a usare un cloud sovrano?",
    a: "Non direttamente. Gli obblighi di acquisto riguardano le amministrazioni aggiudicatrici e gli organismi dell’Unione (art. 30). I soggetti privati dell’Allegato I della NIS2 potrebbero svolgere valutazioni analoghe su base volontaria; la Commissione potrebbe renderle obbligatorie per i settori ad alta criticità con un atto delegato (art. 31).",
  },
  {
    q: "Cosa sono i quattro livelli di garanzia dell’Unione?",
    a: "Sono livelli di sovranità che un fornitore di servizi cloud potrebbe farsi riconoscere dall’autorità nazionale competente, con criteri cumulativi nell’Allegato II: il livello 1 riguarda stabilimento, infrastruttura e dati nell’Unione ed è un’autovalutazione; i livelli 2, 3 e 4 aggiungono requisiti su personale, certificazione di cibersicurezza, supply chain del software e controllo da parte di paesi terzi, e richiedono un audit di terza parte. L’analisi completa è nella pagina sulla sovranità tecnologica di questo sito.",
  },
];

export default function CadaPage() {
  return (
    <NormaPageLayout
      slug={SLUG}
      faq={FAQ}
      fonti={[
        {
          label: "Proposta COM(2026) 502 — testo della Commissione (PDF, 3 giugno 2026)",
          url: "https://ec.europa.eu/newsroom/dae/redirection/document/129111",
          note: "Commissione europea; Titolo IV per i livelli di garanzia, art. 48 per le date",
        },
        {
          label: "Allegati I-III della proposta (PDF)",
          url: "https://ec.europa.eu/newsroom/dae/redirection/document/129112",
          note: "Allegato II: criteri dei quattro livelli",
        },
        {
          label: "Procedura 2026/0138(COD) — Osservatorio legislativo del Parlamento europeo",
          url: "https://oeil.europarl.europa.eu/oeil/en/procedure-file?reference=2026/0138(COD)",
          note: "commissioni, relatori, fasi dell’iter",
        },
      ]}
      approfondimenti={[
        {
          label: "Sovranità tecnologica: cosa propone davvero il Cloud and AI Development Act",
          href: "/it/sovranita-tecnologica",
          note: "l’analisi completa: i quattro livelli criterio per criterio, appalti, supply chain, rapporto con AI Act e PLD",
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
          note: "residenza, giurisdizione e continuità: le tre sovranità",
          linkedin: true,
        },
      ]}
      ctaTitle="Una proposta non obbliga, ma dice già cosa verrà chiesto"
      ctaSubtitle="L’assessment di esposizione individua quali componenti della tua architettura non reggerebbero i criteri del CADA e quanto costerebbe sostituirli, prima che diventino una clausola di gara."
    >
      <NormaSection id="stato" title="A che punto è la proposta">
        <p>
          Il Cloud and AI Development Act è una proposta di regolamento, non una legge: al 29
          ottobre 2026 è all’esame del Parlamento europeo e non ha una data di voto. Segue la
          procedura legislativa ordinaria, quindi servono le posizioni del Parlamento e del
          Consiglio e, di norma, un accordo fra le due istituzioni prima dell’adozione.
        </p>
        <NormaTable caption="Iter della proposta COM(2026) 502, procedura 2026/0138(COD)">
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Fase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><time dateTime="2026-06-03">3 giugno 2026</time></th>
              <td>La Commissione presenta la proposta COM(2026) 502</td>
            </tr>
            <tr>
              <th scope="row"><time dateTime="2026-09-17">17 settembre 2026</time></th>
              <td>
                Annuncio in plenaria del deferimento alle commissioni: ITRE e IMCO congiuntamente
                competenti, relatori Diego Solier (ECR) e Reinier van Lanschot (Verdi/ALE); pareri di
                JURI e LIBE
              </td>
            </tr>
            <tr>
              <th scope="row"><time dateTime="2026-09-23">23 settembre 2026</time></th>
              <td>Parere del Comitato economico e sociale europeo (CESE)</td>
            </tr>
            <tr>
              <th scope="row">—</th>
              <td>Voto in commissione, posizione del Consiglio, adozione: nessuna data fissata</td>
            </tr>
          </tbody>
        </NormaTable>
      </NormaSection>

      <NormaSection id="cosa-propone" title="Cosa propone, in breve">
        <p>
          La proposta è in gran parte politica industriale, ma una parte cambierebbe il modo in cui
          la pubblica amministrazione compra il cloud:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#E6EDF3]">Iniziative per cloud e AI</strong> — finanziamenti
            alla ricerca, centri per l’adozione dell’AI, progetti prioritari sull’AI di frontiera,
            strategie nazionali per cloud e AI.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Data center</strong> — zone di accelerazione con
            autorizzazioni più rapide e progetti strategici designati dalla Commissione.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Quadro dell’Unione per la sovranità del cloud</strong>{" "}
            (Titolo IV) — quattro livelli di garanzia con criteri cumulativi nell’Allegato II,
            riconoscimento da parte dell’autorità nazionale dello Stato di stabilimento (art. 17),
            autovalutazione per il livello 1 (art. 19), audit indipendente per i livelli 2-4 (artt.
            20-21), un registro centrale dei servizi riconosciuti (art. 22), sanzioni stabilite dagli
            Stati membri e diritto al risarcimento per i clienti (art. 24).
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Appalti</strong> — almeno il livello 1 per gli
            acquisti cloud della pubblica amministrazione; solo i livelli 2, 3 o 4 per le attività
            individuate come rilevanti per l’ordine pubblico nei settori NIS2 e in sicurezza,
            difesa, giustizia e attività di contrasto (artt. 29-30).
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Federazione cloud del settore pubblico e open
            source</strong> — una federazione europea del cloud pubblico, acquisti gestiti dalla
            Commissione, preferenza per l’open source e riuso del software negli enti pubblici.
          </li>
        </ul>
        <p>
          Cosa chiede ciascun livello, criterio per criterio, e chi dovrebbe acquistare quale
          livello è spiegato nell’analisi completa:{" "}
          <Link href="/it/sovranita-tecnologica#levels" className={LINK}>
            i quattro livelli, come sono scritti
          </Link>{" "}
          e{" "}
          <Link href="/it/sovranita-tecnologica#who-has-to" className={LINK}>
            chi dovrebbe fare cosa
          </Link>
          .
        </p>
      </NormaSection>

      <NormaSection id="a-chi-si-applica" title="A chi si applicherebbe">
        <p>
          Se adottato nel testo proposto, il CADA toccherebbe tre gruppi, in modo diverso:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#E6EDF3]">Fornitori di servizi cloud</strong> che vogliono
            vendere alla pubblica amministrazione e agli organismi dell’Unione: per farlo dovrebbero
            ottenere il riconoscimento di un livello di garanzia.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Amministrazioni aggiudicatrici</strong> e organismi
            dell’Unione: obbligati ad acquistare servizi riconosciuti e, per gli Stati membri, a
            svolgere valutazioni del rischio entro un anno dall’entrata in vigore e poi ogni due
            anni; se la valutazione richiede di cambiare servizio, la migrazione va completata entro
            12 mesi.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">Soggetti privati dell’Allegato I della NIS2</strong>{" "}
            (energia, trasporti, banche, sanità, acqua, infrastrutture digitali e altri): nessun
            obbligo diretto, ma la possibilità che la Commissione renda obbligatoria una valutazione
            d’impatto nei settori ad alta criticità.
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="chi-progetta" title="Cosa cambia per chi progetta o usa AI">
        <p>
          <strong className="text-[#E6EDF3]">Il vocabolario arriva prima dell’obbligo.</strong>{" "}
          Anche da proposta, i criteri dell’Allegato II danno un significato verificabile a
          «sovranità»: dove stanno dati, metadati e telemetria, dove sta il personale, chi controlla
          il fornitore e il software. Chi vende AI alla pubblica amministrazione può aspettarsi di
          ritrovarli nei capitolati.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">L’addestramento entra nei criteri.</strong> Dal livello
          2, i dati generati dall’uso del servizio non potrebbero essere usati per addestrare o fare
          fine-tuning di sistemi di AI gestiti da paesi terzi o da loro entità. È un impegno che chi
          compra dovrebbe poter documentare nel proprio registro dei trattamenti.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">La supply chain del software va conosciuta già
          ora.</strong> SBOM, elenco delle dipendenze e piano di migrazione se un fornitore viene
          meno sono criteri del livello 2 e servono anche al Cyber Resilience Act e alla nuova
          direttiva sulla responsabilità per prodotti difettosi.
        </p>
        <p>
          <strong className="text-[#E6EDF3]">Un’installazione self-hosted non è un servizio cloud
          acquistato.</strong> Il riconoscimento riguarda i fornitori di servizi cloud: una
          piattaforma installata sull’infrastruttura del cliente non ha un livello da ottenere, ma i
          componenti esterni che usa, per esempio un endpoint di inferenza, restano soggetti ai
          criteri del loro fornitore.
        </p>
      </NormaSection>

      <NormaSection id="si-somma" title="Dove si somma ad altre norme">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/it/normativa/nis2" className={LINK}>NIS2</Link>{" "}
            — gli Allegati I e II della direttiva definiscono i settori in cui gli acquisti pubblici
            richiederebbero i livelli 2-4 e i soggetti privati a cui potrebbe essere estesa la
            valutazione d’impatto.
          </li>
          <li>
            <Link href="/it/normativa/data-act" className={LINK}>Data Act</Link>{" "}
            — già in applicazione: cambio di fornitore cloud e tutela contro l’accesso di autorità
            di paesi terzi ai dati non personali; la proposta richiama l’art. 32 del Data Act fra i
            criteri per riconoscere i paesi terzi associati (art. 18).
          </li>
          <li>
            <Link href="/it/normativa/cra" className={LINK}>Cyber Resilience Act</Link>{" "}
            — il software come definito dal CRA rientra nel perimetro dell’Allegato II; l’hardware
            no.
          </li>
          <li>
            <Link href="/it/normativa/ai-act" className={LINK}>AI Act</Link>{" "}
            — strumenti diversi: l’AI Act classifica i sistemi per finalità, il CADA regola il
            substrato su cui girano e lo fa soprattutto attraverso gli acquisti.
          </li>
          <li>
            <Link href="/it/normativa/gdpr" className={LINK}>GDPR</Link>{" "}
            — una decisione di adeguatezza è una delle condizioni perché un paese terzo sia
            associato al livello 3.
          </li>
        </ul>
      </NormaSection>

      <NormaSection id="errori-frequenti" title="Errori frequenti">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-[#E6EDF3]">«Il CADA impone il cloud sovrano».</strong> È una
            proposta: oggi non impone niente. E anche nel testo proposto gli obblighi di acquisto
            riguardano la pubblica amministrazione, non le imprese private.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Il nostro fornitore è già certificato
            CADA».</strong> Finché il regolamento non è adottato e le autorità nazionali non sono
            designate, nessun servizio può essere riconosciuto a un livello di garanzia
            dell’Unione.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Basta un data center in Europa».</strong> Copre al
            più una parte del livello 1. Il livello 4 riguarda chi controlla il fornitore e il
            software, ed è l’unico criterio che un contratto non può soddisfare.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Esiste già un obbligo di residenza dei dati in
            UE».</strong> Né l’AI Act né la Legge 132/2025 lo prevedono; il CADA lo legherebbe agli
            acquisti pubblici solo se e quando sarà adottato.
          </li>
          <li>
            <strong className="text-[#E6EDF3]">«Gli articoli citati sono definitivi».</strong> La
            numerazione è quella della proposta della Commissione e può cambiare durante l’iter.
          </li>
        </ul>
      </NormaSection>
    </NormaPageLayout>
  );
}
