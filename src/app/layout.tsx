import type { Metadata, Viewport } from "next";
import { Kanit, Tomorrow } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer, FloatingWa } from "@/components/Footer";
import { SITE } from "@/content/site";
import { MotionRoot } from "@/components/Motion";
import "@/styles/globals.css";

const kanit = Kanit({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-kanit", display: "swap" });
const tomorrow = Tomorrow({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-tomorrow", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  icons: { icon: "/images/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#f4f2ec",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/logo.png`,
  image: `${SITE.url}/images/fotos/maquina-dobra.jpg`,
  email: SITE.email,
  telephone: SITE.phone.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "12:00" },
  ],
  areaServed: ["Fortaleza", "Região Metropolitana de Fortaleza"],
  paymentAccepted: "Cartão de crédito, cartão de débito",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${kanit.variable} ${tomorrow.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <FloatingWa />
        <MotionRoot />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
