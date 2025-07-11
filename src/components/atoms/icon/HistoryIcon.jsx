import React from 'react';

export default function HistoryIcon({ className = '', color = 'currentColor', ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 24 24"
      className={className}
      {...rest}
    >
      <g
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={72}
          strokeDashoffset={72}
          d="M12 3h7v18h-14v-18h7Z"
        >
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0" />
        </path>
        <path
          strokeDasharray={12}
          strokeDashoffset={12}
          strokeWidth={1}
          d="M14.5 3.5v3h-5v-3"
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
          strokeDasharray={4}
          strokeDashoffset={4}
          d="M9 10h3"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.9s"
            dur="0.2s"
            values="4;0"
          />
        </path>
        <path
          strokeDasharray={6}
          strokeDashoffset={6}
          d="M9 13h5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.1s"
            dur="0.2s"
            values="6;0"
          />
        </path>
        <path
          strokeDasharray={8}
          strokeDashoffset={8}
          d="M9 16h6"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.3s"
            dur="0.2s"
            values="8;0"
          />
        </path>
      </g>
    </svg>
  );
}
