import ContactForm from "./ContactForm";

export default function KontaktClient() {
  return (
    <>
     {/* ===== HERO BANER ===== */}
<section className="relative h-[45vh] min-h-[360px] overflow-hidden flex items-center justify-center">
  <div
    className="absolute inset-0 bg-cover bg-no-repeat bg-[center_40%] md:bg-[center_25%]"
    style={{
      backgroundImage: `url('/images/baner-blog.jpg')`,
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a38]/60 via-[#1a3a4a]/40 to-[#0f2a38]/70" />

  <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-white/40" />
      <img
        src="/images/icons/Various-Building-Anchor--Streamline-Freehand.svg"
        alt="Kotwica"
        className="w-5 h-5"
        style={{ filter: "brightness(0) saturate(100%) invert(73%) sepia(30%) saturate(500%) hue-rotate(175deg) brightness(105%) contrast(90%)" }}
      />
      <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-white/40" />
    </div>

    <h1
      className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-[0.02em]"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <em className="italic text-[#7dbde8]/90">Kontakt</em>
    </h1>

    <p
      className="text-base md:text-lg font-light text-white/80 max-w-2xl mx-auto leading-relaxed"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      Zarezerwuj pokój lub zadaj pytanie — odpowiadamy szybko!
    </p>
  </div>

  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]" fill="#f7fafe">
      <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
    </svg>
  </div>
</section>


      {/* ===== GŁÓWNA SEKCJA ===== */}
      <section className="relative bg-[#f7fafe] py-16 md:py-24 overflow-hidden">

        {/* Dekoracja - helm prawy górny */}
        <div className="absolute top-8 right-4 md:top-12 md:right-12 w-[120px] h-[120px] md:w-[200px] md:h-[200px] z-0 pointer-events-none">
          <img
            src="/images/icons/helm.svg"
            alt=""
            className="w-full h-full object-contain opacity-[0.06] md:opacity-[0.08] rotate-12"
            aria-hidden="true"
          />
        </div>

        {/* Dekoracja - kotwica lewy dolny */}
        <div className="absolute bottom-8 left-4 md:bottom-12 md:left-12 w-[100px] h-[100px] md:w-[160px] md:h-[160px] z-0 pointer-events-none">
          <img
            src="/images/icons/Various-Building-Anchor--Streamline-Freehand.svg"
            alt=""
            className="w-full h-full object-contain opacity-[0.06] md:opacity-[0.08] -rotate-12"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-5">

              {/* ===== LEWA - BIAŁA ===== */}
              <div className="lg:col-span-2 bg-white p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="/images/icons/Sailing-Archor--Streamline-Freehand.svg"
                    alt="Kotwica"
                    className="w-6 h-6 icon-blue"
                  />
                  <span
                    className="text-xs tracking-[0.3em] uppercase text-[#5b9bc4] font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Dane kontaktowe
                  </span>
                </div>

                <h2
                  className="text-3xl md:text-4xl font-light text-[#2a3a4a] mb-4 leading-[1.1]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Napisz lub
                  <br />
                  <em className="italic text-[#5b9bc4]">zadzwoń</em>
                </h2>

                <p
                  className="text-[#5a6a7a] text-sm leading-relaxed mb-10"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Chętnie odpowiemy na pytania dotyczące rezerwacji i dostępności pokoi. Odpisujemy zwykle w ciągu kilku godzin.
                </p>

                <div className="space-y-6 mb-10">
                  <a href="tel:+48123456789" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#5b9bc4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5b9bc4]/20 transition-colors mt-0.5">
                      <img src="/images/icons/Discount-Point-Coin-1--Streamline-Freehand.svg" alt="Telefon" className="w-5 h-5 icon-blue" />
                    </div>
                    <div>
                      <span className="text-xs tracking-[0.1em] uppercase text-[#5b9bc4] font-medium block mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Telefon</span>
                      <span className="text-base text-[#2a3a4a] font-light group-hover:text-[#5b9bc4] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>+48 123 456 789</span>
                    </div>
                  </a>

                  <a href="mailto:kontakt@babcijadzi.pl" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#5b9bc4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5b9bc4]/20 transition-colors mt-0.5">
                      <img src="/images/icons/Loading-Spinning-Star--Streamline-Freehand.svg" alt="Email" className="w-5 h-5 icon-blue" />
                    </div>
                    <div>
                      <span className="text-xs tracking-[0.1em] uppercase text-[#5b9bc4] font-medium block mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Email</span>
                      <span className="text-base text-[#2a3a4a] font-light group-hover:text-[#5b9bc4] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>kontakt@babcijadzi.pl</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#5b9bc4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <img src="/images/icons/Various-Building-Anchor--Streamline-Freehand.svg" alt="Adres" className="w-5 h-5 icon-blue" />
                    </div>
                    <div>
                      <span className="text-xs tracking-[0.1em] uppercase text-[#5b9bc4] font-medium block mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Adres</span>
                      <span className="text-base text-[#2a3a4a] font-light leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        ul. Nadmorska 12<br />76-034 Sarbinowo
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#5b9bc4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <img src="/images/icons/sun-umbrella.svg" alt="Sezon" className="w-5 h-5 icon-blue" />
                    </div>
                    <div>
                      <span className="text-xs tracking-[0.1em] uppercase text-[#5b9bc4] font-medium block mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Sezon</span>
                      <span className="text-base text-[#2a3a4a] font-light" style={{ fontFamily: "'DM Sans', sans-serif" }}>Czerwiec — Wrzesień</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-8 border-t border-[#e8eef2]">
                  <div className="flex items-center gap-2 text-sm text-[#4a6a7a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <img src="/images/icons/Road-Sign-Parking--Streamline-Freehand.svg" alt="Parking" className="w-4 h-4 icon-blue" />
                    <span>Darmowy parking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#4a6a7a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <img src="/images/icons/Snail-Shell--Streamline-Freehand.svg" alt="Pokoje" className="w-4 h-4 icon-blue" />
                    <span>5 pokoi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#4a6a7a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <span className="text-[#5b9bc4] font-medium text-base" style={{ fontFamily: "'Playfair Display', serif" }}>80 zł</span>
                    <span>/ os. noc</span>
                  </div>
                </div>
              </div>

              {/* ===== PRAWA - MORSKA #3d7a94 ===== */}
              <div className="lg:col-span-3 bg-[#3d7a94] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="/images/icons/Snail-Shell--Streamline-Freehand.svg"
                      alt="Muszelka"
                      className="w-5 h-5 invert opacity-70"
                    />
                    <span
                      className="text-xs tracking-[0.3em] uppercase text-white/70 font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Formularz kontaktowy
                    </span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-light text-white mb-8"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Wyślij <em className="italic text-white/80">wiadomość</em>
                  </h3>

                  <ContactForm />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== MAPA ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#5b9bc4]/30" />
              <img
                src="/images/icons/Various-Building-Anchor--Streamline-Freehand.svg"
                alt="Kotwica"
                className="w-5 h-5 icon-blue"
              />
              <div className="w-12 h-px bg-[#5b9bc4]/30" />
            </div>
            <h2
              className="text-2xl md:text-4xl font-light text-[#2a3a4a] mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Jak do nas <em className="italic text-[#5b9bc4]">trafić?</em>
            </h2>
            <p
              className="text-sm text-[#5a6a7a] font-light"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ul. Nadmorska 12, 76-034 Sarbinowo — 150 metrów od plaży
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e2eaf0] h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.5!2d15.9!3d54.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSarbinowo!5e0!3m2!1spl!2spl!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Pokoje u Babci Jadzi w Sarbinowie"
            />
          </div>
        </div>
      </section>
    </>
  );
}
