"use client";

import { useEffect, useState } from "react";
import { nav } from "@/app/_lib/site";
import { Arrow } from "@/app/_components/ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow] duration-300 ${
          solid
            ? "bg-background/95 text-ink shadow-[0_1px_0_var(--color-line)] backdrop-blur"
            : "bg-transparent text-background"
        }`}
      >
        <div className="grid h-[72px] grid-cols-[1fr_auto_1fr] items-center px-5 md:h-24 md:px-[85px]">
          <div className="flex items-center gap-7">
            <button
              type="button"
              className="-ml-1 p-1 lg:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden
              >
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M2 6h20M2 12h20M2 18h20" />}
              </svg>
            </button>
            <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className="group text-[17px] font-medium leading-none">
                  <span className="underline-draw pb-1">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          <a href="#inicio" className="text-xl font-medium tracking-[0.28em] md:text-2xl" aria-label="Qercia, inicio">
            QERCIA
          </a>

          <div className="flex justify-end">
            <a
              href="#contacto"
              className={`group hidden items-center gap-3 rounded-full px-[30px] py-[18px] text-[17px] font-medium leading-none text-background backdrop-blur transition-colors lg:inline-flex ${
                solid ? "bg-ink hover:bg-black" : "bg-[#272727]/70 hover:bg-[#272727]"
              }`}
            >
              Agenda una visita
              <Arrow />
            </a>
          </div>
        </div>

        {open && (
          <nav id="menu-movil" aria-label="Menú móvil" className="h-[calc(100svh-72px)] px-5 pb-8 lg:hidden">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 text-2xl font-medium tracking-[-0.02em]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-8 flex items-center justify-center gap-3 rounded-full bg-ink py-[18px] font-medium text-background"
            >
              Agenda una visita
              <Arrow />
            </a>
          </nav>
        )}
      </header>
      {/* Botón flotante, como el "Talk to us" de la referencia. */}
      <a
        href="#contacto"
        className={`group fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full bg-ink py-2 pl-2 pr-6 text-[16px] font-medium text-background shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/10 transition-[opacity,transform] duration-500 ${
          scrolled && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <span
          aria-hidden
          className="grid h-9 w-9 place-items-center rounded-full bg-accent text-[13px] tracking-normal"
        >
          Q
        </span>
        Agenda una visita
        <Arrow />
      </a>
    </>
  );
}
