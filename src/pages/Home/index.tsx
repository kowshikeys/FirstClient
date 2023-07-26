import React, { useState } from "react";

import "./Home.scss";
import Hero from "../../components/Hero/hero";
import Chat from "../../components/Chart/chat";
import Header from "../../components/Header/header";
import Overview from "../../components/Overview/overview";
import MyWallet from "../../components/MyWallet/myWallet";
import Transaction from "../../components/Transaction/transaction";
import Transfer from "../../components/Transfer";
import Wallets from "../../components/Wallets";
import Modal from "../../components/Modal";
import { tokenStore } from "../../store/tokensStore";

const Home = () => {
  const [openAddWalletModal, setOpenAddWalletModal] = useState(false);
  const [tokenName, setTokenName] = useState("");
  const setTokens = tokenStore((t) => t.setTokens);

  const handleAddToken = () => {
    setTokens({ name: tokenName, balance: 100 });
    setTokenName("");
    setOpenAddWalletModal(false);
  };

  const renderHomeContent = (
    <div className="home_content">
      <Hero />
      <div className="home_hero_content">
        <div className="hero_grid">
          <div className="grid_child_1">
            <div className="grid_subchild_1">
              <Overview />
              <div className="grid_subchild_child_1">
                <div className="flex_between">
                  <p
                    style={{
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    My Wallets
                  </p>
                  <button
                    style={{
                      background: "none",
                      outline: "none",
                      border: "none",
                      color: "#8C68CD",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                    className="add_wallet"
                    onClick={() => setOpenAddWalletModal(true)}
                  >
                    Add Wallet
                  </button>
                </div>
                <Wallets />
                <div className="stats">
                  <MyWallet />
                  <Transfer />
                </div>
              </div>
            </div>
            <div className="grid_subchild_2">
              <Chat />
            </div>
          </div>
          <div className="grid_child_2">
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="home">
      <div className="home_wrapper">
        <Header />
        {renderHomeContent}
      </div>
      <Modal isOpen={openAddWalletModal} handleClose={() => setOpenAddWalletModal(false)}>
        <div className="modal-content">
          <input value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
          <button onClick={() => handleAddToken()}>Add</button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
