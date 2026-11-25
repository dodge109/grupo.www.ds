import React, { useState, useEffect } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { HOTMART_CHECKOUT_URL, PRODUCT_INFO } from "@/lib/constants";

export const MobileStickyCta: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only after scrolling past 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0C0C10]/95 backdrop-blur-md border-t border-[#D4AF37]/30 shadow-[0_-5px_25px_rgba(0,0,0,0.8)] animate-slide-up">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] text-zinc-400 uppercase font-mono">Por apenas</span>
            <span className="text-lg font-black text-white font-mono">{PRODUCT_INFO.priceUsd}</span>
          </div>
          <span className="text-[10px] text-[#E5C58B] font-medium leading-none">
            {PRODUCT_INFO.priceBrlApprox} • Vitalício
          </span>
        </div>

        <a
          href={HOTMART_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] via-[#E5C58B] to-[#C5A880] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95 transition-all"
        >
          <span>QUERO O LEANCODE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
