"use client";
import React, { useState, useEffect } from "react";
import ChatBot from "./chat_section";
import "./globals.css";
import logo from "./jhlogo.png";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useChatState } from "./chatState";
const App: React.FC = () => {
  const chatState = useChatState();

  const [sidebarChats, setSidebarChats] = useState<string[]>([]);

  const prevMessage = chatState.chatHistory;

  const chatData = chatState.allChatData;

  const handleAddChat = () => {
    const newChatSegment = [...chatState.chatHistory];
    chatState.resetChatHistory(prevMessage);
    setSidebarChats((prevChats) => [
      prevMessage[prevMessage.length - 1],
      ...prevChats,
    ]);
    //TODO: check if the console acutally logs it right and that allChatData contains the full history
    // then what you are going to do is keep track of an index for every time a new chat is made, and whenever an old chat is clicked
    //we have a map of the index that points to the old chat history stored in the index of allChatData

    console.log("adding new history box");
    console.log(chatData);
  };

  const handleChatSwitch = (index: number) => {
    chatState.switchChat(index);
  };

  return (
    <div className="container-main">
      <img src={logo.src} id="top-logo" />
      <div className="chat-content">
        <ChatBot chatState={chatState} />
      </div>
      <div className="separator"></div>
      <div className="Sidebar-content">
        <Sidebar
          chatHistory={chatState.chatHistory}
          handleAddChat={handleAddChat}
          sideChats={sidebarChats}
          handleChatSwitch={handleChatSwitch}
        />
      </div>
    </div>
  );
};

export default App;
