"use client";

export function RopeLeft() {
  return (
    <svg
      className="absolute top-0 left-0 h-full w-[60px] md:w-[80px] pointer-events-none"
      viewBox="0 0 80 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Lina morska skręcona */}
      <path
        d="M40,-10 C55,40 25,80 40,130 C55,180 25,220 40,270 C55,320 25,360 40,410 C55,460 25,500 40,550 C55,600 25,640 40,690 C55,740 25,780 40,830"
        stroke="#5b9bc4"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.12"
      />
      <path
        d="M44,-10 C59,40 29,80 44,130 C59,180 29,220 44,270 C59,320 29,360 44,410 C59,460 29,500 44,550 C59,600 29,640 44,690 C59,740 29,780 44,830"
        stroke="#5b9bc4"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.08"
      />
      {/* Węzły na linie */}
      <circle cx="40" cy="200" r="8" stroke="#5b9bc4" strokeWidth="2" fill="none" opacity="0.1" />
      <circle cx="40" cy="200" r="3" stroke="#5b9bc4" strokeWidth="1.5" fill="none" opacity="0.08" />
      <circle cx="40" cy="500" r="8" stroke="#5b9bc4" strokeWidth="2" fill="none" opacity="0.1" />
      <circle cx="40" cy="500" r="3" stroke="#5b9bc4" strokeWidth="1.5" fill="none" opacity="0.08" />
    </svg>
  );
}

export function WavesTopRight() {
  return (
    <svg
      className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[200px] pointer-events-none"
      viewBox="0 0 500 200"
      fill="none"
    >
      <path
        d="M0,60 Q60,20 120,60 Q180,100 240,60 Q300,20 360,60 Q420,100 480,60 Q510,40 540,60"
        stroke="#5b9bc4"
        strokeWidth="2.5"
        opacity="0.1"
        strokeLinecap="round"
      />
      <path
        d="M0,90 Q60,50 120,90 Q180,130 240,90 Q300,50 360,90 Q420,130 480,90 Q510,70 540,90"
        stroke="#5b9bc4"
        strokeWidth="2"
        opacity="0.07"
        strokeLinecap="round"
      />
      <path
        d="M0,120 Q60,80 120,120 Q180,160 240,120 Q300,80 360,120 Q420,160 480,120 Q510,100 540,120"
        stroke="#5b9bc4"
        strokeWidth="1.5"
        opacity="0.05"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AnchorDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 100 140"
      fill="none"
    >
      {/* Okrąg górny */}
      <circle cx="50" cy="20" r="14" stroke="#5b9bc4" strokeWidth="2.5" fill="none" opacity="0.12" />
      <circle cx="50" cy="20" r="5" fill="#5b9bc4" opacity="0.08" />
      {/* Trzon */}
      <line x1="50" y1="34" x2="50" y2="115" stroke="#5b9bc4" strokeWidth="3" strokeLinecap="round" opacity="0.12" />
      {/* Poprzeczka */}
      <line x1="25" y1="55" x2="75" y2="55" stroke="#5b9bc4" strokeWidth="2.5" strokeLinecap="round" opacity="0.1" />
      {/* Ramiona */}
      <path d="M50,115 C50,115 20,100 12,80" stroke="#5b9bc4" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.12" />
      <path d="M50,115 C50,115 80,100 88,80" stroke="#5b9bc4" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.12" />
      {/* Strzałki */}
      <circle cx="12" cy="80" r="4" fill="#5b9bc4" opacity="0.1" />
      <circle cx="88" cy="80" r="4" fill="#5b9bc4" opacity="0.1" />
    </svg>
  );
}

export function CompassDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 120 120"
      fill="none"
    >
      {/* Okrąg zewnętrzny */}
      <circle cx="60" cy="60" r="55" stroke="#5b9bc4" strokeWidth="1.5" opacity="0.1" />
      <circle cx="60" cy="60" r="48" stroke="#5b9bc4" strokeWidth="0.8" opacity="0.07" />
      {/* Krzyż */}
      <line x1="60" y1="8" x2="60" y2="112" stroke="#5b9bc4" strokeWidth="1" opacity="0.08" />
      <line x1="8" y1="60" x2="112" y2="60" stroke="#5b9bc4" strokeWidth="1" opacity="0.08" />
      {/* Diagonale */}
      <line x1="20" y1="20" x2="100" y2="100" stroke="#5b9bc4" strokeWidth="0.5" opacity="0.06" />
      <line x1="100" y1="20" x2="20" y2="100" stroke="#5b9bc4" strokeWidth="0.5" opacity="0.06" />
      {/* Igła N */}
      <polygon points="60,12 54,60 66,60" fill="#5b9bc4" opacity="0.1" />
      {/* Igła S */}
      <polygon points="60,108 54,60 66,60" stroke="#5b9bc4" strokeWidth="0.8" fill="none" opacity="0.07" />
      {/* Centrum */}
      <circle cx="60" cy="60" r="4" fill="#5b9bc4" opacity="0.12" />
      <circle cx="60" cy="60" r="2" fill="white" />
      {/* Oznaczenia N S E W */}
      <text x="60" y="7" textAnchor="middle" fill="#5b9bc4" fontSize="8" fontWeight="300" opacity="0.12" style={{ fontFamily: "'DM Sans', sans-serif" }}>N</text>
      <text x="60" y="119" textAnchor="middle" fill="#5b9bc4" fontSize="8" fontWeight="300" opacity="0.12" style={{ fontFamily: "'DM Sans', sans-serif" }}>S</text>
      <text x="117" y="63" textAnchor="middle" fill="#5b9bc4" fontSize="8" fontWeight="300" opacity="0.12" style={{ fontFamily: "'DM Sans', sans-serif" }}>E</text>
      <text x="4" y="63" textAnchor="middle" fill="#5b9bc4" fontSize="8" fontWeight="300" opacity="0.12" style={{ fontFamily: "'DM Sans', sans-serif" }}>W</text>
    </svg>
  );
}

