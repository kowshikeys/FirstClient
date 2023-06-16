import React from "react";

import "./Home.scss";
import Hero from "../../components/Hero/hero";
import Chat from "../../components/Chart/chat";
import SignUp from "../../components/SignUp/signup";
import Header from "../../components/Header/header";
import Overview from "../../components/Overview/overview";
import MyWallet from "../../components/MyWallet/myWallet";
import Transaction from "../../components/Transaction/transaction";
import Transfer from "../../components/Transfer";
import Wallets from "../../components/Wallets";

const Home = () => {
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
                  <p>My Wallets</p>
                  <button className="add_wallet">Add Wallet</button>
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
    </div>
  );
};

export default Home;
