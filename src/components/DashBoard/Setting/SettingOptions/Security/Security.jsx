import React, { useState } from "react";
import "./Security.css";

function AuthSettings() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="auth-settings">
      <div className="password-management">
        <h3>Password Management</h3>
        <form>
          <div className="form-group">
            <label>Current password</label>
            <div className="input-container">
              <input type="password" placeholder="Current password" />
              <i className="icon-eye"></i>
            </div>
          </div>
          <div className="form-group">
            <label>New password</label>
            <div className="input-container">
              <input type="password" placeholder="New password" />
              <i className="icon-eye"></i>
            </div>
          </div>
          <div className="form-group">
            <label>Confirm password</label>
            <div className="input-container">
              <input type="password" placeholder="Confirm password" />
              <i className="icon-eye"></i>
            </div>
          </div>
          <button type="submit" className="btn-save">Save</button>
        </form>
      </div>

      <div className="two-factor-auth">
        <h3>Two-Factor Authentication</h3>
        <div className="auth-option">
         
            <input
              type="radio"
              name="auth-method"
              value="app"
              checked={selectedOption === "app"}
              onChange={() => handleOptionChange("app")}
            />
            <div className="auth-option-details">
              <strong>Mobile app authenticator</strong>
              <p>
                Securely access your profile with a time-based code from your
                authenticator app.
              </p>
            </div>
         
        </div>
        <div className="auth-option">
       
            <input
              type="radio"
              name="auth-method"
              value="email"
              checked={selectedOption === "email"}
              onChange={() => handleOptionChange("email")}
            />
            <div className="auth-option-details">
              <strong>Email</strong>
              <p>
                Receive a one-time code via email for quick and secure profile
                access.
              </p>
            </div>
       
        </div>
        <button className="btn-proceed">Proceed</button>
      </div>
    </div>
  );
}

export default AuthSettings;
