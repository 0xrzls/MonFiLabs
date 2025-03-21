import React from "react";
import "./../styles/earnpage.css";

const EarnPage = () => {
  return (
    <div className="earn-page">
      <h1 className="earn-title">Earn Points</h1>
      <p className="earn-description">Complete tasks and earn points to unlock rewards.</p>
      <ul className="task-list">
        <li>🌟 Follow our <a href="https://twitter.com" target="_blank">Twitter</a></li>
        <li>🎮 Join our <a href="https://discord.com" target="_blank">Discord</a></li>
        <li>💧 Add liquidity</li>
      </ul>
    </div>
  );
};

export default EarnPage;
