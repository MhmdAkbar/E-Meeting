import { Link, Navigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
// import Logo from "../../components/atoms/logo/Logo";
// import LoginForm from "../../components/organisms/auth/LoginForm";
import Cookies from "js-cookie";
import Logo from "./../../components/atoms/logo/Logo";
import LoginFields from "../../components/organisms/login_fields/LoginFields";

export default function Login() {
  const { handleLogin } = useLogin();
  const token = Cookies.get("token");

  if (token) return <Navigate to="/" />;

  return (
    <div className="bg-[url('/img/background/bg-login.jpg')] bg-cover min-w-screen min-h-screen flex justify-start">
      <div className="bg-white flex flex-col items-center gap-4 shadow rounded-[12px] my-27 mx-12 py-5 px-5 w-[600px] h-[644px]">
        <Logo />
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold">Welcome Back!</h3>
          <p className="text-[#919191] text-[14px]">
            Please enter your username and password to continue.
          </p>
        </div>
        <LoginFields onSubmit={handleLogin} />
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
