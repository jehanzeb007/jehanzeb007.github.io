import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const c = animate(count, to, { duration: 2, ease: "easeOut" });
      return c.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-gradient">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const stats = [
  { value: 13, suffix: "+", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 600, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "", label: "Awards Won" },
];

export function Stats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-10 shadow-card relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <Counter to={s.value} suffix={s.suffix} />
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            + millions of transactions processed across deployed systems
          </div>
        </motion.div>
      </div>
    </section>
  );
}
