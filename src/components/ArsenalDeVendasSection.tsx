
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Rocket, Handshake } from "lucide-react";

const FeatureCard = ({ title, description, icon: Icon }: { 
  title: string; 
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-purple-500/20 p-2 rounded-md">
            <Icon className="h-5 w-5 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
};

const ArsenalDeVendasSection = () => {
  const features = [
    {
      title: "Calls de Vendas",
      description: "Acesso completo a calls de vendas reais com clientes, desde o primeiro contato até o fechamento",
      icon: Briefcase
    },
    {
      title: "Templates de Propostas",
      description: "Modelos profissionais de propostas que converteram clientes de alto valor",
      icon: Rocket
    },
    {
      title: "Scripts de Negociação",
      description: "Scripts detalhados para lidar com objeções e fechar negócios com maior taxa de sucesso",
      icon: Handshake
    }
  ];

  return (
    <section className="section-padding section-container">
      <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/40 rounded-xl p-8 mb-8">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="inline-block bg-purple-500/20 px-4 py-2 rounded-full mb-4">
            <span className="text-purple-300 font-semibold">Bônus exclusivo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
            Arsenal de Vendas Completo
          </h2>
          <p className="text-white/70 text-lg">
            Todo o material que utilizamos para conquistar clientes e fechar contratos de 5 dígitos à sua disposição
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title} 
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-purple-300 mb-4">
            <span className="font-semibold">Disponível apenas</span> para assinantes do plano anual
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full">
            Quero acesso ao Arsenal de Vendas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArsenalDeVendasSection;
