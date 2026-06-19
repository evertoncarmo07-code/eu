import { Calendar, Layers, CheckSquare, Sparkles } from "lucide-react";

export default function QuemSomos() {
  const stats = [
    {
      icon: <Calendar className="text-rlg-yellow" size={20} />,
      label: "Desde 2007",
      value: "19+ Anos",
      desc: "Fornecendo excelência e parcerias duradouras."
    },
    {
      icon: <Layers className="text-rlg-yellow" size={20} />,
      label: "Estrutura",
      value: "2.000 m²",
      desc: "De fábrica própria localizada em Embu das Artes."
    },
    {
      icon: <CheckSquare className="text-rlg-yellow" size={20} />,
      label: "Atendimento Especial",
      value: "Pequenos Lotes",
      desc: "Flexibilidade para atender pequenas e médias demandas."
    }
  ];

  return (
    <section id="quem-somos" className="bg-rlg-dark-blue text-white py-20 px-4 md:px-6 relative overflow-hidden scroll-mt-16">
      {/* Dynamic background geometric accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story text and stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-rlg-yellow text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
                <Sparkles size={14} /> Quem Somos
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight tracking-tight text-white">
                História de Crescimento e Parceria
              </h2>
            </div>

            <div className="text-gray-300 text-sm md:text-base space-y-4 leading-relaxed font-light">
              <p>
                A <strong className="text-white font-semibold">RLG Embalagens</strong> foi fundada em abril de 2007, 
                unindo anos de experiência e competência técnica de seus sócios-fundadores para oferecer 
                as melhores e mais robustas opções em embalagens de papelão ondulado de São Paulo.
              </p>
              <p>
                Sempre crescendo de forma estratégica e visando a satisfação do cliente, hoje estamos instalados em 
                uma estrutura integrada de mais de <strong className="text-white font-semibold">2.000 m²</strong> em Embu das Artes, 
                às margens do Rodoanel, garantindo fluidez logística rápida para a capital, interior e litoral paulista.
              </p>
            </div>

            {/* Blockquote callout box */}
            <div className="border-l-4 border-rlg-yellow pl-5 italic text-white/95 text-sm md:text-base bg-white/5 py-4 pr-4 rounded-r-xl">
              "Nosso maior objetivo é atender com rapidez, qualidade e pontualidade, visando a fidelização definitiva 
              do cliente e compreendendo as particularidades de cada tipo de negócio."
            </div>

            {/* Quick specifications grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    {stat.icon}
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">{stat.label}</span>
                  </div>
                  <p className="text-lg font-bold font-display text-white">{stat.value}</p>
                  <p className="text-[11px] text-gray-400 leading-normal mt-1">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual corrugated product image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <img
                alt="Chapas de papelão empilhadas prontas para corte"
                className="w-full h-[320px] md:h-[480px] object-cover hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsrM0If3ic4DPHkkWg4Vbe6gI0javsff5XykwErXBvtopPk1cR7oGga17WemT4vmFQPuwHO3DvuIg7cHrGdugVshOa_VHYsDlXOTtbdgGiCiodukBSIA3cusDccyCrLpfHXi-8osgBhJCLu0zzJqHG8_8rYvnmV9DtEK5oGhLWlrkniMuelWjvjbpkhKGGWZeLDW6GJG_bRbreM5jJvRt7-8pbi8av_lh7Vk0g2buN6WJXuw4n05STvg6nhw8B_wUchD0EBHWtNWLX"
              />
              {/* Outer stroke overlay */}
              <div className="absolute inset-0 border-2 border-rlg-yellow/20 rounded-2xl pointer-events-none"></div>
              
              <div className="absolute top-4 left-4 bg-rlg-yellow text-rlg-dark-blue px-3 py-1 text-xs font-bold rounded-md shadow-lg">
                Logística Integrada
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
