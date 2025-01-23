import React from "react";
import "./LogOut.css";
import { Link, Outlet } from "react-router-dom";
function LogoutModal({ username = "@Adminxx", onCancel, onLogout }) {
  return (
    <div className="logout-modal">
      <div className="modal-content">
        <h3>Log out of {username}?</h3>
        <p>You will still be able to access the Dashboard</p>
        <div className="button-group">
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <Link to='/admin-dashboard/dashboard' className="btn-logout"  onClick={onLogout} >Log Out</Link>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
