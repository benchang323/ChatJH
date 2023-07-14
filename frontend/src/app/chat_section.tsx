import React from "react";
import QueryInput from "./querying";
import ChatMessageList from "./ChatMessageList";
import ResetChat from "./ResetChat";

interface ChatSectionProps {
  chatState: {
    chatHistory: string[];
    addToChatHistory: (message: string) => void;
    resetChatHistory: (messages: string[]) => void;
    resetMainChat: () => void;
    allChatData: string[][];
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
    chatState.resetMainChat();
  };

  return (
    <div className="container">
      <ChatMessageList messages={chatState.chatHistory} /> {/* chat messages */}
      <QueryInput onQuerySubmit={handleQuerySubmit} />{" "}
      {/* make request to respond to query */}
      <ResetChat onResetChat={handleResetChat} /> {/* reset chat button */}
    </div>
  );
};

export default ChatBot;
