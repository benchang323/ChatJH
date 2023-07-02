import React from "react";
import "./Sidebar.css";
const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <div className="sidebarChat__info">
        <h2> Old Chat</h2>
        <p>Chat-JH: Last message</p>
      </div>
      <div className="sidechat_timestamp">July 2nd</div>
    </div>
  );
};

export default SidebarChat;
