import React, { useState, useEffect } from "react";
import "./SetUpProfile.css";
import img4 from "./SetUpImg/SetUp.png";

function SetUpProfile() {
  const [isVisible, setIsVisible] = useState(false); // Controls initial animation
  const [isSaved, setIsSaved] = useState(false); // Controls save action

  useEffect(() => {
    // Check if the animation has already been shown
    const hasShownAnimation = localStorage.getItem("hasShownAnimation");
    if (!hasShownAnimation) {
      setIsVisible(true); // Show animation if not already shown
      localStorage.setItem("hasShownAnimation", "true"); // Mark as shown
    } else {
      setIsVisible(true); // Ensure it's centered without animation
    }
  }, []);

  const handleSave = () => {
    setIsSaved(true);
  };

  return (
    <div
      className={`ProfileBack ${isVisible ? "toCenter" : ""} ${
        isSaved ? "slideLeft" : ""
      }`}
    >
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
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default SetUpProfile;
