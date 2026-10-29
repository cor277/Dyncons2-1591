import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { ORG_ID, PERSON_ID, WEBSITE_ID, NEXUS_ID, CEPF_ID } from "@/app/schema-org";
import { breadcrumbSchema, faqSchema } from "@/app/seo";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { CTAButton } from "@/components/ui/CTAButton";
import { TextLink } from "@/components/ui/TextLink";
import { TechBadge } from "@/components/ui/TechBadge";

const IT_PATH = "/it/servizi/fractional-cto";
const IT_URL = `https://www.dynamicsconsulting.it${IT_PATH}`;

const TITLE = "Fractional AI CTO per imprese europee in settori regolati";

const DESCRIPTION =
  "Fractional AI CTO per imprese europee in settori regolati: autorità architetturale, governance dell'AI, valutazione dei fornitori e guida del programma con un mandato part-time. Di norma 2–4 giornate al mese per l'advisory, 8–12 per gli incarichi operativi.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Fractional AI CTO",
    "Fractional CTO",
    "Fractional CTO Italia",
    "CTO part-time",
    "guida programma AI",
    "governance architetturale",
    "valutazione fornitori AI",
    "governance AI Act",
    "CTO ad interim settori regolati",
  ],
  /* /fractional-cto-milano is a different argument for the Italian mid-market,
     not a translation of this page: linked as related, never as an alternate. */
  alternates: alternatesFor(IT_PATH),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: IT_URL,
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const faqs = [
  {
    q: "Che cos'è un fractional AI CTO?",
    a: "Un Chief Technology Officer ingaggiato part-time, con gli stessi poteri decisionali di uno permanente su architettura, scelte tecnologiche e programma AI, per un numero definito di giornate al mese. La differenza rispetto alla consulenza è la responsabilità: un fractional CTO firma le decisioni architetturali e ne risponde nel tempo, invece di consegnare una raccomandazione e andarsene.",
  },
  {
    q: "Quando serve un fractional CTO e non un consulente?",
    a: "Quando le questioni aperte sono decisioni, non analisi. Se in azienda nessuno sa dire se la promessa AI di un fornitore è credibile, se un'architettura reggerà a un audit o quale di tre iniziative AI va fermata, quello che manca è l'autorità, non l'informazione. Un consulente produce un documento; un fractional CTO prende la decisione e ne porta le conseguenze.",
  },
  {
    q: "Quanto tempo richiede il mandato?",
    a: "Di norma 2–4 giornate al mese per l'advisory strategico e 8–12 quando il mandato comprende la conduzione di un programma AI o di modernizzazione. L'impegno si rivede ogni trimestre rispetto a ciò che il programma richiede davvero, in entrambe le direzioni.",
  },
  {
    q: "Come comincia un incarico?",
    a: "Con un assessment tecnologico di due-tre settimane: infrastruttura esistente, sistemi in produzione, flussi di dati, rapporti con i fornitori e le lacune che contano. Segue un piano strategico con roadmap in quattro-sei settimane, con milestone trimestrali. Da lì il mandato prosegue su un impegno mensile concordato, con reporting al CEO o al consiglio di amministrazione.",
  },
  {
    q: "È la stessa cosa di un CTO ad interim?",
    a: "No. Un CTO ad interim occupa a tempo pieno una posizione vacante finché non viene coperta in modo stabile, e l'incarico finisce quando succede. Un mandato fractional è pensato per essere permanente a intensità ridotta: l'organizzazione ottiene continuità di giudizio architetturale senza sostenere un dirigente a tempo pieno che non può ancora giustificare.",
  },
  {
    q: "Il ruolo copre anche la regolamentazione dell'AI?",
    a: "Ne copre il lato tecnico e organizzativo: come si classifica un sistema secondo l'AI Act europeo, quali evidenze un'architettura deve essere in grado di produrre, dove si ferma la responsabilità del fornitore secondo la direttiva sulla responsabilità da prodotto del 2024, e come i controlli di NIS2, DORA o ISO/IEC 27001:2022 ricadono sulla stessa piattaforma. Pareri legali e adempimenti verso le autorità restano ai tuoi legali; il mandato produce la documentazione tecnica su cui lavorano.",
  },
  {
    q: "La stessa persona può anche costruire il sistema?",
    a: "Sì, ed è una scelta voluta. Advisory e realizzazione vengono dalla stessa struttura: chi scrive il requisito architetturale è in grado di costruire il sistema che lo soddisfa, e quindi non può scrivere un requisito che non si può costruire.",
  },
  {
    q: "Un fractional CTO sostituisce il team IT interno?",
    a: "No. Il team interno mantiene esercizio e delivery; il mandato aggiunge direzione architetturale, scelte tecnologiche, governo dei fornitori e il programma AI. Dove manca del tutto una seniority interna, i primi mesi servono di solito a costruirla, non a sostituirla.",
  },
];

