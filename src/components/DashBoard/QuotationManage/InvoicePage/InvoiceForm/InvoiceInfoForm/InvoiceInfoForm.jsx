import React from "react";
import InvoiceArray from "./InvoiceArray";
import "./InvoiceInfoForm.css";

function InvoiceInfoForm() {
  return (
    <div className="invoice-info-container">
      {InvoiceArray.map((invoice, index) => (
        <div key={index} className="invoice-card">
          <div className="invoice-header">
            <div className="invoice-img">
              <img src={invoice.FileImg || "https://via.placeholder.com/50"} />
            </div>
            <div className="invoice-name">
              <p>{invoice.Name}</p>
            </div>
          </div>

          
            <div className="invoice-id">
              <p>{invoice.InvoiceId}</p>
            </div>
            <div className="invoice-date">
              <p>{invoice.Date}</p>
            </div>
            <div className="invoice-type">
              <p>{invoice.Type}</p>
            </div>
            <div className="invoice-amount">
              <p>{invoice.Amount}</p>
            </div>
            <div className="invoice-status">
              <p>{invoice.Status}</p>
            </div>
            <div className="invoice-action">
              <p>{invoice.Action}</p>
            </div>
          </div>
     
      ))}
    </div>
  );
}

export default InvoiceInfoForm;
