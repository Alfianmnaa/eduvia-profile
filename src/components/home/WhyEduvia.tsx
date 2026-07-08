import { motion } from "framer-motion";
import { Microscope, UsersRound, BadgeCheck, Hammer } from "lucide-react";
import { Section, SectionHeader } from "../site/Section";

const features = [
  { icon: Microscope, title: "Berbasis Riset", desc: "Program disusun berdasarkan kebutuhan nyata dunia pendidikan dan profesional." },
  { icon: UsersRound, title: "Instruktur Profesional", desc: "Dipandu oleh akademisi dan praktisi berpengalaman di bidangnya." },
  { icon: BadgeCheck, title: "Sertifikasi Resmi", desc: "Mendapatkan sertifikat sebagai bukti kompetensi yang diakui." },
  { icon: Hammer, title: "Project Based Learning", desc: "Belajar melalui praktik dan studi kasus nyata yang aplikatif." },
];

export function WhyEduvia() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Mengapa Memilih Eduvia?"
        title={<>Pengalaman belajar yang <span className="font-italic-serif text-primary">bermakna</span></>}
        subtitle="Empat alasan utama mengapa peserta dan institusi mempercayai Eduvia Academy."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/30 text-primary-dark transition group-hover:bg-accent">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
