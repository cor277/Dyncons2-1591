/**
 * Registry of the regulations covered by the Italian-only "Normativa" section
 * (/it/normativa and /it/normativa/<slug>).
 *
 * One entry per page. The index, the calendar, the related-regulation cards
 * and the JSON-LD of every regulation page are all built from this file, so a
 * date or a status is changed here and nowhere else.
 *
 * Every fact in here must come from an official source checked at the date in
 * REGISTRO_AGGIORNATO. When the state of a regulation changes (publication in
 * the Official Journal, a new delegated act, a proposal adopted), update the
 * entry, its `aggiornato` field and REGISTRO_AGGIORNATO.
 */
import type { Metadata } from "next";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { BASE_URL } from "@/app/schema-org";
import { alternatesFor } from "@/lib/i18n-routes";

/** Reference date of the registry. "Next date" and "past/upcoming" are computed
 *  against this, not against the clock, so the static pages stay deterministic. */
export const REGISTRO_AGGIORNATO = "2026-10-29";

export const NORMATIVA_PATH = "/it/normativa";

export type TipoNorma =
  | "Regolamento UE"
  | "Direttiva UE"
  | "Legge"
  | "Decreto legislativo"
  | "Decisione di esecuzione UE"
  | "Proposta UE";

export type Ambito =
  | "AI"
  | "Privacy"
  | "Cybersecurity"
  | "Responsabilità di prodotto"
  | "Dati"
  | "Sanità"
  | "Finanza"
  | "Cloud";

export type StatoNorma =
  | "In vigore"
  | "In applicazione progressiva"
  | "Approvata, in attesa di Gazzetta"
  | "Proposta";

/** schema.org LegalForceStatus. */
export type LegalForce = "InForce" | "NotInForce" | "PartiallyInForce";

export interface DataChiave {
  /** ISO 8601 (YYYY-MM-DD). */
  data: string;
  etichetta: string;
  /** True when from this date an obligation applies (shown as "già in vigore"
   *  once past); false/omitted for events such as a publication or a vote. */
  obbligo?: boolean;
}

/** A second act that belongs on the same page (national transposition,
 *  amending regulation, a companion proposal). */
export interface AttoCollegato {
  riferimento: string;
  nome: string;
  url: string;
  tipo: TipoNorma;
  stato: StatoNorma;
  /** What the linked act is to the main act ("the linked act <relazione> the
   *  main act"); drives the JSON-LD property:
   *  - recepisce / modifica / proposta di modifica / attua / integra: the linked act
   *    transposes, amends, would amend, implements or complements the main act;
   *  - modificato: the main act amends the linked one (e.g. Digital Omnibus → AI Act);
   *  - delega: the linked act is the enabling law the main act implements. */
  relazione:
    | "recepisce"
    | "modifica"
    | "proposta di modifica"
    | "attua"
    | "integra"
    | "modificato"
    | "delega";
  /** ISO date of the act, when known. */
  data?: string;
}

export interface Norma {
  slug: string;
  /** Common name, as people say it: "AI Act", "GDPR", "Legge 132/2025". */
  titoloBreve: string;
  nomeUfficiale: string;
  /** Short citation: "Reg. (UE) 2024/1689". */
  riferimento: string;
  tipo: TipoNorma;
  ambito: Ambito;
  stato: StatoNorma;
  /** One sentence that qualifies the status when the label alone would mislead. */
  notaStato?: string;
  /** Overrides the legal force derived from `stato` (see legalForceOf). */
  legalForce?: LegalForce;
  urlUfficiale: string;
  /** ISO date of the act (adoption, or presentation for a proposal). */
  dataAtto: string;
  dateChiave: DataChiave[];
  aChiSiApplica: string;
  /** 2-3 self-contained sentences that make sense quoted on their own. */
  sintesi: string;
  attiCollegati?: AttoCollegato[];
  /** ISO date of the last check of this entry. */
  aggiornato: string;
  correlate: string[];
}

