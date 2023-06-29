import React from "react";
import ChatBot from "./chat_section";
import "./globals.css";
const App = () => {
  return (
    <div className="container">
      <img src="images/CHAT-JH.png" alt="logo CHAT-JH" className="logo"></img>
      <ChatBot></ChatBot>
    </div>
  );
};
export default App;
