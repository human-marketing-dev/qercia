"use server";

export type LeadState = { status: "idle" | "ok" | "error"; message: string };

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const lead = {
    nombre: String(formData.get("nombre") ?? "").trim(),
    whatsapp: String(formData.get("whatsapp") ?? "").trim(),
    correo: String(formData.get("correo") ?? "").trim(),
    plazo: String(formData.get("plazo") ?? ""),
    tamano: String(formData.get("tamano") ?? "").trim(),
  };

  if (!lead.nombre || lead.whatsapp.replace(/\D/g, "").length < 10) {
    return { status: "error", message: "Escribe tu nombre y un número de 10 dígitos." };
  }
  if (lead.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.correo)) {
    return { status: "error", message: "Revisa tu correo." };
  }

  // TODO: enviar el lead a su destino final (correo, CRM o WhatsApp).
  // Mientras tanto queda en los logs del servidor (pm2 logs qercia).
  console.log("[lead]", JSON.stringify({ ...lead, fecha: new Date().toISOString() }));

  return { status: "ok", message: "Gracias. Te contactamos pronto para agendar tu visita." };
}
