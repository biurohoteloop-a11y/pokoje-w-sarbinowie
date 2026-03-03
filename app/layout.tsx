import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://pokoje-w-sarbinowie.pl"),
  title: {
    default: "Pokoje w Sarbinowie nad morzem | Tanie Noclegi Bałtyk",
    template: "%s | Pokoje w Sarbinowie",
  },
  description:
    "Tanie pokoje w Sarbinowie nad morzem, 150m od plaży. Noclegi Sarbinowo z łazienką, TV, kuchnią i parkingiem. Idealne wakacje nad Bałtykiem dla rodzin. Od 80 zł/os.",
  keywords: [
    "pokoje Sarbinowo",
    "pokoje w Sarbinowie",
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
      "Tanie pokoje w Sarbinowie, 150m od plaży. Noclegi nad Bałtykiem z łazienką, TV i parkingiem.",
    type: "website",
    locale: "pl_PL",
    url: "https://pokoje-w-sarbinowie.pl",
    siteName: "Pokoje w Sarbinowie",
  },
  alternates: {
    canonical: "https://pokoje-w-sarbinowie.pl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
