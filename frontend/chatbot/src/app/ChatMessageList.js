
import React from "react";

const ChatMessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};

export default ChatMessageList;
