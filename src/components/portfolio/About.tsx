import { motion } from "motion/react";
import portrait from "@/assets/portrait.jpg";
import { CheckCircle2 } from "lucide-react";

const points = [
  "13+ years building production software for global clients",
  "Expert in PHP, Laravel, CodeIgniter, Node.js, React & Vue",
  "Architected multi-tenant SaaS platforms from zero to scale",
  "Integrated AI (OpenAI, Claude, Gemini) into real businesses",
  "Shipped Stripe, PayPal & custom payment integrations",
  "Led and mentored cross-functional engineering teams",
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
            <div className="relative glass-strong rounded-3xl p-2 shadow-card">
              <img
                src={portrait}
                alt="Jehanzeb Ali"
                width={1024}
                height={1024}
                loading="lazy"
                className="rounded-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl px-5 py-4 shadow-card">
              <div className="text-3xl font-bold text-gradient">13+</div>
              <div className="text-xs text-muted-foreground">Years Building</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan">About Me</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
              Engineering software that <span className="text-gradient">scales globally</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I'm Jehanzeb Ali — a Senior Full Stack Developer and AI Solutions
              Architect with over 13 years of hands-on experience designing,
              building, and scaling production systems. From SaaS platforms
              handling millions of transactions to AI agents automating entire
              business workflows, I help founders and enterprises turn complex
              problems into elegant, reliable software.
            </p>
            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
