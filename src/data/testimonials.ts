export interface Testimonial {
  quote: string;
  avatar: string;
  name: string;
  position: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "A entrada no mercado de trabalho foi um tanto assustadora, sentia alguma insegurança nas entrevistas e incerteza quanto às vagas a que me devia candidatar. Felizmente consegui ganhar confiança que precisava e dominar as minhas entrevistas.",
    avatar:
      "https://media.licdn.com/dms/image/C4D03AQHVr318sAXp7w/profile-displayphoto-shrink_400_400/0/1610558276899?e=1718841600&v=beta&t=OR2jFstsWmTXFvW9oYT08myqdgViyOnCfJgZ_FmjCxs",
    name: "Rita Coelho",
    position: "Campaign Specialist, VML",
  },
  {
    quote:
      "Além da tradicional preparação de respostas para uma entrevista, ensinam também a manter a calma, criar empatia e recuperar o domínio da entrevista que é tão fácil de perder no meio do nervosismo.",
    avatar:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Miguel Santos",
    position: "Software Engineer, Revolut",
  },
];
