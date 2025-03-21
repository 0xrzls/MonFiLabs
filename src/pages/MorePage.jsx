import React, { useState } from "react";
import "./../styles/morepage.css";

const MorePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  return (
    <div className="more-page">
      {isMobile ? (
        <div className="popup">
          <h2>Community Links</h2>
          <ul>
            <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
            <li><a href="https://discord.com" target="_blank">Discord</a></li>
            <li><a href="https://medium.com" target="_blank">Medium</a></li>
          </ul>
        </div>
      ) : (
        <div className="dropdown">
          <ul>
            <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
            <li><a href="https://discord.com" target="_blank">Discord</a></li>
            <li><a href="https://medium.com" target="_blank">Medium</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MorePage;
