export default function CommonButton({ title = '', children, className = '', ...props }) {
  return (
    <button
      className={`bg-[#EB5B00] text-white py-2 px-4 rounded hover:bg-[#d34e00] transition ${className}`}
      {...props}
    >
      {title || children}
    </button>
  );
}
