import React, { useState } from "react";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@material-ui/core";

interface Props {
  chatHistory: string[];
  handleAddChat: () => void;
  sideChats: string[];
  //  chatData: string [][];
  handleChatSwitch: (index: number) => void;
}

const Sidebar = ({
  chatHistory,
  handleAddChat,
  sideChats,
  handleChatSwitch,
}: Props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar_headerLeft">
          <h2 id="sidebar-label">Old Chats</h2>
        </div>
        <div className="sidebar__headerRight">
          {/*put search icons here*/}
          <IconButton id="plus-image-button" onClick={handleAddChat}>
            <FontAwesomeIcon icon={faPlus} />
          </IconButton>
          <IconButton id="close-sidebar-button">
            <FontAwesomeIcon icon={faRectangleXmark} />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat
          chat={chatHistory[chatHistory.length - 1]}
          onClick={() => {}}
          isCurrentChat={true}
        />
        {sideChats.map((chat, index) => (
          <SidebarChat
            key={index}
            chat={chat}
            onClick={() => handleChatSwitch(index)}
            isCurrentChat={false}
          />
        ))}

        {/* Render other sidebar chats */}
      </div>
    </div>
  );
};

export default Sidebar;
