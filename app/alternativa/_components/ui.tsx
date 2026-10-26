// Piezas de estilo de la alternativa: esquinas rectas, paleta oficial de Qercia, títulos en
// Inter Tight y Baskerville solo como acento (cifras, palabras en cursiva, firma).
import { Arrow } from "@/app/_components/ui";

export const wrap = "mx-auto w-full max-w-[1320px] px-6 md:px-12";
export const display = "font-sans font-normal tracking-[-0.025em]";
export const accent = "font-serif font-normal tracking-[-0.01em]";
export const h2 = `${display} text-[36px] leading-[1.1] md:text-[52px]`;
export const h3 = `${display} text-[22px] leading-[1.25] md:text-[24px]`;
export const caps = "text-[12px] uppercase tracking-[0.2em]";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-7 flex items-center gap-4 ${caps} ${light ? "text-sky" : "text-navy"}`}>
      <span aria-hidden className={`h-px w-10 ${light ? "bg-sky/60" : "bg-sky"}`} />
      {children}
    </p>
  );
}

const tones = {
  dark: "bg-navy text-ivory hover:bg-midnight",
  light: "bg-ivory text-navy hover:bg-stone",
  line: "border border-current hover:bg-white/10",
};

export function Button({
  href,
  children,
  tone = "dark",
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  tone?: keyof typeof tones;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-4 px-9 py-5 leading-none transition-colors ${caps} ${tones[tone]}`}
      {...rest}
    >
      {children}
      <Arrow color="text-current" />
    </a>
  );
}

export function TextLink({
  href,
  children,
  ...rest
}: { href: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-4 border-b border-navy/40 pb-2 text-navy transition-colors hover:border-navy ${caps}`}
      {...rest}
    >
      {children}
      <Arrow color="text-navy" />
    </a>
  );
}
