export default function LogoutIcon({ onClick, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`cursor-pointer ${className}`} // supaya bisa hover effect dll
    >
      <g
        fill="none"
        stroke="#EB5B00"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M16 5v-1c0 -0.55 -0.45 -1 -1 -1h-9c-0.55 0 -1 0.45 -1 1v16c0 0.55 0.45 1 1 1h9c0.55 0 1 -0.45 1 -1v-1" />
        <path d="M10 12h11" />
        <path d="M21 12l-3.5 -3.5M21 12l-3.5 3.5" />
      </g>
    </svg>
  );
}
