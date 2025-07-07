import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://172.16.148.101:8080/api/v1";

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false, // tetap false karena kamu pakai token di header
});

// Interceptor untuk otomatis menyisipkan Bearer token dari cookies
api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
