import React from "react";
import transInfo from "./transInfoArray";
import "./TransactionInformation.css";

function TransactionInformation() {
  return (
    <div className="transInfo">
                <div className="TransactionInfo">
            <p>Name</p>
            <p>Date</p>
            <p>Time</p>
            <p>Amount</p>
            <p>Status</p>
          </div>
      {transInfo.map((transaction, index) => (
        <div key={index} className="transaction">
          <div className="translgname">
            <div className="translogo"></div>
            <p>{transaction[0]}</p> {/* Name */}
          </div>
          <p>{transaction[1]}</p> {/* Date */}
          <p>{transaction[2]}</p> {/* ID */}
          <p>{transaction[3]}</p> {/* Amount */}
          <p>{transaction[4]}</p> {/* Status */}
        </div>
       
      ))}
    </div>
  );
}

export default TransactionInformation;
