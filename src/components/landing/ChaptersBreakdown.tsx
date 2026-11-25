import React from "react";
import { CHAPTERS, HOTMART_CHECKOUT_URL } from "@/lib/constants";
import { BookOpen, CheckCircle, ArrowRight } from "lucide-react";

export const ChaptersBreakdown: React.FC = () => {
  return (
    <section id="capitulos" className="py-20 bg-[#09090D] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Índice Completo do E-book</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            O Que Você Vai Encontrar Dentro do <span className="gold-gradient-text">LEANCODE</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Mais de 170 páginas de conteúdo direto ao ponto. Sem enrolação teórica, sem jargões incompreensíveis. Um manual prático de instruções para reprogramar o seu corpo.
          </p>
        </div>

        {/* 10 Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-16">
          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.number}
              className="p-5 sm:p-6 rounded-xl bg-[#121217] border border-zinc-800/80 hover:border-[#D4AF37]/40 transition-all flex items-start gap-4 shadow-md group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37]/50 transition-colors">
                <span className="text-base font-black text-[#D4AF37] font-mono">
                  {chapter.number}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#E5C58B] transition-colors">
                    {chapter.title}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-400 shrink-0 ml-2">
                    pág. {chapter.page}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {chapter.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout from Chapter 06 */}
        <div className="p-6 rounded-2xl bg-[#14141C] border border-zinc-800 text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm sm:text-base italic text-[#E5C58B]">
            &ldquo;Um treino medíocre que acontece bate sempre um treino perfeito que não acontece. 80% do tempo é suficiente quando você tem um sistema.&rdquo;
          </p>
          <span className="text-[11px] text-zinc-400 mt-2 block font-mono">
            — Princípio LEANCODE • Capítulo 06
          </span>
        </div>

        <div className="text-center">
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-black shadow-lg hover:scale-105 transition-all"
          >
            <span>BAIXAR O MANUAL COMPLETO POR APENAS US$ 7</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
