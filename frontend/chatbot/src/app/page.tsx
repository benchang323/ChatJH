import React from "react";
import ChatBot from "./chat_section";
import "./globals.css";
import logo from "./jhlogo.png";
const App = () => {
  return (
    <div className="container">
      <img src={logo.src} id="top-logo" />
      <ChatBot></ChatBot>
    </div>
  );
};
export default App;
