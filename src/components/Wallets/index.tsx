import React, { Fragment } from "react";
import "./wallet.scss";
import Btc from "../../assets/Icons/btc.svg";
import Eth from "../../assets/Icons/eth.svg";
// import Ltc from "../../assets/Icons/ltc.svg";
// import Neoai from "../../assets/Icons/neoai_logo.svg";
import { tokenStore } from "../../store/tokensStore";

const Wallets: React.FC = () => {
  const tokens = tokenStore((t) => t.tokens);
  const setOpenTokenListModal = tokenStore((t) => t.setOpenTokenListModal);

  return (
    <div className="wallet">
      <div style={{ background: "#8C68CD" }} className="wallet_card">
        {tokens.slice(0, 1).map((token) => (
          <Fragment key={token.name}>
            <div className="wallet_card_header">
              <p style={{ color: "white", textTransform: "uppercase" }}>{token.name.slice(0, 3)}</p>
              <div>
                <img style={{ background: "#FB9E32" }} src={Btc} alt="" />
              </div>
            </div>
            <div className="wallet_card_header">
              <p style={{ fontSize: "12px", color: "white" }}>{token.name}</p>
              <span></span>
              {token.balance}
            </div>
          </Fragment>
        ))}
      </div>
      {tokens.length <= 4
        ? tokens.slice(1, 4).map((token) => (
            <div key={token.name} className="wallet_card">
              <div className="wallet_card_header">
                <p style={{ textTransform: "uppercase" }}>{token.name.slice(0, 3)}</p>
                <img src={Eth} alt="" />
              </div>
              <div className="wallet_card_header">
                <p>{token.name}</p>
                {/* <span></span>0.2221 */}
              </div>
            </div>
          ))
        : tokens.slice(1, 3).map((token) => (
            <div key={token.name} className="wallet_card">
              <div className="wallet_card_header">
                <p style={{ textTransform: "uppercase" }}>{token.name.slice(0, 3)}</p>
                <img src={Eth} alt="" />
              </div>
              <div className="wallet_card_header">
                <p>{token.name}</p>
                {/* <span></span>0.2221 */}
              </div>
            </div>
          ))}
      {tokens.length > 4 && (
        <div
          className="wallet_card"
          role="button"
          onClick={() => setOpenTokenListModal()}
          style={{ cursor: "pointer" }}
        >
          <div style={{ display: "grid", placeItems: "center", height: "100%" }}>
            <h2 style={{ color: "#fff" }}>+{tokens.length - 3}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallets;
