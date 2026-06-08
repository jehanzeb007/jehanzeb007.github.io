import { motion } from "motion/react";
import { Server, Layout, Database, Cloud, Brain } from "lucide-react";

const groups = [
  { icon: Server, title: "Backend", items: ["PHP", "Laravel", "CodeIgniter", "Node.js", "Express.js", "REST APIs", "Microservices"] },
  { icon: Layout, title: "Frontend", items: ["React.js", "Vue.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap"] },
  { icon: Database, title: "Database", items: ["MySQL", "PostgreSQL", "Redis", "MongoDB"] },
  { icon: Cloud, title: "Cloud & DevOps", items: ["Ubuntu", "AWS", "Docker", "Nginx", "Apache", "CI/CD"] },
  { icon: Brain, title: "AI & Automation", items: ["OpenAI", "Claude", "Gemini", "LangChain", "Vector DBs", "AI Agents"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan">Technical Skills</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            A modern, <span className="text-gradient">battle-tested stack</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-strong rounded-2xl p-6 shadow-card hover:border-cyan/30 transition"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <g.icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <h3 className="text-lg font-bold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-foreground/80">
                    {i}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
