import React from "react";
import { FAQS, HOTMART_CHECKOUT_URL } from "@/lib/constants";
import { HelpCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-[#09090D] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-zinc-400">
            Tudo o que você precisa saber antes de dar o próximo passo na sua transformação física.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="rounded-2xl bg-[#121217] border border-zinc-800 p-6 sm:p-8 shadow-xl mb-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border border-zinc-800/80 rounded-xl px-4 bg-zinc-900/40 data-[state=open]:border-[#D4AF37]/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-sm sm:text-base text-white hover:text-[#E5C58B] hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-zinc-300 leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-[#17140B] via-[#211A0D] to-[#17140B] border border-[#D4AF37]/30">
          <h3 className="text-xl font-bold text-white mb-2">
            Ainda com alguma dúvida?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto mb-5">
            Lembre-se: com a nossa garantia de 7 dias, você não corre risco algum. Você pode entrar, ler todo o conteúdo e só então decidir se o método é para você.
          </p>
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-black shadow-lg hover:scale-105 transition-all"
          >
            <span>COMEÇAR MINHA TRANSFORMAÇÃO POR US$ 7</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
