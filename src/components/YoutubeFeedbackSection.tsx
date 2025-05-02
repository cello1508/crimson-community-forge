
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  index: number;
}

const TESTIMONIALS = [
  {
    comment: "Comecei sem experiência e agora faturo mais de 15 mil por mês com projetos de IA!",
    author: "Carlos Silva",
    role: "Agente N8n"
  },
  {
    comment: "A comunidade me deu todo o suporte para criar meu negócio digital com IA.",
    author: "Marina Costa",
    role: "Desenvolvedora de Automações"
  },
  {
    comment: "Nunca imaginei que conseguiria trabalhar com tecnologia sem saber programar.",
    author: "Pedro Santos",
    role: "Especialista em IA"
  },
  {
    comment: "Transformei minha carreira em apenas 3 meses após entrar na comunidade.",
    author: "Juliana Mendes",
    role: "Empreendedora Digital"
  }
];

const TestimonialCard = ({ index }: TestimonialCardProps) => {
  const testimonial = TESTIMONIALS[index];
  
  return (
    <Card className="aspect-square bg-dark rounded-lg border border-white/10 hover:border-crimson/30 transition-all duration-300 overflow-hidden">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-1 flex flex-col">
          <div className="text-crimson text-4xl mb-4">"</div>
          <p className="text-white/90 flex-1">{testimonial.comment}</p>
        </div>
        
        <div className="mt-4">
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm text-crimson">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const YoutubeFeedbackSection = () => {
  return (
    <section className="section-padding bg-black section-container">
      <div className="mt-20 mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Já ajudei milhares de pessoas no youtube de forma 100% gratuita
        </h2>
        <p className="text-xl mt-6 mb-10 text-center">Depoimentos do youtube</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[0, 1, 2, 3].map((index) => (
          <TestimonialCard key={index} index={index} />
        ))}
      </div>
    </section>
  );
};

export default YoutubeFeedbackSection;
