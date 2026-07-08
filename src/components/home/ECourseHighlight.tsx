import { motion } from "framer-motion";
import {
  ArrowUpRight,
  PlayCircle,
  FileText,
  Hammer,
  Award,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Section } from "../site/Section";

const features = [
  { icon: PlayCircle, title: "Video Pembelajaran" },
  { icon: FileText, title: "Modul Materi Lengkap" },
  { icon: Hammer, title: "Project Based Learning" },
  { icon: Award, title: "Sertifikat Completion" },
  { icon: Clock, title: "Akses Fleksibel 24/7" },
];

export function ECourseHighlight() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-lg">
            {/* Glow */}
            <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-accent/30 via-primary/10 to-transparent blur-2xl" />
            {/* Laptop */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border-[10px] border-foreground/85 bg-foreground/85 shadow-glow">
                <div className="flex items-center gap-1.5 bg-foreground/85 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>
                <div className="bg-radial-fade p-6">
                  <div className="rounded-xl bg-white/95 p-5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                        <PlayCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">
                          Modul 03 · 12 menit
                        </p>
                        <p className="text-sm font-semibold text-foreground">Digital Marketing</p>
                      </div>
                    </div>
                    <div className="mt-4 h-1.5 rounded-full bg-muted">
                      <div className="h-full w-2/3 rounded-full bg-accent" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {["Materi", "Kuis", "Proyek"].map((t) => (
                        <div
                          key={t}
                          className="rounded-lg bg-muted/70 p-2 text-center text-[10px] font-medium text-foreground/70"
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Base */}
              <div className="mx-auto -mt-1 h-3 w-[110%] -translate-x-[5%] rounded-b-2xl bg-foreground/85" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-6 rounded-2xl bg-card p-3 shadow-glow ring-1 ring-border"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-accent/40">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-muted-foreground">Selesai</p>
                  <p className="text-xs font-semibold">Sertifikat siap!</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            E-Course Platform
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Belajar <span className="font-italic-serif text-primary">fleksibel</span> melalui
            E-Course
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Akses materi belajar kapan saja, di mana saja. Lengkap dengan video, modul, dan proyek
            aplikatif yang dirancang oleh praktisi.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.title}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-card"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground">{f.title}</span>
                <CheckCircle2 className="ml-auto h-4 w-4 text-accent" />
              </li>
            ))}
          </ul>

          <a
            href="https://lms.eduvia.academy"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-light"
          >
            Lihat E-Course
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
