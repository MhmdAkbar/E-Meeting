import BackIcon from "../components/atoms/icon/BackIcon";
import RoomIcon from "../components/atoms/icon/RoomIcon";
import HistoryIcon from "../components/atoms/icon/HistoryIcon";
import SettingIcon from "../components/atoms/icon/SettingIcon";
import DashboardIcon from "../components/atoms/icon/admin/DashboardIcon";
import ReservationScheduleIcon from "../components/atoms/icon/admin/ReservationScheduleIcon";
import RoomManajemenIcon from "../components/atoms/icon/admin/RoomManajemenIcon";
import { RoomReportsIcon } from "../components/atoms/icon/admin/RoomReportsIcon";

export const navbarConfig = {
  user: [
    { path: "/", icon: <BackIcon className="" /> },
    { path: "/room-reservation", icon: <RoomIcon className="" /> },
    { path: "/history", icon: <HistoryIcon className="" /> },
    { path: "/account-settings", icon: <SettingIcon className="" /> },
  ],
  admin: [
    { path: "/dashboard", icon: <DashboardIcon className="" /> },
    {
      path: "/reservation-schedule",
      icon: <ReservationScheduleIcon className="" />,
    },
    { path: "/room-manajemen", icon: <RoomManajemenIcon className="" /> },
    { path: "/room-reports", icon: <RoomReportsIcon className=''/>}, // bisa pakai icon juga
    { path: "/admin-settings", icon: <span>Settings</span> },
  ],
};
