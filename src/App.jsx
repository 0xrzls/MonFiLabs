import React, { useState, useEffect } from "react";
import HeaderLogo from "./components/HeaderLogo";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import "./styles/App.css";

const App = () => {
  // State untuk status aktif dan deteksi perangkat
  const [active, setActive] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Mengelola deteksi perangkat saat ukuran jendela berubah
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Perangkat mobile: ≤ 768px
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Bersihkan listener
  }, []);

  return (
    <div className="app">
      {/* Render HeaderLogo hanya di perangkat mobile */}
      {isMobile && <HeaderLogo isMobile={isMobile} />}

      {/* Render Navbar hanya di perangkat desktop */}
      {!isMobile && <Navbar active={active} setActive={setActive} />}

      <main>
        <h2>Welcome to MonFi</h2>
      </main>

      {/* Render BottomNavbar hanya di perangkat mobile */}
      {isMobile && <BottomNavbar active={active} setActive={setActive} />}
    </div>
  );
};

export default App;
