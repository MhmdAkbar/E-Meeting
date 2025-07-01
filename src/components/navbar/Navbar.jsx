import { Link, useLocation } from "react-router-dom";
import Logo from "../ui/logo/Logo";
import BackIcon from "./icon/BackIcon";
import RoomIcon from "./icon/RoomIcon";
import HistoryIcon from "./icon/HistoryIcon";
import SettingIcon from "./icon/SettingIcon";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-col gap-5 items-center py-3 sticky left-0 top-0 pt-3 mt-3 ">
      <Logo text="" />

      <Link to="/">
        <BackIcon color={currentPath === "/" ? "#EB5B00" : "#C0C0C0"} />
      </Link>

      <Link to="/room-reservation">
        <RoomIcon color={currentPath === "/room-reservation" ? "#EB5B00" : "#C0C0C0"} />
      </Link>

      <Link to="/history">
        <HistoryIcon color={currentPath === "/history" ? "#EB5B00" : "#C0C0C0"} />
      </Link>

      <Link to="/settings">
        <SettingIcon color={currentPath === "/settings" ? "#EB5B00" : "#C0C0C0"} />
      </Link>
    </div>
  );
}
