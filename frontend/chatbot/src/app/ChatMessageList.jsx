import "./globals.css"
import React, {useRef, useEffect} from "react";
const ChatMessageList = ({ messages }) => {

  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
        <div className="chat-container">
            
        {messages.map((message, index) => (
            <div key={index} className="message-bubble">{message}</div>
        ))}
        <div ref = {messageEndRef}/>
        </div>
  );
};

export default ChatMessageList;
