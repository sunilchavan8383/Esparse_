import React, { useState } from "react";
import './CustPreferences.css';
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

function UserPreferences() {
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    
    const toggleLanguageDropdown = () => {
      setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    const [isProfileVisibilityDropdownOpen, setIsProfileVisibilityDropdownOpen] = useState(false);
    
    const toggleProfileVisibilityDropdown = () => {
      setIsProfileVisibilityDropdownOpen(!isProfileVisibilityDropdownOpen);
    };

    const [isContactVisibilityDropdownOpen, setIsContactVisibilityDropdownOpen] = useState(false);
    
    const toggleContactVisibilityDropdown = () => {
      setIsContactVisibilityDropdownOpen(!isContactVisibilityDropdownOpen);
    };

    const [isCacheDropdownOpen, setIsCacheDropdownOpen] = useState(false);
    
    const toggleCacheDropdown = () => {
      setIsCacheDropdownOpen(!isCacheDropdownOpen);
    };

    return (
        <div className='UserSettingsDiv'>
            <div className='UserSettingsSection1'>
            <div className='LanguageSetting'>
                
                    <div className='LanguageSelector'>
                        <div>Switch Account</div>
                        <div className="dropdown-containerLang">
                        <ToggleSwitch />
                        </div>
                    </div>
                </div>
                <div className='LanguageSetting'>
                    <div id='languageTitle'>Language</div>
                    <div className='LanguageSelector'>
                        <div>Language Settings</div>
                        <div className="dropdown-containerLang">
                            <div className="dropdown-buttonLang" onClick={toggleLanguageDropdown}>
                                English ▼
                            </div>
                            {isLanguageDropdownOpen && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-item">Hindi</div>
                                    <div className="dropdown-item">Marathi</div>
                                    <div className="dropdown-item">Tamil</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className='ActivityStatus'>
                    <div id='activityTitle'>Activity Status</div>
                    <div className='ActivityStatusSelector'>
                        <div className='ActivityOption'>
                            <div>Activity Status</div>
                            <div><ToggleSwitch /></div>
                        </div>
                        <div className='ActivityOption'>
                            <div>Recent Activity Visibility</div>
                            <div><ToggleSwitch /></div>
                        </div>
                    </div>
                </div>
                
                <div className='ProfileVisibility'>
                    <div id='visibilityTitle'>Visibility Options</div>
                    <div className='VisibilitySelector'>
                        <div className='ProfileVisibilityOption'>
                            <div>Profile Visibility</div>
                            <div className="dropdown-containerLang">
                                <div className="dropdown-buttonLang" onClick={toggleProfileVisibilityDropdown}>
                                    Public ▼
                                </div>
                                {isProfileVisibilityDropdownOpen && (
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item">Connection Only</div>
                                        <div className="dropdown-item">Private</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className='ActivityOption'>
                            <div>Search Engine Visibility</div>
                            <div><ToggleSwitch /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='UserSettingsSection2'>
                <div className='NotificationSettings'>
                    <div id='notificationTitle'>Notification Settings</div>
                    <div className='NotificationSelector'>
                        <div className='NotificationOption'>
                            <div>Email Notifications</div>
                            <ToggleSwitch />
                        </div>
                        <div className='NotificationOption'>
                            <div>Push Notifications</div>
                            <ToggleSwitch />
                        </div>
                        <div className='NotificationOption'>
                            <div>In-App Notifications</div>
                            <ToggleSwitch />
                        </div>
                    </div>
                </div>

                <div className='ContactVisibility'>
                    <div id='contactVisibilityTitle'>Who Can See Your Contact Info</div>
                    <div className='ContactVisibilitySelector'>
                        <div>Contact Info Visibility</div>
                        <div className="dropdown-containerLang">
                            <div className="dropdown-buttonLang" onClick={toggleContactVisibilityDropdown}>
                                Everyone ▼
                            </div>
                            {isContactVisibilityDropdownOpen && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-item">Connection Only</div>
                                    <div className="dropdown-item">No One</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='StorageSettings'>
                    <div id='storageTitle'>Free Up Storage</div>
                    <div className='StorageSelector'>
                        <div>Clear Cache</div>
                        <div className="dropdown-containerLang">
                            <div className="dropdown-buttonLang" onClick={toggleCacheDropdown}>
                                Select ▼
                            </div>
                            {isCacheDropdownOpen && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-item">Image</div>
                                    <div className="dropdown-item">Data</div>
                                    <div className="dropdown-item">All Cache</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPreferences;
