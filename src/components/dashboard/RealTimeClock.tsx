'use client';

import { useState, useEffect } from 'react';

export function RealTimeClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    // Set initial time on client mount to avoid hydration mismatch
    setTime(new Date().toLocaleTimeString());

    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center p-2 bg-card/80 backdrop-blur-sm border rounded-lg shadow-sm">
      <div className="text-card-foreground font-semibold font-mono text-sm">
        {time || <span className="opacity-50">--:--:-- --</span>}
      </div>
    </div>
  );
}
