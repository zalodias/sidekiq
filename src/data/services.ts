export interface Service {
  title: string;
  description: string;
  action?: string;
}

export const services: Service[] = [
  {
    title: "Job Matching",
    description:
      "Delineamos um processo focado e seletivo na tua procura de emprego. Reunimos as tuas preferências e objetivos, e fazemos match com empresas à procura de candidatos com as tuas competências.",
  },
  {
    title: "Preparação para Entrevista",
    description:
      "Melhora a tua narrativa profissional e pessoal. Ajudamos-te a elaborar respostas firmes para perguntas comuns, e treinamos a tua comunicação verbal e não verbal para te destacares em entrevista.",
  },
  {
    title: "Revisão de Currículo",
    description:
      "Imagina um currículo que para além de demonstrar as tuas competências, conta a tua história de forma cativante. Um currículo que se destaca da concorrência e capta a atenção do recrutador.",
  },
  {
    title: "Otimização de LinkedIn",
    description:
      "Destaca-te na rede social mais importante para a tua carreira. Otimizamos o teu perfil pessoal de LinkedIn para alcançares o teu próximo emprego em tempo recorde.",
  },
];
