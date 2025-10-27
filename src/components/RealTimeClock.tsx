'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function RealTimeClock() {
  const [time, setTime] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    // Set initial time on the client
    setTime(new Date().toLocaleTimeString());

    // Update time every second
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [hasMounted]); 

  if (!hasMounted || time === null) {
    // Render a placeholder or nothing on the server and during initial client render
    return (
        <div className="hidden sm:flex items-center justify-center bg-card/50 text-card-foreground/80 h-12 w-32 rounded-lg border">
            <span className="font-mono text-lg font-semibold tracking-wider">
                --:--:--
            </span>
        </div>
    );
  }

  return (
    <div className="hidden sm:flex items-center justify-center bg-card/50 text-card-foreground/80 h-12 w-32 rounded-lg border">
        <span className="font-mono text-lg font-semibold tracking-wider">
            {time}
        </span>
    </div>
  );
}
