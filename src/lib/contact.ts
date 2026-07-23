import { sendContactMessageFn } from "@/lib/api/contact.functions";

export { contactFormSchema, type ContactFormData } from "./contact.schema";
import type { ContactFormData } from "./contact.schema";

export async function sendContactMessage(data: ContactFormData) {
  try {
    await sendContactMessageFn({ data });
  } catch {
    throw new Error("Failed to send message. Please email me directly.");
  }

  return { ok: true as const };
}
