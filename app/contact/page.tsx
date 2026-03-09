"use client";
import { useState } from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-[#30363D] bg-[#161B22] text-[#E6EDF3] placeholder-[#7D8FA3] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition";

const labelClass = "block text-sm font-semibold text-[#E6EDF3] mb-1.5";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    source: "",
    message: "",
  });
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
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", projectType: "", source: "", message: "" });
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
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Let&apos;s talk about your project
            </h1>
            <p className="text-lg text-[#7D8FA3] max-w-xl mx-auto">
              Whether you have a defined brief or a problem to solve, I&apos;m available to
              explore possibilities together. No commitment, no sales pressure.
            </p>
          </div>
        </section>

        {/* Contact layout */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
            {/* Left — info */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-6">Write to me</h2>
              <p className="text-[#7D8FA3] leading-relaxed mb-10">
                Fill out the form and I&apos;ll reply within one business day. For urgent needs,
                you can also contact me directly using the details below.
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
                    <div className="font-semibold text-[#E6EDF3] text-sm mb-1">Phone</div>
                    <a
                      href="tel:+393407253246"
                      className="text-[#00B4D8] hover:underline text-sm"
                    >
                      +39 3407253246
                    </a>
                    <p className="text-[#7D8FA3] text-xs mt-1">
                      SMS or WhatsApp preferred — I avoid cold calls
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
                  <h3 className="text-xl font-bold text-[#E6EDF3] mb-2">Message sent!</h3>
                  <p className="text-[#7D8FA3]">
                    Thank you for reaching out. I&apos;ll reply within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
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
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Company</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Project type</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">— select —</option>
                      <option value="Applied AI">Applied AI</option>
                      <option value="Cloud / Kubernetes">Cloud / Kubernetes</option>
                      <option value="Data Platform">Data Platform</option>
                      <option value="Microsoft / Dynamics 365">Microsoft / Dynamics 365</option>
                      <option value="Automation">Automation</option>
                      <option value="Blockchain">Blockchain</option>
                      <option value="Nexus MDS Core">Nexus MDS Core</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>How did you find Dynamics Consulting</label>
                    <select
                      name="source"
                      value={form.source}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">— select —</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Google">Google</option>
                      <option value="Word of mouth">Word of mouth</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or the challenge you want to tackle..."
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again or write to me directly via email.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 bg-[#00B4D8] text-[#0D1117] hover:bg-[#00C8F0] shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending…" : "Send message"}
                  </button>

                  <p className="text-xs text-[#7D8FA3] text-center">
                    By submitting this form you accept our{" "}
                    <a href="/privacy" className="underline hover:text-[#E6EDF3]">
                      privacy policy
                    </a>
                    .
                  </p>
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
