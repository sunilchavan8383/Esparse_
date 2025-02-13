import React from "react";
import './MyProfile.css';

function MyProfile() {
    return (
        <div className='MyProfile'>
            <div className="profile-info">
                <div className="profile-picture">
                    <img src="profile-picture-url" alt="Profile" />
                    <button>Edit Picture</button>
                </div>
                <div className="profile-details">
                    <h2>Smith Do</h2>
                    <p>Email: jo.de@example.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
            </div>

            {/* Form Section */}
            <div className="form-container">
                <div className="form-section">
                    <div className="form-group">
                        <input type="text" placeholder="Enter your full name" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Enter your Phone Number" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Enter your Gender" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Enter DOB" />
                    </div>
                </div>
                <div className="form-section">
                    <div className="form-group">
                        <input type="text" placeholder="Enter your City" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Bio" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Experience" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Fees" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Certificate" />
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="save-button">
                <button>Save Changes</button>
            </div>
        </div>
    );
}

export default MyProfile;
