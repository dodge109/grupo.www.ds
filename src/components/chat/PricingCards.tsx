import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PricingCards = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const plans = [
    {
      name: "Plano 15 Dias ⏱️",
      benefits: "✅ 100 vídeos exclusivos\n✅ 245 fotos de mulheres gostosas 🍑",
      price: "3.500 Kz",
      link: "https://pay.clickpayon.com/398a2197-213d-47d7-bd33-8e80f0f71f1c",
      highlight: false,
    },
    {
      name: "Plano 1 Mês 🔥",
      benefits: "✅ 1.000 vídeos e 2.500 fotos\n✅ Conteúdos actualizados diariamente 🔄\n✅ 1 conteúdo personalizado de uma gostosa de sua preferência ✨",
      price: "5.000 Kz",
      link: "https://pay.clickpayon.com/cdeac4e6-4024-43bf-b429-f36793750213",
      highlight: false,
    },
    {
      name: "Conteúdo Vitalício 💎",
      benefits: "✅ 20.000 fotos e vídeos\n✅ Conteúdos actualizados todos os dias 📅\n✅ Vazados nacionais em primeira mão 🇦🇴\n✅ Opção chat de encontros com garotas gostosas 💬\n✅ Vazados de brasileiras 🇧🇷\n✅ 2 vídeo chamadas hots com gostosas de sua preferência 🔥",
      price: "10.000 Kz",
      link: "https://pay.clickpayon.com/5ecfb8fe-32c9-41db-ac1c-67780df320e6",
      highlight: true,
      badge: "MAIS ESCOLHIDO 🔥"
    },
  ];

  const handleCheckout = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="animate-slide-up space-y-6 w-full max-w-[320px] mx-auto pb-6">
      {plans.map((plan, i) => (
        <motion.div
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.3 }}
          className="flex flex-col gap-2 relative"
        >
          {plan.badge && (
            <div className="absolute -top-3 right-0 z-10 bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg border border-white/20 animate-bounce">
              {plan.badge}
            </div>
          )}

          {/* Benefit Message */}
          <div className="bg-telegram-bubble-bot rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-white/5">
            <h3 className="text-primary font-bold text-sm mb-2">{plan.name}</h3>
            <p className="text-foreground/90 text-[13px] leading-relaxed whitespace-pre-line font-medium">
              {plan.benefits}
            </p>
          </div>

          {/* Blur Price Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCheckout(plan.link)}
            className={`w-full py-4 rounded-xl font-black text-xl backdrop-blur-md border shadow-xl transition-all cursor-pointer active:shadow-inner ${plan.highlight
              ? "bg-telegram-green text-foreground border-white/30 shadow-green-500/20"
              : "bg-primary/20 border-primary/30 text-primary-foreground hover:bg-primary/30"
              }`}
          >
            {plan.price}
          </motion.button>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="bg-destructive/10 border border-destructive/30 rounded-2xl p-4 text-center backdrop-blur-sm"
      >
        <p className="text-destructive text-xs font-bold mb-3 uppercase tracking-wider">
          ⚠️ Só temos 7 vagas neste momento!
        </p>
        <div className="flex justify-center items-center gap-2">
          <div className="bg-destructive text-white font-mono font-black text-2xl px-3 py-1 rounded-xl shadow-lg">
            {String(minutes).padStart(2, "0")}
          </div>
          <span className="text-destructive text-2xl font-black animate-pulse">:</span>
          <div className="bg-destructive text-white font-mono font-black text-2xl px-3 py-1 rounded-xl shadow-lg">
            {String(seconds).padStart(2, "0")}
          </div>
        </div>
        <p className="text-destructive/70 text-[10px] mt-3 font-medium">
          A sua oportunidade expira quando o relógio zerar! ⏰
        </p>
      </motion.div>

      <p className="text-muted-foreground/60 text-[11px] text-center italic">
        Acesso imediato após confirmação do pagamento ✅
      </p>
    </div>
  );
};

export default PricingCards;