export const NORME: Norma[] = [
  {
    slug: "ai-act",
    titoloBreve: "AI Act",
    nomeUfficiale:
      "Regolamento (UE) 2024/1689 del Parlamento europeo e del Consiglio, che stabilisce regole armonizzate sull’intelligenza artificiale (regolamento sull’intelligenza artificiale)",
    riferimento: "Reg. (UE) 2024/1689",
    tipo: "Regolamento UE",
    ambito: "AI",
    stato: "In applicazione progressiva",
    notaStato:
      "Divieti, alfabetizzazione, modelli per finalità generali e trasparenza già si applicano; gli obblighi per l’alto rischio partono il 2 dicembre 2027 (Allegato III) e il 2 agosto 2028 (Allegato I), come fissato dal Reg. (UE) 2026/1744.",
    urlUfficiale: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
    dataAtto: "2024-06-13",
    dateChiave: [
      { data: "2024-08-01", etichetta: "Entrata in vigore del regolamento" },
      {
        data: "2025-02-02",
        etichetta: "Si applicano i divieti (art. 5) e l’obbligo di alfabetizzazione (art. 4)",
        obbligo: true,
      },
      {
        data: "2025-08-02",
        etichetta:
          "Si applicano gli obblighi per i modelli di AI per finalità generali, la governance e le sanzioni (tranne quelle per i fornitori di questi modelli, art. 101)",
        obbligo: true,
      },
      {
        data: "2026-07-27",
        etichetta: "Entra in vigore il Digital Omnibus sull’AI (Reg. (UE) 2026/1744), che sposta le date dell’alto rischio",
      },
      {
        data: "2026-08-02",
        etichetta: "Si applicano gli obblighi di trasparenza dell’art. 50",
        obbligo: true,
      },
      {
        data: "2026-10-14",
        etichetta:
          "Pubblicata la prima norma armonizzata, EN 18286:2026 sul sistema di gestione della qualità (Dec. di esecuzione (UE) 2026/2274)",
      },
      {
        data: "2026-12-02",
        etichetta:
          "Nuovi divieti dell’art. 5, par. 1, lettere b bis) e b ter); marcatura dei contenuti (art. 50(2)) per i sistemi già sul mercato prima del 2 agosto 2026",
        obbligo: true,
      },
      {
        data: "2027-08-02",
        etichetta: "Termine per lo spazio di sperimentazione normativa (sandbox) nazionale",
        obbligo: true,
      },
      {
        data: "2027-12-02",
        etichetta: "Si applicano gli obblighi per i sistemi ad alto rischio dell’Allegato III (art. 6(2))",
        obbligo: true,
      },
      {
        data: "2028-08-02",
        etichetta:
          "Si applicano gli obblighi per i sistemi ad alto rischio dell’Allegato I (art. 6(1)), per esempio nei dispositivi medici",
        obbligo: true,
      },
    ],
    aChiSiApplica:
      "Fornitori, deployer, importatori e distributori di sistemi di AI immessi sul mercato o usati nell’Unione, anche se stabiliti fuori dall’UE; fornitori di modelli di AI per finalità generali.",
    sintesi:
      "L’AI Act (Regolamento (UE) 2024/1689) regola i sistemi di intelligenza artificiale in base al rischio dell’uso previsto: vieta alcune pratiche, impone requisiti stringenti ai sistemi ad alto rischio e obblighi di trasparenza a chi genera contenuti o interagisce con le persone. In Italia si applica direttamente, insieme alla Legge 132/2025 e ai decreti legislativi 160 e 179 del 2026. Dopo il Digital Omnibus (Reg. (UE) 2026/1744) gli obblighi per l’alto rischio partono il 2 dicembre 2027 per l’Allegato III e il 2 agosto 2028 per l’Allegato I.",
    attiCollegati: [
      {
        riferimento: "Reg. (UE) 2026/1744",
        nome: "Digital Omnibus sull’AI — regolamento che modifica il Reg. (UE) 2024/1689",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202601744",
        tipo: "Regolamento UE",
        stato: "In vigore",
        relazione: "modifica",
        data: "2026-07-08",
      },
      {
        riferimento: "Dec. di esecuzione (UE) 2026/2274",
        nome: "Riferimento alla norma armonizzata EN 18286:2026 (sistema di gestione della qualità, art. 17)",
        url: "https://eur-lex.europa.eu/eli/dec_impl/2026/2274/oj",
        tipo: "Decisione di esecuzione UE",
        stato: "In vigore",
        relazione: "attua",
        data: "2026-10-12",
      },
    ],
    aggiornato: "2026-10-29",
    correlate: ["legge-132-2025", "dlgs-160-2026", "dlgs-179-2026", "gdpr", "pld", "digital-omnibus"],
  },
  {
    slug: "legge-132-2025",
    titoloBreve: "Legge 132/2025",
    nomeUfficiale:
      "Legge 23 settembre 2025, n. 132 — Disposizioni e deleghe al Governo in materia di intelligenza artificiale",
    riferimento: "L. 23 settembre 2025, n. 132",
    tipo: "Legge",
    ambito: "AI",
    stato: "In vigore",
    notaStato:
      "Le deleghe dell’art. 24 sono state esercitate con il D.Lgs. 160/2026 e il D.Lgs. 179/2026; il decreto del Ministro della salute previsto dall’art. 9 non risulta ancora adottato.",
    urlUfficiale: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-09-23;132",
    dataAtto: "2025-09-23",
    dateChiave: [
      { data: "2025-09-25", etichetta: "Pubblicazione in Gazzetta Ufficiale (Serie generale n. 223)" },
      { data: "2025-10-10", etichetta: "Entrata in vigore della legge", obbligo: true },
    ],
    aChiSiApplica:
      "Chi sviluppa, fornisce o usa sistemi di AI in Italia, con regole specifiche per sanità e ricerca scientifica, pubblica amministrazione, professioni; le norme penali valgono per chiunque.",
    sintesi:
      "La Legge 23 settembre 2025, n. 132 è la legge italiana sull’intelligenza artificiale, in vigore dal 10 ottobre 2025. Non recepisce l’AI Act, che si applica direttamente, e non aggiunge obblighi rispetto al regolamento: lo integra, individuando AgID e ACN come autorità nazionali, dettando principi per settori come la sanità, introducendo reati e aggravanti e delegando il Governo, che ha attuato le deleghe dell’art. 24 con i D.Lgs. 160/2026 e 179/2026. Non impone alcun obbligo di residenza dei dati in Italia o nell’UE.",
    aggiornato: "2026-10-29",
    correlate: ["ai-act", "dlgs-160-2026", "dlgs-179-2026", "gdpr"],
  },
  {
    slug: "dlgs-160-2026",
    titoloBreve: "D.Lgs. 160/2026",
    nomeUfficiale:
      "Decreto legislativo 9 settembre 2026, n. 160 — Adeguamento della normativa nazionale alle disposizioni del regolamento (UE) 2024/1689 in materia di utilizzo dei sistemi di intelligenza artificiale per l’attività di polizia e di responsabilità civile e penale",
    riferimento: "D.Lgs. 9 settembre 2026, n. 160",
    tipo: "Decreto legislativo",
    ambito: "AI",
    stato: "In vigore",
    urlUfficiale: "https://www.normattiva.it/eli/id/2026/09/15/26G00179/ORIGINAL",
    dataAtto: "2026-09-09",
    dateChiave: [
      { data: "2026-09-15", etichetta: "Pubblicazione in Gazzetta Ufficiale (n. 214)" },
      {
        data: "2026-09-30",
        etichetta: "Entrata in vigore: art. 437-bis c.p., art. 25-vicies D.Lgs. 231/2001, nuove regole sulla responsabilità civile",
        obbligo: true,
      },
    ],
    aChiSiApplica:
      "Tutta la filiera dei sistemi di AI ad alto rischio (chi progetta, addestra, produce, immette sul mercato o li usa professionalmente), gli enti ai sensi del D.Lgs. 231/2001, chi agisce o si difende in giudizio per danni causati da sistemi di AI.",
    sintesi:
      "Il D.Lgs. 9 settembre 2026, n. 160, in vigore dal 30 settembre 2026, attua la delega della Legge 132/2025 sulla responsabilità civile e penale legata all’intelligenza artificiale. Introduce il reato di omissione delle misure di sicurezza o della sorveglianza umana sui sistemi ad alto rischio (art. 437-bis c.p.), lo inserisce fra i reati presupposto del D.Lgs. 231/2001 e rende più semplice la prova per chi subisce un danno: esibizione dei log, nesso causale presunto in caso di violazione dell’AI Act, conformità anche certificata che non esclude di per sé la responsabilità.",
    attiCollegati: [
      {
        riferimento: "L. 23 settembre 2025, n. 132",
        nome: "Legge sull’intelligenza artificiale (delega, art. 24)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-09-23;132",
        tipo: "Legge",
        stato: "In vigore",
        relazione: "delega",
        data: "2025-09-23",
      },
    ],
    aggiornato: "2026-10-29",
    correlate: ["ai-act", "legge-132-2025", "dlgs-179-2026", "pld"],
  },
  {
    slug: "dlgs-179-2026",
    titoloBreve: "D.Lgs. 179/2026",
    nomeUfficiale:
      "Decreto legislativo 7 ottobre 2026, n. 179 — Adeguamento della normativa nazionale alle disposizioni del regolamento (UE) 2024/1689 in materia di poteri delle Autorità nazionali e di utilizzo dell’intelligenza artificiale nella formazione",
    riferimento: "D.Lgs. 7 ottobre 2026, n. 179",
    tipo: "Decreto legislativo",
    ambito: "AI",
    stato: "In vigore",
    urlUfficiale: "https://www.normattiva.it/eli/id/2026/10/08/26G00200/ORIGINAL",
    dataAtto: "2026-10-07",
    dateChiave: [
      { data: "2026-10-08", etichetta: "Pubblicazione in Gazzetta Ufficiale (n. 234)" },
      {
        data: "2026-10-23",
        etichetta: "Entrata in vigore: autorità nazionali, sanzioni, regole su lavoro e IA",
        obbligo: true,
      },
      {
        data: "2027-04-23",
        etichetta:
          "Data calcolata, non indicata nel decreto: termine di «sei mesi dalla data di entrata in vigore» (23 ottobre 2026) per l’adeguamento dei regolamenti di formazione degli ordini professionali (art. 47), l’accordo Stato-Regioni sull’ECM (art. 47 c.6), la quota IA dell’ECM e i programmi AGENAS (art. 51)",
        obbligo: true,
      },
      {
        data: "2027-10-23",
        etichetta:
          "Data calcolata, non indicata nel decreto: termine di dodici mesi dall’entrata in vigore per integrare i parametri dell’equo compenso modulato sulla classe di rischio dell’AI (art. 49)",
        obbligo: true,
      },
    ],
    aChiSiApplica:
      "Fornitori e deployer di sistemi di AI in Italia, datori di lavoro che usano l’AI nella gestione del personale, istituti finanziari, ordini professionali e professionisti sanitari.",
    sintesi:
      "Il D.Lgs. 7 ottobre 2026, n. 179, in vigore dal 23 ottobre 2026, adegua l’ordinamento italiano all’AI Act: affida la vigilanza del mercato all’ACN, la notifica all’AgID e l’alto rischio negli istituti finanziari a Banca d’Italia, CONSOB e IVASS, e fissa sanzioni e reclami. Vieta che una decisione finale sul rapporto di lavoro si basi solo su un trattamento automatizzato, pena la nullità del licenziamento, e porta i sistemi di AI nel documento di valutazione dei rischi e nella formazione professionale.",
    attiCollegati: [
      {
        riferimento: "L. 23 settembre 2025, n. 132",
        nome: "Legge sull’intelligenza artificiale (delega, art. 24)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-09-23;132",
        tipo: "Legge",
        stato: "In vigore",
        relazione: "delega",
        data: "2025-09-23",
      },
    ],
    aggiornato: "2026-10-29",
    correlate: ["ai-act", "legge-132-2025", "dlgs-160-2026", "gdpr", "dora"],
  },
  {
    slug: "gdpr",
    titoloBreve: "GDPR e Codice privacy",
    nomeUfficiale:
      "Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio, relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali (regolamento generale sulla protezione dei dati)",
    riferimento: "Reg. (UE) 2016/679",
    tipo: "Regolamento UE",
    ambito: "Privacy",
    stato: "In vigore",
    urlUfficiale: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
    dataAtto: "2016-04-27",
    dateChiave: [
      { data: "2018-05-25", etichetta: "Il GDPR si applica in tutti gli Stati membri", obbligo: true },
      {
        data: "2026-07-08",
        etichetta:
          "L’EDPB adotta le linee guida 02/2026 sull’anonimizzazione e 03/2026 sul web scraping per l’AI generativa",
      },
      {
        data: "2026-09-23",
        etichetta:
          "Il Garante sanziona per 7 milioni di euro dati sanitari ritenuti non anonimi (provv. n. 710)",
      },
      {
        data: "2026-10-29",
        etichetta: "Termine fissato dal Garante per adeguare l’uso dei pixel di tracciamento nelle email",
        obbligo: true,
      },
      {
        data: "2026-10-30",
        etichetta: "Chiude la consultazione pubblica sulle linee guida EDPB 02/2026 e 03/2026",
      },
    ],
    aChiSiApplica:
      "Chiunque tratti dati personali di persone che si trovano nell’UE, come titolare o responsabile del trattamento, compresi i dati usati per addestrare, alimentare o interrogare sistemi di AI.",
    sintesi:
      "Il GDPR (Regolamento (UE) 2016/679) disciplina ogni trattamento di dati personali, compresi quelli usati per addestrare, alimentare o interrogare un sistema di intelligenza artificiale; in Italia si applica insieme al Codice privacy (D.Lgs. 196/2003, modificato dal D.Lgs. 101/2018). Il Garante per la protezione dei dati personali ne controlla l’applicazione e nel 2026 ha sanzionato per 7 milioni di euro un uso di dati sanitari ritenuti non anonimi, perché un codice persistente consentiva di seguire i pazienti nel tempo.",
    attiCollegati: [
      {
        riferimento: "D.Lgs. 30 giugno 2003, n. 196",
        nome: "Codice in materia di protezione dei dati personali, come modificato dal D.Lgs. 101/2018",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-06-30;196",
        tipo: "Decreto legislativo",
        stato: "In vigore",
        relazione: "integra",
        data: "2003-06-30",
      },
      {
        riferimento: "COM(2025) 837",
        nome: "Proposta di Digital Omnibus su dati, GDPR, ePrivacy e segnalazioni cyber",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52025PC0837",
        tipo: "Proposta UE",
        stato: "Proposta",
        relazione: "proposta di modifica",
        data: "2025-11-19",
      },
    ],
    aggiornato: "2026-10-29",
    correlate: ["ai-act", "digital-omnibus", "ehds", "data-act", "legge-132-2025"],
  },
  {
    slug: "pld",
    titoloBreve: "Direttiva prodotti difettosi (PLD)",
    nomeUfficiale:
      "Direttiva (UE) 2024/2853 del Parlamento europeo e del Consiglio, sulla responsabilità per danno da prodotti difettosi",
    riferimento: "Dir. (UE) 2024/2853",
    tipo: "Direttiva UE",
    ambito: "Responsabilità di prodotto",
    stato: "Approvata, in attesa di Gazzetta",
    notaStato:
      "La direttiva è in vigore a livello UE e si applica ai prodotti immessi sul mercato dopo l’8 dicembre 2026; il decreto italiano di recepimento è stato approvato in via definitiva dal Consiglio dei ministri il 28 ottobre 2026 e al 29 ottobre 2026 non è ancora pubblicato in Gazzetta Ufficiale.",
    legalForce: "InForce",
    urlUfficiale: "https://eur-lex.europa.eu/eli/dir/2024/2853/oj",
    dataAtto: "2024-10-23",
    dateChiave: [
      {
        data: "2026-05-07",
        etichetta: "Rettifica: la direttiva si applica ai prodotti immessi sul mercato dopo l’8 dicembre 2026",
      },
      { data: "2026-08-04", etichetta: "Esame preliminare dello schema di decreto italiano in Consiglio dei ministri" },
      {
        data: "2026-10-28",
        etichetta: "Il Consiglio dei ministri approva in via definitiva il decreto di recepimento (comunicato n. 195)",
      },
      {
        data: "2026-12-09",
        etichetta: "Termine di recepimento (art. 22); nuove regole per i prodotti immessi sul mercato dopo l’8 dicembre 2026",
        obbligo: true,
      },
    ],
    aChiSiApplica:
      "Fabbricanti di prodotti, software e sistemi di AI compresi, e, per i fabbricanti extra-UE, importatori, mandatari e in mancanza fornitori di servizi di logistica; chi modifica sostanzialmente un prodotto; distributori e piattaforme online a determinate condizioni.",
    sintesi:
      "La Direttiva (UE) 2024/2853 aggiorna la responsabilità per danno da prodotti difettosi e la estende al software, sistemi di AI compresi; facilita la prova per il danneggiato con la divulgazione delle prove (art. 9) e con presunzioni di difettosità e di nesso causale (art. 10). Si applica ai prodotti immessi sul mercato dopo l’8 dicembre 2026, e la responsabilità verso il danneggiato non può essere esclusa né limitata per contratto. In Italia il decreto di recepimento, che riscrive la disciplina del Codice del consumo, è stato approvato in via definitiva il 28 ottobre 2026 ed è in attesa di pubblicazione.",
    attiCollegati: [
      {
        riferimento: "Decreto legislativo di recepimento (numero non ancora assegnato)",
        nome: "Recepimento della Direttiva (UE) 2024/2853 — approvato in esame definitivo dal Consiglio dei ministri il 28 ottobre 2026",
        url: "https://www.governo.it/it/articolo/comunicato-stampa-del-consiglio-dei-ministri-n-195/32973",
        tipo: "Decreto legislativo",
        stato: "Approvata, in attesa di Gazzetta",
        relazione: "recepisce",
        data: "2026-10-28",
      },
    ],
    aggiornato: "2026-10-29",
    correlate: ["ai-act", "cra", "dlgs-160-2026", "gdpr"],
  },
  {
    slug: "cra",
    titoloBreve: "Cyber Resilience Act",
    nomeUfficiale:
      "Regolamento (UE) 2024/2847 del Parlamento europeo e del Consiglio, relativo a requisiti orizzontali di cibersicurezza per i prodotti con elementi digitali (regolamento sulla ciberresilienza)",
    riferimento: "Reg. (UE) 2024/2847",
    tipo: "Regolamento UE",
    ambito: "Cybersecurity",
    stato: "In applicazione progressiva",
    notaStato:
      "Gli obblighi di segnalazione dell’art. 14 si applicano dall’11 settembre 2026; il resto del regolamento dall’11 dicembre 2027. Lo schema di decreto italiano di adeguamento è in esame preliminare.",
    urlUfficiale: "https://eur-lex.europa.eu/eli/reg/2024/2847/oj",
    dataAtto: "2024-10-23",
    dateChiave: [
      {
        data: "2026-09-11",
        etichetta:
          "Si applicano gli obblighi di segnalazione dei fabbricanti (art. 14): preallerta 24 ore, notifica 72 ore, tramite la piattaforma unica ENISA",
        obbligo: true,
      },
      {
        data: "2026-10-02",
        etichetta: "Esame preliminare in Consiglio dei ministri dello schema di decreto italiano di adeguamento (comunicato n. 191)",
      },
      { data: "2027-12-11", etichetta: "Applicazione piena del regolamento", obbligo: true },
      {
        data: "2026-06-11",
        etichetta: "Si applica il capo IV (artt. 35-51): notifica degli organismi di valutazione della conformità (art. 71)",
      },
    ],
    aChiSiApplica:
      "Fabbricanti, importatori e distributori di prodotti con elementi digitali, software compreso, messi a disposizione sul mercato UE.",
    sintesi:
      "Il Cyber Resilience Act (Regolamento (UE) 2024/2847) impone requisiti di cibersicurezza ai prodotti con elementi digitali, software compreso, per tutto il loro ciclo di vita. Dall’11 settembre 2026 i fabbricanti devono segnalare vulnerabilità attivamente sfruttate e incidenti gravi tramite la piattaforma unica di ENISA, con una preallerta entro 24 ore e una notifica entro 72; l’applicazione piena arriva l’11 dicembre 2027.",
    aggiornato: "2026-10-29",
    correlate: ["nis2", "pld", "ai-act", "cada"],
  },
  {
    slug: "nis2",
    titoloBreve: "NIS2",
    nomeUfficiale:
      "Direttiva (UE) 2022/2555 del Parlamento europeo e del Consiglio, relativa a misure per un livello comune elevato di cibersicurezza nell’Unione (direttiva NIS 2)",
    riferimento: "Dir. (UE) 2022/2555",
    tipo: "Direttiva UE",
    ambito: "Cybersecurity",
    stato: "In vigore",
    notaStato: "In Italia è recepita dal D.Lgs. 4 settembre 2024, n. 138; le modalità attuative sono fissate dalle determinazioni dell’ACN.",
    urlUfficiale: "https://eur-lex.europa.eu/eli/dir/2022/2555/oj",
    dataAtto: "2022-12-14",
    dateChiave: [
      { data: "2024-10-16", etichetta: "Entra in vigore il D.Lgs. 138/2024 di recepimento", obbligo: true },
      {
        data: "2026-10-31",
        etichetta:
          "Termine per adottare le misure di sicurezza di base per i soggetti della prima elencazione (18 mesi dalla comunicazione di inserimento, Determinazione ACN 379907/2025)",
        obbligo: true,
      },
      {
        data: "2026-10-25",
        etichetta: "Si applica la Determinazione ACN 314287/2026 (piattaforma, aggiornamenti entro 14 giorni, fornitori rilevanti NIS), che sostituisce la 127437/2026",
      },
    ],
    aChiSiApplica:
      "Soggetti essenziali e importanti dei settori elencati negli Allegati I e II della direttiva, oltre una certa dimensione o per designazione, e indirettamente i loro fornitori.",
    sintesi:
      "La Direttiva NIS2 (UE) 2022/2555, recepita in Italia con il D.Lgs. 4 settembre 2024, n. 138, impone ai soggetti essenziali e importanti dei settori critici misure di gestione del rischio di cibersicurezza e la notifica degli incidenti, sotto la supervisione dell’Agenzia per la cybersicurezza nazionale (ACN). Le misure di sicurezza di base stabilite dall’ACN vanno adottate entro il 31 ottobre 2026.",
    attiCollegati: [
      {
        riferimento: "D.Lgs. 4 settembre 2024, n. 138",
        nome: "Recepimento della Direttiva (UE) 2022/2555",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-09-04;138",
        tipo: "Decreto legislativo",
        stato: "In vigore",
        relazione: "recepisce",
        data: "2024-09-04",
      },
    ],
    aggiornato: "2026-10-29",
    correlate: ["cra", "dora", "gdpr", "cada"],
  },
  {
    slug: "dora",
    titoloBreve: "DORA",
    nomeUfficiale:
      "Regolamento (UE) 2022/2554 del Parlamento europeo e del Consiglio, relativo alla resilienza operativa digitale per il settore finanziario",
    riferimento: "Reg. (UE) 2022/2554",
    tipo: "Regolamento UE",
    ambito: "Finanza",
    stato: "In vigore",
    urlUfficiale: "https://eur-lex.europa.eu/eli/reg/2022/2554/oj",
    dataAtto: "2022-12-14",
    dateChiave: [
      { data: "2025-01-17", etichetta: "Il regolamento si applica", obbligo: true },
      {
        data: "2026-07-31",
        etichetta:
          "Dichiarazione congiunta di EBA, EIOPA ed ESMA sui rischi ICT dei modelli di AI di frontiera",
      },
    ],
    aChiSiApplica:
      "Entità finanziarie (banche, assicurazioni, imprese di investimento, istituti di pagamento e altre) e, attraverso i contratti, i fornitori terzi di servizi ICT.",
    sintesi:
      "Il Regolamento DORA (UE) 2022/2554, applicabile dal 17 gennaio 2025, impone alle entità finanziarie un quadro di gestione del rischio ICT, la segnalazione degli incidenti gravi, i test di resilienza e il controllo dei fornitori terzi di servizi ICT. Il 31 luglio 2026 le autorità europee di vigilanza (EBA, EIOPA ed ESMA) hanno chiesto governance rafforzata e vigilanza coerente anche sui rischi ICT dei modelli di AI di frontiera.",
    attiCollegati: [
      {
        riferimento: "D.Lgs. 10 marzo 2025, n. 23",
        nome: "Adeguamento della normativa nazionale al Regolamento (UE) 2022/2554",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2025-03-10;23",
        tipo: "Decreto legislativo",
        stato: "In vigore",
        relazione: "integra",
        data: "2025-03-10",
      },
    ],
    aggiornato: "2026-10-29",
    correlate: ["nis2", "ai-act", "dlgs-179-2026", "gdpr"],
  },
  {
    slug: "data-act",
    titoloBreve: "Data Act",
    nomeUfficiale:
      "Regolamento (UE) 2023/2854 del Parlamento europeo e del Consiglio, riguardante norme armonizzate sull’accesso equo ai dati e sul loro utilizzo (regolamento sui dati)",
    riferimento: "Reg. (UE) 2023/2854",
    tipo: "Regolamento UE",
    ambito: "Dati",
    stato: "In vigore",
    urlUfficiale: "https://eur-lex.europa.eu/eli/reg/2023/2854/oj",
    dataAtto: "2023-12-13",
    dateChiave: [
      { data: "2025-09-12", etichetta: "Il regolamento si applica", obbligo: true },
      {
        data: "2026-09-12",
        etichetta:
          "Accesso ai dati fin dalla progettazione (art. 3(1)) per i prodotti connessi immessi sul mercato dopo questa data",
        obbligo: true,
      },
      {
        data: "2027-01-12",
        etichetta: "Nessuna tariffa di passaggio fra fornitori di servizi di trattamento dei dati (cambio di fornitore cloud, art. 29)",
        obbligo: true,
      },
      {
        data: "2027-09-12",
        etichetta: "Le regole sulle clausole contrattuali abusive (capo IV) si estendono ai contratti conclusi entro il 12 settembre 2025, se a tempo indeterminato o con scadenza ad almeno dieci anni dall’11 gennaio 2024",
        obbligo: true,
      },
    ],
    aChiSiApplica:
      "Fabbricanti di prodotti connessi e fornitori di servizi correlati, titolari dei dati, utenti, destinatari dei dati e fornitori di servizi di trattamento dei dati.",
    sintesi:
      "Il Data Act (Regolamento (UE) 2023/2854) stabilisce chi può accedere ai dati generati dai prodotti connessi e dai servizi correlati, e a quali condizioni. È applicabile dal 12 settembre 2025; i prodotti connessi immessi sul mercato dopo il 12 settembre 2026 devono essere progettati in modo che i dati siano accessibili all’utente (art. 3, paragrafo 1).",
    aggiornato: "2026-10-29",
    correlate: ["gdpr", "digital-omnibus", "cra", "ehds"],
  },
  {
    slug: "ehds",
    titoloBreve: "Spazio europeo dei dati sanitari (EHDS)",
    nomeUfficiale:
      "Regolamento (UE) 2025/327 del Parlamento europeo e del Consiglio, sullo spazio europeo dei dati sanitari",
    riferimento: "Reg. (UE) 2025/327",
    tipo: "Regolamento UE",
    ambito: "Sanità",
    stato: "In applicazione progressiva",
    notaStato:
      "In vigore dal 25 marzo 2025, ma nessuna disposizione si applica prima del 26 marzo 2027; l’uso secondario (capo IV) si applica dal 26 marzo 2029.",
    urlUfficiale: "https://eur-lex.europa.eu/eli/reg/2025/327/oj",
    dataAtto: "2025-02-11",
    dateChiave: [
      { data: "2025-03-25", etichetta: "Entrata in vigore del regolamento" },
      {
        data: "2027-03-26",
        etichetta:
          "Il regolamento si applica in via generale (art. 105); si applicano i regolamenti di esecuzione (UE) 2026/2083 (MyHealth@EU) e 2026/2099",
        obbligo: true,
      },
      {
        data: "2029-03-26",
        etichetta:
          "Si applicano l’uso secondario (capo IV) e le regole sulle prime categorie prioritarie di dati (art. 14(1), lettere a-c); si applica il regolamento di esecuzione (UE) 2026/2098 sui metadati per l’uso secondario",
        obbligo: true,
      },
      {
        data: "2031-03-26",
        etichetta: "Scambio transfrontaliero anche per immagini diagnostiche, risultati di esami e lettere di dimissione (art. 105)",
        obbligo: true,
      },
    ],
    aChiSiApplica:
      "Fornitori di sistemi di cartella clinica elettronica, prestatori di assistenza sanitaria, titolari di dati sanitari, organismi di accesso ai dati sanitari e chi chiede dati per l’uso secondario.",
    sintesi:
      "Lo Spazio europeo dei dati sanitari (EHDS, Regolamento (UE) 2025/327) regola l’uso primario dei dati sanitari elettronici, cioè l’accesso dei pazienti e lo scambio fra chi li cura, e il loro uso secondario per ricerca, innovazione e politiche pubbliche. Si applica per fasi: in via generale dal 26 marzo 2027, insieme ai primi regolamenti di esecuzione fra cui quello su MyHealth@EU; l’uso secondario e il regolamento di esecuzione sui metadati dal 26 marzo 2029.",
    aggiornato: "2026-10-29",
    correlate: ["gdpr", "data-act", "ai-act", "legge-132-2025"],
  },
  {
    slug: "digital-omnibus",
    titoloBreve: "Digital Omnibus",
    nomeUfficiale:
      "Regolamento (UE) 2026/1744 che modifica il Regolamento (UE) 2024/1689 (Digital Omnibus sull’AI) e proposta COM(2025) 837 di Digital Omnibus su dati, GDPR, ePrivacy e segnalazioni cyber",
    riferimento: "Reg. (UE) 2026/1744 · COM(2025) 837",
    tipo: "Regolamento UE",
    ambito: "AI",
    stato: "In vigore",
    notaStato:
      "È legge solo la parte sull’AI Act (Reg. (UE) 2026/1744, in vigore dal 27 luglio 2026). La parte su GDPR, ePrivacy, Data Act e segnalazioni cyber (COM(2025) 837) è una proposta: c’è l’orientamento generale del Consiglio, mancano la posizione del Parlamento europeo e i triloghi.",
    urlUfficiale: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202601744",
    dataAtto: "2026-07-08",
    dateChiave: [
      { data: "2026-07-24", etichetta: "Pubblicazione del Reg. (UE) 2026/1744 nella Gazzetta ufficiale dell’UE" },
      {
        data: "2026-07-27",
        etichetta: "Entra in vigore il Reg. (UE) 2026/1744: nuove date per l’alto rischio dell’AI Act",
        obbligo: true,
      },
      {
        data: "2026-10-21",
        etichetta: "Orientamento generale del Consiglio sulla proposta COM(2025) 837 (dati, GDPR, ePrivacy)",
      },
      {
        data: "2026-12-02",
        etichetta: "Nuovi divieti dell’art. 5, par. 1, lett. b bis) e b ter) e marcatura (art. 50, par. 2) per i sistemi già sul mercato",
        obbligo: true,
      },
      {
        data: "2027-08-02",
        etichetta: "Termine per gli spazi di sperimentazione normativa nazionali (art. 57)",
        obbligo: true,
      },
      {
        data: "2027-12-02",
        etichetta: "Obblighi per i sistemi ad alto rischio dell’Allegato III",
        obbligo: true,
      },
      {
        data: "2028-08-02",
        etichetta: "Obblighi per i sistemi ad alto rischio dell’Allegato I (es. dispositivi medici)",
        obbligo: true,
      },
    ],
    aChiSiApplica:
      "Per la parte in vigore, gli stessi destinatari dell’AI Act. Per la proposta, titolari del trattamento, chi usa cookie e tecnologie simili, soggetti tenuti a segnalazioni di incidenti: nessun obbligo finché non è adottata.",
    sintesi:
      "Con «Digital Omnibus» si indicano due interventi distinti. Quello sull’AI Act è legge: il Regolamento (UE) 2026/1744, in vigore dal 27 luglio 2026, sposta gli obblighi per l’alto rischio al 2 dicembre 2027 e al 2 agosto 2028 e attenua l’obbligo di alfabetizzazione. Quello su GDPR, ePrivacy, Data Act e segnalazioni cyber (COM(2025) 837) è ancora una proposta: il Consiglio ha adottato l’orientamento generale il 21 ottobre 2026, mancano la posizione del Parlamento europeo e i triloghi.",
    attiCollegati: [
      {
        riferimento: "Reg. (UE) 2024/1689",
        nome: "AI Act, modificato dal Reg. (UE) 2026/1744",
        url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
        tipo: "Regolamento UE",
        stato: "In applicazione progressiva",
        relazione: "modificato",
        data: "2024-06-13",
      },
      {
        riferimento: "COM(2025) 837",
        nome: "Proposta di Digital Omnibus su dati, GDPR, ePrivacy, Data Act e segnalazioni cyber",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52025PC0837",
        tipo: "Proposta UE",
        stato: "Proposta",
        relazione: "proposta di modifica",
        data: "2025-11-19",
      },
    ],
    aggiornato: "2026-10-29",
    correlate: ["ai-act", "gdpr", "data-act", "nis2"],
  },
  {
    slug: "cada",
    titoloBreve: "Cloud and AI Development Act (CADA)",
    nomeUfficiale: "Proposta di regolamento del Parlamento europeo e del Consiglio — Cloud and AI Development Act",
    riferimento: "COM(2026) 502",
    tipo: "Proposta UE",
    ambito: "Cloud",
    stato: "Proposta",
    notaStato:
      "Procedura legislativa ordinaria 2026/0138(COD) in corso: all’esame delle commissioni ITRE e IMCO del Parlamento europeo, nessuna data di voto fissata. La numerazione degli articoli può cambiare.",
    urlUfficiale: "https://digital-strategy.ec.europa.eu/en/library/proposal-cloud-and-ai-development-act-cada",
    dataAtto: "2026-06-03",
    dateChiave: [
      { data: "2026-06-03", etichetta: "La Commissione presenta la proposta COM(2026) 502" },
      { data: "2026-09-17", etichetta: "Annuncio in plenaria del deferimento alle commissioni ITRE e IMCO del Parlamento europeo" },
      { data: "2026-09-23", etichetta: "Parere del Comitato economico e sociale europeo (CESE)" },
    ],
    aChiSiApplica:
      "Come proposto: fornitori di servizi cloud e di AI che vogliono vedersi riconosciuto un livello di garanzia dell’Unione, pubbliche amministrazioni che li acquistano e, in prospettiva, soggetti privati dei settori critici NIS2.",
    sintesi:
      "Il Cloud and AI Development Act (CADA) è una proposta della Commissione europea del 3 giugno 2026, COM(2026) 502, e non è ancora legge. Introduce un quadro di sovranità cloud con quattro livelli di garanzia dell’Unione, dal primo basato su stabilimento e dati nell’UE al quarto che esclude il controllo di paesi terzi, e li collega agli appalti pubblici. È all’esame delle commissioni ITRE e IMCO del Parlamento europeo, senza una data di voto.",
    aggiornato: "2026-10-29",
    correlate: ["nis2", "cra", "digital-omnibus", "ai-act"],
  },
];

