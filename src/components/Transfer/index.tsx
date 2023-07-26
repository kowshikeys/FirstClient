import React, { useState } from "react";
import "./Transfer.scss";
// import Arrow from "../../assets/Icons/arrows.png";
import { tokenStore } from "../../store/tokensStore";

const Transfer: React.FC = () => {
  const tokens = tokenStore((t) => t.tokens);
  const updateTokenBalance = tokenStore((t) => t.updateTokenBalance);
  const [selectedToken, setSelectedToken] = useState(tokens[0].name);
  const [amount, setAmount] = useState("");

  const handleSendToken = () => {
    updateTokenBalance(selectedToken, Number(amount));
  };

  return (
    <div className="transfer">
      <div className="transfer-wrapper">
        <div className="amount">
          <div className="walet">
            <p>WALLET</p>
            {/* <div className="arrow">
              <p>BTC</p>
              <img src={Arrow} alt="" />
            </div> */}
            <select onChange={(e) => setSelectedToken(e.target.value)}>
              {tokens.map((token) => (
                <option key={token.name} value={token.name}>
                  {token.name.slice(0, 3).toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="amount-box">
            <p>AMOUNT</p>
            <p className="box">
              <input
                type={"number"}
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </p>
          </div>
        </div>
        <div className="send">
          <p>SEND TO</p>
          <h6 className="box">
            <input placeholder="1Cs4wu6pu5qCZ35bSLNVzGy" />
          </h6>
        </div>
        <div className="receive">
          <p>Receive?</p>
          <button onClick={() => handleSendToken()}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
