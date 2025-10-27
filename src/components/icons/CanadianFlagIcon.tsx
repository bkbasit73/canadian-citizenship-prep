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
        d="M600 150l-50 50h-100l25 50-75 100 100-50 50 150 50-150 100 50-75-100 25-50h-100z"
      />
    </svg>
  );
}
