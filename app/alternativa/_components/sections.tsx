import { Photo } from "@/app/_components/photo";
import { CountUp } from "@/app/alternativa/_components/motion";
import { SplitTitle } from "@/app/_components/ui";
import { Button, Eyebrow, TextLink, accent, caps, display, h2, h3, wrap } from "@/app/alternativa/_components/ui";
import {
  amenities,
  disclaimer,
  entorno,
  faqs,
  keyFacts,
  nav,
  security,
  services,
  site,
  whatsappHref,
} from "@/app/_lib/site";
import fotoAlberca from "@/public/fotos/01_Qercia_Alberca.webp";
import fotoTerraza from "@/public/fotos/03_Qercia_Terraza.webp";
import fotoExterior from "@/public/fotos/04_Qercia_Exterior.webp";
import fotoCentroCulinario from "@/public/fotos/Qercia_CentroCulinario_interior.webp";
import fotoCaminoAlDiente from "@/public/fotos/Render Camino al Diente.webp";
import fotoAndador from "@/public/fotos/Render Paisajismo Calle Real de Catorce 4.webp";

const delay = (i: number) => ({ "--delay": `${i * 0.1}s` }) as React.CSSProperties;
const section = "py-[100px] md:py-[140px]";

export function Hero() {
  return (
    <section id="inicio" className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden text-ivory">
      <div data-parallax="0.3" className="hero-zoom absolute inset-0">
        <Photo
          src={fotoExterior}
          alt="Render de la casa club de Qercia iluminada de noche, rodeada de montañas"
          sizes="100vw"
          eager
          className="absolute inset-0"
        />
      </div>
      {/* Velo para que el texto se lea sobre la foto. */}
      <div aria-hidden className="absolute inset-0 bg-midnight/35" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-midnight/50 via-transparent to-midnight/80" />

      <div className={`relative pb-16 text-center md:pb-24 ${wrap}`}>
        <p className={`hero-in ${caps} text-ivory/85`} style={{ "--i": 0 } as React.CSSProperties}>
          Camino al Diente · Carretera Nacional
        </p>
        <SplitTitle
          text="Un oasis urbano para vivir entre montañas"
          className={`${display} mx-auto mt-6 max-w-[980px] text-[44px] leading-[1.05] md:text-[80px]`}
        />
        <p className="hero-in mx-auto mt-8 max-w-[560px] text-[17px] leading-[1.7] text-ivory/90" style={{ "--i": 6 } as React.CSSProperties}>
          Terrenos desde 500 metros cuadrados en Camino al Diente, desde 8.3 millones de pesos. Listos para escriturar,
          con entrega en 2027 y 12 mensualidades.
        </p>
        <div className="hero-in mt-10 flex flex-col justify-center gap-3 sm:flex-row" style={{ "--i": 8 } as React.CSSProperties}>
          <Button href="#contacto" tone="light">
            Agenda una visita
          </Button>
          {site.whatsapp && (
            <Button href={whatsappHref("Hola, me interesa información de los terrenos en Qercia.")} tone="line">
              WhatsApp
            </Button>
          )}
        </div>
        <p className="hero-in mt-12 text-[12px] text-ivory/70" style={{ "--i": 10 } as React.CSSProperties}>
          {disclaimer}
        </p>
      </div>
    </section>
  );
}

