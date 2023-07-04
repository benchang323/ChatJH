"use client";
import React from "react";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@material-ui/core";
interface Props {
  chatHistory: React.ReactNode[];
}
const Sidebar = ({ chatHistory }: Props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar_headerLeft">
          <h2 id="sidebar-label">Old Chats</h2>
        </div>
        <div className="sidebar__headerRight">
          {/*put search icons here*/}
          <IconButton id="plus-image-button">
            <FontAwesomeIcon icon={faPlus} />
          </IconButton>
          <IconButton id="close-sidebar-button">
            <FontAwesomeIcon icon={faRectangleXmark} />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat prev_chat={chatHistory}></SidebarChat>
      </div>
    </div>
  );
};

export default Sidebar;
