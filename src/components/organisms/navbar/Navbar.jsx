import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Logo from "../../atoms/logo/Logo";
import { navbarConfig } from "../../../config/navbar.config";
import React from "react";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const role = Cookies.get("role") || "user"; // fallback ke "user"
  const menuItems = navbarConfig[role] || [];

  return (
    <div className="flex flex-col gap-5 items-center py-3 sticky left-0 top-0 pt-3 mt-3">
      <Logo text="" />
      {menuItems.map((item, index) => (
        <Link to={item.path} key={index}>
          {React.isValidElement(item.icon) && item.icon.type === "span"
            ? React.cloneElement(item.icon, {
                className: `${item.icon.props.className} ${
                  currentPath === item.path
                    ? "text-[#EB5B00]"
                    : "text-[#C0C0C0]"
                }`,
              })
            : React.cloneElement(item.icon, {
                color: currentPath === item.path ? "#EB5B00" : "#C0C0C0",
              })}
        </Link>
      ))}
    </div>
  );
}
