"use client";

import { useActionState } from "react";
import { submitLead, type LeadState } from "@/app/actions";
import { Arrow } from "@/app/_components/ui";

const initialState: LeadState = { status: "idle", message: "" };

const field =
  "h-[52px] w-full rounded-[4px] border border-line bg-white px-4 text-[17px] text-ink placeholder:text-muted/60 transition-colors focus:border-ink focus:outline-none";
const label = "text-[14px] font-medium leading-none text-ink";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);

  if (state.status === "ok") {
    return (
      <p role="status" className="text-[28px] font-medium leading-snug tracking-[-0.02em] text-ink md:text-[34px]">
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
      <label className="flex flex-col gap-2.5 sm:col-span-2">
        <span className={label}>Nombre</span>
        <input name="nombre" required autoComplete="name" className={field} />
      </label>
      <label className="flex flex-col gap-2.5">
        <span className={label}>WhatsApp</span>
        <input name="whatsapp" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
      </label>
      <label className="flex flex-col gap-2.5">
        <span className={label}>Correo</span>
        <input name="correo" type="email" autoComplete="email" className={field} />
      </label>
      <label className="flex flex-col gap-2.5">
        <span className={label}>¿Cuándo planeas construir?</span>
        <select name="plazo" defaultValue="" className={field}>
          <option value="" disabled>
            Elige una opción
          </option>
          <option>En menos de 6 meses</option>
          <option>De 6 a 12 meses</option>
          <option>En más de un año</option>
          <option>Solo estoy comparando</option>
        </select>
      </label>
      <label className="flex flex-col gap-2.5">
        <span className={label}>Tamaño de terreno que buscas (opcional)</span>
        <input name="tamano" placeholder="p. ej. 600 m²" className={field} />
      </label>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[14px] leading-relaxed text-muted">
          Te contactamos por WhatsApp o llamada. No compartimos tus datos.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-ink px-[30px] py-[18px] text-[17px] font-medium leading-none text-background transition-colors hover:bg-black disabled:opacity-60"
        >
          {pending ? "Enviando…" : "Quiero visitar Qercia"}
          <Arrow />
        </button>
      </div>
      <p aria-live="polite" className="text-[14px] text-accent sm:col-span-2">
        {state.status === "error" ? state.message : ""}
      </p>
    </form>
  );
}
