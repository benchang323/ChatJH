"use client";
import React from "react";
import ChatBot from "./chat_section";
import "./globals.css";
import logo from "./jhlogo.png";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useChatState } from "./chatState";
const App: React.FC = () => {
  const chatState = useChatState();
  return (
    <div className="container-main">
      <img src={logo.src} id="top-logo" />
      <div className="chat-content">
        <ChatBot chatState={chatState} />
      </div>
      <div className="separator"></div>
      <div className="Sidebar-content">
        <Sidebar chatHistory={chatState.chatHistory} />
      </div>
    </div>
  );
};

export default App;
