"use client";

import { useEffect, useId, useRef, useState } from "react";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Cuenta de 0 al valor cuando la cifra entra en pantalla.
export function CountUp({ to, duration = 1800 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        setValue(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return <span ref={ref}>{value.toLocaleString("en-US")}</span>;
}

// Desplaza los [data-parallax] más lento que el scroll; el valor es la fracción del scroll.
export function Parallax() {
  useEffect(() => {
    if (reduced()) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    const update = () => {
      frame = 0;
      for (const el of els) {
        const speed = Number(el.dataset.parallax) || 0.2;
        const top = el.parentElement?.getBoundingClientRect().top ?? 0;
        el.style.translate = `0 ${Math.round(-top * speed)}px`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

// Pregunta que se abre y cierra con transición de altura. La respuesta siempre está en el
// HTML (solo se oculta), así la leen los buscadores.
export function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-hair">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-6 py-7 text-left text-[20px] leading-snug tracking-[-0.025em] text-navy md:text-[22px]"
        >
          {question}
          <span
            aria-hidden
            className={`text-[26px] font-light leading-none transition-transform duration-500 ${open ? "rotate-45" : ""}`}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={id}
        role="region"
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden" inert={!open}>
          <p
            className={`max-w-2xl pb-8 text-[17px] leading-[1.8] text-midnight/75 transition-transform duration-500 ${
              open ? "translate-y-0" : "-translate-y-3"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
