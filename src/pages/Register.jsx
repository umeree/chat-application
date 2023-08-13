import React from "react";
import "./style.scss";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Umery Chats</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your e-mail" />
          <input type="password" placeholder="Enter your password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img
              src="https://res.cloudinary.com/dn5p6qvxn/image/upload/v1691901649/addAvatar_orejdc.png"
              alt="avatar-icon"
            />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You have account? Login </p>
      </div>
    </div>
  );
};

export default Register;
