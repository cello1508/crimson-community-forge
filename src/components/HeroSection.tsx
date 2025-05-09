
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Database, Webhook, Code, Settings, ArrowRight } from "lucide-react";

const NodeIcon = ({ icon: Icon, delay }: { icon: React.ElementType, delay: number }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Set initial delay before starting animation
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  useEffect(() => {
    if (!visible) return;
    
    // Create animation loop that toggles visibility every few seconds
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, 3000 + Math.random() * 2000); // Random interval between 3-5 seconds
    
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div 
      className={`absolute transform transition-all duration-700 ease-in-out ${
        visible 
          ? "opacity-100 scale-100" 
          : "opacity-0 scale-50"
      }`}
      style={{
        top: `${20 + Math.random() * 60}%`,
        left: `${Math.random() * 80}%`,
      }}
    >
      <div className="bg-slate-800 p-3 rounded-md border border-slate-600 shadow-lg">
        <Icon className="h-7 w-7 text-blue-400" />
      </div>
    </div>
  );
};

const HeroSection = () => {
  const nodes = [
    { icon: Database, delay: 300 },
    { icon: Webhook, delay: 1000 },
    { icon: Code, delay: 1700 },
    { icon: Settings, delay: 2400 },
    { icon: ArrowRight, delay: 3100 }
  ];

  return <section className="min-h-[80vh] flex flex-col md:flex-row items-center py-10 section-container relative overflow-hidden">
      {/* N8N Nodes Animation */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        {nodes.map((node, index) => (
          <NodeIcon key={index} icon={node.icon} delay={node.delay} />
        ))}
      </div>
      
      <div className="flex-1 space-y-6 pr-0 md:pr-8 z-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Como Pessoas Sem Experiência Estão Faturando 15 Mil/mês com IA Usando Esse Checklist
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-crimson font-semibold">A comunidade de Agentes | n8n que mais cresce no brasil 🇧🇷</h2>
          <p className="text-lg md:text-xl text-white/80">
            Não precisa saber programar, esse é o mercado que mais está tornando pessoas comuns com salários de médicos formados, porque apenas estão no lugar certo na hora certa
          </p>
        </div>
        <Button className="bg-crimson hover:bg-crimson/90 text-white px-8 py-6 text-lg rounded-md">
          Quero fazer parte da comunidade
        </Button>
      </div>
      
      <div className="flex-1 mt-10 md:mt-0 z-10">
        <div className="container-dark p-6 rounded-lg w-full max-w-xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden bg-black">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/zKk3rnqlGLY" title="Demonstração da comunidade" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