const responsibilities = [
  {
    title: "Architettura AI",
    body: "Retrieval, scelta dei modelli, topologia dell'inferenza, confini dei dati, integrazione con i sistemi gestionali di riferimento. Cosa gira dove, cosa esce dal perimetro e di cosa è fatta una risposta.",
  },
  {
    title: "Governance dell'AI",
    body: "Classificazione dei sistemi AI, controlli che l'architettura deve incorporare, requisiti di audit e ricostruibilità, approval gate umani, e la documentazione che li rende dimostrabili.",
  },
  {
    title: "Valutazione dei fornitori",
    body: "Due diligence tecnica su fornitori e piattaforme AI: cosa fa davvero il prodotto, dove vanno i dati, di cosa il contratto li rende responsabili, e cosa resta in carico all'organizzazione.",
  },
  {
    title: "Sicurezza e protezione dei dati",
    body: "Separazione di identità e accessi, gestione dei segreti, confini di rete, conservazione dei dati, e come gli obblighi GDPR e i requisiti di sicurezza di settore si traducono nella piattaforma invece che in un documento di policy.",
  },
  {
    title: "Modello di deployment",
    body: "On-premise, ibrido o ospitato in UE: si decide in base al modello di minaccia e all'esposizione regolatoria, non per preferenza. La tassonomia qui sotto è quella che Dynamics Consulting usa in tutti i suoi incarichi.",
  },
  {
    title: "Guida del programma",
    body: "Roadmap, sequenza degli interventi, difendibilità del budget, coordinamento dei fornitori, e un reporting su cui il consiglio di amministrazione può decidere. Fermare le iniziative che non si ripagheranno fa parte del mandato.",
  },
];

const deployment = [
  {
    name: "AI completamente locale",
    body: "Indicizzazione, retrieval, identità, audit e generazione girano tutti su infrastruttura controllata dall'organizzazione. Massima sovranità, massimo costo hardware, scelta del modello limitata a ciò che si può ospitare in proprio.",
  },
  {
    name: "AI ibrida sovrana",
    body: "Dati, retrieval, riconciliazione, identità e audit restano in locale; solo la generazione della risposta finale gira su un endpoint di inferenza esterno, sotto policy e sostituibile senza riprogettare il sistema. È il modello in produzione in Federfarma Lombarda.",
  },
  {
    name: "Inferenza privata in UE",
    body: "Inferenza su infrastruttura privata o residente in UE, con caratteristiche di residenza, conservazione e accesso definite in modo esplicito. Adatta quando il vincolo è la giurisdizione e le condizioni di trattamento, non la custodia fisica.",
  },
];

const deliverables = [
  "Una mappa della tecnologia e dell'AI: cosa è in produzione, da cosa dipende e dove si concentra il rischio.",
  "Un registro delle decisioni architetturali (le scelte fatte, le alternative scartate e il ragionamento) perché chi verrà dopo possa verificare il ragionamento e non solo il risultato.",
  "Una roadmap con priorità, milestone trimestrali e l'ordine di grandezza di budget che ciascuna comporta.",
  "Valutazioni di fornitori e partner: due diligence tecnica scritta per essere letta da un consiglio di amministrazione, non da un ingegnere.",
  "Requisiti di governance espressi come architettura (controlli, superficie di audit, approval gate) invece che come testo di policy che nessuno sa implementare.",
  "Reporting mensile al CEO o al consiglio su avanzamento, decisioni prese e cosa è cambiato.",
];

const crumbs = breadcrumbSchema(IT_URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Servizi", path: "/it/competenze" },
  { name: "Fractional AI CTO" },
]);

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${IT_URL}#webpage`,
    url: IT_URL,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "it",
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": ORG_ID }, { "@id": NEXUS_ID }, { "@id": CEPF_ID }],
    mainEntity: { "@id": `${IT_URL}#service` },
    breadcrumb: { "@id": `${IT_URL}#breadcrumb` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${IT_URL}#service`,
    name: "Fractional AI CTO",
    serviceType: "Chief Technology Officer fractional per programmi AI",
    url: IT_URL,
    provider: { "@id": ORG_ID },
    /* The mandate is held by a named person, not by an anonymous bench. */
    performer: { "@id": PERSON_ID },
    areaServed: ["IT", "EU"],
    availableLanguage: ["en", "it"],
    audience: {
      "@type": "Audience",
      audienceType:
        "Organizzazioni mid-market ed enterprise in settori regolati (sanità, farmaceutico, servizi finanziari, energia, ingegneria, manifattura) che gestiscono o pianificano programmi AI senza un CTO permanente",
    },
    description:
      "Mandato part-time da Chief Technology Officer che copre architettura AI, governance dell'AI secondo l'AI Act europeo e i regimi collegati, valutazione di fornitori e partner, scelta del modello di deployment e guida del programma AI. Di norma 2–4 giornate al mese per l'advisory e 8–12 per gli incarichi operativi, a partire da un assessment tecnologico di due-tre settimane.",
  },
  faqSchema(IT_URL, faqs),
  crumbs,
];

