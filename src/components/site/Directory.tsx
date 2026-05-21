import { Hotel, UtensilsCrossed, Hammer, Siren } from "lucide-react";

const items = [
  { icon: Hotel, label: "Hoteles", desc: "Hospedajes y posadas", color: "text-primary", bg: "bg-primary/10" },
  { icon: UtensilsCrossed, label: "Restaurantes", desc: "Sabores tradicionales", color: "text-crimson", bg: "bg-crimson/10" },
  { icon: Hammer, label: "Artesanos", desc: "Talleres y oficios", color: "text-gold-foreground", bg: "bg-gold/20" },
  { icon: Siren, label: "Emergencias", desc: "Atención inmediata", color: "text-crimson", bg: "bg-crimson/10" },
];

export function Directory() {
  return (
    <section id="directorio" className="relative py-24 bg-section-paper overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-crimson font-semibold">Servicios</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">
            Directorio del <span className="text-primary">Distrito</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Encuentra rápidamente la información que necesitas para tu visita.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, label, desc, color, bg }) => (
            <button
              key={label}
              className="group card-hover bg-card rounded-3xl p-8 text-left shadow-card-soft border border-border"
            >
              <div className={`h-16 w-16 rounded-2xl ${bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon className={`h-8 w-8 ${color}`} strokeWidth={2} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">{label}</h3>
              <p className="text-sm text-muted-foreground mt-2">{desc}</p>
              <div className="mt-6 h-[2px] w-10 bg-gradient-to-r from-primary to-crimson group-hover:w-20 transition-all" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
