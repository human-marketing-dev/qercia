import { Photo } from "@/app/_components/photo";
import { Arrow, Button, Eyebrow, SplitTitle, TextLink, h2, h3, inner } from "@/app/_components/ui";
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

const delay = (i: number) => ({ "--delay": `${i * 0.08}s` }) as React.CSSProperties;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-[100svh] min-h-[620px] items-end overflow-hidden rounded-b-[20px] text-background md:h-[720px] md:min-h-0"
    >
      <Photo
        src={fotoExterior}
        alt="Render de la casa club de Qercia iluminada de noche, rodeada de montañas"
        sizes="100vw"
        eager
        className="absolute inset-0"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/45 to-transparent" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <div className={`relative pb-14 md:pb-[70px] ${inner}`}>
        <Eyebrow light>Camino al Diente · Carretera Nacional</Eyebrow>
        <SplitTitle
          text="Un oasis urbano para vivir entre montañas"
          className="max-w-[820px] text-[40px] leading-[1.1] tracking-[-0.025em] md:text-[58px] md:leading-[1.13]"
        />
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[540px] text-[17px] leading-[1.7] text-background/80">
            Terrenos desde 500 metros cuadrados en Camino al Diente, desde 8.3 millones de pesos. Listos para
            escriturar, con entrega en 2027 y 12 mensualidades.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto" tone="light">
              Agenda una visita
            </Button>
            {site.whatsapp && (
              <Button
                href={whatsappHref("Hola, me interesa información de los terrenos en Qercia.")}
                tone="outline"
              >
                Escríbenos por WhatsApp
              </Button>
            )}
          </div>
        </div>
        <p className="mt-8 text-[13px] text-background/70">{disclaimer}</p>
      </div>
    </section>
  );
}

