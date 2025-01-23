import React from "react";
import "./ClientForm2.css"
import ClientInfoForm2 from "./ClientInfo2/ClientInfoForm2";
function ClientForm2(){
    return(
        <div  className='BuissnessInfo2'>
             <div  className='BuissnessInfo21'>
            <p>User Id</p>
            <p>Name</p>
            <p>Email</p>
            <p>Designation</p>
            <p>Last Login</p>
            <p>Joined</p>
            </div>
            <div className='BuissnessInfo22'>
            <ClientInfoForm2/>

            </div>
        </div>
    )
}
export default ClientForm2;