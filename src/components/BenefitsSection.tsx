
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TypingAnimation from "./TypingAnimation";

// Different benefit cards
const benefitCards = [
  {
    title: "AULAS AO VIVO",
    description: "Todas as aulas ao vivo são gravadas e disponibilizadas na área de membros",
  },
  {
    title: "SUPORTE",
    description: "Suporte prioritário no grupo privado somente para membros",
  },
  {
    title: "CONEXÕES",
    description: "Acesso a todos os membros da comunidade e suas conexões",
  },
  {
    title: "EVENTOS",
    description: "Descontos e prioridade na participação de eventos presenciais e online",
  },
  {
    title: "ATUALIZAÇÃO",
    description: "Novas funcionalidades e estratégias atualizadas mensalmente",
  },
  {
    title: "RESULTADOS",
    description: "Equipe dedicada a acompanhar o seu progresso",
  }
];

const BenefitsSection = () => {
  // Words for the typing animation
  const typingWords = [
    "COMUNIDADE", 
    "AULAS DO ZERO", 
    "ENCONTROS", 
    "ATUALIZAÇÕES", 
    "VENDAS", 
    "SUPORTE 24HRS", 
    "SKIN IN THE GAME"
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Os <span className="text-crimson">benefícios</span> que você vai ter dentro da
          </h2>
          <TypingAnimation 
            words={typingWords} 
            className="text-2xl font-medium text-white"
            typingSpeed={100}
            erasingSpeed={80}
            delayBetweenWords={2000}
            withContainer={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {benefitCards.map((card, index) => (
            <Card key={index} className="container-dark p-6 border-crimson/30 hover:border-crimson/70 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-300 mb-4">{card.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button className="bg-crimson hover:bg-crimson/90 text-white px-8 py-6 text-lg rounded-md">
            Quero fazer parte
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
