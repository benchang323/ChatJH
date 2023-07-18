// chat_section.tsx
import QueryInput from "./querying";
import ChatMessageList from "./ChatMessageList";
import ResetChat from "./ResetChat";
import React, { useState } from 'react';

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
  // Add a piece of state to hold any errors
  const [error, setError] = useState<string | null>(null);

  const handleQuerySubmit = async (query: string) => {
    try {
      // Send a POST request to your backend
      const response = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }), // The body of the request is the query, stringified
      });

      if (!response.ok) {
        throw new Error('Response not ok');
      }

      // Parse the JSON response
      const data = await response.json();

      // Update the chat messages with the new query and response
      chatState.addToChatHistory(query);
      chatState.addToChatHistory(data.response);
    } catch (err) {
      console.error('An error occurred:', err);
      setError('An error occurred, please try again.');
    }
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
