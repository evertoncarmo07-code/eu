import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show inviting message bubble after 3.5s
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const text = "Olá RLG Embalagens! Acessei o site de vocês e gostaria de solicitar uma cotação rápida para caixas de papelão.";
    window.open(`https://wa.me/5511996039129?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Invite Tooltip balloon */}
      {showTooltip && (
        <div className="bg-white text-rlg-dark-blue p-3 rounded-xl shadow-2xl border border-gray-100 max-w-[200px] mb-2 mr-2 animate-in fade-in slide-in-from-bottom-2 duration-300 relative pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-1 right-1 text-gray-300 hover:text-black p-0.5 rounded-full"
            title="Fechar dica"
          >
            <X size={12} />
          </button>
          
          <p className="text-[10px] font-extrabold text-green-600 uppercase tracking-widest flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span> Online agora
          </p>
          <p className="text-xs text-rlg-text-gray font-medium leading-tight mt-1">
            Precisa de ajuda com tamanhos ou quer um preço rápido? Chame no zap! 👇
          </p>
          {/* Quote tail */}
          <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45"></div>
        </div>
      )}

      {/* Primary Floating action button */}
      <button
        onClick={handleClick}
        className="pointer-events-auto bg-green-500 hover:bg-green-600 active:scale-95 text-white p-4 rounded-full shadow-2xl select-none hover:shadow-green-500/20 transition-all cursor-pointer relative group flex items-center justify-center"
        aria-label="Atendimento via WhatsApp"
      >
        {/* Radar ping border */}
        <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></span>
        
        <MessageCircle size={26} className="relative z-10 shrink-0 group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  );
}
