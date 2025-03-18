import React, { useState, useEffect } from "react";
import "./../styles/headerlogo.css";
import logo from "../logo.svg"; // Logo brand MonFi
import { RiWallet3Line } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io"; // Dropdown icon

const networks = [
  { name: "Testnet", logo: `${process.env.PUBLIC_URL}/PodTestnet.png` },
  { name: "Devnet", logo: `${process.env.PUBLIC_URL}/PodDevnet.png` },
];

const HeaderLogo = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]); // Default ke Testnet

  // Handle perubahan ukuran layar
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

  // Jika bukan perangkat mobile, maka elemen ini tidak ditampilkan
  if (!isMobile) {
    return null;
  }

  const handleNetworkSelect = (network) => {
    setSelectedNetwork(network); // Ubah jaringan yang dipilih
    setDropdownOpen(false); // Tutup dropdown setelah pemilihan
  };

  return (
    <div className="header-logo">
      {/* Brand Logo dan Nama */}
      <div className="logo">
        <img src={logo} alt="MonFi Logo" className="brand-logo" />
        <span className="brand-name">MonFi</span>
      </div>

      {/* Actions: Select Network & Connect Wallet */}
      <div className="actions">
        <div
          className="network-dropdown"
          onClick={() => setDropdownOpen((prev) => !prev)} // Toggle dropdown
        >
          <div className="network-selector">
            <img
              src={selectedNetwork.logo}
              alt={`${selectedNetwork.name} Logo`}
              className="network-icon"
            />
            <span className="network-name">{selectedNetwork.name}</span>
            <IoMdArrowDropdown className="dropdown-icon" />
          </div>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {networks.map((network) => (
                <li
                  key={network.name}
                  onClick={() => handleNetworkSelect(network)}
                >
                  <img
                    src={network.logo}
                    alt={`${network.name} Logo`}
                    className="dropdown-icon-image"
                  />
                  {network.name}
                </li>
              ))}
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
