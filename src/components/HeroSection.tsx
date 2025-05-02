
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex flex-col md:flex-row items-center py-10 section-container">
      <div className="flex-1 space-y-6 pr-0 md:pr-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Forge seu futuro digital na nossa comunidade
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Desenvolva habilidades essenciais, conecte-se com profissionais e acelere sua carreira com nossa metodologia exclusiva e suporte personalizado.
          </p>
        </div>
        <Button className="bg-crimson hover:bg-crimson/90 text-white px-8 py-6 text-lg rounded-md">
          Quero fazer parte da comunidade
        </Button>
      </div>
      
      <div className="flex-1 mt-10 md:mt-0">
        <div className="container-dark p-8 space-y-6">
          <div className="aspect-w-16 aspect-h-9 rounded-lg bg-black flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl mb-4">Vídeo de explicação</p>
              <div className="w-16 h-16 mx-auto rounded-full bg-crimson/20 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-crimson/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-crimson flex items-center justify-center">
                    <span className="text-white text-3xl">▶</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Desmontração</h3>
            <p className="text-white/80">
              Veja como nossa comunidade funciona na prática e como podemos ajudar você a alcançar seus objetivos.
            </p>
            
            <h3 className="text-xl font-semibold">Depoimentos</h3>
            <p className="text-white/80">
              Histórias reais de membros que transformaram suas vidas profissionais através da nossa comunidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
