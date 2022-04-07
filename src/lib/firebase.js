import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//config

const config = {
  apiKey: "AIzaSyChchaFse6jw-M3T8EnyLFSEgBXEAX9yXc",
  authDomain: "instagram-clone-proyect.firebaseapp.com",
  projectId: "instagram-clone-proyect",
  storageBucket: "instagram-clone-proyect.appspot.com",
  messagingSenderId: "175811810714",
  appId: "1:175811810714:web:666c6f5eb1c778203cd623",
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = firebase.firestore;

export { firebase, FieldValue };
