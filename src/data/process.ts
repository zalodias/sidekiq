export interface Process {
  step: string;
  title: string;
  description: string;
  action?: string;
}

export const steps: Process[] = [
  {
    step: "01",
    title: "Escolha de plano",
    description:
      "Oferecemos 3 planos distintos para que possas escolher o que mais se adapta aos teus objetivos e necessidades. Após escolheres o plano e efetuares o pagamento, marcamos a sessão introdutória de diagnóstico, no prazo máximo de 1 semana.",
    action: "Ver planos",
  },
  {
    step: "02",
    title: "Sessão de diagnóstico",
    description:
      "Esta sessão é crucial, e marca o início da nossa parceria. Analisamos em conjunto a tua história profissional e pessoal, objetivos de carreira, e definimos uma lista de tarefas a executar.",
  },
  {
    step: "03",
    title: "Check-in semanal",
    description:
      "Marcamos um meeting semanal onde apresentamos o nosso trabalho e analisamos o teu progresso.",
  },
];
