import { useState, useEffect } from "react";

interface ChatState {
  chatHistory: string[];
  addToChatHistory: (message: string) => void;
  resetChatHistory: () => void;
  resetMainChat: () => void;
  allChatData: string[][];
  switchChat: (index: number) => void;
}

export const useChatState = (): ChatState => {
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [allChatData, setAllChatData] = useState<string[][]>([]);

  const addToChatHistory = (message: string) => {
    setChatHistory((prevHistory) => [...prevHistory, message]);
  };

  const resetChatHistory = () => {
    setAllChatData((chatData) => [...chatData, chatHistory]);
    setChatHistory([]);
  };

  const resetMainChat = () => {
    setChatHistory([]);
  };

  const switchChat = (index: number) => {
    setChatHistory(allChatData[allChatData.length - 1 - index]);
  };

  useEffect(() => {
    const storedChatHistory = sessionStorage.getItem("chatHistory");
    if (storedChatHistory) {
      setChatHistory(JSON.parse(storedChatHistory));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  return {
    chatHistory,
    addToChatHistory,
    resetChatHistory,
    resetMainChat,
    allChatData,
    switchChat,
  };
};
