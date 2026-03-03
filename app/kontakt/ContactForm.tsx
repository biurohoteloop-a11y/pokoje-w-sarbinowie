"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      console.log("Formularz wysłany:", formData);
    }, 1500);
  };

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/10 focus:bg-white/15 transition-all duration-300";

  const labelClasses =
    "block text-xs tracking-[0.1em] uppercase text-white/60 font-medium mb-2";

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
        <h4
          className="text-2xl font-light text-white mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Wiadomość <em className="italic text-white/80">wysłana!</em>
        </h4>
        <p
          className="text-sm text-white/50 font-light mb-8"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe,
          <br className="hidden md:block" />
          zwykle w ciągu kilku godzin.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", email: "", phone: "", dates: "", guests: "", message: "" });
          }}
          className="text-sm text-white/70 hover:text-white transition-colors font-medium"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Wyślij kolejną wiadomość →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClasses} style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Imię i nazwisko *
          </label>
          <input
            type="text" id="name" name="name" required
            value={formData.name} onChange={handleChange}
            placeholder="Jan Kowalski"
            className={inputClasses}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses} style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Email *
          </label>
          <input
            type="email" id="email" name="email" required
            value={formData.email} onChange={handleChange}
            placeholder="jan@email.pl"
            className={inputClasses}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClasses} style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Telefon
          </label>
          <input
            type="tel" id="phone" name="phone"
            value={formData.phone} onChange={handleChange}
            placeholder="+48 123 456 789"
            className={inputClasses}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>
        <div>
          <label htmlFor="dates" className={labelClasses} style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Planowany termin
          </label>
          <input
            type="text" id="dates" name="dates"
            value={formData.dates} onChange={handleChange}
            placeholder="np. 10-17 lipca 2026"
            className={inputClasses}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="guests" className={labelClasses} style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Liczba gości
        </label>
        <select
          id="guests" name="guests"
          value={formData.guests} onChange={handleChange}
          className={`${inputClasses} appearance-none`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <option value="" className="bg-[#3d7a94] text-white">Wybierz...</option>
          <option value="1" className="bg-[#3d7a94] text-white">1 osoba</option>
          <option value="2" className="bg-[#3d7a94] text-white">2 osoby</option>
          <option value="3" className="bg-[#3d7a94] text-white">3 osoby</option>
          <option value="4" className="bg-[#3d7a94] text-white">4 osoby</option>
          <option value="5+" className="bg-[#3d7a94] text-white">5 lub więcej osób</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses} style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Wiadomość *
        </label>
        <textarea
          id="message" name="message" required rows={5}
          value={formData.message} onChange={handleChange}
          placeholder="Dzień dobry, chciałbym zarezerwować pokój..."
          className={`${inputClasses} resize-none`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-white hover:bg-white/90 disabled:bg-white/50 text-[#3d7a94] text-sm tracking-[0.1em] uppercase font-medium transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Wysyłanie...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Wyślij wiadomość
          </>
        )}
      </button>

      <p
        className="text-xs text-white/30 font-light mt-4"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        * Pola wymagane. Odpowiadamy zwykle w ciągu kilku godzin.
      </p>
    </form>
  );
}
