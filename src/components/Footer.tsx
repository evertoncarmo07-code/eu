import { Instagram, MapPin, Phone, MessageSquare, Mail, Shield, CheckCircle } from "lucide-react";

export default function Footer() {
  const sitemap = [
    { name: "Home", href: "#home" },
    { name: "Qualidade", href: "#qualidade" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Produtos / Catálogo", href: "#produtos" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Simulador de Cotação", href: "#orcamento" },
    { name: "Perguntas Frequentes", href: "#faq" },
    { name: "Contato", href: "#contato" }
  ];

  const badges = [
    {
      alt: "Site Protegido",
      label: "Site Protegido SSL",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRa4Cl1SqyDUoNWxTRan9sDpzUJBk3vqYedA966_nM8KvU-tbRMN0v5wds9vPN4yO4ITLnz1BtDMIkASRucBKIvhY6MxuYM8b98nJSoB8_veTCFKpzgmQfrxjWJWuaEfABQvR2CG7LkwA07Uuh3F3qrR6YOfXFxTyXx9khWwcJ3TOCCvGV4KaWt-viS24rVzif9Q8tXYNtjBIin_drlUiNdGadPdDDes6YFRROGtP29MRhMb37LygyYUEJTzK1qfFvGo9fzTvUp6ZO"
    },
    {
      alt: "Google Safe Browsing",
      label: "Google Safe Verified",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo2bF5ejvWelUO5Csp7ocMw4B9NEuAdSyv2WSK2SdvG7TddBPK-ISVEPd1LrSewRCrnVq4IO5A08rb3QBp8MYTZl6hrXQpEXxrxTLx0uqmO-gl0aLGVEsnmk8lzn8MYc9tq6cStSI32d7isgzTmT-_VVNYliPI3iEM26kI4XTXp1k0DU0T4XMpBhHEacicQyEN5OdO0akk0PNg2xl4l93vosmXEG03UuVuUv3ewpQIZoFLzInSns1wkWFA1YqOk111bsRziX5YQOF"
    },
    {
      alt: "Avaliações Google",
      label: "Avaliações Clientes",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD57KTRCctxj2VAYns8kAOWtQ7GOnlS9qHEyk9Z_AY3qT8HaOG9u3_Yp6DAEr7oIHdJzbV33dOTt5czjihLRiWkYftMT8uF7M6UVJps8wtpNT0UVObNuw8wBpEFOi7FTiBIHqczT3bAPEILspP0Lxi8FE98ARc-Pz3pRLioZ0RJsfqQXX6WTeRIT4ISqWSoV9wBB6BVlJxYccAZ0fSMH0wXFd8eWvDYe5jH2-4KJ9n_tKA3jkpjLDQmO7XGrz1l8HoN6UYVpsKD8joC"
    },
    {
      alt: "Garantia RLG",
      label: "Garantia 100% Sastisfação",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh2t_ZjNiG54gICkFPHPfcLa85atPJwUwhxoDA4E2Ptqra4IuJYTWPiV504pHm8-kRDKN1jx_CGuTjd8-_xELZxPYdDu9-Ewv1Bk3IS_-5Ut6aOb2gupdoALeY12UQUrrgmtgHhYco6dGyQ9rKV9-xUaIch3-C4WjGRthvgE-n8pN9Q90-0TkgX09POnkwfUrQbgCQ37PPIntBmpfU4HUL2--jTfeZ9rMs0uvxrdgx6Urrvek_4AvNkdO_4BvQW7lEii9t4IMEQ0Oj"
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-100">
          
          {/* Brand Intro Column */}
          <div className="lg:col-span-4 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <img
              alt="RLG Embalagens"
              className="h-12 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg-0DOPoY_Jxck8WuKAU8gR2gt1UX7jH1e1KBK0sxRIfLRrecaeqGRTTugMQZmjmY1G40TO9-GV1JY05MliDf2m6S-f6cjOyqJcgqGyZkZrc6KToZnA-XSNQk1SCWnXns5DbACuFRx_YujEZkBVze6fht4S1RAhUnbg4ItzBracqEwbN5gmOgPX6fv0UHvMy6ifv3O4TYxBFTcOzFlqN0mvnKaI2bMMlMlKdna5ucY-mt7nfmcqwBBmW0FWQveJkTikvwe3hSQ8soD"
            />
            <p className="text-xs text-rlg-text-gray leading-relaxed max-w-sm">
              Embalagens de papelão com alta qualidade de coluna, agilidade de produção customizada e compromisso verdadeiro com o sucesso do seu negócio.
            </p>
            {/* Social link */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rlg-dark-blue hover:bg-rlg-yellow text-white hover:text-rlg-dark-blue p-2.5 rounded-full transition-colors shadow-sm"
                aria-label="Acesse nosso Instagram"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Sitemap links Column */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="text-xs font-bold text-rlg-dark-blue uppercase tracking-widest mb-4">Links Rápidos</h4>
            <ul className="text-xs space-y-3">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-rlg-dark-blue font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details info Column */}
          <div className="lg:col-span-5 text-center md:text-left space-y-4">
            <h4 className="text-xs font-bold text-rlg-dark-blue uppercase tracking-widest mb-4">Contatos Rápidos</h4>
            <ul className="text-xs space-y-3 text-gray-500">
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin size={14} className="text-rlg-yellow shrink-0 mt-0.5" />
                <span className="leading-relaxed text-left">
                  Rua São Domingos, 120 - Chácaras São Marcos, Embu das Artes - SP, CEP: 06814-365
                </span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone size={14} className="text-rlg-yellow shrink-0" />
                <a href="tel:1155139593" className="hover:text-rlg-dark-blue font-semibold">
                  (11) 5513-9593
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <MessageSquare size={14} className="text-rlg-yellow shrink-0" />
                <a href="https://wa.me/5511996039129" className="hover:text-rlg-dark-blue font-semibold">
                  (11) 99603-9129 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Mail size={14} className="text-rlg-yellow shrink-0" />
                <a href="mailto:vendas@rlgembalagens.com.br" className="hover:text-rlg-dark-blue">
                  vendas@rlgembalagens.com.br
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Brand Trust Badges section as drawn */}
        <div className="mt-12">
          <p className="text-center text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-6">Selos e Certificações</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center bg-rlg-bg-light p-6 rounded-2xl border border-gray-100">
            {badges.map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-1.5 select-none text-center">
                <img
                  alt={badge.alt}
                  className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  src={badge.img}
                />
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{badge.alt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Small Bottom licensing legalities */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-center space-y-2">
          <p className="text-[10px] text-gray-400 font-medium">
            © 2026 RLG Embalagens (RLGMelo). Todos os direitos reservados.
          </p>
          <p className="text-[9px] text-gray-400">
            CNPJ: 08.784.228/0001-21 | Embu das Artes - SP
          </p>
        </div>

      </div>
    </footer>
  );
}
