import React from 'react';
import HelpRequests from './SupportProfiles/SupportProfiles';
import ChatUI from './SupportChat/SupportChat';
import './Support.css';
function Support(){
    return(
    <div className='SupportDiv'>
        <div className='SupportText'>Messages</div>
        <div className='chatsandcontainer'>
            <div className='chats'>
                <HelpRequests/>
            </div>
            <div className='chatscontainer'>
                <ChatUI/>
            </div>
        </div>
    </div>
    );
}
export default Support;