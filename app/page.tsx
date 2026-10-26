import { ContactForm } from "@/app/_components/contact-form";
import { Header } from "@/app/_components/header";
import { Eyebrow, h2 } from "@/app/_components/ui";
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
} from "@/app/_components/sections";
import { SITE_URL, faqs, site } from "@/app/_lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: site.name,
      url: `${SITE_URL}/`,
      inLanguage: "es-MX",
    },
    {
      "@type": "Place",
      "@id": `${SITE_URL}/#qercia`,
      name: site.name,
      description:
        "Terrenos residenciales desde 500 m² en Camino al Diente, Carretera Nacional, con más de 27,000 m² de áreas verdes.",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.regionFull,
        addressCountry: site.address.country,
      },
      // TODO: geo (latitud/longitud) y código postal.
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="md:px-10">
        <Hero />
        <KeyFacts />
        <Concepto />
        <Parques />
        <Amenidades />
        <Infraestructura />
        <Ubicacion />
        <Respaldo />
        <Preguntas />
        <section id="contacto" className="py-[90px] md:py-[100px]">
          <div className="mx-auto grid w-full max-w-[1230px] gap-14 px-5 md:px-[65px] lg:grid-cols-12 lg:gap-10 xl:px-0">
            <div className="lg:col-span-5" data-reveal>
              <Eyebrow>Contacto</Eyebrow>
              <h2 className={`${h2} text-ink`}>Agenda tu visita a Qercia</h2>
              <p className="mt-6 max-w-md">
                Conoce Qercia con un asesor. Te muestra los terrenos disponibles y te explica el esquema de pago.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7" data-reveal>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
