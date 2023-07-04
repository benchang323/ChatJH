// chatState.ts
import { useState } from "react";

interface ChatState {
  chatHistory: string[];
  addToChatHistory: (message: string) => void;
  resetChatHistory: () => void;
}

export const useChatState = (): ChatState => {
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const addToChatHistory = (message: string) => {
    setChatHistory((prevHistory) => [...prevHistory, message]);
  };

  const resetChatHistory = () => {
    setChatHistory([]);
  };

  return { chatHistory, addToChatHistory, resetChatHistory };
};
