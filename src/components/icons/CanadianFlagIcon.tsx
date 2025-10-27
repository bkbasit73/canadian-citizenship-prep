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
        d="M600 150 l-35 60 h-60 l50 40 -20 65 55 -45 55 45 -20 -65 50 -40 h-60 z M 460 300 l30 20 v60 l-30 10 v-90 z M 740 300 l-30 20 v60 l30 10 v-90 z M 500 340 l-15 10v40h30v-20l-15-30z M 700 340l15 10v40h-30v-20l15-30z M 540 390h120l-20 20h-80z M 600 420l-10 10v60l10-10 10 10v-60z"
      />
    </svg>
  );
}
