import React from "react";
import img1 from "./Verifyimg/Verifyimg1.svg";
import img2 from "./Verifyimg/Verifyimg2.svg";
import OtpVerification from "./OtpPage/OtpDiv";
import "./Verify.css";
function Verification() {
  return (
    <div className="verifyDiv">
      <div className="img1">
        <img src={img1} alt="" />
      </div>
      <div className="verification">
        <OtpVerification />
      </div>
      <div className="img2">
        <img src={img2} alt="" />
      </div>
    </div>
  );
}
export default Verification;
