import React from "react";
import TotalQuotationImg from '../images/TotalQuotation.svg';
import PendingQ from '../images/PendingQuotations.svg';
import AcceptQ from '../images/AcceptedQ.svg'
import './Quotation.css';
function Quotation(){
    return(
        <div className='QuotationDiv'>
        <div className='QuotationInfo'>
        <div className='TotalQuotation'>
            <div className='TotalQuotationImg'>
                <img src={TotalQuotationImg } alt="" />
            </div>
            <div className='TotalQuotationText'>
            Total Quotation
            </div>
            <div className='TotalQuotationLine'></div>
        </div>
        <div className='PendingQuotation'>
        <div className='PendingQuotationImg'>
                <img src={PendingQ} alt="" />
            </div>
            <div className='PendingQuotationText'>
            Pending Quotation
            </div>
            <div className='PendingQuotationLine'></div>
        </div>
        <div className='AcceptedQuotation'>
        <div className='AcceptedQuotationImg'>
                <img src={AcceptQ} alt="" />
            </div>
            <div className='AcceptedQuotationText'>
            Accepted Quotation
            </div>
            <div className='AcceptedQuotationLine'></div>
        </div>

      </div>
      <div className="Quotation">
        <div className='QuotationText'>
        <p>Quotation</p>
        </div>
        <div className='QuotationButtons'>
        <div className='QuotationFilter'>Filter</div>
        <div className='QuotationCToInvoice'>Convert To Invoice</div>
        <div className='Quotationcreate'>Create</div>
        </div>
      </div>
      <div className="QuotationManagement"></div>
    </div>
    );
}
export default Quotation;