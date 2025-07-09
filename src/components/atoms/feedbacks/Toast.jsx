
import { useEffect } from "react";

export default function Toast({ message, onClose, duration = 2500 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-6 right-6 bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg text-sm z-50">
      {message}
    </div>
  );
}

// Tambahkan ke tailwind.config.js jika belum
// animation: {
//   'fade-in-up': 'fadeInUp 0.3s ease-out',
// },
// keyframes: {
//   fadeInUp: {
//     '0%': { opacity: 0, transform: 'translateY(10px)' },
//     '100%': { opacity: 1, transform: 'translateY(0)' },
//   },
// }
