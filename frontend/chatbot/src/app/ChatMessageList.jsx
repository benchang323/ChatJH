import "./globals.css"
import React, {useRef, useEffect} from "react";
const ChatMessageList = ({ messages }) => {

  const messageEndRef = useRef(null);
//scroll to the bottom after a new message enters
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
//only re render if message added
  useEffect(() => {
    scrollToBottom()
  }, [messages]);


{/* map each message to its index and print it out */}
  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => ( 
            <div key={index} className="message-bubble">{message}</div>
        ))}
      <div ref = {messageEndRef}/>
      </div>
    </div>
  );
};

export default ChatMessageList;
