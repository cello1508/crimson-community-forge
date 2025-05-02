
import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";

interface BadgeItem {
  text: string;
}

interface AgentCardProps {
  title: string;
  description: string;
  badges: BadgeItem[];
}

const AgentCard = ({ title, description, badges }: AgentCardProps) => {
  return (
    <div className="bg-zinc-900 overflow-hidden relative group transition-all duration-300 border border-white/5 rounded-lg refined-dotted-background shadow-lg hover:shadow-crimson/10 hover:border-white/10">
      <div className="text-white p-6 relative">
        <div className="absolute top-6 left-6">
          <ArrowDown className="w-6 h-6 text-crimson" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mt-10 mb-1">Agente {title}</h3>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-white/90">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {badges.map((badge, index) => (
            <Badge key={index} className="text-black py-1.5 px-3 bg-[#ea4b71] font-medium">
              {badge.text}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
