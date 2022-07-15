import React, { useState } from "react";

// Pages
import Login from "./pages/Login";
import Characters from "./pages/Characters";

// We import the app from firebase and the user data
import firebaseApp from "./firebase/credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
  const [globalUser, setGlobalUser] = useState(null);

  onAuthStateChanged(auth, (firebaseUser) => {
    // Check if login or logout
    if (firebaseUser) {
      setGlobalUser(firebaseUser);
    } else {
      setGlobalUser(null);
    }
  });

  return (
    <div className="app">
      {globalUser ? (
        <>
          {" "}
          <Characters globalUser={globalUser} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
