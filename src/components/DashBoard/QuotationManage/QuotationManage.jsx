import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./QuotationManage.css";

function QuotationManage() {
  const [activeButton, setActiveButton] = useState("quotation"); // Track the active button

  const quotationStyle =
    activeButton === "quotation"
      ? {
          backgroundColor: "#a386ff",
          color: "white",
          borderColor:"#a386ff",
        }
      : {
          backgroundColor: "white",
          color: "#a386ff",
          borderColor:"#a386ff",
        };

  const invoiceStyle =
    activeButton === "invoice"
      ? {
          backgroundColor: "#a386ff",
          color: "white",
          borderColor:"#a386ff",
        }
      : {
          backgroundColor: "white",
          color: "#a386ff",
          borderColor:"#a386ff",
        };

  return (
    <div className="QuotationManageDiv">
      <div className="QandIBut">
        <Link
          to="quotation"
          className="QuotationBut"
          style={quotationStyle} // Apply dynamic style
          onClick={() => setActiveButton("quotation")} // Set active button
        >
          Quotation
        </Link>
        <Link
          to="invoice"
          className="InvoiceBut"
          style={invoiceStyle} // Apply dynamic style
          onClick={() => setActiveButton("invoice")} // Set active button
        >
          Invoice
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default QuotationManage;
