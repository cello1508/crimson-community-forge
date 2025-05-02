
import React from "react";

const MentorCard = ({ name = "Mentor", role = "Especialista" }) => {
  return (
    <div className="container-dark aspect-[3/4] rounded-lg overflow-hidden relative group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-white/60">{role}</p>
      </div>
    </div>
  );
};

const MentorsSection = () => {
  return (
    <section className="section-padding bg-black section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Conheça seus mentores
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <MentorCard name="Mentor Principal" role="Fundador e Especialista" />
        <MentorCard name="Mentor Auxiliar" role="Especialista em Tecnologia" />
      </div>
    </section>
  );
};

export default MentorsSection;
