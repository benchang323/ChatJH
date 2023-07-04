import React from "react";
import "./Sidebar.css";
interface Props {
  prev_chat: React.ReactNode[];
}
const SidebarChat = ({ prev_chat }: Props) => {
  const previewText = (text: string, textLength: number) => {
    if (!text) return "No messages";

    if (text.length <= textLength) {
      return text;
    } else {
      return text.substring(0, textLength) + "...";
    }
  };
  const renderPreviewText = (chat: string[], textLength: number) => {
    if (!chat) {
      return "...";
    } else {
      const lastMessage = chat[chat.length - 1];
      return previewText(lastMessage, textLength);
    }
  };

  return (
    <div className="sidebarChat">
      <div className="sidechat_timestamp">July 2nd</div>
      <div className="sidebarChat__info">
        <h2> Old Chat</h2>
        <p>{renderPreviewText(prev_chat as string[], 20)}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
