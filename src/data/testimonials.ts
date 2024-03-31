export interface Testimonial {
  quote: string;
  avatar: string;
  name: string;
  position: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Tudo se tornou mais fácil com o acompanhamento que me fizeram: ganhei confiança em mim, nas minhas competências e capacidades, e isso refletiu-se no processo de entrevistas com a minha atual empresa.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Rita Coelho",
    position: "Software Engineer, Feedzai",
  },
  {
    quote:
      "Tudo se tornou mais fácil com o acompanhamento que me fizeram: ganhei confiança em mim, nas minhas competências e capacidades, e isso refletiu-se no processo de entrevistas com a minha atual empresa.",
    avatar:
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "João Grilo",
    position: "Software Engineer, Feedzai",
  },
];
