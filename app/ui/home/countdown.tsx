"use client";

import { useState, useEffect } from "react";
import { timerType } from "../../lib/definitions";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<timerType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const now = new Date();
    const targetDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    console.log(targetDate);

    const timer = setInterval(() => {
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();
      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex justify-between flex-wrap items-center text-sm text-[#1C274C] my-6 max-w-[300px]">
      <div className="flex flex-col gap-3 items-center">
        <span className="bg-white py-3 px-4 rounded-md font-semibold text-xl lg:text-3xl">
          {timeLeft.days.toString().padStart(2, "0")}
        </span>
        <span>Days</span>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <span className="bg-white py-3 px-4 rounded-md font-semibold text-xl lg:text-3xl">
          {timeLeft.hours.toString().padStart(2, "0")}
        </span>
        <span>Hours</span>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <span className="bg-white py-3 px-4 rounded-md font-semibold text-xl lg:text-3xl">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </span>
        <span>Minutes</span>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <span className="bg-white py-3 px-4 rounded-md font-semibold text-xl lg:text-3xl">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </span>
        <span>Seconds</span>
      </div>
    </div>
  );
}
