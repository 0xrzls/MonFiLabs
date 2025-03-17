import React, { useState, useEffect } from "react";
import "./../styles/headerlogo.css";
import logo from "../logo.svg";
import { RiWallet3Line } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const HeaderLogo = () => {
  // State untuk mendeteksi perangkat mobile
  const [isMobile, setIsMobile] = useState(false);

  // State untuk dropdown dan jaringan yang dipilih
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum");

  // Fungsi untuk mendeteksi ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023); // Deteksi jika perangkat adalah mobile atau tablet
    };

    handleResize(); // Jalankan logika saat komponen pertama kali dirender
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener saat komponen dilepas
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Jika bukan perangkat mobile, jangan render apa pun
  if (!isMobile) {
    return null;
  }

  // Fungsi untuk menangani perubahan jaringan
  const handleNetworkChange = (network) => {
    setSelectedNetwork(network); // Simpan jaringan yang dipilih
    setDropdownOpen(false); // Tutup dropdown
  };

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
            <div className="icon-stack">
              <FaEthereum className="base-icon" />
              <IoIosArrowDown className="overlay-icon" />
            </div>
          </div>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleNetworkChange("Ethereum")}>
                Ethereum Mainnet
              </li>
              <li onClick={() => handleNetworkChange("BNB")}>BNB Mainnet</li>
              <li onClick={() => handleNetworkChange("Polygon")}>
                Polygon Mainnet
              </li>
              <li onClick={() => handleNetworkChange("Ropsten")}>
                Ropsten Testnet
              </li>
              <li onClick={() => handleNetworkChange("Kovan")}>
                Kovan Testnet
              </li>
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
