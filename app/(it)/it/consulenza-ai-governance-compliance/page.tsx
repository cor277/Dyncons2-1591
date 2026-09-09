import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { ORG_ID, WEBSITE_ID, NEXUS_ID, CEPF_ID, CALIBRA_ID } from "@/app/schema-org";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";
import { TextLink } from "@/components/ui/TextLink";
import { TechBadge } from "@/components/ui/TechBadge";

const IT_URL = "https://www.dynamicsconsulting.it/it/consulenza-ai-governance-compliance";
const EN_URL = "https://www.dynamicsconsulting.it/services/governance-advisory";

const TITLE = "Consulenza AI, Governance e Compliance";
const DESCRIPTION =
  "Consulenza AI per aziende in settori regolamentati: analisi normativa (AI Act, GDPR, PLD 2024, NIS2, DORA, ISO 27001), governance, architettura e implementazione on-premise. Advisory e ingegneria nello stesso studio, in Italia e in UE.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "consulenza AI",
    "consulenza intelligenza artificiale aziendale",
    "consulenza AI Act",
    "AI governance",
    "compliance intelligenza artificiale",
    "consulenza AI settori regolamentati",
    "consulenza AI on-premise",
    "AI compliance Italia",
  ],
  alternates: {
    canonical: IT_URL,
    languages: { it: IT_URL, en: EN_URL, "x-default": EN_URL },
  },
  openGraph: {
    images: OG_IMAGE,
    title: "Consulenza AI, Governance e Compliance | Dynamics Consulting",
    description: DESCRIPTION,
    url: IT_URL,
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "Consulenza AI, Governance e Compliance | Dynamics Consulting",
    description: DESCRIPTION,
  },
};

const faqs = [
  {
    q: "È consulenza legale?",
    a: "No. Il lavoro è tecnico e organizzativo: cosa la norma chiede ai sistemi e ai processi, cosa fa oggi l’architettura, dove le due cose divergono. Pareri legali, contrattualistica e rapporti con le autorità restano agli avvocati dell’organizzazione — il documento è scritto per essere consegnato a loro.",
  },
  {
    q: "Rilasciate una certificazione di conformità?",
    a: "Nessun consulente può rilasciarla. La conformità la stabilisce la valutazione prevista dal regolamento, non un parere e non la topologia del deployment. Quello che ricevi è un documento firmato che dice cosa hai, cosa ti manca e in che ordine chiudere il divario: in un’ispezione vale, un’autodichiarazione di conformità no.",
  },
  {
    q: "Da dove parte di solito un incarico?",
    a: "Dall’assessment di esposizione: tre giornate di lavoro su contratti, architettura e catena di fornitura, con un documento firmato. È un incarico a perimetro fisso, non l’intera consulenza. Se il quadro è già chiaro, si parte direttamente dalla progettazione o dall’implementazione.",
  },
  {
    q: "Bisogna adottare Nexus MDS Core?",
    a: "No. Gran parte del lavoro di advisory si svolge su sistemi costruiti da altri fornitori e lì rimane. Nexus MDS Core è la strada implementativa quando l’analisi conclude che deve cambiare l’architettura: è una piattaforma che progettiamo e gestiamo, non un prerequisito della consulenza.",
  },
  {
    q: "Che differenza c’è fra CEPF e Calibra?",
    a: "CEPF — Compliance-Epistemic Project Framework — è la metodologia: il catalogo che mappa i regimi normativi sugli obblighi operativi che ciascuno produce e sui punti in cui questi si sovrappongono. Calibra è il software che implementa CEPF e aggiunge rischi, tempi, flusso operativo, Gantt e milestone. Entrambi sono proprietari di Dynamics Consulting e si usano dentro gli incarichi.",
  },
];

