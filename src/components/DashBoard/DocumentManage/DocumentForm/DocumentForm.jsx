import React from "react";
import DocInfoForm from "./DocForms/DocForms";
import './DocumentForm.css';

function DocumentForm(){
    return(
        <div className='DocumentInfo'>
            <div className='DocumentHeaders'>
                <p>File Name </p>
                <p>Document Type</p>
                <p>Size</p>
                <p>Uploaded Date</p>
                <p>Owner</p>
                <p>Action</p>
            </div>

            <div className='DocumentForms'>
                <DocInfoForm/>
            </div>

        </div>
    )
}
export default DocumentForm;