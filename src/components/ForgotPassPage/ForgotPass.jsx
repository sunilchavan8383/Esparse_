import React from "react";
import img from "./images/img.svg";
import Logo from "../Logo/Logo";
import Forgot from "./ForgotDiv/Forgot";
import "./ForgotPass.css";
function ForgotPass() {
  return (
    <div className="LoginPage">
      <div className="LogoContainer">
        <div className="Logo">
          <Logo />
        </div>
      </div>

      <div className="ImgFormContainer">
        <div className="LoginPageImg">
          <img src={img} alt="" />
        </div>
        <div className="LoginPageForm">
          <Forgot />
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
