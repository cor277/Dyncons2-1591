'use client'
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';


// ─── FASE DEFINITIONS ─────────────────────────────────────────────────────────
const FASI = {
  1: { label:"F1 — Kick-off e Scoping",   short:"Kick-off",      colore:"#185FA5", bg:"#E3F2FD",
       desc:"Avvio formale, sponsor, scope, governance del progetto. Prerequisito di tutto: senza autorità e perimetro definiti nessuna altra attività ha efficacia." },
  2: { label:"F2 — Risk Assessment",       short:"Risk Assessment",colore:"#1B5E20", bg:"#E8F5E9",
       desc:"Analisi rischi, inventario asset, contesto. Prima di progettare qualsiasi controllo serve sapere cosa si protegge e da cosa." },
  3: { label:"F3 — Gap Analysis",          short:"Gap Analysis",   colore:"#4A148C", bg:"#EDE7F6",
       desc:"Verifica controlli esistenti vs. richiesti. Produce il gap register che pilota le fasi successive." },
  4: { label:"F4 — Progettazione",         short:"Progettazione",  colore:"#004D40", bg:"#E0F2F1",
       desc:"Design dei nuovi controlli, policy, architettura. Nulla si implementa senza aver progettato." },
  5: { label:"F5 — Implementazione",       short:"Implementazione",colore:"#B71C1C", bg:"#FFEBEE",
       desc:"Sviluppo e deployment dei controlli. La fase più lunga in GU — tipicamente sprint Agile iterativi." },
  6: { label:"F6 — Test e Validazione",    short:"Test",           colore:"#E65100", bg:"#FBE9E7",
       desc:"Verifica che i controlli implementati funzionino davvero. UAT con cliente, test di efficacia, POC." },
  7: { label:"F7 — Certificazione/Audit",  short:"Certificazione", colore:"#4E342E", bg:"#EFEBE9",
       desc:"Audit formale, certificazione, sign-off. Non eseguibile prima del completamento di F5 e F6." },
  8: { label:"F8 — Monitoraggio",          short:"Monitoraggio",   colore:"#0D47A1", bg:"#E3F2FD",
       desc:"Attività ongoing: KPI, revisione periodica, gestione incidenti live, aggiornamenti normativi." },
};

// ─── FRAMEWORKS ───────────────────────────────────────────────────────────────
const FRAMEWORKS = [
  { codice:"SOX-IT", colore:"#185FA5", bgLight:"#E6F1FB", nome:"SOX IT",
    desc:"Sarbanes-Oxley — Dynamics Consulting SOX IT Model", gu_minimo:82, voci:42,
    figure:["PM","BA","CTO","Team_IT"],
    nota:"42 voci · 9 gruppi · ITGC PCAOB AS 2201 + COSO 2013 + Application Controls",
    groups:["F1-F7 sequenziale"] },
  { codice:"NIS2", colore:"#27500A", bgLight:"#EAF3DE", nome:"NIS2",
    desc:"Network & Information Security Directive EU 2022/2555", gu_minimo:62, voci:13,
    figure:["PM","CTO","CISO","Team_IT"],
    nota:"13 voci · Art. 20-23 · Sanzioni €10M o 2% fatturato · Dal 17/10/2024" },
  { codice:"AI-ACT", colore:"#533AB7", bgLight:"#EEEDFE", nome:"AI Act",
    desc:"EU Artificial Intelligence Act — Regolamento UE 2024/1689", gu_minimo:52, voci:11,
    figure:["CTO","BA","PM"], condizionale:true,
    condizione:"Solo se il progetto include sviluppo o deployment di sistemi AI",
    nota:"11 voci · Art. 6-73 · Alto rischio obbligatorio da agosto 2026" },
  { codice:"GS1", colore:"#0F6E56", bgLight:"#E1F5EE", nome:"GS1",
    desc:"Global Supply Chain Standards — EPC/RFID + EPCIS 2.0", gu_minimo:36, voci:8,
    figure:["CTO","BA"],
    nota:"8 voci · GS1 General Specifications 24.0 · DPP tessile obbligatorio 2026" },
  { codice:"GDPR", colore:"#712B13", bgLight:"#FAECE7", nome:"GDPR",
    desc:"General Data Protection Regulation EU 2016/679", gu_minimo:38, voci:10,
    figure:["PM","BA","CTO","DPO"],
    nota:"10 voci · Art. 5-99 · Qualsiasi trattamento dati personali nell'UE" },
  { codice:"DORA", colore:"#633806", bgLight:"#FAEEDA", nome:"DORA",
    desc:"Digital Operational Resilience Act EU 2022/2554", gu_minimo:54, voci:10,
    figure:["CTO","PM","BA","CISO"], condizionale:true, condizione:"Solo per clienti nel settore finanziario",
    nota:"10 voci · Art. 5-44 · In vigore gen. 2025 · TLPT obbligatorio enti significativi" },
  { codice:"ENS", colore:"#791F1F", bgLight:"#FCEBEB", nome:"ENS",
    desc:"Esquema Nacional de Seguridad — Real Decreto 311/2022", gu_minimo:40, voci:9,
    figure:["PM","CTO","BA"], condizionale:true,
    condizione:"Obbligatorio per contratti con PA spagnola",
    nota:"9 voci · RD 311/2022 · Certificazione CCN-STIC biennale" },
  { codice:"ISO27001", colore:"#0D47A1", bgLight:"#E3F2FD", nome:"ISO 27001",
    desc:"Information Security Management System — ISO/IEC 27001:2022", gu_minimo:105, voci:29,
    figure:["CISO","CTO","PM","BA"],
    nota:"29 voci · 93 controlli Annex A · Certificazione globale · Prerequisito contratti enterprise" },
  { codice:"ISO56001", colore:"#E65100", bgLight:"#FBE9E7", nome:"ISO 56001",
    desc:"Innovation Management System — ISO 56001:2024", gu_minimo:38, voci:12,
    figure:["Innovation_Manager","PM","CTO","BA"],
    nota:"12 voci · Prima edizione 2024 · Struttura HLS · Allineato Innovation Manager MISE" },
];

// ─── OVERLAPS ─────────────────────────────────────────────────────────────────
const OVERLAPS = [
  { id:"OVL-01", label:"Access Controls / IAM", frameworks:["SOX-IT","NIS2","GDPR","DORA","ISO27001"], sconto:35,
    nota:"Un unico IAM framework con documentazione per ciascun framework. NIS2 richiede MFA esplicita; GDPR richiede accessi minimi ai dati personali; ISO 27001 A.5.15-5.18 copre l'intero processo." },
  { id:"OVL-02", label:"Audit Trail / Logging", frameworks:["SOX-IT","NIS2","GDPR","AI-ACT","DORA","ISO27001"], sconto:55,
    nota:"Stessa infrastruttura tecnica. Differiscono solo le retention: SOX 7 anni, AI Act ≥6 mesi, GDPR proporzionale, NIS2 12 mesi. Un log system unico con retention multipla copre tutto. ISO 27001 A.8.15." },
  { id:"OVL-03", label:"Change Management", frameworks:["SOX-IT","NIS2","AI-ACT","ISO27001"], sconto:30,
    nota:"Unico processo CM con documentazione cross-framework. AI Act richiede re-valutazione AI risk dopo modifiche. ISO 27001 A.8.32 definisce il processo base." },
  { id:"OVL-04", label:"DR / Business Continuity", frameworks:["SOX-IT","NIS2","DORA","ISO27001"], sconto:45,
    nota:"BCP/DRP integrato con capitoli dedicati. TLPT DORA aggiuntivo non sovrapposto. ISO 27001 A.5.29-5.30 copre la dimensione IS della continuità." },
  { id:"OVL-05", label:"Risk Assessment", frameworks:["SOX-IT","NIS2","GDPR","AI-ACT","DORA","ISO27001"], sconto:40,
    nota:"Raccolta dati condivisa; metodologie diverse (COSO, ISO 27005, DPIA, RTS DORA). Un unico RA integrato con output dedicati. ISO 27001 SoA è il documento unificante." },
  { id:"OVL-06", label:"Vendor / Supply Chain", frameworks:["SOX-IT","NIS2","GDPR","DORA","ISO27001"], sconto:35,
    nota:"Stessa due diligence vendor. Clausole diverse: SOX (audit rights+SLA), NIS2 (sicurezza+notifica), GDPR (DPA Art.28), DORA (Art.30), ISO 27001 A.5.19-5.20." },
  { id:"OVL-07", label:"Incident Notification ⚠", frameworks:["NIS2","GDPR"], sconto:20, special:true,
    nota:"CASO SPECIALE. NIS2→ACN 72h (qualsiasi incidente significativo). GDPR→Garante 72h (solo se coinvolge dati personali). Due notifiche parallele verso autorità diverse. Solo la detection è condivisa." },
  { id:"OVL-08", label:"Policy Creation", frameworks:["SOX-IT","NIS2","GDPR","ISO27001"], sconto:30,
    nota:"Policy integrate con sezioni per framework. ISO 27001 A.5.1 richiede un framework di policy coerente — base per le policy specifiche degli altri framework." },
  { id:"OVL-09", label:"Testing e Validazione", frameworks:["SOX-IT","NIS2","AI-ACT","DORA","ISO27001"], sconto:20,
    nota:"Testing framework-specifico. Overlap sulla documentazione condivisa. DORA TLPT è aggiuntivo. ISO 27001 cl. 9.2 (internal audit) è complementare." },
  { id:"OVL-10", label:"Vulnerability Management", frameworks:["ISO27001","NIS2"], sconto:40,
    nota:"Stesso processo tecnico, stessi strumenti. ISO 27001 A.8.8 definisce il controllo; NIS2 Art. 21 ne specifica i requisiti per settori essenziali." },
  { id:"OVL-11", label:"Incident Response Process", frameworks:["ISO27001","NIS2","DORA"], sconto:35,
    nota:"Struttura IRP condivisa. Differenze: NIS2 aggiunge notifica ACN, DORA aggiunge notifica autorità finanziarie in 4h. Un IRP unico con appendici di notifica." },
  { id:"OVL-12", label:"Security Awareness Training", frameworks:["ISO27001","NIS2"], sconto:45,
    nota:"Stesso programma di formazione. ISO 27001 A.6.3 e NIS2 Art. 20 richiedono entrambi training documentato annuale con attestazione." },
];

// ─── ITEMS RAW (generated from compliance_catalogs.json v5.0) ────────────────
const ITEMS_RAW = [
// SOX-IT
  { codice:"SOX-IT-GOV-01", fw:"SOX-IT", gruppo:"A. Governance e avvio", titolo:"Incontro con la direzione e definizione perimetro", gu_min:2, figure:["PM","BA","CTO"], rischio:"Senza sponsor executive il progetto non ha autorità per accedere ai sistemi necessari.", fase_num:1, deliverable:"Verbale riunione kick-off, sponsor letter", guida:"Riunione formale con responsabile amministrativo, direttore IT e direzione operativa. Si definisce il perimetro del progetto SOX, si formalizza lo sponsor executive, si allineano le aspettative. Output: verbale firmato con perimetro approvato e sponsor identificato.", gu_breakdown:"~2 GU: PM, BA, CTO. Preparazione agenda (0.3 GU) + riunione (0.5 GU) + verbale e follow-up (0.5 GU) + approvazione (0.2 GU).", aggiunto:false },
  { codice:"SOX-IT-GOV-02", fw:"SOX-IT", gruppo:"A. Governance e avvio", titolo:"Definizione ruoli, responsabilità e RACI", gu_min:3, figure:["PM","BA"], rischio:"Senza RACI formalizzato nessuno è accountable per i controlli.", fase_num:1, deliverable:"RACI matrix, organigramma progetto", guida:"Mappatura formale di tutti i ruoli nel progetto di compliance: chi approva (A), chi esegue (R), chi viene consultato (C), chi viene informato (I). Include identificazione del responsabile della revisione interna, del referente IT, del referente amministrativo. La RACI è il documento di governance che l'auditor chiede per primo.", gu_breakdown:"~3 GU: PM, BA. Workshop con stakeholder (1 GU) + redazione RACI matrix (1 GU) + revisioni e approvazione (1 GU).", aggiunto:false },
  { codice:"SOX-IT-RISK-01", fw:"SOX-IT", gruppo:"B. Valutazione rischi", titolo:"Esecuzione Risk Assessment IT formale", gu_min:5, figure:["BA","CTO","Dir. Rev. Interna"], rischio:"Senza risk assessment i controlli potrebbero non coprire i rischi più significativi.", fase_num:2, deliverable:"Risk register (probabilità × impatto), report RA", guida:"Risk assessment formale dei sistemi IT in scope SOX. Metodologia COSO-based: identificazione degli asset IT che supportano il financial reporting, analisi delle minacce (errori, frodi, interruzioni), valutazione probabilità × impatto, prioritizzazione. Output: registro rischi IT con ranking che guida la selezione dei controlli da verificare prima.", gu_breakdown:"~5 GU: BA, CTO, Dir. Rev. Interna. Raccolta dati e interviste (1.5 GU) + analisi rischi (1.5 GU) + documentazione risk register (1.5 GU) + review con stakeholder (0.5 GU).", aggiunto:false, overlap_id:"OVL-05" },
  { codice:"SOX-IT-RISK-02", fw:"SOX-IT", gruppo:"B. Valutazione rischi", titolo:"Selezione aree e sistemi significativi in scope SOX", gu_min:4, figure:["BA","CTO","Resp. Amm."], rischio:"Senza selezione formale l'audit non può essere condotto in modo efficiente.", fase_num:2, deliverable:"Scoping document, matrice sistemi in scope", guida:"Identificazione formale delle aree IT che supportano il financial reporting e sono quindi in scope SOX (Section 302/404). Mapping applicazioni → processi finanziari: ERP, consolidamento, reporting, tesoreria. Esclusioni documentate con giustificazione. L'auditor esterno verificherà che tutti i sistemi significativi siano inclusi.", gu_breakdown:"~4 GU: BA, CTO, Resp. Amm. Interviste ai process owner (1 GU) + mapping applicazioni-processi (1.5 GU) + documento scoping (1 GU) + approvazione (0.5 GU).", aggiunto:false },
  { codice:"SOX-IT-ITGC-01", fw:"SOX-IT", gruppo:"C. ITGC", titolo:"Verifica controlli di accesso logico (AC)", gu_min:5, figure:["Team_IT","BA"], rischio:"Controllo ITGC più frequentemente testato. Assenza = finding automatico.", fase_num:2, deliverable:"Access control workpaper, IAM configuration evidence", guida:"Verifica che le procedure di accesso logico ai sistemi in scope SOX siano adeguate. Si esaminano: politica di gestione utenze, processo di provisioning/deprovisioning (entrata/uscita dipendenti), policy password, MFA per accessi critici. L'auditor testa campioni di account: chi ha accesso a cosa, chi ha approvato, quando è stato revocato.", gu_breakdown:"~5 GU: Team_IT, BA. Raccolta evidenze (1.5 GU) + analisi campioni (1.5 GU) + documentazione walkthrough (1.5 GU) + management letter bozza (0.5 GU).", aggiunto:false, overlap_id:"OVL-01" },
  { codice:"SOX-IT-ITGC-02", fw:"SOX-IT", gruppo:"C. ITGC", titolo:"Segregation of Duties (SoD) sui sistemi in scope", gu_min:6, figure:["BA","Resp. Amm.","CTO"], rischio:"Conflitti SoD non gestiti sono finding di alta gravità per auditor PCAOB.", fase_num:2, deliverable:"SoD matrix, conflict register, compensating controls", guida:"Analisi e documentazione della separazione dei compiti sui sistemi che supportano il financial reporting. Verifica che nessun utente possa eseguire da solo transazioni incompatibili: creare fornitore + approvare pagamento, registrare ricevimento merci + emettere fattura, ecc. Si produce una SoD matrix, si identificano i conflitti, si definiscono i controlli compensativi per quelli inevitabili.", gu_breakdown:"~6 GU: BA, Resp. Amm., CTO. Raccolta ruoli e permessi (1.5 GU) + costruzione SoD matrix (2 GU) + analisi conflitti (1.5 GU) + compensating controls documentation (1 GU).", aggiunto:true, nota_aggiunta:"Gap vs MPP originale" },
  { codice:"SOX-IT-ITGC-03", fw:"SOX-IT", gruppo:"C. ITGC", titolo:"User Access Review periodico (UAR)", gu_min:3, figure:["Team_IT","Dir. IT"], rischio:"Senza UAR periodico il privilege creep non viene rimosso.", fase_num:4, deliverable:"UAR procedure, UAR template, first UAR report", guida:"Definizione e prima esecuzione del processo di revisione periodica degli accessi utente (User Access Review). Il UAR è una verifica sistematica, almeno semestrale, di chi ha accesso a cosa nei sistemi in scope SOX. I manager di business certificano gli accessi dei loro riporti. Gli accessi non certificati vengono revocati entro un termine definito. Si produce la procedura e si esegue il primo ciclo.", gu_breakdown:"~3 GU: Team_IT, Dir. IT. Progettazione processo UAR (1 GU) + predisposizione tool/template (0.5 GU) + prima esecuzione e documentazione (1.5 GU).", aggiunto:true, nota_aggiunta:"Gap vs MPP originale" },
  { codice:"SOX-IT-ITGC-04", fw:"SOX-IT", gruppo:"C. ITGC", titolo:"Privileged Access Management (PAM)", gu_min:4, figure:["CTO","Team_IT"], rischio:"Account privilegiati non controllati sono il principale vettore di attacco e manipulation finanziaria.", fase_num:4, deliverable:"PAM policy, privileged account inventory, session logging config", guida:"Gestione e controllo degli accessi privilegiati: account amministratore, DBA, superuser. Si produce un inventario completo degli account privilegiati, si definisce la password rotation policy, si valuta l'implementazione di just-in-time access (JIT) e il logging delle sessioni privilegiate. Per SOX è critico che gli amministratori dei sistemi finanziari non possano anche modificare i dati senza traccia.", gu_breakdown:"~4 GU: CTO, Team_IT. Inventario account privilegiati (1 GU) + policy design (1 GU) + configurazione logging sessioni (1 GU) + documentazione (1 GU).", aggiunto:true, nota_aggiunta:"Gap vs MPP originale" },
  { codice:"SOX-IT-ITGC-05", fw:"SOX-IT", gruppo:"C. ITGC", titolo:"Verifica procedure di Change Management", gu_min:4, figure:["CTO","Team_IT"], rischio:"Modifiche non controllate ai sistemi finanziari possono introdurre errori o manipolazioni.", fase_num:2, deliverable:"Change management workpaper, sample testing evidence", guida:"Verifica che le modifiche ai sistemi IT in scope SOX siano gestite attraverso un processo formale: richiesta documentata (RFC), approvazione pre-implementazione, testing in ambiente separato, deployment autorizzato, rollback plan. Si testa un campione di change recenti: ogni change ha documentazione completa? Chi ha approvato? È stata eseguita una procedura di test? L'auditor cerca change non autorizzate.", gu_breakdown:"~4 GU: CTO, Team_IT. Raccolta campione di change (1 GU) + analisi documentazione (1.5 GU) + test walkthrough (1 GU) + workpaper (0.5 GU).", aggiunto:false, overlap_id:"OVL-03" },
  { codice:"SOX-IT-ITGC-10", fw:"SOX-IT", gruppo:"C. ITGC", titolo:"Audit trail e log integrity", gu_min:4, figure:["CTO","Team_IT"], rischio:"Senza audit trail le transazioni finanziarie potrebbero essere state alterate senza evidenza.", fase_num:5, deliverable:"Log management architecture, retention policy, immutability proof", guida:"Verifica che i sistemi in scope SOX producano audit trail completi e immutabili. Si controlla: quali eventi vengono loggati (transazioni finanziarie, accessi, modifiche configurazione), dove sono conservati i log (separati dai sistemi operativi), chi può accedere (solo in lettura), per quanto tempo (SOX: 7 anni). Si testa che i log non siano stati modificati e che siano integri.", gu_breakdown:"~4 GU: CTO, Team_IT. Mappatura log esistenti (1 GU) + verifica integrità e retention (1.5 GU) + gap identification e configurazione (1 GU) + documentazione (0.5 GU).", aggiunto:true, nota_aggiunta:"Gap vs MPP originale", overlap_id:"OVL-02" },
  { codice:"SOX-IT-ITGC-08", fw:"SOX-IT", gruppo:"C. ITGC", titolo:"Verifica procedure di Disaster Recovery", gu_min:3, figure:["CTO","Team_Infra"], rischio:"Sistemi finanziari non recuperabili in tempi adeguati compromettono il reporting.", fase_num:2, deliverable:"DR procedure review, RTO/RPO evidence, test report", guida:"Verifica dell'esistenza e dell'adeguatezza delle procedure di DR per i sistemi finanziari. Si esamina il DRP documentato, si verificano RTO/RPO definiti, si controlla se c'è evidenza di test DR recenti con risultati. L'auditor SOX vuole vedere che l'azienda possa ripristinare i sistemi di financial reporting entro tempi che permettano il closing periodico.", gu_breakdown:"~3 GU: CTO, Team_Infra. Revisione documentazione DRP (1 GU) + verifica test evidence (1 GU) + gap analysis e report (1 GU).", aggiunto:false, overlap_id:"OVL-04" },
  { codice:"SOX-IT-ITGC-11", fw:"SOX-IT", gruppo:"C. ITGC", titolo:"Verifica SLA e contratti fornitori IT critici", gu_min:2, figure:["PM","Resp. Comm."], rischio:"Fornitori IT senza clausole di audit SOX non sono accessibili durante la verifica esterna.", fase_num:2, deliverable:"Vendor contract review, SLA compliance matrix", guida:"Revisione dei contratti con i fornitori IT critici per i sistemi in scope SOX (cloud provider, SaaS ERP, outsourcer). Si verifica la presenza di: SLA documentati, diritti di audit del cliente, responsabilità in caso di breach, limitazioni al subappalto. I fornitori che gestiscono sistemi finanziari senza clausole di audit SOX possono bloccare l'audit esterno.", gu_breakdown:"~2 GU: PM, Resp. Comm. Raccolta contratti critici (0.5 GU) + revisione clausole rilevanti (1 GU) + gap matrix (0.5 GU).", aggiunto:false, overlap_id:"OVL-06" },
  { codice:"SOX-IT-POL-02", fw:"SOX-IT", gruppo:"H. Policy", titolo:"Gap identification formale (gap register)", gu_min:3, figure:["BA","CTO"], rischio:"Senza gap register non è dimostrabile di aver identificato sistematicamente la non-conformità.", fase_num:3, deliverable:"Gap register con severity, remediation estimates", guida:"Consolidamento di tutti i gap identificati nelle fasi di verifica ITGC e Application Controls in un registro formale. Ogni gap è classificato: severity (critico/alto/medio/basso), impatto sul financial reporting, stima effort di remediation. Il gap register è il documento che l'auditor esterno usa per concordare il piano di remediation e per tracking nelle audit successive.", gu_breakdown:"~3 GU: BA, CTO. Consolidamento finding dalle attività precedenti (1 GU) + classificazione severity (1 GU) + stima effort remediation (1 GU).", aggiunto:false },
  { codice:"SOX-IT-COMPL-01", fw:"SOX-IT", gruppo:"E. Compliance SOX", titolo:"Whistleblower controls (SOX Section 301)", gu_min:2, figure:["PM","Resp. Amm."], rischio:"SOX Section 301 richiede esplicitamente canali anonimi per segnalazioni. Assenza = non conformità legale.", fase_num:4, deliverable:"Whistleblower policy, canale anonimo attivo, procedure gestione segnalazioni", guida:"SOX Section 301 richiede che il comitato di audit garantisca procedure per la ricezione anonima di segnalazioni riguardanti contabilità, controlli interni o revisione contabile. Si verifica/implementa: canale anonimo (hotline o piattaforma), policy di non ritorsione, processo di gestione e escalation delle segnalazioni, audit trail delle segnalazioni ricevute.", gu_breakdown:"~2 GU: PM, Resp. Amm. Verifica/configurazione canale anonimo (0.5 GU) + policy redazione (1 GU) + procedure gestione (0.5 GU).", aggiunto:true, nota_aggiunta:"Gap vs MPP originale — SOX 301" },
  { codice:"SOX-IT-AC-01", fw:"SOX-IT", gruppo:"G. Application Controls", titolo:"Identificazione e validazione Application Controls", gu_min:8, figure:["BA","CTO","Team_IT"], rischio:"Application Controls distinti da ITGC — entrambi obbligatori SOX. Categoria mancante nel MPP ITA originale.", fase_num:2, deliverable:"Application controls workpaper, control matrix per sistema", guida:"Verifica dei controlli embedded nelle singole applicazioni in scope SOX. Distinti dagli ITGC (che controllano l'infrastruttura), gli Application Controls governano le transazioni: input validation (dati obbligatori, format check), completeness controls (riconciliazione record), authorization controls (chi può approvare cosa nell'applicazione), report accuracy (output reports corrispondono ai dati di input). Si testa con campioni reali di transazioni.", gu_breakdown:"~8 GU: BA, CTO, Team_IT. Mappatura applicazioni e controlli esistenti (2 GU) + testing campioni per sistema (3 GU) + documentazione workpaper (2 GU) + review (1 GU).", aggiunto:false },
  { codice:"SOX-IT-POL-01", fw:"SOX-IT", gruppo:"H. Policy", titolo:"Creazione policy, standard e procedure mancanti", gu_min:5, figure:["CTO","PM","BA"], rischio:"Controlli senza policy documentata non sono sostenibili e non dimostrabili agli auditor.", fase_num:4, deliverable:"Policy document approvato (IS policy, change management policy, access control policy...)", guida:"Redazione delle policy IT mancanti identificate durante il gap analysis. Ogni policy deve avere: owner, scope, principi, procedure operative collegate, frequenza di revisione, processo di approvazione. Le policy sono il riferimento normativo interno: senza di esse i controlli non hanno una base documentale verificabile. L'auditor chiede le policy prima di testare i controlli.", gu_breakdown:"~5 GU: CTO, PM, BA. Identificazione gap di policy (0.5 GU) + redazione 2-3 policy (2.5 GU) + review legale/compliance (1 GU) + approvazione management (1 GU).", aggiunto:false, overlap_id:"OVL-08" },
  { codice:"SOX-IT-DEV-01", fw:"SOX-IT", gruppo:"I. Implementazione", titolo:"Sprint Agile implementazione controlli — GU da STIMA riga Tecnico", gu_min:1, figure:["CTO","Team_IT","PM","BA"], rischio:"Controlli progettati ma non implementati. SOX richiede efficacia operativa, non solo design.", fase_num:5, deliverable:"Tutti i controlli SOX operativi in produzione, sprint backlog completato", guida:"Ciclo iterativo di sviluppo e deployment di tutti i controlli progettati. I GU di questa voce devono corrispondere esattamente ai GU della riga Tecnico (T) nella STIMA — è lo stesso sprint, non va sommato. Strutturato in sprint di 2 settimane: ogni sprint delivery un sottoinsieme di controlli. Include: daily standup, sprint review con il cliente, retrospective, documentazione operativa.", gu_breakdown:"GU da STIMA Sviluppo/riga T. Non inserire un valore autonomo — sincronizzare con la STIMA. Se la STIMA Tecnico dice X GU, questa voce deve mostrare X.", aggiunto:false },
  { codice:"SOX-IT-TEST-01", fw:"SOX-IT", gruppo:"I. Implementazione", titolo:"POC Testing con il cliente (UAT controlli SOX)", gu_min:8, figure:["BA","PM","Dir. Rev. Interna"], rischio:"Controlli non testati con il cliente potrebbero non essere utilizzabili dagli operatori aziendali.", fase_num:6, deliverable:"UAT report, evidence dei controlli testati, sign-off per controllo", guida:"Testing formale dei nuovi controlli SOX direttamente con il cliente/auditee. Include: walkthrough con il responsabile della revisione interna su ogni controllo implementato, simulazione di un mini-audit sui nuovi controlli, verifica che le evidenze prodotte siano nel formato richiesto dagli auditor esterni, documentazione dei risultati. Ogni controllo viene accettato o rimandato per fix.", gu_breakdown:"~8 GU: BA, PM, Dir. Rev. Interna. Pianificazione sessioni UAT (1 GU) + esecuzione test per controllo (4 GU) + documentazione UAT report (2 GU) + sign-off (1 GU).", aggiunto:false, overlap_id:"OVL-09" },
  { codice:"SOX-IT-IMPL-03", fw:"SOX-IT", gruppo:"I. Implementazione", titolo:"Sign-off formale compliance/management", gu_min:1, figure:["PM","CTO","Resp. Compliance"], rischio:"Modifiche ai controlli senza approvazione formale non sono dimostrabili agli auditor.", fase_num:7, deliverable:"Sign-off sheet firmato, change record approvato", guida:"Ottenimento delle approvazioni formali da parte del management e del team compliance prima del go-live dei controlli in produzione. Checklist di approvazione: ogni controllo con status, test superati, owner designato, data di messa in produzione. La firma del sign-off è il punto di passaggio dalla fase di progetto alla responsabilità operativa dell'organizzazione cliente.", gu_breakdown:"~1 GU: PM, CTO, Resp. Compliance. Predisposizione checklist (0.3 GU) + raccolta firme (0.3 GU) + archiviazione (0.2 GU) + comunicazione (0.2 GU).", aggiunto:false },

// NIS2 — voci chiave
  { codice:"NIS2-GOV-01", fw:"NIS2", gruppo:"A. Governance NIS2", titolo:"Politica di sicurezza informatica approvata dal management", gu_min:5, figure:["PM","CTO","CISO"], rischio:"Art. 21 NIS2 richiede politica esplicita approvata. Assenza = sanzione fino a €10M o 2% fatturato.", fase_num:1, deliverable:"Information Security Policy approvata e pubblicata", guida:"Documento formale approvato dall'organo di direzione che definisce: obiettivi di sicurezza, ruoli e responsabilità (incluso CISO), principi di risk management, requisiti di formazione, frequenza di revisione annuale. L'organo di direzione è responsabile della sua attuazione (Art. 20 NIS2). Il documento deve essere comunicato a tutti i dipendenti e disponibile alle autorità su richiesta.", gu_breakdown:"~5 GU: PM, CTO, CISO. Workshop con management (1 GU) + redazione policy (2 GU) + review legale (1 GU) + approvazione e pubblicazione (1 GU).", aggiunto:false, overlap_id:"OVL-08" },
  { codice:"NIS2-GOV-02", fw:"NIS2", gruppo:"A. Governance NIS2", titolo:"Formazione obbligatoria management cybersecurity (Art. 20)", gu_min:3, figure:["PM","CISO"], rischio:"Art. 20 NIS2 — responsabilità personale del management. Mancata formazione è elemento aggravante.", fase_num:1, deliverable:"Training plan, materiali formazione, attestazioni di completamento", guida:"Programma di formazione periodica (almeno annuale) per l'organo di direzione e i dipendenti che gestiscono sistemi critici. Contenuti minimi: threat landscape settoriale, obblighi NIS2 e conseguenze della non conformità, gestione degli incidenti, tempistiche di notifica. Si producono materiali formativi, si eseguono le sessioni, si raccolgono le attestazioni. Fondamentale per escludere la responsabilità personale in caso di incidente.", gu_breakdown:"~3 GU: PM, CISO. Progettazione moduli formativi (1 GU) + erogazione sessioni (1 GU) + attestazioni e registro formazione (1 GU).", aggiunto:false, overlap_id:"OVL-12" },
  { codice:"NIS2-RISK-01", fw:"NIS2", gruppo:"A. Governance NIS2", titolo:"Risk assessment cyber (Art. 21 comma 1)", gu_min:6, figure:["CISO","BA","Team_IT"], rischio:"NIS2 richiede approccio basato sul rischio. Senza RA documentato non è dimostrabile l'adeguatezza delle misure.", fase_num:2, deliverable:"Risk register cyber, threat landscape analysis, risk treatment plan", guida:"Risk assessment formale delle reti e dei sistemi informativi con metodologia documentata (ISO 27005, OCTAVE o equivalente). Include: threat landscape specifico per il settore (es. healthcare: ransomware, data breach; infrastrutture critiche: APT, supply chain attacks), analisi delle vulnerabilità, valutazione impatto su continuità del servizio essenziale. Output: registro rischi con priorità e piano di trattamento.", gu_breakdown:"~6 GU: CISO, BA, Team_IT. Raccolta dati e interviste (1.5 GU) + threat modelling (1.5 GU) + analisi rischi (1.5 GU) + documentazione e review (1.5 GU).", aggiunto:false, overlap_id:"OVL-05" },
  { codice:"NIS2-INC-01", fw:"NIS2", gruppo:"B. Gestione incidenti NIS2", titolo:"Processo di incident management — rilevamento, analisi, risposta", gu_min:8, figure:["CISO","Team_IT","PM"], rischio:"Art. 21 comma 2 lett. b. Senza procedura la notifica 72h è impossibile da rispettare.", fase_num:5, deliverable:"Incident Response Plan, runbook per scenari principali, playbook SIEM", guida:"Implementazione del processo formale per la gestione degli incidenti cyber: detection (regole SIEM, alert threshold), triage (classificazione severity, definizione 'incidente significativo' per NIS2), containment (procedure di isolamento), eradication, recovery, post-incident review. Si producono runbook per almeno 5 scenari principali (ransomware, data breach, DDoS, supply chain compromise, insider threat). Il processo deve garantire il rispetto delle 24h per il preavviso e 72h per la notifica.", gu_breakdown:"~8 GU: CISO, Team_IT, PM. Design processo (2 GU) + redazione runbook (3 GU) + configurazione alerting (2 GU) + tabletop exercise (1 GU).", aggiunto:false, overlap_id:"OVL-11" },
  { codice:"NIS2-INC-02", fw:"NIS2", gruppo:"B. Gestione incidenti NIS2", titolo:"Notifica incidenti significativi alle autorità — 24h+72h+1mese", gu_min:4, figure:["PM","CISO","CTO"], rischio:"Art. 23 NIS2. Mancata notifica 72h = sanzione autonoma indipendente dall'incidente.", fase_num:4, deliverable:"Procedura notifica 3 fasi, template preavviso/notifica/report finale, contatti ACN", guida:"Implementazione del processo tri-fasico obbligatorio: (1) preavviso all'ACN entro 24h dalla consapevolezza dell'incidente significativo; (2) notifica con prime informazioni entro 72h; (3) relazione finale entro 1 mese. Si predispongono template per ogni fase, si identificano i criteri di 'incidente significativo', si definisce la catena decisionale interna per la notifica, si stabilisce il contatto diretto con l'ACN (Agenzia per la Cybersicurezza Nazionale).", gu_breakdown:"~4 GU: PM, CISO, CTO. Analisi criteri incidente significativo (1 GU) + redazione template notifiche (1.5 GU) + procedure interne escalation (1 GU) + test della procedura (0.5 GU).", aggiunto:false, overlap_id:"OVL-07" },
  { codice:"NIS2-CONT-01", fw:"NIS2", gruppo:"C. Continuità NIS2", titolo:"Business Continuity Plan e Disaster Recovery (Art. 21 lett. c)", gu_min:10, figure:["CTO","Team_Infrastruttura","PM"], rischio:"Art. 21 comma 2 lett. c NIS2. Per OES assenza BCP/DRP è finding critico nelle ispezioni ACN.", fase_num:4, deliverable:"BCP document, DRP, BIA, test report DR annuale", guida:"Documenti di continuità operativa e recovery per i servizi essenziali. Il BCP copre: scenari di crisi (cyberattacco, guasto infrastruttura, emergenza fisica), procedure di attivazione, comunicazione interna e esterna, continuità minima del servizio. Il DRP copre: procedure tecniche di failover e recovery, RTO/RPO verificati. Deve includere la gestione della crisi cyber specifica. Test DR almeno annuale con risultati documentati.", gu_breakdown:"~10 GU: CTO, Team_Infrastruttura, PM. BIA (2 GU) + redazione BCP (3 GU) + redazione DRP (3 GU) + test DR e report (2 GU).", aggiunto:false, overlap_id:"OVL-04" },
  { codice:"NIS2-SUPPLY-01", fw:"NIS2", gruppo:"D. Supply chain NIS2", titolo:"Sicurezza supply chain ICT (Art. 21 lett. d)", gu_min:6, figure:["PM","CISO","CTO"], rischio:"Art. 21 comma 2 lett. d NIS2. Supply chain è vettore attacco in crescita — fornitori non valutati = rischio sistemico.", fase_num:3, deliverable:"Vendor risk register, security assessment template, clausole contrattuali aggiornate", guida:"Inventario dei fornitori ICT critici con valutazione del rischio per ciascuno. Si definiscono i criteri di criticità (fornitori da cui dipende la continuità del servizio essenziale), si eseguono assessment (questionari di sicurezza, richiesta certificazioni ISO 27001/NIS2), si inseriscono clausole di sicurezza nei contratti: requisiti minimi di sicurezza, diritto di audit, obbligo di notifica incidenti al cliente entro 24h, gestione del subappalto.", gu_breakdown:"~6 GU: PM, CISO, CTO. Inventario e classificazione fornitori (1.5 GU) + assessment dei top 5 critici (2 GU) + aggiornamento clausole contrattuali (1.5 GU) + vendor register (1 GU).", aggiunto:false, overlap_id:"OVL-06" },
  { codice:"NIS2-AUTH-01", fw:"NIS2", gruppo:"E. Misure tecniche NIS2", titolo:"MFA, crittografia e comunicazioni sicure (Art. 21 lett. h, j)", gu_min:6, figure:["CTO","Team_IT"], rischio:"Art. 21 NIS2 richiede MFA esplicitamente. Sistemi critici senza MFA = vulnerabilità documentata.", fase_num:5, deliverable:"MFA deployment report, crypto policy, TLS configuration baseline", guida:"Implementazione concreta di: MFA su tutti gli accessi remoti e sui sistemi critici (OTP, TOTP, hardware token, FIDO2), protocolli crittografici aggiornati (TLS 1.3 obbligatorio, deprecazione SSL/TLS <1.2), crittografia dei dati sensibili a riposo (AES-256) e in transito, sistema di comunicazione d'emergenza sicuro alternativo per il management durante un incidente. Si documenta la configurazione e si producono le evidence di deployment.", gu_breakdown:"~6 GU: CTO, Team_IT. Inventory sistemi da proteggere (1 GU) + deployment MFA (2 GU) + configurazione TLS/crittografia (2 GU) + documentazione e test (1 GU).", aggiunto:false, overlap_id:"OVL-01" },
  { codice:"NIS2-VULN-01", fw:"NIS2", gruppo:"E. Misure tecniche NIS2", titolo:"Vulnerability management e patching sistematico", gu_min:5, figure:["CTO","Team_IT"], rischio:"Art. 21 comma 2 lett. e NIS2. Vulnerabilità note non patchate causano il 60%+ dei breach.", fase_num:4, deliverable:"VM process documentation, vulnerability register, patching SLA", guida:"Processo formale di vulnerability management: scan periodici con strumenti dedicati (es. Tenable, Qualys, OpenVAS), prioritizzazione CVE per CVSS score e contesto operativo, SLA di patching documentati (critica ≤7gg, alta ≤30gg, media ≤90gg), processo di eccezioni documentate con risk acceptance firmata, monitoraggio degli zero-day. Include asset inventory come prerequisito, senza il quale gli scan sono incompleti.", gu_breakdown:"~5 GU: CTO, Team_IT. Setup tool VM e primo scan (1.5 GU) + processo e procedure (1.5 GU) + prioritizzazione e plan (1 GU) + documentazione SLA e eccezioni (1 GU).", aggiunto:false, overlap_id:"OVL-10" },
  { codice:"NIS2-LOG-01", fw:"NIS2", gruppo:"E. Misure tecniche NIS2", titolo:"Logging centralizzato e monitoraggio anomalie", gu_min:6, figure:["CTO","Team_IT"], rischio:"Senza logging il tempo di detection è imprevedibile. Notifica 72h impossibile senza detection tempestiva.", fase_num:5, deliverable:"SIEM configuration, log retention policy, alerting rules", guida:"Implementazione di logging centralizzato per tutti i sistemi critici con: raccolta log (agent-based o syslog), correlazione in SIEM o equivalente, retention minima 12 mesi, regole di alerting per scenari di attacco principali (brute force, privilege escalation, lateral movement, data exfiltration), revisione settimanale degli alert critici. Il SIEM è la base tecnica per rispettare i 72h di notifica: se non rilevi l'incidente non puoi notificarlo.", gu_breakdown:"~6 GU: CTO, Team_IT. Architettura logging (1 GU) + deployment e configurazione SIEM (2.5 GU) + regole alerting (1.5 GU) + documentazione e test (1 GU).", aggiunto:false, overlap_id:"OVL-02" },

// AI Act — voci chiave
  { codice:"AIACT-CLASS-01", fw:"AI-ACT", gruppo:"A. Classificazione AI", titolo:"Classificazione del sistema AI per livello di rischio", gu_min:4, figure:["CTO","BA","PM"], rischio:"Senza classificazione non si sa quali obblighi si applicano. Sanzioni fino a €30M o 6% fatturato.", fase_num:1, deliverable:"Classification document con rationale, risk level certificate", guida:"Analisi formale del sistema AI rispetto all'Allegato III AI Act (categorie ad alto rischio) e all'Art. 5 (pratiche vietate). Si documenta: categoria del sistema, caso d'uso specifico, impatto potenziale sulle persone fisiche, classificazione motivata. Se il sistema è borderline si consulta l'autorità competente. La classificazione determina l'intero perimetro di obblighi applicabili: sbagliare la classificazione in difetto espone a sanzioni severe.", gu_breakdown:"~4 GU: CTO, BA, PM. Analisi sistema e use cases (1 GU) + mappatura su Allegato III (1 GU) + documento classificazione con rationale (1.5 GU) + review legale (0.5 GU).", aggiunto:false },
  { codice:"AIACT-RM-01", fw:"AI-ACT", gruppo:"C. Risk management AI", titolo:"Risk Management System continuo (Art. 9)", gu_min:8, figure:["CTO","BA"], rischio:"Art. 9 AI Act obbligatorio per sistemi ad alto rischio. Assenza = sistema non commercializzabile nell'UE.", fase_num:2, deliverable:"AI Risk register, risk treatment plan, residual risk acceptance", guida:"Sistema di gestione del rischio attivo per l'intero ciclo di vita del sistema AI. Include: identificazione dei rischi noti e ragionevolmente prevedibili (errori sistematici, misuse, discriminazioni, effetti avversi su salute/diritti fondamentali), test di robustezza contro input anomali e adversarial attacks, valutazione del rischio residuo dopo le misure di mitigazione, revisione a ogni aggiornamento significativo del modello. Il risk management deve essere continuo, non un'attività una-tantum.", gu_breakdown:"~8 GU: CTO, BA. Identificazione scenari di rischio (2 GU) + testing robustezza (2 GU) + documentazione risk register AI (2.5 GU) + review e approvazione (1.5 GU).", aggiunto:false, overlap_id:"OVL-05" },
  { codice:"AIACT-DATA-01", fw:"AI-ACT", gruppo:"D. Dati AI", titolo:"Data governance per dataset di training, validation e test (Art. 10)", gu_min:6, figure:["CTO","BA"], rischio:"Art. 10 AI Act. Dataset non rappresentativi producono discriminazioni sistematiche documentabili.", fase_num:2, deliverable:"Data governance documentation, bias analysis report, data lineage", guida:"Pratiche di governance per tutti i dataset usati nel ciclo di vita del sistema AI. Si analizza: rappresentatività demografica e geografica, possibili bias storici o di selezione, data lineage documentato (da dove vengono i dati, come sono stati processati), data quality checks automatizzati, esclusione di dati personali non necessari (data minimization). Si documenta ogni scelta sui dati e l'impatto potenziale sulle performance per gruppi specifici.", gu_breakdown:"~6 GU: CTO, BA. Inventario dataset (1 GU) + analisi bias e rappresentatività (2 GU) + data lineage documentation (2 GU) + quality checks implementation (1 GU).", aggiunto:false },
  { codice:"AIACT-TECH-01", fw:"AI-ACT", gruppo:"E. Documentazione AI", titolo:"Documentazione tecnica obbligatoria Allegato IV (Art. 11)", gu_min:6, figure:["CTO","BA","PM"], rischio:"Art. 11 AI Act. Senza documentazione il sistema non può ottenere marcatura CE e non è commercializzabile.", fase_num:4, deliverable:"Technical documentation package (Allegato IV compliant)", guida:"Redazione della documentazione tecnica strutturata secondo l'Allegato IV AI Act: descrizione generale del sistema e sua intended purpose, descrizione del processo di sviluppo, informazioni sul modello (architettura, algoritmi, training methodology), dati usati (origine, caratteristiche), metriche di performance per categoria di utente, limitazioni note, istruzioni per l'uso, piano di monitoraggio post-market. Deve essere aggiornata a ogni modifica significativa del sistema.", gu_breakdown:"~6 GU: CTO, BA, PM. Raccolta informazioni tecniche (1.5 GU) + redazione strutturata Allegato IV (3 GU) + review compliance (1 GU) + aggiornamento (0.5 GU).", aggiunto:false },
  { codice:"AIACT-LOG-01", fw:"AI-ACT", gruppo:"E. Documentazione AI", titolo:"Logging automatico operazioni sistema AI (Art. 12)", gu_min:5, figure:["CTO","Team_IT"], rischio:"Art. 12 AI Act. Log obbligatori e fornibili alle autorità su richiesta per supervisione.", fase_num:5, deliverable:"Logging system configurato, retention policy, log format documentation", guida:"Il sistema AI deve generare automaticamente log delle operazioni (event logs) per tutta la durata di utilizzo. Contenuto minimo: periodo di utilizzo, identificativo della versione del modello, input che hanno contribuito alle decisioni, identità delle persone fisiche coinvolte (per sistemi biometrici), output prodotti. I log devono essere: immutabili, accessibili alle autorità di sorveglianza, conservati per almeno la durata definita dal deployer. Si implementa il logging nel sistema AI con le specifiche tecniche richieste.", gu_breakdown:"~5 GU: CTO, Team_IT. Design schema log (1 GU) + implementazione logging (2.5 GU) + retention policy e storage (1 GU) + test e documentazione (0.5 GU).", aggiunto:false, overlap_id:"OVL-02" },
  { codice:"AIACT-HUMAN-01", fw:"AI-ACT", gruppo:"F. Trasparenza AI", titolo:"Human oversight — supervisione umana efficace (Art. 14)", gu_min:5, figure:["CTO","BA"], rischio:"Art. 14 AI Act. Sistemi black box senza override umano non sono conformi per categorie ad alto rischio.", fase_num:4, deliverable:"Human oversight procedures, kill-switch documentation, override UI", guida:"Il sistema AI deve essere progettato per consentire supervisione umana efficace durante il deployment. Si implementano: meccanismo di interruzione immediata del sistema ('kill switch') senza conseguenze tecniche non governabili, interfaccia di monitoraggio che mostra in modo comprensibile cosa sta facendo il sistema, procedure documentate per quando l'operatore deve ignorare o correggere l'output, training degli operatori sulla supervisione. Per sistemi con autonomia elevata: human-in-the-loop obbligatorio per decisioni ad alto impatto.", gu_breakdown:"~5 GU: CTO, BA. Design meccanismi di override (1.5 GU) + implementazione (2 GU) + procedure e training (1 GU) + test (0.5 GU).", aggiunto:false },
  { codice:"AIACT-CONFORM-01", fw:"AI-ACT", gruppo:"H. Conformità AI", titolo:"Valutazione di conformità e registrazione database UE (Art. 43-71)", gu_min:6, figure:["PM","CTO"], rischio:"Art. 43-71 AI Act. Sistemi ad alto rischio senza conformità non possono essere commercializzati nell'UE.", fase_num:7, deliverable:"Conformity assessment report, dichiarazione UE di conformità, registrazione DB AI", guida:"Esecuzione della valutazione di conformità prima della messa in servizio: autovalutazione documentata (per la maggior parte dei sistemi Allegato III) con checklist di tutti i requisiti Art. 9-15 verificati, eventuale coinvolgimento di organismo notificato (obbligatorio per sistemi biometrici e infrastrutture critiche). Redazione della dichiarazione di conformità UE. Apposizione della marcatura CE (solo per sistemi hardware). Registrazione nel database EU AI Act (obbligatoria per i provider prima dell'immissione sul mercato).", gu_breakdown:"~6 GU: PM, CTO. Checklist compliance (2 GU) + documentazione assessment (2 GU) + dichiarazione UE e marcatura CE (1 GU) + registrazione database (1 GU).", aggiunto:false },

// GS1 — voci chiave
  { codice:"GS1-ID-01", fw:"GS1", gruppo:"A. Identificazione GS1", titolo:"Licenza GS1 e assegnazione Company Prefix", gu_min:2, figure:["PM","BA"], rischio:"Senza Company Prefix licenziato i GTIN non sono validi nella rete GS1. I retailer rifiuteranno i prodotti.", fase_num:1, deliverable:"GS1 license, Company Prefix certificate, assegnazione schema GTIN", guida:"Primo passo operativo: ottenimento della licenza GS1 attraverso GS1 Italy. Il Company Prefix è un codice numerico univoco che identifica l'azienda nella rete GS1 globale e prefissa tutti i GTIN dell'azienda. Si definisce lo schema di assegnazione: quali cifre del GTIN sono riservate alla variante prodotto, colore, taglia. Prerequisito assoluto per qualsiasi implementazione RFID o barcode GS1-compliant.", gu_breakdown:"~2 GU: PM, BA. Contatto GS1 Italy e pratiche (0.5 GU) + definizione schema assegnazione (1 GU) + documentazione (0.5 GU).", aggiunto:false },
  { codice:"GS1-EPC-02", fw:"GS1", gruppo:"B. EPC/RFID", titolo:"Motore di regole per calcolo EPC (encoding engine)", gu_min:10, figure:["CTO","Team_IT","BA"], rischio:"Senza motore di regole formalizzato le scritture tag dipendono da logica distribuita e non tracciata.", fase_num:4, deliverable:"Encoding engine (codice + documentazione), GetTagFromProduct API spec, regole per classe merceologica", guida:"Progettazione e implementazione del motore che determina quale EPC scrivere per ogni prodotto. Contiene le regole business: quale schema di encoding per ogni categoria merceologica (pelletteria, calzature, RTW), gestione multi-GS1 (prodotti con più tag), logica di priorità tag (KL vs embedded), interfaccia REST GetTagFromProduct. Include un parametro di simulazione (dry-run) che calcola l'EPC senza scrivere fisicamente — fondamentale per testing e debugging. Il codice deve essere versionato con audit trail delle modifiche alle regole.", gu_breakdown:"~10 GU: CTO, Team_IT, BA. Analisi regole business (2 GU) + progettazione API (1.5 GU) + sviluppo engine (4 GU) + test (1.5 GU) + documentazione (1 GU).", aggiunto:false },
  { codice:"GS1-EPCIS-01", fw:"GS1", gruppo:"C. EPCIS", titolo:"Implementazione EPCIS 2.0 per tracciabilità eventi supply chain", gu_min:12, figure:["CTO","BA"], rischio:"Senza EPCIS non è possibile condividere eventi con i partner. Richiesto da EU Digital Product Passport 2026.", fase_num:5, deliverable:"EPCIS repository configurato, event schema, API integration, test report", guida:"Implementazione del repository EPCIS (EPC Information Services) 2.0 per la registrazione e condivisione degli eventi di supply chain con i trading partner. Si configurano i 4 tipi di evento: ObjectEvent (commissioning, shipping, receiving), AggregationEvent (packing in scatole), TransactionEvent (ordini/fatture), TransformationEvent (produzione). Si implementa la query interface per permettere ai partner di interrogare gli eventi. Retention degli eventi: minimo 3 anni.", gu_breakdown:"~12 GU: CTO, BA. Setup EPCIS repository (2 GU) + configurazione event types (3 GU) + integration con sistemi esistenti (4 GU) + test con trading partner (2 GU) + documentazione (1 GU).", aggiunto:false },
  { codice:"GS1-DPP-01", fw:"GS1", gruppo:"D. Digital Product Passport", titolo:"Digital Product Passport (DPP) EU — obbligatorio 2026 per tessile", gu_min:8, figure:["BA","CTO","PM"], rischio:"Dal 2026 obbligatorio per tessile/calzature nell'UE. Aziende non conformi non potranno immettere prodotti nel mercato EU.", fase_num:2, deliverable:"DPP data model, GS1 Digital Link implementation, sustainability data structure", guida:"Preparazione per l'obbligo del Digital Product Passport per prodotti tessili (primo settore in scadenza 2026 secondo Regolamento Ecodesign EU). Si definisce la struttura dati DPP: identificazione prodotto (GTIN), dati di sostenibilità (materiali e % di riciclato, impronta carbonica, trattamenti chimici), istruzioni di cura/riparazione, smaltimento/riciclaggio. Accesso tramite GS1 Digital Link (QR code dinamico). Integrazione con EPCIS per dati del ciclo di vita del prodotto.", gu_breakdown:"~8 GU: BA, CTO, PM. Analisi requisiti DPP per categoria prodotto (2 GU) + data model design (2 GU) + implementazione GS1 Digital Link (2.5 GU) + test e documentazione (1.5 GU).", aggiunto:false },

// GDPR — voci chiave
  { codice:"GDPR-RAT-01", fw:"GDPR", gruppo:"A. Principi GDPR", titolo:"Registro delle Attività di Trattamento (RAT) Art. 30", gu_min:5, figure:["PM","BA","DPO"], rischio:"Art. 30 GDPR. Documento base per qualsiasi audit del Garante. Assenza = sanzione fino a €10M.", fase_num:1, deliverable:"Registro Attività di Trattamento (template EDPB), completo per titolare e responsabili", guida:"Il RAT è il documento fondamentale del GDPR: un registro sistematico di tutti i trattamenti di dati personali. Per ogni trattamento si documenta: finalità, base giuridica (Art. 6), categorie di interessati, categorie di dati, destinatari (inclusi i Responsabili ex Art. 28), trasferimenti verso paesi terzi, retention policy, misure di sicurezza. È il punto di partenza per qualsiasi audit del Garante e per la gestione delle richieste di accesso degli interessati.", gu_breakdown:"~5 GU: PM, BA, DPO. Interviste ai process owner (1.5 GU) + mappatura trattamenti (1.5 GU) + compilazione RAT (1.5 GU) + review DPO e approvazione (0.5 GU).", aggiunto:false },
  { codice:"GDPR-DPIA-01", fw:"GDPR", gruppo:"C. DPIA e DPO", titolo:"Data Protection Impact Assessment (DPIA) Art. 35", gu_min:6, figure:["PM","BA","CTO","DPO"], rischio:"Art. 35 GDPR. Obbligatoria per trattamenti ad alto rischio. Omissione = sanzione autonoma.", fase_num:2, deliverable:"DPIA document strutturato (EDPB metodologia), misure di mitigazione documentate", guida:"Valutazione sistematica dell'impatto sui diritti e le libertà delle persone fisiche prima dell'avvio di trattamenti ad alto rischio. Obbligatoria per: profilazione sistematica, trattamento su larga scala di categorie speciali (salute, origine etnica, biometria), monitoraggio sistematico. La DPIA valuta: necessità e proporzionalità del trattamento, rischi per i diritti degli interessati (probabilità e gravità), misure di mitigazione. Se il rischio residuo è elevato: consultazione preventiva del Garante prima dell'avvio.", gu_breakdown:"~6 GU: PM, BA, CTO, DPO. Scoping (1 GU) + descrizione trattamento (1 GU) + analisi rischi (2 GU) + misure di mitigazione (1.5 GU) + review DPO (0.5 GU).", aggiunto:false, overlap_id:"OVL-05" },
  { codice:"GDPR-DPA-01", fw:"GDPR", gruppo:"B. Privacy by Design", titolo:"Data Processing Agreement con tutti i Responsabili (Art. 28)", gu_min:4, figure:["PM","DPO"], rischio:"Art. 28 GDPR. Senza DPA il titolare risponde solidalmente per i trattamenti del responsabile.", fase_num:3, deliverable:"DPA firmato con ogni Responsabile del trattamento, clausole standard EDPB", guida:"Mappatura di tutti i fornitori che trattano dati personali per conto del titolare (Responsabili ex Art. 28): cloud provider (AWS, Azure, Google), SaaS applicativi, outsourcer IT, service provider. Per ciascuno: verifica se esiste DPA, se manca si richiede il DPA standard del fornitore o si usa il template EDPB, verifica contenuti obbligatori (oggetto, durata, natura, finalità, categorie di dati, obblighi del titolare, clausole sub-responsabili). Il DPA è obbligatorio anche per le subsidiary del gruppo.", gu_breakdown:"~4 GU: PM, DPO. Inventario fornitori (1 GU) + review DPA esistenti (1 GU) + negoziazione/firma DPA mancanti con i top 5 fornitori critici (2 GU).", aggiunto:false, overlap_id:"OVL-06" },
  { codice:"GDPR-SEC-01", fw:"GDPR", gruppo:"D. Sicurezza GDPR", titolo:"Misure di sicurezza tecniche e organizzative adeguate (Art. 32)", gu_min:5, figure:["CTO","CISO","DPO"], rischio:"Art. 32 GDPR. In caso di data breach, misure inadeguate determinano la sanzione al massimo della forbice.", fase_num:4, deliverable:"Security measures documentation, encryption implementation, ISMS documentation", guida:"Implementazione e documentazione delle misure di sicurezza proporzionate al rischio del trattamento. Include: pseudonimizzazione (dove possibile), cifratura dei dati personali sensibili, garanzia di riservatezza/integrità/disponibilità, capacità di ripristino tempestivo in caso di incidente tecnico, procedura di valutazione periodica dell'efficacia delle misure. Il 'livello adeguato' si valuta in relazione allo stato dell'arte, ai costi e alla natura del trattamento — un ospedale con dati sanitari deve fare di più di una PMI con email marketing.", gu_breakdown:"~5 GU: CTO, CISO, DPO. Analisi misure esistenti vs. rischio del trattamento (1.5 GU) + implementazione gap (2 GU) + documentazione Art. 32 (1 GU) + review DPO (0.5 GU).", aggiunto:false, overlap_id:"OVL-01" },
  { codice:"GDPR-BREACH-01", fw:"GDPR", gruppo:"E. Incidenti GDPR", titolo:"Data breach notification 72h al Garante (Art. 33-34)", gu_min:4, figure:["PM","CISO","DPO"], rischio:"Art. 33-34 GDPR. Mancata notifica 72h = sanzione diretta. Senza procedure pronte 72h è pochissimo.", fase_num:4, deliverable:"Incident response procedure GDPR, breach register, template notifica 72h, criteri valutazione rischio", guida:"Processo documentato per rilevamento, valutazione e notifica dei data breach. Criteri per valutare se notificare al Garante (qualsiasi breach che 'presenta un rischio per i diritti e le libertà delle persone fisiche') e se comunicare agli interessati (rischio elevato). Template di notifica con tutti i campi obbligatori Art. 33. Breach register interno (obbligatorio anche per i breach non notificati). La procedura deve essere esercitata con almeno un tabletop exercise annuale.", gu_breakdown:"~4 GU: PM, CISO, DPO. Design processo detection→valutazione→notifica (1 GU) + template notifiche (1 GU) + breach register setup (0.5 GU) + tabletop exercise (1.5 GU).", aggiunto:false, overlap_id:"OVL-07" },
  { codice:"GDPR-RIGHTS-01", fw:"GDPR", gruppo:"E. Incidenti GDPR", titolo:"Gestione diritti degli interessati (Art. 12-22)", gu_min:4, figure:["PM","BA","DPO"], rischio:"Art. 12-22 GDPR. I reclami al Garante derivano quasi sempre da richieste di diritti ignorate.", fase_num:4, deliverable:"Procedure diritti interessati, canale di ricezione, registro richieste, response templates", guida:"Implementazione delle procedure per gestire le richieste di esercizio dei diritti degli interessati (accesso, rettifica, cancellazione, limitazione, portabilità, opposizione). Si definisce: canale di ricezione dedicato (email, portale web), procedura di verifica identità dell'interessato, processo interno di ricerca e risposta, tempi di risposta (1 mese, prorogabile a 3 con comunicazione motivata), registro delle richieste e degli esiti. Si predispongono template di risposta per ogni tipologia di diritto.", gu_breakdown:"~4 GU: PM, BA, DPO. Processo design (1 GU) + predisposizione canale e template (1.5 GU) + procedure interne (1 GU) + registro e test (0.5 GU).", aggiunto:false },

// DORA — voci chiave
  { codice:"DORA-ICT-01", fw:"DORA", gruppo:"A. Governance ICT", titolo:"Framework di gestione del rischio ICT (Art. 6-16)", gu_min:10, figure:["CTO","PM","CRO"], rischio:"Art. 6 DORA. Il framework ICT è la spina dorsale di tutta la compliance DORA. Senza = sanzione.", fase_num:2, deliverable:"ICT Risk Management Framework document, asset inventory con criticità, policy ICT", guida:"Implementazione del framework completo richiesto dall'Art. 6 DORA: (1) inventario asset ICT classificati per criticità (sistemi critici = quelli da cui dipende la fornitura del servizio finanziario); (2) identificazione delle dipendenze tra asset e processi business critici; (3) scenari di rischio ICT documentati (cyberattacco, guasto infrastruttura, errore operativo, rischio terze parti); (4) piano di risposta e ripristino per ogni scenario; (5) policy di sicurezza ICT approvata dall'organo di gestione. Il framework viene revisionato almeno annualmente.", gu_breakdown:"~10 GU: CTO, PM, CRO. Asset inventory (2 GU) + risk scenarios documentation (3 GU) + framework document (3 GU) + review management (2 GU).", aggiunto:false, overlap_id:"OVL-05" },
  { codice:"DORA-INC-01", fw:"DORA", gruppo:"C. Gestione incidenti ICT", titolo:"Classificazione e notifica incidenti ICT al regolatore (Art. 17-19)", gu_min:6, figure:["CTO","CISO","PM"], rischio:"Art. 17-19 DORA. Tempistiche più strette di NIS2: 4h per prima notifica vs 24h. Per BCE stessa tempistica.", fase_num:4, deliverable:"ICT incident classification matrix, notifica template Art. 19, processo escalation interna", guida:"Implementazione del processo di classificazione e notifica incidenti ICT specifico DORA. La classificazione come 'major incident' dipende da: numero di clienti colpiti, perdite finanziarie, durata del disservizio, impatto sistemico. Per i major incidents: notifica iniziale all'autorità competente entro 4h dalla classificazione (e non oltre 24h dalla consapevolezza), report intermedio entro 72h, relazione finale entro 1 mese. Template standardizzati conformi alle RTS EBA/ESMA/EIOPA. Per banche sotto BCE: doppio canale di notifica.", gu_breakdown:"~6 GU: CTO, CISO, PM. Criteri classificazione major incident (1.5 GU) + template notifiche (1.5 GU) + processo escalation interna (1.5 GU) + test della procedura (1.5 GU).", aggiunto:false, overlap_id:"OVL-11" },
  { codice:"DORA-TEST-01", fw:"DORA", gruppo:"D. Testing DORA", titolo:"Testing resilienza digitale — vulnerability assessment e pentest (Art. 24-25)", gu_min:8, figure:["CTO","CISO"], rischio:"Art. 24-25 DORA. Testing obbligatorio. Mancata esecuzione = finding diretto nelle ispezioni.", fase_num:6, deliverable:"Penetration test report, vulnerability assessment report, remediation plan", guida:"Programma annuale di testing della resilienza operativa digitale: vulnerability assessment di tutti i sistemi ICT critici (almeno annuale), penetration test basato su scenari di rischio reali del settore finanziario (almeno biennale per enti non significativi). I test devono essere eseguiti da soggetti indipendenti dalla funzione ICT (interni o esterni). Si producono: report dettagliato dei vulnerabilità trovate, piano di remediation con priorità, follow-up delle remediation completate. I risultati vengono discussi con l'organo di gestione.", gu_breakdown:"~8 GU: CTO, CISO. Scoping e pianificazione (1.5 GU) + execution pentest (3 GU) + report e remediation plan (2.5 GU) + presentazione management (1 GU).", aggiunto:false, overlap_id:"OVL-09" },
  { codice:"DORA-THIRD-01", fw:"DORA", gruppo:"E. Terze parti ICT", titolo:"Gestione rischio fornitori ICT terze parti critiche (Art. 28-30)", gu_min:8, figure:["PM","CTO","CRO"], rischio:"Art. 28-30 DORA. La concentrazione su pochi cloud provider è la principale preoccupazione sistemica BCE/ABE.", fase_num:3, deliverable:"ICT third-party register, due diligence report fornitori critici, contratti aggiornati Art. 30", guida:"Registro completo di tutti i fornitori ICT terze parti con classificazione per criticità. Per i fornitori critici (quelli da cui dipende la fornitura del servizio finanziario): due diligence approfondita (SOC 2 Type II, ISO 27001 certification, penetration test results), verifica delle clausole contrattuali obbligatorie Art. 30 (SLA con RTO/RPO, diritto di audit e ispezione, exit strategy documentata, business continuity del fornitore, localizzazione dati nell'UE se richiesta), notification all'autorità per nuovi contratti con CTPPs designati.", gu_breakdown:"~8 GU: PM, CTO, CRO. Inventario e classificazione fornitori (2 GU) + due diligence top 3 critici (3 GU) + aggiornamento contratti (2 GU) + registro e documentazione (1 GU).", aggiunto:false, overlap_id:"OVL-06" },

// ENS — voci chiave
  { codice:"ENS-CAT-01", fw:"ENS", gruppo:"A. Categorizzazione ENS", titolo:"Categorizzación del sistema: Básico/Medio/Alto", gu_min:3, figure:["PM","CTO","BA"], rischio:"Art. 43 RD 311/2022. Senza categorizzazione la certificazione ENS non può essere richiesta.", fase_num:1, deliverable:"Categorización document, tabla de dimensiones de seguridad por sistema", guida:"Determinazione del livello ENS del sistema informativo basata sulle dimensioni di sicurezza: disponibilità (D), autenticità (A), integrità (I), riservatezza (C), tracciabilità (T). Per ogni dimensione si assegna un livello (Bajo/Medio/Alto/Muy Alto) basandosi sull'impatto di una violazione. Il livello del sistema è il massimo tra le dimensioni. Básico: impatto limitato; Medio: impatto grave; Alto: impatto molto grave. Il livello determina quali misure dell'Anexo II sono obbligatorie.", gu_breakdown:"~3 GU: PM, CTO, BA. Workshop con stakeholder per valutazione impatto (1 GU) + compilazione tabla de dimensiones (1 GU) + documento formale e approvazione (1 GU).", aggiunto:false },
  { codice:"ENS-RISK-01", fw:"ENS", gruppo:"C. Marco operacional ENS", titolo:"Análisis de Riesgos con MAGERIT e Plan de Seguridad (op.pl.1-2)", gu_min:8, figure:["Resp. Seguridad","BA","CTO"], rischio:"Misura op.pl.1 ENS obbligatoria per tutti i livelli. Il RA è il documento centrale dell'audit CCN-STIC.", fase_num:2, deliverable:"Análisis de Riesgos (MAGERIT v3), Plan de Seguridad con cronoprogramma", guida:"Risk assessment secondo la metodologia MAGERIT v3 (o equivalente accreditato CCN): identificazione degli asset (hardware, software, dati, persone, instalaciones), delle minacce (catalogo MAGERIT), delle vulnerabilità per ogni asset, calcolo del rischio (impatto × probabilità). Il Plan de Seguridad seleziona le misure da implementare per ridurre il rischio a un livello accettabile, con priorità, responsabili e cronoprogramma. Entrambi i documenti vengono richiesti durante l'audit CCN-STIC.", gu_breakdown:"~8 GU: Resp. Seguridad, BA, CTO. Raccolta dati e inventario asset (2 GU) + analisi rischi MAGERIT (3 GU) + Plan de Seguridad (2 GU) + approvazione (1 GU).", aggiunto:false, overlap_id:"OVL-05" },
  { codice:"ENS-AUDIT-01", fw:"ENS", gruppo:"D. Conformità ENS", titolo:"Audit di conformità ENS e certificazione CCN-STIC", gu_min:8, figure:["PM","CTO","Resp. Seguridad"], rischio:"Art. 33-38 RD 311/2022. Senza certificazione ENS impossibile partecipare a gare pubbliche spagnole.", fase_num:7, deliverable:"Audit report CCN-STIC, Declaración/Certificado de Conformidad ENS", guida:"Processo di certificazione ENS: per sistemi Básico si produce una Declaración de Conformidad (autodichiarazione con evidenze delle misure implementate). Per sistemi Medio e Alto è obbligatorio un audit biennale da parte di un'entità di ispezione accreditata dal CCN o da un organismo di certificazione. L'audit verifica: il risk assessment MAGERIT, le misure dell'Anexo II implementate per il livello, la documentazione, e include test tecnici (vulnerability scan, access control test). La certificazione è valida 2 anni.", gu_breakdown:"~8 GU: PM, CTO, Resp. Seguridad. Preparazione documentazione audit (2 GU) + audit execution con l'ente certificatore (3 GU) + remediation finding (2 GU) + ottenimento certificato (1 GU).", aggiunto:false },

// ISO 27001 — voci chiave
  { codice:"27001-CL4-01", fw:"ISO27001", gruppo:"Clausola 4 — Contesto", titolo:"Contesto organizzativo e parti interessate (cl. 4.1-4.2)", gu_min:4, figure:["PM","CISO","BA"], rischio:"ISO 27001:2022 cl. 4.1-4.2 obbligatori. Senza contesto non è possibile determinare il perimetro corretto dell'ISMS.", fase_num:1, deliverable:"Context document, stakeholder analysis, relevant external/internal issues", guida:"Analisi strutturata del contesto in cui opera l'ISMS: fattori interni (struttura organizzativa, processi, tecnologia, cultura aziendale, dipendenze IT) e fattori esterni (contesto legale/normativo/regolatorio, mercato, minacce del settore, relazioni con fornitori e partner). Identificazione delle parti interessate rilevanti (clienti, azionisti, autorità regolatorie, fornitori chiave) e dei loro requisiti di sicurezza. Il contesto è il documento che giustifica perché certi controlli Annex A sono stati inclusi o esclusi.", gu_breakdown:"~4 GU: PM, CISO, BA. Workshop con management (1 GU) + analisi contesto e stakeholder (1.5 GU) + documentazione (1 GU) + review (0.5 GU).", aggiunto:false },
  { codice:"27001-CL6-01", fw:"ISO27001", gruppo:"Clausola 6 — Pianificazione", titolo:"Risk Assessment formale + Statement of Applicability (cl. 6.1.2-6.1.3)", gu_min:8, figure:["CISO","BA","CTO"], rischio:"ISO 27001:2022 cl. 6.1.2-6.1.3 obbligatori. Senza RA e SoA la certificazione è impossibile.", fase_num:2, deliverable:"Risk register, Statement of Applicability (SoA), Risk Treatment Plan", guida:"Risk assessment con metodologia documentata e ripetibile (qualitativa o quantitativa). Include: criteri di accettazione del rischio, identificazione asset e scenari di rischio, analisi probabilità × impatto, valutazione vs risk criteria, risk register completo. Il Statement of Applicability (SoA) elenca tutti i 93 controlli dell'Annex A con: è applicabile? è implementato? se escluso, perché? Il SoA è il documento che l'auditor di certificazione esamina per primo — giustifica ogni decisione di inclusione/esclusione.", gu_breakdown:"~8 GU: CISO, BA, CTO. Metodologia e criteri (1 GU) + risk identification e analisi (3 GU) + risk register (1.5 GU) + Statement of Applicability (2 GU) + Risk Treatment Plan (0.5 GU).", aggiunto:false, overlap_id:"OVL-05" },
  { codice:"27001-CL9-01", fw:"ISO27001", gruppo:"Clausola 9 — Valutazione", titolo:"Internal audit, monitoraggio e management review (cl. 9.1-9.3)", gu_min:5, figure:["PM","CISO"], rischio:"ISO 27001:2022 cl. 9. Assenza di internal audit o management review = major non conformity. Certificazione revocata.", fase_num:6, deliverable:"Internal audit report, KPI dashboard ISMS, management review verbale", guida:"Tre attività obbligatorie collegate: (1) monitoraggio dell'ISMS con KPI definiti (cl. 9.1): metriche di sicurezza misurabili, frequenza di misurazione, chi misura, chi analizza; (2) internal audit almeno annuale (cl. 9.2): pianificazione, checklist, esecuzione, report, azioni correttive; (3) management review annuale (cl. 9.3): il top management rivede lo stato dell'ISMS con input obbligatori specifici (stato azioni precedenti, cambiamenti contesto, risultati audit, non conformità, opportunità di miglioramento), verbale documentato.", gu_breakdown:"~5 GU: PM, CISO. KPI setup e primo report (1 GU) + pianificazione ed esecuzione internal audit (2 GU) + management review preparation e meeting (1.5 GU) + verbale (0.5 GU).", aggiunto:false },
  { codice:"27001-A5-15", fw:"ISO27001", gruppo:"Annex A — Organizzativi", titolo:"A.5.15-5.18 Access control — politica e gestione dei diritti", gu_min:6, figure:["CTO","Team_IT","CISO"], rischio:"A.5.15-5.18 ISO 27001. L'access control è il controllo più testato negli audit. Privilege creep = vulnerabilità permanente.", fase_num:5, deliverable:"Access control policy, IAM procedures, UAR report semestrale", guida:"Implementazione del sistema di access control basato su: politica di access control scritta (need-to-know, least privilege), processo di gestione dell'identità (provisioning con approvazione, deprovisioning entro 24h dall'uscita del dipendente, unicità account), requisiti di autenticazione (complessità password, MFA per accessi critici), gestione dei diritti di accesso (approvazione formale, revisione periodica semestrale, revoca tempestiva). L'access control è il controllo con il ROI più alto: blocca la maggior parte degli attacchi interni ed esterni.", gu_breakdown:"~6 GU: CTO, Team_IT, CISO. Policy redazione (1 GU) + IAM process implementation (2 GU) + primo UAR (1.5 GU) + documentazione (1.5 GU).", aggiunto:false, overlap_id:"OVL-01" },
  { codice:"27001-A5-24", fw:"ISO27001", gruppo:"Annex A — Organizzativi", titolo:"A.5.24-5.28 Pianificazione e gestione degli incidenti di sicurezza", gu_min:7, figure:["CISO","CTO","PM"], rischio:"A.5.24-5.28 ISO 27001. ISMS senza incident management = sistema di allarme senza procedura di risposta.", fase_num:5, deliverable:"Incident response plan, runbook principali, post-incident template, evidence collection procedure", guida:"Piano di incident management strutturato in 5 fasi: preparazione (ruoli, strumenti, canali di comunicazione), rilevamento e analisi (triage, severity classification, evidences collection), contenimento (procedure di isolamento per tipo di incidente), eradicazione e ripristino (rimozione malware, restore da backup clean, hardening post-incidente), lessons learned (post-incident review entro 2 settimane, aggiornamento runbook). Si producono runbook per almeno 5 scenari: ransomware, phishing con compromissione credenziali, data breach, insider threat, supply chain compromise.", gu_breakdown:"~7 GU: CISO, CTO, PM. IRP design (1.5 GU) + redazione runbook 5 scenari (3 GU) + tabletop exercise (1.5 GU) + documentazione (1 GU).", aggiunto:false, overlap_id:"OVL-11" },
  { codice:"27001-A8-01", fw:"ISO27001", gruppo:"Annex A — Tecnologici", titolo:"A.8.1-8.3 Endpoint security, accesso privilegiato, restrizione accessi", gu_min:6, figure:["CTO","Team_IT"], rischio:"A.8.1-8.3 ISO 27001. PAM è il controllo con ROI più alto: blocca il 100% degli APT avanzati.", fase_num:5, deliverable:"Endpoint security baseline, PAM implementation, privileged account inventory", guida:"Tre controlli tecnici strettamente collegati: sicurezza degli endpoint (policy endpoint, MDM per dispositivi mobili, cifratura disco, EDR), gestione degli accessi privilegiati (inventario completo account privilegiati, PAM tool, just-in-time access, registrazione sessioni privilegiate, no account condivisi), restrizione dell'accesso alle informazioni (RBAC, log degli accessi ai dati sensibili, no access by default). Il PAM è il controllo che gli auditor di certificazione esaminano più attentamente: un account admin non monitorato è il vettore di attacco universale.", gu_breakdown:"~6 GU: CTO, Team_IT. Endpoint baseline e deployment (2 GU) + PAM inventory e policy (2 GU) + RBAC configuration (1.5 GU) + documentazione (0.5 GU).", aggiunto:false, overlap_id:"OVL-01" },
  { codice:"27001-A8-15", fw:"ISO27001", gruppo:"Annex A — Tecnologici", titolo:"A.8.15-8.17 Logging, monitoraggio e sincronizzazione orologi", gu_min:5, figure:["CTO","Team_IT"], rischio:"A.8.15 ISO 27001. Log non sincronizzati = analisi forense impossibile. Log modificabili = inutilizzabili in giudizio.", fase_num:5, deliverable:"Log management architecture, SIEM configuration, alerting rules, NTP sync baseline", guida:"Implementazione del sistema di logging centralizzato: raccolta log da tutti i sistemi critici (server, endpoint, applicazioni, network devices), immutabilità (i log non possono essere modificati né cancellati da chi li produce), retention adeguata (minimo 1 anno rolling), sincronizzazione degli orologi di tutti i sistemi su sorgente NTP affidabile (fondamentale per la correlazione temporale in analisi forensi), monitoraggio con alerting su anomalie critiche, revisione settimanale degli alert di alta priorità.", gu_breakdown:"~5 GU: CTO, Team_IT. Log management architecture (1 GU) + SIEM/log collector configurazione (2 GU) + NTP sync baseline (0.5 GU) + alerting rules (1 GU) + documentazione (0.5 GU).", aggiunto:false, overlap_id:"OVL-02" },
  { codice:"27001-A8-25", fw:"ISO27001", gruppo:"Annex A — Tecnologici", titolo:"A.8.25-8.30 Secure Development Lifecycle (SDLC)", gu_min:6, figure:["CTO","Team_IT"], rischio:"A.8.25-8.30. Vulnerabilità introdotte in sviluppo costano 10-100x più a correggere in produzione.", fase_num:4, deliverable:"Secure SDLC procedures, SAST/DAST integration in CI/CD, code review guidelines, security requirements template", guida:"Integrazione della sicurezza nel processo di sviluppo software: security requirements nella fase di design (threat modelling per feature critiche), secure coding guidelines per i linguaggi usati (OWASP Top 10 come baseline minima), SAST (static analysis) automatizzato nei pipeline CI/CD, DAST sui staging environment, SCA (software composition analysis) per le dipendenze di terze parti, code review obbligatoria per modifiche a codice sensibile (crittografia, autenticazione, autorizzazione). Si integrano gli strumenti esistenti (es. SonarQube, Snyk, OWASP ZAP) e si documentano le regole.", gu_breakdown:"~6 GU: CTO, Team_IT. Analisi processo SDLC esistente (1 GU) + configurazione SAST/DAST/SCA (2.5 GU) + procedure e training team (1.5 GU) + documentazione (1 GU).", aggiunto:false },

// ISO 56001 — voci chiave
  { codice:"56001-CL4-01", fw:"ISO56001", gruppo:"Clausola 4 — Contesto", titolo:"Contesto organizzativo e parti interessate per l'innovazione (cl. 4.1-4.3)", gu_min:3, figure:["PM","Innovation_Manager","CTO"], rischio:"ISO 56001:2024 cl. 4. Senza contesto l'IMS non è calibrato sulle esigenze reali. Base per tutti i processi.", fase_num:1, deliverable:"Context document innovazione, PESTLE analysis, stakeholder map innovazione, scope IMS", guida:"Analisi del contesto specifico per l'innovazione: fattori esterni (disruption tecnologiche nel settore, normative che aprono opportunità, dinamiche competitive, ecosistema di partner potenziali), fattori interni (capacità tecnologica, cultura, budget disponibile per innovazione, processi decisionali). Identificazione delle parti interessate con aspettative di innovazione: clienti (problemi non risolti), investitori (aspettative di crescita), dipendenti (desiderio di contribuire), partner tecnologici. Campo di applicazione dell'IMS: quali attività di innovazione vengono gestite dal sistema.", gu_breakdown:"~3 GU: PM, Innovation_Manager, CTO. Workshop contesto (0.8 GU) + PESTLE analysis (0.7 GU) + stakeholder map (0.5 GU) + scope document (0.5 GU) + approvazione (0.5 GU).", aggiunto:false },
  { codice:"56001-CL6-01", fw:"ISO56001", gruppo:"Clausola 6 — Pianificazione", titolo:"Obiettivi di innovazione e pianificazione (cl. 6.1-6.2)", gu_min:4, figure:["PM","Innovation_Manager","BA"], rischio:"ISO 56001:2024 cl. 6. Innovazione senza obiettivi misurabili non è governabile né rendicontabile.", fase_num:2, deliverable:"Innovation objectives, KPI set, action plan con responsabili e scadenze", guida:"Definizione degli obiettivi di innovazione SMART allineati alla strategia aziendale: numero di nuovi prodotti/servizi lanciati all'anno, percentuale di fatturato da prodotti/servizi introdotti negli ultimi 3 anni, riduzione del time-to-market, numero di partnership attive con startup/università. Si costruisce un sistema di misurazione con KPI di input (budget, ore), processo (conversione idee→PoC→lancio), output (innovazioni lanciate, brevetti) e outcome (ROI, soddisfazione clienti). Fondamentale per il reporting MISE degli Innovation Manager certificati.", gu_breakdown:"~4 GU: PM, Innovation_Manager, BA. Workshop obiettivi strategici (1 GU) + KPI design (1.5 GU) + action plan (1 GU) + approvazione management (0.5 GU).", aggiunto:false },
  { codice:"56001-CL8-02", fw:"ISO56001", gruppo:"Clausola 8 — Operatività", titolo:"Portfolio management iniziative di innovazione (cl. 8.3)", gu_min:5, figure:["Innovation_Manager","PM","CTO"], rischio:"ISO 56001:2024 cl. 8.3. Senza portfolio management le risorse si concentrano su innovazione incrementale lasciando scoperta la difesa dalle disruption.", fase_num:4, deliverable:"Portfolio dashboard, stage-gate criteria, go/no-go template, portfolio review cadence", guida:"Sistema di gestione del portafoglio delle iniziative di innovazione: criteri espliciti di valutazione e selezione (valore potenziale, fattibilità tecnica, allineamento strategico, rischio, time-to-market), bilanciamento deliberato del portafoglio tra innovazione incrementale (Core, <20% budget), adiacente (Adjacent, ~60% budget) e trasformativa (Transformational, ~20% budget). Processo di stage-gate: le iniziative avanzano solo se superano i criteri definiti ad ogni gate. Dashboard aggiornato mensualmente con lo stato di tutte le iniziative attive.", gu_breakdown:"~5 GU: Innovation_Manager, PM, CTO. Criteri valutazione e portfolio model (1.5 GU) + stage-gate design (1.5 GU) + portfolio dashboard setup (1.5 GU) + primo portfolio review (0.5 GU).", aggiunto:false },
  { codice:"56001-CL8-03", fw:"ISO56001", gruppo:"Clausola 8 — Operatività", titolo:"Processo di innovazione — dall'idea alla creazione di valore (cl. 8.4)", gu_min:8, figure:["Innovation_Manager","CTO","BA","PM"], rischio:"ISO 56001:2024 cl. 8.4. Senza processo strutturato l'innovazione resta frammentata. È il processo core dell'IMS.", fase_num:4, deliverable:"Innovation process documented, ideation tool configurato, MVP process, value measurement framework", guida:"Implementazione end-to-end del processo di innovazione: (1) generazione idee (ideation platform o format strutturato: hackathon, design sprint, challenge interna, raccolta sistematica da clienti); (2) valutazione e selezione (criteri Desiderability × Feasibility × Viability, business model canvas); (3) prototipazione rapida (MVP in 4-8 settimane, PoC tecnico); (4) testing con utenti reali; (5) decisione di scaling o pivot o stop; (6) scaling; (7) misurazione del valore creato. Si producono template e strumenti per ogni fase.", gu_breakdown:"~8 GU: Innovation_Manager, CTO, BA, PM. Process design e template (2 GU) + configurazione strumenti (2 GU) + prima iniziativa pilota end-to-end (3 GU) + documentazione e retrospective (1 GU).", aggiunto:false },
  { codice:"56001-CL9-01", fw:"ISO56001", gruppo:"Clausola 9 — Valutazione", titolo:"KPI di innovazione e sistema di misurazione (cl. 9.1)", gu_min:4, figure:["Innovation_Manager","PM","BA"], rischio:"ISO 56001:2024 cl. 9.1. Senza KPI l'innovazione non è gestibile né rendicontabile verso investitori e MISE.", fase_num:6, deliverable:"Innovation KPI dashboard, benchmark analysis, quarterly reporting template", guida:"Sistema di misurazione delle performance dell'IMS con metriche di 4 tipi: input (budget R&I allocato e speso, ore FTE dedicate, numero di idee generate), processo (tasso di conversione idee→PoC→lancio, time-to-market medio), output (numero di innovazioni lanciate, brevetti depositati, licensing agreements), outcome (ricavi da prodotti introdotti negli ultimi 3 anni, riduzione costi da innovazione di processo, Net Promoter Score clienti). Dashboard aggiornato trimestralmente con confronto vs. obiettivi e benchmark di settore.", gu_breakdown:"~4 GU: Innovation_Manager, PM, BA. KPI selection e target setting (1.5 GU) + dashboard design e setup (1.5 GU) + primo reporting cycle (0.5 GU) + review con management (0.5 GU).", aggiunto:false },
];

// ─── UTILS ────────────────────────────────────────────────────────────────────
function getActiveOverlaps(activeFrameworks) {
  return OVERLAPS.filter(o => o.frameworks.filter(f => activeFrameworks.includes(f)).length >= 2);
}

function buildMergedItems(items, activeFrameworks) {
  const activeOvls = getActiveOverlaps(activeFrameworks);
  const ovlGroups = {};
  items.forEach(item => {
    if (!item.overlap_id) return;
    const ovl = activeOvls.find(o => o.id === item.overlap_id);
    if (!ovl) return;
    if (!ovlGroups[ovl.id]) ovlGroups[ovl.id] = [];
    ovlGroups[ovl.id].push(item);
  });
  const absorbed = new Set();
  const result = [];
  items.forEach(item => {
    if (absorbed.has(item.codice)) return;
    const ovl = item.overlap_id ? activeOvls.find(o => o.id === item.overlap_id) : null;
    if (ovl && ovlGroups[ovl.id] && ovlGroups[ovl.id].length > 1) {
      const siblings = ovlGroups[ovl.id].filter(s => s.codice !== item.codice);
      siblings.forEach(s => absorbed.add(s.codice));
      const activeFws = ovl.frameworks.filter(f => activeFrameworks.includes(f));
      result.push({ ...item, _overlap: { ...ovl, activeFws }, _siblings: siblings });
    } else {
      result.push(item);
    }
    absorbed.add(item.codice);
  });
  return result;
}

const fwDef = c => FRAMEWORKS.find(f => f.codice === c);
function FwChip({ codice, size=10 }) {
  const f = fwDef(codice);
  if (!f) return null;
  return <span style={{display:"inline-block",padding:"1px 6px",borderRadius:8,fontSize:size,fontWeight:700,background:f.colore,color:"#fff"}}>{f.nome}</span>;
}

// ─── MODALS ───────────────────────────────────────────────────────────────────
function GU0Modal({ item, onConfirm, onCancel }) {
  const [text, setText] = useState("");
  const ok = text.trim().length >= 20;
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:400,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
      <div style={{background:"#fff",borderRadius:12,width:"min(500px,95vw)",overflow:"hidden",boxShadow:"0 16px 64px rgba(0,0,0,.2)"}}>
        <div style={{background:"#FCEBEB",padding:"13px 18px",borderBottom:"0.5px solid #F09595"}}>
          <div style={{fontSize:13,fontWeight:600,color:"#791F1F"}}>⚠ GU=0 — {item.codice}</div>
          <div style={{fontSize:11,color:"#A32D2D",marginTop:2}}>{item.titolo}</div>
        </div>
        <div style={{padding:"15px 18px"}}>
          <div style={{fontSize:12,lineHeight:1.6,padding:"10px 12px",background:"#FFF8F8",borderRadius:8,borderLeft:"3px solid #E24B4A",marginBottom:12}}>
            <div style={{fontWeight:600,color:"#791F1F",marginBottom:3}}>Rischio:</div>
            <div style={{color:"#5a1a1a"}}>{item.rischio}</div>
          </div>
          <div style={{fontSize:11,color:"#6b6b67",marginBottom:5}}>Giustificazione formale (min. 20 car.):</div>
          <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Es: Già coperta dal requisito R3.2..."
            style={{width:"100%",height:70,padding:"8px 10px",fontSize:12,border:`1px solid ${ok?"#639922":"#ccc"}`,borderRadius:8,resize:"none",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}}/>
          <div style={{fontSize:10,textAlign:"right",color:ok?"#27500A":"#9c9a92",marginTop:2}}>{text.length} car. {ok?"✓":"— min 20"}</div>
        </div>
        <div style={{padding:"10px 18px",borderTop:"0.5px solid #e0ded8",display:"flex",gap:8,justifyContent:"flex-end"}}>
          <button onClick={onCancel} style={{padding:"7px 13px",fontSize:12,border:"0.5px solid #e0ded8",borderRadius:7,cursor:"pointer",background:"#fff"}}>Annulla</button>
          <button onClick={()=>ok&&onConfirm(text)} style={{padding:"7px 13px",fontSize:12,border:"none",borderRadius:7,cursor:ok?"pointer":"default",background:ok?"#1a1a18":"#ccc",color:"#fff"}}>Conferma</button>
        </div>
      </div>
    </div>
  );
}

function OverlapModal({ ovl, onClose }) {
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:400,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
      <div style={{background:"#fff",borderRadius:12,width:"min(460px,95vw)",overflow:"hidden",boxShadow:"0 16px 64px rgba(0,0,0,.2)"}}>
        <div style={{padding:"13px 18px",borderBottom:"0.5px solid #e0ded8",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{fontSize:13,fontWeight:600,color:"#1a1a18"}}>{ovl.label.replace(" ⚠","")}</div>
            <div style={{fontSize:11,color:"#6b6b67",marginTop:2}}>{ovl.id} · {ovl.frameworks.length} framework</div>
          </div>
          <button onClick={onClose} style={{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"#6b6b67",lineHeight:1}}>×</button>
        </div>
        <div style={{padding:"15px 18px"}}>
          <div style={{display:"flex",gap:5,flexWrap:"wrap",marginBottom:12}}>{ovl.frameworks.map(f=><FwChip key={f} codice={f} size={11}/>)}</div>
          <div style={{padding:"10px 12px",background:ovl.special?"#FAEEDA":"#f7f6f3",borderRadius:8,borderLeft:`3px solid ${ovl.special?"#BA7517":"#e0ded8"}`,marginBottom:12,fontSize:12,lineHeight:1.6,color:"#1a1a18"}}>{ovl.nota}</div>
          <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 13px",background:"#EAF3DE",borderRadius:8}}>
            <div style={{fontSize:28,fontWeight:700,color:"#27500A",lineHeight:1}}>-{ovl.sconto}%</div>
            <div style={{fontSize:11,color:"#27500A",lineHeight:1.5}}>
              <div style={{fontWeight:600}}>Sconto GU applicabile</div>
              <div>sulle GU del secondo framework che attiva questo controllo</div>
            </div>
          </div>
          {ovl.special && <div style={{marginTop:10,fontSize:11,color:"#633806",padding:"8px 10px",background:"#FAEEDA",borderRadius:6,borderLeft:"3px solid #BA7517",lineHeight:1.5}}><strong>⚠ Non è overlap completo.</strong> Due notifiche parallele verso autorità diverse. Sconto solo sulla detection condivisa.</div>}
        </div>
        <div style={{padding:"10px 18px",borderTop:"0.5px solid #e0ded8"}}>
          <button onClick={onClose} style={{padding:"7px 13px",fontSize:12,border:"0.5px solid #e0ded8",borderRadius:7,cursor:"pointer",background:"#fff"}}>Chiudi</button>
        </div>
      </div>
    </div>
  );
}

// ─── FRAMEWORK SCREEN ─────────────────────────────────────────────────────────

// Maturity domains per framework — AS-IS / TO-BE (1=Initial, 5=Optimizing)
const MATURITY_DOMAINS = {
  "SOX-IT":   ["Access Controls","Change Management","IT Operations","Financial Reporting","Audit Trail"],
  "NIS2":     ["Governance","Risk Management","Incident Response","Supply Chain","Technical Controls"],
  "AI-ACT":   ["AI Governance","Data Quality","Model Validation","Human Oversight","Documentation"],
  "GS1":      ["Data Standards","EPC/RFID","EPCIS Events","Trading Partner","DPP Readiness"],
  "GDPR":     ["Data Mapping","Consent","Rights Management","Security","Breach Response"],
  "DORA":     ["ICT Risk","Resilience Testing","Incident Classification","Third Party","Threat Intel"],
  "ENS":      ["Perimeter","Identity","Data Protection","Continuity","Monitoring"],
  "ISO27001": ["ISMS Scope","Risk Assessment","Controls","Supplier Security","Audit"],
  "ISO56001": ["Innovation Strategy","Leadership","Portfolio","Collaboration","Learning"],
};
const MATURITY_LABELS = ["","1 — Iniziale","2 — Ripetibile","3 — Definito","4 — Gestito","5 — Ottimizzato"];

function MaturityAssessment({ active, maturity, onChange }) {
  const [open, setOpen] = useState(false);
  const bd = "0.5px solid #e0ded8";

  const setVal = (fw, domain, type, val) =>
    onChange({...maturity, [`${fw}::${domain}::${type}`]: parseInt(val)});
  const getVal = (fw, domain, type) =>
    maturity[`${fw}::${domain}::${type}`] ?? (type==="asis" ? 2 : 4);

  const overallGap = active.reduce((total, fw) => {
    const domains = MATURITY_DOMAINS[fw] || [];
    return total + domains.reduce((s, d) => s + (getVal(fw,d,"tobe") - getVal(fw,d,"asis")), 0);
  }, 0);

  return (
    <div style={{marginBottom:14,border:bd,borderRadius:9,overflow:"hidden"}}>
      <div onClick={()=>setOpen(v=>!v)} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 13px",background:"#f7f6f3",cursor:"pointer"}}>
        <span style={{fontSize:12}}>📊</span>
        <div style={{flex:1}}>
          <span style={{fontSize:12,fontWeight:600,color:"#1a1a18"}}>Maturity Assessment — AS-IS / TO-BE</span>
          <span style={{fontSize:10,color:"#9c9a92",marginLeft:8}}>COBIT 2019 · giustifica il perimetro e il valore del progetto</span>
        </div>
        {active.length>0&&<span style={{fontSize:10,color:"#6b6b67",fontFamily:"monospace"}}>Gap medio: +{active.length>0?(overallGap/(active.reduce((s,fw)=>s+(MATURITY_DOMAINS[fw]||[]).length,0)||1)).toFixed(1):0} livelli</span>}
        <span style={{fontSize:11,color:"#9c9a92"}}>{open?"▲":"▼"}</span>
      </div>
      {open&&(
        <div style={{padding:"12px 14px"}}>
          <div style={{fontSize:10,color:"#6b6b67",marginBottom:12,lineHeight:1.5}}>
            Per ogni dominio di controllo valuta il livello attuale del cliente (AS-IS) e il livello target (TO-BE). Il gap giustifica scope, effort e ROI del progetto.
          </div>
          {active.map(fw => {
            const domains = MATURITY_DOMAINS[fw] || [];
            const fwDef2  = fwDef(fw);
            if(!domains.length) return null;
            return (
              <div key={fw} style={{marginBottom:14}}>
                <div style={{fontSize:11,fontWeight:600,color:fwDef2?.colore||"#1a1a18",marginBottom:6,paddingBottom:4,borderBottom:bd}}>
                  {fwDef2?.nome||fw}
                </div>
                {domains.map(domain => {
                  const asis = getVal(fw,domain,"asis");
                  const tobe = getVal(fw,domain,"tobe");
                  const gap  = tobe - asis;
                  return (
                    <div key={domain} style={{display:"grid",gridTemplateColumns:"clamp(80px,20vw,130px) 1fr 1fr 38px",gap:6,alignItems:"center",marginBottom:6}}>
                      <span style={{fontSize:10,color:"#1a1a18"}}>{domain}</span>
                      <div>
                        <div style={{fontSize:8,color:"#9c9a92",marginBottom:2}}>AS-IS {asis}/5</div>
                        <input type="range" min={1} max={5} step={1} value={asis}
                          onChange={e=>setVal(fw,domain,"asis",e.target.value)}
                          style={{width:"100%",accentColor:"#791F1F"}}/>
                      </div>
                      <div>
                        <div style={{fontSize:8,color:"#9c9a92",marginBottom:2}}>TO-BE {tobe}/5</div>
                        <input type="range" min={1} max={5} step={1} value={tobe}
                          onChange={e=>setVal(fw,domain,"tobe",e.target.value)}
                          style={{width:"100%",accentColor:"#27500A"}}/>
                      </div>
                      <div style={{textAlign:"center"}}>
                        <div style={{fontSize:9,fontWeight:700,color:gap>2?"#791F1F":gap>0?"#BA7517":"#27500A",
                          background:gap>2?"#FCEBEB":gap>0?"#FFFBF0":"#EAF3DE",borderRadius:5,padding:"2px 5px"}}>
                          {gap>0?`+${gap}`:gap}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          {active.length===0&&<div style={{fontSize:11,color:"#9c9a92",textAlign:"center",padding:"10px 0"}}>Seleziona almeno un framework per avviare l'assessment</div>}
        </div>
      )}
    </div>
  );
}

function FrameworkScreen({ active, onToggle, customMode, onToggleCustom, onNext, onBack, maturityState, onMaturityChange }) {
  const activeOverlaps = getActiveOverlaps(active);
  const totalGU = FRAMEWORKS.filter(f=>active.includes(f.codice)).reduce((s,f)=>s+f.gu_minimo,0);
  const savedGU = Math.round(activeOverlaps.reduce((s,o)=>s+(o.sconto/100*8),0));
  const totalVoci = FRAMEWORKS.filter(f=>active.includes(f.codice)).reduce((s,f)=>s+f.voci,0);
  const bd = "0.5px solid #e0ded8";
  return (
    <div>
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:14}}>
        <div>
          <div style={{fontSize:15,fontWeight:500,color:"#1a1a18"}}>Framework di conformità</div>
          <div style={{fontSize:11,color:"#6b6b67",marginTop:2}}>Seleziona i framework. I controlli condivisi vengono unificati e la cascata operativa viene calcolata automaticamente.</div>
        </div>
        <div style={{display:"flex",gap:7,flexShrink:0,marginLeft:12}}>
          <button onClick={onBack} style={{padding:"7px 12px",fontSize:12,border:"0.5px solid #e0ded8",borderRadius:8,cursor:"pointer",background:"#fff",color:"#6b6b67"}}>← Brief</button>
          <button onClick={onNext} disabled={active.length===0&&!customMode}
            style={{padding:"7px 15px",fontSize:12,background:active.length>0||customMode?"#1a1a18":"#ccc",color:"#fff",border:"none",borderRadius:8,cursor:active.length>0||customMode?"pointer":"default",whiteSpace:"nowrap"}}>
            Continua →
          </button>
        </div>
      </div>
      {/* Maturity Assessment */}
      {active.length>0&&<MaturityAssessment active={active} maturity={maturityState||{}} onChange={onMaturityChange||(_=>{})}/>}

      {/* Custom mode toggle */}
      <div onClick={onToggleCustom} style={{marginBottom:12,padding:"10px 13px",border:`0.5px solid ${customMode?"#9c9a92":"#e0ded8"}`,borderRadius:9,cursor:"pointer",background:customMode?"#fafaf8":"#fff",display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:18,height:18,borderRadius:4,border:`2px solid ${customMode?"#1a1a18":"#ccc"}`,background:customMode?"#1a1a18":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
          {customMode&&<span style={{fontSize:10,color:"#fff",fontWeight:700}}>✓</span>}
        </div>
        <div>
          <div style={{fontSize:12,fontWeight:500,color:"#1a1a18"}}>Abilita voci custom (senza framework)</div>
          <div style={{fontSize:10,color:"#6b6b67",marginTop:1}}>Permette di aggiungere righe manuali nella schermata successiva, riordinabili e non collegate ad alcun framework specifico. Può essere attivato anche insieme ai framework.</div>
        </div>
      </div>
      {active.length > 0 && (
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:7,marginBottom:12}}>
          {[{val:totalGU,lbl:"GU minime totali",c:"#1a1a18"},{val:savedGU>0?`≈-${savedGU}`:"-",lbl:"GU da overlap",c:"#27500A"},{val:totalVoci,lbl:"voci totali",c:"#1a1a18"},{val:activeOverlaps.length,lbl:"overlap attivi",c:activeOverlaps.length>0?"#185FA5":"#9c9a92"}].map(k=>(
            <div key={k.lbl} style={{background:"#f7f6f3",borderRadius:8,padding:"9px 10px",textAlign:"center",border:bd}}>
              <div style={{fontSize:18,fontWeight:700,color:k.c,lineHeight:1}}>{k.val}</div>
              <div style={{fontSize:10,color:"#6b6b67",marginTop:3,lineHeight:1.2}}>{k.lbl}</div>
            </div>
          ))}
        </div>
      )}
      {activeOverlaps.length > 0 && (
        <div style={{marginBottom:12,padding:"9px 12px",background:"#E6F1FB",borderRadius:8,border:"0.5px solid #185FA540"}}>
          <div style={{fontSize:11,fontWeight:600,color:"#185FA5",marginBottom:5}}>{activeOverlaps.length} controlli condivisi — verranno unificati e ordinati nella cascata operativa</div>
          <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
            {activeOverlaps.map(o=><span key={o.id} style={{fontSize:10,padding:"2px 8px",borderRadius:8,background:o.special?"#FAEEDA":"#fff",color:o.special?"#633806":"#185FA5",border:`0.5px solid ${o.special?"#BA751780":"#185FA530"}`,fontWeight:500}}>{o.label} · -{o.sconto}% GU</span>)}
          </div>
        </div>
      )}
      <div style={{display:"flex",flexDirection:"column",gap:7}}>
        {FRAMEWORKS.map(f => {
          const on = active.includes(f.codice);
          const myOvls = OVERLAPS.filter(o=>o.frameworks.includes(f.codice)&&o.frameworks.some(x=>x!==f.codice&&active.includes(x)));
          return (
            <div key={f.codice} onClick={()=>onToggle(f.codice)} style={{border:`0.5px solid ${on?f.colore:"#e0ded8"}`,borderRadius:10,padding:"11px 13px",cursor:"pointer",background:on?f.bgLight:"#fff",transition:"all .12s"}}>
              <div style={{display:"flex",alignItems:"flex-start",gap:10}}>
                <div style={{width:44,height:22,borderRadius:5,background:on?f.colore:"#f0f0ee",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:on?"#fff":"#999",flexShrink:0,marginTop:2}}>{f.nome}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2,flexWrap:"wrap"}}>
                    <span style={{fontSize:12,fontWeight:500,color:"#1a1a18"}}>{f.desc}</span>
                    {f.condizionale&&<span style={{fontSize:10,padding:"1px 6px",borderRadius:7,background:"#FAEEDA",color:"#633806",fontWeight:500}}>condizionale</span>}
                  </div>
                  {f.condizionale&&<div style={{fontSize:10,color:"#854F0B",marginBottom:3}}>{f.condizione}</div>}
                  <div style={{display:"flex",gap:10,fontSize:11,color:"#6b6b67",flexWrap:"wrap"}}>
                    <span style={{color:on?f.colore:"#6b6b67",fontWeight:on?600:400}}>≥{f.gu_minimo} GU</span>
                    <span>{f.voci} voci</span>
                    <span style={{color:"#9c9a92"}}>{f.nota}</span>
                  </div>
                  {on&&myOvls.length>0&&<div style={{marginTop:5,display:"flex",gap:4,flexWrap:"wrap"}}>{myOvls.map(o=><span key={o.id} style={{fontSize:10,padding:"1px 7px",borderRadius:7,background:o.special?"#FAEEDA":"#E6F1FB",color:o.special?"#633806":"#185FA5",fontWeight:500}}>↔ {o.label.replace(" ⚠","")}: -{o.sconto}%</span>)}</div>}
                </div>
                <div style={{width:18,height:18,borderRadius:"50%",border:`2px solid ${on?f.colore:"#ccc"}`,background:on?f.colore:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:3}}>
                  {on&&<div style={{width:7,height:7,borderRadius:"50%",background:"#fff"}}/>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── ITEM CARD ────────────────────────────────────────────────────────────────

// ─── ITEM FIGURE EDITOR ───────────────────────────────────────────────────────
// ItemFigureEditor — compliance items: all figures (incl. PM) sum to 100%
// figurePct = { figId: pct }, onPctChange = (figId, newPct) => void
function ItemFigureEditor({ figures=[], onChange, allFigures=FIGURES_MASTER_DEFAULT, onAddFigure, onUpdateFigure, clienteFigSet=new Set(),
    figurePct={}, onPctChange }) {
  const [open, setOpen]       = useState(false);
  const [showPct, setShowPct] = useState(false);
  const bd = "0.5px solid #e0ded8";

  const noFig = !figures || figures.length === 0;
  const norm  = [...new Set((figures||[]).map(f=>normFig(f, allFigures)))];

  // Effective pcts — equal default if not set
  const getEffPct = (fid) => figurePct[fid] ?? (norm.length>0 ? Math.round(100/norm.length) : 0);
  const pctSum    = norm.reduce((s,f)=>s+getEffPct(f), 0);
  const pctOk     = Math.abs(pctSum-100) <= 1;

  const equalize  = () => {
    const eq = Math.floor(100/norm.length);
    norm.forEach((f,i) => onPctChange&&onPctChange(f, i===norm.length-1 ? 100-eq*(norm.length-1) : eq));
  };

  const setPctFig = (fid, val) => {
    const v = Math.max(0, Math.min(100, parseInt(val)||0));
    onPctChange&&onPctChange(fid, v);
  };

  return (
    <div style={{marginTop:3}}>
      {/* Chips + add button */}
      <div style={{display:"flex",alignItems:"center",gap:3,flexWrap:"wrap",minHeight:22}}>
        {noFig&&<span style={{fontSize:9,color:"#E24B4A",fontWeight:600,padding:"2px 6px",borderRadius:6,background:"#FCEBEB",border:"0.5px solid #E24B4A50"}}>⚠ Nessuna risorsa</span>}
        {norm.map(fid=>{
          const fig     = allFigures.find(f=>f.id===fid)||{id:fid,label:fid,short:(fid||"?").slice(0,4).toUpperCase(),colore:"#9c9a92"};
          const pct     = getEffPct(fid);
          const cliente = isClienteFig(fid, allFigures, clienteFigSet);
          return (
            <span key={fid} title={cliente?"Figura cliente — non conteggiata nell'effort":fig.label}
              style={{display:"inline-flex",alignItems:"center",gap:3,padding:"2px 7px",borderRadius:9,
                background:cliente?"#f0f0ee":fig.colore,color:cliente?"#6b6b67":"#fff",
                fontSize:10,fontWeight:600,border:cliente?"1px dashed #9c9a92":"none"}}>
              {cliente&&<span style={{fontSize:9}}>🏢</span>}
              {fig.short}
              {norm.length>1&&!cliente&&<span style={{opacity:.85,fontSize:9}}> {pct}%</span>}
              <span onMouseDown={e=>{e.stopPropagation();onChange(figures.filter(x=>normFig(x,allFigures)!==fid));}} style={{cursor:"pointer",opacity:.7,lineHeight:1,marginLeft:1}}>×</span>
            </span>
          );
        })}
        <button onMouseDown={e=>{e.stopPropagation();setOpen(v=>!v);}}
          style={{fontSize:9,padding:"2px 7px",borderRadius:7,border:"0.5px dashed #9c9a92",cursor:"pointer",background:open?"#f0f0ee":"transparent",color:"#6b6b67"}}>
          {open?"✕":"+ risorsa"}
        </button>
        {norm.length>1&&(
          <button onMouseDown={e=>{e.stopPropagation();setShowPct(v=>!v);}}
            style={{fontSize:9,padding:"2px 7px",borderRadius:7,border:`0.5px solid ${pctOk?"#27500A":"#E24B4A"}`,cursor:"pointer",background:showPct?"#f7f6f3":"transparent",
              color:pctOk?"#27500A":"#E24B4A",fontWeight:500}}>
            Σ {pctSum}%{pctOk?" ✓":" ⚠"}
          </button>
        )}
      </div>

      {/* Lookup dropdown */}
      {open&&(
        <div style={{marginTop:4}}>
          <FigureLookup selected={norm} onChange={v=>{onChange(v);setOpen(false);}} allFigures={allFigures} onAddFigure={f=>{onAddFigure&&onAddFigure(f);}}/>
        </div>
      )}

      {/* % sliders — compliance mode: PM included in 100% */}
      {showPct&&norm.length>1&&(
        <div style={{marginTop:5,padding:"8px 10px",background:"#f7f6f3",borderRadius:7,border:bd}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
            <span style={{fontSize:9,fontWeight:700,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em"}}>% GU per figura — tutte contribuiscono al 100%</span>
            <button onClick={equalize} style={{fontSize:9,padding:"1px 7px",border:bd,borderRadius:5,cursor:"pointer",background:"#fff",color:"#185FA5",fontWeight:500}}>Equalizza</button>
          </div>
          {norm.map(fid=>{
            const fig = allFigures.find(f=>f.id===fid)||allFigures.find(f=>f.short===fid)||{id:fid,label:fid,short:(fid||'?').slice(0,3).toUpperCase(),colore:"#6b6b67"};
            const pct = getEffPct(fid);
            const cli = isClienteFig(fid, allFigures, clienteFigSet);
            return (
              <div key={fid} style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
                <span style={{width:26,padding:"1px 3px",borderRadius:4,background:cli?"#e0ded8":fig.colore,color:cli?"#6b6b67":"#fff",fontSize:8,fontWeight:700,textAlign:"center",flexShrink:0}}>{fig.short}</span>
                <input type="range" min={0} max={100} step={1} value={pct} onChange={e=>setPctFig(fid,e.target.value)}
                  style={{flex:1,accentColor:cli?"#ccc":fig.colore,opacity:cli?0.4:1}} disabled={cli}/>
                <span style={{fontSize:10,fontWeight:700,color:cli?"#ccc":fig.colore,width:28,textAlign:"right",flexShrink:0}}>{cli?"—":pct+"%"}</span>
                <button onClick={()=>{
                  if(onUpdateFigure) onUpdateFigure(fid, {isCliente:!cli});
                  else { const ex=allFigures.find(f=>f.id===fid); if(ex) ex.isCliente=!cli; }
                  onPctChange&&onPctChange(fid, getEffPct(fid)); // force re-render
                }} title={cli?"Rimuovi da cliente (torna team)":"Segna come figura cliente (non fatturata)"}
                  style={{fontSize:9,padding:"1px 5px",borderRadius:5,border:`1px solid ${cli?"#27500A":"#BA7517"}`,cursor:"pointer",
                    background:cli?"#EAF3DE":"#FFF8EC",color:cli?"#27500A":"#BA7517",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"}}>
                  {cli?"👤 team":"🏢 cli"}
                </button>
              </div>
            );
          })}
          <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:6,marginTop:3,paddingTop:4,borderTop:bd}}>
            <span style={{fontSize:10,color:"#6b6b67"}}>Totale:</span>
            <span style={{fontSize:11,fontWeight:700,color:pctOk?"#27500A":"#E24B4A",fontFamily:"monospace"}}>{pctSum}%{pctOk?" ✓":" — deve essere 100%"}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function ItemCard({ item, guVal, onGuChange, stato, onToggleStato, giust, onGu0, onOpenOverlap, expanded, onToggleExpand, itemFigures, onFigureChange, figurePct={}, onFigurePctChange, allFigures, onAddFigure, onUpdateFigure, clienteFigSet=new Set(), pmPct=5, onToggleMilestone }) {
  const bd = "0.5px solid #e0ded8";
  const st = stato;
  const stStyle = { c: st==="coperto"?"#27500A":st==="giustificato"?"#633806":"#9c9a92", bg: st==="coperto"?"#EAF3DE":st==="giustificato"?"#FAEEDA":"#f7f6f3", lbl: st==="coperto"?"coperto":st==="giustificato"?"GU=0 ✓":"aperto" };
  const isZero = guVal === 0;
  const hasOvl = !!item._overlap;
  const f2 = fwDef(item.fw);
  const isCustom = !!item._custom;
  const leftBorder = isCustom ? "#9c9a92" : isZero ? "#E24B4A" : hasOvl ? "#185FA5" : item.aggiunto ? "#BA7517" : f2?.colore || "#e0ded8";

  return (
    <div style={{border:`0.5px ${isCustom?"dashed":"solid"} #e0ded8`,borderLeft:`3px ${isCustom?"dashed":"solid"} ${leftBorder}`,borderRadius:"0 8px 8px 0",marginBottom:5,background:isCustom?"#fafaf8":isZero?"#fff8f8":"#fff"}}>
      <div style={{display:"flex",alignItems:"flex-start",gap:8,padding:"9px 12px 6px"}}>
        <div style={{flex:1,minWidth:0}}>
          {/* badges */}
          <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:3,flexWrap:"wrap"}}>
            <span style={{fontSize:10,color:"#9c9a92",fontFamily:"monospace"}}>{item.codice}</span>
            {isZero&&<span style={{fontSize:10,padding:"1px 6px",borderRadius:7,background:"#FCEBEB",color:"#791F1F",fontWeight:500}}>⚠ GU=0</span>}
            {guVal>0&&guVal<item.gu_min&&<span style={{fontSize:10,padding:"1px 6px",borderRadius:7,background:"#FAEEDA",color:"#633806",fontWeight:500}}>↓ sotto min.</span>}
          </div>
          <div style={{fontSize:12,fontWeight:500,color:"#1a1a18",marginBottom:hasOvl?4:3}}>{item.titolo}</div>

          {/* overlap — messaggio più esplicito: il GU di questa voce e il GU nella STIMA devono coincidere */}
          {hasOvl&&<button onClick={()=>onOpenOverlap(item._overlap)}
            style={{display:"flex",alignItems:"center",gap:6,marginBottom:5,padding:"5px 9px",background:"#E6F1FB",border:"0.5px solid #185FA540",borderRadius:7,cursor:"pointer",width:"100%",textAlign:"left"}}>
            <div style={{width:14,height:14,borderRadius:3,background:"#185FA5",color:"#fff",fontSize:9,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>↔</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:11,fontWeight:600,color:"#185FA5"}}>{item._overlap.label.replace(" ⚠","")}</div>
              <div style={{fontSize:10,color:"#4a7fb5",marginTop:1}}>
                {item._overlap.activeFws.map(f=>fwDef(f)?.nome).join(" + ")}
                {" · "}<strong>-{item._overlap.sconto}%</strong>
                {(item.codice==="SOX-IT-DEV-01"||item.codice==="SOX-IT-IMPL-01")&&
                  <span style={{color:"#791F1F",fontWeight:600}}> · GU = riga Tecnico nella STIMA — allineali</span>}
              </div>
            </div>
            {item._overlap.special&&<span style={{fontSize:10,padding:"1px 6px",borderRadius:6,background:"#FAEEDA",color:"#633806",fontWeight:500,flexShrink:0}}>⚠</span>}
            <span style={{fontSize:10,color:"#185FA5",flexShrink:0}}>↗</span>
          </button>}

          <ItemFigureEditor figures={itemFigures||item.figure} onChange={onFigureChange||(() =>{})} allFigures={allFigures||FIGURES_MASTER_DEFAULT} onAddFigure={onAddFigure} onUpdateFigure={onUpdateFigure} clienteFigSet={clienteFigSet} pmPct={pmPct} figurePct={figurePct} onPctChange={onFigurePctChange}/>

          {/* expandable guide section */}
          <button onClick={onToggleExpand}
            style={{display:"flex",alignItems:"center",gap:4,marginTop:5,padding:"3px 8px",background:"transparent",border:"0.5px solid #e0ded8",borderRadius:6,cursor:"pointer",fontSize:10,color:"#6b6b67"}}>
            <span style={{fontSize:9}}>{expanded?"▼":"▶"}</span>
            {expanded ? "Nascondi guida" : "Come si esegue · Deliverable · GU breakdown"}
          </button>

          {expanded&&<div style={{marginTop:6,padding:"10px 12px",background:"#f7f6f3",borderRadius:7,border:bd}}>
            {item.guida&&<div style={{marginBottom:8}}>
              <div style={{fontSize:10,fontWeight:600,color:"#1a1a18",textTransform:"uppercase",letterSpacing:".04em",marginBottom:4}}>Come si esegue</div>
              <div style={{fontSize:11,color:"#2a2a28",lineHeight:1.6}}>{item.guida}</div>
            </div>}
            {item.deliverable&&<div style={{marginBottom:8}}>
              <div style={{fontSize:10,fontWeight:600,color:"#1a1a18",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Deliverable</div>
              <div style={{fontSize:11,color:"#2a2a28",padding:"5px 8px",background:"#EAF3DE",borderRadius:5,borderLeft:"2px solid #27500A"}}>{item.deliverable}</div>
            </div>}
            {item.gu_breakdown&&<div>
              <div style={{fontSize:10,fontWeight:600,color:"#1a1a18",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>GU breakdown</div>
              <div style={{fontSize:11,color:"#633806",padding:"5px 8px",background:"#FAEEDA",borderRadius:5,borderLeft:"2px solid #BA7517"}}>{item.gu_breakdown}</div>
            </div>}
          </div>}

          {isZero&&!giust&&<div style={{marginTop:4,fontSize:11,color:"#791F1F",lineHeight:1.5,paddingTop:4,borderTop:bd}}>{item.rischio}</div>}
          {giust&&<div style={{marginTop:4,padding:"5px 8px",background:"#FAEEDA",borderRadius:6,fontSize:11,color:"#633806"}}><strong>Giustificazione:</strong> {giust}</div>}
        </div>
        {/* GU + stato + milestone */}
        <div style={{display:"flex",alignItems:"center",gap:6,flexShrink:0,paddingTop:2}}>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:9,color:"#9c9a92",marginBottom:2}}>
              {(item.codice==="SOX-IT-DEV-01"||item.codice==="SOX-IT-IMPL-01")?"da STIMA":`min ${item.gu_min}`}
            </div>
            <input type="number" min={0} value={guVal} onChange={e=>{const n=parseInt(e.target.value)||0; n===0?onGu0():onGuChange(n)}}
              style={{width:52,padding:"5px 5px",fontSize:13,fontWeight:700,textAlign:"center",border:`1px solid ${isZero?"#E24B4A":guVal>0&&guVal<item.gu_min?"#BA7517":"#e0ded8"}`,borderRadius:6,color:isZero?"#791F1F":guVal>0&&guVal<item.gu_min?"#633806":"#1a1a18",outline:"none"}}/>
            {hasOvl&&guVal>0&&<div style={{fontSize:9,color:"#185FA5",marginTop:2,fontWeight:600}}>-{item._overlap.sconto}%</div>}
          </div>
          <div style={{width:1,height:30,background:"#e0ded8"}}/>
          <button onClick={onToggleStato} style={{padding:"4px 8px",fontSize:11,border:`1px solid ${stStyle.c}30`,borderRadius:12,cursor:"pointer",background:stStyle.bg,color:stStyle.c,fontWeight:600,whiteSpace:"nowrap"}}>{stStyle.lbl}</button>
          <button onClick={onToggleMilestone} title={item.is_milestone?"Rimuovi milestone":"Segna come milestone"}
            style={{width:24,height:24,borderRadius:"50%",border:`1px solid ${item.is_milestone?"#BA7517":"#e0ded8"}`,cursor:"pointer",
              background:item.is_milestone?"#BA7517":"transparent",fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            {item.is_milestone?"★":"☆"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── STIMA BLOCK ──────────────────────────────────────────────────────────────
// Struttura fedele a STIMA_KERING_V2.xlsx
// Foglio REQ: ID | INFORMAZIONI | RELAZIONE | TIPO REQUIREMENT | REQUIREMENT |
//             NASCOSTA(auto) | IPOTESI | ASSUNZIONI TECNICHE | NASCOSTA2(auto) |
//             STIMA | ANALISI | DESIGN | RISCHI | REQ TOTALE | BRAND | AMBITO
// Foglio STIMA: G/U | %OVL | G/U S | %RISK | G/U R | PARZIALE |
//               Analysis | gg analisi | Design | gg design | Test book | gg testbook |
//               Data prep | gg data prep | Fix | gg fix | Deploy | gg deploy |
//               SOMMA SU % | PM | gg PM | Contingency | gg Conting |
//               SOMMA STIMA TOTALE | SOLO FIX DEPLOY CONTING | ANALISI TEST PM
//
// FORMULA CORRETTA:
//   SOMMA SU % = PARZIALE × (1 + Analysis + Design + TestBook + DataPrep + Fix×2 + Deploy)
//   gg PM displayed = PM × PARZIALE  (informativo, ≠ contributo al totale)
//   TOTALE = SSP × (1 + PM + Contingency)
//   FDEC   = PARZIALE × (1 + Fix + Deploy + Contingency)
//   ATPM   = TOTALE - FDEC

const TIPI = {
  tecnico:    { label:"Tecnico",    short:"T", colore:"#533AB7",
    nota:"Sviluppo e implementazione tecnica. L'analisi funzionale è già nella riga F. No testbook separato tipicamente.",
    pct_def:{ ovl:20,risk:60,analysis:5, design:10,testbook:0,dataprep:0,fix:10,deploy:0, pm:5,contingency:10 } },
  funzionale: { label:"Funzionale", short:"F", colore:"#185FA5",
    nota:"Analisi funzionale, business requirements. L'analisi pesa di più. Se nessun impatto funzionale: STIMA=0.",
    pct_def:{ ovl:20,risk:50,analysis:40,design:20,testbook:0,dataprep:0,fix:10,deploy:10,pm:0,contingency:10 } },
  security:   { label:"Security",   short:"S", colore:"#791F1F",
    nota:"Assessment sicurezza e compliance. No deploy. Se nessun impatto: STIMA=0 e REQUIREMENT='Nessun impatto'.",
    pct_def:{ ovl:10,risk:20,analysis:20,design:0, testbook:0,dataprep:0,fix:5, deploy:0, pm:5,contingency:10 } },
};
const TIPI_ORDER = ["tecnico","funzionale","security"];

const STIMA_STATI_DEF = [
  { id:"commerciale", label:"Commerciale", short:"COM",
    desc:"Stima preliminare post-gap analysis. Da presentare al cliente per allineamento budget prima del design." },
  { id:"predesign",   label:"Pre-Design",  short:"PRD",
    desc:"Stima definitiva post-design, pre-sprint. Baseline formale di progetto." },
  { id:"consuntivo",  label:"Consuntivo",  short:"CNT",
    desc:"Actual — GU realmente consuntivate. Confronto con Pre-Design = scostamenti." },
];

// ── Formula STIMA (fedele al foglio STIMA_KERING_V2.xlsx) ─────────────────────
function calc13(gu, pct) {
  const gu_s = gu * (1 - pct.ovl/100);
  const gu_r = gu_s * (1 + pct.risk/100);
  const P    = Math.ceil(gu_r);
  const an   = pct.analysis/100*P, de=pct.design/100*P,
        tb   = pct.testbook/100*P,  dp=pct.dataprep/100*P,
        fx   = pct.fix/100*P,       pl=pct.deploy/100*P;
  // SOMMA SU PERCENTUALI — Fix appare 2 volte (identico al foglio Excel)
  const ssp  = P + an + de + tb + dp + fx*2 + pl;
  // gg PM / gg Contingency displayed = × PARZIALE (colonne informative del foglio)
  const gg_pm = pct.pm/100 * P;
  const gg_ct = pct.contingency/100 * P;
  // TOTALE = SSP × (1 + PM + Contingency)
  const tot  = Math.ceil(ssp * (1 + pct.pm/100 + pct.contingency/100));
  // SOLO FIX DEPLOY CONTINGENZA = PARZIALE × (1 + Fix + Deploy + Contingency)
  const fdec = Math.ceil(P * (1 + pct.fix/100 + pct.deploy/100 + pct.contingency/100));
  return { gu, gu_s, gu_r, P, an, de, tb, dp, fx, pl, ssp, gg_pm, gg_ct, tot, fdec, atpm: tot-fdec };
}

// ── Data structures ────────────────────────────────────────────────────────────
let _rid=1, _sid=200;
const TIPO_FIGURES_DEFAULT = {
  tecnico:    ["CTO","Team_IT"],
  funzionale: ["BA"],
  security:   ["CISO"],
};
const makeSub = (tipo) => ({
  id: String(_sid++), tipo,
  requirement:"", ipotesi:"", assunzioni:"", analisi_note:"", design_note:"",
  rischi:"", brand:"", ambito:"", gu:0, is_milestone: false,
  figure: [...(TIPO_FIGURES_DEFAULT[tipo]||["BA"])],
  figure_pct: {},
  pct:{ ...TIPI[tipo].pct_def },
});
const makeReq = () => ({
  id:`REQ-${String(_rid++).padStart(3,"0")}`,
  informazioni:"", relazione:"",
  sub_rows: Object.fromEntries(TIPI_ORDER.map(t=>[t, makeSub(t)])),
});

// INIT — esempi realistici conformi al modello Excel
const REQS_INIT = [
  (() => {
    const r=makeReq(); r.informazioni="Controllo Accessi / IAM"; r.relazione="Sicurezza > Access Management";
    r.sub_rows.tecnico  = {...r.sub_rows.tecnico,  requirement:"Implementazione MFA + configurazione PAM per sistemi in scope",
      ipotesi:"I sistemi supportano TOTP e FIDO2. AD/LDAP già presente.",
      assunzioni:"1 - PAM tramite strumento esistente; 2 - MFA obbligatoria per accessi remoti e sistemi critici; 3 - logging sessioni privilegiate abilitato",
      rischi:"Dipendenza da integrazione LDAP — modifiche potrebbero impattare altri servizi",
      brand:"",ambito:"BE",gu:15};
    r.sub_rows.funzionale={...r.sub_rows.funzionale,requirement:"Processo provisioning/deprovisioning documentato e automatizzato",
      ipotesi:"Il processo attuale è manuale. L'automazione riduce il rischio SoD.",
      assunzioni:"Si automatizza via script collegato all'HR system; deprovisioning entro 24h dall'uscita",
      rischi:"Resistenza del team IT alle modifiche del processo corrente",
      ambito:"Processo",gu:5};
    r.sub_rows.security  = {...r.sub_rows.security, requirement:"Verifica conformità IAM vs SOX ITGC AC, NIS2 Art.21j, ISO 27001 A.5.15-5.18",
      assunzioni:"Test su campione di 25 utenti per controllo",
      rischi:"Accessi non revocati da dipendenti usciti = finding critico SOX",
      ambito:"Compliance",gu:4};
    return r;
  })(),
  (() => {
    const r=makeReq(); r.informazioni="Motore di Regole EPC"; r.relazione="GS1 > Encoding Engine";
    r.sub_rows.tecnico  = {...r.sub_rows.tecnico,  requirement:"GetTagFromProduct API — nuovo servizio per calcolo EPC da scrivere",
      ipotesi:"Il servizio deve supportare multi-tenant e dry-run (no scrittura fisica per test)",
      assunzioni:"1 - REST API; 2 - parametro simulazione obbligatorio; 3 - supporto multi-schema (SGTIN-96/198)",
      design_note:"https://sharepoint.../design-GetTagFromProduct",
      ambito:"BE",gu:8};
    r.sub_rows.funzionale={...r.sub_rows.funzionale,requirement:"Interfaccia CRUD per configurazione regole di encoding",
      ipotesi:"Pannello admin per gestione regole per classe merceologica",
      assunzioni:"React admin panel; implementazione CRUD sulle regole; filtri per brand/BU",
      rischi:"Verificare applicabilità del control panel con tutti i brand",
      ambito:"FE/MOB",gu:5};
    r.sub_rows.security  = {...r.sub_rows.security, requirement:"Inserire sistema di autenticazione — integrazione Keycloak",
      ipotesi:"Agganciare Keycloak esistente; TMR 4 non ha integrazione nativa",
      rischi:"TMR 4 non ha integrazione con Keycloak — impatto maggiore del previsto",
      ambito:"BE",gu:3};
    return r;
  })(),
];

function StimaBlock({ title, subtitle, color="#BA7517", bg="#FFF8EC", complianceItems, cascadeGU }) {
  const [states, setStates] = useState(()=>({
    commerciale:{ reqs: JSON.parse(JSON.stringify(REQS_INIT)) },
    predesign:  { reqs: JSON.parse(JSON.stringify(REQS_INIT)) },
    consuntivo: { reqs: JSON.parse(JSON.stringify(REQS_INIT)) },
  }));
  const [stId, setStId]     = useState("commerciale");
  const [open, setOpen]     = useState(false);
  const [tab, setTab]       = useState("requisiti");
  const [reqOpen, setReqOpen] = useState({});
  const [subOpen, setSubOpen] = useState({});  // rowId → "text"|"13col"|null
  const bd = "0.5px solid #e0ded8";

  const cur = states[stId];

  // ── Mutations ──────────────────────────────────────────────────────────────
  const updReqs  = fn => setStates(s=>({...s,[stId]:{reqs:fn(s[stId].reqs)}}));
  const addReq   = ()    => updReqs(rs=>[...rs, makeReq()]);
  const delReq   = id    => updReqs(rs=>rs.filter(r=>r.id!==id));
  const editReq  = (id,k,v)   => updReqs(rs=>rs.map(r=>r.id===id?{...r,[k]:v}:r));
  const editSub  = (rId,tipo,k,v) => updReqs(rs=>rs.map(r=>r.id===rId
    ?{...r,sub_rows:{...r.sub_rows,[tipo]:{...r.sub_rows[tipo],[k]:k==="gu"?Math.max(0,parseInt(v)||0):v}}}:r));
  const editPct  = (rId,tipo,k,v) => updReqs(rs=>rs.map(r=>r.id===rId
    ?{...r,sub_rows:{...r.sub_rows,[tipo]:{...r.sub_rows[tipo],pct:{...r.sub_rows[tipo].pct,[k]:parseInt(v)}}}}:r));
  const resetPct = (rId,tipo)     => updReqs(rs=>rs.map(r=>r.id===rId
    ?{...r,sub_rows:{...r.sub_rows,[tipo]:{...r.sub_rows[tipo],pct:{...TIPI[tipo].pct_def}}}}:r));

  const toggleReq    = id => setReqOpen(p=>({...p,[id]:!p[id]}));
  const toggleSubSec = (sid,sec) => setSubOpen(p=>({...p,[sid]: p[sid]===sec ? null : sec}));

  // ── Aggregates ────────────────────────────────────────────────────────────
  const allCalcs = cur.reqs.flatMap(r=>TIPI_ORDER.map(t=>calc13(r.sub_rows[t].gu, r.sub_rows[t].pct)));
  const agg = allCalcs.reduce((a,c)=>({
    gu:a.gu+c.gu, P:a.P+c.P, an:a.an+c.an, de:a.de+c.de,
    tb:a.tb+c.tb, dp:a.dp+c.dp, fx:a.fx+c.fx, pl:a.pl+c.pl,
    ssp:a.ssp+c.ssp, gg_pm:a.gg_pm+c.gg_pm, gg_ct:a.gg_ct+c.gg_ct,
    tot:a.tot+c.tot, fdec:a.fdec+c.fdec, atpm:a.atpm+c.atpm,
  }), {gu:0,P:0,an:0,de:0,tb:0,dp:0,fx:0,pl:0,ssp:0,gg_pm:0,gg_ct:0,tot:0,fdec:0,atpm:0});

  const statTot = sid => states[sid].reqs.flatMap(r=>TIPI_ORDER.map(t=>calc13(r.sub_rows[t].gu,r.sub_rows[t].pct))).reduce((s,c)=>s+c.tot,0);

  // Overlap detection
  const ovlCodici = ["SOX-IT-ITGC-01","SOX-IT-AC-01","SOX-IT-RISK-01","SOX-IT-DEV-01","SOX-IT-TEST-01","NIS2-RISK-01","27001-CL6-01"];
  const ovlItems = (complianceItems||[]).filter(i=>ovlCodici.includes(i.codice));

  const PCT_LABELS = [
    ["ovl","% Sovrapponibilità",0,50],["risk","% Rischio",0,80],
    ["analysis","Analysis",0,50],["design","Design",0,40],
    ["testbook","Test book",0,40],["dataprep","Data prep & exec",0,30],
    ["fix","Fix (×2)",0,40],["deploy","Deploy",0,30],
    ["pm","PM",0,20],["contingency","Contingency",0,40],
  ];

  return (
    <div style={{margin:"4px 0 18px",border:`1.5px solid ${color}70`,borderLeft:`5px solid ${color}`,borderRadius:"0 10px 10px 0",background:bg}}>

      {/* ── COMPACT HEADER ─────────────────────────────────────────── */}
      <div style={{display:"flex",alignItems:"center",gap:8,padding:"7px 12px",cursor:"pointer",minHeight:46}} onClick={()=>setOpen(v=>!v)}>
        <div style={{width:26,height:26,borderRadius:6,background:color,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,flexShrink:0}}>∑</div>
        <div style={{flex:1,minWidth:0}}>
          <span style={{fontSize:11,fontWeight:700,color,marginRight:8}}>{title}</span>
          {!open&&<span style={{fontSize:9,color:"#9c9a92"}}>{subtitle}</span>}
        </div>
        {/* State pills */}
        <div style={{display:"flex",alignItems:"center",gap:2,flexShrink:0}}>
          {STIMA_STATI_DEF.map((s,i)=>{
            const active=s.id===stId;
            return (
              <div key={s.id} style={{display:"flex",alignItems:"center"}} onClick={e=>{e.stopPropagation();setStId(s.id);}}>
                {i>0&&<div style={{width:10,height:1,background:"#ccc"}}/>}
                <div style={{padding:"2px 7px",borderRadius:9,fontSize:10,fontWeight:active?700:400,cursor:"pointer",
                  background:active?color:"transparent",color:active?"#fff":"#aaa",
                  border:`1px solid ${active?color:"#e0ded8"}`}}>
                  {s.short}&nbsp;<span style={{fontFamily:"monospace"}}>{statTot(s.id)}</span>
                </div>
              </div>
            );
          })}
        </div>
        {/* KPIs */}
        <div style={{display:"flex",gap:9,alignItems:"center",flexShrink:0,marginLeft:4}}>
          {[{l:"G/U",v:agg.gu},{l:"TOTALE",v:agg.tot,c:color},{l:"REQ",v:cur.reqs.length}].map(k=>(
            <div key={k.l} style={{textAlign:"center"}}>
              <div style={{fontSize:8,color:"#9c9a92",textTransform:"uppercase"}}>{k.l}</div>
              <div style={{fontSize:13,fontWeight:700,color:k.c||"#1a1a18",fontFamily:"monospace",lineHeight:1.2}}>{k.v}</div>
            </div>
          ))}
          <span style={{fontSize:10,color:"#9c9a92"}}>{open?"▲":"▼"}</span>
        </div>
      </div>

      {open&&(
        <div style={{borderTop:`0.5px solid ${color}40`}}>

          {/* State selector */}
          <div style={{padding:"10px 14px 0",display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"}}>
            {STIMA_STATI_DEF.map(s=>(
              <button key={s.id} onClick={()=>setStId(s.id)}
                style={{padding:"4px 11px",fontSize:11,border:`1px solid ${s.id===stId?color:"#ddd"}`,borderRadius:7,cursor:"pointer",background:s.id===stId?color:"#fff",color:s.id===stId?"#fff":"#6b6b67",fontWeight:s.id===stId?700:400}}>
                {s.label} <span style={{fontFamily:"monospace"}}>{statTot(s.id)}</span>
              </button>
            ))}
            <span style={{fontSize:10,color:"#6b6b67",flex:1,paddingLeft:4}}>{STIMA_STATI_DEF.find(s=>s.id===stId)?.desc}</span>
          </div>

          {/* Overlap notice */}
          {ovlItems.length>0&&(
            <div style={{margin:"8px 14px 0",padding:"6px 10px",background:"#FCEBEB",borderRadius:6,border:"0.5px solid #E24B4A50",fontSize:10,color:"#791F1F"}}>
              ⚡ <strong>{ovlItems.length} voci compliance</strong> in cascata coincidono con lavoro presente nella STIMA (es. Sprint compliance = riga Tecnico sviluppo). <strong style={{color:"#791F1F"}}>Il GU della voce compliance deve corrispondere al GU della riga STIMA corrispondente — non sommarli.</strong> Stima G/U Tecnico: {ovlItems.filter(i=>i.codice==="SOX-IT-DEV-01").reduce((s,i)=>s+(cascadeGU?.[i.codice]??i.gu_min),0)} · {ovlItems.reduce((s,i)=>s+(cascadeGU?.[i.codice]??i.gu_min),0)>0&&`Cascade totale: ${ovlItems.reduce((s,i)=>s+(cascadeGU?.[i.codice]??i.gu_min),0)} G/U`} — aggiorna uno dei due se divergono.
            </div>
          )}

          {/* Tabs */}
          <div style={{padding:"10px 14px 0",display:"flex",gap:6}}>
            {[{v:"requisiti",l:`Requisiti REQ (${cur.reqs.length} × 3 righe)`},{v:"aggregate",l:"STIMA aggregata — sola lettura"}].map(({v,l})=>(
              <button key={v} onClick={()=>setTab(v)} style={{padding:"5px 11px",fontSize:11,border:`0.5px solid ${tab===v?color:bd}`,borderRadius:8,cursor:"pointer",background:tab===v?color:"#fff",color:tab===v?"#fff":"#6b6b67",fontWeight:tab===v?600:400}}>{l}</button>
            ))}
          </div>

          <div style={{padding:"10px 14px 14px"}}>

            {/* ── TAB REQUISITI ──────────────────────────────────────── */}
            {tab==="requisiti"&&(
              <div>
                <div style={{padding:"6px 10px",background:"#f7f6f3",borderRadius:7,marginBottom:10,fontSize:10,color:"#6b6b67",border:bd}}>
                  Struttura: ogni riga ha 3 sotto-righe <strong>T/F/S</strong> con lo stesso ID padre. Ogni riga ha i propri parametri di stima. STIMA=0 e REQUIREMENT="Nessun impatto" = riga non applicabile.
                </div>

                {cur.reqs.map((req,ri)=>{
                  const isOpen = reqOpen[req.id] !== false;
                  const reqTot = TIPI_ORDER.reduce((s,t)=>s+calc13(req.sub_rows[t].gu,req.sub_rows[t].pct).tot,0);
                  const reqGU  = TIPI_ORDER.reduce((s,t)=>s+req.sub_rows[t].gu,0);
                  return (
                    <div key={req.id} style={{marginBottom:9,border:bd,borderRadius:8,overflow:"hidden"}}>
                      {/* Req header */}
                      <div style={{display:"flex",alignItems:"center",gap:7,padding:"8px 11px",background:"#fafaf8",cursor:"pointer",borderBottom:isOpen?bd:"none"}} onClick={()=>toggleReq(req.id)}>
                        <span style={{fontSize:10,fontFamily:"monospace",color:"#9c9a92",flexShrink:0}}>{req.id}</span>
                        <input value={req.informazioni} onChange={e=>{e.stopPropagation();editReq(req.id,"informazioni",e.target.value);}} onClick={e=>e.stopPropagation()} placeholder="INFORMAZIONI — contesto/sistema padre..."
                          style={{flex:1,padding:"3px 7px",fontSize:11,fontWeight:600,border:bd,borderRadius:5,outline:"none",color:"#1a1a18",background:"transparent"}}/>
                        <input value={req.relazione} onChange={e=>{e.stopPropagation();editReq(req.id,"relazione",e.target.value);}} onClick={e=>e.stopPropagation()} placeholder="RELAZIONE / gerarchia..."
                          style={{width:140,padding:"3px 7px",fontSize:10,border:bd,borderRadius:5,outline:"none",color:"#6b6b67",background:"transparent"}}/>
                        <span style={{fontSize:10,color:"#6b6b67",fontFamily:"monospace",flexShrink:0}}>{reqGU}→<strong style={{color}}>{reqTot}</strong></span>
                        <button onClick={e=>{e.stopPropagation();delReq(req.id);}} style={{width:18,height:18,borderRadius:4,border:bd,background:"#fff",cursor:"pointer",fontSize:11,color:"#9c9a92",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>×</button>
                        <span style={{fontSize:10,color:"#9c9a92"}}>{isOpen?"▲":"▼"}</span>
                      </div>

                      {isOpen&&(
                        <div style={{padding:"8px 11px"}}>
                          {TIPI_ORDER.map(tipo=>{
                            const sr   = req.sub_rows[tipo];
                            const ti   = TIPI[tipo];
                            const c13  = calc13(sr.gu, sr.pct);
                            const sid  = `${req.id}-${tipo}`;
                            const showText  = subOpen[sid]==="text";
                            const show13col = subOpen[sid]==="13col";
                            const noImpact  = sr.gu===0 && sr.requirement.toLowerCase().includes("nessun");

                            return (
                              <div key={tipo} style={{marginBottom:6,border:`0.5px solid ${ti.colore}40`,borderLeft:`3px solid ${noImpact?"#ccc":ti.colore}`,borderRadius:"0 7px 7px 0",overflow:"hidden",opacity:noImpact?0.6:1}}>
                                {/* Sub-row compact line */}
                                <div style={{display:"flex",alignItems:"center",gap:6,padding:"6px 9px",background:`${ti.colore}08`}}>
                                  <div style={{width:20,height:20,borderRadius:4,background:noImpact?"#ccc":ti.colore,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:800,flexShrink:0}}>{ti.short}</div>
                                  <input value={sr.requirement} onChange={e=>editSub(req.id,tipo,"requirement",e.target.value)} placeholder={`REQUIREMENT ${ti.label}${tipo==="security"?" ('Nessun impatto' se non applicabile)":""}...`}
                                    style={{flex:1,padding:"3px 7px",fontSize:11,border:bd,borderRadius:5,outline:"none",minWidth:0,color:noImpact?"#9c9a92":"#1a1a18"}}/>
                                  <input type="number" min={0} value={sr.gu} onChange={e=>editSub(req.id,tipo,"gu",e.target.value)}
                                    style={{width:44,padding:"3px 4px",fontSize:12,fontWeight:700,textAlign:"center",border:`1px solid ${ti.colore}60`,borderRadius:5,color:ti.colore,fontFamily:"monospace",outline:"none",flexShrink:0}}/>
                                  <span style={{fontSize:9,color:"#9c9a92",flexShrink:0}}>G/U</span>
                                  <div style={{textAlign:"right",flexShrink:0,lineHeight:1.2}}>
                                    <div style={{fontSize:8,color:"#9c9a92"}}>tot</div>
                                    <div style={{fontSize:11,fontWeight:700,color:ti.colore,fontFamily:"monospace"}}>{c13.tot}</div>
                                  </div>
                                  {/* Figure chips inline — ⚠ se nessuna */}
                                  {sr.figure&&sr.figure.length>0 ? (
                                    <div style={{display:"flex",gap:2,flexShrink:0,maxWidth:72,overflow:"hidden"}}>
                                      {(sr.figure||[]).slice(0,3).map(f=>{
                                        const fig=FIGURES_MASTER_DEFAULT.find(x=>x.id===normFig(f,FIGURES_MASTER_DEFAULT))||{colore:"#9c9a92",short:(f||"?").slice(0,3).toUpperCase()};
                                        return <span key={f} style={{fontSize:7,padding:"1px 4px",borderRadius:5,background:fig.colore,color:"#fff",fontWeight:700,flexShrink:0,whiteSpace:"nowrap"}}>{fig.short}</span>;
                                      })}
                                      {sr.figure.length>3&&<span style={{fontSize:7,color:"#9c9a92"}}>+{sr.figure.length-3}</span>}
                                    </div>
                                  ) : (
                                    <span style={{fontSize:8,padding:"1px 5px",borderRadius:5,background:"#FCEBEB",color:"#791F1F",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"}}>⚠ no fig.</span>
                                  )}
                                  <button onClick={()=>toggleSubSec(sid,"text")} style={{fontSize:9,padding:"2px 6px",border:`0.5px solid ${showText?ti.colore:"#e0ded8"}`,borderRadius:5,cursor:"pointer",background:showText?ti.colore:"transparent",color:showText?"#fff":ti.colore,flexShrink:0}}>testo {showText?"▲":"▼"}</button>
                                  <button onClick={()=>toggleSubSec(sid,"13col")} style={{fontSize:9,padding:"2px 6px",border:`0.5px solid ${show13col?ti.colore:"#e0ded8"}`,borderRadius:5,cursor:"pointer",background:show13col?ti.colore:"transparent",color:show13col?"#fff":ti.colore,flexShrink:0,whiteSpace:"nowrap"}}>13col {show13col?"▲":"▼"}</button>
                                  <button onClick={()=>editSub(req.id,tipo,"is_milestone",!sr.is_milestone)} title={sr.is_milestone?"Rimuovi milestone":"Segna come milestone"}
                                    style={{width:22,height:22,borderRadius:"50%",border:`1px solid ${sr.is_milestone?"#BA7517":"#e0ded8"}`,cursor:"pointer",background:sr.is_milestone?"#BA7517":"transparent",fontSize:11,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:sr.is_milestone?"#fff":"#ccc"}}>
                                    {sr.is_milestone?"★":"☆"}
                                  </button>
                                </div>

                                {/* Text fields */}
                                {showText&&(
                                  <div style={{padding:"8px 10px",borderTop:bd}}>
                                    {/* FIGURE per questa riga */}
                                    <div style={{marginBottom:8,padding:"6px 8px",background:`${ti.colore}0A`,borderRadius:6,border:`0.5px solid ${ti.colore}30`}}>
                                      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4}}>
                                        <div style={{fontSize:9,fontWeight:700,color:ti.colore,textTransform:"uppercase",letterSpacing:".04em"}}>Figure assegnate</div>
                                        {(!sr.figure||sr.figure.length===0)&&<span style={{fontSize:9,padding:"1px 6px",borderRadius:6,background:"#FCEBEB",color:"#791F1F",fontWeight:600}}>⚠ nessuna figura</span>}
                                        {sr.figure&&sr.figure.length>1&&(
                                          <div style={{fontSize:9,color:"#6b6b67"}}>
                                            {sr.figure.filter(f=>normFig(f)!=="PM").map(f=>{
                                              const n=sr.figure.filter(x=>normFig(x)!=="PM").length;
                                              const pmGU=Math.ceil(sr.gu*(sr.pct?.pm||5)/100);
                                              const perFig=n>0?Math.ceil((sr.gu-pmGU)/n):0;
                                              return `${(FIGURES_MASTER_DEFAULT.find(x=>x.id===normFig(f))||{short:f}).short} ${perFig}GU`;
                                            }).join(" + ")}
                                          </div>
                                        )}
                                      </div>
                                      <FigureLookup
                                        selected={(sr.figure||[]).map(f=>normFig(f))}
                                        onChange={v=>editSub(req.id,tipo,"figure",v)}
                                        allFigures={FIGURES_MASTER_DEFAULT}
                                        onAddFigure={()=>{}}/>
                                    </div>

                                    {[
                                      ["IPOTESI","ipotesi","Ipotesi — assunzioni di alto livello...","#6b6b67"],
                                      ["ASSUNZIONI TECNICHE","assunzioni","Assunzioni tecniche specifiche (numerare: 1 - ... ; 2 - ...)","#533AB7"],
                                      ["ANALISI","analisi_note","Note di analisi (opzionale)...","#185FA5"],
                                      ["DESIGN","design_note","Note di design, link a documenti/Sharepoint...","#185FA5"],
                                      ["RISCHI","rischi","Rischi identificati per questa riga...","#791F1F"],
                                    ].map(([lbl,key,ph,c])=>(
                                      <div key={key} style={{marginBottom:6}}>
                                        <div style={{fontSize:9,fontWeight:600,color:c,textTransform:"uppercase",letterSpacing:".04em",marginBottom:2}}>{lbl}</div>
                                        <textarea value={sr[key]} onChange={e=>editSub(req.id,tipo,key,e.target.value)} placeholder={ph} rows={2}
                                          style={{width:"100%",padding:"4px 7px",fontSize:11,border:`0.5px solid ${c}40`,borderRadius:5,outline:"none",resize:"vertical",fontFamily:"inherit",boxSizing:"border-box",lineHeight:1.4,color:key==="rischi"?"#791F1F":"#1a1a18"}}/>
                                      </div>
                                    ))}
                                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginTop:2}}>
                                      {[["BRAND","brand","GUCCI / TUTTI / ..."],["AMBITO","ambito","BE / FE / FE/MOB / Processo / Compliance"]].map(([lbl,key,ph])=>(
                                        <div key={key}>
                                          <div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:2}}>{lbl}</div>
                                          <input value={sr[key]} onChange={e=>editSub(req.id,tipo,key,e.target.value)} placeholder={ph}
                                            style={{width:"100%",padding:"4px 7px",fontSize:11,border:bd,borderRadius:5,outline:"none",boxSizing:"border-box"}}/>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* 13 Colonne */}
                                {show13col&&(
                                  <div style={{padding:"8px 10px",borderTop:bd,display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                                    {/* LEFT: parametri */}
                                    <div>
                                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}>
                                        <span style={{fontSize:9,fontWeight:700,color:ti.colore,textTransform:"uppercase",letterSpacing:".04em"}}>{ti.label} — parametri</span>
                                        <button onClick={()=>resetPct(req.id,tipo)} style={{fontSize:9,padding:"1px 6px",border:bd,borderRadius:4,cursor:"pointer",background:"#fff",color:"#9c9a92"}}>reset</button>
                                      </div>
                                      <div style={{fontSize:9,color:"#9c9a92",marginBottom:6,lineHeight:1.4,padding:"4px 6px",background:"#f7f6f3",borderRadius:5}}>{ti.nota}</div>
                                      {PCT_LABELS.map(([k,lbl,mn,mx])=>{
                                        const val = sr.pct[k];
                                        const isZero = val===0;
                                        return (
                                          <div key={k} style={{display:"flex",alignItems:"center",gap:4,marginBottom:3}}>
                                            <span style={{fontSize:9,color:isZero?"#ccc":"#6b6b67",width:105,flexShrink:0}}>{lbl}</span>
                                            <input type="range" min={mn} max={mx} step={5} value={val} onChange={e=>editPct(req.id,tipo,k,e.target.value)} style={{flex:1,accentColor:isZero?"#ccc":ti.colore}}/>
                                            <span style={{fontSize:9,fontWeight:600,color:isZero?"#ccc":ti.colore,width:22,textAlign:"right"}}>{val}%</span>
                                          </div>
                                        );
                                      })}
                                    </div>
                                    {/* RIGHT: calcolo — esatto come foglio STIMA */}
                                    <div>
                                      <div style={{fontSize:9,fontWeight:700,color:ti.colore,textTransform:"uppercase",letterSpacing:".04em",marginBottom:5}}>Foglio STIMA</div>
                                      <div style={{background:"#fff",borderRadius:7,border:bd,padding:"8px",marginBottom:6}}>
                                        {[
                                          ["G/U",c13.gu,false],
                                          ["% Sovrapponibilità",sr.pct.ovl+"%",false],
                                          ["G/U S",c13.gu_s.toFixed(2),false],
                                          ["% Rischio",sr.pct.risk+"%",false],
                                          ["G/U R",c13.gu_r.toFixed(2),false],
                                          ["SOMMA STIMA PARZIALE",c13.P,ti.colore],
                                        ].map(([k,v,c])=>(
                                          <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"1.5px 0",borderBottom:"0.5px solid #f0f0ee",fontSize:10}}>
                                            <span style={{color:"#6b6b67"}}>{k}</span>
                                            <span style={{fontWeight:c?700:500,fontFamily:"monospace",color:c||"#1a1a18"}}>{v}</span>
                                          </div>
                                        ))}
                                      </div>
                                      <div style={{background:"#fff",borderRadius:7,border:bd,padding:"8px",marginBottom:6}}>
                                        {[
                                          ["Analysis ("+sr.pct.analysis+"%)",c13.an.toFixed(1)],
                                          ["Design ("+sr.pct.design+"%)",c13.de.toFixed(1)],
                                          ["Test book ("+sr.pct.testbook+"%)",c13.tb.toFixed(1)],
                                          ["Data prep ("+sr.pct.dataprep+"%)",c13.dp.toFixed(1)],
                                          ["Fix ("+sr.pct.fix+"% ×2)",c13.fx.toFixed(1)],
                                          ["Deploy ("+sr.pct.deploy+"%)",c13.pl.toFixed(1)],
                                          ["gg PM ("+sr.pct.pm+"% × PARZ.)",c13.gg_pm.toFixed(1)],
                                          ["gg Conting ("+sr.pct.contingency+"% × PARZ.)",c13.gg_ct.toFixed(1)],
                                        ].map(([k,v])=>(
                                          <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"1.5px 0",borderBottom:"0.5px solid #f0f0ee",fontSize:10}}>
                                            <span style={{color:"#6b6b67"}}>{k}</span>
                                            <span style={{fontWeight:500,fontFamily:"monospace",color:parseFloat(v)===0?"#ccc":"#1a1a18"}}>{v}</span>
                                          </div>
                                        ))}
                                        <div style={{display:"flex",justifyContent:"space-between",padding:"3px 0",fontSize:10,fontWeight:700}}>
                                          <span style={{color:ti.colore}}>SOMMA SU PERCENTUALI</span>
                                          <span style={{color:ti.colore,fontFamily:"monospace"}}>{c13.ssp.toFixed(1)}</span>
                                        </div>
                                      </div>
                                      <div style={{background:ti.colore,borderRadius:6,padding:"7px 8px"}}>
                                        <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                                          <span style={{fontSize:10,color:"rgba(255,255,255,.85)",fontWeight:600}}>SOMMA STIMA TOTALE</span>
                                          <span style={{fontSize:16,fontWeight:800,color:"#fff",fontFamily:"monospace"}}>{c13.tot}</span>
                                        </div>
                                        <div style={{height:"0.5px",background:"rgba(255,255,255,.25)",margin:"4px 0"}}/>
                                        {[["Fix+Deploy+Conting.",c13.fdec],["Analisi+Test+PM",c13.atpm]].map(([k,v])=>(
                                          <div key={k} style={{display:"flex",justifyContent:"space-between"}}>
                                            <span style={{fontSize:9,color:"rgba(255,255,255,.65)"}}>{k}</span>
                                            <span style={{fontSize:10,fontWeight:600,color:"#fff",fontFamily:"monospace"}}>{v}</span>
                                          </div>
                                        ))}
                                      </div>

                                      {/* ── DISTRIBUZIONE GU TRA FIGURE ── */}
                                      {(()=>{
                                        const nonPMFigs = (sr.figure||[]).map(f=>normFig(f,FIGURES_MASTER_DEFAULT)).filter(f=>f!=="PM");
                                        const hasPM_    = (sr.figure||[]).map(f=>normFig(f,FIGURES_MASTER_DEFAULT)).includes("PM");
                                        if((sr.figure||[]).length < 2) return null;
                                        const pmGU_  = hasPM_ ? Math.ceil(sr.gu*(sr.pct?.pm||5)/100) : 0;
                                        const rest_  = Math.max(0, sr.gu - pmGU_);
                                        const figPct = sr.figure_pct||{};
                                        const rawPcts= nonPMFigs.map(f=>figPct[f]??(nonPMFigs.length>0?Math.round(100/nonPMFigs.length):0));
                                        const pctSum = rawPcts.reduce((s,p)=>s+p,0);
                                        const pctOk  = Math.abs(pctSum-100)<=1;
                                        const equalizeFig = () => {
                                          const eq=Math.floor(100/nonPMFigs.length);
                                          const newPct={};
                                          nonPMFigs.forEach((f,i)=>{ newPct[f]=i===nonPMFigs.length-1?100-eq*(nonPMFigs.length-1):eq; });
                                          editSub(req.id,tipo,"figure_pct",newPct);
                                        };
                                        return (
                                          <div style={{marginTop:6,padding:"7px 8px",background:"#f0f0ee",borderRadius:6,border:bd}}>
                                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}>
                                              <span style={{fontSize:9,fontWeight:700,color:"#1a1a18",textTransform:"uppercase",letterSpacing:".04em"}}>Distribuzione GU tra figure</span>
                                              <button onClick={equalizeFig} style={{fontSize:8,padding:"1px 6px",border:bd,borderRadius:4,cursor:"pointer",background:"#fff",color:"#185FA5"}}>Equalizza</button>
                                            </div>
                                            {hasPM_&&(
                                              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4,paddingBottom:4,borderBottom:bd}}>
                                                <span style={{width:24,padding:"1px 3px",borderRadius:4,background:"#185FA5",color:"#fff",fontSize:7,fontWeight:700,textAlign:"center",flexShrink:0}}>PM</span>
                                                <span style={{fontSize:9,color:"#6b6b67",flex:1}}>PM% dal 13col → {pmGU_} GU</span>
                                                <span style={{fontSize:9,fontWeight:700,color:"#185FA5",fontFamily:"monospace"}}>{sr.pct?.pm||5}%</span>
                                              </div>
                                            )}
                                            {hasPM_&&nonPMFigs.length>0&&<div style={{fontSize:8,color:"#9c9a92",marginBottom:4}}>Resto ({rest_} GU) diviso tra le figure sotto — somma = 100%:</div>}
                                            {nonPMFigs.map((fid,i)=>{
                                              const fig=FIGURES_MASTER_DEFAULT.find(x=>x.id===fid)||{colore:"#9c9a92",short:fid.slice(0,3).toUpperCase(),label:fid};
                                              const pct=rawPcts[i];
                                              const guFig=Math.ceil(rest_*pct/(pctSum||1));
                                              return (
                                                <div key={fid} style={{display:"flex",alignItems:"center",gap:5,marginBottom:3}}>
                                                  <span style={{width:24,padding:"1px 3px",borderRadius:4,background:fig.colore,color:"#fff",fontSize:7,fontWeight:700,textAlign:"center",flexShrink:0}}>{fig.short}</span>
                                                  <input type="range" min={0} max={100} step={1} value={pct}
                                                    onChange={e=>editSub(req.id,tipo,"figure_pct",{...figPct,[fid]:parseInt(e.target.value)})}
                                                    style={{flex:1,accentColor:fig.colore}}/>
                                                  <span style={{fontSize:9,fontWeight:700,color:fig.colore,width:24,textAlign:"right",flexShrink:0}}>{pct}%</span>
                                                  <span style={{fontSize:9,color:"#6b6b67",width:28,textAlign:"right",flexShrink:0,fontFamily:"monospace"}}>{guFig}GU</span>
                                                </div>
                                              );
                                            })}
                                            <div style={{display:"flex",justifyContent:"flex-end",gap:6,marginTop:3,paddingTop:3,borderTop:bd}}>
                                              <span style={{fontSize:9,color:"#6b6b67"}}>Σ non-PM:</span>
                                              <span style={{fontSize:10,fontWeight:700,color:pctOk?"#27500A":"#E24B4A",fontFamily:"monospace"}}>{pctSum}%{pctOk?" ✓":" ⚠ deve essere 100%"}</span>
                                            </div>
                                          </div>
                                        );
                                      })()}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}

                          {/* Req subtotal */}
                          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 8px",background:"#f7f6f3",borderRadius:6,border:bd,marginTop:4}}>
                            <span style={{fontSize:10,color:"#6b6b67"}}>{req.id} — subtotale T+F+S</span>
                            <div style={{display:"flex",gap:12}}>
                              <span style={{fontSize:10,color:"#9c9a92",fontFamily:"monospace"}}>{reqGU} G/U</span>
                              <span style={{fontSize:11,fontWeight:700,color,fontFamily:"monospace"}}>{reqTot} tot.</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Add req */}
                <button onClick={addReq} style={{width:"100%",padding:"7px",fontSize:11,border:`1px dashed ${color}`,borderRadius:8,cursor:"pointer",background:"transparent",color,fontWeight:500,marginTop:4}}>
                  + Aggiungi requisito (genera 3 righe T / F / S con lo stesso ID)
                </button>

                {/* Grand total */}
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",background:"#1a1a18",borderRadius:8,marginTop:8}}>
                  <div>
                    <div style={{fontSize:11,color:"rgba(255,255,255,.7)"}}>{cur.reqs.length} requisiti · {cur.reqs.length*3} righe T/F/S — {STIMA_STATI_DEF.find(s=>s.id===stId)?.label}</div>
                    <div style={{fontSize:9,color:"rgba(255,255,255,.4)",marginTop:1}}>Alimenta la tab STIMA aggregata (sola lettura)</div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontSize:9,color:"rgba(255,255,255,.4)"}}>G/U base</div>
                    <div style={{fontSize:13,color:"rgba(255,255,255,.6)",fontFamily:"monospace"}}>{agg.gu}</div>
                    <div style={{fontSize:20,fontWeight:800,color:"#fff",fontFamily:"monospace"}}>{agg.tot}</div>
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB STIMA AGGREGATA (read-only) ──────────────────── */}
            {tab==="aggregate"&&(
              <div>
                <div style={{padding:"6px 10px",background:"#fff",border:bd,borderRadius:7,marginBottom:10,fontSize:10,color:"#6b6b67",lineHeight:1.6}}>
                  Somma di {cur.reqs.length*3} righe ({cur.reqs.length} req × 3 tipi T/F/S). Formula Excel: ogni riga applica i propri parametri. I valori sotto sono la somma dei calcoli individuali. <span style={{color:"#791F1F",fontWeight:500}}>Sola lettura</span> — modifica parametri riga per riga nella tab Requisiti.
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                  <div>
                    <div style={{fontSize:10,fontWeight:700,color,textTransform:"uppercase",letterSpacing:".05em",marginBottom:8}}>Breakdown per tipo</div>
                    {TIPI_ORDER.map(tipo=>{
                      const ti  = TIPI[tipo];
                      const tot = cur.reqs.reduce((s,r)=>s+calc13(r.sub_rows[tipo].gu,r.sub_rows[tipo].pct).tot,0);
                      const gu  = cur.reqs.reduce((s,r)=>s+r.sub_rows[tipo].gu,0);
                      const p   = agg.tot>0?Math.round(tot/agg.tot*100):0;
                      return (
                        <div key={tipo} style={{marginBottom:6,padding:"7px 10px",border:bd,borderLeft:`3px solid ${ti.colore}`,borderRadius:"0 7px 7px 0",background:"#fff"}}>
                          <div style={{display:"flex",alignItems:"center",gap:8}}>
                            <div style={{width:18,height:18,borderRadius:4,background:ti.colore,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,fontWeight:800,flexShrink:0}}>{ti.short}</div>
                            <span style={{fontSize:11,color:ti.colore,fontWeight:600,flex:1}}>{ti.label}</span>
                            <span style={{fontSize:10,color:"#9c9a92",fontFamily:"monospace"}}>{gu} G/U →</span>
                            <span style={{fontSize:13,fontWeight:700,color:ti.colore,fontFamily:"monospace"}}>{tot}</span>
                            <span style={{fontSize:9,color:"#9c9a92",width:26,textAlign:"right"}}>{p}%</span>
                          </div>
                          <div style={{marginTop:4,height:3,borderRadius:3,background:"#f0f0ee",overflow:"hidden"}}>
                            <div style={{width:p+"%",height:"100%",background:ti.colore,borderRadius:3}}/>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <div style={{fontSize:10,fontWeight:700,color,textTransform:"uppercase",letterSpacing:".05em",marginBottom:8}}>Aggregato — foglio STIMA</div>
                    <div style={{background:"#fff",borderRadius:7,border:bd,padding:"9px",marginBottom:7}}>
                      {[
                        ["Σ G/U base",agg.gu],["Σ PARZIALE",agg.P],
                        ["Σ gg analisi",agg.an.toFixed(1)],["Σ gg design",agg.de.toFixed(1)],
                        ["Σ gg testbook",agg.tb.toFixed(1)],["Σ gg data prep",agg.dp.toFixed(1)],
                        ["Σ gg fix (×2)",agg.fx.toFixed(1)],["Σ gg deploy",agg.pl.toFixed(1)],
                        ["Σ SOMMA SU %%",agg.ssp.toFixed(1)],
                        ["Σ gg PM (×PARZ.)",agg.gg_pm.toFixed(1)],
                        ["Σ gg Contingency (×PARZ.)",agg.gg_ct.toFixed(1)],
                      ].map(([k,v])=>{
                        const isBig=k.includes("SOMMA");
                        return (
                          <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"2px 0",borderBottom:"0.5px solid #f0f0ee",fontSize:11}}>
                            <span style={{color:isBig?color:"#6b6b67",fontWeight:isBig?600:400}}>{k}</span>
                            <span style={{fontWeight:isBig?700:500,fontFamily:"monospace",color:isBig?color:"#1a1a18"}}>{v}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div style={{background:color,borderRadius:7,padding:"11px"}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                        <span style={{fontSize:12,color:"rgba(255,255,255,.9)",fontWeight:600}}>SOMMA STIMA TOTALE</span>
                        <span style={{fontSize:22,fontWeight:800,color:"#fff",fontFamily:"monospace"}}>{agg.tot}</span>
                      </div>
                      <div style={{height:"0.5px",background:"rgba(255,255,255,.3)",margin:"5px 0"}}/>
                      {[["SOLO FIX DEPLOY CONTINGENZA",agg.fdec],["ANALISI TEST PM",agg.atpm]].map(([k,v])=>(
                        <div key={k} style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                          <span style={{fontSize:10,color:"rgba(255,255,255,.7)"}}>{k}</span>
                          <span style={{fontSize:11,fontWeight:600,color:"#fff",fontFamily:"monospace"}}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── CASCADE VIEW ─────────────────────────────────────────────────────────────
// STIMA insertion points: after these phases a StimaBlock appears
// F3 → stima commerciale post-gap (ora sai cosa c'è davvero da fare)
// F4 → stima Agile post-design / pre-sprint (stima definitiva prima di committare)
// F7 → consuntivo (chiusura progetto)
const STIMA_AFTER_FASE = {
  3: {
    title: "Stima commerciale post-Gap Analysis",
    subtitle: "Da produrre dopo F3 — ora il perimetro reale è noto. Questa è la stima da presentare al cliente prima di procedere con la progettazione.",
    color: "#BA7517", bg: "#FFFBF0",
    label: "Voci F1+F2+F3 (assessment completo)",
    fasesIncluded: [1,2,3],
  },
  4: {
    title: "Stima Agile post-Design (pre-sprint)",
    subtitle: "Re-stima definitiva dopo la progettazione — corrisponde a SOX-IT-CD-02 del MPP ENG. Fissa il budget di sprint prima di avviare l'implementazione.",
    color: "#0F6E56", bg: "#F0FAF5",
    label: "Voci F1→F4 (assessment + progettazione)",
    fasesIncluded: [1,2,3,4],
  },
  7: {
    title: "Consuntivo finale",
    subtitle: "Chiusura progetto — confronta le GU effettive con la stima Agile. Da includere nel report finale al cliente.",
    color: "#4E342E", bg: "#F5F0EE",
    label: "Tutte le voci F1→F7 (progetto completo)",
    fasesIncluded: [1,2,3,4,5,6,7],
  },
};

function CascadeView({ items, gu, stato, giust, onGu0, onGuChange, onToggleStato, onOpenOverlap, expandedItems, onToggleExpand, figureOverrides, onFigureChange, figurePctMap, onFigurePctChange, milestones=new Set(), onToggleMilestone, allFigures, onAddFigure, onUpdateFigure, clienteFigSet=new Set(), pmPct }) {
  const bd = "0.5px solid #e0ded8";

  // Group items by fase_num
  const faseGroups = {};
  items.forEach(item => {
    const fn = item.fase_num || 3;
    if (!faseGroups[fn]) faseGroups[fn] = [];
    faseGroups[fn].push(item);
  });

  // Cumulative GU per fase (for STIMA blocks)
  const guPerFase = {};
  Object.keys(faseGroups).forEach(fn => {
    guPerFase[parseInt(fn)] = faseGroups[fn].reduce((s,i)=>s+(gu[i.codice]??i.gu_min),0);
  });
  const guUpToFase = (maxFase) => Object.entries(guPerFase)
    .filter(([fn])=>parseInt(fn)<=maxFase)
    .reduce((s,[,v])=>s+v, 0);

  const sortedFases = Object.keys(faseGroups).map(Number).sort((a,b)=>a-b);

  return (
    <div>
      <div style={{padding:"8px 12px",background:"#f7f6f3",borderRadius:8,marginBottom:12,fontSize:11,color:"#6b6b67",border:bd}}>
        <strong style={{color:"#1a1a18"}}>Cascata operativa</strong> — le fasi sono sequenziali (ogni fase dipende dalla precedente). Le voci all'interno di una fase possono procedere in parallelo.{" "}
        <span style={{color:"#BA7517",fontWeight:600}}>∑ Stima aggregata</span>{" "}inserita dopo F3, F4, F7 — la formula STIMA non si applica voce per voce ma all'aggregato di ogni fase completata.
      </div>

      {sortedFases.map(fn => {
        const fase = FASI[fn];
        const faseItems = faseGroups[fn];
        const faseGU = faseItems.reduce((s,i)=>s+(gu[i.codice]??i.gu_min),0);
        const faseOvl = faseItems.filter(i=>i._overlap).length;
        const stimaDef = STIMA_AFTER_FASE[fn];

        return (
          <div key={fn}>
            {/* Phase header */}
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8,padding:"8px 12px",background:fase.bg,borderRadius:8,border:`0.5px solid ${fase.colore}30`}}>
              <div style={{width:28,height:28,borderRadius:"50%",background:fase.colore,color:"#fff",fontSize:11,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                {fn}
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:12,fontWeight:600,color:fase.colore}}>{fase.label}</div>
                <div style={{fontSize:10,color:"#6b6b67",marginTop:1}}>{fase.desc}</div>
              </div>
              <div style={{textAlign:"right",flexShrink:0}}>
                <div style={{fontSize:13,fontWeight:700,color:fase.colore}}>{faseGU} GU</div>
                <div style={{fontSize:10,color:"#9c9a92"}}>{faseItems.length} voci{faseOvl>0?` · ${faseOvl} overlap`:""}</div>
              </div>
              {(()=>{
                const noFig = faseItems.filter(i=>!(figureOverrides?.[i.codice]||i.figure||[]).length).length;
                return noFig>0 ? <span style={{fontSize:9,padding:"2px 7px",borderRadius:7,background:"#FCEBEB",color:"#791F1F",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"}}>⚠ {noFig} senza figura</span> : null;
              })()}
            </div>

            {/* Items in this phase */}
            {faseItems.map(item => (
              <ItemCard key={item.codice} item={item}
                guVal={gu[item.codice]??item.gu_min}
                onGuChange={v=>onGuChange(item.codice,v)}
                onGu0={()=>onGu0(item)}
                stato={stato[item.codice]||"aperto"}
                onToggleStato={()=>onToggleStato(item.codice)}
                giust={giust[item.codice]}
                onOpenOverlap={onOpenOverlap}
                expanded={expandedItems.has(item.codice)}
                onToggleExpand={()=>onToggleExpand(item.codice)}
                itemFigures={figureOverrides?.[item.codice]||item.figure}
                onFigureChange={v=>onFigureChange&&onFigureChange(item.codice,v)}
                figurePct={figurePctMap?.[item.codice]||{}}
                onFigurePctChange={(fid,pct)=>onFigurePctChange&&onFigurePctChange(item.codice,fid,pct)}
                allFigures={allFigures} onAddFigure={onAddFigure} onUpdateFigure={onUpdateFigure} clienteFigSet={clienteFigSet} pmPct={pmPct}
                onToggleMilestone={()=>onToggleMilestone&&onToggleMilestone(item.codice)}
              />
            ))}

            {/* STIMA BLOCK — inserted after F3, F4, F7 */}
            {stimaDef && (
              <StimaBlock
                title={stimaDef.title}
                subtitle={stimaDef.subtitle}
                color={stimaDef.color}
                bg={stimaDef.bg}
                complianceItems={items}
                cascadeGU={gu}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── ITEMS SCREEN ─────────────────────────────────────────────────────────────
function ItemsScreen({ activeFrameworks, customMode, customItems, onAddCust, onDelCust, onEditCust, onMoveCust, figureOverrides:figOverExt, onFigureChange:onFigChangeExt, figurePctMap:figPctMapExt={}, onFigurePctChange:onFigPctChangeExt, milestones:milestonesExt, onToggleMilestone:onToggleMilestoneExt, allFigures:allFigsExt, onAddFigure:onAddFigExt, onUpdateFigure:onUpdFigExt, clienteFigSet:clienteFigSetExt=new Set(), pmPct:pmPctExt, onBack, onNext }) {
  const bd = "0.5px solid #e0ded8";
  const rawItems = ITEMS_RAW.filter(i => activeFrameworks.includes(i.fw));
  const items = useMemo(() => buildMergedItems(rawItems, activeFrameworks), [activeFrameworks.join(",")]);

  const [gu, setGu] = useState(() => Object.fromEntries(items.map(i=>[i.codice,i.gu_min])));
  const [stato, setStato] = useState(() => Object.fromEntries(items.map(i=>[i.codice,"aperto"])));
  const [giust, setGiust] = useState({});
  const [modal0, setModal0] = useState(null);
  const [modalOvl, setModalOvl] = useState(null);
  const [vista, setVista] = useState("cascata");
  const [filterFw, setFilterFw] = useState("tutti");
  const [filterSt, setFilterSt] = useState("tutti");
  const [filterOvl, setFilterOvl] = useState(false);
  const [expandedItems, setExpandedItems] = useState(new Set());
  // Use root-provided milestones (so Gantt sees them) with local fallback
  const [milestonesLocal, setMilestonesLocal] = useState(new Set());
  const milestones = milestonesExt ?? milestonesLocal;
  const toggleMilestone = onToggleMilestoneExt ?? ((codice) => setMilestonesLocal(m=>{const n=new Set(m);n.has(codice)?n.delete(codice):n.add(codice);return n;}));

  const [changeLog, setChangeLog] = useState([]);  // [{id,data,descrizione,delta_gu,tipo,stato,approvato_da}]
  const addChange = () => setChangeLog(cl=>[...cl,{
    id:String(Date.now()), data:new Date().toISOString().slice(0,10),
    descrizione:"", delta_gu:0, tipo:"scope", stato:"pending", approvato_da:""
  }]);
  const setChange = (id,field,val) => setChangeLog(cl=>cl.map(c=>c.id===id?{...c,[field]:val}:c));
  const delChange = (id) => setChangeLog(cl=>cl.filter(c=>c.id!==id));

  const [figureOverridesLocal, setFigureOverridesLocal] = useState({});
  // Use root-provided overrides when available (so Resource/Gantt screens share them)
  const figureOverrides = figOverExt ?? figureOverridesLocal;
  const onFigureChange  = onFigChangeExt ?? ((codice, newFigs) => setFigureOverridesLocal(p=>({...p,[codice]:newFigs})));

  const activeOverlaps = getActiveOverlaps(activeFrameworks);

  const confirmZero = (codice, text) => {
    setGu(g=>({...g,[codice]:0}));
    setGiust(j=>({...j,[codice]:text}));
    setStato(s=>({...s,[codice]:"giustificato"}));
    setModal0(null);
  };

  const toggleExpand = (codice) => {
    setExpandedItems(prev => {
      const n = new Set(prev);
      n.has(codice) ? n.delete(codice) : n.add(codice);
      return n;
    });
  };

  const visible = items.filter(i => {
    if (filterFw!=="tutti"&&i.fw!==filterFw&&!(i._siblings||[]).some(s=>s.fw===filterFw)) return false;
    if (filterSt==="aperto"&&stato[i.codice]==="coperto") return false;
    if (filterSt==="giustificato"&&stato[i.codice]!=="giustificato") return false;
    if (filterSt==="coperto"&&stato[i.codice]!=="coperto") return false;
    if (filterOvl&&!i._overlap) return false;
    return true;
  });

  const totalGU = items.reduce((s,i)=>s+(gu[i.codice]??i.gu_min),0);
  const zeroCount = items.filter(i=>(gu[i.codice]??i.gu_min)===0).length;
  const overlapCount = items.filter(i=>i._overlap).length;

  // Group by framework for list view
  const groups = [...new Map(visible.map(i=>[i.gruppo,{g:i.gruppo,fw:i.fw}])).values()];

  return (
    <div>
      {modal0&&<GU0Modal item={modal0} onConfirm={t=>confirmZero(modal0.codice,t)} onCancel={()=>setModal0(null)}/>}
      {modalOvl&&<OverlapModal ovl={modalOvl} onClose={()=>setModalOvl(null)}/>}

      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12}}>
        <div>
          <div style={{fontSize:15,fontWeight:500,color:"#1a1a18"}}>Voci di conformità obbligatorie</div>
          <div style={{fontSize:11,color:"#6b6b67",marginTop:2}}>{items.length} voci · {overlapCount} controlli unificati</div>
        </div>
        <div style={{display:"flex",gap:6,flexShrink:0,marginLeft:12}}>
          <button onClick={onBack} style={{padding:"6px 12px",fontSize:12,border:bd,borderRadius:8,cursor:"pointer",background:"#fff",color:"#1a1a18"}}>← Framework</button>
          <button onClick={onNext} style={{padding:"6px 14px",fontSize:12,background:"#185FA5",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontWeight:600}}>Risorse →</button>
        </div>
      </div>

      {/* View toggle */}
      <div style={{display:"flex",gap:6,marginBottom:10,alignItems:"center"}}>
        {[{v:"cascata",lbl:"📋 Vista Cascata"},{v:"lista",lbl:"≡ Lista Framework"},{v:"rischi",lbl:"⚠️ Risk Register"},{v:"changelog",lbl:"📝 Change Log"}].map(({v,lbl})=>(
          <button key={v} onClick={()=>setVista(v)}
            style={{padding:"5px 12px",fontSize:11,border:bd,borderRadius:8,cursor:"pointer",background:vista===v?"#1a1a18":"#fff",color:vista===v?"#fff":"#6b6b67",fontWeight:vista===v?600:400}}>
            {lbl}
          </button>
        ))}
        <button onClick={()=>setExpandedItems(prev=>prev.size>0?new Set():new Set(visible.map(i=>i.codice)))}
          style={{padding:"5px 12px",fontSize:11,border:bd,borderRadius:8,cursor:"pointer",background:"#fff",color:"#6b6b67",marginLeft:"auto"}}>
          {expandedItems.size>0?"▲ Chiudi guide":"▼ Espandi tutte le guide"}
        </button>
      </div>

      {/* Overlap bar */}
      {activeOverlaps.length>0&&<div style={{marginBottom:10,padding:"9px 12px",background:"#E6F1FB",borderRadius:8,border:"0.5px solid #185FA540"}}>
        <div style={{fontSize:11,fontWeight:600,color:"#185FA5",marginBottom:5}}>Overlap attivi · {overlapCount} controlli unificati · GU conteggiate una sola volta</div>
        <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
          {activeOverlaps.map(o=><button key={o.id} onClick={()=>setModalOvl(o)}
            style={{fontSize:10,padding:"2px 8px",borderRadius:8,border:`0.5px solid ${o.special?"#BA751780":"#185FA530"}`,background:o.special?"#FAEEDA":"#fff",color:o.special?"#633806":"#185FA5",fontWeight:500,cursor:"pointer"}}>
            {o.label} · -{o.sconto}% ↗
          </button>)}
        </div>
      </div>}

      {/* Counters */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6,marginBottom:10}}>
        {[{val:items.length,lbl:"voci totali"},{val:totalGU,lbl:"GU totali"},{val:overlapCount,lbl:"overlap",c:"#185FA5"},{val:zeroCount,lbl:"GU=0",c:zeroCount>0?"#791F1F":"#1a1a18"}].map(k=>(
          <div key={k.lbl} style={{background:"#f7f6f3",borderRadius:7,padding:"8px 10px",textAlign:"center",border:bd}}>
            <div style={{fontSize:18,fontWeight:700,color:k.c||"#1a1a18",lineHeight:1}}>{k.val}</div>
            <div style={{fontSize:10,color:"#6b6b67",marginTop:2,lineHeight:1.2}}>{k.lbl}</div>
          </div>
        ))}
      </div>

      {zeroCount>0&&<div style={{padding:"8px 11px",background:"#FCEBEB",border:"0.5px solid #A32D2D",borderRadius:7,marginBottom:9,fontSize:11,color:"#791F1F"}}>
        <strong>{zeroCount} {zeroCount===1?"voce ha":"voci hanno"} GU=0</strong> — {zeroCount} voci di rischio verranno generate nel documento.
      </div>}

      {/* Filters — only in lista mode */}
      {vista==="lista"&&<div style={{display:"flex",gap:5,marginBottom:11,flexWrap:"wrap",alignItems:"center"}}>
        <span style={{fontSize:11,color:"#6b6b67"}}>Framework:</span>
        {["tutti",...activeFrameworks].map(f=>(
          <button key={f} onClick={()=>setFilterFw(f)} style={{padding:"3px 9px",fontSize:11,border:bd,borderRadius:12,cursor:"pointer",background:filterFw===f?"#1a1a18":"transparent",color:filterFw===f?"#fff":"#6b6b67"}}>
            {f==="tutti"?"Tutti":fwDef(f)?.nome||f}
          </button>
        ))}
        <div style={{width:1,height:13,background:"#e0ded8",margin:"0 2px"}}/>
        {["tutti","aperto","coperto","giustificato"].map(s=>(
          <button key={s} onClick={()=>setFilterSt(s)} style={{padding:"3px 9px",fontSize:11,border:bd,borderRadius:12,cursor:"pointer",background:filterSt===s?"#1a1a18":"transparent",color:filterSt===s?"#fff":"#6b6b67",textTransform:"capitalize"}}>
            {s==="tutti"?"Tutti":s}
          </button>
        ))}
        <button onClick={()=>setFilterOvl(v=>!v)} style={{padding:"3px 9px",fontSize:11,border:`0.5px solid ${filterOvl?"#185FA5":bd}`,borderRadius:12,cursor:"pointer",background:filterOvl?"#E6F1FB":"transparent",color:filterOvl?"#185FA5":"#6b6b67",fontWeight:filterOvl?600:400}}>↔ Solo overlap</button>
      </div>}

      {/* Custom items panel — shown when customMode is active */}
      {customMode&&(
        <CustomItemsPanel items={customItems||[]} onAdd={onAddCust} onDel={onDelCust} onEdit={onEditCust} onMove={onMoveCust}/>
      )}

      {/* CONTENT */}
      {vista==="rischi" ? (
        <RiskRegister allItems={[...items,...(customMode?customItems:[])]} figures={allFigsExt||FIGURES_MASTER_DEFAULT}/>
      ) : vista==="changelog" ? (
        <ChangeLogView log={changeLog} onAdd={addChange} onSet={setChange} onDel={delChange}/>
      ) : vista==="cascata" ? (
        <CascadeView items={[...visible,...(customMode?(customItems||[]).map(ci=>({...ci,_custom:true})):[])].map(i=>({...i,is_milestone:milestones.has(i.codice||i.id)}))}
          gu={gu} stato={stato} giust={giust}
          figureOverrides={figureOverrides} onFigureChange={onFigureChange}
          figurePctMap={figPctMapExt} onFigurePctChange={onFigPctChangeExt}
          milestones={milestones} onToggleMilestone={toggleMilestone}
          allFigures={allFigsExt||FIGURES_MASTER_DEFAULT} onUpdateFigure={onUpdFigExt} clienteFigSet={clienteFigSetExt} pmPct={pmPctExt||5}
          onGu0={setModal0} onGuChange={(c,v)=>setGu(g=>({...g,[c]:v}))}
          onToggleStato={c=>setStato(s=>({...s,[c]:s[c]==="coperto"?"aperto":"coperto"}))}
          onOpenOverlap={setModalOvl}
          expandedItems={expandedItems} onToggleExpand={toggleExpand}/>
      ) : (
        // LIST VIEW
        groups.map(({g,fw:fwCode}) => {
          const groupItems = visible.filter(i=>i.gruppo===g);
          if (!groupItems.length) return null;
          const f = fwDef(fwCode);
          return (
            <div key={g} style={{marginBottom:11}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:5,paddingBottom:4,borderBottom:bd}}>
                <div style={{width:5,height:5,borderRadius:"50%",background:f?.colore||"#ccc",flexShrink:0}}/>
                <span style={{fontSize:10,fontWeight:700,color:f?.colore||"#6b6b67",textTransform:"uppercase",letterSpacing:".05em"}}>{f?.nome}</span>
                <span style={{fontSize:11,color:"#6b6b67"}}>{g}</span>
                <span style={{fontSize:10,color:"#9c9a92",marginLeft:"auto"}}>{groupItems.length}</span>
              </div>
              {groupItems.map(item=>(
                <ItemCard key={item.codice} item={item}
                  guVal={gu[item.codice]??item.gu_min}
                  onGuChange={v=>setGu(g=>({...g,[item.codice]:v}))}
                  onGu0={()=>setModal0(item)}
                  stato={stato[item.codice]||"aperto"}
                  onToggleStato={()=>setStato(s=>({...s,[item.codice]:s[item.codice]==="coperto"?"aperto":"coperto"}))}
                  giust={giust[item.codice]}
                  onOpenOverlap={setModalOvl}
                  expanded={expandedItems.has(item.codice)}
                  onToggleExpand={()=>toggleExpand(item.codice)}
                  itemFigures={figureOverrides[item.codice]||item.figure}
                  onFigureChange={v=>onFigureChange(item.codice,v)}
                  allFigures={allFigsExt||FIGURES_MASTER_DEFAULT} onUpdateFigure={onUpdFigExt} clienteFigSet={clienteFigSetExt} pmPct={pmPctExt||5}
                  onToggleMilestone={()=>toggleMilestone(item.codice)}/>
              ))}
            </div>
          );
        })
      )}

      <div style={{display:"flex",gap:7,padding:"11px 0",borderTop:bd,marginTop:4}}>
        <button style={{padding:"8px 15px",fontSize:12,background:"#1a1a18",color:"#fff",border:"none",borderRadius:8,cursor:"pointer"}}>Salva e aggiungi ai requisiti del progetto</button>
        <button style={{padding:"8px 11px",fontSize:12,border:bd,borderRadius:8,cursor:"pointer",background:"#fff",color:"#1a1a18"}}>Esporta piano di compliance</button>
      </div>
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

// ─── FIGURES SYSTEM ──────────────────────────────────────────────────────────
// Figure professionali con GU distribution: PM ha cursore dedicato,
// le altre si dividono equamente i GU residui (ceil).

const FIGURES_MASTER_DEFAULT = [
  { id:"PM",         label:"Project Manager",              short:"PM",   colore:"#185FA5" },
  { id:"BA",         label:"Business Analyst",             short:"BA",   colore:"#533AB7" },
  { id:"CTO",        label:"Solution Architect / CTO",     short:"CTO",  colore:"#0F6E56" },
  { id:"CISO",       label:"CISO / Security Lead",         short:"SEC",  colore:"#791F1F" },
  { id:"Team_IT",    label:"Developer / IT Team",          short:"DEV",  colore:"#0D47A1" },
  { id:"Team_Infra", label:"Infrastructure Engineer",      short:"INF",  colore:"#4E342E" },
  { id:"Dev_Senior", label:"Developer Senior",             short:"DEV+", colore:"#1B5E20" },
  { id:"Dev_Junior", label:"Developer Junior",             short:"DEV-", colore:"#558B2F" },
  { id:"QA",         label:"QA / Tester",                  short:"QA",   colore:"#27500A" },
  { id:"DPO",        label:"Data Protection Officer",      short:"DPO",  colore:"#712B13" },
  { id:"Dir_Rev",    label:"Direttore Revisione Interna",  short:"DRI",  colore:"#BA7517" },
  { id:"Resp_Amm",   label:"Resp. Amministrativo",         short:"AMM",  colore:"#633806" },
  { id:"Innovation", label:"Innovation Manager",           short:"INN",  colore:"#E65100" },
  { id:"CRO",        label:"Chief Risk Officer",           short:"CRO",  colore:"#4E342E" },
  { id:"TEAM_LEAD",  label:"Team Lead",                    short:"TL",   colore:"#1B5E20" },
];

const FIGURE_ALIAS = {
  "PM":"PM","BA":"BA","CTO":"CTO","CISO":"CISO","DPO":"DPO","CRO":"CRO","QA":"QA",
  "Team_IT":"Team_IT","Team_Infra":"Team_Infra","Team_Infrastruttura":"Team_Infra",
  "Dir. Rev. Interna":"Dir_Rev","Dir. Rev. Int.":"Dir_Rev","Dir_Rev":"Dir_Rev",
  "Resp. Amm.":"Resp_Amm","Resp_Amm":"Resp_Amm","Resp. Comm.":"Resp_Amm",
  "Resp. Compliance":"PM","Resp. Seguridad":"CISO","Innovation_Manager":"Innovation",
  "TEAM_LEAD":"TEAM_LEAD","Dev_Senior":"Dev_Senior","Dev_Junior":"Dev_Junior",
};

// isCliente helper — figure of the client, not billed in effort
// isClienteFig — checks both allFigures.isCliente AND the clienteFigSet (for raw IDs not in master)
const isClienteFig = (fid, allFigures=FIGURES_MASTER_DEFAULT, clienteFigSet=new Set()) => {
  if(clienteFigSet.has(fid)) return true;
  const fig = allFigures.find(f=>f.id===fid);
  return !!(fig?.isCliente);
};

const normFig = (f, extraFigs=[]) => {
  if (FIGURE_ALIAS[f]) return FIGURE_ALIAS[f];
  const found = extraFigs.find(x=>x.id===f||x.label===f);
  return found ? found.id : f;
};

// GU distribution: PM gets pm_pct %, others split equally (ceil)
// distributeGU — STIMA mode: PM separate, non-PM split figurePct (sum=100)
// figurePct = { figId: pct } for non-PM; if empty → equal split
// distributeGU — STIMA mode: PM% separate, non-PM split by figurePct
// Returns { figId: gu }  (billable figures only — cliente figures excluded from billing)
function distributeGU(guValue, figures, pmPct, figurePct={}, allFigures=FIGURES_MASTER_DEFAULT, clienteFigSet=new Set()) {
  if (!figures || figures.length === 0 || guValue <= 0) return {};
  const normalized = [...new Set(figures.map(f=>normFig(f)))];
  const billable   = normalized.filter(f=>!isClienteFig(f, allFigures, clienteFigSet));
  const hasPM      = billable.includes("PM");
  const pmGU       = hasPM ? Math.ceil(guValue * pmPct / 100) : 0;
  const rest        = Math.max(0, guValue - pmGU);
  const nonPM       = billable.filter(f=>f!=="PM");
  const out = {};
  if (hasPM) out["PM"] = pmGU;
  if (nonPM.length > 0) {
    const rawPcts = nonPM.map(f => figurePct[f] ?? (100 / nonPM.length));
    const pctSum  = rawPcts.reduce((s,p)=>s+p, 0) || 1;
    nonPM.forEach((f,i) => { out[f] = Math.ceil(rest * rawPcts[i] / pctSum); });
  }
  return out;
}

// distributeGUCompliance — all billable figures (incl. PM) sum to 100%
function distributeGUCompliance(guValue, figures, allFigPct={}, allFigures=FIGURES_MASTER_DEFAULT, clienteFigSet=new Set()) {
  if (!figures || figures.length === 0 || guValue <= 0) return {};
  const normalized = [...new Set(figures.map(f=>normFig(f)))];
  const billable   = normalized.filter(f=>!isClienteFig(f, allFigures, clienteFigSet));
  const rawPcts    = billable.map(f => allFigPct[f] ?? (100 / billable.length));
  const pctSum     = rawPcts.reduce((s,p)=>s+p, 0) || 1;
  const out = {};
  billable.forEach((f,i) => { out[f] = Math.ceil(guValue * rawPcts[i] / pctSum); });
  return out;
}

// aggregateByFigure — totals per figure, billable only
function aggregateByFigure(allItems, pmPct, figurePctMap={}, allFigures=FIGURES_MASTER_DEFAULT, clienteFigSet=new Set()) {
  const totals = {};
  allItems.forEach(item => {
    const gu     = item.gu_min || 0;
    const codice = item.codice || item.id;
    const perItemPct = figurePctMap[codice];
    const dist = perItemPct
      ? distributeGUCompliance(gu, item.figure||[], perItemPct, allFigures, clienteFigSet)
      : distributeGU(gu, item.figure||[], pmPct, {}, allFigures, clienteFigSet);
    Object.entries(dist).forEach(([fid,v]) => { totals[fid] = (totals[fid]||0) + v; });
  });
  return totals;
}

// clienteFigures for an item — for display/scheduling only, not billed
function getClienteFigures(figures, allFigures=FIGURES_MASTER_DEFAULT, clienteFigSet=new Set()) {
  return [...new Set((figures||[]).map(f=>normFig(f)))].filter(f=>isClienteFig(f, allFigures, clienteFigSet));
}

// Figure lookup component — combobox with instant search + add custom
function FigureLookup({ selected=[], onChange, allFigures=FIGURES_MASTER_DEFAULT, onAddFigure }) {
  const [query, setQuery] = useState("");
  const [showDrop, setShowDrop] = useState(false);
  const bd = "0.5px solid #e0ded8";

  const matches = allFigures.filter(f=>
    !selected.includes(f.id) &&
    (f.label.toLowerCase().includes(query.toLowerCase()) || f.short.toLowerCase().includes(query.toLowerCase()))
  );
  const canAdd = query.trim().length>2 && !allFigures.find(f=>f.label.toLowerCase()===query.trim().toLowerCase());

  return (
    <div style={{fontSize:11}}>
      {/* Selected chips */}
      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:selected.length>0?5:0}}>
        {selected.map(fid=>{
          const fig = allFigures.find(f=>f.id===fid)||{id:fid,label:fid,short:fid,colore:"#9c9a92"};
          return (
            <span key={fid} style={{display:"inline-flex",alignItems:"center",gap:3,padding:"2px 7px",borderRadius:10,background:fig.colore,color:"#fff",fontSize:10,fontWeight:600}}>
              {fig.short || fig.label}
              <span onClick={()=>onChange(selected.filter(x=>x!==fid))} style={{cursor:"pointer",opacity:.7,marginLeft:1,lineHeight:1}}>×</span>
            </span>
          );
        })}
      </div>
      {/* Search input */}
      <div style={{position:"relative"}}>
        <input value={query} onChange={e=>{setQuery(e.target.value);setShowDrop(true);}} onFocus={()=>setShowDrop(true)}
          onBlur={()=>setTimeout(()=>setShowDrop(false),150)}
          placeholder="+ Aggiungi figura..."
          style={{width:"100%",padding:"4px 8px",fontSize:10,border:bd,borderRadius:5,outline:"none",boxSizing:"border-box"}}/>
        {showDrop&&(matches.length>0||canAdd)&&(
          <div style={{position:"absolute",top:"100%",left:0,right:0,zIndex:100,background:"#fff",border:bd,borderRadius:6,boxShadow:"0 4px 16px rgba(0,0,0,.12)",maxHeight:160,overflowY:"auto"}}>
            {matches.slice(0,8).map(f=>(
              <div key={f.id} onMouseDown={()=>{onChange([...selected,f.id]);setQuery("");}} style={{padding:"5px 9px",cursor:"pointer",display:"flex",alignItems:"center",gap:6,fontSize:10}}
                onMouseEnter={e=>e.currentTarget.style.background="#f0f0ee"}
                onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                <span style={{width:28,padding:"1px 4px",borderRadius:6,background:f.isCliente?"#e0ded8":f.colore,color:f.isCliente?"#6b6b67":"#fff",fontSize:9,fontWeight:700,textAlign:"center"}}>{f.short}</span>
                {f.label}
                {f.isCliente&&<span style={{fontSize:8,color:"#9c9a92",marginLeft:"auto"}}>🏢 cliente</span>}
              </div>
            ))}
            {canAdd&&(
              <>
                <div onMouseDown={()=>{const nf={id:query.trim().replace(/\s+/g,"_"),label:query.trim(),short:query.trim().slice(0,3).toUpperCase(),colore:"#185FA5",isCliente:false};onAddFigure&&onAddFigure(nf);onChange([...selected,nf.id]);setQuery("");}}
                  style={{padding:"5px 9px",cursor:"pointer",fontSize:10,color:"#185FA5",borderTop:bd,fontWeight:500}}
                  onMouseEnter={e=>e.currentTarget.style.background="#E6F1FB"}
                  onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                  + Crea figura team "{query.trim()}"
                </div>
                <div onMouseDown={()=>{const nf={id:query.trim().replace(/\s+/g,"_")+"_cli",label:query.trim()+" (cliente)",short:query.trim().slice(0,3).toUpperCase(),colore:"#9c9a92",isCliente:true};onAddFigure&&onAddFigure(nf);onChange([...selected,nf.id]);setQuery("");}}
                  style={{padding:"5px 9px",cursor:"pointer",fontSize:10,color:"#6b6b67",fontWeight:500}}
                  onMouseEnter={e=>e.currentTarget.style.background="#f0f0ee"}
                  onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                  🏢 Crea figura cliente "{query.trim()}" — non conteggiata nell'effort
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── RESOURCE SCREEN (pagina 4) ──────────────────────────────────────────────

function ResourceScreen({ allItems, figures, figureRates, onRateChange, brief, pmPct, figurePctMap={}, clienteFigSet=new Set(), externalCosts=[], onAddExtCost, onSetExtCost, onDelExtCost, onPmPctChange, onBack, onNext }) {
  const bd = "0.5px solid #e0ded8";

  // ── Figure bucketing ──────────────────────────────────────────────────────
  const billableTotals = aggregateByFigure(allItems, pmPct, figurePctMap, figures, clienteFigSet);
  const totalsAll      = aggregateByFigure(allItems, pmPct, figurePctMap, figures, new Set());
  const clienteFigIds  = [...new Set(allItems.flatMap(i=>getClienteFigures(i.figure||[], figures, clienteFigSet)))];
  const billableFigIds = Object.keys(billableTotals).filter(f=>billableTotals[f]>0);
  billableFigIds.sort((a,b)=>(billableTotals[b]||0)-(billableTotals[a]||0));
  const allFigIds = [...new Set([...billableFigIds, ...clienteFigIds])];
  allFigIds.sort((a,b)=>(totalsAll[b]||0)-(totalsAll[a]||0));

  const totalGU = allItems.reduce((s,i)=>s+(i.gu_min||0), 0);

  const getFig  = id => figures.find(f=>f.id===id) || figures.find(f=>f.short===id) || { id, label:id, short:(id||'?').slice(0,3).toUpperCase(), colore:"#6b6b67" };
  const isCli   = id => clienteFigSet.has(id) || !!(figures.find(f=>f.id===id)?.isCliente);
  const getRate = id => figureRates[id]?.rate  || 0;
  const getMkup = id => figureRates[id]?.markup || 30;

  // ── Costs — billable only ────────────────────────────────────────────────
  // Figure costs
  const figCost      = billableFigIds.reduce((s,id)=>s+(billableTotals[id]||0)*getRate(id), 0);
  const figRevenue   = billableFigIds.reduce((s,id)=>s+(billableTotals[id]||0)*getRate(id)*(1+getMkup(id)/100), 0);

  // External costs: base cost and billed amount (cost + markup if active)
  const extBaseCost  = externalCosts.reduce((s,x)=>s+(x.costo_unitario||0)*(x.quantita||1), 0);
  const extBilled    = externalCosts.reduce((s,x)=>{
    const base = (x.costo_unitario||0)*(x.quantita||1);
    return s + (x.markup_active ? base*(1+(x.markup_pct||0)/100) : base);
  }, 0);

  // Combined totals
  const totalCost    = figCost + extBaseCost;
  const totalRevenue = figRevenue + extBilled;
  const margin       = totalRevenue>0 ? Math.round((totalRevenue-totalCost)/totalRevenue*100) : 0;
  const budgetCliente= brief?.budget_cliente || 0;
  const budgetAlert  = budgetCliente>0 && totalRevenue>budgetCliente;
  const totalBillGU  = billableFigIds.reduce((s,id)=>s+(billableTotals[id]||0), 0);

  // ── Scenario range ───────────────────────────────────────────────────────
  // Revenue = fixed. Variable = GU actually worked.
  // Pessimistico = GU until cost=revenue → margin 0, never a loss
  // Ottimistico  = save GU → same revenue, lower cost → higher margin
  const avgMarkupPct = totalBillGU>0
    ? billableFigIds.reduce((s,id)=>s+getMkup(id)*(billableTotals[id]||0), 0) / totalBillGU
    : 30;
  const costPerGU    = totalBillGU>0 ? totalCost/totalBillGU : 0;
  const pessGU       = costPerGU>0 ? Math.ceil(totalRevenue/costPerGU) : Math.ceil(totalBillGU*(1+avgMarkupPct/100));
  const pessExtraGU  = pessGU - totalBillGU;
  const pessMarginEur= 0;
  const pessMarginPct= 0;
  const optSavingPct = 25;
  const optimisticGU = Math.ceil(totalBillGU*(1-optSavingPct/100));
  const optCostSaved = (totalBillGU-optimisticGU)*costPerGU;
  const optMarginEur = totalRevenue - optimisticGU*costPerGU;
  const optMarginPct = totalRevenue>0 ? optMarginEur/totalRevenue*100 : 0;
  const baseMarginEur= totalRevenue - totalCost;
  const pessimisticGU= pessGU;

  const renderKPI = (label,value,sub,c="#1a1a18",big=false) => (
    <div style={{padding:"10px 12px",background:"#fff",border:bd,borderRadius:8}}>
      <div style={{fontSize:9,color:"#9c9a92",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>{label}</div>
      <div style={{fontSize:big?22:16,fontWeight:700,color:c,lineHeight:1,fontFamily:"monospace"}}>{value}</div>
      {sub&&<div style={{fontSize:10,color:"#9c9a92",marginTop:2}}>{sub}</div>}
    </div>
  );

  const fmt = v => new Intl.NumberFormat('it-IT').format(Math.round(v));

  // recharts bar data — only billable figures
  const barData = billableFigIds.map(id=>({
    name: getFig(id).short,
    label: getFig(id).label,
    GU: billableTotals[id]||0,
    Costo: (billableTotals[id]||0)*getRate(id),
    fill: getFig(id).colore,
  }));

  return (
    <div>
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:14}}>
        <div>
          <div style={{fontSize:15,fontWeight:500,color:"#1a1a18"}}>Risorse e Dashboard</div>
          <div style={{fontSize:11,color:"#6b6b67",marginTop:2}}>{allItems.length} voci · {billableFigIds.length} fatturabili · {clienteFigIds.length} cliente · {totalGU} GU totali</div>
        </div>
        <div style={{display:"flex",gap:7}}>
          <button onClick={onBack} style={{padding:"6px 12px",fontSize:12,border:bd,borderRadius:8,cursor:"pointer",background:"#fff",color:"#6b6b67"}}>← Voci</button>
          <button onClick={onNext} style={{padding:"6px 14px",fontSize:12,background:"#1a1a18",color:"#fff",border:"none",borderRadius:8,cursor:"pointer"}}>Gantt →</button>
        </div>
      </div>

      {/* KPI row */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))",gap:7,marginBottom:14}}>
        {renderKPI("GU totali",totalGU,null,"#1a1a18",true)}
        {renderKPI("GU ottimistica",optimisticGU,`−${optSavingPct}% risorse`,"#27500A")}
        {renderKPI("GU base",totalGU,"stima base")}
        {renderKPI("GU pessimistica",pessimisticGU,"margine→0","#791F1F")}
        {totalCost>0&&renderKPI("Costo totale","€ "+fmt(totalCost),extBaseCost>0?`di cui ext: € ${fmt(extBaseCost)}`:"figure only","#1a1a18")}
        {totalRevenue>0&&renderKPI("Ricavo totale","€ "+fmt(totalRevenue),`Margine ${margin}%`,"#185FA5",true)}
      </div>

      {budgetAlert&&(
        <div style={{padding:"8px 12px",background:"#FCEBEB",border:"0.5px solid #E24B4A",borderRadius:7,marginBottom:10,fontSize:11,color:"#791F1F"}}>
          <strong>⚠ Attenzione:</strong> il ricavo stimato ({brief.valuta?.split(" ")[0]||"€"} {fmt(totalRevenue)}) supera il budget cliente dichiarato ({brief.valuta?.split(" ")[0]||"€"} {fmt(budgetCliente)}).
        </div>
      )}
      {avgMarkupPct<10&&totalRevenue>0&&(
        <div style={{padding:"8px 12px",background:"#FAEEDA",border:"0.5px solid #BA7517",borderRadius:7,marginBottom:10,fontSize:11,color:"#633806"}}>
          <strong>⚠ Markup basso:</strong> markup medio {avgMarkupPct.toFixed(1)}% — il buffer pessimistico è esiguo ({pessExtraGU} GU). Rischio di andare in perdita con piccoli sforamenti.
        </div>
      )}

      {/* PM% global setting */}
      <div style={{padding:"8px 12px",background:"#f7f6f3",borderRadius:8,border:bd,marginBottom:12,display:"flex",alignItems:"center",gap:10}}>
        <span style={{fontSize:11,fontWeight:500,color:"#1a1a18",flexShrink:0}}>% PM globale (override per riga):</span>
        <input type="range" min={0} max={20} step={1} value={pmPct} onChange={e=>onPmPctChange(parseInt(e.target.value))} style={{flex:1,accentColor:"#185FA5"}}/>
        <span style={{fontSize:12,fontWeight:700,color:"#185FA5",width:28,flexShrink:0}}>{pmPct}%</span>
        <span style={{fontSize:10,color:"#9c9a92",flexShrink:0}}>applicato a tutte le voci che includono PM</span>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>
        {/* LEFT: Recharts bar chart */}
        <div>
          <div style={{fontSize:11,fontWeight:600,color:"#1a1a18",marginBottom:8}}>GU per figura professionale</div>
          {barData.length > 0 ? (
            <div style={{background:"#fff",border:bd,borderRadius:8,padding:"10px"}}>
              {barData.map((d,i)=>{
                const pct = totalGU>0 ? Math.round(d.GU/totalGU*100) : 0;
                return (
                  <div key={d.name} style={{marginBottom:8}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                      <div style={{display:"flex",alignItems:"center",gap:6}}>
                        <span style={{width:32,padding:"1px 4px",borderRadius:5,background:d.fill,color:"#fff",fontSize:9,fontWeight:700,textAlign:"center"}}>{d.name}</span>
                        <span style={{fontSize:11,color:"#1a1a18"}}>{d.label}</span>
                      </div>
                      <span style={{fontSize:11,fontWeight:700,color:d.fill,fontFamily:"monospace"}}>{d.GU} GU <span style={{fontSize:9,color:"#9c9a92",fontWeight:400}}>({pct}%)</span></span>
                    </div>
                    <div style={{height:7,borderRadius:4,background:"#f0f0ee",overflow:"hidden"}}>
                      <div style={{width:pct+"%",height:"100%",background:d.fill,borderRadius:4}}/>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : <div style={{padding:"20px",textAlign:"center",color:"#9c9a92",fontSize:11,border:bd,borderRadius:8}}>Nessuna figura assegnata alle voci.</div>}

          {/* Range economico */}
          <div style={{marginTop:10,padding:"10px",background:"#fff",border:bd,borderRadius:8}}>
            <div style={{fontSize:10,fontWeight:700,color:"#1a1a18",marginBottom:8,textTransform:"uppercase",letterSpacing:".04em"}}>Range scenario economico</div>
            {totalRevenue>0 ? <>
              {[
                ["Ottimistico",optimisticGU,optMarginEur,optMarginPct,"#27500A",`Risparmio ${optSavingPct}% GU → +${fmt(optCostSaved)} margine`],
                ["Base",totalBillGU,baseMarginEur,margin,"#185FA5","GU stimati × tariffa × markup prefissato"],
                ["Pessimistico",pessGU,pessMarginEur,pessMarginPct,"#791F1F",`+${pessExtraGU} GU extra — markup azzerato, guadagno 0`],
              ].map(([lbl,gu,marEur,marPct,c,nota])=>(
                <div key={lbl} style={{marginBottom:8,padding:"7px 9px",borderRadius:6,background:`${c}0A`,border:`0.5px solid ${c}30`}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                    <span style={{fontSize:11,fontWeight:600,color:c}}>{lbl}</span>
                    <div style={{textAlign:"right"}}>
                      <div style={{fontSize:12,fontWeight:700,color:c,fontFamily:"monospace"}}>{gu} GU</div>
                      {costPerGU>0&&<div style={{fontSize:11,fontFamily:"monospace",color:marEur>0?"#27500A":marEur===0?"#BA7517":"#791F1F"}}>
                        {marEur>0?"+" : ""}{fmt(marEur)} € ({marPct.toFixed(1)}%)
                      </div>}
                    </div>
                  </div>
                  <div style={{fontSize:9,color:`${c}AA`,marginTop:3,lineHeight:1.4}}>{nota}</div>
                </div>
              ))}
              {costPerGU===0&&<div style={{fontSize:10,color:"#9c9a92",fontStyle:"italic"}}>Inserisci le tariffe per vedere il range economico</div>}
            </> : <div style={{fontSize:10,color:"#9c9a92"}}>Nessun costo configurato — vai in Risorse e inserisci le tariffe</div>}
          </div>
        </div>

        {/* RIGHT: Resource table — all figures, cliente toggle per row */}
        <div>
          <div style={{fontSize:11,fontWeight:600,color:"#1a1a18",marginBottom:8}}>
            Costi e markup per figura
            <span style={{fontSize:9,color:"#9c9a92",fontWeight:400,marginLeft:8}}>
              {billableFigIds.length} fatturabili · {clienteFigIds.length} cliente
            </span>
          </div>
          <div style={{background:"#fff",border:bd,borderRadius:8,overflow:"hidden"}}>
          <div style={{overflowX:"auto"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 58px 72px 70px 80px 50px",minWidth:480,gap:0,background:"#f7f6f3",borderBottom:bd,padding:"6px 10px"}}>
              {[["Figura","left"],["GU","right"],["€/GG","right"],["Markup","right"],["Ricavo","right"],["Cli","center"]].map(([h,a])=>(
                <div key={h} style={{fontSize:9,fontWeight:700,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",textAlign:a}}>{h}</div>
              ))}
            </div>
            {allFigIds.map(id=>{
              const fig  = getFig(id);
              const cli  = isCli(id);
              const gu   = (cli ? totalsAll[id] : billableTotals[id]) || 0;
              const rate = getRate(id);
              const mkup = getMkup(id);
              const rev  = cli ? 0 : gu*rate*(1+mkup/100);
              const rowBg = cli ? "#fafaf8" : "#fff";
              return (
                <div key={id} style={{display:"grid",gridTemplateColumns:"1fr 58px 72px 70px 80px 50px",gap:0,padding:"6px 10px",borderBottom:bd,alignItems:"center",background:rowBg,opacity:cli?0.75:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:5,minWidth:0}}>
                    <span style={{width:26,padding:"1px 3px",borderRadius:4,background:cli?"#e0ded8":fig.colore,color:cli?"#6b6b67":"#fff",fontSize:8,fontWeight:700,textAlign:"center",flexShrink:0}}>{fig.short}</span>
                    <span style={{fontSize:10,color:cli?"#9c9a92":"#1a1a18",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{fig.label}</span>
                  </div>
                  <div style={{textAlign:"right",fontSize:11,fontWeight:700,color:cli?"#9c9a92":fig.colore,fontFamily:"monospace"}}>{gu}</div>
                  <div style={{textAlign:"right"}}>
                    {!cli ? (
                      <input type="number" min={0} value={rate||""} onChange={e=>onRateChange(id,"rate",parseInt(e.target.value)||0)} placeholder="0"
                        style={{width:64,padding:"3px 5px",fontSize:11,border:bd,borderRadius:4,textAlign:"right",outline:"none",fontFamily:"monospace"}}/>
                    ) : <span style={{fontSize:10,color:"#ccc",fontStyle:"italic"}}>—</span>}
                  </div>
                  <div style={{textAlign:"right",display:"flex",alignItems:"center",justifyContent:"flex-end",gap:2}}>
                    {!cli ? (
                      <>
                        <input type="number" min={0} max={200} value={mkup} onChange={e=>onRateChange(id,"markup",parseInt(e.target.value)||0)}
                          style={{width:36,padding:"3px 4px",fontSize:11,border:bd,borderRadius:4,textAlign:"right",outline:"none"}}/>
                        <span style={{fontSize:9,color:"#9c9a92"}}>%</span>
                      </>
                    ) : <span style={{fontSize:10,color:"#ccc",fontStyle:"italic"}}>—</span>}
                  </div>
                  <div style={{textAlign:"right",fontSize:11,fontWeight:600,fontFamily:"monospace",color:cli?"#ccc":rate>0?"#27500A":"#9c9a92"}}>
                    {cli ? <span style={{fontSize:9,color:"#BA7517",fontStyle:"italic"}}>🏢 cliente</span> : (rate>0?"€ "+fmt(rev):"—")}
                  </div>
                  {/* isCliente toggle */}
                  <div style={{textAlign:"center"}}>
                    <button onClick={()=>onRateChange(id,"isCliente",!cli)}
                      title={cli?"Rimuovi da cliente (diventa fatturabile)":"Segna come figura cliente (non fatturata)"}
                      style={{fontSize:9,padding:"2px 5px",borderRadius:5,border:`1px solid ${cli?"#27500A":"#BA7517"}`,cursor:"pointer",
                        background:cli?"#EAF3DE":"#FFF8EC",color:cli?"#27500A":"#BA7517",fontWeight:600,whiteSpace:"nowrap"}}>
                      {cli?"👤":"🏢"}
                    </button>
                  </div>
                </div>
              );
            })}
            {totalCost>0&&(
              <div style={{display:"grid",gridTemplateColumns:"1fr 58px 72px 70px 80px 50px",gap:0,padding:"6px 10px",background:"#1a1a18",alignItems:"center"}}>
                <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,.7)"}}>TOTALE FATTURABILE</div>
                <div style={{textAlign:"right",fontFamily:"monospace",color:"rgba(255,255,255,.7)",fontSize:11}}>{billableFigIds.reduce((s,id)=>s+(billableTotals[id]||0),0)}</div>
                <div style={{textAlign:"right",fontFamily:"monospace",color:"rgba(255,255,255,.6)",fontSize:10}}>avg {totalCost>0&&billableFigIds.reduce((s,id)=>s+(billableTotals[id]||0),0)>0?"€ "+fmt(totalCost/billableFigIds.reduce((s,id)=>s+(billableTotals[id]||0),0)):""}/gg</div>
                <div/>
                <div style={{textAlign:"right",fontFamily:"monospace",color:"#fff",fontSize:13,fontWeight:800}}>€ {fmt(totalRevenue)}</div>
                <div/>
              </div>
            )}

          {/* External Costs — partner, tool, licenze, spese */}
          <div style={{marginTop:14}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <div style={{fontSize:11,fontWeight:600,color:"#1a1a18"}}>
                Costi esterni
                <span style={{fontSize:9,color:"#9c9a92",fontWeight:400,marginLeft:8}}>
                  partner · tool · licenze · spese di progetto
                </span>
              </div>
              <button onClick={onAddExtCost}
                style={{marginLeft:"auto",padding:"3px 10px",fontSize:10,border:"1px dashed #185FA5",
                  borderRadius:6,cursor:"pointer",background:"transparent",color:"#185FA5"}}>
                + Aggiungi
              </button>
            </div>

            {externalCosts.length>0 ? (
              <div style={{background:"#fff",border:bd,borderRadius:8,overflow:"hidden"}}>
                <div style={{overflowX:"auto"}}>
                <div style={{minWidth:520}}>
                {/* Header */}
                <div style={{display:"grid",gridTemplateColumns:"minmax(140px,1fr) 70px 90px 90px 70px 60px 24px",
                  gap:0,background:"#f7f6f3",borderBottom:bd,padding:"5px 10px"}}>
                  {[["Voce / Fornitore","left"],["Tipo","left"],["Costo unit.","right"],
                    ["Qtà · Unità","right"],["Totale","right"],["Mk","center"],["",""]].map(([h,a])=>(
                    <div key={h} style={{fontSize:8,fontWeight:700,color:"#6b6b67",
                      textTransform:"uppercase",letterSpacing:".04em",textAlign:a}}>{h}</div>
                  ))}
                </div>

                {externalCosts.map(x=>{
                  const base    = (x.costo_unitario||0)*(x.quantita||1);
                  const billed  = x.markup_active ? base*(1+(x.markup_pct||0)/100) : base;
                  const TIPO_C  = {tool:"#185FA5",partner:"#533AB7",licenza:"#27500A",
                                   spesa:"#BA7517",hardware:"#1a1a18",altro:"#9c9a92"};
                  const UNITA   = ["mese","anno","una tantum","gg","ora","pz"];
                  return (
                    <div key={x.id} style={{display:"grid",
                      gridTemplateColumns:"minmax(140px,1fr) 70px 90px 90px 70px 60px 24px",
                      gap:0,padding:"6px 10px",borderBottom:bd,alignItems:"start"}}>
                      {/* Voce + Fornitore stacked */}
                      <div style={{minWidth:0,paddingRight:4}}>
                        <input value={x.label} onChange={e=>onSetExtCost(x.id,"label",e.target.value)}
                          placeholder="Nome costo..."
                          style={{width:"100%",padding:"3px 5px",fontSize:10,border:bd,borderRadius:4,
                            outline:"none",boxSizing:"border-box"}}/>
                        <input value={x.fornitore} onChange={e=>onSetExtCost(x.id,"fornitore",e.target.value)}
                          placeholder="Fornitore (opz.)"
                          style={{width:"100%",padding:"2px 5px",fontSize:9,border:"none",
                            borderTop:"0.5px solid #f0f0ee",outline:"none",color:"#9c9a92",
                            background:"transparent",marginTop:2,boxSizing:"border-box"}}/>
                      </div>
                      {/* Tipo */}
                      <div>
                        <select value={x.tipo} onChange={e=>onSetExtCost(x.id,"tipo",e.target.value)}
                          style={{width:"100%",padding:"3px 2px",fontSize:9,border:bd,borderRadius:4,
                            color:TIPO_C[x.tipo]||"#6b6b67",fontWeight:600,outline:"none",
                            background:`${TIPO_C[x.tipo]||"#9c9a92"}15`}}>
                          {["tool","partner","licenza","spesa","hardware","altro"].map(t=>(
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      {/* Costo unitario */}
                      <div>
                        <input type="number" min={0} value={x.costo_unitario||""}
                          onChange={e=>onSetExtCost(x.id,"costo_unitario",parseFloat(e.target.value)||0)}
                          placeholder="0"
                          style={{width:"100%",padding:"3px 5px",fontSize:10,border:bd,borderRadius:4,
                            outline:"none",fontFamily:"monospace",textAlign:"right",boxSizing:"border-box"}}/>
                      </div>
                      {/* Qtà + Unità */}
                      <div style={{display:"flex",gap:3}}>
                        <input type="number" min={0} step={1} value={x.quantita||1}
                          onChange={e=>onSetExtCost(x.id,"quantita",parseFloat(e.target.value)||1)}
                          style={{width:36,padding:"3px 4px",fontSize:10,border:bd,borderRadius:4,
                            outline:"none",textAlign:"right",flexShrink:0}}/>
                        <select value={x.unita} onChange={e=>onSetExtCost(x.id,"unita",e.target.value)}
                          style={{flex:1,minWidth:0,padding:"2px 2px",fontSize:8,border:bd,borderRadius:4,
                            outline:"none",color:"#6b6b67"}}>
                          {UNITA.map(u=><option key={u} value={u}>{u}</option>)}
                        </select>
                      </div>
                      {/* Totale */}
                      <div style={{textAlign:"right",fontSize:10,fontWeight:700,
                        color:billed>base?"#185FA5":billed>0?"#27500A":"#9c9a92",fontFamily:"monospace"}}>
                        {billed>0?`€ ${fmt(billed)}`:"—"}
                        {billed>base&&<div style={{fontSize:8,color:"#185FA5"}}>costo {fmt(base)}</div>}
                      </div>
                      {/* Markup toggle */}
                      <div style={{textAlign:"center"}}>
                        <button onClick={()=>onSetExtCost(x.id,"markup_active",!x.markup_active)}
                          style={{fontSize:8,padding:"2px 5px",borderRadius:4,
                            border:`1px solid ${x.markup_active?"#185FA5":"#e0ded8"}`,
                            cursor:"pointer",fontWeight:600,display:"block",width:"100%",
                            background:x.markup_active?"#185FA5":"transparent",
                            color:x.markup_active?"#fff":"#9c9a92"}}>
                          {x.markup_active?`+${x.markup_pct||0}%`:"mk"}
                        </button>
                        {x.markup_active&&(
                          <input type="number" min={0} max={200} value={x.markup_pct||0}
                            onChange={e=>onSetExtCost(x.id,"markup_pct",parseInt(e.target.value)||0)}
                            style={{width:"100%",padding:"2px 3px",fontSize:9,border:bd,borderRadius:4,
                              outline:"none",marginTop:2,textAlign:"right",boxSizing:"border-box"}}/>
                        )}
                      </div>
                      {/* Delete */}
                      <button onClick={()=>onDelExtCost(x.id)}
                        style={{width:20,height:20,borderRadius:4,border:bd,background:"transparent",
                          cursor:"pointer",fontSize:11,color:"#9c9a92",display:"flex",
                          alignItems:"center",justifyContent:"center",lineHeight:1,flexShrink:0}}>×</button>
                    </div>
                  );
                })}

                {/* Footer totale */}
                <div style={{display:"grid",gridTemplateColumns:"minmax(140px,1fr) 70px 90px 90px 70px 60px 24px",
                  gap:0,padding:"5px 10px",background:"#f7f6f3",borderTop:bd,alignItems:"center"}}>
                  <div style={{fontSize:9,fontWeight:700,color:"#6b6b67",textTransform:"uppercase",
                    gridColumn:"1/5"}}>Totale costi esterni</div>
                  <div style={{textAlign:"right",fontSize:11,fontWeight:700,color:"#1a1a18",
                    fontFamily:"monospace"}}>
                    € {fmt(extBilled)}
                    {extBilled>extBaseCost&&<div style={{fontSize:8,color:"#9c9a92"}}>costo {fmt(extBaseCost)}</div>}
                  </div>
                  <div/><div/>
                </div>
                </div>{/* /minWidth */}
                </div>{/* /overflowX */}
              </div>
            ) : (
              <div style={{padding:"12px",border:"1px dashed #e0ded8",borderRadius:8,
                textAlign:"center",fontSize:10,color:"#9c9a92",cursor:"pointer"}}
                onClick={onAddExtCost}>
                + Aggiungi costi esterni: licenze SaaS, partner, hardware, spese di trasferta...
              </div>
            )}
          </div>
          </div>{/* /overflowX:auto */}
          </div>{/* /overflow:hidden */}
        </div>
      </div>
    </div>
  );
}

// ─── GANTT SCREEN (pagina 5) ──────────────────────────────────────────────────

const GANTT_FASE_COLORS = {
  1:"#185FA5",2:"#1B5E20",3:"#4A148C",4:"#004D40",
  5:"#B71C1C",6:"#E65100",7:"#4E342E",8:"#0D47A1"
};

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

function isWorkDay(date, schedule, excludedIso) {
  const dow = date.getDay(); // 0=Sun,6=Sat
  const iso = date.toISOString().slice(0,10);
  if (excludedIso.includes(iso)) return false;
  if (schedule === "5/7" && (dow===0||dow===6)) return false;
  if (schedule === "6/7" && dow===0) return false;
  return true;
}

function buildSchedule(allocations, startDate, cfg) {
  const { schedule, excludedDates, maxConsecutive, minRest } = cfg;
  const start = new Date(startDate);
  const results = {};

  Object.entries(allocations).forEach(([figId, blocks]) => {
    const sorted = [...blocks].sort((a,b)=>(a.faseNum||4)-(b.faseNum||4));
    let dayOffset = 0;
    let consecutive = 0;
    const scheduled = [];

    // advance to first work day
    while(!isWorkDay(addDays(start, dayOffset), schedule, excludedDates)) dayOffset++;

    sorted.forEach(block => {
      let needed = Math.max(1, block.gu);
      const blockStart = dayOffset;
      let worked = 0;

      while (worked < needed) {
        const cur = addDays(start, dayOffset);
        if (!isWorkDay(cur, schedule, excludedDates)) {
          dayOffset++; consecutive = 0; continue;
        }
        if (consecutive >= maxConsecutive) {
          // force rest
          for (let r=0; r<minRest; r++) dayOffset++;
          consecutive = 0;
          continue;
        }
        worked++; consecutive++; dayOffset++;
      }
      scheduled.push({ ...block, startDay: blockStart, endDay: dayOffset });
    });

    results[figId] = scheduled;
  });

  return results;
}

function GanttScreen({ allItems, figures, pmPct, figurePctMap, clienteFigSet=new Set(), brief, onBack, onNext }) {
  const bd = "0.5px solid #e0ded8";
  const today = new Date().toISOString().slice(0,10);

  const [startDate, setStartDate]    = useState(brief?.data_inizio||today);
  const [scheduleMode, setSchedMode] = useState("5/7");
  const [maxConsec, setMaxConsec]    = useState(11);
  const [minRest, setMinRest]        = useState(2);
  const [excluded, setExcluded]      = useState([]);
  const [newExcDate, setNewExcDate]  = useState("");
  const [zoomPx, setZoomPx] = useState(52); // px per column unit
  const ZOOM_UNIT = zoomPx < 30 ? 30 : zoomPx < 60 ? 7 : 1; // month/week/day
  const colPx     = zoomPx;
  const colUnit   = ZOOM_UNIT;

  const handleWheelZoom = (e) => {
    if(e.ctrlKey||e.metaKey) {
      e.preventDefault();
      setZoomPx(z => Math.min(200, Math.max(14, z + (e.deltaY < 0 ? 8 : -8))));
    }
  };
  const zoomLabel = colUnit===1?"Giorni":colUnit===7?"Settimane":"Mesi";

  const [ganttView, setGanttView]    = useState("resource"); // "resource"|"project"
  const [expandedRow, setExpandedRow]= useState(null);

  // Build allocations — include codice and fw for project view
  const figAllocations = {};
  const itemAllocations = {}; // codice → {title, fw, faseNum, figures}

  allItems.forEach(item => {
    const gu   = item.gu_min||0;
    const figs = item.figure||[];
    const cod  = item.codice||item.id;
    const perPct = (figurePctMap||{})[cod];
    const dist = perPct ? distributeGUCompliance(gu, figs, perPct, figures, clienteFigSet) : distributeGU(gu, figs, pmPct, {}, figures, clienteFigSet);
    itemAllocations[cod] = { title:item.titolo, fw:item.fw, faseNum:item.fase_num||4, figures:Object.keys(dist), isMilestone:!!(item.is_milestone) };
    Object.entries(dist).forEach(([fid,guFig])=>{
      if(!figAllocations[fid]) figAllocations[fid]=[];
      figAllocations[fid].push({ label:item.titolo, gu:guFig, faseNum:item.fase_num||4, color:GANTT_FASE_COLORS[item.fase_num||4]||"#9c9a92", codice:cod, fw:item.fw, isMilestone:!!(item.is_milestone) });
    });
  });

  const cfg  = { schedule:scheduleMode, excludedDates:excluded, maxConsecutive:maxConsec, minRest };
  const sched = buildSchedule(figAllocations, startDate, cfg);

  // Project view: invert sched → per item timeline
  const itemTimeline = {};
  Object.entries(sched).forEach(([figId,blocks])=>{
    blocks.forEach(bl=>{
      if(!bl.codice) return;
      if(!itemTimeline[bl.codice]) itemTimeline[bl.codice] = { startDay:bl.startDay, endDay:bl.endDay, faseNum:bl.faseNum, title:bl.label, fw:bl.fw, color:bl.color, isMilestone:bl.isMilestone };
      else {
        itemTimeline[bl.codice].startDay    = Math.min(itemTimeline[bl.codice].startDay, bl.startDay);
        itemTimeline[bl.codice].endDay      = Math.max(itemTimeline[bl.codice].endDay, bl.endDay);
        itemTimeline[bl.codice].isMilestone = itemTimeline[bl.codice].isMilestone || bl.isMilestone;
      }
    });
  });

  // Max day & end date
  const maxDay   = Object.values(sched).reduce((m,bs)=>bs.reduce((mm,b)=>Math.max(mm,b.endDay),m),0);
  const endDate  = maxDay>0 ? addDays(new Date(startDate),maxDay) : null;
  const endISO   = endDate ? endDate.toISOString().slice(0,10) : "—";
  const diffDays = brief?.data_fine&&endDate ? Math.round((endDate-new Date(brief.data_fine))/86400000) : null;

  // Figure rows sorted by total GU
  const figIds = Object.keys(sched).sort((a,b)=>
    (figAllocations[b]||[]).reduce((s,bl)=>s+bl.gu,0)-(figAllocations[a]||[]).reduce((s,bl)=>s+bl.gu,0)
  );
  const getFig = id => figures.find(f=>f.id===id)||{id,label:id,short:(id||"?").slice(0,3).toUpperCase(),colore:"#9c9a92"};

  // Project rows: items sorted by startDay
  const projItems = Object.entries(itemTimeline).sort((a,b)=>a[1].startDay-b[1].startDay);

  // Timeline calculations
  const totalDays = Math.max(maxDay+14, 30);
  const nCols     = Math.ceil(totalDays/colUnit)+2;
  const timelineW = nCols*colPx;
  const leftW     = 140;
  const rowH      = colUnit===1 ? 26 : 34;
  const expandedH = 80;

  const dayToX    = d => (d/colUnit)*colPx;

  const colLabels = Array.from({length:nCols},(_,i)=>{
    const d = addDays(new Date(startDate), i*colUnit);
    if(colUnit===1)   return d.toLocaleDateString('it-IT',{weekday:'short',day:'numeric'});
    if(colUnit===7)   return d.toLocaleDateString('it-IT',{month:'short',day:'numeric'});
    return d.toLocaleDateString('it-IT',{month:'short',year:'2-digit'});
  });

  const todayOff    = Math.round((new Date(today)-new Date(startDate))/86400000);
  const briefEndOff = brief?.data_fine ? Math.round((new Date(brief.data_fine)-new Date(startDate))/86400000) : null;

  // Render a single Gantt row of blocks
  const renderBlocks = (blocks, rowH, isExpanded) => blocks.map((bl,bi)=>{
    const x   = dayToX(bl.startDay)+1;
    const w   = Math.max(2, dayToX(bl.endDay)-dayToX(bl.startDay)-2);
    const lblMin = colUnit===1 ? 8 : 24;
    const cx  = dayToX(bl.endDay);   // milestone anchor at end
    const hs  = Math.round((rowH-8)/2); // half-size for diamond

    if (bl.isMilestone) {
      return (
        <React.Fragment key={bi}>
          {/* thin line showing duration */}
          <div title={`★ ${bl.label} — milestone`}
            style={{position:"absolute",left:x,top:Math.floor(rowH/2)-1,height:2,
              width:Math.max(1,w),background:bl.color,opacity:.35,zIndex:1}}/>
          {/* diamond at end point */}
          <div title={`★ ${bl.label} — milestone`}
            style={{position:"absolute",left:cx-hs,top:4,width:hs*2,height:rowH-10,zIndex:4,
              display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",pointerEvents:"none"}}>
            <div style={{width:hs*1.3,height:hs*1.3,background:bl.color,transform:"rotate(45deg)",
              border:"2px solid #fff",boxShadow:`0 0 0 1.5px ${bl.color}`,borderRadius:2}}/>
            <span style={{fontSize:8,color:bl.color,fontWeight:800,marginTop:2,lineHeight:1}}>★</span>
          </div>
        </React.Fragment>
      );
    }
    return (
      <div key={bi} title={`${bl.label} — F${bl.faseNum} — ${bl.gu}GU`}
        style={{position:"absolute",left:x,top:4,height:rowH-10,width:w,background:bl.color,borderRadius:4,opacity:.88,cursor:"pointer",
          display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",zIndex:2}}>
        {w>lblMin&&<span style={{fontSize:8,color:"#fff",fontWeight:700,whiteSpace:"nowrap",padding:"0 2px"}}>{bl.gu}GU</span>}
      </div>
    );
  });

  // Gantt row with vertical line markers
  const GanttRow = ({children, height, bg}) => (
    <div style={{height,borderBottom:bd,position:"relative",background:bg||"#fff"}}>
      {colLabels.map((_,i)=><div key={i} style={{position:"absolute",left:i*colPx,top:0,bottom:0,width:colPx,borderRight:"0.5px solid #f5f5f5"}}/>)}
      {todayOff>=0&&todayOff<=totalDays&&<div style={{position:"absolute",left:dayToX(todayOff),top:0,bottom:0,width:2,background:"#E65100",opacity:.7,zIndex:5}}/>}
      {briefEndOff!=null&&briefEndOff>=0&&<div style={{position:"absolute",left:dayToX(briefEndOff),top:0,bottom:0,width:2,background:"#791F1F",opacity:.5,borderLeft:"2px dashed #791F1F",zIndex:4}}/>}
      {children}
    </div>
  );

  return (
    <div>
      {/* Header */}
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:10}}>
        <div>
          <div style={{fontSize:15,fontWeight:500,color:"#1a1a18"}}>Gantt — Piano di Progetto</div>
          <div style={{fontSize:11,color:"#6b6b67",marginTop:1}}>{figIds.length} figure · {maxDay} gg lavorativi · fine: {endISO}</div>
        </div>
        <div style={{display:"flex",gap:6}}>
          <button onClick={onBack} style={{padding:"6px 12px",fontSize:12,border:bd,borderRadius:8,cursor:"pointer",background:"#fff",color:"#6b6b67"}}>← Risorse</button>
          {onNext&&<button onClick={onNext} style={{padding:"6px 14px",fontSize:12,background:"#185FA5",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontWeight:600}}>Report →</button>}
        </div>
      </div>

      {/* Controls row */}
      <div style={{display:"grid",gridTemplateColumns:"auto auto auto 1fr auto",gap:10,marginBottom:10,alignItems:"start"}}>
        {/* Date + calendar */}
        <div style={{padding:"8px 12px",background:"#fff",border:bd,borderRadius:8}}>
          <div style={{fontSize:9,color:"#9c9a92",textTransform:"uppercase",letterSpacing:".04em",marginBottom:4}}>Inizio</div>
          <input type="date" value={startDate} onChange={e=>setStartDate(e.target.value)} style={{padding:"4px 6px",fontSize:11,border:bd,borderRadius:5,outline:"none"}}/>
          <div style={{display:"flex",gap:4,marginTop:5}}>
            {["5/7","6/7","7/7"].map(s=>(
              <button key={s} onClick={()=>setSchedMode(s)} style={{padding:"2px 8px",fontSize:10,border:bd,borderRadius:5,cursor:"pointer",background:scheduleMode===s?"#1a1a18":"#fff",color:scheduleMode===s?"#fff":"#6b6b67",fontWeight:scheduleMode===s?600:400}}>{s}</button>
            ))}
          </div>
        </div>

        {/* Rest rule */}
        <div style={{padding:"8px 12px",background:"#fff",border:bd,borderRadius:8,minWidth:180}}>
          <div style={{fontSize:9,color:"#9c9a92",textTransform:"uppercase",letterSpacing:".04em",marginBottom:5}}>Regola riposo</div>
          {[["Max cons.","#185FA5",maxConsec,setMaxConsec,3,25],["Min riposo","#791F1F",minRest,setMinRest,1,7]].map(([lbl,c,v,set,mn,mx])=>(
            <div key={lbl} style={{display:"flex",alignItems:"center",gap:5,marginBottom:3}}>
              <span style={{fontSize:9,color:"#6b6b67",width:60,flexShrink:0}}>{lbl}</span>
              <input type="range" min={mn} max={mx} step={1} value={v} onChange={e=>set(parseInt(e.target.value))} style={{flex:1,accentColor:c}}/>
              <span style={{fontSize:10,fontWeight:700,color:c,width:16,textAlign:"right"}}>{v}</span>
            </div>
          ))}
        </div>

        {/* Excluded dates */}
        <div style={{padding:"8px 12px",background:"#fff",border:bd,borderRadius:8,minWidth:180}}>
          <div style={{fontSize:9,color:"#9c9a92",textTransform:"uppercase",letterSpacing:".04em",marginBottom:4}}>Date escluse</div>
          <div style={{display:"flex",gap:3,marginBottom:4}}>
            <input type="date" value={newExcDate} onChange={e=>setNewExcDate(e.target.value)} style={{flex:1,padding:"3px 5px",fontSize:10,border:bd,borderRadius:4,outline:"none"}}/>
            <button onClick={()=>{if(newExcDate&&!excluded.includes(newExcDate)){setExcluded(e=>[...e,newExcDate].sort());setNewExcDate("");}}}
              style={{padding:"3px 7px",fontSize:10,border:bd,borderRadius:4,cursor:"pointer",background:"#1a1a18",color:"#fff"}}>+</button>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:3,maxHeight:36,overflowY:"auto"}}>
            {excluded.map(d=>(
              <span key={d} style={{fontSize:8,padding:"1px 5px",borderRadius:6,background:"#FCEBEB",color:"#791F1F",display:"flex",alignItems:"center",gap:2,border:"0.5px solid #E24B4A30"}}>
                {d.slice(5)}<span onClick={()=>setExcluded(e=>e.filter(x=>x!==d))} style={{cursor:"pointer",fontWeight:700}}>×</span>
              </span>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div/>

        {/* View + Zoom controls */}
        <div style={{padding:"8px 12px",background:"#fff",border:bd,borderRadius:8}}>
          <div style={{fontSize:9,color:"#9c9a92",textTransform:"uppercase",letterSpacing:".04em",marginBottom:4}}>Vista</div>
          <div style={{display:"flex",gap:4,marginBottom:7}}>
            {[["resource","Per risorsa"],["project","Per progetto"]].map(([v,l])=>(
              <button key={v} onClick={()=>setGanttView(v)} style={{padding:"3px 8px",fontSize:10,border:bd,borderRadius:5,cursor:"pointer",background:ganttView===v?"#1a1a18":"#fff",color:ganttView===v?"#fff":"#6b6b67",fontWeight:ganttView===v?600:400,whiteSpace:"nowrap"}}>{l}</button>
            ))}
          </div>
          <div style={{fontSize:9,color:"#9c9a92",textTransform:"uppercase",letterSpacing:".04em",marginBottom:4}}>Zoom — {zoomLabel} <span style={{color:"#185FA5",fontWeight:700}}>{zoomPx}px</span></div>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{fontSize:8,color:"#9c9a92"}}>−</span>
            <input type="range" min={14} max={200} step={2} value={zoomPx} onChange={e=>setZoomPx(parseInt(e.target.value))} style={{flex:1,accentColor:"#185FA5"}}/>
            <span style={{fontSize:8,color:"#9c9a92"}}>+</span>
          </div>
          <div style={{fontSize:8,color:"#9c9a92",marginTop:3}}>Ctrl+scroll per zoom rapido</div>
        </div>
      </div>

      {/* Date summary bar */}
      <div style={{display:"flex",gap:12,padding:"7px 12px",background:"#f7f6f3",borderRadius:7,border:bd,marginBottom:10,alignItems:"center"}}>
        {[["Inizio",startDate,"#185FA5"],["Fine stimata",endISO,"#27500A"],["Fine Brief",brief?.data_fine||"—","#9c9a92"]].map(([l,v,c])=>(
          <div key={l}>
            <div style={{fontSize:8,color:"#9c9a92",textTransform:"uppercase",letterSpacing:".04em"}}>{l}</div>
            <div style={{fontSize:12,fontWeight:700,color:c,fontFamily:"monospace"}}>{v}</div>
          </div>
        ))}
        {diffDays!=null&&(
          <div style={{padding:"4px 8px",borderRadius:5,background:Math.abs(diffDays)<=5?"#EAF3DE":diffDays>0?"#FCEBEB":"#EAF3DE",border:`0.5px solid ${diffDays>5?"#E24B4A50":"#27500A50"}`,marginLeft:4}}>
            <div style={{fontSize:8,color:"#6b6b67",textTransform:"uppercase"}}>Delta vs Brief</div>
            <div style={{fontSize:12,fontWeight:700,color:diffDays>5?"#791F1F":diffDays<-5?"#27500A":"#1a1a18",fontFamily:"monospace"}}>{diffDays>0?"+":""}{diffDays} gg</div>
          </div>
        )}
      </div>

      {/* GANTT CHART */}
      {(ganttView==="resource" ? figIds : projItems).length > 0 ? (
        <div style={{background:"#fff",border:bd,borderRadius:8,overflow:"hidden"}} onWheel={handleWheelZoom}>
          <div style={{overflowX:"auto",overflowY:"auto",maxHeight:520}}>
            <div style={{display:"flex",minWidth:leftW+timelineW}}>

              {/* Y-axis labels */}
              <div style={{width:leftW,flexShrink:0,borderRight:bd,position:"sticky",left:0,background:"#fff",zIndex:10}}>
                <div style={{height:28,borderBottom:bd,background:"#fafaf8"}}/>
                {ganttView==="resource" ? figIds.map((figId,ri)=>{
                  const fig       = getFig(figId);
                  const totalGU   = (figAllocations[figId]||[]).reduce((s,b)=>s+b.gu,0);
                  const isExpanded= expandedRow===figId;
                  const h         = isExpanded ? expandedH : rowH;
                  return (
                    <div key={figId} style={{height:h,borderBottom:bd,display:"flex",alignItems:"flex-start",padding:"4px 8px",gap:6,background:ri%2===0?"#fafaf8":"#fff",cursor:"pointer"}}
                      onClick={()=>setExpandedRow(expandedRow===figId?null:figId)}>
                      <span style={{width:26,padding:"1px 3px",borderRadius:4,background:fig.colore,color:"#fff",fontSize:8,fontWeight:700,textAlign:"center",flexShrink:0,marginTop:2}}>{fig.short}</span>
                      <div style={{minWidth:0}}>
                        <div style={{fontSize:10,fontWeight:600,color:"#1a1a18",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:95}}>{fig.label}</div>
                        <div style={{fontSize:8,color:"#9c9a92"}}>{totalGU} GU{isExpanded?" ▲":" ▼"}</div>
                        {isExpanded&&<div style={{marginTop:4,fontSize:8,color:"#6b6b67",lineHeight:1.6}}>
                          {(figAllocations[figId]||[]).slice(0,4).map((b,i)=>(
                            <div key={i} style={{display:"flex",alignItems:"center",gap:3}}>
                              <div style={{width:6,height:6,borderRadius:2,background:b.color,flexShrink:0}}/>
                              <span style={{maxWidth:90,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{b.gu}GU — {b.label}</span>
                            </div>
                          ))}
                          {(figAllocations[figId]||[]).length>4&&<div style={{color:"#9c9a92"}}>+{(figAllocations[figId]||[]).length-4} altro...</div>}
                        </div>}
                      </div>
                    </div>
                  );
                }) : (() => {
                  // Project view: group items by phase, each item is a row
                  const byPhase = {};
                  projItems.forEach(([cod,info]) => {
                    const fn = info.faseNum||4;
                    if (!byPhase[fn]) byPhase[fn] = [];
                    byPhase[fn].push([cod,info]);
                  });
                  return Object.entries(byPhase).sort((a,b)=>parseInt(a[0])-parseInt(b[0])).flatMap(([fn, items]) => [
                    // Phase header
                    <div key={`ph-${fn}`} style={{height:22,borderBottom:bd,display:"flex",alignItems:"center",padding:"0 8px",gap:5,background:`${GANTT_FASE_COLORS[fn]||"#9c9a92"}18`}}>
                      <div style={{width:16,height:16,borderRadius:4,background:GANTT_FASE_COLORS[fn]||"#9c9a92",color:"#fff",fontSize:8,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{fn}</div>
                      <span style={{fontSize:9,fontWeight:700,color:GANTT_FASE_COLORS[fn]||"#9c9a92",textTransform:"uppercase",letterSpacing:".04em"}}>{FASI?.[parseInt(fn)]?.nome||`F${fn}`}</span>
                      <span style={{fontSize:8,color:"#9c9a92",marginLeft:"auto"}}>{items.length} voci</span>
                    </div>,
                    // Items in this phase
                    ...items.map(([cod,info],ri) => {
                      const fw = fwDef(info.fw);
                      const figs = itemAllocations[cod]?.figures||[];
                      return (
                        <div key={cod} style={{height:rowH,borderBottom:bd,display:"flex",alignItems:"center",padding:"0 7px",gap:5,background:ri%2===0?"#fff":"#fafaf8"}}>
                          <div style={{width:4,height:"70%",borderRadius:2,background:fw?.colore||GANTT_FASE_COLORS[fn]||"#9c9a92",flexShrink:0}}/>
                          <div style={{minWidth:0}}>
                            <div style={{fontSize:8,color:fw?.colore||"#9c9a92",fontWeight:600,textTransform:"uppercase",letterSpacing:".03em"}}>{fw?.nome||info.fw}</div>
                            <div style={{fontSize:9,color:"#1a1a18",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:105}}>{info.title}</div>
                          </div>
                        </div>
                      );
                    })
                  ]);
                })()}
              </div>

              {/* Timeline grid */}
              <div style={{flex:1,minWidth:timelineW}}>
                {/* Header row */}
                <div style={{display:"flex",height:28,borderBottom:bd,background:"#fafaf8",position:"sticky",top:0,zIndex:8}}>
                  {colLabels.map((lbl,i)=>(
                    <div key={i} style={{width:colPx,flexShrink:0,borderRight:"0.5px solid #e8e8e8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:"#9c9a92",fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{lbl}</div>
                  ))}
                </div>

                {/* Data rows */}
                {ganttView==="resource" ? figIds.map((figId,ri)=>{
                  const isExpanded = expandedRow===figId;
                  const h = isExpanded ? expandedH : rowH;
                  const blocks = sched[figId]||[];
                  return (
                    <GanttRow key={figId} height={h} bg={ri%2===0?"#fff":"#fafaf8"}>
                      {isExpanded ? (
                        // Expanded: show individual blocks more clearly
                        blocks.map((bl,bi)=>{
                          const x=dayToX(bl.startDay)+1;
                          const w=Math.max(3,dayToX(bl.endDay)-dayToX(bl.startDay)-3);
                          return (
                            <div key={bi} title={bl.label} style={{position:"absolute",left:x,top:5,height:h-14,width:w,background:bl.color,borderRadius:5,opacity:.9,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",overflow:"hidden",padding:"0 3px",zIndex:2}}>
                              {w>35&&<span style={{fontSize:8,color:"#fff",fontWeight:700,whiteSpace:"nowrap"}}>{bl.gu}GU</span>}
                              {w>60&&<span style={{fontSize:7,color:"rgba(255,255,255,.8)",whiteSpace:"nowrap",overflow:"hidden",maxWidth:w-6}}>{bl.label}</span>}
                            </div>
                          );
                        })
                      ) : renderBlocks(blocks, h, false)}
                    </GanttRow>
                  );
                }) : (() => {
                  // Mirror the phase-grouped Y-axis exactly
                  const byPhase2 = {};
                  projItems.forEach(([cod,info])=>{
                    const fn=info.faseNum||4;
                    if(!byPhase2[fn]) byPhase2[fn]=[];
                    byPhase2[fn].push([cod,info]);
                  });
                  return Object.entries(byPhase2).sort((a,b)=>parseInt(a[0])-parseInt(b[0])).flatMap(([fn,pitems])=>[
                    // Phase header row (22px) — shows aggregate span bar
                    <GanttRow key={`pht-${fn}`} height={22} bg={`${GANTT_FASE_COLORS[fn]||"#9c9a92"}10`}>
                      {(()=>{
                        const valid=pitems.filter(([cod])=>itemTimeline[cod]);
                        if(!valid.length) return null;
                        const ps=Math.min(...valid.map(([cod])=>itemTimeline[cod].startDay));
                        const pe=Math.max(...valid.map(([cod])=>itemTimeline[cod].endDay));
                        const x=dayToX(ps)+1, w=Math.max(2,dayToX(pe)-dayToX(ps)-2);
                        return <div style={{position:"absolute",left:x,top:5,height:12,width:w,background:GANTT_FASE_COLORS[fn]||"#9c9a92",borderRadius:3,opacity:.3,zIndex:2}}/>;
                      })()}
                    </GanttRow>,
                    // Per-item rows
                    ...pitems.map(([codice,info],ri)=>{
                      const itl=itemTimeline[codice];
                      if(!itl) return <GanttRow key={codice} height={rowH} bg={ri%2===0?"#fff":"#fafaf8"}/>;
                      const fw2=fwDef(info.fw);
                      const barColor=fw2?.colore||GANTT_FASE_COLORS[info.faseNum]||"#9c9a92";
                      const figs=itemAllocations[codice]?.figures||[];
                      // Build a synthetic block so renderBlocks handles both normal + milestone
                      const syntheticBlock = [{
                        startDay: itl.startDay, endDay: itl.endDay,
                        label: info.title, gu: Math.round(itl.endDay-itl.startDay),
                        faseNum: info.faseNum, color: barColor,
                        isMilestone: !!itl.isMilestone,
                      }];
                      return (
                        <GanttRow key={codice} height={rowH} bg={ri%2===0?"#fff":"#fafaf8"}>
                          {renderBlocks(syntheticBlock, rowH, false)}
                          {/* figure chips on bar when wide enough */}
                          {!itl.isMilestone && (() => {
                            const x=dayToX(itl.startDay)+5, w=dayToX(itl.endDay)-dayToX(itl.startDay)-8;
                            return w>55 ? figs.slice(0,2).map(fid=>{
                              const fig=getFig(fid);
                              return <span key={fid} style={{position:"absolute",left:x+2,top:Math.floor(rowH/2)-6,
                                fontSize:7,padding:"0 2px",borderRadius:3,background:"rgba(255,255,255,.25)",color:"#fff",
                                marginLeft:figs.indexOf(fid)*22,whiteSpace:"nowrap",zIndex:3,pointerEvents:"none"}}>{fig.short}</span>;
                            }) : null;
                          })()}
                        </GanttRow>
                      );
                    })
                  ]);
                })()}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div style={{padding:"7px 12px",borderTop:bd,background:"#fafaf8",display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
            {ganttView==="resource" ? Object.entries(GANTT_FASE_COLORS).map(([fn,c])=>(
              <div key={fn} style={{display:"flex",alignItems:"center",gap:3,fontSize:8,color:"#6b6b67"}}>
                <div style={{width:10,height:8,borderRadius:2,background:c}}/>
                {FASI[parseInt(fn)]?.short||("F"+fn)}
              </div>
            )) : FRAMEWORKS.map(fw=>(
              <div key={fw.codice} style={{display:"flex",alignItems:"center",gap:3,fontSize:8,color:"#6b6b67"}}>
                <div style={{width:10,height:8,borderRadius:2,background:fw.colore}}/>
                {fw.nome}
              </div>
            ))}
            <div style={{marginLeft:"auto",display:"flex",gap:8,alignItems:"center"}}>
              <div style={{display:"flex",alignItems:"center",gap:4,fontSize:9,color:"#BA7517",fontWeight:600}}>
                <div style={{width:10,height:10,background:"#BA7517",transform:"rotate(45deg)",borderRadius:1}}/> Milestone
              </div>
              <div style={{display:"flex",alignItems:"center",gap:3,fontSize:8,color:"#6b6b67"}}><div style={{width:3,height:12,background:"#E65100",borderRadius:1}}/> Oggi</div>
              {brief?.data_fine&&<div style={{display:"flex",alignItems:"center",gap:3,fontSize:8,color:"#6b6b67"}}><div style={{width:3,height:12,background:"#791F1F",borderRadius:1,opacity:.6}}/> Fine Brief</div>}
            </div>
          </div>
        </div>
      ) : (
        <div style={{padding:"30px",textAlign:"center",color:"#9c9a92",fontSize:11,border:bd,borderRadius:8}}>
          Nessuna figura assegnata alle voci. Torna alla schermata Voci e assegna le risorse.
        </div>
      )}
    </div>
  );
}



// ─── CONTABILITÀ E REPORT (pagina 6) ─────────────────────────────────────────

const SECTOR_KPIS = {
  "IT / Software":          ["Time to Market","Bug rate (post-go-live)","% copertura test","Velocity sprint medio"],
  "Fashion / Luxury":       ["GS1/DPP compliance %","Tracciabilità filiera %","Time to audit","Prodotti certificati"],
  "Healthcare / Pharma":    ["Tempo medio remediation","Findings critici aperti","% sistemi GDPR-compliant","Audit trail coverage"],
  "Finance / Banking":      ["SOX findings critici","Numero controlli ITGC","Copertura application controls %","Tempo risposta audit"],
  "Industria / Manifattura":["OEE","Downtime non pianificato","Conformità ISO %","Incidenti sicurezza"],
  "PA / Ente pubblico":     ["Conformità NIS2 %","Giorni medi remediation","% sistemi monitorati","Formazione completata %"],
  "Retail / GDO":           ["DORA readiness %","Incidenti ICT","Recupero RTO","% fornitori verificati"],
  "Energy / Utilities":     ["Uptime sistemi critici","MTTD incidenti","Copertura OT/IT","Conformità ENS %"],
  "Altro":                  ["Conformità normativa %","Findings aperti","Tempo remediation medio","Budget consumato %"],
};

function ContabilitaScreen({ brief, allItems, figures, figureRates, pmPct, figurePctMap, clienteFigSet=new Set(), externalCosts=[], onBack, onNext }) {
  const bd  = "0.5px solid #e0ded8";
  const cur = brief.valuta?.split(" ")[0] || "€";
  const fmt = (v) => new Intl.NumberFormat("it-IT").format(Math.round(v||0));

  // ── Derived financial values ────────────────────────────────────────────────
  const totals      = aggregateByFigure(allItems, pmPct, figurePctMap||{}, figures);
  const figIds      = Object.keys(totals).filter(f=>totals[f]>0);
  const totalGU     = allItems.reduce((s,i)=>s+(i.gu_min||0),0);
  const figCostCt   = figIds.reduce((s,id)=>s+totals[id]*(figureRates[id]?.rate||0),0);
  const figMarkup   = figIds.reduce((s,id)=>s+totals[id]*(figureRates[id]?.rate||0)*((figureRates[id]?.markup||30)/100),0);
  const extBaseCt   = externalCosts.reduce((s,x)=>s+(x.costo_unitario||0)*(x.quantita||1),0);
  const extBilledCt = externalCosts.reduce((s,x)=>{
    const base=(x.costo_unitario||0)*(x.quantita||1);
    return s+(x.markup_active?base*(1+(x.markup_pct||0)/100):base);
  },0);
  const totalCost   = figCostCt + extBaseCt;
  const markup      = figMarkup + (extBilledCt - extBaseCt);
  const totalRev    = totalCost + markup;
  const margin      = totalRev>0 ? (markup/totalRev*100) : 0;
  const budgetCli   = brief.budget_cliente || 0;
  const budgetTgt   = brief.budget_target  || 0;
  const tc          = brief.tipo_contratto || "T&M — Time & Materials";
  // Scenario corretto — vedere ResourceScreen per la logica completa
  const avgMkupCt   = figIds.length>0
    ? figIds.reduce((s,id)=>s+(figureRates[id]?.markup||30)*(totals[id]||0),0)/Math.max(figIds.reduce((s,id)=>s+(totals[id]||0),0),1) : 30;
  const cPerGU      = totalGU>0 ? totalCost/Math.max(figIds.reduce((s,id)=>s+(totals[id]||0),0),1) : 0;
  const optGU       = Math.ceil(totalGU*0.75);
  const optCost     = optGU*cPerGU;                             // costo ottimistico (GU risparmiati)
  const pesGU       = cPerGU>0 ? Math.ceil(totalRev/cPerGU) : Math.ceil(totalGU*(1+avgMkupCt/100));
  const pesCost     = totalRev;                                  // pessimistico: margine=0

  // ── Contract-specific values ────────────────────────────────────────────────
  const isCapped   = tc.includes("Capped");
  const isFP       = tc==="Fixed Price";
  const isRet      = tc.includes("Retainer");
  const isAgile    = tc.includes("Agile");
  const cap        = brief.cap_importo || 0;
  const capPct     = cap>0 ? totalRev/cap*100 : 0;
  const retTotal   = (brief.ret_fee_mensile||0)*(brief.ret_mesi||12);
  const agileTotal = (brief.agile_budget_sprint||0)*(brief.agile_n_sprint||0);

  // ── Incongruences ───────────────────────────────────────────────────────────
  const warnings = [];
  if(totalRev===0) warnings.push({t:"warn",msg:"Nessun costo calcolato — assegna tariffe alle figure in Risorse"});
  if(budgetCli>0 && totalRev>budgetCli) warnings.push({t:"err",msg:`Ricavo stimato (${cur} ${fmt(totalRev)}) supera il budget cliente (${cur} ${fmt(budgetCli)}) — Δ ${cur} ${fmt(totalRev-budgetCli)}`});
  if(budgetTgt>0 && totalRev<budgetTgt) warnings.push({t:"warn",msg:`Ricavo stimato (${cur} ${fmt(totalRev)}) sotto il target DC (${cur} ${fmt(budgetTgt)})`});
  if(isCapped && cap>0 && capPct>=(brief.cap_warning_pct||80)) warnings.push({t:"err",msg:`Stima (${cur} ${fmt(totalRev)}) supera la soglia cap del ${brief.cap_warning_pct||80}% — rischio sforamento tetto`});
  if(isFP && (brief.fp_acconto_pct||0)+(brief.fp_sal_pct||0)+(brief.fp_saldo_pct||0)!==100) warnings.push({t:"err",msg:"Piano pagamenti Fixed Price non somma a 100% — verifica acconto/SAL/saldo"});
  if(margin<15&&totalRev>0) warnings.push({t:"warn",msg:`Margine basso (${margin.toFixed(1)}%) — considera la revisione dei markup`});
  // Scenario pessimistico = cost=revenue = margine 0 (non si perde, si lavora gratis)
  if(totalRev>0&&budgetCli>0&&totalRev>budgetCli) warnings.push({t:"err",msg:`Stima base (${cur} ${fmt(totalRev)}) supera il budget cliente (${cur} ${fmt(budgetCli)}) — verifica scope`});
  if(totalGU>0 && figIds.length===0) warnings.push({t:"warn",msg:"Nessuna figura con tariffa — i costi non sono calcolabili"});
  const milestoneItems = allItems.filter(i=>i.is_milestone);
  if(milestoneItems.length===0) warnings.push({t:"info",msg:"Nessuna milestone definita — considera di marcarne almeno una per il reporting cliente"});

  // ── Sector KPIs ─────────────────────────────────────────────────────────────
  const sectorKpis = SECTOR_KPIS[brief.cliente_settore] || SECTOR_KPIS["Altro"];

  // ── Bar chart helper ─────────────────────────────────────────────────────────
  const BarMini = ({label,val,max,color,fmt:f}) => {
    const pct = max>0 ? Math.min(100,val/max*100) : 0;
    return (
      <div style={{marginBottom:5}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:2,fontSize:10}}>
          <span style={{color:"#6b6b67"}}>{label}</span>
          <span style={{fontWeight:700,color,fontFamily:"monospace"}}>{f?f(val):val}</span>
        </div>
        <div style={{height:6,borderRadius:3,background:"#f0f0ee",overflow:"hidden"}}>
          <div style={{width:pct+"%",height:"100%",background:color,borderRadius:3,transition:"width .3s"}}/>
        </div>
      </div>
    );
  };

  // ── KPI box helper ────────────────────────────────────────────────────────────
  const KBox = ({label,val,sub,c="#1a1a18",warn,big,fill}) => (
    <div style={{padding:"10px 12px",background:fill||"#fff",border:`0.5px solid ${warn?"#E24B4A":"#e0ded8"}`,borderRadius:8}}>
      <div style={{fontSize:9,color:"#9c9a92",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>{label}</div>
      <div style={{fontSize:big?20:14,fontWeight:700,color:warn?"#791F1F":c,lineHeight:1.1,fontFamily:"monospace"}}>{val}</div>
      {sub&&<div style={{fontSize:9,color:"#9c9a92",marginTop:2}}>{sub}</div>}
    </div>
  );

  return (
    <div>
      {/* Header */}
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:14}}>
        <div>
          <div style={{fontSize:15,fontWeight:500,color:"#1a1a18"}}>Contabilità e Report</div>
          <div style={{fontSize:11,color:"#6b6b67",marginTop:2}}>{tc} · {brief.cliente_nome||"Cliente"} · {brief.progetto_nome||"Progetto"}</div>
        </div>
        <button onClick={onBack} style={{padding:"6px 12px",fontSize:12,border:bd,borderRadius:8,cursor:"pointer",background:"#fff",color:"#6b6b67"}}>← Gantt</button>
          {onNext&&<button onClick={onNext} style={{padding:"6px 14px",fontSize:12,background:"#185FA5",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontWeight:600}}>Documento →</button>}
      </div>

      {/* Warnings / Incongruenze */}
      {warnings.length>0&&(
        <div style={{marginBottom:14}}>
          {warnings.map((w,i)=>(
            <div key={i} style={{display:"flex",alignItems:"flex-start",gap:8,padding:"6px 10px",marginBottom:4,borderRadius:7,
              background:w.t==="err"?"#FCEBEB":w.t==="warn"?"#FFFBF0":"#f0f7ff",
              border:`0.5px solid ${w.t==="err"?"#E24B4A50":w.t==="warn"?"#BA751750":"#185FA530"}`}}>
              <span style={{flexShrink:0,fontSize:11}}>{w.t==="err"?"❌":w.t==="warn"?"⚠️":"ℹ️"}</span>
              <span style={{fontSize:11,color:w.t==="err"?"#791F1F":w.t==="warn"?"#633806":"#185FA5"}}>{w.msg}</span>
            </div>
          ))}
        </div>
      )}

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:16}}>
        {/* LEFT column */}
        <div>
          {/* KPI economici */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:7,marginBottom:14}}>
            {[
              ["GU totali", totalGU+"", null, "#1a1a18"],
              totalRev>0 ? ["Ricavo stimato", `${cur} ${fmt(totalRev)}`, `Margine ${margin.toFixed(1)}%`, "#185FA5"] : null,
              totalCost>0 ? ["Costo interno", `${cur} ${fmt(totalCost)}`, "senza markup", null] : null,
              totalCost>0 ? ["Markup", `${cur} ${fmt(markup)}`, `${margin.toFixed(1)}% del ricavo`, "#27500A"] : null,
              budgetCli>0 ? ["Budget cliente", `${cur} ${fmt(budgetCli)}`, null, totalRev>budgetCli?"#791F1F":null] : null,
              budgetTgt>0 ? ["Target DC", `${cur} ${fmt(budgetTgt)}`, null, "#533AB7"] : null,
            ].filter(Boolean).map(([label,val,sub,c])=>(
              <div key={label} style={{padding:"10px 12px",background:"#fff",border:`0.5px solid ${c==="#791F1F"?"#E24B4A":"#e0ded8"}`,borderRadius:8}}>
                <div style={{fontSize:9,color:"#9c9a92",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>{label}</div>
                <div style={{fontSize:14,fontWeight:700,color:c||"#1a1a18",lineHeight:1.1,fontFamily:"monospace"}}>{val}</div>
                {sub&&<div style={{fontSize:9,color:"#9c9a92",marginTop:2}}>{sub}</div>}
              </div>
            ))}
          </div>

          {/* Range scenario economico */}
          {totalRev>0&&(
            <div style={{padding:"12px",background:"#fff",border:bd,borderRadius:8,marginBottom:14}}>
              <div style={{fontSize:10,fontWeight:700,color:"#1a1a18",marginBottom:10,textTransform:"uppercase",letterSpacing:".04em"}}>Range scenario economico</div>
              <BarMini label={`Ottimistico — costo con −25% GU (${optGU} GU)`} val={optCost} max={Math.max(totalRev,budgetCli||0,pesCost)} color="#27500A" fmt={v=>`${cur} ${fmt(v)}`}/>
              <BarMini label="Base — ricavo stimato (markup pieno)" val={totalRev} max={Math.max(totalRev,budgetCli||0,pesCost)} color="#185FA5" fmt={v=>`${cur} ${fmt(v)}`}/>
              <BarMini label={`Pessimistico — fino a ${pesGU} GU (margine→0)`} val={pesCost} max={Math.max(totalRev,budgetCli||0,pesCost)} color="#BA7517" fmt={v=>`${cur} ${fmt(v)}`}/>
              {budgetCli>0&&<BarMini label="Budget cliente" val={budgetCli} max={Math.max(totalRev,budgetCli,pesCost)} color="#791F1F" fmt={v=>`${cur} ${fmt(v)}`}/>}
            </div>
          )}

          {/* Contract-specific section */}
          <div style={{padding:"12px",background:"#fff",border:bd,borderRadius:8,marginBottom:14}}>
            <div style={{fontSize:10,fontWeight:700,color:"#1a1a18",marginBottom:10,textTransform:"uppercase",letterSpacing:".04em"}}>Dettaglio contratto — {tc}</div>
            {(()=>{
              if(isCapped) {
                const capUsed = cap>0?Math.min(capPct,100):0;
                const capColor = capPct>=(brief.cap_warning_pct||80)?"#791F1F":"#27500A";
                return (
                  <div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8}}>
                      <KBox label="Cap contrattuale" val={`${cur} ${fmt(cap)}`} c="#BA7517"/>
                      <KBox label="Stima vs Cap" val={`${capPct.toFixed(1)}%`} warn={capPct>=(brief.cap_warning_pct||80)} c={capColor}/>
                    </div>
                    <div style={{fontSize:9,color:"#6b6b67",marginBottom:4}}>Consumo cap stimato:</div>
                    <div style={{height:12,borderRadius:6,background:"#f0f0ee",overflow:"hidden",position:"relative"}}>
                      <div style={{width:Math.min(capPct,100)+"%",height:"100%",background:capColor,borderRadius:6,transition:"width .3s"}}/>
                      {cap>0&&<div style={{position:"absolute",right:4,top:0,bottom:0,display:"flex",alignItems:"center"}}>
                        <span style={{fontSize:8,color:"#fff",fontWeight:700}}>{capPct.toFixed(0)}%</span>
                      </div>}
                    </div>
                    {cap>0&&totalRev<cap&&<div style={{marginTop:5,fontSize:10,color:"#27500A"}}>Margine disponibile: {cur} {fmt(cap-totalRev)}</div>}
                  </div>
                );
              }
              if(isFP) {
                const acc = (brief.fp_prezzo||0)*(brief.fp_acconto_pct||0)/100;
                const sal = (brief.fp_prezzo||0)*(brief.fp_sal_pct||0)/100;
                const sld = (brief.fp_prezzo||0)*(brief.fp_saldo_pct||0)/100;
                return (
                  <div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:7,marginBottom:8}}>
                      <KBox label="Prezzo FP" val={`${cur} ${fmt(brief.fp_prezzo||0)}`} c="#185FA5"/>
                      <KBox label={`Acconto (${brief.fp_acconto_pct||0}%)`} val={`${cur} ${fmt(acc)}`} c="#27500A"/>
                      <KBox label="Penale ritardo" val={`${brief.fp_penale_pct||0}%`} warn={(brief.fp_penale_pct||0)>15}/>
                    </div>
                    <div style={{fontSize:9,color:"#6b6b67",marginBottom:6}}>Piano pagamenti:</div>
                    {[["Acconto",acc,brief.data_inizio||"—"],["SAL intermedio",sal,"Al 50% avanzamento"],["Saldo finale",sld,brief.data_fine||"—"]].map(([lbl,v,dt])=>(
                      <div key={lbl} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 8px",marginBottom:3,background:"#f7f6f3",borderRadius:5}}>
                        <span style={{fontSize:10,color:"#6b6b67"}}>{lbl}</span>
                        <span style={{fontSize:10,color:"#9c9a92"}}>{dt}</span>
                        <span style={{fontSize:11,fontWeight:700,color:"#185FA5",fontFamily:"monospace"}}>{cur} {fmt(v)}</span>
                      </div>
                    ))}
                    {(brief.fp_acconto_pct||0)+(brief.fp_sal_pct||0)+(brief.fp_saldo_pct||0)!==100&&(
                      <div style={{marginTop:5,fontSize:10,color:"#791F1F"}}>⚠ Piano non somma a 100%</div>
                    )}
                  </div>
                );
              }
              if(isRet) {
                const totRet = (brief.ret_fee_mensile||0)*(brief.ret_mesi||12);
                return (
                  <div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:7,marginBottom:8}}>
                      <KBox label="Fee/mese" val={`${cur} ${fmt(brief.ret_fee_mensile||0)}`} c="#27500A"/>
                      <KBox label="Ore incluse" val={(brief.ret_ore_incluse||0)+" h"} c="#185FA5"/>
                      <KBox label="Overage €/h" val={`${cur} ${fmt(brief.ret_tariffa_overage||0)}`}/>
                      <KBox label="Durata" val={(brief.ret_mesi||12)+" mesi"}/>
                    </div>
                    <div style={{padding:"7px 10px",background:"#f7f6f3",borderRadius:6,fontSize:10}}>
                      Valore totale contratto: <strong>{cur} {fmt(totRet)}</strong> &nbsp;·&nbsp;
                      Ore incluse totali: <strong>{(brief.ret_ore_incluse||0)*(brief.ret_mesi||12)} h</strong>
                    </div>
                    {totRet>0&&totalRev>0&&<div style={{marginTop:5,fontSize:10,color:"#9c9a92"}}>
                      Copertura stimata: {(totalRev/totRet*100).toFixed(0)}% del valore retainer
                    </div>}
                  </div>
                );
              }
              if(isAgile) {
                return (
                  <div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7,marginBottom:8}}>
                      <KBox label="Budget/sprint" val={`${cur} ${fmt(brief.agile_budget_sprint||0)}`} c="#533AB7"/>
                      <KBox label="N. sprint" val={brief.agile_n_sprint||0} c="#533AB7"/>
                      <KBox label="Budget totale" val={`${cur} ${fmt(agileTotal)}`} c="#185FA5" big/>
                    </div>
                    {totalRev>0&&<>
                      <BarMini label="Budget sprint totale" val={agileTotal} max={Math.max(agileTotal,totalRev)} color="#533AB7" fmt={v=>`${cur} ${fmt(v)}`}/>
                      <BarMini label="Stima effort DC" val={totalRev} max={Math.max(agileTotal,totalRev)} color="#185FA5" fmt={v=>`${cur} ${fmt(v)}`}/>
                      {agileTotal>0&&totalRev>agileTotal&&<div style={{fontSize:10,color:"#791F1F",marginTop:4}}>⚠ Effort stimato ({cur} {fmt(totalRev)}) supera il budget sprint totale ({cur} {fmt(agileTotal)})</div>}
                    </>}
                  </div>
                );
              }
              // T&M default
              return (
                <div style={{fontSize:10,color:"#6b6b67",lineHeight:1.6}}>
                  T&M puro — fatturazione a consuntivo.{totalRev>0&&<> Stima effort: <strong>{cur} {fmt(totalRev)}</strong>.</>} I GU sono indicativi; il cliente è esposto a variazioni di scope.
                  {budgetCli>0&&<><br/>Budget cliente dichiarato: <strong>{cur} {fmt(budgetCli)}</strong>{totalRev<=budgetCli?<span style={{color:"#27500A"}}> — stima entro budget ✓</span>:<span style={{color:"#791F1F"}}> — stima fuori budget ⚠</span>}</>}
                </div>
              );
            })()}
          </div>
        </div>

        {/* RIGHT column */}
        <div>
          {/* Milestone e date chiave */}
          <div style={{fontSize:11,fontWeight:600,color:"#1a1a18",marginBottom:8}}>Milestone ({milestoneItems.length})</div>
          <div style={{padding:"12px",background:"#fff",border:bd,borderRadius:8,marginBottom:14}}>
            {milestoneItems.length>0 ? milestoneItems.map(item=>{
              const fw = fwDef(item.fw);
              return (
                <div key={item.codice||item.id} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 0",borderBottom:bd}}>
                  <span style={{fontSize:11,color:"#BA7517",flexShrink:0}}>★</span>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:10,fontWeight:600,color:"#1a1a18",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{item.titolo}</div>
                    <div style={{fontSize:9,color:"#9c9a92"}}>{fw?.nome||item.fw} · F{item.fase_num}</div>
                  </div>
                  <span style={{fontSize:10,fontFamily:"monospace",color:"#6b6b67",flexShrink:0}}>{item.gu_min} GU</span>
                </div>
              );
            }) : <div style={{fontSize:10,color:"#9c9a92",fontStyle:"italic"}}>Nessuna milestone — marcane alcune nella schermata Voci (★)</div>}
          </div>

          {/* Sector KPIs */}
          <div style={{fontSize:11,fontWeight:600,color:"#1a1a18",marginBottom:4}}>KPI settore — {brief.cliente_settore}</div>
          <div style={{fontSize:10,color:"#9c9a92",marginBottom:8}}>Indicatori tipicamente rilevanti per il cliente in fase di reporting</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:14}}>
            {sectorKpis.map((kpi,i)=>(
              <div key={i} style={{padding:"8px 10px",background:"#fff",border:bd,borderRadius:7}}>
                <div style={{fontSize:9,color:"#9c9a92",marginBottom:3,textTransform:"uppercase",letterSpacing:".04em"}}>{kpi}</div>
                <div style={{fontSize:11,color:"#9c9a92",fontStyle:"italic"}}>da misurare</div>
              </div>
            ))}
          </div>

          {/* Termini e note contrattuali */}
          <div style={{padding:"10px 12px",background:"#f7f6f3",border:bd,borderRadius:8}}>
            <div style={{fontSize:10,fontWeight:600,color:"#1a1a18",marginBottom:6}}>Termini contrattuali</div>
            {[
              ["Pagamento","Netto "+((brief.termini_pagamento||30))+" giorni"],
              ["Valuta",brief.valuta||"€ EUR"],
              ["PM assegnato",brief.pm_assegnato||"—"],
              ["Codice progetto",brief.progetto_codice||"—"],
            ].map(([k,v])=>(
              <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"3px 0",borderBottom:"0.5px solid #eee",fontSize:10}}>
                <span style={{color:"#6b6b67"}}>{k}</span>
                <span style={{fontWeight:500,color:"#1a1a18"}}>{v}</span>
              </div>
            ))}
            {brief.note_contrattuali&&(
              <div style={{marginTop:6,fontSize:10,color:"#6b6b67",lineHeight:1.5}}>{brief.note_contrattuali}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


// ─── DOCUMENT GENERATOR (pagina 7) ───────────────────────────────────────────
// Assembla il documento di progetto dai dati live degli altri screen.
// Sezioni uniche: Executive summary, RACI, Rischi aggregati, Condizioni commerciali.
// Sezioni derivate (scope, compliance, costi, piano) mostrano un preview compatto
// con link alla schermata sorgente — non duplicano il contenuto.

const RACI_COLOR = { R:{bg:"#FCEBEB",t:"#791F1F"}, A:{bg:"#FAEEDA",t:"#633806"}, C:{bg:"#E6F1FB",t:"#185FA5"}, I:{bg:"#F1EFE8",t:"#5F5E5A"} };
const RISK_C     = { H:{bg:"#FCEBEB",t:"#791F1F"}, M:{bg:"#FAEEDA",t:"#633806"}, L:{bg:"#EAF3DE",t:"#27500A"} };

function AiBadge() {
  return <span style={{display:"inline-block",fontSize:8,padding:"1px 5px",borderRadius:8,background:"#EEEDFE",color:"#3C3489",fontWeight:600,marginLeft:5,verticalAlign:"middle"}}>Nexus AI</span>;
}

function RaciPill({v}) {
  if(!v) return <td style={{padding:"5px 8px",textAlign:"center",borderBottom:"0.5px solid #e0ded8"}}>—</td>;
  const s=RACI_COLOR[v]||{bg:"#f0f0ee",t:"#6b6b67"};
  return <td style={{padding:"5px 8px",textAlign:"center",borderBottom:"0.5px solid #e0ded8"}}>
    <span style={{display:"inline-flex",width:24,height:24,borderRadius:"50%",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,background:s.bg,color:s.t}}>{v}</span>
  </td>;
}


// ─── DOCUMENT GENERATOR (pagina 7) ───────────────────────────────────────────
// Libreria documenti di progetto con versioning.
// Ogni tipo di documento aggrega sezioni diverse dai dati live della compliance UI.

const DOC_CATALOG = [
  { type:"offerta",        label:"Offerta Commerciale",         icon:"💼", color:"#185FA5",
    desc:"Proposta economica al cliente con scope, costi e condizioni contrattuali.",
    sections:["executive","costi","commerciale"],
    metodologia:"PRINCE2 · Project Brief" },
  { type:"sow",            label:"Statement of Work",           icon:"📋", color:"#27500A",
    desc:"Perimetro contrattuale, deliverable, responsabilità e piano di lavoro.",
    sections:["scope","raci","piano","commerciale"],
    metodologia:"PMBOK · Scope Statement" },
  { type:"gap_analysis",   label:"Gap Analysis Report",         icon:"🔲", color:"#533AB7",
    desc:"Assessment AS-IS vs TO-BE per framework normativi selezionati.",
    sections:["compliance","rischi","executive"],
    metodologia:"ISO 27001 · Gap Assessment" },
  { type:"risk_assessment",label:"Risk Assessment",             icon:"⚠️", color:"#791F1F",
    desc:"Analisi rischi strutturata con probabilità, impatto e piano di trattamento.",
    sections:["rischi","executive","commerciale"],
    metodologia:"ISO 31000 · Risk Assessment" },
  { type:"piano_remediation",label:"Piano di Remediation",      icon:"🔧", color:"#BA7517",
    desc:"Piano operativo delle attività di remediation con Gantt e RACI.",
    sections:["scope","piano","raci","rischi"],
    metodologia:"NIS2 · Remediation Plan" },
  { type:"status_report",  label:"Status Report",               icon:"📊", color:"#185FA5",
    desc:"Avanzamento progetto: EVM, milestone, rischi aperti, prossimi step.",
    sections:["executive","piano","rischi"],
    metodologia:"PMBOK · Performance Report" },
  { type:"board_report",   label:"Relazione Esecutiva (Board)", icon:"🏛️", color:"#1a1a18",
    desc:"Sintesi per il consiglio di amministrazione — KPI, rischi critici, decisioni richieste.",
    sections:["executive","rischi","commerciale"],
    metodologia:"PRINCE2 · Highlight Report" },
  { type:"soa",            label:"Statement of Applicability",  icon:"✅", color:"#27500A",
    desc:"Dichiarazione di applicabilità dei controlli (ISO 27001 Annex A, NIS2, DORA).",
    sections:["compliance","scope","rischi"],
    metodologia:"ISO 27001:2022 · Annex A" },
  { type:"acceptance",     label:"Acceptance Report",           icon:"✍️", color:"#6b6b67",
    desc:"Verbale di accettazione finale: milestone completate, outstanding items, sign-off.",
    sections:["piano","raci","commerciale"],
    metodologia:"PRINCE2 · End Project Report" },
];

const DOC_SECTION_META = {
  executive:   { label:"Executive Summary",    icon:"✨", tag:"AI" },
  scope:       { label:"Scope e requisiti",    icon:"☑️", tag:"live" },
  compliance:  { label:"Compliance",           icon:"🔲", tag:"live" },
  costi:       { label:"Costi",                icon:"💶", tag:"live" },
  piano:       { label:"Piano e milestone",    icon:"📅", tag:"live" },
  raci:        { label:"RACI",                 icon:"👥", tag:"edit" },
  rischi:      { label:"Rischi",               icon:"⚠️", tag:"auto" },
  commerciale: { label:"Condizioni",           icon:"📋", tag:"edit" },
};

const DOC_STATUS = {
  draft:     { label:"Bozza",     color:"#BA7517", bg:"#FAEEDA" },
  review:    { label:"In review", color:"#185FA5", bg:"#E6F1FB" },
  approved:  { label:"Approvato", color:"#27500A", bg:"#EAF3DE" },
  issued:    { label:"Emesso",    color:"#1a1a18", bg:"#f0f0ee" },
};

let _docInstId = 1;
const makeDocInst = (type, version="1.0") => ({
  id: String(_docInstId++),
  type, version,
  created: new Date().toISOString().slice(0,10),
  status: "draft",
  notes: "",
  sectionOverrides: {},  // {sectionId: textContent}
});

function DocumentGeneratorScreen({ brief, allItems, figures, figureRates, pmPct, figurePctMap, clienteFigSet, externalCosts=[], onBack, onGoTo }) {
  const bd  = "0.5px solid #e0ded8";
  const cur = brief.valuta?.split(" ")[0] || "€";
  const fmt = v => new Intl.NumberFormat("it-IT").format(Math.round(v||0));

  // ── Document library state ──────────────────────────────────────────────────
  const [docs, setDocs]               = useState([]);
  const [selectedDocId, setSelectedDocId] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [showCatalog, setShowCatalog] = useState(true);
  const [raciState, setRaciState]     = useState({});
  const [commerciale, setCommerciale] = useState({
    validita:"60 giorni dalla data", foro:"Tribunale di Milano", speciali:"", note:"",
  });

  const selectedDoc  = docs.find(d=>d.id===selectedDocId) || null;
  const catalogEntry = selectedDoc ? DOC_CATALOG.find(c=>c.type===selectedDoc.type) : null;

  const addDoc = (type) => {
    const inst = makeDocInst(type);
    setDocs(d=>[...d, inst]);
    setSelectedDocId(inst.id);
    setShowCatalog(false);
    const cat = DOC_CATALOG.find(c=>c.type===type);
    setActiveSection(cat?.sections?.[0]||"executive");
  };

  const addVersion = () => {
    if(!selectedDoc) return;
    const parts = selectedDoc.version.split(".");
    const newVer = parts[0]+"."+((parseInt(parts[1]||0))+1);
    const inst = {...makeDocInst(selectedDoc.type, newVer),
      sectionOverrides:{...selectedDoc.sectionOverrides},
      raciState:{...raciState},
    };
    setDocs(d=>[...d, inst]);
    setSelectedDocId(inst.id);
  };

  const setDocField = (id, field, val) =>
    setDocs(ds=>ds.map(d=>d.id===id?{...d,[field]:val}:d));

  const setOverride = (secId, text) =>
    setDocs(ds=>ds.map(d=>d.id===selectedDocId?{...d,sectionOverrides:{...d.sectionOverrides,[secId]:text}}:d));

  const setRaci = (figId, itemId, val) =>
    setRaciState(s=>({...s,[figId]:{...(s[figId]||{}),[itemId]:val}}));

  // ── Live data ─────────────────────────────────────────────────────────────
  const billTotals = aggregateByFigure(allItems, pmPct, figurePctMap||{}, figures, clienteFigSet||new Set());
  const billFigIds = Object.keys(billTotals).filter(f=>billTotals[f]>0);
  const totalGU    = allItems.reduce((s,i)=>s+(i.gu_min||0), 0);
  const getRate    = id => figureRates[id]?.rate  || 0;
  const getMkup    = id => figureRates[id]?.markup || 30;
  const figCostDG  = billFigIds.reduce((s,id)=>s+(billTotals[id]||0)*getRate(id), 0);
  const extBillDG  = externalCosts.reduce((s,x)=>{
    const b=(x.costo_unitario||0)*(x.quantita||1);
    return s+(x.markup_active?b*(1+(x.markup_pct||0)/100):b);
  },0);
  const totalCost  = figCostDG + externalCosts.reduce((s,x)=>s+(x.costo_unitario||0)*(x.quantita||1),0);
  const totalRev   = billFigIds.reduce((s,id)=>s+(billTotals[id]||0)*getRate(id)*(1+getMkup(id)/100), 0) + extBillDG;
  const getFig     = id => figures.find(f=>f.id===id)||{id,label:id,short:(id||"?").slice(0,3),colore:"#9c9a92"};

  const allRisks   = allItems.flatMap(item=>{
    const rischi=[item.rischio,...(item._sub_rows||[]).map(s=>s.rischi)].filter(Boolean);
    return rischi.map(r=>({level:item.gu_min>10?"H":item.gu_min>4?"M":"L",title:item.titolo,detail:r,fw:item.fw}));
  }).filter(r=>r.detail).slice(0,10);
  const milestones   = allItems.filter(i=>i.is_milestone);
  const fwNames      = [...new Set(allItems.map(i=>i.fw).filter(Boolean))];
  const fwCoverage   = fwNames.map(fw=>{
    const its=allItems.filter(i=>i.fw===fw);
    return {fw,nome:fwDef(fw)?.nome||fw,total:its.length,covered:its.filter(i=>i.gu_min>0).length};
  });
  const raciPhases   = [...milestones,...allItems.filter(i=>!i.is_milestone&&i.gu_min>=5).sort((a,b)=>b.gu_min-a.gu_min)].slice(0,8);
  const raciNames    = billFigIds.slice(0,5).map(getFig);
  const RACI_OPTS    = ["","R","A","C","I"];

  // ── Section renderer ────────────────────────────────────────────────────────
  const LinkBox = ({label,screen,icon}) => (
    <div onClick={()=>onGoTo&&onGoTo(screen)}
      style={{padding:"16px",textAlign:"center",border:bd,borderRadius:8,cursor:"pointer",background:"#fafaf8",marginBottom:10}}
      onMouseEnter={e=>e.currentTarget.style.background="#f0f0ee"}
      onMouseLeave={e=>e.currentTarget.style.background="#fafaf8"}>
      <div style={{fontSize:16,marginBottom:4}}>{icon}</div>
      <div style={{fontSize:11,color:"#6b6b67"}}>Dati live da <strong>{label}</strong></div>
      <div style={{fontSize:11,fontWeight:600,color:"#185FA5",marginTop:2}}>→ Vai a {label}</div>
    </div>
  );

  const renderSection = (secId) => {
    const override = selectedDoc?.sectionOverrides?.[secId];
    switch(secId) {
      case "executive": return (
        <div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))",gap:8,marginBottom:12}}>
            {[{val:totalGU+" GU",lbl:"Effort totale"},{val:totalRev>0?`${cur} ${fmt(totalRev)}`:"—",lbl:"Investimento"},{val:milestones.length,lbl:"Milestone"},{val:allRisks.filter(r=>r.level==="H").length,lbl:"Rischi critici"}].map(k=>(
              <div key={k.lbl} style={{background:"#f7f6f3",borderRadius:7,padding:"9px 11px",textAlign:"center",border:bd}}>
                <div style={{fontSize:18,fontWeight:600,lineHeight:1}}>{k.val}</div>
                <div style={{fontSize:9,color:"#6b6b67",marginTop:2}}>{k.lbl}</div>
              </div>
            ))}
          </div>
          <textarea value={override??""} onChange={e=>setOverride(secId,e.target.value)} rows={7}
            placeholder={`Il progetto ${brief.progetto_nome||"[Nome]"} (${brief.cliente_nome||"[Cliente]"}) ha l'obiettivo di portare l'organizzazione in conformità con ${fwNames.join(", ")}.

Investimento stimato: ${cur} ${fmt(totalRev)} · Durata: ${brief.data_inizio&&brief.data_fine?Math.round((new Date(brief.data_fine)-new Date(brief.data_inizio))/2592000000):"?"} mesi.

[Completare con il contesto specifico del cliente]`}
            style={{width:"100%",padding:"8px",fontSize:12,border:bd,borderRadius:6,outline:"none",resize:"vertical",fontFamily:"inherit",lineHeight:1.7,boxSizing:"border-box"}}/>
          {allRisks.filter(r=>r.level==="H").length>0&&(
            <div style={{marginTop:8,padding:"8px 12px",background:"#FCEBEB",border:"0.5px solid #E24B4A",borderRadius:7,fontSize:11,color:"#791F1F"}}>
              <strong>{allRisks.filter(r=>r.level==="H").length} rischi critici</strong> — richiedono decisione prima della firma:
              {allRisks.filter(r=>r.level==="H").slice(0,2).map((r,i)=><div key={i} style={{marginTop:2}}>· {r.title}: {r.detail.slice(0,70)}{r.detail.length>70?"…":""}</div>)}
            </div>
          )}
        </div>
      );
      case "scope": return (
        <div>
          <LinkBox label="Voci" screen="items" icon="☑️"/>
          <div style={{padding:"10px 12px",background:"#fff",border:bd,borderRadius:8}}>
            <div style={{fontSize:10,fontWeight:700,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:8}}>Voci principali ({allItems.filter(i=>i.gu_min>0).length})</div>
            {allItems.filter(i=>i.gu_min>0).sort((a,b)=>b.gu_min-a.gu_min).slice(0,8).map(item=>{
              const fw=fwDef(item.fw);
              return <div key={item.codice||item.id} style={{display:"flex",alignItems:"center",gap:8,padding:"4px 0",borderBottom:bd,fontSize:11}}>
                <div style={{width:5,height:5,borderRadius:"50%",background:fw?.colore||"#9c9a92",flexShrink:0}}/>
                <span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.titolo}</span>
                <span style={{fontSize:9,color:"#9c9a92"}}>{fw?.nome}</span>
                <span style={{fontSize:10,fontWeight:600,fontFamily:"monospace",color:fw?.colore||"#9c9a92"}}>{item.gu_min} GU</span>
              </div>;
            })}
          </div>
          {override!==undefined&&<textarea value={override} onChange={e=>setOverride(secId,e.target.value)} rows={4} placeholder="Note aggiuntive sullo scope..." style={{width:"100%",marginTop:8,padding:"7px",fontSize:11,border:bd,borderRadius:6,outline:"none",resize:"vertical",fontFamily:"inherit",boxSizing:"border-box"}}/>}
          {override===undefined&&<button onClick={()=>setOverride(secId,"")} style={{marginTop:6,fontSize:10,padding:"3px 10px",border:`1px dashed #185FA5`,borderRadius:5,cursor:"pointer",background:"transparent",color:"#185FA5"}}>+ Aggiungi note</button>}
        </div>
      );
      case "compliance": return (
        <div>
          <LinkBox label="Framework" screen="frameworks" icon="🔲"/>
          <div style={{padding:"10px 12px",background:"#fff",border:bd,borderRadius:8}}>
            {fwCoverage.map(fw=>{
              const pct=fw.total>0?Math.round(fw.covered/fw.total*100):0;
              return <div key={fw.fw} style={{marginBottom:8}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                  <span style={{fontSize:11,fontWeight:500}}>{fw.nome}</span>
                  <span style={{fontSize:10,color:pct===100?"#27500A":pct>50?"#BA7517":"#9c9a92"}}>{fw.covered}/{fw.total}</span>
                </div>
                <div style={{height:5,borderRadius:3,background:"#f0f0ee",overflow:"hidden"}}>
                  <div style={{width:pct+"%",height:"100%",background:pct===100?"#27500A":pct>50?"#BA7517":"#E24B4A",borderRadius:3}}/>
                </div>
              </div>;
            })}
          </div>
        </div>
      );
      case "costi": return (
        <div>
          <LinkBox label="Risorse" screen="risorse" icon="👥"/>
          {totalRev>0&&<div style={{padding:"10px 12px",background:"#fff",border:bd,borderRadius:8}}>
            {billFigIds.map(id=>{const fig=getFig(id);const gu=billTotals[id]||0;const rev=gu*getRate(id)*(1+getMkup(id)/100);
              return <div key={id} style={{display:"flex",alignItems:"center",gap:8,padding:"4px 0",borderBottom:bd,fontSize:11}}>
                <span style={{width:22,padding:"1px 3px",borderRadius:4,background:fig.colore,color:"#fff",fontSize:8,fontWeight:700,textAlign:"center"}}>{fig.short}</span>
                <span style={{flex:1}}>{fig.label}</span>
                <span style={{fontFamily:"monospace",color:"#6b6b67"}}>{gu} GU</span>
                {rev>0&&<span style={{fontFamily:"monospace",fontWeight:600,color:"#27500A"}}>{cur} {fmt(rev)}</span>}
              </div>;
            })}
            <div style={{display:"flex",justifyContent:"space-between",padding:"7px 0",fontSize:13,fontWeight:700}}>
              <span>Totale</span><span style={{color:"#185FA5",fontFamily:"monospace"}}>{cur} {fmt(totalRev)}</span>
            </div>
          </div>}
        </div>
      );
      case "piano": return (
        <div>
          <LinkBox label="Gantt" screen="gantt" icon="📅"/>
          {milestones.length>0&&<div style={{padding:"10px 12px",background:"#fff",border:bd,borderRadius:8}}>
            <div style={{fontSize:10,fontWeight:700,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:8}}>Milestone ({milestones.length})</div>
            {milestones.map(item=>{const fw=fwDef(item.fw);return(
              <div key={item.codice||item.id} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 0",borderBottom:bd,fontSize:11}}>
                <span style={{color:"#BA7517",fontWeight:700}}>★</span>
                <span style={{flex:1}}>{item.titolo}</span>
                <span style={{fontSize:9,color:"#9c9a92"}}>{fw?.nome} F{item.fase_num}</span>
                <span style={{fontFamily:"monospace",fontSize:10,color:"#6b6b67"}}>{item.gu_min} GU</span>
              </div>
            );})}
          </div>}
        </div>
      );
      case "raci": return (
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
            <thead><tr>
              <th style={{padding:"6px 8px",textAlign:"left",color:"#6b6b67",fontWeight:600,borderBottom:bd,fontSize:10}}>Fase</th>
              {raciNames.map(fig=>(
                <th key={fig.id} style={{padding:"6px 8px",textAlign:"center",color:"#6b6b67",fontWeight:400,borderBottom:bd,fontSize:10,whiteSpace:"nowrap"}}>
                  <div style={{width:20,height:20,borderRadius:"50%",background:fig.colore,color:"#fff",fontSize:7,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 2px"}}>{fig.short}</div>
                  {fig.label.split("/")[0].trim()}
                </th>
              ))}
              <th style={{padding:"6px 8px",textAlign:"center",color:"#6b6b67",fontWeight:400,borderBottom:bd,fontSize:10}}>Cliente</th>
            </tr></thead>
            <tbody>{raciPhases.map(item=>(
              <tr key={item.codice||item.id}>
                <td style={{padding:"4px 8px",borderBottom:bd,fontSize:10,maxWidth:180,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  {item.is_milestone&&<span style={{color:"#BA7517",marginRight:3}}>★</span>}{item.titolo}
                </td>
                {[...raciNames.map(fig=>fig.id),"_cliente"].map(figId=>{
                  const val=raciState[figId]?.[item.codice||item.id]||"";
                  const s=val?RACI_COLOR[val]:{bg:"transparent",t:"#ccc"};
                  return <td key={figId} style={{padding:"3px 5px",borderBottom:bd,textAlign:"center"}}>
                    <select value={val} onChange={e=>setRaci(figId,item.codice||item.id,e.target.value)}
                      style={{width:34,padding:"1px 2px",fontSize:9,border:bd,borderRadius:4,background:s.bg,color:s.t,fontWeight:600,cursor:"pointer",outline:"none"}}>
                      {RACI_OPTS.map(o=><option key={o} value={o}>{o||"—"}</option>)}
                    </select>
                  </td>;
                })}
              </tr>
            ))}</tbody>
          </table>
          <div style={{display:"flex",gap:10,marginTop:6,fontSize:9,color:"#6b6b67"}}>
            {Object.entries({R:"Responsabile",A:"Accountable",C:"Consultato",I:"Informato"}).map(([k,v])=>(
              <span key={k} style={{display:"flex",alignItems:"center",gap:3}}>
                <span style={{width:18,height:18,borderRadius:"50%",fontSize:8,fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",background:RACI_COLOR[k].bg,color:RACI_COLOR[k].t}}>{k}</span>{v}
              </span>
            ))}
          </div>
        </div>
      );
      case "rischi": return (
        <div>
          <div style={{padding:"10px 12px",background:"#fff",border:bd,borderRadius:8}}>
            {allRisks.length>0?allRisks.map((r,i)=>(
              <div key={i} style={{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0",borderBottom:i<allRisks.length-1?bd:"none"}}>
                <div style={{width:22,height:22,borderRadius:5,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,flexShrink:0,background:RISK_C[r.level].bg,color:RISK_C[r.level].t}}>{r.level}</div>
                <div style={{minWidth:0}}>
                  <div style={{fontSize:11,fontWeight:600,marginBottom:1}}>{r.title}</div>
                  <div style={{fontSize:10,color:"#6b6b67",lineHeight:1.5}}>{r.detail}</div>
                </div>
              </div>
            )):<div style={{fontSize:11,color:"#9c9a92",textAlign:"center",padding:"16px 0"}}>Nessun rischio. Compila "Rischi" nelle voci compliance.</div>}
          </div>
        </div>
      );
      case "commerciale": return (
        <div>
          <div style={{padding:"10px 12px",background:"#f7f6f3",border:bd,borderRadius:8,marginBottom:10}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
              <span style={{fontSize:10,fontWeight:700,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em"}}>Dal Brief</span>
              <button onClick={()=>onGoTo&&onGoTo("brief")} style={{fontSize:9,padding:"2px 7px",border:bd,borderRadius:5,cursor:"pointer",background:"#fff",color:"#185FA5"}}>→ Brief</button>
            </div>
            {[["Tipo contratto",brief.tipo_contratto||"—"],["Pagamento",brief.termini_pagamento?`Netto ${brief.termini_pagamento} gg`:"—"],["Valuta",brief.valuta||"—"],["PM",brief.pm_assegnato||"—"],...(brief.fp_penale_pct>0?[["Penale",`${brief.fp_penale_pct}%`]]:[])]
              .map(([k,v])=><div key={k} style={{display:"flex",justifyContent:"space-between",padding:"3px 0",borderBottom:"0.5px solid #eee",fontSize:11}}><span style={{color:"#6b6b67"}}>{k}</span><span style={{fontWeight:500}}>{v}</span></div>)}
          </div>
          <div style={{padding:"10px 12px",background:"#fff",border:bd,borderRadius:8}}>
            {[["Validità offerta","validita","60 giorni dalla data"],["Foro competente","foro","Tribunale di Milano"],["Condizioni speciali","speciali",""]].map(([label,key,ph])=>(
              <div key={key} style={{marginBottom:9}}>
                <div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>{label}</div>
                <input value={commerciale[key]||""} onChange={e=>setCommerciale(c=>({...c,[key]:e.target.value}))} placeholder={ph}
                  style={{width:"100%",padding:"6px 9px",fontSize:11,border:bd,borderRadius:6,outline:"none",boxSizing:"border-box"}}/>
              </div>
            ))}
            <textarea value={commerciale.note||""} onChange={e=>setCommerciale(c=>({...c,note:e.target.value}))} placeholder="Note aggiuntive..." rows={2}
              style={{width:"100%",padding:"6px 9px",fontSize:11,border:bd,borderRadius:6,outline:"none",resize:"vertical",fontFamily:"inherit",boxSizing:"border-box"}}/>
          </div>
        </div>
      );
      default: return <div style={{fontSize:11,color:"#9c9a92",padding:"20px",textAlign:"center"}}>Sezione non disponibile</div>;
    }
  };

  // ── Catalog view ─────────────────────────────────────────────────────────
  if(showCatalog && !selectedDoc) return (
    <div>
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:16}}>
        <div>
          <div style={{fontSize:15,fontWeight:500,color:"#1a1a18"}}>Document Generator</div>
          <div style={{fontSize:11,color:"#6b6b67",marginTop:2}}>Seleziona un template o apri un documento esistente</div>
        </div>
        <button onClick={onBack} style={{padding:"6px 12px",fontSize:12,border:bd,borderRadius:8,cursor:"pointer",background:"#fff",color:"#6b6b67"}}>← Report</button>
      </div>

      {/* Existing docs */}
      {docs.length>0&&(
        <div style={{marginBottom:16}}>
          <div style={{fontSize:11,fontWeight:600,color:"#1a1a18",marginBottom:8}}>Documenti del progetto ({docs.length})</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:8}}>
            {docs.map(doc=>{
              const cat=DOC_CATALOG.find(c=>c.type===doc.type);
              const st=DOC_STATUS[doc.status];
              return(
                <div key={doc.id} onClick={()=>{setSelectedDocId(doc.id);setShowCatalog(false);setActiveSection(cat?.sections?.[0]);}}
                  style={{padding:"10px 12px",border:bd,borderRadius:8,cursor:"pointer",background:"#fff"}}
                  onMouseEnter={e=>e.currentTarget.style.background="#f7f6f3"}
                  onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
                  <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
                    <span style={{fontSize:14}}>{cat?.icon}</span>
                    <span style={{fontSize:10,fontWeight:600,color:cat?.color||"#1a1a18",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{cat?.label}</span>
                    <span style={{fontSize:8,padding:"1px 5px",borderRadius:5,background:st?.bg,color:st?.color,fontWeight:600,flexShrink:0}}>{st?.label}</span>
                  </div>
                  <div style={{fontSize:10,color:"#9c9a92"}}>v{doc.version} · {doc.created}</div>
                  {docs.filter(d=>d.type===doc.type).length>1&&(
                    <div style={{fontSize:9,color:"#185FA5",marginTop:2}}>{docs.filter(d=>d.type===doc.type).length} versioni</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Catalog */}
      <div style={{fontSize:11,fontWeight:600,color:"#1a1a18",marginBottom:8}}>Template disponibili</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:8}}>
        {DOC_CATALOG.map(cat=>(
          <div key={cat.type} onClick={()=>addDoc(cat.type)}
            style={{padding:"12px 14px",border:`0.5px solid ${cat.color}30`,borderRadius:8,cursor:"pointer",background:"#fff",transition:"all .15s"}}
            onMouseEnter={e=>{e.currentTarget.style.background=`${cat.color}08`;e.currentTarget.style.borderColor=`${cat.color}60`;}}
            onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.borderColor=`${cat.color}30`;}}>
            <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:5}}>
              <span style={{fontSize:16}}>{cat.icon}</span>
              <span style={{fontSize:11,fontWeight:600,color:cat.color}}>{cat.label}</span>
            </div>
            <div style={{fontSize:10,color:"#6b6b67",lineHeight:1.5,marginBottom:5}}>{cat.desc}</div>
            <div style={{fontSize:9,color:"#9c9a92",fontStyle:"italic"}}>{cat.metodologia}</div>
            <div style={{display:"flex",gap:4,marginTop:6,flexWrap:"wrap"}}>
              {cat.sections.map(s=>{
                const sm=DOC_SECTION_META[s];
                return <span key={s} style={{fontSize:8,padding:"1px 5px",borderRadius:5,background:"#f0f0ee",color:"#6b6b67"}}>{sm?.icon} {sm?.label}</span>;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── Document editor ───────────────────────────────────────────────────────
  const docVersions = docs.filter(d=>d.type===selectedDoc?.type).sort((a,b)=>a.version.localeCompare(b.version));

  return (
    <div>
      {/* Header */}
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <button onClick={()=>{setShowCatalog(true);setSelectedDocId(null);}} style={{padding:"5px 9px",fontSize:11,border:bd,borderRadius:7,cursor:"pointer",background:"#fff",color:"#6b6b67"}}>← Libreria</button>
          <span style={{fontSize:14}}>{catalogEntry?.icon}</span>
          <div>
            <div style={{fontSize:14,fontWeight:600,color:catalogEntry?.color||"#1a1a18"}}>{catalogEntry?.label}</div>
            <div style={{fontSize:10,color:"#9c9a92",marginTop:1}}>{catalogEntry?.metodologia}</div>
          </div>
        </div>
        <div style={{display:"flex",gap:6,alignItems:"center"}}>
          {/* Version selector */}
          <div style={{display:"flex",gap:3}}>
            {docVersions.map(d=>(
              <button key={d.id} onClick={()=>{setSelectedDocId(d.id);setActiveSection(catalogEntry?.sections?.[0]);}}
                style={{padding:"4px 8px",fontSize:10,border:`0.5px solid ${d.id===selectedDocId?"#1a1a18":"#e0ded8"}`,borderRadius:6,cursor:"pointer",
                  background:d.id===selectedDocId?"#1a1a18":"#fff",color:d.id===selectedDocId?"#fff":"#6b6b67",fontWeight:d.id===selectedDocId?600:400}}>
                v{d.version}
              </button>
            ))}
            <button onClick={addVersion} title="Crea nuova versione" style={{padding:"4px 8px",fontSize:10,border:"1px dashed #9c9a92",borderRadius:6,cursor:"pointer",background:"transparent",color:"#9c9a92"}}>+ versione</button>
          </div>
          {/* Status */}
          {selectedDoc&&(
            <select value={selectedDoc.status} onChange={e=>setDocField(selectedDoc.id,"status",e.target.value)}
              style={{padding:"4px 8px",fontSize:10,border:`0.5px solid ${DOC_STATUS[selectedDoc.status]?.color}`,borderRadius:6,
                background:DOC_STATUS[selectedDoc.status]?.bg,color:DOC_STATUS[selectedDoc.status]?.color,fontWeight:600,cursor:"pointer",outline:"none"}}>
              {Object.entries(DOC_STATUS).map(([v,s])=><option key={v} value={v}>{s.label}</option>)}
            </select>
          )}
          <button style={{padding:"5px 12px",fontSize:11,background:"#1a1a18",color:"#fff",border:"none",borderRadius:7,cursor:"pointer",fontWeight:600}}>Export PDF ↗</button>
        </div>
      </div>

      {/* Two-column: sidebar + content */}
      <div style={{display:"grid",gridTemplateColumns:"clamp(140px,25vw,170px) 1fr",gap:12,minWidth:0}}>
        {/* Sidebar: sections for this doc type */}
        <div>
          {catalogEntry?.sections.map(secId=>{
            const sm=DOC_SECTION_META[secId];
            const act=activeSection===secId;
            const TAG_BG={AI:"#EEEDFE",live:"#E6F1FB",auto:"#EAF3DE",edit:"#FAEEDA"};
            const TAG_C={AI:"#3C3489",live:"#185FA5",auto:"#27500A",edit:"#633806"};
            return(
              <div key={secId} onClick={()=>setActiveSection(secId)}
                style={{display:"flex",alignItems:"center",gap:7,padding:"7px 9px",borderRadius:7,cursor:"pointer",marginBottom:3,
                  background:act?"#1a1a18":"transparent",border:`0.5px solid ${act?"#1a1a18":"#e0ded8"}`}}>
                <span style={{fontSize:11}}>{sm?.icon}</span>
                <span style={{flex:1,fontSize:11,fontWeight:act?600:400,color:act?"#fff":"#1a1a18"}}>{sm?.label}</span>
                <span style={{fontSize:7,padding:"1px 4px",borderRadius:5,fontWeight:600,background:act?"rgba(255,255,255,.15)":TAG_BG[sm?.tag],color:act?"rgba(255,255,255,.8)":TAG_C[sm?.tag]}}>{sm?.tag}</span>
              </div>
            );
          })}
          {/* Doc versions list */}
          {docVersions.length>1&&(
            <div style={{marginTop:12,padding:"8px 9px",background:"#f7f6f3",borderRadius:7,border:bd}}>
              <div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",marginBottom:5}}>Versioni</div>
              {docVersions.map(d=>{
                const st=DOC_STATUS[d.status];
                return(
                  <div key={d.id} onClick={()=>setSelectedDocId(d.id)}
                    style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"3px 0",cursor:"pointer",borderBottom:"0.5px solid #eee",fontSize:10}}>
                    <span style={{fontWeight:d.id===selectedDocId?600:400,color:d.id===selectedDocId?"#1a1a18":"#6b6b67"}}>v{d.version}</span>
                    <span style={{fontSize:8,padding:"1px 4px",borderRadius:4,background:st?.bg,color:st?.color}}>{st?.label}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{minHeight:380}}>
          {activeSection&&renderSection(activeSection)}
        </div>
      </div>
    </div>
  );
}



function ChangeLogView({ log, onAdd, onSet, onDel }) {
  const bd = "0.5px solid #e0ded8";
  const TIPO_C = {scope:"#185FA5",budget:"#BA7517",timeline:"#533AB7",resource:"#27500A",other:"#6b6b67"};
  const STATO_C = {pending:"#BA7517",approved:"#27500A",rejected:"#791F1F"};
  const STATO_L = {pending:"In attesa",approved:"Approvato",rejected:"Respinto"};

  return (
    <div>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
        <div style={{flex:1}}>
          <div style={{fontSize:13,fontWeight:600,color:"#1a1a18"}}>Change Log</div>
          <div style={{fontSize:10,color:"#9c9a92",marginTop:1}}>Registro delle variazioni rispetto alla baseline PRD</div>
        </div>
        <button onClick={onAdd} style={{padding:"5px 12px",fontSize:11,border:`1px dashed #185FA5`,borderRadius:7,cursor:"pointer",background:"transparent",color:"#185FA5"}}>+ Aggiungi variazione</button>
      </div>
      {log.length===0?(
        <div style={{padding:"24px",textAlign:"center",border:bd,borderRadius:8,color:"#9c9a92",fontSize:11}}>
          Nessuna variazione registrata. Il progetto è sulla baseline PRD.
        </div>
      ):(
        <div style={{background:"#fff",border:bd,borderRadius:8,overflow:"hidden"}}>
          <div style={{display:"grid",gridTemplateColumns:"90px 1fr 80px 80px 120px 80px 24px",gap:0,background:"#f7f6f3",borderBottom:bd,padding:"5px 10px"}}>
            {["Data","Descrizione variazione","Tipo","ΔGU","Approvato da","Stato",""].map(h=>(
              <div key={h} style={{fontSize:8,fontWeight:700,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em"}}>{h}</div>
            ))}
          </div>
          {log.map(c=>(
            <div key={c.id} style={{display:"grid",gridTemplateColumns:"90px 1fr 80px 80px 120px 80px 24px",gap:0,padding:"5px 10px",borderBottom:bd,alignItems:"center"}}>
              <input type="date" value={c.data} onChange={e=>onSet(c.id,"data",e.target.value)}
                style={{padding:"2px 3px",fontSize:10,border:bd,borderRadius:4,outline:"none",width:84}}/>
              <input value={c.descrizione} onChange={e=>onSet(c.id,"descrizione",e.target.value)}
                placeholder="Descrizione della variazione..."
                style={{width:"95%",padding:"3px 5px",fontSize:10,border:bd,borderRadius:4,outline:"none"}}/>
              <select value={c.tipo} onChange={e=>onSet(c.id,"tipo",e.target.value)}
                style={{padding:"2px 3px",fontSize:9,border:`0.5px solid ${TIPO_C[c.tipo]}`,borderRadius:4,color:TIPO_C[c.tipo],fontWeight:600,outline:"none",width:75,background:`${TIPO_C[c.tipo]}15`}}>
                {Object.entries(TIPO_C).map(([v])=><option key={v} value={v}>{v}</option>)}
              </select>
              <div style={{display:"flex",alignItems:"center",gap:3}}>
                <span style={{fontSize:9,color:"#9c9a92"}}>Δ</span>
                <input type="number" value={c.delta_gu} onChange={e=>onSet(c.id,"delta_gu",parseInt(e.target.value)||0)}
                  style={{width:52,padding:"2px 4px",fontSize:10,border:bd,borderRadius:4,outline:"none",fontFamily:"monospace",color:c.delta_gu>0?"#791F1F":c.delta_gu<0?"#27500A":"#6b6b67"}}/>
                <span style={{fontSize:9,color:"#9c9a92"}}>GU</span>
              </div>
              <input value={c.approvato_da} onChange={e=>onSet(c.id,"approvato_da",e.target.value)}
                placeholder="Nome / ruolo"
                style={{width:"90%",padding:"3px 5px",fontSize:10,border:bd,borderRadius:4,outline:"none"}}/>
              <select value={c.stato} onChange={e=>onSet(c.id,"stato",e.target.value)}
                style={{padding:"2px 3px",fontSize:9,border:`0.5px solid ${STATO_C[c.stato]}`,borderRadius:4,color:STATO_C[c.stato],fontWeight:600,outline:"none",width:75,background:`${STATO_C[c.stato]}15`}}>
                {Object.entries(STATO_L).map(([v,l])=><option key={v} value={v}>{l}</option>)}
              </select>
              <button onClick={()=>onDel(c.id)}
                style={{width:20,height:20,borderRadius:4,border:bd,background:"transparent",cursor:"pointer",fontSize:11,color:"#9c9a92",display:"flex",alignItems:"center",justifyContent:"center"}}>×</button>
            </div>
          ))}
          <div style={{padding:"6px 10px",background:"#f7f6f3",fontSize:10,color:"#6b6b67",display:"flex",gap:16}}>
            <span>Variazioni totali: <strong>{log.length}</strong></span>
            <span>ΔGU totale: <strong style={{color:log.reduce((s,c)=>s+c.delta_gu,0)>0?"#791F1F":"#27500A"}}>{log.reduce((s,c)=>s+c.delta_gu,0)>=0?"+":""}{log.reduce((s,c)=>s+c.delta_gu,0)} GU</strong></span>
            <span>Approvate: <strong style={{color:"#27500A"}}>{log.filter(c=>c.stato==="approved").length}</strong></span>
            <span>In attesa: <strong style={{color:"#BA7517"}}>{log.filter(c=>c.stato==="pending").length}</strong></span>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── RISK REGISTER ────────────────────────────────────────────────────────────
function RiskRegister({ allItems, figures, onUpdateItem }) {
  const bd = "0.5px solid #e0ded8";
  const [risks, setRisks] = useState(() =>
    allItems.filter(i=>(i.rischio||"").trim()).map(i=>({
      id: i.codice||i.id, fw: i.fw, titolo: i.titolo,
      rischio: i.rischio||"", prob:2, impatto:3, treatment:"", owner:"", deadline:"", stato:"open"
    }))
  );
  const setR = (id, field, val) => setRisks(rs=>rs.map(r=>r.id===id?{...r,[field]:val}:r));
  const addRisk = () => setRisks(rs=>[...rs, {
    id: "CUSTOM_"+Date.now(), fw:"CUSTOM", titolo:"", rischio:"",
    prob:2, impatto:3, treatment:"", owner:"", deadline:"", stato:"open"
  }]);

  const STATO_C = {open:"#791F1F", "in-progress":"#BA7517", closed:"#27500A"};
  const STATO_L = {open:"Aperto", "in-progress":"In lavorazione", closed:"Chiuso"};
  const scoreColor = s => s>=12?"#791F1F":s>=6?"#BA7517":"#27500A";
  const scoreBg    = s => s>=12?"#FCEBEB":s>=6?"#FAEEDA":"#EAF3DE";

  return (
    <div>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
        <div style={{flex:1}}>
          <div style={{fontSize:13,fontWeight:600,color:"#1a1a18"}}>Risk Register</div>
          <div style={{fontSize:10,color:"#9c9a92",marginTop:1}}>ISO 31000 · probabilità × impatto · treatment plan</div>
        </div>
        <button onClick={addRisk} style={{padding:"5px 12px",fontSize:11,border:`1px dashed #185FA5`,borderRadius:7,cursor:"pointer",background:"transparent",color:"#185FA5"}}>+ Aggiungi rischio</button>
      </div>

      {/* Legend */}
      <div style={{display:"flex",gap:8,marginBottom:10,fontSize:9,color:"#6b6b67"}}>
        {[["H ≥12","#FCEBEB","#791F1F"],["M 6-11","#FAEEDA","#BA7517"],["L <6","#EAF3DE","#27500A"]].map(([l,bg,c])=>(
          <span key={l} style={{padding:"2px 8px",borderRadius:5,background:bg,color:c,fontWeight:600}}>{l}</span>
        ))}
        <span style={{marginLeft:4}}>Score = Probabilità (1-5) × Impatto (1-5)</span>
      </div>

      <div style={{background:"#fff",border:bd,borderRadius:8,overflow:"hidden"}}>
      <div style={{overflowX:"auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 80px 80px 80px 1fr 90px 90px 80px",minWidth:620,gap:0,background:"#f7f6f3",borderBottom:bd,padding:"5px 10px"}}>
          {["Rischio","Prob","Impatto","Score","Treatment","Owner","Deadline","Stato"].map(h=>(
            <div key={h} style={{fontSize:8,fontWeight:700,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em"}}>{h}</div>
          ))}
        </div>
        {risks.length===0&&(
          <div style={{padding:"20px",textAlign:"center",fontSize:11,color:"#9c9a92"}}>
            Nessun rischio identificato. Compila il campo "Rischi" nelle voci compliance o aggiungine uno manualmente.
          </div>
        )}
        {risks.map(r=>{
          const score = r.prob * r.impatto;
          const fw2   = fwDef(r.fw);
          return (
            <div key={r.id} style={{display:"grid",gridTemplateColumns:"1fr 80px 80px 80px 1fr 90px 90px 80px",gap:0,padding:"5px 10px",borderBottom:bd,alignItems:"center"}}>
              <div style={{minWidth:0}}>
                <div style={{fontSize:10,fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.titolo||"Rischio custom"}</div>
                <div style={{fontSize:9,color:fw2?.colore||"#9c9a92",marginTop:1}}>{r.rischio.slice(0,60)}{r.rischio.length>60?"…":""}</div>
              </div>
              <select value={r.prob} onChange={e=>setR(r.id,"prob",parseInt(e.target.value))}
                style={{padding:"2px 3px",fontSize:10,border:bd,borderRadius:4,outline:"none",width:70}}>
                {[1,2,3,4,5].map(v=><option key={v} value={v}>{v}</option>)}
              </select>
              <select value={r.impatto} onChange={e=>setR(r.id,"impatto",parseInt(e.target.value))}
                style={{padding:"2px 3px",fontSize:10,border:bd,borderRadius:4,outline:"none",width:70}}>
                {[1,2,3,4,5].map(v=><option key={v} value={v}>{v}</option>)}
              </select>
              <div style={{textAlign:"center"}}>
                <span style={{fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:5,background:scoreBg(score),color:scoreColor(score)}}>{score}</span>
              </div>
              <input value={r.treatment} onChange={e=>setR(r.id,"treatment",e.target.value)}
                placeholder="Piano di mitigazione..."
                style={{width:"95%",padding:"3px 5px",fontSize:10,border:bd,borderRadius:4,outline:"none"}}/>
              <input value={r.owner} onChange={e=>setR(r.id,"owner",e.target.value)}
                placeholder="Owner"
                style={{width:"85%",padding:"3px 5px",fontSize:10,border:bd,borderRadius:4,outline:"none"}}/>
              <input type="date" value={r.deadline} onChange={e=>setR(r.id,"deadline",e.target.value)}
                style={{width:"85%",padding:"3px 4px",fontSize:10,border:bd,borderRadius:4,outline:"none"}}/>
              <select value={r.stato} onChange={e=>setR(r.id,"stato",e.target.value)}
                style={{padding:"2px 3px",fontSize:10,border:`0.5px solid ${STATO_C[r.stato]}`,borderRadius:4,color:STATO_C[r.stato],fontWeight:600,outline:"none",width:76,background:`${STATO_C[r.stato]}15`}}>
                {Object.entries(STATO_L).map(([v,l])=><option key={v} value={v}>{l}</option>)}
              </select>
            </div>
          );
        })}
      </div>{/* /overflowX:auto */}
      </div>{/* /overflow:hidden */}
    </div>
  );
}

// ─── BRIEF SCREEN (pagina 1 del progetto) ────────────────────────────────────

const SETTORI   = ["IT / Software","Fashion / Luxury","Healthcare / Pharma","Finance / Banking","Industria / Manifattura","PA / Ente pubblico","Retail / GDO","Energy / Utilities","Altro"];
const CONTRATTI = ["T&M — Time & Materials","T&M Capped — Time & Materials con tetto","Fixed Price","Retainer mensile","Progetto Agile con sprint budget","Da definire"];
const VALUTE    = ["€ EUR","$ USD","£ GBP","CHF"];
const DOC_TIPI  = ["PPT","Word","Note","Email","Link","PDF","Foglio Excel","Altro"];

let _docId=1;
const BRIEF_EMPTY = {
  cliente_nome:"", cliente_settore:"IT / Software", cliente_referente:"", cliente_email:"", cliente_referente_tec:"",
  progetto_nome:"", progetto_codice:"", data_inizio:"", data_fine:"",
  tipo_contratto:"T&M — Time & Materials", valuta:"€ EUR",
  budget_cliente:0, budget_target:0,
  descrizione:"", obiettivi:"", perimetro:"", rischi:"",
  note_libere:"", documenti:[], note_interne:"", pm_assegnato:"",
  // Business case
  bc_prob_ispezione:30, bc_note:"",
  // T&M Capped
  cap_importo:0, cap_warning_pct:80,
  // Fixed Price
  fp_prezzo:0, fp_penale_pct:10, fp_acconto_pct:30, fp_sal_pct:40, fp_saldo_pct:30,
  fp_milestone_pagamento:[],   // [{id, label, importo, data}]
  // Retainer
  ret_fee_mensile:0, ret_ore_incluse:20, ret_tariffa_overage:0, ret_mesi:12,
  // Agile sprint
  agile_budget_sprint:0, agile_n_sprint:6, agile_durata_sprint:2,
  // Shared: payment terms, notes
  termini_pagamento:30, note_contrattuali:"",
};

function BriefScreen({ brief, onChange, onNext }) {
  const bd = "0.5px solid #e0ded8";
  const set = (k,v) => onChange({...brief,[k]:v});
  const addDoc = () => onChange({...brief, documenti:[...brief.documenti,{id:String(_docId++),label:"",url:"",tipo:"Link"}]});
  const delDoc = id => onChange({...brief, documenti:brief.documenti.filter(d=>d.id!==id)});
  const editDoc = (id,k,v) => onChange({...brief, documenti:brief.documenti.map(d=>d.id===id?{...d,[k]:v}:d)});

  const canContinue = brief.cliente_nome.trim().length>0 || brief.progetto_nome.trim().length>0;

  const budgetFmt = v => v>0 ? new Intl.NumberFormat('it-IT').format(v) : "";

  return (
    <div>
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:18}}>
        <div>
          <div style={{fontSize:15,fontWeight:500,color:"#1a1a18"}}>Brief del progetto</div>
          <div style={{fontSize:11,color:"#6b6b67",marginTop:2}}>Contesto, cliente, budget e library dei contenuti esistenti.</div>
        </div>
        <button onClick={onNext}
          style={{padding:"7px 16px",fontSize:12,background:"#1a1a18",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",whiteSpace:"nowrap"}}>
          Continua → Framework
        </button>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20}}>
        {/* LEFT */}
        <div>
          <div style={{marginBottom:16}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,paddingBottom:5,borderBottom:"0.5px solid #e0ded8"}}><span style={{fontSize:13}}>🏢</span><span style={{fontSize:12,fontWeight:600,color:"#1a1a18"}}>Cliente</span></div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:8}}>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Nome cliente / Ragione sociale<span style={{color:"#E24B4A",marginLeft:2}}>*</span></div>
                <input type="text" value={brief.cliente_nome} onChange={e=>set("cliente_nome",e.target.value)} placeholder="Acme S.p.A." style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",boxSizing:"border-box"}}/>
              </div>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Settore</div>
                <select value={brief.cliente_settore} onChange={e=>set("cliente_settore",e.target.value)} style={{padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",color:"#1a1a18"}}>{SETTORI.map(o=><option key={o}>{o}</option>)}</select>
              </div>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Referente cliente (business)</div>
                <input type="text" value={brief.cliente_referente} onChange={e=>set("cliente_referente",e.target.value)} placeholder="Mario Rossi" style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",boxSizing:"border-box"}}/>
              </div>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Email referente</div>
                <input type="email" value={brief.cliente_email} onChange={e=>set("cliente_email",e.target.value)} placeholder="m.rossi@acme.it" style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",boxSizing:"border-box"}}/>
              </div>
            </div>
            <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Referente tecnico cliente</div>
              <input type="text" value={brief.cliente_referente_tec} onChange={e=>set("cliente_referente_tec",e.target.value)} placeholder="CTO / IT Manager..." style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",boxSizing:"border-box"}}/>
            </div>
          </div>

          <div style={{marginBottom:16}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,paddingBottom:5,borderBottom:"0.5px solid #e0ded8"}}><span style={{fontSize:13}}>📋</span><span style={{fontSize:12,fontWeight:600,color:"#1a1a18"}}>Progetto</span></div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:8}}>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Nome progetto<span style={{color:"#E24B4A",marginLeft:2}}>*</span></div>
                <input type="text" value={brief.progetto_nome} onChange={e=>set("progetto_nome",e.target.value)} placeholder="Compliance SOX + NIS2 Assessment" style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",boxSizing:"border-box"}}/>
              </div>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Codice progetto</div>
                <input type="text" value={brief.progetto_codice} onChange={e=>set("progetto_codice",e.target.value)} placeholder="DC-2026-001" style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",boxSizing:"border-box"}}/>
              </div>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>PM assegnato</div>
                <input type="text" value={brief.pm_assegnato} onChange={e=>set("pm_assegnato",e.target.value)} placeholder="Corrado Patierno" style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",boxSizing:"border-box"}}/>
              </div>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Tipo contratto</div>
                <select value={brief.tipo_contratto} onChange={e=>set("tipo_contratto",e.target.value)} style={{padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",color:"#1a1a18"}}>{CONTRATTI.map(o=><option key={o}>{o}</option>)}</select>
              </div>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Data inizio stimata</div>
                <input type="date" value={brief.data_inizio} onChange={e=>set("data_inizio",e.target.value)} placeholder="" style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",boxSizing:"border-box"}}/>
              </div>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Data fine stimata</div>
                <input type="date" value={brief.data_fine} onChange={e=>set("data_fine",e.target.value)} placeholder="" style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",boxSizing:"border-box"}}/>
              </div>
            </div>
          </div>

          <div style={{marginBottom:16}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,paddingBottom:5,borderBottom:"0.5px solid #e0ded8"}}><span style={{fontSize:13}}>💶</span><span style={{fontSize:12,fontWeight:600,color:"#1a1a18"}}>Budget</span></div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:8}}>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Budget cliente</div>
                <input type="number" value={brief.budget_cliente||""} onChange={e=>set("budget_cliente",parseInt(e.target.value)||0)}
                  style={{width:"100%",padding:"6px 9px",fontSize:11,border:bd,borderRadius:6,outline:"none",boxSizing:"border-box"}}/>
              </div>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Budget target DC (interno)</div>
                <input type="number" value={brief.budget_target||""} onChange={e=>set("budget_target",parseInt(e.target.value)||0)}
                  style={{width:"100%",padding:"6px 9px",fontSize:11,border:bd,borderRadius:6,outline:"none",boxSizing:"border-box"}}/>
              </div>
              <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Valuta</div>
                <select value={brief.valuta} onChange={e=>set("valuta",e.target.value)} style={{padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",color:"#1a1a18"}}>{VALUTE.map(o=><option key={o}>{o}</option>)}</select>
              </div>
            </div>
            {(brief.budget_cliente>0||brief.budget_target>0)&&(
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:6,padding:"8px 10px",background:"#f7f6f3",borderRadius:7,border:bd}}>
                {brief.budget_cliente>0&&<div><div style={{fontSize:9,color:"#9c9a92",marginBottom:1}}>Budget cliente</div><div style={{fontSize:14,fontWeight:700,color:"#1a1a18"}}>{brief.valuta.split(" ")[0]} {budgetFmt(brief.budget_cliente)}</div></div>}
                {brief.budget_target>0&&<div><div style={{fontSize:9,color:"#9c9a92",marginBottom:1}}>Target DC (interno)</div><div style={{fontSize:14,fontWeight:700,color:"#27500A"}}>{brief.valuta.split(" ")[0]} {budgetFmt(brief.budget_target)}</div></div>}
              </div>
            )}
              {/* Contract-specific fields */}
          {(()=>{
            const tc = brief.tipo_contratto;
            const bd2 = "0.5px solid #e0ded8";
            const iS2 = {width:"100%",padding:"5px 8px",fontSize:11,border:bd2,borderRadius:5,outline:"none",boxSizing:"border-box"};
            if(tc==="T&M Capped — Time & Materials con tetto") return (
              <div style={{marginTop:10,padding:"10px 12px",background:"#FFF8EC",border:"0.5px solid #BA7517",borderRadius:8}}>
                <div style={{fontSize:10,fontWeight:700,color:"#BA7517",marginBottom:8}}>⚙ T&M Capped — parametri tetto</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:8}}>
                  <div><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",marginBottom:3}}>Cap (importo massimo)</div>
                    <input type="number" value={brief.cap_importo||""} onChange={e=>set("cap_importo",parseInt(e.target.value)||0)} placeholder="es. 50000" style={iS2}/></div>
                  <div><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",marginBottom:3}}>Alert soglia %</div>
                    <input type="number" min={50} max={100} value={brief.cap_warning_pct} onChange={e=>set("cap_warning_pct",parseInt(e.target.value)||80)} style={iS2}/>
                    <div style={{fontSize:9,color:"#9c9a92",marginTop:2}}>Alert quando il consumo supera il {brief.cap_warning_pct}% del cap</div></div>
                </div>
              </div>
            );
            if(tc==="Fixed Price") return (
              <div style={{marginTop:10,padding:"10px 12px",background:"#F0F7FF",border:"0.5px solid #185FA5",borderRadius:8}}>
                <div style={{fontSize:10,fontWeight:700,color:"#185FA5",marginBottom:8}}>⚙ Fixed Price — piano pagamenti</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:8}}>
                  {[["Prezzo contratto","fp_prezzo"],["Acconto %","fp_acconto_pct"],["SAL intermedio %","fp_sal_pct"],["Saldo finale %","fp_saldo_pct"],["Penale ritardo %","fp_penale_pct"],["Termini pagamento (gg)","termini_pagamento"]].map(([lbl,k])=>(
                    <div key={k}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",marginBottom:3}}>{lbl}</div>
                      <input type="number" value={brief[k]||""} onChange={e=>set(k,parseInt(e.target.value)||0)} style={iS2}/></div>
                  ))}
                </div>
                {[brief.fp_acconto_pct,brief.fp_sal_pct,brief.fp_saldo_pct].reduce((s,v)=>s+v,0)!==100&&(
                  <div style={{fontSize:10,color:"#791F1F",padding:"4px 8px",background:"#FCEBEB",borderRadius:5}}>⚠ Acconto + SAL + Saldo = {brief.fp_acconto_pct+brief.fp_sal_pct+brief.fp_saldo_pct}% (deve essere 100%)</div>
                )}
              </div>
            );
            if(tc==="Retainer mensile") return (
              <div style={{marginTop:10,padding:"10px 12px",background:"#F0FFF4",border:"0.5px solid #27500A",borderRadius:8}}>
                <div style={{fontSize:10,fontWeight:700,color:"#27500A",marginBottom:8}}>⚙ Retainer — parametri mensili</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>
                  {[["Fee mensile","ret_fee_mensile"],["Ore incluse/mese","ret_ore_incluse"],["Tariffa overage €/h","ret_tariffa_overage"],["Durata (mesi)","ret_mesi"]].map(([lbl,k])=>(
                    <div key={k}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",marginBottom:3}}>{lbl}</div>
                      <input type="number" value={brief[k]||""} onChange={e=>set(k,parseInt(e.target.value)||0)} style={iS2}/></div>
                  ))}
                </div>
              </div>
            );
            if(tc==="Progetto Agile con sprint budget") return (
              <div style={{marginTop:10,padding:"10px 12px",background:"#F5F0FF",border:"0.5px solid #533AB7",borderRadius:8}}>
                <div style={{fontSize:10,fontWeight:700,color:"#533AB7",marginBottom:8}}>⚙ Agile — parametri sprint</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:8}}>
                  {[["Budget per sprint","agile_budget_sprint"],["Numero sprint","agile_n_sprint"],["Durata sprint (settimane)","agile_durata_sprint"]].map(([lbl,k])=>(
                    <div key={k}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",marginBottom:3}}>{lbl}</div>
                      <input type="number" value={brief[k]||""} onChange={e=>set(k,parseInt(e.target.value)||0)} style={iS2}/></div>
                  ))}
                </div>
                <div style={{marginTop:6,fontSize:10,color:"#533AB7"}}>
                  Budget totale sprint: {brief.valuta?.split(" ")[0]} {new Intl.NumberFormat("it-IT").format((brief.agile_budget_sprint||0)*(brief.agile_n_sprint||0))}
                </div>
              </div>
            );
            return null;
          })()}
      </div>

          {/* Business Case ROI */}
          <div style={{marginTop:10,padding:"10px 12px",background:"#F0FFF4",border:"0.5px solid #27500A40",borderRadius:8}}>
            <div style={{fontSize:10,fontWeight:700,color:"#27500A",marginBottom:8}}>📈 Business Case — ROI della compliance</div>
            <div style={{fontSize:10,color:"#6b6b67",marginBottom:8,lineHeight:1.5}}>Costo del progetto vs esposizione alle sanzioni — giustifica l'investimento al cliente.</div>
            <div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Probabilità ispezione/sanzione entro 24 mesi</div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <input type="range" min={0} max={100} step={5} value={brief.bc_prob_ispezione||30}
                onChange={e=>set("bc_prob_ispezione",parseInt(e.target.value))}
                style={{flex:1,accentColor:"#27500A"}}/>
              <span style={{fontSize:13,fontWeight:700,color:"#27500A",width:36,textAlign:"right"}}>{brief.bc_prob_ispezione||30}%</span>
            </div>
            <div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Note business case</div>
            <textarea value={brief.bc_note||""} onChange={e=>set("bc_note",e.target.value)} rows={2}
              placeholder="Audit pianificati, incidenti recenti, pressione del CdA, gare pubbliche a rischio..."
              style={{width:"100%",padding:"5px 8px",fontSize:11,border:"0.5px solid #27500A40",borderRadius:5,outline:"none",resize:"vertical",fontFamily:"inherit",boxSizing:"border-box"}}/>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div style={{marginBottom:16}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,paddingBottom:5,borderBottom:"0.5px solid #e0ded8"}}><span style={{fontSize:13}}>📝</span><span style={{fontSize:12,fontWeight:600,color:"#1a1a18"}}>Brief del progetto</span></div>
            <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Descrizione sintetica</div>
              <textarea value={brief.descrizione} onChange={e=>set("descrizione",e.target.value)} placeholder="Breve descrizione del progetto — cosa fa Dynamics Consulting per questo cliente..." rows={3} style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",resize:"vertical",fontFamily:"inherit",lineHeight:1.5,boxSizing:"border-box"}}/>
            </div>
            <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Obiettivi principali</div>
              <textarea value={brief.obiettivi} onChange={e=>set("obiettivi",e.target.value)} placeholder="1. Certificazione ISO 27001 entro Q3 2026&#10;2. Gap analysis NIS2 completata&#10;3. ..." rows={3} style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",resize:"vertical",fontFamily:"inherit",lineHeight:1.5,boxSizing:"border-box"}}/>
            </div>
            <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Perimetro (scope)</div>
              <textarea value={brief.perimetro} onChange={e=>set("perimetro",e.target.value)} placeholder="Sistemi in scope, entità aziendali, paesi coperti, eventuali esclusioni..." rows={2} style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",resize:"vertical",fontFamily:"inherit",lineHeight:1.5,boxSizing:"border-box"}}/>
            </div>
            <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Rischi di progetto (alto livello)</div>
              <textarea value={brief.rischi} onChange={e=>set("rischi",e.target.value)} placeholder="Dipendenze critiche, stakeholder a rischio, vincoli tecnici o temporali..." rows={2} style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",resize:"vertical",fontFamily:"inherit",lineHeight:1.5,boxSizing:"border-box"}}/>
            </div>
          </div>

          <div style={{marginBottom:16}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,paddingBottom:5,borderBottom:"0.5px solid #e0ded8"}}><span style={{fontSize:13}}>🔒</span><span style={{fontSize:12,fontWeight:600,color:"#1a1a18"}}>Note interne (non visibili al cliente)</span></div>
            <textarea value={brief.note_interne} onChange={e=>set("note_interne",e.target.value)} placeholder="Contesto commerciale, sensitivity, punti di attenzione per il team DC, considerazioni strategiche..." rows={3} style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",resize:"vertical",fontFamily:"inherit",lineHeight:1.5,boxSizing:"border-box"}}/>
          </div>
        </div>
      </div>

      {/* Library documenti */}
      <div style={{marginBottom:16}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,paddingBottom:5,borderBottom:"0.5px solid #e0ded8"}}><span style={{fontSize:13}}>📚</span><span style={{fontSize:12,fontWeight:600,color:"#1a1a18"}}>Library — contenuti esistenti</span></div>
        <div style={{fontSize:10,color:"#6b6b67",marginBottom:8,lineHeight:1.5}}>
          Collegamento a note, ragionamenti, PPT, email o altri documenti prodotti in precedenza che forniscono contesto per questo progetto.
        </div>
        {brief.documenti.length>0&&(
          <div style={{marginBottom:8}}>
            {brief.documenti.map(doc=>(
              <div key={doc.id} style={{display:"flex",alignItems:"center",gap:6,marginBottom:5,padding:"6px 9px",border:bd,borderRadius:7,background:"#fff"}}>
                <select value={doc.tipo} onChange={e=>editDoc(doc.id,"tipo",e.target.value)}
                  style={{fontSize:10,padding:"3px 6px",border:bd,borderRadius:5,color:"#6b6b67",flexShrink:0}}>
                  {DOC_TIPI.map(t=><option key={t}>{t}</option>)}
                </select>
                <input value={doc.label} onChange={e=>editDoc(doc.id,"label",e.target.value)} placeholder="Etichetta / descrizione documento..."
                  style={{width:160,padding:"4px 7px",fontSize:11,border:bd,borderRadius:5,outline:"none",flexShrink:0}}/>
                <input value={doc.url} onChange={e=>editDoc(doc.id,"url",e.target.value)} placeholder="https://..."
                  style={{flex:1,padding:"4px 7px",fontSize:11,border:bd,borderRadius:5,outline:"none",fontFamily:"monospace",minWidth:0}}/>
                {doc.url&&<a href={doc.url} target="_blank" rel="noopener noreferrer" style={{fontSize:10,color:"#185FA5",flexShrink:0}}>↗</a>}
                <button onClick={()=>delDoc(doc.id)} style={{width:18,height:18,borderRadius:4,border:bd,background:"#fff",cursor:"pointer",fontSize:11,color:"#9c9a92",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,lineHeight:1}}>×</button>
              </div>
            ))}
          </div>
        )}
        <button onClick={addDoc} style={{padding:"5px 12px",fontSize:11,border:`1px dashed #185FA5`,borderRadius:7,cursor:"pointer",background:"transparent",color:"#185FA5"}}>
          + Aggiungi documento / link
        </button>

        <div style={{marginTop:12}}>
          <div style={{marginBottom:9}}><div style={{fontSize:9,fontWeight:600,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>Note libere — ragionamenti, contesto, idee</div>
            <textarea value={brief.note_libere} onChange={e=>set("note_libere",e.target.value)} placeholder="Scrivi qui qualsiasi nota di contesto: ragionamenti sullo scope, considerazioni emerse durante le conversazioni iniziali, hipotheses, vincoli tecnici incontrati in progetti simili..." rows={4} style={{width:"100%",padding:"6px 9px",fontSize:11,border:"0.5px solid #e0ded8",borderRadius:6,outline:"none",resize:"vertical",fontFamily:"inherit",lineHeight:1.5,boxSizing:"border-box"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CUSTOM ITEMS (righe manuali, riordinabili) ────────────────────────────────

let _custId=300;
const makeCustomItem = () => ({ is_milestone: false,
  id: String(_custId++), titolo:"", descrizione:"", gu_min:3, fase_num:4,
  figure:[], rischio:"", aggiunto:true, fw:"CUSTOM", gruppo:"Custom",
  guida:"", deliverable:"", gu_breakdown:"",
});

function CustomItemsPanel({ items, onAdd, onDel, onEdit, onMove }) {
  const bd = "0.5px solid #e0ded8";
  const FASI_OPTS = [1,2,3,4,5,6,7,8];
  return (
    <div style={{marginBottom:14}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8,paddingBottom:5,borderBottom:bd}}>
        <div style={{width:8,height:8,borderRadius:"50%",background:"#9c9a92"}}/>
        <span style={{fontSize:11,fontWeight:600,color:"#6b6b67"}}>Voci custom (aggiunte manualmente)</span>
        <span style={{fontSize:10,color:"#9c9a92",marginLeft:"auto"}}>{items.length} voci</span>
      </div>
      {items.map((item,i)=>(
        <div key={item.id} style={{marginBottom:5,border:bd,borderLeft:"3px dashed #9c9a92",borderRadius:"0 7px 7px 0",padding:"8px 11px",background:"#fafaf8"}}>
          <div style={{display:"flex",alignItems:"center",gap:7}}>
            {/* Reorder */}
            <div style={{display:"flex",flexDirection:"column",gap:2,flexShrink:0}}>
              <button onClick={()=>onMove(i,-1)} disabled={i===0} style={{width:18,height:14,border:bd,borderRadius:3,cursor:"pointer",background:"#fff",fontSize:8,color:"#6b6b67",display:"flex",alignItems:"center",justifyContent:"center",opacity:i===0?0.3:1}}>▲</button>
              <button onClick={()=>onMove(i,+1)} disabled={i===items.length-1} style={{width:18,height:14,border:bd,borderRadius:3,cursor:"pointer",background:"#fff",fontSize:8,color:"#6b6b67",display:"flex",alignItems:"center",justifyContent:"center",opacity:i===items.length-1?0.3:1}}>▼</button>
            </div>
            {/* Fase */}
            <select value={item.fase_num} onChange={e=>onEdit(item.id,"fase_num",parseInt(e.target.value))}
              style={{width:55,padding:"4px 5px",fontSize:10,border:bd,borderRadius:5,color:"#6b6b67",flexShrink:0}}>
              {FASI_OPTS.map(f=><option key={f} value={f}>F{f}</option>)}
            </select>
            {/* Titolo */}
            <input value={item.titolo} onChange={e=>onEdit(item.id,"titolo",e.target.value)} placeholder="Titolo voce custom..."
              style={{flex:1,padding:"4px 7px",fontSize:11,fontWeight:500,border:bd,borderRadius:5,outline:"none"}}/>
            {/* GU */}
            <input type="number" min={0} value={item.gu_min} onChange={e=>onEdit(item.id,"gu_min",parseInt(e.target.value)||0)}
              style={{width:44,padding:"4px 5px",fontSize:12,fontWeight:700,textAlign:"center",border:bd,borderRadius:5,outline:"none",fontFamily:"monospace",color:"#6b6b67"}}/>
            <span style={{fontSize:9,color:"#9c9a92",flexShrink:0}}>GU</span>
            <button onClick={()=>onDel(item.id)} style={{width:18,height:18,borderRadius:4,border:bd,background:"#fff",cursor:"pointer",fontSize:11,color:"#9c9a92",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>×</button>
          </div>
          {/* Descrizione + rischio (opzionali) */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginTop:5}}>
            <input value={item.descrizione} onChange={e=>onEdit(item.id,"descrizione",e.target.value)} placeholder="Descrizione (opzionale)..."
              style={{padding:"3px 7px",fontSize:10,border:bd,borderRadius:5,outline:"none",color:"#6b6b67"}}/>
            <input value={item.rischio} onChange={e=>onEdit(item.id,"rischio",e.target.value)} placeholder="Rischio se non eseguito (opzionale)..."
              style={{padding:"3px 7px",fontSize:10,border:bd,borderRadius:5,outline:"none",color:"#791F1F"}}/>
          </div>
        </div>
      ))}
      <button onClick={onAdd} style={{width:"100%",padding:"6px",fontSize:10,border:"1px dashed #9c9a92",borderRadius:7,cursor:"pointer",background:"transparent",color:"#6b6b67",marginTop:4}}>
        + Aggiungi voce custom
      </button>
    </div>
  );
}

function AvanzamentoScreen({ allItems, figures, figureRates, pmPct, figurePctMap, clienteFigSet, brief, onBack, onNext }) {
  const bd = "0.5px solid #e0ded8";
  const fmt = v => new Intl.NumberFormat("it-IT").format(Math.round(v||0));
  const cur = brief.valuta?.split(" ")[0] || "€";
  const today = new Date().toISOString().slice(0,10);

  // Per-item: actual GU consumed (AC input) and % complete (EV driver)
  const [progress, setProgress] = useState({}); // {codice: {ac_gu, pct_complete}}
  const setP = (cod, field, val) => setProgress(p=>({...p,[cod]:{...(p[cod]||{}), [field]:val}}));

  // Financial rates
  const billTotals  = aggregateByFigure(allItems, pmPct, figurePctMap||{}, figures, clienteFigSet||new Set());
  const billFigIds  = Object.keys(billTotals).filter(f=>billTotals[f]>0);
  const getRate     = id => figureRates[id]?.rate  || 0;
  const getMkup     = id => figureRates[id]?.markup || 30;
  const totalBudget = billFigIds.reduce((s,id)=>s+(billTotals[id]||0)*getRate(id)*(1+getMkup(id)/100), 0); // BAC

  // Gantt-based PV: % of planned work that should be done by today
  const startDate = brief.data_inizio || today;
  const endDate   = brief.data_fine   || today;
  const totalDays = Math.max(1, (new Date(endDate)-new Date(startDate))/86400000);
  const elapsedDays = Math.max(0, Math.min(totalDays, (new Date(today)-new Date(startDate))/86400000));
  const pvPct    = totalDays>0 ? elapsedDays/totalDays : 0;

  // EVM aggregates
  const BAC = totalBudget;
  const PV  = BAC * pvPct;  // planned value at today
  const EV  = allItems.reduce((s,item) => {
    const cod = item.codice||item.id;
    const pct = (progress[cod]?.pct_complete??0)/100;
    const itemBudget = billFigIds.reduce((ss,fid) => {
      const guFrac = (billTotals[fid]||0) / Math.max(allItems.reduce((a,i)=>a+(i.gu_min||0),0),1);
      return ss + (item.gu_min||0) * guFrac * getRate(fid) * (1+getMkup(fid)/100);
    }, 0);
    return s + pct * itemBudget;
  }, 0);
  const AC = allItems.reduce((s,item) => {
    const cod = item.codice||item.id;
    const acGU = progress[cod]?.ac_gu ?? 0;
    const avgRate = billFigIds.length > 0
      ? billFigIds.reduce((ss,fid)=>ss+getRate(fid),0)/billFigIds.length : 0;
    return s + acGU * avgRate;
  }, 0);

  const CPI  = EV>0 ? EV/Math.max(AC,1) : null;
  const SPI  = PV>0 ? EV/Math.max(PV,1) : null;
  const EAC  = (CPI&&CPI>0&&isFinite(CPI)) ? BAC/CPI : BAC;
  const VAC  = BAC - EAC;
  const pctComplete = BAC>0 ? EV/BAC*100 : 0;

  const kpiColor = v => v>=1?"#27500A":v>=0.8?"#BA7517":"#791F1F";
  const evmKPI = (label,val,sub,fmt2,warn) => (
    <div style={{padding:"10px 12px",background:"#fff",border:`0.5px solid ${warn?"#E24B4A":"#e0ded8"}`,borderRadius:8}}>
      <div style={{fontSize:9,color:"#9c9a92",textTransform:"uppercase",letterSpacing:".04em",marginBottom:3}}>{label}</div>
      <div style={{fontSize:16,fontWeight:700,color:warn?"#791F1F":typeof val==="number"&&val<1&&val>0?kpiColor(val):"#1a1a18",fontFamily:"monospace",lineHeight:1}}>
        {fmt2 ? (isNaN(val)||!isFinite(val) ? "N/A" : fmt2(val)) : (val??"—")}
      </div>
      {sub&&<div style={{fontSize:9,color:"#9c9a92",marginTop:2}}>{sub}</div>}
    </div>
  );

  return (
    <div>
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:14}}>
        <div>
          <div style={{fontSize:15,fontWeight:500,color:"#1a1a18"}}>Avanzamento — Earned Value</div>
          <div style={{fontSize:11,color:"#6b6b67",marginTop:2}}>
            {elapsedDays>0?`${Math.round(elapsedDays)} gg elapsed / ${Math.round(totalDays)} totali · ${pvPct*100<1?"0":Math.round(pvPct*100)}% tempo consumato`:"Imposta le date nel Brief per attivare l'EVM"}
          </div>
        </div>
        <div style={{display:"flex",gap:6}}>
          <button onClick={onBack} style={{padding:"6px 12px",fontSize:12,border:bd,borderRadius:8,cursor:"pointer",background:"#fff",color:"#6b6b67"}}>← Gantt</button>
          {onNext&&<button onClick={onNext} style={{padding:"6px 14px",fontSize:12,background:"#185FA5",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontWeight:600}}>Report →</button>}
        </div>
      </div>

      {/* EVM KPIs */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(110px,1fr))",gap:7,marginBottom:14}}>
        {evmKPI("BAC (Budget)",BAC,null,v=>`${cur} ${fmt(v)}`)}
        {evmKPI("PV (Planned Value)",PV,`${Math.round(pvPct*100)}% pianificato`,v=>`${cur} ${fmt(v)}`)}
        {evmKPI("EV (Earned Value)",EV,`${pctComplete.toFixed(1)}% completato`,v=>`${cur} ${fmt(v)}`)}
        {evmKPI("AC (Actual Cost)",AC,"Costo reale a oggi",v=>`${cur} ${fmt(v)}`)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(110px,1fr))",gap:7,marginBottom:14}}>
        {evmKPI("CPI",CPI??1,"≥1 = in budget",v=>v.toFixed(2),CPI!==null&&CPI<0.9)}
        {evmKPI("SPI",SPI??1,"≥1 = in schedule",v=>v.toFixed(2),SPI!==null&&SPI<0.9)}
        {evmKPI("EAC (proiezione finale)",EAC,`VAC: ${cur} ${fmt(VAC)}`,v=>`${cur} ${fmt(v)}`,VAC<0)}
        {evmKPI("% Completamento",pctComplete,`EV/BAC`,v=>v.toFixed(1)+"%")}
      </div>

      {/* Alert */}
      {(CPI&&CPI<0.9||SPI&&SPI<0.9)&&(
        <div style={{padding:"8px 12px",background:"#FCEBEB",border:"0.5px solid #E24B4A",borderRadius:7,marginBottom:12,fontSize:11,color:"#791F1F"}}>
          {CPI&&CPI<0.9&&<div>❌ CPI {CPI.toFixed(2)} — progetto in overspending. Proiezione finale: {cur} {fmt(EAC)} vs budget {cur} {fmt(BAC)}</div>}
          {SPI&&SPI<0.9&&<div>❌ SPI {SPI.toFixed(2)} — progetto in ritardo. Accelerare o rinegoziare le milestone.</div>}
        </div>
      )}

      {/* Per-item progress input */}
      <div style={{fontSize:11,fontWeight:600,color:"#1a1a18",marginBottom:8}}>Inserisci avanzamento per voce</div>
      <div style={{background:"#fff",border:bd,borderRadius:8,overflow:"hidden"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 120px 120px 80px",gap:0,background:"#f7f6f3",borderBottom:bd,padding:"6px 10px"}}>
          {["Voce","% completato","GU reali (AC)","GU piano"].map(h=>(
            <div key={h} style={{fontSize:9,fontWeight:700,color:"#6b6b67",textTransform:"uppercase",letterSpacing:".04em"}}>{h}</div>
          ))}
        </div>
        {allItems.filter(i=>i.gu_min>0).sort((a,b)=>b.gu_min-a.gu_min).slice(0,20).map(item=>{
          const cod = item.codice||item.id;
          const p   = progress[cod]||{pct_complete:0, ac_gu:0};
          const fw2 = fwDef(item.fw);
          return (
            <div key={cod} style={{display:"grid",gridTemplateColumns:"1fr 120px 120px 80px",gap:0,padding:"5px 10px",borderBottom:bd,alignItems:"center"}}>
              <div style={{minWidth:0}}>
                <div style={{fontSize:10,fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.titolo}</div>
                <div style={{fontSize:8,color:fw2?.colore||"#9c9a92"}}>{fw2?.nome||item.fw}</div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:4}}>
                <input type="range" min={0} max={100} step={5} value={p.pct_complete}
                  onChange={e=>setP(cod,"pct_complete",parseInt(e.target.value))}
                  style={{width:70,accentColor:"#185FA5"}}/>
                <span style={{fontSize:10,fontWeight:600,color:"#185FA5",width:28}}>{p.pct_complete}%</span>
              </div>
              <input type="number" min={0} value={p.ac_gu||""} placeholder="0"
                onChange={e=>setP(cod,"ac_gu",parseInt(e.target.value)||0)}
                style={{width:80,padding:"3px 6px",fontSize:11,border:bd,borderRadius:5,outline:"none",fontFamily:"monospace"}}/>
              <div style={{fontSize:11,fontFamily:"monospace",color:"#6b6b67"}}>{item.gu_min}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ComplianceUI() {
  const [screen, setScreen] = useState("brief");
  const [active, setActive] = useState(["SOX-IT","NIS2","ISO27001"]);
  const [customMode, setCustomMode] = useState(false);
  const [brief, setBrief] = useState({...BRIEF_EMPTY});
  const [customItems, setCustomItems] = useState([]);
  const [figures, setFigures] = useState([...FIGURES_MASTER_DEFAULT]);
  const [figureRates, setFigureRates] = useState({});
  const [pmPct, setPmPct] = useState(5);

  // External costs: partners, tools, licenses, expenses
  // [{id, label, tipo, fornitore, costo_unitario, quantita, unita, markup_pct, markup_active, note}]
  const [externalCosts, setExternalCosts] = useState([]);
  let _extId = 1;
  const addExtCost = () => setExternalCosts(c=>[...c, {
    id: String(Date.now()), label:"", tipo:"tool",
    fornitore:"", costo_unitario:0, quantita:1, unita:"mese",
    markup_pct:0, markup_active:false, note:""
  }]);
  const setExtCost = (id, field, val) =>
    setExternalCosts(c=>c.map(x=>x.id===id?{...x,[field]:val}:x));
  const delExtCost = (id) => setExternalCosts(c=>c.filter(x=>x.id!==id));
  const bd = "0.5px solid #e0ded8";

  const toggle = c => setActive(a=>a.includes(c)?a.filter(x=>x!==c):[...a,c]);

  const addCust  = () => setCustomItems(ci=>[...ci, makeCustomItem()]);
  const delCust  = id => setCustomItems(ci=>ci.filter(x=>x.id!==id));
  const editCust = (id,k,v) => setCustomItems(ci=>ci.map(x=>x.id===id?{...x,[k]:v}:x));
  const moveCust = (i,dir) => setCustomItems(ci=>{
    const a=[...ci]; const j=i+dir;

// ─── EVM — AVANZAMENTO (screen 5.5) ──────────────────────────────────────────

    if(j<0||j>=a.length) return a;
    [a[i],a[j]]=[a[j],a[i]]; return a;
  });

  const addFigure    = (fig) => setFigures(fs=>fs.find(f=>f.id===fig.id)?fs:[...fs,fig]);
  const updateFigure = (id, patch) => {
    // Update figures array if figure exists there
    setFigures(fs=>fs.map(f=>f.id===id?{...f,...patch}:f));
    // Also track isCliente in dedicated Set (handles raw IDs not in FIGURES_MASTER_DEFAULT)
    if('isCliente' in patch) {
      setClienteFigSet(s=>{const n=new Set(s); patch.isCliente?n.add(id):n.delete(id); return n;});
    }
  };
  const [clienteFigSet, setClienteFigSet] = useState(new Set());
  const [maturity, setMaturity]               = useState({});

  const onRateChange = (id, field, val) => {
    if(field === "isCliente") {
      // Update both the figures array and clienteFigSet
      updateFigure(id, {isCliente: val});
      setClienteFigSet(s=>{ const n=new Set(s); val ? n.add(id) : n.delete(id); return n; });
    } else {
      setFigureRates(r=>({...r,[id]:{...(r[id]||{}), [field]:val}}));
    }
  };

  // Figure overrides lifted to root so Resource/Gantt screens see them
  const [figureOverrides, setFigureOverrides] = useState({});
  const onFigureChange = (codice, newFigs) => setFigureOverrides(p=>({...p,[codice]:newFigs}));

  // Milestones lifted to root so Gantt sees them
  const [milestones, setMilestones] = useState(new Set());
  const onToggleMilestone = (codice) => setMilestones(m=>{const n=new Set(m);n.has(codice)?n.delete(codice):n.add(codice);return n;});

  // Per-item figure % distribution for compliance items (all incl. PM sum=100%)
  const [figurePctMap, setFigurePctMap] = useState({});
  const onFigurePctChange = (codice, figId, pct) =>
    setFigurePctMap(m=>({...m,[codice]:{...(m[codice]||{}), [figId]:pct}}));

  // All items — apply figure overrides before passing to Resource/Gantt
  const complianceItems = ITEMS_RAW.filter(i=>active.includes(i.fw));
  const allItemsRaw = [...complianceItems, ...(customMode?customItems:[])];
  const allItems = allItemsRaw.map(item=>({
    ...item,
    figure: figureOverrides[item.codice]||item.figure,
    is_milestone: milestones.has(item.codice||item.id),
  }));

  const projectTitle = brief.progetto_nome || brief.cliente_nome || "Nuovo progetto";

  const SCREENS     = ["brief","frameworks","items","risorse","gantt","avanzamento","contabilita","docgen"];
  const SCREEN_LBLS = ["Brief","Framework","Voci","Risorse","Gantt","EVM","Report","Documento"];

  return (
    <div style={{border:bd,borderRadius:12,overflow:"hidden",background:"#fff",fontFamily:"system-ui,-apple-system,sans-serif",color:"#1a1a18",fontSize:13}}>
      {/* Header */}
      <div style={{padding:"10px 16px",borderBottom:bd,display:"flex",alignItems:"center",gap:12,background:"#fafaf8",flexWrap:"wrap"}}>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:14,fontWeight:500,color:"#1a1a18",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{projectTitle}</div>
          <div style={{fontSize:10,color:"#9c9a92",marginTop:1}}>{brief.cliente_nome&&brief.progetto_nome?`${brief.cliente_nome} — ${brief.tipo_contratto||"T&M"}`:"Compila il Brief per iniziare"}</div>
        </div>
        {/* Compact nav tabs */}
        <div style={{display:"flex",gap:2,flexShrink:0,flexWrap:"wrap",justifyContent:"flex-end"}}>
          {SCREENS.map((s,i)=>{
            const done = SCREENS.indexOf(screen) > i;
            const cur  = screen === s;
            const ICONS = ["📋","🔲","☑️","👥","📅","📊","💼","📄"];
            return (
              <button key={s} onClick={()=>(done||cur)&&setScreen(s)}
                style={{padding:"5px 10px",fontSize:10,border:`1px solid ${cur?"#1a1a18":done?"#27500A40":"#e0ded8"}`,borderRadius:7,cursor:(done||cur)?"pointer":"default",
                  background:cur?"#1a1a18":done?"#EAF3DE":"#fff",color:cur?"#fff":done?"#27500A":"#9c9a92",
                  fontWeight:cur?600:400,display:"flex",alignItems:"center",gap:4,whiteSpace:"nowrap"}}>
                <span style={{fontSize:11}}>{ICONS[i]}</span>
                {SCREEN_LBLS[i]}
                {done&&!cur&&<span style={{fontSize:9}}>✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div style={{padding:"clamp(10px,3vw,17px)",maxHeight:"min(680px,90dvh)",overflowY:"auto"}}>
        {screen==="brief"&&(
          <BriefScreen brief={brief} onChange={setBrief} onNext={()=>setScreen("frameworks")}/>
        )}
        {screen==="frameworks"&&(
          <FrameworkScreen active={active} onToggle={toggle} customMode={customMode}
            onToggleCustom={()=>setCustomMode(v=>!v)} onNext={()=>setScreen("items")} onBack={()=>setScreen("brief")}
            maturityState={maturity} onMaturityChange={setMaturity}/>
        )}
        {screen==="items"&&(
          <ItemsScreen activeFrameworks={active} customMode={customMode}
            customItems={customItems} onAddCust={addCust} onDelCust={delCust}
            onEditCust={editCust} onMoveCust={moveCust}
            figureOverrides={figureOverrides} onFigureChange={onFigureChange}
            figurePctMap={figurePctMap} onFigurePctChange={onFigurePctChange}
            milestones={milestones} onToggleMilestone={onToggleMilestone}
            allFigures={figures} onAddFigure={addFigure} onUpdateFigure={updateFigure} clienteFigSet={clienteFigSet} pmPct={pmPct}
            onBack={()=>setScreen("frameworks")}
            onNext={()=>setScreen("risorse")}/>
        )}
        {screen==="risorse"&&(
          <ResourceScreen allItems={allItems} figures={figures} figureRates={figureRates}
            onRateChange={onRateChange} brief={brief} pmPct={pmPct} figurePctMap={figurePctMap}
            clienteFigSet={clienteFigSet} externalCosts={externalCosts}
            onAddExtCost={addExtCost} onSetExtCost={setExtCost} onDelExtCost={delExtCost}
            onPmPctChange={setPmPct} onAddFigure={addFigure}
            onBack={()=>setScreen("items")} onNext={()=>setScreen("gantt")}/>
        )}
        {screen==="gantt"&&(
          <GanttScreen allItems={allItems} figures={figures} pmPct={pmPct} figurePctMap={figurePctMap}
            clienteFigSet={clienteFigSet}
            brief={brief} onBack={()=>setScreen("risorse")} onNext={()=>setScreen("avanzamento")}/>
        )}
        {screen==="avanzamento"&&(
          <AvanzamentoScreen allItems={allItems} figures={figures} figureRates={figureRates}
            pmPct={pmPct} figurePctMap={figurePctMap} clienteFigSet={clienteFigSet} brief={brief}
            onBack={()=>setScreen("gantt")} onNext={()=>setScreen("contabilita")}/>
        )}
        {screen==="contabilita"&&(
          <ContabilitaScreen allItems={allItems} figures={figures} figureRates={figureRates}
            pmPct={pmPct} figurePctMap={figurePctMap} clienteFigSet={clienteFigSet} brief={brief}
            externalCosts={externalCosts}
            onBack={()=>setScreen("avanzamento")} onNext={()=>setScreen("docgen")}/>
        )}
        {screen==="docgen"&&(
          <DocumentGeneratorScreen allItems={allItems} figures={figures} figureRates={figureRates}
            pmPct={pmPct} figurePctMap={figurePctMap} clienteFigSet={clienteFigSet} brief={brief}
            externalCosts={externalCosts}
            onBack={()=>setScreen("contabilita")}
            onGoTo={(s)=>setScreen(s)}/>
        )}
      </div>
    </div>
  );
}
