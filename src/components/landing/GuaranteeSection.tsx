import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { HOTMART_CHECKOUT_URL } from "@/lib/constants";

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#0C0C10] border-y border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="rounded-2xl bg-[#121217] border border-[#D4AF37]/30 p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8 shadow-xl">
          
          {/* Guarantee Badge */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#D4AF37]/20 via-[#C5A880]/10 to-transparent border-2 border-[#D4AF37] flex flex-col items-center justify-center shrink-0 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37]" />
            <span className="text-[10px] font-black uppercase text-[#E5C58B] tracking-wider mt-1">
              7 DIAS
            </span>
            <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">
              GARANTIA
            </span>
          </div>

          {/* Guarantee Text */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Teste o LEANCODE Por 7 Dias Com Risco Zero
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
              Acreditamos tanto no impacto prático e científico deste método que assumimos todo o risco por você. Baixe o e-book, leia os 10 capítulos, confira os cardápios e teste os treinos. Se você achar que o conteúdo não vale pelo menos 10 vezes o que pagou, basta solicitar o reembolso na plataforma da Hotmart com um único clique.
            </p>
            <p className="text-xs font-semibold text-[#E5C58B]">
              Devolvemos 100% do seu dinheiro. Sem perguntas chatas, sem letras miúdas.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
