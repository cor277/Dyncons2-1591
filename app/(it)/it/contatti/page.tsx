"use client";
import { useState } from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-[#30363D] bg-[#161B22] text-[#E6EDF3] placeholder-[#7D8FA3] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition";

const labelClass = "block text-sm font-semibold text-[#E6EDF3] mb-1.5";

/* Option values stay in English: they are what /api/contact puts in the
   notification email, whichever language the form was filled in. */
const PROJECT_TYPES: [value: string, label: string][] = [
  ["Applied AI", "AI applicata"],
  ["Cloud / Kubernetes", "Cloud / Kubernetes"],
  ["Data Platform", "Data platform"],
  ["Microsoft / Dynamics 365", "Microsoft / Dynamics 365"],
  ["Automation", "Automazione"],
  ["Blockchain", "Blockchain"],
  ["Nexus MDS Core", "Nexus MDS Core"],
  ["Other", "Altro"],
];

const SOURCES: [value: string, label: string][] = [
  ["LinkedIn", "LinkedIn"],
  ["Google", "Google"],
  ["Word of mouth", "Passaparola"],
  ["Other", "Altro"],
];

export default function ContattiPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    source: "",
    message: "",
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          privacyConsent,
          consentTimestamp: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", projectType: "", source: "", message: "" });
        setPrivacyConsent(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Contatti
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Parliamo del tuo progetto
            </h1>
            <p className="text-lg text-[#7D8FA3] max-w-xl mx-auto">
              Che tu abbia un brief già definito o un problema da risolvere, sono disponibile a
              esplorare insieme le possibilità. Nessun impegno, nessuna pressione commerciale.
            </p>
          </div>
        </section>

        {/* Contact layout */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
            {/* Left — info */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-6">Scrivimi</h2>
              <p className="text-[#7D8FA3] leading-relaxed mb-10">
                Compila il modulo e ti rispondo entro un giorno lavorativo. Per le urgenze puoi
                anche contattarmi direttamente ai recapiti qui sotto.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00B4D8]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#00B4D8]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#E6EDF3] text-sm mb-1">Email</div>
                    <a
                      href="mailto:info@dynamicsconsulting.it"
                      className="text-[#00B4D8] hover:underline text-sm"
                    >
                      info@dynamicsconsulting.it
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00B4D8]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#00B4D8]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#E6EDF3] text-sm mb-1">Telefono</div>
                    <a
                      href="tel:+393407253246"
                      className="text-[#00B4D8] hover:underline text-sm"
                    >
                      +39 3407253246
                    </a>
                    <p className="text-[#7D8FA3] text-xs mt-1">
                      Meglio SMS o WhatsApp — evito le chiamate a freddo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {status === "success" ? (
                <div className="rounded-2xl bg-[#00B4D8]/10 border border-[#00B4D8]/30 p-10 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-[#E6EDF3] mb-2">Messaggio inviato!</h3>
                  <p className="text-[#7D8FA3]">
                    Grazie per avermi scritto. Ti rispondo entro un giorno lavorativo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        Nome <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Il tuo nome"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="nome@azienda.it"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Azienda</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Nome dell’azienda"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Tipo di progetto</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">— seleziona —</option>
                      {PROJECT_TYPES.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Come hai conosciuto Dynamics Consulting</label>
                    <select
                      name="source"
                      value={form.source}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">— seleziona —</option>
                      {SOURCES.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Messaggio <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Raccontami il progetto o il problema che vuoi affrontare..."
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  {/* GDPR consent checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      checked={privacyConsent}
                      onChange={(e) => setPrivacyConsent(e.target.checked)}
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded border-[#30363D] bg-[#161B22] text-[#00B4D8] focus:ring-[#00B4D8] focus:ring-offset-0 accent-[#00B4D8] cursor-pointer"
                    />
                    <label htmlFor="privacyConsent" className="text-xs text-[#7D8FA3] leading-relaxed cursor-pointer select-none">
                      Ho letto e accetto l’{" "}
                      <a href="/it/privacy" target="_blank" rel="noopener noreferrer" className="underline text-[#00B4D8] hover:text-[#E6EDF3]">
                        Informativa privacy
                      </a>{" "}
                      (art. 6, par. 1, lett. a) GDPR). Acconsento al trattamento dei miei dati
                      personali (nome, email, azienda, contenuto del messaggio) al solo fine di
                      rispondere alla mia richiesta. I dati sono conservati per 24 mesi e possono
                      essere comunicati ai sub-responsabili del trattamento indicati
                      nell’informativa. So di poter revocare il consenso in qualsiasi momento
                      scrivendo a{" "}
                      <a href="mailto:privacy@dynamicsconsulting.it" className="underline text-[#00B4D8] hover:text-[#E6EDF3]">
                        privacy@dynamicsconsulting.it
                      </a>
                      , senza pregiudicare la liceità del trattamento basata sul consenso prestato
                      prima della revoca.
                      <span className="text-red-500"> *</span>
                    </label>
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Qualcosa è andato storto. Riprova oppure scrivimi direttamente via email.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading" || !privacyConsent}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 bg-[#00B4D8] text-[#0D1117] hover:bg-[#00C8F0] shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Invio in corso…" : "Invia messaggio"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
