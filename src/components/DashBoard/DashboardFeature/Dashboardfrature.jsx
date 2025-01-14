import React from "react";
import "./DashboardFeature.css";
import StatsDiv1 from "./StatsDiv1/StatsDiv1";
import StatsDiv2 from "./StatsDiv2/StatsDiv2";
import colors from "./StatsDiv1/DivBorderColors";
import DivHtml from "./StatsDiv1/DivHtml";
import DivHtml2 from "./StatsDiv2/DivHtml2";
import TransactionInformation from "./TransactionInformation/TransactionInformation";
import { Link } from "react-router-dom";
function DashBoardFeature() {
  return (
    <div className="DashBoardFeatureCon">
      <div className="greet">Hi XYZ, Welcome back </div>
      <div className="stats1">
        {DivHtml.map((content, index) => (
          <StatsDiv1
            key={index}
            content={content}
            style={{ border: `3px solid ${colors[index]}` }}
          />
        ))}
      </div>

      <div className="stats2">
        {DivHtml2.map((content2, index) => (
          <StatsDiv2 key={index} content2={content2} />
        ))}
      </div>
      <div className="recentTransations">
        <div className="TransactionHistory">
          <div className="TransactionInfo1">Recent Transaction</div>
          <div className="TransactionInfo">
            <p>Name</p>
            <p>Date</p>
            <p>Time</p>
            <p>Amount</p>
            <p>Status</p>
          </div>
          <div className="Alltrans">
            <TransactionInformation />
          </div>
        </div>
        <div className="PendingApproval" >
          <Link to="/admin-dashboard/pending-aprovals">Pending Approval</Link>
        </div>
      </div>
    </div>
  );
}
export default DashBoardFeature;
