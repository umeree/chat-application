import React from "react";
import "./style.scss";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Umery Chats</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Enter your e-mail" />
          <input type="password" placeholder="Enter your password" />

          <button>Sign in</button>
        </form>
        <p>You don't have account? Register </p>
      </div>
    </div>
  );
};

export default Login;
