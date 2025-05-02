
import React from "react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
}

const Testimonial = ({ name, role, content }: TestimonialProps) => {
  return (
    <div className="container-dark p-6 h-full flex flex-col">
      <div className="flex-1">
        <p className="text-white/80 mb-4">{content}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-crimson/30 flex items-center justify-center">
          <span className="text-sm">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-white/60">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Designer UX",
      content: "A comunidade me ajudou a dominar técnicas avançadas que transformaram minha carreira. O suporte personalizado fez toda diferença!",
    },
    {
      name: "Carlos Mendes",
      role: "Desenvolvedor Full Stack",
      content: "Em apenas três meses, consegui triplicar meu salário e encontrar oportunidades que nunca imaginei. A metodologia é incrível!",
    },
    {
      name: "Juliana Costa",
      role: "Product Manager",
      content: "As mentorias gravadas são um tesouro de conhecimento que consulto até hoje. Conexões valiosas e aprendizado constante.",
    },
    {
      name: "Marcos Oliveira",
      role: "Analista de Dados",
      content: "Entrei sem experiência e hoje trabalho com projetos internacionais. As imersões gratuitas foram o ponto de virada na minha trajetória.",
    },
  ];

  return (
    <section className="py-16 overflow-hidden section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Depoimentos que inspiram
      </h2>
      <p className="text-center text-white/70 mb-10 max-w-2xl mx-auto">
        Veja o que nossa comunidade tem falado sobre a experiência de transformação
      </p>
      
      <div className="flex gap-6 overflow-x-scroll py-4 no-scrollbar">
        <div className="flex gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-[300px] md:min-w-[320px]">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <p className="text-center text-sm text-white/50 uppercase tracking-wider">
          GIRANDO VÁRIOS DEPOIMENTOS
        </p>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
