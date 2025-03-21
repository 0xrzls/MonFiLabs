import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HeaderLogo from "./components/HeaderLogo";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import MixsPage from "./pages/MixsPage";
import SwapPage from "./pages/SwapPage";
import EarnPage from "./pages/EarnPage";
import PerpPage from "./pages/PerpPage";
import MorePage from "./pages/MorePage";
import "./styles/App.css";

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [active, setActive] = useState("mixs"); // State aktif untuk menu
  const location = useLocation();

  useEffect(() => {
    // Update state active berdasarkan rute yang aktif
    const path = location.pathname;
    if (path === "/") {
      setActive("mixs");
    } else if (path === "/swap") {
      setActive("swap");
    } else if (path === "/earn") {
      setActive("earn");
    } else if (path === "/perp") {
      setActive("perp");
    } else if (path === "/more") {
      setActive("more");
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app">
      {isMobile && <HeaderLogo isMobile={isMobile} />}
      {!isMobile && <Navbar active={active} setActive={setActive} />}
      <main>
        <Routes>
          <Route path="/" element={<MixsPage />} />
          <Route path="/swap" element={<SwapPage />} />
          <Route path="/earn" element={<EarnPage />} />
          <Route path="/perp" element={<PerpPage />} />
          <Route path="/more" element={<MorePage />} />
        </Routes>
      </main>
      {isMobile && <BottomNavbar active={active} setActive={setActive} />}
    </div>
  );
};

export default AppWrapper;
