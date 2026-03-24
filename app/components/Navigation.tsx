"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Strona Główna", href: "/" },
  { label: "AZAK", href: "/azak-sarbinowo" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];


export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasBackground = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        hasBackground
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className={`transition-colors duration-300 ${
              hasBackground ? "text-[#5b9bc4]" : "text-white"
            }`}
          >
            <circle
              cx="16" cy="16" r="15"
              stroke="currentColor" strokeWidth="1"
              fill="none" opacity="0.4"
            />
            <path
              d="M6 14 Q10 10, 16 14 Q22 18, 26 14"
              stroke="currentColor" strokeWidth="1.5"
              fill="none" strokeLinecap="round"
            />
            <path
              d="M6 19 Q10 15, 16 19 Q22 23, 26 19"
              stroke="currentColor" strokeWidth="1.5"
              fill="none" strokeLinecap="round" opacity="0.5"
            />
          </svg>
          <div className="flex flex-col leading-none">
            <span
              className={`text-base md:text-lg tracking-[0.12em] uppercase font-light transition-colors duration-300 ${
                hasBackground ? "text-[#2a5a7b]" : "text-white"
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pokoje
            </span>
            <span
              className={`text-[9px] md:text-[10px] tracking-[0.35em] uppercase font-medium transition-colors duration-300 ${
                hasBackground ? "text-[#5b9bc4]" : "text-white/70"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Sarbinowo
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.1em] uppercase font-light transition-colors duration-300 relative ${
                  hasBackground
                    ? isActive
                      ? "text-[#2a5a7b] font-normal"
                      : "text-[#4a6a7a] hover:text-[#2a5a7b]"
                    : isActive
                    ? "text-white font-normal"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-px transition-colors duration-300 ${
                      hasBackground ? "bg-[#5b9bc4]" : "bg-white/60"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 transition-colors ${
            hasBackground ? "text-[#2a5a7b]" : "text-white"
          }`}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60" : "max-h-0"
        } bg-white/95 backdrop-blur-md border-t border-[#e8eef2]`}
      >
        {NAV_LINKS.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block w-full text-left px-8 py-4 text-sm tracking-[0.1em] uppercase font-light transition-colors ${
                isActive
                  ? "text-[#2a5a7b] font-normal bg-[#f7fafe]"
                  : "text-[#4a6a7a]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
