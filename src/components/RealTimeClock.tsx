'use client';

import { useState, useEffect } from 'react';

export function RealTimeClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    // Set initial time on the client
    setTime(new Date().toLocaleTimeString());

    // Update time every second
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once on mount

  if (time === null) {
    // Render nothing on the server and during initial client render
    return null;
  }

  return (
    <div className="hidden sm:block text-sm font-medium text-muted-foreground">
      {time}
    </div>
  );
}
