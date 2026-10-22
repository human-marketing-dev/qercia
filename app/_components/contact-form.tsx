"use client";

import { useActionState } from "react";
import { submitLead, type LeadState } from "@/app/actions";

const initialState: LeadState = { status: "idle", message: "" };

const field =
  "w-full border-0 border-b border-white/30 bg-transparent px-0 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none focus:ring-0";
const label = "text-xs uppercase tracking-[0.18em] text-white/60";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);

  if (state.status === "ok") {
    return (
      <p role="status" className="font-serif text-3xl leading-snug md:text-4xl">
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="grid gap-8 sm:grid-cols-2">
      <label className="flex flex-col gap-1 sm:col-span-2">
        <span className={label}>Nombre</span>
        <input name="nombre" required autoComplete="name" className={field} />
      </label>
      <label className="flex flex-col gap-1">
        <span className={label}>WhatsApp</span>
        <input name="whatsapp" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
      </label>
      <label className="flex flex-col gap-1">
        <span className={label}>Correo</span>
        <input name="correo" type="email" autoComplete="email" className={field} />
      </label>
      <label className="flex flex-col gap-1">
        <span className={label}>¿Cuándo planeas construir?</span>
        <select name="plazo" defaultValue="" className={`${field} [&>option]:text-foreground`}>
          <option value="" disabled>
            Elige una opción
          </option>
          <option>En menos de 6 meses</option>
          <option>De 6 a 12 meses</option>
          <option>En más de un año</option>
          <option>Solo estoy comparando</option>
        </select>
      </label>
      <label className="flex flex-col gap-1">
        <span className={label}>Tamaño de lote que buscas (opcional)</span>
        <input name="tamano" placeholder="p. ej. 600 m²" className={field} />
      </label>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/55">
          Te contactamos por WhatsApp o llamada. No compartimos tus datos.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-white px-8 py-4 text-foreground transition-colors hover:bg-sand disabled:opacity-60"
        >
          {pending ? "Enviando…" : "Quiero visitar Qercia"}
        </button>
      </div>
      <p aria-live="polite" className="text-sm text-[#f0b9a0] sm:col-span-2">
        {state.status === "error" ? state.message : ""}
      </p>
    </form>
  );
}
