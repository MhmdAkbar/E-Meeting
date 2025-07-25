import React from 'react';

export default function SettingIcon({ className = '', color = 'currentColor', ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 24 24"
      className={className}
      {...rest}
    >
      <defs>
        <symbol id="lineMdCog0">
          <path d="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12">
            <animate
              fill="freeze"
              attributeName="d"
              begin="0.9s"
              dur="0.2s"
              values="M15.24 6.37...;M15.24 6.37..."
            />
          </path>
        </symbol>
      </defs>
      <g fill="none" stroke={color} strokeWidth={2}>
        <g strokeLinecap="round">
          <path
            strokeDasharray={20}
            strokeDashoffset={20}
            d="M12 9c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"
          >
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0" />
          </path>
          <path
            strokeDasharray={48}
            strokeDashoffset={48}
            d="M12 5.5c3.59 0 6.5 2.91 6.5 6.5c0 3.59 -2.91 6.5 -6.5 6.5c-3.59 0 -6.5 -2.91 -6.5 -6.5c0 -3.59 2.91 -6.5 6.5 -6.5Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.6s"
              values="48;0"
            />
            <set fill="freeze" attributeName="opacity" begin="0.9s" to={0} />
          </path>
        </g>
        <g opacity={0}>
          <use href="#lineMdCog0" />
          <use href="#lineMdCog0" transform="rotate(60 12 12)" />
          <use href="#lineMdCog0" transform="rotate(120 12 12)" />
          <use href="#lineMdCog0" transform="rotate(180 12 12)" />
          <use href="#lineMdCog0" transform="rotate(240 12 12)" />
          <use href="#lineMdCog0" transform="rotate(300 12 12)" />
          <set fill="freeze" attributeName="opacity" begin="0.9s" to={1} />
        </g>
      </g>
    </svg>
  );
}
