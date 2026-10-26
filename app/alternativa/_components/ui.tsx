// Piezas de estilo de la alternativa: esquinas rectas, serif en títulos y paleta natural.
import { Arrow } from "@/app/_components/ui";

export const wrap = "mx-auto w-full max-w-[1320px] px-6 md:px-12";
export const display = "font-serif font-normal tracking-[-0.01em]";
export const h2 = `${display} text-[40px] leading-[1.08] md:text-[60px]`;
export const h3 = `${display} text-[26px] leading-[1.15] md:text-[30px]`;
export const caps = "text-[12px] uppercase tracking-[0.2em]";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-7 flex items-center gap-4 ${caps} ${light ? "text-sky" : "text-earth"}`}>
      <span aria-hidden className={`h-px w-10 ${light ? "bg-sky/60" : "bg-earth/60"}`} />
      {children}
    </p>
  );
}

const tones = {
  dark: "bg-forest text-ivory hover:bg-moss",
  light: "bg-ivory text-forest hover:bg-stone",
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
      className={`group inline-flex items-center gap-4 border-b border-forest/40 pb-2 text-forest transition-colors hover:border-forest ${caps}`}
      {...rest}
    >
      {children}
      <Arrow color="text-earth" />
    </a>
  );
}
