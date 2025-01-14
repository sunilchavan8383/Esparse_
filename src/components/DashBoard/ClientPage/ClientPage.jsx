import React from "react";
import "./ClientPage.css";

function ClientPage() {
  return ( 
    <div className="ClientPageDiv">
      <div className="BandcBut">
        <button className='BusinessBut'>Business</button>
        <button className='ClientBut'>Client</button>
      </div>
      <div className="TeamMember">
        <div className='TeamMemberText'>
        <p>Team members</p>
        </div>
        <div className='TeamMemberButtons'>
        <div className='Filter'>Filter</div>
        <div className='AddBusiness'>Add Business</div>
        </div>
      </div>
      <div className="ClientManagement">
        <div className='BuissnessInfo'></div>
      </div>
    </div>
  );
}

export default ClientPage;
