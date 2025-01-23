import React from "react";
import ClientForm from "./ClientForm"; // Assuming it's in the same directory
import "./ClientInfoForm.css";
function ClientInfoForm() {
  return (
    <div className="ClientInfoForm">
      {ClientForm.map((client, index) => (
        <div key={index} className="client">
          <div className="businessIdandImg">
            <div className="businessImg">
              <img  />
            </div>
            <div className="businessId">
              <p>{client.businessId}</p>
            </div>
          </div>
          <div className="businessName">
            <p>{client.businessName}</p>
          </div>
          <div className="businessEmail">
            <p>{client.businessEmail}</p>
          </div>
          <div className="businessType">
            <p>{client.businessType}</p>
          </div>
          <div className="businessLastLog">
            <p>{client.lastLog}</p>
          </div>
          <div className="businessJoined">
            <p>{client.joinedDate}</p>
          </div>
          <div className="client-actions">
            <button className="view-profile-btn1">{client.viewProfile}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClientInfoForm;
