"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
 Bath ,UtensilsCrossed ,Umbrella ,Anchor, Shell, MapPin, Phone, Mail, Star, Waves,
  Users, Maximize2, ChevronDown, ArrowRight
} from "lucide-react";
import { useState, } from "react";


gsap.registerPlugin(ScrollTrigger);

// ============================================================
// DANE AZAKA
// ============================================================
const AZAK_ROOMS = [
  { name: "Pokój Kapitan – 102", size: "18 m²", guests: 4, price: "450 zł", image: "/images/kapitan.jpeg", type: "Pokój", link: "https://azaksarbinowo.pl/noclegi/kapitan/" },
  { name: "Pokój Molo – 203", size: "11 m²", guests: 2, price: "350 zł", image: "/images/room-2.jpg", type: "Pokój", link: "https://azaksarbinowo.pl/noclegi/molo/" },
  { name: "Pokój Horyzont – 204", size: "11 m²", guests: 2, price: "350 zł", image: "/images/Horyzont.jpg", type: "Pokój", link: "https://azaksarbinowo.pl/noclegi/horyzont/" },
  { name: "Pokój Perła – 206", size: "14 m²", guests: 2, price: "300 zł", image: "/images/perla.jpg", type: "Pokój", link: "https://azaksarbinowo.pl/noclegi/perla/" },
  { name: "Pokój Rejs – 101", size: "17 m²", guests: 2, price: "300 zł", image: "/images/rejs.jpg", type: "Pokój", link: "https://azaksarbinowo.pl/noclegi/rejs/" },
  { name: "Pokój Syrenka – 202", size: "10 m²", guests: 2, price: "250 zł", image: "/images/syrenka.jpeg", type: "Pokój", link: "https://azaksarbinowo.pl/noclegi/syrenka/" },
  { name: "Pokój Arielka – 201", size: "10 m²", guests: 2, price: "250 zł", image: "/images/arielka.jpeg", type: "Pokój", link: "https://azaksarbinowo.pl/noclegi/arielka/" },
  { name: "Pokój Fala – 103", size: "18 m²", guests: 4, price: "300 zł", image: "/images/fala.jpg", type: "Pokój", link: "https://azaksarbinowo.pl/noclegi/fala/" },
  { name: "Pokój Latarnia – 104", size: "23 m²", guests: 4, price: "350 zł", image: "/images/latarnia.jpg", type: "Pokój", link: "https://azaksarbinowo.pl/noclegi/latarnia/" },
  { name: "Apartament Ocean – 105", size: "35 m²", guests: 5, price: "450 zł", image: "/images/ocean.jpeg", type: "Apartament", link: "https://azaksarbinowo.pl/noclegi/apartament-ocean/" },
  { name: "Apartament Błękit – 106", size: "45 m²", guests: 8, price: "550 zł", image: "/images/blekit.jpg", type: "Apartament", link: "https://azaksarbinowo.pl/noclegi/apartament-blekit/" },
  { name: "Pokój Kotwica – 107", size: "18 m²", guests: 4, price: "400 zł", image: "/images/kotwica.jpeg", type: "Pokój", link: "https://azaksarbinowo.pl/noclegi/kotwica/" },
  { name: "Domek Muszelka", size: "26 m²", guests: 4, price: "500 zł", image: "/images/muszelka.jpg", type: "Domek", link: "https://azaksarbinowo.pl/noclegi/domek-muszelka-1/" },
  { name: "Domek Bryza", size: "19 m²", guests: 4, price: "450 zł", image: "/images/bryza.jpg", type: "Domek", link: "https://azaksarbinowo.pl/noclegi/domek-bryza-2/" },
  { name: "Domek Mewa", size: "27 m²", guests: 4, price: "500 zł", image: "/images/mewa.jpeg", type: "Domek", link: "https://azaksarbinowo.pl/noclegi/domek-bryza-3/" },
];



