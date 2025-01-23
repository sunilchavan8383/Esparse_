import React from "react";
import './InvoiceForm.css';
import InvoiceInfoForm from "./InvoiceInfoForm/InvoiceInfoForm";
function InvoiceForm(){
    return(
        <div className='InvoiceInfo1'>
            <div className='InvoiceHeaders'>
                <p>Name </p>
                <p>Invoice Id</p>
                <p>Date</p>
                <p>Type</p>
                <p>Amount</p>
                <p>Status</p>
                <p>Action</p>
            </div>

            <div className='InvoiceForms'>
                <InvoiceInfoForm />
            </div>

        </div>
    )
}
export default InvoiceForm;