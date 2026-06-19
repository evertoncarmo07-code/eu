import { Award, Leaf, Cpu, MapPin, Sparkles, Check } from "lucide-react";

export default function Qualidade() {
  const cards = [
    {
      icon: <Award className="text-rlg-yellow shrink-0 group-hover:scale-110 transition-transform" size={26} />,
      title: "Alta Qualidade",
      desc: "Padrões elevados de fabricação e testes de compressão (Coluna)."
    },
    {
      icon: <Leaf className="text-rlg-yellow shrink-0 group-hover:scale-110 transition-transform" size={26} />,
      title: "100% Sustentável",
      desc: "Uso de papéis com responsabilidade e total respeito ao meio-ambiente."
    },
    {
      icon: <Cpu className="text-rlg-yellow shrink-0 group-hover:scale-110 transition-transform" size={26} />,
      title: "Alta Tecnologia",
      desc: "Equipamentos modernos e corte computadorizado com altíssima precisão."
    },
    {
      icon: <MapPin className="text-rlg-yellow shrink-0 group-hover:scale-110 transition-transform" size={26} />,
      title: "Embu das Artes/SP",
      desc: "Localização estratégica ao lado do Rodoanel para distribuição ágil."
    }
  ];

  return (
    <section id="qualidade" className="py-20 px-4 md:px-6 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with interactive details */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                alt="Controle Rigoroso de Qualidade"
                className="w-full h-[320px] md:h-[420px] object-cover hover-scale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY1rSzY1F6t2GcAyQIJiConvG8CMoMs2t4WZwWCT2TjMHGWBGFijdeXLvVOhDVIRFTUOE2y4Xt0QWy5PSlDmOQwe90iCuBujPD6KOgrlFbkq_MF-j8-uQnU31sNOEGGeb1twaCnV8L4U7PhCZh-hL0hUvWko-Uiwp7WIdD0Qk61u7uT9KAQl2Zl6F9GB5ivS78La8uR0Kl86Ja4dSrgmxGnBttHkw_hVyU0duuTSf52LQG3XHEOVmqSnVddyrSFYjk-PEXT87KwllU"
              />
              {/* Glass overlay badge inside image */}
              <div className="absolute bottom-6 left-6 right-6 bg-rlg-dark-blue/90 text-white p-5 rounded-xl backdrop-blur-md border border-white/15 flex items-center justify-between shadow-lg">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-rlg-yellow tracking-widest flex items-center gap-1">
                    <Sparkles size={12} /> Garantia de Origem
                  </p>
                  <p className="text-sm font-bold text-white">Controle Rigoroso</p>
                  <p className="text-[11px] text-gray-300">Da escolha da matéria-prima até a expedição final.</p>
                </div>
                <div className="bg-rlg-yellow/20 p-2.5 rounded-full text-rlg-yellow">
                  <Award size={22} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Card Grid */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-rlg-dark-blue/60 text-xs font-semibold uppercase tracking-widest bg-rlg-yellow/15 px-3 py-1 rounded-full">
                Compromisso RLG
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-rlg-dark-blue font-display tracking-tight leading-tight">
                Qualidade, Eficiência e Compromisso Ambiental
              </h2>
              <p className="text-sm md:text-base text-rlg-text-gray leading-relaxed">
                A RLG Embalagens conta com elevados padrões de qualidade para atender nossos clientes, 
                oferecendo um portfólio de excelência para todas as indústrias e demandas de logística. 
                Nossos produtos combinam rigidez ideal, durabilidade e sustentabilidade certificada.
              </p>
            </div>

            {/* Feature Cards Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="group bg-rlg-bg-light hover:bg-white p-5 rounded-xl border border-gray-100 hover:border-rlg-yellow/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="bg-rlg-yellow/10 w-fit p-3 rounded-lg">
                      {card.icon}
                    </div>
                    <h3 className="text-sm font-bold text-rlg-dark-blue group-hover:text-rlg-yellow transition-colors font-display">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-500 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-green-600 font-semibold mt-3 pt-2 border-t border-gray-100">
                    <Check size={12} /> Homologado
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
