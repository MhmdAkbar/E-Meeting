import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Logo from "../../atoms/logo/Logo";
import { navbarConfig } from "../../../config/navbar.config";
import React from "react";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const role = Cookies.get("role") || "user"; // fallback ke user
  const menuItems = navbarConfig[role] || [];

  return (
    <div className="flex flex-col gap-5 items-center py-3 sticky left-0 top-0 pt-3 mt-3">
      <Logo text="" />
      {menuItems.map((item, index) => {
        const isActive = currentPath === item.path;
        const activeClass = isActive ? "text-[#EB5B00]" : "text-[#C0C0C0]";

        return (
          <Link to={item.path} key={index} className="p-1">
            {React.isValidElement(item.icon) && typeof item.icon.type === "function"
              ? React.cloneElement(item.icon, {
                  className: `w-[45px] h-[45px] ${activeClass}`,
                })
              : <span className={`text-sm font-semibold ${activeClass}`}>
                  {item.icon}
                </span>}
          </Link>
        );
      })}
    </div>
  );
}
