import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
interface AgentTargetProps {
  title: string;
  description: string;
  index: number;
  imageUrl: string;
}
const AgentTarget = ({
  title,
  description,
  index,
  imageUrl
}: AgentTargetProps) => {
  return <div className="flex flex-col h-full border border-zinc-800 hover:border-crimson/30 rounded-lg overflow-hidden transition-all duration-300 bg-black">
      {/* Top image section */}
      <div className="relative h-72 bg-black">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover object-center opacity-90" />
        
        {/* Title overlay at top */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4">
          
        </div>
        
        {/* Number badge */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center justify-center w-8 h-8 bg-crimson rounded-full text-white font-bold text-sm">
            {index + 1}
          </div>
        </div>
      </div>
      
      {/* Bottom text section */}
      <div className="flex-1 p-6 bg-black border-t border-zinc-800">
        <p className="text-white/80">{description}</p>
      </div>
    </div>;
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
    description: "Se você vende cursos, mentorias ou produtos digitais, seus agentes de I.A. automatizam o contato com leads, qualificam compradores e aumentam suas conversões.",
    imageUrl: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/AJz7go4gUbXIm31hzznTRMPchKaf3fSh_b8af581c81e05c851a530d32681605e3e6e765854707807609a5728b20a4fce3.png"
  }, {
    title: "Negócios Locais",
    description: "Atraia e converta clientes para seu restaurante, clínica, lojas, e-commerce, academia ou qualquer negócio local sem depender de atendentes.",
    imageUrl: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/m7uNOXS7Ctrdzo7iesxCxGyjZ9aDmAaa_35353d76a99d11e8f4efc956ead7839863be39e007cd0d2b3682bfc73ae86a57.png"
  }, {
    title: "Pessoas que querem sair da CLT",
    description: "O mercado de automação é o melhor caminho para conquistar sua independência financeira. Com agentes de I.A. trabalhando para você 24/7, é possível criar um negócio escalável sem precisar gerenciar equipes.",
    imageUrl: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/tc4o1uQ6MFC1UztnseDczPwE4Ooxs2MU_5ed748916720b01055d07c42233740cf63cd8541601b2b936de24e1e65e97b61.png"
  }, {
    title: "Agências",
    description: "Sua agência pode parar de perder tempo com leads frios. Os agentes de I.A. captam, qualificam e segmentam clientes automaticamente, permitindo que sua equipe foque no que realmente importa.",
    imageUrl: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/tYbADLz8j3Uc5TRYduXmGXrp8k3pitG8_76f31433fc2e5325e7f437feca8e2eda39412a61e84853c986b16b32a143d043.png"
  }, {
    title: "Prestadores de Serviço",
    description: "Seja para consultorias, profissionais liberais ou qualquer serviço, os agentes de I.A. filtram interessados, automatizam atendimentos e preenchem sua agenda sem você precisar levantar um dedo.",
    imageUrl: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/96pMshQpDkoS9ufjlM9oSJBrYhXJCMJJ_a1eaddb28e53402d153dd05de134cf4dfe44d55c882c1ff921eab33b3a62a32f.png"
  }, {
    title: "Começar no digital",
    description: "O mercado digital é o melhor caminho para quem quer iniciar um negócio online. Com agentes de I.A. trabalhando para você 24/7, é possível criar uma presença digital efetiva sem conhecimento técnico avançado.",
    imageUrl: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/SC5qMYlv6arTq4ClljUfSA5mnptzLzm4_2d98629b6e4991a0206700c991545c8f5cca66df72bbec917311e8d2f06742c0.png"
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
          {agents.map((agent, index) => <div key={index} className="bg-zinc-900 overflow-hidden relative group transition-all duration-300 border border-white/5 rounded-lg refined-dotted-background shadow-lg hover:shadow-crimson/10 hover:border-white/10">
              <div className="text-white p-6 relative">
                <div className="absolute top-6 left-6">
                  <ArrowDown className="w-6 h-6 text-crimson" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mt-10 mb-1">Agente {agent.title}</h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-white/90">{agent.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {agent.badges.map((badge, index) => <Badge key={index} className="text-black py-1.5 px-3 bg-[#ea4b71] font-medium">
                      {badge.text}
                    </Badge>)}
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="text-center mb-20 mt-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pt-10">Os Agentes automáticos vendem perfeitamente para...</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {agentTargets.map((target, index) => <AgentTarget key={index} title={target.title} description={target.description} index={index} imageUrl={target.imageUrl} />)}
        </div>

        <div className="text-center mt-16">
          
        </div>
      </section>
    </div>;
};
export default AgentsSection;