const AZAK_FAQ = [
  {
    q: "Gdzie znajduje się Pensjonat Azak?",
    a: "Pensjonat Azak znajduje się przy ul. Nadmorskiej 68 w Sarbinowie. Jesteśmy dosłownie kilka kroków od plaży – to jedna z najbliżej morza położonych kwater w całym Sarbinowie.",
  },
  {
    q: "Czy Azak jest blisko plaży?",
    a: "Tak! To nasz największy atut – do plaży mamy zaledwie kilkadziesiąt metrów. Wystarczy wyjść za bramę i już jest się na piasku.",
  },
  {
    q: "Czy akceptujecie zwierzęta?",
    a: "Tak, jesteśmy przyjazni zwierzętom. Możecie zabrać ze sobą swojego pupila – prosimy jednak o wcześniejszy kontakt telefoniczny w celu potwierdzenia.",
  },
  {
    q: "Czy jest darmowy parking?",
    a: "Tak, dla wszystkich gości zapewniamy bezpłatny parking na terenie obiektu – wliczony w cenę pobytu.",
  },
  {
    q: "Jakie typy zakwaterowania oferujecie?",
    a: "Oferujemy pokoje 2- i 4-osobowe, apartamenty z aneksem kuchennym oraz domki. Każdy pokój posiada prywatną łazienkę i pełne wyposażenie.",
  },
  {
    q: "Czy pokoje mają widok na morze?",
    a: "Wiele naszych pokoi i apartamentów posiada balkony lub okna z widokiem na morze. Przy rezerwacji możemy doradzić który pokój oferuje najlepszy widok.",
  },
  {
    q: "Jak można dokonać rezerwacji?",
    a: "Rezerwacji można dokonać telefonicznie pod numerem +48 502 180 028 lub +48 503 300 348, a także mailowo na adres info@azaksarbinowo.pl.",
  },
  {
    q: "Od kiedy działa Pensjonat Azak?",
    a: "Pensjonat Azak ma długą historię – powstał w 1920 roku. Niedawno przeszedł gruntowny remont, dzięki czemu łączy historyczny charakter z nowoczesnym komfortem.",
  },
  {
    q: "Czy w pobliżu są restauracje i atrakcje?",
    a: "Pensjonat leży w samym centrum Sarbinowa – w pobliżu znajdują się kawiarnie, restauracje, sklepy, promenada oraz liczne atrakcje dla dzieci i dorosłych.",
  },
  {
    q: "Jaka jest polityka anulowania rezerwacji?",
    a: "Szczegółowe warunki anulowania ustalane są indywidualnie. Prosimy o kontakt telefoniczny lub mailowy – postaramy się znaleźć najlepsze rozwiązanie.",
  },
];

const AZAK_FEATURES = [
  { icon: "🌊", title: "Bliżej morza już nie można", desc: "Pensjonat Azak leży dosłownie kilka kroków od plaży." },
  { icon: "🏖️", title: "Widok na morze", desc: "Wiele pokoi i apartamentów z balkonem i widokiem na Bałtyk." },
  { icon: "🏙️", title: "Centrum Sarbinowa", desc: "Blisko promenady, kawiarni, restauracji i atrakcji." },
  { icon: "🛋️", title: "Komfortowe wnętrza", desc: "Aneksy kuchenne, prywatne łazienki i pełne wyposażenie." },
];

const AZAK_REVIEWS = [
  { name: "Anna Komar", text: "Miejsce świetne – bardzo czysto, klimatyzacja, kominek, a pokoje urządzone ze smakiem. Przesympatyczna właścicielka. Polecamy!", rating: 5 },
  { name: "Anna Jankowiak", text: "Rewelacyjne miejsce! Bliżej morza naprawdę być się nie da 😍 Obsługa przesympatyczna. Akceptują czworonożnych członków rodziny!", rating: 5 },
  { name: "Emilia", text: "Gorąco polecam! Idealne miejsce na odpoczynek – czysto, przytulnie, a do morza naprawdę bardzo blisko. Na pewno wracamy!", rating: 5 },
  { name: "Kuba", text: "Przyjeżdżamy z dziećmi do Azaka od 3 lat. Pokoje w świetnej lokalizacji, ładnie urządzone i zawsze czyste. Polecam!", rating: 5 },
];

// ============================================================
// WAVE DIVIDER
// ============================================================
function WaveDivider({ flip, color, bg }: { flip?: boolean; color?: string; bg?: string }) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
      style={{ marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0, backgroundColor: bg || "transparent" }}
    >
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]" fill={color || "#f7fafe"}>
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}

// ============================================================
function AzakHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .fromTo(titleRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }, "-=0.4")
        .fromTo(subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .fromTo(arrowRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");

      gsap.to(arrowRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(imgRef.current,
        { scale: 1 },
        {
          scale: 1.15,
          duration: 10,
          ease: "none",
          repeat: -1,
          yoyo: true,
        }
      );

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: "100svh" }}
    >
      {/* TŁO z Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={imgRef}
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/azak-srodek.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transformOrigin: "center center",
          }}
        />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

      {/* TREŚĆ */}
      <div className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto">
        <span
          ref={badgeRef}
          className="inline-flex items-center gap-2 md:gap-3 text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase font-light text-white/90 mb-6 md:mb-8 opacity-0"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <img
            src="/images/icons/Sailing-Archor--Streamline-Freehand.svg"
            alt="Kotwica"
            className="w-4 h-4 md:w-5 md:h-5"
            style={{ filter: "brightness(0) saturate(100%) invert(73%) sepia(30%) saturate(500%) hue-rotate(175deg) brightness(105%) contrast(90%)" }}
          />
          Sarbinowo &bull; ul. Nadmorska 68
          <img
            src="/images/icons/Sailing-Archor--Streamline-Freehand.svg"
            alt="Kotwica"
            className="w-4 h-4 md:w-5 md:h-5"
            style={{ filter: "brightness(0) saturate(100%) invert(73%) sepia(30%) saturate(500%) hue-rotate(175deg) brightness(105%) contrast(90%)" }}
          />
        </span>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-4 md:mb-6 tracking-[0.02em] leading-[0.9] text-white drop-shadow-2xl opacity-0"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pensjonat
          <br />
          <em className="italic text-[#7dbde8]/90">Azak</em>
        </h1>

        <p
          ref={subtitleRef}
          className="text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-white/85 mb-10 md:mb-14 opacity-0"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Bliżej morza już nie można.
          <br className="hidden md:block" />
          Nr 1 w Sarbinowie — pokoje i apartamenty z widokiem na Bałtyk.
        </p>

        <div ref={arrowRef} className="opacity-0 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span
              className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Odkryj więcej
            </span>
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}


function AzakIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      const columns = columnsRef.current?.querySelectorAll(".intro-col");
      if (columns) {
        gsap.fromTo(
          columns,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: columnsRef.current,
              start: "top 80%",
            },
          }
        );
      }

      const seps = columnsRef.current?.querySelectorAll(".intro-sep");
      if (seps) {
        gsap.fromTo(
          seps,
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1.2,
            delay: 0.4,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: columnsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Tuż przy plaży",
      desc: "Pensjonat Azak leży dosłownie kilka kroków od morza. Wystarczy wyjść za bramę, by poczuć piasek pod stopami.",
      icon: "/images/icons/plaza.png",
    },
    {
      title: "Widok na morze",
      desc: "Wiele pokoi i apartamentów z balkonami i widokiem na Bałtyk — idealne miejsce, by budzić się z szumem fal.",
      icon: "/images/icons/widok.png",
    },
    {
      title: "Komfort i styl",
      desc: "Pokoje i apartamenty urządzone z dbałością o detal — aneksy kuchenne, prywatne łazienki i nowoczesne wyposażenie.",
      icon: "/images/icons/komfort.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative z-30 py-24 md:py-32 lg:py-40 bg-white"
      data-testid="azak-intro-section"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* ===== NAGŁÓWEK ===== */}
        <div ref={headingRef} className="text-center mb-20 md:mb-28 opacity-0">
          <span
            className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#5b9bc4] font-medium block mb-5 md:mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Udogodnienia
          </span>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-light text-[#2a3a4a] leading-snug max-w-3xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Twój dom nad morzem w sercu
            <br className="hidden md:block" />
            <em className="italic text-[#5b9bc4]">Sarbinowa</em> — miejsce,
            <br className="hidden md:block" />
            które zapamiętasz na długo
          </h2>
        </div>

        {/* ===== 3 KOLUMNY ===== */}
        <div
          ref={columnsRef}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-12 md:gap-0 items-start"
        >
          {features.map((feature, index) => (
            <div key={`w-${index}`} className="contents">
              {/* Kolumna */}
              <div className="intro-col flex flex-col items-center text-center px-4 md:px-8 lg:px-12 opacity-0">
                {/* Ikona PNG w zaokrąglonym kwadracie */}
                <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] rounded-[20px] bg-[#f0f5fa] flex items-center justify-center mb-8 md:mb-10">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={56}
                    height={56}
                    className="icon-blue"
                  />
                </div>

                <h3
                  className="text-lg md:text-[1.3rem] font-medium text-[#2a3a4a] mb-3 md:mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {feature.title}
                </h3>

                <p
                  className="text-[13px] md:text-[15px] text-[#5a7080] leading-relaxed max-w-[280px] md:max-w-[300px]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {feature.desc}
                </p>
              </div>

              {/* ===== SEPARATOR PIONOWY — desktop ===== */}
              {index < features.length - 1 && (
                <div className="intro-sep hidden md:flex items-center justify-center self-stretch origin-top">
                  <div
                    className="w-px h-full"
                    style={{
                      minHeight: "320px",
                      background:
                        "linear-gradient(to bottom, transparent 0%, #cdd8e2 8%, #cdd8e2 92%, transparent 100%)",
                    }}
                  />
                </div>
              )}

              {/* ===== SEPARATOR POZIOMY — mobile ===== */}
              {index < features.length - 1 && (
                <div className="md:hidden flex justify-center">
                  <div
                    className="h-px"
                    style={{
                      width: "140px",
                      background:
                        "linear-gradient(to right, transparent 0%, #cdd8e2 15%, #cdd8e2 85%, transparent 100%)",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ============================================================
// SEKCJA 2 — O OBIEKCIE (nowy layout siatka kart)
// ============================================================
function AzakAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const ctaCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      [card1Ref, card2Ref, card3Ref, ctaCardRef].forEach((ref, index) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, delay: 0.4 + index * 0.15, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
          }
        );
      });

      gsap.to(card2Ref.current, {
        y: -30, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.5 },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 bg-gradient-to-b from-[#f7fafe] to-white py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute -top-8 left-0 w-full h-10 bg-[#f7fafe] rounded-t-[2.5rem]" />

      {/* Nagłówek */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <div ref={titleRef} className="opacity-0 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/icons/Snail-Shell--Streamline-Freehand.svg"
              alt="Muszelka"
              className="w-5 h-5 md:w-6 md:h-6 icon-blue"
            />
            <span
              className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#5b9bc4] font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Poznaj nas
            </span>
            <img
              src="/images/icons/Snail-Shell--Streamline-Freehand.svg"
              alt="Muszelka"
              className="w-5 h-5 md:w-6 md:h-6 icon-blue"
            />
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#2a3a4a] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nr 1 w <em className="italic text-[#5b9bc4]">Sarbinowie</em>
          </h2>
        </div>
        <p
          ref={descriptionRef}
          className="text-base md:text-lg lg:text-xl text-[#4a6a7a] max-w-3xl opacity-0 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Pensjonat Azak to wyjątkowe miejsce w samym sercu Sarbinowa,
          zaledwie kilka kroków od plaży. Oferujemy wygodne pokoje i apartamenty —
          wiele z nich z balkonami i widokiem na morze. Łączymy domową atmosferę
          z nowoczesnym komfortem, by każdy Gość czuł się swobodnie i naprawdę wypoczął.
        </p>
      </div>

      {/* Siatka kart */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Karta 1 — Ganek */}
        <div
          ref={card1Ref}
          className="opacity-0 rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-105"
        >
          <div className="relative h-96 md:h-[500px]">
            <img
              src="/images/azak-ganek.jpeg"
              alt="Pensjonat Azak ganek"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a3a4a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Karta 2 — Morze z pinem */}
        <div
          ref={card2Ref}
          className="opacity-0 rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-105"
        >
          <div className="relative h-96 md:h-[500px]">
            <img
              src="/images/azak-morze.jpeg"
              alt="Pensjonat Azak widok z drona"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a3a4a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* PIN "Tu jesteśmy" */}
            <div
              className="absolute z-20"
              style={{ top: "calc(35% - 48px)", left: "calc(44% - -18px)" }}
            >
              <div className="relative flex flex-col items-center">
                <div className="mb-1 animate-bounce">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3 L12 18 M6 12 L12 18 L18 12"
                      stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
                    />
                  </svg>
                </div>
                <div className="relative flex items-center justify-center mb-2">
                  <span className="absolute w-10 h-10 rounded-full bg-white/30 animate-ping" />
                  <div className="relative w-5 h-5 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2a5a7b]" />
                  </div>
                </div>
                <div className="px-4 py-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Karta 3 — Elewacja */}
        <div
          ref={card3Ref}
          className="opacity-0 rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-105"
        >
          <div className="relative h-96 md:h-[500px]">
            <img
              src="/images/azak-elewacja.jpeg"
              alt="Pensjonat Azak elewacja"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a3a4a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Karta 4 — CTA */}
        <div
          ref={ctaCardRef}
          className="opacity-0 rounded-3xl bg-white border-2 border-[#d1e3ef] p-8 md:p-10 flex flex-col justify-between h-96 md:h-[500px] group cursor-pointer hover:border-[#2a3a4a] transition-all duration-500 hover:shadow-2xl"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/icons/Snail-Shell--Streamline-Freehand.svg"
                alt="Muszelka"
                className="w-5 h-5 icon-blue"
              />
              <p
                className="text-sm text-[#5b9bc4] tracking-wide uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Zarezerwuj
              </p>
            </div>
            <h3
              className="text-3xl md:text-4xl font-light text-[#2a3a4a] mb-2 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Na co
              <br />
              <em className="italic text-[#5b9bc4]">czekasz?</em>
            </h3>
            <p
              className="text-[#4a6a7a] text-sm mt-4 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Sprawdź dostępność i zarezerwuj swój wymarzony pobyt nad morzem.
            </p>
          </div>

          <a
            href="https://azaksarbinowo.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 border-2 border-[#2a3a4a] rounded-full text-[#2a3a4a] font-medium hover:bg-[#2a3a4a] hover:text-white transition-all duration-300 group-hover:gap-5 w-fit"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Zarezerwuj teraz
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}




function AzakRooms() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const mobileAnimationRef = useRef<gsap.core.Tween | null>(null);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        }
      );

      const track = trackRef.current;
      if (track) {
        const totalWidth = track.scrollWidth / 2;
        animationRef.current = gsap.to(track, {
          x: -totalWidth,
          duration: 80,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        });
      }

      const mobileTrack = mobileTrackRef.current;
      if (mobileTrack) {
        const totalWidth = mobileTrack.scrollWidth / 2;
        mobileAnimationRef.current = gsap.to(mobileTrack, {
          x: -totalWidth,
          duration: 50,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches.item(0)!.clientX;
    touchStartY.current = e.touches.item(0)!.clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches.item(0)!;
    const deltaX = Math.abs(touch.clientX - touchStartX.current);
    const deltaY = Math.abs(touch.clientY - touchStartY.current);
    if (deltaX > deltaY) {
      mobileAnimationRef.current?.pause();
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      mobileAnimationRef.current?.resume();
    }, 2000);
  };

  const doubled = [...AZAK_ROOMS, ...AZAK_ROOMS];

  return (
    <section ref={sectionRef} className="relative z-30 bg-white py-16 md:py-32 overflow-hidden">
      <WaveDivider flip color="#f7fafe" bg="white" />

      <div ref={headingRef} className="opacity-0 px-6 md:px-20 xl:px-32 mb-10 md:mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Shell className="w-4 h-4 md:w-5 md:h-5 text-[#5b9bc4]" />
          <span
            className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#5b9bc4] font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Nasza oferta
          </span>
          <Shell className="w-4 h-4 md:w-5 md:h-5 text-[#5b9bc4]" />
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#2a3a4a] text-center mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pokoje i <em className="italic text-[#5b9bc4]">apartamenty</em>
        </h2>
        <p
          className="text-center text-[#4a6a7a] text-sm md:text-lg max-w-xl mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Znajdź idealne miejsce dla siebie — dotknij kartę aby poznać szczegóły.
        </p>
      </div>

      {/* MOBILE KARUZELA */}
      <div
        className="block md:hidden w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={mobileTrackRef}
          className="flex w-max"
          style={{ gap: "16px", paddingLeft: "24px", paddingRight: "24px" }}
        >
          {doubled.map((room, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-3xl overflow-hidden"
              style={{ width: "75vw", height: "65vw" }}
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute top-4 left-4">
                <span
                  className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {room.type}
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span
                  className="inline-block bg-[#2a5a7b]/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {room.price}
                  <span className="text-white/60 text-[10px] ml-1">/noc</span>
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                  className="text-lg font-light text-white mb-2 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {room.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-white/70">
                    <span className="flex items-center gap-1 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <Maximize2 className="w-3 h-3" />{room.size}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <Users className="w-3 h-3" />{room.guests} gości
                    </span>
                  </div>
                  {/* PRZYCISK MOBILE */}
                  <a
                    href={room.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-1.5 bg-white text-[#2a5a7b] text-[10px] tracking-[0.1em] uppercase font-medium pl-3 pr-1.5 py-1.5 rounded-full transition-all duration-300 hover:bg-[#2a5a7b] hover:text-white"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span>Rezerwuj</span>
                    <span className="w-5 h-5 rounded-full bg-[#2a5a7b] group-hover/btn:bg-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5h6M5 2l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:stroke-[#2a5a7b]" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP KARUZELA */}
      <div
        className="hidden md:block w-full overflow-hidden"
        onMouseEnter={() => animationRef.current?.pause()}
        onMouseLeave={() => animationRef.current?.resume()}
      >
        <div
          ref={trackRef}
          className="flex w-max"
          style={{ gap: "28px", paddingLeft: "40px", paddingRight: "40px" }}
        >
          {doubled.map((room, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer"
              style={{ width: "38vw", height: "70vh" }}
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute top-6 left-6">
                <span
                  className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {room.type}
                </span>
              </div>

              <div className="absolute top-6 right-6">
                <span
                  className="inline-block bg-[#2a5a7b]/80 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {room.price}
                  <span className="text-white/60 text-xs ml-1">/noc</span>
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3
                  className="text-3xl md:text-4xl font-light text-white mb-3 leading-tight transition-transform duration-500 group-hover:-translate-y-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {room.name}
                </h3>
                <div className="flex items-center gap-5 mb-4 text-white/70">
                  <span className="flex items-center gap-1.5 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <Maximize2 className="w-4 h-4" />{room.size}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <Users className="w-4 h-4" />{room.guests} gości
                  </span>
                </div>

                {/* PRZYCISK DESKTOP - pojawia się na hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-[60px] transition-all duration-500 ease-in-out">
                  <a
                    href={room.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 bg-white text-[#2a5a7b] text-xs tracking-[0.15em] uppercase font-medium pl-5 pr-2 py-2 rounded-full transition-all duration-300 hover:bg-[#2a5a7b] hover:text-white"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span>Zarezerwuj</span>
                    <span className="w-7 h-7 rounded-full bg-[#2a5a7b] group-hover/btn:bg-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 5h6M5 2l3 3-3 3"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function AzakAboutStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
      gsap.to(imgInnerRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const icons = [
    {
      label: "Przy plaży",
      icon: "/images/icons/sun-umbrella.svg",
    },
    {
      label: "Widok na morze",
      icon: "/images/icons/Nautic-Sports-Sailing--Streamline-Freehand.svg",
    },
    {
      label: "Rodzinny pensjonat",
      icon: "/images/icons/Snail-Shell--Streamline-Freehand.svg",
    },
  ];

  return (
    <section ref={sectionRef} className="relative z-30 bg-white py-16 md:py-28 overflow-hidden">
      <div className="px-6 md:px-20 xl:px-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* TEKST - lewa strona */}
          <div ref={textRef} className="opacity-0">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/icons/Sailing-Archor--Streamline-Freehand.svg"
                alt="Kotwica"
                className="w-5 h-5 md:w-6 md:h-6 icon-blue"
              />
              <span
                className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#5b9bc4] font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                O nas
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#2a3a4a] mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Witaj
              <br />
              w <em className="italic text-[#5b9bc4]">Azaku</em>
            </h2>

            <p
              className="text-[#4a6a7a] text-base md:text-lg leading-relaxed mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Pensjonat Azak to miejsce z historią – powstał w 1920 roku i od lat
              przyciąga gości szukających spokoju i wypoczynku nad Bałtykiem. Dziś
              obiekt ma zupełnie nowe oblicze – przeszedł gruntowny remont,
              odświeżyliśmy elewację, a wszystkie pokoje i apartamenty zostały
              na nowo wyposażone.
            </p>

            <p
              className="text-[#4a6a7a] text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Nasz największy atut? Lokalizacja. Pensjonat znajduje się przy samej
              plaży, w samym sercu Sarbinowa. Wystarczy kilka kroków, by dojść do
              morza, promenady, kawiarni czy restauracji.
            </p>

            {/* IKONY - 3 większe */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {icons.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 border border-[#5b9bc4]/25 rounded-2xl px-4 py-5 hover:border-[#5b9bc4]/50 hover:bg-[#f0f6fa] transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl border border-[#5b9bc4]/25 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-8 h-8 icon-blue"
                    />
                  </div>
                  <span
                    className="text-xs md:text-sm text-[#2a3a4a] font-light leading-snug text-center"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-16 h-px bg-[#5b9bc4]/40 mb-8" />

            <a
              href="tel:+48502180028"
              className="inline-flex items-center gap-3 text-[#2a5a7b] text-sm tracking-[0.15em] uppercase font-medium group"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Poznaj nas lepiej
              <span className="w-8 h-px bg-[#5b9bc4] transition-all duration-300 group-hover:w-14" />
            </a>
          </div>

          {/* ZDJĘCIE - prawa strona */}
          <div ref={imageRef} className="opacity-0 relative">
            <div className="rounded-3xl overflow-hidden" style={{ height: "420px" }}>
              <div ref={imgInnerRef} className="w-full h-[115%] -mt-[7%]">
                <img
                  src="/images/wnetrze-apartamentu.jpg"
                  alt="Pensjonat Azak wnętrze apartamentu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Badge na zdjęciu */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-lg border border-[#e8eef5]">
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-[#5b9bc4] font-medium mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Od roku
              </p>
              <p
                className="text-3xl font-light text-[#2a3a4a]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                1920
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



// ============================================================
// SEKCJA UDOGODNIEŃ
// ============================================================

function AzakAmenities() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgBigRef = useRef<HTMLDivElement>(null);
  const imgBigInnerRef = useRef<HTMLDivElement>(null);
  const imgSmallRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const amenities = [
    {
      title: "Pokoje i apartamenty",
      desc: "Do wyboru przytulne pokoje oraz przestronne apartamenty – każdy znajdzie coś dla siebie.",
      icon: "/images/icons/Kitchen-Storage--Streamline-Freehand.svg",
    },
    {
      title: "Widok na morze",
      desc: "Wybrane pokoje mają balkon z przepięknym widokiem na morze.",
      icon: "/images/icons/View-Binocular-1--Streamline-Freehand.svg",
    },
    {
      title: "Darmowy parking",
      desc: "Dla wszystkich gości zapewniamy bezpłatny parking – w cenie pobytu.",
      icon: "/images/icons/Road-Sign-Parking--Streamline-Freehand.svg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );

      gsap.fromTo(imgBigRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );

      gsap.to(imgBigInnerRef.current, {
        y: -80,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.fromTo(imgSmallRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
        }
      );

      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-30 bg-[#f7fafe] py-16 md:py-28 overflow-hidden">
      <div className="px-6 md:px-20 xl:px-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* LEWA - kompozycja dwóch zdjęć */}
          <div ref={imgBigRef} className="opacity-0 relative order-1" style={{ height: "520px" }}>
            <div
              className="absolute rounded-3xl overflow-hidden"
              style={{ top: 0, left: 0, right: "15%", bottom: "10%" }}
            >
              <div
                ref={imgBigInnerRef}
                className="w-full h-full"
                style={{ transformOrigin: "center center" }}
              >
                <img
                  src="/images/widok.jpeg"
                  alt="Widok z pensjonatu Azak"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              ref={imgSmallRef}
              className="absolute rounded-2xl overflow-hidden shadow-2xl border-4 border-white opacity-0"
              style={{ width: "52%", height: "200px", bottom: 0, right: 0 }}
            >
              <img
                src="/images/azak-srodek.jpg"
                alt="Pensjonat Azak wnętrze"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-5 left-5 z-10 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-[#e8eef5]">
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-[#5b9bc4] font-medium mb-0.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Sarbinowo
              </p>
              <p
                className="text-sm font-light text-[#2a3a4a]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Kilka kroków od plaży
              </p>
            </div>
          </div>

          {/* PRAWA - tekst */}
          <div ref={textRef} className="opacity-0 order-2 mt-12 md:mt-0">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/icons/Snail-Shell--Streamline-Freehand.svg"
                alt="Muszelka"
                className="w-5 h-5 md:w-6 md:h-6 icon-blue"
              />
              <span
                className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#5b9bc4] font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Udogodnienia
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#2a3a4a] mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nasze
              <br />
              <em className="italic text-[#5b9bc4]">zalety</em>
            </h2>

            <p
              className="text-[#4a6a7a] text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Jesteśmy rodzinnym pensjonatem w samym sercu Sarbinowa,
              kilka kroków od plaży. Idealne miejsce zarówno na spokojny
              odpoczynek we dwoje, jak i rodzinne wakacje.
            </p>

            <div className="flex flex-col gap-4">
              {amenities.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => { itemsRef.current[i] = el; }}
                  className="flex items-center gap-5 opacity-0 border border-[#5b9bc4]/20 rounded-2xl px-5 py-4 hover:border-[#5b9bc4]/40 hover:bg-white transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl border border-[#5b9bc4]/25 bg-white flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-8 h-8 icon-blue"
                    />
                  </div>
                  <div>
                    <p
                      className="text-sm md:text-base font-medium text-[#2a3a4a] mb-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-xs md:text-sm text-[#7a9aaa] leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}





// ============================================================
function AzakFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: "/images/icons/Nautic-Sports-Sailing--Streamline-Freehand.svg",
      title: "Widok na morze",
      desc: "Codziennie budzisz się przy szumie fal i możesz podziwiać zachody słońca z własnego pokoju.",
      color: "#7dbde8",
      bg: "rgba(125,189,232,0.15)",
    },
    {
      icon: "/images/icons/Wifi-Sync--Streamline-Freehand.svg",
      title: "Darmowe WiFi",
      desc: "Szybki internet w całym obiekcie – na wypadek, gdybyś chciał być online.",
      color: "#a8d8a8",
      bg: "rgba(168,216,168,0.15)",
    },
    {
      icon: "/images/icons/sun-umbrella.svg",
      title: "Przy samej plaży",
      desc: "Zaledwie kilka kroków dzieli Cię od szerokiej, piaszczystej plaży w Sarbinowie.",
      color: "#f4c06a",
      bg: "rgba(244,192,106,0.15)",
    },
    {
      icon: "/images/icons/View-Binocular-1--Streamline-Freehand.svg",
      title: "Pokoje z balkonem",
      desc: "Prywatna przestrzeń z widokiem na morze – idealne miejsce na poranną kawę.",
      color: "#f4a0a0",
      bg: "rgba(244,160,160,0.15)",
    },
    {
      icon: "/images/icons/Kitchen-Storage--Streamline-Freehand.svg",
      title: "Aneksy kuchenne",
      desc: "Wygodne rozwiązanie dla rodzin i par – przygotujesz śniadanie czy kolację tak, jak lubisz.",
      color: "#c9a0dc",
      bg: "rgba(201,160,220,0.15)",
    },
    {
      icon: "/images/icons/Street-Light--Streamline-Freehand.svg",
      title: "Pokoje z łazienką",
      desc: "Każdy pokój i apartament ma własną łazienkę – pełen komfort i wygoda podczas pobytu.",
      color: "#7dbde8",
      bg: "rgba(125,189,232,0.15)",
    },
    {
      icon: "/images/icons/Various-Building-Anchor--Streamline-Freehand.svg",
      title: "W samym centrum",
      desc: "Blisko atrakcji, promenady, kawiarni, restauracji i sklepów – wszystko masz pod ręką.",
      color: "#f4c06a",
      bg: "rgba(244,192,106,0.15)",
    },
    {
      icon: "/images/icons/Dog-Walk--Streamline-Freehand.svg",
      title: "Akceptujemy zwierzęta",
      desc: "Twój czworonożny przyjaciel jest u nas mile widziany.",
      color: "#a8d8a8",
      bg: "rgba(168,216,168,0.15)",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        }
      );
      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
            delay: i * 0.08,
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 py-16 md:py-28"
      style={{ backgroundColor: "rgb(61, 122, 148)" }}
    >
      {/* Fala górna */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]" fill="white">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Fala dolna */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]" fill="white">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="px-6 md:px-20 xl:px-32">

        {/* HEADING */}
        <div ref={headingRef} className="text-center mb-14 md:mb-20 opacity-0">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/images/icons/Snail-Shell--Streamline-Freehand.svg"
              alt="Muszelka"
              className="w-5 h-5 md:w-6 md:h-6 invert opacity-60"
            />
            <span
              className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/60 font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Dlaczego Azak
            </span>
            <img
              src="/images/icons/Snail-Shell--Streamline-Freehand.svg"
              alt="Muszelka"
              className="w-5 h-5 md:w-6 md:h-6 invert opacity-60"
            />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nasze <em className="italic text-white/80">zalety</em>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="opacity-0 flex flex-col items-center text-center group"
            >
              {/* Ikona z kolorowym tłem */}
              <div
                className="w-18 h-18 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: f.bg,
                  border: `1px solid ${f.color}40`,
                  width: "72px",
                  height: "72px",
                }}
              >
                <img
                  src={f.icon}
                  alt={f.title}
                  className="w-9 h-9 invert opacity-90"
                />
              </div>

              {/* Linia dekoracyjna pod ikoną */}
              <div
                className="w-8 h-px mb-4 transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: f.color }}
              />

              {/* Tytuł */}
              <h3
                className="text-base md:text-lg font-light text-white mb-2 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {f.title}
              </h3>

              {/* Opis */}
              <p
                className="text-xs md:text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





function AzakFAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        }
      );
      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
            delay: i * 0.08,
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-30 bg-white py-20 md:py-32">
      <WaveDivider flip color="#f7fafe" bg="white" />

      {/* FULL WIDTH - bez max-w */}
      <div className="px-6 md:px-20 xl:px-32">

        <div ref={headingRef} className="text-center mb-16 opacity-0">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shell className="w-5 h-5 text-[#5b9bc4]" />
            <span
              className="text-xs tracking-[0.3em] uppercase text-[#5b9bc4] font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              FAQ
            </span>
            <Shell className="w-5 h-5 text-[#5b9bc4]" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2a3a4a]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Często zadawane
            <br />
            <em className="italic text-[#5b9bc4]">pytania</em>
          </h2>
        </div>

        {/* PYTANIA */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-none">
          {AZAK_FAQ.map((faq, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="opacity-0 border-b border-[#e8eef5]"
            >
              {/* Pytanie */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left group"
              >
                <span
                  className="text-base md:text-lg font-light text-[#2a3a4a] group-hover:text-[#2a5a7b] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#5b9bc4]/30 flex items-center justify-center text-[#5b9bc4] transition-all duration-300 ${
                    openIndex === i ? "bg-[#5b9bc4] text-white rotate-45 border-[#5b9bc4]" : ""
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              {/* Odpowiedź */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? "max-h-[200px] pb-6" : "max-h-0"
                }`}
              >
                <p
                  className="text-[#4a6a7a] text-base leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA pod FAQ */}
        <div className="text-center mt-16">
          <p
            className="text-[#7a9aaa] text-base mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Masz inne pytanie? Skontaktuj się z nami bezpośrednio!
          </p>
          <a
            href="tel:+48502180028"
            className="inline-flex items-center gap-2 bg-[#2a5a7b] text-white text-sm tracking-[0.15em] uppercase font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#1a4a6b]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <Phone className="w-4 h-4" />
            Zadzwoń do nas
          </a>
        </div>

      </div>
    </section>
  );
}
// ============================================================
// METADATA
// ============================================================
// (w osobnym pliku jeśli chcesz SSR, ale na razie tu jako export)

// ============================================================
// PAGE GŁÓWNY
// ============================================================
export default function AzakPage() {
  return (
    <main className="relative">
      <AzakHero />
      <div className="relative z-30">
        <AzakIntro />
        <AzakAbout />
        <AzakRooms />
        <AzakAmenities />
        <AzakAboutStory />
        <AzakFeatures />
        
        <AzakFAQ />
      </div>
    </main>
  );
}