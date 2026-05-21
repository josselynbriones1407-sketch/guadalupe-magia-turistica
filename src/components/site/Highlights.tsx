import turismo from "@/assets/turismo.jpg";
import cultura from "@/assets/cultura.jpg";
import gastro from "@/assets/gastronomia.jpg";
import agenda from "@/assets/agenda.jpg";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    id: "turismo",
    img: turismo,
    tag: "Turismo",
    title: "Turismo",
    sub: "Playas y Monumentos",
    desc: "Descubre paisajes costeros, huacas milenarias y caminos que cuentan la historia viva del norte peruano.",
    cta: "Ver Más",
    accent: "bg-primary text-primary-foreground",
  },
  {
    id: "cultura",
    img: cultura,
    tag: "Cultura",
    title: "Cultura",
    sub: "Festividades",
    desc: "Marinera, procesiones y tradiciones que mantienen vivo el espíritu de nuestro distrito.",
    cta: "Ver Más",
    accent: "bg-crimson text-crimson-foreground",
  },
  {
    id: "gastronomia",
    img: gastro,
    tag: "Gastronomía",
    title: "Gastronomía",
    sub: "Platos Típicos",
    desc: "Cabrito, shámbar, ceviche y dulces tradicionales preparados con recetas heredadas.",
    cta: "Ver Más",
    accent: "bg-gold text-gold-foreground",
  },
  {
    id: "agenda",
    img: agenda,
    tag: "Agenda de Eventos",
    title: "Agenda de Eventos",
    sub: "Festivales y Eventos",
    desc: "Mantente al día con las celebraciones, ferias y actividades culturales programadas.",
    cta: "Ver Calendario",
    accent: "bg-primary text-primary-foreground",
  },
];

export function Highlights() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-crimson font-semibold">Explora</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">
            Lo mejor de <span className="text-primary">Guadalupe</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Cuatro caminos para conocer la riqueza de nuestro distrito.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <article
              key={c.id}
              id={c.id === "agenda" ? undefined : c.id}
              className="group card-hover overflow-hidden rounded-3xl bg-card shadow-card-soft flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="img-zoom w-full h-full object-cover"
                />
                <span className={`absolute top-4 left-4 ${c.accent} text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-card-soft`}>
                  {c.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-bold text-foreground">{c.title}</h3>
                <p className="text-sm text-primary font-medium mt-1">{c.sub}</p>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{c.desc}</p>
                <a
                  href={`#${c.id}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-crimson transition-colors group/link"
                >
                  {c.cta}
                  <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
