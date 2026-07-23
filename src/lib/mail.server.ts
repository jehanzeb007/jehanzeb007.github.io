import nodemailer from "nodemailer";

import type { ContactFormData } from "./contact.schema";
import { getSmtpConfig } from "./config.server";

function buildContactEmail(data: ContactFormData, to: string) {
  const company = data.company?.trim() || "—";
  const budget = data.budget?.trim() || "—";
  const subject = `New Portfolio Inquiry — ${data.name}${data.company?.trim() ? ` (${data.company.trim()})` : ""}`;

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

  return {
    to,
    subject,
    text,
    html,
    replyTo: data.email,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendContactEmail(data: ContactFormData) {
  const smtp = getSmtpConfig();
  if (!smtp) {
    throw new Error("Email is not configured. Please try again later.");
  }

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  const mail = buildContactEmail(data, smtp.to);

  await transporter.sendMail({
    from: smtp.from,
    to: mail.to,
    replyTo: mail.replyTo,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  });
}
