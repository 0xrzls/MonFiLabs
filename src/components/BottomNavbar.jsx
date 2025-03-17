import React from "react";
import { RiHomeLine, RiTokenSwapLine, RiGiftLine } from "react-icons/ri";
import { BiCandles } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg"; // Import ikon baru
import "./../styles/bottomnavbar.css";

const BottomNavbar = ({ active, setActive }) => {
  return (
    <div className="bottom-navbar">
      <div onClick={() => setActive("home")} className={active === "home" ? "active" : ""}>
        <RiHomeLine />
        <p>Home</p>
      </div>
      <div onClick={() => setActive("swap")} className={active === "swap" ? "active" : ""}>
        <RiTokenSwapLine />
        <p>Swap</p>
      </div>
      <div onClick={() => setActive("earn")} className={active === "earn" ? "active" : ""}>
        <RiGiftLine />
        <p>Earn</p>
      </div>
      <div onClick={() => setActive("perp")} className={active === "perp" ? "active" : ""}>
        <BiCandles />
        <p>Perp</p>
      </div>
      <div onClick={() => setActive("more")} className={active === "more" ? "active" : ""}>
        <CgMoreO /> {/* Ganti ikon menjadi CgMoreO */}
        <p>More</p>
      </div>
    </div>
  );
};

export default BottomNavbar;
