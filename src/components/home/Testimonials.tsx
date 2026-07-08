import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { Section, SectionHeader } from "../site/Section";

const testimonials = [
  { quote: "Diklat kepala laboratorium sangat membantu saya dalam mengelola laboratorium sekolah secara profesional. Materi runtut, mentor sangat berpengalaman.", name: "Pak Hendra", role: "Guru SMA, Yogyakarta" },
  { quote: "Materi e-course sangat aplikatif dan mudah dipahami. Saya bisa belajar fleksibel di sela kesibukan kuliah dan tetap mendapatkan sertifikat.", name: "Sarah A.", role: "Mahasiswa Universitas" },
  { quote: "Corporate training dari Eduvia sangat sesuai dengan kebutuhan tim kami. Pendekatan berbasis proyek membuat tim langsung bisa praktik.", name: "Diana P.", role: "HR Manager" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <Section className="bg-muted/40">
      <SectionHeader
        eyebrow="Testimonials"
        title={<>Apa kata <span className="font-italic-serif text-primary">peserta</span> kami</>}
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-card p-8 shadow-card sm:p-12">
          <Quote className="absolute right-6 top-6 h-16 w-16 text-primary/10" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star key={n} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-xl font-medium leading-relaxed text-foreground sm:text-2xl text-balance">
                "{t.quote}"
              </p>
              <div className="mt-7 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-base font-semibold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={prev} className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-primary hover:text-primary-foreground hover:border-primary" aria-label="Previous">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, n) => (
              <button
                key={n}
                onClick={() => setI(n)}
                aria-label={`Go to testimonial ${n + 1}`}
                className={`h-2 rounded-full transition-all ${n === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
          <button onClick={next} className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-primary hover:text-primary-foreground hover:border-primary" aria-label="Next">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
