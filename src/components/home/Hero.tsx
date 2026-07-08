import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-students.webp";
import brushAccent from "@/assets/brush-accent.svg";
import scribbleLampu from "@/assets/scribble-lampu.svg";
import scribbleSprinkle from "@/assets/scribble-sprinkle.svg";
import iconZoom from "@/assets/icon-zoom.png";
import iconClassroom from "@/assets/icon-classroom.png";

const floatingPrograms = [
  { label: "Diklat Kepala Laboratorium IPA", delay: 0 },
  { label: "Diklat Kepala Laboratorium Komputer", delay: 0.15 },
  { label: "Pelatihan Bahasa Inggris", delay: 0.3 },
  { label: "E-Course", delay: 0.45 },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-radial-fade pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute -top-32 left-1/3 h-[480px] w-[480px] rounded-full bg-primary-light/50 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-primary-dark/40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Left */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Research & Training Center · Indonesia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[64px] text-balance"
          >
            Platform Pelatihan dan Sertifikasi{" "}
            <span className="relative inline-block">
              <span className="font-italic-serif text-accent">Terbaik</span>
              <img
                src={brushAccent}
                alt=""
                className="pointer-events-none absolute -bottom-2 left-0 w-full"
                aria-hidden
              />
            </span>{" "}
            untuk Guru, Mahasiswa, dan Profesional
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Belajar langsung dari ahlinya, dapatkan sertifikasi resmi, dan tingkatkan kompetensi
            melalui pelatihan, sertifikasi, serta e-course berbasis proyek.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/program"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition hover:brightness-105 hover:-translate-y-0.5"
            >
              Lihat Program
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://lms.eduvia.academy"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Jelajahi E-Course
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80"
          >
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-accent/20 ring-1 ring-accent/30">
                <Users className="h-3.5 w-3.5 text-accent" />
              </div>
              <span>
                <span className="font-semibold text-white">100+</span> Alumni
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Program Bersertifikat
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Mentor Profesional
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto aspect-[5/5] max-w-lg lg:max-w-none"
          >
            {/* Backdrop shape */}
            <div className="absolute inset-x-6 bottom-0 top-12 rounded-[40px] bg-primary-light/60 ring-1 ring-white/10" />

            <img
              src={heroImg}
              alt="Mahasiswa, guru dan pelajar Eduvia Academy"
              className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-2xl"
            />

            {/* Decorative scribbles */}
            <img
              src={scribbleLampu}
              alt=""
              aria-hidden
              className="absolute -top-2 left-2 h-14 w-14 lg:left-0"
            />
            <img
              src={scribbleSprinkle}
              alt=""
              aria-hidden
              className="absolute right-4 top-6 h-14 w-14"
            />

            {/* Floating icons */}
            <motion.img
              src={iconZoom}
              alt="Zoom"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-1/3 z-20 h-14 w-14 rounded-2xl shadow-glow"
            />
            <motion.img
              src={iconClassroom}
              alt="Classroom"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-22 bottom-44 z-20 h-14 w-14 rounded-2xl shadow-glow"
            />

            {/* Floating program chips */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-end gap-2.5 pr-4">
              {floatingPrograms.map((p) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + p.delay }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary-dark/85 px-3.5 py-2 text-xs font-medium text-white shadow-soft backdrop-blur ring-1 ring-white/10"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                  {p.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
