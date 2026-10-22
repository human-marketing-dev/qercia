import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import { RevealOnScroll } from "@/app/_components/reveal";
import { SITE_URL, site } from "@/app/_lib/site";
import "./globals.css";

// Sustituto libre más cercano a Helvetica Now, la tipografía de la referencia.
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: site.name,
    title: "Qercia: lotes residenciales en Camino al Diente",
    description: "Lotes desde 500 m², listos para escriturar, cerca de San Pedro.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#fffcf5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${interTight.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
