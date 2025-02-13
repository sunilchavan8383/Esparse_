import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import "./CustDashBoard.css";
import img1 from "./AdminImg/Not.svg";
import img2 from "./AdminImg/msg.svg";
import tool1 from "./AdminImg/tool1.svg";
import tool2 from "./AdminImg/tool2.svg";
import tool3 from "./AdminImg/tool3.svg";
import tool4 from "./AdminImg/tool4.svg";
import tool5 from "./AdminImg/tool5.svg";
import tool6 from "./AdminImg/tool6.svg";


function CustDash() {
  const [active, setActive] = useState("dashboard"); // Default active item

  const menuItems = [
    { name: "customer-dashboard", label: "Dashboard", icon: tool1 },
    { name: "income-tax-filling", label: "Income Tax Filling", icon: tool2 },
    { name: "tax-consultant", label: "Tax Consultant", icon: tool3 },
    { name: "customer-documents", label: "Document", icon: tool4 },
    { name: "customer-setting", label: "Setting", icon: tool5 },
    { name: "customer-logout", label: "Log Out", icon: tool6 },
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

export default CustDash;
