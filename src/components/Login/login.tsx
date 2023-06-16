import React from "react";
import "./login.scss";
import Logo from "../../assets/Icons/logo.png";

const Login: React.FC = () => {
  return (
    <div className="login-wrapper">
      <div className="mx">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="login">
          <div className="login-fields">
            <h1 className="login-title">Log In NeoWallet</h1>
            <div className="login-inputs">
              <input type="email" name="email" placeholder=" EMAIL" />
              <input type="password" placeholder=" PASSWORD" />
              <button>LOGIN</button>
            </div>
            <div className="signup-text">
              <p>Forgot password ? </p>
              <p>- Don't have an account ? </p>
              <p style={{ color: "#a796c6" }}> Sign Up</p>
            </div>
          </div>
          <div className="login-qouts">
            <h2>TRACK EVERYTHING</h2>
            <p>IN ONE PLACE</p>
          </div>
        </div>
        <div className="social-media">
          <p>website</p>
          <p>twitter</p>
          <p>telegram</p>
          <p>medium</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
