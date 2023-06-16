import React from "react";
import "./transaction.scss";

const Transaction = () => {
  return (
    <div className="wrapper">
      <div className="transaction-wrapper">
        <div className="transaction-box">
          <div className="trans-title">
            <p>Transactions</p>
            <div className="trans-list">
              <p>ALL</p>
              <p>SENT</p>
              <p>RECENT</p>
            </div>
          </div>
        </div>
        <div className="coming-soon">
          <p style={{ color: "white" }}>...</p>
          <p style={{ color: "#42434B" }}>Coming Soon</p>
        </div>
      </div>
      <div className="news">
        <h5>News</h5>
        <p>ValueCash Announces ICO to Reform E-Commerce With Its PoT Protocol</p>
        <p style={{ color: "#42434B" }}>
          16:23, 12 May <br />
          2023
        </p>
      </div>
    </div>
  );
};

export default Transaction;
