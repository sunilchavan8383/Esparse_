import React from "react";
import ReportArray from "./ReportArray";
import "./ReportInfo.css";

function ReportInfoForm() {
  return (
    <div className="report-info-container">
      {ReportArray.map((report, index) => (
        <div key={index} className="report-card">

            <div className="report-name">
              <p>{report.Name}</p>
            </div>
            <div className="report-filling-type">
              <p>{report.FillingType}</p>
            </div>
      

          
            <div className="report-total-field">
              <p>{report.TotalField}</p>
            </div>
            <div className="report-pending">
              <p>{report.Pending}</p>
            </div>
            <div className="report-due-date">
              <p>{report.DueDate}</p>
            </div>
            <div className="report-status">
              <p>{report.Status}</p>
            </div>
          </div>
    
      ))}
    </div>
  );
}

export default ReportInfoForm;
