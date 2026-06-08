import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Linkedin, Phone, Send, Briefcase, MapPin, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { contactFormSchema, sendContactMessage } from "@/lib/contact";

export function Contact() {
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data._honey) return;

    const result = contactFormSchema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      await sendContactMessage(result.data);
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
              <a href="https://www.upwork.com/freelancers/jehanzebs2" target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-xl px-4 py-3 hover:bg-white/10 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439z"></path></svg>
                <span className="text-sm">Upwork · Top Rated Plus</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/jehanzeb-ali" target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-xl px-4 py-3 hover:bg-white/10 transition">
                <Linkedin className="h-4 w-4 text-cyan" /><span className="text-sm">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
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
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
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
