import React from "react";
import "./Transfer.scss";
import Arrow from "../../assets/Icons/arrows.png";

const Transfer: React.FC = () => {
  return (
    <div className="transfer">
      <div className="transfer-wrapper">
        <div className="amount">
          <div className="walet">
            <p>WALLET</p>
            <div className="arrow">
              <p>BTC</p>
              <img src={Arrow} alt="" />
            </div>
          </div>
          <div className="amount-box">
            <p>AMOUNT</p>
            <p className="box">0.253678756</p>
          </div>
        </div>
        <div className="send">
          <p>SEND TO</p>
          <h6 className="box">1Cs4wu6pu5qCZ35bSLNVzGy</h6>
        </div>
        <div className="receive">
          <p>Receive?</p>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
