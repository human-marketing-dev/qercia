"use client";

import { useEffect, useState } from "react";
import { nav } from "@/app/_lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-background/95 text-foreground shadow-[0_1px_0_var(--color-line)] backdrop-blur"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#inicio" className="text-lg font-medium tracking-[0.32em]" aria-label="Qercia, inicio">
          QERCIA
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="opacity-80 transition-opacity hover:opacity-100">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className={`hidden rounded-full px-5 py-2.5 text-sm transition-colors lg:inline-block ${
            solid
              ? "bg-moss text-white hover:bg-moss-dark"
              : "bg-white text-foreground hover:bg-white/85"
          }`}
        >
          Agenda una visita
        </a>

        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 8h18M3 16h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-line px-5 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 text-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-full bg-moss py-3.5 text-center text-white"
          >
            Agenda una visita
          </a>
        </nav>
      )}
    </header>
  );
}
