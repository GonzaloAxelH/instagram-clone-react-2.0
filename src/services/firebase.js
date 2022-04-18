import {
  collection,
  query,
  where,
  getDocs,
  limit,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../lib/firebase";
const usersRef = collection(db, "users");

export async function doesUsernameExist(username) {
  const result = query(usersRef, where("username", "==", username));
  const querySnapshot = await getDocs(result);
  return querySnapshot.docs.length !== 0;
}


export async function getUserObjByUserName(username) {
  const result = query(usersRef, where("username", "==", username));
  const querySnapshot = await getDocs(result);

  return querySnapshot.docs.map((el) => el.data())[0];
}
export async function getUserObjByUserId(id) {
  const result = query(usersRef, where("userId", "==", id));
  const querySnapshot = await getDocs(result);

  return querySnapshot.docs.map((el) => el.data())[0];
}

export async function getSuggestedProfiles({ userId, following }) {
  if (following) {
    const response = query(usersRef, limit(10));
    const querySnapshot = await getDocs(response);

    const profiles = querySnapshot.docs.map((user) => {
      return { ...user.data(), docId: user.id };
    });

    const filterProfiles = (allProfiles) => {
      return allProfiles.filter(
        (profile) =>
          profile.userId !== userId && !following.includes(profile.userId)
      );
    };

    return filterProfiles(profiles);
  }
  return false;
}

export const updateFollowing = async ({
  idUserLogged,
  idUserProfile,
  isFollow,
}) => {
  const userIdRef = doc(db, "users", idUserLogged);

  await updateDoc(userIdRef, {
    following: isFollow
      ? arrayRemove(idUserProfile)
      : arrayUnion(idUserProfile),
  });
};

export const updateFollows = async ({
  idUserLogged,
  idUserProfile,
  isFollow,
}) => {
  const userProfileIdRef = doc(db, "users", idUserProfile);

  await updateDoc(userProfileIdRef, {
    followers: isFollow ? arrayRemove(idUserLogged) : arrayUnion(idUserLogged),
  });
};

export const getPhotos = async (userId, following) => {
  const photosRef = collection(db, "photos");
  const response = query(photosRef, where("userId", "in", following));
  const querySnapshot = await getDocs(response);

  const Followersphotos = querySnapshot.docs.map((photo) => {
    return { ...photo.data(), docId: photo.id };
  });

  const photoWithdetails = await Promise.all(
    Followersphotos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const { username } = await getUserObjByUserId(photo.userId);
      return { username, ...photo, userLikedPhoto };
    })
  );

  return photoWithdetails;
};


