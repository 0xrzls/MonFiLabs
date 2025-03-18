import React, { useState, useEffect } from "react";
import "./../styles/headerlogo.css";
import logo from "../logo.svg"; // Logo utama MonFi
import { RiWallet3Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io"; // Dropdown icon

const HeaderLogo = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="header-logo">
      <div className="logo">
        <img src={logo} alt="MonFi Logo" />
        <span>MonFi</span>
      </div>

      <div className="actions">
        <div
          className="network-dropdown"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="network-selector">
            {/* Ganti ikon koin menjadi gambar logo Monad */}
            <img
              src={`${process.env.PUBLIC_URL}/MonadTestnet.png`}
              alt="Monad Logo"
              className="network-icon"
            />
            <IoIosArrowDown className="dropdown-icon" />
          </div>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>Ethereum Mainnet</li>
              <li>BNB Mainnet</li>
              <li>Polygon Mainnet</li>
              <li>Ropsten Testnet</li>
              <li>Kovan Testnet</li>
            </ul>
          )}
        </div>

        <div className="connect-wallet">
          <button className="wallet-icon">
            <RiWallet3Line size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogo;
