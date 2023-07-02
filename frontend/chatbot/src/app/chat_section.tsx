"use client";
import React, { useState, useEffect, useRef } from "react";
import QueryInput from "./querying";
import ChatMessageList from "./ChatMessageList";
import ResetChat from "./ResetChat";

const ChatBot = () => {
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleQuerySubmit = (query: string) => {
    // Perform actions or logic with the submitted query
    // For example, send the query to an API, update the chat messages, etc.
    console.log("Submitted query:", query);

    // Update the chat messages with the new query
    setChatMessages((prevMessages) => [...prevMessages, query]);
  };

  const handleResetChat = () => {
    //reset chat box
    setChatMessages([]);
  };

  return (
    <div>
      <ChatMessageList messages={chatMessages} /> {/* chat messages */}
      {/* Other chatbot components */}
      <QueryInput onQuerySubmit={handleQuerySubmit} />{" "}
      {/* make request to respond to query */}
      <ResetChat onResetChat={handleResetChat} />
      {/* Other chatbot components */}
    </div>
  );
};

export default ChatBot;
