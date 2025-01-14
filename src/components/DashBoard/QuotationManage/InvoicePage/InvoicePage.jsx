import React from "react";
import "./InvoicePage.css";
import TotalQuotationImg from '../images/TotalQuotation.svg'
import PendingQ from '../images/PendingQuotations.svg';
import AcceptQ from '../images/AcceptedQ.svg'
import { Link } from "react-router-dom";
function InvoiceManage() {
  return ( 
    <div className="InvoiceManageDiv">
      <div className='InvoiceInfo'>
        <div className='TotalInvoice'>
            <div className='TotalInvoiceImg'>
                <img src={TotalQuotationImg } alt="" />
            </div>
            <div className='TotalInvoiceText'>
            Total Invoice
            </div>
            <div className='TotalInvoiceLine'></div>
        </div>
        <div className='PendingInvoice'>
        <div className='PendingInvoiceImg'>
                <img src={PendingQ} alt="" />
            </div>
            <div className='PendingInvoiceText'>
            Pending Invoice
            </div>
            <div className='PendingInvoiceLine'></div>
        </div>
        <div className='AcceptedInvoice'>
        <div className='AcceptedInvoiceImg'>
                <img src={AcceptQ} alt="" />
            </div>
            <div className='AcceptedInvoiceText'>
            Accepted Invoice
            </div>
            <div className='AcceptedInvoiceLine'></div>
        </div>

      </div>
      <div className="Invoice">
        <div className='InvoiceText'>
        <p>Invoice</p>
        </div>
        <div className='InvoiceButtons'>
        <div className='InvoiceFilter'>Filter</div>
        <div className='InvoiceCToQ'>Scan Invoice</div>
        <div className='InvoiceCToQ'>Upload Invoice</div>
        <div className='Invoicecreate'>Create</div>
        </div>
      </div>
      <div className="InvoiceManagement"></div>
    </div>
  );
}

export default InvoiceManage;
