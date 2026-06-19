import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, Send, Check, Sparkles, HelpCircle } from "lucide-react";

export default function BudgetCalculator() {
  const [length, setLength] = useState<number>(30);
  const [width, setWidth] = useState<number>(20);
  const [height, setHeight] = useState<number>(15);
  const [quantity, setQuantity] = useState<number>(200);
  const [boxType, setBoxType] = useState<string>("Caixa Maleta Convencional");
  const [waveType, setWaveType] = useState<string>("Onda Simples (B/C)");

  // Live price & spec evaluation
  const calculateVolume = () => {
    return ((length * width * height) / 1000).toFixed(1); // litres
  };

  const calculateArea = () => {
    // Surface area of a standard open-box style layout approximation in m2:
    // 2 * (L*W + L*H + W*H) / 10000
    const m2 = (2 * (length * width + length * height + width * height)) / 10000;
    return m2;
  };

  const estimatePrice = () => {
    const area = calculateArea();
    const waveCoeff = waveType.includes("Dupla") ? 2.8 : 1.6;
    const typeCoeff = boxType.includes("Auto-Montável") ? 1.4 : 1.0;
    
    // Base unit cost calculation
    let unitPrice = (area * waveCoeff * typeCoeff) + 0.8;
    
    // Bulk volume discounts
    if (quantity >= 1000) {
      unitPrice *= 0.75; // 25% discount
    } else if (quantity >= 500) {
      unitPrice *= 0.85; // 15% discount
    } else if (quantity >= 300) {
      unitPrice *= 0.92; // 8% discount
    }

    return Math.max(1.85, unitPrice).toFixed(2);
  };

  const formattedPrice = estimatePrice();
  const totalPrice = (parseFloat(formattedPrice) * quantity).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleWhatsAppSend = () => {
    const text = `Olá RLG Embalagens! Gostaria de solicitar um orçamento formal com base na simulação do site:
    
📦 *Detalhes da Embalagem:*
• *Tipo:* ${boxType}
• *Onda:* ${waveType}
• *Dimensões:* ${length} x ${width} x ${height} cm (Comprimento x Largura x Altura)
• *Volume Estimado:* ${calculateVolume()} Litros
• *Quantidade:* ${quantity} unidades
• *Estimativa Unitária:* R$ ${formattedPrice}

Por favor, entrem em contato para me enviarem a proposta e combinarmos as amostras. Obrigado!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5511996039129?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="orcamento" class="py-16 px-6 bg-gradient-to-b from-rlg-bg-light to-white scroll-mt-16">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-10">
          <span class="text-rlg-dark-blue/60 text-xs font-semibold uppercase tracking-widest bg-rlg-yellow/20 px-3 py-1 rounded-full">
            Simulador de Caixas
          </span>
          <h2 class="text-2xl md:text-3xl font-bold text-rlg-dark-blue mt-3 font-display">
            Simule seu Orçamento Sob Medida
          </h2>
          <p class="text-sm text-gray-500 mt-2 max-w-lg mx-auto">
            Ajuste as especificações abaixo para obter uma prévia do volume e valor estimado para o seu lote customizado.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Controls Form */}
          <div class="p-6 md:p-8 md:col-span-7 space-y-6">
            <div>
              <label class="block text-xs font-bold text-rlg-dark-blue uppercase tracking-wider mb-2">
                1. Tipo de Embalagem
              </label>
              <select
                value={boxType}
                onChange={(e) => setBoxType(e.target.value)}
                class="w-full bg-rlg-bg-light border border-gray-200 rounded-lg p-3 text-sm text-rlg-dark-blue focus:outline-none focus:ring-2 focus:ring-rlg-yellow"
              >
                <option value="Caixa Maleta Convencional">Caixa Maleta Convencional</option>
                <option value="Caixa Auto-Montável Especiais">Caixa Auto-Montável Especiais</option>
                <option value="Caixa com Tampa e Fundo">Caixa com Tampa e Fundo</option>
                <option value="Chapas / Protetores">Chapa / Placa Separadora</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-rlg-dark-blue uppercase tracking-wider mb-2">
                2. Espessura do Papelão (Onda)
              </label>
              <div class="grid grid-cols-2 gap-3">
                {[
                  { name: "Onda Simples (B/C)", desc: "Ideais até 10kg" },
                  { name: "Onda Dupla (BC)", desc: "Super resistente >15kg" }
                ].map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setWaveType(item.name)}
                    class={`p-3 rounded-lg border text-left flex flex-col justify-between transition-all ${
                      waveType === item.name
                        ? "border-rlg-yellow bg-rlg-yellow/5 ring-1 ring-rlg-yellow"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <span class="text-xs font-semibold text-rlg-dark-blue">{item.name}</span>
                    <span class="text-[10px] text-gray-400 mt-1">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-rlg-dark-blue uppercase tracking-wider mb-2">
                3. Dimensões Internas (cm)
              </label>
              <div class="grid grid-cols-3 gap-3">
                <div>
                  <span class="text-[10px] text-gray-400 font-medium block mb-1">Comprimento</span>
                  <input
                    type="number"
                    min="10"
                    max="150"
                    value={length}
                    onChange={(e) => setLength(Math.max(10, parseInt(e.target.value) || 0))}
                    class="w-full bg-rlg-bg-light border border-gray-200 rounded-lg p-2.5 text-xs text-center text-rlg-dark-blue focus:outline-none focus:ring-2 focus:ring-rlg-yellow"
                  />
                </div>
                <div>
                  <span class="text-[10px] text-gray-400 font-medium block mb-1">Largura</span>
                  <input
                    type="number"
                    min="10"
                    max="150"
                    value={width}
                    onChange={(e) => setWidth(Math.max(10, parseInt(e.target.value) || 0))}
                    class="w-full bg-rlg-bg-light border border-gray-200 rounded-lg p-2.5 text-xs text-center text-rlg-dark-blue focus:outline-none focus:ring-2 focus:ring-rlg-yellow"
                  />
                </div>
                <div>
                  <span class="text-[10px] text-gray-400 font-medium block mb-1">Altura</span>
                  <input
                    type="number"
                    min="5"
                    max="100"
                    value={height}
                    onChange={(e) => setHeight(Math.max(5, parseInt(e.target.value) || 0))}
                    class="w-full bg-rlg-bg-light border border-gray-200 rounded-lg p-2.5 text-xs text-center text-rlg-dark-blue focus:outline-none focus:ring-2 focus:ring-rlg-yellow"
                  />
                </div>
              </div>
            </div>

            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-bold text-rlg-dark-blue uppercase tracking-wider">
                  4. Quantidade de Caixas
                </label>
                <span class="text-xs font-semibold text-rlg-dark-blue bg-rlg-yellow/10 px-2 py-0.5 rounded">
                  Min: 100 un.
                </span>
              </div>
              <div class="flex items-center space-x-4">
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  class="w-full accent-rlg-yellow h-2 bg-gray-100 rounded-lg cursor-pointer"
                />
                <input
                  type="number"
                  min="100"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(100, parseInt(e.target.value) || 100))}
                  class="w-24 bg-rlg-bg-light border border-gray-200 rounded-lg p-2 text-center text-xs font-bold text-rlg-dark-blue focus:outline-none focus:ring-2 focus:ring-rlg-yellow"
                />
              </div>
              {/* Discount scale indicator */}
              <div class="flex justify-between text-[9px] text-gray-400 mt-2">
                <span>100-299 un (Padrão)</span>
                <span class={quantity >= 300 ? "text-green-600 font-semibold" : ""}>300+ un (-8%)</span>
                <span class={quantity >= 500 ? "text-green-600 font-semibold" : ""}>500+ un (-15%)</span>
                <span class={quantity >= 1000 ? "text-green-600 font-semibold" : ""}>1000+ un (-25%)</span>
              </div>
            </div>
          </div>

          {/* Pricing Results Panel */}
          <div class="bg-rlg-dark-blue text-white p-6 md:p-8 md:col-span-5 flex flex-col justify-between relative">
            <div class="absolute top-0 right-0 p-4 opacity-5">
              <Calculator size={150} />
            </div>

            <div class="relative z-10 space-y-6">
              <h3 class="text-sm font-bold text-rlg-yellow uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles size={16} /> Resumo Prévio
              </h3>

              <div class="space-y-4">
                <div class="flex justify-between border-b border-white/10 pb-3">
                  <span class="text-xs text-gray-300">Tipo de Caixa:</span>
                  <span class="text-xs font-bold text-white text-right max-w-[150px] truncate">{boxType}</span>
                </div>
                <div class="flex justify-between border-b border-white/10 pb-3">
                  <span class="text-xs text-gray-300">Medidas:</span>
                  <span class="text-xs font-bold text-white">{length}x{width}x{height} cm</span>
                </div>
                <div class="flex justify-between border-b border-white/10 pb-3">
                  <span class="text-xs text-gray-300">Volume Total:</span>
                  <span class="text-xs font-bold text-white">{calculateVolume()} Litros</span>
                </div>
                <div class="flex justify-between border-b border-white/10 pb-3">
                  <span class="text-xs text-gray-300">Qtd Solicitada:</span>
                  <span class="text-xs font-bold text-white">{quantity} unidades</span>
                </div>
                <div class="flex justify-between border-b border-white/10 pb-4">
                  <span class="text-xs text-gray-300">Estimativa Unitária:</span>
                  <span class="text-sm font-bold text-rlg-yellow">R$ {formattedPrice}</span>
                </div>
              </div>

              <div class="pt-2 text-center md:text-left">
                <p class="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-semibold">Valor Total Estimado</p>
                <p class="text-3xl font-extrabold font-display text-white tracking-tight">{totalPrice}</p>
                <div class="flex items-center gap-1 justify-center md:justify-start mt-2 text-[10px] text-green-400 font-semibold uppercase">
                  <Check size={12} /> Desconto de lote aplicado
                </div>
              </div>
            </div>

            <div class="relative z-10 pt-8">
              <button
                onClick={handleWhatsAppSend}
                class="w-full bg-rlg-yellow text-rlg-dark-blue font-bold px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <Send size={15} /> Solicitar Proposta Oficial
              </button>
              <p class="text-[9px] text-gray-400 text-center mt-2.5 italic">
                *Simulação não vinculativa. Sujeito a alteração de clichê/faca se houver necessidade de nova ferramentaria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
