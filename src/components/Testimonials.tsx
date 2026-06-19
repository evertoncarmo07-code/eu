import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "../data";
import { Testimonial } from "../types";
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote, Check, Plus, AlertCircle, Award } from "lucide-react";

export default function Testimonials() {
  const [list, setList] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Review form state
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("rlg_testimonials");
    if (saved) {
      try {
        setList(JSON.parse(saved));
      } catch (e) {
        setList(TESTIMONIALS);
      }
    } else {
      setList(TESTIMONIALS);
    }
  }, []);

  const saveList = (newList: Testimonial[]) => {
    setList(newList);
    localStorage.setItem("rlg_testimonials", JSON.stringify(newList));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newText) return;

    const added: Testimonial = {
      id: "cust-" + Date.now().toString(),
      name: newName,
      role: newRole || "Cliente Parceiro",
      rating: newRating,
      text: newText,
      date: new Date().toLocaleDateString("pt-BR")
    };

    const updated = [added, ...list];
    saveList(updated);
    
    // reset form
    setNewName("");
    setNewRole("");
    setNewRating(5);
    setNewText("");
    setSuccessMsg(true);
    setActiveIndex(0); // show the new item immediately

    setTimeout(() => {
      setSuccessMsg(false);
      setShowForm(false);
    }, 4000);
  };

  const activeReview = list[activeIndex] || TESTIMONIALS[0];

  return (
    <section id="avaliacoes" className="py-20 px-4 md:px-6 bg-rlg-bg-light scroll-mt-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header summary */}
        <div className="text-center max-w-lg mx-auto mb-12">
          <span className="text-rlg-dark-blue/60 text-xs font-semibold uppercase tracking-widest bg-rlg-yellow/20 px-3 py-1 rounded-full">
            Satisfação do Cliente
          </span>
          <h2 className="text-3xl font-extrabold font-display text-rlg-dark-blue mt-3">
            Avaliações de Clientes
          </h2>
          
          <div className="flex justify-center items-center gap-1.5 mt-3 bg-white w-fit mx-auto px-4 py-2 rounded-full shadow-sm border border-gray-100">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="fill-rlg-yellow text-rlg-yellow" size={16} />
            ))}
            <span className="font-bold text-rlg-dark-blue text-sm ml-1">4.9 / 5</span>
            <span className="text-gray-400 text-xs">Based on reviews</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">Confira depoimentos reais de empresas e empreendedores parceiros</p>
        </div>

        {/* Dynamic Carousel Frame */}
        {list.length > 0 && (
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100/60 relative">
            
            {/* Quote watermark decorative bubble */}
            <Quote className="absolute right-8 top-8 text-rlg-dark-blue/5" size={80} />

            <div className="relative z-10 space-y-6">
              {/* Star score display */}
              <div className="flex text-rlg-yellow gap-1">
                {Array.from({ length: activeReview.rating }).map((_, i) => (
                  <Star key={i} className="fill-rlg-yellow" size={16} />
                ))}
              </div>

              {/* Review text block */}
              <blockquote className="text-sm sm:text-base md:text-lg italic text-rlg-dark-blue leading-relaxed font-medium">
                "{activeReview.text}"
              </blockquote>

              {/* Author profile metrics info */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rlg-dark-blue/10 text-rlg-dark-blue font-bold flex items-center justify-center text-sm border-2 border-rlg-yellow/30">
                    {activeReview.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-rlg-dark-blue">{activeReview.name}</h4>
                    <p className="text-[11px] text-gray-400 font-medium">{activeReview.role}</p>
                  </div>
                </div>

                <div className="text-[10px] text-gray-400 font-bold">{activeReview.date}</div>
              </div>
            </div>

            {/* Carousel navigation paddles */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[-18px] md:left-[-24px]">
              <button
                onClick={handlePrev}
                className="bg-white text-rlg-dark-blue border border-gray-100 p-2.5 rounded-full shadow-lg hover:bg-rlg-yellow hover:text-rlg-dark-blue transition-all active:scale-95"
                title="Depoimento Anterior"
              >
                <ChevronLeft size={16} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-[-18px] md:right-[-24px]">
              <button
                onClick={handleNext}
                className="bg-white text-rlg-dark-blue border border-gray-100 p-2.5 rounded-full shadow-lg hover:bg-rlg-yellow hover:text-rlg-dark-blue transition-all active:scale-95"
                title="Próximo Depoimento"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Testimonial slider indicators dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {list.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === idx ? "w-6 bg-rlg-dark-blue" : "w-2 bg-gray-300"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Trigger to leave your review */}
        <div className="text-center mt-12 bg-white/40 p-6 rounded-2xl border border-gray-200/50 backdrop-blur-sm max-w-md mx-auto">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-rlg-dark-blue bg-rlg-yellow hover:bg-yellow-400 px-5 py-3 rounded-lg transition shadow-md"
            >
              <Plus size={14} /> Deixar Meu Depoimento
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="text-left space-y-4">
              <h3 className="text-sm font-bold text-rlg-dark-blue border-b border-gray-100 pb-2 flex items-center gap-1">
                <MessageSquare size={16} className="text-rlg-yellow" /> Compartilhe sua Experiência
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Seu Nome *</label>
                  <input
                    required
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Ex: João da Silva"
                    className="w-full bg-white border border-gray-200 rounded-lg p-2 text-xs text-rlg-dark-blue focus:outline-none focus:ring-1 focus:ring-rlg-yellow"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Cargo / Empresa</label>
                  <input
                    type="text"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    placeholder="Ex: Diretor, Mercado S"
                    className="w-full bg-white border border-gray-200 rounded-lg p-2 text-xs text-rlg-dark-blue focus:outline-none focus:ring-1 focus:ring-rlg-yellow"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Nota da RLGMelo</label>
                <div className="flex gap-1.5 items-center">
                  {[1, 2, 3, 4, 5].map((stars) => (
                    <button
                      key={stars}
                      type="button"
                      onClick={() => setNewRating(stars)}
                      className="p-1 focus:outline-none transition-transform active:scale-125"
                    >
                      <Star
                        className={stars <= newRating ? "fill-rlg-yellow text-rlg-yellow" : "text-gray-300"}
                        size={18}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-semibold text-gray-500 ml-2">{newRating} / 5</span>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Depoimento *</label>
                <textarea
                  required
                  rows={3}
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder="Conte-nos como foi a qualidade e entrega do seu lote de caixas de papelão..."
                  className="w-full bg-white border border-gray-200 rounded-lg p-2 text-xs text-rlg-dark-blue focus:outline-none focus:ring-1 focus:ring-rlg-yellow"
                />
              </div>

              {successMsg && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg text-xs flex items-center gap-1.5">
                  <Check size={16} /> Seu depoimento foi publicado com sucesso! Obrigado pela parceria.
                </div>
              )}

              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-xs font-medium text-gray-500 hover:text-black py-1.5 px-3 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-rlg-dark-blue hover:bg-rlg-yellow hover:text-rlg-dark-blue text-white font-bold text-xs py-1.5 px-4 rounded-lg transition"
                >
                  Enviar
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
