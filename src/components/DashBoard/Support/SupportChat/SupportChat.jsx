import React from "react";
import "./SupportChat.css"; // Create this CSS file for styling.

const ChatUI = () => {
  const messages = [
    {
      sender: "Shubham Sharma",
      time: "12:15 am",
      messages: [
        "Hey do you have a moment?",
        "Lorem ipsum dolor sit amet consectetur. Feugiat elit sit ut egestas cras morbi consequat sollicitudin. Dictum eget mattis potenti neque quis volutpat duis. Odio mi velit pretium sem in. Iaculis vitae sed justo leo felis.",
      ],
      align: "left",
    },
    {
      sender: "You",
      time: "12:15 am",
      messages: [
        "Hey",
        "Lorem ipsum dolor sit amet consectetur. Feugiat elit sit ut egestas cras morbi consequat sollicitudin.",
      ],
      align: "right",
    },
  ];

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="user-info">
          <img
            src="https://via.placeholder.com/50"
            className="profile-pic"
          />
          <div>
            <h4>Shubham Sharma</h4>
            <p className="status">Online</p>
          </div>
        </div>
        <div className="header-actions">
          <i className="fas fa-phone"></i>
          <i className="fas fa-video"></i>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            className={`message-wrapper ${
              msg.align === "right" ? "align-right" : ""
            }`}
            key={index}
          >
            <div className="message">
              {msg.messages.map((text, i) => (
                <div
                  className={`message-bubble ${
                    msg.align === "right" ? "bubble-right" : "bubble-left"
                  }`}
                  key={i}
                >
                  {text}
                </div>
              ))}
            </div>
            <p className="message-time">{msg.time}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type here..." />
        <div className="input-actions">
          <i className="fas fa-paperclip"></i>
          <i className="fas fa-microphone"></i>
          <i className="fas fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
