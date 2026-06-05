import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Cultura } from "@/components/site/Cultura";
import { Directory } from "@/components/site/Directory";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Municipalidad de Guadalupe — Turismo, Cultura y Tradición en La Libertad" },
      {
        name: "description",
        content:
          "Descubre Guadalupe, La Libertad: turismo, cultura, gastronomía y agenda de festividades del distrito.",
      },
      { property: "og:title", content: "Descubre la magia de Guadalupe — La Libertad, Perú" },
      { property: "og:description", content: "Tradición, historia y sabor en La Libertad." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Cultura />
        <Directory />
      </main>
      <Footer />
    </div>
  );
}
