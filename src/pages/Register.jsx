import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./style.scss";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Umery Chats</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
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
