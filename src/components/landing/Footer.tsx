import React from "react";
import { Logo } from "@/components/brand/Logo";
import { HOTMART_CHECKOUT_URL } from "@/lib/constants";
import { ShieldCheck, Lock, Check } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070709] border-t border-white/[0.08] pt-16 pb-24 lg:pb-16 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-800">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo size="md" />
            <p className="mt-3 text-xs text-zinc-400 max-w-sm">
              O método definitivo de transformação corporal e queima de gordura em 12 semanas. Sem dietas radicais, sem perda de tempo.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400 text-xs">
            <a href="#problema" className="hover:text-[#D4AF37] transition-colors">
              O Problema
            </a>
            <a href="#pilares" className="hover:text-[#D4AF37] transition-colors">
              Os 3 Pilares
            </a>
            <a href="#cronograma" className="hover:text-[#D4AF37] transition-colors">
              12 Semanas
            </a>
            <a href="#capitulos" className="hover:text-[#D4AF37] transition-colors">
              Capítulos
            </a>
            <a href="#faq" className="hover:text-[#D4AF37] transition-colors">
              Dúvidas
            </a>
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] font-bold hover:underline"
            >
              Comprar por US$ 7 &rarr;
            </a>
          </div>
        </div>

        {/* Security & Trust Row */}
        <div className="py-8 flex flex-wrap items-center justify-center gap-8 text-[11px] text-zinc-400 border-b border-zinc-900">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Pagamento 100% Criptografado & Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Processado Oficialmente pela Hotmart</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Garantia de Satisfação de 7 Dias</span>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 text-center space-y-3">
          <p className="text-[11px] text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Aviso Legal: Os resultados podem variar de acordo com o metabolismo, dedicação e histórico individual de cada pessoa. As orientações contidas neste e-book têm finalidade educacional e não substituem consultas, diagnósticos ou tratamentos médicos ou nutricionais individualizados.
          </p>

          <p className="text-zinc-400 text-[11px]">
            &copy; {new Date().getFullYear()} LEANCODE. Todos os direitos reservados. leancode.com
          </p>
        </div>

      </div>
    </footer>
  );
};
