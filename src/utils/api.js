import axios from "axios";

const BASE_URL = "http://172.16.148.101:8080/api/v1";

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false, // atau true kalau butuh cookies cross-domain
});
