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
    <div className="dashboardContainer">
      <div className="dashboardGreeting">Hi XYZ, Welcome back </div>
      <div className="dashboardStats">
        <div className="dashboardCard1">
          <div className='dashboardLabelIcon'>
            <div className="dashboardUsers">Total Users</div>
            <div className="dashboardIcon">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="dashboardCount">
            <h1>20 k</h1>
          </div>
        </div>

        <div className="dashboardCard2">
          <div className='dashboardLabelIcon'>
            <div className="dashboardRevenue">Total Revenue Generated</div>
            <div className="dashboardIcon">
              <img src={img2} />
            </div>
          </div>
          <div className="dashboardCount">
            <h1>13,4321 k</h1>
          </div>
        </div>

        <div className="dashboardCard3">
          <div className='dashboardLabelIcon'>
            <div className="dashboardGst">Total GST Collected</div>
            <div className="dashboardIcon">
              <img src={img3} />
            </div>
          </div>
          <div className="dashboardCount">
            <h1>5,4321 k</h1>
          </div>
        </div>

        <div className="dashboardCard4">
          <div className='dashboardLabelIcon'>
            <div className="dashboardPayment">Outstanding Payment</div>
            <div className="dashboardIcon">
              <img src={img4} />
            </div>
          </div>
          <div className="dashboardCount">
            <h1>2321 k</h1>
          </div>
        </div>
      </div>

      <div className="dashboardStats2">
        {DivHtml2.map((content2, index) => (
          <StatsDiv2 key={index} content2={content2} />
        ))}
      </div>

      <div className="dashboardTransactions">
        <div className="transactionHistory">
          <div className="transactionTitle">Recent Transactions</div>
          <div className="allTransactions">
            <TransactionInformation />
          </div>
        </div>
        <div className="pendingApproval">
          <Link to="/admin-dashboard/pending-approvals">Pending Approval</Link>
        </div>
      </div>

      <div>
        <SetUpProfile />
      </div>
    </div>
  );
}

export default DashBoardFeature;
