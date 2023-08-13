import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img
          src="https://res.cloudinary.com/dn5p6qvxn/image/upload/v1691901649/attach_haungp.png"
          alt=""
        />

        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img
            src="https://res.cloudinary.com/dn5p6qvxn/image/upload/v1691901649/img_sjrnws.png"
            alt=""
          />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
