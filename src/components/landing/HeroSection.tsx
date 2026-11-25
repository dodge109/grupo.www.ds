import React from "react";
import { ArrowRight, ShieldCheck, Zap, Lock, Sparkles, Check } from "lucide-react";
import { HOTMART_CHECKOUT_URL, PRODUCT_INFO } from "@/lib/constants";
import { Ebook3DMockup } from "./Ebook3DMockup";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background radial gradients for luxury ambiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Persuasive Copywriting in PT-BR */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Tag / Pre-headline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A22] border border-[#D4AF37]/35 text-xs text-[#E5C58B] mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="font-semibold tracking-wider uppercase text-[11px]">
                MÉTODO • DISCIPLINA • RESULTADO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              O seu corpo não falhou.{" "}
              <span className="gold-gradient-text block mt-1">
                O método das dietas tradicionais falhou.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl mb-7">
              Como queimar gordura, acelerar seu metabolismo e moldar seu corpo em <strong>12 semanas</strong> com nutrição estratégica e treinos eficientes de 30 minutos — <strong>sem passar fome, sem cortar tudo o que você gosta e sem horas infinitas de cardio</strong>.
            </p>

            {/* Key Value Proposition Bullets */}
            <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-left text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span><strong>Déficit Calórico Flexível:</strong> Sem passar fome</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span><strong>Apenas 2 a 3 Treinos/sem:</strong> Foco em resultado</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span><strong>Fim do Efeito Sanfona:</strong> Ciência biológica real</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span><strong>1 Refeição Livre/sem:</strong> Sem culpa e com adesão</span>
              </div>
            </div>

            {/* Main CTA Block */}
            <div className="w-full max-w-md flex flex-col items-center lg:items-start gap-3">
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] via-[#E5C58B] to-[#C5A880] text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>QUERO ACESSAR O LEANCODE</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Price & Security microcopy */}
              <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="line-through text-zinc-500">US$ 58</span>
                  <span className="text-white font-bold text-sm">Por apenas {PRODUCT_INFO.priceUsd}</span>
                  <span className="text-zinc-400 text-[11px]">({PRODUCT_INFO.priceBrlApprox})</span>
                </div>
                <span className="hidden sm:inline text-zinc-600">•</span>
                <span className="text-[#C5A880] font-semibold">Pagamento Único & Vitalício</span>
              </div>

              {/* Security Seals */}
              <div className="mt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] text-zinc-400">
                <div className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Checkout Seguro Hotmart</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Download Imediato em PDF</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>7 Dias de Garantia</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual 3D Ebook Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <Ebook3DMockup />
          </div>

        </div>
      </div>
    </section>
  );
};
