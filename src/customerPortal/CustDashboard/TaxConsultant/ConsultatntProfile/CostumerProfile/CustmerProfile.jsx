import React from "react";
import "./CustumerProfile.css";

const CAProfile = () => {
  return (
    <div className="profile-container">
      {/* Header Section */}
      <div className="header">
        <img src="https://source.unsplash.com/random/800x400" alt="Background" className="header-img" />
      </div>

      {/* Profile Info */}
      <div className="profile">
        <img src="https://source.unsplash.com/random/150x150" alt="Profile" className="profile-pic" />
        <h2 className="profile-name">CA Anuj Verma</h2>
        <p className="username">@anujvermaa664</p>
        <button className="consult-btn">Consult</button>
      </div>

      {/* About Section */}
      <div className="about">
        <h3>About</h3>
        <p>🧑‍💼 Male</p>
        <p>📅 XXXXX</p>
        <p>📧 XXXXX</p>
        <p>📍 XXXXX</p>
      </div>

      {/* Bio Section */}
      <div className="bio">
        <h3>Bio</h3>
        <p>Specializes in Personal Income Tax, Investment Planning and has 2+ years of experience in tax consultation.</p>
        <h3>Certifications</h3>
        <p>Certified Chartered Accountant (CA)</p>
        <h3>Consultation Fee</h3>
        <p>Rs 1000/Hour</p>
        <h3>Language</h3>
        <ul>
          <li>Hindi</li>
          <li>English</li>
        </ul>
      </div>

      {/* Reviews Section */}
      <div className="reviews">
        <h3>Reviews</h3>
        {[...Array(5)].map((_, i) => (
          <div className="review" key={i}>
            <p className="reviewer-name">⭐ Anjali Singh</p>
            <p className="review-text">Anuj was extremely professional and helped me get my taxes filed quickly. His expertise in personal income tax saved me a lot of money on deductions. Highly recommend!</p>
          </div>
        ))}
      </div>

      {/* Chat Button */}
      <div className="chat-btn">
        💬
      </div>
    </div>
  );
};

export default CAProfile;
