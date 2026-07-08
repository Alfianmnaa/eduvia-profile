import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="px-5 pb-20 sm:pb-28 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-radial-fade px-6 py-16 text-center shadow-glow sm:px-10 sm:py-20 lg:py-24"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-primary-light/40 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Siap Mengembangkan{" "}
            <span className="font-italic-serif text-accent">Kompetensi</span> Anda?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Bergabunglah bersama ribuan peserta yang telah meningkatkan kompetensinya bersama Eduvia Academy.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/program"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Lihat Program
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Hubungi Kami
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
