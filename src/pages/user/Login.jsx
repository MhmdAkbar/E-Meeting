import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../../components/organisms/auth_form/AuthForm";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // ✅ pakai curly braces
import Logo from "../../components/molecules/logo/Logo";

export default function Login() {
  const navigate = useNavigate();

  const loginFields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Masukkan username",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Masukkan password",
    },
  ];

  const handleLogin = async (formData) => {
    try {
      const res = await axios.post(
        "http://172.16.148.101:8080/api/v1/auth/login",
        {
          username: formData.username,
          password: formData.password,
        }
      );

      const token = res.data.token;

      if (token) {
        // ✅ Decode token
        const decoded = jwtDecode(token); // hasil: { exp, user_id, role, username, ... }
        const role = decoded.role;

        // ✅ Simpan ke cookies
        Cookies.set("token", token, { expires: 1 });
        Cookies.set("role", role, { expires: 1 });

        alert("Login berhasil!");

        // ✅ Redirect sesuai role (opsional)
        if (role === "admin") {
          navigate("/user_list");
        } else {
          navigate("/room-reservation");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Username atau password salah");
    }
  };

  return (
    <div className="bg-[url(../../img/background/bg-login.jpg)] bg-cover min-w-screen min-h-screen flex justify-start">
      <div className="bg-white flex flex-col items-center gap-4 shadow rounded-[12px] my-27 mx-12 py-5 px-5 w-[600px] h-[644px]">
        <Logo />
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold">Welcome Back!</h3>
          <p className="text-[#919191] text-[14px]">
            Please enter your username and password here!
          </p>
        </div>
        <div>
          <AuthForm title="login" fields={loginFields} onSubmit={handleLogin} />
        </div>
        <p className="text-[#919191]">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#EB5B00]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
