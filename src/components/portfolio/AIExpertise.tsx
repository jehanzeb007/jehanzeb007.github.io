import { motion } from "motion/react";
import { Bot, Brain, Database, MessagesSquare, Workflow, Sparkles, LineChart, BookOpen, Zap, Target, ShoppingBag, FileText } from "lucide-react";

const dev = [
  { icon: Bot, label: "OpenAI Integration" },
  { icon: Brain, label: "Claude Integration" },
  { icon: Sparkles, label: "Gemini Integration" },
  { icon: MessagesSquare, label: "AI Chatbots" },
  { icon: Zap, label: "AI Agents" },
  { icon: Workflow, label: "AI Workflows" },
  { icon: BookOpen, label: "RAG Systems" },
  { icon: Database, label: "Vector Databases" },
  { icon: Target, label: "AI Automation" },
];

const biz = [
  { icon: MessagesSquare, label: "Customer Support Automation" },
  { icon: BookOpen, label: "AI Knowledge Bases" },
  { icon: ShoppingBag, label: "AI Sales Assistants" },
  { icon: FileText, label: "AI Content Generation" },
  { icon: LineChart, label: "AI Analytics" },
  { icon: Sparkles, label: "Recommendation Systems" },
];

export function AIExpertise() {
  return (
    <section id="ai" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/20 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-cyan">
            <Brain className="h-3.5 w-3.5" /> AI EXPERTISE
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            From models to <span className="text-gradient">real business outcomes</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            I build AI systems that ship — agents, RAG pipelines, vector search,
            and automation workflows that integrate cleanly into your stack.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <Block title="AI Development" items={dev} accent="blue" />
          <Block title="AI Business Solutions" items={biz} accent="purple" />
        </div>
      </div>
    </section>
  );
}

function Block({ title, items, accent }: { title: string; items: { icon: any; label: string }[]; accent: "blue" | "purple" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-strong rounded-3xl p-7 shadow-card relative overflow-hidden"
    >
      <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-40 ${accent === "blue" ? "bg-blue" : "bg-purple"}`} />
      <h3 className="text-2xl font-bold mb-6 relative">{title}</h3>
      <div className="grid sm:grid-cols-2 gap-3 relative">
        {items.map((i) => (
          <div key={i.label} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition group">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary shadow-glow group-hover:scale-110 transition">
              <i.icon className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="text-sm font-medium">{i.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
