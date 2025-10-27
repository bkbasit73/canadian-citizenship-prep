'use client';

import { useState, useEffect } from 'react';
import { Sun, Cloud, CloudRain, CloudSnow, Wind } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

// Mock weather data structure
interface WeatherData {
  city: string;
  temperature: number;
  condition: 'Sunny' | 'Cloudy' | 'Rainy' | 'Snowy';
  windSpeed: number;
}

const WeatherIcon = ({ condition, className }: { condition: WeatherData['condition']; className?: string }) => {
  switch (condition) {
    case 'Sunny':
      return <Sun className={className} />;
    case 'Cloudy':
      return <Cloud className={className} />;
    case 'Rainy':
      return <CloudRain className={className} />;
    case 'Snowy':
      return <CloudSnow className={className} />;
    default:
      return <Sun className={className} />;
  }
};

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, you would use these coordinates to call a weather API.
          const { latitude, longitude } = position.coords;
          console.log('User location:', { latitude, longitude });

          // For this demo, we'll use mock data.
          const mockWeatherData: WeatherData = {
            city: 'Ottawa',
            temperature: 18,
            condition: 'Cloudy',
            windSpeed: 12,
          };
          setWeather(mockWeatherData);
          setIsLoading(false);
        },
        (error) => {
          console.error('Geolocation error:', error);
          setError('Could not get location. Showing default weather.');
          // Show default data if location is denied
           const mockWeatherData: WeatherData = {
            city: 'Ottawa',
            temperature: 18,
            condition: 'Cloudy',
            windSpeed: 12,
          };
          setWeather(mockWeatherData);
          setIsLoading(false);
        }
      );
    } else {
        setError('Geolocation is not supported by your browser.');
        setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Skeleton className="h-10 w-48" />;
  }

  if (error && !weather) {
    return <div className="text-xs text-destructive">{error}</div>;
  }
  
  if (!weather) {
      return null;
  }

  return (
    <div className="flex items-center gap-3 p-2 bg-card/80 backdrop-blur-sm border rounded-lg shadow-sm">
      <WeatherIcon condition={weather.condition} className="h-5 w-5 text-primary" />
      <div className="text-sm font-semibold">
        <span className="text-card-foreground">{weather.city}</span>
        <span className="text-muted-foreground ml-2">{weather.temperature}°C</span>
      </div>
    </div>
  );
}