const BY_SLUG: Record<string, Norma> = Object.fromEntries(NORME.map((n) => [n.slug, n]));

/** The registry entry for a slug; throws at build time on a typo. */
export function getNorma(slug: string): Norma {
  const n = BY_SLUG[slug];
  if (!n) throw new Error(`Unknown norma slug: ${slug}`);
  return n;
}

export function normaPath(slug: string): string {
  return `${NORMATIVA_PATH}/${slug}`;
}

export function normaUrl(slug: string): string {
  return `${BASE_URL}${normaPath(slug)}`;
}

/** EU acts and proposals are EU jurisdiction; laws and decrees are Italian. */
export function giurisdizioneOf(tipo: TipoNorma): "EU" | "IT" {
  // Italian acts are the only two national types in TipoNorma.
  return tipo === "Legge" || tipo === "Decreto legislativo" ? "IT" : "EU";
}

export function legalForceOf(n: Pick<Norma, "stato" | "legalForce">): LegalForce {
  if (n.legalForce) return n.legalForce;
  if (n.stato === "In vigore") return "InForce";
  if (n.stato === "In applicazione progressiva") return "PartiallyInForce";
  return "NotInForce";
}

const MESI = [
  "gennaio",
  "febbraio",
  "marzo",
  "aprile",
  "maggio",
  "giugno",
  "luglio",
  "agosto",
  "settembre",
  "ottobre",
  "novembre",
  "dicembre",
];

