import { Route, Routes } from "react-router-dom";
// import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import RoomReservation from "../pages/user/RoomReservation";
import History from "../pages/user/History";
import UserList from "../pages/admin/UserList";
import AccountSettings from "../pages/user/AccountSettings";
import ProtectedRoute from "./ProtectedRoute"; 
import Login from "../pages/auth/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Bungkus route yang perlu login */}
      <Route
        path="/room-reservation"
        element={
          <ProtectedRoute>
            <RoomReservation />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />
      <Route
        path="/account-settings"
        element={
          <ProtectedRoute>
            <AccountSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user_list"
        element={
          <ProtectedRoute>
            <UserList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
