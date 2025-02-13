import React, { useState } from "react";
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
  const [active, setActive] = useState("dashboard"); // Default active item

  const menuItems = [
    { name: "dashboard", label: "Dashboard", icon: tool1 },
    { name: "client-management", label: "Client Management", icon: tool2 },
    { name: "document-management", label: "Document Management", icon: tool3 },
    { name: "gst-filing", label: "GST Filing", icon: tool4 },
    { name: "quotation-invoice", label: "Quotation & Invoice", icon: tool5 },
    { name: "payment", label: "Payment", icon: tool6 },
    { name: "report", label: "Report", icon: tool7 },
    { name: "support", label: "Support", icon: tool8 },
    { name: "settings", label: "Setting", icon: tool9 },
    { name: "/", label: "Log Out", icon: tool10 },
  ];

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
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`t1 ${active === item.name ? "active" : ""}`}
              onClick={() => setActive(item.name)}
            >
              <img
                src={item.icon}
                alt=""
                className={`menu-icon ${active === item.name ? "active-icon" : ""}`}
              />
              <Link to={item.name}>{item.label}</Link>
            </div>
          ))}
        </div>
        <div className="features">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
