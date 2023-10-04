import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../Firebase";
import { AuthContext } from "../Context/AuthContext";

function Chats() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(Object.entries(chats));
  return (
    <div className="chats search1">
      {/* {Object.entries(chats)?.map((chat) => ( */}
      <div className="userChat">
        {/* <img src="https://i.goojara.to/tb_237_237243.jpg" alt="" /> */}
        <div className="userChatInfo">
          <span></span>
          <p></p>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default Chats;
