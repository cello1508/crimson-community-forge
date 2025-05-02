
import React from "react";

type MethodologyStepProps = {
  title: string;
  isLast?: boolean;
};

const MethodologyStep: React.FC<MethodologyStepProps> = ({ title, isLast = false }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-2 border-white/30 px-6 py-4 w-full md:w-[500px] text-center">
        <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
      </div>
      {!isLast && (
        <div className="h-10 w-0.5 bg-white/30 my-2"></div>
      )}
    </div>
  );
};

const MethodologySection = () => {
  const steps = [
    "Início da Jornada",
    "Domine a Infraestrutura",
    "Instale e Integre com Precisão",
    "COMO mapear gargalos",
    "Estruture o Agente de IA",
    "Fazendo IAs que vendem",
    "Tools que ninguém aplica",
    "Como vender como um verdadeiro mestre"
  ];

  return (
    <section className="section-padding section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nossa Metodologia
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Um caminho estruturado para dominar a criação e implementação de agentes de IA que realmente geram resultados
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mb-12">
        {steps.map((step, index) => (
          <MethodologyStep 
            key={index} 
            title={step} 
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          Nossa metodologia exclusiva foi desenvolvida após anos de experiência prática e já ajudou centenas de profissionais a dominarem a criação de agentes de IA que geram resultados reais.
        </p>
      </div>
    </section>
  );
};

export default MethodologySection;
