import React from "react";
import logo from "../assets/logo.jpeg";

import firebaseApp from "../firebase/credentials";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const auth = getAuth(firebaseApp);
const gProvider = new GoogleAuthProvider();

function Login() {
  function logInWithGoogle() {
    signInWithRedirect(auth, gProvider);
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={logInWithGoogle}>Login with Google</button>
    </div>
  );
}

export default Login;