export function KeyFacts() {
  return (
    <div className="border-b border-hair">
      <ul className={`grid grid-cols-2 md:grid-cols-5 ${wrap}`}>
        {keyFacts.map((fact, i) => (
          <li
            key={fact.label}
            data-reveal
            style={delay(i)}
            className={`border-hair py-10 text-center md:py-14 ${i > 0 ? "md:border-l" : ""} ${
              i % 2 === 1 ? "border-l" : ""
            } ${i < 4 ? "border-b md:border-b-0" : ""} ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <span className={`${accent} block text-[34px] leading-none text-navy md:text-[44px]`}>{fact.value}</span>
            <span className={`mt-4 block ${caps} text-[11px] text-midnight/75`}>{fact.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const conceptPoints = [
  {
    title: "Montañas en todas las direcciones",
    body: "Despierta con las montañas frente a ti y deja que la naturaleza marque el ritmo de tus días. Desde Qercia ves amaneceres y atardeceres hacia cualquier lado.",
  },
  {
    title: "Terrenos desde 500 metros cuadrados",
    body: "Espacio para construir tu casa con tu arquitecto y a la medida de tu familia. Un lugar para vivir hoy y un patrimonio para después.",
  },
  {
    title: "Listos para escriturar",
    body: "Los terrenos están listos para escriturar. La entrega del proyecto es en 2027 y puedes pagar en 12 mensualidades.",
  },
];

export function Concepto() {
  return (
    <section id="concepto" className={section}>
      <div className={`text-center ${wrap}`} data-reveal>
        <div className="flex justify-center">
          <Eyebrow>Oasis urbano</Eyebrow>
        </div>
        <h2 className={`${h2} mx-auto max-w-[980px] text-navy`}>
          Una fusión única entre naturaleza y <em className={`${accent} italic`}>calidad en el estilo de vida</em>
        </h2>
        <p className="mx-auto mt-8 max-w-[620px] text-[18px] leading-[1.8] text-midnight/75">
          Construye tu casa entre montañas, rodeado de más de 27,000 metros cuadrados de áreas verdes y amenidades para
          toda la familia, en Camino al Diente, una de las zonas más cercanas de Carretera Nacional.
        </p>
      </div>

      <div className={`mt-20 md:mt-28 ${wrap}`}>
        <div data-reveal="image">
          <Photo
            src={fotoCaminoAlDiente}
            alt="Render de una calle de Camino al Diente con árboles y jardineras a ambos lados"
            sizes="(min-width: 1296px) 1200px, 100vw"
            className="aspect-[4/3] w-full md:aspect-[16/7]"
          />
        </div>
      </div>

      <ol className={`mt-16 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-16 ${wrap}`}>
        {conceptPoints.map((point, i) => (
          <li key={point.title} data-reveal style={delay(i)} className="border-t border-hair pt-8">
            <span className={`${caps} text-navy`}>0{i + 1}</span>
            <h3 className={`${h3} mt-5 text-navy`}>{point.title}</h3>
            <p className="mt-5 text-[17px] leading-[1.8] text-midnight/75">{point.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const parks = [
  { title: "Parque Reserva", body: "Con mirador y un recorrido de 1,100 metros para caminar entre montañas." },
  {
    title: "Parque Lineal",
    body: "Parte del paisajismo del proyecto, junto con el Parque Reserva y el resto de las áreas verdes.",
  },
];

const marqueeWords = ["Vivir entre montañas", "Oasis urbano", "Camino al Diente", "Carretera Nacional"];

export function Franja() {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div aria-hidden className="overflow-hidden border-y border-hair py-7 md:py-9">
      <div className="marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {row.map((word, i) => (
              <span key={i} className="flex items-center whitespace-nowrap">
                <span className={`${accent} px-8 text-[30px] italic text-navy md:px-12 md:text-[44px]`}>{word}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-sky" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Parques() {
  return (
    <section id="parques" className="bg-navy text-ivory/75">
      <div className={`grid gap-14 py-[100px] md:py-[140px] lg:grid-cols-12 lg:items-center lg:gap-12 ${wrap}`}>
        <div data-reveal="image" className="lg:col-span-6">
          <Photo
            src={fotoAndador}
            alt="Render de un andador arbolado junto a la calle del desarrollo"
            sizes="(min-width: 1296px) 600px, (min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/3] w-full lg:aspect-[6/7]"
          />
        </div>
        <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-8" data-reveal>
          <Eyebrow light>Parques y paisajismo</Eyebrow>
          <h2 className={`${h2} text-ivory`}>Áreas verdes con paisajismo de primer nivel</h2>
          <p className={`${accent} mt-12 text-[64px] leading-none text-sky md:text-[88px]`}>
            <CountUp to={27000} />
            &nbsp;m²
          </p>
          <p className="mt-6 max-w-md text-[17px] leading-[1.8]">
            Más de 27,000 metros cuadrados de áreas verdes, con paisajismo de Harari Landscape, la firma que también
            ejecuta la urbanización y el paisajismo de Camino al Diente.
          </p>
          <ul className="mt-12 border-t border-white/15">
            {parks.map((park) => (
              <li key={park.title} className="grid gap-2 border-b border-white/15 py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
                <p className={`${display} text-[21px] leading-tight text-ivory`}>{park.title}</p>
                <p className="text-[16px] leading-[1.7]">{park.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[13px] text-ivory/55">
            Los parques y el paisajismo forman parte del proyecto, con entrega en 2027. {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: fotoTerraza, alt: "Render de una terraza techada con camastros y vista a las montañas" },
  { src: fotoCentroCulinario, alt: "Render del interior del centro culinario con mesas y barra" },
];

export function Amenidades() {
  return (
    <section id="amenidades" className={section}>
      <div className={wrap}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12" data-reveal>
          <div className="lg:col-span-7">
            <Eyebrow>Amenidades</Eyebrow>
            <h2 className={`${h2} text-navy`}>15 amenidades para toda la familia</h2>
          </div>
          <p className="max-w-md text-[17px] leading-[1.8] text-midnight/75 lg:col-span-5">
            Dentro de las áreas verdes del proyecto: alberca, gimnasio y casa club, y también sala de cine, roof garden,
            business hub y centro culinario.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7" data-reveal="image">
            <Photo
              src={fotoAlberca}
              alt="Render de la alberca con camastros y vista a la sierra"
              sizes="(min-width: 1296px) 700px, (min-width: 1024px) 58vw, 100vw"
              className="aspect-[4/3] w-full lg:aspect-[7/6]"
            />
          </div>
          <div className="flex flex-col lg:col-span-5">
            <ul className="grid grid-cols-1 gap-x-10 border-t border-hair sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {amenities.map((name, i) => (
                <li
                  key={name}
                  data-reveal
                  style={delay(i % 5)}
                  className="flex items-baseline gap-4 border-b border-hair py-4 text-[16px] text-navy"
                >
                  <span className="text-[11px] tabular-nums tracking-[0.1em] text-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {name}
                </li>
              ))}
            </ul>
            <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-auto lg:pt-12">
              {gallery.map((photo) => (
                <div key={photo.alt} data-reveal="image">
                  <Photo src={photo.src} alt={photo.alt} sizes="(min-width: 1024px) 250px, 50vw" className="aspect-[4/3] w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-[13px] text-midnight/75">
          Las amenidades forman parte del proyecto, con entrega en 2027. {disclaimer}
        </p>
      </div>
    </section>
  );
}

export function Infraestructura() {
  return (
    <section id="infraestructura" className={`bg-stone ${section}`}>
      <div className={wrap}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12" data-reveal>
          <div className="lg:col-span-7">
            <Eyebrow>Infraestructura y seguridad</Eyebrow>
            <h2 className={`${h2} text-navy`}>Infraestructura completa y seguridad para tu familia</h2>
          </div>
          <p className="max-w-md text-[17px] leading-[1.8] text-midnight/75 lg:col-span-5">
            Agua de la red, drenaje, gas natural y electricidad subterráneos, y fibra óptica. Todo el desarrollo tiene
            barda perimetral, cámaras de circuito cerrado y accesos con revisión.
          </p>
        </div>

        <ul className="mt-16 grid border-t border-navy/20 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, i) => (
            <li
              key={service.title}
              data-reveal
              style={delay(i)}
              className={`border-b border-navy/20 py-8 lg:border-b-0 lg:px-6 lg:py-10 ${i > 0 ? "lg:border-l" : "lg:pl-0"}`}
            >
              <p className={`${display} text-[21px] leading-tight text-navy`}>{service.title}</p>
              <p className="mt-2 text-[15px] text-midnight/75">{service.detail}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-12 flex flex-col gap-4 md:flex-row md:gap-12">
          {security.map((point) => (
            <li key={point} className={`flex items-center gap-4 ${caps} text-navy`}>
              <span aria-hidden className="h-px w-6 bg-sky" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Ubicacion() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;
  return (
    <section id="ubicacion" className={section}>
      <div className={wrap}>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-5" data-reveal>
            <Eyebrow>Ubicación</Eyebrow>
            <h2 className={`${h2} text-navy`}>Camino al Diente, al inicio de Carretera Nacional</h2>
            <p className="mt-8 max-w-md text-[17px] leading-[1.8] text-midnight/75">
              Una de las zonas más cercanas de Carretera Nacional, minutos antes de Valle Alto. Qercia colinda con el
              Club Hípico La Silla y el río La Silla. Vives entre montañas, cerca de colegios, hospital, supermercados y
              centros comerciales.
            </p>
            <address className={`${display} mt-10 text-[20px] not-italic leading-[1.4] text-navy`}>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region}
            </address>
            <div className="mt-10">
              <TextLink href={mapsUrl} target="_blank" rel="noopener noreferrer">
                Cómo llegar
              </TextLink>
            </div>
          </div>
          <div className="bg-stone lg:col-span-7" data-reveal style={delay(1)}>
            <iframe
              title="Mapa de ubicación de Qercia en Camino al Diente, Carretera Nacional"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=14&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-square w-full border-0 grayscale md:aspect-[4/3]"
            />
          </div>
        </div>

        <div className="mt-24" data-reveal>
          <h3 className={`${h3} text-navy`}>Alrededor de Qercia</h3>
          <div className="mt-10 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {entorno.map((group, i) => (
              <div key={group.category} data-reveal style={delay(i % 3)}>
                <p className={`${caps} text-[11px] text-navy`}>{group.category}</p>
                <ul className="mt-4 border-t border-hair">
                  {group.places.map((place) => (
                    <li
                      key={place.name}
                      className="flex items-baseline justify-between gap-6 border-b border-hair py-3.5 text-[16px]"
                    >
                      <span className="text-navy">{place.name}</span>
                      <span className="shrink-0 tabular-nums text-midnight/75">{place.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const credits = [
  {
    name: "Harari Landscape",
    role: "Paisajismo",
    body: "Diseña el paisajismo de Qercia y también ejecuta la urbanización y el paisajismo de Camino al Diente.",
  },
  {
    name: "Artigas Arquitectos",
    role: "Arquitectura",
    body: "La arquitectura de Qercia lleva el respaldo de Artigas Arquitectos.",
  },
];

export function Respaldo() {
  return (
    <section id="respaldo" className={`bg-sky/15 ${section}`}>
      <div className={`text-center ${wrap}`}>
        <div className="flex justify-center" data-reveal>
          <Eyebrow>Respaldo</Eyebrow>
        </div>
        <h2 className={`${h2} mx-auto max-w-[760px] text-navy`} data-reveal>
          Firmas de primer nivel detrás del proyecto
        </h2>
        <ul className="mx-auto mt-16 grid max-w-[980px] gap-12 md:grid-cols-2 md:gap-0">
          {credits.map((credit, i) => (
            <li key={credit.name} data-reveal style={delay(i)} className={`px-6 md:px-12 ${i > 0 ? "md:border-l md:border-navy/20" : ""}`}>
              <p className={`${caps} text-navy`}>{credit.role}</p>
              <p className={`${accent} mt-4 text-[28px] leading-tight text-navy md:text-[34px]`}>{credit.name}</p>
              <p className="mx-auto mt-4 max-w-sm text-[16px] leading-[1.75] text-midnight/75">{credit.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Preguntas() {
  return (
    <section id="preguntas" className={section}>
      <div className={`grid gap-12 lg:grid-cols-12 lg:gap-12 ${wrap}`}>
        <div className="lg:col-span-4" data-reveal>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className={`${h2} text-navy`}>Lo que más nos preguntan</h2>
        </div>
        <div className="border-t border-hair lg:col-span-7 lg:col-start-6" data-reveal style={delay(1)}>
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-hair">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden">
                <h3 className={`${display} text-[20px] leading-snug text-navy md:text-[22px]`}>{faq.q}</h3>
                <span
                  aria-hidden
                  className="text-[26px] font-light leading-none text-navy transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-8 text-[17px] leading-[1.8] text-midnight/75">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-midnight text-ivory/60">
      <div className={`py-[100px] text-center md:py-[130px] ${wrap}`}>
        <span role="img" aria-label="Qercia Residencial" className="logo mx-auto h-24 w-24 text-ivory md:h-28 md:w-28" />
        <p className={`${accent} mt-10 text-[38px] italic leading-tight text-ivory md:text-[64px]`}>Vivir entre montañas</p>
        <a
          href="#contacto"
          className={`mt-10 inline-block border border-ivory/50 px-9 py-5 text-ivory transition-colors hover:bg-ivory hover:text-navy ${caps}`}
        >
          Agenda una visita
        </a>
      </div>

      <div className={`grid gap-8 border-t border-white/15 py-10 text-[14px] leading-relaxed md:grid-cols-3 ${wrap}`}>
        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={`${caps} text-[11px] text-ivory hover:opacity-60`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* TODO: teléfono y horario de la oficina de ventas (deben coincidir con Google Business). */}
        <address className="not-italic md:text-center">
          {site.name}
          <br />
          {site.address.street}, {site.address.city}, {site.address.region}
        </address>
        <div className="md:text-right">
          <p>{disclaimer}</p>
          {/* TODO: enlazar el aviso de privacidad cuando exista. */}
          <p className="mt-2">Aviso de privacidad · © 2026 {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
