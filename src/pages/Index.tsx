
import React from "react";
import HeroSection from "@/components/HeroSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BenefitsSection from "@/components/BenefitsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import InsideViewSection from "@/components/InsideViewSection";
import ContentSection from "@/components/ContentSection";
import YoutubeFeedbackSection from "@/components/YoutubeFeedbackSection";
import MentorsSection from "@/components/MentorsSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import AgentsSection from "@/components/AgentsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <TestimonialsCarousel />
      <BenefitsSection />
      <DifferentialsSection />
      <AgentsSection />
      <InsideViewSection />
      <ContentSection />
      <YoutubeFeedbackSection />
      <MentorsSection />
      <PricingSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};

export default Index;
