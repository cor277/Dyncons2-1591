import type { Metadata } from "next";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const TITLE = "Informativa privacy";
const DESCRIPTION =
  "Informativa privacy di dynamicsconsulting.it — come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali ai sensi del GDPR e dell’AI Act europeo.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/it/privacy"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.dynamicsconsulting.it/it/privacy",
    type: "website",
    locale: "it_IT",
  },
};

export default function PrivacyItPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen py-24 px-6">
        <article className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-syne prose-headings:text-[#E6EDF3] prose-p:text-[#7D8FA3] prose-li:text-[#7D8FA3] prose-strong:text-[#E6EDF3] prose-a:text-[#00B4D8] prose-a:underline hover:prose-a:text-[#E6EDF3]">
          <h1>Informativa privacy</h1>
          <p className="lead text-[#7D8FA3]">
            Ultimo aggiornamento: 9 marzo 2026 · Versione 2026-03-09-v2
          </p>

          {/* ── 1. DATA CONTROLLER ─────────────────────────────── */}
          <h2>1. Titolare del trattamento</h2>
          <p>
            Dynamics Consulting di Corrado Patierno (&quot;noi&quot;) è titolare del
            trattamento ai sensi dell’articolo 4, punto 7, del Regolamento (UE)
            2016/679 (GDPR).
          </p>
          <ul>
            <li>Sede legale: Via Torino 2, 20123 Milano, Italia</li>
            <li>Partita IVA: IT 10651160961</li>
            <li>
              Contatto per la protezione dei dati:{" "}
              <a href="mailto:privacy@dynamicsconsulting.it">
                privacy@dynamicsconsulting.it
              </a>
            </li>
          </ul>

          {/* ── 2. DATA WE COLLECT ─────────────────────────────── */}
          <h2>2. Dati personali raccolti</h2>

          <h3>2.1 Modulo di contatto</h3>
          <p>
            Quando invii il modulo di contatto raccogliamo: nome, indirizzo email,
            nome dell’azienda (facoltativo), tipo di progetto (facoltativo), canale
            attraverso cui ci hai conosciuto (facoltativo) e contenuto del
            messaggio. Questi dati sono trattati{" "}
            <strong>al solo fine di rispondere alla tua richiesta</strong>.
          </p>

          <h3>2.2 Statistiche del sito</h3>
          <p>
            Se attivi la preferenza &quot;Analytics&quot; nel banner del consenso,
            raccogliamo statistiche di visita anonime e aggregate (URL delle pagine,
            sito di provenienza, tipo di dispositivo, paese). Per questa finalità
            non viene impostato alcun cookie e nessun singolo utente viene
            identificato o tracciato.
          </p>

          <h3>2.3 Assistente AI (chatbot)</h3>
          <p>
            Questo sito può includere un assistente conversazionale basato
            sull’intelligenza artificiale. Ai sensi dell’
            <strong>articolo 50, paragrafo 1, dell’AI Act (Regolamento (UE) 2024/1689)</strong>
            , ti informiamo che:
          </p>
          <ul>
            <li>
              Il chatbot è un <strong>sistema di intelligenza artificiale</strong>, non
              un essere umano. Funziona da assistente digitale che fornisce
              informazioni sui nostri servizi e sulle nostre competenze.
            </li>
            <li>
              L’assistente gira sulla nostra infrastruttura: il retrieval,
              l’identità e il registro di audit restano lì. Solo la generazione
              della risposta finale chiama un endpoint di inferenza esterno,{" "}
              <strong>situato nell’Unione Europea</strong>, e quel componente è
              sostituibile. Il tuo messaggio e il contesto assemblato per
              elaborarlo vengono inviati a quell’endpoint per produrre la risposta.
            </li>
            <li>
              I messaggi sono elaborati in tempo reale e{" "}
              <strong>non vengono usati per addestrare né per affinare</strong> alcun
              modello di AI.
            </li>
            <li>
              I dati delle conversazioni sono conservati per un massimo di 90 giorni
              a fini di controllo qualità, poi cancellati definitivamente.
            </li>
            <li>
              L’assistente AI si attiva solo se abiliti esplicitamente la categoria
              &quot;Assistente AI&quot; nel banner del consenso.
            </li>
          </ul>

          <h3>2.4 Cookie e archiviazione locale</h3>
          <p>Utilizziamo la seguente archiviazione lato client:</p>
          <div className="overflow-x-auto -mx-2 px-2"><table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Finalità</th>
                <th>Durata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>dc_privacy_consent</code></td>
                <td>localStorage</td>
                <td>
                  Memorizza le tue preferenze di consenso (categorie accettate,
                  versione, data e ora)
                </td>
                <td>Fino alla cancellazione da parte tua o all’aggiornamento della versione dell’informativa</td>
              </tr>
            </tbody>
          </table></div>
          <p>
            Non utilizziamo cookie di tracciamento, cookie pubblicitari né cookie
            di profilazione di terze parti.
          </p>

          {/* ── 3. LEGAL BASIS ──────────────────────────────────── */}
          <h2>3. Base giuridica del trattamento</h2>
          <div className="overflow-x-auto -mx-2 px-2"><table>
            <thead>
              <tr>
                <th>Attività di trattamento</th>
                <th>Base giuridica (GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Invio del modulo di contatto</td>
                <td>
                  Consenso esplicito — art. 6, par. 1, lett. a). Presti il consenso
                  selezionando la casella obbligatoria prima dell’invio.
                </td>
              </tr>
              <tr>
                <td>Statistiche</td>
                <td>
                  Consenso — art. 6, par. 1, lett. a). Facoltativo, gestito tramite
                  l’interruttore nel banner.
                </td>
              </tr>
              <tr>
                <td>Conversazioni con l’assistente AI</td>
                <td>
                  Consenso — art. 6, par. 1, lett. a). Facoltativo, gestito tramite
                  l’interruttore nel banner.
                </td>
              </tr>
              <tr>
                <td>Cookie essenziali / registro del consenso</td>
                <td>
                  Legittimo interesse — art. 6, par. 1, lett. f). Strettamente
                  necessario al funzionamento del sito e a documentare il rispetto
                  degli obblighi del GDPR.
                </td>
              </tr>
            </tbody>
          </table></div>

          {/* ── 4. CONSENT MECHANISM ──────────────────────────── */}
          <h2>4. Meccanismo e registrazione del consenso</h2>
          <p>
            Alla prima visita viene mostrato un banner del consenso. Puoi scegliere:
          </p>
          <ul>
            <li>
              <strong>Accetta tutto</strong> — attiva le statistiche e l’assistente AI.
            </li>
            <li>
              <strong>Solo essenziali</strong> — non viene attivato alcun trattamento
              facoltativo.
            </li>
            <li>
              <strong>Gestisci preferenze</strong> — scegli le singole categorie
              (Analytics, Assistente AI) con interruttori dedicati.
            </li>
          </ul>
          <p>
            Ogni scelta viene registrata nell’archiviazione locale del tuo browser
            con data e ora, versione del consenso e categorie selezionate. Questa
            registrazione costituisce prova del consenso ai sensi dell’art. 7,
            par. 1, GDPR. Puoi modificare le tue preferenze in qualsiasi momento
            cancellando i dati del browser: il banner verrà mostrato di nuovo.
          </p>

          <h3>4.1 Revoca del consenso</h3>
          <p>
            Puoi revocare il consenso in qualsiasi momento:
          </p>
          <ul>
            <li>cancellando l’archiviazione locale del browser (il banner verrà mostrato di nuovo);</li>
            <li>
              scrivendo a{" "}
              <a href="mailto:privacy@dynamicsconsulting.it">
                privacy@dynamicsconsulting.it
              </a>
              .
            </li>
          </ul>
          <p>
            La revoca non pregiudica la liceità del trattamento effettuato prima
            della revoca stessa (art. 7, par. 3, GDPR).
          </p>

          {/* ── 5. DATA RETENTION ──────────────────────────────── */}
          <h2>5. Conservazione dei dati</h2>
          <div className="overflow-x-auto -mx-2 px-2"><table>
            <thead>
              <tr>
                <th>Categoria di dati</th>
                <th>Periodo di conservazione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Richieste inviate tramite modulo di contatto</td>
                <td>
                  24 mesi dall’invio, poi cancellate salvo che sia stato instaurato
                  un rapporto commerciale
                </td>
              </tr>
              <tr>
                <td>Conversazioni con l’assistente AI</td>
                <td>90 giorni, poi cancellate definitivamente</td>
              </tr>
              <tr>
                <td>Dati statistici</td>
                <td>Aggregati e anonimi — non è applicabile la cancellazione individuale</td>
              </tr>
              <tr>
                <td>Registro del consenso (archiviazione locale)</td>
                <td>
                  Fino alla cancellazione dei dati del browser o alla pubblicazione
                  di una nuova versione dell’informativa
                </td>
              </tr>
            </tbody>
          </table></div>

          {/* ── 6. DATA SHARING & PROCESSORS ───────────────────── */}
          <h2>6. Comunicazione dei dati e sub-responsabili</h2>
          <p>
            Non vendiamo, non cediamo in locazione e non scambiamo i tuoi dati
            personali. I dati sono comunicati solo alle seguenti categorie di
            responsabili del trattamento, tutti vincolati da accordi sul
            trattamento dei dati (Data Processing Agreement, DPA):
          </p>
          <div className="overflow-x-auto -mx-2 px-2"><table>
            <thead>
              <tr>
                <th>Categoria di responsabile</th>
                <th>Finalità</th>
                <th>Ubicazione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Invio email (Resend)</td>
                <td>Invio delle email di notifica del modulo di contatto</td>
                <td>USA (vedi sezione 7)</td>
              </tr>
              <tr>
                <td>Hosting cloud (Vercel)</td>
                <td>Infrastruttura del sito e distribuzione edge</td>
                <td>UE / USA (vedi sezione 7)</td>
              </tr>
              <tr>
                <td>Endpoint di inferenza AI</td>
                <td>Generazione delle risposte dell’assistente AI</td>
                <td>Unione Europea</td>
              </tr>
            </tbody>
          </table></div>

          {/* ── 7. INTERNATIONAL TRANSFERS ──────────────────────── */}
          <h2>7. Trasferimenti internazionali di dati</h2>
          <p>
            Alcuni dei nostri sub-responsabili hanno sede negli Stati Uniti — invio
            email e hosting del sito, come indicato nella sezione 6. La generazione
            delle risposte dell’assistente AI non è tra questi: avviene su un
            endpoint di inferenza nell’Unione Europea. Quando un trasferimento
            verso gli Stati Uniti ha luogo, è tutelato da:
          </p>
          <ul>
            <li>
              l’<strong>EU–US Data Privacy Framework</strong> (decisione di
              adeguatezza C(2023) 4745), quando il responsabile è un partecipante
              certificato; oppure
            </li>
            <li>
              <strong>Clausole contrattuali standard</strong> (SCC) approvate con
              decisione della Commissione 2021/914, integrate da una valutazione
              d’impatto sul trasferimento (Transfer Impact Assessment) ove
              richiesta.
            </li>
          </ul>
          <p>
            Puoi richiedere copia delle garanzie applicabili scrivendo a{" "}
            <a href="mailto:privacy@dynamicsconsulting.it">
              privacy@dynamicsconsulting.it
            </a>
            .
          </p>

          {/* ── 8. AUTOMATED DECISION-MAKING & AI ─────────────── */}
          <h2>8. Processi decisionali automatizzati e trasparenza dell’AI</h2>

          <h3>8.1 GDPR — articolo 22</h3>
          <p>
            Non ti sottoponiamo a decisioni basate unicamente su un trattamento
            automatizzato che producano effetti giuridici che ti riguardano o che
            incidano in modo analogo significativamente sulla tua persona.
            L’assistente AI fornisce solo risposte informative e non prende
            decisioni su contratti, prezzi o requisiti di ammissibilità.
          </p>

          <h3>8.2 AI Act — obblighi di trasparenza dell’articolo 50</h3>
          <p>
            Ai sensi del Regolamento (UE) 2024/1689 (AI Act), ti rendiamo noto
            quanto segue:
          </p>
          <ul>
            <li>
              <strong>Natura del sistema:</strong> l’assistente AI è un sistema
              conversazionale di intelligenza artificiale che genera risposte
              testuali tramite un modello linguistico di grandi dimensioni (LLM).
            </li>
            <li>
              <strong>Fornitore:</strong> il modello sottostante è fornito da un
              fornitore terzo di modelli di AI. Non sviluppiamo né addestriamo il
              modello di base.
            </li>
            <li>
              <strong>Capacità e limiti:</strong> l’assistente fornisce
              informazioni generali sui nostri servizi e sulle nostre competenze
              tecnologiche. Può produrre risposte inesatte o incomplete. Non
              sostituisce una consulenza professionale.
            </li>
            <li>
              <strong>Supervisione umana:</strong> le decisioni rilevanti (proposte,
              contratti, architetture tecniche) sono sempre prese da un
              professionista umano — Corrado Patierno o il suo team.
            </li>
            <li>
              <strong>Identificazione:</strong> il chatbot si identifica
              chiaramente come sistema di AI in ogni interazione e non si spaccia
              mai per un essere umano.
            </li>
            <li>
              <strong>Trattamento dei dati:</strong> i messaggi delle conversazioni
              sono elaborati in tempo reale per generare le risposte e non vengono
              usati per addestrare o migliorare alcun modello di AI. Per i tempi di
              conservazione vedi la sezione 2.3.
            </li>
          </ul>

          {/* ── 9. YOUR RIGHTS ──────────────────────────────────── */}
          <h2>9. I tuoi diritti ai sensi del GDPR</h2>
          <p>Riguardo ai tuoi dati personali hai i seguenti diritti:</p>
          <ul>
            <li>
              <strong>Accesso</strong> (art. 15) — ottenere copia dei dati che
              conserviamo su di te
            </li>
            <li>
              <strong>Rettifica</strong> (art. 16) — correggere dati inesatti
            </li>
            <li>
              <strong>Cancellazione</strong> (art. 17) — chiedere la cancellazione
              (&quot;diritto all’oblio&quot;)
            </li>
            <li>
              <strong>Limitazione</strong> (art. 18) — limitare il trattamento dei
              tuoi dati finché una contestazione è in corso di definizione
            </li>
            <li>
              <strong>Portabilità dei dati</strong> (art. 20) — ricevere i tuoi dati
              in un formato strutturato e leggibile da dispositivo automatico
            </li>
            <li>
              <strong>Opposizione</strong> (art. 21) — opporti al trattamento basato
              sul legittimo interesse
            </li>
            <li>
              <strong>Revoca del consenso</strong> (art. 7, par. 3) — in qualsiasi
              momento, come descritto nella sezione 4.1
            </li>
          </ul>
          <p>
            Per esercitare uno qualsiasi di questi diritti scrivi a{" "}
            <a href="mailto:privacy@dynamicsconsulting.it">
              privacy@dynamicsconsulting.it
            </a>
            . Risponderemo entro <strong>30 giorni</strong> (prorogabili di 60
            giorni per le richieste complesse, previa comunicazione).
          </p>

          {/* ── 10. SUPERVISORY AUTHORITY ───────────────────────── */}
          <h2>10. Autorità di controllo</h2>
          <p>
            Se ritieni che i tuoi diritti in materia di protezione dei dati siano
            stati violati, hai il diritto di proporre reclamo a:
          </p>
          <ul>
            <li>
              <strong>Garante per la protezione dei dati personali</strong>
              <br />
              Piazza Venezia 11, 00187 Roma, Italia
              <br />
              Sito web:{" "}
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.garanteprivacy.it
              </a>
              <br />
              Email: protocollo@gpdp.it · PEC: protocollo@pec.gpdp.it
            </li>
          </ul>

          {/* ── 11. SECURITY MEASURES ──────────────────────────── */}
          <h2>11. Misure di sicurezza</h2>
          <p>
            Adottiamo misure tecniche e organizzative adeguate a proteggere i dati
            personali, tra cui:
          </p>
          <ul>
            <li>cifratura HTTPS/TLS per tutti i dati in transito;</li>
            <li>controlli di accesso e autenticazione su tutti i sistemi di backend;</li>
            <li>aggiornamenti di sicurezza regolari e verifica delle dipendenze;</li>
            <li>raccolta limitata ai dati necessari (principio di minimizzazione dei dati).</li>
          </ul>

          {/* ── 12. CHILDREN ───────────────────────────────────── */}
          <h2>12. Tutela dei minori</h2>
          <p>
            Questo sito e i relativi servizi sono destinati a professionisti. Non
            raccogliamo consapevolmente dati personali di persone di età inferiore
            ai 16 anni. Se ritieni che abbiamo raccolto dati di un minore,
            contattaci immediatamente.
          </p>

          {/* ── 13. CHANGES ────────────────────────────────────── */}
          <h2>13. Modifiche alla presente informativa</h2>
          <p>
            Possiamo aggiornare questa informativa periodicamente. Quando lo
            facciamo, aggiorniamo il numero di versione e la data di &quot;ultimo
            aggiornamento&quot; in cima alla pagina. Se cambia la versione del
            consenso, il banner privacy viene mostrato di nuovo automaticamente per
            raccogliere il tuo consenso aggiornato. Le modifiche sostanziali sono
            inoltre comunicate via email ai contatti esistenti.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
