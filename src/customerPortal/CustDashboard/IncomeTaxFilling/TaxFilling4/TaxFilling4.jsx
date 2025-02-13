

import React from "react";
import "./TaxFilling4.css"; // Import the CSS file
import img1 from './Images/img1.svg';
import img2 from './Images/img2.svg';
import img3 from './Images/img3.svg';
import TaxComparison from "./BudgetTable/BudgetTable";
const  TaxFilling4 = () => {
  return (
    <div className="TaxFilling4-container">
     <div className='Suggestions'>Suggestions : You should opt for Old Regime as it allow you to avail exemption and deduction from your Income sources  </div>
     <div className='BudgetTable'>
     <TaxComparison/>
     </div>
     <div className='ShareOn-container'>
     <div>Share On:</div>
     <div className='ShareOn'>
        <div>
            <img src={img1} alt="" />
        </div>
        <div>
            <img src={img2} alt="" />
        </div>
        <div>
            <img src={img3} alt="" />
        </div>
     </div>
     </div>
    </div>
  );
};


export default  TaxFilling4;
