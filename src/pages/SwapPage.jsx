import React, { useState } from "react";
import { MdArrowDropDown, MdOutlineSwapCalls } from "react-icons/md"; // Import ikon Swap
import "./../styles/swappage.css";

const SwapPage = () => {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [fromToken, setFromToken] = useState({ symbol: "ETH", logo: "path_to_eth_logo.png", balance: 3.5 });
  const [toToken, setToToken] = useState({ symbol: "USDT", logo: "path_to_usdt_logo.png", balance: 1200 });

  const exchangeRate = 1500;

  const handleFromChange = (e) => {
    const value = e.target.value;
    setFromValue(value);
    setToValue(value ? (value * exchangeRate).toFixed(2) : "");
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setToValue(value);
    setFromValue(value ? (value / exchangeRate).toFixed(6) : "");
  };

  const handleMaxClick = () => {
    setFromValue(fromToken.balance);
    setToValue((fromToken.balance * exchangeRate).toFixed(2));
  };

  const handleSwapTokens = () => {
    // Tukar token dan nilai
    const tempToken = fromToken;
    setFromToken(toToken);
    setToToken(tempToken);

    const tempValue = fromValue;
    setFromValue(toValue);
    setToValue(tempValue);
  };

  return (
    <div className="swap-page">
      <div className="swap-container">
        <h1 className="swap-title">Swap</h1>
        <p className="swap-description">Exchange tokens easily with a clear interface.</p>

        <div className="swap-columns">
          {/* Kolom atas */}
          <div className="swap-column">
            <div className="label-balance-row">
              <label>From</label>
              <div className="balance-container">
                <span className="balance">Balance: {fromToken.balance} {fromToken.symbol}</span>
                <button className="max-button" onClick={handleMaxClick}>Max</button>
              </div>
            </div>
            <div className="input-section">
              <div className="token-selector">
                <img src={fromToken.logo} alt={fromToken.symbol} className="token-logo" />
                <span className="token-symbol">{fromToken.symbol}</span>
                <MdArrowDropDown className="dropdown-icon" />
              </div>
              <input
                type="number"
                placeholder="0.0"
                value={fromValue}
                onChange={handleFromChange}
                className="amount-input"
              />
            </div>
          </div>

          {/* Garis Pemisah dengan Ikon Swap */}
          <div className="divider">
            <div className="swap-icon-container" onClick={handleSwapTokens}>
              <MdOutlineSwapCalls className="swap-icon" />
            </div>
          </div>

          {/* Kolom bawah */}
          <div className="swap-column">
            <div className="label-balance-row">
              <label>To</label>
              <span className="balance">Balance: {toToken.balance} {toToken.symbol}</span>
            </div>
            <div className="input-section">
              <div className="token-selector">
                <img src={toToken.logo} alt={toToken.symbol} className="token-logo" />
                <span className="token-symbol">{toToken.symbol}</span>
                <MdArrowDropDown className="dropdown-icon" />
              </div>
              <input
                type="number"
                placeholder="0.0"
                value={toValue}
                onChange={handleToChange}
                className="amount-input"
              />
            </div>
          </div>
        </div>

        <button className="swap-button">Swap</button>
      </div>
    </div>
  );
};

export default SwapPage;
