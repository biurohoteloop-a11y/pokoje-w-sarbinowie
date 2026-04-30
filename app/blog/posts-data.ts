/** Lista wpisów bloga — osobny moduł bez Reacta (sitemap, generateStaticParams). */

export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
};

export const blogPosts: BlogPostSummary[] = [
  {
    slug: "co-zobaczyc-w-sarbinowie-atrakcje-2026",
    title: "Co zobaczyć w Sarbinowie? Top 10 atrakcji na wakacje 2026",
    excerpt:
      "Sarbinowo to nie tylko piaszczysta plaża! Odkryj najciekawsze atrakcje — port rybacki, klif w Jarosławcu, latarnia morska i lokalne smaki. Kompletny przewodnik na lato 2026.",
    date: "2026-02-15",
    readTime: "8 min",
    image: "/images/lody.jpeg",
    category: "Atrakcje",
  },
  {
    slug: "tanie-noclegi-nad-morzem-jak-zaoszczedzic",
    title: "Tanie noclegi nad morzem — jak znaleźć pokój od 80 zł za osobę?",
    excerpt:
      "Wakacje nad Bałtykiem nie muszą być drogie. Podpowiadamy jak znaleźć tanie noclegi w Sarbinowie i okolicach. Sprawdzone sposoby na oszczędne wakacje 2026.",
    date: "2026-02-01",
    readTime: "6 min",
    image: "/images/ROOM-1.jpg",
    category: "Poradnik",
  },
  {
    slug: "wakacje-z-dziecmi-nad-baltykiem-sarbinowo",
    title: "Wakacje z dziećmi nad Bałtykiem — dlaczego Sarbinowo jest idealne?",
    excerpt:
      "Płytka, bezpieczna plaża, spokojne okolice i mnóstwo atrakcji dla maluchów. Sprawdź dlaczego rodziny z dziećmi wybierają Sarbinowo na wakacje.",
    date: "2026-01-20",
    readTime: "10 min",
    image: "/images/chlopiec.jpg",
    category: "Rodzina",
  },
  {
    slug: "kuchnia-nadmorska-sarbinowo-co-jesc",
    title: "Kuchnia nadmorska — co jeść w Sarbinowie? Ryby, smażalnie, lokale",
    excerpt:
      "Świeże ryby prosto z kutra, wędzone flądry na plaży i najlepsza zupa rybna na wybrzeżu. Kulinarny przewodnik po Sarbinowie.",
    date: "2026-01-10",
    readTime: "5 min",
    image: "/images/fish.jpg",
    category: "Kuchnia",
  },
  {
    slug: "sciezki-rowerowe-sarbinowo-mielno-okolice",
    title: "Ścieżki rowerowe — Sarbinowo, Mielno i okolice na dwóch kółkach",
    excerpt:
      "Nadmorskie trasy rowerowe wzdłuż klifu, przez sosnowe lasy i urokliwe wioski rybackie. Najlepsze trasy w sezonie 2026.",
    date: "2025-12-28",
    readTime: "7 min",
    image: "/images/rower.jpg",
    category: "Aktywność",
  },
  {
    slug: "sarbinowo-czy-mielno-porownanie-kurortow",
    title: "Sarbinowo czy Mielno? Porównanie kurortów — który wybrać w 2026?",
    excerpt:
      "Spokój i kameralna atmosfera kontra tętniący życiem kurort. Porównujemy ceny, plaże, atrakcje i noclegi. Który jest lepszy dla Ciebie?",
    date: "2025-12-15",
    readTime: "9 min",
    image: "/images/molo.jpeg",
    category: "Przewodnik",
  },
];
