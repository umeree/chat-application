import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img
            src="https://res.cloudinary.com/dn5p6qvxn/image/upload/v1691901649/cam_fowhjl.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dn5p6qvxn/image/upload/v1691901649/add_hsmxty.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dn5p6qvxn/image/upload/v1691901649/more_njtoyj.png"
            alt=""
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
