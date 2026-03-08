import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Dynamics Consulting Website <noreply@dynamicsconsulting.it>",
      to: ["info@dynamicsconsulting.it"],
      reply_to: email,
      subject: `New contact form message from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0f172a; margin-bottom: 24px;">New contact form submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569; width: 120px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${email}" style="color: #0891b2;">${email}</a></td>
            </tr>
            ${
              company
                ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${company}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #475569; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #0f172a; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #94a3b8; font-size: 12px;">
            Sent from dynamicsconsulting.it contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
