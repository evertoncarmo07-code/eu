import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare, ShieldAlert } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Qualidade", href: "#qualidade" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Produtos", href: "#produtos" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Simulador", href: "#orcamento" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          scrolled ? "bg-white shadow-md py-2.5 border-b border-gray-100" : "bg-white/95 py-4 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img
              alt="RLG Embalagens"
              className="h-10 md:h-12 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGJNb8A-DE4v5vsOn4sCjgKcdEcmumaewLPOMIXG8ELEa2KUtEPdLWMF99RB0QiUxidevEs8A5Dy2uO9bYk9OJ_KurLlV9DFcMUJ7mUW8oK7dT8fFPCkz2pEjeCVJyZOmLO4TcBL1r8CqLLgwRWhVJ3nPhfPH09GGdDwYI1wNQXT3a9_NxyrGGOsuZoIemhJ7ousFMA2cuDfTgUkSz-65Pga5A_XB23ya5I1RBwynbmjJW3iVPMcqFMl3YTQAjmfiTUjGXp2VAiIih"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-rlg-dark-blue hover:text-rlg-yellow transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-rlg-yellow after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:1155139593"
              className="text-xs font-semibold text-rlg-dark-blue flex items-center gap-1 hover:text-rlg-yellow transition"
            >
              <Phone size={14} className="text-rlg-yellow" /> (11) 5513-9593
            </a>
            <a
              href="#orcamento"
              className="bg-rlg-dark-blue text-white hover:bg-rlg-yellow hover:text-rlg-dark-blue px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <MessageSquare size={14} /> Solicite grátis
            </a>
          </div>

          {/* Interactive Hamburger for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-rlg-dark-blue rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Drawer overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl lg:hidden flex flex-col justify-between p-6 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-gray-100">
            <img
              alt="RLG Embalagens"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGJNb8A-DE4v5vsOn4sCjgKcdEcmumaewLPOMIXG8ELEa2KUtEPdLWMF99RB0QiUxidevEs8A5Dy2uO9bYk9OJ_KurLlV9DFcMUJ7mUW8oK7dT8fFPCkz2pEjeCVJyZOmLO4TcBL1r8CqLLgwRWhVJ3nPhfPH09GGdDwYI1wNQXT3a9_NxyrGGOsuZoIemhJ7ousFMA2cuDfTgUkSz-65Pga5A_XB23ya5I1RBwynbmjJW3iVPMcqFMl3YTQAjmfiTUjGXp2VAiIih"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-gray-500 hover:text-black rounded-lg transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-semibold text-rlg-dark-blue hover:text-rlg-yellow transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4 pt-6 border-t border-gray-100">
          <div className="text-center text-xs text-rlg-text-gray font-medium">
            Atendimento Rápido:
          </div>
          <a
            href="https://wa.me/5511996039129"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition"
          >
            Falar no WhatsApp
          </a>
          <a
            href="#orcamento"
            onClick={handleLinkClick}
            className="w-full bg-rlg-dark-blue text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition text-sm text-center"
          >
            Simulador de Orçamentos
          </a>
        </div>
      </aside>
    </>
  );
}
