// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdUcunl-nOjAt9JyeGYx2XpN3Z9SQ66Yo",
  authDomain: "rick-morty-a4016.firebaseapp.com",
  projectId: "rick-morty-a4016",
  storageBucket: "rick-morty-a4016.appspot.com",
  messagingSenderId: "239642027021",
  appId: "1:239642027021:web:59661562888520f354a144",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
