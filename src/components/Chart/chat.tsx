import React from "react";
import "../Chart/chat.scss";
import Btc from "../../assets/Images/btcChain.png";
import Market from "../../assets/Images/marketChat.png";
const Chat = () => {
  return (
    <div>
      <div className="mx">
        <div className="chat-wrapper">
          <img className="btc" src={Btc} alt="" />
          <img className="market" src={Market} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
