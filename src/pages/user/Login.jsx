import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../../components/auth_form/AuthForm";
import axios from "axios";
import Logo from "../../components/ui/logo/Logo";
// import Logo from "../../components/ui/logo/Logo";
// import Register from "./register";


export default function Login() {
    const navigate = useNavigate();

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
    ];

const handleLogin = async (formData) => {
    try{
        const res =await axios.get('https://fakestoreapi.com/users');

        const user = res.data.find(
            (u) => 
                u.username === formData.username && 
                u.password === formData.password
        );

        if (user) {
            alert('login success');
            navigate('room-reservation')
        } else {
            alert('username atau password salah')
        }
    } catch (error) {
        console.error('login error:', error);
        alert('terjadi kesalahan saat login')
    }
}
    
    return (
        <div className="bg-[url(../../img/background/bg-login.jpg)] bg-cover min-w-screen min-h-screen flex justify-start ">
            <div className="bg-white flex flex-col items-center gap-4 shadow rounded-[12px] my-27 mx-12 py-5 px-5 w-[600px] h-[644px]">
            <Logo/>
            <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold">Welcome Back!</h3>
            <p className="text-[#919191] text-[14px]">Please enter your username and password here!</p>
            </div>
            <div>
                <AuthForm title="login" fields={loginFields} onSubmit={handleLogin} />
            </div>
            <p className="text-[#919191]">Don't have an account? <Link to='/register' className="text-[#EB5B00]"> Register </Link>  </p>
        </div>
        </div>
    )
}