import React from "react";
import { Check, X, Users } from "lucide-react";

export const TargetAudience: React.FC = () => {
  return (
    <section id="publico" className="py-20 bg-[#0C0C10] border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Alinhamento & Transparência</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Este Método É Para Você?
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            O LEANCODE não foi feito para todo mundo. Queremos ao nosso lado apenas pessoas prontas para aplicar a ciência e obter resultados definitivos.
          </p>
        </div>

        {/* 2-Column Grid: For You vs. Not For You */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* FOR YOU */}
          <div className="p-8 rounded-2xl bg-[#131713] border border-emerald-500/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500/20">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">O LEANCODE É Para Você Se:</h3>
                <span className="text-xs text-emerald-400 font-medium">Perfil Ideal de Sucesso</span>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-zinc-200">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>Já tentou dietas malucas, perdeu peso e recuperou tudo logo depois (cansou do efeito sanfona).</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>Tem uma rotina corrida (trabalho, família, estudos) e só dispõe de 30 a 40 minutos para treinar 2 a 3x por semana.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>Não quer abrir mão de uma pizza ou hambúrguer no fim de semana e quer aprender a incluir isso sem engordar.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>Quer queimar gordura de forma definitiva preservando ou construindo tônus muscular magro.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>Valoriza ciência comprovada, disciplina inteligente e prefere um manual passo a passo a modismos passageiros.</span>
              </li>
            </ul>
          </div>

          {/* NOT FOR YOU */}
          <div className="p-8 rounded-2xl bg-[#191313] border border-red-500/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-500/20">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                <X className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">O LEANCODE NÃO É Para Você Se:</h3>
                <span className="text-xs text-red-400 font-medium">Por favor, não adquira o ebook se você:</span>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                <span>Está procurando pílulas mágicas, chás milagrosos ou receitas de emagrecimento em 48 horas.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                <span>Acredita que passar fome extrema ou cortar carboidratos a zero é a única maneira de secar o corpo.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                <span>Não tem a intenção de ler o manual e quer resultados sem aplicar os passos práticos recomendados.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                <span>Prefere culpar a genética ou a sorte em vez de assumir a responsabilidade sobre o próprio método diário.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
