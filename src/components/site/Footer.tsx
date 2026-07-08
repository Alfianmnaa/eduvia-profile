import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-dark text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-light/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Empowering Skills, Advancing Futures. Platform pelatihan dan sertifikasi untuk SDM
              Indonesia.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/eduvia.academy" },
                { icon: Mail, href: "mailto:eduvia.academy@gmail.com" },
                { icon: Phone, href: "https://wa.me/6285123142618" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-accent hover:text-accent-foreground hover:ring-accent"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <FooterCol
              title="Quick Links"
              items={[
                { label: "Home", to: "/" },
                { label: "Program", to: "/program" },
                { label: "Tentang Kami", to: "/tentang" },
                { label: "Kontak Kami", to: "/kontak" },
              ]}
            />
            <FooterCol
              title="Programs"
              items={[
                { label: "Diklat Lab IPA", to: "/program" },
                { label: "Diklat Lab Komputer", to: "/program" },
                { label: "Diklat Perpustakaan", to: "/program" },
                { label: "Bahasa Inggris", to: "/program" },
              ]}
            />
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Kontak</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                <li className="flex gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  0851 2314 2618
                </li>
                <li className="flex gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  eduvia.academy@gmail.com
                </li>
                <li className="flex gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  Banguntapan, Bantul, DIY
                </li>
              </ul>
              <a
                href="https://lms.eduvia.academy"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
              >
                Buka E-Course <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© 2026 Eduvia Academy Indonesia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((it) => (
          <li key={it.label}>
            <Link to={it.to} className="text-white/70 transition hover:text-accent">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
