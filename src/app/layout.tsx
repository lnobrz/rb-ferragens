import type { Metadata, Viewport } from "next";
import { Kanit, Tomorrow } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer, FloatingWa } from "@/components/Footer";
import { SITE, RMF_CITIES } from "@/content/site";
import { MotionRoot } from "@/components/Motion";
import { NavProgress } from "@/components/NavProgress";
import "@/styles/globals.css";

// Kanit (texto corrido) sem preload: entra com fallback ajustado e não disputa banda com a foto do hero.
const kanit = Kanit({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-kanit", display: "swap", preload: false });
const tomorrow = Tomorrow({ subsets: ["latin"], weight: ["500"], variable: "--font-tomorrow", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
};

export const viewport: Viewport = {
  themeColor: "#f4f2ec",
};

/**
 * Dados estruturados da loja: um único bloco HardwareStore, no <head> de todas as páginas.
 * Nome, endereço e telefone idênticos ao Perfil da Empresa no Google. Sem preço, priceRange, nota ou avaliações.
 * areaServed = Fortaleza + as mesmas cidades da página de Entrega (RMF_CITIES).
 */
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`;

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  "@id": "https://www.rbferragens.com.br/#loja",
  name: "RB Ferragens",
  url: "https://www.rbferragens.com.br/",
  telephone: "+55 85 4141-6030",
  logo: "https://www.rbferragens.com.br/images/logo.png",
  image: "https://www.rbferragens.com.br/images/fotos/fachada.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Travessa Precabura, 79, Lagoa Redonda",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    postalCode: "60831-372",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -3.8252,
    longitude: -38.45135,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "12:00" },
    // Domingo fechado (00:00–00:00 é como o Google marca dia fechado).
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "00:00", closes: "00:00" },
  ],
  areaServed: ["Fortaleza", ...RMF_CITIES].map((name) => ({ "@type": "City", name })),
  hasMap: MAPS_URL,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${kanit.variable} ${tomorrow.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </head>
      <body>
        <NavProgress />
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <FloatingWa />
        <MotionRoot />
      </body>
    </html>
  );
}
