import React from "react";
import "./Logo.css";

import LogoImage from "./Logo.svg";

function Logo() {
  return (
    <div className="LogoContainer">
      <div className="LogoImage">
        <img src={LogoImage} height={45} alt="" />
      </div>
      <div className="LogoText">Esparse Matrix Solution</div>
    </div>
  );
}
export default Logo;
