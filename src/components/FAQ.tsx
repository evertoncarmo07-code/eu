import { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown, ChevronUp, Search, MessageSquare, HelpCircle, FileText } from "lucide-react";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const categories = [
    { id: "all", label: "Tudo" },
    { id: "orders", label: "Pedido Mínimo" },
    { id: "products", label: "Sustentabilidade & Onda" },
    { id: "customization", label: "Personalização" },
    { id: "shipping", label: "Prazos e Entregas" },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="py-20 px-4 md:px-6 bg-white scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        
        {/* Intro header */}
        <div className="text-center max-w-lg mx-auto mb-10">
          <span className="text-rlg-dark-blue/60 text-xs font-semibold uppercase tracking-widest bg-rlg-yellow/20 px-3 py-1 rounded-full">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl font-extrabold font-display text-rlg-dark-blue mt-3">
            Perguntas Frequentes
          </h2>
          <p className="text-xs text-gray-500 mt-2">Encontre respostas instantâneas para as perguntas mais comuns de nossos parceiros</p>
        </div>

        {/* Live Search and Pills Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Digite sua dúvida (ex: prazo, mínimo, personalização)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-rlg-bg-light border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-rlg-dark-blue placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rlg-yellow transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? "bg-rlg-yellow text-rlg-dark-blue shadow-sm"
                    : "bg-rlg-bg-light text-gray-400 hover:text-rlg-dark-blue hover:bg-gray-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion container */}
        {filteredFaqs.length > 0 ? (
          <div className="divide-y divide-gray-100 border-t border-b border-gray-100 mb-12">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-4">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-center text-left font-semibold text-sm text-rlg-dark-blue hover:text-rlg-yellow transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle size={15} className="text-rlg-yellow/80 group-hover:text-rlg-yellow shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={16} className="text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown size={16} className="text-gray-400 shrink-0" />
                    )}
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-56 opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p className="text-xs text-rlg-text-gray pl-6 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-rlg-bg-light rounded-xl p-8 text-center border mb-12">
            <FileText size={24} className="text-gray-400 mx-auto mb-2" />
            <p className="text-xs font-semibold text-rlg-dark-blue">Nenhuma dúvida correspondente encontrada</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Experimente digitar outra palavra-chave ou falar direto com nossa equipe.</p>
          </div>
        )}

        {/* Call to action "Fale com a Gente" */}
        <div className="bg-rlg-bg-light rounded-2xl p-6 md:p-8 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-sm font-bold text-rlg-dark-blue uppercase tracking-widest">Ainda tem dúvidas técnicas?</h3>
            <p className="text-xs text-gray-400">Atendimento humanizado instantâneo para sanar qualquer dúvida especial.</p>
          </div>
          <a
            href="https://wa.me/5511996039129?text=Ol%C3%A1%20RLG!%20Li%20o%20FAQ%20do%20site%20mas%20tenho%20uma%20d%C3%BAvida%20especial%20sobre%20minhas/as%20embalagens."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-rlg-yellow text-rlg-dark-blue font-bold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
          >
            <MessageSquare size={14} /> Fale com a Gente
          </a>
        </div>

      </div>
    </section>
  );
}
