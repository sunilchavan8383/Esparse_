import React from "react";
import Logo from "../Logo/Logo";
import LoginImg from "./LoginPageImg/LoginImg.svg";
import "./LoginPage.css";
import Login from "./Login/LoginForm";

function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="LogoContainer">
        <div className="Logo">
          <Logo />
        </div>
      </div>

      <div className="ImgFormContainer">
        <div className="LoginPageImg">
          <img src={LoginImg} alt="" />
        </div>
        <div className="LoginPageForm">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
