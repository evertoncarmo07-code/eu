import { ArrowRight, Box, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center text-white py-20 px-6 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 43, 86, 0.75), rgba(10, 18, 40, 0.90)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCY1rSzY1F6t2GcAyQIJiConvG8CMoMs2t4WZwWCT2TjMHGWBGFijdeXLvVOhDVIRFTUOE2y4Xt0QWy5PSlDmOQwe90iCuBujPD6KOgrlFbkq_MF-j8-uQnU31sNOEGGeb1twaCnV8L4U7PhCZh-hL0hUvWko-Uiwp7WIdD0Qk61u7uT9KAQl2Zl6F9GB5ivS78La8uR0Kl86Ja4dSrgmxGnBttHkw_hVyU0duuTSf52LQG3XHEOVmqSnVddyrSFYjk-PEXT87KwllU')`,
      }}
    >
      {/* Decorative box background visual grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#fccb00_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8 px-4">
        {/* Animated badge */}
        <div className="inline-flex items-center gap-1.5 border border-rlg-yellow/40 bg-rlg-yellow/10 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider text-rlg-yellow uppercase animate-pulse">
          <Sparkles size={12} />
          <span>Fábrica Própria desde 2007</span>
        </div>

        {/* Primary headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-display text-white">
          Embalagens de Papelão
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-rlg-yellow to-yellow-400">
            Qualidade & Eficiência
          </span>
        </h1>

        {/* Subtext description */}
        <p className="text-base md:text-lg text-gray-200 font-normal max-w-2xl mx-auto leading-relaxed">
          Transformamos chapas de papelão em embalagens de excelente qualidade, 
          atendendo suas necessidades com máxima rapidez, pontualidade e projetos sob medida.
        </p>

        {/* Action Button cluster */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <a
            href="#produtos"
            className="w-full sm:w-auto bg-rlg-yellow text-rlg-dark-blue font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Ver Nosso Catálogo <Box size={18} />
          </a>
          <a
            href="#orcamento"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-lg border border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            Simular Caixa <ArrowRight size={18} />
          </a>
        </div>

        {/* Floating statistics or bullet high fidelity bars */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-white/10 mt-12 bg-black/20 p-4 rounded-xl backdrop-blur-md">
          <div className="flex items-center gap-3 justify-center text-left">
            <CheckCircle2 className="text-rlg-yellow shrink-0" size={24} />
            <div>
              <p className="text-xs text-gray-300 font-medium">Logística Eficiente</p>
              <p className="text-sm font-bold text-white">Próximo ao Rodoanel</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center text-left">
            <ShieldCheck className="text-rlg-yellow shrink-0" size={24} />
            <div>
              <p className="text-xs text-gray-300 font-medium">Segurança e Rigor</p>
              <p className="text-sm font-bold text-white">100% Homologado</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center text-left">
            <Box className="text-rlg-yellow shrink-0" size={24} />
            <div>
              <p className="text-xs text-gray-300 font-medium">Maquinários de Ponta</p>
              <p className="text-sm font-bold text-white">Chapas Sob Medida</p>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant waved divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-full h-[30px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 120L0 0C305.171 78.4314 612.352 78.4314 921.542 0L1200 120Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
