import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import Script from "next/script";
import { RevealOnScroll } from "@/app/_components/reveal";
import { SITE_URL, site } from "@/app/_lib/site";
import "./globals.css";

const gtmContainerId = "GTM-5TDCBVVD";

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
    title: "Qercia Residencial: vivir entre montañas en Camino al Diente",
    description: "Terrenos desde 500 m² en Camino al Diente, Carretera Nacional. Desde $8.3 MDP, listos para escriturar.",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmContainerId}`}
            title="Google Tag Manager"
            height="0"
            width="0"
            className="hidden"
          />
        </noscript>
        <Script src={`https://www.googletagmanager.com/gtm.js?id=${gtmContainerId}`} />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
