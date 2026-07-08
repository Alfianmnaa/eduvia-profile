import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FlaskConical,
  Monitor,
  BookOpen,
  Languages,
  Building2,
  GraduationCap,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "../site/Section";

export const PROGRAMS = [
  {
    icon: FlaskConical,
    title: "Diklat Kepala Laboratorium IPA",
    desc: "Program sertifikasi untuk meningkatkan kompetensi pengelolaan laboratorium IPA sekolah.",
    category: "Diklat",
  },
  {
    icon: Monitor,
    title: "Diklat Kepala Laboratorium Komputer",
    desc: "Pelatihan pengelolaan laboratorium komputer berbasis standar profesional.",
    category: "Diklat",
  },
  {
    icon: BookOpen,
    title: "Diklat Kepala Perpustakaan",
    desc: "Program sertifikasi kompetensi kepala perpustakaan sekolah.",
    category: "Diklat",
  },
  {
    icon: Languages,
    title: "Pelatihan Bahasa Inggris",
    desc: "Private class, group class, dan corporate training untuk semua level.",
    category: "Bahasa Inggris",
  },
  {
    icon: Building2,
    title: "Corporate Training (Bahasa)",
    desc: "Pelatihan berbagai macam bahasa khusus organisasi dan perusahaan.",
    category: "Corporate Training",
  },
  {
    icon: GraduationCap,
    title: "E-Course Persiapan Karir",
    desc: "Pembelajaran berbasis proyek untuk persiapan dunia profesional.",
    category: "E-Course",
  },
];

export function ProgramShowcase() {
  return (
    <Section className="bg-muted/40">
      <SectionHeader
        eyebrow="Program Unggulan"
        title={
          <>
            Program <span className="font-italic-serif text-primary">terbaik</span> untuk kebutuhan
            Anda
          </>
        }
        subtitle="Program terbaik yang dirancang berdasarkan kebutuhan dunia pendidikan dan profesional."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROGRAMS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <ProgramCard {...p} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function ProgramCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft hover:border-primary/30">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 opacity-0 transition group-hover:opacity-100" />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
      <div className="relative mt-6 flex items-center gap-2 pt-4">
        <Link
          to="/program"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5"
        >
          Pelajari Selengkapnya
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
