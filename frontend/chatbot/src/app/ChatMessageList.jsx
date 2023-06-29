import "./globals.css"
import React from "react";

const ChatMessageList = ({ messages }) => {
  return (
        <div className="chat-container">
            
        {messages.map((message, index) => (
            <div key={index} className="message-bubble">{message}</div>
        ))}
        </div>
  );
};

export default ChatMessageList;
