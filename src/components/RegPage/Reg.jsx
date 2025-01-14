import React from "react";
import img from "./RegImg/Regimg.svg";
import Logo from "../Logo/Logo";
import CreateAccount from "./RegForm/RegForm";
import "./Reg.css";
function Reg() {
  return (
    <div className="LoginPage">
      <div className="LogoContainer">
        <div className="Logo">
          <Logo />
        </div>
      </div>

      <div className="ImgFormContainer">
        <div className="LoginPageForm">
          <CreateAccount />
        </div>
        <div className="LoginPageImg">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reg;
