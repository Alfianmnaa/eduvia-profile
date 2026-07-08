import { motion } from "framer-motion";
import { Section, SectionHeader } from "../site/Section";
import { School, GraduationCap, Landmark, Building2 } from "lucide-react";

const groups = [
  { icon: School, label: "Sekolah", count: "15+" },
  { icon: GraduationCap, label: "Universitas", count: "8+" },
  { icon: Landmark, label: "Instansi Pemerintah", count: "5+" },
  { icon: Building2, label: "Perusahaan", count: "12+" },
];

const placeholders = ["SMA 1", "SMP 3", "UGM", "UI", "ITB", "Kemendikbud", "Telkom", "BUMN", "PT ABC", "UPN", "UAD", "UNY"];

export function Partners() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Mitra & Kolaborasi"
        title={<>Dipercaya oleh berbagai <span className="font-italic-serif text-primary">institusi</span></>}
        subtitle="Bermitra dengan sekolah, universitas, instansi pemerintah, dan perusahaan di seluruh Indonesia."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <g.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{g.label}</p>
              <p className="text-xl font-bold text-foreground">{g.count}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
        {placeholders.map((p) => (
          <div key={p} className="grid h-20 place-items-center rounded-2xl border border-dashed border-border bg-muted/40 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {p}
          </div>
        ))}
      </div>
    </Section>
  );
}
