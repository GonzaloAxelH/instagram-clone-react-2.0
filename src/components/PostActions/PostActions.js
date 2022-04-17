import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserContext from "../../context/user";
import FirebaseContext from "../../context/firebase";
import { arrayRemove, arrayUnion, updateDoc, doc } from "firebase/firestore";
import HeartLike from "../Icons/HeartLike";
import CommentIcon from "../Icons/CommentIcon";

export default function PostActions({
  docId,
  totalLikes,
  likedPhoto,
  handleFocus,
}) {
  const {
    user: { userId = "" },
  } = useContext(UserContext);
  const [toggleLiked, setToggleLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes);
  const { db } = useContext(FirebaseContext);

  const handleToggleLiked = async () => {
    setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
    setToggleLiked(!toggleLiked);

    const photoRef = doc(db, "photos", docId);
    await updateDoc(photoRef, {
      likes: toggleLiked ? arrayRemove(docId) : arrayUnion(docId),
    });
  };
  return (
    <div>
      <div className="flex p-4">
        <HeartLike
          toggleLiked={toggleLiked}
          onClick={handleToggleLiked}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleToggleLiked();
            }
          }}
        />
        <CommentIcon
          onClick={handleFocus}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleFocus();
            }
          }}
        />
      </div>
      <div className="ml-4 mb-1">
        <p className="font-bold text-sm">
          {likes === 1 ? `${likes} like` : `${likes} likes`}
        </p>
      </div>
    </div>
  );
}

PostActions.propTypes = {
  docId: PropTypes.string.isRequired,
  totalLikes: PropTypes.number.isRequired,
  likedPhoto: PropTypes.bool.isRequired,
  handleFocus: PropTypes.func.isRequired,
};
