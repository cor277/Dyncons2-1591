import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "Fractional CTO Milano — Leadership Tecnologica per PMI | Dynamics Consulting",
  description:
    "Fractional CTO a Milano per PMI e mid-market: governance AI, architettura cloud, modernizzazione legacy, team enablement. 25+ anni di esperienza enterprise. Corrado Patierno — Dynamics Consulting.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/fractional-cto-milano" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Fractional CTO Milano — Leadership Tecnologica per PMI",
      description:
        "Servizio di Fractional CTO a Milano per aziende mid-market: governance AI, architettura enterprise, modernizzazione legacy e team enablement. Dynamics Consulting — Corrado Patierno.",
      url: "https://www.dynamicsconsulting.it/fractional-cto-milano",
      publisher: {
        "@type": "Organization",
        name: "Dynamics Consulting",
        url: "https://www.dynamicsconsulting.it",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Cos\u2019\u00e8 un Fractional CTO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un Fractional CTO \u00e8 un Chief Technology Officer che opera part-time o a progetto per una o pi\u00f9 aziende. Offre la stessa leadership strategica di un CTO full-time — governance tecnologica, architettura, selezione vendor, gestione team — ma con un impegno frazionato e un costo proporzionato, ideale per PMI e aziende mid-market.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto costa un Fractional CTO a Milano?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Il costo di un Fractional CTO varia in base all\u2019impegno richiesto. Tipicamente si parte da 2-4 giornate al mese per advisory strategico fino a 8-12 giornate per engagement operativi. Rispetto a un CTO full-time con RAL di 120-180k\u20ac pi\u00f9 benefit, il modello frazionato riduce il costo del 60-80% mantenendo lo stesso livello di seniority.",
          },
        },
        {
          "@type": "Question",
          name: "Che differenza c\u2019\u00e8 tra un Fractional CTO e un consulente IT tradizionale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un consulente IT tradizionale fornisce raccomandazioni e deliverable puntuali. Un Fractional CTO si integra nel team dirigenziale, partecipa alle decisioni strategiche, ha accountability sui risultati tecnologici e costruisce capability interne. Non \u00e8 un fornitore esterno: \u00e8 un membro del C-level a tempo parziale.",
          },
        },
        {
          "@type": "Question",
          name: "Per quali aziende \u00e8 adatto il servizio di Fractional CTO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Il servizio \u00e8 ideale per aziende mid-market (50-500 dipendenti) che affrontano trasformazione digitale, adozione AI, modernizzazione legacy o integrazione di piattaforme enterprise. Settori tipici: manufacturing, pharma, healthcare, energy, logistica e servizi finanziari.",
          },
        },
        {
          "@type": "Question",
          name: "Come funziona l\u2019engagement con Dynamics Consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L\u2019engagement inizia con un assessment tecnologico di 2-3 settimane per mappare l\u2019infrastruttura esistente, identificare gap e definire priorit\u00e0. Segue un piano di intervento con milestone trimestrali. Il Fractional CTO partecipa a board meeting, sprint review e decisioni architetturali, con reporting mensile al CEO.",
          },
        },
        {
          "@type": "Question",
          name: "Quali competenze specifiche porta Corrado Patierno come Fractional CTO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Corrado Patierno porta 25+ anni di esperienza in sistemi enterprise: Microsoft Dynamics (CRM, ERP, Power Platform), architetture AI e LLM on-premise, data platform, Kubernetes, integrazione di sistemi complessi. Ha progettato e guidato la piattaforma Nexus MDS Core per AI sovrana in settori regolamentati.",
          },
        },
      ],
    },
  ],
};

