import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import AuthForm from "./AuthForm";

export default function Register() {
 const registerFields = [
        {
            name: 'username',
            label: 'Username',
            type: 'text',
            placeholder: 'insert your username'
        },
        {
            name: 'Email',
            label: 'Email',
            type: 'email',
            placeholder: 'insert your email'
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Masukkan Pasword'
        },
        {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
            placeholder: 'confirm your password'
        }
    ]

    return (
        <div className="bg-[url(../../img/background/bg-login.jpg)] bg-cover min-w-screen min-h-screen flex justify-start ">
            <div className="bg-white flex flex-col items-center gap-4 shadow rounded-[12px] my-27 mx-12 py-5 px-5 w-[600px] h-[644px]">
            <Logo />
            <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold">Welcome Back!</h3>
            <p className="text-[#919191] text-[14px]">Create your account here</p>
            </div>
            <div>
                <AuthForm title="login" fields={registerFields} />
            </div>
            <p className="text-[#919191]">Already have an account? <Link to='/' className="text-[#EB5B00]"> Login </Link>  </p>
        </div>
        </div>
    )
}