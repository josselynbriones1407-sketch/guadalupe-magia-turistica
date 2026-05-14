import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import cultura from "@/assets/cultura.jpg";
import turismo from "@/assets/turismo.jpg";

const items = [
  { src: g1, label: "Patrimonio colonial", span: "md:col-span-2 md:row-span-2" },
  { src: g4, label: "Plaza de Armas" },
  { src: cultura, label: "Festividades" },
  { src: g3, label: "Campos de caña" },
  { src: g2, label: "Artesanía local" },
  { src: turismo, label: "Costa norte" , span: "md:col-span-2"},
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-crimson font-semibold">Memorias</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">
              Galería en <span className="text-primary">Imágenes</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Una mirada visual a los rincones, rostros y tradiciones que dan vida a Guadalupe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-card-soft ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="img-zoom absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs uppercase tracking-widest text-gold">Guadalupe</p>
                <p className="text-primary-foreground font-display text-xl font-semibold">{it.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
