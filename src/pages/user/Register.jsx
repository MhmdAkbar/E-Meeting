// src/pages/user/Register.jsx
import { Link } from "react-router-dom";
import Logo from "../../components/atoms/logo/Logo";
import AuthForm from "../../components/organisms/auth_form/AuthForm";
import { useRegister } from "../../hooks/useRegister";
import { RegisterFields } from "../../components/organisms/register_fields/RegisterFields";
// import { registerFields } from "../../constants/formFields";
// import { useRegister } from "../../hooks/useRegister";

export default function Register() {
  const { handleRegister } = useRegister();

  return (
    <div className="bg-[url(../../img/background/bg-login.jpg)] bg-cover min-w-screen min-h-screen flex justify-start">
      <div className="bg-white flex flex-col items-center gap-4 shadow rounded-[12px] my-27 mx-12 py-5 px-5 w-[600px] h-[644px]">
        <Logo />
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold">Welcome Back!</h3>
          <p className="text-[#919191] text-[14px]">Create your account here</p>
        </div>
        <AuthForm
          title="Create Account"
          fields={RegisterFields}
          onSubmit={handleRegister}
        />
        <p className="text-[#919191]">
          Already have an account?{" "}
          <Link to="/" className="text-[#EB5B00]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
