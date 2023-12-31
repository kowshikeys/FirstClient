import React from "react";
import "./myWallet.scss";
import PrecentOne from "../../assets/Icons/full.svg";
import PrecentTwo from "../../assets/Icons/medium.svg";
import PrecentThree from "../../assets/Icons/low.svg";
import Info from "../../assets/Icons/info.svg";

const MyWallet: React.FC = () => {
  return (
    <div className="wallet-wrapper">
      <div className="percent">
        <div className="flex-tool">
          <img src={PrecentOne} alt="" />
          <h1>81%</h1>
          <p>Bitcoin</p>
          <img src={Info} alt="" />
        </div>
        <div className="flex-tool">
          <img src={PrecentTwo} alt="" />
          <h1>12%</h1>
          <p>Ethereum</p>
          <img src={Info} alt="" />
        </div>
        <div className="flex-tool">
          <img src={PrecentThree} alt="" />
          <h1>7%</h1>
          <p>Litecoin</p>
          <img src={Info} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyWallet;