const LAVORO = [
  {
    t: "Posizionamento normativo del sistema",
    b: "Quali regimi raggiungono davvero il sistema che hai o che stai comprando, in quale ruolo — fornitore, deployer, distributore — e quali obblighi discendono da quel ruolo, non dalla classificazione commerciale del venditore.",
  },
  {
    t: "Revisione architetturale rispetto agli obblighi",
    b: "Confini del retrieval, residenza dei dati, identità e segregazione degli accessi, profondità dei log, retention, catena di fornitura del modello, punti di approvazione umana. Ogni obbligo è ricondotto al componente che lo regge, oppure registrato come scoperto.",
  },
  {
    t: "Analisi degli incroci",
    b: "Dove due regimi chiedono lo stesso controllo — gestione degli accessi, audit log, change management, gestione degli incidenti — il controllo si dichiara una volta e si documenta su entrambi, invece di costruirlo due volte. È a questo che serve CEPF.",
  },
  {
    t: "Disegno della governance",
    b: "Chi decide, chi approva, chi viene informato ed entro quanto. Ruoli, escalation e obblighi di segnalazione scritti come procedure che l’organizzazione può eseguire davvero, non come policy che nessuno apre.",
  },
  {
    t: "Sequenza di rimedio",
    b: "Cosa va fatto, in che ordine, con quale urgenza, distinguendo ciò che è già scaduto da ciò che ha una data futura — e quanto costa in effort, per ruolo.",
  },
  {
    t: "Implementazione",
    b: "Quando la conclusione è che l’architettura deve cambiare, lo stesso studio la progetta e la costruisce: retrieval, identità, audit e approval gate come lavoro di ingegneria, sulla tua infrastruttura o su Nexus MDS Core.",
  },
];

