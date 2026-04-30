import type { Metadata } from "next";
import AzakClient from "./AzakClient";

export const metadata: Metadata = {
  title: "Pensjonat Azak Sarbinowo | Pokoje i Apartamenty nad morzem",
  description:
    "Pensjonat Azak w Sarbinowie - pokoje, apartamenty i domki kilka kroków od plaży. Od 250 zł/noc. Widok na morze, parking, WiFi. Rezerwacja: +48 502 180 028",
  keywords: [
    "Azak Sarbinowo",
    "pensjonat Azak Sarbinowo",
    "pokoje Azak Sarbinowo",
    "apartamenty Sarbinowo",
    "domki Sarbinowo",
    "noclegi Sarbinowo nad morzem",
    "pokoje w Sarbinowie",
    "tanie noclegi Sarbinowo",
    "tanie pokoje Sarbinowo",
    "kwatery Sarbinowo",
    "Sarbinowo blisko plaży",
    "pokoje z widokiem na morze Sarbinowo",
    "noclegi blisko plaży Sarbinowo",
    "wakacje nad Bałtykiem Sarbinowo",
  ],
  alternates: {
    canonical: "https://www.pokoje-w-sarbinowie.pl/azak-sarbinowo",
  },
  openGraph: {
    title: "Pensjonat Azak Sarbinowo | Pokoje i Apartamenty nad morzem",
    description:
      "Pokoje, apartamenty i domki kilka kroków od plaży w Sarbinowie. Od 250 zł/noc. Rezerwacja: +48 502 180 028",
    url: "https://www.pokoje-w-sarbinowie.pl/azak-sarbinowo",
    type: "website",
    locale: "pl_PL",
    siteName: "Pokoje w Sarbinowie",
    images: [
      {
        url: "https://www.pokoje-w-sarbinowie.pl/images/azak-elewacja.jpeg",
        width: 1200,
        height: 630,
        alt: "Pensjonat Azak Sarbinowo - widok z zewnątrz",
      },
    ],
  },
};

// ============================================================
// SCHEMA 1: LodgingBusiness - Pensjonat Azak
// ============================================================
const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://www.pokoje-w-sarbinowie.pl/azak-sarbinowo/#pensjonat",
  name: "Pensjonat Azak Sarbinowo",
  alternateName: "Azak Sarbinowo",
  description:
    "Pensjonat Azak to wyjątkowe miejsce w samym sercu Sarbinowa, zaledwie kilka kroków od plaży. Oferujemy pokoje, apartamenty i domki z widokiem na Bałtyk. Obiekt z 1920 roku po gruntownym remoncie.",
  url: "https://www.pokoje-w-sarbinowie.pl/azak-sarbinowo",
  telephone: ["+48502180028", "+48503300348"],
  email: "info@azaksarbinowo.pl",
  foundingDate: "1920",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Nadmorska 68",
    addressLocality: "Sarbinowo",
    postalCode: "76-034",
    addressCountry: "PL",
    addressRegion: "Zachodniopomorskie",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 54.2601,
    longitude: 16.0156,
  },
  hasMap: "https://maps.google.com/?q=54.2601,16.0156",
  priceRange: "250-550 PLN",
  currenciesAccepted: "PLN",
  paymentAccepted: "Cash, Bank Transfer",
  checkinTime: "14:00",
  checkoutTime: "10:00",
  numberOfRooms: 15,
  petsAllowed: true,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Bezpłatny parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bezpłatne WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Aneks kuchenny", value: true },
    { "@type": "LocationFeatureSpecification", name: "Łazienka w pokoju", value: true },
    { "@type": "LocationFeatureSpecification", name: "Telewizor", value: true },
    { "@type": "LocationFeatureSpecification", name: "Balkon z widokiem na morze", value: true },
    { "@type": "LocationFeatureSpecification", name: "Akceptacja zwierząt", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bliskość plaży", value: true },
  ],
  image: [
    "https://www.pokoje-w-sarbinowie.pl/images/azak-elewacja.jpeg",
    "https://www.pokoje-w-sarbinowie.pl/images/azak-srodek.jpg",
    "https://www.pokoje-w-sarbinowie.pl/images/azak-ganek.jpeg",
    "https://www.pokoje-w-sarbinowie.pl/images/azak-tyl.jpeg",
    "https://www.pokoje-w-sarbinowie.pl/images/azak-morze.jpeg",
    "https://www.pokoje-w-sarbinowie.pl/images/wnetrze-apartamentu.jpg",
    "https://www.pokoje-w-sarbinowie.pl/images/widok-azak.jpeg",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+48502180028",
      contactType: "reservations",
      availableLanguage: "Polish",
    },
    {
      "@type": "ContactPoint",
      telephone: "+48503300348",
      contactType: "reservations",
      availableLanguage: "Polish",
    },
  ],
  availableLanguage: {
    "@type": "Language",
    name: "Polish",
  },
  // Opinie gości
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: 4,
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Anna Komar" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Miejsce świetne – bardzo czysto, klimatyzacja, kominek, a pokoje urządzone ze smakiem. Przesympatyczna właścicielka. Polecamy!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Anna Jankowiak" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Rewelacyjne miejsce! Bliżej morza naprawdę być się nie da. Obsługa przesympatyczna. Akceptują czworonożnych członków rodziny!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Emilia" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Gorąco polecam! Idealne miejsce na odpoczynek – czysto, przytulnie, a do morza naprawdę bardzo blisko. Na pewno wracamy!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Kuba" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Przyjeżdżamy z dziećmi do Azaka od 3 lat. Pokoje w świetnej lokalizacji, ładnie urządzone i zawsze czyste. Polecam!",
    },
  ],
};

