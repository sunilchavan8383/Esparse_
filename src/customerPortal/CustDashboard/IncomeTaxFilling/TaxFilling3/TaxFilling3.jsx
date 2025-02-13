

import React from "react";
import "./TaxFilling3.css"; // Import the CSS file

const  TaxDetailsForm = () => {
  return (
    <div className="container">
      <div className="form-grid">
        {/* Left Column */}
        <div className="tax-column">
          <LabelInput label="Basic Deduction - 80C" />
          <LabelInput label="Medical Insurance - 80D" />
          <LabelInput label="Interest on Educational Loan - 80E" />
          <LabelInput label="Interest on Housing Loan - 80EEA" />
        </div>

        {/* Middle Column */}
        <div className="tax-column">
          <LabelInput label="Employee’s contribution to NPS - 80CCD" />
          <LabelInput label="Interest from Deposits -80TTA" />
          <LabelInput label="Donation to Charity - 80G" />
         
        </div>

        {/* Right Column */}
   
      </div>
      <div className="button-container">
          <button className="back-button">Back</button>
          <button className="next-button">Calculate</button>
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

export default  TaxDetailsForm;
