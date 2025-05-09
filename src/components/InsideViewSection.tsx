
import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
const InsideViewSection = () => {
  return <section className="section-padding bg-black section-container">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">Não sabe o que é o N8n? Veja o vídeo abaixo.</h2>
      </div>
      
      <div className="container-dark p-6 max-w-4xl mx-auto aspect-video">
        <div className="w-full h-full rounded-lg overflow-hidden bg-black">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/cprOUiu9B8A" title="Demonstração da comunidade" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </div>
      </div>
    </section>;
};
export default InsideViewSection;
