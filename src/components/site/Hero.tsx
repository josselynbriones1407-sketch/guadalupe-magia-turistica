import heroImg from "@/assets/hero-guadalupe.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/cultura.jpg";
import g3 from "@/assets/gastronomia.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <img
        src={heroImg}
        alt="Vista panorámica del distrito de Guadalupe en La Libertad, Perú"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-primary-foreground animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.25em] border border-white/20">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            La Libertad · Perú
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Descubre la <span className="text-gradient-peru">magia</span> de Guadalupe
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-primary-foreground/85">
            Tradición, historia y sabor en La Libertad. Un destino donde el patrimonio
            colonial, la naturaleza y la cultura viva se encuentran.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#turismo"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-gold-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Explorar Ahora
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#agenda"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-4 text-primary-foreground font-semibold hover:bg-white/15 transition"
            >
              Ver Calendario
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "120+", l: "Atractivos" },
              { n: "30+", l: "Festividades" },
              { n: "50+", l: "Restaurantes" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl md:text-4xl font-bold text-gold">{s.n}</p>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/70 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative h-[520px]">
            <img src={g1} alt="Iglesia colonial de Guadalupe" loading="lazy" width={800} height={800}
              className="absolute top-0 right-0 w-64 h-80 object-cover rounded-3xl shadow-elegant rotate-3 hover:rotate-0 transition-transform duration-500" />
            <img src={g2} alt="Danza tradicional peruana" loading="lazy" width={800} height={800}
              className="absolute top-32 left-0 w-56 h-72 object-cover rounded-3xl shadow-elegant -rotate-6 hover:rotate-0 transition-transform duration-500" />
            <img src={g3} alt="Gastronomía típica" loading="lazy" width={800} height={800}
              className="absolute bottom-0 right-12 w-72 h-56 object-cover rounded-3xl shadow-elegant rotate-6 hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
