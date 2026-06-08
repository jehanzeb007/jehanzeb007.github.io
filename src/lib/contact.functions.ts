import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const nodemailer = (await import("nodemailer")).default;

    const host = process.env.SMTP_HOST!;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER!;
    const pass = process.env.SMTP_PASSWORD!;
    const to = process.env.CONTACT_TO_EMAIL || user;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `New Portfolio Inquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`;
    const text = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "—"}`,
      `Budget: ${data.budget || "—"}`,
      "",
      "Message:",
      data.message,
    ].join("\n");

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f7f7fb;border-radius:12px;color:#111">
        <h2 style="margin:0 0 16px">New Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
        <p><strong>Company:</strong> ${escapeHtml(data.company || "—")}</p>
        <p><strong>Budget:</strong> ${escapeHtml(data.budget || "—")}</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${user}>`,
        to,
        replyTo: `"${data.name}" <${data.email}>`,
        subject,
        text,
        html,
      });
      return { ok: true };
    } catch (err) {
      console.error("SMTP send failed", err);
      throw new Error("Failed to send message. Please email me directly.");
    }
  });

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
