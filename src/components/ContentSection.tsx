import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Play } from "lucide-react";
interface ModuleAccordionProps {
  title: string;
  lessons: string[];
}
const ModuleAccordion = ({
  title,
  lessons
}: ModuleAccordionProps) => {
  return <Accordion type="single" collapsible className="border border-white/10 rounded-md overflow-hidden">
      <AccordionItem value={title} className="border-b-0">
        <AccordionTrigger className="px-4 py-3 hover:bg-white/5 data-[state=open]:bg-white/5">
          <div className="flex items-center gap-2">
            <div className="text-left">
              <p>{title}</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 p-2">
            {lessons.map((lesson, index) => <div key={index} className="px-4 py-2 rounded hover:bg-white/5 flex items-center justify-between transition-colors">
                <span>{lesson}</span>
                <div className="h-6 w-6 rounded-full bg-crimson/20 flex items-center justify-center">
                  <Play className="h-3 w-3 text-crimson" />
                </div>
              </div>)}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>;
};
const SupportCard = () => {
  return <Card className="bg-dark border-white/10">
      <CardHeader>
        <CardTitle className="text-xl">Calls de suporte</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-white/60">Toda quarta às 19:30</p>
        
        <div className="container-dark p-4 rounded">
          <p className="text-center text-sm">Uma print talvez? Ou depoimentos</p>
        </div>
      </CardContent>
    </Card>;
};
const ContentSection = () => {
  const modules = [{
    title: "Módulo 01: Introdução à Infraestrutura | Instalando ferramentas",
    lessons: ["Visão Geral da Infraestrutura", "Contratando Domínio", "Contratando sua VPS pela Hetzner (Maior custo x benefício)", "Contratando sua VPS pela Hostinger (Mais recomendado e fácil)", "Pré-requisitos para subir a VPS", "Documentação da VPS e Registros de DNS", "Subindo VPS Manualmente (RECOMENDADO)", "Subindo a Infraestrutura do Zero com EasyPanel (JEITO FÁCIL)", "Comprando um Número Virtual", "Conectando WhatsApp na EvolutionAPI", "Como Atualizar suas Stacks Corretamente"]
  }, {
    title: "Módulo 02: Aulas Extras – Adicionais ou outros meios de instalação",
    lessons: ["Utilizando N8N Cloud (Jeito Fácil)", "Subindo VPS com o OrionSetup", "Instalando o N8N no seu Computador (Jeito fácil)", "Usando IAs gratuitas para criar agentes no N8N - Groq", "Criando/Melhorando seu Prompt com Nosso GPT Especialista", "Instalando Nodes da Comunidade no N8N"]
  }, {
    title: "Módulo 03: Credenciais necessárias",
    lessons: ["Configurando Credencial do Google no N8N", "Configurando Credencial da OpenAI", "Configurando Credencial do RabbitMQ"]
  }, {
    title: "Módulo 04: Visão geral | N8N",
    lessons: ["Introdução aos nodes essenciais", "Visão Geral do N8N – O que você precisa saber", "Como instalar Templates"]
  }, {
    title: "Módulo 05: Mapeamento de projetos",
    lessons: ["Mapeamento | Parte 1", "Mapeamento | Parte 2", "Clientes reais mapeados"]
  }, {
    title: "Módulo 06: Do 0 ao Primeiro Agente de IA | SDR",
    lessons: ["Projeto | Webhook | Setando Dados", "Filters e introdução ao Switch", "Buffer de mensagens", "Tratamento de Áudios e Imagens", "Do prompt ao AGENTE DE IA", "Colocando Tool de Docs | De acordo com horário da MSG", "Conta na Eleven Labs | Aleatorizar áudios", "Tool de Áudio | Como fazer"]
  }];
  const extraContent = ["aula 01", "aula 02", "aula 03"];
  return <section className="section-padding bg-black section-container">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Conteúdos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Aulas com Felipe</h3>
          <div className="space-y-3">
            {modules.slice(0, 3).map((module, index) => <ModuleAccordion key={index} title={module.title} lessons={module.lessons} />)}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Aulas com Marcelo</h3>
          <div className="space-y-3">
            {modules.slice(3, 6).map((module, index) => <ModuleAccordion key={index} title={module.title} lessons={module.lessons} />)}
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Conteúdos extras</h3>
            <Card className="bg-dark border-white/10">
              <CardContent className="p-4 space-y-2">
                {extraContent.map((item, index) => <div key={index} className="px-3 py-2 rounded border border-white/10">
                    <span>{item}</span>
                  </div>)}
              </CardContent>
            </Card>
          </div>
          
          <SupportCard />
        </div>
      </div>
    </section>;
};
export default ContentSection;