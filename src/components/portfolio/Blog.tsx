import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  { tag: "AI", title: "Shipping Production-Grade AI Agents in 2026", read: "8 min", desc: "Patterns I use to take AI agents from prototype to enterprise reliability." },
  { tag: "Laravel", title: "Laravel for SaaS: My 13-Year Playbook", read: "12 min", desc: "Multi-tenancy, queues, billing, observability — the parts no tutorial teaches." },
  { tag: "Architecture", title: "Designing for 10x Without Over-Engineering", read: "9 min", desc: "A pragmatic framework for scalable systems that don't slow you down today." },
  { tag: "Payments", title: "Bulletproof Stripe Integrations", read: "10 min", desc: "Webhooks, idempotency, reconciliation — lessons from millions of transactions." },
];

export function Blog() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan">Insights</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">From the <span className="text-gradient">field notes</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((p, idx) => (
            <motion.a
              href="#"
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group glass-strong rounded-2xl p-6 shadow-card hover:border-cyan/30 transition flex flex-col"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-gradient-primary px-2.5 py-1 text-primary-foreground font-semibold">{p.tag}</span>
                <span className="text-muted-foreground inline-flex items-center gap-1"><Clock className="h-3 w-3" />{p.read}</span>
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug flex-1 group-hover:text-gradient transition">{p.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{p.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan">
                Read article <ArrowUpRight className="h-3.5 w-3.5 group-hover:rotate-45 transition" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
