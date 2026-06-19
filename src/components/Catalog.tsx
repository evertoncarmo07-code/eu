import { useState } from "react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { Search, Sparkles, Filter, ShieldCheck, Mail, ArrowRight, MessageSquare, Info, X } from "lucide-react";

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: "all", label: "Ver Todos" },
    { id: "standard", label: "Maletas Convencionais" },
    { id: "special", label: "Modelos Especiais" },
    { id: "partitions", label: "Divisórias e Chapas" },
    { id: "folders", label: "Bobinas e Maletas Alça" }
  ];

  // Filtering products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeTab === "all" || product.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  const getWhatsAppLink = (product: Product) => {
    const text = `Olá RLG Embalagens! Vi no site o produto *${product.name}* e gostaria de solicitar um orçamento.

• *Categoria:* ${product.category.toUpperCase()}
• *Quantidade sugerida:* ${product.minQuantity} un.
• *Ideal para:* o frete e proteção do meu negócio.

Pode me ajudar com as dimensões sob medida?`;
    return `https://wa.me/5511996039129?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="produtos" className="py-20 px-4 md:px-6 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-rlg-dark-blue/60 text-xs font-semibold uppercase tracking-widest bg-rlg-yellow/20 px-3 py-1 rounded-full">
            Nosso Catálogo
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-rlg-dark-blue mt-3 font-display tracking-tight">
            Soluções Completas em Papelão Ondulado
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Do simples ao mais delicado produto, temos a embalagem ideal para proteger, transportar e valorizar a sua marca.
          </p>
        </div>

        {/* Search & Tabs Controls bar */}
        <div className="bg-rlg-bg-light p-4 rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between mb-10 shadow-sm">
          {/* Live Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar modelos de caixas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm text-rlg-dark-blue placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rlg-yellow focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-black font-semibold"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-1.5 justify-center w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all uppercase ${
                  activeTab === cat.id
                    ? "bg-rlg-dark-blue text-white shadow-sm"
                    : "bg-white text-gray-500 hover:text-rlg-dark-blue hover:bg-gray-50 border border-gray-200/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product image container */}
                <div className="relative overflow-hidden bg-gray-50 aspect-video flex items-center justify-center">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={product.imageUrl}
                  />
                  <div className="absolute top-3 left-3 bg-rlg-dark-blue/80 backdrop-blur-md text-white px-2.5 py-1 text-[10px] font-bold rounded-md uppercase tracking-wider">
                    {product.category === "standard" && "Maleta Padrão"}
                    {product.category === "special" && "Design Especial"}
                    {product.category === "partitions" && "Divisória / Chapa"}
                    {product.category === "folders" && "Bobinas & Alça"}
                  </div>
                  {/* Subtle info icon prompt */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute bottom-3 right-3 bg-white/70 hover:bg-white text-rlg-dark-blue p-2 rounded-full backdrop-blur-sm shadow-sm transition-all"
                    title="Mais informações"
                  >
                    <Info size={14} />
                  </button>
                </div>

                {/* Product body info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-rlg-dark-blue font-display leading-tight group-hover:text-rlg-yellow transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-rlg-text-gray line-clamp-3 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-gray-100">
                      {product.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-1.5 text-[11px] text-gray-500">
                          <ShieldCheck size={12} className="text-rlg-yellow shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full border border-gray-200 hover:border-rlg-yellow hover:bg-rlg-yellow/5 text-rlg-dark-blue text-xs font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1"
                    >
                      Especificações
                    </button>
                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-rlg-yellow text-rlg-dark-blue text-xs font-bold py-2.5 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-1"
                    >
                      <MessageSquare size={13} /> Orçar Lote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-rlg-bg-light rounded-2xl py-12 px-6 text-center border border-dashed border-gray-200">
            <Filter size={32} className="text-gray-400 mx-auto mb-3" />
            <p className="text-sm font-semibold text-rlg-dark-blue">Nenhum modelo de caixa correspondente</p>
            <p className="text-xs text-gray-400 mt-1">Experimente buscar por outros termos ou use as abas de categoria.</p>
            <button
              onClick={() => { setSearchTerm(""); setActiveTab("all"); }}
              className="mt-4 text-xs font-bold text-rlg-dark-blue bg-rlg-yellow px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              Resetar Filtros
            </button>
          </div>
        )}

        {/* Small thumbnail promo footer in drawing */}
        <div className="mt-16 bg-gradient-to-br from-rlg-dark-blue to-indigo-950 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-rlg-yellow text-[10px] font-bold uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded">
              Linha Industrial Personalizada
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight">
              Temos mais de 9 tipos de configurações sob medida
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Produzimos caixas pesadas de parede dupla reforçada, colmeias divisórias complexas, 
              chapas de papelão, bobinas corrugadas e muito mais. Desenvolvemos o mockup técnico físico gratuitamente.
            </p>
            <a
              href="#orcamento"
              className="inline-flex items-center gap-1 bg-rlg-yellow text-rlg-dark-blue text-xs font-bold px-5 py-2.5 rounded-full hover:bg-yellow-400 transition"
            >
              Iniciar Simulação <ArrowRight size={13} />
            </a>
          </div>
          {/* Absolute background image positioning */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 hidden md:block select-none pointer-events-none">
            <img
              alt="Planta Industrial"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Ld-khTGSJCUUWd4hACW1vCS-9Wb4DSHZVFH-mPwFwI9uaKLNcJ_tRh095tTF0S-Lr1nFgj1EUXjB_X64n7i1oj5gcj6aHXQlZ9R1p6aTBRkTrdWWkO3EzEOTtHIpUxheQ0nJDW9wFdxRSt77UVIdtrhPB9KSpBFi8toYgmQpatOP0iftaNoHjCZr5cDPOuvuFVSvzX07_jpZFuzKZWquU7ODS9ZOzPohfhJPVspKqB6WkBhe_w9ITVVRkxs7xe1ak509o-soJJc8"
            />
          </div>
        </div>

      </div>

      {/* Product Detail Spec Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-black/5 hover:bg-black/10 text-gray-500 hover:text-black p-1.5 rounded-full transition-colors"
              aria-label="Fechar modal"
            >
              <X size={18} />
            </button>

            <img
              alt={selectedProduct.name}
              className="w-full h-56 object-cover bg-gray-50"
              src={selectedProduct.imageUrl}
            />

            <div className="p-6 space-y-4">
              <div>
                <span className="text-[10px] font-bold text-rlg-yellow uppercase tracking-wider bg-rlg-yellow/10 px-2 py-0.5 rounded">
                  Ficha Técnica RLG
                </span>
                <h3 className="text-xl font-bold text-rlg-dark-blue font-display mt-2">
                  {selectedProduct.name}
                </h3>
              </div>

              <p className="text-xs text-rlg-text-gray leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs bg-rlg-bg-light p-4 rounded-xl border border-gray-100">
                <div>
                  <span className="text-gray-400 block mb-0.5 uppercase tracking-widest text-[9px]">Pedido Mínimo</span>
                  <span className="font-bold text-rlg-dark-blue">{selectedProduct.minQuantity} Unidades</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-0.5 uppercase tracking-widest text-[9px]">Dimensão recomendável</span>
                  <span className="font-bold text-rlg-dark-blue">{selectedProduct.dimensions || "Totalmente sob medida"}</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-0.5 uppercase tracking-widest text-[9px]">Opções de Onda</span>
                  <span className="font-bold text-rlg-dark-blue">Microonda, B, C, BC-Dupla</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-0.5 uppercase tracking-widest text-[9px]">Customização</span>
                  <span className="font-bold text-rlg-dark-blue">Logotipo Próprio (Flexo)</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-1/3 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-xs hover:bg-gray-50 transition"
                >
                  Fechar
                </button>
                <a
                  href={getWhatsAppLink(selectedProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-2/3 bg-rlg-yellow hover:bg-yellow-400 text-rlg-dark-blue font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-1.5 transition shadow"
                >
                  <MessageSquare size={14} /> Solicitar Amostra
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
