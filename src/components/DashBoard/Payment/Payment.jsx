import React, { useState } from "react";
import './Payment.css';
import PaymentImg from  './Images/PaymentImg.svg';
import PaymentImg2 from './Images/PaymentImg2.svg';
import PaymentImg3 from './Images/PaymentImg3.svg'
import PayInfoForm from "./PayForm/PayInfo/PayForm";
function Payment(){
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return(
        <div className="PaymentManageDiv">
            <div className='PaymentOverview'>
            <div className='Overview'>Payment Overview</div>
            <div className='History'>View History</div>
            </div>
        <div className='PaymentInfo'>
          <div className='TotalPayment'>
              <div className='PaymentInvoiceImg'>
                  <img src={ PaymentImg  } alt="" />
              </div>
              <div className='TotalPaymentText'>
              Total Invoice
              </div>
          </div>
          <div className='PendingPayment'>
          <div className='PendingPaymentImg'>
                  <img src={ PaymentImg2 } alt="" />
              </div>
              <div className='PendingPaymentText'>
              Pending Invoice
              </div>
            
          </div>
          <div className='AcceptedPayment'>
          <div className='AcceptedPaymentImg'>
                  <img src={ PaymentImg3 } alt="" />
              </div>
              <div className='AcceptedPaymentText'>
              Accepted Invoice
              </div>
       
          </div>



          
  
        </div>
        <div className='recentPay'>
            <div className='recentPayText'>Recent Payments</div>
            <div className='recentPayButs'>
            <div className="filter-container">
      <div className="filter-button" onClick={toggleDropdown}>
        <span className="filter-icon">⚙️</span> Filters ▼
      </div>
      {isOpen && (
        <div className="filter-dropdown">
          <div className="filter-item">Status</div>
          <div className="filter-item">Date</div>
          <div className="filter-item">Payment Method</div>

          
        </div>
      )}
    </div>
    <div className='Quotationcreate1'>Generate Reciept</div>
            </div>
          </div>
          <div className='PayHeaders'>
            <p>Payment ID</p>
            <p>GST Number</p>
            <p>Payment Date</p>
            <p>Amount</p>
            <p>Payment Method</p>
            <p>Transaction ID</p>
            <p>Status</p>
            <p>Action</p>
          </div>
        <div className="InvoiceManagement">

            <PayInfoForm/>
        </div>
      </div>
    );
}
export default Payment;