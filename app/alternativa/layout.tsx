import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

// Serif de títulos para la alternativa; el texto corrido sigue en Inter Tight.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

// Propuesta de diseño para comparar con la portada: fuera del índice de buscadores.
export const metadata: Metadata = {
  title: "Alternativa de diseño | Qercia Residencial",
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
};

export default function AlternativaLayout({ children }: LayoutProps<"/alternativa">) {
  return <div className={`${cormorant.variable} flex min-h-full flex-col bg-ivory`}>{children}</div>;
}
