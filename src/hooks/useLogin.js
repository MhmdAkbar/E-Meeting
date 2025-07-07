import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { api } from "../utils/api";

export function useLogin() {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const res = await api.post("/auth/login", formData);
      const token = res.data.token;

      if (token) {
        const decoded = jwtDecode(token);
        const role = decoded.role;

        Cookies.set("token", token, { expires: 1 });
        Cookies.set("role", role, { expires: 1 });

        alert("Login berhasil!");

        navigate(role === "admin" ? "/dashboard" : "/room-reservation");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Username atau password salah");
    }
  };

  return { handleLogin };
}
