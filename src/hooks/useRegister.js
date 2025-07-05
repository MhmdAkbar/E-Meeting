// src/hooks/useRegister.js
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";

export function useRegister() {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirm_password,
        language: "id",
      };

      const res = await api.post("/auth/register", payload);
      alert("Register berhasil!");
      navigate("/");
    } catch (error) {
      console.error("Register error:", error);
      alert(
        error.response?.data?.error || "Terjadi kesalahan saat register."
      );
    }
  };

  return { handleRegister };
}
