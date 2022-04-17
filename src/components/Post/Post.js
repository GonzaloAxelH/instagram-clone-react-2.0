import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import HeaderPost from "./HeaderPost";
import ImagePost from "../Images/ImagePost";
import PostActions from "../PostActions/PostActions";
import FooterPost from "../FooterPost/FooterPost";
import Comments from "../Comments/Comments";
export default function Post({ content }) {
  const commentInput = useRef(null);
  const handleFocus = () => {
    commentInput.current.focus();
  };

  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-16">
      <HeaderPost username={content.username} />
      <ImagePost src={content.imageSrc} caption={content.caption} />
      <FooterPost username={content.username} caption={content.caption} />
      <PostActions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Comments
        docId={content.docId}
        comments={content.comments}
        posted={content.dateCreated}
        commenInput={commentInput}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
  }),
};
