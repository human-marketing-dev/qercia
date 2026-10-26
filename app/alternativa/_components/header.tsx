"use client";

import { useEffect, useState } from "react";
import { nav } from "@/app/_lib/site";
import { wrap } from "@/app/alternativa/_components/ui";

const caps = "text-[12px] uppercase tracking-[0.2em]";
const link = `${caps} whitespace-nowrap opacity-90 transition-opacity hover:opacity-60`;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Se esconde al bajar y vuelve a aparecer al subir.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setHidden(y > 400 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,transform] duration-500 ${
        hidden && !open ? "-translate-y-full" : ""
      } ${
        solid ? "border-b border-hair bg-ivory/95 text-navy backdrop-blur" : "border-b border-white/20 text-ivory"
      }`}
    >
      <div className={`grid h-[76px] grid-cols-[1fr_auto_1fr] items-center md:h-[92px] ${wrap}`}>
        <div className="flex items-center">
          <button
            type="button"
            className="-ml-1 p-1 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 8h18M3 16h18" />}
            </svg>
          </button>
          <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex xl:gap-9">
            {nav.slice(0, 3).map((item) => (
              <a key={item.href} href={item.href} className={link}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <a href="#inicio" aria-label="Qercia, inicio">
          <span aria-hidden className="logo h-[60px] w-[60px] md:h-[76px] md:w-[76px]" />
        </a>

        <div className="flex items-center justify-end gap-7 xl:gap-9">
          {/* El menú se reparte a los dos lados para que el logo quede al centro. */}
          <nav aria-label="Secundario" className="hidden items-center gap-7 lg:flex xl:gap-9">
            {nav.slice(3).map((item) => (
              <a key={item.href} href={item.href} className={link}>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            className={`hidden whitespace-nowrap border px-6 py-4 leading-none transition-colors lg:inline-block ${caps} ${
              solid ? "border-navy hover:bg-navy hover:text-ivory" : "border-ivory/70 hover:bg-ivory hover:text-navy"
            }`}
          >
            Agenda una visita
          </a>
        </div>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="h-[calc(100svh-76px)] px-6 pb-8 lg:hidden">
          <ul className="flex flex-col border-t border-hair">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-hair py-5 text-[28px] tracking-[-0.02em] leading-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className={`mt-8 block bg-navy py-5 text-center text-ivory ${caps}`}
          >
            Agenda una visita
          </a>
        </nav>
      )}
    </header>
  );
}
