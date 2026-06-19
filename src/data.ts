import { Product, Testimonial, FAQItem } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Caixa Maleta Convencional",
    description: "Modelo clássico de papelão ondulado, ideal para armazenamento de insumos, expedição, mudanças e logística em geral.",
    category: "standard",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyxq65ZvW8zr_BeEqacyW3puXc_I2GX39NQI5duDLEz0NAOiw7XUMmyt98qak71C2BYtxde01IjzjWgpQsciljkDL7pFSBK3fpAm7EU1wpiob89-kKTbWYCKgtVwBlQdDMHrUplqpESSputEKPxYtWPbXn4y3MAKPy40mdFj-YzWWhCztNI2czTyXimw80JnXvKv0wBVoXkj6lsi5TaWsIyXL3n6xN3GuBt5EebAMqkZNJbKkvj8imaF3mWlNPLS1YeVvgsBiyuB5l",
    highlights: ["Fechamento prático", "Altamente resistente", "Ideal para empilhamento"],
    dimensions: "Personalizado sob medida",
    minQuantity: 100
  },
  {
    id: "2",
    name: "Caixa Auto-Montável Especiais",
    description: "Design premium que dispensa fitas adesivas para montagem rápida. Ideal para e-commerce de alto padrão, eletrônicos e entregas diretas.",
    category: "special",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZUuAMu7bxGrKiEVF_9NkcKGo0R7mS4MP2JfyEZmP92TdA7lgrcmeg70ysQe6q2O9-1hIt7vFI2aaRM2_Y74_-ng0R2atJZ_KCAZEuiajvuHnHm_1knzqwV-vLCB1pF4NcSSESs1ZYaukIQ3-3BdnvEkqNFbRzVqkT6RCpliJ2YuDsATHtbVTxBfq-xig2n_jzVm_y_TvUqWjNAV8ijoDDhbozYlW9bOrnnyb66SBWwb3EmcGHLi-c2Fx9_OanFoufCm0f9oIPKEP8",
    highlights: ["Estilo Maleta/Sedex", "Encaixe firme", "Excelente apresentação visual"],
    dimensions: "Diversas medidas padrão ou personalizada",
    minQuantity: 100
  },
  {
    id: "3",
    name: "Divisórias & Colmeias",
    description: "Estruturas em grade que se encaixam no interior das caixas para separar e proteger itens frágeis como vidros, garrafas, cosméticos ou louças.",
    category: "partitions",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaeJ5bbOv-5dcf50Xdvu-X7CC_rJFfFfdPRVqfUngdH03W16pRIGLhnrqTcb-LspGMkwYibZQBVhJNIe5bL_IULzoDOaLnFIMrMyKyO2p5hd0BnUGbJe9bKFcUjR-o9v18sSYC7MWF_XRHrFVDeBko-oU_JmXaMbJkpn8rTjZBc8hN1ao-x1fEcS05bZi7cM8gm1topJEDfA704Sgi0BBVtJOnbOa_8H-1Qh7BO6qkKuqeiwYj-NrOYmEUUighAyonzQGQiobD7djE",
    highlights: ["Proteção contra impactos", "Fácil encaixe", "Otimiza espaço interno"],
    minQuantity: 200
  },
  {
    id: "4",
    name: "Caixa com Tampa e Fundo",
    description: "Caixa composta de duas partes independentes (tampa e fundo telescópico), facilitando o acesso e a proteção de produtos planos ou vestuários.",
    category: "special",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9Ld-khTGSJCUUWd4hACW1vCS-9Wb4DSHZVFH-mPwFwI9uaKLNcJ_tRh095tTF0S-Lr1nFgj1EUXjB_X64n7i1oj5gcj6aHXQlZ9R1p6aTBRkTrdWWkO3EzEOTtHIpUxheQ0nJDW9wFdxRSt77UVIdtrhPB9KSpBFi8toYgmQpatOP0iftaNoHjCZr5cDPOuvuFVSvzX07_jpZFuzKZWquU7ODS9ZOzPohfhJPVspKqB6WkBhe_w9ITVVRkxs7xe1ak509o-soJJc8",
    highlights: ["Fácil manuseio", "Ideal para roupas e sapato", "Exposição de produto"],
    dimensions: "Medidas sob consulta",
    minQuantity: 150
  },
  {
    id: "5",
    name: "Chapas e Placas Separadoras",
    description: "Placas planas de papelão ondulado para divisão de camadas em paletes, proteção lateral de móveis ou base reforçada de caixas.",
    category: "partitions",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCY1rSzY1F6t2GcAyQIJiConvG8CMoMs2t4WZwWCT2TjMHGWBGFijdeXLvVOhDVIRFTUOE2y4Xt0QWy5PSlDmOQwe90iCuBujPD6KOgrlFbkq_MF-j8-uQnU31sNOEGGeb1twaCnV8L4U7PhCZh-hL0hUvWko-Uiwp7WIdD0Qk61u7uT9KAQl2Zl6F9GB5ivS78La8uR0Kl86Ja4dSrgmxGnBttHkw_hVyU0duuTSf52LQG3XHEOVmqSnVddyrSFYjk-PEXT87KwllU",
    highlights: ["Rigidez ajustável", "Corte limpo e sob medida", "Amortecimento ideal"],
    dimensions: "Chapas até 2000x3000mm",
    minQuantity: 100
  },
  {
    id: "6",
    name: "Caixa Tipo Maleta com Alça",
    description: "Excelente embalagem para transporte conveniente pelo usuário final. Conta com dentes de travamento e uma alça embutida elegante.",
    category: "folders",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsrM0If3ic4DPHkkWg4Vbe6gI0javsff5XykwErXBvtopPk1cR7oGga17WemT4vmFQPuwHO3DvuIg7cHrGdugVshOa_VHYsDlXOTtbdgGiCiodukBSIA3cusDccyCrLpfHXi-8osgBhJCLu0zzJqHG8_8rYvnmV9DtEK5oGhLWlrkniMuelWjvjbpkhKGGWZeLDW6GJG_bRbreM5jJvRt7-8pbi8av_lh7Vk0g2buN6WJXuw4n05STvg6nhw8B_wUchD0EBHWtNWLX",
    highlights: ["Praticidade no transporte", "Excelente área de marca", "Montabilidade instantânea"],
    dimensions: "Sob medida",
    minQuantity: 150
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Roberto Alves",
    role: "Diretor Comercial, LogisBR",
    rating: 5,
    text: "Confiável, rápido e profissional. Voltei a comprar 3 vezes! As caixas de papelão têm uma resistência incrível e a entrega em Embu das Artes foi super rápida.",
    date: "12/05/2026",
    avatarUrl: "RA"
  },
  {
    id: "2",
    name: "Mariana Souza",
    role: "E-Commerce de Cosméticos Bella",
    rating: 5,
    text: "As caixas auto-montáveis e as colmeias divisórias mudaram o nível do nosso unboxing. Além disso, eles atendem pequenas quantidades, o que para nós no início foi formidável.",
    date: "02/06/2026",
    avatarUrl: "MS"
  },
  {
    id: "3",
    name: "Paulo G. Guimarães",
    role: "Gestor de Compras, Móveis Paraná",
    rating: 5,
    text: "Compromisso cumprido. A RLG Embalagens entrega chapas e caixas sob medida no prazo correto. A pontualidade deles e a comunicação flexível fazem toda a diferença.",
    date: "14/06/2026",
    avatarUrl: "PG"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Qual é o tempo de entrega?",
    answer: "Nosso prazo médio de entrega varia de 5 a 10 dias úteis a partir da aprovação técnica do mockup ou fechamento do pedido, dependendo do volume e da especificação do papelão.",
    category: "shipping"
  },
  {
    id: "faq-2",
    question: "Vocês atendem pequenas quantidades?",
    answer: "Sim! Diferente de grandes indústrias, a RLG Embalagens possui maquinários modernos reguláveis que permitem produzir lotes menores para apoiar o seu negócio desde o início. A quantidade mínima varia conforme as especificações do produto, geralmente começando em 100/150 unidades.",
    category: "orders"
  },
  {
    id: "faq-3",
    question: "Qual é o mínimo de pedido?",
    answer: "Nosso pedido mínimo para caixas convencionais é de 100 unidades por tamanho. Para divisórias especiais ou caixas personalizadas muito complexas, consulte-nos. Nosso objetivo é flexibilizar e achar o melhor ponto de equilíbrio.",
    category: "orders"
  },
  {
    id: "faq-4",
    question: "Quais tipos de papelão e ondas vocês oferecem?",
    answer: "Trabalhamos com papéis virgens e reciclados, ondas simples (Onda B e C) e parede dupla (Onda BC / Microondulado). Analisamos o peso do seu produto para recomendar a gramatura ideal com excelente custo-benefício.",
    category: "products"
  },
  {
    id: "faq-5",
    question: "Vocês personalizam com logotipo?",
    answer: "Sim! Podemos personalizar as embalagens de acordo com a sua identidade visual (impressão flexográfica) para deixar o seu frete com uma cara incrível.",
    category: "customization"
  }
];