export default function FractionalCtoItPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <NavBar />
      <main>
        {/* Hero — definition first, so the opening block answers the query on its own */}
        <section className="hero-constellation pt-32 pb-20">
          <div className="hero-content max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
                Servizi · Advisory e strategia
              </p>
              <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E6EDF3] leading-[1.05] tracking-tight mb-6">
                Fractional AI CTO
              </h1>
              <p className="text-[#9BA8B9] text-lg md:text-xl max-w-2xl leading-relaxed mb-5">
                Un fractional AI CTO è un Chief Technology Officer ingaggiato part-time, con gli
                stessi poteri decisionali di uno permanente su architettura, scelte tecnologiche e
                programma AI. Per le organizzazioni soggette a vincoli regolatori il mandato copre
                cosa un sistema AI può fare, dove vanno i suoi dati e quali evidenze deve essere in
                grado di produrre a posteriori.
              </p>
              <p className="text-[#7D8FA3] text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                Di norma 2&ndash;4 giornate al mese per l&apos;advisory strategico, 8&ndash;12
                quando il mandato comprende la conduzione del programma. Lo ricopre personalmente{" "}
                <Link href="/it/chi-siamo" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Corrado Patierno
                </Link>
                , e la realizzazione può venire dalla stessa struttura invece di passare a terzi.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-10">
                {[
                  "Architettura AI",
                  "Governance dell'AI",
                  "Valutazione fornitori",
                  "Guida del programma",
                ].map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton label="Parliamo di un mandato →" href="/it/contatti" variant="primary" />
                <div className="flex items-center gap-6 sm:self-center">
                  <TextLink label="Assessment di esposizione →" href="/it/assessment" />
                  <TextLink label="Fractional CTO a Milano →" href="/it/fractional-cto-milano" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                Per chi è
              </h2>
              <p className="mb-4">
                Organizzazioni mid-market ed enterprise arrivate al punto in cui le decisioni
                tecnologiche hanno conseguenze regolatorie e commerciali, ma che non possono ancora
                giustificare &mdash; o non riescono a trovare &mdash; un CTO permanente della
                seniority necessaria. In concreto: ospedali e gruppi sanitari, distribuzione
                farmaceutica, banche, società di gestione del risparmio e assicurazioni, energia,
                studi di ingegneria che lavorano su norme tecniche, logistica e manifattura.
              </p>
              <p>
                Di solito la richiesta arriva da un CEO o da un direttore generale con
                un&apos;iniziativa AI e nessuno all&apos;interno in grado di arbitrarla, da un CIO
                che porta più programmi di quanta capacità architetturale abbia l&apos;azienda, o da
                un consiglio di amministrazione chiamato ad approvare un budget che non ha modo di
                valutare.
              </p>
            </div>

            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                Il problema che risolve
              </h2>
              <p className="mb-4">
                Un&apos;organizzazione senza autorità architetturale non smette di prendere
                decisioni architetturali. Le prende comunque &mdash; scegliendo un fornitore,
                lasciando che un proof of concept diventi produzione senza che nessuno lo dica,
                aggiungendo un&apos;integrazione che nessuno ha documentato. Le decisioni si prendono
                lo stesso; manca qualcuno in grado di rifiutare quella sbagliata e qualcuno che
                risponda di quella giusta.
              </p>
              <p className="mb-4">
                Con l&apos;AI il costo di questa lacuna ha cambiato forma. Un CRM scelto male costa
                caro. Un sistema AI governato male in un ambiente regolato costa caro e poi va
                spiegato: su cosa si basava, cosa ha risposto in una certa data, chi ha approvato
                l&apos;output, e se dati personali sono mai usciti dal perimetro. A queste domande si
                può rispondere solo se l&apos;architettura è stata costruita per farlo &mdash;
                aggiungere un audit trail a un sistema che non è stato progettato per tenerne uno,
                nella maggior parte dei casi, significa rifarlo.
              </p>
              <p>
                Un mandato fractional chiude la lacuna senza il costo fisso di un dirigente
                permanente: un CTO a tempo pieno di questa seniority comporta una retribuzione a sei
                cifre più benefit, onboarding e il rischio di un&apos;assunzione sbagliata, contro un
                impegno che si misura in giornate al mese.
              </p>
            </div>

            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                Quando ti serve &mdash; e quando no
              </h2>
              <p className="mb-4">
                I segnali che il mandato è lo strumento giusto: un&apos;iniziativa AI è stata
                approvata e nessuno sa specificarla; una proposta di un fornitore non si riesce a
                valutare internamente; ci sono diversi pilota AI in corso e nessuno è arrivato in
                produzione; un audit, un questionario di sicurezza di un cliente o una gara hanno
                posto sullo stack AI una domanda a cui l&apos;azienda non sa rispondere; una
                piattaforma legacy è diventata il vincolo su tutto il resto; la funzione tecnica
                porta al consiglio fatti, ma non decisioni.
              </p>
              <p>
                È lo strumento sbagliato quando serve capacità di esecuzione e non giudizio &mdash;
                più sviluppatori, un partner di delivery, un team di implementazione &mdash; oppure
                quando un CTO interno competente ha già il mandato e la lacuna è una singola
                risposta tecnica. In questo secondo caso un{" "}
                <Link href="/it/assessment" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  assessment di esposizione a perimetro definito
                </Link>{" "}
                o un{" "}
                <Link
                  href="/it/consulenza-ai-governance-compliance"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  incarico di consulenza su governance e compliance
                </Link>{" "}
                è la risposta più economica e più onesta, e Dynamics Consulting te lo dice.
              </p>
            </div>

            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                Fractional CTO, consulente, system integrator, CTO ad interim
              </h2>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">Un consulente</strong> analizza una questione e
                consegna una raccomandazione. La sua responsabilità finisce con il documento, e
                l&apos;organizzazione deve ancora decidere.
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">Un system integrator</strong> costruisce ciò che
                gli è stato chiesto di costruire. È il partner giusto per la delivery e quello
                sbagliato per decidere cosa consegnare: chi specifica il lavoro non dovrebbe essere
                chi lo fattura.
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">Un CTO ad interim</strong> occupa a tempo pieno
                una posizione vacante finché non viene coperta in modo stabile. È un accordo
                temporaneo per costruzione.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Un fractional CTO</strong> detiene i poteri
                decisionali in modo permanente, a intensità ridotta, e viene misurato su cosa fa
                l&apos;architettura in produzione &mdash; anche due o tre anni dopo, quando le
                scelte di oggi o sono ancora in piedi o si stanno pagando.
              </p>
            </div>
          </div>
        </section>

        {/* Responsibilities */}
        <section className="py-20 md:py-28 bg-[#0D1117]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-4">
              Cosa copre il mandato
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed max-w-3xl mb-12">
              Sei aree di responsabilità, tenute insieme invece che divise fra fornitori &mdash; in
              un programma AI sono la stessa decisione vista da angoli diversi.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {responsibilities.map((r) => (
                <div
                  key={r.title}
                  className="bg-[#161B22] border border-[#30363D] rounded-xl p-6 hover:border-[#00B4D8] transition-colors duration-200"
                >
                  <h3 className="font-dm font-semibold text-[#E6EDF3] text-base mb-3">{r.title}</h3>
                  <p className="text-[#7D8FA3] text-sm leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment taxonomy */}
        <section className="py-20 md:py-28 bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              Modelli di deployment, con il nome giusto
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              Sul mercato &ldquo;sovrano&rdquo; si usa in modo così approssimativo da non valere
              nulla come specifica. Una delle prime cose che un mandato stabilisce è quale di
              questi tre modelli serve davvero all&apos;organizzazione, e a cosa rinuncia in ciascun
              caso.
            </p>
            <dl className="space-y-6">
              {deployment.map((d) => (
                <div key={d.name} className="border-l-2 border-[#00B4D8] pl-5">
                  <dt className="font-dm font-semibold text-[#E6EDF3] text-base mb-2">{d.name}</dt>
                  <dd className="text-[#7D8FA3] text-base leading-relaxed">{d.body}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[#7D8FA3] text-base leading-relaxed mt-8">
              L&apos;implementazione di riferimento del secondo modello è documentata nel{" "}
              <Link
                href="/it/case-studies/federfarma"
                className="text-[#00B4D8] hover:text-[#E6EDF3]"
              >
                case study Federfarma Lombarda
              </Link>
              , e la piattaforma su cui poggia in{" "}
              <Link href="/it/piattaforma-nexus" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                Nexus MDS Core
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Operating model */}
        <section className="py-20 md:py-28 bg-[#0D1117]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 text-[#7D8FA3] text-lg leading-relaxed">
            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                Come si svolge l&apos;incarico
              </h2>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">
                  Fase 1 &mdash; assessment tecnologico, due-tre settimane.
                </strong>{" "}
                Infrastruttura esistente, sistemi in produzione, flussi di dati, integrazioni,
                rapporti con i fornitori e le lacune che contano. Il risultato è una mappa di ciò che
                c&apos;è davvero, che nella maggior parte delle organizzazioni non esiste in un unico
                posto.
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">
                  Fase 2 &mdash; piano strategico e roadmap, quattro-sei settimane.
                </strong>{" "}
                Priorità, sequenza, milestone trimestrali e le decisioni da prendere prima di
                costruire qualsiasi cosa. Se l&apos;AI è nel perimetro, è qui che classificazione e
                requisiti di governance entrano nel piano invece di esservi aggiunti dopo.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Fase 3 &mdash; il mandato continuativo.</strong>{" "}
                Un impegno mensile concordato &mdash; di norma 2&ndash;4 giornate per
                l&apos;advisory, 8&ndash;12 per gli incarichi operativi. Partecipazione ai consigli
                di amministrazione, alle decisioni architetturali e alle revisioni dei fornitori, con
                reporting mensile al CEO. L&apos;impegno si rivede ogni trimestre e non è pensato
                per crescere per inerzia.
              </p>
            </div>

            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                Cosa ricevi per iscritto
              </h2>
              <ul className="space-y-3 list-none">
                {deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="text-[#00B4D8] mt-1.5 flex-shrink-0">&mdash;</span>
                    <span className="text-base">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
                Su cosa poggia il mandato
              </h2>
              <p className="mb-4">
                Venticinque anni di sistemi enterprise, da entrambi i lati del contratto di
                fornitura: ruoli senior di consulenza in Capgemini e Avanade, poi un mandato lato
                cliente in Banca Mediolanum per governare i fornitori esterni di un programma,
                comprese le performance dei fornitori e il rinnovo dei contratti. CTO di
                Nexo/Sefitalia, responsabile della software factory e delle piattaforme ERP,
                workforce e field di una rete di 1.800 persone. Programme lead su Nespresso
                Intervallo in ATOS: tre stream di delivery, circa quaranta persone.{" "}
                <Link href="/it/chi-siamo" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Il percorso completo è nella pagina Chi siamo
                </Link>
                .
              </p>
              <p className="mb-4">
                Sul fronte AI il track record è attuale e in produzione:{" "}
                <Link
                  href="/it/case-studies/federfarma"
                  className="text-[#00B4D8] hover:text-[#E6EDF3]"
                >
                  un assistente normativo al servizio di oltre 1.000 farmacie
                </Link>{" "}
                con catene di versione dei documenti esplicite, dati personali esclusi in fase di
                ingestion e un audit log a prova di manomissione;{" "}
                <Link href="/it/case-studies/iatp" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  il reverse engineering assistito dall&apos;AI di una piattaforma legacy
                </Link>
                ; e{" "}
                <Link href="/it/piattaforma-nexus" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Nexus MDS Core
                </Link>
                , la piattaforma self-hosted su cui girano.
              </p>
              <p>
                Neanche la parte di governance è improvvisata: il{" "}
                <Link href="/it/cepf" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Compliance-Epistemic Project Framework (CEPF)
                </Link>{" "}
                è il catalogo di attraversamento normativo che Dynamics Consulting mantiene, e il ragionamento dietro
                le architetture è pubblicato come{" "}
                <Link href="/it/ricerca" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  ricerca
                </Link>{" "}
                invece di essere affermato in una presentazione commerciale. Innovation Manager
                certificato MISE; autore di Logistica Fluida.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ — rendered in full, no accordion */}
        <section className="py-20 md:py-28 bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              Domande frequenti
            </p>
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-10">
              Le domande che vengono fatte davvero a Dynamics Consulting
            </h2>
            <div className="space-y-8">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-dm font-semibold text-[#E6EDF3] text-base mb-2">{f.q}</h3>
                  <p className="text-[#7D8FA3] text-base leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTASection
        title="Si comincia dall'assessment, non dal contratto"
        subtitle="Due-tre settimane per stabilire cosa c'è davvero. Il mandato, se ci sarà, si definisce a partire da quello che emerge."
        ctaLabel="Inizia la conversazione →"
        ctaHref="/it/contatti"
      />
      <Footer />
    </>
  );
}
