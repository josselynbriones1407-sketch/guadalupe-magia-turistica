import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="h-1 bg-tricolor" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gold flex items-center justify-center">
              <MapPin className="h-5 w-5 text-gold-foreground" />
            </div>
            <div>
              <p className="font-display text-xl font-bold">Guadalupe</p>
            </div>
          </div>
          <p className="mt-5 text-primary-foreground/75 max-w-md">
            Promovemos el desarrollo turístico, cultural y económico de nuestro distrito,
            preservando la identidad y tradición de La Libertad.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Red social"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground flex items-center justify-center transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-gold">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Plaza de Armas s/n, Guadalupe, La Libertad — Perú</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> (044) 567-890</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /> contacto@muniguadalupe.gob.pe</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-gold">Enlaces</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#turismo" className="hover:text-gold">Turismo</a></li>
            <li><a href="#cultura" className="hover:text-gold">Cultura</a></li>
            <li><a href="#gastronomia" className="hover:text-gold">Gastronomía</a></li>
            <li><a href="#agenda" className="hover:text-gold">Agenda</a></li>
            <li><a href="#directorio" className="hover:text-gold">Directorio</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Municipalidad Distrital de Guadalupe. Todos los derechos reservados.</p>
          <p>Hecho con orgullo en La Libertad — Perú 🇵🇪</p>
        </div>
      </div>
    </footer>
  );
}
