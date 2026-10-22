import { Photo } from "@/app/_components/photo";
import { Arrow, Button, Eyebrow, SplitTitle, TextLink, h2, h3, inner } from "@/app/_components/ui";
import { amenities, faqs, keyFacts, nav, services, site, whatsappHref } from "@/app/_lib/site";
import fotoAlberca from "@/public/fotos/01_Qercia_Alberca.webp";
import fotoTerraza from "@/public/fotos/03_Qercia_Terraza.webp";
import fotoExterior from "@/public/fotos/04_Qercia_Exterior.webp";
import fotoCentroCulinario from "@/public/fotos/Qercia_CentroCulinario_interior.webp";
import fotoCaminoAlDiente from "@/public/fotos/Render Camino al Diente.webp";
import fotoAndador from "@/public/fotos/Render Paisajismo Calle Real de Catorce 4.webp";
import fotoJuegos from "@/public/fotos/Render Paisajismo Calle Real de Catorce 5.webp";

const delay = (i: number) => ({ "--delay": `${i * 0.08}s` }) as React.CSSProperties;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-[100svh] min-h-[620px] items-end overflow-hidden rounded-b-[20px] text-background md:h-[720px] md:min-h-0"
    >
      <Photo
        src={fotoExterior}
        alt="Casa club de Qercia iluminada de noche en lo alto del cerro, rodeada de montañas"
        sizes="100vw"
        eager
        className="absolute inset-0"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/45 to-transparent" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <div className={`relative pb-14 md:pb-[70px] ${inner}`}>
        <Eyebrow light>Camino al Diente · Cañada del Sur · Monterrey</Eyebrow>
        <SplitTitle
          text="Lotes residenciales en Carretera Nacional, cerca de San Pedro"
          className="max-w-[820px] text-[40px] leading-[1.1] tracking-[-0.025em] md:text-[58px] md:leading-[1.13]"
        />
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[520px] text-[17px] leading-[1.7] text-background/80">
            Lotes desde 500 m² con frentes de alrededor de 20 m, servicios de red y escritura lista. Desde $8 mdp.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto" tone="light">
              Agenda una visita al terreno
            </Button>
            {site.whatsapp && (
              <Button
                href={whatsappHref("Hola, me interesa información de los lotes en Qercia.")}
                tone="outline"
              >
                Escríbenos por WhatsApp
              </Button>
            )}
          </div>
        </div>
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

const lotPoints = [
  {
    title: "Lotes desde 500 m² con frentes de ~20 m",
    body: "Un frente de alrededor de 20 m deja espacio para cochera amplia, jardín al frente y una fachada que no se ve apretada. Los lotes empiezan en 500 m².",
  },
  {
    title: "Terreno plano para construir sin sorpresas",
    body: "El 70% del terreno del fraccionamiento tiene una pendiente de 0° a 15°. En un lote así, por lo general, se necesitan menos muros de contención y menos movimiento de tierra.",
  },
  {
    title: "Escritura lista desde el primer día",
    body: "Los lotes están listos para escriturar. Cuando compras, firmas escritura, no una promesa a futuro.",
  },
];

