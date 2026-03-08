"use client";

import { useState } from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        setForm({ name: "", email: "", company: "", message: "" });
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
      <main className="bg-white dark:bg-slate-950 min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Let&apos;s talk about your project
            </h1>
            <p className="text-lg text-slate-300 max-w-xl mx-auto">
              Whether you have a clear brief or just a problem to solve, we are happy to explore
              what&apos;s possible. No commitment, no sales pressure.
            </p>
          </div>
        </section>

        {/* Contact layout */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
            {/* Left — info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Get in touch
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                Fill in the form and we will respond within one business day. For urgent enquiries
                you can also reach us directly at the contact details below.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:info@dynamicsconsulting.it"
                      className="text-cyan-600 dark:text-cyan-400 hover:underline text-sm"
                    >
                      info@dynamicsconsulting.it
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                      Office
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Via Torino 2, 20123 Milano, Italy
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:+390200000000"
                      className="text-cyan-600 dark:text-cyan-400 hover:underline text-sm"
                    >
                      +39 02 0000 0000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {status === "success" ? (
                <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-10 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Message sent!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Thank you for getting in touch. We will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Company
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project or challenge..."
                      className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 bg-cyan-500 text-slate-900 hover:bg-cyan-400 shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending…" : "Send message"}
                  </button>
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                    By submitting this form you agree to our{" "}
                    <a href="/privacy" className="underline hover:text-slate-700 dark:hover:text-slate-200">
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
