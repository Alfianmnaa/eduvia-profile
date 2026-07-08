import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Award, Lightbulb, Handshake, HeartHandshake, Target, Compass } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, SectionHeader } from "@/components/site/Section";
import { PageHero } from "./program";
import { FinalCTA } from "@/components/home/FinalCTA";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Eduvia Academy Indonesia" },
      {
        name: "description",
        content:
          "Lembaga riset dan pelatihan yang berfokus pada pengembangan SDM yang adaptif, inovatif, dan berdaya saing.",
      },
      { property: "og:title", content: "Tentang Eduvia Academy" },
      {
        property: "og:description",
        content: "Membangun SDM Adaptif, Inovatif, dan Berdaya Saing.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Shield, title: "Integritas", desc: "Berpegang teguh pada nilai jujur dan amanah." },
  { icon: Award, title: "Profesionalisme", desc: "Standar mutu tinggi di setiap layanan." },
  { icon: Lightbulb, title: "Inovasi", desc: "Mengembangkan pendekatan baru yang relevan." },
  { icon: Handshake, title: "Kolaborasi", desc: "Bekerja sama lintas institusi dan komunitas." },
  {
    icon: HeartHandshake,
    title: "Pelayanan Prima",
    desc: "Mengutamakan kepuasan peserta dan mitra.",
  },
];

const missions = [
  "Menyelenggarakan program pelatihan profesional.",
  "Mengembangkan riset terapan.",
  "Mendorong peningkatan kompetensi.",
  "Mengintegrasikan hasil riset ke dalam pelatihan.",
  "Membangun kolaborasi dengan berbagai institusi.",
  "Menanamkan budaya profesionalisme dan inovasi.",
];

const timeline = [
  {
    year: "2024",
    title: "Eduvia Academy didirikan",
    desc: "Awal perjalanan sebagai lembaga riset dan pelatihan.",
  },
  {
    year: "2024",
    title: "Peluncuran Program Sertifikasi",
    desc: "Diklat profesional pertama untuk pendidik.",
  },
  {
    year: "2026",
    title: "Peluncuran Platform E-Course",
    desc: "Akses pembelajaran fleksibel berbasis proyek.",
  },
  {
    year: "Future",
    title: "Ekspansi Corporate Training & LMS",
    desc: "Memperluas dampak untuk perusahaan dan institusi.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tentang Kami"
        title={
          <>
            Tentang <span className="font-italic-serif text-accent">Eduvia</span> Academy Indonesia
          </>
        }
        subtitle="Membangun SDM Adaptif, Inovatif, dan Berdaya Saing."
      />

      {/* Company Profile */}
      <Section>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Company Profile
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Lembaga riset & pelatihan berbasis{" "}
              <span className="font-italic-serif text-primary">kebutuhan nyata</span>
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Eduvia Academy Indonesia adalah lembaga riset dan pelatihan yang berfokus pada
              pengembangan sumber daya manusia secara profesional, adaptif, dan berbasis kebutuhan
              dunia nyata.
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-muted/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Legal Entity
              </p>
              <p className="mt-1.5 text-sm font-semibold text-foreground">
                CV Eduvia Academy Indonesia
              </p>
              <p className="mt-1 text-xs text-muted-foreground">AHU-0010561-AH.01.14 Tahun 2026</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-muted/40 !pt-16">
        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-radial-fade p-8 text-white shadow-glow lg:col-span-2"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-5 text-2xl font-bold">Visi</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              Menjadi lembaga riset dan pelatihan unggulan dalam pengembangan sumber daya manusia
              yang adaptif, inovatif, dan berdaya saing di era digital.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-border bg-card p-8 shadow-card lg:col-span-3"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/30 text-primary-dark">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-foreground">Misi</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {missions.map((m, i) => (
                <li key={m} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <SectionHeader
          eyebrow="Core Values"
          title={
            <>
              Nilai-nilai yang kami <span className="font-italic-serif text-primary">junjung</span>
            </>
          }
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-sm font-semibold text-foreground">{v.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-muted/40">
        <SectionHeader
          eyebrow="Timeline"
          title={
            <>
              Perjalanan <span className="font-italic-serif text-primary">Eduvia</span>
            </>
          }
        />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-border md:left-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex gap-5 md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-4 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-primary ring-4 ring-background md:left-1/2" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent-foreground bg-accent inline-block rounded-full px-3 py-1">
                      {t.year}
                    </p>
                    <h4 className="mt-3 text-base font-semibold text-foreground">{t.title}</h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <FinalCTA />
    </SiteLayout>
  );
}
