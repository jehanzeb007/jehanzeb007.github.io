import nodemailer from "npm:nodemailer@6.9.10";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function parseContactPayload(body: unknown): ContactPayload | string {
  if (!body || typeof body !== "object") return "Invalid request body.";

  const data = body as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const company =
    typeof data.company === "string" ? data.company.trim() : undefined;
  const budget =
    typeof data.budget === "string" ? data.budget.trim() : undefined;

  if (name.length < 2 || name.length > 80) return "Name must be 2–80 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) {
    return "Please enter a valid email address.";
  }
  if (message.length < 10 || message.length > 2000) {
    return "Message must be 10–2000 characters.";
  }
  if (company && company.length > 120) return "Company name is too long.";
  if (budget && budget.length > 40) return "Budget value is too long.";

  return { name, email, company, budget, message };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildEmail(data: ContactPayload, to: string) {
  const company = data.company || "—";
  const budget = data.budget || "—";
  const subject = `New Portfolio Inquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`;

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${company}`,
    `Budget: ${budget}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const html = `
    <h2>New portfolio inquiry</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(data.name)}</td></tr>
      <tr><td><strong>Email</strong></td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>
      <tr><td><strong>Budget</strong></td><td>${escapeHtml(budget)}</td></tr>
    </table>
    <p><strong>Message</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
  `.trim();

  return { to, subject, text, html, replyTo: data.email };
}

function getSmtpConfig() {
  const host = Deno.env.get("SMTP_HOST")?.trim();
  const user = Deno.env.get("SMTP_USER")?.trim();
  const pass = Deno.env.get("SMTP_PASS")?.trim();

  if (!host || !user || !pass) return null;

  const port = Number(Deno.env.get("SMTP_PORT") ?? "587");
  const secureEnv = Deno.env.get("SMTP_SECURE");
  const secure =
    secureEnv === "true" ||
    secureEnv === "1" ||
    (Number.isFinite(port) && port === 465);

  return {
    host,
    port: Number.isFinite(port) ? port : 587,
    secure,
    user,
    pass,
    from: Deno.env.get("SMTP_FROM")?.trim() || user,
    to: Deno.env.get("CONTACT_TO")?.trim() || "jehanzebsherali@gmail.com",
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405);
  }

  const smtp = getSmtpConfig();
  if (!smtp) {
    console.error("SMTP is not configured in Supabase secrets.");
    return jsonResponse(
      { error: "Email is not configured. Please try again later." },
      500,
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body." }, 400);
  }

  const parsed = parseContactPayload(body);
  if (typeof parsed === "string") {
    return jsonResponse({ error: parsed }, 400);
  }

  const mail = buildEmail(parsed, smtp.to);

  const transport = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  try {
    await new Promise<void>((resolve, reject) => {
      transport.sendMail(
        {
          from: smtp.from,
          to: mail.to,
          replyTo: mail.replyTo,
          subject: mail.subject,
          text: mail.text,
          html: mail.html,
        },
        (error) => {
          if (error) reject(error);
          else resolve();
        },
      );
    });
  } catch (error) {
    console.error("SMTP send failed:", error);
    return jsonResponse(
      { error: "Failed to send message. Please email me directly." },
      500,
    );
  }

  return jsonResponse({ ok: true });
});
