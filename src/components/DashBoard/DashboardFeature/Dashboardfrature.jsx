import React from "react";
import "./DashboardFeature.css";

import StatsDiv2 from "./StatsDiv2/StatsDiv2";

import img1 from './Images/img1.svg';
import img2 from './Images/img2.svg';
import img3 from './Images/img3.svg';
import img4 from './Images/img4.svg';
import DivHtml2 from "./StatsDiv2/DivHtml2";
import TransactionInformation from "./TransactionInformation/TransactionInformation";
import SetUpProfile from './SetUpProfile/SetUpProfile'
import { Link } from "react-router-dom";
function DashBoardFeature() {
  return (
    <div className="DashBoardFeatureCon">
      <div className="greet">Hi XYZ, Welcome back </div>
      <div className="stats1">
      <div className="htmlOfDiv1">
  
      <div className='usersandimg'>
      <div className="Users">Total Users</div>
      <div className="Usersimg">
       <img src={img1} alt="" />
</div>

      </div>
      
      <div className="UserCount">
        <h1>20 k</h1>
      </div>



  </div>
  <div className="htmlOfDiv2">
          <div className='Revenueandimg'>
          <div className="RevenueLabel">Total Revenue Generated</div>
      <div className="Usersimg">
        <img src={img2}></img>
      </div>
      </div>
   
    <div className="RevenueCount">
      <h1>13,4321 k</h1>
    </div>

  </div>,
  <div className="htmlOfDiv3">
              <div className='Gstandimg'>
              <div className="GstLabel">Total GST Collected</div>
      <div className="Usersimg">
        <img src={img3}></img>
      </div>
      </div>
   
    <div className="GstCount">
      <h1>5,4321 k</h1>
    </div>
  </div>,
  <div className="htmlOfDiv4">
                  <div className='Paymentandimg'>
                  <div className="PaymentLabel">Outstanding Payment</div>
      <div className="Usersimg">
        <img src={img4}></img>
      </div>
      </div>
    
    <div className="PaymentCount">
      <h1>2321 k</h1>
    </div>
  </div>,
      </div>

      <div className="stats2">
        {DivHtml2.map((content2, index) => (
          <StatsDiv2 key={index} content2={content2} />
        ))}
      </div>
      <div className="recentTransations">
        <div className="TransactionHistory">
          <div className="TransactionInfo1">Recent Transaction</div>
          <div className="Alltrans">
            <TransactionInformation />
          </div>
        </div>
        <div className="PendingApproval" >
          <Link to="/admin-dashboard/pending-aprovals">Pending Approval</Link>
        </div>
      </div>
      <div>
        <SetUpProfile/>
      </div>
      
    </div>
  );
}
export default DashBoardFeature;
