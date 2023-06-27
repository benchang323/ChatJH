"use client";
import React from "react";

import QueryInput from "./querying";

const ChatBot = () => {
  const handleQuerySubmit = (query: string) => {
    // Perform actions or logic with the submitted query
    // For example, send the query to an API, update the chat messages, etc.
    console.log("Submitted query:", query);
  };

  return (
    <div>
      <h1> show previous messages here</h1>
      {/* Other chatbot components */}
      <QueryInput onQuerySubmit={handleQuerySubmit} />
      {/* Other chatbot components */}
    </div>
  );
};

export default ChatBot;
