
import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Check } from "lucide-react";

interface AgentCardProps {
  title: string;
  subtitle: string;
  description: string;
  badges: { text: string }[];
}

const AgentCard = ({ title, subtitle, description, badges }: AgentCardProps) => {
  return (
    <div className="container-dark overflow-hidden relative group transition-all duration-300 hover:border-crimson/70">
      <div className="bg-[#d3fa46] text-black p-6 relative">
        <div className="absolute top-6 left-6">
          <ArrowDown className="w-6 h-6 text-black" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mt-10 mb-1">[a.gente]{title}</h3>
        {subtitle && <p className="text-lg font-medium">{subtitle}</p>}
      </div>
      <div className="p-6 space-y-4">
        <p className="text-white/90">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {badges.map((badge, index) => (
            <Badge 
              key={index} 
              className="bg-black border border-white/10 text-white hover:bg-black/80 flex items-center gap-1.5 py-1.5 px-3"
            >
              <Check className="w-3.5 h-3.5 text-crimson" />
              {badge.text}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const AgentsSection = () => {
  const agents = [
    {
      title: "SDR",
      subtitle: "de I.A.",
      description: "Seu SDR de I.A. qualifica leads com precisão e rapidez, garantindo que apenas as melhores oportunidades cheguem à sua equipe de vendas. O SDR trabalha com leads que já demonstraram interesse.",
      badges: [
        { text: "Trabalha 24h por dia" },
        { text: "Automático" },
        { text: "Aumenta o Lucro 10x mais" }
      ]
    },
    {
      title: "BDR",
      subtitle: "",
      description: "O BDR atua na prospecção ativa, ou seja, ele busca novos clientes no mercado que ainda não demonstraram interesse na empresa. O objetivo é agendar uma conversa para o time comercial apresentar a solução.",
      badges: [
        { text: "Trabalha 24h por dia" },
        { text: "Aumenta o Lucro 10x mais" },
        { text: "Automático" }
      ]
    },
    {
      title: "VENDEDOR",
      subtitle: "",
      description: "Seu Vendedor de I.A. conduz negociações com técnicas validadas, responde dúvidas e fecha vendas sem interrupções.",
      badges: [
        { text: "Feito sob medida" },
        { text: "Automático" },
        { text: "Trabalha 24/7" }
      ]
    },
    {
      title: "AGENDAMENTO",
      subtitle: "",
      description: "Seu Agente de Agendamento automatiza a marcação de reuniões, garantindo que sua equipe comercial só precise aparecer para fechar negócios. Menos no-show, mais reuniões qualificadas e tempo otimizado para o que realmente importa: vender!",
      badges: [
        { text: "Trabalha 24h por dia" },
        { text: "Zero no-show" },
        { text: "Automático" }
      ]
    },
    {
      title: "QUALIFICADOR DE LEADS",
      subtitle: "",
      description: "Seu Qualificador de Leads de I.A. identifica e separa as melhores oportunidades dentro do CRM, garantindo que sua equipe de vendas foque apenas em clientes prontos para comprar.",
      badges: [
        { text: "Leads mais qualificados" },
        { text: "Automático" },
        { text: "CRM" },
        { text: "24/7" }
      ]
    },
    {
      title: "SUPORTE",
      subtitle: "",
      description: "Seu Agente de Suporte de I.A. resolve dúvidas, fornece informações e mantém seus clientes engajados 24/7, sem filas de espera. Menos sobrecarga para seu time.",
      badges: [
        { text: "Suporte 24h" },
        { text: "Automático" }
      ]
    },
    {
      title: "CONTRATOS",
      subtitle: "",
      description: "Seu Agente de I.A. automatiza o envio, preenchimento e acompanhamento de contratos, garantindo que seus clientes recebam e assinem sem demora. Agilize fechamentos e reduza atritos na jornada de compra.",
      badges: [
        { text: "Envio automático" },
        { text: "24/7" },
        { text: "Mais fechamentos, mais lucro!" }
      ]
    },
    {
      title: "CRIADOR DE PROPOSTAS",
      subtitle: "",
      description: "Chega de perder tempo montando propostas. Seu Agente de I.A. gera, personaliza e envia propostas comerciais de forma automática e instantânea, aumentando suas chances de conversão. Venda mais rápido e impressione seus clientes.",
      badges: [
        { text: "Trabalha 24h por dia" },
        { text: "Envio automático" },
        { text: "Mais rapidez" }
      ]
    }
  ];

  return (
    <section className="section-padding bg-black section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Agentes de IA que você vai dominar
        </h2>
        <p className="text-xl text-crimson">
          Automatize sua operação de vendas com nossos agentes personalizados
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.map((agent, index) => (
          <AgentCard
            key={index}
            title={agent.title}
            subtitle={agent.subtitle}
            description={agent.description}
            badges={agent.badges}
          />
        ))}
      </div>
    </section>
  );
};

export default AgentsSection;
