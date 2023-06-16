import React from "react";
import "../Overview/overview.scss";
import Info from "../../assets/Icons/info.svg";

const Overview: React.FC = () => {
  return (
    <div className="overview-wrapper">
      <div className="overview-text">
        <p>Overview</p>
        <img src={Info} alt="" />
      </div>
      <div className="whole-wrapper">
        <div className="total-transaction">
          <div className="no-of-trans">
            <h1>2,435</h1>
            <p>Transactions</p>
          </div>
          <div className="no-of-wallets">
            <h1>5</h1>
            <p>Wallets</p>
          </div>
        </div>
        <div className="current-balance">
          <p>Current balance</p>
          <h1>3.43330</h1>
        </div>
        <div className="buy">
          <p>
            2.7995 ERU <span>+12%</span>
          </p>
          <p className="buy-button">buy</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
