import { useEffect, useState } from "react";
import { Menu, X, MapPin } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Turismo", href: "#turismo" },
  { label: "Cultura", href: "#cultura" },
  { label: "Gastronomía", href: "#gastronomia" },
  { label: "Agenda", href: "#agenda" },
  { label: "Galería", href: "#galeria" },
  { label: "Directorio", href: "#directorio" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-card-soft border-b border-white/40"
          : "bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="h-1 bg-tricolor" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className={`flex items-center gap-3 transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
            <div className="h-11 w-11 rounded-full bg-gold flex items-center justify-center shadow-glow">
              <MapPin className="h-5 w-5 text-gold-foreground" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <p className="font-display text-lg md:text-xl font-bold">Guadalupe</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1 after:h-[2px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${
                  scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-gold"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"}`}
            aria-label="Abrir menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border animate-float-up">
          <nav className="px-4 py-4 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-foreground hover:text-primary border-b border-border/50"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
