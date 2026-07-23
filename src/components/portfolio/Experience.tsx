import { motion } from "motion/react";

const timeline = [
  { year: "2023–Now", title: "CEO & Technical Lead", org: "Dev & Design", desc: "Founded and scaled Dev & Design, delivering AI solutions, SaaS platforms and enterprise engineering for global clients while operating as a Top Rated Plus freelancer." },
  { year: "2021–2024", title: "Senior Full Stack Engineer & Tech Lead", org: "Multiple SaaS Companies", desc: "Led teams building multi-tenant SaaS, payments and analytics platforms scaling to millions of users." },
  { year: "2017–2021", title: "Full Stack Developer", org: "Agency & Product Work", desc: "Shipped Laravel, Node.js, Vue and React applications, marketplaces and integrations across industries." },
  { year: "2014–2017", title: "Backend Developer", org: "Web Studios", desc: "Built PHP / CodeIgniter / Laravel applications, payment integrations and REST APIs for international clients." },
  { year: "2012–2014", title: "Junior Developer", org: "Software House", desc: "Started journey in PHP & MySQL — learned the craft of production engineering and clean architecture." },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan">Experience</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            A <span className="text-gradient">13-year</span> engineering journey
          </h2>
        </div>

        <div className="mt-16 max-w-3xl mx-auto relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan/40 to-transparent" />
          {timeline.map((t, idx) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative mb-8 sm:flex sm:items-center ${idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
            >
              <div className="sm:w-1/2 sm:px-8">
                <div className="glass-strong rounded-2xl p-6 shadow-card ml-12 sm:ml-0">
                  <div className="text-xs font-semibold text-cyan">{t.year}</div>
                  <h3 className="mt-1 text-lg font-bold">{t.title}</h3>
                  <div className="text-sm text-muted-foreground">{t.org}</div>
                  <p className="mt-3 text-sm text-foreground/80">{t.desc}</p>
                </div>
              </div>
              <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 sm:top-1/2 sm:-translate-y-1/2">
                <div className="h-4 w-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
