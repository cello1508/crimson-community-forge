
import React from "react";

interface TestimonialCardProps {
  index: number;
}

const TestimonialCard = ({ index }: TestimonialCardProps) => {
  return (
    <div className="aspect-square bg-dark rounded-lg border border-white/10 hover:border-crimson/30 transition-all duration-300"></div>
  );
};

const YoutubeFeedbackSection = () => {
  return (
    <section className="section-padding bg-black section-container">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Já ajudei milhares de pessoas no youtube de forma 100% gratuita
        </h2>
        <p className="text-xl mt-6 mb-10">Depoimentos do youtube</p>
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
