import React from "react";
import { Check, ShieldCheck, Zap, Lock, ArrowRight, Sparkles, CreditCard } from "lucide-react";
import { HOTMART_CHECKOUT_URL, PRODUCT_INFO } from "@/lib/constants";

export const PricingOfferSection: React.FC = () => {
  return (
    <section id="oferta" className="py-20 bg-[#09090D] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#E5C58B] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Condição Exclusiva de Lançamento</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            A Hora de Transformar Seu Corpo É <span className="gold-gradient-text">Agora</span>
          </h2>
          <p className="text-base text-zinc-400">
            Tenha acesso completo e vitalício ao protocolo definitivo que já ajudou centenas de pessoas a abandonarem as dietas da moda.
          </p>
        </div>

        {/* Pricing Card Box */}
        <div className="rounded-3xl bg-[#13131A] border-2 border-[#D4AF37]/50 p-6 sm:p-10 shadow-[0_0_50px_rgba(212,175,55,0.2)] relative">
          
          {/* Top highlight ribbon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-black text-xs font-extrabold uppercase tracking-wider shadow-lg">
            Oferta Especial • Economia de 88%
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Left: What you get */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Tudo o Que Você Vai Receber Imediatamente:
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-200">
                <div className="flex items-start gap-3 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">E-book LEANCODE Completo:</strong> Os 10 capítulos (170+ páginas) em PDF de alta resolução.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">O Protocolo de 12 Semanas:</strong> Fases de Ativação, Aceleração e Transformação passo a passo.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Bônus #1:</strong> Guia de Refeições Rápidas & Exemplos de Cardápios Diários.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Bônus #2:</strong> Planilha de Progressão de Carga Semanal (+2.5%) & Métricas.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Bônus #3:</strong> Protocolo Anti-Cortisol: Sono Profundo e Regulação Hormonal.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Acesso Vitalício:</strong> Leia quando quiser no celular, tablet ou computador.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Price box & CTA */}
            <div className="lg:col-span-5 flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-zinc-800">
              <span className="text-xs uppercase font-mono tracking-widest text-zinc-400">
                Valor Total Somado: <span className="line-through text-red-400 font-bold">US$ 58</span>
              </span>

              <div className="my-3">
                <span className="text-xs text-zinc-400 block mb-1">Pagamento Único Por Apenas</span>
                <div className="text-5xl sm:text-6xl font-black text-white tracking-tight flex items-baseline justify-center gap-1 font-mono">
                  <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">US$</span>
                  <span>7</span>
                </div>
                <span className="text-xs text-[#E5C58B] font-medium block mt-1">
                  ({PRODUCT_INFO.priceBrlApprox} • Sem mensalidades)
                </span>
                <span className="text-[11px] text-zinc-400 block mt-0.5">
                  Pagamento facilitado no Brasil via PIX ou Cartão
                </span>
              </div>

              {/* Big pulsating CTA Button */}
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-extrabold text-sm uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] via-[#E5C58B] to-[#C5A880] text-black shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all mt-4"
              >
                <span>COMPRAR AGORA POR US$ 7</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="mt-4 flex flex-col items-center gap-1.5 text-[11px] text-zinc-400">
                <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Garantia Incondicional de 7 Dias</span>
                </div>
                <span>Ambiente Criptografado & Verificado Hotmart</span>
              </div>
            </div>

          </div>

          {/* Payment Methods Info */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Liberação Imediata no E-mail</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>PIX, Cartão de Crédito e Boleto</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
