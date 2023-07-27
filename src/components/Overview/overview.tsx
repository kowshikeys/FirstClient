import React from "react";
import "../Overview/overview.scss";
import Info from "../../assets/Icons/info.svg";
import { tokenStore } from "../../store/tokensStore";

const Overview: React.FC = () => {
  const tokens = tokenStore((t) => t.tokens);
  const setOpenTokenListModal = tokenStore((t) => t.setOpenTokenListModal);

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
          <div className="no-of-wallets" onClick={() => setOpenTokenListModal()}>
            <h1>{tokens.length}</h1>
            <p>Asserts</p>
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
