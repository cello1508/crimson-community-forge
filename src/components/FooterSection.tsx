
import React from "react";
import { Button } from "@/components/ui/button";
const FooterSection = () => {
  return <footer className="bg-black py-12 border-t border-white/10">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <p className="text-xl mb-2">Comunidade Checklist</p>
            <p className="text-white/60">Transformando vidas através do conhecimento em Automações e Agentes de IA</p>
          </div>
          
          <Button className="bg-crimson hover:bg-crimson/90 text-white px-8 py-6 mb-8 text-lg">
            Quero fazer parte agora
          </Button>
          
          <div className="text-sm text-white/40">
            <p>© {new Date().getFullYear()} MGTInc e Marcelo Anders. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="hover:text-crimson">Termos de Uso</a>
              <a href="#" className="hover:text-crimson">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default FooterSection;
