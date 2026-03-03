"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  MapPin, Phone, Mail, Facebook, Instagram, Twitter,
  Sailboat, Anchor
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const pathname = usePathname();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Dziękujemy za zapisanie się: ${email}`);
    setEmail("");
  };

  // Linki nawigacji z aktywnymi stanami
  const navLinks = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  // Linki do sekcji strony głównej (scrollowanie)
  const sectionLinks = [
    { label: "O nas", href: "/#about" },
    { label: "Pokoje", href: "/#rooms" },
    { label: "Galeria", href: "/#gallery" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Dramatic Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1751315874064-a9684320dd44?w=1920&q=80"
          alt="Ocean waves at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#143c64]/95 via-[#1a5080]/90 to-[#0d1b2a]/98" />

        {/* Static sailing boat decoration */}
        <div className="absolute bottom-12 right-12 opacity-10">
          <Sailboat size={120} className="text-white" strokeWidth={1} />
        </div>
      </div>

      {/* Animated Wave Divider */}
      <div
        className="absolute top-0 left-0 right-0 overflow-hidden z-10"
        style={{ height: "120px" }}
      >
        <svg
          className="absolute top-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ d: "M0,60 Q360,20 720,60 T1440,60 L1440,0 L0,0 Z" }}
            animate={{
              d: [
                "M0,60 Q360,20 720,60 T1440,60 L1440,0 L0,0 Z",
                "M0,60 Q360,90 720,60 T1440,60 L1440,0 L0,0 Z",
                "M0,60 Q360,20 720,60 T1440,60 L1440,0 L0,0 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            bottom: `${20 + i * 25}px`,
          }}
          animate={{
            y: [-30, -150],
            opacity: [0, 0.4, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        >
          <div className="w-full h-full bg-white/20 rounded-full blur-sm" />
        </motion.div>
      ))}

      <div className="relative z-20 pt-32 pb-12 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-4"
            >
              <img
                src="/images/logo klientki.png"
                alt="Pokoje u Babci Jadzi - Logo"
                className="h-36 w-auto brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              />
            </motion.div>
            <h2
              className="text-4xl lg:text-5xl text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
              }}
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
            {/* O Nas */}
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
                Przytulne pokoje gościnne w sercu Sarbinowa, zaledwie 150
                metrów od piaszczystej plaży. Domowa atmosfera, spokój i urok
                polskiego wybrzeża czekają na Państwa.
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-white/90 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span>5 komfortowych pokoi</span>
              </motion.div>
            </motion.div>

            {/* Nawigacja */}
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
                {[...navLinks, ...sectionLinks].map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <li key={link.label}>
                      <motion.div whileHover={{ x: 10 }}>
                        <Link
                          href={link.href}
                          className={`inline-flex items-center gap-2 text-sm transition-colors duration-300 ${
                            isActive
                              ? "text-[#7dbde8]"
                              : "text-white/80 hover:text-white"
                          }`}
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          <span className="text-[#7dbde8]">▸</span>
                          {link.label}
                        </Link>
                      </motion.div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Kontakt */}
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
                  <MapPin
                    size={18}
                    className="text-[#7dbde8] mt-1 flex-shrink-0"
                  />
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    ul. Nadmorska 12
                    <br />
                    76-034 Sarbinowo
                    <br />
                    woj. zachodniopomorskie
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <Phone
                    size={18}
                    className="text-[#7dbde8] flex-shrink-0"
                  />
                  <a
                    href="tel:+48 502 180 028"
                    className="text-white/80 text-sm hover:text-white transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    +48 502 180 028
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <Mail
                    size={18}
                    className="text-[#7dbde8] flex-shrink-0"
                  />
                  <a
                    href="mailto:kontakt@babcijadzi.pl"
                    className="text-white/80 text-sm hover:text-white transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    kontakt@babcijadzi.pl
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Newsletter */}
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
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Twitter, label: "Twitter" },
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
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d1b2a] px-4"
            >
              <Anchor
                size={24}
                className="text-white/60"
                strokeWidth={1.5}
              />
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
              © 2026 Pokoje nad Morzem w Sarbinowie • Wszystkie prawa
              zastrzeżone
            </p>
            <p
  className="text-white/40 text-xs flex items-center gap-1.5"
  style={{ fontFamily: "'DM Sans', sans-serif" }}
>
  Made with{" "}
  <span className="text-red-400 text-sm">♥</span>
  {" "}by{" "}
  <a
    href="https://hoteler.pro"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#7dbde8] hover:text-white transition-colors duration-300 font-medium tracking-wide"
  >
    Hoteler
  </a>
</p>

          </motion.div>
        </div>
      </div>
    </footer>
  );
}
