import React from "react";
import "./TaxConsultant.css";
import img1 from './images/img1.svg';
import ProfileCard from "./ConsultatntProfile/ConsultantProfile";
import { Link } from "react-router-dom";

function TaxConsultant() {
  return (
    <div className="tax-dashboard-container">
      <div className="tax-greeting-section">
        <div className="tax-greeting-text">
          <div className="tax-greeting-primary">Need help with your taxes?</div>
          <div className="tax-greeting-secondary">Find a trusted tax consultant to assist you.</div>
        </div>
        <div className="tax-greeting-image">
          <img src={img1} alt="Greeting" />
        </div>
      </div>
      <div className='TaxConsultantText'>Choose your Tax Consultant</div>
      <div className='ConsultantProfiles'>
    <div>
      <ProfileCard/>
    </div>
    <div>
      <ProfileCard/>
    </div>
    <div>
      <ProfileCard/>
    </div>
    <div>
      <ProfileCard/>
    </div>
    <div>
      <ProfileCard/>
    </div>
    <div>
      <ProfileCard/>
    </div>
    <div>
      <ProfileCard/>
    </div>
    <div>
      <ProfileCard/>
    </div>
    <div>
      <ProfileCard/>
    </div>
      </div>
    
      </div>
   
  );
}

export default TaxConsultant;
