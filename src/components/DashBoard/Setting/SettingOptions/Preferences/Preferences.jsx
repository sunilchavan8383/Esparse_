import React, { useState } from "react";
import './Preferences.css';
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
function Preferences(){
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const [isOpen2, setIsOpen2] = useState(false);
    
    const toggleDropdown2 = () => {
      setIsOpen2(!isOpen2);
    };

    const [isOpen3, setIsOpen3] = useState(false);
    
    const toggleDropdown3 = () => {
      setIsOpen3(!isOpen3);
    };

    const [isOpen4, setIsOpen4] = useState(false);
    
    const toggleDropdown4 = () => {
      setIsOpen4(!isOpen4);
    };
    return(
        <div className='PreferencesDiv'>
            <div className='Preferences1'>
                <div className='Language'>
                    <div id='t1'>Language</div>
                    <div className='LangSelect'>
                    <div>Language Setting</div>
      <div className="filter-containerLang">
      <div className="filter-buttonLang" onClick={toggleDropdown}>
        English ▼
      </div>
      {isOpen && (
        <div className="filter-dropdown">
          <div className="filter-item">Hindi</div>
          <div className="filter-item">Marathi</div>
          <div className="filter-item">Tamil</div>

          
        </div>
      )}
    </div>
                    </div>
                </div>
                <div className='Activity'>
                    <div id='t2'>Activity Status </div>
                    <div className='ActiviySelect'>
                    <div className='Activity-Status'>
                        <div>Activity Status</div>
                        <div><ToggleSwitch/></div>
                    </div>
                    <div className='Activity-Status'>
                    <div>Recent Activity Visibility</div>
                        <div><ToggleSwitch/></div>
                    </div>
                    
                    </div>
                </div>
                <div className='Visibility'>
                <div id='t3'>Visibility Options </div>
                <div className='VisibilitySelect'>
                    <div className='Profile-Visibility'>
                <div>Profile Visibility</div>
                <div className="filter-containerLang">
      <div className="filter-buttonLang" onClick={toggleDropdown2}>
        Public ▼
      </div>
      {isOpen2 && (
        <div className="filter-dropdown">
          <div className="filter-item">Connection Only</div>
          <div className="filter-item">Private</div>
          

          
        </div>
      )}
    </div>
    </div>
                
                <div className='Activity-Status'>
                <div>Search Engine Visibility</div>
                        <div><ToggleSwitch/></div>
                    </div>
                
                </div>
                </div>
            </div>
            <div className='Preferences2'>
            <div className='Notification'>
                    <div id='t4'>Notifications Settings</div>
                    <div className='NotificationSelect'>
                    <div className='Email-notifications'>
                    <div>Email notifications</div>
                    <ToggleSwitch/>
                    </div>
                    <div className='Push-notifications'>
                    <div>Push notifications</div> 
                    <ToggleSwitch/>
                    </div>
                    <div className='In-App-notifications'>
                    <div>In-App notifications</div> 
                    <ToggleSwitch/>
                    </div>
                    
                    
                    </div>
                </div>
                <div className='WhoCanSee'>
                    <div id='t5'>Who Can See Your Contact Info  </div>
                    <div className='WhoCanSeeSelect'>
                    <div>Contact Info Visibility</div>
                    <div className="filter-containerLang">
      <div className="filter-buttonLang" onClick={toggleDropdown3}>
        Everyone ▼
      </div>
      {isOpen3 && (
        <div className="filter-dropdown">
          <div className="filter-item">Connection Only</div>
          <div className="filter-item">No One</div>

          
        </div>
      )}
    </div>
                    </div>
                </div>
                <div className='FreeStorage'>
                <div id='t6'>Free up Storage </div>
                <div className='StorageSelect'>
                <div>Clear Cache</div>
                <div className="filter-containerLang">
      <div className="filter-buttonLang" onClick={toggleDropdown4}>
        Select ▼
      </div>
      {isOpen4 && (
        <div className="filter-dropdown">
          <div className="filter-item">Image</div>
          <div className="filter-item">Data</div>
          <div className="filter-item">All Cache</div>

          
        </div>
      )}
    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Preferences;