// Datos del sitio. Única fuente: Brief de comunicación de Qercia, v1 octubre 2026.
// Antes de agregar un dato nuevo, revisa que esté en el brief (secciones 4, 6 y 10).
// No se publica: topografía, enganche, "MSI", mes de entrega, cercanía a San Pedro o
// Monterrey, tiempos de traslado, plusvalía con cifras ni amenidades fuera de la lista de 15.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qercia.mx";

export const site = {
  name: "Qercia Residencial",
  title: "Terrenos en Camino al Diente, Carretera Nacional | Qercia Residencial",
  description:
    "Terrenos desde 500 m² en Camino al Diente, Carretera Nacional. Desde $8.3 MDP, listos para escriturar, entrega en 2027 y 12 mensualidades.",
  address: {
    street: "Camino al Diente, Carretera Nacional",
    city: "Monterrey",
    region: "N.L.",
    regionFull: "Nuevo León",
    country: "MX",
  },
  // TODO: reemplazar por el pin exacto del acceso.
  mapQuery: "Camino al Diente, Carretera Nacional, Monterrey, Nuevo León",
  // TODO: número de WhatsApp en formato internacional sin signos, p. ej. "5218100000000".
  // Mientras esté vacío, los botones de WhatsApp no se muestran.
  whatsapp: "",
};

// Texto obligatorio junto a toda imagen o mención de amenidades (brief, sección 8).
export const disclaimer = "Imágenes y amenidades con fines ilustrativos.";

export const nav = [
  { href: "#parques", label: "Parques" },
  { href: "#amenidades", label: "Amenidades" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#infraestructura", label: "Infraestructura" },
  { href: "#preguntas", label: "Preguntas" },
];

// La oferta siempre con la misma formulación (brief, sección 4).
export const keyFacts = [
  { value: "500 m²", label: "Terrenos desde" },
  { value: "$8.3 MDP", label: "Precio desde" },
  { value: "Listos", label: "para escriturar" },
  { value: "2027", label: "Entrega en" },
  { value: "12", label: "mensualidades" },
];

export const services = [
  { title: "Agua de la red", detail: "No de pozo." },
  { title: "Drenaje", detail: "En todo el desarrollo." },
  { title: "Gas natural", detail: "Subterráneo." },
  { title: "Electricidad CFE", detail: "Subterránea." },
  { title: "Fibra óptica", detail: "En todo el desarrollo." },
];

export const security = [
  "Barda perimetral en todo el desarrollo",
  "Cámaras de circuito cerrado",
  "Accesos con revisión",
];

// Lista oficial de 15 (brief, sección 10). No agregar pádel, juegos infantiles ni otras
// mientras no se confirmen.
export const amenities = [
  "Área verde",
  "Alberca",
  "Gimnasio",
  "Casa club",
  "Senderismo",
  "Bardeado",
  "Lobby",
  "Salón de usos múltiples",
  "Estacionamiento de visitas",
  "Sala de cine",
  "Roof garden",
  "Business hub",
  "Palapa",
  "Oficina",
  "Centro culinario",
];

// Distancias de la presentación del proyecto (brief, sección 6). En el sitio sí van en km;
// nunca tiempos de traslado.
export const entorno = [
  {
    category: "Entorno inmediato",
    places: [
      { name: "Club Hípico La Silla", distance: "Colindante" },
      { name: "Club de Golf Valle Alto", distance: "2.3 km" },
    ],
  },
  {
    category: "Educación",
    places: [
      { name: "San Roberto International School", distance: "4.9 km" },
      { name: "Prepa Tec (ITESM)", distance: "6.8 km" },
      { name: "U-ERRE Campus Valle Alto", distance: "7.2 km" },
    ],
  },
  {
    category: "Salud",
    places: [{ name: "Christus Muguerza", distance: "4.9 km" }],
  },
  {
    category: "Supermercados",
    places: [
      { name: "HEB", distance: "3.4 km" },
      { name: "Soriana", distance: "4.8 km" },
      { name: "Costco", distance: "5.1 km" },
    ],
  },
  {
    category: "Comercio",
    places: [
      { name: "Pueblo Serena", distance: "5.7 km" },
      { name: "Esfera", distance: "6.5 km" },
      { name: "Plaza Omnia", distance: "7.8 km" },
    ],
  },
  {
    category: "Templos",
    places: [
      { name: "Capilla del Sonculeo", distance: "0.9 km" },
      { name: "Iglesia Jesucristo de los Santos", distance: "3.8 km" },
      { name: "Jesús del Buen Pastor", distance: "4.9 km" },
    ],
  },
];

// Solo preguntas con respuesta en el brief. Disponibilidad, enganche y montos los explica
// el asesor.
export const faqs = [
  {
    q: "¿De qué tamaño son los terrenos?",
    a: "Desde 500 metros cuadrados. Un asesor te muestra los terrenos disponibles y sus medidas.",
  },
  {
    q: "¿Cuánto cuesta un terreno?",
    a: "Desde 8.3 millones de pesos, precio de lanzamiento. El precio de cada terreno te lo da un asesor.",
  },
  {
    q: "¿Los terrenos se pueden escriturar?",
    a: "Sí. Los terrenos están listos para escriturar.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Puedes pagar en 12 mensualidades. Un asesor te explica el esquema y lo ajusta a tu caso.",
  },
  {
    q: "¿Cuándo se entrega el proyecto?",
    a: "La entrega de Qercia es en 2027.",
  },
  {
    q: "¿Qué infraestructura tiene?",
    a: "Agua de la red (no de pozo), drenaje, gas natural subterráneo, electricidad subterránea de CFE y fibra óptica.",
  },
  {
    q: "¿Dónde está Qercia?",
    a: "En Camino al Diente, Carretera Nacional, Monterrey, N.L. Al inicio de Carretera Nacional, minutos antes de Valle Alto y junto al Club Hípico La Silla.",
  },
];

export function whatsappHref(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
