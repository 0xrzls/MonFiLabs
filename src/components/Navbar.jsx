import React, { useState } from "react";
import "./../styles/navbar.css";
import logo from "../logo.svg";

const Navbar = ({ active, setActive }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className="navbar">
      {/* Logo MonFi */}
      <div className="logo">
        <img src={logo} alt="MonFi Logo" />
      </div>

      {/* Menu Navigasi tanpa menu Home */}
      <ul className="menu">
        <li onClick={() => setActive("swap")} className={active === "swap" ? "active" : ""}>
          Swap
        </li>
        <li onClick={() => setActive("earn")} className={active === "earn" ? "active" : ""}>
          Earn
        </li>
        <li onClick={() => setActive("perp")} className={active === "perp" ? "active" : ""}>
          Perp
        </li>
        <li
          className="dropdown"
          onClick={toggleDropdown}
          onMouseLeave={() => setShowDropdown(false)}
        >
          More
          {showDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => setActive("settings")}>Settings</li>
              <li onClick={() => setActive("support")}>Support</li>
              <li onClick={() => setActive("about")}>About</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
