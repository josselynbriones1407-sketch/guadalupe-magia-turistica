import historia from "@/assets/historia-guadalupe.png.asset.json";
import pacatnamu from "@/assets/pacatnamu.png.asset.json";
import sala from "@/assets/sala-exposiciones.png.asset.json";

const items = [
  {
    img: historia.url,
    tag: "Historia",
    title: "Historia de Guadalupe",
    text: "Guadalupe, en la región La Libertad, tiene raíces en las culturas Moche y Chimú, destacando el complejo arqueológico de Pacatnamú. Fue fundada por los españoles en 1550 y reconstruida tras un terremoto en 1619. Durante la Guerra del Pacífico sobresalió por el heroísmo de Fernando Albújar, Manuel Guarniz y Justo Albañil. Actualmente, es un importante centro agrícola, arrocero y de devoción a la Virgen de Guadalupe en el norte del Perú.",
  },
  {
    img: pacatnamu.url,
    tag: "Arqueología",
    title: "Pacatnamú",
    subtitle: "El complejo arqueológico monumental más extenso del valle",
    text: "Pakatnamú es una importante ciudadela arqueológica con más de doce siglos de historia, ocupada desde el período Formativo hasta las culturas Moche y Chimú. Durante la época Moche se convirtió en un destacado centro ceremonial, político, administrativo y militar. La mayoría de las estructuras visibles actualmente fueron construidas hacia el año 600 d. C., cuando alcanzó su mayor importancia en el valle bajo de Jequetepeque. Según la tradición, su nombre proviene de un guerrero que conquistó y gobernó la zona. Su ocupación terminó con la expansión del reino Chimú desde Chan Chan.",
  },
  {
    img: sala.url,
    tag: "Museo",
    title: "Pacatnamú · Sala de Exposiciones",
    text: "La Sala Pacatnamú se encuentra ubicada frente a la Plaza de Armas de Guadalupe, ocupando un ambiente que forma parte del Centro Cívico de la Municipalidad. Se creó el 14 de abril del 2010, como parte de la Primera Gran Semana de Guadalupe. Es un recinto de dos plantas, compartido en dos ambientes, donde se exhiben objetos originales prehispánicos de las diferentes culturas que se desarrollaron en el valle de Jequetepeque, así como información gráfica de las diversas etapas históricas del distrito de Guadalupe.",
  },
];

export function Cultura() {
  return (
    <section id="cultura" className="relative py-24 bg-section-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-crimson font-semibold">Cultura</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">
            Raíces de <span className="text-primary">Guadalupe</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Historia, arqueología y memoria viva del valle de Jequetepeque.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((c) => (
            <article
              key={c.title}
              className="group card-hover overflow-hidden rounded-3xl bg-card shadow-card-soft flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="img-zoom w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-gold text-gold-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-card-soft">
                  {c.tag}
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-bold text-foreground leading-tight">{c.title}</h3>
                {c.subtitle && (
                  <p className="mt-1 text-sm text-crimson font-semibold uppercase tracking-wide">{c.subtitle}</p>
                )}
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
