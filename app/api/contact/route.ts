import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");

  try {
    const { name, email, company, projectType, source, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Indirizzo email non valido" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Dynamics Consulting Website <onboarding@resend.dev>",
      to: ["info@dynamicsconsulting.it"],
      reply_to: email,
      subject: `Nuovo contatto da ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0f172a; margin-bottom: 24px;">Nuovo messaggio dal form di contatto</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569; width: 160px;">Nome</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${email}" style="color: #0891b2;">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Azienda</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${company}</td>
            </tr>` : ""}
            ${projectType ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Tipo di progetto</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${projectType}</td>
            </tr>` : ""}
            ${source ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Come ha trovato</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${source}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #475569; vertical-align: top;">Messaggio</td>
              <td style="padding: 10px 0; color: #0f172a; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #94a3b8; font-size: 12px;">
            Inviato dal form di contatto di dynamicsconsulting.it
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Invio email fallito" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Errore interno del server" }, { status: 500 });
  }
}
