
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
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-black">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/zKk3rnqlGLY" 
            title="Demonstração da comunidade" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default InsideViewSection;
