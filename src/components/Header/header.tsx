import React from "react";
import "../Header/header.scss";
import DashboardLogo from "../../assets/Icons/dashboard-logo.png";
import Shape1 from "../../assets/Icons/Combied Shape1.svg";
import Shape2 from "../../assets/Icons/Combined Shape.svg";
import Shape3 from "../../assets/Icons/Combined Shape2.svg";
import Shape4 from "../../assets/Icons/Combined Shape3.svg";
import Shape5 from "../../assets/Icons/Combined Shape4.svg";
import Shape6 from "../../assets/Icons/Combined Shape5.svg";
import Shape7 from "../../assets/Icons/Combined Shape6.svg";
import Shape8 from "../../assets/Icons/Combined Shape7.svg";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <div className="dashboard-logo">
        <img src={DashboardLogo} alt="" />
      </div>
      <div className="section">
        <img src={Shape1} alt="" />
        <img src={Shape2} alt="" />
        <img src={Shape3} alt="" />
        <img src={Shape4} alt="" />
        <img src={Shape5} alt="" />
        <img src={Shape6} alt="" />
      </div>
      <div className="setting-panel">
        <img style={{ width: "40px", height: "40px" }} src={Shape7} alt="" />
      </div>
      <div className="setting-panel">
        <img style={{ width: "40px", height: "40px" }} src={Shape8} alt="" />
      </div>
    </div>
  );
};

export default Header;
