
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Phone, Users, RefreshCcw, Rocket } from "lucide-react";

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
  return (
    <Card className="bg-dark border border-white/10 hover:border-crimson/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl" role="img" aria-label="benefit icon">{emoji}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
};

type MethodologyStepProps = {
  title: string;
  isLast?: boolean;
};

const MethodologyStep: React.FC<MethodologyStepProps> = ({
  title,
  isLast = false
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-2 border-white/30 px-4 py-2 w-full text-center">
        <h3 className="text-base font-medium">{title}</h3>
      </div>
      {!isLast && <div className="h-6 w-0.5 bg-white/30 my-1"></div>}
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Call de suporte toda Quarta feira",
      description: "Por mais que tem muita coisa que voce pode aprender gratuitamente pela internet, sao conteudos dispersos e vai surgir duvidas em sua mente durante o processo ou até mesmo erro na hora de montar a automacao, acredite 87% dos membros da comunidade relatam isso",
      emoji: "📞"
    },
    {
      title: "Comunidade Ativa",
      description: "Converse e tire duvidas com pessoas que ja implementao, vendem, desenvolvem ou até mesmo compram seus projetos. A comunidade do checklist exietem pioneiros na aréa e profissionais que ja faturam 6 digitos mes",
      emoji: "👥"
    },
    {
      title: "Atualizacoes de Aulas",
      description: "Muitos cursos por ai te dao passo a passos desatualizados, e nesse mercado de IA e Agentes, voce nao pode depender disso, na mesmo velocidade da tecnologia o seu conhecimento tambem precisa se atualizar!",
      emoji: "🔄"
    },
    {
      title: "Imersoes gratuitas",
      description: "Aprenda sobre posicionamento, trafego pago, micro saas, empreendedorismo, copy, estrategias alem das automacoes, a automacao é a ferramenta! ISSO NINGUEM TE FALA",
      emoji: "🚀"
    }
  ];

  const methodologySteps = [
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* First column - Benefits heading */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Benefícios de participar da comunidade
          </h2>
          <p className="text-white/70">
            Junte-se à nossa comunidade exclusiva e tenha acesso a recursos e suporte que impulsionarão sua jornada no desenvolvimento de agentes de IA.
          </p>
          <div className="flex justify-start mt-6">
            <div className="bg-dark border border-white/10 px-4 py-2 rounded-md">
              <span className="text-crimson font-medium">Comunidade exclusiva</span>
            </div>
          </div>
        </div>

        {/* Second column - Benefits cards */}
        <div className="grid grid-cols-1 gap-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        {/* Third column - Methodology */}
        <div className="space-y-6">
          <div className="bg-dark border border-white/10 p-5 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Nossa Metodologia
            </h2>
            <p className="text-white/70 text-sm mb-6 text-center">
              Um caminho estruturado para dominar a criação de agentes de IA
            </p>
            
            <div className="flex flex-col items-center justify-center max-w-xs mx-auto">
              {methodologySteps.map((step, index) => (
                <MethodologyStep 
                  key={index} 
                  title={step} 
                  isLast={index === methodologySteps.length - 1} 
                />
              ))}
            </div>
            
            <Separator className="my-4 bg-white/10" />
            
            <p className="text-white/70 text-xs text-center">
              Nossa metodologia exclusiva foi desenvolvida após anos de experiência prática
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
