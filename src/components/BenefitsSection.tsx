
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface BenefitCardProps {
  title: string;
  description: string;
  emoji: string;
}

const BenefitCard = ({
  title,
  description,
  emoji
}: BenefitCardProps) => {
  return <Card className="bg-dark border border-white/10 hover:border-crimson/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl" role="img" aria-label="benefit icon">{emoji}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-white/70">{description}</p>
      </CardContent>
    </Card>;
};

const BenefitsSection = () => {
  const isMobile = useIsMobile();
  
  const benefits = [
    {
      title: "Call de suporte toda Quarta feira",
      description: "Por mais que tem muita coisa que voce pode aprender gratuitamente pela internet, sao conteudos dispersos e vai surgir duvidas em sua mente durante o processo ou até mesmo erro na hora de montar a automacao, acredite 87% dos membros da comunidade relatam isso",
      emoji: "📞"
    }, {
      title: "Comunidade Ativa",
      description: "Converse e tire duvidas com pessoas que ja implementao, vendem, desenvolvem ou até mesmo compram seus projetos. A comunidade do checklist exietem pioneiros na aréa e profissionais que ja faturam 6 digitos mes",
      emoji: "👥"
    }, {
      title: "Atualizacoes de Aulas",
      description: "Muitos cursos por ai te dao passo a passos desatualizados, e nesse mercado de IA e Agentes, voce nao pode depender disso, na mesmo velocidade da tecnologia o seu conhecimento tambem precisa se atualizar!",
      emoji: "🔄"
    }, {
      title: "Imersoes gratuitas",
      description: "Aprenda sobre posicionamento, trafego pago, micro saas, empreendedorismo, copy, estrategias alem das automacoes, a automacao é a ferramenta! ISSO NINGUEM TE FALA",
      emoji: "🚀"
    }
  ];
  
  return <section className="section-padding section-container min-h-[600px] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        <div className="lg:col-span-5 space-y-6 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 md:mb-28">Você estará com pioneiros no mercado de Agentes de IA e Automações.</h2>
          
          <div className={`flex justify-center ${isMobile ? "mt-8 mb-16" : "py-12"}`}>
            <div className="w-64 h-64 rounded-full border-2 border-white/20 flex items-center justify-center relative animate-pulse-slow">
              <span className="text-2xl font-medium">COMUNIDADE</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {benefits.map((benefit, index) => <BenefitCard key={index} {...benefit} />)}
        </div>
      </div>
    </section>;
};

export default BenefitsSection;
