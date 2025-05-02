import React from "react";
import { X } from "lucide-react";
const DifferentialsSection = () => {
  return <section className="section-padding bg-black section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Diferenciais
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
        <div className="col-span-1 md:col-span-2 container-dark p-6 h-full min-h-[300px]">
          <h3 className="text-xl font-semibold mb-4">Comunidade | Checklist</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-crimson flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Roadmap personalizado para sua jornada</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-crimson flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Ferramentas e recursos exclusivos</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-crimson flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Mentorias semanais com feedback direto</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-crimson flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Projetos práticos para portfolio</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-crimson flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>Networking com empresas parceiras</span>
            </li>
          </ul>
        </div>

        <div className="col-span-1 flex items-center justify-center">
          <X className="w-12 h-12 text-crimson" />
        </div>

        <div className="col-span-1 md:col-span-2 container-dark p-6 h-full min-h-[300px]">
          <h3 className="text-xl font-semibold mb-4">Outras comunidades</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <span className="text-gray-400">Conteúdo generalista e superficial</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <span className="text-gray-400">Suporte limitado ou inexistente</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <span className="text-gray-400">Sem acompanhamento personalizado</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <span className="text-gray-400">Conteúdo desatualizado</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <span className="text-gray-400">Foco apenas em conteúdo teórico</span>
            </li>
          </ul>
        </div>
      </div>
    </section>;
};
export default DifferentialsSection;