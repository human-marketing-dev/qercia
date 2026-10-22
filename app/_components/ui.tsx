// Piezas de estilo compartidas por las secciones.
import { Fragment } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={`text-accent transition-transform duration-300 group-hover:translate-x-1 ${className}`}
    >
      <path d="M0 6h14M9 1l5 5-5 5" />
    </svg>
  );
}

const buttonTone = {
  dark: "bg-ink text-background hover:bg-black",
  light: "bg-background text-ink hover:bg-beige",
  outline: "border border-current hover:bg-white/10",
};

export function Button({
  href,
  children,
  tone = "dark",
  className = "",
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  tone?: keyof typeof buttonTone;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-[30px] py-[18px] text-[17px] font-medium leading-none transition-colors ${buttonTone[tone]} ${className}`}
      {...rest}
    >
      {children}
      <Arrow />
    </a>
  );
}

// Enlace de texto con subrayado rojo, como los de contacto de la referencia.
export function TextLink({
  href,
  children,
  ...rest
}: { href: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className="group inline-flex items-center gap-3 font-medium text-ink" {...rest}>
      <span className="underline-draw is-static pb-0.5">{children}</span>
      <Arrow />
    </a>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-6 flex items-center gap-3 text-[15px] font-medium leading-none ${
        light ? "text-background/60" : "text-muted"
      }`}
    >
      <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
      {children}
    </p>
  );
}

// Título que entra palabra por palabra desde abajo.
export function SplitTitle({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <h1 className={`split-reveal ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span aria-hidden>
            <span style={{ "--i": i } as React.CSSProperties}>{word}</span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </h1>
  );
}

export const h2 = "text-[34px] leading-[1.15] tracking-[-0.01em] md:text-[42px] md:leading-[1.23]";
export const h3 = "text-xl leading-[1.25] tracking-[-0.01em] md:text-[22px]";

// Contenedor interno de cada tarjeta: mismo ancho y márgenes que la referencia.
export const inner = "mx-auto w-full max-w-[1230px] px-5 md:px-[65px] xl:px-0";
