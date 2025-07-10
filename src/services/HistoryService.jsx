// HistoryService.js
import { api } from './../utils/api';
export async function fetchReservationHistory({ start_datetime, end_datetime }) {
  const response = await api.get("/reservations/history", {
    params: {
      start_datetime,
      end_datetime,
    },
  });
  console.log("API Response:", response.data); // debug
  return response.data?.events || [];
}
