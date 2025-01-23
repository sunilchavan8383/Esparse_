import React from "react";
import './QuoteForm.css';
import QuoteInfoForm from "./QuoteInfoForm/QuoteInfo";
function QuoteForm(){
    return(
        <div className='QuoteInfo'>
            <div className='QuoteHeaders'>
                <p>Name </p>
                <p>Quotation No</p>
                <p>Issue Date</p>
                <p>Due Date</p>
                <p>Amount</p>
                <p>Status</p>
                <p>Action</p>
            </div>

            <div className='QuoteForms'>
                <QuoteInfoForm/>
            </div>

        </div>
    )
}
export default QuoteForm;