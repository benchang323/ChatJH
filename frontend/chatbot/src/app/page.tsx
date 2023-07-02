import React from "react";
import ChatBot from "./chat_section";
import "./globals.css";
import logo from "./jhlogo.png";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div className="container-main">
      <img src={logo.src} id="top-logo" />
      <div className="chat-content">
        <ChatBot />
      </div>
      <div className="Sidebar-content">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};
export default App;
