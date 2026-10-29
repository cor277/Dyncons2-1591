import type { Metadata } from "next";
import { OG_IMAGE } from "@/app/og";
import { breadcrumbSchema } from "@/app/seo";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

const PATH = "/it/case-studies/logitrack";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;
const TITLE = "LogiTrack — Tracciabilità logistica con RFID e AI";
const DESCRIPTION =
  "Tracciabilità logistica end-to-end con RFID UHF, NFC, rilevamento delle anomalie con AI, certificazione su blockchain e analisi in tempo reale. Cloud-native, pronta per l’edge, integrata con SAP e Power Platform.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    locale: "it_IT",
  },
};

const tech = [
  "RFID UHF",
  "NFC",
  "Docker",
  "Kubernetes",
  "Apache OpenWhisk",
  "Keycloak",
  "Dremio",
  "Power BI",
  "Weaviate",
  "n8n",
  "Prometheus",
  "Grafana",
  "Elasticsearch",
  "APISIX",
  "Blockchain",
  "PostgreSQL",
  "Power Platform",
];

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Home", path: "/" },
  { name: "Risorse in italiano", path: "/it" },
  { name: "Case study", path: "/it/case-studies" },
  { name: "LogiTrack" },
]);

export default function LogiTrackCaseStudyIt() {
  return (
    <>
      <JsonLd data={crumbs} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/it/case-studies"
              className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
            >
              ← Tutti i case study
            </Link>
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Logistica · RFID · AI · Tracciabilità
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              LogiTrack: tracciabilità RFID e AI per magazzino, produzione e spedizioni
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Una piattaforma cloud-native, pronta per l’edge, che unisce RFID UHF per il
              tracciamento in tempo reale di magazzino e produzione con NFC per l’interazione
              post-vendita con il cliente. Rilevamento delle anomalie con AI, certificazione su
              blockchain e integrazione profonda con SAP e Power Platform danno visibilità
              end-to-end sulla supply chain ed eccellenza operativa.
            </p>
          </div>
        </section>

        {/* Metrics bar */}
        <section className="border-b border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99,5%", label: "Errori di spedizione in meno" },
              { value: "20×", label: "Cicli di inventario più rapidi" },
              { value: "8–12 mesi", label: "Rientro tipico dell’investimento" },
              { value: "End-to-end", label: "Tracciabilità per singolo articolo" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#E6EDF3]">{m.value}</div>
                <div className="text-xs md:text-sm text-[#7D8FA3] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Body */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10 text-[#7D8FA3] leading-relaxed text-lg">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">La sfida</h2>
              <p>
                La logistica moderna ha un problema che si accumula: le merci si muovono più in
                fretta delle informazioni. La scansione manuale dei codici a barre non tiene il
                passo con magazzini ad alto volume, linee di produzione a più stadi e requisiti
                normativi di tracciabilità stringenti. Errori di spedizione, zone d’ombra
                nell’inventario e rischio di contraffazione erodono i margini e la fiducia dei
                clienti.
              </p>
              <p className="mt-4">
                LogiTrack è stata progettata da zero per chiudere queste lacune: letture RFID
                massive al posto della scansione a vista, validazione con AI al posto dei controlli
                manuali, e un unico livello di dati in tempo reale che copre ogni punto operativo al
                posto di fogli di calcolo scollegati.
              </p>
            </div>

            {/* Architecture */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Architettura cloud-native, pronta per l’edge</h2>
              <p>
                LogiTrack gira su uno stack containerizzato (Docker/Kubernetes), con funzioni API
                serverless tramite Apache OpenWhisk, gestione delle identità enterprise con Keycloak
                e virtualizzazione dei dati con Dremio a monte delle dashboard Power BI. Il supporto
                all’edge computing fa sì che i varchi RFID e le stampanti industriali di etichette
                operino in locale nei punti operativi critici, sincronizzando i dati con la
                piattaforma centrale.
              </p>
              <p className="mt-4">
                Sono disponibili due modalità di deployment. La <strong className="text-[#E6EDF3]">configurazione
                integrata</strong> con le eGO CRM APPs su Power Platform offre governance
                centralizzata, automazione low-code con Power Automate, portali self-service con
                Power Pages e assistenti virtuali con Copilot Studio. La <strong className="text-[#E6EDF3]">
                modalità standalone</strong> garantisce piena autonomia per ambienti air-gapped,
                esigenze di personalizzazione spinta o organizzazioni senza licenze Microsoft 365.
                Entrambe condividono lo stesso motore.
              </p>
            </div>

            {/* Warehouse */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Gestione del magazzino</h2>
              <p>
                Un’app mobile rugged, offline-first, gestisce ogni flusso di magazzino: ricevimento
                merci con validazione dell’ASN, stoccaggio intelligente con suggerimento
                dell’ubicazione ottimale, picking guidato da RFID, inventari ciclici e massivi senza
                fermare l’operatività, trasferimenti interni tracciati in automatico. L’interfaccia,
                ottimizzata per il touch, funziona con i guanti e in scarsa illuminazione, e supporta
                deployment multilingua e multi-sede.
              </p>
            </div>

            {/* Production */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Tracciabilità della produzione</h2>
              <p>
                Ogni lotto di produzione riceve un tag RFID univoco codificato EPC. Mentre attraversa
                le fasi di lavorazione, i varchi registrano in automatico i passaggi e aggiornano in
                tempo reale lo stato dell’ordine di lavoro. L’indirizzabilità delle macchine via RFID
                configura in automatico i parametri di lavorazione per ogni lotto. Il consumo di
                materiali è rilevato dall’app mobile con backflush automatico. KPI dei tempi ciclo e
                OEE sono calcolati in diretta per ogni centro di lavoro e ogni operatore.
              </p>
            </div>

            {/* Shipping */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Validazione delle spedizioni senza intervento manuale</h2>
              <p>
                Dopo l’imballaggio, ogni unità di movimentazione (HU) viene sigillata con
                un’etichetta RFID. Al passaggio dal varco di uscita, il sistema confronta in
                automatico il contenuto con l’ordine di spedizione, verificando quantità, articoli e
                destinazione. Se tutto corrisponde, parte la sincronizzazione automatica con SAP e la
                generazione del documento di trasporto. Qualsiasi discrepanza blocca la spedizione con
                un alert immediato all’operatore. Risultato: errori di spedizione ridotti del 99,5%.
              </p>
            </div>

            {/* Returns & second channel */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Resi, ricondizionamento e secondo canale</h2>
              <p>
                La merce resa entra in automatico in una quarantena virtuale. Il sistema legge il
                tag RFID, recupera l’intera storia del prodotto e suggerisce l’azione successiva
                (ricondizionare, rivendere sul secondo canale o rottamare) in base a regole
                configurabili. Il ricondizionamento genera in automatico gli ordini di lavoro. A
                lavorazione conclusa, il prodotto viene ricertificato con un aggiornamento di stato
                ancorato su blockchain, per una trasparenza completa.
              </p>
              <p className="mt-4">
                Le lavorazioni esterne presso terzisti sono tracciate da un capo all’altro:
                registrazione in uscita, monitoraggio dei tempi di permanenza con alert automatici
                sui ritardi, verifica RFID al rientro per impedire sostituzioni fraudolente e
                visibilità in tempo reale durante ogni fase esterna.
              </p>
            </div>

            {/* NFC & end consumer */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Esperienza del consumatore con NFC e autenticità</h2>
              <p>
                Il cliente finale avvicina lo smartphone al prodotto dotato di NFC e apre un’app
                white-label del brand che mostra l’intero percorso del prodotto, dalle materie prime
                alla consegna finale, con registrazioni datate e geolocalizzate per ogni fase. Un
                certificato di autenticità basato su blockchain contrasta la contraffazione. I
                clienti possono registrarsi per l’estensione della garanzia e l’assistenza
                personalizzata, mentre i brand ottengono informazioni sui comportamenti
                post-vendita.
              </p>
            </div>

            {/* AI */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">AI e automazione intelligente</h2>
              <p>
                LogiTrack integra un ecosistema AI completo: Weaviate per l’indicizzazione
                vettoriale, Elysia per l’elaborazione del linguaggio naturale e n8n per orchestrare
                pipeline intelligenti. Le capacità principali:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li>
                  <strong className="text-[#E6EDF3]">Ricerca semantica</strong>: interrogazioni in
                  linguaggio naturale su ASN, bolle di consegna e documenti di trasporto, con
                  risultati pertinenti anche da domande imprecise o parziali.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Correlazione RFID–video</strong>: integrazione
                  con telecamere ONVIF per collegare in automatico gli eventi RFID alle registrazioni
                  video, a supporto di audit, indagini sulle discrepanze e ottimizzazione dei flussi.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Rilevamento delle anomalie</strong>:
                  individuazione automatica di pattern irregolari nel throughput dei varchi, nei
                  tassi di scarto, nei tempi ciclo e nel comportamento degli operatori, con alert
                  proattivi prima che i problemi tocchino l’operatività.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">AI conversazionale</strong>: interfacce chat
                  integrate con Microsoft Teams, portali del brand e bot rivolti ai clienti, che
                  permettono agli operatori di interrogare il sistema in linguaggio naturale per
                  report, decisioni e supporto.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Report narrativi</strong>: il motore AI genera
                  in automatico report in linguaggio naturale che spiegano i trend, mettono in
                  evidenza le anomalie e suggeriscono azioni correttive. I manager ricevono sintesi
                  direzionali personalizzate invece di dover interpretare dashboard grezze.
                </li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Sicurezza enterprise e requisiti normativi</h2>
              <p>
                La gestione di identità e accessi con Keycloak supporta SSO (SAML, OAuth2), MFA
                (OTP, biometria, smart card), integrazione con Active Directory e autorizzazioni
                granulari RBAC/ABAC. Tutto il traffico API passa da APISIX con autenticazione JWT,
                mutual TLS per le connessioni critiche e rate limiting. I dati sono cifrati AES-256
                a riposo e TLS 1.3 in transito.
              </p>
              <p className="mt-4">
                LogiTrack è progettata sui requisiti di EPCglobal/GS1, ISO 18000-63 (RFID UHF), ISO
                14443/15693 (NFC) e ONVIF. Il GDPR è affrontato con privacy by design, diritto alla
                cancellazione e audit trail immutabili. Le componenti AI sono classificate a basso
                rischio ai sensi dell’AI Act europeo, con piena spiegabilità e trasparenza.
              </p>
              <p className="mt-4">
                Un SIEM integrato garantisce il monitoraggio continuo della sicurezza con
                correlazione degli eventi su più livelli, alert automatici sulle anomalie, procedure
                documentate di risposta agli incidenti e backup cifrati con retention configurabile
                e RTO/RPO garantiti.
              </p>
            </div>

            {/* Monitoring */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Monitoraggio e analytics</h2>
              <p>
                Prometheus e Grafana forniscono metriche in tempo reale su throughput dei varchi,
                errori di lettura RFID, latenza delle API e salute dell’infrastruttura.
                Elasticsearch centralizza i log applicativi e di audit. Dremio virtualizza dataset
                eterogenei (eventi RFID, ordini SAP, ordini di lavoro di produzione, movimenti di
                magazzino) in un unico livello semantico, consumato da Power BI per le dashboard
                interattive.
              </p>
              <p className="mt-4">
                Le dashboard sono segmentate per ruolo: il management vede trend di alto livello,
                confronti fra sedi e KPI aggregati; i responsabili operativi hanno viste granulari in
                tempo reale per varco, zona di magazzino, linea di produzione e operatore. Fra le
                funzioni avanzate: heatmap interattive dei varchi, timeline degli eventi con
                drill-down, correlazioni RFID–video, alert su soglie configurabili ed export dei dati
                per analisi esterne e adempimenti normativi.
              </p>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Risultati</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong className="text-[#E6EDF3]">Riduzione del 99,5%</strong> degli errori di
                  spedizione, grazie alla validazione automatica ai varchi RFID rispetto agli ordini
                  pianificati.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Inventari 20× più rapidi</strong>: conteggi
                  massivi chiusi in minuti invece che in ore, senza alcun fermo operativo.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Biografia completa del prodotto</strong>: ogni
                  articolo tracciato dal ricevimento in ingresso alla produzione, alla spedizione, ai
                  resi, fino all’autenticazione da parte del consumatore finale.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Supporto decisionale guidato dall’AI</strong>:
                  rilevamento delle anomalie, analisi predittive e report narrativi al posto
                  dell’analisi manuale.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Rientro dell’investimento in 8–12 mesi</strong>{" "}
                  grazie alla riduzione degli errori, all’ottimizzazione dei tempi e ai guadagni di
                  produttività.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Autenticità certificata su blockchain</strong>{" "}
                  per i prodotti premium, verificabile dal consumatore finale con un tocco NFC.
                </li>
              </ul>
            </div>

            {/* Tech */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Tecnologie utilizzate</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Parliamo del tuo progetto"
          subtitle="Un’infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Contattaci."
          ctaLabel="Inizia la conversazione →"
          ctaHref="/it/contatti"
        />
      </main>
      <Footer />
    </>
  );
}
