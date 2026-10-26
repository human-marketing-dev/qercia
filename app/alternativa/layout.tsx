import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";

// Tipografía de acento. La oficial es Baskerville Display PT (de pago, no está en Google
// Fonts); Libre Baskerville la sustituye hasta tener los archivos .woff2 con licencia web.
const accent = Libre_Baskerville({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

// Propuesta de diseño para comparar con la portada: fuera del índice de buscadores.
export const metadata: Metadata = {
  title: "Alternativa de diseño | Qercia Residencial",
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
};

export default function AlternativaLayout({ children }: LayoutProps<"/alternativa">) {
  return <div className={`${accent.variable} flex min-h-full flex-col bg-ivory`}>{children}</div>;
}
