import React from "react";
import "./TaxFilling2.css"; // Import the CSS file

const IncomeForm = () => {
  return (
    <div className="container">
      <div className="form-grid">
        {/* Left Column */}
        <div className="column">
          <LabelInput label="Income from Salary" />
          <LabelInput label="Income from Interest" />
          <LabelInput label="Rental Income Received" />
          <LabelInput label="Income from Digital Assets" />
        </div>

        {/* Middle Column */}
        <div className="column">
          <LabelInput label="Other Income" />
          <LabelInput label="Exempt Allowances" />
          <LabelInput label="Interest on Home Loan (Self occupied)" />
          <LabelInput label="Interest on Home Loan (Let out)" />
        </div>

        {/* Right Column */}
   
      </div>
      <div className="button-container">
          <button className="back-button">Back</button>
          <button className="next-button">Next</button>
        </div>
    </div>
  );
};

// Label + Input Component
const LabelInput = ({ label }) => (
  <div className="input-group">
    <label>{label}</label>
    <input type="text" />
  </div>
);

export default IncomeForm;
