
import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(interval);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="w-full bg-pink-500 text-white py-3 flex justify-center items-center">
      <div className={`container flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center max-w-5xl gap-3`}>
        <div className="flex items-center">
          <Clock className="h-5 w-5 mr-3" />
          <span className="text-base md:text-lg font-medium">
            ATENÇÃO: Vagas limitadas! A comunidade pode fechar a qualquer momento
          </span>
        </div>
        <div className="bg-white/20 px-4 py-1 rounded-md">
          <span className="font-bold text-base md:text-lg">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
