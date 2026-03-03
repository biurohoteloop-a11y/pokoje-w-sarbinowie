"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion"; // ✅ DODAJ TO
import {
 Twitter , Instagram, Facebook, MapPin, Phone, Mail, ChevronDown, Waves, Sun, Umbrella, Car, Wifi,
  UtensilsCrossed, Anchor, Shell, Bike, Star, Quote, Fish, Sailboat, TreePine,
  Tv, Coffee, Refrigerator, Bath, Users, Fence, X // ✅ DODAJ X tutaj
} from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

const ROOMS = [
  {
    id: 1,
    name: "Pokój Bałtycki",
    desc: "Przytulny pokój 2-osobowy z własną łazienką. TV, czajnik i lodówka w pokoju. Idealny na romantyczny wypoczynek.",
    price: "80 zł / os.",
    guests: "2 osoby",
    image: "/images/room-1.jpg",
  },
  {
    id: 2,
    name: "Pokój Bursztynowy",
    desc: "Komfortowy pokój 2-osobowy z łazienką, TV, czajnikiem i lodówką. Cisza i spokój nad morzem.",
    price: "80 zł / os.",
    guests: "2 osoby",
    image: "/images/room-2.jpg",
  },
  {
    id: 3,
    name: "Pokój Morski",
    desc: "Przestronny pokój 4-osobowy z łazienką. Wyposażony w TV, czajnik i lodówkę. Świetny dla rodzin.",
    price: "80 zł / os.",
    guests: "4 osoby",
    image: "/images/room-3.jpg",
  },
  {
    id: 4,
    name: "Pokój Słoneczny",
    desc: "Jasny pokój 2-osobowy z własną łazienką, TV i lodówką. Widok na zielony ogród.",
    price: "80 zł / os.",
    guests: "2 osoby",
    image: "/images/room-4.jpg",
  },
  {
    id: 5,
    name: "Pokój Rodzinny",
    desc: "Duży pokój 4-osobowy z łazienką, idealny na rodzinne wakacje. TV, czajnik, lodówka w pokoju.",
    price: "80 zł / os.",
    guests: "4 osoby",
    image: "/images/room-5.jpg",
  },
];

const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "Wydmy nadmorskie", span: "col-span-2 row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Zachód słońca nad morzem", span: "row-span-2" },
  { src: "/images/gallery-3.jpg", alt: "Ścieżka na plażę", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Taras z widokiem", span: "row-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Muszle na plaży", span: "" },
  { src: "/images/gallery-6.jpg", alt: "Latarnia morska", span: "col-span-2" },
];

const AMENITIES = [
  { icon: "/images/icons/sun-umbrella.svg", label: "150m do morza" },
  { icon: "/images/icons/Road-Sign-Parking--Streamline-Freehand.svg", label: "Darmowy parking" },
  { icon: "/images/icons/Kitchen-Storage--Streamline-Freehand.svg", label: "Kuchnia dla gości" },
  { icon: "/images/icons/Vintage-Tv-2--Streamline-Freehand.svg", label: "TV w pokoju" },
  { icon: "/images/icons/Barbecue-Grill--Streamline-Freehand.svg", label: "Wiata na grilla" },
  { icon: "/images/icons/Wifi-Sync--Streamline-Freehand.svg", label: "Darmowe WiFi" },
];



const CARD_COLORS = [
  { bg: "#f0f7ff", border: "#c8dff0", text: "#4a6a7a" },
  { bg: "#e8f4fd", border: "#b8d4e8", text: "#3a5a6a" },
  { bg: "#2a5a7b", border: "#1a4a6b", text: "#e8f4fd" },
  { bg: "#f7fafe", border: "#d0e8f5", text: "#4a6a7a" },
  { bg: "#ddeef8", border: "#b8d4e8", text: "#2a4a5a" },
  { bg: "#5b9bc4", border: "#4a8ab5", text: "#f0f7ff" },
  { bg: "#f0f7ff", border: "#c8dff0", text: "#4a6a7a" },
  { bg: "#e8f4fd", border: "#b8d4e8", text: "#3a5a6a" },
  { bg: "#2a5a7b", border: "#1a4a6b", text: "#e8f4fd" },
];



const EXPERIENCES = [
  { icon: "/images/icons/Dog-Walk--Streamline-Freehand.svg", title: "Spacery po plaży", desc: "Kilometry piaszczystej plaży tuż za progiem" },
  { icon: "/images/icons/Bicycle-Sports--Streamline-Freehand.svg", title: "Ścieżki rowerowe", desc: "Nadmorskie trasy wzdłuż wybrzeża i przez lasy" },
  { icon: "/images/icons/Fishing-Catch--Streamline-Freehand.svg", title: "Port rybacki", desc: "Świeże ryby prosto z kutra w pobliskim porcie" },
  { icon: "/images/icons/Sport-Kayaking-2--Streamline-Freehand.svg", title: "Sporty wodne", desc: "Windsurfing, kajaki i rejsy po Bałtyku" },
  { icon: "/images/icons/View-Binocular-1--Streamline-Freehand.svg", title: "Molo i klif", desc: "Malownicze punkty widokowe na wybrzeżu" },
  { icon: "/images/icons/Farming-Pine-Forrest--Streamline-Freehand.svg", title: "Lasy nadmorskie", desc: "Sosnowe lasy z trasami spacerowymi i grzybami" },
];


