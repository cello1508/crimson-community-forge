
import React from "react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  features?: string[];
  popularLabel?: boolean;
  ctaText?: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  popularLabel = false,
  ctaText = "Começar agora"
}: PricingCardProps) => {
  return (
    <div className={`container-dark p-6 rounded-lg relative ${popularLabel ? 'border-2 border-crimson' : 'border border-white/10'}`}>
      {popularLabel && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-crimson text-white text-sm font-semibold py-1 px-4 rounded-full">
          Mais popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold">R$ {price}</span>
        </div>
        {description && (
          <p className="text-white/60 text-sm">{description}</p>
        )}
      </div>
      
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-crimson/20 flex items-center justify-center mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-crimson">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-white/80">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      <Button className={`w-full ${popularLabel ? 'bg-crimson hover:bg-crimson/90' : 'bg-white/10 hover:bg-white/20'}`}>
        {ctaText}
      </Button>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      title: "7 dias",
      price: "47,00",
      features: [
        "Acesso completo por 7 dias",
        "Comunidade ativa",
        "Biblioteca de conteúdo",
        "1 call de suporte"
      ]
    },
    {
      title: "Plano trimestral",
      price: "97,00",
      description: "/mês cobrados trimestralmente",
      features: [
        "Acesso completo por 3 meses",
        "Comunidade ativa",
        "Biblioteca de conteúdo",
        "Calls de suporte semanais",
        "Acesso a atualizações"
      ],
      popularLabel: true
    },
    {
      title: "Plano Anual - 50% OFF",
      price: "47,00",
      description: "/mês cobrados anualmente",
      features: [
        "Acesso completo por 12 meses",
        "Comunidade ativa",
        "Biblioteca de conteúdo",
        "Calls de suporte semanais",
        "Acesso a atualizações",
        "Mentorias personalizadas"
      ]
    }
  ];

  return (
    <section className="section-padding bg-black section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Planos
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            popularLabel={plan.popularLabel}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