export default function FractionalCtoMilanoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* ── Hero ── */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Fractional CTO
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Fractional CTO a Milano: leadership tecnologica senior per PMI e mid-market
            </h1>
            <p className="text-[#7D8FA3] text-lg leading-relaxed">
              La tua azienda sta crescendo, ma la complessit&agrave; tecnologica cresce pi&ugrave; velocemente.
              Hai bisogno di un CTO — non tra sei mesi, non a tempo pieno, ma adesso,
              con l&apos;esperienza giusta per prendere decisioni architetturali che reggeranno
              i prossimi cinque anni. Dynamics Consulting offre esattamente questo: un
              Fractional CTO con 25+ anni di esperienza enterprise, disponibile per guidare
              la tua trasformazione digitale senza il costo e la complessit&agrave; di un&apos;assunzione C-level.
            </p>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-12 text-[#7D8FA3] text-lg leading-relaxed">

            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Cos&apos;&egrave; un Fractional CTO e perch&eacute; le PMI milanesi ne hanno bisogno
              </h2>
              <p className="mb-4">
                Un <strong className="text-[#E6EDF3]">Fractional CTO</strong> &egrave; un Chief Technology Officer
                che opera a tempo parziale o su base progettuale per una o pi&ugrave; organizzazioni.
                Non &egrave; un consulente che consegna un documento e sparisce. &Egrave; un membro
                effettivo del team dirigenziale — partecipa ai board meeting, prende decisioni
                architetturali vincolanti, gestisce i rapporti con i vendor tecnologici e
                costruisce le competenze interne del team.
              </p>
              <p className="mb-4">
                Per le PMI milanesi — aziende con 50-500 dipendenti, fatturato tra 10 e 200 milioni
                di euro — il Fractional CTO risolve un paradosso strutturale: queste organizzazioni
                hanno raggiunto una complessit&agrave; tecnologica che richiede leadership C-level dedicata,
                ma il loro stadio di crescita non giustifica (o non permette) un&apos;assunzione full-time
                con RAL di 120-180.000 euro pi&ugrave; benefit, stock option e costi di onboarding.
              </p>
              <p>
                Il risultato? Decisioni tecnologiche delegate a figure operative — IT manager,
                sviluppatori senior, o peggio, fornitori esterni con conflitti di interesse —
                che non hanno la visione strategica per allineare tecnologia e obiettivi di business.
                Il Fractional CTO colma esattamente questo gap, portando seniority enterprise
                a un costo frazionato e proporzionato all&apos;effettivo impegno richiesto.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Il gap tecnologico nel mid-market italiano
              </h2>
              <p className="mb-4">
                L&apos;ecosistema imprenditoriale milanese e lombardo &egrave; tra i pi&ugrave; dinamici d&apos;Europa,
                ma nasconde una fragilit&agrave; strutturale: il <strong className="text-[#E6EDF3]">debito tecnologico
                accumulato</strong> nelle aziende mid-market. Sistemi ERP implementati 10-15 anni fa e mai
                aggiornati. Integrazioni point-to-point tra applicativi che nessuno osa toccare.
                Dati critici intrappolati in silos — il CRM non parla con il gestionale, il gestionale
                non parla con il data warehouse, il data warehouse non esiste.
              </p>
              <p className="mb-4">
                A questo si aggiunge l&apos;onda dell&apos;intelligenza artificiale. Ogni CEO legge di AI
                generativa, automazione intelligente, predictive analytics. Ma tradurre queste
                promesse in valore reale richiede fondamenta solide: dati puliti, architetture
                moderne, pipeline di integrazione affidabili, governance dei modelli. Senza
                queste basi, ogni progetto AI &egrave; destinato a restare un proof of concept che
                non raggiunge mai la produzione.
              </p>
              <p>
                Il mid-market italiano ha bisogno di qualcuno che comprenda entrambi i mondi —
                il legacy da rispettare e il futuro da costruire — e che sappia tracciare un
                percorso realistico dall&apos;uno all&apos;altro. Questo &egrave; il ruolo del Fractional CTO:
                non vendere tecnologia, ma governarla. Non aggiungere complessit&agrave;, ma ridurla.
                Non promettere rivoluzioni, ma costruire evoluzioni sostenibili, misurabili,
                quarter dopo quarter.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Cosa fa un Fractional CTO in pratica
              </h2>
              <p className="mb-4">
                Il ruolo operativo di un Fractional CTO varia in base alle esigenze
                dell&apos;organizzazione, ma si articola tipicamente in quattro aree chiave:
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">Governance AI e strategia tecnologica.</strong>{" "}
                Definizione della roadmap tecnologica allineata agli obiettivi di business.
                Valutazione di make-vs-buy per ogni componente dell&apos;infrastruttura.
                Framework di governance per l&apos;adozione dell&apos;AI — quali use case hanno ROI
                reale, quali modelli adottare (LLM commerciali vs open-source vs fine-tuned),
                come gestire dati sensibili in conformit&agrave; con{" "}
                <Link href="/research/legge-132-2025" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  AI Act e normativa italiana
                </Link>. Questo include la definizione di policy per l&apos;uso dell&apos;AI generativa
                da parte dei dipendenti, la selezione degli strumenti e il monitoraggio
                degli output attraverso pipeline di{" "}
                <Link href="/services/applied-ai" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Applied AI
                </Link>{" "}
                governabili.
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">Architettura e piattaforme.</strong>{" "}
                Revisione dell&apos;architettura esistente. Design di architetture target —
                microservizi, event-driven, data mesh/lakehouse. Selezione dello stack
                tecnologico. Definizione di standard di sviluppo, CI/CD, observability.
                Per le aziende che necessitano di{" "}
                <Link href="/services/data-platforms" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  data platform
                </Link>{" "}
                moderne o di{" "}
                <Link href="/services/enterprise-integration" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  integrazione enterprise
                </Link>, il Fractional CTO progetta l&apos;architettura complessiva e ne supervisiona
                l&apos;implementazione.
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">Team enablement.</strong>{" "}
                Valutazione delle competenze del team tecnico esistente. Definizione di
                percorsi di crescita. Hiring plan per le figure mancanti. Mentoring dei
                tech lead. Introduzione di pratiche engineering moderne — code review,
                architettura documentata, ADR (Architecture Decision Records), sprint
                strutturati. L&apos;obiettivo non &egrave; creare dipendenza dal Fractional CTO,
                ma costruire autonomia interna progressiva.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Vendor selection e governance fornitori.</strong>{" "}
                Valutazione indipendente dei fornitori tecnologici. Negoziazione contratti.
                Definizione di SLA e KPI. Review del codice e dei deliverable dei fornitori
                esterni. Il Fractional CTO rappresenta gli interessi dell&apos;azienda, non
                quelli del vendor — un valore inestimabile per organizzazioni che spesso
                si trovano in asimmetria informativa rispetto ai propri fornitori IT.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Profilo: Corrado Patierno — 25+ anni di esperienza enterprise
              </h2>
              <p className="mb-4">
                Il servizio di Fractional CTO di Dynamics Consulting &egrave; guidato direttamente
                da <strong className="text-[#E6EDF3]">Corrado Patierno</strong>, fondatore dell&apos;azienda
                e architetto della piattaforma{" "}
                <Link href="/platform" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Nexus MDS Core
                </Link>. Con oltre 25 anni di esperienza in sistemi enterprise, Corrado porta
                un profilo che combina profondit&agrave; tecnica e visione strategica — una
                combinazione rara nel mercato italiano della consulenza.
              </p>
              <p className="mb-4">
                Le competenze core includono: ecosistema <strong className="text-[#E6EDF3]">Microsoft Dynamics</strong>{" "}
                (CRM, ERP, Power Platform, Dataverse), architetture{" "}
                <strong className="text-[#E6EDF3]">AI e LLM</strong> (pipeline RAG, inferenza on-premise,
                governance degli output), <strong className="text-[#E6EDF3]">data platform</strong>{" "}
                (lakehouse, ETL/ELT, data mesh), <strong className="text-[#E6EDF3]">Kubernetes</strong>{" "}
                e infrastrutture cloud-native, e integrazione di sistemi complessi in
                contesti enterprise regolamentati.
              </p>
              <p>
                A differenza dei Fractional CTO generalisti — spesso ex-startup founder
                con esperienza prevalentemente in contesti B2C e SaaS — il profilo di
                Corrado &egrave; radicato nell&apos;enterprise mid-market: ERP, CRM, integrazioni
                B2B, compliance, dati sensibili, sistemi mission-critical. Questo significa
                comprendere le dinamiche reali delle aziende manifatturiere, farmaceutiche,
                energetiche e sanitarie che costituiscono il tessuto produttivo lombardo.
                Per approfondire il background e la filosofia dell&apos;azienda, visita la
                pagina{" "}
                <Link href="/about" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Chi siamo
                </Link>.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Differenza tra Fractional CTO e consulente tradizionale
              </h2>
              <p className="mb-4">
                La distinzione &egrave; fondamentale e spesso fraintesa. Un{" "}
                <strong className="text-[#E6EDF3]">consulente IT tradizionale</strong> viene ingaggiato
                per un deliverable specifico: un assessment, un documento di architettura,
                una selezione vendor. Consegna il suo output e il rapporto si chiude.
                Non ha accountability sui risultati a lungo termine. Non partecipa
                all&apos;esecuzione. Non &egrave; presente quando le cose vanno male.
              </p>
              <p className="mb-4">
                Un <strong className="text-[#E6EDF3]">Fractional CTO</strong> opera come un membro
                del C-level. Ha accesso alla strategia aziendale. Partecipa alle riunioni
                del board. Risponde al CEO. Ha visibilit&agrave; su budget, risorse, priorit&agrave;
                competitive. Questa posizione gli permette di prendere decisioni tecnologiche
                informate dal contesto di business — non decisioni tecnicamente corrette
                ma strategicamente irrilevanti, come troppo spesso accade con la consulenza
                tradizionale.
              </p>
              <p>
                In concreto: il consulente ti dice &quot;dovreste adottare Kubernetes&quot;.
                Il Fractional CTO valuta se il vostro team ha le competenze per gestirlo,
                se il vostro budget lo sostiene, se i vostri workload lo giustificano,
                e se s&igrave;, progetta il percorso di adozione, seleziona il partner
                implementativo, supervisiona la migrazione e forma il team. La differenza
                &egrave; tra raccomandazione e responsabilit&agrave;.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Il modello di engagement: come funziona
              </h2>
              <p className="mb-4">
                L&apos;engagement Fractional CTO di Dynamics Consulting si articola in tre fasi:
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">Fase 1 — Assessment tecnologico (2-3 settimane).</strong>{" "}
                Mappatura completa dell&apos;infrastruttura esistente: applicativi, integrazioni,
                data flow, team, processi, debito tecnologico. Interviste con stakeholder
                chiave — CEO, COO, responsabili di funzione, team IT. L&apos;output &egrave; un
                documento di assessment con gap analysis, risk map e raccomandazioni
                prioritizzate. Questa fase &egrave; propedeutica e pu&ograve; essere acquisita
                indipendentemente.
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">Fase 2 — Piano strategico e roadmap (4-6 settimane).</strong>{" "}
                Sulla base dell&apos;assessment, viene definita una roadmap tecnologica con
                milestone trimestrali, budget stimato, risorse necessarie e KPI misurabili.
                Il piano copre tipicamente un orizzonte di 12-18 mesi e viene validato
                con il CEO e il board prima dell&apos;esecuzione.
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">Fase 3 — Esecuzione e governance continuativa.</strong>{" "}
                Il Fractional CTO opera con un impegno concordato — tipicamente 2-4
                giornate al mese per advisory strategico, 8-12 per engagement operativi.
                Partecipa a sprint review, architettura review, vendor meeting, board meeting.
                Produce un report mensile per il CEO con avanzamento roadmap, rischi,
                decisioni prese e prossimi step. L&apos;impegno viene rivisto trimestralmente
                e pu&ograve; essere scalato in base alle esigenze.
              </p>
              <p>
                Il modello &egrave; progettato per essere trasparente e misurabile. Nessun
                lock-in contrattuale pluriennale. Nessuna dipendenza strutturale.
                L&apos;obiettivo dichiarato &egrave; costruire le competenze interne fino al punto
                in cui l&apos;azienda pu&ograve; assumere un CTO full-time o gestire la funzione
                tecnologica in autonomia. Il Fractional CTO di successo &egrave; quello che
                rende s&eacute; stesso non pi&ugrave; necessario.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Casi concreti di intervento
              </h2>
              <p className="mb-4">
                L&apos;approccio Fractional CTO di Dynamics Consulting si traduce in risultati
                misurabili. Ecco alcuni esempi dal nostro portfolio:
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">IATP — Reverse engineering AI-driven di piattaforme legacy.</strong>{" "}
                Un&apos;azienda industriale con una piattaforma software critica, sviluppata
                da un unico fornitore storico senza documentazione, si trovava in una
                situazione di vendor lock-in totale. L&apos;intervento ha previsto l&apos;utilizzo
                di AI per il reverse engineering del codice sorgente, la ricostruzione
                della documentazione tecnica e la definizione di un piano di migrazione
                verso un&apos;architettura moderna e manutenibile. Il caso completo &egrave;
                documentato nel{" "}
                <Link href="/case-studies/iatp" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  case study IATP
                </Link>.
              </p>
              <p className="mb-4">
                <strong className="text-[#E6EDF3]">Federfarma — Data platform per la distribuzione farmaceutica.</strong>{" "}
                Un&apos;organizzazione nel settore della distribuzione farmaceutica necessitava
                di una piattaforma dati unificata per consolidare flussi provenienti da
                centinaia di farmacie, sistemi di magazzino e piattaforme di compliance.
                L&apos;intervento ha incluso la progettazione dell&apos;architettura dati, la
                selezione dello stack tecnologico e la supervisione dell&apos;implementazione.
                Dettagli nel{" "}
                <Link href="/case-studies/federfarma" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  case study Federfarma
                </Link>.
              </p>
              <p>
                <strong className="text-[#E6EDF3]">Sorgenia — Integrazione enterprise nel settore energy.</strong>{" "}
                Un operatore energetico con sistemi eterogenei — billing, CRM, field
                service, data warehouse — necessitava di un&apos;architettura di integrazione
                coerente per eliminare i silos informativi e abilitare analytics avanzati.
                L&apos;intervento ha coperto la definizione dell&apos;architettura di integrazione,
                la governance dei flussi dati e l&apos;allineamento tra IT e business.
                Approfondisci nel{" "}
                <Link href="/case-studies/sorgenia" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  case study Sorgenia
                </Link>.
              </p>
            </div>

            {/* 8 — FAQ visibile */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">
                Domande frequenti sul servizio di Fractional CTO
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">
                    Cos&apos;&egrave; un Fractional CTO?
                  </h3>
                  <p>
                    Un Fractional CTO &egrave; un Chief Technology Officer che opera part-time
                    o a progetto per una o pi&ugrave; aziende. Offre la stessa leadership
                    strategica di un CTO full-time — governance tecnologica, architettura,
                    selezione vendor, gestione team — ma con un impegno frazionato e un
                    costo proporzionato, ideale per PMI e aziende mid-market che necessitano
                    di seniority enterprise senza il peso di un&apos;assunzione C-level.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">
                    Quanto costa un Fractional CTO a Milano?
                  </h3>
                  <p>
                    Il costo varia in base all&apos;impegno richiesto. Si parte da 2-4 giornate
                    al mese per advisory strategico fino a 8-12 giornate per engagement
                    operativi. Rispetto a un CTO full-time con RAL di 120-180k&euro; pi&ugrave;
                    benefit, il modello frazionato riduce il costo del 60-80% mantenendo
                    lo stesso livello di seniority e profondit&agrave; tecnica.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">
                    Che differenza c&apos;&egrave; tra un Fractional CTO e un consulente IT tradizionale?
                  </h3>
                  <p>
                    Un consulente IT tradizionale fornisce raccomandazioni e deliverable
                    puntuali. Un Fractional CTO si integra nel team dirigenziale, partecipa
                    alle decisioni strategiche, ha accountability sui risultati tecnologici
                    e costruisce capability interne. Non &egrave; un fornitore esterno: &egrave; un
                    membro del C-level a tempo parziale, con responsabilit&agrave; diretta
                    sui risultati.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">
                    Per quali aziende &egrave; adatto il servizio di Fractional CTO?
                  </h3>
                  <p>
                    Il servizio &egrave; ideale per aziende mid-market con 50-500 dipendenti che
                    affrontano trasformazione digitale, adozione AI, modernizzazione di
                    sistemi legacy o integrazione di piattaforme enterprise. Settori tipici:
                    manufacturing, pharma, healthcare, energy, logistica e servizi finanziari.
                    L&apos;area di Milano e Lombardia &egrave; il nostro mercato primario.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">
                    Come funziona l&apos;engagement con Dynamics Consulting?
                  </h3>
                  <p>
                    L&apos;engagement inizia con un assessment tecnologico di 2-3 settimane per
                    mappare l&apos;infrastruttura esistente, identificare gap e definire priorit&agrave;.
                    Segue un piano di intervento con milestone trimestrali. Il Fractional CTO
                    partecipa a board meeting, sprint review e decisioni architetturali, con
                    reporting mensile al CEO. L&apos;impegno viene rivisto trimestralmente e non
                    prevede lock-in contrattuali.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">
                    Quali competenze specifiche porta Corrado Patierno come Fractional CTO?
                  </h3>
                  <p>
                    Corrado Patierno porta 25+ anni di esperienza in sistemi enterprise:
                    ecosistema Microsoft Dynamics (CRM, ERP, Power Platform, Dataverse),
                    architetture AI e LLM on-premise, data platform (lakehouse, ETL/ELT,
                    data mesh), Kubernetes e infrastrutture cloud-native, e integrazione
                    di sistemi complessi in contesti enterprise regolamentati. Ha progettato
                    e guidato la piattaforma{" "}
                    <Link href="/platform" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                      Nexus MDS Core
                    </Link>{" "}
                    per AI sovrana in settori regolamentati.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Tech Badges ── */}
            <div className="pt-8 flex flex-wrap gap-2">
              <TechBadge label="Microsoft Dynamics" variant="cyan" />
              <TechBadge label="Kubernetes" variant="cyan" />
              <TechBadge label="AI / LLM" variant="green" />
              <TechBadge label="Data Platform" variant="green" />
              <TechBadge label="RAG Pipeline" variant="green" />
              <TechBadge label="Nexus MDS Core" variant="amber" />
              <TechBadge label="Enterprise Integration" />
              <TechBadge label="Power Platform" />
              <TechBadge label="CI/CD" />
              <TechBadge label="Governance AI" variant="amber" />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          title="Parliamo del tuo progetto"
          subtitle="Infrastruttura AI da costruire, sistemi legacy da modernizzare, o piattaforme da connettere al futuro? Contattaci."
          ctaLabel="Inizia la conversazione →"
        />
      </main>
      <Footer />
    </>
  );
}
