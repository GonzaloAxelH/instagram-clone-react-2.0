import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
export async function doesUsernameExist(username) {
  const usersRef = collection(db, "users");
  const result = query(usersRef, where("username", "==", username));
  const querySnapshot = await getDocs(result);
  return querySnapshot.docs.length !== 0;
}
