import type { SVGProps } from 'react';

export function CanadianFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 40"
      {...props}
    >
      <rect width="80" height="40" fill="#fff" />
      <rect width="20" height="40" fill="#d52b1e" />
      <rect x="60" width="20" height="40" fill="#d52b1e" />
      <path
        d="M40 11.5l-4.5 3-1.5 6h-6l4.5 4-1.5 6 7.5-4.5 7.5 4.5-1.5-6 4.5-4h-6l-1.5-6z"
        fill="#d52b1e"
      />
    </svg>
  );
}
