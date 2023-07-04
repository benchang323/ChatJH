// chat_section.tsx
import React from "react";
import QueryInput from "./querying";
import ChatMessageList from "./ChatMessageList";
import ResetChat from "./ResetChat";

interface ChatSectionProps {
  chatState: {
    chatHistory: string[];
    addToChatHistory: (message: string) => void;
    resetChatHistory: () => void;
  };
}

const ChatBot: React.FC<ChatSectionProps> = ({ chatState }) => {
  const handleQuerySubmit = (query: string) => {
    // Perform actions or logic with the submitted query
    // For example, send the query to an API, update the chat messages, etc.
    console.log("Submitted query:", query);

    // Update the chat messages with the new query
    chatState.addToChatHistory(query);
  };

  const handleResetChat = () => {
    // Reset chat box
    chatState.resetChatHistory();
  };

  return (
    <div className="container">
      <ChatMessageList messages={chatState.chatHistory} /> {/* chat messages */}
      {/* Other chatbot components */}
      <QueryInput onQuerySubmit={handleQuerySubmit} />{" "}
      {/* make request to respond to query */}
      <ResetChat onResetChat={handleResetChat} />
      {/* Other chatbot components */}
    </div>
  );
};

export default ChatBot;
