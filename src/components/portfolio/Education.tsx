import { motion } from "motion/react";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Computer Science",
    school: "University of Sargodha",
    period: "2008 – 2012",
    location: "Sargodha, Pakistan",
    desc: "Completed a comprehensive four-year computer science program covering software engineering, algorithms, databases, and system architecture.",
  },
  {
    icon: BookOpen,
    degree: "Intermediate in Computer Science",
    school: "Punjab Group Of College",
    period: "2008",
    location: "Sargodha, Pakistan",
    desc: "Built a strong foundation in computing, programming fundamentals, and mathematics that shaped my technical career.",
  },
  {
    icon: School,
    degree: "Matriculation",
    school: "Ambala Muslim High School",
    period: "2004 – 2006",
    location: "Sargodha, Pakistan",
    desc: "Early academic foundation in Sargodha, where my interest in science and technology first took shape.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan">Education</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            Academic <span className="text-gradient">background</span>
          </h2>
        </div>

        <div className="mt-16 max-w-3xl mx-auto relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan/40 to-transparent" />
          {education.map((e, idx) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`relative mb-8 sm:flex sm:items-center ${idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
            >
              <div className="sm:w-1/2 sm:px-8">
                <div className="glass-strong rounded-2xl p-6 shadow-card ml-12 sm:ml-0">
                  <div className="text-xs font-semibold text-cyan">{e.period}</div>
                  <h3 className="mt-1 text-lg font-bold">{e.degree}</h3>
                  <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <e.icon className="h-3.5 w-3.5" />
                    {e.school}
                  </div>
                  <div className="text-xs text-muted-foreground/70 mt-1">{e.location}</div>
                  <p className="mt-3 text-sm text-foreground/80">{e.desc}</p>
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
