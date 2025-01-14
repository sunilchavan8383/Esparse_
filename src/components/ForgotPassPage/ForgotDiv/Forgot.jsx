import React from "react";
import "./Forgot.css";
import email from "../images/email.svg";
import { Link } from "react-router-dom";
const Forgot = () => {
  return (
    <div className="login-container2">
      <div className="HelloandP2">
        <h1>Forgot Password</h1>
        <p>
          Enter your email address associated with your account to recover your
          password
        </p>
      </div>
      <form className="login-form2">
        <div className="input-group2">
          <span className="icon2">
            <img src={email} alt="" />
          </span>
          <input type="email" placeholder="Email Address" required />
        </div>

        <div className="logbut2">
          <button type="submit" className="login-button2">
            Reset Password
          </button>
        </div>
        <p className="register-text2">
          Back to <Link to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Forgot;
