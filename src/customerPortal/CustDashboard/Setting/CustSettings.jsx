import React, { useState } from "react";
import "./CustSettings.css";
import { Outlet, Link } from "react-router-dom";

function UserSettings() {
  const [selectedTab, setSelectedTab] = useState("Profile"); // Track the active tab

  const profileTab =
    selectedTab === "Profile"
      ? { backgroundColor: "#a386ff", color: "white", borderColor: "#a386ff" }
      : { backgroundColor: "white", color: "#a386ff", borderColor: "#a386ff" };

  const preferencesTab =
    selectedTab === "Preferences"
      ? { backgroundColor: "#a386ff", color: "white", borderColor: "#a386ff" }
      : { backgroundColor: "white", color: "#a386ff", borderColor: "#a386ff" };

  const securityTab =
    selectedTab === "Security"
      ? { backgroundColor: "#a386ff", color: "white", borderColor: "#a386ff" }
      : { backgroundColor: "white", color: "#a386ff", borderColor: "#a386ff" };

  const logoutTab =
    selectedTab === "Logout"
      ? { backgroundColor: "#a386ff", color: "white", borderColor: "#a386ff" }
      : { backgroundColor: "white", color: "#a386ff", borderColor: "#a386ff" };

  return (
    <div className="user-settings-container">
      <div className="user-settings-header">
        <div className="settings-title">Settings</div>
      </div>
      <div className="settings-tabs">
        <Link
          to="profile"
          className="tab profile-tab"
          style={profileTab}
          onClick={() => setSelectedTab("Profile")}
        >
          My Profile
        </Link>
        <Link
          to="preferences"
          className="tab preferences-tab"
          style={preferencesTab}
          onClick={() => setSelectedTab("Preferences")}
        >
          Preferences
        </Link>
        <Link
          to="customer-security"
          className="tab security-tab"
          style={securityTab}
          onClick={() => setSelectedTab("Security")}
        >
          Security
        </Link>
        <Link
          to="customer-logout"
          className="tab logout-tab"
          style={logoutTab}
          onClick={() => setSelectedTab("Logout")}
        >
          Log Out
        </Link>
      </div>
      <div className="settings-content">
        <Outlet />
      </div>
    </div>
  );
}

export default UserSettings;
