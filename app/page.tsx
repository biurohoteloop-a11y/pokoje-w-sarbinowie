import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Pokoje w Sarbinowie nad morzem | Tanie Noclegi od 80zł",
  description:
    "Pokoje w Sarbinowie i tanie pokoje Sarbinowo nad morzem — 150 m od plaży. Tanie noclegi Sarbinowo z łazienką, TV, WiFi i parkingiem. Wakacje nad Bałtykiem dla rodzin i par. Od 80 zł/os.",
  keywords: [
    "pokoje Sarbinowo",
    "pokoje w Sarbinowie",
    "tanie pokoje Sarbinowo",
    "noclegi Sarbinowo",
    "tanie noclegi Sarbinowo",
    "tanie pokoje nad morzem",
    "noclegi nad Bałtykiem",
    "wakacje Sarbinowo",
    "kwatery Sarbinowo",
    "budżetowe noclegi Sarbinowo",
    "pokoje 150m od morza Sarbinowo",
  ],
  alternates: {
    canonical: "https://www.pokoje-w-sarbinowie.pl", // ← www
  },
  openGraph: {
    title: "Pokoje w Sarbinowie nad morzem | Tanie Noclegi od 80zł",
    description:
      "Tanie pokoje Sarbinowo, pokoje w Sarbinowie — 150 m od plaży. Tanie noclegi Sarbinowo z WiFi i parkingiem.",
    url: "https://www.pokoje-w-sarbinowie.pl", // ← www
    type: "website",
    locale: "pl_PL",
  },
};

export default function Home() {
  return <HomeClient />;
}
