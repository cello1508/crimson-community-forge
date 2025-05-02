
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Gift, DollarSign } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  subtitle?: string;
  features: string[];
  highlight?: boolean;
  ctaText?: string;
  originalPrice?: string;
  discountText?: string;
  bonuses?: {
    title: string;
    description: string;
  }[];
  priorityNote?: string;
  dailyPrice?: string;
}

const PricingCard = ({
  title,
  subtitle,
  price,
  features,
  highlight = false,
  ctaText = "Começar agora",
  originalPrice,
  discountText,
  bonuses,
  priorityNote,
  dailyPrice
}: PricingCardProps) => {
  return <Card className={`border-zinc-800 bg-black h-full flex flex-col ${highlight ? 'border-2 border-crimson/70' : ''}`}>
      <CardContent className="p-8 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          {subtitle && <p className="text-white/70 mb-4">{subtitle}</p>}
          
          {/* Price section */}
          <div className="mb-2 flex flex-col items-center">
            {originalPrice && <div className="flex items-center gap-3 mb-2">
                <span className="text-white/60 line-through text-lg">De R$ {originalPrice}</span>
                <span className="text-crimson font-bold">{discountText}</span>
              </div>}
            <div className="flex items-center justify-center">
              <span className="text-4xl font-bold">R$ {price}</span>
            </div>
            {dailyPrice && (
              <div className="mt-2 flex items-center gap-1.5 bg-purple-900/30 px-3 py-1 rounded-full">
                <DollarSign size={14} className="text-purple-300" />
                <span className="text-sm text-purple-200">{dailyPrice}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Feature list */}
        <div className="space-y-4 mb-8 flex-grow">
          {priorityNote && <div className="mb-2">
              <p className="font-semibold text-green-400">{priorityNote}</p>
              <p className="text-sm text-white/70">geralmente passamos projetos de 10 a 15k para esses membros</p>
            </div>}
          
          {features.map((feature, index) => <div key={index} className="flex items-start gap-3">
              <Check size={18} className="text-crimson mt-1 shrink-0" />
              <span className="text-white/80">{feature}</span>
            </div>)}
        </div>
        
        {/* Bonuses */}
        {bonuses && bonuses.length > 0 && <div className="space-y-4 mb-8">
            {bonuses.map((bonus, index) => <div key={index} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Gift size={18} className="text-crimson shrink-0" />
                  <span className="font-semibold">{bonus.title}</span>
                </div>
                <p className="text-sm text-white/60 pl-7">{bonus.description}</p>
              </div>)}
          </div>}
        
        {/* CTA Button */}
        <Button className={`w-full ${highlight ? 'bg-crimson hover:bg-crimson/90' : 'bg-white/10 hover:bg-white/20'}`}>
          {ctaText}
        </Button>
      </CardContent>
    </Card>;
};

const PricingSection = () => {
  const plans = [{
    title: "7 dias",
    subtitle: "Perfeito para ver se é para você",
    price: "47,00",
    features: ["7 dias de acesso a comunidade", "Todos os conteúdos gravados", "Acesso as Calls de Suporte semanais", "Acesso as atualizações semanais da comunidade", "Aulas do Zero no N8n"]
  }, {
    title: "Trimestral",
    price: "297,00",
    features: ["3 meses de acesso a comunidade", "Garantia de 7 dias", "Todos os conteúdos gravados", "Grupo de networking no WhatsApp", "Acesso as Calls de Suporte semanais", "Acesso as atualizações semanais da comunidade"],
    bonuses: [{
      title: "Agente Gerador de Prompt",
      description: "Nosso Agente GPT que melhora e organiza nossos prompts para desenvolver IAs para clientes em 76% mais assertivo"
    }]
  }, {
    title: "Anual - Mais indicado",
    price: "797,00",
    originalPrice: "1.475",
    discountText: "46% OFF",
    highlight: true,
    priorityNote: "Prioridade a pegar implementações da nossa Agencia de IA",
    dailyPrice: "Menos de R$2,19 por dia!",
    features: ["1 Ano de acesso a comunidade", "Garantia de 7 dias", "Todos os conteúdos gravados", "Grupo de networking no WhatsApp", "Acesso as Calls de Suporte semanais", "Imersões de Micro saas", "Acesso prioritário a templates", "Acesso as atualizações semanais da comunidade"],
    bonuses: [{
      title: "Bonus ao arsenal de vendas",
      description: "Calls com clientes reais, desde mapeamento cold call e fechamento e até mesmo nossas propostas"
    }, {
      title: "1 hora de mentoria exclusiva",
      description: "Geralmente uma Call com o TIME da MGTInc gira em torno de R$350 a hora, vamos te dar uma consultoria gratuita, ao entrar no anual"
    }, {
      title: "Agente Gerador de Prompt",
      description: "Nosso Agente GPT que melhora e organiza nossos prompts para desenvolver IAs para clientes em 76% mais assertivo"
    }]
  }];
  return <section className="section-padding bg-black section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Planos
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => <PricingCard key={index} title={plan.title} subtitle={plan.subtitle} price={plan.price} features={plan.features} highlight={plan.highlight} originalPrice={plan.originalPrice} discountText={plan.discountText} bonuses={plan.bonuses} priorityNote={plan.priorityNote} dailyPrice={plan.dailyPrice} />)}
      </div>
    </section>;
};

export default PricingSection;
