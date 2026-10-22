import { ContactForm } from "@/app/_components/contact-form";
import { Header } from "@/app/_components/header";
import { Eyebrow, h2 } from "@/app/_components/ui";
import {
  Amenidades,
  Desarrollador,
  Footer,
  Hero,
  KeyFacts,
  Lotes,
  Preguntas,
  Seguridad,
  Servicios,
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
      publisher: { "@id": `${SITE_URL}/#bono` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#bono`,
      name: site.developer,
      // TODO: url, logo y sameAs (redes y Google Business) de Bono.
    },
    {
      "@type": "Place",
      "@id": `${SITE_URL}/#qercia`,
      name: site.name,
      description:
        "Fraccionamiento de lotes residenciales desde 500 m² en Camino al Diente, Cañada del Sur, Monterrey.",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
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
        <Lotes />
        <Servicios />
        <Ubicacion />
        <Amenidades />
        <Seguridad />
        <Desarrollador />
        <Preguntas />
        <section id="contacto" className="py-[90px] md:py-[100px]">
          <div className="mx-auto grid w-full max-w-[1230px] gap-14 px-5 md:px-[65px] lg:grid-cols-12 lg:gap-10 xl:px-0">
            <div className="lg:col-span-5" data-reveal>
              <Eyebrow>Contacto</Eyebrow>
              <h2 className={`${h2} text-ink`}>Agenda tu visita al terreno</h2>
              <p className="mt-6 max-w-md">
                Recorre los lotes disponibles con un asesor y llévate el plano para tu arquitecto.
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
