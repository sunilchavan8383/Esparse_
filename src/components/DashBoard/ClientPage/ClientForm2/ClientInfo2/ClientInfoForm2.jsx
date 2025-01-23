import React from "react";
import ClientArray from "./ClientArray";
import "./ClientInfoForm2.css";
import { Outlet, Link } from "react-router-dom";
function ClientInfoForm2() {
  return (
    <div className="client-info-container">
      {ClientArray.map((client, index) => (
        <div key={index} className="client-card">
          <div className="client-header">
            <div className="client-image">
              <img
                src={client.businessImg || "https://via.placeholder.com/50"}
                
              />
            </div>
            <div className="client-id">
              <p>{client.UserId}</p>
            </div>
          </div>
            <div className="client-name">
              <p> {client.Name}</p>
            </div>
            <div className="client-email">
              <p>{client.Email}</p>
            </div>
            <div className="client-designation">
              <p>{client.Designation}</p>
            </div>
            <div className="client-last-log">
              <p>{client.lastLog}</p>
            </div>
            <div className="client-joined-date">
              <p> {client.joinedDate}</p>
              </div>
         
          <div className="client-actions">
          <Link to='Client-profile'>{client.viewProfile}</Link>
          </div>
      
        </div>
      ))}
    </div>
  );
}

export default ClientInfoForm2;
