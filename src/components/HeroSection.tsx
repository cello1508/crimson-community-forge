import React from "react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="min-h-[80vh] flex flex-col md:flex-row items-center py-10 section-container">
      <div className="flex-1 space-y-6 pr-0 md:pr-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Como Pessoas Sem Experiência Estão Faturando 15 Mil/mês com IA Usando Esse Checklist
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-crimson font-semibold">
            a comunidade de Agentes | n8n que mais cresce no brasil 🇧🇷
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            Não precisa saber programar, esse é o mercado que mais está tornando pessoas comuns com salários de médicos formados, porque apenas estão no lugar certo na hora certa
          </p>
        </div>
        <Button className="bg-crimson hover:bg-crimson/90 text-white px-8 py-6 text-lg rounded-md">
          Quero fazer parte da comunidade
        </Button>
      </div>
      
      <div className="flex-1 mt-10 md:mt-0">
        <div className="container-dark p-8 space-y-6">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-black">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/zKk3rnqlGLY" title="Demonstração da comunidade" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default HeroSection;