import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../lib/firebase";
const usersRef = collection(db, "users");

export async function doesUsernameExist(username) {
  const result = query(usersRef, where("username", "==", username));
  const querySnapshot = await getDocs(result);
  return querySnapshot.docs.length !== 0;
}

export async function getUserObjByUserId(id) {
  const result = query(usersRef, where("userId", "==", id));
  const querySnapshot = await getDocs(result);

  return querySnapshot.docs.map((el) => el.data())[0];
}

export async function getSuggestedProfiles(userId) {
  const response = query(usersRef, orderBy("username"), limit(10));
  const querySnapshot = await getDocs(response);
  return querySnapshot.docs.map((el) => el.data())[0];
}
