import React, { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { HOTMART_CHECKOUT_URL } from "@/lib/constants";
import { ArrowRight, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "O Problema", href: "#problema" },
    { label: "Os 3 Pilares", href: "#pilares" },
    { label: "12 Semanas", href: "#cronograma" },
    { label: "Capítulos", href: "#capitulos" },
    { label: "Para Quem É", href: "#publico" },
    { label: "Dúvidas", href: "#faq" },
  ];

  return (
    <nav className="w-full bg-[#09090B]/90 backdrop-blur-md border-b border-white/[0.06] sticky top-[33px] sm:top-[33px] z-40 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Logo size="md" />
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-[#D4AF37] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Header Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] via-[#E5C58B] to-[#C5A880] text-black shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_28px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>QUERO MEU ACESSO</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D12] border-b border-[#D4AF37]/20 px-6 py-5 flex flex-col gap-4 animate-accordion-down">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-200 hover:text-[#D4AF37] py-1 border-b border-zinc-800/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-black shadow-lg"
          >
            ACESSAR POR APENAS US$ 7
          </a>
        </div>
      )}
    </nav>
  );
};
