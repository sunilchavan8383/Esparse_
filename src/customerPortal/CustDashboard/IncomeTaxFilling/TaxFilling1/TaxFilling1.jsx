
import React from "react";
import "./TaxFilling1.css";

import { Link } from "react-router-dom";


function TaxFilling1() {
  return (
    <div className="TaxFilling1-container">
<div className='selectYear'>
<div className='selectYearText1'>Select Financial Year you want to Calculate</div>
<div className='latestBudget'>
<div><input type="checkbox"/></div>
<div className='Latest-Budget'>Latest Budget</div>
<div className='latestBudgetText'>(Return to be filed between 1 April 2025 - 31 March 2026)</div>
</div>
<div className='latestBudget2'>
<div><input type="checkbox"/></div>
<div className='latestBudget2Text'>(Return to be filed between 1 April 2024 - 31 March 2025)</div>
</div>
</div>

<div className='SelectAge'>
<div className='selectYearText1'>Select Age</div>
<div className='SelectAge1'>
<input type="checkbox"/>
<div>18 - 25 Yrs</div>
</div>
<div className='SelectAge2'>
<input type="checkbox"/>
<div>18 - 25 Yrs</div>
</div>
<div className='SelectAge3'>
<input type="checkbox"/>
<div>18 - 25 Yrs</div>
</div>
<div className='SelectAge4'>
<input type="checkbox"/>
<div>18 - 25 Yrs</div>
</div>
<div className='SelectAge5'>
<input type="checkbox"/>
<div>18 - 25 Yrs</div>
</div>
</div>
  
    </div>
  );
}

export default TaxFilling1;
