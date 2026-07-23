import { motion } from "motion/react";
import { ArrowRight, Download, Contact, FolderGit2, Sparkles, Brain, Layers, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  { icon: Star, label: "13+ Years Experience" },
  { icon: FolderGit2, label: "70+ Projects Delivered" },
  { icon: Sparkles, label: "Top Rated Plus Freelancer" },
  { icon: Brain, label: "AI Integration Expert" },
  { icon: Layers, label: "SaaS Architecture Specialist" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Available for new projects · Remote worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Senior Full Stack Developer
            <br />
            <span className="text-gradient animate-gradient">& AI Solutions Architect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground"
          >
            CEO & Technical Lead of{" "}
            <a
              href="https://devandesign.com"
              target="_blank"
              rel="noreferrer"
              className="text-cyan hover:underline font-medium"
            >
              Dev & Design
            </a>
            . I build scalable SaaS platforms, AI-powered applications, payment systems,
            and enterprise-grade web solutions used by businesses worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform">
              Hire Me <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 glass rounded-xl px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition">
              View Projects
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 glass rounded-xl px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition">
              <Download className="h-4 w-4" /> Resume
            </a>
            <a href="/jehanzebarfraz.vcf" download className="inline-flex items-center gap-2 glass rounded-xl px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition">
              <Contact className="h-4 w-4" /> Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex flex-wrap justify-center gap-3"
          >
            {badges.map((b) => (
              <div key={b.label} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-muted-foreground">
                <b.icon className="h-3.5 w-3.5 text-cyan" />
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
