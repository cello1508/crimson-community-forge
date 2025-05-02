
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard = ({ title, description }: BenefitCardProps) => {
  return (
    <Card className="bg-dark border border-white/10 hover:border-crimson/50 transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Aulas exclusivas",
      description: "Conteúdo atualizado e direto ao ponto, criado por especialistas ativos no mercado",
    },
    {
      title: "Comunidade ativa",
      description: "Networking valioso com profissionais e iniciantes em um ambiente colaborativo",
    },
    {
      title: "Call de suporte",
      description: "Sessões semanais para tirar dúvidas e receber orientação personalizada",
    },
    {
      title: "Imersões gratuitas",
      description: "Workshops intensivos sobre tópicos avançados sem custo adicional",
    },
  ];

  return (
    <section className="section-padding section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Benefícios de participar da comunidade
          </h2>
          
          <div className="relative flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border border-crimson/40 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-white/20 bg-dark flex items-center justify-center flex-col">
                <span className="text-xl font-medium text-crimson">metodologia</span>
                <span className="text-xs text-white/60 mt-1 px-4 text-center">nossa abordagem única</span>
              </div>
              <div className="absolute w-full h-full">
                <div className="absolute top-1/2 -right-20 w-20 h-0.5 bg-crimson/30 transform -rotate-45">
                  <span className="absolute -top-6 right-0 text-xs text-white/80">prática</span>
                </div>
                <div className="absolute -top-20 left-1/2 w-0.5 h-20 bg-crimson/30">
                  <span className="absolute -top-6 -left-8 text-xs text-white/80">teoria</span>
                </div>
                <div className="absolute top-1/2 -left-20 w-20 h-0.5 bg-crimson/30 transform rotate-45">
                  <span className="absolute -top-6 left-0 text-xs text-white/80">mentorias</span>
                </div>
                <div className="absolute -bottom-20 left-1/2 w-0.5 h-20 bg-crimson/30">
                  <span className="absolute bottom-0 -left-12 text-xs text-white/80">networking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
