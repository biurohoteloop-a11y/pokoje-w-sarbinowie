import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Shell } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Sarbinowo atrakcje, plaże i porady na wakacje 2026",
  description:
    "Odkryj Sarbinowo i okolice. Porady na wakacje nad Bałtykiem, najlepsze atrakcje, plaże, noclegi i miejsca warte odwiedzenia. Planuj wakacje 2026 nad morzem!",
  keywords: [
    "sarbinowo atrakcje",
    "sarbinowo plaża",
    "wakacje nad morzem 2026",
    "noclegi sarbinowo",
    "pokoje sarbinowo",
    "tanie noclegi nad morzem",
    "co zobaczyć sarbinowo",
    "polskie wybrzeże",
  ],
  openGraph: {
    title: "Blog - Sarbinowo atrakcje, plaże i porady wakacyjne 2026",
    description:
      "Porady na wakacje nad Bałtykiem. Najlepsze atrakcje Sarbinowa i polskiego wybrzeża.",
    type: "website",
    locale: "pl_PL",
    url: "https://pokoje-w-sarbinowie.pl/blog",
    images: [
      {
        url: "/images/baner-blog.jpg",
        width: 1920,
        height: 1080,
        alt: "Plaża nad Morzem Bałtyckim - Sarbinowo",
      },
    ],
  },
  alternates: { canonical: "https://pokoje-w-sarbinowie.pl/blog" },
};

export const blogPosts = [
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



function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, second, ...rest] = blogPosts;

  return (
    <>
      {/* ===== BANER HERO - 50vh ===== */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/baner-blog.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a38]/60 via-[#1a3a4a]/40 to-[#0f2a38]/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-white/40" />
            <Shell className="w-5 h-5 text-[#7dbde8]" />
            <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-white/40" />
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-[0.02em]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nasz <em className="italic text-[#7dbde8]/90">Blog</em>
          </h1>

          <p
            className="text-base md:text-lg font-light text-white/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Inspiracje na wakacje 2026, porady podróżnicze i wszystko
            <br className="hidden md:block" />
            co warto wiedzieć o Sarbinowie i polskim wybrzeżu.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-[40px] md:h-[60px]"
            fill="#f7fafe"
          >
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ===== SIATKA BLOGA - FULL WIDTH ===== */}
      <section className="bg-[#f7fafe] py-16 md:py-24">
        <div className="w-full px-6 md:px-10 lg:px-16">
          {/* Nagłówek sekcji */}
          <div className="mb-12 md:mb-16">
            <span
              className="text-xs tracking-[0.3em] uppercase text-[#5b9bc4] font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Najnowsze artykuły
            </span>
            <div className="w-12 h-px bg-[#5b9bc4]/30 mt-3" />
          </div>

          {/* ---- GÓRNY RZĄD: Duży post (3/5) + Średni post (2/5) ---- */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            {/* === POST 1 - FEATURED DUŻY === */}
            <Link
              href={`/blog/${featured.slug}`}
              className="lg:col-span-3 group relative rounded-2xl overflow-hidden bg-[#1a3a4a] min-h-[420px] md:min-h-[500px] flex"
            >
              <div className="hidden md:block w-1/2 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${featured.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a3a4a]" />
              </div>

              <div
                className="md:hidden absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${featured.image})` }}
              />
              <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#1a3a4a] via-[#1a3a4a]/80 to-transparent" />

              <div className="relative z-10 md:w-1/2 flex flex-col justify-end md:justify-center p-8 md:p-10">
                <span
                  className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium bg-[#5b9bc4]/20 text-[#7dbde8] border border-[#5b9bc4]/30 mb-4 w-fit"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {featured.category}
                </span>

                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 leading-tight group-hover:text-[#7dbde8] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {featured.title}
                </h2>

                <p
                  className="text-sm md:text-base text-white/60 font-light leading-relaxed mb-6 line-clamp-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {featured.excerpt}
                </p>

                <div
                  className="flex items-center gap-4 text-white/40 text-xs mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[#7dbde8] text-sm font-light group-hover:gap-3 transition-all duration-300">
                  <span style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Czytaj artykuł
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* === POST 2 - ŚREDNI (2/5) === */}
            <Link
              href={`/blog/${second.slug}`}
              className="lg:col-span-2 group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${second.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium bg-white/95 text-[#2a5a7b] shadow-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {second.category}
                </span>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3
                  className="text-xl md:text-2xl font-light text-[#1a3a4a] mb-3 leading-snug group-hover:text-[#2a5a7b] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {second.title}
                </h3>

                <p
                  className="text-sm text-[#4a6a7a]/70 font-light leading-relaxed mb-4 line-clamp-3 flex-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {second.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#e8eef2]">
                  <div
                    className="flex items-center gap-3 text-[#4a6a7a]/50 text-xs"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(second.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {second.readTime}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#5b9bc4] group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>

          {/* ---- DOLNY RZĄD: 4 małe posty ---- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] tracking-[0.2em] uppercase font-medium bg-white/95 text-[#2a5a7b] shadow-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {post.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3
                    className="text-base font-light text-[#1a3a4a] mb-2 leading-snug group-hover:text-[#2a5a7b] transition-colors duration-300 line-clamp-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="text-xs text-[#4a6a7a]/60 font-light leading-relaxed mb-3 line-clamp-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-[#4a6a7a]/40">
                    <span
                      className="flex items-center gap-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#5b9bc4] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
