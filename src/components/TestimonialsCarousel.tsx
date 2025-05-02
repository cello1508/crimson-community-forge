
import React, { useEffect, useRef } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  imageSrc: string;
}

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Designer UX",
      content: "A comunidade me ajudou a dominar técnicas avançadas que transformaram minha carreira. O suporte personalizado fez toda diferença!",
      imageSrc: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/QDjAspGKT6diBRNMCH0OfZMzw21IKbUE_ce58c148a95c943afc35e05feb8a7f429d1a0e6ed81f2c769f30349a4b090d81.png"
    },
    {
      name: "Carlos Mendes",
      role: "Desenvolvedor Full Stack",
      content: "Em apenas três meses, consegui triplicar meu salário e encontrar oportunidades que nunca imaginei. A metodologia é incrível!",
      imageSrc: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/pHhRKG9V1URHmylCuqV6gbBL4kSrA64L_f07111f41e70915ac770fb0b5e721e17a50ebe9657822470d69c381e975be0a4.png"
    },
    {
      name: "Juliana Costa",
      role: "Product Manager",
      content: "As mentorias gravadas são um tesouro de conhecimento que consulto até hoje. Conexões valiosas e aprendizado constante.",
      imageSrc: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/0fyRSDyVmocmR1vaXrNDwB4m8DYj3C2n_3e05bc8c13fee854838a92d90518030091e718a6f3a7b6f03d6cff2b3efab27c.png"
    },
    {
      name: "Marcos Oliveira",
      role: "Analista de Dados",
      content: "Entrei sem experiência e hoje trabalho com projetos internacionais. As imersões gratuitas foram o ponto de virada na minha trajetória.",
      imageSrc: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/WVgKV67T8kHUPdnaq8EUVW5q0HQ0ta73_2ad0f2f5782906a2d81f7fb2bb27773019a53af67fcdd4567d3501876317e155.png"
    },
    {
      name: "Fernanda Lima",
      role: "Marketing Digital",
      content: "A comunidade oferece recursos práticos que aplicamos imediatamente. Minha produtividade aumentou significativamente nas primeiras semanas.",
      imageSrc: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/XbWxCbzIFR8KObG5FLLQRc3qi3JYi3mi_231ffba355b32a7e5c3abeb0115acfb045732afec1b4445394a7f5abe2977b5a.png"
    },
    {
      name: "Rafael Santos",
      role: "Empreendedor Digital",
      content: "Graças às estratégias que aprendi na comunidade, consegui automatizar processos e escalar meu negócio em tempo recorde.",
      imageSrc: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/2hJiNsK8fWuLZHibbl6Y1tgqGgosdT4W_e3e87654dff0c8ccae6e28818c87f6b9318aa34ffd78fa73ea602e7935af6e7b.png"
    },
  ];

  const [api, setApi] = React.useState<CarouselApi>();
  
  // Set up auto-scrolling with the API
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Return to first slide when reaching the end
      }
    }, 3000); // Scroll every 3 seconds
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 overflow-hidden section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Depoimentos que inspiram
      </h2>
      <p className="text-center text-white/70 mb-10 max-w-2xl mx-auto">
        Veja o que nossa comunidade tem falado sobre a experiência de transformação
      </p>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full px-4"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="bg-dark rounded-lg overflow-hidden">
                <AspectRatio ratio={4/5}>
                  <img 
                    src={testimonial.imageSrc} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </section>
  );
};

export default TestimonialsCarousel;
