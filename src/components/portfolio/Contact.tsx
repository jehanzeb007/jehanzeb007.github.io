import { motion } from "motion/react";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, Linkedin, Phone, Send, Briefcase, MapPin } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { sendContactMessage } from "@/lib/contact.functions";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);
  const send = useServerFn(sendContactMessage);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      await send({ data: result.data });
      toast.success("Message sent! I'll get back to you within 24 hours.");
      form.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-primary opacity-20 blur-[140px] rounded-full -z-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan">Contact</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
              Let's build something <span className="text-gradient">exceptional</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell me about your project — SaaS, AI, payments or enterprise.
              I usually respond within 24 hours.
            </p>

            <div className="mt-8 space-y-3">
              <a href="mailto:jehanzebsherali@gmail.com" className="flex items-center gap-3 glass rounded-xl px-4 py-3 hover:bg-white/10 transition">
                <Mail className="h-4 w-4 text-cyan" /><span className="text-sm">jehanzebsherali@gmail.com</span>
              </a>
              <a href="tel:+601153376898" className="flex items-center gap-3 glass rounded-xl px-4 py-3 hover:bg-white/10 transition">
                <Phone className="h-4 w-4 text-cyan" /><span className="text-sm">+60 11 5337 6898 (Malaysia)</span>
              </a>
              <a href="https://wa.me/923317634125" target="_blank" className="flex items-center gap-3 glass rounded-xl px-4 py-3 hover:bg-white/10 transition">
                <svg width="20px" height="20px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"/>
<path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"/>
<path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
<stop stop-color="#5BD066"/>
<stop offset="1" stop-color="#27B43E"/>
</linearGradient>
</defs>
</svg>
               <span className="text-sm">+92 331 7634125 (Pakistan)</span>
              </a>
              <a href="https://www.upwork.com/freelancers/~01b3c39443e0b4a6fe" target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-xl px-4 py-3 hover:bg-white/10 transition">
                <Briefcase className="h-4 w-4 text-cyan" /><span className="text-sm">Upwork · Top Rated Plus</span>
              </a>
              <a href="https://www.linkedin.com/in/jehanzeb-ali/" target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-xl px-4 py-3 hover:bg-white/10 transition">
                <Linkedin className="h-4 w-4 text-cyan" /><span className="text-sm">LinkedIn</span>
              </a>
              <div className="flex items-start gap-3 glass rounded-xl px-4 py-3">
                <MapPin className="h-4 w-4 text-cyan mt-0.5" />
                <span className="text-sm">6 Capsquare, Jln Munshi Abdullah, Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 shadow-card space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Name" placeholder="Your name" required />
              <Field name="email" label="Email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="company" label="Company" placeholder="Optional" />
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-muted-foreground">Project Budget</label>
                <select name="budget" className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none focus:border-cyan/50 [&>option]:bg-background">
                  <option value="">Select range</option>
                  <option>$5k – $15k</option>
                  <option>$15k – $50k</option>
                  <option>$50k – $150k</option>
                  <option>$150k+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project, goals and timeline…"
                className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none focus:border-cyan/50 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition disabled:opacity-60"
            >
              <Send className="h-4 w-4" /> {loading ? "Sending…" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold mb-1.5 text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none focus:border-cyan/50"
      />
    </div>
  );
}
