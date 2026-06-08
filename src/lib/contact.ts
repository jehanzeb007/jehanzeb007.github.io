import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

const CONTACT_EMAIL = "jehanzebsherali@gmail.com";

export async function sendContactMessage(data: ContactFormData) {
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      company: data.company || "—",
      budget: data.budget || "—",
      message: data.message,
      _subject: `New Portfolio Inquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message. Please email me directly.");
  }

  const result = (await response.json()) as { success?: string };
  if (result.success !== "true") {
    throw new Error("Failed to send message. Please email me directly.");
  }

  return { ok: true as const };
}
