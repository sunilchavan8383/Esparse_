import React from "react";
import './BudgetTable.css'
const TaxComparison = () => {
  return (
    <div className="tax-container">
      <table className="tax-table">
        <thead>
          <tr>
            <th></th>
            <th className="table-heading">Post Budget (Old Regime) <br /> FY 2024-2025</th>
            <th className="table-heading">Post Budget (New Regime) <br /> FY 2024-2025</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Total Income </td>
            <td> Rs 000 </td>
            <td> Rs 000 </td>
          </tr>
          <tr>
            <td className="dropdown">
              Exemption & Deduction ▼
            </td>
            <td> Rs 000 </td>
            <td> Rs 000 </td>
          </tr>
          <tr>
            <td> Taxable Income </td>
            <td> Rs 000 </td>
            <td> Rs 000 </td>
          </tr>
          <tr>
            <td className="dropdown">
              Tax Due on above ▼
            </td>
            <td> Rs 000 </td>
            <td> Rs 000 </td>
          </tr>
        </tbody>
      </table>
      <div className="calculator-btn-container">
      <button className="calculator-btn">Try Calculator Again</button>
      </div>
      
    </div>
  );
};

export default TaxComparison;
