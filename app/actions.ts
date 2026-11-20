"use server";

import { readLeadContact } from "@/app/_lib/lead";

export type LeadState = { status: "idle" | "ok" | "error"; message: string };

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const { contact, error } = readLeadContact(formData);
  if (error) return { status: "error", message: error };

  const lead = {
    ...contact,
    plazo: String(formData.get("plazo") ?? ""),
    tamano: String(formData.get("tamano") ?? "").trim(),
  };

  // TODO: enviar el lead a su destino final (correo, CRM o WhatsApp).
  // Mientras tanto queda en los logs del servidor (pm2 logs qercia).
  console.log("[lead]", JSON.stringify({ ...lead, fecha: new Date().toISOString() }));

  return { status: "ok", message: "Gracias. Te contactamos pronto para agendar tu visita." };
}
