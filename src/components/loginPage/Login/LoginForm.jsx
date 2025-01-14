import React from "react";
import "./LoginForm.css";
import email from "./Images/email.svg";
import pass from "./Images/password.svg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-container">
      <div className="HelloandP">
        <h1>Hello</h1>
        <p>To keep connected with us please login</p>
      </div>
      <form className="login-form">
        <div className="input-group">
          <span className="icon">
            <img src={email} alt="" />
          </span>
          <input type="email" placeholder="Email Address" required />
        </div>
        <div className="input-group">
          <span className="icon">
            <img src={pass} alt="" />
          </span>
          <input type="password" placeholder="Password" required />
        </div>
        <div className="options">
          <label>
            <input type="checkbox" /> Remember
          </label>
          <Link to="/forgot" className="forgot-password">
            Forgot Password?
          </Link>
        </div>
        <div className="logbut" >
        <Link to="/registration" className="login-button">
           Login
          </Link>

        </div>
        <p className="register-text">
          Don’t have an account?<Link to="/registration">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
