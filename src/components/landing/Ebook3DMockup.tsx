import React, { useState } from "react";
import { BookOpen, CheckCircle2, Sparkles, Layers, Flame } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export const Ebook3DMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"cover" | "summary" | "pillars" | "timeline">("cover");

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
      {/* Glow behind book */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/20 via-[#c5a880]/10 to-transparent blur-3xl opacity-75 pointer-events-none rounded-full" />

      {/* Floating pill badge */}
      <div className="z-10 mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181820]/90 border border-[#D4AF37]/30 text-xs text-[#E5C58B] shadow-lg backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span className="font-semibold uppercase tracking-wider">Edição Premium Digital • 170+ Páginas</span>
      </div>

      {/* The 3D Book Container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[1/1.42] select-none perspective-1000 transition-all duration-500">
        {/* Soft shadow under book */}
        <div className="absolute -bottom-6 left-6 right-6 h-8 bg-black/80 blur-xl rounded-full transform scale-95" />

        {/* 3D Book Structure with spine and paper edges */}
        <div className="relative w-full h-full rounded-r-2xl rounded-l-md shadow-[25px_25px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.15)] overflow-hidden border-y border-r border-[#C5A880]/30 bg-[#0C0C0E] flex">
          
          {/* Book Spine (Left side depth effect) */}
          <div className="w-5 sm:w-6 h-full bg-gradient-to-r from-[#070709] via-[#1a1a22] to-[#0d0d12] border-r border-[#C5A880]/20 flex flex-col items-center justify-between py-6 shrink-0 relative overflow-hidden">
            {/* Spine gold accent line */}
            <div className="absolute top-0 bottom-0 left-1 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
            <span className="text-[8px] font-mono tracking-widest text-[#A1A1AA] rotate-90 uppercase whitespace-nowrap">
              LEANCODE
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[7px] font-mono tracking-widest text-[#C5A880]/70 rotate-90 uppercase whitespace-nowrap">
              EDIÇÃO 2026
            </span>
          </div>

          {/* Book Inner Page View / Dynamic Content */}
          <div className="flex-1 h-full p-5 sm:p-6 flex flex-col justify-between relative bg-gradient-to-br from-[#0D0D12] via-[#09090C] to-[#050507] overflow-hidden">
            {/* Glossy sheen reflection on the cover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />

            {/* Content Based on Active Preview Tab */}
            {activeTab === "cover" && (
              <div className="flex-1 flex flex-col justify-between relative z-10 text-center animate-fadeIn">
                {/* Top subtitle */}
                <div className="pt-2">
                  <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#A1A1AA] font-semibold">
                    MÉTODO • DISCIPLINA • RESULTADO
                  </p>
                  <div className="w-12 h-[1px] bg-[#C5A880]/40 mx-auto mt-2" />
                </div>

                {/* Main Title */}
                <div className="my-auto py-4">
                  <div className="text-4xl sm:text-5xl font-black italic tracking-tighter text-white leading-none">
                    LEAN
                  </div>
                  <div className="text-4xl sm:text-5xl font-black italic tracking-tighter text-[#D4AF37] leading-none mt-1">
                    CODE
                  </div>

                  <p className="mt-4 text-[10px] sm:text-[11px] text-[#D1D5DB] font-normal leading-relaxed max-w-[220px] mx-auto">
                    Como perder gordura, moldar o corpo e recuperar a sua confiança sem dietas extremas ou sacrifícios impossíveis.
                  </p>

                  {/* Watermark Emblem */}
                  <div className="my-5 flex justify-center opacity-85">
                    <div className="w-20 h-20 relative">
                      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                        <circle cx="100" cy="100" r="95" stroke="#C5A880" strokeWidth="2" strokeOpacity="0.4" />
                        <polygon points="100,38 46,144 154,144" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
                        <circle cx="100" cy="38" r="4.5" fill="#D4AF37" />
                        <circle cx="46" cy="144" r="4" fill="#D4AF37" />
                        <circle cx="154" cy="144" r="4" fill="#D4AF37" />
                      </svg>
                    </div>
                  </div>

                  <div className="italic text-xs text-[#E5C58B] font-medium tracking-wide">
                    &ldquo;O método. Não a moda.&rdquo;
                  </div>
                </div>

                {/* Cover Footer */}
                <div className="pb-1">
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/30 to-transparent mb-2" />
                  <p className="text-[8px] sm:text-[9px] tracking-widest uppercase text-[#9CA3AF] font-medium">
                    EDIÇÃO PREMIUM • TRANSFORMAÇÃO CORPORAL
                  </p>
                  <p className="text-[7px] text-[#6B7280] tracking-wider mt-0.5">leancode.com</p>
                </div>
              </div>
            )}

            {activeTab === "summary" && (
              <div className="flex-1 flex flex-col relative z-10 text-left animate-fadeIn">
                <div className="border-b border-[#C5A880]/30 pb-2 mb-3">
                  <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Sumário do Livro</span>
                  <h4 className="text-sm font-bold text-white">10 Capítulos de Puro Método</h4>
                </div>
                <div className="space-y-1.5 text-[10px] text-zinc-300 overflow-y-auto pr-1">
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/80">
                    <span><strong className="text-[#D4AF37]">01</strong> A Verdade Sobre Emagrecimento</span>
                    <span className="text-zinc-500 font-mono text-[9px]">p. 12</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/80">
                    <span><strong className="text-[#D4AF37]">02</strong> O Método LEANCODE — Os 3 Pilares</span>
                    <span className="text-zinc-500 font-mono text-[9px]">p. 24</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/80">
                    <span><strong className="text-[#D4AF37]">03</strong> Nutrição Sem Restrições</span>
                    <span className="text-zinc-500 font-mono text-[9px]">p. 38</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/80">
                    <span><strong className="text-[#D4AF37]">04</strong> Treino Eficiente (Menos Tempo)</span>
                    <span className="text-zinc-500 font-mono text-[9px]">p. 56</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/80">
                    <span><strong className="text-[#D4AF37]">05</strong> Metabolismo & Hormônios Reais</span>
                    <span className="text-zinc-500 font-mono text-[9px]">p. 72</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/80">
                    <span><strong className="text-[#D4AF37]">06</strong> Mentalidade de Atleta</span>
                    <span className="text-zinc-500 font-mono text-[9px]">p. 88</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/80">
                    <span><strong className="text-[#D4AF37]">07</strong> Plano de 12 Semanas Completo</span>
                    <span className="text-zinc-500 font-mono text-[9px]">p. 104</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/80">
                    <span><strong className="text-[#D4AF37]">08</strong> Receitas & Refeições Rápidas</span>
                    <span className="text-zinc-500 font-mono text-[9px]">p. 126</span>
                  </div>
                </div>
                <div className="mt-auto pt-2 text-[9px] text-center text-[#C5A880] italic">
                  &ldquo;Quem tem método não improvisa.&rdquo;
                </div>
              </div>
            )}

            {activeTab === "pillars" && (
              <div className="flex-1 flex flex-col relative z-10 text-left animate-fadeIn">
                <div className="border-b border-[#C5A880]/30 pb-2 mb-2.5">
                  <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Capítulo 02</span>
                  <h4 className="text-sm font-bold text-white">Os 3 Pilares do Sistema</h4>
                </div>
                <div className="space-y-2.5 text-[10px]">
                  <div className="p-2 rounded bg-zinc-900/80 border border-[#C5A880]/30">
                    <span className="font-bold text-[#E5C58B]">I. Nutrição Estratégica</span>
                    <p className="text-zinc-400 text-[9px] mt-0.5 leading-snug">
                      Déficit flexível (300-500 kcal), proteína alta (1.8-2.2g/kg) e timing inteligente de carboidratos.
                    </p>
                  </div>
                  <div className="p-2 rounded bg-zinc-900/80 border border-[#7BA4BF]/30">
                    <span className="font-bold text-[#9EC4DF]">II. Treino Eficiente</span>
                    <p className="text-zinc-400 text-[9px] mt-0.5 leading-snug">
                      2 a 3 treinos curtos semanais superam 6 dias de cardio. Progressão de carga contínua (+2.5%/sem).
                    </p>
                  </div>
                  <div className="p-2 rounded bg-zinc-900/80 border border-[#DE6847]/30">
                    <span className="font-bold text-[#F58D71]">III. Mentalidade de Sistema</span>
                    <p className="text-zinc-400 text-[9px] mt-0.5 leading-snug">
                      Consistência sobre perfeição. Identidade precede comportamento para nunca voltar ao peso antigo.
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-2 text-[9px] text-center text-zinc-400 italic">
                  Três pilares. Um sistema. Uma transformação.
                </div>
              </div>
            )}

            {activeTab === "timeline" && (
              <div className="flex-1 flex flex-col relative z-10 text-left animate-fadeIn">
                <div className="border-b border-[#C5A880]/30 pb-2 mb-2.5">
                  <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Capítulo 07</span>
                  <h4 className="text-sm font-bold text-white">O Protocolo de 12 Semanas</h4>
                </div>
                <div className="space-y-2 text-[10px]">
                  <div className="border-l-2 border-[#C5A880] pl-2.5 py-0.5">
                    <span className="font-bold text-white text-[10px]">Fase 1: Ativação (Sem. 1-4)</span>
                    <p className="text-zinc-400 text-[9px]">Eliminação de ultraprocessados, 2 treinos/sem, meta: -1.5 a 2kg.</p>
                  </div>
                  <div className="border-l-2 border-[#7BA4BF] pl-2.5 py-0.5">
                    <span className="font-bold text-white text-[10px]">Fase 2: Aceleração (Sem. 5-8)</span>
                    <p className="text-zinc-400 text-[9px]">Estímulo metabólico HIIT 2x/sem, meta: -2 a 3kg adicionais.</p>
                  </div>
                  <div className="border-l-2 border-[#DE6847] pl-2.5 py-0.5">
                    <span className="font-bold text-white text-[10px]">Fase 3: Transformação (Sem. 9-12)</span>
                    <p className="text-zinc-400 text-[9px]">Ciclagem de carboidratos, definição muscular profunda e consolidação.</p>
                  </div>
                </div>
                <div className="mt-auto p-2 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/30 text-center">
                  <span className="text-[9px] font-bold text-[#E5C58B]">Resultado Esperado: 6 a 8 kg de gordura perdida</span>
                </div>
              </div>
            )}
          </div>

          {/* Right side page edge pages effect */}
          <div className="w-3 sm:w-3.5 h-full bg-gradient-to-r from-[#17171d] via-[#2a2a35] to-[#121218] border-l border-zinc-800 shrink-0 relative flex flex-col justify-around py-4">
            <div className="w-full h-[1px] bg-zinc-700/50" />
            <div className="w-full h-[1px] bg-zinc-700/50" />
            <div className="w-full h-[1px] bg-zinc-700/50" />
            <div className="w-full h-[1px] bg-zinc-700/50" />
            <div className="w-full h-[1px] bg-zinc-700/50" />
          </div>
        </div>
      </div>

      {/* Interactive Tabs under the Mockup */}
      <div className="mt-5 w-full flex items-center justify-center gap-1.5 p-1 rounded-xl bg-[#121217]/90 border border-[#D4AF37]/20 backdrop-blur-md shadow-md text-xs">
        <button
          type="button"
          onClick={() => setActiveTab("cover")}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            activeTab === "cover"
              ? "bg-[#D4AF37] text-black font-bold shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Capa Oficial
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("summary")}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            activeTab === "summary"
              ? "bg-[#D4AF37] text-black font-bold shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Sumário
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("pillars")}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            activeTab === "pillars"
              ? "bg-[#D4AF37] text-black font-bold shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          3 Pilares
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("timeline")}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            activeTab === "timeline"
              ? "bg-[#D4AF37] text-black font-bold shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          12 Semanas
        </button>
      </div>

      <p className="mt-3 text-[11px] text-zinc-500 text-center">
        Toque nos botões acima para espiar as páginas internas originais do LEANCODE.
      </p>
    </div>
  );
};
