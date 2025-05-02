import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Rocket, Handshake } from "lucide-react";
const FeatureCard = ({
  title,
  description,
  icon: Icon
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-purple-500/20 p-2 rounded-md">
            <Icon className="h-5 w-5 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-white/70">{description}</p>
      </CardContent>
    </Card>;
};
const ArsenalDeVendasSection = () => {
  const features = [{
    title: "Calls de Vendas",
    description: "Acesso completo a calls de vendas reais com clientes, desde o primeiro contato até o fechamento",
    icon: Briefcase
  }, {
    title: "Templates de Propostas",
    description: "Modelos profissionais de propostas que converteram clientes de alto valor",
    icon: Rocket
  }, {
    title: "Scripts de Negociação",
    description: "Scripts detalhados para lidar com objeções e fechar negócios com maior taxa de sucesso",
    icon: Handshake
  }];
  return;
};
export default ArsenalDeVendasSection;