import type { Metadata } from "next";
import KontaktClient from "./KontaktClient";

export const metadata: Metadata = {
  title: "Kontakt | Pokoje w Sarbinowie nad morzem",
  description:
    "Skontaktuj się z nami i zarezerwuj pokój w Sarbinowie nad morzem. Tanie noclegi Sarbinowo od 80 zł/os. Zadzwoń lub napisz - odpowiadamy szybko!",
  keywords: [
    "kontakt pokoje Sarbinowo",
    "rezerwacja noclegów Sarbinowo",
    "noclegi Sarbinowo kontakt",
    "pokoje w Sarbinowie rezerwacja",
    "tanie noclegi Sarbinowo telefon",
  ],
  alternates: {
    canonical: "https://pokoje-w-sarbinowie.pl/kontakt",
  },
  openGraph: {
    title: "Kontakt | Pokoje w Sarbinowie nad morzem",
    description:
      "Zarezerwuj pokój w Sarbinowie nad morzem. Tanie noclegi od 80 zł/os. Zadzwoń lub napisz!",
    url: "https://pokoje-w-sarbinowie.pl/kontakt",
    type: "website",
    locale: "pl_PL",
  },
};

export default function KontaktPage() {
  return <KontaktClient />;
}
