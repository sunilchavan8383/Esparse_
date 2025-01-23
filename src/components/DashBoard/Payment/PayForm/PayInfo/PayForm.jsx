import React from "react";
import PayArray from "./PayArray";
import "./PayForm.css";

function PayInfoForm() {
  return (
    <div className="pay-info-container">
      {PayArray.map((pay, index) => (
        <div key={index} className="pay-card">
          
            <div className="pay-id">
              <p>{pay.PaymentId}</p>
            </div>
            <div className="pay-gst">
              <p>{pay.GSTNo}</p>
    
          </div>

        
            <div className="pay-date">
              <p>{pay.PaymentDate}</p>
            </div>
            <div className="pay-amount">
              <p>{pay.Amount}</p>
            </div>
            <div className="pay-method">
              <p>{pay.PaymentMethod}</p>
            </div>
            <div className="pay-transaction-id">
              <p>{pay.TransactionID}</p>
            </div>
            <div className="pay-status">
              <p>{pay.Status}</p>
            </div>
            <div className="pay-action">
              <p>{pay.Action}</p>
            </div>
          </div>
     
      ))}
    </div>
  );
}

export default PayInfoForm;
