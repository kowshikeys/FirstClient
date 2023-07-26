import React from "react";
import "../Hero/hero.scss";
import Search from "../../assets/Icons/search.svg";
import Support from "../../assets/Icons/support.svg";
import Plus from "../../assets/Icons/plus.svg";
import User from "../../assets/Icons/user.svg";
import { userStore } from "../../store/userStore";
import { auth } from "../../utils/firebase";

const Hero: React.FC = () => {
  const user = userStore((state) => state.user);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="hero-wrapper">
      <div className="side-bar-one">
        <h2>NeoDash</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <img src={Search} alt="" />
        </div>
      </div>
      <div className="side-bar-two">
        <div className="support">
          <div className="support-box">
            <img src={Support} alt="" />
            <p>Support</p>
          </div>
          <div className="plus">
            <img src={Plus} alt="" />
          </div>
        </div>
        <div className="user">
          <p>{user?.displayName}</p>
          <div className="user-box">
            <img src={User} alt="" />
          </div>
          <div className="user-box" onClick={() => handleLogout()}>
            <img src={User} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
