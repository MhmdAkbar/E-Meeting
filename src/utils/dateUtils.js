// utils/dateUtils.js

// Digunakan untuk menghasilkan default waktu lengkap (pagi/malam)
export function formatDateTimeLocal(date, end = false) {
  const pad = (n) => n.toString().padStart(2, '0');
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());

  const hour = end ? '23' : '00';
  const minute = end ? '59' : '00';

  return `${year}-${month}-${day} ${hour}:${minute}`;
}

// Digunakan untuk gabung tanggal dan waktu dari input form
export function getDateTimeString(dateString, timeString) {
  return `${dateString} ${timeString}`;
}
