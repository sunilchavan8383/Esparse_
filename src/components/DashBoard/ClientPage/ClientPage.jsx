import React, { useState } from "react";

import "./ClientPage.css";
import ClientForm from "./ClientForm/ClientForm";
import { Outlet, Link } from "react-router-dom";
function ClientPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const [activeButton, setActiveButton] = useState("Business"); // Track the active button
  
    const BusinessStyle =
      activeButton === "Business"
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
  
    const ClientStyle =
      activeButton === "Client"
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
    <div className="ClientPageDiv">
      <div className="BandcBut">
      
          <Link to='Buissness'  className='BusinessBut' style={BusinessStyle} 
          onClick={() => setActiveButton("Business")} >Business</Link>
        

      
          <Link to='Client' className='ClientBut'   style={ClientStyle} 
          onClick={() => setActiveButton("Client")} >Client</Link>
      
      </div>
      <div className="TeamMember">
        <div className='TeamMemberText'>
        <p>Team members</p>
        </div>
        <div className='TeamMemberButtons'>
        <div className="filter-container">
      <div className="filter-button" onClick={toggleDropdown}>
        <span className="filter-icon">⚙️</span> Filters ▼
      </div>
      {isOpen && (
        <div className="filter-dropdown">
          <div className="filter-item">Active</div>
          <div className="filter-item">Inactive</div>
          <div className="filter-item">Can Edit</div>
          <div className="filter-item">Can View</div>
        </div>
      )}
    </div>
        <div className='AddBusiness'>Add Business</div>
        </div>
      </div>
      <div className="ClientManagement">
        <div className='BuissnessInfo'>
        <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
