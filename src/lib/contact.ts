export { contactFormSchema, type ContactFormData } from "./contact.schema";
import type { ContactFormData } from "./contact.schema";

function getContactFunctionUrl() {
  const base = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
  if (!base) return null;
  return `${base}/functions/v1/send-contact`;
}

export async function sendContactMessage(data: ContactFormData) {
  const url = getContactFunctionUrl();
  const apiKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !apiKey) {
    throw new Error("Contact form is not configured. Please email me directly.");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let message = "Failed to send message. Please email me directly.";
    try {
      const result = (await response.json()) as { error?: string };
      if (result.error) message = result.error;
    } catch {
      // ignore parse errors
    }
    throw new Error(message);
  }

  return { ok: true as const };
}