// ============================================================
// SCHEMA 2: Oferta pokoi - każdy pokój jako HotelRoom
// ============================================================
const roomsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pokoje i apartamenty Pensjonatu Azak Sarbinowo",
  numberOfItems: 15,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "HotelRoom",
        name: "Pokój Kapitan – 102",
        description: "Pokój 4-osobowy, 18 m², pełne wyposażenie",
        occupancy: { "@type": "QuantitativeValue", value: 4 },
        floorSize: { "@type": "QuantitativeValue", value: 18, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "450",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/kapitan.jpeg",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "HotelRoom",
        name: "Pokój Molo – 203",
        description: "Pokój 2-osobowy, 11 m²",
        occupancy: { "@type": "QuantitativeValue", value: 2 },
        floorSize: { "@type": "QuantitativeValue", value: 11, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "350",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/room-2.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "HotelRoom",
        name: "Pokój Horyzont – 204",
        description: "Pokój 2-osobowy, 11 m²",
        occupancy: { "@type": "QuantitativeValue", value: 2 },
        floorSize: { "@type": "QuantitativeValue", value: 11, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "350",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/Horyzont.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "HotelRoom",
        name: "Pokój Perła – 206",
        description: "Pokój 2-osobowy, 14 m²",
        occupancy: { "@type": "QuantitativeValue", value: 2 },
        floorSize: { "@type": "QuantitativeValue", value: 14, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "300",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/perla.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "HotelRoom",
        name: "Pokój Rejs – 101",
        description: "Pokój 2-osobowy, 17 m²",
        occupancy: { "@type": "QuantitativeValue", value: 2 },
        floorSize: { "@type": "QuantitativeValue", value: 17, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "300",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/rejs.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "HotelRoom",
        name: "Pokój Syrenka – 202",
        description: "Pokój 2-osobowy, 10 m²",
        occupancy: { "@type": "QuantitativeValue", value: 2 },
        floorSize: { "@type": "QuantitativeValue", value: 10, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "250",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/syrenka.jpeg",
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "HotelRoom",
        name: "Pokój Arielka – 201",
        description: "Pokój 2-osobowy, 10 m²",
        occupancy: { "@type": "QuantitativeValue", value: 2 },
        floorSize: { "@type": "QuantitativeValue", value: 10, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "250",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/arielka.jpeg",
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "HotelRoom",
        name: "Pokój Fala – 103",
        description: "Pokój 4-osobowy, 18 m²",
        occupancy: { "@type": "QuantitativeValue", value: 4 },
        floorSize: { "@type": "QuantitativeValue", value: 18, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "300",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/fala.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 9,
      item: {
        "@type": "HotelRoom",
        name: "Pokój Latarnia – 104",
        description: "Pokój 4-osobowy, 23 m²",
        occupancy: { "@type": "QuantitativeValue", value: 4 },
        floorSize: { "@type": "QuantitativeValue", value: 23, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "350",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/latarnia.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 10,
      item: {
        "@type": "Suite",
        name: "Apartament Ocean – 105",
        description: "Apartament 5-osobowy z aneksem kuchennym, 35 m²",
        occupancy: { "@type": "QuantitativeValue", value: 5 },
        floorSize: { "@type": "QuantitativeValue", value: 35, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "450",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/ocean.jpeg",
      },
    },
    {
      "@type": "ListItem",
      position: 11,
      item: {
        "@type": "Suite",
        name: "Apartament Błękit – 106",
        description: "Apartament 8-osobowy z aneksem kuchennym, 45 m²",
        occupancy: { "@type": "QuantitativeValue", value: 8 },
        floorSize: { "@type": "QuantitativeValue", value: 45, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "550",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/blekit.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 12,
      item: {
        "@type": "HotelRoom",
        name: "Pokój Kotwica – 107",
        description: "Pokój 4-osobowy, 18 m²",
        occupancy: { "@type": "QuantitativeValue", value: 4 },
        floorSize: { "@type": "QuantitativeValue", value: 18, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "400",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/kotwica.jpeg",
      },
    },
    {
      "@type": "ListItem",
      position: 13,
      item: {
        "@type": "House",
        name: "Domek Muszelka",
        description: "Domek 4-osobowy, 26 m²",
        occupancy: { "@type": "QuantitativeValue", value: 4 },
        floorSize: { "@type": "QuantitativeValue", value: 26, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "500",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/muszelka.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 14,
      item: {
        "@type": "House",
        name: "Domek Bryza",
        description: "Domek 4-osobowy, 19 m²",
        occupancy: { "@type": "QuantitativeValue", value: 4 },
        floorSize: { "@type": "QuantitativeValue", value: 19, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "450",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/bryza.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 15,
      item: {
        "@type": "House",
        name: "Domek Mewa",
        description: "Domek 4-osobowy, 27 m²",
        occupancy: { "@type": "QuantitativeValue", value: 4 },
        floorSize: { "@type": "QuantitativeValue", value: 27, unitCode: "MTK" },
        offers: {
          "@type": "Offer",
          price: "500",
          priceCurrency: "PLN",
          unitText: "za noc",
          availability: "https://schema.org/InStock",
        },
        image: "https://www.pokoje-w-sarbinowie.pl/images/mewa.jpeg",
      },
    },
  ],
};

// ============================================================
// SCHEMA 3: FAQ - Google FAQ Rich Snippets
// ============================================================
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Gdzie znajduje się Pensjonat Azak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pensjonat Azak znajduje się przy ul. Nadmorskiej 68 w Sarbinowie. Jesteśmy dosłownie kilka kroków od plaży – to jedna z najbliżej morza położonych kwater w całym Sarbinowie.",
      },
    },
    {
      "@type": "Question",
      name: "Czy Azak jest blisko plaży?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak! To nasz największy atut – do plaży mamy zaledwie kilkadziesiąt metrów. Wystarczy wyjść za bramę i już jest się na piasku.",
      },
    },
    {
      "@type": "Question",
      name: "Czy akceptujecie zwierzęta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, jesteśmy przyjazni zwierzętom. Możecie zabrać ze sobą swojego pupila – prosimy jednak o wcześniejszy kontakt telefoniczny w celu potwierdzenia.",
      },
    },
    {
      "@type": "Question",
      name: "Czy jest darmowy parking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, dla wszystkich gości zapewniamy bezpłatny parking na terenie obiektu – wliczony w cenę pobytu.",
      },
    },
    {
      "@type": "Question",
      name: "Jakie typy zakwaterowania oferuje Pensjonat Azak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oferujemy pokoje 2- i 4-osobowe, apartamenty z aneksem kuchennym (Ocean 35m², Błękit 45m²) oraz domki (Muszelka, Bryza, Mewa). Każdy pokój posiada prywatną łazienkę i pełne wyposażenie. Ceny od 250 zł do 550 zł za noc.",
      },
    },
    {
      "@type": "Question",
      name: "Czy pokoje mają widok na morze?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wiele naszych pokoi i apartamentów posiada balkony lub okna z widokiem na morze. Przy rezerwacji możemy doradzić który pokój oferuje najlepszy widok.",
      },
    },
    {
      "@type": "Question",
      name: "Jak można dokonać rezerwacji w Pensjonacie Azak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rezerwacji można dokonać telefonicznie pod numerem +48 502 180 028 lub +48 503 300 348, a także mailowo na adres info@azaksarbinowo.pl.",
      },
    },
    {
      "@type": "Question",
      name: "Od kiedy działa Pensjonat Azak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pensjonat Azak ma długą historię – powstał w 1920 roku. Niedawno przeszedł gruntowny remont, dzięki czemu łączy historyczny charakter z nowoczesnym komfortem.",
      },
    },
    {
      "@type": "Question",
      name: "Czy w pobliżu Azaka są restauracje i atrakcje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pensjonat leży w samym centrum Sarbinowa – w pobliżu znajdują się kawiarnie, restauracje, sklepy, promenada oraz liczne atrakcje dla dzieci i dorosłych.",
      },
    },
    {
      "@type": "Question",
      name: "Jaka jest polityka anulowania rezerwacji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Szczegółowe warunki anulowania ustalane są indywidualnie. Prosimy o kontakt telefoniczny lub mailowy – postaramy się znaleźć najlepsze rozwiązanie.",
      },
    },
  ],
};

// ============================================================
// SCHEMA 4: BreadcrumbList
// ============================================================
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Strona główna",
      item: "https://www.pokoje-w-sarbinowie.pl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pensjonat Azak Sarbinowo",
      item: "https://www.pokoje-w-sarbinowie.pl/azak-sarbinowo",
    },
  ],
};

export default function AzakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lodgingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(roomsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <AzakClient />
    </>
  );
}
