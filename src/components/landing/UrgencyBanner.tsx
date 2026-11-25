import React from "react";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";
import { HOTMART_CHECKOUT_URL, PRODUCT_INFO } from "@/lib/constants";

export const UrgencyBanner: React.FC = () => {
  return (
    <aside aria-label="Aviso de condição especial" className="w-full bg-gradient-to-r from-[#17120a] via-[#241a0d] to-[#17120a] border-b border-[#D4AF37]/25 text-xs py-2 px-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
          </span>
          <span className="font-semibold text-[#E5C58B]">
            CONDIÇÃO ESPECIAL DE LANÇAMENTO:
          </span>
          <span className="text-zinc-300">
            Apenas <strong className="text-white">{PRODUCT_INFO.priceUsd}</strong> ({PRODUCT_INFO.priceBrlApprox}) com acesso vitalício
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-zinc-400">
          <span className="flex items-center gap-1 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            Garantia Hotmart de 7 Dias
          </span>
          <span className="flex items-center gap-1 text-[11px]">
            <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
            Download Imediato em PDF
          </span>
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-[#D4AF37] hover:text-white underline transition-colors"
          >
            Aproveitar Agora &rarr;
          </a>
        </div>
      </div>
    </aside>
  );
};
