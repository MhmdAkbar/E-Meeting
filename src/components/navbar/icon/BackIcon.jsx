import React from 'react';

export default function BackIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="#EB5B00"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={64}
          strokeDashoffset={64}
          d="M3 12c0 4.97 4.03 9 9 9c4.97 0 9 -4.03 9 -9c0 -4.97 -4.03 -9 -9 -9c-4.97 0 -9 4.03 -9 9Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          />
        </path>
        <path
          strokeDasharray={12}
          strokeDashoffset={12}
          d="M7 12h9.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.2s"
            values="12;0"
          />
        </path>
        <path
          strokeDasharray={8}
          strokeDashoffset={8}
          d="M17 12l-4 4M17 12l-4 -4"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.9s"
            dur="0.2s"
            values="8;0"
          />
        </path>
      </g>
    </svg>
  );
}
