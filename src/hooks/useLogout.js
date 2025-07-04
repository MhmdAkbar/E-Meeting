import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function useLogout() {
  const navigate = useNavigate();

  const logout = () => {
    const confirmed = window.confirm("Apakah kamu yakin ingin logout?");
    if (!confirmed) return;

    Cookies.remove("token");
    Cookies.remove("role");

    alert("Berhasil logout");
    navigate("/");
  };

  return { logout };
}