/** "2027-12-02" → "2 dicembre 2027". Deterministic, no Intl/timezone involved. */
export function formatDataIt(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d === 1 ? "1º" : d} ${MESI[m - 1]} ${y}`;
}

export function isFutura(iso: string): boolean {
  return iso > REGISTRO_AGGIORNATO;
}

/** Dates of one regulation, in chronological order. */
export function dateOrdinate(n: Norma): DataChiave[] {
  return [...n.dateChiave].sort((a, b) => a.data.localeCompare(b.data));
}

/** First key date after the registry date, if any. */
export function prossimaData(n: Norma): DataChiave | undefined {
  return dateOrdinate(n).find((d) => isFutura(d.data));
}

export interface VoceCalendario extends DataChiave {
  slug: string;
  titoloBreve: string;
}

/** Every key date of every regulation, oldest first. */
export function calendario(): VoceCalendario[] {
  return NORME.flatMap((n) =>
    n.dateChiave.map((d) => ({ ...d, slug: n.slug, titoloBreve: n.titoloBreve }))
  ).sort((a, b) => a.data.localeCompare(b.data) || a.titoloBreve.localeCompare(b.titoloBreve));
}

/** Label shown next to a date: upcoming, or already applicable / already happened. */
export function statoData(d: DataChiave): "prossima" | "già in vigore" | "passata" {
  if (isFutura(d.data)) return "prossima";
  return d.obbligo ? "già in vigore" : "passata";
}

export const AMBITI_ORDINE: Ambito[] = [
  "AI",
  "Privacy",
  "Responsabilità di prodotto",
  "Cybersecurity",
  "Finanza",
  "Dati",
  "Sanità",
  "Cloud",
];

export function normePerAmbito(): { ambito: Ambito; norme: Norma[] }[] {
  return AMBITI_ORDINE.map((ambito) => ({
    ambito,
    norme: NORME.filter((n) => n.ambito === ambito),
  })).filter((g) => g.norme.length > 0);
}

/**
 * Page metadata for /it/normativa/<slug>. Title and description default to the
 * registry; pass them only when the page needs a sharper wording.
 */
export function normaMetadata(
  slug: string,
  opts: { title?: string; description?: string; keywords?: string[] } = {}
): Metadata {
  const n = getNorma(slug);
  const title = opts.title ?? `${n.titoloBreve} (${n.riferimento}): cosa chiede a chi usa AI in Italia`;
  const description = opts.description ?? n.sintesi;
  const path = normaPath(slug);
  return {
    title,
    description,
    ...(opts.keywords?.length ? { keywords: opts.keywords } : {}),
    alternates: alternatesFor(path),
    openGraph: {
      images: OG_IMAGE,
      title,
      description,
      url: `${BASE_URL}${path}`,
      type: "article",
      locale: "it_IT",
      modifiedTime: n.aggiornato,
    },
    twitter: {
      images: TWITTER_IMAGE,
      card: "summary_large_image",
      title,
      description,
    },
  };
}
