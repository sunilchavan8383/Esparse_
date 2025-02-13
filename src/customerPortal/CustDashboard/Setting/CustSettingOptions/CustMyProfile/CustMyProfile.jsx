import React from "react";
import './CustMyProfile.css';

function ProfileSettings() {
    return (
        <div className='profile-settings'>
            <div className="user-info">
                <div className="user-picture">
                    <img src="profile-picture-url" alt="Profile" />
                    <button>Edit Picture</button>
                </div>
                <div className="user-details">
                    <h2>Smith Do</h2>
                    <p>Email: jo.de@example.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
            </div>

            {/* Form Section */}
            <div className="user-form">
                <div className="form-section">
                    <div className="input-group">
                        <input type="text" placeholder="Enter your full name" />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="input-group">
                        <input type="number" placeholder="Enter your Phone Number" />
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Enter your Gender" />
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Enter DOB" />
                    </div>
                </div>
                <div className="form-section">
                    <div className="input-group">
                        <input type="text" placeholder="Enter your City" />
                    </div>
  
                </div>
            </div>

            {/* Save Button */}
            <div className="save-changes">
                <button>Save</button>
            </div>
        </div>
    );
}

export default ProfileSettings;
