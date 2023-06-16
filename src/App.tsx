import React from "react";
import Login from "./components/Login/login";
import "./App.css";
import SignUp from "./components/SignUp/signup";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Overview from "./components/Overview/overview";
import MyWallet from "./components/MyWallet/myWallet";
import Transaction from "./components/Transaction/transaction";
import Chat from "./components/Chart/chat";

function App() {
  return (
    <>
      <Login />
      <SignUp />
      <Header />
      <Hero />
      <Overview />
      <MyWallet />
      <Transaction />
      <Chat />
    </>
  );
}

export default App;
