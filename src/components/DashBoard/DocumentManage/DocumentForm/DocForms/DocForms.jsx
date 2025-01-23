import React from "react";
import DocArray from "./DocArray";
import "./DocForm.css";

function DocInfoForm() {
  return (
    <div className="doc-info-container">
      {DocArray.map((doc, index) => (
        <div key={index} className="doc-card">
          <div className="doc-header">
            <div className="doc-image">
              <img
                src={doc.FileImg || "https://via.placeholder.com/50"}
               
              />
            </div>
            <div className="doc-filename">
              <p>{doc.Filename}</p>
            </div>
          </div>

          
            <div className="doc-type">
              <p>{doc.DocumentType}</p>
            </div>
            <div className="doc-size">
              <p>{doc.Size}</p>
            </div>
            <div className="doc-uploaded-date">
              <p>{doc.AploadedDate}</p>
            </div>
            <div className="doc-owner">
              <p>{doc.Owner}</p>
            </div>
          
        </div>
      ))}
    </div>
  );
}

export default DocInfoForm;
