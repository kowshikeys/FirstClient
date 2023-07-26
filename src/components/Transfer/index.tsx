import React, { useState } from "react";
import "./Transfer.scss";
// import Arrow from "../../assets/Icons/arrows.png";
import { tokenStore } from "../../store/tokensStore";
import Modal from "../Modal";

const Transfer: React.FC = () => {
  const tokens = tokenStore((t) => t.tokens);
  const updateTokenBalance = tokenStore((t) => t.updateTokenBalance);
  const receiveTokenBalance = tokenStore((t) => t.receiveTokenBalance);
  const [selectedToken, setSelectedToken] = useState(tokens[0].name);
  const [amount, setAmount] = useState("");
  const [openModal, setOpenModal] = useState<"send" | "received" | null>(null);

  const handleSendToken = () => {
    updateTokenBalance(selectedToken, Number(amount));
    setOpenModal("send");
  };

  const handleReceiveToken = () => {
    receiveTokenBalance(selectedToken, Number(amount));
    setOpenModal("received");
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
          <button onClick={() => handleReceiveToken()}>Receive</button>
          <button onClick={() => handleSendToken()}>Send</button>
        </div>
      </div>
      <Modal isOpen={!!openModal} handleClose={() => setOpenModal(null)}>
        <div className="modal-content">
          <div className="transaction-popup">
            <span>i</span>
            <p>{openModal} Successfully</p>
          </div>
          <div className="close-btn">
            <span onClick={() => setOpenModal(null)}>close</span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Transfer;
