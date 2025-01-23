import React, { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`toggle-switch ${isOn ? "on" : "off"}`}
      onClick={handleToggle}
    >
      <div className="toggle-circle"></div>
    </div>
  );
}

export default ToggleSwitch;
