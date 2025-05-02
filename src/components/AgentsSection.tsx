import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
interface AgentTargetProps {
  title: string;
  description: string;
  index: number;
}
const AgentTarget = ({
  title,
  description,
  index
}: AgentTargetProps) => {
  // Circular numbers with the site's crimson color
  return <Card className="overflow-hidden relative transition-all duration-300 hover:shadow-lg border-none bg-zinc-950">
      <div className="absolute top-6 right-6">
        <div className="w-12 h-12 rounded-full bg-[#ea4b71] flex items-center justify-center text-white text-xl font-bold">
          {index + 1}
        </div>
      </div>
      <CardContent className="pt-6 pb-6 px-6 dotted-background">
        <h3 className="text-xl font-bold mb-3 text-zinc-50">{title}</h3>
        <p className="text-zinc-300">{description}</p>
      </CardContent>
    </Card>;
};
const AgentsSection = () => {
  const agents = [{
    title: "QUALIFICADOR DE LEADS",
    description: "Seu Qualificador de Leads de I.A. identifica e separa as melhores oportunidades dentro do CRM, garantindo que sua equipe de vendas foque apenas em clientes prontos para comprar.",
    badges: [{
      text: "Leads mais qualificados"
    }, {
      text: "Automático"
    }, {
      text: "CRM"
    }, {
      text: "24/7"
    }]
  }, {
    title: "SUPORTE",
    description: "Seu Agente de Suporte de I.A. resolve dúvidas, fornece informações e mantém seus clientes engajados 24/7, sem filas de espera. Menos sobrecarga para seu time.",
    badges: [{
      text: "Suporte 24h"
    }, {
      text: "Automático"
    }]
  }, {
    title: "CONTRATOS",
    description: "Seu Agente de I.A. automatiza o envio, preenchimento e acompanhamento de contratos, garantindo que seus clientes recebam e assinem sem demora. Agilize fechamentos e reduza atritos na jornada de compra.",
    badges: [{
      text: "Envio automático"
    }, {
      text: "24/7"
    }, {
      text: "Mais fechamentos, mais lucro!"
    }]
  }, {
    title: "CRIADOR DE PROPOSTAS",
    description: "Chega de perder tempo montando propostas. Seu Agente de I.A. gera, personaliza e envia propostas comerciais de forma automática e instantânea, aumentando suas chances de conversão. Venda mais rápido e impressione seus clientes.",
    badges: [{
      text: "Trabalha 24h por dia"
    }, {
      text: "Envio automático"
    }, {
      text: "Mais rapidez"
    }]
  }, {
    title: "SDR",
    description: "Seu SDR de I.A. qualifica leads com precisão e rapidez, garantindo que apenas as melhores oportunidades cheguem à sua equipe de vendas. O SDR trabalha com leads que já demonstraram interesse.",
    badges: [{
      text: "Trabalha 24h por dia"
    }, {
      text: "Automático"
    }, {
      text: "Aumenta o Lucro 10x mais"
    }]
  }, {
    title: "BDR",
    description: "O BDR atua na prospecção ativa, ou seja, ele busca novos clientes no mercado que ainda não demonstraram interesse na empresa. O objetivo é agendar uma conversa para o time comercial apresentar a solução.",
    badges: [{
      text: "Trabalha 24h por dia"
    }, {
      text: "Automático"
    }, {
      text: "Aumenta o Lucro 10x mais"
    }]
  }, {
    title: "VENDEDOR",
    description: "Seu Vendedor de I.A. conduz negociações com técnicas validadas, responde dúvidas e fecha vendas sem interrupções.",
    badges: [{
      text: "Feito sob medida"
    }, {
      text: "Automático"
    }, {
      text: "Trabalha 24/7"
    }]
  }, {
    title: "AGENDAMENTO",
    description: "Seu Agente de Agendamento automatiza a marcação de reuniões, garantindo que sua equipe comercial só precise aparecer para fechar negócios. Menos no-show, mais reuniões qualificadas e tempo otimizado para o que realmente importa: vender!",
    badges: [{
      text: "Trabalha 24h por dia"
    }, {
      text: "Zero no-show"
    }, {
      text: "Automático"
    }]
  }];
  const agentTargets = [{
    title: "Infoprodutores",
    description: "Se você vende cursos, mentorias ou produtos digitais, seus agentes de I.A. automatizam o contato com leads, qualificam compradores e aumentam suas conversões."
  }, {
    title: "Negócios Locais",
    description: "Atraia e converta clientes para seu restaurante, clínica, lojas, e-commerce, academia ou qualquer negócio local sem depender de atendentes."
  }, {
    title: "Agências",
    description: "Sua agência pode parar de perder tempo com leads frios. Os agentes de I.A. captam, qualificam e segmentam clientes automaticamente, permitindo que sua equipe foque no que realmente importa."
  }, {
    title: "Prestadores de Serviço",
    description: "Seja para consultorias, profissionais liberais ou qualquer serviço, os agentes de I.A. filtram interessados, automatizam atendimentos e preenchem sua agenda sem você precisar levantar um dedo."
  }];
  return <div className="bg-black">
      <section className="section-padding section-container relative overflow-hidden">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            Agentes de IA que você vai dominar
          </h3>
          <p className="text-xl text-crimson mt-2">
            Automatize sua operação de vendas com nossos agentes personalizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {agents.map((agent, index) => <div key={index} className="bg-black overflow-hidden relative group transition-all duration-300">
              <div className="text-white p-6 relative dotted-background bg-zinc-950">
                <div className="absolute top-6 left-6">
                  <ArrowDown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mt-10 mb-1">[a.gente]{agent.title}</h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-white/90">{agent.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {agent.badges.map((badge, index) => <Badge key={index} className="text-black py-1.5 px-3 bg-[#ea4b71]">
                      {badge.text}
                    </Badge>)}
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="text-center mb-20 mt-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pt-10">
            Os [<span className="text-[#ea4b71]">a.gentes</span>] automáticos vendem perfeitamente para...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agentTargets.map((target, index) => <AgentTarget key={index} title={target.title} description={target.description} index={index} />)}
        </div>
      </section>
    </div>;
};
export default AgentsSection;