const TESTIMONIALS_PL = [
  {
    id: 1,
    name: "Natalia",
    location: "Rodzina z Poznania",
    text: "Pokoje czyste i zadbane, a do plaży naprawdę 3 minuty spaceru. Dzieci były zachwycone! Kuchnia dla gości to ogromny plus — robiliśmy śniadania i oszczędzaliśmy sporo. Na pewno wrócimy w przyszłym roku.",
    rating: 5,
    avatarColor: "#3d7a94",
  },
  {
    id: 2,
    name: "Daniela",
    location: "Para z Warszawy",
    text: "Szukaliśmy spokojnego miejsca na weekend nad morzem i trafiliśmy idealnie. Cisza, bliskość plaży i bardzo miła obsługa. Pokój czysty, z własną łazienką — jak za te pieniądze to rewelacja!",
    rating: 5,
    avatarColor: "#5b9bc4",
  },
  {
    id: 3,
    name: "Krzysztof",
    location: "Rodzina z Wrocławia",
    text: "Trzeci rok z rzędu i za każdym razem jest super. Dzieci pytają o Sarbinowo już od marca. Parking pod domem, grill do dyspozycji, plaża blisko — czego chcieć więcej?",
    rating: 5,
    avatarColor: "#8a968f",
  },
  {
    id: 4,
    name: "Ewa",
    location: "Grupa znajomych z Łodzi",
    text: "Byliśmy w czwórkę na długi weekend. Pokoje przestronne i czyste, a wiata grillowa to strzał w dziesiątkę. Do Mielna blisko, ale u Was dużo spokojniej. Polecamy!",
    rating: 5,
    avatarColor: "#3d7a94",
  },
  {
    id: 5,
    name: "Monika",
    location: "Para z Katowic",
    text: "Rezerwowaliśmy przez telefon — Pani bardzo miła i pomocna. Na miejscu wszystko zgodne z opisem. Czysto, przytulnie, lodówka i czajnik w pokoju. Idealne na spokojne wakacje we dwoje.",
    rating: 5,
    avatarColor: "#d4d6ce",
  },
  {
    id: 6,
    name: "Maria",
    location: "Rodzina z Gdańska",
    text: "Jechaliśmy z dwójką małych dzieci i obawialiśmy się trochę. Niepotrzebnie! Plaża bezpieczna, łagodne wejście do wody, a pokój miał wszystko czego potrzebowaliśmy. Cena? 80 zł za osobę — nie do pobicia.",
    rating: 5,
    avatarColor: "#8a968f",
  },
  {
    id: 7,
    name: "Tomasz",
    location: "Rodzina z Krakowa",
    text: "Sarbinowo to nasza nowa ulubiona miejscowość nad morzem. Spokojniej niż w Mielnie, taniej niż w Kołobrzegu, a plaża równie piękna. Pokoje u Babci Jadzi — gorąco polecam!",
    rating: 5,
    avatarColor: "#3d7a94",
  },
  {
    id: 8,
    name: "Agnieszka",
    location: "Rodzina z Opola",
    text: "Cisza, spokój i morze pod nosem — dokładnie tego szukaliśmy. Pokój czysty, łazienka własna, a wieczorem grill w ogrodzie. Dzieci nie chciały wyjeżdżać!",
    rating: 5,
    avatarColor: "#5b9bc4",
  },
  {
    id: 9,
    name: "Piotr",
    location: "Para z Lublina",
    text: "Znaleźliśmy to miejsce przypadkiem i to był strzał w dziesiątkę. Blisko plaży, czysto, tanio i z parkingiem. Wieczorne spacery na molo w Unieściu — bezcenne. Wracamy we wrześniu!",
    rating: 5,
    avatarColor: "#8a968f",
  },
];


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