const REGIMI = [
  ["AI Act", "Regolamento (UE) 2024/1689 — classificazione, obblighi del deployer, trasparenza, alfabetizzazione AI"],
  ["GDPR", "Regolamento (UE) 2016/679 — base giuridica, minimizzazione all’ingestion, diritti degli interessati"],
  ["PLD 2024", "Direttiva sulla responsabilità da prodotto — il software è un prodotto dal 9 dicembre 2026"],
  ["NIS2", "Direttiva (UE) 2022/2555 — sicurezza delle reti e dei sistemi informativi"],
  ["DORA", "Regolamento (UE) 2022/2554 — resilienza operativa per il settore finanziario"],
  ["Cyber Resilience Act", "Regolamento (UE) 2024/2847 — compreso l’obbligo di segnalazione dell’articolo 14"],
  ["ISO/IEC 27001:2022", "Sistema di gestione della sicurezza delle informazioni"],
  ["ISO 56001:2024", "Sistema di gestione dell’innovazione"],
];

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${IT_URL}#webpage`,
    url: IT_URL,
    name: "Consulenza AI, governance e compliance",
    description: DESCRIPTION,
    inLanguage: "it",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": CEPF_ID }, { "@id": CALIBRA_ID }, { "@id": NEXUS_ID }],
    mainEntity: { "@id": `${IT_URL}#service` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${IT_URL}#service`,
    name: "Consulenza AI, governance e compliance",
    serviceType: "Consulenza AI, governance e compliance",
    url: IT_URL,
    provider: { "@id": ORG_ID },
    areaServed: ["IT", "EU"],
    availableLanguage: ["it", "en"],
    inLanguage: "it",
    audience: {
      "@type": "Audience",
      audienceType:
        "Aziende e organizzazioni che introducono AI in ambienti regolamentati — sanità, farmaceutico, finanza, energia, ingegneria",
    },
    description:
      "Consulenza AI per organizzazioni in settori regolamentati: analisi normativa dei sistemi di intelligenza artificiale rispetto ad AI Act, GDPR, PLD 2024, NIS2, DORA, Cyber Resilience Act e ISO/IEC 27001:2022, revisione architetturale con responsabilità tecnica documentata, disegno della governance e implementazione. Si appoggia al Compliance-Epistemic Project Framework (CEPF) e a Calibra, il software che lo implementa.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${IT_URL}#faq`,
    inLanguage: "it",
    isPartOf: { "@id": `${IT_URL}#webpage` },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function ConsulenzaAiGovernanceCompliancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen" lang="it">
        {/* Apertura */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Consulenza · Governance e compliance
            </p>
            <h1 className="font-syne text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Consulenza AI, governance e compliance per aziende in settori regolamentati
            </h1>
            <p className="text-[#9BA8B9] text-lg leading-relaxed mb-5">
              Analisi normativa del sistema di intelligenza artificiale che hai — o che stai per
              comprare — portata fino all’architettura che deve reggerla. Per organizzazioni in cui
              un output ha conseguenze: sanità e distribuzione farmaceutica, banche e assicurazioni,
              energia, ingegneria, logistica, manifattura.
            </p>
            <p className="text-[#7D8FA3] text-base leading-relaxed mb-8">
              Dynamics Consulting è uno studio indipendente di consulenza e ingegneria AI, guidato
              da Corrado Patierno, che lavora su infrastruttura AI sovrana, governance dell’AI e
              ambienti regolamentati. Consulenza e implementazione stanno nello stesso studio: chi
              scrive il requisito è in grado di costruire il sistema che lo soddisfa.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-10">
              {["AI Act", "GDPR", "PLD 2024", "NIS2", "DORA", "ISO 27001"].map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                label="Assessment di esposizione &rarr;"
                href="/it/assessment"
                variant="primary"
              />
              <div className="flex items-center gap-6 sm:self-center">
                <TextLink label="Scrivimi &rarr;" href="/contact" />
                <TextLink label="This page in English →" href="/services/governance-advisory" />
              </div>
            </div>
          </div>
        </section>

        {/* A chi serve */}
        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-3xl mx-auto text-[#7D8FA3] text-lg leading-relaxed">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              A chi serve
            </h2>
            <p>
              La richiesta arriva quasi sempre da tre posti: un CTO o un CIO che deve rispondere
              dell’architettura, una funzione compliance o risk che deve rispondere dell’obbligo, un
              consiglio di amministrazione che ha scoperto che le due risposte non coincidono.
            </p>
            <p className="mt-4">
              Vale allo stesso modo per un sistema comprato da un fornitore e per uno costruito in
              casa. Gli obblighi di chi mette in esercizio un sistema di AI non dipendono da chi ha
              scritto il codice.
            </p>
          </div>
        </section>

        {/* I problemi */}
        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-3xl mx-auto text-[#7D8FA3] text-lg leading-relaxed">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              I problemi che affronta
            </h2>
            <p>
              Un sistema entra in produzione e nessuno sa dire quali regimi normativi lo
              raggiungono, in quale ruolo, con quali scadenze già passate.
            </p>
            <p className="mt-4">
              Esiste una policy e l’architettura fa un’altra cosa. Il documento dice che gli output
              sono tracciabili; il sistema non conserva traccia di quale revisione del documento ha
              prodotto una risposta.
            </p>
            <p className="mt-4">
              Si applicano più regimi insieme e vengono gestiti come programmi separati: lo stesso
              controllo si costruisce due volte, e nello spazio fra i due si concentrano le
              omissioni.
            </p>
            <p className="mt-4">
              Si dà per scontato che la responsabilità sia del fornitore, e il contratto non lo
              dice. Dal 9 dicembre 2026 la direttiva europea sulla responsabilità da prodotto
              include il software fra i prodotti, e questo cambia quanto vale una clausola di
              limitazione.
            </p>
          </div>
        </section>

        {/* Cosa facciamo */}
        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-8">
              Che cosa facciamo, concretamente
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2">
              {LAVORO.map((l) => (
                <li
                  key={l.t}
                  className="rounded-lg border border-[#21262D] bg-[#11161D] p-6"
                >
                  <h3 className="font-dm font-semibold text-[#E6EDF3] text-base mb-3">{l.t}</h3>
                  <p className="text-[#7D8FA3] text-sm leading-relaxed">{l.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Deliverable */}
        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-3xl mx-auto text-[#7D8FA3] text-lg leading-relaxed">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              Che cosa ricevi
            </h2>
            <p>
              Documenti, non presentazioni. Ogni affermazione è classificata: cosa è verificato
              sulla documentazione fornita, cosa è dedotto, cosa richiede un accertamento fuori dal
              perimetro concordato. Il documento è firmato, e chi lo firma risponde
              professionalmente di quello che c’è scritto.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                ["Rapporto di esposizione normativa.", "Quali regimi si applicano, in quale ruolo, con quali obblighi già dovuti e quali ancora davanti."],
                ["Mappa di responsabilità architetturale.", "Ogni obbligo ricondotto al componente che lo regge, o registrato come scoperto."],
                ["Registro degli incroci.", "I controlli condivisi fra regimi, dichiarati una volta e documentati su ciascuno."],
                ["Modello di governance.", "Decisione, approvazione, escalation e segnalazione, con i ruoli nominati."],
                ["Piano di rimedio.", "Azioni in sequenza, effort per ruolo, distinguendo lo scaduto dal programmato."],
              ].map(([t, b]) => (
                <li key={t}>
                  <strong className="text-[#E6EDF3]">{t}</strong> {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Regimi */}
        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              Regimi e framework nel perimetro
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              Sono i regimi che la metodologia tratta come obblighi operativi, non come principi.
              Dove un obbligo appartiene a una funzione fuori da questo perimetro — sicurezza di
              rete, continuità operativa, protezione dei dati sul piano legale — l’analisi segnala
              il punto di incrocio e indica che cosa consegnare a chi se ne occupa, senza fingere di
              valutarlo.
            </p>
            <ul className="space-y-3 text-[#7D8FA3] leading-relaxed">
              {REGIMI.map(([nome, rif]) => (
                <li key={nome}>
                  <strong className="text-[#E6EDF3]">{nome}</strong> — {rif}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* La posizione */}
        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-3xl mx-auto text-[#7D8FA3] text-lg leading-relaxed">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              La compliance non è documentazione aggiunta alla fine
            </h2>
            <p>
              Un sistema che non sa dire quale revisione di un documento ha prodotto una risposta
              non diventa tracciabile perché una policy lo afferma. Governance, tracciabilità,
              confini del dato, controllo degli accessi, auditabilità e approvazione umana sono
              vincoli architetturali: si decidono quando il sistema si progetta, e metterli dopo
              costa più che costruirli subito.
            </p>
            <p className="mt-4">
              È la ragione per cui consulenza e ingegneria stanno nello stesso studio. L’analisi
              smette di essere un parere nel punto in cui qualcuno deve mettere le mani su una
              pipeline di retrieval — ed è lì che quasi tutto il lavoro di compliance viene
              abbandonato.
            </p>
          </div>
        </section>

        {/* Strumenti */}
        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-8">
              Gli strumenti
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-lg border border-[#21262D] bg-[#11161D] p-6">
                <h3 className="font-dm font-bold text-[#E6EDF3] text-lg mb-3">
                  CEPF — la metodologia
                </h3>
                <p className="text-[#7D8FA3] text-sm leading-relaxed mb-4">
                  Il Compliance-Epistemic Project Framework è un catalogo di incroci normativi: i
                  regimi scomposti nei deliverable che richiedono davvero, nei ruoli che li
                  producono, nell’effort che portano e nei punti in cui due regimi chiedono lo
                  stesso controllo. Versione 7, snapshot luglio 2026 — 19 framework, 247 requisiti,
                  24 gruppi di sovrapposizione, 695 template documentali.
                </p>
                <TextLink label="CEPF in dettaglio →" href="/cepf" />
              </div>
              <div className="rounded-lg border border-[#21262D] bg-[#11161D] p-6">
                <h3 className="font-dm font-bold text-[#E6EDF3] text-lg mb-3">
                  Calibra — il software
                </h3>
                <p className="text-[#7D8FA3] text-sm leading-relaxed mb-4">
                  Calibra implementa CEPF. Oltre al catalogo normativo gestisce rischi, tempi,
                  flusso operativo, Gantt e milestone: è quello che trasforma un piano di rimedio in
                  un programma con date e responsabili. Sulla pagina CEPF gira una demo ridotta, in
                  italiano.
                </p>
                <TextLink label="Che cos’è Calibra →" href="/calibra" />
              </div>
              <div className="rounded-lg border border-[#21262D] bg-[#11161D] p-6">
                <h3 className="font-dm font-bold text-[#E6EDF3] text-lg mb-3">
                  Nexus MDS Core — la piattaforma
                </h3>
                <p className="text-[#7D8FA3] text-sm leading-relaxed mb-4">
                  Sedici servizi orchestrati per ambienti regolamentati: indicizzazione, retrieval e
                  audit locali, identità Zero-Trust, motore di workflow, generazione esterna
                  sostituibile. È la strada implementativa quando l’analisi conclude che deve
                  cambiare l’architettura.
                </p>
                <TextLink label="Nexus MDS Core →" href="/platform" />
              </div>
            </div>
          </div>
        </section>

        {/* Come si parte */}
        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-3xl mx-auto text-[#7D8FA3] text-lg leading-relaxed">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              Come si parte
            </h2>
            <p>
              <strong className="text-[#E6EDF3]">Assessment di esposizione.</strong> È il punto di
              ingresso a perimetro fisso, e un singolo incarico dentro questa consulenza, non la
              consulenza intera: tre giornate su contratti, architettura e catena di fornitura,
              4.500 euro più IVA, consegna entro quindici giorni lavorativi con documento firmato.
              Se entro novanta giorni si apre un’implementazione o un incarico continuativo,
              l’importo viene scomputato.{" "}
              <Link
                href="/it/assessment"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                Perimetro e condizioni
              </Link>
              .
            </p>
            <p className="mt-4">
              <strong className="text-[#E6EDF3]">Consulenza continuativa.</strong> Disegno della
              governance e revisione architetturale lungo la vita di un programma, anche nella forma
              del{" "}
              <Link
                href="/fractional-cto-milano"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                fractional CTO
              </Link>
              , quando la decisione deve essere presa dentro l’organizzazione e non raccomandata da
              fuori.
            </p>
            <p className="mt-4">
              <strong className="text-[#E6EDF3]">Implementazione.</strong> Progettazione e
              realizzazione di quello che l’analisi richiede — retrieval, identità, audit, approval
              gate — sulla tua infrastruttura o su{" "}
              <Link href="/platform" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                Nexus MDS Core
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Differenza dalla consulenza legale */}
        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-3xl mx-auto text-[#7D8FA3] text-lg leading-relaxed">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              In che cosa è diversa dalla consulenza legale
            </h2>
            <p>
              Un parere legale dice cosa prevede la norma. Non apre la pipeline di retrieval per
              verificare se fra diciotto mesi sarà ancora possibile ricostruire la risposta che il
              sistema ha dato. Questo lavoro lo fa, e dichiara quale componente regge ciascun
              obbligo.
            </p>
            <p className="mt-4">
              Quello che non viene consegnato è una certificazione di conformità — e non esiste
              consulente che possa consegnarla. La conformità la stabilisce la valutazione prevista
              dal regolamento, non un parere e non la topologia del deployment. Pareri legali,
              contrattualistica e rapporti con le autorità restano agli avvocati: il documento è
              scritto per essere letto da un consiglio e usato da un legale.
            </p>
          </div>
        </section>

        {/* In produzione */}
        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-3xl mx-auto text-[#7D8FA3] text-lg leading-relaxed">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              In produzione, non in teoria
            </h2>
            <p>
              <strong className="text-[#E6EDF3]">Federfarma Lombarda</strong> — assistente normativo
              per oltre 1.000 farmacie delle province di Milano, Lodi e Monza Brianza, circa 2.000
              interrogazioni al giorno. Catena di versioni esplicita, così le risposte citano ciò
              che è in vigore e non ciò che è soltanto pertinente; dati personali esclusi
              all’ingestion; registro inalterabile.{" "}
              <Link
                href="/it/case-studies/federfarma"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                Leggi il caso
              </Link>
              .
            </p>
            <p className="mt-4">
              Gli incarichi sono seguiti direttamente da Corrado Patierno: venticinque anni di
              architettura di sistemi enterprise in ambienti regolamentati e business-critical,
              Innovation Manager certificato dal Ministero delle Imprese, membro del consiglio
              direttivo di ENTD dal 2020 al 2025.
            </p>
            <p className="mt-4">
              Percorsi per settore:{" "}
              <Link
                href="/it/ai-sanitaria-on-premise"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                sanità
              </Link>
              ,{" "}
              <Link
                href="/it/consulenza-ai-farmaceutico"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                farmaceutico
              </Link>
              ,{" "}
              <Link
                href="/it/ai-agenti-finanziari"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                finanza e compliance
              </Link>
              ,{" "}
              <Link
                href="/it/ai-ingegneria-tecnica"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                ingegneria e norme tecniche
              </Link>
              . Il quadro generale sta in{" "}
              <Link
                href="/it/sovereign-ai-italia"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                Sovereign AI Italia
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 border-t border-[#21262D]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-8">
              Domande frequenti
            </h2>
            <dl className="space-y-8">
              {faqs.map((f) => (
                <div key={f.q}>
                  <dt className="text-[#E6EDF3] font-semibold text-lg mb-2">{f.q}</dt>
                  <dd className="text-[#7D8FA3] text-base leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Chiusura — assessment */}
        <section className="px-6 py-16 border-t border-[#21262D] bg-[#11161D]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
              Dove si ferma la responsabilit&agrave; del tuo fornitore, e dove comincia la tua?
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              Dal 9 dicembre 2026 la direttiva europea sulla responsabilit&agrave; da prodotto
              include il software fra i prodotti. L&apos;assessment di esposizione stabilisce, per
              la tua organizzazione, dove passa il confine — ed è da lì che parte quasi ogni
              incarico di governance.
            </p>
            <CTAButton
              label="Assessment di esposizione &rarr;"
              href="/it/assessment"
              variant="primary"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
