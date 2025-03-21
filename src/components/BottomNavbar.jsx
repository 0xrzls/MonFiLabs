import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { TbSmartHome } from "react-icons/tb";
import { RiTokenSwapLine, RiGiftLine } from "react-icons/ri";
import { BiCandles } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import "./../styles/bottomnavbar.css";

const BottomNavbar = ({ active, setActive }) => {
  const navigate = useNavigate(); // Inisialisasi navigate

  return (
    <div className="bottom-navbar">
      <div
        onClick={() => {
          setActive("mixs");
          navigate("/"); // Pindah ke rute Mixs
        }}
        className={active === "mixs" ? "active" : ""}
      >
        <TbSmartHome />
        <p>Mixs</p>
      </div>
      <div
        onClick={() => {
          setActive("swap");
          navigate("/swap"); // Pindah ke rute Swap
        }}
        className={active === "swap" ? "active" : ""}
      >
        <RiTokenSwapLine />
        <p>Swap</p>
      </div>
      <div
        onClick={() => {
          setActive("earn");
          navigate("/earn"); // Pindah ke rute Earn
        }}
        className={active === "earn" ? "active" : ""}
      >
        <RiGiftLine />
        <p>Earn</p>
      </div>
      <div
        onClick={() => {
          setActive("perp");
          navigate("/perp"); // Pindah ke rute Perp
        }}
        className={active === "perp" ? "active" : ""}
      >
        <BiCandles />
        <p>Perp</p>
      </div>
      <div
        onClick={() => {
          setActive("more");
          navigate("/more"); // Pindah ke rute More
        }}
        className={active === "more" ? "active" : ""}
      >
        <CgMoreO />
        <p>More</p>
      </div>
    </div>
  );
};

export default BottomNavbar;
