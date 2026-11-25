import React from "react";
import { Mail, CheckCircle2, Shield, UserCheck } from "lucide-react";

export const AuthorSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0C0C10] border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Card of Letter from Author */}
        <div className="rounded-2xl bg-[#121217] border border-[#D4AF37]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle watermark */}
          <div className="absolute top-6 right-6 opacity-10 pointer-events-none">
            <Mail className="w-24 h-24 text-[#D4AF37]" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-6">
            <Mail className="w-3.5 h-3.5" />
            <span>Introdução Oficial • Uma Carta Para Você</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
            &ldquo;Este não é um livro de motivação. É um manual de instruções para o seu corpo.&rdquo;
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            <p>
              Se você chegou até aqui, é porque já tentou. Talvez múltiplas vezes. Dietas que prometiam tudo e entregavam apenas frustração e fome. Treinos extenuantes que você abandonou depois de duas semanas. A sensação amarga de que o problema está em você — na sua falta de força de vontade, na sua genética ou no seu metabolismo.
            </p>
            <p className="text-white font-semibold text-base sm:text-lg">
              Não está. O problema está no método. Ou melhor: na ausência dele.
            </p>
            <p>
              O <strong>LEANCODE</strong> não é mais um programa de dieta da moda. É um sistema. Um protocolo construído rigorosamente sobre o que a biologia e a ciência real comprovam sobre o corpo humano — sem restrições absurdas, sem privação social e sem promessas impossíveis.
            </p>
            <p>
              Você vai aprender exatamente como o seu corpo funciona, por que ele acumula gordura como mecanismo de sobrevivência, e quais as alavancas fisiológicas exatas que você precisa acionar para queimar essa gordura de forma definitiva.
            </p>
            <p className="text-[#E5C58B] font-medium pt-2 italic">
              Bem-vindo ao seu código. Quem tem método não improvisa. E não desiste.
            </p>
          </div>

          {/* Author Signature Box */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">O Autor</h4>
              <p className="text-xs text-[#C5A880] font-medium mt-0.5">
                Especialista em Transformação Corporal • Coach e Pesquisador de Nutrição Funcional
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span>LEANCODE • O Método. Não a Moda.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