export function Lotes() {
  return (
    <section id="lotes" className="py-[90px] md:pb-[100px]">
      <div className={inner}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10" data-reveal>
          <div className="lg:col-span-7">
            <Eyebrow>Los lotes</Eyebrow>
            <h2 className={`${h2} text-ink`}>Tu lote para construir, listo para escriturar</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="max-w-md">
              Qercia no vende casas de catálogo. Vende el terreno para que construyas la tuya, con tu arquitecto y a
              tu medida.
            </p>
            <div className="mt-6">
              <TextLink href="#contacto">Pide el plano de lotes disponibles</TextLink>
            </div>
          </div>
        </div>

        <div className="group mt-14 overflow-hidden rounded-[20px]" data-reveal>
          <Photo
            src={fotoCaminoAlDiente}
            alt="Calle de Camino al Diente con árboles y jardineras a ambos lados"
            sizes="(min-width: 1360px) 1230px, 100vw"
            className="aspect-[4/3] w-full md:aspect-[16/7]"
          />
        </div>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-[30px]">
          {lotPoints.map((point, i) => (
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

const serviceIcons: Record<string, React.ReactNode> = {
  "Agua de red": <path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z" />,
  "Gas natural": <path d="M12 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-3 2-4 2-7 2 1 3 3 3 3s1-3 0-7z" />,
  "Luz CFE": <path d="M13 2L5 14h6l-1 8 8-12h-6l1-8z" />,
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

export function Servicios() {
  return (
    <section id="servicios" className="rounded-[20px] bg-ink py-[90px] text-background/75 md:py-[100px]">
      <div className={inner}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10" data-reveal>
          <div className="lg:col-span-7">
            <Eyebrow light>Servicios</Eyebrow>
            <h2 className={`${h2} text-background`}>Servicios de red hasta tu lote</h2>
          </div>
          <p className="max-w-md lg:col-span-5">
            Agua de red, no de pozo. Gas natural, luz de CFE, drenaje y fibra óptica llegan hasta el lote. Construyes
            y te conectas.
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
      </div>
    </section>
  );
}

export function Ubicacion() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;
  return (
    <section id="ubicacion" className="py-[90px] md:py-[100px]">
      <div className={`grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10 ${inner}`}>
        <div className="lg:col-span-5" data-reveal>
          <Eyebrow>Ubicación</Eyebrow>
          <h2 className={`${h2} text-ink`}>Ubicación: Camino al Diente, Cañada del Sur</h2>
          <p className="mt-6 max-w-md">
            Qercia está en Camino al Diente, en Cañada del Sur, al sur de Monterrey, Nuevo León. Vives rodeado de
            montaña y sigues cerca de San Pedro para ir al trabajo, a la escuela o a ver a la familia.
          </p>
          <address className="mt-8 border-l-2 border-accent pl-5 text-[17px] not-italic leading-[1.7] text-ink">
            {site.address.street}
            <br />
            {site.address.neighborhood}, {site.address.city}
            <br />
            {site.address.region}, México
          </address>
          <div className="mt-8">
            <TextLink href={mapsUrl} target="_blank" rel="noopener noreferrer">
              Cómo llegar
            </TextLink>
          </div>
        </div>

        <div className="overflow-hidden rounded-[20px] bg-beige lg:col-span-7" data-reveal style={delay(1)}>
          <iframe
            title="Mapa de ubicación de Qercia en Camino al Diente, Monterrey"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=14&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block aspect-square w-full border-0 grayscale md:aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: fotoTerraza, alt: "Terraza techada con camastros y vista a las montañas" },
  { src: fotoCentroCulinario, alt: "Interior del centro culinario con mesas y barra" },
  { src: fotoJuegos, alt: "Andador arbolado con área de juegos infantiles" },
];

export function Amenidades() {
  return (
    <section id="amenidades" className="rounded-[20px] bg-ink py-[90px] text-background/75 md:py-[100px]">
      <div className={inner}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col lg:col-span-5" data-reveal>
            <Eyebrow light>Amenidades</Eyebrow>
            <h2 className={`${h2} text-background`}>Áreas verdes y amenidades</h2>
            <div className="mt-12 lg:mt-auto">
              <p className="text-[64px] font-medium leading-none tracking-[-0.04em] text-background md:text-[96px]">
                27,000 m²
              </p>
              <p className="mt-5 max-w-sm">
                de áreas verdes dentro del fraccionamiento, y amenidades para usar sin salir de casa.
              </p>
            </div>
          </div>
          <div className="group overflow-hidden rounded-[20px] lg:col-span-7" data-reveal style={delay(1)}>
            <Photo
              src={fotoAlberca}
              alt="Alberca infinity con camastros y vista a la sierra"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-[4/3] w-full"
            />
          </div>
        </div>

        <ul className="mt-3 grid gap-3 sm:grid-cols-3 lg:mt-[30px] lg:gap-[30px]">
          {gallery.map((photo, i) => (
            <li key={photo.alt} className="group overflow-hidden rounded-[20px]" data-reveal style={delay(i)}>
              <Photo src={photo.src} alt={photo.alt} sizes="(min-width: 640px) 33vw, 100vw" className="aspect-[4/3] w-full" />
            </li>
          ))}
        </ul>

        <ul className="mt-14 grid grid-cols-2 gap-x-[30px] border-t border-white/15 sm:grid-cols-3 lg:grid-cols-5">
          {amenities.map((name, i) => (
            <li
              key={name}
              data-reveal
              style={delay(i % 5)}
              className="flex items-baseline gap-3 border-b border-white/15 py-5 text-[17px] text-background"
            >
              <span className="text-[13px] tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const securityPoints = ["Barda perimetral", "Cámaras", "Acceso con revisión"];

export function Seguridad() {
  return (
    <section id="seguridad" className="py-[90px] md:py-[100px]">
      <div className={`grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10 ${inner}`}>
        <div className="group overflow-hidden rounded-[20px] lg:col-span-6" data-reveal>
          <Photo
            src={fotoAndador}
            alt="Andador peatonal arbolado junto a la calle del fraccionamiento"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-square w-full"
          />
        </div>
        <div className="lg:col-span-5 lg:col-start-8" data-reveal style={delay(1)}>
          <Eyebrow>Seguridad</Eyebrow>
          <h2 className={`${h2} text-ink`}>Seguridad en el acceso y el perímetro</h2>
          <p className="mt-6 max-w-md">
            Barda perimetral, cámaras y acceso con revisión. Sabes quién entra y quién sale.
          </p>
          <ul className="mt-10 border-t border-line">
            {securityPoints.map((point) => (
              <li key={point} className="flex items-center gap-4 border-b border-line py-4 font-medium text-ink">
                <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Desarrollador() {
  return (
    <section id="desarrollador" className="rounded-[20px] bg-beige py-[90px] md:py-[100px]">
      <div className={`grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10 ${inner}`} data-reveal>
        <div className="lg:col-span-7">
          <Eyebrow>Desarrollador</Eyebrow>
          <h2 className={`${h2} text-ink`}>Un desarrollo de Bono Edificaciones</h2>
        </div>
        {/* TODO: agregar 1 o 2 datos verificables de Bono (años, proyectos entregados) y su logo. */}
        <p className="max-w-md lg:col-span-5">
          Qercia es un proyecto de Bono Edificaciones. El terreno forma parte de la historia del Mineral de San Pedro
          y San Pablo.
        </p>
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
          <h2 className={`${h2} text-ink`}>Preguntas frecuentes sobre los lotes</h2>
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
            <span className="underline-draw is-static pb-1">Agenda una visita</span>
            <Arrow className="h-5 w-7" />
          </a>
          <span role="img" aria-label="Qercia residencial" className="logo h-24 w-24 shrink-0 text-background md:h-32 md:w-32" />
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
            {site.address.street}, {site.address.neighborhood}
            <br />
            {site.address.city}, {site.address.region}, México
          </address>
          <p className="md:text-right">Un desarrollo de {site.developer}</p>
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
        <p>© 2026 {site.developer}</p>
        <p className="text-background/45 sm:ml-auto">Imágenes ilustrativas.</p>
      </div>
    </footer>
  );
}
