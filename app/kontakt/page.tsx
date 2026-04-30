import type { Metadata } from "next";
import KontaktClient from "./KontaktClient";

export const metadata: Metadata = {
  title: "Kontakt | Pokoje w Sarbinowie nad morzem",
  description:
    "Zarezerwuj pokoje w Sarbinowie — tanie pokoje Sarbinowo i tanie noclegi Sarbinowo od 80 zł/os. Zadzwoń lub napisz, odpowiadamy szybko.",
  keywords: [
    "kontakt pokoje Sarbinowo",
    "rezerwacja noclegów Sarbinowo",
    "noclegi Sarbinowo kontakt",
    "pokoje w Sarbinowie rezerwacja",
    "tanie noclegi Sarbinowo telefon",
    "tanie pokoje Sarbinowo",
    "tanie noclegi Sarbinowo",
  ],
  alternates: {
    canonical: "https://www.pokoje-w-sarbinowie.pl/kontakt", // ← www
  },
  openGraph: {
    title: "Kontakt | Pokoje w Sarbinowie nad morzem",
    description:
      "Rezerwacja pokoi w Sarbinowie — tanie pokoje i tanie noclegi Sarbinowo od 80 zł/os. Zadzwoń lub napisz!",
    url: "https://www.pokoje-w-sarbinowie.pl/kontakt", // ← www
    type: "website",
    locale: "pl_PL",
  },
};

export default function KontaktPage() {
  return <KontaktClient />;
}
