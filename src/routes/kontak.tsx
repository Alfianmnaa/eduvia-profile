import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, MessageCircle, Send, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { PageHero } from "./program";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak — Eduvia Academy Indonesia" },
      {
        name: "description",
        content:
          "Hubungi tim Eduvia Academy untuk konsultasi program pelatihan, sertifikasi, dan corporate training.",
      },
      { property: "og:title", content: "Kontak Eduvia Academy" },
      { property: "og:description", content: "Konsultasi program pelatihan dan sertifikasi." },
    ],
  }),
  component: ContactPage,
});

const info = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jl. Wiroyudo III, Kragilan, Tamanan, Banguntapan, Bantul, DIY",
  },
  { icon: Phone, label: "Telepon", value: "0851 2314 2618", href: "tel:+6285123142618" },
  {
    icon: Mail,
    label: "Email",
    value: "eduvia.academy@gmail.com",
    href: "mailto:eduvia.academy@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@eduvia.academy",
    href: "https://instagram.com/eduvia.academy",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kontak"
        title={
          <>
            Hubungi <span className="font-italic-serif text-accent">Kami</span>
          </>
        }
        subtitle="Tim Eduvia siap membantu Anda menemukan program yang paling sesuai."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <div className="space-y-4 lg:col-span-2">
            {info.map((it) => {
              const Comp = it.href ? "a" : "div";
              return (
                <Comp
                  key={it.label}
                  {...(it.href ? { href: it.href, target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {it.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{it.value}</p>
                  </div>
                </Comp>
              );
            })}

            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href="https://instagram.com/eduvia.academy"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-xs font-medium text-foreground/80 transition hover:bg-muted"
              >
                <Instagram className="h-5 w-5 text-primary" /> Instagram
              </a>
              <a
                href="https://wa.me/6285123142618"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-xs font-medium text-foreground/80 transition hover:bg-muted"
              >
                <MessageCircle className="h-5 w-5 text-primary" /> WhatsApp
              </a>
              <a
                href="mailto:eduvia.academy@gmail.com"
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-xs font-medium text-foreground/80 transition hover:bg-muted"
              >
                <Mail className="h-5 w-5 text-primary" /> Email
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-border bg-card p-7 shadow-card lg:col-span-3"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Kirim Konsultasi</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tim kami akan merespons dalam 1×24 jam.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Nama" name="nama" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Nomor WhatsApp" name="whatsapp" required />
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Kategori Program
                </label>
                <select
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                >
                  <option value="">Pilih kategori</option>
                  <option>Diklat</option>
                  <option>Bahasa Inggris</option>
                  <option>Corporate Training</option>
                  <option>E-Course</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Pesan
              </label>
              <textarea
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                placeholder="Ceritakan kebutuhan pelatihan Anda..."
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-light disabled:opacity-70"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Terkirim — kami akan menghubungi Anda
                </>
              ) : (
                <>
                  Kirim Konsultasi <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </Section>

      {/* Map */}
      <Section className="!pt-0">
        <div className="overflow-hidden rounded-3xl border border-border shadow-card">
          <iframe
            title="Lokasi Eduvia Academy"
            src="https://www.google.com/maps?q=Banguntapan,Bantul,DIY&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}
