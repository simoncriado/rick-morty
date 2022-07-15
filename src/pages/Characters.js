import React from "react";

import firebaseApp from "../firebase/credentials";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function Characters({ globalUser }) {
  return (
    <div className="mainPage">
      <button className="logoutButton" onClick={() => signOut(auth)}>
        Logout
      </button>
    </div>
  );
}

export default Characters;
