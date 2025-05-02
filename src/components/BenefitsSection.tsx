import React from "react";
import { Card, CardContent } from "@/components/ui/card";
interface BenefitCardProps {
  title: string;
  description: string;
}
const BenefitCard = ({
  title,
  description
}: BenefitCardProps) => {
  return <Card className="bg-dark border border-white/10 hover:border-crimson/50 transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </CardContent>
    </Card>;
};
const BenefitsSection = () => {
  const benefits = [{
    title: "Call de suporte toda Quarta feira",
    description: "Por mais que tem muita coisa que voce pode aprender gratuitamente pela internet, sao conteudos dispersos e vai surgir duvidas em sua mente durante o processo ou até mesmo erro na hora de montar a automacao, acredite 87% dos membros da comunidade relatam isso"
  }, {
    title: "Comunidade Ativa",
    description: "Converse e tire duvidas com pessoas que ja implementao, vendem, desenvolvem ou até mesmo compram seus projetos. A comunidade do checklist exietem pioneiros na aréa e profissionais que ja faturam 6 digitos mes"
  }, {
    title: "Atualizacoes de Aulas",
    description: "Muitos cursos por ai te dao passo a passos desatualizados, e nesse mercado de IA e Agentes, voce nao pode depender disso, na mesmo velocidade da tecnologia o seu conhecimento tambem precisa se atualizar!"
  }, {
    title: "Imersoes gratuitas",
    description: "Aprenda sobre posicionamento, trafego pago, micro saas, empreendedorismo, copy, estrategias alem das automacoes, a automacao é a ferramenta! ISSO NINGUEM TE FALA"
  }];
  return <section className="section-padding section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Benefícios de participar da comunidade
          </h2>
          
          <div className="relative">
            <div className="w-36 h-36 rounded-full border-2 border-white/20 flex items-center justify-center relative">
              <span className="text-lg font-medium">metodologia</span>
              <div className="absolute w-full h-full">
                
                <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-white/30"></div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {benefits.map((benefit, index) => <BenefitCard key={index} {...benefit} />)}
        </div>
      </div>
    </section>;
};
export default BenefitsSection;