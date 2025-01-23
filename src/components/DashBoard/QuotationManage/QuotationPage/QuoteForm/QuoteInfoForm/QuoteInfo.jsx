import React from "react";
import QuoteArray from "./QuoteArray";
import "./QuoteInfo.css";

function QuoteInfoForm() {
  return (
    <div className="quote-info-container">
      {QuoteArray.map((quote, index) => (
        <div key={index} className="quote-card">
          <div className="quote-header">
          <div className="quote-img">
              <img src={quote.FileImg || "https://via.placeholder.com/50"}/>
            </div>
            <div className="quote-name">
              <p>{quote.Name}</p>
            </div>
            </div>
            <div className="quote-number">
              <p>{quote.QuotationNo}</p>
            </div>
         
            <div className="quote-issue-date">
              <p>{quote.IssueDate}</p>
            </div>
            <div className="quote-due-date">
              <p>{quote.DueDate}</p>
            </div>
            <div className="quote-amount">
              <p>{quote.Amount}</p>
            </div>
            <div className="quote-status">
              <p>{quote.Status}</p>
            </div>
            <div className="quote-action">
              <p>{quote.Action}</p>
            </div>
          </div>
      
      ))}
    </div>
  );
}

export default QuoteInfoForm;
