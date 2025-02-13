import React from "react";
import "./IncomeTaxFilling.css";
import img1 from './Images/img1.svg';
import { Link, Outlet } from "react-router-dom";
import img2 from './Images/img2.svg';

function IncomeTaxFilling() {
  return (
    <div className="dashboard-container">
      <div className="greeting-section">
        <div className="greeting-text">
          <div className="greeting-primary">Welcome back</div>
          <div className="greeting-secondary">Last login 2 days ago</div>
          <div className="greeting-date">Today is September 9, 2024. You have 3 messages</div>
        </div>
        <div className="greeting-image">
          <img src={img1} alt="Greeting" />
        </div>
      </div>
      <div className='IncomeTaxCalculator'>
        <div className='IncomeTaxCalculatorText1'>Income Tax Calculator </div>
        <div className='IncomeTaxCalculatorText2'>Financial Year 2024-2025</div>

        <div className='steps'>
          <div className='stepsText'>Complete the steps below to easily file your Income Tax.</div>
          <img src={img2} alt="" />
          <div className='stepsline'>
           
            <Link to='basic-details'>1</Link>
            <Link to='income-details'>2</Link>
            <Link to='deductions'>3</Link>
            <Link to='summary'>4</Link>
          </div>
        </div >
        <div className='tax-filling'>
          <Outlet/>
        </div>

      </div>
  
    </div>
  );
}

export default IncomeTaxFilling;
