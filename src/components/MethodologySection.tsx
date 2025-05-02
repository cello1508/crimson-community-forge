
import React from "react";

type MethodologyStepProps = {
  title: string;
  isLast?: boolean;
};

const MethodologyStep: React.FC<MethodologyStepProps> = ({ title, isLast = false }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-2 border-white/30 px-6 py-4 w-full md:w-[500px] text-center">
        <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
      </div>
      {!isLast && (
        <div className="h-10 w-0.5 bg-white/30 my-2"></div>
      )}
    </div>
  );
};

const MethodologySection = () => {
  return (
    <div className="w-36 h-36 rounded-full border-2 border-white/20 flex items-center justify-center relative">
      <span className="text-lg font-medium">metodologia</span>
      <div className="absolute w-full h-full">
        <a href="#metodologia" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <span className="sr-only">Ver nossa metodologia</span>
        </a>
        <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-white/30"></div>
      </div>
    </div>
  );
};

export default MethodologySection;
