export default function SchemaOrg() {
  const BASE_URL = "https://www.pokoje-w-sarbinowie.pl"; // ← jedna zmienna

  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Pokoje Przy Morzu Sarbinowo",
    description:
      "Tanie pokoje w Sarbinowie nad morzem, 150m od plaży. Noclegi z łazienką, TV, kuchnią i parkingiem. Idealne wakacje nad Bałtykiem dla rodzin.",
    url: BASE_URL, // ← www
    telephone: ["+48502180028", "+48503300348"],
    email: "kontakt@pokoje-w-sarbinowie.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sarbinowo",
      addressLocality: "Sarbinowo",
      postalCode: "76-034",
      addressCountry: "PL",
      addressRegion: "Zachodniopomorskie",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "54.2601",
      longitude: "16.0156",
    },
    priceRange: "od 80 zł/os",
    currenciesAccepted: "PLN",
    paymentAccepted: "Gotówka, Przelew",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Aneks kuchenny",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Łazienka",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "TV",
        value: true,
      },
    ],
    numberOfRooms: 5,
    starRating: {
      "@type": "Rating",
      ratingValue: "4.8",
    },
    sameAs: ["https://www.facebook.com/"],
    image: `${BASE_URL}/images/hero-seaside.png`, // ← www
    checkinTime: "14:00",
    checkoutTime: "10:00",
    availableLanguage: {
      "@type": "Language",
      name: "Polish",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
