
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  index: number;
}

const TESTIMONIALS = [
  {
    comment: "Comecei sem experiência e agora faturo mais de 15 mil por mês com projetos de IA!",
    author: "Carlos Silva",
    role: "Agente N8n"
  },
  {
    comment: "A comunidade me deu todo o suporte para criar meu negócio digital com IA.",
    author: "Marina Costa",
    role: "Desenvolvedora de Automações"
  },
  {
    comment: "Nunca imaginei que conseguiria trabalhar com tecnologia sem saber programar.",
    author: "Pedro Santos",
    role: "Especialista em IA"
  },
  {
    comment: "Transformei minha carreira em apenas 3 meses após entrar na comunidade.",
    author: "Juliana Mendes",
    role: "Empreendedora Digital"
  }
];

const TestimonialCard = ({ index }: TestimonialCardProps) => {
  const testimonial = TESTIMONIALS[index];
  
  return (
    <Card className="aspect-square bg-dark rounded-lg border border-white/10 hover:border-crimson/30 transition-all duration-300 overflow-hidden">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-1 flex flex-col">
          <div className="text-crimson text-4xl mb-4">"</div>
          <p className="text-white/90 flex-1">{testimonial.comment}</p>
        </div>
        
        <div className="mt-4">
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm text-crimson">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

interface MentorCardProps {
  name: string;
  role: string;
  bio: string;
  achievements: string[];
  imageSrc: string;
}

const MentorCard = ({ name, role, bio, achievements, imageSrc }: MentorCardProps) => {
  return (
    <div className="bg-[#121212] rounded-lg overflow-hidden">
      <div className="relative">
        <img 
          src={imageSrc} 
          alt={name}
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
          <h3 className="text-2xl font-bold text-[#c4f135]">{name}</h3>
          <p className="text-white">{role}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-white/80 mb-6">{bio}</p>
        
        <div className="space-y-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-[#c4f135] mt-1">✓</span>
              <p className="text-white/90">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const YoutubeFeedbackSection = () => {
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
      imageSrc: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/ZFxnAM51k7R20jlyhnUBdIE0gn1xCgN2_6fa8bd2b0330e014de64236cbdf36f372cb2c615a19c436ba3d7076efe143ff6.jpg"
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
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Conheça nossos mentores
        </h2>
        <p className="text-xl mt-6 mb-10">Especialistas que vão te guiar nessa jornada</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} {...mentor} />
        ))}
      </div>
      
      <div className="mt-20 mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Já ajudei milhares de pessoas no youtube de forma 100% gratuita
        </h2>
        <p className="text-xl mt-6 mb-10 text-center">Depoimentos do youtube</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[0, 1, 2, 3].map((index) => (
          <TestimonialCard key={index} index={index} />
        ))}
      </div>
    </section>
  );
};

export default YoutubeFeedbackSection;
