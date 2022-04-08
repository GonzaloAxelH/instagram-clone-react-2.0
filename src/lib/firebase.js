//firebase v.9
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

//config
const config = {
  apiKey: "AIzaSyChchaFse6jw-M3T8EnyLFSEgBXEAX9yXc",
  authDomain: "instagram-clone-proyect.firebaseapp.com",
  projectId: "instagram-clone-proyect",
  storageBucket: "instagram-clone-proyect.appspot.com",
  messagingSenderId: "175811810714",
  appId: "1:175811810714:web:666c6f5eb1c778203cd623",
};
firebase.initializeApp(config);

const db = getFirestore();

export { db };
