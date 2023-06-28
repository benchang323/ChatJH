"use client";
import React, { useState } from "react";
import ChatMessageList from "./ChatMessageList";
import QueryInput from "./querying";

const ChatBot = () => {
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const handleQuerySubmit = (query: string) => {
    // Perform actions or logic with the submitted query
    // For example, send the query to an API, update the chat messages, etc.
    console.log("Submitted query:", query);

    setChatMessages((prevMessages) => prevMessages.concat(query));
  };

  return (
    <div>
      <ChatMessageList messages={chatMessages} />
      {/* Other chatbot components */}
      <QueryInput onQuerySubmit={handleQuerySubmit} />
      {/* Other chatbot components */}
    </div>
  );
};

export default ChatBot;
