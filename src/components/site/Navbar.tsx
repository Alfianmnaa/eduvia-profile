import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/program", label: "Program" },
  { to: "/tentang", label: "Tentang Kami" },
  { to: "/kontak", label: "Kontak Kami" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const onHome = pathname === "/";
  const transparent = onHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_0_oklch(0_0_0/0.02)]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/">
          <Logo variant={transparent ? "light" : "dark"} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <a
            href="https://lms.eduvia.academy"
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
              transparent ? "text-white/85 hover:text-white" : "text-foreground/75 hover:text-foreground"
            }`}
          >
            E-Courses <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          {navItems.slice(1).map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  transparent
                    ? `text-white/85 hover:text-white ${active ? "text-white" : ""}`
                    : `text-foreground/75 hover:text-foreground ${active ? "text-foreground" : ""}`
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/program"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
          >
            Lihat Program
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-xl lg:hidden ${
            transparent ? "bg-white/10 text-white ring-1 ring-white/20" : "bg-muted text-foreground"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-5 py-5">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://lms.eduvia.academy"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-muted"
          >
            E-Courses <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            to="/program"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
          >
            Lihat Program <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
