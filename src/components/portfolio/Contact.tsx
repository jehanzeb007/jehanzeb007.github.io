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
              <a href="tel:+923317634123" className="flex items-center gap-3 glass rounded-xl px-4 py-3 hover:bg-white/10 transition">
                <Phone className="h-4 w-4 text-cyan" /><span className="text-sm">+92 331 7634123 (Pakistan)</span>
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
