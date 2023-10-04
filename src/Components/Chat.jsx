import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faUserPlus,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import Messages from "./Messages";
import Input from "./Input";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Zuri Mumba</span>
        <div className="chatIcons">
          <FontAwesomeIcon className="img" icon={faVideo} />
          <FontAwesomeIcon className="img" icon={faUserPlus} />
          <FontAwesomeIcon className="img" icon={faEllipsis} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
