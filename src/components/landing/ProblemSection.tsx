import React from "react";
import { AlertTriangle, TrendingDown, Clock, XCircle, CheckCircle, ArrowRight } from "lucide-react";
import { HOTMART_CHECKOUT_URL } from "@/lib/constants";

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-20 bg-[#0C0C10] border-y border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>A Realidade Oculta do Emagrecimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Por Que 95% Das Pessoas Que Fazem Dieta{" "}
            <span className="text-red-400">Recuperam Todo o Peso</span> em Menos de 2 Anos?
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Se você já tentou emagrecer várias vezes e acabou recuperando os quilos perdidos, entenda: o problema nunca esteve na sua força de vontade ou na sua genética. O problema esteve no método que te venderam.
          </p>
        </div>

        {/* 3 Scientific Facts Grid from the Book */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="p-7 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-zinc-700 transition-all">
            <div className="text-4xl font-black text-red-400 mb-2 font-mono">95%</div>
            <h3 className="text-lg font-bold text-white mb-2">Biologia de Sobrevivência</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Seu corpo foi programado para sobreviver a períodos de escassez, não para desfilar na praia. Quando você corta calorias bruscamente, ele entra em modo de defesa, reduz a queima basal e dispara a fome desesperadora.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-7 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-zinc-700 transition-all">
            <div className="text-4xl font-black text-[#D4AF37] mb-2 font-mono">Cortisol</div>
            <h3 className="text-lg font-bold text-white mb-2">O Inimigo Oculto do Abdômen</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Dietas de fome e excesso de cardio elevam o cortisol a níveis crônicos. Cortisol elevado estimula diretamente o acúmulo de gordura visceral profunda (na barriga) e quebra massa muscular magra.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-7 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-zinc-700 transition-all">
            <div className="text-4xl font-black text-emerald-400 mb-2 font-mono">2x Mais</div>
            <h3 className="text-lg font-bold text-white mb-2">Eficácia Com Método Certo</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Déficit calórico não é punição — é gestão estratégica. Há uma diferença colossal entre passar fome e ensinar o seu corpo a priorizar a queima da gordura estocada preservando sua musculatura.
            </p>
          </div>
        </div>

        {/* Comparison: Moda vs. LEANCODE */}
        <div className="rounded-2xl bg-[#15151D] border border-[#D4AF37]/20 p-6 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              A Diferença Entre o Que Te Disseram e o Que a Ciência Real Comprova
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              Veja por que o LEANCODE não é uma moda passageira, mas um sistema definitivo de transformação corporal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Old Way */}
            <div className="p-6 rounded-xl bg-red-950/20 border border-red-900/30">
              <div className="flex items-center gap-2 mb-4 text-red-400 font-bold text-base">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>O Jeito Tradicional (Dietas da Moda)</span>
              </div>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">&times;</span>
                  <span>Corte severo e abrupto de calorias (passar fome o dia todo)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">&times;</span>
                  <span>Proibição de carboidratos, pães, massas e saídas com amigos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">&times;</span>
                  <span>1 a 2 horas exaustivas de esteira diária (destruição articular)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">&times;</span>
                  <span>Cortisol nas alturas, perda de músculo e flacidez corporal</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">&times;</span>
                  <span>Efeito sanfona inevitável ao término da 3ª ou 4ª semana</span>
                </li>
              </ul>
            </div>

            {/* The LEANCODE Way */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1A1A24] to-[#121218] border border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <div className="flex items-center gap-2 mb-4 text-[#E5C58B] font-bold text-base">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>O Sistema LEANCODE (Ciência & Método)</span>
              </div>
              <ul className="space-y-3 text-sm text-zinc-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] font-bold shrink-0">&check;</span>
                  <span>Déficit flexível leve (300 a 500 kcal) que preserva o metabolismo</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] font-bold shrink-0">&check;</span>
                  <span>Carboidratos inteligentes distribuídos estrategicamente no seu dia</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] font-bold shrink-0">&check;</span>
                  <span>Apenas 2 a 3 treinos inteligentes por semana de 30-40 minutos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] font-bold shrink-0">&check;</span>
                  <span>Proteção hormonal contra o cortisol e construção de tônus muscular</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] font-bold shrink-0">&check;</span>
                  <span>1 refeição livre programada semanal sem culpa e sem ganho de peso</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quote from Chapter 01 */}
          <div className="mt-8 text-center pt-6 border-t border-zinc-800">
            <blockquote className="text-base sm:text-lg italic text-[#E5C58B] font-serif">
              &ldquo;O seu corpo não precisa ser punido. Precisa ser ensinado.&rdquo;
            </blockquote>
            <p className="text-xs text-zinc-400 mt-1 uppercase tracking-widest font-mono">
              Capítulo 01 • LEANCODE
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
