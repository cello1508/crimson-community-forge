import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
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
  return <div className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 shadow-md">
      <div className={`container flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center max-w-5xl gap-4`}>
        <div className="flex items-center">
          
          <span className="text-base md:text-lg font-medium tracking-wide text-center">
            ATENÇÃO: Vagas limitadas! A comunidade pode fechar a qualquer momento
          </span>
        </div>
        <Badge variant="outline" className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-md border border-white/30 shadow-inner text-white font-mono">
          <span className="font-bold text-lg md:text-xl">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </span>
        </Badge>
      </div>
    </div>;
};
export default CountdownTimer;