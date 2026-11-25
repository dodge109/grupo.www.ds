import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showWordmark = true,
}) => {
  const sizeMap = {
    sm: { badge: "w-8 h-8", text: "text-lg", sub: "text-[9px]" },
    md: { badge: "w-11 h-11", text: "text-xl", sub: "text-[10px]" },
    lg: { badge: "w-16 h-16", text: "text-2xl", sub: "text-xs" },
    xl: { badge: "w-28 h-28", text: "text-4xl", sub: "text-sm" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Precision Geometric SVG Emblem matching official LEANCODE branding */}
      <div className={`relative ${currentSize.badge} shrink-0`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle background */}
          <circle cx="100" cy="100" r="96" fill="#0C0C0E" stroke="#C5A880" strokeWidth="2.5" />
          <circle cx="100" cy="100" r="92" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* Precision Triangle */}
          {/* Top vertex: 100, 38 | Bottom-Left: 46, 144 | Bottom-Right: 154, 144 */}
          <polygon
            points="100,38 46,144 154,144"
            stroke="#C5A880"
            strokeWidth="2.2"
            fill="none"
            strokeLinejoin="round"
          />

          {/* Dashed vertical center line */}
          <line
            x1="100"
            y1="40"
            x2="100"
            y2="144"
            stroke="#C5A880"
            strokeWidth="1.2"
            strokeDasharray="2.5 3"
            strokeOpacity="0.6"
          />

          {/* 3 Vertex Circles / Nodes */}
          <circle cx="100" cy="38" r="4.5" fill="#C5A880" />
          <circle cx="46" cy="144" r="4" fill="#C5A880" />
          <circle cx="154" cy="144" r="4" fill="#C5A880" />

          {/* Horizontal separator bar */}
          <line x1="56" y1="152" x2="144" y2="152" stroke="#A88B63" strokeWidth="1.5" strokeOpacity="0.8" />

          {/* Typography inside the badge for larger size */}
          {size === "xl" && (
            <>
              <text
                x="100"
                y="170"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="sans-serif"
                fontWeight="800"
                fontSize="18"
                letterSpacing="1"
              >
                LEAN
              </text>
              <text
                x="100"
                y="183"
                textAnchor="middle"
                fill="#C5A880"
                fontFamily="sans-serif"
                fontWeight="500"
                fontSize="10"
                letterSpacing="3"
              >
                CODE
              </text>
              <text
                x="100"
                y="193"
                textAnchor="middle"
                fill="#7E6A4B"
                fontFamily="sans-serif"
                fontWeight="600"
                fontSize="6"
                letterSpacing="3.5"
              >
                O MÉTODO
              </text>
            </>
          )}
        </svg>
      </div>

      {showWordmark && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline gap-1.5">
            <span className={`font-extrabold tracking-tight text-white ${currentSize.text}`}>
              LEAN
            </span>
            <span className={`font-semibold tracking-wider text-[#D4AF37] ${currentSize.text}`}>
              CODE
            </span>
          </div>
          <span className={`font-medium tracking-[0.28em] text-[#A1A1AA] uppercase ${currentSize.sub}`}>
            O MÉTODO • NÃO A MODA
          </span>
        </div>
      )}
    </div>
  );
};
