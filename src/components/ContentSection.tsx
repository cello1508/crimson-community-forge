
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Play } from "lucide-react";

interface ModuleAccordionProps {
  title: string;
  lessons: string[];
}

const ModuleAccordion = ({ title, lessons }: ModuleAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="border border-white/10 rounded-md overflow-hidden">
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
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded hover:bg-white/5 flex items-center justify-between transition-colors"
              >
                <span>{lesson}</span>
                <div className="h-6 w-6 rounded-full bg-crimson/20 flex items-center justify-center">
                  <Play className="h-3 w-3 text-crimson" />
                </div>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const SupportCard = () => {
  return (
    <Card className="bg-dark border-white/10">
      <CardHeader>
        <CardTitle className="text-xl">Calls de suporte</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-white/60">Toda quarta às 19:30</p>
        
        <div className="container-dark p-4 rounded">
          <p className="text-center text-sm">Uma print talvez? Ou depoimentos</p>
        </div>
      </CardContent>
    </Card>
  );
};

const ContentSection = () => {
  const modules = [
    {
      title: "módulo 01",
      lessons: ["aula 01", "aula 02", "aula 03", "aula 04"]
    },
    {
      title: "módulo 02",
      lessons: ["aula 01", "aula 02", "aula 03", "aula 04"]
    },
    {
      title: "módulo 03",
      lessons: ["aula 01", "aula 02", "aula 03", "aula 04"]
    },
    {
      title: "módulo 04",
      lessons: ["aula 01", "aula 02", "aula 03", "aula 04"]
    }
  ];
  
  const extraContent = ["aula 01", "aula 02", "aula 03"];

  return (
    <section className="section-padding bg-black section-container">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Conteúdos/Entregáveis
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Checklist</h3>
          <div className="space-y-3">
            {modules.map((module, index) => (
              <ModuleAccordion key={index} title={module.title} lessons={module.lessons} />
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Mentorias gravadas</h3>
          <div className="space-y-3">
            {modules.map((module, index) => (
              <ModuleAccordion key={index} title={module.title} lessons={module.lessons} />
            ))}
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Conteúdos extras</h3>
            <Card className="bg-dark border-white/10">
              <CardContent className="p-4 space-y-2">
                {extraContent.map((item, index) => (
                  <div key={index} className="px-3 py-2 rounded border border-white/10">
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <SupportCard />
          
          <div className="container-dark p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Inserir o arsenal de vendas</h3>
            <p className="text-sm text-white/60">
              Embaixo colocar observação que só será incluso se ocmprar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
