import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const items = [
  { quote: "Jehanzeb delivered a complex SaaS rewrite ahead of schedule. His architectural decisions saved us months down the line.", name: "Sarah Mitchell", role: "CTO, FinOps SaaS · USA" },
  { quote: "Best AI engineer we've worked with. Our support automation went live in 6 weeks and cut tickets by 70%.", name: "Daniel Okafor", role: "Founder, SupportAI · UK" },
  { quote: "Top-rated for a reason. Communication, code quality, and ownership are all elite. We re-hire on every project.", name: "Anna Schmidt", role: "Product Lead, B2B Marketplace · DE" },
  { quote: "Implemented Stripe + custom payouts across 14 countries flawlessly. No drama, just results.", name: "Carlos Ramirez", role: "COO, Payments Startup · ES" },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            Trusted by <span className="text-gradient">founders & teams</span> worldwide
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((t, idx) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-strong rounded-3xl p-8 shadow-card relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-cyan/30" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-cyan text-cyan" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