function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const lineLeftRef = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .fromTo([lineLeftRef.current, lineRightRef.current], { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, "-=0.4")
        .fromTo(headingRef.current, { opacity: 0, y: 60, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }, "-=0.4")
        .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .fromTo(arrowRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");

      gsap.to(arrowRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden flex items-center justify-center" data-testid="hero-section">
      {/* VIDEO Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-baltic-day.mp4" type="video/mp4" />
          <img
            src="/images/hero-baltic-poster.png"
            alt="Zachód słońca nad Morzem Bałtyckim w Sarbinowie"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Delikatny gradient dla lepszej czytelności tekstu */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span
          ref={badgeRef}
          className="inline-flex items-center gap-3 text-xs md:text-sm tracking-[0.4em] uppercase font-light text-white/90 mb-8 opacity-0 drop-shadow-lg"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          data-testid="text-hero-badge"
        >
          <img
            src="/images/icons/Sailing-Archor--Streamline-Freehand.svg"
            alt="Kotwica"
            className="w-5 h-5 invert brightness-200"
            style={{ filter: "brightness(0) saturate(100%) invert(73%) sepia(30%) saturate(500%) hue-rotate(175deg) brightness(105%) contrast(90%)" }}
          />
          Sarbinowo &bull; Polskie Wybrzeże
          <img
            src="/images/icons/Sailing-Archor--Streamline-Freehand.svg"
            alt="Kotwica"
            className="w-5 h-5"
            style={{ filter: "brightness(0) saturate(100%) invert(73%) sepia(30%) saturate(500%) hue-rotate(175deg) brightness(105%) contrast(90%)" }}
          />
        </span>

        <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
          <div ref={lineLeftRef} className="w-16 md:w-28 h-px bg-gradient-to-r from-transparent to-white/40 origin-right" />
          <img
            src="/images/icons/Snail-Shell--Streamline-Freehand.svg"
            alt="Muszelka"
            className="w-5 h-5"
            style={{ filter: "brightness(0) saturate(100%) invert(73%) sepia(30%) saturate(500%) hue-rotate(175deg) brightness(105%) contrast(90%)" }}
          />
          <div ref={lineRightRef} className="w-16 md:w-28 h-px bg-gradient-to-l from-transparent to-white/40 origin-left" />
        </div>

        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light mb-8 tracking-[0.02em] leading-[0.9] text-white drop-shadow-2xl opacity-0"
          style={{ fontFamily: "'Playfair Display', serif" }}
          data-testid="text-hero-title"
        >
          Pokoje w
          <br />
          <em className="italic text-[#7dbde8]/90">Sarbinowie</em>
        </h1>

        <p
          ref={subtitleRef}
          className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto text-white/85 mb-14 opacity-0 drop-shadow-lg"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          data-testid="text-hero-subtitle"
        >
          Komfortowe noclegi kilka kroków od bałtyckiej plaży.
          <br className="hidden md:block" />
          Cisza, morska bryza i domowa atmosfera — od
          <span className="text-[#7dbde8] font-medium"> 80 zł </span>
          za osobę.
        </p>

        <div ref={arrowRef} className="opacity-0 flex justify-center">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-300"
            data-testid="button-scroll-down"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase drop-shadow-md" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Odkryj więcej
            </span>
            <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300 drop-shadow-md" />
          </button>
        </div>
      </div>
    </section>
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

      const columns = columnsRef.current?.querySelectorAll(".intro-column");
      if (columns) {
        gsap.fromTo(
          columns,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: columnsRef.current,
              start: "top 80%",
            },
          }
        );
      }

      const separators = columnsRef.current?.querySelectorAll(".intro-separator");
      if (separators) {
        gsap.fromTo(
          separators,
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1,
            delay: 0.3,
            stagger: 0.15,
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
      title: "150m do plaży",
      desc: "Kilka minut spaceru i jesteś na piaszczystej bałtyckiej plaży. Bliżej morza w tej cenie nie znajdziesz.",
      icon: "/images/icons/plaza.png",
    },
    {
      title: "Domowy klimat",
      desc: "Kameralne pokoje z pełnym wyposażeniem — łazienka, TV, czajnik i lodówka. Jak u siebie, tylko z szumem morza.",
      icon: "/images/icons/domowy.png",
    },
    {
      title: "Od 80 zł / os.",
      desc: "Tanie noclegi w Sarbinowie bez kompromisów. Parking, kuchnia dla gości i wiata grillowa w cenie pobytu.",
      icon: "/images/icons/budzet.png",
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* ===== NAGŁÓWEK ===== */}
        <div ref={headingRef} className="text-center mb-20 md:mb-28 opacity-0">
          <span
            className="text-xs tracking-[0.3em] uppercase text-[#5a6a7a] font-medium block mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Pokoje w Sarbinowie
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-light text-[#2a3a4a] leading-snug max-w-3xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Komfortowe noclegi nad morzem
            <br className="hidden md:block" />
            w przystępnej cenie —{" "}
            <em className="italic text-[#5b9bc4]">wypoczynek,</em>
            <br className="hidden md:block" />
            na który zasługujesz
          </h2>
        </div>

        {/* ===== 3 KOLUMNY ===== */}
        <div
          ref={columnsRef}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-10 md:gap-0 items-start"
        >
          {features.map((feature, index) => (
            <div key={`wrapper-${index}`} className="contents">
              {/* Kolumna */}
              <div className="intro-column flex flex-col items-center text-center px-4 md:px-10 opacity-0">
                {/* ===== IKONA — okrągłe tło z hover efektem ===== */}
                <div className="relative mb-6 group cursor-pointer">
                  {/* Ghost icon - pozostaje na miejscu */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#f0f6fa] flex items-center justify-center opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={48}
                      height={48}
                    />
                  </div>

                  {/* Główna ikona - przesuwa się w górę */}
                  <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#f0f6fa] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={48}
                      height={48}
                    />
                  </div>
                </div>

                <h3
                  className="text-lg md:text-xl font-medium text-[#2a3a4a] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {feature.title}
                </h3>

                <p
                  className="text-sm md:text-[15px] text-[#5a6a7a] leading-relaxed max-w-[280px]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {feature.desc}
                </p>
              </div>

              {/* ===== SEPARATOR PIONOWY (desktop) ===== */}
              {index < features.length - 1 && (
                <div className="intro-separator hidden md:flex items-center justify-center self-stretch origin-top px-8">
                  <div
                    className="w-[1px] h-full bg-[#d1e3ef]"
                    style={{
                      minHeight: "280px",
                    }}
                  />
                </div>
              )}

              {/* ===== SEPARATOR POZIOMY (mobile) ===== */}
              {index < features.length - 1 && (
                <div className="md:hidden flex justify-center">
                  <div className="h-[1px] w-24 bg-[#d1e3ef]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




function AzakAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      {/* ===== HELM - prawy górny róg ===== */}
      <div className="absolute -top-4 -right-4 md:top-4 md:right-4 w-[180px] h-[180px] md:w-[300px] md:h-[300px] pointer-events-none">
        <Image
          src="/images/icons/helm.svg"
          alt=""
          fill
          className="object-contain opacity-[0.06] md:opacity-[0.08] rotate-12 text-[#5b9bc4]"
          aria-hidden="true"
        />
      </div>

      {/* ===== DEKORACYJNE ELEMENTY - lewy dolny róg ===== */}
      <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[350px] md:h-[350px] overflow-hidden opacity-40 pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 350 350"
          fill="none"
        >
          <path
            d="M0,200 Q50,180 100,200 T200,200 T300,200"
            className="stroke-[#d4b896] md:stroke-[#5b9bc4]"
            strokeWidth="2"
            fill="none"
            opacity="0.2"
          />
          <path
            d="M0,230 Q50,210 100,230 T200,230 T300,230"
            className="stroke-[#d4b896] md:stroke-[#5b9bc4]"
            strokeWidth="1.5"
            fill="none"
            opacity="0.15"
          />
          <path
            d="M0,260 Q50,240 100,260 T200,260 T300,260"
            className="stroke-[#d4b896] md:stroke-[#5b9bc4]"
            strokeWidth="1"
            fill="none"
            opacity="0.1"
          />
        </svg>
        <div className="absolute bottom-20 left-10 w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#d4b896] md:bg-[#5b9bc4] opacity-30" />
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#d4b896] md:bg-[#5b9bc4] opacity-20" />
        <div className="absolute bottom-16 left-32 w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#d4b896] md:bg-[#5b9bc4] opacity-25" />
      </div>

      {/* ===== GŁÓWNA TREŚĆ ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Tekst po lewej */}
          <div ref={textRef} className="opacity-0">
            {/* Ikonka w kółku */}
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#f0f6fa] flex items-center justify-center">
                <img
                  src="/images/icons/Sailing-Archor--Streamline-Freehand.svg"
                  alt="Kotwica"
                  className="w-8 h-8"
                />
              </div>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2a3a4a] mb-6 leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Wyjątkowe miejsce
              <br />
              w samym sercu
              <br />
              <em className="italic text-[#5b9bc4]">Sarbinowa</em>
            </h2>

            <p
              className="text-[#5a6a7a] text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Pensjonat Azak to komfortowe pokoje i apartamenty zaledwie kilka
              kroków od plaży. Wiele z nich z balkonami i widokiem na morze.
              Łączymy domową atmosferę z nowoczesnym komfortem, by każdy Gość
              czuł się swobodnie i naprawdę wypoczął.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
  {AMENITIES.map((a, i) => (
    <div
      key={i}
      className="flex items-center gap-4 py-4 px-5 rounded-xl bg-[#f0f6fa]"
    >
      <img
        src={a.icon}
        alt={a.label}
        className="w-7 h-7 flex-shrink-0 icon-blue"
      />
      <span
        className="text-sm md:text-base text-[#3a5a6a] font-medium"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {a.label}
      </span>
    </div>
  ))}
</div>

          </div>

          {/* Obrazek po prawej */}
          <div ref={imageRef} className="opacity-0">
            <div className="relative">
              <img
                src="/images/sarbinowo-kosciol.jpeg"
                alt="Kościół w Sarbinowie"
                className="w-full h-[400px] md:h-[550px] object-cover rounded-3xl"
              />

              {/* Ikonka w dolnym lewym rogu obrazka */}
              <div className="absolute bottom-8 left-8 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <img
                  src="/images/icons/Loading-Spinning-Star--Streamline-Freehand.svg"
                  alt="Gwiazdka"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function RoomsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="rooms" className="py-20 md:py-32 bg-[#f7fafe] w-full" data-testid="rooms-section">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-12 opacity-0">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/images/icons/Snail-Shell--Streamline-Freehand.svg"
              alt="Muszelka"
              className="w-5 h-5"
            />
            <span className="text-xs tracking-[0.3em] uppercase text-[#5b9bc4] font-medium" data-testid="text-rooms-label">
              Nasze pokoje
            </span>
            <img
              src="/images/icons/Snail-Shell--Streamline-Freehand.svg"
              alt="Muszelka"
              className="w-5 h-5"
            />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2a3a4a] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
            data-testid="text-rooms-heading"
          >
            Wybierz swój <em className="italic text-[#5b9bc4]">pokój</em>
          </h2>
          <p className="text-[#5a6a7a] text-base md:text-lg max-w-xl mx-auto" style={{ fontFamily: "DM Sans, sans-serif" }}>
            5 przytulnych pokoi z łazienką, TV, czajnikiem i lodówką. Kuchnia ogólnodostępna.
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden" ref={emblaRef} data-testid="rooms-carousel">
        <div className="flex">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-3"
              data-testid={`card-room-${room.id}`}
            >
              <div className="group relative overflow-hidden rounded-md">
                <div className="h-[340px] md:h-[420px]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className="text-2xl md:text-3xl font-light mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {room.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 text-white/85" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    {room.desc}
                  </p>
                  <div className="flex items-center gap-4 mb-3 text-white/70">
                    <span className="flex items-center gap-1.5 text-xs"><Bath className="w-3.5 h-3.5" />Łazienka</span>
                    <span className="flex items-center gap-1.5 text-xs"><Tv className="w-3.5 h-3.5" />TV</span>
                    <span className="flex items-center gap-1.5 text-xs"><Coffee className="w-3.5 h-3.5" />Czajnik</span>
                    <span className="flex items-center gap-1.5 text-xs"><Refrigerator className="w-3.5 h-3.5" />Lodówka</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 flex-wrap pt-3 border-t border-white/20">
                    <span className="text-xs tracking-[0.1em] uppercase text-white/70 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />{room.guests}
                    </span>
                    <span className="text-lg font-medium" style={{ fontFamily: "Playfair Display, serif" }}>{room.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-[#5b9bc4]/30 flex items-center justify-center text-[#5b9bc4] transition-colors duration-300 hover:bg-[#5b9bc4] hover:text-white"
            aria-label="Poprzedni pokój"
            data-testid="button-rooms-prev"
          >
            <ChevronDown className="w-5 h-5 rotate-90" />
          </button>
          <div className="flex gap-2">
            {ROOMS.map((_, i) => (
              <button
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === selectedIndex ? "bg-[#5b9bc4] scale-125" : "bg-[#5b9bc4]/25"}`}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Pokój ${i + 1}`}
                data-testid={`dot-room-${i}`}
              />
            ))}
          </div>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-[#5b9bc4]/30 flex items-center justify-center text-[#5b9bc4] transition-colors duration-300 hover:bg-[#5b9bc4] hover:text-white"
            aria-label="Następny pokój"
            data-testid="button-rooms-next"
          >
            <ChevronDown className="w-5 h-5 -rotate-90" />
          </button>
        </div>

        <div className="text-center mt-10">
          <a
            href="tel:+48123456789"
            className="inline-block px-8 py-3.5 bg-[#5b9bc4] text-white text-sm tracking-[0.1em] uppercase font-medium rounded-md transition-all duration-300 hover:bg-[#4a8ab5]"
            style={{ fontFamily: "DM Sans, sans-serif" }}
            data-testid="button-rooms-cta"
          >
            Zarezerwuj telefonicznie
          </a>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.6, delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-20 md:py-32 w-full overflow-hidden bg-[#3d7a94]"
      data-testid="experience-section"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16 opacity-0">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-12 h-px bg-[#d4d6ce]/40" />
            <img
              src="/images/icons/Nautic-Sports-Sailing--Streamline-Freehand.svg"
              alt="Żaglówka"
              className="w-5 h-5 invert opacity-70"
            />
            <span
              className="text-xs tracking-[0.3em] uppercase text-[#d4d6ce] font-medium"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Odkryj Sarbinowo
            </span>
            <img
              src="/images/icons/Nautic-Sports-Sailing--Streamline-Freehand.svg"
              alt="Żaglówka"
              className="w-5 h-5 invert opacity-70"
            />
            <div className="w-12 h-px bg-[#d4d6ce]/40" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Nadmorskie <em className="italic text-[#e8e9e4]">atrakcje</em>
          </h2>
          <p
            className="text-[#d4d6ce]/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Sarbinowo to nie tylko plaza. Odkryj mnostwo atrakcji,
            ktore czekaja na Ciebie tuz za drzwiami.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group relative p-6 md:p-8 rounded-2xl opacity-0 transition-all duration-500 hover:scale-[1.02] cursor-default bg-white/[0.08] border border-white/[0.1] hover:bg-white/[0.14] hover:border-white/[0.2]"
            >
              <div className="w-14 h-14 rounded-xl bg-[#d4d6ce]/15 flex items-center justify-center mb-5 group-hover:bg-[#d4d6ce]/25 transition-all duration-300">
                <img
                  src={exp.icon}
                  alt={exp.title}
                  className="w-8 h-8 invert opacity-90 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3
                className="text-lg md:text-xl font-light text-white mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {exp.title}
              </h3>

              <div className="w-8 h-px bg-[#d4d6ce]/30 mb-3 group-hover:w-12 group-hover:bg-[#d4d6ce]/50 transition-all duration-500" />

              <p
                className="text-sm text-[#d4d6ce]/60 leading-relaxed group-hover:text-[#d4d6ce]/80 transition-colors duration-300"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function StatsParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const floatingImageRef = useRef<HTMLDivElement>(null);
  const textCardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  const stats = [
    { value: 150, suffix: "m", label: "do morza" },
    { value: 5, suffix: "", label: "pokoi gościnnych" },
    { value: 80, suffix: " zł", label: "za osobę / noc" },
    { value: 500, suffix: "+", label: "zadowolonych gości" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          }
        );
      }

      if (floatingImageRef.current) {
        gsap.fromTo(
          floatingImageRef.current,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
            },
          }
        );

        gsap.to(floatingImageRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (textCardRef.current) {
        gsap.fromTo(
          textCardRef.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
            },
          }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textCardRef.current,
              start: "top 80%",
            },
          }
        );
      }

      statsRef.current.forEach((stat, i) => {
        if (!stat) return;
        gsap.fromTo(
          stat,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.6 + i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textCardRef.current,
              start: "top 75%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#fafaf8] overflow-hidden"
      data-testid="stats-parallax-section"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#3d7a94]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#8a968f]/5 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Heading */}
        <div ref={headingRef} className="mb-16 md:mb-24 opacity-0">
          <div className="flex items-center gap-3 mb-4">
            <Waves className="w-5 h-5 text-[#5b9bc4]" />
            <span
              className="text-xs tracking-[0.3em] uppercase text-[#5b9bc4] font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              O Sarbinowie
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2a3a4a] leading-[1.1] max-w-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="italic text-[#5b9bc4]">"Sarbinowo"</span> harmonia między
            <br className="hidden md:block" />
            historią i współczesnym komfortem
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left side - VIDEO + Floating Image */}
          <div className="lg:col-span-5 relative">
            {/* Main VIDEO container */}
            <div
              ref={videoRef}
              className="relative rounded-md overflow-hidden shadow-2xl opacity-0"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-[500px] md:h-[600px] object-cover"
              >
                <source src="/videos/rodzina.mp4" type="video/mp4" />
                <img
                  src="/images/beach-sunset.jpg"
                  alt="Rodzinne wakacje w Sarbinowie"
                  className="w-full h-full object-cover"
                />
              </video>

              {/* Subtle overlay for better aesthetics */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0f]/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating smaller image with parallax */}
<div
  ref={floatingImageRef}
  className="absolute -bottom-12 -right-12 md:-right-16 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-8 border-white opacity-0 z-10"
>
  <img
    src="/images/top10.jpeg"
    alt="Atrakcje Sarbinowa"
    className="w-full h-full object-cover"
  />
</div>

          </div>

          {/* Right side - Text & CTA */}
          <div className="lg:col-span-7 lg:pl-8">
            <div
              ref={textCardRef}
              className="bg-white rounded-md p-8 md:p-12 shadow-lg opacity-0"
            >
              <p
                className="text-[#5a6a7a] text-base md:text-lg leading-relaxed mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Gościniec "Sarbinowo" jest zlokalizowany w miejscu, gdzie niegdyś stał najstarszy
                budynek kolonijny na polskim wybrzeżu Bałtyku. Nowoczesne podejście do tradycji
                sprawia, że nasze miejsce zachwyca gości swoją autentycznością.
              </p>
              <p
                className="text-[#5a6a7a] text-base md:text-lg leading-relaxed mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Zaledwie 150 metrów od morza, otoczeni zielenią i spokojem, oferujemy Państwu
                5 komfortowych pokoi oraz pełne wyposażenie do doskonałego wypoczynku. Odkryj
                to, co najlepsze w polskim nadmorskim klimacie.
              </p>

              {/* CTA Button */}
              <div ref={ctaRef} className="opacity-0">
                <button
                  onClick={() =>
                    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-4 bg-white border-2 border-[#5b9bc4] rounded-full text-sm tracking-[0.15em] uppercase text-[#2a5a7b] hover:bg-[#5b9bc4] hover:text-white transition-all duration-500 shadow-md hover:shadow-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Zobacz nasze pokoje
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-[#d4d6ce]/30">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      statsRef.current[i] = el;
                    }}
                    className="text-center opacity-0"
                  >
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span
                        className="text-3xl md:text-4xl font-light text-[#5b9bc4]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {stat.value}
                      </span>
                      <span
                        className="text-lg font-light text-[#5b9bc4]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {stat.suffix}
                      </span>
                    </div>
                    <span
                      className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-[#8a968f] font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const galleryImages = [
  {
    id: 1,
    src: '/images/widok.jpeg',
    title: 'Widok na morze z Sarbinowa',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: '/images/lezaki.jpeg',
    title: 'Leżaki nad morzem',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    src: '/images/lodeczka.jpeg',
    title: 'Łódeczka na plaży',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    src: '/images/ksiazka.jpeg',
    title: 'Relaks z książką nad morzem',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 5,
    src: '/images/ozdoby.jpg',
    title: 'Klimat nadmorski',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 6,
    src: '/images/pamiatki.jpg',
    title: 'Pamiątki z Sarbinowa',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 7,
    src: '/images/ROOM-1.jpg',
    title: 'Sarbinowo',
    span: 'md:col-span-2 md:row-span-1',
  },
];



  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="py-20 md:py-32 w-full overflow-hidden bg-gradient-to-b from-white to-[#f7fafe]"
        data-testid="gallery-section"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span
  className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.3em] uppercase font-light text-[#5b9bc4] mb-4"
  style={{ fontFamily: "'DM Sans', sans-serif" }}
>
  <img
    src="/images/icons/Shell-2--Streamline-Freehand.svg"
    alt="Muszelka"
    className="w-5 h-5"
  />
  Nasza Galeria
  <img
    src="/images/icons/Shell-2--Streamline-Freehand.svg"
    alt="Muszelka"
    className="w-5 h-5"
  />
</span>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-wide text-[#2a5a7b]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Odkryj Piękno Sarbinowa
            </h2>
            <p
              className="text-base md:text-lg font-light text-[#4a6a7a] max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Zapraszamy do obejrzenia galerii zdjęć naszych pokoi, okolicy i pięknych zachodów słońca nad Bałtykiem
            </p>
          </motion.div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${image.span}`}
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.02 }}
                data-testid={`gallery-image-${image.id}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <h3
                      className="text-white text-xl mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {image.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 40 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-0.5 bg-white"
                      />
                      <span
                        className="text-white/80 text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Zobacz więcej
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4"
          style={{ zIndex: 100 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Zamknij galerię"
          >
            <X size={24} className="text-white" />
          </button>

          <div
            className="absolute top-8 left-8 text-white/80 text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {selectedImage + 1} / {galleryImages.length}
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3
                className="text-white text-2xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {galleryImages[selectedImage].title}
              </h3>
            </div>
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) =>
                prev === 0 ? galleryImages.length - 1 : prev! - 1
              );
            }}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
            aria-label="Poprzednie zdjęcie"
          >
            <span className="text-white text-2xl">‹</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) =>
                prev === galleryImages.length - 1 ? 0 : prev! + 1
              );
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
            aria-label="Następne zdjęcie"
          >
            <span className="text-white text-2xl">›</span>
          </button>
        </motion.div>
      )}
    </>
  );
}



