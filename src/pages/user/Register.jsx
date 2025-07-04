import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../components/atoms/logo/Logo";
import AuthForm from "../../components/organisms/auth_form/AuthForm";
import { api } from "../../utils/api"; // gunakan axios instance jika sudah ada

export default function Register() {
  const navigate = useNavigate();

  const registerFields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Insert your username",
    },
    {
      name: "email", // ✅ ganti dari "Email" ke "email" (case-sensitive)
      label: "Email",
      type: "email",
      placeholder: "Insert your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Masukkan Password",
    },
    {
      name: "confirm_password", // ✅ sesuaikan dengan backend
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password",
    },
  ];

  const handleRegister = async (formData) => {
    try {
      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirm_password,
        language: "id", // ✅ hardcoded default
      };

      const res = await api.post("/auth/register", payload);

      alert("Register berhasil!");
      navigate("/"); // redirect ke login
    } catch (error) {
      console.error("Register error:", error);
      if (error.response?.data?.error) {
        alert(error.response.data.error);
      } else {
        alert("Terjadi kesalahan saat register.");
      }
    }
  };

  return (
    <div className="bg-[url(../../img/background/bg-login.jpg)] bg-cover min-w-screen min-h-screen flex justify-start">
      <div className="bg-white flex flex-col items-center gap-4 shadow rounded-[12px] my-27 mx-12 py-5 px-5 w-[600px] h-[644px]">
        <Logo />
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold">Welcome Back!</h3>
          <p className="text-[#919191] text-[14px]">Create your account here</p>
        </div>
        <AuthForm title="Create Account" fields={registerFields} onSubmit={handleRegister} />
        <p className="text-[#919191]">
          Already have an account?{" "}
          <Link to="/" className="text-[#EB5B00]">Login</Link>
        </p>
      </div>
    </div>
  );
}
