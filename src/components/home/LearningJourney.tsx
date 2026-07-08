import { motion } from "framer-motion";
import { Section, SectionHeader } from "../site/Section";

const steps = [
  { n: "01", title: "Pilih Program", desc: "Tentukan program yang sesuai dengan kebutuhan dan tujuanmu." },
  { n: "02", title: "Belajar dengan Mentor", desc: "Sesi interaktif bersama instruktur profesional." },
  { n: "03", title: "Kerjakan Proyek", desc: "Praktik langsung melalui tugas dan studi kasus nyata." },
  { n: "04", title: "Evaluasi Kompetensi", desc: "Penilaian terstruktur untuk mengukur capaian belajar." },
  { n: "05", title: "Dapatkan Sertifikat", desc: "Sertifikasi resmi sebagai bukti kompetensi." },
  { n: "06", title: "Tingkatkan Karir", desc: "Bawa kompetensimu ke level profesional berikutnya." },
];

export function LearningJourney() {
  return (
    <Section className="bg-muted/40">
      <SectionHeader
        eyebrow="Learning Journey"
        title={<>Alur Belajar bersama <span className="font-italic-serif text-primary">Eduvia</span></>}
        subtitle="Enam langkah terstruktur dari pemilihan program hingga peningkatan karir Anda."
      />

      <div className="relative mt-16">
        {/* Connecting line */}
        <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative"
            >
              <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-glow ring-4 ring-background">
                {s.n}
              </div>
              <div className="mt-5 rounded-2xl border border-border bg-card p-5 text-center shadow-card">
                <h4 className="text-sm font-semibold text-foreground">{s.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
