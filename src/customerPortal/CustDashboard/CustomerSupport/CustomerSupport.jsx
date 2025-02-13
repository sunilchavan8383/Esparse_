import React from "react";
import "./CustomerSupport.css";
import img1 from './img1.svg'
import { Link } from "react-router-dom";
import img2 from './img2.svg';
import img3 from './img3.svg';
function CustomerSupport() {
  return (
    <div className="tax-dashboard-container">
      <div className="welcome-section">
        <div className="welcome-text">
          <div className="welcome-title">We're here to help with any queries or issues</div>
          <div className="welcome-subtext">Reach out for assistance anytime!</div>
          
        </div>
        <div className="welcome-image">
          <img src={img1} alt="Welcome" />
        </div>

      </div>
      <div className="support-cards-container">
      {/* FAQ Card */}
      <div className="support-card">
        <h3 className="card-title">Frequently Asked Questions</h3>
        <p className="card-description">
          Find questions and answers related to the Income Tax
        </p>
        <div><img src={img2} alt="" /></div>
      </div>

      {/* Live Chat Card */}
      <div className="support-card">
        <h3 className="card-title">Live Chat</h3>
        <p className="card-description">
          Find questions and answers related to the Income Tax
        </p>
        <div><img src={img3} alt="" /></div>
      </div>
    </div>
      </div>
   
  );
}

export default CustomerSupport;
