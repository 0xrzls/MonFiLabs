import React from "react";
import "./../styles/mixspage.css";

const MixsPage = () => {
  return (
    <div className="mixs-page">
      <h1 className="mixs-title">Mixs</h1>
      <p className="mixs-description">Swap tokens seamlessly across decentralized exchanges using our aggregator.</p>
      <div className="swap-box">
        <input className="token-input" type="text" placeholder="Amount" />
        <select className="token-select">
          <option>Select Token</option>
          <option>ETH</option>
          <option>USDT</option>
          <option>DAI</option>
        </select>
        <button className="swap-button">Swap</button>
      </div>
    </div>
  );
};

export default MixsPage;
