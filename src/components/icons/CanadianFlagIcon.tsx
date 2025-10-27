import type { SVGProps } from 'react';

export function CanadianFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 600"
      {...props}
    >
      <rect width="1200" height="600" fill="#fff" />
      <rect width="300" height="600" fill="#d52b1e" />
      <rect x="900" width="300" height="600" fill="#d52b1e" />
      <path 
        fill="#d52b1e"
        d="M600 115.5L586.6 200h-73.2l53.9 52.3-20.6 85.2 70-52.3 70 52.3-20.6-85.2 53.9-52.3h-73.2L600 115.5zM483.3 283.3l-25-41.6h-50v-16.7h50l-16.7-33.3-41.6 16.7-8.4-16.7 50-25v-25h-16.7v25l-50 25 8.4 16.7 41.6-16.7 16.7 33.3h-50v16.7h50l25 41.6 25 8.4 25-8.4zm233.4 0l25-41.6h50v-16.7h-50l16.7-33.3 41.6 16.7 8.4-16.7-50-25v-25h16.7v25l50 25-8.4 16.7-41.6-16.7-16.7 33.3h50v16.7h-50l-25 41.6-25 8.4-25-8.4zM600 300l-25 50h-50l25 25-50 58.4 66.7-33.4 33.3 100 33.3-100 66.7 33.4-50-58.4 25-25h-50l-25-50z"
      />
    </svg>
  );
}
