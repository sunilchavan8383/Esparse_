import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./DashBoard.css";
import img1 from "./AdminImg/Not.svg";
import img2 from "./AdminImg/msg.svg";
import tool1 from "./AdminImg/tool1.svg";
import tool2 from "./AdminImg/tool2.svg";
import tool3 from "./AdminImg/tool3.svg";
import tool4 from "./AdminImg/tool4.svg";
import tool5 from "./AdminImg/tool5.svg";
import tool6 from "./AdminImg/tool6.svg";
import tool7 from "./AdminImg/tool7.svg";
import tool8 from "./AdminImg/tool8.svg";
import tool9 from "./AdminImg/tool9.svg";
import tool10 from "./AdminImg/tool10.svg";

function AdminDash() {
  return (
    <div className="adminContainer">
      <div className="LgContainer">
        <div>
          <Logo />
        </div>
        <div className="NotSearch">
          <input type="search" placeholder="Search" />
        </div>
        <div className="Notcontainer">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <button className="NotBut">View Report</button>
        </div>
      </div>
      <div className="tools">
        <div className="toolscontainer">
          <div className="t1">
            <img src={tool1} alt="" />
            <Link to="dashboard">Dashboard</Link>
          </div>
          <div className="t1">
            <img src={tool2} alt="" />
            <Link to="client-management">Client Management</Link>
          </div>
          <div className="t1">
            <img src={tool3} alt="" />
            <Link to="document-management">Document Management</Link>
          </div>
          <div className="t1">
            <img src={tool4} alt="" />
            <Link to="gst-filing">GST Filing</Link>
          </div>
          <div className="t1">
            <img src={tool5} alt="" />
            <Link to="quotation-invoice">Quotation & Invoice</Link>
          </div>
          <div className="t1">
            <img src={tool6} alt="" />
            <Link to="payment">Payment</Link>
          </div>
          <div className="t1">
            <img src={tool7} alt="" />
            <Link to="report">Report</Link>
          </div>
          <div className="t1">
            <img src={tool8} alt="" />
            <Link to="support">Support</Link>
          </div>
          <div className="t1">
            <img src={tool9} alt="" />
            <Link to="settings">Setting</Link>
          </div>
          <div className="t11">
            <img src={tool10} alt="" />
            <Link to="/">Log Out</Link>
          </div>
        </div>
        <div className="features">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
