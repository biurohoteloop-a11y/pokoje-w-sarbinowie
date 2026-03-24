"use client";

import { usePathname } from "next/navigation";

export default function SchemaOrg() {
  const BASE_URL = "https://www.pokoje-w-sarbinowie.pl";
  const pathname = usePathname();

  const lodgingBusiness = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${BASE_URL}/#lodging`,
    name: "Pokoje Przy Morzu Sarbinowo",
    alternateName: "Pokoje u Babci Sarbinowo",
    description:
      "Tanie pokoje w Sarbinowie nad morzem, 150m od plaży. Noclegi z łazienką, TV, kuchnią i parkingiem. Idealne wakacje nad Bałtykiem dla rodzin.",
    url: BASE_URL,
    telephone: "+48502180028",
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
      latitude: 54.2601,
      longitude: 16.0156,
    },
    hasMap: "https://maps.google.com/?q=54.2601,16.0156",
    priceRange: "80-150 PLN",
    currenciesAccepted: "PLN",
    paymentAccepted: "Cash, Bank Transfer",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Bezpłatny parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bezpłatne WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Aneks kuchenny", value: true },
      { "@type": "LocationFeatureSpecification", name: "Łazienka w pokoju", value: true },
      { "@type": "LocationFeatureSpecification", name: "Telewizor", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ogród", value: true },
      { "@type": "LocationFeatureSpecification", name: "Grill", value: true },
    ],
    numberOfRooms: 5,
    image: [
      `${BASE_URL}/images/hero-seaside.png`,
      `${BASE_URL}/images/azak-elewacja.jpeg`,
      `${BASE_URL}/images/wnetrze-apartamentu.jpg`,
    ],
    checkinTime: "14:00",
    checkoutTime: "10:00",
    availableLanguage: {
      "@type": "Language",
      name: "Polish",
    },
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
  };

  // Dynamiczny breadcrumb na podstawie ścieżki
  const breadcrumbItems: { name: string; item?: string }[] = [
    { name: "Strona główna", item: BASE_URL },
  ];

  if (pathname === "/azak-sarbinowo") {
    breadcrumbItems.push({ name: "Apartament AZAK" });
  } else if (pathname === "/kontakt") {
    breadcrumbItems.push({ name: "Kontakt" });
  } else if (pathname === "/blog") {
    breadcrumbItems.push({ name: "Blog" });
  } else if (pathname.startsWith("/blog/")) {
    breadcrumbItems.push(
      { name: "Blog", item: `${BASE_URL}/blog` },
      { name: "Artykuł" }
    );
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.item ? { item: item.item } : {}),
    })),
  };

  const schemas = [lodgingBusiness, webSite, breadcrumb];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
