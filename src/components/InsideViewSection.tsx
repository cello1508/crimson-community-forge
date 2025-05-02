
import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const InsideViewSection = () => {
  return (
    <section className="section-padding bg-black section-container">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          Você terá acesso às soluções mais atualizadas do mercado
        </h2>
      </div>
      
      <div className="container-dark p-6 max-w-4xl mx-auto">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-black flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full bg-crimson/20 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-crimson/40 flex items-center justify-center">
                  <Button className="w-14 h-14 rounded-full bg-crimson flex items-center justify-center p-0">
                    <Play className="h-6 w-6 ml-1" />
                  </Button>
                </div>
              </div>
              <p className="text-lg font-medium mb-1">VÍDEO OU GIF BEM EDITADO MOSTRANDO A COMUNIDADE POR DENTRO</p>
              <p className="text-sm text-white/60">ALGO RÁPIDO (menos de 30s)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideViewSection;
