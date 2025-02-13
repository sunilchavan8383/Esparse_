import React from "react";
import "./CustLogOut.css";
import { Link } from "react-router-dom";

function CustomLogoutPopup({ username = "@Adminxx", onClose, onConfirm }) {
  return (
    <div className="custom-logout-popup">
      <div className="popup-content">
        <h3>Log out of {username}?</h3>
        <p>You will still be able to access the Dashboard</p>
        <div className="popup-buttons">
          <button className="popup-btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <Link to='/admin-dashboard/dashboard' className="popup-btn-logout" onClick={onConfirm}>
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomLogoutPopup;
