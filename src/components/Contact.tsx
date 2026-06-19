import React, { useState } from "react";
import { MapPin, Phone, MessageSquare, Mail, Calendar, Clock, Check, Send, AlertCircle } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Orçamento de Caixas");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate API posting
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset inputs
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Automatically hide success alert after 5s
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleQuickWhatsApp = () => {
    const text = `Olá RLG Embalagens! Vim através da página de contato do site e gostaria de falar com um vendedor sobre orçamento de caixas.`;
    window.open(`https://wa.me/5511996039129?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 px-4 md:px-6 bg-rlg-bg-light scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-rlg-dark-blue/60 text-xs font-semibold uppercase tracking-widest bg-rlg-yellow/20 px-3 py-1 rounded-full">
                Canais de Atendimento
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-rlg-dark-blue">
                Fale Conosco
              </h2>
              <p className="text-sm text-gray-500 max-w-sm">
                Estamos prontos para atender seu projeto corporativo. Escolha seu canal predileto ou nos envie uma mensagem rápida.
              </p>
            </div>

            {/* List details */}
            <div className="space-y-4">
              
              {/* Address card */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow transition-shadow">
                <div className="bg-rlg-yellow/10 p-3 rounded-lg text-rlg-yellow shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-rlg-dark-blue uppercase tracking-widest">Endereço de Produção</h3>
                  <p className="text-xs text-rlg-text-gray mt-1 leading-normal">
                    Rua São Domingos, 120 - Chácaras São Marcos,<br />
                    Embu das Artes - SP, CEP: 06814-365
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rua+S%C3%A3o+Domingos+120+Ch%C3%A1caras+S%C3%A3o+Marcos+Embu+das+Artes"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-rlg-dark-blue hover:text-rlg-yellow font-bold uppercase tracking-wider block mt-2"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>

              {/* Phones and Messenger */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow transition-shadow">
                <div className="bg-rlg-yellow/10 p-3 rounded-lg text-rlg-yellow shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-rlg-dark-blue uppercase tracking-widest">Telefone Comercial</h3>
                  <a href="tel:1155139593" className="block text-sm font-bold text-rlg-dark-blue hover:text-rlg-yellow transition mt-1">
                    (11) 5513-9593
                  </a>
                </div>
              </div>

              {/* WhatsApp instant access */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow transition-shadow">
                <div className="bg-green-500/10 p-3 rounded-lg text-green-600 shrink-0">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-green-700 uppercase tracking-widest">WhatsApp Corporativo</h3>
                  <a
                    href="https://wa.me/5511996039129"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm font-bold text-green-600 hover:text-green-700 transition mt-1"
                  >
                    (11) 99603-9129
                  </a>
                  <p className="text-[10px] text-gray-400 mt-1">Clique para iniciar bate-papo imediato.</p>
                </div>
              </div>

              {/* Email details */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow transition-shadow">
                <div className="bg-rlg-yellow/10 p-3 rounded-lg text-rlg-yellow shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-rlg-dark-blue uppercase tracking-widest">E-mail Comercial</h3>
                  <a href="mailto:vendas@rlgembalagens.com.br" className="block text-sm font-bold text-rlg-text-gray hover:text-rlg-dark-blue transition mt-1">
                    vendas@rlgembalagens.com.br
                  </a>
                </div>
              </div>

            </div>

            {/* Operating Hours Callout */}
            <div className="bg-rlg-dark-blue text-white p-5 rounded-2xl border border-white/10 flex items-center gap-4">
              <Clock className="text-rlg-yellow shrink-0" size={32} />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Horário de Funcionamento</p>
                <p className="text-xs text-gray-300 mt-1">Segunda a Sexta-Feira: 08:00h às 17h30h</p>
                <p className="text-[10px] text-yellow-300 mt-0.5">Sábados e domingos: Fechado (Envie WhatsApp)</p>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive message box form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-lg font-bold text-rlg-dark-blue font-display mb-2">Envie-nos uma Mensagem Direta</h3>
            <p className="text-xs text-gray-400 mb-6">Nossos engenheiros e consultores comerciais responderão com as cotações desejadas em até 2 horas úteis.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-rlg-dark-blue mb-1">Seu Nome *</label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome completo"
                    className="w-full bg-rlg-bg-light border border-gray-200 rounded-lg p-3 text-xs text-rlg-dark-blue focus:outline-none focus:ring-1 focus:ring-rlg-yellow transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-rlg-dark-blue mb-1">E-mail Corporativo *</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@empresa.com"
                    className="w-full bg-rlg-bg-light border border-gray-200 rounded-lg p-3 text-xs text-rlg-dark-blue focus:outline-none focus:ring-1 focus:ring-rlg-yellow transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-rlg-dark-blue mb-1">Telefone / Celular</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-rlg-bg-light border border-gray-200 rounded-lg p-3 text-xs text-rlg-dark-blue focus:outline-none focus:ring-1 focus:ring-rlg-yellow transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-rlg-dark-blue mb-1">Assunto do Contato</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-rlg-bg-light border border-gray-200 rounded-lg p-3 text-xs text-rlg-dark-blue focus:outline-none focus:ring-1 focus:ring-rlg-yellow transition-all"
                  >
                    <option value="Orçamento de Caixas">Orçamento de Caixas</option>
                    <option value="Dúvidas Tecnicas">Dúvidas Técnicas Papelão</option>
                    <option value="Parceria de Distribuição">Parceria Comercial</option>
                    <option value="Outros">Outras Solicitações</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-rlg-dark-blue mb-1">Mensagem ou Dimensões Desejadas *</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Se possível, nos informe as medidas (Comprimento x Largura x Altura) e quantidade do seu projeto de caixas..."
                  className="w-full bg-rlg-bg-light border border-gray-200 rounded-lg p-3 text-xs text-rlg-dark-blue focus:outline-none focus:ring-1 focus:ring-rlg-yellow transition-all"
                />
              </div>

              {/* Status Alert messaging */}
              {submitted && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <Check size={18} className="text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-bold">Obrigado pelo seu contato!</p>
                    <p className="text-[11px] text-emerald-600/90 mt-0.5">Mensagem protocolada com sucesso. Nossa equipe entrará em contato em breve.</p>
                  </div>
                </div>
              )}

              {/* Buttons grouping */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-rlg-dark-blue hover:bg-opacity-95 text-white font-bold px-6 py-3 rounded-lg text-xs flex items-center justify-center gap-2 transition active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Processando..."
                  ) : (
                    <>
                      Enviar Cotação <Send size={13} />
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleQuickWhatsApp}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg text-xs flex items-center justify-center gap-2 transition active:scale-95"
                >
                  <MessageSquare size={13} /> Chamar no WhatsApp Comercial
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
