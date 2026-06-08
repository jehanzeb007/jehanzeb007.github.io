import { motion } from "motion/react";
import { Code2, Brain, Layers, CreditCard, Compass, Users } from "lucide-react";

const services = [
  { icon: Code2, title: "Full Stack Development", desc: "Custom web applications and SaaS products built end-to-end with modern stacks." },
  { icon: Brain, title: "AI Integration", desc: "Add OpenAI, Claude, Gemini, RAG and AI agents into your existing systems." },
  { icon: Layers, title: "SaaS Development", desc: "Multi-tenant scalable SaaS platforms with billing, roles and analytics." },
  { icon: CreditCard, title: "Payment Integration", desc: "Stripe, PayPal and custom payment workflows — subscriptions, escrow, payouts." },
  { icon: Compass, title: "Technical Consulting", desc: "Architecture reviews, scalability planning and engineering due diligence." },
  { icon: Users, title: "Team Leadership", desc: "Hiring, mentoring and leading remote engineering teams to ship faster." },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan">Services</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            What I can <span className="text-gradient">build for you</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group glass-strong rounded-2xl p-7 shadow-card hover:border-cyan/30 transition relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition" />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
