import { Route, Routes } from "react-router-dom";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    )
}