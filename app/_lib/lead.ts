export function readLeadContact(formData: FormData) {
  const contact = {
    nombre: String(formData.get("nombre") ?? "").trim(),
    whatsapp: String(formData.get("whatsapp") ?? "").trim(),
    correo: String(formData.get("correo") ?? "").trim(),
  };

  if (!contact.nombre || contact.whatsapp.replace(/\D/g, "").length < 10) {
    return { contact, error: "Escribe tu nombre y un número de 10 dígitos." };
  }
  if (contact.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.correo)) {
    return { contact, error: "Revisa tu correo." };
  }
  return { contact, error: null };
}
