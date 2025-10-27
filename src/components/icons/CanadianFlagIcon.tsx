import type { SVGProps } from 'react';

export function CanadianFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 600"
      {...props}
    >
      <rect fill="#d52b1e" width="300" height="600" />
      <rect fill="#d52b1e" x="900" width="300" height="600" />
      <rect fill="#fff" x="300" width="600" height="600" />
      <path 
        fill="#d52b1e"
        d="M600,490 L620,490 L620,400 L650,400 L650,380 L550,380 L550,400 L580,400 L580,490 L600,490 M600,125 L685,220 L630,220 L600,255 L570,220 L515,220 L600,125 M460,250 L520,300 L520,350 L460,320 L460,250 M740,250 L680,300 L680,350 L740,320 L740,250 M440,350 L500,390 L500,460 L440,460 L440,350 M760,350 L700,390 L700,460 L760,460 L760,350"
      />
    </svg>
  );
}