export function ShellDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 100 110"
      fill="none"
    >
      {/* Obrys muszli */}
      <path d="M50,105 C15,88 0,55 12,25 C24,0 45,-5 50,12" stroke="#5b9bc4" strokeWidth="2" fill="none" opacity="0.12" />
      <path d="M50,105 C85,88 100,55 88,25 C76,0 55,-5 50,12" stroke="#5b9bc4" strokeWidth="2" fill="none" opacity="0.12" />
      {/* Żeberka */}
      <path d="M50,12 Q38,45 30,70 Q25,85 50,105" stroke="#5b9bc4" strokeWidth="1" fill="none" opacity="0.08" />
      <path d="M50,12 Q62,45 70,70 Q75,85 50,105" stroke="#5b9bc4" strokeWidth="1" fill="none" opacity="0.08" />
      <path d="M50,12 Q49,50 49,80 Q50,95 50,105" stroke="#5b9bc4" strokeWidth="1" fill="none" opacity="0.06" />
      {/* Linie poprzeczne */}
      <path d="M25,50 Q50,42 75,50" stroke="#5b9bc4" strokeWidth="0.8" fill="none" opacity="0.06" />
      <path d="M20,72 Q50,62 80,72" stroke="#5b9bc4" strokeWidth="0.8" fill="none" opacity="0.06" />
    </svg>
  );
}

export function StarfishDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M50,5 L58,35 L90,35 L64,55 L72,85 L50,68 L28,85 L36,55 L10,35 L42,35 Z"
        stroke="#5b9bc4"
        strokeWidth="2"
        fill="none"
        opacity="0.1"
        strokeLinejoin="round"
      />
      <path
        d="M50,15 L55,37 L78,37 L60,52 L66,75 L50,62 L34,75 L40,52 L22,37 L45,37 Z"
        stroke="#5b9bc4"
        strokeWidth="1"
        fill="none"
        opacity="0.06"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="45" r="3" fill="#5b9bc4" opacity="0.08" />
    </svg>
  );
}

export function ShipWheelDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 120 120"
      fill="none"
    >
      {/* Okrąg zewnętrzny */}
      <circle cx="60" cy="60" r="50" stroke="#5b9bc4" strokeWidth="2" opacity="0.1" />
      {/* Okrąg wewnętrzny */}
      <circle cx="60" cy="60" r="20" stroke="#5b9bc4" strokeWidth="2" opacity="0.1" />
      <circle cx="60" cy="60" r="6" fill="#5b9bc4" opacity="0.08" />
      {/* Szprychy (8 sztuk) */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 60 + 20 * Math.cos(rad);
        const y1 = 60 + 20 * Math.sin(rad);
        const x2 = 60 + 50 * Math.cos(rad);
        const y2 = 60 + 50 * Math.sin(rad);
        return (
          <line
            key={angle}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#5b9bc4"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.1"
          />
        );
      })}
      {/* Uchwyty na końcach głównych szprych */}
      {[0, 90, 180, 270].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 60 + 54 * Math.cos(rad);
        const cy = 60 + 54 * Math.sin(rad);
        return (
          <circle
            key={angle}
            cx={cx} cy={cy} r="5"
            stroke="#5b9bc4"
            strokeWidth="1.5"
            fill="none"
            opacity="0.08"
          />
        );
      })}
    </svg>
  );
}

export function BubblesScattered() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
    >
      {/* Bąbelki rozsiane po sekcji */}
      <circle cx="8%" cy="12%" r="3" fill="#5b9bc4" opacity="0.08" />
      <circle cx="18%" cy="6%" r="2" fill="#5b9bc4" opacity="0.06" />
      <circle cx="35%" cy="4%" r="4" fill="#5b9bc4" opacity="0.05" />
      <circle cx="65%" cy="8%" r="2.5" fill="#5b9bc4" opacity="0.07" />
      <circle cx="82%" cy="5%" r="3" fill="#5b9bc4" opacity="0.06" />
      <circle cx="92%" cy="15%" r="2" fill="#5b9bc4" opacity="0.05" />
      
      <circle cx="4%" cy="50%" r="2.5" fill="#5b9bc4" opacity="0.06" />
      <circle cx="96%" cy="45%" r="3" fill="#5b9bc4" opacity="0.05" />
      <circle cx="6%" cy="70%" r="2" fill="#5b9bc4" opacity="0.07" />
      <circle cx="94%" cy="65%" r="2.5" fill="#5b9bc4" opacity="0.06" />
      
      <circle cx="12%" cy="90%" r="3" fill="#5b9bc4" opacity="0.06" />
      <circle cx="30%" cy="94%" r="2" fill="#5b9bc4" opacity="0.05" />
      <circle cx="55%" cy="92%" r="3.5" fill="#5b9bc4" opacity="0.04" />
      <circle cx="75%" cy="95%" r="2" fill="#5b9bc4" opacity="0.06" />
      <circle cx="90%" cy="88%" r="2.5" fill="#5b9bc4" opacity="0.05" />
    </svg>
  );
}
