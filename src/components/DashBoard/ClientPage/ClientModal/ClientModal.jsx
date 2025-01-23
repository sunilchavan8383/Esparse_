import React from "react";
import "./ClientModal.css";
import { Outlet, Link } from "react-router-dom";
const ClientModal = ({ isOpen, onClose, clientData }) => {
    
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">
          <div className="client-avatar">
            <img src={clientData.avatar} alt="Client Logo" />
          </div>
          <div>
            <h2>{clientData.businessName}</h2>
            <p>@{clientData.username}</p>
            <p>Joined - {clientData.joinedDate}</p>
          </div>
          <button className="message-button">Message</button>
        </div>
        <div className="modal-body">
          <form>
            <label>Business Name</label>
            <input type="text" value={clientData.businessName} readOnly />
            <label>Business Type</label>
            <input type="text" value={clientData.businessType} readOnly />
            <label>No. of Employees</label>
            <input type="number" value={clientData.numEmployees} readOnly />
            <label>Email Address</label>
            <input type="email" value={clientData.email} readOnly />
            <label>Phone Number</label>
            <input type="tel" value={clientData.phone} readOnly />
            <label>Business Address</label>
            <input type="text" value={clientData.address} readOnly />
            <label>GSTIN</label>
            <input type="text" value={clientData.gstin} readOnly />
            <label>CIN</label>
            <input type="text" value={clientData.cin} readOnly />
            <label>PAN Card Number</label>
            <input type="text" value={clientData.pan} readOnly />
            <label>Password</label>
            <input type="password" value="*********" readOnly />
          </form>
        </div>
        <div className="modal-footer">
          <div className="stats">
            <div>Revenue Generated: {clientData.revenue}</div>
            <div>GST Collected: {clientData.gst}</div>
            <div>Outstanding Payments: {clientData.outstanding}</div>
          </div>
          <button className="delete-button">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default ClientModal;
