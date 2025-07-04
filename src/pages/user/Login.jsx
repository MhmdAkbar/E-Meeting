import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
// import LoginForm from "../../components/organisms/LoginForm";
import Logo from "../../components/atoms/logo/Logo";
import LoginForm from "../../components/organisms/login_form/LoginForm";

export default function Login() {
  const { handleLogin } = useLogin();

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
        <LoginForm onSubmit={handleLogin} />
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
