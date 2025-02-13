import React from "react";
import "./CustomerDashboard.css";
import img1 from './Images/img1.svg';
import img2 from './Images/img2.svg';
import img3 from './Images/img3.svg';
import img4 from './Images/img4.svg';
import img5 from './Images/img5.svg';
import DivHtml3 from "./StatsDiv3/DivHtml3";
import { Link } from "react-router-dom";
import StatsDiv3 from "./StatsDiv3/StatsDiv3";
function CustomerDashboard() {
  return (
    <div className="DashBoardFeatureCon">
        <div className='greetContainer'>
      <div className="greet">
        <div id='greet1'>Welcome back </div>
        <div id='greet2'>last login 2 days ago</div>
        <div id='greet3'>Today is September 9 2024. You have 3 messages  </div>
      </div>
      <div className='greetImg'>
        <img src={img5} alt="" />
      </div>
      </div>
      <div className="stats1">
        <div className='Tax-Summary'>Tax Summary</div>
        <div className='htmlOfDivs'>
      <div className="htmlOfDiv1">
  
      <div className='usersandimg'>
      <div className="Users">Total Income</div>
      <div className="Usersimg">
       <img src={img1} alt="" />
</div>

      </div>
      
      <div className="UserCount">
        <h2>20 k</h2>
      </div>



  </div>
  <div className="htmlOfDiv2">
          <div className='Revenueandimg'>
          <div className="RevenueLabel">Total Deduction </div>
      <div className="Usersimg">
        <img src={img2}></img>
      </div>
      </div>
   
    
      <h2>13,4321 k</h2>
 

  </div>,
  <div className="htmlOfDiv3">
              <div className='Gstandimg'>
              <div className="GstLabel">Tax Payable </div>
      <div className="Usersimg">
        <img src={img3}></img>
      </div>
      </div>
   
    
      <h2>5,4321 k</h2>
  
  </div>,
  <div className="htmlOfDiv4">
                  <div className='Paymentandimg'>
                  <div className="PaymentLabel">Outstanding Payment</div>
      <div className="Usersimg">
        <img src={img4}></img>
      </div>
      </div>
    
   
      <h2>2321 k</h2>
      </div>
  </div>,
      </div>

      <div className="stats3">
        {DivHtml3.map((content3, index) => (
          <StatsDiv3 key={index} content2={content3} />
        ))}
      </div>
    </div>
  );
}
export default CustomerDashboard;
