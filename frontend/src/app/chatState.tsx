// chatState.ts
import { useState, useEffect } from "react";

interface ChatState {
  chatHistory: string[];
  addToChatHistory: (message: string) => void;
  resetChatHistory: (messages: string[]) => void;
  resetMainChat: () => void;
  allChatData: string[][];
  switchChat: (index: number) => void;
}

export const useChatState = (): ChatState => {
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [allChatData, setAllChatData] = useState<string[][]>([]);

  const addToChatHistory = (message: string) => {
    //regular message showing
    setChatHistory((prevHistory) => [...prevHistory, message]);
  };

  const resetChatHistory = (messages: string[]) => {
    setAllChatData((chatData) => {
      //keeps the data synchronous, previously there was a one off error with allChatData updating late
      const updatedChatData = [...chatData, messages];
      console.log(updatedChatData);
      return updatedChatData;
    });
    setChatHistory([]);
  };

  const resetMainChat = () => {
    //separate reset to just reset the main chat box, the button 'Reset Chat'
    setChatHistory([]);
  };

  const switchChat = (index: number) => {
    setChatHistory(allChatData[allChatData.length - 1 - index]);
  };

  return {
    chatHistory,
    addToChatHistory,
    resetChatHistory,
    resetMainChat,
    allChatData,
    switchChat,
  };
};
