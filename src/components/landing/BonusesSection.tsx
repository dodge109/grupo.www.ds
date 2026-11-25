import React from "react";
import { BONUSES, HOTMART_CHECKOUT_URL } from "@/lib/constants";
import { Gift, Sparkles, Check, ArrowRight } from "lucide-react";

export const BonusesSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#09090D] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#E5C58B] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Presentes Exclusivos Inclusos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Acelere Seus Resultados Com <span className="gold-gradient-text">3 Bônus Gratuitos</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Ao garantir seu acesso hoje ao LEANCODE por apenas US$ 7, você desbloqueia imediatamente ferramentas práticas para facilitar seu dia a dia.
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.number}
              className="rounded-2xl bg-[#121217] p-7 border border-[#D4AF37]/25 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-[#D4AF37]/50 transition-all"
            >
              {/* Subtle gold badge in corner */}
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#D4AF37]/20 border-b border-l border-[#D4AF37]/30 text-[10px] font-bold text-[#E5C58B] rounded-bl-xl font-mono">
                {bonus.value}
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold block mb-2">
                  {bonus.tag}
                </span>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#E5C58B] transition-colors leading-snug">
                  {bonus.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {bonus.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  GRÁTIS HOJE
                </span>
                <span className="text-[11px] text-zinc-500 font-mono">Acesso Imediato</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Value Summary Bar */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#15151F] border border-[#D4AF37]/20 max-w-xl mx-auto flex items-center justify-between text-xs text-zinc-300">
          <div>
            <span className="text-zinc-400">Valor Total Somente dos Bônus: </span>
            <strong className="line-through text-red-400">US$ 51</strong>
          </div>
          <div className="text-right">
            <span className="text-[#D4AF37] font-bold text-sm uppercase">Custo Para Você: US$ 0</span>
          </div>
        </div>

      </div>
    </section>
  );
};
