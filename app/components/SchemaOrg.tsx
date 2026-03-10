export default function SchemaOrg() {
  const BASE_URL = "https://www.pokoje-w-sarbinowie.pl";

  const lodgingBusiness = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${BASE_URL}/#lodging`,
    name: "Pokoje Przy Morzu Sarbinowo",
    description:
      "Tanie pokoje w Sarbinowie nad morzem, 150m od plaży. Noclegi z łazienką, TV, kuchnią i parkingiem. Idealne wakacje nad Bałtykiem dla rodzin.",
    url: BASE_URL,
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
    image: `${BASE_URL}/images/hero-seaside.png`,
    checkinTime: "14:00",
    checkoutTime: "10:00",
    availableLanguage: {
      "@type": "Language",
      name: "Polish",
    },
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Pokoje w Sarbinowie nad morzem",
    url: BASE_URL,
    publisher: {
      "@id": `${BASE_URL}/#lodging`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: BASE_URL,
      },
    ],
  };

  const schemas = [lodgingBusiness, webSite, breadcrumb];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
