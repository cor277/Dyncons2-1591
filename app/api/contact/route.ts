import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, projectType, source, message, privacyConsent, consentTimestamp } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    if (!privacyConsent) {
      return NextResponse.json({ error: "Privacy consent is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Dynamics Consulting Website <onboarding@resend.dev>",
      to: ["info@dynamicsconsulting.it"],
      reply_to: email,
      subject: `New contact from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0f172a; margin-bottom: 24px;">New message from the contact form</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569; width: 160px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${email}" style="color: #0891b2;">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${company}</td>
            </tr>` : ""}
            ${projectType ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Project type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${projectType}</td>
            </tr>` : ""}
            ${source ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">How they found us</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${source}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #475569; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #0f172a; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px 0; font-weight: 600; color: #475569; font-size: 12px;">GDPR Consent Record (Art. 7(1))</p>
            <p style="margin: 0; color: #64748b; font-size: 12px;">Explicit consent given: Yes (checkbox)</p>
            <p style="margin: 0; color: #64748b; font-size: 12px;">Legal basis: Art. 6(1)(a) GDPR</p>
            <p style="margin: 0; color: #64748b; font-size: 12px;">Consent timestamp: ${consentTimestamp || new Date().toISOString()}</p>
            <p style="margin: 0; color: #64748b; font-size: 12px;">Policy version: 2026-03-09-v2</p>
            <p style="margin: 0; color: #64748b; font-size: 12px;">Purpose: Responding to contact enquiry</p>
            <p style="margin: 0; color: #64748b; font-size: 12px;">Retention: 24 months</p>
          </div>
          <p style="margin-top: 12px; color: #94a3b8; font-size: 12px;">
            Sent from the contact form at dynamicsconsulting.it
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
