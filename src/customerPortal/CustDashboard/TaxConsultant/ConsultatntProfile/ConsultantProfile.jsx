import React from "react";
import "./ConsultantProfile.css";
import stars from '../images/stars.svg'
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/50"
        
          className="profile-image"
        />
        <div className="profile-info">
          <div className="profile-name">CA Anuj</div>
          <div className="profile-username">@anujvermaa664</div>
        </div>
        <Link to='customer-profile' className="profile-button" >View Profile</Link>
      </div>
      <div className="profile-details">
        <p className="profile-specialization">
          Specializes in Personal Income Tax, Investment Planning
        </p>
        <div className="profile-experience">2+ years of experience in tax consultation</div>
      </div>
      <div className="profile-rating">
    <img src={stars} alt="" />
      </div>
    </div>
  );
};

export default ProfileCard;
