
import React, { useState, useEffect } from "react";
import { Clock, Timer } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CountdownTimer = () => {
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            clearInterval(interval);
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  return (
    <div className="w-full bg-crimson text-white py-2 px-4 flex justify-center items-center">
      <Alert className="bg-transparent border-none p-0 flex items-center justify-center w-full max-w-3xl">
        <Clock className="h-5 w-5 mr-2" />
        <AlertDescription className="flex items-center text-sm md:text-base font-medium">
          ATENÇÃO: Vagas limitadas! A comunidade pode fechar a qualquer momento 
          <div className="ml-2 md:ml-4 bg-white/20 px-2 py-1 rounded flex items-center">
            <Timer className="h-4 w-4 mr-1" />
            <span className="font-bold">
              {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default CountdownTimer;
