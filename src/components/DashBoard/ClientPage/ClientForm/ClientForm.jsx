import React from "react";
import ClientInfoForm from "./ClientInfo/ClientInfoForm";
import "./ClientForm.css"
function ClientForm(){
    return(
        <div  className='BuissnessInfo'>
             <div  className='BuissnessInfo1'>
            <p>Business Id</p>
            <p>Business Name</p>
            <p>Email</p>
            <p>Business Type</p>
            <p>Last Login</p>
            <p>Joined</p>
            </div>
            <div className='BuissnessInfo2'>
            <ClientInfoForm/>

            </div>
        </div>
    )
}
export default ClientForm;