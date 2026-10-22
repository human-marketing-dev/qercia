// Datos del sitio. Lo marcado con TODO falta confirmarlo con Bono antes de publicar.

// TODO: definir el dominio final (se usa en canonical, sitemap, Open Graph y JSON-LD).
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qercia.mx";

export const site = {
  name: "Qercia",
  developer: "Bono Edificaciones",
  title: "Lotes residenciales en Carretera Nacional | Qercia",
  description:
    "Lotes desde 500 m² en Camino al Diente, cerca de San Pedro. Listos para escriturar, con agua de red, gas natural y fibra óptica. Desde $8 mdp.",
  address: {
    street: "Camino al Diente",
    neighborhood: "Cañada del Sur",
    city: "Monterrey",
    region: "Nuevo León",
    country: "MX",
  },
  // TODO: reemplazar por el pin exacto del acceso.
  mapQuery: "Camino al Diente, Cañada del Sur, Monterrey, Nuevo León",
  // TODO: número de WhatsApp en formato internacional sin signos, p. ej. "5218100000000".
  // Mientras esté vacío, los botones de WhatsApp no se muestran.
  whatsapp: "",
};

export const nav = [
  { href: "#lotes", label: "Lotes" },
  { href: "#servicios", label: "Servicios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#amenidades", label: "Amenidades" },
  { href: "#preguntas", label: "Preguntas" },
];

export const keyFacts = [
  { value: "500 m²", label: "Lotes desde" },
  { value: "~20 m", label: "De frente" },
  { value: "27,000 m²", label: "De áreas verdes" },
  { value: "Escritura", label: "Lista desde el día uno" },
  { value: "$8 mdp", label: "Desde" },
];

export const services = [
  { title: "Agua de red", detail: "No de pozo ni de pipa." },
  { title: "Gas natural", detail: "Conexión hasta el lote." },
  { title: "Luz CFE", detail: "Electricidad de red." },
  { title: "Drenaje", detail: "Conectado a la red." },
  { title: "Fibra óptica", detail: "Internet desde el primer día." },
];

// Solo las amenidades publicadas en la web actual.
// No agregar cine, pádel, business hub ni "21 amenidades" hasta que Bono lo confirme.
export const amenities = [
  "Lobby",
  "Concierge",
  "Meeting room",
  "Fitness",
  "Alberca infinity",
  "Kids club",
  "Yoga deck",
  "Área de BBQ",
  "Comedor",
  "Sky deck",
];

// Solo preguntas con respuesta confirmada. Reglamento de construcción y financiamiento
// quedan fuera hasta tener respuesta de Bono.
export const faqs = [
  {
    q: "¿De qué tamaño son los lotes?",
    a: "Desde 500 m², con frentes de alrededor de 20 m.",
  },
  {
    q: "¿Cuánto cuesta un lote?",
    a: "Desde $8 mdp. El precio final depende del tamaño y la ubicación del lote. Pide la lista vigente a un asesor.",
  },
  {
    q: "¿Los lotes ya se pueden escriturar?",
    a: "Sí. Los lotes están listos para escriturar al momento de la compra.",
  },
  {
    q: "¿Qué servicios tiene cada lote?",
    a: "Agua de red, gas natural, electricidad de CFE, drenaje y fibra óptica.",
  },
  {
    q: "¿Dónde está Qercia?",
    a: "En Camino al Diente, Cañada del Sur, al sur de Monterrey, Nuevo León.",
  },
];

export function whatsappHref(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
