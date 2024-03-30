export interface Plan {
  title: string;
  subtitle: string;
  price: number;
  isPopular: boolean;
  features: string[];
}

export const plans: Plan[] = [
  {
    title: "Básico",
    subtitle:
      "O plano essencial, perfeito se estás à procura do teu primeiro trabalho",
    price: 45,
    isPopular: false,
    features: [
      "Revisão de currículo",
      "1 sessão de diagnóstico",
      "1 sessão de preparação de entrevista",
    ],
  },
  {
    title: "Standard",
    subtitle:
      "O plano mais popular, perfeito para dares o próximo passo na tua carreira",
    price: 145,
    isPopular: true,
    features: [
      "Revisão de currículo",
      "1 sessão de diagnóstico",
      "2 sessões de preparação para entrevista",
      "Job matching",
      "Otimização de LinkedIn",
    ],
  },
  {
    title: "Premium",
    subtitle:
      "O plano completo, perfeito para trabalhares a tua marca pessoal e criares impacto",
    price: 245,
    isPopular: false,
    features: [
      "Revisão de currículo",
      "1 sessão de diagnóstico",
      "2 sessões de preparação para entrevista",
      "Job matching",
      "Estratégia de networking",
      "Materiais de branding",
      "Criação de website/portfolio",
    ],
  },
];
