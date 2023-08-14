import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Umery Chat</span>
      <div className="user">
        <img
          src="https://res.cloudinary.com/dn5p6qvxn/image/upload/v1691901649/addAvatar_orejdc.png"
          alt=""
        />
        <span>Umer</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
