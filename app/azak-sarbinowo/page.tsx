import type { Metadata } from "next";
import AzakClient from "./AzakClient";

export const metadata: Metadata = {
  title: "Pensjonat Azak Sarbinowo | Pokoje i Apartamenty nad morzem",
  description:
    "Pensjonat Azak w Sarbinowie - pokoje, apartamenty i domki kilka kroków od plaży. Noclegi Sarbinowo z widokiem na morze, parkingiem i pełnym wyposażeniem. Rezerwacja: +48 502 180 028",
  keywords: [
    "Azak Sarbinowo",
    "pensjonat Azak Sarbinowo",
    "pokoje Azak Sarbinowo",
    "apartamenty Sarbinowo",
    "domki Sarbinowo",
    "noclegi Sarbinowo nad morzem",
    "pokoje w Sarbinowie",
    "tanie noclegi Sarbinowo",
    "kwatery Sarbinowo",
    "Sarbinowo blisko plaży",
    "pokoje z widokiem na morze Sarbinowo",
  ],
  alternates: {
    canonical: "https://www.pokoje-w-sarbinowie.pl/azak-sarbinowo", // ← www
  },
  openGraph: {
    title: "Pensjonat Azak Sarbinowo | Pokoje i Apartamenty nad morzem",
    description:
      "Pokoje, apartamenty i domki kilka kroków od plaży w Sarbinowie. Rezerwacja telefoniczna: +48 502 180 028",
    url: "https://www.pokoje-w-sarbinowie.pl/azak-sarbinowo", // ← www
    type: "website",
    locale: "pl_PL",
  },
};

export default function AzakPage() {
  return <AzakClient />;
}
