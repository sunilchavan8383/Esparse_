import React from 'react';
import './Report.css';
import ReportInfoForm from './ReportForm/ReportInfo';
function Report(){
    return(
      <div className='ReportDiv'>
        <div className='OverviewAndCalender'>
        <div className='ReportOverview'>
            <div className='ReportOverviewText'>Overview</div>
            <div className='GSTFilling'>
                <div className='gst'>GST Filling</div>
                <div className='gstcomplete'>50 (Completed)</div>
                <div className='gstincomplete'>20 (Incomplete)</div>
            </div>
            <div className='TaxFilling'>
            <div className='tax'>Income Tax Filings</div>
                <div className='taxcomplete'>50 (Completed)</div>
                <div  className='taxincomplete'>20 (Incomplete)</div>
            </div>
        </div>
        <div className='Calender'></div>
        </div>
        <div className='ReportInfo'>
          <div className='ReportHeaders'>
          <p>Payment ID</p>
            <p>Name</p>
            <p>Total Filed</p>
            <p>Pending</p>
            <p>Due Date</p>
            <p>Status</p>
           
          </div>
          <div className='ReportManage'>
            <ReportInfoForm/>
          </div>
        </div>
      </div>
    );
}

export default Report;