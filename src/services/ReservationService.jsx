// import { api } from "../utils/api";
import { api } from './../utils/api';

export async function createReservation(payload) {
  console.log("Sending reservation to:", api.defaults.baseURL + "/reservations");
  console.log("Payload:", payload);
  const res = await api.post("/reservation", payload);
  return res.data;
}
