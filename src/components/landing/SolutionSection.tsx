import React from "react";
import { PILLARS, HOTMART_CHECKOUT_URL } from "@/lib/constants";
import { Utensils, Dumbbell, Brain, Check, ArrowRight, Flame } from "lucide-react";

export const SolutionSection: React.FC = () => {
  const pillarIcons = [
    <Utensils key="utensils" className="w-6 h-6 text-[#E5C58B]" />,
    <Dumbbell key="dumbbell" className="w-6 h-6 text-[#9EC4DF]" />,
    <Brain key="brain" className="w-6 h-6 text-[#F58D71]" />,
  ];

  const pillarBorderColors = [
    "border-[#C5A880]/30 hover:border-[#C5A880]/60",
    "border-[#7BA4BF]/30 hover:border-[#7BA4BF]/60",
    "border-[#DE6847]/30 hover:border-[#DE6847]/60",
  ];

  const pillarBadgeColors = [
    "bg-[#C5A880]/15 text-[#E5C58B] border-[#C5A880]/40",
    "bg-[#7BA4BF]/15 text-[#9EC4DF] border-[#7BA4BF]/40",
    "bg-[#DE6847]/15 text-[#F58D71] border-[#DE6847]/40",
  ];

  return (
    <section id="pilares" className="py-20 relative bg-[#09090D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>A Arquitetura do Sucesso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            O Método LEANCODE: <span className="gold-gradient-text">Os 3 Pilares Fundamentais</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Uma abordagem integrada onde cada elemento apoia e potencializa o outro. Não existe improviso quando você tem em mãos a engenharia exata do corpo humano.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`rounded-2xl bg-[#121217] p-8 border ${pillarBorderColors[index]} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative overflow-hidden`}
            >
              {/* Top ambient highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-full pointer-events-none" />

              <div>
                {/* Header of Pillar Card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    {pillarIcons[index]}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${pillarBadgeColors[index]}`}>
                    Pilar {pillar.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs font-medium text-[#C5A880] mb-4 italic">
                  &ldquo;{pillar.subtitle}&rdquo;
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-3 pt-4 border-t border-zinc-800/80">
                  {pillar.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-normal">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag bottom */}
              <div className="mt-8 pt-4 border-t border-zinc-800/40 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>ESTRATÉGIA COMPROVADA</span>
                <span className="text-white font-bold">{pillar.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Nutritional Blueprint Preview (Adapted from Chapter 03 to PT-BR) */}
        <div className="rounded-2xl bg-[#13131A] border border-[#D4AF37]/25 p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5 mb-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37]">
                Extraído do Capítulo 03 • Nutrição Estratégica
              </span>
              <h4 className="text-lg font-bold text-white mt-1">
                Exemplo Real de Dia Alimentar Sem Restrições Radicais
              </h4>
            </div>
            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
              Densidade & Saciedade
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">07:00 • CAFÉ DA MANHÃ</span>
              <p className="text-zinc-200 font-medium">3 Ovos mexidos, tomate em cubos e café puro sem açúcar</p>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">10:30 • LANCHE DA MANHÃ</span>
              <p className="text-zinc-200 font-medium">Iogurte grego natural + punhado de castanhas ou nozes</p>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">13:00 • ALMOÇO COMPLETO</span>
              <p className="text-zinc-200 font-medium">Filé de frango grelhado, batata-doce e farto prato de salada verde com azeite</p>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">16:30 • PRÉ-TREINO</span>
              <p className="text-zinc-200 font-medium">Banana madura + 20g de proteína em pó de fácil digestão</p>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">19:30 • JANTAR NUTRITIVO</span>
              <p className="text-zinc-200 font-medium">Salmão grelhado, brócolis no vapor com azeite extravirgem</p>
            </div>
          </div>

          <p className="text-center text-xs text-zinc-400 mt-5 italic">
            Comida saborosa de verdade que você encontra em qualquer supermercado brasileiro, sem shakes artificiais ou fórmulas caras.
          </p>
        </div>

        {/* CTA Mid Page */}
        <div className="mt-12 text-center">
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-black shadow-lg hover:scale-105 transition-all"
          >
            <span>QUERO DOMINAR OS 3 PILARES POR US$ 7</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
