import { Photo } from "@/app/_components/photo";
import { amenities, faqs, keyFacts, services, site, whatsappHref } from "@/app/_lib/site";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-5 text-xs uppercase tracking-[0.22em] ${light ? "text-white/60" : "text-stone"}`}>
      {children}
    </p>
  );
}

const h2 = "font-serif text-4xl leading-[1.05] md:text-6xl";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end text-white">
      {/* TODO: reemplazar por foto aérea real (next/image con priority) o video en loop. */}
      <Photo label="Vista aérea del fraccionamiento" tone="dark" className="absolute inset-0" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-10 md:pb-24">
        <Eyebrow light>Camino al Diente · Cañada del Sur · Monterrey</Eyebrow>
        <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
          Lotes residenciales en Carretera Nacional, cerca de San Pedro
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
          Lotes desde 500 m² con frentes de alrededor de 20 m, servicios de red y escritura lista. Desde $8 mdp.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full bg-white px-7 py-4 text-center text-foreground transition-colors hover:bg-sand"
          >
            Agenda una visita al terreno
          </a>
          {site.whatsapp && (
            <a
              href={whatsappHref("Hola, me interesa información de los lotes en Qercia.")}
              className="rounded-full border border-white/50 px-7 py-4 text-center transition-colors hover:bg-white/10"
            >
              Escríbenos por WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export function KeyFacts() {
  return (
    <div className="border-b border-line bg-background">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5">
        {keyFacts.map((fact, i) => (
          <li
            key={fact.label}
            className={`border-line px-5 py-8 md:px-8 md:py-10 ${i > 0 ? "md:border-l" : ""} ${
              i % 2 === 1 ? "border-l md:border-l" : ""
            } ${i < 4 ? "border-b md:border-b-0" : ""} ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <span className="block text-xs uppercase tracking-[0.18em] text-stone">{fact.label}</span>
            <span className="mt-2 block font-serif text-3xl md:text-4xl">{fact.value}</span>
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
    <section id="lotes" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Los lotes</Eyebrow>
            <h2 className={h2}>Tu lote para construir, listo para escriturar</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
              Qercia no vende casas de catálogo. Vende el terreno para que construyas la tuya, con tu arquitecto y a
              tu medida.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 transition-colors hover:border-clay hover:text-clay"
            >
              Pide el plano de lotes disponibles <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Photo label="Lote con vista a la sierra" className="aspect-[4/3] w-full" />
          <ol className="mt-4">
            {lotPoints.map((point, i) => (
              <li key={point.title} className="grid gap-3 border-b border-line py-8 md:grid-cols-[4rem_1fr]">
                <span className="font-serif text-2xl text-clay">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-medium md:text-2xl">{point.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone">{point.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
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
    <section id="servicios" className="bg-moss text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow light>Servicios</Eyebrow>
            <h2 className={h2}>Servicios de red hasta tu lote</h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-white/75 lg:justify-self-end">
            Agua de red, no de pozo. Gas natural, luz de CFE, drenaje y fibra óptica llegan hasta el lote. Construyes
            y te conectas.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-2 border-t border-white/15 md:grid-cols-5">
          {services.map((service) => (
            <li key={service.title} className="border-b border-white/15 py-8 pr-4 md:border-b-0 md:pt-10">
              <svg
                aria-hidden
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#d9c3a5]"
              >
                {serviceIcons[service.title]}
              </svg>
              <p className="mt-5 text-lg">{service.title}</p>
              <p className="mt-1 text-sm text-white/60">{service.detail}</p>
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
    <section id="ubicacion" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Eyebrow>Ubicación</Eyebrow>
          <h2 className={h2}>Ubicación: Camino al Diente, Cañada del Sur</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
            Qercia está en Camino al Diente, en Cañada del Sur, al sur de Monterrey, Nuevo León. Vives rodeado de
            montaña y sigues cerca de San Pedro para ir al trabajo, a la escuela o a ver a la familia.
          </p>
          <address className="mt-8 border-l-2 border-clay pl-5 not-italic leading-relaxed">
            {site.address.street}
            <br />
            {site.address.neighborhood}, {site.address.city}
            <br />
            {site.address.region}, México
          </address>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 transition-colors hover:border-clay hover:text-clay"
          >
            Cómo llegar <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="lg:col-span-7">
          <iframe
            title="Mapa de ubicación de Qercia en Camino al Diente, Monterrey"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=14&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full border-0 grayscale-[0.6] sepia-[0.15]"
          />
        </div>
      </div>
    </section>
  );
}

export function Amenidades() {
  return (
    <section id="amenidades" className="bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Amenidades</Eyebrow>
            <h2 className={h2}>Áreas verdes y amenidades</h2>
            <p className="mt-10 font-serif text-7xl leading-none md:text-8xl">27,000 m²</p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-stone">
              de áreas verdes dentro del fraccionamiento, y amenidades para usar sin salir de casa.
            </p>
          </div>
          <Photo label="Alberca infinity y áreas verdes" className="aspect-[4/5] w-full lg:aspect-auto" />
        </div>

        <ul className="mt-16 grid grid-cols-2 border-t border-line sm:grid-cols-3 lg:grid-cols-5">
          {amenities.map((name) => (
            <li key={name} className="border-b border-line py-5 pr-4 text-lg">
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
    <section id="seguridad" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Photo label="Acceso principal" className="aspect-[4/3] w-full" />
        <div>
          <Eyebrow>Seguridad</Eyebrow>
          <h2 className={h2}>Seguridad en el acceso y el perímetro</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
            Barda perimetral, cámaras y acceso con revisión. Sabes quién entra y quién sale.
          </p>
          <ul className="mt-10 border-t border-line">
            {securityPoints.map((point) => (
              <li key={point} className="flex items-center gap-4 border-b border-line py-4 text-lg">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-clay" />
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
    <section id="desarrollador" className="border-y border-line">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
        <Eyebrow>Desarrollador</Eyebrow>
        <h2 className={h2}>Un desarrollo de Bono Edificaciones</h2>
        {/* TODO: agregar 1 o 2 datos verificables de Bono (años, proyectos entregados) y su logo. */}
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone">
          Qercia es un proyecto de Bono Edificaciones. El terreno forma parte de la historia del Mineral de San Pedro
          y San Pablo.
        </p>
      </div>
    </section>
  );
}

export function Preguntas() {
  return (
    <section id="preguntas" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">Preguntas frecuentes sobre los lotes</h2>
        </div>
        <div className="border-t border-line lg:col-span-8">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-medium md:text-xl">{faq.q}</h3>
                <span
                  aria-hidden
                  className="text-2xl leading-none text-clay transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-stone">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-moss-dark text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 md:flex-row md:justify-between md:px-10">
        <div>
          <p className="text-lg tracking-[0.32em] text-white">QERCIA</p>
          <p className="mt-3 text-sm">Un desarrollo de {site.developer}</p>
        </div>
        {/* TODO: teléfono y horario de la oficina de ventas (deben coincidir con Google Business). */}
        <address className="text-sm not-italic leading-relaxed">
          {site.address.street}, {site.address.neighborhood}
          <br />
          {site.address.city}, {site.address.region}, México
        </address>
        <div className="text-sm">
          {/* TODO: enlazar el aviso de privacidad cuando exista. */}
          <p>Aviso de privacidad</p>
          <p className="mt-3">© 2026 {site.developer}</p>
          <p className="mt-3 text-xs text-white/45">Imágenes ilustrativas.</p>
        </div>
      </div>
    </footer>
  );
}
