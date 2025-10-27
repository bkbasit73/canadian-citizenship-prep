'use client';

import { useState, useEffect } from 'react';

export function RealTimeClock() {
  const [time, setTime] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    // This function will only run on the client
    const updateClientTime = () => {
      setTime(new Date().toLocaleTimeString());
    };

    // Set initial time on the client
    updateClientTime();

    // Update time every second
    const intervalId = setInterval(updateClientTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [hasMounted]);

  return (
    <div className="hidden sm:flex items-center justify-center bg-card/50 text-card-foreground/80 h-12 w-32 rounded-lg border">
      <span className="font-mono text-lg font-semibold tracking-wider">
        {time ?? '--:--:--'}
      </span>
    </div>
  );
}
