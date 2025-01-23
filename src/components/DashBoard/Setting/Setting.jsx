import React, { useState } from "react";
import "./Setting.css";
import { Outlet, Link } from "react-router-dom";

function Setting() {
  const [activeButton, setActiveButton] = useState("MyProfile"); // Track the active button

  const MyProfile =
    activeButton === "MyProfile"
      ? {
          backgroundColor: "#a386ff",
          color: "white",
          borderColor: "#a386ff",
        }
      : {
          backgroundColor: "white",
          color: "#a386ff",
          borderColor: "#a386ff",
        };

  const Preferences =
    activeButton === "Preferences"
      ? {
          backgroundColor: "#a386ff",
          color: "white",
          borderColor: "#a386ff",
        }
      : {
          backgroundColor: "white",
          color: "#a386ff",
          borderColor: "#a386ff",
        };

  const Security =
    activeButton === "Security"
      ? {
          backgroundColor: "#a386ff",
          color: "white",
          borderColor: "#a386ff",
        }
      : {
          backgroundColor: "white",
          color: "#a386ff",
          borderColor: "#a386ff",
        };

  const LogOut =
    activeButton === "LogOut"
      ? {
          backgroundColor: "#a386ff",
          color: "white",
          borderColor: "#a386ff",
        }
      : {
          backgroundColor: "white",
          color: "#a386ff",
          borderColor: "#a386ff",
        };

  return (
    <div className="SettingDiv">
      <div className="SettingText">
        <div className="Setting">Setting</div>
      </div>
      <div className="ppslButs">
        <Link
          to="profile"
          className="ppslButs1"
          style={MyProfile}
          onClick={() => setActiveButton("MyProfile")}
        >
          My Profile
        </Link>
        <Link
          to="preferences"
          className="ppslButs2"
          style={Preferences}
          onClick={() => setActiveButton("Preferences")}
        >
          Preferences
        </Link>
        <Link
          to="security"
          className="ppslButs3"
          style={Security}
          onClick={() => setActiveButton("Security")}
        >
          Security
        </Link>
        <Link
          to="logout"
          className="ppslButs4"
          style={LogOut}
          onClick={() => setActiveButton("LogOut")}
        >
          Log Out
        </Link>
      </div>
      <div className='SettingDiv2'>
      <Outlet />
      </div>

     
    </div>
  );
}

export default Setting;
