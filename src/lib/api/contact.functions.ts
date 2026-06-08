import { createServerFn } from "@tanstack/react-start";

import { contactFormSchema } from "../contact.schema";
import { sendContactEmail } from "../mail.server";

export const sendContactMessageFn = createServerFn({ method: "POST" })
  .validator(contactFormSchema)
  .handler(async ({ data }) => {
    await sendContactEmail(data);
    return { ok: true as const };
  });
