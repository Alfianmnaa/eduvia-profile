import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { PROGRAMS } from "@/components/home/ProgramShowcase";
import { FinalCTA } from "@/components/home/FinalCTA";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "Program — Eduvia Academy Indonesia" },
      {
        name: "description",
        content:
          "Temukan berbagai program pelatihan, sertifikasi, dan pengembangan kompetensi yang dirancang untuk dunia pendidikan dan profesional.",
      },
      { property: "og:title", content: "Program Eduvia Academy" },
      {
        property: "og:description",
        content: "Diklat, Bahasa Inggris, Corporate Training, dan E-Course Persiapan Karir.",
      },
    ],
  }),
  component: ProgramPage,
});

const categories = ["Semua", "Diklat", "Bahasa Inggris", "Corporate Training", "E-Course"];

function ProgramPage() {
  const [active, setActive] = useState("Semua");
  const filtered = active === "Semua" ? PROGRAMS : PROGRAMS.filter((p) => p.category === active);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Program"
        title={
          <>
            Program <span className="font-italic-serif text-accent">Eduvia</span> Academy
          </>
        }
        subtitle="Temukan berbagai program pelatihan, sertifikasi, dan pengembangan kompetensi yang dirancang untuk kebutuhan dunia pendidikan dan profesional."
      />

      <Section className="!pt-12">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "border border-border bg-card text-foreground/70 hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft hover:border-primary/30"
            >
              <span className="self-start rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                {p.category}
              </span>
              <div className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/30 text-primary-dark transition group-hover:bg-accent">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <button className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-muted">
                  Pelajari <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
                <Link
                  to="/kontak"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary-light"
                >
                  Daftar Sekarang <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </SiteLayout>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-radial-fade pt-36 pb-16 lg:pt-44 lg:pb-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-primary-light/40 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
