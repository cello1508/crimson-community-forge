
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AgentTargetProps {
  title: string;
  description: string;
  index: number;
  imageUrl: string;
}

const AgentTarget = ({
  title,
  description,
  index,
  imageUrl
}: AgentTargetProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col h-full border border-zinc-800 hover:border-crimson/30 rounded-lg overflow-hidden transition-all duration-300 bg-black">
      {/* Top image section */}
      <div className={`relative ${isMobile ? 'h-[800px]' : 'h-[600px]'} bg-black`}>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover object-center opacity-90" />
        
        {/* Title overlay at top */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4">
          
        </div>
        
        {/* Number badge */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center justify-center w-8 h-8 bg-crimson rounded-full text-white font-bold text-sm">
            {index + 1}
          </div>
        </div>
      </div>
      
      {/* Bottom text section */}
      <div className="flex-1 p-6 bg-black border-t border-zinc-800">
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  );
};

export default AgentTarget;
