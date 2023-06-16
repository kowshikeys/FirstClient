import React from "react";
import "./signup.scss";
import Logo from "../../assets/Icons/logo.png";

const SignUp: React.FC = () => {
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
              <div className="login-container">
                <input
                  className="name-container"
                  type="text"
                  placeholder=" NAME"
                />
                <input
                  className="email-container"
                  type="email"
                  name="email"
                  placeholder=" EMAIL"
                />
              </div>

              <input type="password" placeholder="CHOOSE A PASSWORD" />
              <button>CREATE ACCOUNT</button>
            </div>
            <div className="signup-text">
              <p>Already have an acoount ? </p>
              <p style={{ color: "#a796c6" }}> Log In</p>
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

export default SignUp;
