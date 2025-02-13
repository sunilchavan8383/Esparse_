import React from 'react';
import './SupportProfiles.css'; // Create this CSS file for custom styling.

const HelpRequests = () => {
  const requests = [
    { name: "Shubham Sharma", status: "Need help", time: "5 min", count: 2 },
    { name: "Shubham Sharma", status: "Need help", time: "15 min", count: null },
    { name: "Shubham Sharma", status: "Need help", time: "15 min", count: null },
    { name: "Shubham Sharma", status: "Need help", time: "15 min", count: null },
    { name: "Shubham Sharma", status: "Need help", time: "5 min", count: 2 },
  
  ];

  return (
    <div className="help-requests-container">
      {requests.map((request, index) => (
        <div className="request-card" key={index}>
          <img
            src="https://via.placeholder.com/50"
            className="profile-pic"
          />
          <div className="request-info">
            <div className="request-name">{request.name}</div>
            <div className="request-status">{request.status}</div>
          </div>
          <div className="request-time">
            {request.time}
            {request.count && <span className="notification-count">{request.count}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HelpRequests;
