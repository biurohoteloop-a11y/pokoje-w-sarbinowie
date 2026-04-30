import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import SchemaOrg from "./components/SchemaOrg";

const BASE_URL = "https://www.pokoje-w-sarbinowie.pl";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pokoje w Sarbinowie nad morzem | Tanie Noclegi Bałtyk",
    template: "%s | Pokoje w Sarbinowie",
  },
  description:
    "Tanie pokoje Sarbinowo i tanie noclegi Sarbinowo nad morzem — 150 m od plaży. Pokoje w Sarbinowie z łazienką, TV, kuchnią i parkingiem. Wakacje nad Bałtykiem dla rodzin. Od 80 zł/os.",
  keywords: [
    "pokoje Sarbinowo",
    "pokoje w Sarbinowie",
    "tanie pokoje Sarbinowo",
    "noclegi Sarbinowo",
    "tanie noclegi Sarbinowo",
    "tanie noclegi nad morzem",
    "noclegi Sarbinowo nad morzem",
    "pokoje nad morzem Sarbinowo",
    "wakacje Sarbinowo",
    "kwatery Sarbinowo",
    "noclegi Bałtyk",
    "budżetowe noclegi Sarbinowo",
    "pokoje u babci Sarbinowo",
  ],
  openGraph: {
    title: "Pokoje w Sarbinowie nad morzem | Tanie Noclegi",
    description:
      "Tanie pokoje Sarbinowo i tanie noclegi Sarbinowo — 150 m od plaży. Pokoje w Sarbinowie z pełnym wyposażeniem. Od 80 zł/os.",
    type: "website",
    locale: "pl_PL",
    url: BASE_URL,
    siteName: "Pokoje w Sarbinowie",
    images: [
      {
        url: `${BASE_URL}/images/hero-seaside.png`,
        width: 1200,
        height: 630,
        alt: "Pokoje w Sarbinowie nad morzem - widok na plażę i Bałtyk",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokoje w Sarbinowie nad morzem | Tanie Noclegi",
    description:
      "Tanie pokoje Sarbinowo i tanie noclegi Sarbinowo — 150 m od plaży. Od 80 zł/os.",
    images: [`${BASE_URL}/images/hero-seaside.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  other: {
    "geo.region": "PL-32",
    "geo.placename": "Sarbinowo",
    "geo.position": "54.2601;16.0156",
    ICBM: "54.2601, 16.0156",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2a5a7b" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>
        <SchemaOrg />
        <Navigation />
        {children}
        <Footer />
        {gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
        <Analytics />
      </body>
    </html>
  );
}