export function KeyFacts() {
  return (
    <div className="pt-[70px] md:pt-[90px]">
      <ul className={`grid grid-cols-2 border-y border-line md:grid-cols-5 ${inner} md:!px-0 xl:max-w-[1230px]`}>
        {keyFacts.map((fact, i) => (
          <li
            key={fact.label}
            data-reveal
            style={delay(i)}
            className={`border-line py-7 md:px-7 md:py-9 md:first:pl-0 ${i > 0 ? "md:border-l" : ""} ${
              i % 2 === 1 ? "border-l pl-5" : ""
            } ${i < 4 ? "border-b md:border-b-0" : ""} ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <span className="block text-[32px] font-medium leading-none tracking-[-0.03em] text-ink md:text-[40px]">
              {fact.value}
            </span>
            <span className="mt-3 block text-[15px] leading-snug text-muted">{fact.label}</span>
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
    <section id="concepto" className="py-[90px] md:pb-[100px]">
      <div className={inner}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10" data-reveal>
          <div className="lg:col-span-7">
            <Eyebrow>Oasis urbano</Eyebrow>
            <h2 className={`${h2} text-ink`}>Una fusión única entre naturaleza y calidad en el estilo de vida</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="max-w-md">
              Construye tu casa entre montañas, rodeado de más de 27,000 metros cuadrados de áreas verdes y
              amenidades para toda la familia, en Camino al Diente, una de las zonas más cercanas de Carretera
              Nacional.
            </p>
            <div className="mt-6">
              <TextLink href="#contacto">Agenda una visita</TextLink>
            </div>
          </div>
        </div>

        <div className="group mt-14 overflow-hidden rounded-[20px]" data-reveal>
          <Photo
            src={fotoCaminoAlDiente}
            alt="Render de una calle de Camino al Diente con árboles y jardineras a ambos lados"
            sizes="(min-width: 1360px) 1230px, 100vw"
            className="aspect-[4/3] w-full md:aspect-[16/7]"
          />
        </div>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-[30px]">
          {conceptPoints.map((point, i) => (
            <li key={point.title} data-reveal style={delay(i)} className="group border-t border-line pt-6">
              <span className="text-[15px] font-medium text-accent">0{i + 1}</span>
              <h3 className={`${h3} mt-4 text-ink`}>
                <span className="underline-draw">{point.title}</span>
              </h3>
              <p className="mt-4 text-[17px] leading-[1.75]">{point.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const parks = [
  {
    title: "Parque Reserva",
    body: "Con mirador y un recorrido de 1,100 metros para caminar entre montañas.",
  },
  {
    title: "Parque Lineal",
    body: "Parte del paisajismo del proyecto, junto con el Parque Reserva y el resto de las áreas verdes.",
  },
];

export function Parques() {
  return (
    <section id="parques" className="rounded-[20px] bg-ink py-[90px] text-background/75 md:py-[100px]">
      <div className={inner}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col lg:col-span-5" data-reveal>
            <Eyebrow light>Parques y paisajismo</Eyebrow>
            <h2 className={`${h2} text-background`}>Áreas verdes con paisajismo de primer nivel</h2>
            <div className="mt-12 lg:mt-auto">
              <p className="text-[64px] font-medium leading-none tracking-[-0.04em] text-background md:text-[88px]">
                27,000 m²
              </p>
              <p className="mt-5 max-w-sm">
                Más de 27,000 metros cuadrados de áreas verdes, con paisajismo de Harari Landscape, la firma que
                también ejecuta la urbanización y el paisajismo de Camino al Diente.
              </p>
            </div>
          </div>
          <div className="group overflow-hidden rounded-[20px] lg:col-span-7" data-reveal style={delay(1)}>
            <Photo
              src={fotoAndador}
              alt="Render de un andador arbolado junto a la calle del desarrollo"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-[4/3] w-full"
            />
          </div>
        </div>

        <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:mt-[30px] lg:gap-[30px]">
          {parks.map((park, i) => (
            <li
              key={park.title}
              data-reveal
              style={delay(i)}
              className="rounded-[20px] bg-white/[0.04] p-7 ring-1 ring-white/10 md:p-9"
            >
              <p className={`${h3} font-medium text-background`}>{park.title}</p>
              <p className="mt-3 max-w-md text-[17px] leading-[1.7]">{park.body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-[14px] text-background/60">
          Los parques y el paisajismo forman parte del proyecto, con entrega en 2027. {disclaimer}
        </p>
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
    <section id="amenidades" className="py-[90px] md:py-[100px]">
      <div className={inner}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10" data-reveal>
          <div className="lg:col-span-7">
            <Eyebrow>Amenidades</Eyebrow>
            <h2 className={`${h2} text-ink`}>15 amenidades para toda la familia</h2>
          </div>
          <p className="max-w-md lg:col-span-5">
            Dentro de las áreas verdes del proyecto: alberca, gimnasio y casa club, y también sala de cine, roof
            garden, business hub y centro culinario.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="group overflow-hidden rounded-[20px] lg:col-span-7" data-reveal>
            <Photo
              src={fotoAlberca}
              alt="Render de la alberca con camastros y vista a la sierra"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-[4/3] w-full"
            />
          </div>
          <ul className="grid grid-cols-1 gap-x-[30px] self-start border-t border-line sm:grid-cols-2 lg:col-span-5">
            {amenities.map((name, i) => (
              <li
                key={name}
                data-reveal
                style={delay(i % 5)}
                className="flex items-baseline gap-3 border-b border-line py-3.5 text-[17px] text-ink"
              >
                <span className="text-[13px] tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                {name}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:mt-[30px] lg:gap-[30px]">
          {gallery.map((photo, i) => (
            <li key={photo.alt} className="group overflow-hidden rounded-[20px]" data-reveal style={delay(i)}>
              <Photo src={photo.src} alt={photo.alt} sizes="(min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full" />
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[14px] text-muted">
          Las amenidades forman parte del proyecto, con entrega en 2027. {disclaimer}
        </p>
      </div>
    </section>
  );
}

const serviceIcons: Record<string, React.ReactNode> = {
  "Agua de la red": <path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z" />,
  "Gas natural": <path d="M12 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-3 2-4 2-7 2 1 3 3 3 3s1-3 0-7z" />,
  "Electricidad CFE": <path d="M13 2L5 14h6l-1 8 8-12h-6l1-8z" />,
  Drenaje: <path d="M4 7h16M4 12h16M4 17h16M8 4v16M16 4v16" />,
  "Fibra óptica": (
    <>
      <path d="M2 9a15 15 0 0 1 20 0" />
      <path d="M5.5 12.5a10 10 0 0 1 13 0" />
      <path d="M9 16a5 5 0 0 1 6 0" />
      <circle cx="12" cy="19.5" r="0.8" />
    </>
  ),
};

export function Infraestructura() {
  return (
    <section id="infraestructura" className="rounded-[20px] bg-ink py-[90px] text-background/75 md:py-[100px]">
      <div className={inner}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10" data-reveal>
          <div className="lg:col-span-7">
            <Eyebrow light>Infraestructura y seguridad</Eyebrow>
            <h2 className={`${h2} text-background`}>Infraestructura completa y seguridad para tu familia</h2>
          </div>
          <p className="max-w-md lg:col-span-5">
            Agua de la red, drenaje, gas natural y electricidad subterráneos, y fibra óptica. Todo el desarrollo
            tiene barda perimetral, cámaras de circuito cerrado y accesos con revisión.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-16 lg:grid-cols-5 lg:gap-[30px]">
          {services.map((service, i) => (
            <li
              key={service.title}
              data-reveal
              style={delay(i)}
              className="rounded-[20px] bg-white/[0.04] p-7 ring-1 ring-white/10 transition-colors hover:bg-white/[0.08]"
            >
              <svg
                aria-hidden
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                {serviceIcons[service.title]}
              </svg>
              <p className={`${h3} mt-10 font-medium text-background`}>{service.title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-background/60">{service.detail}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-12 grid border-t border-white/15 md:grid-cols-3 md:gap-[30px]">
          {security.map((point, i) => (
            <li
              key={point}
              data-reveal
              style={delay(i)}
              className="flex items-center gap-4 border-b border-white/15 py-5 font-medium text-background"
            >
              <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-accent" />
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
    <section id="ubicacion" className="py-[90px] md:py-[100px]">
      <div className={inner}>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-5" data-reveal>
            <Eyebrow>Ubicación</Eyebrow>
            <h2 className={`${h2} text-ink`}>Camino al Diente, al inicio de Carretera Nacional</h2>
            <p className="mt-6 max-w-md">
              Una de las zonas más cercanas de Carretera Nacional, minutos antes de Valle Alto. Qercia colinda con el
              Club Hípico La Silla y el río La Silla. Vives entre montañas, cerca de colegios, hospital,
              supermercados y centros comerciales.
            </p>
            <address className="mt-8 border-l-2 border-accent pl-5 text-[17px] not-italic leading-[1.7] text-ink">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region}
            </address>
            <div className="mt-8">
              <TextLink href={mapsUrl} target="_blank" rel="noopener noreferrer">
                Cómo llegar
              </TextLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-[20px] bg-beige lg:col-span-7" data-reveal style={delay(1)}>
            <iframe
              title="Mapa de ubicación de Qercia en Camino al Diente, Carretera Nacional"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=14&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-square w-full border-0 grayscale md:aspect-[4/3]"
            />
          </div>
        </div>

        <div className="mt-20" data-reveal>
          <h3 className={`${h3} text-ink`}>Alrededor de Qercia</h3>
          <div className="mt-8 grid gap-x-[30px] gap-y-10 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {entorno.map((group, i) => (
              <div key={group.category} data-reveal style={delay(i % 3)}>
                <p className="flex items-center gap-3 text-[15px] font-medium leading-none text-muted">
                  <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
                  {group.category}
                </p>
                <ul className="mt-4">
                  {group.places.map((place) => (
                    <li
                      key={place.name}
                      className="flex items-baseline justify-between gap-6 border-b border-line py-3 text-[17px]"
                    >
                      <span className="text-ink">{place.name}</span>
                      <span className="shrink-0 tabular-nums text-muted">{place.distance}</span>
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
    <section id="respaldo" className="rounded-[20px] bg-beige py-[90px] md:py-[100px]">
      <div className={`grid gap-12 lg:grid-cols-12 lg:gap-10 ${inner}`}>
        <div className="lg:col-span-5" data-reveal>
          <Eyebrow>Respaldo</Eyebrow>
          <h2 className={`${h2} text-ink`}>Firmas de primer nivel detrás del proyecto</h2>
        </div>
        <ul className="grid gap-10 sm:grid-cols-2 sm:gap-[30px] lg:col-span-7">
          {credits.map((credit, i) => (
            <li key={credit.name} data-reveal style={delay(i)} className="border-t border-ink/20 pt-6">
              <p className="text-[15px] font-medium text-accent">{credit.role}</p>
              <p className={`${h3} mt-3 font-medium text-ink`}>{credit.name}</p>
              <p className="mt-4 text-[17px] leading-[1.75]">{credit.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Preguntas() {
  return (
    <section id="preguntas" className="py-[90px] md:py-[100px]">
      <div className={`grid gap-12 lg:grid-cols-12 lg:gap-10 ${inner}`}>
        <div className="lg:col-span-4" data-reveal>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className={`${h2} text-ink`}>Lo que más nos preguntan</h2>
        </div>
        <div className="border-t border-line lg:col-span-7 lg:col-start-6" data-reveal style={delay(1)}>
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className={`${h3} text-ink`}>{faq.q}</h3>
                <span
                  aria-hidden
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-xl leading-none text-accent transition-[transform,background-color] duration-300 group-open:rotate-45 group-hover:bg-beige"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-[17px] leading-[1.75]">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="overflow-hidden rounded-t-[20px] bg-ink text-background/60 md:mx-10">
      <div className={`pt-[90px] md:pt-[100px] ${inner}`}>
        <div className="flex items-end justify-between gap-6">
          <a href="#contacto" className="group inline-flex items-center gap-4 text-[30px] font-medium leading-tight tracking-[-0.02em] text-background md:text-[42px]">
            <span className="underline-draw is-static pb-1">Vivir entre montañas</span>
            <Arrow className="h-5 w-7" />
          </a>
          <span role="img" aria-label="Qercia Residencial" className="logo h-24 w-24 shrink-0 text-background md:h-32 md:w-32" />
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/15 pt-10 text-[15px] leading-relaxed md:grid-cols-3">
          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="group text-background">
                    <span className="underline-draw pb-0.5">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* TODO: teléfono y horario de la oficina de ventas (deben coincidir con Google Business). */}
          <address className="not-italic">
            {site.name}
            <br />
            {site.address.street}, {site.address.city}, {site.address.region}
          </address>
          <p className="md:text-right">{disclaimer}</p>
        </div>
      </div>

      <p
        aria-hidden
        className="mt-10 select-none text-center text-[23vw] font-medium leading-[0.75] tracking-[0.02em] text-white/[0.05] md:text-[19vw]"
      >
        QERCIA
      </p>

      <div className={`flex flex-col gap-2 border-t border-white/10 py-6 text-[13px] sm:flex-row sm:gap-6 ${inner}`}>
        {/* TODO: enlazar el aviso de privacidad cuando exista. */}
        <p>Aviso de privacidad</p>
        <p>© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
