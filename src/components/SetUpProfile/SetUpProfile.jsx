import React from "react";
import "./SetUpProfile.css";
import img4 from "./SetUpImg/SetUp.png";
function SetUpProfile() {
  return (
    <div className="ProfileBack">
      <div className="ProfileDiv">
        <div className="Hero">Set up Profile</div>
        <div className="Photo">
          <input id="Roundphoto" type="image" />
        </div>
        <div className="ProfileInfo">
          <div className="Lable">
            <ul>
              <li>Name</li>
              <li>Id</li>
              <li>Bio</li>
              <li>Fees</li>
              <li>Experience</li>
              <li>Language</li>
            </ul>
          </div>
          <div className="inputs">
            <ul>
              <li>
                <input type="text" />
              </li>
              <li>
                <input type="text" />
              </li>
              <li>
                <input type="text" />
              </li>
              <li>
                <input type="text" />
              </li>
              <li>
                <input type="text" />
              </li>
              <li>
                <input type="text" />
              </li>
            </ul>
          </div>
        </div>
        <div className="UploadBut">
          <img height={20} src={img4} alt="" />
          <button>
            <input id="UploadButId" type="file" />
          </button>
        </div>
        <div className="SaveBut">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default SetUpProfile;
