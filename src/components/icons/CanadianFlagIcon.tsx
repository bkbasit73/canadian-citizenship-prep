import type { SVGProps } from 'react';

export function CanadianFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 600"
      {...props}
    >
      <rect fill="#d52b1e" width="1200" height="600" />
      <rect fill="#fff" x="300" width="600" height="600" />
      <path
        fill="#d52b1e"
        d="M600 150l-50 50-75-50-25 50-50-50-25 75 75 75-100 50 150 150 150-150-100-50 75-75-25-75-50 50-25-50-75 50z"
      />
    </svg>
  );
}
