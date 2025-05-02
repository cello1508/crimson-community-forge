
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award } from "lucide-react";

interface MentorCardProps {
  name: string;
  role: string;
  bio: string;
  achievements: string[];
  imageSrc: string;
  isPrimary?: boolean;
}

const MentorCard = ({ name, role, bio, achievements, imageSrc, isPrimary = false }: MentorCardProps) => {
  return (
    <div className={`bg-dark rounded-lg overflow-hidden border ${isPrimary 
      ? "border-crimson/50 shadow-lg shadow-crimson/20" 
      : "border-white/10 hover:border-crimson/30"} transition-all duration-300`}>
      <div className="relative">
        <div className="h-80 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
          <div className="flex items-center gap-2">
            {isPrimary && <Award className="text-crimson" size={24} />}
            <h3 className={`${isPrimary ? "text-3xl" : "text-2xl"} font-bold ${isPrimary ? "text-crimson" : "text-crimson"}`}>{name}</h3>
          </div>
          <p className="text-white">{role}</p>
        </div>
      </div>
      
      <div className={`p-6 ${isPrimary ? "bg-gradient-to-b from-dark to-black" : ""}`}>
        <p className="text-white/80 mb-6">{bio}</p>
        
        <div className="space-y-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-crimson mt-1">✓</span>
              <p className="text-white/90">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MentorsSection = () => {
  const mentors = [
    {
      name: "Marcelo Anders",
      role: "Especialista em Automação e IA",
      bio: "Marcelo ingressou no mercado de automação e inteligência artificial há mais de dois anos e, desde então, consolidou-se como uma referência na área. Com vasta experiência no uso da plataforma N8N, ele já atendeu diversos clientes, otimizando processos e impulsionando a eficiência operacional.",
      achievements: [
        "Mais de 120 alunos destravados",
        "Mais de R$150 mil faturados com implementações",
        "Pioneiro em Agentes de IA dentro do n8n"
      ],
      imageSrc: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/ZFxnAM51k7R20jlyhnUBdIE0gn1xCgN2_6fa8bd2b0330e014de64236cbdf36f372cb2c615a19c436ba3d7076efe143ff6.jpg",
      isPrimary: true
    },
    {
      name: "Felipe Tambara",
      role: "Especialista em Infra",
      bio: "Felipe iniciou no mercado de automações como estagiário. Após ingressar na comunidade de Marcelo Anders, teve seus primeiros resultados e foi convidado para fazer parte da equipe. Hoje, é sócio em projetos que já chegaram à marca de 40 mil reais.",
      achievements: [
        "Ex membro da turma 2",
        "Especialista em mapeamento",
        "Organização empresarial e Desenvolvimento de projetos"
      ],
      imageSrc: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/Vj74jOaZaKT9HkKWsNyhdrxFvgx3enwJ_4c58c3d4a679244fe46709c0c615059cdbfc5301f6024a710459574b84360129.jpeg"
    }
  ];

  return (
    <section className="section-padding bg-black section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Conheça seus mentores
      </h2>
      <p className="text-xl text-center text-crimson mb-12">Aprenda com quem já está no mercado</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} {...mentor} />
        ))}
      </div>
    </section>
  );
};

export default MentorsSection;
