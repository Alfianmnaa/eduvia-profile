import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section, SectionHeader } from "../site/Section";

const stats = [
  { value: 1000, suffix: "+", label: "Alumni Program" },
  { value: 20, suffix: "+", label: "Program Pelatihan" },
  { value: 100, suffix: "+", label: "Dipercaya Institusi" },
  { value: 99, suffix: "%", label: "Tingkat Kepuasan Peserta" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <Section className="!py-20">
      <SectionHeader
        eyebrow="Eduvia Berdampak"
        title={
          <>
            Dampak yang Tumbuh, <span className="font-italic-serif text-primary">Bersama</span> Anda
          </>
        }
        subtitle="Ekosistem pelatihan dan sertifikasi yang dipercaya oleh ratusan peserta dan institusi di Indonesia."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition group-hover:bg-accent/20" />
            <div className="relative">
              <div className="text-5xl font-bold tracking-tight text-primary sm:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
