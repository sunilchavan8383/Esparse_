import React from 'react';
import './Payment.css';
import PaymentImg from  './Images/PaymentImg.svg';
import PaymentImg2 from './Images/PaymentImg2.svg';
import PaymentImg3 from './Images/PaymentImg3.svg'
function Payment(){
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
        <div className="InvoiceManagement"></div>
      </div>
    );
}
export default Payment;