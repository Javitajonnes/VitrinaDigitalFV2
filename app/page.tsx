import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BusinessCard } from "@/components/business-card"
import { Footer } from "@/components/footer"

// Datos de ejemplo para los negocios
const sampleBusinesses = [
  {
    name: "Imprenta Express Balcon A104",
    description:
      "Impresiones, fotocopias, scaneo de documentos, edición y redimensionado de imágenes. Redacción de CV. Y también helados artesanales durante las vacaciones!",
    hours: "Lun-Vie: 17:00-22:30, Dom: A convenir",
    whatsappNumber: "56981977426",
    image: "/fotocopiaseimpresiones.png",
  },
  {
    name: "Podología clínica Namunaifen",
    description: "Soy podologa clínica atiendo en domicilio y en mi departamento . Pie diabético - Helomas - Callosidad - Uña encarnada - Helomas interdigitales.",
    hours: "Martes-Sáb: 10:00-17:00 hrs aprox ",
    whatsappNumber: "56999275141",
    image: "/podologia.jpg",
  },
  {
    name: "Balcón H128",
    description: "Almacén, abarrotes y provisiones (Pan, artículos de aseo, lácteos, librería, y mucho más",
    hours: "Lun-Vie: 9:00-22:30, Sáb-Dom: 9:00-23:30",
    whatsappNumber: "56947858057",
    image: "/balconH128.jpeg",
  },
  {
    name: "Negocio #4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
    hours: "Lun-Vie: 7:00-20:00, Sáb-Dom: 8:00-22:00",
    whatsappNumber: "1234567890",
    image: "/anuncioDisponible.png",
  },
  {
    name: "Negocio #5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    hours: "Lun-Vie: 7:00-20:00, Sáb-Dom: 8:00-22:00",
    whatsappNumber: "1234567890",
    image: "/anuncioDisponible.png",
  },
  {
    name: "Negocio #6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
    hours: "Lun-Vie: 7:00-20:00, Sáb-Dom: 8:00-22:00",
    whatsappNumber: "1234567890",
    image: "/anuncioDisponible.png",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="inicio">
        <HeroSection />
      </div>

      <main className="py-16">
        <section id="negocios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros vecinos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora los negocios y proyectos de nuestra comunidad. Donde vecinos y sus familiares emprenden para hacer
              crecer nuestro barrio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleBusinesses.map((business, index) => (
              <BusinessCard
                key={index}
                name={business.name}
                description={business.description}
                hours={business.hours}
                whatsappNumber={business.whatsappNumber}
                image={business.image}
              />
            ))}
          </div>
        </section>
      </main>

      <div id="contacto">
        <Footer />
      </div>
    </div>
  )
}
