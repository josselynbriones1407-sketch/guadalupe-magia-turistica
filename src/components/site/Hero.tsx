import { ArrowRight, Sparkles, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video de fondo panorámico */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-guadalupe.mp4" type="video/mp4" />
      </video>

      {/* Overlay degradado elegante */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-4xl text-primary-foreground animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-5 py-2.5 text-xs uppercase tracking-[0.3em] border border-white/25">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            La Libertad · Perú
          </span>

          <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight">
            Descubre la <span className="text-gradient-peru italic">magia</span>
            <br />
            de Guadalupe
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-2xl text-primary-foreground/90 font-light leading-relaxed">
            Tradición, historia y sabor en La Libertad.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#turismo"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-gold-foreground font-semibold shadow-glow hover:shadow-[0_0_80px_oklch(0.84_0.17_86/0.7)] hover:scale-105 transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-full bg-gold blur-xl opacity-50 group-hover:opacity-80 transition-opacity -z-10" />
              Explorar Ahora
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 text-primary-foreground font-semibold hover:bg-white/20 transition"
            >
              <Play className="h-4 w-4 fill-current" />
              Ver Galería
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
            {[
              { n: "120+", l: "Atractivos" },
              { n: "30+", l: "Festividades" },
              { n: "50+", l: "Restaurantes" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-gold/60 pl-4">
                <p className="font-display text-3xl md:text-5xl font-bold text-gold">{s.n}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/80 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-2 animate-float-up">
        <span>Scroll</span>
        <div className="h-10 w-[2px] bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
