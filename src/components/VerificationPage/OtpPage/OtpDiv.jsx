import React from "react";
import img3 from "../Verifyimg/Verifyimg3.svg";
import "./OtpDiv.css";
import { Link } from "react-router-dom";
const OtpVerification = () => {
  return (
    <div className="otp-container">
      <div className="otp-card">
        <div className="icon-wrapper">
          <img src={img3} alt="Shield Icon" className="shield-icon" />
        </div>
        <h3>Enter OTP Code sent to</h3>
        <p className="email-placeholder">********@gmail.com</p>
        <div className="otp-inputs">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="otp-input"
              />
            ))}
        </div>
        <Link to="/admin-dashboard/dashboard" className="verify-btn">Submit</Link>
        
      </div>
    </div>
  );
};

export default OtpVerification;
