import { Route, Routes } from "react-router-dom";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import RoomReservation from "../pages/user/RoomReservation";
import History from '../pages/user/History';
import UserList from "../pages/admin/UserList";
import AccountSettings from "../pages/user/AccountSettings";


export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/room-reservation" element={<RoomReservation/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/account-settings" element={<AccountSettings/>}/>
            <Route path="/user_list"  element={<UserList/>}/>
        </Routes>
    )
}