import { ContactForm } from "@/app/_components/contact-form";
import { Header } from "@/app/alternativa/_components/header";
import { Eyebrow, h2, wrap } from "@/app/alternativa/_components/ui";
import {
  Amenidades,
  Concepto,
  Footer,
  Hero,
  Infraestructura,
  KeyFacts,
  Parques,
  Preguntas,
  Respaldo,
  Ubicacion,
} from "@/app/alternativa/_components/sections";

// Misma estructura y contenido que la portada, con una dirección visual más sobria:
// imágenes a todo lo ancho, esquinas rectas, serif en títulos y paleta natural.
export default function Alternativa() {
  return (
    <>
      <Header />
      <main className="text-moss">
        <Hero />
        <KeyFacts />
        <Concepto />
        <Parques />
        <Amenidades />
        <Infraestructura />
        <Ubicacion />
        <Respaldo />
        <Preguntas />
        <section id="contacto" className="bg-stone py-[100px] md:py-[140px]">
          <div className={`grid gap-14 lg:grid-cols-12 lg:gap-12 ${wrap}`}>
            <div className="lg:col-span-5" data-reveal>
              <Eyebrow>Contacto</Eyebrow>
              <h2 className={`${h2} text-forest`}>Agenda tu visita a Qercia</h2>
              <p className="mt-8 max-w-md text-[17px] leading-[1.8]">
                Conoce Qercia con un asesor. Te muestra los terrenos disponibles y te explica el esquema de pago.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7" data-reveal>
              <ContactForm variant="alt" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