// ✅ TUTAJ DOPIERO ZACZYNA SIĘ TestimonialsSection

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const trustRef = useRef<HTMLDivElement>(null);

  const col1 = TESTIMONIALS_PL.slice(0, 3);
  const col2 = TESTIMONIALS_PL.slice(3, 6);
  const col3 = TESTIMONIALS_PL.slice(6, 9);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(headingRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
          }
        );
      }
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, delay: (i % 3) * 0.1, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
          }
        );
      });
      if (trustRef.current) {
        gsap.fromTo(trustRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.5, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  let cardIndex = 0;

  type TestimonialType = {
    id: number;
    name: string;
    location: string;
    text: string;
    rating: number;
    avatarColor: string;
  };

  const renderCard = (t: TestimonialType) => {
    const idx = cardIndex++;
    const colors = CARD_COLORS[idx % CARD_COLORS.length];
    const isDark = colors.bg === "#8a968f";

    return (
      <div
        key={t.id}
        ref={(el) => { cardsRef.current[idx] = el; }}
        className="opacity-0 mb-5 break-inside-avoid"
      >
        <div
          className="group h-full p-7 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
          style={{
            backgroundColor: colors.bg,
            border: `1px solid ${colors.border}`,
          }}
        >
          <div className="flex gap-1 mb-5">
            {Array.from({ length: t.rating }).map((_, s) => (
              <Star key={s} className="w-3.5 h-3.5 fill-[#eebc51] text-[#eebc51] stroke-none" />
            ))}
          </div>

          <p
            className="text-[15px] leading-[1.8] mb-6 font-light"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: colors.text,
            }}
          >
            {t.text}
          </p>

          <div
            className="flex items-center gap-3 pt-4"
            style={{ borderTop: `1px solid ${colors.border}` }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: isDark ? "rgba(255,255,255,0.2)" : `${t.avatarColor}25`,
                border: `1px solid ${colors.border}`,
              }}
            >
              <span
                className="text-xs font-bold"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: isDark ? "#e8e9e4" : t.avatarColor,
                }}
              >
                {t.name.charAt(0)}
              </span>
            </div>
            <div>
              <span
                className="text-sm font-semibold block leading-tight mb-0.5"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: isDark ? "#e8e9e4" : "#1a1a1a",
                }}
              >
                {t.name}
              </span>
              <span
                className="text-xs font-medium tracking-wide"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: colors.text,
                }}
              >
                {t.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
      data-testid="testimonials-section"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4d6ce] to-transparent opacity-50" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 opacity-0">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#3d7a94]" />
              <span
                className="text-xs tracking-[0.2em] uppercase text-[#3d7a94] font-bold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Opinie Gości
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-[#1a1a1a] leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Co mówią nasi{" "}
              <em className="italic text-[#3d7a94]">goście</em>
            </h2>
          </div>
          <p
            className="text-[#6e7a73] text-lg max-w-md leading-relaxed md:text-right font-light"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Goście, którzy już zaufali naszemu wyjątkowemu miejscu nad Bałtykiem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col">
            {col1.map((t) => renderCard(t))}
          </div>
          <div className="flex flex-col md:pt-10">
            {col2.map((t) => renderCard(t))}
          </div>
          <div className="flex flex-col md:pt-20">
            {col3.map((t) => renderCard(t))}
          </div>
        </div>

        <div ref={trustRef} className="mt-16 opacity-0 border-t border-[#d4d6ce]/40 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-sm"
                    style={{
                      backgroundColor: ["#3d7a94", "#5b9bc4", "#8a968f", "#d4d6ce"].at(i),
                      color: i < 2 ? "white" : "#0f0e0f",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {["AM", "RK", "KW", "TE"].at(i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#eebc51] text-[#eebc51] stroke-none" />
                  ))}
                  <span
                    className="text-sm text-[#1a1a1a] ml-2 font-bold"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    5.0
                  </span>
                </div>
                <span
                  className="text-xs text-[#8a968f] font-medium tracking-wide uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  500+ zadowolonych gości
                </span>
              </div>
            </div>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-3 text-[#1a1a1a] text-sm font-bold tracking-widest uppercase hover:text-[#3d7a94] transition-colors duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span>Zarezerwuj teraz</span>
              <div className="w-10 h-10 rounded-full border border-[#d4d6ce] flex items-center justify-center group-hover:bg-[#3d7a94] group-hover:border-[#3d7a94] group-hover:text-white transition-all duration-300">
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}


function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

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

      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const articles = [
    {
      id: 1,
      image: "/images/lody.jpeg",
      category: "Atrakcje",
      title: "Co zobaczyć w Sarbinowie? Przewodnik po okolicy",
      date: "15 stycznia 2026",
      excerpt: "Odkryj najpiękniejsze miejsca polskiego wybrzeża – od klifów po stare porty rybackie.",
    },
    {
      id: 2,
      image: "/images/azak-morze.jpeg",
      category: "Poradnik",
      title: "Jak przygotować się na wakacje nad Bałtykiem?",
      date: "10 stycznia 2026",
      excerpt: "Praktyczne wskazówki dotyczące pakowania, pogody i najlepszych terminów pobytu.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=80",
      category: "Lokalna Kuchnia",
      title: "Smaki wybrzeża – gdzie zjeść w Sarbinowie",
      date: "5 stycznia 2026",
      excerpt: "Najlepsze restauracje z świeżymi rybami i tradycyjnymi daniami kuchni pomorskiej.",
    },
  ];

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-white to-[#f7fafe]"
      data-testid="blog-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16 md:mb-20">
          <span
            className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.3em] uppercase font-light text-[#5b9bc4] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <img
              src="/images/icons/Cash-Payment-Sign-1--Streamline-Freehand.svg"
              alt="Aktualności"
              className="w-5 h-5 icon-blue"
            />
            Aktualności
            <img
              src="/images/icons/Cash-Payment-Sign-1--Streamline-Freehand.svg"
              alt="Aktualności"
              className="w-5 h-5 icon-blue"
            />
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-wide text-[#2a5a7b]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Blog & Porady
          </h2>
          <p
            className="text-base md:text-lg font-light text-[#4a6a7a] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Poznaj najlepsze miejsca nad Bałtykiem i dowiedz się, jak w pełni wykorzystać pobyt w Sarbinowie
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {articles.map((article, index) => (
            <article
              key={article.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group cursor-pointer"
              data-testid={`blog-article-${article.id}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-5 h-64 md:h-72 bg-[#e8eef2]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div>
                <span
                  className="inline-block text-xs tracking-[0.2em] uppercase font-light text-[#5b9bc4] mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {article.category}
                </span>

                <h3
                  className="text-xl md:text-2xl font-light mb-3 leading-snug text-[#2a5a7b] group-hover:text-[#3d7a94] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {article.title}
                </h3>

                <p
                  className="text-sm md:text-base font-light text-[#4a6a7a] mb-4 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="text-xs text-[#8a968f]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {article.date}
                  </span>
                  <button
                    className="text-xs tracking-[0.15em] uppercase text-[#5b9bc4] hover:text-[#3d7a94] transition-colors duration-300 flex items-center gap-2 group"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Czytaj więcej
                    <ChevronDown className="w-3 h-3 -rotate-90 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
  <a
    href="/blog"
    className="inline-block px-8 py-4 bg-white border-2 border-[#5b9bc4] rounded-full text-sm tracking-[0.15em] uppercase text-[#2a5a7b] hover:bg-[#5b9bc4] hover:text-white transition-all duration-500 shadow-md hover:shadow-lg"
    style={{ fontFamily: "'DM Sans', sans-serif" }}
    data-testid="button-view-all-blogs"
  >
    Zobacz wszystkie artykuły
  </a>
</div>

      </div>
    </section>
  );
}




function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Dziękujemy za zapisanie się: ${email}`);
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Dramatic Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1751315874064-a9684320dd44?w=1920&q=80"
          alt="Ocean waves at sunset"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#143c64]/95 via-[#1a5080]/90 to-[#0d1b2a]/98" />
        
        {/* Static sailing boat decoration */}
        <div className="absolute bottom-12 right-12 opacity-10">
          <Sailboat size={120} className="text-white" strokeWidth={1} />
        </div>
      </div>

      {/* Animated Wave Divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-10" style={{ height: '120px' }}>
        <svg
          className="absolute top-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ d: 'M0,60 Q360,20 720,60 T1440,60 L1440,0 L0,0 Z' }}
            animate={{
              d: [
                'M0,60 Q360,20 720,60 T1440,60 L1440,0 L0,0 Z',
                'M0,60 Q360,90 720,60 T1440,60 L1440,0 L0,0 Z',
                'M0,60 Q360,20 720,60 T1440,60 L1440,0 L0,0 Z',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            fill="#F8F9FA"
          />
        </svg>
      </div>

      {/* Floating nautical elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${15 + i * 8}px`,
            height: `${15 + i * 8}px`,
            left: `${i * 12 + 5}%`,
            bottom: `${Math.random() * 200}px`,
          }}
          animate={{
            y: [-30, -150],
            opacity: [0, 0.4, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.7,
          }}
        >
          <div className="w-full h-full bg-white/20 rounded-full blur-sm" />
        </motion.div>
      ))}

      <div className="relative z-20 pt-32 pb-12 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Logo klientki - białe + duże */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block mb-4"
            >
              <img
                src="/images/logo klientki.png"
                alt="Logo"
                className="h-36 w-auto brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              />
            </motion.div>
            <h2
              className="text-4xl lg:text-5xl text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              Pokoje nad Morzem w Sarbinowie
            </h2>
            <div className="flex items-center justify-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-[2px] bg-gradient-to-r from-transparent to-white/60"
              />
              <p
                className="text-white/80 text-lg tracking-wider uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Sarbinowo • 150m od plaży
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-[2px] bg-gradient-to-l from-transparent to-white/60"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* About Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-xl text-white mb-6 font-normal tracking-wider uppercase border-b border-white/30 pb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                O Nas
              </h3>
              <p
                className="text-white/80 leading-relaxed mb-6 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Przytulne pokoje gościnne w sercu Sarbinowa, zaledwie 150 metrów od piaszczystej plaży. Domowa atmosfera, spokój i urok polskiego wybrzeża czekają na Państwa.
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-white/90 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span>5 komfortowych pokoi</span>
              </motion.div>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-xl text-white mb-6 font-normal tracking-wider uppercase border-b border-white/30 pb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Nawigacja
              </h3>
              <ul className="space-y-3">
                {['Strona główna', 'O nas', 'Pokoje', 'Galeria', 'Kontakt', 'Blog'].map(
                  (link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 10 }}
                        className="text-white/80 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <span className="text-[#7dbde8]">▸</span>
                        {link}
                      </motion.a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-xl text-white mb-6 font-normal tracking-wider uppercase border-b border-white/30 pb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Kontakt
              </h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <MapPin size={18} className="text-[#7dbde8] mt-1 flex-shrink-0" />
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    ul. Nadmorska 12<br />76-034 Sarbinowo<br />woj. zachodniopomorskie
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <Phone size={18} className="text-[#7dbde8] flex-shrink-0" />
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    +48 123 456 789
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <Mail size={18} className="text-[#7dbde8] flex-shrink-0" />
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    kontakt@babcijadzi.pl
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Newsletter Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-xl text-white mb-6 font-normal tracking-wider uppercase border-b border-white/30 pb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Newsletter
              </h3>
              <p
                className="text-white/80 text-sm mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Bądź na bieżąco z naszymi promocjami i nowinkami!
              </p>
              <form onSubmit={handleSubscribe} className="mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Twój email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-[#7dbde8] transition-all duration-300 mb-3 text-sm backdrop-blur-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-[#7dbde8] rounded-lg transition-all duration-300 text-sm backdrop-blur-sm text-[#0d1b2a] font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Zapisz się
                </motion.button>
              </form>

              {/* Social Media */}
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, label: 'Facebook' },
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Twitter, label: 'Twitter' },
                ].map(({ Icon, label }) => (
                  <motion.a
                    key={label}
                    href="#"
                    whileHover={{ y: -5, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 border border-white/20 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={18} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Decorative line with anchor */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d1b2a] px-4"
            >
              <Anchor size={24} className="text-white/60" strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p
              className="text-white/60 text-sm mb-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              © 2026 Pokoje nad Morzem w Sarbinowie • Wszystkie prawa zastrzeżone
            </p>
            <p
              className="text-white/40 text-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Designed with ❤️ for the Baltic Coast
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}




export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <AzakIntro />
        <AzakAbout />
        <RoomsSection />
        <ExperienceSection />
        <StatsParallaxSection />
        <TestimonialsSection />
        <GallerySection />
        <BlogSection />
      </main>
    </>
  );
}



