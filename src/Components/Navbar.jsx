import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../Firebase";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Link-Up</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
