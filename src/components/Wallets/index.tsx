import React from "react";
import "./wallet.scss";
import Btc from "../../assets/Icons/btc.svg";
import Eth from "../../assets/Icons/eth.svg";
import Ltc from "../../assets/Icons/ltc.svg";
import Neoai from "../../assets/Icons/neoai_logo.svg";

const Wallets: React.FC = () => {
  return (
    <div className="wallet">
      <div style={{ background: "#8C68CD" }} className="wallet_card">
        <div className="wallet_card_header">
          <p style={{ color: "white" }}>BTC</p>
          <div>
            <img style={{ background: "#FB9E32" }} src={Btc} alt="" />
          </div>
        </div>
        <div className="wallet_card_header">
          <p style={{ fontSize: "12px", color: "white" }}>Bitcoin</p>
          <span></span>0.2221
        </div>
      </div>
      <div className="wallet_card">
        <div className="wallet_card_header">
          <p>ETH</p>
          <img src={Eth} alt="" />
        </div>
        <div className="wallet_card_header">
          <p>Ethereum</p>
          {/* <span></span>0.2221 */}
        </div>
      </div>
      <div className="wallet_card">
        <div className="wallet_card_header">
          <p>LTC</p>
          <img src={Ltc} alt="" />
        </div>
        <div className="wallet_card_header">
          <p>litecoin</p>
          {/* <span></span>0.2221 */}
        </div>
      </div>
      <div className="wallet_card">
        <div className="wallet_card_header">
          <p>NeoAi</p>
          <img
            style={{ width: "35px", height: "35px", padding: "2px" }}
            src={Neoai}
            alt=""
          />
        </div>
        <div className="wallet_card_header">
          <p>NeoAi</p>
          {/* <span></span>0.2221 */}
        </div>
      </div>
    </div>
  );
};

export default Wallets;
