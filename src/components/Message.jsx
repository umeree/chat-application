import React from "react";

const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/17884240/pexels-photo-17884240/free-photo-of-man-people-industry-business.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/17884240/pexels-photo-17884240/free-photo-of-man-people-industry-business.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
