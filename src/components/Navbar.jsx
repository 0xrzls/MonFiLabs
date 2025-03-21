import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./../styles/navbar.css";

const Navbar = ({ active, setActive }) => {
  const navigate = useNavigate(); // Hook untuk navigasi
  const [showDropdown, setShowDropdown] = useState(false); // Untuk dropdown menu

  const handleNavigation = (menu, path) => {
    setActive(menu); // Update menu aktif
    navigate(path); // Arahkan ke path rute
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>MonFi</h1>
      </div>
      <ul className="menu">
        <li
          onClick={() => handleNavigation("home", "/")}
          className={active === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => handleNavigation("swap", "/swap")}
          className={active === "swap" ? "active" : ""}
        >
          Swap
        </li>
        <li
          onClick={() => handleNavigation("earn", "/earn")}
          className={active === "earn" ? "active" : ""}
        >
          Earn
        </li>
        <li
          onClick={() => handleNavigation("perp", "/perp")}
          className={active === "perp" ? "active" : ""}
        >
          Perp
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          More
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
                  Medium
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
