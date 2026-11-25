import React from "react";
import { TWELVE_WEEKS_TIMELINE, HOTMART_CHECKOUT_URL } from "@/lib/constants";
import { Calendar, Target, Award, ArrowRight, Check } from "lucide-react";

export const MethodTimeline: React.FC = () => {
  return (
    <section id="cronograma" className="py-20 bg-[#0C0C10] border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Capítulo 07 • Cronograma Prático</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            O Código Das 12 Semanas: <span className="gold-gradient-text">Sua Rota Sem Desvios</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Nada de adivinhações. O LEANCODE divide sua jornada em 3 fases complementares para que seu corpo continue queimando gordura sem nunca entrar em platô metabólico.
          </p>
        </div>

        {/* 3 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TWELVE_WEEKS_TIMELINE.map((stage, idx) => (
            <div
              key={stage.phase}
              className="rounded-2xl bg-[#13131A] p-7 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-xl relative overflow-hidden"
            >
              {/* Top Phase Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${stage.badgeColor}`}>
                    {stage.phase} • {stage.weeks}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">Etapa 0{idx + 1}</span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                  {stage.title}
                </h3>

                <p className="text-xs text-zinc-300 font-medium mb-4 leading-relaxed">
                  {stage.goal}
                </p>

                {/* Steps */}
                <div className="space-y-3 pt-4 border-t border-zinc-800/80 mb-6">
                  {stage.steps.map((step) => (
                    <div key={step} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-normal">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Goal Bottom */}
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                <span className="text-xs font-bold text-[#E5C58B]">
                  {stage.target}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome Box from the Book */}
        <div className="rounded-2xl bg-gradient-to-r from-[#17140B] via-[#211A0D] to-[#17140B] border border-[#D4AF37]/40 p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
            Resultado Cientificamente Esperado ao Fim das 12 Semanas:
          </h4>
          <p className="text-2xl sm:text-3xl font-extrabold gold-gradient-text font-mono mb-3">
            6 a 8 kg de Gordura Pura Eliminada
          </p>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Mais importante do que os quilos a menos na balança: uma <strong>composição corporal visivelmente diferente</strong>, com massa muscular preservada, tônus atlético e sem flacidez.
          </p>
        </div>

      </div>
    </section>
  );
};
