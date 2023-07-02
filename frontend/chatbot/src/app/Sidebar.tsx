import React from "react";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header"></div>
      <div className="sidebar_headerLeft">
        <h2>Old Chats</h2>
      </div>
      <div className="sidebar__headerRight">{/*put search icons here*/}</div>
      <div className="sidebar_chats">
        <SidebarChat></SidebarChat>
      </div>
    </div>
  );
};

export default Sidebar;
