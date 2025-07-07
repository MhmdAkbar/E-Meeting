import BackIcon from "../components/atoms/icon/BackIcon";
import RoomIcon from "../components/atoms/icon/RoomIcon";
import HistoryIcon from "../components/atoms/icon/HistoryIcon";
import SettingIcon from "../components/atoms/icon/SettingIcon";

export const navbarConfig = {
  user: [
    { path: "/", icon: <BackIcon /> },
    { path: "/room-reservation", icon: <RoomIcon /> },
    { path: "/history", icon: <HistoryIcon /> },
    { path: "/account-settings", icon: <SettingIcon /> },
  ],
  admin: [
    {
      path: "/user_list",
      icon: <span className="text-sm font-semibold">Dashboard</span>,
    },
    {
      path: "/reports",
      icon: <span className="text-sm font-semibold">Reports</span>,
    },
    {
      path: "/admin-settings",
      icon: <span className="text-sm font-semibold">Settings</span>,
    },
  ],
};
