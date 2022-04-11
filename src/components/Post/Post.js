import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import HeaderPost from "./HeaderPost";
import ImagePost from "../Images/ImagePost";
export default function Post({ content }) {
  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-16">
      <HeaderPost username={content.username} />
      <ImagePost src={content.imageSrc} caption={content.caption} />
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
