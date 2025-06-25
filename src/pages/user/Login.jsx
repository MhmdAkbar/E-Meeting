import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import AuthForm from "./AuthForm";
// import Register from "./register";


export default function Login() {
    const loginFields = [
        {
            name: 'username',
            label: 'Username',
            type: 'text',
            placeholder: 'masukkan username'
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Masukkan Pasword'
        }
    ]
    
    return (
        <div className="bg-[url(../../img/background/bg-login.jpg)] bg-cover min-w-screen min-h-screen flex justify-start ">
            <div className="bg-white flex flex-col items-center gap-4 shadow rounded-[12px] my-27 mx-12 py-5 px-5 w-[600px] h-[644px]">
            <Logo />
            <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold">Welcome Back!</h3>
            <p className="text-[#919191] text-[14px]">Please enter your username and password here!</p>
            </div>
            <div>
                <AuthForm title="login" fields={loginFields} />
            </div>
            <p className="text-[#919191]">Don't have an account? <Link to='/register' className="text-[#EB5B00]"> Register </Link>  </p>
        </div>
        </div>
    )
}